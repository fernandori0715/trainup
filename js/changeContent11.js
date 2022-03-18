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
    <iframe width="560" height="315" src="https://www.youtube.com/embed/cpQbmdKkNFs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                `;
  
    //changing the content in your element
    element.innerHTML = newContent;
  }
  
  function changeVideoPt() {
    let element = document.getElementById("videoGrammar");
    let newContent = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/wKBdmIH248A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/f4uCUDWJXM0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/0l_zGoyssgw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          
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
              <audio id="Tres1" src="./audio/Grammar/Sentences/Repetition/1.mp3"></audio>
              <audio id="Tres2" src="./audio/Grammar/Sentences/Repetition/2.mp3"></audio>
              <audio id="Tres3" src="./audio/Grammar/Sentences/Repetition/3.mp3"></audio>
              <audio id="Tres4" src="./audio/Grammar/Sentences/Repetition/4.mp3"></audio>
              <audio id="Tres5" src="./audio/Grammar/Sentences/Repetition/5.mp3"></audio>
              <audio id="Tres6" src="./audio/Grammar/Sentences/Repetition/6.mp3"></audio>
              <audio id="Tres7" src="./audio/Grammar/Sentences/Repetition/7.mp3"></audio>
              <audio id="Tres8" src="./audio/Grammar/Sentences/Repetition/8.mp3"></audio>
              <audio id="Tres9" src="./audio/Grammar/Sentences/Repetition/9.mp3"></audio>
              <audio id="Tres10" src="./audio/Grammar/Sentences/Repetition/10.mp3"></audio>
              <audio id="Tres11" src="./audio/Grammar/Sentences/Repetition/11.mp3"></audio>
              <audio id="Tres12" src="./audio/Grammar/Sentences/Repetition/12.mp3"></audio>
              <audio id="Tres13" src="./audio/Grammar/Sentences/Repetition/13.mp3"></audio>
              <audio id="Tres14" src="./audio/Grammar/Sentences/Repetition/14.mp3"></audio>
              <audio id="Tres15" src="./audio/Grammar/Sentences/Repetition/15.mp3"></audio>
              <audio id="Tres16" src="./audio/Grammar/Sentences/Repetition/16.mp3"></audio>
              <audio id="Tres17" src="./audio/Grammar/Sentences/Repetition/17.mp3"></audio>
              <audio id="Tres18" src="./audio/Grammar/Sentences/Repetition/18.mp3"></audio>
              <audio id="Tres19" src="./audio/Grammar/Sentences/Repetition/19.mp3"></audio>
              <audio id="Tres20" src="./audio/Grammar/Sentences/Repetition/20.mp3"></audio>
              
                                
              <h5 class="green">Comparative</h5>
              <p class="frases" onclick="play(Tres1)"><span class="green-adj">1.</span> Your bike is <span class="green-adj">better than</span> mine.<span class="blue-plural"> (car)</span> </p>
              <p class="frases" onclick="play(Tres2)"><span class="green-adj">2.</span> My daughter is <span class="green-adj">taller than</span> yours.<span class="blue-plural"> (son)</span></p>
              <p class="frases" onclick="play(Tres3)"><span class="green-adj">3.</span> Jane and Bob play soccer, but Karol <span class="green-adj">is better.</span><span class="blue-plural"> (sing)</span></p>
              <p class="frases" onclick="play(Tres4)"><span class="green-adj">4.</span> I am <span class="green-adj">happier now than</span> before.<span class="blue-plural"> (We)</span></p>
              <p class="frases" onclick="play(Tres5)"><span class="green-adj">5.</span> We need a <span class="green-adj">bigger </span> house.<span class="blue-plural"> (table)</span></p>
              <p class="frases" onclick="play(Tres6)"><span class="green-adj">6.</span> He is three years <span class="green-adj">older than </span> me.<span class="blue-plural"> (younger)</span></p>
              <p class="frases" onclick="play(Tres7)"><span class="green-adj">7.</span> His dog runs <span class="green-adj">faster than </span> Jane´s dog.<span class="blue-plural"> (cat)</span></p>
              <p class="frases" onclick="play(Tres8)"><span class="green-adj">8.</span> Your t-shirt is <span class="green-adj">less expensive than</span> mine.<span class="blue-plural"> (cheaper than)</span></p>
              <p class="frases" onclick="play(Tres9)"><span class="green-adj">9.</span> Canada is<span class="green-adj"> colder than </span> Argentina.<span class="blue-plural"> (Brazil)</span></p>
              <p class="frases" onclick="play(Tres10)"><span class="green-adj">10.</span> The work is much <span class="green-adj">more difficult than</span> I thought.<span class="blue-plural"> (case)</span></p>
              <h5 class="vermelho">Superlative</h5>
              <p class="frases" onclick="play(Tres11)"><span class="vermelho-adj">11.</span> I am  <span class="vermelho-adj">the youngest</span> man in class.<span class="blue-plural"></span></p>
              <p class="frases" onclick="play(Tres12)"><span class="vermelho-adj">12.</span> You are <span class="vermelho-adj">the smartest</span> person I know.<span class="blue-plural"></span></p>
              <p class="frases" onclick="play(Tres13)"><span class="vermelho-adj">13.</span> Jane isn´t <span class="vermelho-adj">the most beautiful</span> cousin in the family.<span class="blue-plural"></span></p>
              <p class="frases" onclick="play(Tres14)"><span class="vermelho-adj">14.</span> Bob and Jane are <span class="vermelho-adj">the most intelligent</span>.<span class="blue-plural"></span></p>      
              <p class="frases" onclick="play(Tres15)"><span class="vermelho-adj">15.</span> Jane is <span class="vermelho-adj">the eldest</span> of the three sisters.<span class="blue-plural"></span></p>
              <p class="frases" onclick="play(Tres16)"><span class="vermelho-adj">16.</span> Mount Everest is <span class="vermelho-adj">the highest</span> mountain in the world.<span class="blue-plural"></span></p>
              <p class="frases" onclick="play(Tres17)"><span class="vermelho-adj">17.</span> That´s  <span class="vermelho-adj">the best</span> film I have ever seen.<span class="blue-plural"></span></p>
              <p class="frases" onclick="play(Tres18)"><span class="vermelho-adj">18.</span> She has <span class="vermelho-adj">the biggest</span> house in the city.<span class="blue-plural"></span></p>
              <p class="frases" onclick="play(Tres19)"><span class="vermelho-adj">19.</span> I believe Paris is <span class="vermelho-adj">the most romantic</span> town in the world.<span class="blue-plural"></span></p>
              <p class="frases" onclick="play(Tres20)"><span class="vermelho-adj">20.</span> Yesterday was <span class="vermelho-adj">the most special</span> day of my entire life.<span class="blue-plural"></span></p>
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
                      <audio id="Tres1" src="./audio/Grammar/Sentences/Repetition/1.mp3"></audio>
                      <audio id="Tres2" src="./audio/Grammar/Sentences/Repetition/2.mp3"></audio>
                      <audio id="Tres3" src="./audio/Grammar/Sentences/Repetition/3.mp3"></audio>
                      <audio id="Tres4" src="./audio/Grammar/Sentences/Repetition/4.mp3"></audio>
                      <audio id="Tres5" src="./audio/Grammar/Sentences/Repetition/5.mp3"></audio>
                      <audio id="Tres6" src="./audio/Grammar/Sentences/Repetition/6.mp3"></audio>
                      <audio id="Tres7" src="./audio/Grammar/Sentences/Repetition/7.mp3"></audio>
                      <audio id="Tres8" src="./audio/Grammar/Sentences/Repetition/8.mp3"></audio>
                      <audio id="Tres9" src="./audio/Grammar/Sentences/Repetition/9.mp3"></audio>
                      <audio id="Tres10" src="./audio/Grammar/Sentences/Repetition/10.mp3"></audio>
                      <audio id="Tres11" src="./audio/Grammar/Sentences/Repetition/11.mp3"></audio>
                      <audio id="Tres12" src="./audio/Grammar/Sentences/Repetition/12.mp3"></audio>
                      <audio id="Tres13" src="./audio/Grammar/Sentences/Repetition/13.mp3"></audio>
                      <audio id="Tres14" src="./audio/Grammar/Sentences/Repetition/14.mp3"></audio>
                      <audio id="Tres15" src="./audio/Grammar/Sentences/Repetition/15.mp3"></audio>
                      <audio id="Tres16" src="./audio/Grammar/Sentences/Repetition/16.mp3"></audio>
                      <audio id="Tres17" src="./audio/Grammar/Sentences/Repetition/17.mp3"></audio>
                      <audio id="Tres18" src="./audio/Grammar/Sentences/Repetition/18.mp3"></audio>
                      <audio id="Tres19" src="./audio/Grammar/Sentences/Repetition/19.mp3"></audio>
                      <audio id="Tres20" src="./audio/Grammar/Sentences/Repetition/20.mp3"></audio>
                      
                                        
                      <h5 class="green">Comparative</h5>
                      <p class="frases" onclick="play(Tres1)"><span class="green-adj">1.</span> Your bike is <span class="green-adj">better than</span> mine.<span class="blue-plural"> (car)</span><br>
                      <em>Sua moto é melhor que a minha.</em></p>
                      <p class="frases" onclick="play(Tres2)"><span class="green-adj">2.</span> My daughter is <span class="green-adj">taller than</span> yours.<span class="blue-plural"> (son)</span><br>
                      <em>Minha filha é mais alta que a sua.</em></p>
                      <p class="frases" onclick="play(Tres3)"><span class="green-adj">3.</span> Jane and Bob play soccer, but Karol <span class="green-adj">is better.</span><span class="blue-plural"> (sing)</span><br>
                      <em>Jane e Bob jogam futebol, mas Karol é melhor.</em></p>
                      <p class="frases" onclick="play(Tres4)"><span class="green-adj">4.</span> I am <span class="green-adj">happier now than</span> before.<span class="blue-plural"> (We)</span><br>
                      <em>Estou mais feliz agora do que antes.</em></p>
                      <p class="frases" onclick="play(Tres5)"><span class="green-adj">5.</span> We need a <span class="green-adj">bigger </span> house.<span class="blue-plural"> (table)</span><br>
                      <em>Precisamos de uma casa maior.</em></p>
                      <p class="frases" onclick="play(Tres6)"><span class="green-adj">6.</span> He is three years <span class="green-adj">older than </span> me.<span class="blue-plural"> (younger)</span><br>
                      <em>Ele é três anos mais velho que eu.</em></p>
                      <p class="frases" onclick="play(Tres7)"><span class="green-adj">7.</span> His dog runs <span class="green-adj">faster than </span> Jane´s dog.<span class="blue-plural"> (cat)</span><br>
                      <em>Seu cachorro corre mais rápido que o cachorro de Jane.</em></p>
                      <p class="frases" onclick="play(Tres8)"><span class="green-adj">8.</span> Your t-shirt is <span class="green-adj">less expensive than</span> mine.<span class="blue-plural"> (cheaper than)</span><br>
                      <em>Sua camiseta é mais barata que a minha.</em></p>
                      <p class="frases" onclick="play(Tres9)"><span class="green-adj">9.</span> Canada is<span class="green-adj"> colder than </span> Argentina.<span class="blue-plural"> (Brazil)</span><br>
                      <em>O Canadá é mais frio que a Argentina.</em></p>
                      <p class="frases" onclick="play(Tres10)"><span class="green-adj">10.</span> The work is much <span class="green-adj">more difficult than</span> I thought.<span class="blue-plural"> (case)</span><br>
                      <em>O trabalho é muito mais difícil do que eu pensava.</em></p>
                      <h5 class="vermelho">Superlative</h5>
                      <p class="frases" onclick="play(Tres11)"><span class="vermelho-adj">11.</span> I am  <span class="vermelho-adj">the youngest</span> man in class.<span class="blue-plural"></span><br>
                      <em>Eu sou o homem mais novo da classe.</em></p>
                      <p class="frases" onclick="play(Tres12)"><span class="vermelho-adj">12.</span> You are <span class="vermelho-adj">the smartest</span> person I know.<span class="blue-plural"></span><br>
                      <em>Você é a pessoa mais inteligente que eu conheço.</em></p>
                      <p class="frases" onclick="play(Tres13)"><span class="vermelho-adj">13.</span> Jane isn´t <span class="vermelho-adj">the most beautiful</span> cousin in the family.<span class="blue-plural"></span><br>
                      <em>Jane não é a prima mais bonita da família.</em></p>
                      <p class="frases" onclick="play(Tres14)"><span class="vermelho-adj">14.</span> Bob and Jane are <span class="vermelho-adj">the most intelligent</span>.<span class="blue-plural"></span><br>
                      <em>Bob e Jane são os mais inteligentes.</em></p>      
                      <p class="frases" onclick="play(Tres15)"><span class="vermelho-adj">15.</span> Jane is <span class="vermelho-adj">the eldest</span> of the three sisters.<span class="blue-plural"></span><br>
                      <em>Jane é a mais velha das três irmãs.</em></p>
                      <p class="frases" onclick="play(Tres16)"><span class="vermelho-adj">16.</span> Mount Everest is <span class="vermelho-adj">the highest</span> mountain in the world.<span class="blue-plural"></span><br>
                      <em>O Monte Everest é a montanha mais alta do mundo.</em></p>
                      <p class="frases" onclick="play(Tres17)"><span class="vermelho-adj">17.</span> That´s  <span class="vermelho-adj">the best</span> film I have ever seen.<span class="blue-plural"></span><br>
                      <em>Esse é o melhor filme que eu já vi.</em></p>
                      <p class="frases" onclick="play(Tres18)"><span class="vermelho-adj">18.</span> She has <span class="vermelho-adj">the biggest</span> house in the city.<span class="blue-plural"></span><br>
                      <em>Ela tem a maior casa da cidade.</em></p>
                      <p class="frases" onclick="play(Tres19)"><span class="vermelho-adj">19.</span> I believe Paris is <span class="vermelho-adj">the most romantic</span> town in the world.<span class="blue-plural"></span><br>
                      <em>Acredito que Paris é a cidade mais romântica do mundo.</em></p>
                      <p class="frases" onclick="play(Tres20)"><span class="vermelho-adj">20.</span> Yesterday was <span class="vermelho-adj">the most special</span> day of my entire life.<span class="blue-plural"></span><br>
                      <em>Ontem foi o dia mais especial de toda a minha vida.</em></p>
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
    
    
    <p class="frases" onclick="play(Quatro1)"><span class="blue">1.</span> Which is <span class="blue-adj">better,</span> English or math?</p>
    <p class="frases" onclick="play(Quatro2)"><span class="blue">2.</span> Who is  <span class="blue-adj">taller, </span> your mom or dad?</p>
    <p class="frases" onclick="play(Quatro3)"><span class="blue">3.</span> Who is smaller,  <span class="blue-adj">you or your brother / sister</span>?</p>
    <p class="frases" onclick="play(Quatro4)"><span class="blue">4.</span> Which is <span class="blue-adj">tastier, </span> Coca-Cola or Pepsi?</p>
    <p class="frases" onclick="play(Quatro5)"><span class="blue">5.</span> Which is <span class="blue-adj">better, </span> McDonald’s or Burger King?</p>
    <p class="frases" onclick="play(Quatro6)"><span class="blue">6.</span> Which is <span class="blue-adj">healthier, </span> salad or pizza?</p>
    <p class="frases" onclick="play(Quatro7)"><span class="blue">7.</span> Which sport is <span class="blue-adj">more fun </span> to watch, soccer or tennis?</p>
    <p class="frases" onclick="play(Quatro8)"><span class="blue">8.</span> Which is <span class="blue-adj">faster,</span>a horse or a tiger?</p>
    <p class="frases" onclick="play(Quatro9)"><span class="blue">9.</span> Who is <span class="blue-adj">stronger,</span> superman or batman?</p>
    <p class="frases" onclick="play(Quatro10)"><span class="blue">10.</span> What is <span class="blue-adj">more expensive,</span> gold or silver?</p>
    <p class="frases" onclick="play(Quatro11)"><span class="blue">11.</span> Who’s <span class="blue-adj"> the funniest </span>person in your family?</p>
    <p class="frases" onclick="play(Quatro12)"><span class="blue">12.</span> Who is the <span class="blue-adj">tallest  </span> person in your family?</p>
    <p class="frases" onclick="play(Quatro13)"><span class="blue">13.</span> What is the <span class="blue-adj">most interesting</span> book you have read?</p>
    <p class="frases" onclick="play(Quatro14)"><span class="blue">14.</span> How many <span class="blue-adj">lives</span> does a cat have?</p>
    <p class="frases" onclick="play(Quatro15)"><span class="blue">15.</span> What was <span class="blue-adj">the most important</span> invention in history? </p>
    <p class="frases" onclick="play(Quatro16)"><span class="blue">16.</span> What´s  <span class="blue-adj">the most delicious</span> food you have tried?</p>
    <p class="frases" onclick="play(Quatro17)"><span class="blue">17.</span> Where’s  <span class="blue-adj">the hottest</span>place you’ve ever been?</p>
    <p class="frases" onclick="play(Quatro18)"><span class="blue">18.</span> What’s <span class="blue-adj"> the coldest </span>temperature you’ve ever experienced?</p>
    <p class="frases" onclick="play(Quatro19)"><span class="blue">19.</span> What´s <span class="blue-adj">the most expensive</span> thing you’ve ever bought?</p>
    <p class="frases" onclick="play(Quatro20)"><span class="blue">20.</span> Who is  <span class="blue-adj">the most famous</span> person you’ve ever seen in person?</p>           
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
    
    
    <p class="frases" onclick="play(Quatro1)"><span class="blue">1.</span> Which is <span class="blue-adj">better,</span> English or math?<br>
    <em>O que é melhor, inglês ou matemática?</em></p>
    <p class="frases" onclick="play(Quatro2)"><span class="blue">2.</span> Who is  <span class="blue-adj">taller, </span> your mom or dad?<br>
    <em>Quem é mais alto, sua mãe ou seu pai?</em></p>
    <p class="frases" onclick="play(Quatro3)"><span class="blue">3.</span> Who is smaller,  <span class="blue-adj">you or your brother / sister</span>?<br>
    <em>Quem é menor, você ou seu irmão/irmã?</em></p>
    <p class="frases" onclick="play(Quatro4)"><span class="blue">4.</span> Which is <span class="blue-adj">tastier, </span> Coca-Cola or Pepsi?<br>
    <em>Qual é mais saborosa, Coca-Cola ou Pepsi?</em></p>
    <p class="frases" onclick="play(Quatro5)"><span class="blue">5.</span> Which is <span class="blue-adj">better, </span> McDonald’s or Burger King?<br>
    <em>Qual é melhor, McDonald's ou Burger King?</em></p>
    <p class="frases" onclick="play(Quatro6)"><span class="blue">6.</span> Which is <span class="blue-adj">healthier, </span> salad or pizza?<br>
    <em>O que é mais saudável, salada ou pizza?</em></p>
    <p class="frases" onclick="play(Quatro7)"><span class="blue">7.</span> Which sport is <span class="blue-adj">more fun </span> to watch, soccer or tennis?<br>
    <em>Qual esporte é mais divertido de assistir, futebol ou tênis?</em></p>
    <p class="frases" onclick="play(Quatro8)"><span class="blue">8.</span> Which is <span class="blue-adj">faster,</span>a horse or a tiger?<br>
    <em>O que é mais rápido, um cavalo ou um tigre?</em></p>
    <p class="frases" onclick="play(Quatro9)"><span class="blue">9.</span> Who is <span class="blue-adj">stronger,</span> superman or batman?<br>
    <em>Quem é mais forte, superman ou batman?</em></p>
    <p class="frases" onclick="play(Quatro10)"><span class="blue">10.</span> What is <span class="blue-adj">more expensive,</span> gold or silver?<br>
    <em>O que é mais caro, ouro ou prata?</em></p>
    <p class="frases" onclick="play(Quatro11)"><span class="blue">11.</span> Who’s <span class="blue-adj"> the funniest </span>person in your family?<br>
    <em>Quem é a pessoa mais engraçada da sua família?</em></p>
    <p class="frases" onclick="play(Quatro12)"><span class="blue">12.</span> Who is the <span class="blue-adj">tallest  </span> person in your family?<br>
    <em>Quem é a pessoa mais alta da sua família?</em></p>
    <p class="frases" onclick="play(Quatro13)"><span class="blue">13.</span> What is the <span class="blue-adj">most interesting</span> book you have read?<br>
    <em>Qual é o livro mais interessante que você leu?</em></p>
    <p class="frases" onclick="play(Quatro14)"><span class="blue">14.</span> How many <span class="blue-adj">lives</span> does a cat have?<br>
    <em>Quantas vidas tem um gato?</em></p>
    <p class="frases" onclick="play(Quatro15)"><span class="blue">15.</span> What was <span class="blue-adj">the most important</span> invention in history? <br>
    <em>Qual foi a invenção mais importante da história?</em></p>
    <p class="frases" onclick="play(Quatro16)"><span class="blue">16.</span> What´s  <span class="blue-adj">the most delicious</span> food you have tried?<br>
    <em>Qual é a comida mais deliciosa que você experimentou?</em></p>
    <p class="frases" onclick="play(Quatro17)"><span class="blue">17.</span> Where’s  <span class="blue-adj">the hottest</span>place you’ve ever been?<br>
    <em>Onde é o lugar mais quente que você já esteve?</em></p>
    <p class="frases" onclick="play(Quatro18)"><span class="blue">18.</span> What’s <span class="blue-adj"> the coldest </span>temperature you’ve ever experienced?<br>
    <em>Qual é a temperatura mais fria que você já experimentou?</em></p>
    <p class="frases" onclick="play(Quatro19)"><span class="blue">19.</span> What´s <span class="blue-adj">the most expensive</span> thing you’ve ever bought?<br>
    <em>Qual é a coisa mais cara que você já comprou?</em></p>
    <p class="frases" onclick="play(Quatro20)"><span class="blue">20.</span> Who is  <span class="blue-adj">the most famous</span> person you’ve ever seen in person?<br>
    <em>Quem é a pessoa mais famosa que você já viu pessoalmente?</em></p>             
                      
                          
                  `;
  
    //changing the content in your element
    element.innerHTML = newContent;
  }
  s;
  