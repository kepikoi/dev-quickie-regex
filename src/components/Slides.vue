<template>
    <div id="slides">
        <Slide>
            <h1>Dev.Quickie:</h1>
            <img src="../assets/regex.png" alt="^RegEx$">
        </Slide>
        <Slide>
            <h1>Parlez-vous Regular Expressions?</h1>

            <pre>/^#?([a-f0-9]{6}|[a-f0-9]{3})$/m</pre>

            <p v-keyframe>
                Eine Zeichenkette die die genaue Ortung von Textmustern in einem String erlaubt
            </p>
            <ul v-keyframe>
                <li>Validierung</li>
                <li>Datenextraktion</li>
                <li>Manipulation von Daten</li>
            </ul>
        </Slide>
        <Slide>
            <h1>Aufbau einer Regular Expression</h1>
            <img src="../assets/structure.png" alt="Aufbau einer Regular Expression">
            <br>
            <p class="block">


                <b class="red">Delimiters</b> beschreiben den Anfang und Ende einer Expression <br>
                <b class="cyan">Pattern</b> die Logik / Muster der Expression <br>
                <b class="orange">Flags/Modifiers</b> Modifikationen des Musterungsverhaltens
            </p>

        </Slide>

        <Slide>
            <h1>Das erste Pattern</h1>
            <pre>/Klein/</pre>
            <ul>
                <li class="match">Kleintransporter</li>
                <li class="match">Calvin Klein</li>
                <li class="mismatch">deschutes</li>
            </ul>
            <p>
                match den kompletten String sobald das Pattern mindestens einmal vorkommt
            </p>
        </Slide>
        <Slide>
            <h1><b>OR</b> Operator</h1>
            <pre>/http|https/</pre>
            <ul>
                <li class="match">http://enum.org</li>
                <li class="match">https://www.google.com</li>
                <li class="mismatch">www.icymi.co.uk</li>
                <li class="match">immer Ärger mit httpeter</li>
            </ul>
            <p>
                <span class="pre">|</span> matcht mehrere String Varianten in einem Pattern
            </p>
        </Slide>
        <Slide>
            <h1><b>PLUS</b> Quantifier</h1>
            <pre>/Dreier+/</pre>
            <ul>
                <li class="match">Dreier</li>
                <li class="match">Dreierrr</li>
                <li class="match">Dreierrrrrrr</li>
            </ul>
            <p>
                <span class="pre">+</span> matcht das Zeichen 1 bis unendlich oft
            </p>
        </Slide>

        <Slide>
            <h1>Escapes und besondere Zeichen</h1>

            <pre>\.+\</pre>
            <ul>
                <li class="match">...</li>
                <li class="match">Yay!</li>
            </ul>
            <p>
                <span class="pre">.</span> matcht jedes beliebige Zeichen ("Wildcard")
            </p>

            <pre>\\.+\</pre>
            <ul>
                <li class="match">...</li>
                <li class="mismatch">Yay!</li>
            </ul>
            <p>
                <span class="pre">\</span> "escaped" das nachfolgende Zeichen.
            </p>


        </Slide>
        <Slide>
            <h1>Escapes und besondere Zeichen (2)</h1>
            <p>
                Alle Zeichen die in RegEx besondere Bedeutung haben, müssen escaped werden sie im zu matchenden String vorkommen.
            </p>
            <ul>
                <li><span class="pre">\\.\</span></li>
                <li><span class="pre">\\*\</span></li>
                <li><span class="pre">\\\\</span></li>
                <li><span class="pre">\\(\|\)\</span></li>
                <li>...</li>
            </ul>
            <p>
                Andernfalls werden sie als Teil der Expression Logik Verstanden und können Syntaxfehler verursachen
            </p>

        </Slide>


        <Slide>
            <h1>Ranges</h1>
            <pre>/[a-z]+/</pre>
            <ul>
                <li class="match">quick</li>
                <li class="match">start</li>
                <li class="match">abc</li>
                <li class="mismatch">Erbe</li>
                <li class="mismatch">von sich aus</li>
            </ul>
            <p>
                matcht jeden Buchstaben innerhalb der Range
            </p>
        </Slide>

        <Slide>
            <h1>Ranges (2)</h1>
            <pre>/[a-zA-Z0-9\s]+/</pre>
            <ul>
                <li class="match">Was 1 Tag</li>
                <li class="mismatch">Eine Hand wäscht die Andere</li>
            </ul>
            <p>Umlaute müssen als Unicode angegeben werden</p>
            <img src="../assets/umlauts.jpg" width="50%" alt="Umlauts">
        </Slide>
        <Slide>
            <h1>Ranges (3)</h1>
            <pre>/[^\d]/</pre>
            <ul>
                <li class="mismatch">123</li>
                <li class="match">abc</li>
            </ul>

            <p>
                voranstehedes <span class="pre">^</span> negiert die Bedeutung des Patterns
            </p>

        </Slide>
        <Slide>
            <h1>
                Metacharacters
            </h1>
            <ul>
                <li>
                    <span class="pre">\s</span>
                    whitespace character (" ")






                </li>
                <li>
                    <span class="pre">\w</span>
                    word character - entspricht [a-zA-Z0-9]






                </li>
                <li>
                    <span class="pre">\d</span>
                    any digit - entspricht [0-9]






                </li>
                <li><span class="pre">\b</span> word boundary (z.B. <span class="pre">/\b\w+\b/</span> nur ganze Wörter)






                </li>


            </ul>
            <p v-keyframe>grossgeschriebene Metacharacter negieren ihre Bedeutung</p>

            <ul v-keyframe>
                <li><span class="pre">\S</span> alle Character ausser whitespace</li>
                <li><span class="pre">\W</span> alle Zeichen ausser \w</li>
                <li><span class="pre">\D</span> alles ausser Zahlen</li>
                <li><span class="pre">\B</span> ausser am Wortanfang oder -ende</li>
            </ul>

        </Slide>
        <!-- <Slide>
             <h1>Metacharacters (2)</h1>

             <table>
                 <tr>
                     <th>RegEx</th>
                     <th>Beispiel</th>
                 </tr>
                 <tr>
                     <td><span class="pre">/\s/</span></td>
                     <td>
                         <ul>
                             <li class="match">one more time</li>
                             <li class="mismatch">celebrate</li>
                         </ul>
                     </td>
                 </tr>
                 <tr>
                     <td><span class="pre">\w</span></td>
                     <td>
                         <ul>
                             <li class="match">Chuck</li>
                             <li class="mismatch">1337</li>
                         </ul>
                     </td>
                 </tr>
                 <tr>
                     <td><span class="pre">\d</span></td>
                     <td>
                         <ul>
                             <li class="match"></li>
                             <li class="mismatch"></li>
                         </ul>
                     </td>
                 </tr>
                 <tr>
                     <td><span class="pre">\b</span></td>
                     <td>
                         <ul>
                             <li class="match"></li>
                             <li class="mismatch"></li>
                         </ul>
                     </td>
                 </tr>

             </table>

         </Slide>
         <Slide>
             <h1>Metacharacters (3)</h1>

             <table>
                 <tr>
                     <th>Negierte Metacharacters</th>
                     <th>Beispiel</th>
                 </tr>

                 <tr>
                     <td><span class="pre">\S</span></td>
                     <td>
                         <ul>
                             <li class="match"></li>
                             <li class="mismatch"></li>
                         </ul>
                     </td>
                 </tr>
                 <tr>
                     <td><span class="pre">\W</span></td>
                     <td>
                         <ul>
                             <li class="match"></li>
                             <li class="mismatch"></li>
                         </ul>
                     </td>
                 </tr>
                 <tr>
                     <td><span class="pre">\D</span></td>
                     <td>
                         <ul>
                             <li class="match"></li>
                             <li class="mismatch"></li>
                         </ul>
                     </td>
                 </tr>
                 <tr>
                     <td><span class="pre">\B</span></td>
                     <td>
                         <ul>
                             <li class="match"></li>
                             <li class="mismatch"></li>
                         </ul>
                     </td>
                 </tr>
             </table>

         </Slide>-->


        <Slide>
            <h1>
                Modifier <b>Insensitive</b>
            </h1>

            <pre>/signal/i</pre>
            <ul>
                <li class="match">signal</li>
                <li class="match">Signal</li>
            </ul>
            <p>
                Modifier <span class="pre">i</span> ignoriert beim matching die Groß- und Kleinschreibung des Strings
            </p>

        </Slide>
        <Slide>
            <h1>Modifier <b>Global</b></h1>
            <pre>/Dumpty/g</pre>
            <p class="block">
                Humpty <span class="match">Dumpty</span> sat on a wall, <br>
                Humpty <span class="match">Dumpty</span> had a great fall;
            </p>
            <p>
                modifier <span class="pre">g</span> erlaubt mehrere treffer pro Pattern
            </p>
        </Slide>
        <Slide>
            <h1>Modifier <b>Multiline</b></h1>
            <pre>/^[0-9]{5}\s\w+$/m</pre>

            <ul>
                <li class="match">85748 Garching</li>
                <li class="mismatch">D-85748 Garching bei München</li>
            </ul>

            <p>
                modifier <span class="pre">m</span> prüft das Pattern ausschließlich zwischen den Anchors
            </p>


            <table>
                <tr>
                    <th>Anchor</th>
                    <th>Beschreibung</th>
                </tr>
                <tr>
                    <td>^</td>
                    <td>Anfang des Patterns</td>
                </tr>
                <tr>
                    <td>$</td>
                    <td>Ende des Patterns</td>
                </tr>
            </table>

            <p class="info">nicht zu verwechseln mit dem Negierungszeichen <span class="pre">^</span></p>

            <p class="info">man kann beliebige modifier miteinander kombinieren</p>

        </Slide>
        <Slide>
            <h1>Quantifiers</h1>

            <table>
                <tr>
                    <td>
                        <pre>/^[a-z]{3}$/m</pre>

                    </td>
                    <td>
                        <ul>
                            <li class="match">zip</li>
                            <li class="mismatch">zippers</li>
                        </ul>
                    </td>

                </tr>
                <tr>
                    <td>
                        <pre>/^[a-z]{3,}$/im</pre>

                    </td>
                    <td>

                        <ul>
                            <li class="match">zip</li>
                            <li class="match">Zippers</li>
                        </ul>
                    </td>

                </tr>
                <tr>
                    <td>
                        <pre>/^089-[0-9]{6-9}$/m</pre>

                    </td>
                    <td>

                        <ul>
                            <li class="mismatch">089-12345</li>
                            <li class="match">089-123456</li>
                            <li class="mismatch">089-1234567890</li>
                        </ul>
                    </td>
                </tr>
            </table>

            <p>quantifiers bestimmen wie oft ein Zeichenmuster im String vorkommen darf</p>


        </Slide>
        <Slide>
            <h1>Weitere Qunatifiers</h1>

            <pre>/(very)?\s?(kind)?\s?regards/i</pre>
            <ul>
                <li class="match">Kind Regards</li>
                <li class="match">regards</li>
            </ul>

            <table>
                <tr>
                    <th>Quantifier</th>
                    <th>Bedeutung</th>
                </tr>
                <tr>
                    <td><span class="pre">{}</span></td>
                    <td> n, >n oder >n&ltm </td>
                </tr>
                <tr>
                    <td><span class="pre">+</span></td>
                    <td>1 oder >1</td>
                </tr>
                <tr>
                    <td><span class="pre">*</span></td>
                    <td>0 oder >0</td>
                </tr>
                <tr>
                    <td><span class="pre">?</span></td>
                    <td>0 oder 1</td>
                </tr>
            </table>

            <p>
                neben <span class="pre">+</span> und <span class="pre">{min,max}</span>
                existieren weitere quantifiers um die Anzahl der zu matchenden Stellen zu bestimmen

            </p>
        </Slide>
        <Slide>
            <h1>Matching Gruppen</h1>

            <pre>/^www\.([\w]+\.co(m|\.uk)?)$/gmi</pre>
            <ul>
                <li class="match">www.medium.com</li>
                <li class="match">www.telegraph.co.uk</li>
                <li class="match">www.go.co</li>
            </ul>

            <p>
                Um einen String in Teilergebnisse zu splitten, bedient man sich der matching Groups.
                Gruppen dürfen mit quantifiers versehen werden
            </p>
            <p class="info">
                Die Teilergebnisse der oberen Besipiele sind ihre Hostnames (medium.com)
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