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

// START OF VIDEO
function changeVideoEn() {
  let element = document.getElementById("videoGrammar");
  let newContent = `
              <iframe width="560" height="315" src="https://www.youtube.com/embed/9KahrrivdQQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                `;

  //changing the content in your element
  element.innerHTML = newContent;
}

function changeVideoPt() {
  let element = document.getElementById("videoGrammar");
  let newContent = `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/nPEnu2-fYjU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="370" height="300" src="https://www.youtube.com/embed/haCJd1GdG5s"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                `;

  //changing the content in your element
  element.innerHTML = newContent;
}
// END OF VIDEO

//START OF SENTENCES
function repetitionEn() {
  let element = document.getElementById("repetition-sentences");
  let newContent = `
            <img
              src="../../../images/audio.png"
              style="width: 30px; height: 30px"
              class="frases cyan mb-2"
              onclick="play(v22s)"
            />
            <span class="cyan"> Clique on the sentences to listen.</span>
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
                        
                        
                        <p class="frases" onclick="play(Tres1)"><span class="green-adj">1.</span> I had <span class="green-adj">red</span> books.(cars)</p>
                        <p class="frases" onclick="play(Tres2)"><span class="green-adj">2.</span> You need to buy 2 <span class="green-adj">big</span> houses.(tables)</p>
                        <p class="frases" onclick="play(Tres3)"><span class="green-adj">3.</span> He drank <span class="green-adj">cold</span> water.(juice)</p>
                        <p class="frases" onclick="play(Tres4)"><span class="green-adj">4.</span> She lost her <span class="green-adj">expensive</span> keys all the time.(voice)</p>
                        <p class="frases" onclick="play(Tres5)"><span class="green-adj">5.</span> It had <span class="green-adj">several beautiful</span> colors.(bright)</p>
                        <p class="frases" onclick="play(Tres6)"><span class="green-adj">6.</span> We took two <span class="green-adj">old</span> boxes.(tickets)</p>
                        <p class="frases" onclick="play(Tres7)"><span class="green-adj">7.</span> You wore <span class="green-adj">nice</span> shirts.(rings)</p>
                        <p class="frases" onclick="play(Tres8)"><span class="green-adj">8.</span> They watched <span class="green-adj">wonderful</span> films at night.(movies)</p>
                        <p class="frases" onclick="play(Tres9)"><span class="green-adj">9.</span> I didn´t have two <span class="green-adj">empty</span> bags.(black)</p>
                        <p class="frases" onclick="play(Tres10)"><span class="green-adj">10.</span> You didn´t need <span class="green-adj">different</span> models.(actors)</p>
                        <p class="frases" onclick="play(Tres11)"><span class="green-adj">11.</span> He didn´t  drink my <span class="green-adj">great</span> juice.(orange juice)</p>
                        <p class="frases" onclick="play(Tres12)"><span class="green-adj">12.</span> She didn´t lose her <span class="green-adj">important</span> document.(keys)</p>
                        <p class="frases" onclick="play(Tres13)"><span class="green-adj">13.</span> It didn´t have <span class="green-adj">bright</span> colors.(nice)</p>
                        <p class="frases" onclick="play(Tres14)"><span class="green-adj">14.</span> We didn´t take that <span class="green-adj">difficult</span> test.(easy)</p>
                        <p class="frases" onclick="play(Tres15)"><span class="green-adj">15.</span> You didn´t wear <span class="green-adj">cheap</span> shirts.(expensive)</p>
                        <p class="frases" onclick="play(Tres16)"><span class="green-adj">16.</span> They didn´t watch <span class="green-adj">appropriate</span> series at night.(movies)</p>
                        <p class="frases" onclick="play(Tres17)"><span class="green-adj">17.</span> He is a <span class="green-adj">good</span> lawyer.(doctor)</p>
                        <p class="frases" onclick="play(Tres18)"><span class="green-adj">18.</span> The sea is blue and the sun is <span class="green-adj">hot</span>.(yellow)</p>
                        <p class="frases" onclick="play(Tres19)"><span class="green-adj">19.</span> I want to have a <span class="green-adj">fast</span> car.(plane)</p>
                        <p class="frases" onclick="play(Tres20)"><span class="green-adj">20.</span> Don´t take that <span class="green-adj">heavy</span> bag.(tv)</p>
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
                    <span class="cyan"> Clique on the sentences to listen.</span>
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
                        
                       
                        
                        <p class="frases" onclick="play(Tres1)"><span class="green">1. I had two red books.(cars)</span><br>
                        <em>Eu tinha dois livros vermelhos.</em></p>
                        <p class="frases" onclick="play(Tres2)"><span class="green">2. You need to buy 2 big apartments.(tables)</span><br>
                        <em>Você precisa comprar 2 grandes casas.</em></p>
                        <p class="frases" onclick="play(Tres3)"><span class="green">3. He drank cold of water.(juice)</span><br>
                        <em>Ele bebeu três água fria.</em></p>
                        <p class="frases" onclick="play(Tres4)"><span class="green">4. She lost her expensive keys all the time.(voice)</span><br>
                        <em>Ela perdia suas caras chaves o tempo todo.</em></p>
                        <p class="frases" onclick="play(Tres5)"><span class="green">5. It had several beautiful colors.(bright)</span><br>
                        <em>Tinha várias cores lindas.</em></p>
                        <p class="frases" onclick="play(Tres6)"><span class="green">6. We took two old boxes.(tickets)</span><br>
                        <em>Pegamos duas caixas velhas.</em></p>
                        <p class="frases" onclick="play(Tres7)"><span class="green">7. You wore nice shirts.(rings)</span><br>
                        <em>Você usava camisas bonitas.</em></p>
                        <p class="frases" onclick="play(Tres8)"><span class="green">8. They watched wonderful films at night.(movies)</span><br>
                        <em>Eles assistiam filmes maravilhosos à noite.</em></p>
                        <p class="frases" onclick="play(Tres9)"><span class="green">9. I didn´t have two empty bags.(black)(5)</span><br>
                        <em>Eu não tinha duas sacolas vazias.</em></p>
                        <p class="frases" onclick="play(Tres10)"><span class="green">10. You didn´t need different models.(actors)</span><br>
                        <em>Você não precisava de modelos diferentes.</em></p>
                        <p class="frases" onclick="play(Tres11)"><span class="green">11. He didn´t drink my great juice.(orange juice)</span><br>
                        <em>Ele não bebeu meu ótimo suco.</em></p>
                        <p class="frases" onclick="play(Tres12)"><span class="green">12. She didn´t lose her important document.(Keys)</span><br>
                        <em>Ela não perdeu seu importante documento.</em></p>
                        <p class="frases" onclick="play(Tres13)"><span class="green">13. It didn´t have bright colors.(nice)</span><br>
                        <em>Não tinha cores vivas.</em></p>
                        <p class="frases" onclick="play(Tres14)"><span class="green">14. We didn´t take that difficult test.(easy)</span><br>
                        <em>Não fizemos aquele teste difícil.</em></p>
                        <p class="frases" onclick="play(Tres15)"><span class="green">15. You didn´t wear cheap shirts.(expensive)</span><br>
                        <em>Você não usava camisas baratas.</em></p>
                        <p class="frases" onclick="play(Tres16)"><span class="green">16. They didn´t watch appropriate series.(movies)</span><br>
                        <em>Eles não assistiram séries apropriadas.</em></p>
                        <p class="frases" onclick="play(Tres17)"><span class="green">17. He is a good lawyer.(doctor)</span><br>
                        <em>Ele é um bom advogado.</em></p>
                        <p class="frases" onclick="play(Tres18)"><span class="green">18. The sea is blue and the sun is hot.(yellow)</span><br>
                        <em>O mar é azul e o sol é quente.</em></p>
                        <p class="frases" onclick="play(Tres19)"><span class="green">19. I want to have a fast car.(plane)</span><br>
                        <em>Eu quero um carro rápido.</em></p>
                        <p class="frases" onclick="play(Tres20)"><span class="green">20. Don´t take that heavy bag.(tv)</span><br>
                        <em>Não leve essa bolsa pesada.</em></p>
                `;

  //changing the content in your element
  element.innerHTML = newContent;
}
// END OF SENTENCES

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
                    
                    
                        <p class="frases" onclick="play(Quatro1)"><span class="blue-adj">1.</span> What are you <span class="blue-adj">interested</span> in?</p>
                        <p class="frases" onclick="play(Quatro2)"><span class="blue-adj">2.</span> What school subject is <span class="blue-adj">interesting</span>?</p>
                        <p class="frases" onclick="play(Quatro3)"><span class="blue-adj">3.</span> What do you do when you are <span class="blue-adj">bored</span>?</p>
                        <p class="frases" onclick="play(Quatro4)"><span class="blue-adj">4.</span> What things in life are <span class="blue-adj">confusing</span>?</p>
                        <p class="frases" onclick="play(Quatro5)"><span class="blue-adj">5.</span> Do you usually eat <span class="blue-adj">well</span> at breakfast?</p>
                        <p class="frases" onclick="play(Quatro6)"><span class="blue-adj">6.</span> Did I read <span class="blue-adj">excellent</span> books?</p>
                        <p class="frases" onclick="play(Quatro7)"><span class="blue-adj">7.</span> Did you talk to that <span class="blue-adj">aggressive</span> boy?</p>
                        <p class="frases" onclick="play(Quatro8)"><span class="blue-adj">8.</span> Did he help his <span class="blue-adj">busy</span> mother?</p>
                        <p class="frases" onclick="play(Quatro9)"><span class="blue-adj">9.</span> Did she find the <span class="blue-adj">best</span> price?</p>
                        <p class="frases" onclick="play(Quatro10)"><span class="blue-adj">10.</span> Did it have <span class="blue-adj">basic</span> colors?</p>
                        <p class="frases" onclick="play(Quatro11)"><span class="blue-adj">11.</span> Did we wear <span class="blue-adj">cool</span> pants?</p>
                        <p class="frases" onclick="play(Quatro12)"><span class="blue-adj">12.</span> Did you prepare those <span class="blue-adj">delicious</span> cakes?</p>
                        <p class="frases" onclick="play(Quatro13)"><span class="blue-adj">13.</span> Did they make you fell <span class="blue-adj">embarrassed</span>?</p>
                        <p class="frases" onclick="play(Quatro14)"><span class="blue-adj">14.</span> Where is your <span class="blue-adj">new</span> cell phone?</p>
                        <p class="frases" onclick="play(Quatro15)"><span class="blue-adj">15.</span> Do you have a <span class="blue-adj">handsome</span> boyfriend?</p>
                        <p class="frases" onclick="play(Quatro16)"><span class="blue-adj">16.</span> What does your <span class="blue-adj">intelligent</span> dad do?</p>
                        <p class="frases" onclick="play(Quatro17)"><span class="blue-adj">17.</span> Do you wear <span class="blue-adj">good</span> socks?</p>
                        <p class="frases" onclick="play(Quatro18)"><span class="blue-adj">18.</span> Do you sleep in an <span class="blue-adj">old</span> bad?</p>
                        <p class="frases" onclick="play(Quatro19)"><span class="blue-adj">19.</span> Do you know someone <span class="blue-adj">very intelligent</span>?</p>
                        <p class="frases" onclick="play(Quatro20)"><span class="blue-adj">20.</span> Do you prefer <span class="blue-adj">cold or hot</span> days?</p>
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
                    
                        <p class="frases" onclick="play(Quatro1)"><span class="blue-adj">1.</span> What are you <span class="blue-adj">interested</span> in?</br><em>Em quê você está interessado?</em></p>
                        <p class="frases" onclick="play(Quatro2)"><span class="blue-adj">2.</span> What school subject is <span class="blue-adj">interesting</span>?</br><em>Que matéria escolar é interessante?</em></p>
                        <p class="frases" onclick="play(Quatro3)"><span class="blue-adj">3.</span> What do you do when you are <span class="blue-adj">bored</span>?</br><em>O que você faz quando está entediado?</em></p>
                        <p class="frases" onclick="play(Quatro4)"><span class="blue-adj">4.</span> What things in life are <span class="blue-adj">confusing</span>?</br><em>Que coisas na vida são confusas?</em></p>
                        <p class="frases" onclick="play(Quatro5)"><span class="blue-adj">5.</span> Do you usually eat <span class="blue-adj">well</span> at breakfast?</br><em>Você costuma comer bem no café da manhã?</em></p>
                        <p class="frases" onclick="play(Quatro6)"><span class="blue-adj">6.</span> Did I read <span class="blue-adj">excellent</span> books?</br><em>Eu li livros excelentes?</em></p>
                        <p class="frases" onclick="play(Quatro7)"><span class="blue-adj">7.</span> Did you talk to that <span class="blue-adj">aggressive</span> boy?</br><em>Você falou com aquele garoto agressivo?</em></p>
                        <p class="frases" onclick="play(Quatro8)"><span class="blue-adj">8.</span> Did he help his <span class="blue-adj">busy</span> mother?</br><em>Ele ajudou sua mãe ocupada?</em></p>
                        <p class="frases" onclick="play(Quatro9)"><span class="blue-adj">9.</span> Did she find the <span class="blue-adj">best</span> price?</br><em>Ela encontrou o melhor preço?</em></p>
                        <p class="frases" onclick="play(Quatro10)"><span class="blue-adj">10.</span> Did it have <span class="blue-adj">basic</span> colors?</br><em>Ele tinha cores básicas?</em></p>
                        <p class="frases" onclick="play(Quatro11)"><span class="blue-adj">11.</span> Did we wear <span class="blue-adj">cool</span> pants?</br><em>Usamos calças legais?</em></p>
                        <p class="frases" onclick="play(Quatro12)"><span class="blue-adj">12.</span> Did you prepare those <span class="blue-adj">delicious</span> cakes?</br><em>Você preparou aqueles bolos deliciosos?</em></p>
                        <p class="frases" onclick="play(Quatro13)"><span class="blue-adj">13.</span> Did they make you fell <span class="blue-adj">embarrassed</span>?</br><em>Eles fizeram você ficar envergonhado?</em></p>
                        <p class="frases" onclick="play(Quatro14)"><span class="blue-adj">14.</span> Where is your <span class="blue-adj">new</span> cell phone?</br><em>Onde está seu novo celular?</em></p>
                        <p class="frases" onclick="play(Quatro15)"><span class="blue-adj">15.</span> Do you have a <span class="blue-adj">handsome</span> boyfriend?</br><em>Você tem um namorado bonito?</em></p>
                        <p class="frases" onclick="play(Quatro16)"><span class="blue-adj">16.</span> What does your <span class="blue-adj">intelligent</span> dad do?</br><em>O que seu pai inteligente faz?</em></p>
                        <p class="frases" onclick="play(Quatro17)"><span class="blue-adj">17.</span> Do you wear <span class="blue-adj">good</span> socks?</br><em>Você usa meias boas?</em></p>
                        <p class="frases" onclick="play(Quatro18)"><span class="blue-adj">18.</span> Do you sleep in an <span class="blue-adj">old</span> bad?</br><em>Você dorme em uma velha cama?</em></p>
                        <p class="frases" onclick="play(Quatro19)"><span class="blue-adj">19.</span> Do you know someone <span class="blue-adj">very intelligent</span>?</br><em>Você conhece alguém muito inteligente?</em></p>
                        <p class="frases" onclick="play(Quatro20)"><span class="blue-adj">20.</span> Do you prefer <span class="blue-adj">cold or hot</span> days?</br><em>Você prefere dias frios ou quentes?</em></p>
                    
                        
                `;

  //changing the content in your element
  element.innerHTML = newContent;
}
s;
