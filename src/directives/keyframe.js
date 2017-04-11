import Vue from 'vue'

Vue.directive('keyframe', {
    bind: (el, bind, vnode) => {
        el.style.display = 'none';
        el.setAttribute("data-keyframe",'')
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
            el.style.display = state.currentKeyframe >= myKeyframe ? 'block' : 'none';
        })
    },
    update: (el, bind, vnode) => {
    },
    componentUpdated: (el, bind, vnode) => {
    },
    unbind: (el, bind, vnode) => {

    }
});


