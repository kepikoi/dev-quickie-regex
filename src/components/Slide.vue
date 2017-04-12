<template>

    <div class="slide" :class="['slide-'+pageNr, isShown ? 'shown' : 'hidden' ]">
        <div class="container" :id="[isShown ? 'current':null]" ref="container">
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
        methods: {},
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
        mounted(){
         /*   jQuery(this.$el).find('pre').each(() => {
                const oldPre = jQuery(this);
                debugger;
                console.log(oldPre, jQuery(this).text())
             //   jQuery(this).text(oldPre.replace('/', '<span class="delim">/</span>'))
            })
*/
        }
    }
</script>
<style scoped lang="scss">
    @import "./slide";
</style>