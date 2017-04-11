<template>
    <div id="slides">
        <Slide>
            <h1>Dev.Quickie:^Regex$</h1>
            <img src="../assets/logo.png" alt="Regular Expressions">
        </Slide>
        <Slide>
            <h1>Quo Vadis Regular Expressions?</h1>
            <br>
            <p v-keyframe>
                Regeln die genaue Ortung und Extraktion von Textmustern in einem String erlauben
            </p>
            <ul v-keyframe>
                <li>Validierung von Daten</li>
                <li>Suche nach Daten</li>
                <li>Datenmanipulation</li>
            </ul>
        </Slide>
        <Slide>
            <h1>
                Häufige Tokens
            </h1>
           <ul>
               <li v-keyframe>
                   <pre>\w</pre> any word character
               </li>
               <li v-keyframe>
                   <pre>\d</pre> any digit
               </li>
               <li v-keyframe>
                   <pre>\s</pre> any whitespace character
               </li>
           </ul>
        </Slide>

        <Slide>
            Slide 3
        </Slide>
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

            <pre>
$(document).ready(function() {
    $('#myselector').change(function(){
        $('.statecontent').hide();
        $('#' + $(this).val()).show();
    });
});
            </pre>
            <p>
                I'am new to jquery and maybe this is a stupid question but I have searched for an answer just about everywhere without finding one. So, here we go:
            </p>
        </Slide>

    </div>
</template>
<script>
    import Slide from '@/components/Slide'

    export default {
        name: 'Slides',
        data(){
            return {}
        },
        components: {
            Slide
        }
    }
</script>
<style scoped lang="scss">
    @import "./slides";
</style>