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
             <iframe width="560" height="315" src="https://www.youtube.com/embed/uU-RbEEolw0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             <iframe width="560" height="315" src="https://www.youtube.com/embed/u-qnMXjEnvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              `;

  //changing the content in your element
  element.innerHTML = newContent;
}

function changeVideoPt() {
  let element = document.getElementById("videoGrammar");
  let newContent = `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5yz48aL6OHc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           <iframe width="560" height="315" src="https://www.youtube.com/embed/TKefhxbkvbg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
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
                       
                                          
                        <p class="frases" onclick="play(Tres1)"><span class="green-adj">1.</span> <span class="green-adj">---</span>modern life is <span class="italico-colored">stressful</span>. </p>
                        <p class="frases" onclick="play(Tres2)"><span class="green-adj">2.</span> What???s <span class="green-adj">the</span> capital of your <span class="italico-colored">country</span>?</p>
                        <p class="frases" onclick="play(Tres3)"><span class="green-adj">3.</span> <span class="green-adj">A</span> doctor earns more than a <span class="italico-colored">teacher</span>.</p>
                        <p class="frases" onclick="play(Tres4)"><span class="green-adj">4.</span> Do you know who invented <span class="green-adj">the</span> <span class="italico-colored">computer</span>?</p>
                        <p class="frases" onclick="play(Tres5)"><span class="green-adj">5.</span> He needed <span class="green-adj">an</span> <span class="italico-colored">answer</span>.</p>
                        <p class="frases" onclick="play(Tres6)"><span class="green-adj">6.</span> Itwasn't <span class="green-adj">an</span> easy <span class="italico-colored">decision</span>.</p>
                        <p class="frases" onclick="play(Tres7)"><span class="green-adj">7.</span> The education I got at <span class="green-adj">--- </span>school was <span class="italico-colored">excellent</span>.</p>
                        <p class="frases" onclick="play(Tres8)"><span class="green-adj">8.</span> I had <span class="green-adj">a</span> <span class="italico-colored">bad</span> experience at work today.</p>
                        <p class="frases" onclick="play(Tres9)"><span class="green-adj">9.</span> What is <span class="green-adj">an</span> <span class="italico-colored">earthquake</span>?</p>
                        <p class="frases" onclick="play(Tres10)"><span class="green-adj">10.</span> <span class="green-adj">The</span> car sped past at 100 miles an hour.</p>
                        <p class="frases" onclick="play(Tres11)"><span class="green-adj">11.</span> <span class="green-adj">There is</span>  <span class="italico-colored">spider</span> in the bath.</p>
                        <p class="frases" onclick="play(Tres12)"><span class="green-adj">12.</span> <span class="green-adj">There is</span> <span class="italico-colored">ice cream</span> on your shirt.</p>
                        <p class="frases" onclick="play(Tres13)"><span class="green-adj">13.</span> <span class="green-adj">There aren??t</span>any <span class="italico-colored">people</span> at the party.</p>
                        <p class="frases" onclick="play(Tres14)"><span class="green-adj">14.</span> <span class="green-adj">There isn??t</span> any sugar in my <span class="italico-colored">coffee</span>.</p>
                        <p class="frases" onclick="play(Tres15)"><span class="green-adj">15.</span> <span class="green-adj">There are not</span> eight <span class="italico-colored">people</span> online.</p>
                        
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
                       
                                          
                        <p class="frases" onclick="play(Tres1)"><span class="green-adj">1.</span> <span class="green-adj">---</span>modern life is <span class="italico-colored">stressful</span>.<br/>
                        <em class="green">a vida moderna ?? estressante.</em></p>
                        <p class="frases" onclick="play(Tres2)"><span class="green-adj">2.</span> What???s <span class="green-adj">the</span> capital of your <span class="italico-colored">country</span>?.<br/>
                        <em class="green">Qual ?? a capital do seu pa??s?</em></p>
                        <p class="frases" onclick="play(Tres3)"><span class="green-adj">3.</span> <span class="green-adj">A</span> doctor earns more than a <span class="italico-colored">teacher</span>..<br/>
                        <em class="green">Um m??dico ganha mais do que um professor.</em></p>
                        <p class="frases" onclick="play(Tres4)"><span class="green-adj">4.</span> Do you know who invented <span class="green-adj">the</span> <span class="italico-colored">computer</span>?.<br/>
                        <em class="green">Voc?? sabe quem inventou o computador?</em></p>
                        <p class="frases" onclick="play(Tres5)"><span class="green-adj">5.</span> He needed <span class="green-adj">an</span> <span class="italico-colored">answer</span>..<br/>
                        <em class="green">Ele precisava de uma resposta.</em></p>
                        <p class="frases" onclick="play(Tres6)"><span class="green-adj">6.</span> Itwasn't <span class="green-adj">an</span> easy <span class="italico-colored">decision</span>..<br/>
                        <em class="green"N??o foi uma decis??o f??cil.</em></p>
                        <p class="frases" onclick="play(Tres7)"><span class="green-adj">7.</span> The education I got at <span class="green-adj">--- </span>school was <span class="italico-colored">excellent</span>..<br/>
                        <em class="green">A educa????o que recebi na --- escola foi excelente.</em></p>
                        <p class="frases" onclick="play(Tres8)"><span class="green-adj">8.</span> I had <span class="green-adj">a</span> <span class="italico-colored">bad</span> experience at work today..<br/>
                        <em class="green">Tive uma experi??ncia ruim no trabalho hoje.</em></p>
                        <p class="frases" onclick="play(Tres9)"><span class="green-adj">9.</span> What is <span class="green-adj">an</span> <span class="italico-colored">earthquake</span>?.<br/>
                        <em class="green">O que ?? um terremoto?</em></p>
                        <p class="frases" onclick="play(Tres10)"><span class="green-adj">10.</span> <span class="green-adj">The</span> car sped past at 100 miles an hour..<br/>
                        <em class="green">O carro passou a 160 quil??metros por hora.</em></p>
                        <p class="frases" onclick="play(Tres11)"><span class="green-adj">11.</span> <span class="green-adj">There is</span>  <span class="italico-colored">spider</span> in the bath..<br/>
                        <em class="green">Tem uma aranha no banho.</em></p>
                        <p class="frases" onclick="play(Tres12)"><span class="green-adj">12.</span> <span class="green-adj">There is</span> <span class="italico-colored">ice cream</span> on your shirt..<br/>
                        <em class="green">Tem sorvete na sua camisa.</em></p>
                        <p class="frases" onclick="play(Tres13)"><span class="green-adj">13.</span> <span class="green-adj">There aren??t</span>any <span class="italico-colored">people</span> at the party..<br/>
                        <em class="green">N??o tem gente castanha na festa.</em></p>
                        <p class="frases" onclick="play(Tres14)"><span class="green-adj">14.</span> <span class="green-adj">There isn??t</span> any sugar in my <span class="italico-colored">coffee</span>..<br/>
                        <em class="green">N??o h?? a????car no meu caf??.</em></p>
                        <p class="frases" onclick="play(Tres15)"><span class="green-adj">15.</span> <span class="green-adj">There are not</span> eight <span class="italico-colored">people</span> online..<br/>
                        <em class="green">N??o h?? oito pessoas online.</em></p>
                        
                `;

  //changing the content in your element
  element.innerHTML = newContent;
}
// END OF SENTENCES

function questionsEn() {
  let element = document.getElementById("questions");
  let newContent = `
                        <audio id="Quatro2" src="./audio/licao2/Perguntas/2.mp3"></audio>
                        <audio id="Quatro3" src="./audio/licao2/Perguntas/3.mp3"></audio>
                        <audio id="Quatro4" src="./audio/licao2/Perguntas/4.mp3"></audio>
                        <audio id="Quatro5" src="./audio/licao2/Perguntas/5.mp3"></audio>
                        <audio id="Quatro6" src="./audio/licao2/Perguntas/6.mp3"></audio>
                        <audio id="Quatro7" src="./audio/licao2/Perguntas/7.mp3"></audio>
                        <audio id="Quatro8" src="./audio/licao2/Perguntas/8.mp3"></audio>
                        <audio id="Quatro9" src="./audio/licao2/Perguntas/9.mp3"></audio>
                        <audio id="Quatro10" src="./audio/licao2/Perguntas/10.mp3"></audio>
                        <audio id="Quatro11" src="./audio/licao2/Perguntas/11.mp3"></audio>
                        <audio id="Quatro12" src="./audio/licao2/Perguntas/12.mp3"></audio>
                        <audio id="Quatro13" src="./audio/licao2/Perguntas/13.mp3"></audio>
                        <audio id="Quatro14" src="./audio/licao2/Perguntas/14.mp3"></audio>
                        <audio id="Quatro15" src="./audio/licao2/Perguntas/15.mp3"></audio>
                        <audio id="Quatro16" src="./audio/licao2/Perguntas/16.mp3"></audio>
                        <audio id="Quatro17" src="./audio/licao2/Perguntas/17.mp3"></audio>
                        <audio id="Quatro18" src="./audio/licao2/Perguntas/18.mp3"></audio>
                        <audio id="Quatro19" src="./audio/licao2/Perguntas/19.mp3"></audio>
                        <audio id="Quatro20" src="./audio/licao2/Perguntas/20.mp3"></audio>
                        
                        
                        <p class="frases" onclick="play(Quatro1)"><span class="blue">1.</span> How many??<span class="blue-adj">houses</span> do you have?</p>
                        <p class="frases" onclick="play(Quatro2)"><span class="blue">2.</span> How many <span class="blue-adj">books</span> do you read per year?</p>
                        <p class="frases" onclick="play(Quatro3)"><span class="blue">3.</span> What are your favorite <span class="blue-adj">colors</span>?</p>
                        <p class="frases" onclick="play(Quatro4)"><span class="blue">4.</span> How many <span class="blue-adj">shirts</span> do you have?</p>
                        <p class="frases" onclick="play(Quatro5)"><span class="blue">5.</span> Do the <span class="blue-adj">boys</span> play soccer?</p>
                        <p class="frases" onclick="play(Quatro6)"><span class="blue">6.</span> Do the <span class="blue-adj">cats</span> like to drink milk?</p>
                        <p class="frases" onclick="play(Quatro7)"><span class="blue">7.</span> Do your <span class="blue-adj">children</span> sing well?</p>
                        <p class="frases" onclick="play(Quatro8)"><span class="blue">8.</span> Does your mother have three <span class="blue-adj">shirts</span>?</p>
                        <p class="frases" onclick="play(Quatro9)"><span class="blue">9.</span> How many <span class="blue-adj">keys</span> do you have now?</p>
                        <p class="frases" onclick="play(Quatro10)"><span class="blue">10.</span> What are your favorite <span class="blue-adj">movies</span>?</p>
                        <p class="frases" onclick="play(Quatro11)"><span class="blue">11.</span> Do you like <span class="blue-adj">tomatoes</span>?</p>
                        <p class="frases" onclick="play(Quatro12)"><span class="blue">12.</span> Are Brazil and Canada big <span class="blue-adj">countries</span>?</p>
                        <p class="frases" onclick="play(Quatro13)"><span class="blue">13.</span> Are you good at <span class="blue-adj">quizzes</span>?</p>
                        <p class="frases" onclick="play(Quatro14)"><span class="blue">14.</span> How many <span class="blue-adj">lives</span> does a cat have?</p>
                        <p class="frases" onclick="play(Quatro15)"><span class="blue">15.</span> Where do <span class="blue-adj">fish</span> swim?</p>
                        <p class="frases" onclick="play(Quatro16)"><span class="blue">16.</span> Are there 2 <span class="blue-adj">chairs</span> here?</p>
                        <p class="frases" onclick="play(Quatro17)"><span class="blue">17.</span> Does the doctor help the <span class="blue-adj">children</span>?</p>
                        <p class="frases" onclick="play(Quatro18)"><span class="blue">18.</span> Do you like to clean the <span class="blue-adj">windows</span>?</p>
                        <p class="frases" onclick="play(Quatro19)"><span class="blue">19.</span> Do you drink 2 <span class="blue-adj">bottles</span> of water a day?</p>
                        <p class="frases" onclick="play(Quatro20)"><span class="blue">20.</span> Two <span class="blue-adj">mountains</span> or two mountain?</p>    
                `;

  //changing the content in your element
  element.innerHTML = newContent;
}

function questionsPt() {
  let element = document.getElementById("questions");
  let newContent = `
                        <audio id="Quatro2" src="./audio/licao2/Perguntas/2.mp3"></audio>
                        <audio id="Quatro3" src="./audio/licao2/Perguntas/3.mp3"></audio>
                        <audio id="Quatro4" src="./audio/licao2/Perguntas/4.mp3"></audio>
                        <audio id="Quatro5" src="./audio/licao2/Perguntas/5.mp3"></audio>
                        <audio id="Quatro6" src="./audio/licao2/Perguntas/6.mp3"></audio>
                        <audio id="Quatro7" src="./audio/licao2/Perguntas/7.mp3"></audio>
                        <audio id="Quatro8" src="./audio/licao2/Perguntas/8.mp3"></audio>
                        <audio id="Quatro9" src="./audio/licao2/Perguntas/9.mp3"></audio>
                        <audio id="Quatro10" src="./audio/licao2/Perguntas/10.mp3"></audio>
                        <audio id="Quatro11" src="./audio/licao2/Perguntas/11.mp3"></audio>
                        <audio id="Quatro12" src="./audio/licao2/Perguntas/12.mp3"></audio>
                        <audio id="Quatro13" src="./audio/licao2/Perguntas/13.mp3"></audio>
                        <audio id="Quatro14" src="./audio/licao2/Perguntas/14.mp3"></audio>
                        <audio id="Quatro15" src="./audio/licao2/Perguntas/15.mp3"></audio>
                        <audio id="Quatro16" src="./audio/licao2/Perguntas/16.mp3"></audio>
                        <audio id="Quatro17" src="./audio/licao2/Perguntas/17.mp3"></audio>
                        <audio id="Quatro18" src="./audio/licao2/Perguntas/18.mp3"></audio>
                        <audio id="Quatro19" src="./audio/licao2/Perguntas/19.mp3"></audio>
                        <audio id="Quatro20" src="./audio/licao2/Perguntas/20.mp3"></audio>
                        
                        
                        <p class="frases" onclick="play(Quatro1)"><span class="blue">1.</span> How many??<span class="blue-adj">houses</span> do you have?</br>
                        <em>Quantas casas voc?? tem?</em></p>
                        <p class="frases" onclick="play(Quatro2)"><span class="blue">2.</span> How many <span class="blue-adj">books</span> do you read per year?</br>
                        <em>Quantos livros voc?? l?? por ano?</em></p>
                        <p class="frases" onclick="play(Quatro3)"><span class="blue">3.</span> What are your favorite <span class="blue-adj">colors</span>?</br>
                        <em>Quais s??o suas cores favoritas?</em></p>
                        <p class="frases" onclick="play(Quatro4)"><span class="blue">4.</span> How many <span class="blue-adj">shirts</span> do you have?</br>
                        <em>Quantas camisas voc?? tem?</em></p>
                        <p class="frases" onclick="play(Quatro5)"><span class="blue">5.</span> Do the <span class="blue-adj">boys</span> play soccer?</br>
                        <em>Os meninos jogam futebol?</em></p>
                        <p class="frases" onclick="play(Quatro6)"><span class="blue">6.</span> Do the <span class="blue-adj">cats</span> like to drink milk?</br>
                        <em>Os gatos gostam de beber leite?</em></p>
                        <p class="frases" onclick="play(Quatro7)"><span class="blue">7.</span> Do your <span class="blue-adj">children</span> sing well?</br>
                        <em>Seus filhos cantam bem?</em></p>
                        <p class="frases" onclick="play(Quatro8)"><span class="blue">8.</span> Does your mother have three <span class="blue-adj">shirts</span>?</br>
                        <em>Sua m??e tem 03 camisetas?</em></p>
                        <p class="frases" onclick="play(Quatro9)"><span class="blue">9.</span> How many <span class="blue-adj">keys</span> do you have now?</br>
                        <em>Quantas chaves voc?? tem agora?</em></p>
                        <p class="frases" onclick="play(Quatro10)"><span class="blue">10.</span> What are your favorite <span class="blue-adj">movies</span>?</br>
                        <em>Quais s??o seus filmes favoritos?</em></p>
                        <p class="frases" onclick="play(Quatro11)"><span class="blue">11.</span> Do you like <span class="blue-adj">tomatoes</span>?</br>
                        <em>Voce gosta de tomates?</em></p>
                        <p class="frases" onclick="play(Quatro12)"><span class="blue">12.</span> Are Brazil and Canada big <span class="blue-adj">countries</span>?</br>
                        <em>Brasil e Canad?? s??o pa??ses grandes?</em></p>
                        <p class="frases" onclick="play(Quatro13)"><span class="blue">13.</span> Are you good at <span class="blue-adj">quizzes</span>?</br>
                        <em>Voc?? ?? bom em question??rios?</em></p>
                        <p class="frases" onclick="play(Quatro14)"><span class="blue">14.</span> How many <span class="blue-adj">lives</span> does a cat have?</br>
                        <em>Quantas vidas um gato tem?</em></p>
                        <p class="frases" onclick="play(Quatro15)"><span class="blue">15.</span> Where do <span class="blue-adj">fish</span> swim?</br>
                        <em>Onde os peixes nadam?</em></p>
                        <p class="frases" onclick="play(Quatro16)"><span class="blue">16.</span> Are there 2 <span class="blue-adj">chairs</span> here?</br>
                        <em>Existem 2 cadeiras aqui?</em></p>
                        <p class="frases" onclick="play(Quatro17)"><span class="blue">17.</span> Does the doctor help the <span class="blue-adj">children</span>?</br>
                        <em>O m??dico ajuda as crian??as?</em></p>
                        <p class="frases" onclick="play(Quatro18)"><span class="blue">18.</span> Do you like to clean the <span class="blue-adj">windows</span>?</br>
                        <em>Voc?? gosta de limpar as janelas?</em></p>
                        <p class="frases" onclick="play(Quatro19)"><span class="blue">19.</span> Do you drink 2 <span class="blue-adj">bottles</span> of water a day?</br>
                        <em>Voc?? bebe 2 garrafas de ??gua por dia?</em></p>
                        <p class="frases" onclick="play(Quatro20)"><span class="blue">20.</span> Two <span class="blue-adj">mountains</span> or two mountain?</br>
                        <em>Duas montanhas ou duas montanhas?</em></p>    
                    
                        
                `;

  //changing the content in your element
  element.innerHTML = newContent;
}
s;
