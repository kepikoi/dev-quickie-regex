const Rx = require("rxjs/Rx");

//max vmax
const max = 5;
//vmax resize stepping
const step = 0.25;


export default {
    install (Vue, options) {

        const fireListener = () => {
            const current = document.getElementById('current');

            //do not use the whole window height
            function getBoundsHeight() {
                return document.getElementById('slides').clientHeight
            }

            function getContainerHeight() {
                return current.offsetHeight
            }


            const end = interval => {
                console.log("clearing interval  ");
                clearInterval(interval);
                console.groupEnd("resize")
            };

            const resize = () => {
                //max steps per animations
                let maxFrames = 0;
                let vmax = 1;

                console.group("resize");

                //start animation
                const interval = setInterval(() => {

                    console.log("getBoundsHeight", getBoundsHeight(), "getContainerHeight", getContainerHeight(), "vmax", vmax);

                    if (maxFrames++ > 100) {
                        //something happened.. kill the animation!
                        end(interval);
                    }

                    vmax += step;
                    document.getElementById('slides').style.fontSize = `${vmax}vmax`

                    if (getContainerHeight() >= getBoundsHeight()) {
                        vmax -= step;
                        document.getElementById('slides').style.fontSize = `${vmax}vmax`

                        end(interval);
                    }
                    else if (vmax >= max) {
                        end(interval);
                    }

                }, 30)
            };

            resize();
        };

        const resizeSource = Rx.Observable.fromEvent(window, 'resize')
            .debounce(() => Rx.Observable.timer(300));

        const domReadySource = Rx.Observable.fromEvent(document, 'DOMContentLoaded');

        const resizeSubscription = x => {
            fireListener();
        };

        resizeSource.subscribe(resizeSubscription);
        domReadySource.subscribe(resizeSubscription);

    }
}
