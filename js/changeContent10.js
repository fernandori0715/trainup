function changePtSummary() {
    let element = document.getElementById("text_summary");
    let newContent = `
              <img src="img/pronouns.jpg" width="100%" alt="pronouns"/>
  
            
              
                  `;
  
    //changing the content in your element
    element.innerHTML = newContent;
  }
  function changeEnSummary() {
    let element = document.getElementById("text_summary");
    let newContent = `
          <img src="img/adverbs.png" width="100%" alt="adverbs">
          
          <!--START OF VERBS & WORDS-->
          <button
            type="button"
            class="btn btn-warning"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Adverbs - Audio
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
    <iframe width="560" height="315" src="https://www.youtube.com/embed/skqj4jOSQU4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                `;
  
    //changing the content in your element
    element.innerHTML = newContent;
  }
  
  function changeVideoPt() {
    let element = document.getElementById("videoGrammar");
    let newContent = `
    <div id="videoGrammar">
    <iframe width="370" height="300" src="https://www.youtube.com/embed/IJ5nqhFaqoY"
                     title="YouTube video player" frameborder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowfullscreen></iframe>
   <iframe width="370" height="300" src="https://www.youtube.com/embed/2JKcJ238Ulk"
                     title="YouTube video player" frameborder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowfullscreen></iframe>
   <iframe width="560" height="315" src="https://www.youtube.com/embed/EWSUUiMbf40" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   
 </div>
          
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
                                
              <p class="frases" onclick="play(Tres1)"><span class="green-adj">1.</span> I <span class="green-adj">can </span> speak Spanish.<span class="blue-plural"> (Italian)</span> </p>
              <p class="frases" onclick="play(Tres2)"><span class="green-adj">2.</span> <span class="green-adj">Can </span> I go to the bathroom?<span class="blue-plural"> (my room)</span></p>
              <p class="frases" onclick="play(Tres3)"><span class="green-adj">3.</span> It  <span class="green-adj">can´t </span> be Jane. She is at work now.<span class="blue-plural"> (not at home)</span></p>
              <p class="frases" onclick="play(Tres4)"><span class="green-adj">4.</span> She <span class="green-adj">could</span> play the piano when she was five years old.<span class="blue-plural"> (swim)</span></p>
              <p class="frases" onclick="play(Tres5)"><span class="green-adj">5.</span> My brother <span class="green-adj">could </span> go to the club.<span class="blue-plural"> (stay)</span></p>
              <p class="frases" onclick="play(Tres6)"><span class="green-adj">6.</span> It <span class="green-adj">could</span> get much hotter in December.<span class="blue-plural"> (January))</span></p>
              <p class="frases" onclick="play(Tres7)"><span class="green-adj">7.</span> I <span class="green-adj">could  </span> lend you my smartphone.<span class="blue-plural"> (bike)</span></p>
              <p class="frases" onclick="play(Tres8)"><span class="green-adj">8.</span> It <span class="green-adj">may </span> rain tomorrow.<span class="blue-plural"> (snow)</span></p>
              <p class="frases" onclick="play(Tres9)"><span class="green-adj">9.</span> <span class="green-adj"> May </span>I come in? <span class="blue-plural"></span></p>
              <p class="frases" onclick="play(Tres10)"><span class="green-adj">10.</span> It <span class="green-adj">might</span> rain today.<span class="blue-plural"> (be sunny)</span></p>
              <p class="frases" onclick="play(Tres11)"><span class="green-adj">11.</span> You <span class="green-adj">musn´t </span> run inside the church.<span class="blue-plural"> (hospital)</span></p>
              <p class="frases" onclick="play(Tres12)"><span class="green-adj">12.</span> It´s quite dark, it <span class="green-adj">must</span> be after 9 o´clock.<span class="blue-plural"> (10)</span></p>
              <p class="frases" onclick="play(Tres13)"><span class="green-adj">13.</span> She <span class="green-adj">shouldn´t</span> smoke.<span class="blue-plural"> (drink)</span></p>
              <p class="frases" onclick="play(Tres14)"><span class="green-adj">14.</span> I believe she <span class="green-adj">will</span> study harder this time.<span class="blue-plural"> (pass the exam)</span></p>
              <p class="frases" onclick="play(Tres15)"><span class="green-adj">15.</span> It´s very cold here. I <span class="green-adj">will</span> close the windown.<span class="blue-plural"> (get a coat)</span></p>
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
                                            
                          <p class="frases" onclick="play(Tres1)"><span class="green-adj">1.</span> I <span class="green-adj">can </span> speak Spanish.<span class="blue-plural"> (Italian)</span></br>
                          <em>Eu posso falar Espanhol.</em></p>
                          <p class="frases" onclick="play(Tres2)"><span class="green-adj">2.</span> <span class="green-adj">Can </span> I go to the bathroom?<span class="blue-plural"> (my room)</span></br>
                          <em>Posso ir ao banheiro? (meu quarto)</em></p>
                          <p class="frases" onclick="play(Tres3)"><span class="green-adj">3.</span> It  <span class="green-adj">can´t </span> be Jane. She is at work now.<span class="blue-plural"> (not at home)</span></br>
                          <em>Não pode ser Jane. Ela está no trabalho agora. (não em casa)</em></p>
                          <p class="frases" onclick="play(Tres4)"><span class="green-adj">4.</span> She <span class="green-adj">could</span> play the piano when she was five years old.<span class="blue-plural"> (swim)</span></br>
                          <em>Ela sabia tocar piano quando tinha cinco anos. (nadar)</em></p>
                          <p class="frases" onclick="play(Tres5)"><span class="green-adj">5.</span> My brother <span class="green-adj">could </span> go to the club.<span class="blue-plural"> (stay)</span></br>
                          <em>Meu irmão poderia ir ao clube. (fique)</em></p>
                          <p class="frases" onclick="play(Tres6)"><span class="green-adj">6.</span> It <span class="green-adj">could</span> get much hotter in December.<span class="blue-plural"> (January)</span></br>
                          <em>Pode ficar muito mais quente em dezembro. (Janeiro)</em></p>
                          <p class="frases" onclick="play(Tres7)"><span class="green-adj">7.</span> I <span class="green-adj">could  </span> lend you my smartphone.<span class="blue-plural"> (bike)</span></br>
                          <em> I could lend you my smartphone. (bike)</em></p>
                          <p class="frases" onclick="play(Tres8)"><span class="green-adj">8.</span> It <span class="green-adj">may </span> rain tomorrow.<span class="blue-plural"> (snow)</span></br>
                          <em>Pode chover amanhã. (neve)</em></p>
                          <p class="frases" onclick="play(Tres9)"><span class="green-adj">9.</span> <span class="green-adj"> May </span>I come in? <span class="blue-plural"></span></br>
                          <em>Posso entrar?</em></p>
                          <p class="frases" onclick="play(Tres10)"><span class="green-adj">10.</span> It <span class="green-adj">might</span> rain today.<span class="blue-plural"> (be sunny)</span></br>
                          <em>Pode chover hoje. (estar ensolarado)</em></p>
                          <p class="frases" onclick="play(Tres11)"><span class="green-adj">11.</span> You <span class="green-adj">musn´t </span> run inside the church.<span class="blue-plural"> (hospital)</span></br>
                          <em>Você não deve correr dentro da igreja. (hospital)</em></p>
                          <p class="frases" onclick="play(Tres12)"><span class="green-adj">12.</span> It´s quite dark, it <span class="green-adj">must</span> be after 9 o´clock.<span class="blue-plural"> (10)</span></br>
                          <em>Está bem escuro, deve ser depois das 9 horas. (10)</em></p>
                          <p class="frases" onclick="play(Tres13)"><span class="green-adj">13.</span> She <span class="green-adj">shouldn´t</span> smoke.<span class="blue-plural"> (drink)</span></br>
                          <em>Ela não deveria fumar. (beber)</em></p>
                          <p class="frases" onclick="play(Tres14)"><span class="green-adj">14.</span> I believe she <span class="green-adj">will</span> study harder this time.<span class="blue-plural"> (pass the exam)</span></br>
                          <em>Eu acredito que ela vai estudar mais desta vez. (passar no exame)</em></p>
                          <p class="frases" onclick="play(Tres15)"><span class="green-adj">15.</span> It´s very cold here. I <span class="green-adj">will</span> close the windown.<span class="blue-plural"> (get a coat)</span></br>
                          <em>Está muito frio aqui. Eu vou fechar a janela. (pegue um casaco)</em></p>
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
                          
                          
                          <p class="frases" onclick="play(Quatro1)"><span class="blue">1.</span> How many languages <span class="blue-adj">can you</span> speak?</p>
                          <p class="frases" onclick="play(Quatro2)"><span class="blue">2.</span> Excuse me, <span class="blue-adj"> could I </span> just open the windown?</p>
                          <p class="frases" onclick="play(Quatro3)"><span class="blue">3.</span> <span class="blue-adj">May I </span>use your phone now?</p>
                          <p class="frases" onclick="play(Quatro4)"><span class="blue">4.</span> What <span class="blue-adj">should you</span> do to speak English fluently?</p>
                          <p class="frases" onclick="play(Quatro5)"><span class="blue">5.</span> <span class="blue-adj">Might I </span> suggest an idea for the project?</p>
                          <p class="frases" onclick="play(Quatro6)"><span class="blue">6.</span> <span class="blue-adj">Will you</span> give me his phone number?</p>
                          <p class="frases" onclick="play(Quatro7)"><span class="blue">7.</span> What <span class="blue-adj">must you</span> do in your job?</p>
                          <p class="frases" onclick="play(Quatro8)"><span class="blue">8.</span> <span class="blue-adj">Could I </span>borrow your car?</p>
                          <p class="frases" onclick="play(Quatro9)"><span class="blue">9.</span> How many glasses of water <span class="blue-adj">can you </span> drink in one minute?</p>
                          <p class="frases" onclick="play(Quatro10)"><span class="blue">10.</span>  <span class="blue-adj">Shouldn´t you </span>try to eat better?</p>
                          <p class="frases" onclick="play(Quatro11)"><span class="blue">11.</span> <span class="blue-adj">May I </span> visit you tomorrow?</p>
                          <p class="frases" onclick="play(Quatro12)"><span class="blue">12.</span> <span class="blue-adj">Can you </span>repeat that please?</p>
                          <p class="frases" onclick="play(Quatro13)"><span class="blue">13.</span> <span class="blue-adj">Would he </span> like a slice of pizza?</p>
                          <p class="frases" onclick="play(Quatro14)"><span class="blue">14.</span> <span class="blue-adj">Could I </span> speak to Jane?</p>
                          <p class="frases" onclick="play(Quatro15)"><span class="blue">15.</span> <span class="blue-adj">Must she </span> leave this weekend?</p>
                          <p class="frases" onclick="play(Quatro16)"><span class="blue">16.</span> <span class="blue-adj">Can we </span> smoke here?</p>
                          <p class="frases" onclick="play(Quatro17)"><span class="blue">17.</span> What <span class="blue-adj">must you</span> wear for the job interview?</p>
                          <p class="frases" onclick="play(Quatro18)"><span class="blue">18.</span> <span class="blue-adj">Could you</span> bring me a glass of water?</p>
                          <p class="frases" onclick="play(Quatro19)"><span class="blue">19.</span> <span class="blue-adj">Would you </span> buy me a ring?</p>
                          <p class="frases" onclick="play(Quatro20)"><span class="blue">20.</span> <span class="blue-adj">Can you</span> clean your room?</p>       
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
                          
                          
                         
                        <p class="frases" onclick="play(Quatro1)"><span class="blue">1.</span> How many languages <span class="blue-adj">can you</span> speak?</br>
                        <em>Quantos idiomas você pode falar?</em></p>
                        <p class="frases" onclick="play(Quatro2)"><span class="blue">2.</span> Excuse me, <span class="blue-adj"> could I </span> just open the windown?</br>
                        <em>Com licença, posso abrir a janela?</em></p>
                        <p class="frases" onclick="play(Quatro3)"><span class="blue">3.</span> <span class="blue-adj">May I </span>use your phone now?</br>
                        <em>Posso usar seu telefone agora?</em></p>
                        <p class="frases" onclick="play(Quatro4)"><span class="blue">4.</span> What <span class="blue-adj">should you</span> do to speak English fluently?</br>
                        <em>O que você deve fazer para falar inglês fluentemente?</em></p>
                        <p class="frases" onclick="play(Quatro5)"><span class="blue">5.</span> <span class="blue-adj">Might I </span> suggest an idea for the project?</br>
                        <em>Posso sugerir uma ideia para o projeto?</em></p>
                        <p class="frases" onclick="play(Quatro6)"><span class="blue">6.</span> <span class="blue-adj">Will you</span> give me his phone number?</br>
                        <em>Você me dá o telefone dele?</em></p>
                        <p class="frases" onclick="play(Quatro7)"><span class="blue">7.</span> What <span class="blue-adj">must you</span> do in your job?</br>
                        <em>O que você deve fazer em seu trabalho?</em></p>
                        <p class="frases" onclick="play(Quatro8)"><span class="blue">8.</span> <span class="blue-adj">Could I </span>borrow your car?</br>
                        <em>Poderia pegar seu carro emprestado?</em></p>
                        <p class="frases" onclick="play(Quatro9)"><span class="blue">9.</span> How many glasses of water <span class="blue-adj">can you </span> drink in one minute?</br>
                        <em>Quantos copos de água você pode beber em um minuto?</em></p>
                        <p class="frases" onclick="play(Quatro10)"><span class="blue">10.</span>  <span class="blue-adj">Shouldn´t you </span>try to eat better?</br>
                        <em>Você não deveria tentar comer melhor?</em></p>
                        <p class="frases" onclick="play(Quatro11)"><span class="blue">11.</span> <span class="blue-adj">May I </span> visit you tomorrow?</br>
                        <em>Posso te visitar amanhã?</em></p>
                        <p class="frases" onclick="play(Quatro12)"><span class="blue">12.</span> <span class="blue-adj">Can you </span>repeat that please?</br>
                        <em>Você pode repetir por favor?</em></p>
                        <p class="frases" onclick="play(Quatro13)"><span class="blue">13.</span> <span class="blue-adj">Would he </span> like a slice of pizza?</br>
                        <em>Ele gostaria de uma fatia de pizza?</em></p>
                        <p class="frases" onclick="play(Quatro14)"><span class="blue">14.</span> <span class="blue-adj">Could I </span> speak to Jane?</br>
                        <em>Posso falar com Jane?</em></p>
                        <p class="frases" onclick="play(Quatro15)"><span class="blue">15.</span> <span class="blue-adj">Must she </span> leave this weekend?</br>
                        <em>Ela deve sair neste fim de semana?</em></p>
                        <p class="frases" onclick="play(Quatro16)"><span class="blue">16.</span> <span class="blue-adj">Can we </span> smoke here?</br>
                        <em>Podemos fumar aqui?</em></p>
                        <p class="frases" onclick="play(Quatro17)"><span class="blue">17.</span> What <span class="blue-adj">must you</span> wear for the job interview?</br>
                        <em>O que você deve vestir para a entrevista de emprego?</em></p>
                        <p class="frases" onclick="play(Quatro18)"><span class="blue">18.</span> <span class="blue-adj">Could you</span> bring me a glass of water?</br>
                        <em>Você poderia me trazer um copo de água?</em></p>
                        <p class="frases" onclick="play(Quatro19)"><span class="blue">19.</span> <span class="blue-adj">Would you </span> buy me a ring?</br>
                        <em>Você me compraria um anel?</em></p>
                        <p class="frases" onclick="play(Quatro20)"><span class="blue">20.</span> <span class="blue-adj">Can you</span> clean your room?</br>
                        <em>Você pode limpar seu quarto?</em></p>
                      
                          
                  `;
  
    //changing the content in your element
    element.innerHTML = newContent;
  }
  s;
  