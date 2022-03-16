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
    <iframe width="560" height="315" src="https://www.youtube.com/embed/23sIBk6gL4w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                `;
  
    //changing the content in your element
    element.innerHTML = newContent;
  }
  
  function changeVideoPt() {
    let element = document.getElementById("videoGrammar");
    let newContent = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/IEo0Wlv1Iu8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          
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
                                          
                        <p class="frases" onclick="play(Tres1)"><span class="green-adj">1.</span> I <span class="green-adj">was talking </span> to Father Christmas.<span class="blue-plural"> (mom)</span> </p>
                        <p class="frases" onclick="play(Tres2)"><span class="green-adj">2.</span> Your father <span class="green-adj">was telling </span> the truth.<span class="blue-plural"> (a lie)</span></p>
                        <p class="frases" onclick="play(Tres3)"><span class="green-adj">3.</span> Actually we <span class="green-adj">were thinking </span> of you.<span class="blue-plural"> (him)</span></p>
                        <p class="frases" onclick="play(Tres4)"><span class="green-adj">4.</span> We <span class="green-adj">were walking </span> home when I met Jane. <span class="blue-plural"> (them)</span></p>
                        <p class="frases" onclick="play(Tres5)"><span class="green-adj">5.</span> It <span class="green-adj">was raining </span> when I got up. <span class="blue-plural"> (snowing)</span></p>
                        <p class="frases" onclick="play(Tres6)"><span class="green-adj">6.</span> I hurt my back while I <span class="green-adj">was working </span> in the garden. <span class="blue-plural"> (arm)</span></p>
                        <p class="frases" onclick="play(Tres7)"><span class="green-adj">7.</span> I waved to Jane, but she <span class="green-adj">wasn’t looking. </span> <span class="blue-plural">(Bob)</span></p>
                        <p class="frases" onclick="play(Tres8)"><span class="cyan-adj">8.</span> I <span class="cyan-adj">am stopping</span> for a smoke.<span class="blue-plural"> (drink)</span></p>
                        <p class="frases" onclick="play(Tres9)"><span class="cyan-adj">9.</span> My brother <span class="cyan-adj">is studying</span> at Columbia.<span class="blue-plural"> (at home)</span></p>
                        <p class="frases" onclick="play(Tres10)"><span class="cyan-adj">10.</span> The children <span class="cyan-adj">are taking</span> a test.<span class="blue-plural"> (their toys)</span></p>
                        <p class="frases" onclick="play(Tres11)"><span class="cyan-adj">11.</span> The water <span class="cyan-adj">is boiling</span>. Be careful! <span class="blue-plural"> (Don´t touch it)</span></p>
                        <p class="frases" onclick="play(Tres12)"><span class="cyan-adj">12.</span> I<span class="cyan-adj">´m getting</span> thirst. Let’s go and drink.<span class="blue-plural"> (hungry - to eat)</span></p>
                        <p class="frases" onclick="play(Tres13)"><span class="cyan-adj">13.</span> The population of the world <span class="cyan-adj">is increasing</span> very fast.<span class="blue-plural"> (in China)</span></p>
                        <p class="frases" onclick="play(Tres14)"><span class="cyan-adj">14.</span> You <span class="cyan-adj">are working</span> hard today.<span class="blue-plural"> <span class="blue-plural"> (study)</span></p>
                        <p class="frases" onclick="play(Tres15)"><span class="yellow-adj">15.</span>  Don’t phone between 10 and 11. We<span class="yellow-adj">´ll be eating</span>.<span class="blue-plural"> (to sleep)</span></p>
                        <p class="frases" onclick="play(Tres16)"><span class="yellow-adj">16.</span> The government <span class="yellow-adj"> will be making</span> a statement about the crisis later today. <span class="blue-plural"> (The President)</span></p>
                        <p class="frases" onclick="play(Tres17)"><span class="yellow-adj">17.</span> I <span class="yellow-adj">will be travelling </span>round Europe next week.<span class="blue-plural"> (month)</span></p>
                        <p class="frases" onclick="play(Tres18)"><span class="yellow-adj">18.</span> He <span class="yellow-adj">will be turning </span> pro.<span class="blue-plural"> (master)</span></p>
                        <p class="frases" onclick="play(Tres19)"><span class="yellow-adj">19.</span> Well, I'm sure once they hear what their boy did, They<span class="yellow-adj"> will be understanding.</span><span class="blue-plural"> (child)</span></p>
                        <p class="frases" onclick="play(Tres20)"><span class="yellow-adj">20.</span> And the doctor <span class="yellow-adj">will be visiting</span> her on the 14th.<span class="blue-plural"> (in 10 days)</span></p>
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
                                        
                      <p class="frases" onclick="play(Tres1)"><span class="green-adj">1.</span> I <span class="green-adj">was talking </span> to Father Christmas.<span class="blue-plural"> (mom)</span> <br>
                      <em>Eu estava falando com o Papai Noel.</em></p>
                      <p class="frases" onclick="play(Tres2)"><span class="green-adj">2.</span> Your father <span class="green-adj">was telling </span> the truth.<span class="blue-plural"> (a lie)</span><br>
                      <em>Seu pai estava dizendo a verdade.</em></p>
                      <p class="frases" onclick="play(Tres3)"><span class="green-adj">3.</span> Actually we <span class="green-adj">were thinking </span> of you.<span class="blue-plural"> (him)</span><br>
                      <em>Na verdade, estávamos pensando em você.</em></p>
                      <p class="frases" onclick="play(Tres4)"><span class="green-adj">4.</span> We <span class="green-adj">were walking </span> home when I met Jane. <span class="blue-plural"> (them)</span><br>
                      <em>Estávamos voltando para casa quando encontramos Jane.</em></p>
                      <p class="frases" onclick="play(Tres5)"><span class="green-adj">5.</span> It <span class="green-adj">was raining </span> when I got up. <span class="blue-plural"> (snowing)</span><br>
                      <em>Chovia quando me levantei.</em></p>
                      <p class="frases" onclick="play(Tres6)"><span class="green-adj">6.</span> I hurt my back while I <span class="green-adj">was working </span> in the garden. <span class="blue-plural"> (arm)</span><br>
                      <em>Machuquei minhas costas enquanto trabalhava no jardim.</em></p>
                      <p class="frases" onclick="play(Tres7)"><span class="green-adj">7.</span> I waved to Jane, but she <span class="green-adj">wasn’t looking. </span> <span class="blue-plural">(Bob)</span><br>
                      <em>Acenei para Jane, mas ela não estava olhando.</em></p>
                      <p class="frases" onclick="play(Tres8)"><span class="cyan-adj">8.</span> I <span class="cyan-adj">am stopping</span> for a smoke.<span class="blue-plural"> (drink)</span><br>
                      <em>Estou parando para fumar.</em></p>
                      <p class="frases" onclick="play(Tres9)"><span class="cyan-adj">9.</span> My brother <span class="cyan-adj">is studying</span> at Columbia.<span class="blue-plural"> (at home)</span><br>
                      <em>Meu irmão está estudando na Columbia.</em></p>
                      <p class="frases" onclick="play(Tres10)"><span class="cyan-adj">10.</span> The children <span class="cyan-adj">are taking</span> a test.<span class="blue-plural"> (their toys)</span><br>
                      <em>As crianças estão fazendo um teste.</em></p>
                      <p class="frases" onclick="play(Tres11)"><span class="cyan-adj">11.</span> The water <span class="cyan-adj">is boiling</span>. Be careful! <span class="blue-plural"> (Don´t touch it)</span><br>
                      <em>A água esta fervendo. Tome cuidado!</em></p>
                      <p class="frases" onclick="play(Tres12)"><span class="cyan-adj">12.</span> I<span class="cyan-adj">´m getting</span> thirst. Let’s go and drink.<span class="blue-plural"> (hungry - to eat)</span><br>
                      <em>Estou ficando com sede. Vamos beber.</em></p>
                      <p class="frases" onclick="play(Tres13)"><span class="cyan-adj">13.</span> The population of the world <span class="cyan-adj">is increasing</span> very fast.<span class="blue-plural"> (in China)</span><br>
                      <em>A população do mundo está aumentando muito rapidamente.</em></p>
                      <p class="frases" onclick="play(Tres14)"><span class="cyan-adj">14.</span> You <span class="cyan-adj">are working</span> hard today.<span class="blue-plural"> <span class="blue-plural"> (study)</span><br>
                      <em>Você está trabalhando duro hoje.</em></p>
                      <p class="frases" onclick="play(Tres15)"><span class="yellow-adj">15.</span>  Don’t phone between 10 and 11. We<span class="yellow-adj">´ll be eating</span>.<span class="blue-plural"> (to sleep)</span><br>
                      <em>Não ligue entre 10 e 11. Vamos comer.</em></p>
                      <p class="frases" onclick="play(Tres16)"><span class="yellow-adj">16.</span> The government <span class="yellow-adj"> will be making</span> a statement about the crisis later today. <span class="blue-plural"> (The President)</span><br>
                      <em>O governo fará uma declaração sobre a crise ainda hoje.</em></p>
                      <p class="frases" onclick="play(Tres17)"><span class="yellow-adj">17.</span> I <span class="yellow-adj">will be travelling </span>round Europe next week.<span class="blue-plural"> (month)</span><br>
                      <em>Estarei viajando pela Europa na próxima semana.</em></p>
                      <p class="frases" onclick="play(Tres18)"><span class="yellow-adj">18.</span> He <span class="yellow-adj">will be turning </span> pro.<span class="blue-plural"> (master)</span><br>
                      <em>Ele vai se tornar profissional.</em></p>
                      <p class="frases" onclick="play(Tres19)"><span class="yellow-adj">19.</span> Well, I'm sure once they hear what their boy did, They<span class="yellow-adj"> will be understanding.</span><span class="blue-plural"> (child)</span><br>
                      <em>Bem, tenho certeza que quando eles ouvirem o que o garoto deles fez, eles entenderão.</em></p>
                      <p class="frases" onclick="play(Tres20)"><span class="yellow-adj">20.</span> And the doctor <span class="yellow-adj">will be visiting</span> her on the 14th.<span class="blue-plural"> (in 10 days)</span><br>
                      <em>E o médico irá visitá-la no dia 14.</em></p>
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
                          
                          
                        <p class="frases" onclick="play(Quatro1)"><span class="blue">1.</span> <span class="blue-adj">Was she</span> going to school?</p>
                        <p class="frases" onclick="play(Quatro2)"><span class="blue">2.</span> <span class="blue-adj">Were they </span> singing a song?</p>
                        <p class="frases" onclick="play(Quatro3)"><span class="blue">3.</span> <span class="blue-adj">Was she</span> working at home?</p>
                        <p class="frases" onclick="play(Quatro4)"><span class="blue">4.</span> <span class="blue-adj">Was he</span> teaching English?</p>
                        <p class="frases" onclick="play(Quatro5)"><span class="blue">5.</span> <span class="blue-adj">Was she</span> eating pizza?</p>
                        <p class="frases" onclick="play(Quatro6)"><span class="blue">6.</span> <span class="blue-adj">Was I </span> answering correctly?</p>
                        <p class="frases" onclick="play(Quatro7)"><span class="blue">7.</span> <span class="blue-adj">Were they</span> crying?</p>
                        <p class="frases" onclick="play(Quatro8)"><span class="blue">8.</span> <span class="blue-adj">Is she </span>going to church?</p>
                        <p class="frases" onclick="play(Quatro9)"><span class="blue">9.</span> <span class="blue-adj">Is your son</span> buying a new phone?</p>
                        <p class="frases" onclick="play(Quatro10)"><span class="blue">10.</span> <span class="blue-adj">Are they</span> playing soccer?</p>
                        <p class="frases" onclick="play(Quatro11)"><span class="blue">11.</span> <span class="blue-adj">Are you</span> enjoying the music?</p>
                        <p class="frases" onclick="play(Quatro12)"><span class="blue">12.</span> <span class="blue-adj">Is it</span> raining?</p>
                        <p class="frases" onclick="play(Quatro13)"><span class="blue">13.</span> <span class="blue-adj">Are you</span> really helping me?</p>
                        <p class="frases" onclick="play(Quatro14)"><span class="blue">14.</span> <span class="blue-adj">Is she </span> taking her medicines?</p>
                        <p class="frases" onclick="play(Quatro15)"><span class="blue">15.</span> <span class="blue-adj">Will he </span> be going to school?</p>
                        <p class="frases" onclick="play(Quatro16)"><span class="blue">16.</span> <span class="blue-adj">Will she</span> be waiting here?</p>
                        <p class="frases" onclick="play(Quatro17)"><span class="blue">17.</span> <span class="blue-adj">Will they </span>be helping us?</p>
                        <p class="frases" onclick="play(Quatro18)"><span class="blue">18.</span> <span class="blue-adj">Will we</span>be using our phones?</p>
                        <p class="frases" onclick="play(Quatro19)"><span class="blue">19.</span> <span class="blue-adj">Will she</span> be sleeping?</p>
                        <p class="frases" onclick="play(Quatro20)"><span class="blue">20.</span> <span class="blue-adj">Will they</span> be eating?</p>       
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
                          
                          
                         
                        <p class="frases" onclick="play(Quatro1)"><span class="blue">1.</span> <span class="blue-adj">Was she</span> going to school?</br>
                        <em>Quantas casas você tem?</em></p>
                        <p class="frases" onclick="play(Quatro2)"><span class="blue">2.</span> <span class="blue-adj">Were they </span> singing a song?</br>
                        <em>Eles estavam cantando uma música?</em></p>
                        <p class="frases" onclick="play(Quatro3)"><span class="blue">3.</span> <span class="blue-adj">Was she</span> working at home?</br>
                        <em>Ela estava trabalhando em casa?</em></p>
                        <p class="frases" onclick="play(Quatro4)"><span class="blue">4.</span> <span class="blue-adj">Was he</span> teaching English?</br>
                        <em>Ele estava ensinando inglês?</em></p>
                        <p class="frases" onclick="play(Quatro5)"><span class="blue">5.</span> <span class="blue-adj">Was she</span> eating pizza?</br>
                        <em>Ela estava comendo pizza?</em></p>
                        <p class="frases" onclick="play(Quatro6)"><span class="blue">6.</span> <span class="blue-adj">Was I </span> answering correctly?</br>
                        <em>Eu estava respondendo corretamente?</em></p>
                        <p class="frases" onclick="play(Quatro7)"><span class="blue">7.</span> <span class="blue-adj">Were they</span> crying?</br>
                        <em>Eles estavam chorando?</em></p>
                        <p class="frases" onclick="play(Quatro8)"><span class="blue">8.</span> <span class="blue-adj">Is she </span>going to church?</br>
                        <em>Ela está indo para a igreja?</em></p>
                        <p class="frases" onclick="play(Quatro9)"><span class="blue">9.</span> <span class="blue-adj">Is your son</span> buying a new phone?</br>
                        <em>Seu filho está comprando um novo telefone?</em></p>
                        <p class="frases" onclick="play(Quatro10)"><span class="blue">10.</span> <span class="blue-adj">Are they</span> playing soccer?</br>
                        <em>Eles estão jogando futebol?</em></p>
                        <p class="frases" onclick="play(Quatro11)"><span class="blue">11.</span> <span class="blue-adj">Are you</span> enjoying the music?</br>
                        <em>Você está curtindo a música?</em></p>
                        <p class="frases" onclick="play(Quatro12)"><span class="blue">12.</span> <span class="blue-adj">Is it</span> raining?</br>
                        <em>Está chovendo?</em></p>
                        <p class="frases" onclick="play(Quatro13)"><span class="blue">13.</span> <span class="blue-adj">Are you</span> really helping me?</br>
                        <em>Você está realmente me ajudando?</em></p>
                        <p class="frases" onclick="play(Quatro14)"><span class="blue">14.</span> <span class="blue-adj">Is she </span> taking her medicines?</br>
                        <em>Ela está tomando seus remédios?</em></p>
                        <p class="frases" onclick="play(Quatro15)"><span class="blue">15.</span> <span class="blue-adj">Will he </span> be going to school?</br>
                        <em>Ele vai para a escola?</em></p>
                        <p class="frases" onclick="play(Quatro16)"><span class="blue">16.</span> <span class="blue-adj">Will she</span> be waiting here?</br>
                        <em>Ela estará esperando aqui?</em></p>
                        <p class="frases" onclick="play(Quatro17)"><span class="blue">17.</span> <span class="blue-adj">Will they </span>be helping us?</br>
                        <em>Eles estarão nos ajudando?</em></p>
                        <p class="frases" onclick="play(Quatro18)"><span class="blue">18.</span> <span class="blue-adj">Will we</span>be using our phones?</br>
                        <em>Estaremos usando nossos telefones?</em></p>
                        <p class="frases" onclick="play(Quatro19)"><span class="blue">19.</span> <span class="blue-adj">Will she</span> be sleeping?</br>
                        <em>Ela vai dormir?</em></p>
                        <p class="frases" onclick="play(Quatro20)"><span class="blue">20.</span> <span class="blue-adj">Will they</span> be eating?</br>
                        <em>Eles vão comer?</em></p>  
                      
                          
                  `;
  
    //changing the content in your element
    element.innerHTML = newContent;
  }
  s;
  