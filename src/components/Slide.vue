<template>

    <div class="slide" :class="['slide-'+pageNr, isShown ? 'shown' : 'hidden' ]">
        <div class="container" :id="[isShown ? 'current':null]">
            <slot>
            </slot>
        </div>
    </div>

</template>
<script>
    import {mapGetters, mapActions} from 'vuex';
    import {NEXT_KEYFRAME} from '../store/types';

    export default {
        name: 'Slide',
        data(){
            return {}
        },
        props: {},
        methods: {
        },
        computed: Object.assign({}, mapGetters(['page']), {
            isShown(){
                return this.page === this.pageNr;
            },
            pageNr($el){
                return this.$parent.$children.findIndex(e => {
                        return e === $el
                    }) + 1;
            }

        }),
        created(){
            /*this.$store.watch((mutation, state) => {
                this.enableKeyframe(state.currentKeyframe);
            })*/
        }
    }
</script>
<style scoped lang="scss">
    @import "./slide";
</style>