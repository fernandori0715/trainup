function changePtSummary() {
  let element = document.getElementById("text_summary");
  let newContent = `
            <audio
              id="v1"
              src="../licoes/audio/licao1/Obrigatorio/Verbs/1.mp3"
              type="audio/mpeg"
            ></audio>
            <img
              src="../../../images/audio.png"
              style="width: 30px; height: 30px"
              class="frases cyan"
              onclick="play(v111)"
            />
            <p class="cyan">Usamos o presente simples para falar sobre coisas em geral. Usamos para dizer que algo acontece toda a
            vez ou repetidamente, ou que algo é verdade em geral:</p>
            <ul>
                <li>As enfermeiras cuidam de pacientes nos hospitais.</li>
                <li>Eu geralmente vou embora nos finais de semana.</li>
            </ul>
            <p class="cyan">Usamos fazer / fazer para fazer perguntas e frases negativas:</p>
            <ul>
                <li>Eu vim do Canada. De onde você vem?</li>
                <li>Eu não vou embora com muita frequência.</li>
                <li>O que essa palavra significa?</li>
            </ul>
            <p class="cyan">Usamos o presente simples para dizer com que frequência fazemos as coisas:</p>
            <ul>
                <li>Eu me levanto às 8 horas todas as manhãs.</li>
                <li>Quantas vezes você vai ao dentista?</li>
                <li>Julie não bebe chá com muita frequência.</li>
            </ul>
            
                `;

  //changing the content in your element
  element.innerHTML = newContent;
}
function changeEnSummary() {
  let element = document.getElementById("text_summary");
  let newContent = `
            <audio
              id="v111"
              src="../licoes/audio/licao1/Obrigatorio/Verbs/1.mp3"
              type="audio/mpeg"
            ></audio>
            <img
              src="../../../images/audio.png"
              style="width: 30px; height: 30px"
              class="frases cyan"
              onclick="play(v1111)"
            />
            <p class="cyan">
              We use the present simple to talk about things in general. We use it
              to say that something happens all the time or repeatedly, or that
              something is true in general:
           </p>
            <ul>
              <li>Nurses look after patients in hospitals.</li>
              <li>I usually go away at weekends.</li>
            </ul>
            <p class="cyan">
              We use do/does to make questions and negative sentences:
            </p>
            <ul>
              <li>I come from Canada. Where do you come from?</li>
              <li>I don’t go away very oft en.</li>
              <li>What does this word mean?</li>
            </ul>
            <p class="cyan">
              We use the present simple to say how oft en we do things:
            </p>
            <ul>
              <li>I get up at 8 o’clock every morning.</li>
              <li>How oft en do you go to the dentist?</li>
              <li>Julie doesn’t drink tea very oft en.</li>
            </ul>
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

                            <audio id="v1" src="./audio/Grammar/VerbsWords/Verbs/1.mp3" type="audio/mpeg"></audio>
                            <audio id="v2" src="./audio/Grammar/VerbsWords/Verbs/2.mp3" type="audio/mpeg"></audio>
                            <audio id="v3" src="./audio/Grammar/VerbsWords/Verbs/3.mp3" type="audio/mpeg"></audio>
                            <audio id="v4" src="./audio/Grammar/VerbsWords/Verbs/4.mp3" type="audio/mpeg"></audio>
                            <audio id="v5" src="./audio/Grammar/VerbsWords/Verbs/5.mp3" type="audio/mpeg"></audio>
                            <audio id="v6" src="./audio/Grammar/VerbsWords/Verbs/6.mp3" type="audio/mpeg"></audio>
                            <audio id="v7" src="./audio/Grammar/VerbsWords/Verbs/7.mp3" type="audio/mpeg"></audio>
                            <audio id="v8" src="./audio/Grammar/VerbsWords/Verbs/8.mp3" type="audio/mpeg"></audio>
                            <audio id="v9" src="./audio/Grammar/VerbsWords/Verbs/9.mp3" type="audio/mpeg"></audio>
                            <audio id="v10" src="./audio/Grammar/VerbsWords/Verbs/10.mp3" type="audio/mpeg"></audio>
                            <audio id="v11" src="./audio/Grammar/VerbsWords/Verbs/11.mp3" type="audio/mpeg"></audio>
                            <audio id="v12" src="./audio/Grammar/VerbsWords/Verbs/12.mp3" type="audio/mpeg"></audio>
                            <audio id="v13" src="./audio/Grammar/VerbsWords/Verbs/13.mp3" type="audio/mpeg"></audio>
                            <audio id="v14" src="./audio/Grammar/VerbsWords/Verbs/14.mp3" type="audio/mpeg"></audio>
                            <table class="table">
                                <thead>
                                    <tr>
        
                                        <th scope="col">Verbs </th>
                                        <th scope="col">3° Person</th>
                                        <th scope="col">Past</th>
                                        <th scope="col">Translation </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><span class="frases cyan" onclick="play(v1)"> To Live</span></td>
                                        <td>lives</td>
                                        <td>lived</td>
                                        <td>Viver, morar</td>
                                        
                                    </tr>
                                    <tr>
                                        <td><span class="frases cyan" onclick="play(v2)"> To work</span></td>
                                        <td>works</td>
                                        <td>worked</td>
                                        <td>Jogar, tocar</td>
                                    </tr>
                                    <tr>
                                        <td><span class="frases cyan" onclick="play(v3)"> To play</span></td>
                                        <td>plays</td>
                                        <td>played</td>
                                        <td>Jogar, tocar</td>
                                    </tr>
                                    <tr>
                                        <td><span class="frases cyan" onclick="play(v4)"> To go</span></td>
                                        <td>goes</td>
                                        <td>went</td>
                                        <td>Ir</td>
                                    </tr>
                                    <tr>
                                        <td><span class="frases cyan" onclick="play(v5)"> To open<span></td>
                                        <td>opens</td>
                                        <td>opened</td>s
                                        <td>Abrir</td>
                                    </tr>
                                    <tr>
                                        <td><span class="frases cyan" onclick="play(v6)"> To leave<span></td>
                                        <td>leaves</td>
                                        <td>left</td>
                                        <td>Deixar</td>
                                    </tr>
                                    <tr>
                                        <td><span class="frases cyan" onclick="play(v7)"> To study<span></td>
                                        <td>studies</td>
                                        <td>studied</td>
                                        <td>Estudar</td>
                                    </tr>
                                    <tr>
                                        <td><span class="frases cyan" onclick="play(v8)"> To watch<span></td>
                                        <td>watches</td>
                                        <td>watched</td>
                                        <td>Assistir</td>
                                    </tr>
                                    <tr>
                                        <td><span class="frases cyan" onclick="play(v9)"> To have<span></td>
                                        <td>has</td>
                                        <td>had</td>
                                        <td>Ter</td>
                                    </tr>
                                    <tr>
                                        <td><span class="frases cyan" onclick="play(v10)"> To love<span></td>
                                        <td>loves</td>
                                        <td>loved</td>
                                        <td>Amar</td>
                                    </tr>
                                    <tr>
                                        <td><span class="frases cyan" onclick="play(v11)"> To write<span></td>
                                        <td>writes</td>
                                        <td>wrote</td>
                                        <td>Escrever</td>
                                    </tr>
                                    <tr>
                                        <td><span class="frases cyan" onclick="play(v12)"> To think<span></td>
                                        <td>thinks</td>
                                        <td>thought</td>
                                        <td>Pensar</td>
                                    </tr>
                                    <tr>
                                        <td><span class="frases cyan" onclick="play(v13)"> To sing<span></td>
                                        <td>sings</td>
                                        <td>sang</td>
                                        <td>Cantar</td>
                                    </tr>
                                    <tr>
                                        <td><span class="frases cyan" onclick="play(v14)"> To read<span></td>
                                        <td>reads</td>
                                        <td>read</td>
                                        <td>Ler</td>
                                    </tr>
                                </tbody>
                            </table>

                            <audio id="w1" src="./audio/Grammar/VerbsWords/Words/1.mp3" type="audio/mpeg"></audio>
                            <audio id="w2" src="./audio/Grammar/VerbsWords/Words/2.mp3" type="audio/mpeg"></audio>
                            <audio id="w3" src="./audio/Grammar/VerbsWords/Words/3.mp3" type="audio/mpeg"></audio>
                            <audio id="w4" src="./audio/Grammar/VerbsWords/Words/4.mp3" type="audio/mpeg"></audio>
                            <audio id="w5" src="./audio/Grammar/VerbsWords/Words/5.mp3" type="audio/mpeg"></audio>
                            <audio id="w6" src="./audio/Grammar/VerbsWords/Words/6.mp3" type="audio/mpeg"></audio>
                            <audio id="w7" src="./audio/Grammar/VerbsWords/Words/7.mp3" type="audio/mpeg"></audio>
                            <audio id="w8" src="./audio/Grammar/VerbsWords/Words/8.mp3" type="audio/mpeg"></audio>
                            <audio id="w9" src="./audio/Grammar/VerbsWords/Words/9.mp3" type="audio/mpeg"></audio>
                            <audio id="w10" src="./audio/Grammar/VerbsWords/Words/10.mp3" type="audio/mpeg"></audio>
                            <audio id="w11" src="./audio/Grammar/VerbsWords/Words/11.mp3" type="audio/mpeg"></audio>
                            <audio id="w12" src="./audio/Grammar/VerbsWords/Words/12.mp3" type="audio/mpeg"></audio>
                            <audio id="w13" src="./audio/Grammar/VerbsWords/Words/13.mp3" type="audio/mpeg"></audio>
                            <audio id="w14" src="./audio/Grammar/VerbsWords/Words/14.mp3" type="audio/mpeg"></audio>
                            <audio id="w15" src="./audio/Grammar/VerbsWords/Words/15.mp3" type="audio/mpeg"></audio>
                            <audio id="w16" src="./audio/Grammar/VerbsWords/Words/16.mp3" type="audio/mpeg"></audio>
                            <audio id="w17" src="./audio/Grammar/VerbsWords/Words/17.mp3" type="audio/mpeg"></audio>
                            <audio id="w18" src="./audio/Grammar/VerbsWords/Words/18.mp3" type="audio/mpeg"></audio>
                            <audio id="w19" src="./audio/Grammar/VerbsWords/Words/19.mp3" type="audio/mpeg"></audio>
                            <audio id="w20" src="./audio/Grammar/VerbsWords/Words/20.mp3" type="audio/mpeg"></audio>
                            <audio id="w21" src="./audio/Grammar/VerbsWords/Words/21.mp3" type="audio/mpeg"></audio>
                            <audio id="w22" src="./audio/Grammar/VerbsWords/Words/22.mp3" type="audio/mpeg"></audio>
                            <audio id="w23" src="./audio/Grammar/VerbsWords/Words/23.mp3" type="audio/mpeg"></audio>
                            <audio id="w24" src="./audio/Grammar/VerbsWords/Words/24.mp3" type="audio/mpeg"></audio>
                            <audio id="w25" src="./audio/Grammar/VerbsWords/Words/25.mp3" type="audio/mpeg"></audio>
                            <audio id="w26" src="./audio/Grammar/VerbsWords/Words/26.mp3" type="audio/mpeg"></audio>
                            <audio id="w27" src="./audio/Grammar/VerbsWords/Words/27.mp3" type="audio/mpeg"></audio>
                            <audio id="w28" src="./audio/Grammar/VerbsWords/Words/28.mp3" type="audio/mpeg"></audio>
                            <audio id="w29" src="./audio/Grammar/VerbsWords/Words/29.mp3" type="audio/mpeg"></audio>
                            <audio id="w30" src="./audio/Grammar/VerbsWords/Words/30.mp3" type="audio/mpeg"></audio>
                            <audio id="w31" src="./audio/Grammar/VerbsWords/Words/31.mp3" type="audio/mpeg"></audio>
                            <audio id="w32" src="./audio/Grammar/VerbsWords/Words/32.mp3" type="audio/mpeg"></audio>
                            <audio id="w33" src="./audio/Grammar/VerbsWords/Words/33.mp3" type="audio/mpeg"></audio>
                            <audio id="w34" src="./audio/Grammar/VerbsWords/Words/34.mp3" type="audio/mpeg"></audio>
                            <audio id="w35" src="./audio/Grammar/VerbsWords/Words/35.mp3" type="audio/mpeg"></audio>
                            <audio id="w36" src="./audio/Grammar/VerbsWords/Words/36.mp3" type="audio/mpeg"></audio>
                            <audio id="w37" src="./audio/Grammar/VerbsWords/Words/37.mp3" type="audio/mpeg"></audio>
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
                                        <td><span class="frases cyan" onclick="play(w1)"> School</span></td>
                                        <td>escola</td>
                                        <td><span class="frases cyan" onclick="play(w2)"> Windows</span></td>
                                        <td>janelas</td>
                                    </tr>
                                    <tr>
                                        <td><span class="frases cyan" onclick="play(w3)"> Before</span></td>
                                        <td>antes</td>
                                        <td><span class="frases cyan" onclick="play(w4)"> After</span></td>
                                        <td>depois</td>
                                    </tr>
                                    <tr>
                                        <td><span class="frases cyan" onclick="play(w5)"> Class</span></td>
                                        <td>classe</td>
                                        <td><span class="frases cyan" onclick="play(w6)"> Opinion</span></td>
                                        <td>opinião</td>
                                    </tr>
                                    <tr>
                                        <td><span class="frases cyan" onclick="play(w7)"> Student</span></td>
                                        <td>aluno</td>
                                        <td><span class="frases cyan" onclick="play(w8)"> Night</span></td>
                                        <td>noite</td>
                                    </tr>
                                    <tr>
                                        <td><span class="frases cyan" onclick="play(w9)"> Good</span></td>
                                        <td>aluno</td>
                                        <td><span class="frases cyan" onclick="play(w10)"> Dollars</span></td>
                                        <td>noite</td>
                                    </tr>
                                    <tr>
                                        <td><span class="frases cyan" onclick="play(w11)"> Student</span></td>
                                        <td>aluno</td>
                                        <td><span class="frases cyan" onclick="play(w12)"> Night</span></td>
                                        <td>noite</td>
                                    </tr>
                                    <tr>
                                        <td><span class="frases cyan" onclick="play(w13)"> Help</span></td>
                                        <td>ajuda</td>
                                        <td><span class="frases cyan" onclick="play(w14)"> Week</span></td>
                                        <td>semana</td>
                                    </tr>
                                    <tr>
                                        <td><span class="frases cyan" onclick="play(w15)"> Morning</span></td>
                                        <td>manhã</td>
                                        <td><span class="frases cyan" onclick="play(w16)"> Afternoon</span></td>
                                        <td>tarde</td>
                                    </tr>
                                    <tr>
                                        <td><span class="frases cyan" onclick="play(w17)"> Every</span></td>
                                        <td>tudo</td>
                                        <td><span class="frases cyan" onclick="play(w18)"> Songs</span></td>
                                        <td>canções</td>
                                    </tr>
                                    <tr>
                                        <td><span class="frases cyan" onclick="play(w19)"> Brazil</span></td>
                                        <td>brasil</td>
                                        <td><span class="frases cyan" onclick="play(w20)"> Soccer</span></td>
                                        <td>futebol</td>
                                    </tr>
                                    <tr>
                                        <td><span class="frases cyan" onclick="play(w21)"> Work</span></td>
                                        <td>trabalho</td>
                                        <td><span class="frases cyan" onclick="play(w22)"> Beach</span></td>
                                        <td>praia</td>
                                    </tr>
                                    <tr>
                                        <td><span class="frases cyan" onclick="play(w23)"> Friend</span></td>
                                        <td>amigo</td>
                                        <td><span class="frases cyan" onclick="play(w24)"> Church</span></td>
                                        <td>igreja</td>
                                    </tr>
                                    <tr>
                                        <td><span class="frases cyan" onclick="play(w25)"> Cinema</span></td>
                                        <td>cinema</td>
                                        <td><span class="frases cyan" onclick="play(w26)"> Kids</span></td>
                                        <td>crianças</td>
                                    </tr>
                                    <tr>
                                        <td><span class="frases cyan" onclick="play(w27)"> Time</span></td>
                                        <td>tempo</td>
                                        <td><span class="frases cyan" onclick="play(w28)"> Beer</span></td>
                                        <td>cerveja</td>
                                    </tr>
                                    <tr>
                                        <td><span class="frases cyan" onclick="play(w29)"> Late</span></td>
                                        <td>tarde</td>
                                        <td><span class="frases cyan" onclick="play(w30)"> Books</span></td>
                                        <td>livros</td>
                                    </tr>
                                    <tr>
                                        <td><span class="frases cyan" onclick="play(w31)"> Family</span></td>
                                        <td>família</td>
                                        <td><span class="frases cyan" onclick="play(w32)"> News</span></td>
                                        <td>notícia</td>
                                    </tr>
                                    <tr>
                                        <td><span class="frases cyan" onclick="play(w33)"> Free</span></td>
                                        <td>livre</td>
                                        <td><span class="frases cyan" onclick="play(w34)"> Boyfriend</span></td>
                                        <td>namorado</td>
                                    </tr>
                                    <tr>
                                        <td><span class="frases cyan" onclick="play(w35)"> Girlfriend</span></td>
                                        <td>namorada</td>
                                        <td><span class="frases cyan" onclick="play(w36)"> Children</span></td>
                                        <td>crianças</td>
                                    </tr>
                                    <tr>
                                        <td><span class="frases cyan" onclick="play(w37)"> Breakfast</span></td>
                                        <td>café da manhã</td>
                                        <td><span class="frases cyan" onclick="play(w38)"> Films</span></td>
                                        <td>filmes</td>
                                    </tr>
                                    <tr>
                                        <td><span class="frases cyan" onclick="play(w39)"> Pizza</span></td>
                                        <td>pizza</td>
                                        
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
            <iframe width="400" height="250" class="ms-2" src="https://www.youtube.com/embed/47LEelX7nhg"
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
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Bf-oSV3sx_0" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
             encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                `;

  //changing the content in your element
  element.innerHTML = newContent;
}

function repetitionEn() {
  let element = document.getElementById("repetition-sentences");
  let newContent = `
            <p class="frases" onclick="play(Tres1)">
            <span class="green">1.</span> My son lives in
            <span class="cyan">Spain</span>.<i>(Brazil)</i>
          </p>
          <p class="frases" onclick="play(Tres2)">
            <span class="green">2.</span> He plays
            <span class="cyan">basketball</span>.<i>(soccer)</i>
          </p>
          <p class="frases" onclick="play(Tres3)">
            <span class="green">3.</span> She catches the train every
            <span class="cyan">morning</span>.<i>(afternoon)</i>
          </p>
          <p class="frases" onclick="play(Tres4)">
            <span class="green">4.</span> Bob doesn’t
            <span class="cyan">work</span>.<i>(study)</i>
          </p>
          <p class="frases" onclick="play(Tres5)">
            <span class="green">5.</span> My father doesn’t speak
            <span class="cyan">good english</span>.<i>(well)</i>
          </p>
          <p class="frases" onclick="play(Tres6)">
            <span class="green">6.</span> He goes to the
            <span class="cyan">beack</span>.every day.<i>(park)</i>
          </p>
          <p class="frases" onclick="play(Tres7)">
            <span class="green">7.</span> He loves to play
            <span class="cyan">soccer</span>.<i>(tennis)</i>.
          </p>
          <p class="frases" onclick="play(Tres8)">
            <span class="green">8.</span> He goes to
            <span class="cyan">school</span>.<i>(work)</i>.
          </p>
          <p class="frases" onclick="play(Tres9)">
            <span class="green">9.</span> Does he go to
            <span class="cyan">school</span>.<i>(work)</i>?
          </p>
          <p class="frases" onclick="play(Tres10)">
            <span class="green">10.</span> He writes an e-mail to his best
            <span class="cyan">friend</span>.<i>(cousin)</i>.
          </p>
          <p class="frases" onclick="play(Tres11)">
            <span class="green">11.</span> He thinks he is very
            <span class="cyan">handsome</span>.<i>(tall)</i>.
          </p>
          <p class="frases" onclick="play(Tres12)">
            <span class="green">12.</span> It usually rains every
            <span class="cyan">day</span>. here.<i>(night)</i>
          </p>
          <p class="frases" onclick="play(Tres13)">
            <span class="green">13.</span> It smells very delicious in the
            <span class="cyan">kitchen</span>.<i>(house)</i>.
          </p>
          <p class="frases" onclick="play(Tres14)">
            <span class="green">14.</span> We
            <span class="cyan">sing songs</span> at night.<i>(play games)</i>
          </p>
          <p class="frases" onclick="play(Tres15)">
            <span class="green">15.</span> We go to church every
            <span class="cyan">sunday</span>.<i>(wednesday)</i>.
          </p>
          <p class="frases" onclick="play(Tres16)">
            <span class="green">16.</span> Does he write an
            <span class="cyan">email</span>.<i>(a letter)</i>.?
          </p>
          <p class="frases" onclick="play(Tres17)">
            <span class="green">17.</span> The sun rises at the
            <span class="cyan">east</span>.<i>(west)</i>
          </p>
          <p class="frases" onclick="play(Tres18)">
            <span class="green">18.</span> Bob
            <span class="cyan">always</span> brushes his teeth.<i>(never)</i>
          </p>
          <p class="frases" onclick="play(Tres19)">
            <span class="green">19.</span> She gets up
            <span class="cyan">early</span>.every day.<i>(late)</i>
          </p>
          <p class="frases" onclick="play(Tres20)">
            <span class="green">20.</span> They speak
            <span class="cyan">English</span>.<i>(SPanish)</i>
          </p>
                `;

  //changing the content in your element
  element.innerHTML = newContent;
}

function repetitionPt() {
  let element = document.getElementById("repetition-sentences");
  let newContent = `
            <p class="frases" onclick="play(Tres1)">
            <span class="green">1.</span> My son lives in
            <span class="cyan">Spain</span>.<i>(Brazil)</i><br>
            <i>Meu filho vive no Brasil.</i>
          </p>
          <p class="frases" onclick="play(Tres2)">
            <span class="green">2.</span> He plays
            <span class="cyan">basketball</span>.<i>(soccer)</i><br>
            <i>Ele joga basketball.</i>
          </p>
          <p class="frases" onclick="play(Tres3)">
            <span class="green">3.</span> She catches the train every
            <span class="cyan">morning</span>.<i>(afternoon)</i><br>
            <i>Ela pega o trem todas as manhãs.</i>
          </p>
          <p class="frases" onclick="play(Tres4)">
            <span class="green">4.</span> Bob doesn’t
            <span class="cyan">work</span>.<i>(study)</i><br>
            <i>Bob não trabalha.</i>
          </p>
          <p class="frases" onclick="play(Tres5)">
            <span class="green">5.</span> My father doesn’t speak
            <span class="cyan">good english</span>.<i>(well)</i><br>
            <i>Meu pai não fala Inglês bem.</i>
          </p>
          <p class="frases" onclick="play(Tres6)">
            <span class="green">6.</span> He goes to the
            <span class="cyan">beack</span>.every day.<i>(park)</i><br>
            <i>Ele vai a praia todos os dias.</i>
          </p>
          <p class="frases" onclick="play(Tres7)">
            <span class="green">7.</span> He loves to play
            <span class="cyan">soccer</span>.<i>(tennis)</i>.<br>
            <i>Ele ama jogar futebol.</i>
          </p>
          <p class="frases" onclick="play(Tres8)">
            <span class="green">8.</span> He goes to
            <span class="cyan">school</span>.<i>(work)</i>.<br>
            <i>Ele vai para a escola.</i>
          </p>
          <p class="frases" onclick="play(Tres9)">
            <span class="green">9.</span> Does he go to
            <span class="cyan">school</span>.<i>(work)</i>?<br>
            <i>Ele vai para a escola?</i>
          </p>
          <p class="frases" onclick="play(Tres10)">
            <span class="green">10.</span> He writes an e-mail to his best
            <span class="cyan">friend</span>.<i>(cousin)</i>.<br>
            <i>Ele escreve um email para seu melhor amigo.</i>
          </p>
          <p class="frases" onclick="play(Tres11)">
            <span class="green">11.</span> He thinks he is very
            <span class="cyan">handsome</span>.<i>(tall)</i>.<br>
            <i>Ele acha que é muito bonito.</i>
          </p>
          <p class="frases" onclick="play(Tres12)">
            <span class="green">12.</span> It usually rains every
            <span class="cyan">day</span>. here.<i>(night)</i><br>
            <i>Geralmente chove todos os dias.</i>
          </p>
          <p class="frases" onclick="play(Tres13)">
            <span class="green">13.</span> It smells very delicious in the
            <span class="cyan">kitchen</span>.<i>(house)</i>.<br>
            <i>Cheira muito bem na cozinha.</i>
          </p>
          <p class="frases" onclick="play(Tres14)">
            <span class="green">14.</span> We
            <span class="cyan">sing songs</span> at night.<i>(play games)</i><br>
            <i>Nós cantamos músicas à noite.</i>
          </p>
          <p class="frases" onclick="play(Tres15)">
            <span class="green">15.</span> We go to church every
            <span class="cyan">sunday</span>.<i>(wednesday)</i>.<br>
            <i>Nós vamos à igreja todos os domingos.</i>
          </p>
          <p class="frases" onclick="play(Tres16)">
            <span class="green">16.</span> Does he write an
            <span class="cyan">email</span>.<i>(a letter)</i>.?<br>
            <i>Ele escreve um email?</i>
          </p>
          <p class="frases" onclick="play(Tres17)">
            <span class="green">17.</span> The sun rises at the
            <span class="cyan">east</span>.<i>(west)</i><br>
            <i>O sol nasce no leste.</i>
          </p>
          <p class="frases" onclick="play(Tres18)">
            <span class="green">18.</span> Bob
            <span class="cyan">always</span> brushes his teeth.<i>(never)</i><br>
            <i>Bob sempre escova seus dentes.</i>
          </p>
          <p class="frases" onclick="play(Tres19)">
            <span class="green">19.</span> She gets up
            <span class="cyan">early</span>.every day.<i>(late)</i><br>
            <i>Ela acorda cedo todos os dias.</i>
          </p>
          <p class="frases" onclick="play(Tres20)">
            <span class="green">20.</span> They speak
            <span class="cyan">English</span>.<i>(SPanish)</i><br>
            <i>Eles falam Inglês.</i>
          </p>
                `;

  //changing the content in your element
  element.innerHTML = newContent;
}

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
                    
                    
                        <p class="frases" onclick="play(Quatro1)"><span class="blue">1.</span>Where do you work?</p>
                        <p class="frases" onclick="play(Quatro2)"><span class="blue">2.</span> What does he do?</p>
                        <p class="frases" onclick="play(Quatro3)"><span class="blue">3.</span>How do they come here?</p>
                        <p class="frases" onclick="play(Quatro4)"><span class="blue">4.</span>When do we start?</p>
                        <p class="frases" onclick="play(Quatro5)"><span class="blue">5.</span> Why do they play football so late?</p>
                        <p class="frases" onclick="play(Quatro6)"><span class="blue">6.</span> What does she like doing at the weekend?</p>
                        <p class="frases" onclick="play(Quatro7)"><span class="blue">7.</span> Where do you go to the cinema?</p>
                        <p class="frases" onclick="play(Quatro8)"><span class="blue">8.</span> When do we leave?</p>
                        <p class="frases" onclick="play(Quatro9)"><span class="blue">9.</span> Do you study a lot?</p>
                        <p class="frases" onclick="play(Quatro10)"><span class="blue">10.</span> Do you have kids?</p>
                        <p class="frases" onclick="play(Quatro11)"><span class="blue">11.</span> Do you have the time?</p>
                        <p class="frases" onclick="play(Quatro12)"><span class="blue">12.</span> Does she drink beer?</p>
                        <p class="frases" onclick="play(Quatro13)"><span class="blue">13.</span> Do you like to be late?</p>
                        <p class="frases" onclick="play(Quatro14)"><span class="blue">14.</span> Does she study Italian?</p>
                        <p class="frases" onclick="play(Quatro15)"><span class="blue">15.</span> Why do you come here?</p>
                        <p class="frases" onclick="play(Quatro16)"><span class="blue">16.</span> Do you read books?</p>
                        <p class="frases" onclick="play(Quatro17)"><span class="blue">17.</span> Do you see the stars?</p>
                        <p class="frases" onclick="play(Quatro18)"><span class="blue">18.</span> Do they speak Chinese?</p>
                        <p class="frases" onclick="play(Quatro19)"><span class="blue">19.</span> Does he swim?</p>
                        <p class="frases" onclick="play(Quatro20)"><span class="blue">20.</span> Does she listen to jazz?</p>
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
                    
                    
                        <p class="frases" onclick="play(Quatro1)"><span class="blue">1.</span>Where do you work?<br>
                        <i>Aonde você mora?</i></p>
                        <p class="frases" onclick="play(Quatro2)"><span class="blue">2.</span> What does he do?<br>
                        <i>O que ele faz?</i></p>
                        <p class="frases" onclick="play(Quatro3)"><span class="blue">3.</span>How do they come here?<br>
                        <i>Como eles veem aqui?</i></p>
                        <p class="frases" onclick="play(Quatro4)"><span class="blue">4.</span>When do we start?<br>
                        <i>Quando nós começamos?</i></p>
                        <p class="frases" onclick="play(Quatro5)"><span class="blue">5.</span> Why do they play football so late?<br>
                        <i>Por que eles jogam futebol tão tarde?</i></p>
                        <p class="frases" onclick="play(Quatro6)"><span class="blue">6.</span> What does she like doing at the weekend?<br>
                        <i>O que ela gosta de fazer no final de semana?</i></p>
                        <p class="frases" onclick="play(Quatro7)"><span class="blue">7.</span> Where do you go to the cinema?<br>
                        <i>Aonde você vai ao cinema?</i></p>
                        <p class="frases" onclick="play(Quatro8)"><span class="blue">8.</span> When do we leave?<br>
                        <i>Quando nós partimeos?</i></p>
                        <p class="frases" onclick="play(Quatro9)"><span class="blue">9.</span> Do you study a lot?<br>
                        <i>Você estuda muito?</i></p>
                        <p class="frases" onclick="play(Quatro10)"><span class="blue">10.</span> Do you have kids?<br>
                        <i>Você tem filhos?</i></p>
                        <p class="frases" onclick="play(Quatro11)"><span class="blue">11.</span> Do you have the time?<br>
                        <i>Que tem as horas?</i></p>
                        <p class="frases" onclick="play(Quatro12)"><span class="blue">12.</span> Does she drink beer?<br>
                        <i>ELa bebe cerveja?</i></p>
                        <p class="frases" onclick="play(Quatro13)"><span class="blue">13.</span> Do you like to be late?<br>
                        <i>Você gosta de estar atrasado?</i></p>
                        <p class="frases" onclick="play(Quatro14)"><span class="blue">14.</span> Does she study Italian?<br>
                        <i>Ela estuda italiano?</i></p>
                        <p class="frases" onclick="play(Quatro15)"><span class="blue">15.</span> Why do you come here?<br>
                        <i>Por que você vem aqui?</i></p>
                        <p class="frases" onclick="play(Quatro16)"><span class="blue">16.</span> Do you read books?<br>
                        <i>Você lê livros?</i></p>
                        <p class="frases" onclick="play(Quatro17)"><span class="blue">17.</span> Do you see the stars?<br>
                        <i>Você vê as estrelas?</i></p>
                        <p class="frases" onclick="play(Quatro18)"><span class="blue">18.</span> Do they speak Chinese?<br>
                        <i>Eles falam chines?</i></p>
                        <p class="frases" onclick="play(Quatro19)"><span class="blue">19.</span> Does he swim?<br>
                        <i>Ele nada?</i></p>
                        <p class="frases" onclick="play(Quatro20)"><span class="blue">20.</span> Does she listen to jazz?<br>
                        <i>Ela escuta jazz?</i></p>
                `;

  //changing the content in your element
  element.innerHTML = newContent;
}
