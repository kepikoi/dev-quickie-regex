<template>
    <nav id="navi">
        <div class="prev button" @click="_prevPage()">←</div>
        <div class="nr">
            {{pageNr}}
        </div>
        <div class="next button" @click="_nextPage()">→</div>

    </nav>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: 'Navi',
        data(){
            return {}
        },
        methods: Object.assign({}, mapActions(['nextPage', 'prevPage','nextKeyframe']), {
            _nextPage(){
                this.nextPage();
            },
            _prevPage(){
                this.prevPage();
            }
        }),
        computed: Object.assign({}, mapGetters(['page']), {
            isShown(){
                return this.page === this.pageNr;
            },
            pageNr($el){
                return this.page;
            }
        }),
        created()
        {
            window.addEventListener('keyup', keyboardEvent => {
                switch (keyboardEvent.code) {
                    case  'ArrowLeft':
                        this._prevPage();
                        break;
                    case'Space': //todo: erst keyframes abspielen
                       this.nextKeyframe();
                        break;
                    case  'ArrowRight':
                        this._nextPage();

                        break;
                }
            })

        }
    }

</script>
<style scoped lang="scss">
    @import "navi";
</style>