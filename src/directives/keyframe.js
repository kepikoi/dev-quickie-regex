import Vue from 'vue'

Vue.directive('keyframe', {
    bind: (el, bind, vnode) => {
        el.style.opacity = '0.1';
        el.setAttribute("data-keyframe",undefined)
    },
    inserted: (el, bind, vnode) => {
        let myKeyframe = undefined;
        const childern = el.parentElement.children;
        let counter = 0;

        Array.from(childern).map(c => {
            if (c.hasAttribute('data-keyframe')) {
                counter++;
                if (c === el) {
                    myKeyframe = counter;
                }
            }
        });

        vnode.context.$store.subscribe((mutation, state) => {
            el.style.opacity = state.currentKeyframe >= myKeyframe ? '1' : '0.1';
        })
    },
    update: (el, bind, vnode) => {
    },
    componentUpdated: (el, bind, vnode) => {
    },
    unbind: (el, bind, vnode) => {

    }
});


