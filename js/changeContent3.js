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
                                <th scope="col">3?? Person</th>
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
                                <td>beb??</td>
                                <td><span class="frases cyan" onclick="play(w2)"> Floor</span></td>
                                <td>ch??o</td>
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
                                <td>realmente, s??rio</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w7)"> Heart</span></td>
                                <td>cora????o</td>
                                <td><span class="frases cyan" onclick="play(w8)"> Apple</span></td>
                                <td>ma??a</td>
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
                                <td>??ltimo(a)</td>
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
                                <td>f??cil de lidar</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w21)"> Friendly</span></td>
                                <td>amig??vel</td>
                                <td><span class="frases cyan" onclick="play(w22)"> Funny</span></td>
                                <td>engra??ado(a)</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w23)"> Hard-working</span></td>
                                <td>trabalhador(a)</td>
                                <td><span class="frases cyan" onclick="play(w24)"> Honest</span></td>
                                <td>honesto(a)</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w25)"> Lazy</span></td>
                                <td>pregui??oso(a)</td>
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
                                <td>t??mido(a)</td>
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
                                <td>anivers??rio</td>
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
                                <td>s??</td>
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
                                <th scope="col">3?? Person</th>
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
                                <td>beb??</td>
                                <td><span class="frases cyan" onclick="play(w2)"> Floor</span></td>
                                <td>ch??o</td>
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
                                <td>realmente, s??rio</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w7)"> Heart</span></td>
                                <td>cora????o</td>
                                <td><span class="frases cyan" onclick="play(w8)"> Apple</span></td>
                                <td>ma??a</td>
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
                                <td>??ltimo(a)</td>
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
                                <td>f??cil de lidar</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w21)"> Friendly</span></td>
                                <td>amig??vel</td>
                                <td><span class="frases cyan" onclick="play(w22)"> Funny</span></td>
                                <td>engra??ado(a)</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w23)"> Hard-working</span></td>
                                <td>trabalhador(a)</td>
                                <td><span class="frases cyan" onclick="play(w24)"> Honest</span></td>
                                <td>honesto(a)</td>
                            </tr>
                            <tr>
                                <td><span class="frases cyan" onclick="play(w25)"> Lazy</span></td>
                                <td>pregui??oso(a)</td>
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
                                <td>t??mido(a)</td>
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
                                <td>anivers??rio</td>
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
                                <td>s??</td>
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
              <iframe width="370" height="300" src="https://www.youtube.com/embed/PdbBP0F8GK8"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                `;

  //changing the content in your element
  element.innerHTML = newContent;
}

function changeVideoPt() {
  let element = document.getElementById("videoGrammar");
  let newContent = `
            <iframe width="370" height="300" src="https://www.youtube.com/embed/tiCaJ3uzgiE"
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
                        
                       
                        
                        <p class="frases" onclick="play(Tres1)"><span class="green">1. I had two book.(cars)</span></p>
                        <p class="frases" onclick="play(Tres2)"><span class="green">2. You needed to buy 2 houses.(tables)</span></p>
                        <p class="frases" onclick="play(Tres3)"><span class="green">3. He drank three glasses of water.(juice)</span></p>
                        <p class="frases" onclick="play(Tres4)"><span class="green">4. She lost her keys all the time.(voice)</span></p>
                        <p class="frases" onclick="play(Tres5)"><span class="green">5. It had several colors.</span></p>
                        <p class="frases" onclick="play(Tres6)"><span class="green">6. We took two boxes.(tickets)</span></p>
                        <p class="frases" onclick="play(Tres7)"><span class="green">7. You wore nice shirts.(rings)</span></p>
                        <p class="frases" onclick="play(Tres8)"><span class="green">8. They watched films at night.(movies)</span></p>

                        <p class="frases" onclick="play(Tres9)"><span class="green">9. I met my wife 9 years ago.(5)</span></p>
                        <p class="frases" onclick="play(Tres10)"><span class="green">10. The rain stopped an hour ago.(30min)</span></p>
                        <p class="frases" onclick="play(Tres11)"><span class="green">11. We were good friends.(Brothers)</span></p>
                        <p class="frases" onclick="play(Tres12)"><span class="green">12. I forgot my wallet.(Keys)</span></p>
                        <p class="frases" onclick="play(Tres13)"><span class="green">13. Last year I traveled to Italy.(Spain)</span></p>
                        <p class="frases" onclick="play(Tres14)"><span class="green">14. He finished all the exercices.(jobs)</span></p>
                        <p class="frases" onclick="play(Tres15)"><span class="green">15. I missed the class last week.</span></p>
                        <p class="frases" onclick="play(Tres16)"><span class="green">16. She smoked a cigarrette.</span></p>

                        <p class="frases" onclick="play(Tres17)"><span class="green">17. I liked the film.(speeches)</span></p>
                        <p class="frases" onclick="play(Tres18)"><span class="green">18. They listened to music. (songs)</span></p>
                        <p class="frases" onclick="play(Tres19)"><span class="green">19. We went to church yesterday.(school)</span></p>
                        <p class="frases" onclick="play(Tres20)"><span class="green">20. Jane changed her place. (plate)</span></p>
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
                        
                       
                        
                        <p class="frases" onclick="play(Tres1)"><span class="green">1. I had two book.(cars)</span><br>
                        <em>Eu tinha dois livros.</em></p>
                        <p class="frases" onclick="play(Tres2)"><span class="green">2. You needed to buy 2 houses.(tables)</span><br>
                        <em>Voc?? precisava comprar 2 casas.</em></p>
                        <p class="frases" onclick="play(Tres3)"><span class="green">3. He drank three glasses of water.(juice)</span><br>
                        <em>Ele bebeu tr??s copos d'??gua.</em></p>
                        <p class="frases" onclick="play(Tres4)"><span class="green">4. She lost her keys all the time.(voice)</span><br>
                        <em>Ela perdia as chaves o tempo todo.</em></p>
                        <p class="frases" onclick="play(Tres5)"><span class="green">5. It had several colors.</span><br>
                        <em>Tinha v??rias cores.</em></p>
                        <p class="frases" onclick="play(Tres6)"><span class="green">6. We took two boxes.(tickets)</span><br>
                        <em>Pegamos duas caixas.</em></p>
                        <p class="frases" onclick="play(Tres7)"><span class="green">7. You wore nice shirts.(rings)</span><br>
                        <em>Voc?? usava camisas bonitas.</em></p>
                        <p class="frases" onclick="play(Tres8)"><span class="green">8. They watched films at night.(movies)</span><br>
                        <em>Eles assistiam filmes ?? noite.</em></p>

                        <p class="frases" onclick="play(Tres9)"><span class="green">9. I met my wife 9 years ago.(5)</span><br>
                        <em>Conheci minha esposa ?? 9 anos.</em></p>
                        <p class="frases" onclick="play(Tres10)"><span class="green">10. The rain stopped an hour ago.(30min)</span><br>
                        <em>A chuva parou ?? uma hora.</em></p>
                        <p class="frases" onclick="play(Tres11)"><span class="green">11. We were good friends.(Brothers)</span><br>
                        <em>??ramos bons amigos.</em></p>
                        <p class="frases" onclick="play(Tres12)"><span class="green">12. I forgot my wallet.(Keys)</span><br>
                        <em>Esqueci a minha carteira.</em></p>
                        <p class="frases" onclick="play(Tres13)"><span class="green">13. Last year I traveled to Italy.(Spain)</span><br>
                        <em>No ano passado, viajei para a It??lia.</em></p>
                        <p class="frases" onclick="play(Tres14)"><span class="green">14. He finished all the exercices.(jobs)</span><br>
                        <em>Ele terminou todos os exerc??cios.</em></p>
                        <p class="frases" onclick="play(Tres15)"><span class="green">15. I missed the class last week.</span><br>
                        <em>Eu perdi a aula na semana passada.</em></p>
                        <p class="frases" onclick="play(Tres16)"><span class="green">16. She smoked a cigarette.</span><br>
                        <em>Ela fumou um cigarro.</em></p>

                        <p class="frases" onclick="play(Tres17)"><span class="green">17. I liked the film.(speeches)</span><br>
                        <em>Gostei do filme.</em></p>
                        <p class="frases" onclick="play(Tres18)"><span class="green">18. They listened to music.(songs)</span><br>
                        <em>Eles ouviram m??sica.</em></p>
                        <p class="frases" onclick="play(Tres19)"><span class="green">19. We went to church yesterday.(school)</span><br>
                        <em>Fomos ?? igreja ontem.</em></p>
                        <p class="frases" onclick="play(Tres20)"><span class="green">20. Jane changed her place.(plate)</span><br>
                        <em>Jane mudou de lugar.</em></p>
                `;

  //changing the content in your element
  element.innerHTML = newContent;
}
// END OF SENTENCES

function questionsEn() {
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
  
  
  
  <p class="frases" onclick="play(Quatro1)"><span class="">1. What did you do for your last birthday?</p>
  <p class="frases" onclick="play(Quatro2)"><span class="">2. Did you study hard in high school?</p>
  <p class="frases" onclick="play(Quatro3)"><span class="">3. Where did you go last weekend?</p>
  <p class="frases" onclick="play(Quatro4)"><span class="">4. What did you eat last dinner?</p>
  <p class="frases" onclick="play(Quatro5)"><span class="">5. Did you paint your house last year?</p>
  <p class="frases" onclick="play(Quatro6)"><span class="">6. What color towel did you use last time?</p>
  <p class="frases" onclick="play(Quatro7)"><span class="">7. Did they lose the match?</p>
  <p class="frases" onclick="play(Quatro8)"><span class="">8. Did you have dinner last night?</p>
  <p class="frases" onclick="play(Quatro9)"><span class="">9. Did you just call Jane?</p>
  <p class="frases" onclick="play(Quatro10)"><span class="">10. Did Phillip buy his mother a gift?</p>
  <p class="frases" onclick="play(Quatro11)"><span class="">11. Did Amanda sing at the festival?</p>
  <p class="frases" onclick="play(Quatro12)"><span class="">12. Did John give you all this money?</p>
  <p class="frases" onclick="play(Quatro13)"><span class="">13. Did you watch tvl ast night?</p>
  <p class="frases" onclick="play(Quatro14)"><span class="">14. Did you enjoy the party yesterday?</p>
  <p class="frases" onclick="play(Quatro15)"><span class="">15. Did she like the surprise?</p>
  <p class="frases" onclick="play(Quatro16)"><span class="">16. Did he arrive on time?</p>
  <p class="frases" onclick="play(Quatro17)"><span class="">17. What did you say to Bob?</p>
  <p class="frases" onclick="play(Quatro18)"><span class="">18. Did they bring their friends?</p>
  <p class="frases" onclick="play(Quatro19)"><span class="">19. Did you have a nice weekend?</p>
  <p class="frases" onclick="play(Quatro20)"><span class="">20. What did you have for dinner last night?</p>
                        
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
  
  
  
  <p class="frases" onclick="play(Quatro1)"><span class="">1. What did you do for your last birthday?<br>
  <em>O que voc?? fez no seu ??ltimo anivers??rio?</em></p>
  <p class="frases" onclick="play(Quatro2)"><span class="">2. Did you study hard in high school?<br>
  <em>Voc?? estudou muito no ensino m??dio?</em></p>
  <p class="frases" onclick="play(Quatro3)"><span class="">3. Where did you go last weekend?<br>
  <em>Onde voc?? foi no ??ltimo final de semana?</em></p>
  <p class="frases" onclick="play(Quatro4)"><span class="">4. What did you eat last dinner?<br>
  <em>O que voc?? comeu no ??ltimo jantar?</em></p>
  <p class="frases" onclick="play(Quatro5)"><span class="">5. Did you paint your house last year?<br>
  <em>Voc?? pintou sua casa no ano passado?</em></p>
  <p class="frases" onclick="play(Quatro6)"><span class="">6. What color towel did you use last time?<br>
  <em>Que cor de toalha voc?? usou da ??ltima vez?</em></p>
  <p class="frases" onclick="play(Quatro7)"><span class="">7. Did they lose the match?<br>
  <em>Eles perderam a partida?</em></p>
  <p class="frases" onclick="play(Quatro8)"><span class="">8. Did you have dinner last night?<br>
  <em>Voc?? jantou ontem ?? noite?</em></p>
  <p class="frases" onclick="play(Quatro9)"><span class="">9. Did you just call Jane?<br>
  <em>Voc?? acabou de ligar para Jane?</em></p>
  <p class="frases" onclick="play(Quatro10)"><span class="">10. Did Phillip buy his mother a gift?<br>
  <em>Phillip comprou um presente para sua m??e?</em></p>
  <p class="frases" onclick="play(Quatro11)"><span class="">11. Did Amanda sing at the festival?<br>
  <em>Amanda cantou no festival?</em></p>
  <p class="frases" onclick="play(Quatro12)"><span class="">12. Did John give you all this money?<br>
  <em>O John te deu todo este dinheiro?</em></p>
  <p class="frases" onclick="play(Quatro13)"><span class="">13. Did you watch tv last night?<br>
  <em>Voc?? assistiu televis??o ontem ?? noite?</em></p>
  <p class="frases" onclick="play(Quatro14)"><span class="">14. Did you enjoy the party yesterday?<br>
  <em>Gostou da festa ontem?</em></p>
  <p class="frases" onclick="play(Quatro15)"><span class="">15. Did she like the surprise?<br>
  <em>Ela gostou da surpresa?</em></p>
  <p class="frases" onclick="play(Quatro16)"><span class="">16. Did he arrive on time?<br>
  <em>Ele chegou a tempo?</em></p>
  <p class="frases" onclick="play(Quatro17)"><span class="">17. What did you say to Bob?<br>
  <em>O que voc?? disse para Bob?</em></p>
  <p class="frases" onclick="play(Quatro18)"><span class="">18. Did they bring their friends?<br>
  <em>Eles trouxeram seus amigos?</em></p>
  <p class="frases" onclick="play(Quatro19)"><span class="">19. Did you have a nice weekend?<br>
  <em>Voc?? teve um bom fim de semana?</em></p>
  <p class="frases" onclick="play(Quatro20)"><span class="">20. What did you have for dinner last night?<br>
  <em>O que voc?? jantou ontem ?? noite?</em></p>
                `;

  //changing the content in your element
  element.innerHTML = newContent;
}
