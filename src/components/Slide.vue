<template>

    <div class="slide" :class="['slide-'+pageNr, isShown ? 'shown' : 'hidden' ]">
        <div class="container">
            <slot>
            </slot>
        </div>
        <nav class="pager">
            <div class="prev button" @click="_prevPage()">prev</div>
            <div class="nr">
                {{pageNr}}
            </div>
            <div class="next button" @click="_nextPage()">next</div>

        </nav>
    </div>

</template>
<script>
    import {mapGetters, mapActions} from 'vuex';
    export default {
        name: 'Slide',
        data(){
            return {}
        },
        props: {},
        methods: Object.assign({}, mapActions(['nextPage', 'prevPage']), {
            _nextPage(){
                this.nextPage();
            },
            _prevPage(){
                this.prevPage();
            }
        }),
        computed: Object.assign({},mapGetters(['page']),{
            isShown(){
                return this.page === this.pageNr;
            },
            pageNr($el){
                return this.$parent.$children.findIndex(e => {
                        return e === $el
                    }) + 1;
            }
        })
    }
</script>
<style scoped lang="scss">
    @import "./slide";
</style>