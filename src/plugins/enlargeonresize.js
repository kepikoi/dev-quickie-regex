import {CHANGE_PAGE} from '../store/types';

export default {
    install (Vue, options) {

        document.addEventListener("DOMContentLoaded", (event) => {

            const current = document.getElementById('current');

            //do not use the whole window height
            const getWindowHeight = () => window.innerHeight * 0.8;
            const getContainerHeight = () => current.offsetHeight;

            const grow = () => getContainerHeight() < getWindowHeight();
            //sould be significantly bigger then window height
            const shrink = () => getContainerHeight() > getWindowHeight();

            const resize = (comparisson, factor) => {
                //max steps per animations
                let maxFrames = 0;

                //start animation
                let animation = setInterval(() => {
                    console.log("getWindowHeight", getWindowHeight(), "getContainerHeight", getContainerHeight(),comparisson.name,factor);
                    let baseSize = parseFloat(jQuery('body').css('font-size'));
                    if (maxFrames++ > 100) {
                        //something hangs, kill the animation!
                        clearInterval(animation)
                    }
                    else if (comparisson()) {
                        //compare & apply factor to font size
                        baseSize *= factor;
                        jQuery('body').css('font-size', `${baseSize}px`);
                    } else {
                        clearInterval(animation)
                    }
                }, 5);

            };

            const fireListener = () => {
                if (grow()) {
                    //grow
                    resize(grow, 1.2);
                }
                else if (shrink()) {
                    //shrink
                    resize(shrink, 0.8);
                }
            };

            //on resize
            window.onresize = () => fireListener();

            //on dom ready
            fireListener();

            //on change page
            // Vue.$store.subscribe(CHANGE_PAGE, () => {
            //     console.log("df");
            //     fireListener()
            // })

        });


    }
}
