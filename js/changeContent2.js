function changePtSummary() {
  let element = document.getElementById("text_summary");
  let newContent = `
            <img src="./was-were-to-be-past-tense.gif" width="400" height="400" alt="verb to be in the past"/>

            <!--START OF VERBS & WORDS-->
        <button
          type="button"
          class="btn btn-warning"
          href="#"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Verbs & Words
        </button>
        <!-- START OF MODAL VERBS & WORDS-->
        <!-- START OF MODAL VERBS & WORDS-->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Verbs and Words - 01 <span><img
                                        src="../../../images/audio.png" style="width:25px;height:25px"></span></h5><br>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <audio id="v1" src="../licoes/audio/licao2/Obrigatorio/Verbs/1.mp3" type="audio/mpeg"></audio>
                    <audio id="v2" src="../licoes/audio/licao2/Obrigatorio/Verbs/2.mp3" type="audio/mpeg"></audio>
                    <audio id="v3" src="../licoes/audio/licao2/Obrigatorio/Verbs/3.mp3" type="audio/mpeg"></audio>
                    <audio id="v4" src="../licoes/audio/licao2/Obrigatorio/Verbs/4.mp3" type="audio/mpeg"></audio>
                    <audio id="v5" src="../licoes/audio/licao2/Obrigatorio/Verbs/5.mp3" type="audio/mpeg"></audio>
                    <audio id="v6" src="../licoes/audio/licao2/Obrigatorio/Verbs/6.mp3" type="audio/mpeg"></audio>
                    <audio id="v7" src="../licoes/audio/licao2/Obrigatorio/Verbs/7.mp3" type="audio/mpeg"></audio>
                    <audio id="v8" src="../licoes/audio/licao2/Obrigatorio/Verbs/8.mp3" type="audio/mpeg"></audio>
                    
                    <table class="table">
                        <thead>
                            <tr><span class="vermelho">VERBS</span></tr>
                            <tr>

                                <th scope="col">Verbs </th>
                                <th scope="col">3° Person</th>
                                <th scope="col">Past</th>
                                <th scope="col">Translation </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span class="frases cyan" onclick="play(v1)"> To jump</span></td>
                                <td>jumps</td>
                                <td>jumped</td>
                                <td>Pular</td>

                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(v2)"> To keep</span></td>
                                <td>keeps</td>
                                <td>kept</td>
                                <td>Manter</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(v3)"> To kiss</span></td>
                                <td>kisses</td>
                                <td>kissed</td>
                                <td>Beijar</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(v4)"> To know</span></td>
                                <td>knows</td>
                                <td>knew</td>
                                <td>Saber, conhecer</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(v5)"> To learn<span></td>
                                <td>learned /learnt</td>
                                <td>learned /learnt</td>s
                                <td>Aprender</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(v6)"> To lend<span></td>
                                <td>lent</td>
                                <td>lent</td>
                                <td>Emprestar</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(v7)"> To like<span></td>
                                <td>liked</td>
                                <td>liked</td>
                                <td>Gostar</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(v8)"> To listen<span></td>
                                <td>listened</td>
                                <td>listened</td>
                                <td>Ouvir</td>
                            </tr>
                            
                        </tbody>
                    </table>

                    <audio id="w1" src="../licoes/audio/licao2/Obrigatorio/Words/1.mp3" type="audio/mpeg"></audio>
                    <audio id="w2" src="../licoes/audio/licao2/Obrigatorio/Words/2.mp3" type="audio/mpeg"></audio>
                    <audio id="w3" src="../licoes/audio/licao2/Obrigatorio/Words/3.mp3" type="audio/mpeg"></audio>
                    <audio id="w4" src="../licoes/audio/licao2/Obrigatorio/Words/4.mp3" type="audio/mpeg"></audio>
                    <audio id="w5" src="../licoes/audio/licao2/Obrigatorio/Words/5.mp3" type="audio/mpeg"></audio>
                    <audio id="w6" src="../licoes/audio/licao2/Obrigatorio/Words/6.mp3" type="audio/mpeg"></audio>
                    <audio id="w7" src="../licoes/audio/licao2/Obrigatorio/Words/7.mp3" type="audio/mpeg"></audio>
                    <audio id="w8" src="../licoes/audio/licao2/Obrigatorio/Words/8.mp3" type="audio/mpeg"></audio>
                    <audio id="w9" src="../licoes/audio/licao2/Obrigatorio/Words/9.mp3" type="audio/mpeg"></audio>
                    <audio id="w10" src="../licoes/audio/licao2/Obrigatorio/Words/10.mp3" type="audio/mpeg"></audio>
                    <audio id="w11" src="../licoes/audio/licao2/Obrigatorio/Words/11.mp3" type="audio/mpeg"></audio>
                    <audio id="w12" src="../licoes/audio/licao2/Obrigatorio/Words/12.mp3" type="audio/mpeg"></audio>
                    <audio id="w13" src="../licoes/audio/licao2/Obrigatorio/Words/13.mp3" type="audio/mpeg"></audio>
                    <audio id="w14" src="../licoes/audio/licao2/Obrigatorio/Words/14.mp3" type="audio/mpeg"></audio>
                    <audio id="w15" src="../licoes/audio/licao2/Obrigatorio/Words/15.mp3" type="audio/mpeg"></audio>
                    <audio id="w16" src="../licoes/audio/licao2/Obrigatorio/Words/16.mp3" type="audio/mpeg"></audio>
                    <audio id="w17" src="../licoes/audio/licao2/Obrigatorio/Words/17.mp3" type="audio/mpeg"></audio>
                    <audio id="w18" src="../licoes/audio/licao2/Obrigatorio/Words/18.mp3" type="audio/mpeg"></audio>
                    <audio id="w19" src="../licoes/audio/licao2/Obrigatorio/Words/19.mp3" type="audio/mpeg"></audio>
                    <audio id="w20" src="../licoes/audio/licao2/Obrigatorio/Words/20.mp3" type="audio/mpeg"></audio>
                    <audio id="w21" src="../licoes/audio/licao2/Obrigatorio/Words/21.mp3" type="audio/mpeg"></audio>
                    <audio id="w22" src="../licoes/audio/licao2/Obrigatorio/Words/22.mp3" type="audio/mpeg"></audio>
                    <audio id="w23" src="../licoes/audio/licao2/Obrigatorio/Words/23.mp3" type="audio/mpeg"></audio>
                    <audio id="w24" src="../licoes/audio/licao2/Obrigatorio/Words/24.mp3" type="audio/mpeg"></audio>
                    <audio id="w25" src="../licoes/audio/licao2/Obrigatorio/Words/25.mp3" type="audio/mpeg"></audio>
                    <audio id="w26" src="../licoes/audio/licao2/Obrigatorio/Words/26.mp3" type="audio/mpeg"></audio>
                    <audio id="w27" src="../licoes/audio/licao2/Obrigatorio/Words/27.mp3" type="audio/mpeg"></audio>
                    <audio id="w28" src="../licoes/audio/licao2/Obrigatorio/Words/28.mp3" type="audio/mpeg"></audio>
                    <audio id="w29" src="../licoes/audio/licao2/Obrigatorio/Words/29.mp3" type="audio/mpeg"></audio>
                    <audio id="w30" src="../licoes/audio/licao2/Obrigatorio/Words/30.mp3" type="audio/mpeg"></audio>
                    <audio id="w31" src="../licoes/audio/licao2/Obrigatorio/Words/31.mp3" type="audio/mpeg"></audio>
                    <audio id="w32" src="../licoes/audio/licao2/Obrigatorio/Words/32.mp3" type="audio/mpeg"></audio>
                    <audio id="w33" src="../licoes/audio/licao2/Obrigatorio/Words/33.mp3" type="audio/mpeg"></audio>
                    <audio id="w34" src="../licoes/audio/licao2/Obrigatorio/Words/34.mp3" type="audio/mpeg"></audio>
                    <audio id="w35" src="../licoes/audio/licao2/Obrigatorio/Words/35.mp3" type="audio/mpeg"></audio>
                    <audio id="w36" src="../licoes/audio/licao2/Obrigatorio/Words/36.mp3" type="audio/mpeg"></audio>
                    <audio id="w37" src="../licoes/audio/licao2/Obrigatorio/Words/37.mp3" type="audio/mpeg"></audio>
                    <audio id="w38" src="../licoes/audio/licao2/Obrigatorio/Words/38.mp3" type="audio/mpeg"></audio>
                    <audio id="w39" src="../licoes/audio/licao2/Obrigatorio/Words/39.mp3" type="audio/mpeg"></audio>
                    <audio id="w40" src="../licoes/audio/licao2/Obrigatorio/Words/40.mp3" type="audio/mpeg"></audio>
                    <table class="table">
                        <thead>
                            <tr><span class="vermelho">WORDS</span></tr>
                            <tr>

                                <th scope="col">Words </th>
                                <th scope="col"> </th>
                                <th scope="col">Words </th>
                                <th scope="col"> </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w1)"> Baby</span></td>
                                <td>bebê</td>
                                <td><span class="frases cyan" onclick="play(w2)"> Floor</span></td>
                                <td>chão</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w3)"> Keys</span></td>
                                <td>chaves</td>
                                <td><span class="frases cyan" onclick="play(w4)"> Car</span></td>
                                <td>carro</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w5)"> Money</span></td>
                                <td>dinheiro</td>
                                <td><span class="frases cyan" onclick="play(w6)"> Really</span></td>
                                <td>realmente, sério</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w7)"> Heart</span></td>
                                <td>coração</td>
                                <td><span class="frases cyan" onclick="play(w8)"> Apple</span></td>
                                <td>maça</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w9)"> City</span></td>
                                <td>cidade</td>
                                <td><span class="frases cyan" onclick="play(w10)"> House</span></td>
                                <td>casa</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w11)"> Park</span></td>
                                <td>parque</td>
                                <td><span class="frases cyan" onclick="play(w12)"> Yesterday</span></td>
                                <td>ontem</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w13)"> Last</span></td>
                                <td>último(a)</td>
                                <td><span class="frases cyan" onclick="play(w14)"> Married</span></td>
                                <td>casado(a)</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w15)"> Tired</span></td>
                                <td>cansado(a)</td>
                                <td><span class="frases cyan" onclick="play(w16)"> Tall</span></td>
                                <td>alto(a)</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w17)"> Happy</span></td>
                                <td>Feliz</td>
                                <td><span class="frases cyan" onclick="play(w18)"> Brave</span></td>
                                <td>corajoso(a)</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w19)"> Clever</span></td>
                                <td>inteligente</td>
                                <td><span class="frases cyan" onclick="play(w20)"> easy-going</span></td>
                                <td>fácil de lidar</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w21)"> Friendly</span></td>
                                <td>amigável</td>
                                <td><span class="frases cyan" onclick="play(w22)"> Funny</span></td>
                                <td>engraçado(a)</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w23)"> Hard-working</span></td>
                                <td>trabalhador(a)</td>
                                <td><span class="frases cyan" onclick="play(w24)"> Honest</span></td>
                                <td>honesto(a)</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w25)"> Lazy</span></td>
                                <td>preguiçoso(a)</td>
                                <td><span class="frases cyan" onclick="play(w26)"> Moody</span></td>
                                <td>mal-humorado(a)</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w27)"> Polite</span></td>
                                <td>educado(a)</td>
                                <td><span class="frases cyan" onclick="play(w28)"> Nervous</span></td>
                                <td>nervoso(a)</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w29)"> Quite</span></td>
                                <td>quieto(a)</td>
                                <td><span class="frases cyan" onclick="play(w30)"> shy</span></td>
                                <td>tímido(a)</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w31)"> Creative</span></td>
                                <td>criativo(a)</td>
                                <td><span class="frases cyan" onclick="play(w32)"> Impulsive</span></td>
                                <td>impulsivo(a)</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w33)"> Big</span></td>
                                <td>grande</td>
                                <td><span class="frases cyan" onclick="play(w34)"> Hours</span></td>
                                <td>horas</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w35)"> Birthday</span></td>
                                <td>aniversário</td>
                                <td><span class="frases cyan" onclick="play(w36)"> Little</span></td>
                                <td>pouco</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w37)"> Small</span></td>
                                <td>pequeno</td>
                                <td><span class="frases cyan" onclick="play(w38)"> Favourite</span></td>
                                <td>favorito</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w39)"> Just</span></td>
                                <td>só</td>
                                <td><span class="frases cyan" onclick="play(w40)"> Age</span></td>
                                <td>idade</td>

                            </tr>

                        </tbody>
                    </table>    
                        </div>
                    </div>
                </div>
            </div>
            <!-- END OF MODAL -->
            
                `;

  //changing the content in your element
  element.innerHTML = newContent;
}
function changeEnSummary() {
  let element = document.getElementById("text_summary");
  let newContent = `
        <img src="./to-be-present-tense.gif" width="400" height="400" alt="Verb To Be - Grammar">
        
        <!--START OF VERBS & WORDS-->
        <button
          type="button"
          class="btn btn-warning"
          href="#"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Verbs & Words
        </button>
        <!-- START OF MODAL VERBS & WORDS-->
        <!-- START OF MODAL VERBS & WORDS-->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Verbs and Words - 01 <span><img
                                        src="../../../images/audio.png" style="width:25px;height:25px"></span></h5><br>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <audio id="v1" src="../licoes/audio/licao2/Obrigatorio/Verbs/1.mp3" type="audio/mpeg"></audio>
                    <audio id="v2" src="../licoes/audio/licao2/Obrigatorio/Verbs/2.mp3" type="audio/mpeg"></audio>
                    <audio id="v3" src="../licoes/audio/licao2/Obrigatorio/Verbs/3.mp3" type="audio/mpeg"></audio>
                    <audio id="v4" src="../licoes/audio/licao2/Obrigatorio/Verbs/4.mp3" type="audio/mpeg"></audio>
                    <audio id="v5" src="../licoes/audio/licao2/Obrigatorio/Verbs/5.mp3" type="audio/mpeg"></audio>
                    <audio id="v6" src="../licoes/audio/licao2/Obrigatorio/Verbs/6.mp3" type="audio/mpeg"></audio>
                    <audio id="v7" src="../licoes/audio/licao2/Obrigatorio/Verbs/7.mp3" type="audio/mpeg"></audio>
                    <audio id="v8" src="../licoes/audio/licao2/Obrigatorio/Verbs/8.mp3" type="audio/mpeg"></audio>
                    
                    <table class="table">
                        <thead>
                            <tr><span class="vermelho">VERBS</span></tr>
                            <tr>

                                <th scope="col">Verbs </th>
                                <th scope="col">3° Person</th>
                                <th scope="col">Past</th>
                                <th scope="col">Translation </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span class="frases cyan" onclick="play(v1)"> To jump</span></td>
                                <td>jumps</td>
                                <td>jumped</td>
                                <td>Pular</td>

                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(v2)"> To keep</span></td>
                                <td>keeps</td>
                                <td>kept</td>
                                <td>Manter</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(v3)"> To kiss</span></td>
                                <td>kisses</td>
                                <td>kissed</td>
                                <td>Beijar</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(v4)"> To know</span></td>
                                <td>knows</td>
                                <td>knew</td>
                                <td>Saber, conhecer</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(v5)"> To learn<span></td>
                                <td>learned /learnt</td>
                                <td>learned /learnt</td>s
                                <td>Aprender</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(v6)"> To lend<span></td>
                                <td>lent</td>
                                <td>lent</td>
                                <td>Emprestar</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(v7)"> To like<span></td>
                                <td>liked</td>
                                <td>liked</td>
                                <td>Gostar</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(v8)"> To listen<span></td>
                                <td>listened</td>
                                <td>listened</td>
                                <td>Ouvir</td>
                            </tr>
                            
                        </tbody>
                    </table>

                    <audio id="w1" src="../licoes/audio/licao2/Obrigatorio/Words/1.mp3" type="audio/mpeg"></audio>
                    <audio id="w2" src="../licoes/audio/licao2/Obrigatorio/Words/2.mp3" type="audio/mpeg"></audio>
                    <audio id="w3" src="../licoes/audio/licao2/Obrigatorio/Words/3.mp3" type="audio/mpeg"></audio>
                    <audio id="w4" src="../licoes/audio/licao2/Obrigatorio/Words/4.mp3" type="audio/mpeg"></audio>
                    <audio id="w5" src="../licoes/audio/licao2/Obrigatorio/Words/5.mp3" type="audio/mpeg"></audio>
                    <audio id="w6" src="../licoes/audio/licao2/Obrigatorio/Words/6.mp3" type="audio/mpeg"></audio>
                    <audio id="w7" src="../licoes/audio/licao2/Obrigatorio/Words/7.mp3" type="audio/mpeg"></audio>
                    <audio id="w8" src="../licoes/audio/licao2/Obrigatorio/Words/8.mp3" type="audio/mpeg"></audio>
                    <audio id="w9" src="../licoes/audio/licao2/Obrigatorio/Words/9.mp3" type="audio/mpeg"></audio>
                    <audio id="w10" src="../licoes/audio/licao2/Obrigatorio/Words/10.mp3" type="audio/mpeg"></audio>
                    <audio id="w11" src="../licoes/audio/licao2/Obrigatorio/Words/11.mp3" type="audio/mpeg"></audio>
                    <audio id="w12" src="../licoes/audio/licao2/Obrigatorio/Words/12.mp3" type="audio/mpeg"></audio>
                    <audio id="w13" src="../licoes/audio/licao2/Obrigatorio/Words/13.mp3" type="audio/mpeg"></audio>
                    <audio id="w14" src="../licoes/audio/licao2/Obrigatorio/Words/14.mp3" type="audio/mpeg"></audio>
                    <audio id="w15" src="../licoes/audio/licao2/Obrigatorio/Words/15.mp3" type="audio/mpeg"></audio>
                    <audio id="w16" src="../licoes/audio/licao2/Obrigatorio/Words/16.mp3" type="audio/mpeg"></audio>
                    <audio id="w17" src="../licoes/audio/licao2/Obrigatorio/Words/17.mp3" type="audio/mpeg"></audio>
                    <audio id="w18" src="../licoes/audio/licao2/Obrigatorio/Words/18.mp3" type="audio/mpeg"></audio>
                    <audio id="w19" src="../licoes/audio/licao2/Obrigatorio/Words/19.mp3" type="audio/mpeg"></audio>
                    <audio id="w20" src="../licoes/audio/licao2/Obrigatorio/Words/20.mp3" type="audio/mpeg"></audio>
                    <audio id="w21" src="../licoes/audio/licao2/Obrigatorio/Words/21.mp3" type="audio/mpeg"></audio>
                    <audio id="w22" src="../licoes/audio/licao2/Obrigatorio/Words/22.mp3" type="audio/mpeg"></audio>
                    <audio id="w23" src="../licoes/audio/licao2/Obrigatorio/Words/23.mp3" type="audio/mpeg"></audio>
                    <audio id="w24" src="../licoes/audio/licao2/Obrigatorio/Words/24.mp3" type="audio/mpeg"></audio>
                    <audio id="w25" src="../licoes/audio/licao2/Obrigatorio/Words/25.mp3" type="audio/mpeg"></audio>
                    <audio id="w26" src="../licoes/audio/licao2/Obrigatorio/Words/26.mp3" type="audio/mpeg"></audio>
                    <audio id="w27" src="../licoes/audio/licao2/Obrigatorio/Words/27.mp3" type="audio/mpeg"></audio>
                    <audio id="w28" src="../licoes/audio/licao2/Obrigatorio/Words/28.mp3" type="audio/mpeg"></audio>
                    <audio id="w29" src="../licoes/audio/licao2/Obrigatorio/Words/29.mp3" type="audio/mpeg"></audio>
                    <audio id="w30" src="../licoes/audio/licao2/Obrigatorio/Words/30.mp3" type="audio/mpeg"></audio>
                    <audio id="w31" src="../licoes/audio/licao2/Obrigatorio/Words/31.mp3" type="audio/mpeg"></audio>
                    <audio id="w32" src="../licoes/audio/licao2/Obrigatorio/Words/32.mp3" type="audio/mpeg"></audio>
                    <audio id="w33" src="../licoes/audio/licao2/Obrigatorio/Words/33.mp3" type="audio/mpeg"></audio>
                    <audio id="w34" src="../licoes/audio/licao2/Obrigatorio/Words/34.mp3" type="audio/mpeg"></audio>
                    <audio id="w35" src="../licoes/audio/licao2/Obrigatorio/Words/35.mp3" type="audio/mpeg"></audio>
                    <audio id="w36" src="../licoes/audio/licao2/Obrigatorio/Words/36.mp3" type="audio/mpeg"></audio>
                    <audio id="w37" src="../licoes/audio/licao2/Obrigatorio/Words/37.mp3" type="audio/mpeg"></audio>
                    <audio id="w38" src="../licoes/audio/licao2/Obrigatorio/Words/38.mp3" type="audio/mpeg"></audio>
                    <audio id="w39" src="../licoes/audio/licao2/Obrigatorio/Words/39.mp3" type="audio/mpeg"></audio>
                    <audio id="w40" src="../licoes/audio/licao2/Obrigatorio/Words/40.mp3" type="audio/mpeg"></audio>
                    <table class="table">
                        <thead>
                            <tr><span class="vermelho">WORDS</span></tr>
                            <tr>

                                <th scope="col">Words </th>
                                <th scope="col"> </th>
                                <th scope="col">Words </th>
                                <th scope="col"> </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w1)"> Baby</span></td>
                                <td>bebê</td>
                                <td><span class="frases cyan" onclick="play(w2)"> Floor</span></td>
                                <td>chão</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w3)"> Keys</span></td>
                                <td>chaves</td>
                                <td><span class="frases cyan" onclick="play(w4)"> Car</span></td>
                                <td>carro</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w5)"> Money</span></td>
                                <td>dinheiro</td>
                                <td><span class="frases cyan" onclick="play(w6)"> Really</span></td>
                                <td>realmente, sério</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w7)"> Heart</span></td>
                                <td>coração</td>
                                <td><span class="frases cyan" onclick="play(w8)"> Apple</span></td>
                                <td>maça</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w9)"> City</span></td>
                                <td>cidade</td>
                                <td><span class="frases cyan" onclick="play(w10)"> House</span></td>
                                <td>casa</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w11)"> Park</span></td>
                                <td>parque</td>
                                <td><span class="frases cyan" onclick="play(w12)"> Yesterday</span></td>
                                <td>ontem</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w13)"> Last</span></td>
                                <td>último(a)</td>
                                <td><span class="frases cyan" onclick="play(w14)"> Married</span></td>
                                <td>casado(a)</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w15)"> Tired</span></td>
                                <td>cansado(a)</td>
                                <td><span class="frases cyan" onclick="play(w16)"> Tall</span></td>
                                <td>alto(a)</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w17)"> Happy</span></td>
                                <td>Feliz</td>
                                <td><span class="frases cyan" onclick="play(w18)"> Brave</span></td>
                                <td>corajoso(a)</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w19)"> Clever</span></td>
                                <td>inteligente</td>
                                <td><span class="frases cyan" onclick="play(w20)"> easy-going</span></td>
                                <td>fácil de lidar</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w21)"> Friendly</span></td>
                                <td>amigável</td>
                                <td><span class="frases cyan" onclick="play(w22)"> Funny</span></td>
                                <td>engraçado(a)</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w23)"> Hard-working</span></td>
                                <td>trabalhador(a)</td>
                                <td><span class="frases cyan" onclick="play(w24)"> Honest</span></td>
                                <td>honesto(a)</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w25)"> Lazy</span></td>
                                <td>preguiçoso(a)</td>
                                <td><span class="frases cyan" onclick="play(w26)"> Moody</span></td>
                                <td>mal-humorado(a)</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w27)"> Polite</span></td>
                                <td>educado(a)</td>
                                <td><span class="frases cyan" onclick="play(w28)"> Nervous</span></td>
                                <td>nervoso(a)</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w29)"> Quite</span></td>
                                <td>quieto(a)</td>
                                <td><span class="frases cyan" onclick="play(w30)"> shy</span></td>
                                <td>tímido(a)</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w31)"> Creative</span></td>
                                <td>criativo(a)</td>
                                <td><span class="frases cyan" onclick="play(w32)"> Impulsive</span></td>
                                <td>impulsivo(a)</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w33)"> Big</span></td>
                                <td>grande</td>
                                <td><span class="frases cyan" onclick="play(w34)"> Hours</span></td>
                                <td>horas</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w35)"> Birthday</span></td>
                                <td>aniversário</td>
                                <td><span class="frases cyan" onclick="play(w36)"> Little</span></td>
                                <td>pouco</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w37)"> Small</span></td>
                                <td>pequeno</td>
                                <td><span class="frases cyan" onclick="play(w38)"> Favourite</span></td>
                                <td>favorito</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w39)"> Just</span></td>
                                <td>só</td>
                                <td><span class="frases cyan" onclick="play(w40)"> Age</span></td>
                                <td>idade</td>

                            </tr>

                        </tbody>
                    </table>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END OF MODAL -->
            
            `;

  //changing the content in your element
  element.innerHTML = newContent;
}

function changeVideoEn() {
  let element = document.getElementById("videoGrammar");
  let newContent = `
              <a href="https://youtu.be/T3cPixQjH2Ms" target="_blank">
              <botton>Watch on Youtube</botton>
              </a>
                `;

  //changing the content in your element
  element.innerHTML = newContent;
}

function changeVideoPt() {
  let element = document.getElementById("videoGrammar");
  let newContent = `
            <iframe width="370" height="300" src="https://www.youtube.com/embed/2Wig3XCO_cs"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                             <iframe width="370" height="300" src="https://www.youtube.com/embed/5pUgDHQCP9U"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                `;

  //changing the content in your element
  element.innerHTML = newContent;
}

function repetitionEn() {
  let element = document.getElementById("repetition-sentences");
  let newContent = `
  <img
          src="../../../images/audio.png"
          style="width: 30px; height: 30px"
          class="frases cyan mb-2"
          onclick="play(v22s)"
        />
  <audio id="Tres1" src="./audio/Grammar/Sentences/1.mp3"></audio>
  <audio id="Tres2" src="./audio/Grammar/Sentences/2.mp3"></audio>
  <audio id="Tres3" src="./audio/Grammar/Sentences/3.mp3"></audio>
  <audio id="Tres4" src="./audio/Grammar/Sentences/4.mp3"></audio>
  <audio id="Tres5" src="./audio/Grammar/Sentences/5.mp3"></audio>
  <audio id="Tres6" src="./audio/Grammar/Sentences/6.mp3"></audio>
  <audio id="Tres7" src="./audio/Grammar/Sentences/7.mp3"></audio>
  <audio id="Tres8" src="./audio/Grammar/Sentences/8.mp3"></audio>
  <audio id="Tres9" src="./audio/Grammar/Sentences/9.mp3"></audio>
  <audio id="Tres10" src="./audio/Grammar/Sentences/10.mp3"></audio>
  <audio id="Tres11" src="./audio/Grammar/Sentences/11.mp3"></audio>
  <audio id="Tres12" src="./audio/Grammar/Sentences/12.mp3"></audio>
  <audio id="Tres13" src="./audio/Grammar/Sentences/13.mp3"></audio>
  <audio id="Tres14" src="./audio/Grammar/Sentences/14.mp3"></audio>
  <audio id="Tres15" src="./audio/Grammar/Sentences/15.mp3"></audio>
  <audio id="Tres16" src="./audio/Grammar/Sentences/16.mp3"></audio>
  <audio id="Tres17" src="./audio/Grammar/Sentences/17.mp3"></audio>
  <audio id="Tres18" src="./audio/Grammar/Sentences/18.mp3"></audio>
  <audio id="Tres19" src="./audio/Grammar/Sentences/19.mp3"></audio>
  <audio id="Tres20" src="./audio/Grammar/Sentences/20.mp3"></audio>
  
                        <p class="frases" onclick="play(Tres1)"><span class="green">1.</span> I´m from France.</p>
                        <p class="frases" onclick="play(Tres2)"><span class="green">2.</span> You´re twenty-two.</p>
                        <p class="frases" onclick="play(Tres3)"><span class="green">3.</span> My name is Jane.</p>
                        <p class="frases" onclick="play(Tres4)"><span class="green">4.</span> She is a teacher.</p>
                        <p class="frases" onclick="play(Tres5)"><span class="green">5.</span> They are students.</p>
                        <p class="frases" onclick="play(Tres6)"><span class="green">6.</span> It is not not late.</p>
                        <p class="frases" onclick="play(Tres7)"><span class="green">7.</span> He isn´t at the hotel</p>
                        <p class="frases" onclick="play(Tres8)"><span class="green">8.</span> We are not sick.</p>
                        <p class="frases" onclick="play(Tres9)"><span class="green">9.</span> I am not his father.</p>
                        <p class="frases" onclick="play(Tres10)"><span class="green">10.</span> He isn´t here.</p>
                        <p class="frases" onclick="play(Tres11)"><span class="green">11.</span> I was a famous soccer player.</p>
                        <p class="frases" onclick="play(Tres12)"><span class="green">12.</span> He was born in 1998.</p>
                        <p class="frases" onclick="play(Tres13)"><span class="green">13.</span> We were tired last night.</p>
                        <p class="frases" onclick="play(Tres14)"><span class="green">14.</span> The weather was good last week.</p>
                        <p class="frases" onclick="play(Tres15)"><span class="green">15.</span> Yes, They were at home.</p>
                        <p class="frases" onclick="play(Tres16)"><span class="green">16.</span> No, They weren´t here.</p>
                        <p class="frases" onclick="play(Tres17)"><span class="green">17.</span> Because She wasn´t happy.</p>
                        <p class="frases" onclick="play(Tres18)"><span class="green">18.</span> It wasn´t beautiful.</p>
                        <p class="frases" onclick="play(Tres19)"><span class="green">19.</span> The movie wasn´t good.</p>
                        <p class="frases" onclick="play(Tres20)"><span class="green">20.</span> The boys weren´t poor.</p>
                        
                `;

  //changing the content in your element
  element.innerHTML = newContent;
}

function repetitionPt() {
  let element = document.getElementById("repetition-sentences");
  let newContent = `

  <img
          src="../../../images/audio.png"
          style="width: 30px; height: 30px"
          class="frases cyan mb-2"
          onclick="play(v22s)"
        />
  <audio id="Tres1" src="./audio/Grammar/Sentences/1.mp3"></audio>
  <audio id="Tres2" src="./audio/Grammar/Sentences/2.mp3"></audio>
  <audio id="Tres3" src="./audio/Grammar/Sentences/3.mp3"></audio>
  <audio id="Tres4" src="./audio/Grammar/Sentences/4.mp3"></audio>
  <audio id="Tres5" src="./audio/Grammar/Sentences/5.mp3"></audio>
  <audio id="Tres6" src="./audio/Grammar/Sentences/6.mp3"></audio>
  <audio id="Tres7" src="./audio/Grammar/Sentences/7.mp3"></audio>
  <audio id="Tres8" src="./audio/Grammar/Sentences/8.mp3"></audio>
  <audio id="Tres9" src="./audio/Grammar/Sentences/9.mp3"></audio>
  <audio id="Tres10" src="./audio/Grammar/Sentences/10.mp3"></audio>
  <audio id="Tres11" src="./audio/Grammar/Sentences/11.mp3"></audio>
  <audio id="Tres12" src="./audio/Grammar/Sentences/12.mp3"></audio>
  <audio id="Tres13" src="./audio/Grammar/Sentences/13.mp3"></audio>
  <audio id="Tres14" src="./audio/Grammar/Sentences/14.mp3"></audio>
  <audio id="Tres15" src="./audio/Grammar/Sentences/15.mp3"></audio>
  <audio id="Tres16" src="./audio/Grammar/Sentences/16.mp3"></audio>
  <audio id="Tres17" src="./audio/Grammar/Sentences/17.mp3"></audio>
  <audio id="Tres18" src="./audio/Grammar/Sentences/18.mp3"></audio>
  <audio id="Tres19" src="./audio/Grammar/Sentences/19.mp3"></audio>
  <audio id="Tres20" src="./audio/Grammar/Sentences/20.mp3"></audio>
  
                        <p class="frases" onclick="play(Tres1)"><span class="green">1.</span> I´m from France.<br>
                        <em><span class="cyan">Eu sou da França.</span></em></p>
                        <p class="frases" onclick="play(Tres2)"><span class="green">2.</span> You´re twenty-two.<br>
                        <em><span class="cyan">Você tem vinte e dois.</span></em></p>
                        <p class="frases" onclick="play(Tres3)"><span class="green">3.</span> My name is Jane.<br>
                        <em><span class="cyan">Meu nome é Jane.</span></em></p>
                        <p class="frases" onclick="play(Tres4)"><span class="green">4.</span> She is a teacher.<br>
                        <em><span class="cyan">Ela é uma professora.</span></em></p>
                        <p class="frases" onclick="play(Tres5)"><span class="green">5.</span> They are students.<br>
                        <em><span class="cyan">Eles são estudantes.</span></em></p>
                        <p class="frases" onclick="play(Tres6)"><span class="green">6.</span> It is not not late.<br>
                        <em><span class="cyan">Não é tarde.</span></em></p>
                        <p class="frases" onclick="play(Tres7)"><span class="green">7.</span> He isn´t at the hotel.<br>
                        <em><span class="cyan">Ele não está no hotel.</span></em></p>
                        <p class="frases" onclick="play(Tres8)"><span class="green">8.</span> We are not sick.<br>
                        <em><span class="cyan">Não estamos doentes.</span></em></p>
                        <p class="frases" onclick="play(Tres9)"><span class="green">9.</span> I am not his father.<br>
                        <em><span class="cyan">Eu não sou o pai dele.</span></em></p>
                        <p class="frases" onclick="play(Tres10)"><span class="green">10.</span> He isn´t here.<br>
                        <em><span class="cyan">Ele não está aqui.</span></em></p>
                        <p class="frases" onclick="play(Tres11)"><span class="green">11.</span> I was a famous soccer player.<br>
                        <em><span class="cyan">Eu era um jogador de futebol famoso.</span></em></p>
                        <p class="frases" onclick="play(Tres12)"><span class="green">12.</span> He was born in 1998.<br>
                        <em><span class="cyan">Ele nasceu em 1998.</span></em></p>
                        <p class="frases" onclick="play(Tres13)"><span class="green">13.</span> We were tired last night.<br>
                        <em><span class="cyan">Estávamos cansados ​​ontem à noite.</span></em></p>
                        <p class="frases" onclick="play(Tres14)"><span class="green">14.</span> The weather was good last week.<br>
                        <em><span class="cyan">O tempo estava bom na semana passada.</span></em></p>
                        <p class="frases" onclick="play(Tres15)"><span class="green">15.</span> Yes, They were at home.<br>
                        <em><span class="cyan">Sim, eles estavam em casa.</span></em></p>
                        <p class="frases" onclick="play(Tres16)"><span class="green">16.</span> No, They weren´t here.<br>
                        <em><span class="cyan">Não, eles não estavam aqui.</span></em></p>
                        <p class="frases" onclick="play(Tres17)"><span class="green">17.</span> Because She wasn´t happy.<br>
                        <em><span class="cyan">Porque ela não estava feliz.</span></em></p>
                        <p class="frases" onclick="play(Tres18)"><span class="green">18.</span> It wasn´t beautiful.<br>
                        <em><span class="cyan">Não era bonito.</span></em></p>
                        <p class="frases" onclick="play(Tres19)"><span class="green">19.</span> The movie wasn´t good.<br>
                        <em><span class="cyan">O filme não foi bom.</span></em></p>
                        <p class="frases" onclick="play(Tres20)"><span class="green">20.</span> The boys weren´t poor.<br>
                        <em><span class="cyan">Os meninos não eram pobres.</span></em></p>
                `;

  //changing the content in your element
  element.innerHTML = newContent;
}

function questionsEn() {
  let element = document.getElementById("questions");
  let newContent = `

 
                        <audio id="Quatro1" src="./audio/Grammar/Questions/1.mp3"></audio>
                        <audio id="Quatro2" src=./audio/Grammar/Questions/2.mp3"></audio>
                        <audio id="Quatro3" src=./audio/Grammar/Questions/3.mp3"></audio>
                        <audio id="Quatro4" src=./audio/Grammar/Questions/4.mp3"></audio>
                        <audio id="Quatro5" src=./audio/Grammar/Questions/5.mp3"></audio>
                        <audio id="Quatro6" src=./audio/Grammar/Questions/6.mp3"></audio>
                        <audio id="Quatro7" src=./audio/Grammar/Questions/7.mp3"></audio>
                        <audio id="Quatro8" src=./audio/Grammar/Questions/8.mp3"></audio>
                        <audio id="Quatro9" src=./audio/Grammar/Questions/9.mp3"></audio>
                        <audio id="Quatro10" src=./audio/Grammar/Questions/10.mp3"></audio>
                        <audio id="Quatro11" src=./audio/Grammar/Questions/11.mp3"></audio>
                        <audio id="Quatro12" src=./audio/Grammar/Questions/12.mp3"></audio>
                        <audio id="Quatro13" src=./audio/Grammar/Questions/13.mp3"></audio>
                        <audio id="Quatro14" src=./audio/Grammar/Questions/14.mp3"></audio>
                        <audio id="Quatro15" src=./audio/Grammar/Questions/15.mp3"></audio>
                        <audio id="Quatro16" src=./audio/Grammar/Questions/16.mp3"></audio>
                        <audio id="Quatro17" src=./audio/Grammar/Questions/17.mp3"></audio>
                        <audio id="Quatro18" src=./audio/Grammar/Questions/18.mp3"></audio>
                        <audio id="Quatro19" src=./audio/Grammar/Questions/19.mp3"></audio>
                        <audio id="Quatro20" src=./audio/Grammar/Questions/20.mp3"></audio>
                    
                    
                        <p class="frases" onclick="play(Quatro1)"><span class="blue">1.</span> Who is your best friend?</p>
                        <p class="frases" onclick="play(Quatro2)"><span class="blue">2.</span> Are you married?</p>
                        <p class="frases" onclick="play(Quatro3)"><span class="blue">3.</span> Is your family nice? Explain.</p>
                        <p class="frases" onclick="play(Quatro4)"><span class="blue">4.</span> When were you born?</p>
                        <p class="frases" onclick="play(Quatro5)"><span class="blue">5.</span> Are you tired?</p>
                        <p class="frases" onclick="play(Quatro6)"><span class="blue">6.</span> Is he sick?</p>
                        <p class="frases" onclick="play(Quatro7)"><span class="blue">7.</span> Are you tall?</p>
                        <p class="frases" onclick="play(Quatro8)"><span class="blue">8.</span> Are they Strong?</p>
                        <p class="frases" onclick="play(Quatro9)"><span class="blue">9.</span> Is the water cold?</p>
                        <p class="frases" onclick="play(Quatro10)"><span class="blue">10.</span> Are you Brazilian?</p>
                        <p class="frases" onclick="play(Quatro11)"><span class="blue">11.</span> Are you happy this week?</p>
                        <p class="frases" onclick="play(Quatro12)"><span class="blue">12.</span> What is your name?</p>
                        <p class="frases" onclick="play(Quatro13)"><span class="blue">13.</span> What time do you usually get up?
                        </p>
                        <p class="frases" onclick="play(Quatro14)"><span class="blue">14.</span> What do you do after you get back
                            home?</p>
                        <p class="frases" onclick="play(Quatro15)"><span class="blue">15.</span> How many hours are you on-line
                            every day?</p>
                        <p class="frases" onclick="play(Quatro16)"><span class="blue">16.</span> What do you like to do on weekends?
                        </p>
                        <p class="frases" onclick="play(Quatro17)"><span class="blue">17.</span> Is the sky blue or red?</p>
                        <p class="frases" onclick="play(Quatro18)"><span class="blue">18.</span> Is your house big?</p>
                        <p class="frases" onclick="play(Quatro19)"><span class="blue">19.</span> Are you at home now?</p>
                        <p class="frases" onclick="play(Quatro20)"><span class="blue">20.</span> Where is your dog?</p>
                `;

  //changing the content in your element
  element.innerHTML = newContent;
}

function questionsPt() {
  let element = document.getElementById("questions");
  let newContent = `
                        <audio id="Quatro1" src="./audio/Grammar/Questions/1.mp3"></audio>
                        <audio id="Quatro2" src="./audio/Grammar/Questions/2.mp3"></audio>
                        <audio id="Quatro3" src="./audio/Grammar/Questions/3.mp3"></audio>
                        <audio id="Quatro4" src="./audio/Grammar/Questions/4.mp3"></audio>
                        <audio id="Quatro5" src="./audio/Grammar/Questions/5.mp3"></audio>
                        <audio id="Quatro6" src="./audio/Grammar/Questions/6.mp3"></audio>
                        <audio id="Quatro7" src="./audio/Grammar/Questions/7.mp3"></audio>
                        <audio id="Quatro8" src="./audio/Grammar/Questions/8.mp3"></audio>
                        <audio id="Quatro9" src="./audio/Grammar/Questions/9.mp3"></audio>
                        <audio id="Quatro10" src="./audio/Grammar/Questions/10.mp3"></audio>
                        <audio id="Quatro11" src="./audio/Grammar/Questions/11.mp3"></audio>
                        <audio id="Quatro12" src="./audio/Grammar/Questions/12.mp3"></audio>
                        <audio id="Quatro13" src="./audio/Grammar/Questions/13.mp3"></audio>
                        <audio id="Quatro14" src="./audio/Grammar/Questions/14.mp3"></audio>
                        <audio id="Quatro15" src="./audio/Grammar/Questions/15.mp3"></audio>
                        <audio id="Quatro16" src="./audio/Grammar/Questions/16.mp3"></audio>
                        <audio id="Quatro17" src="./audio/Grammar/Questions/17.mp3"></audio>
                        <audio id="Quatro18" src="./audio/Grammar/Questions/18.mp3"></audio>
                        <audio id="Quatro19" src="./audio/Grammar/Questions/19.mp3"></audio>
                        <audio id="Quatro20" src="./audio/Grammar/Questions/20.mp3"></audio>
                    
                    
                        <p class="frases" onclick="play(Quatro1)"><span class="blue">1.</span> Who is your best friend?<br>
                        <em><span class="cyan">Quem é seu melhor amigo?</span></em></p>
                        <p class="frases" onclick="play(Quatro2)"><span class="blue">2.</span> Are you married?<br>
                        <span class="cyan">Você é casado?</em></p>
                        <p class="frases" onclick="play(Quatro3)"><span class="blue">3.</span> Is your family nice? Explain.<br>
                        <span class="cyan">A sua família é legal? Explique.</em></p>
                        <p class="frases" onclick="play(Quatro4)"><span class="blue">4.</span> When were you born?<br>
                        <span class="cyan">Quando você nasceu?</em></p>
                        <p class="frases" onclick="play(Quatro5)"><span class="blue">5.</span> Are you tired?<br>
                        <span class="cyan">Você está cansada?</em></p>
                        <p class="frases" onclick="play(Quatro6)"><span class="blue">6.</span> Is he sick?<br>
                        <span class="cyan">Ele está doente?</em></p>
                        <p class="frases" onclick="play(Quatro7)"><span class="blue">7.</span> Are you tall?<br>
                        <span class="cyan">Você é alta?</em></p>
                        <p class="frases" onclick="play(Quatro8)"><span class="blue">8.</span> Are they Strong?<br>
                        <span class="cyan">Eles são fortes?</em></p>
                        <p class="frases" onclick="play(Quatro9)"><span class="blue">9.</span> Is the water cold?<br>
                        <span class="cyan">A água está fria?</em></p>
                        <p class="frases" onclick="play(Quatro10)"><span class="blue">10.</span> Are you Brazilian?<br>
                        <span class="cyan">Você é Brasileira?</em></p>
                        <p class="frases" onclick="play(Quatro11)"><span class="blue">11.</span> Are you happy this week?<br>
                        <span class="cyan">Você está feliz esta semana?</em></p>
                        <p class="frases" onclick="play(Quatro12)"><span class="blue">12.</span> What is your name?<br>
                        <span class="cyan">Qual é o seu nome?</em></p>
                        <p class="frases" onclick="play(Quatro13)"><span class="blue">13.</span> What time do you usually get up?<br>
                        <span class="cyan">Que horas você geralmente acorda?</em></p>
                        <p class="frases" onclick="play(Quatro14)"><span class="blue">14.</span> What do you do after you get back home?<br>
                        <span class="cyan">O que você faz depois que você volta para casa?</em></p>
                        <p class="frases" onclick="play(Quatro15)"><span class="blue">15.</span> How many hours are you on-line every day?<br>
                        <span class="cyan">Quantas horas você fica online todos os dias?</em></p>
                        <p class="frases" onclick="play(Quatro16)"><span class="blue">16.</span> What do you like to do on weekends?<br>
                        <span class="cyan">O que você gosta de fazer nos finais de semana?</em></p>
                        <p class="frases" onclick="play(Quatro17)"><span class="blue">17.</span> Is the sky blue or red?<br>
                        <span class="cyan">O céu é azul ou vermelho?</em></p>
                        <p class="frases" onclick="play(Quatro18)"><span class="blue">18.</span> Is your house big?<br>
                        <span class="cyan">A sua casa é grande?</em></p>
                        <p class="frases" onclick="play(Quatro19)"><span class="blue">19.</span> Are you at home now?<br>
                        <span class="cyan">Você não está em casa?</em></p>
                        <p class="frases" onclick="play(Quatro20)"><span class="blue">20.</span> Where is your dog?<br>
                        <span class="cyan">Onde está seu cachorro?</em></p>
                `;

  //changing the content in your element
  element.innerHTML = newContent;
}
