<template>
    <div id="presi">
        <slides></slides>
        <navi></navi>
    </div>
</template>

<script>
    import Slides from '@/components/Slides'
    import Navi from '@/components/navi'

    export default {
        name: 'Presi',
        data () {
            return {}
        },
        components: {
            Slides,
            Navi
        },
        computed: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "presi";
</style>
