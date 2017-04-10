<template>
    <div id="slides">
        <Slide>

            <h1>Bool 🖖🏻 or what</h1>
            <img src="../assets/logo.png">

            <ul>
                <li>
                    State

                </li>
                <li>
                    Cool

                </li>
                <li>
                    Pro-fit

                </li>
            </ul>

            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                 </p>

        </Slide>
        <Slide>
            Slide 2


        </Slide>
        <Slide>
            Slide 3


        </Slide>
    </div>
</template>

<script>
    import Slide from '@/components/Slide'

    export default {
        name: 'Slides',
        data () {
            return {
                currentPage: 0
            }
        },
        components: {
            Slide
        },
        computed: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "./slides";
</style>
