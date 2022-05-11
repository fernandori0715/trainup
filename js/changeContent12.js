function changePtSummary() {
    let element = document.getElementById("text_summary");
    let newContent = `
    <!-- START OF SUMMARY BODY -->
                 
   
        
    <img
            src="./img/present_perfect.jpg"
            alt="List of Pronouns"
            width="100%"
            height="100%"
            class="mb-2 mt-2"
          />

          <img
            src="../../../images/audio.png"
            style="width: 30px; height: 30px"
            class="frases cyan mb-2"
            onclick="play(v2)"
          />
            
          <audio id="Dois1" src="./audio/Grammar/Summary/1.mp3"></audio>
          <audio id="Dois2" src="./audio/Grammar/Summary/2.mp3"></audio>
          <audio id="Dois3" src="./audio/Grammar/Summary/3.mp3"></audio>
          <audio id="Dois4" src="./audio/Grammar/Summary/4.mp3"></audio>
          <audio id="Dois5" src="./audio/Grammar/Summary/5.mp3"></audio>
          <audio id="Dois6" src="./audio/Grammar/Summary/6.mp3"></audio>
          <audio id="Dois7" src="./audio/Grammar/Summary/7.mp3"></audio>
          <audio id="Dois8" src="./audio/Grammar/Summary/8.mp3"></audio>
          <audio id="Dois9" src="./audio/Grammar/Summary/9.mp3"></audio>
          <audio id="Dois10" src="./audio/Grammar/Summary/10.mp3"></audio>
          <audio id="Dois11" src="./audio/Grammar/Summary/11.mp3"></audio>
          <audio id="Dois12" src="./audio/Grammar/Summary/12.mp3"></audio>
          <audio id="Dois13" src="./audio/Grammar/Summary/13.mp3"></audio>
          <audio id="Dois14" src="./audio/Grammar/Summary/14.mp3"></audio>
          <audio id="Dois15" src="./audio/Grammar/Summary/15.mp3"></audio>
          <audio id="Dois16" src="./audio/Grammar/Summary/16.mp3"></audio>
          <audio id="Dois17" src="./audio/Grammar/Summary/17.mp3"></audio>
          <audio id="Dois18" src="./audio/Grammar/Summary/18.mp3"></audio>
          <audio id="Dois19" src="./audio/Grammar/Summary/19.mp3"></audio>
          <audio id="Dois20" src="./audio/Grammar/Summary/20.mp3"></audio>
          <audio id="Dois21" src="./audio/Grammar/Summary/21.mp3"></audio>
   

    <div class="buttons">
    <button
      type="button"
      class="btn btn-dark my-2 ms-2"
      id="text_en"
      onclick="changeEnSummary()"
    >
      English
    </button>
    <button
      type="button"
      class="btn btn-info"
      id="text-pt"
      onclick="changePtSummary()"
    >
      Portuguese
    </button>
  </div>
    
    <h5 class="black-adj">Quando usar o Present Perfect?</h5>
    <p>Indicar um vínculo entre o presente e o passado.<br>
      O período em que a ação ocorre é anterior ao presente momento, mas não é especificado.</p>
    <p class="black-adj">Ações Concluídas</p>
    <p class="frases" onclick="play(Dois1)"><span class="black">1.</span> He <span class="">has lost </span> his wallet.<br>
    <em class="cyan">Ele perdeu sua carteira.</em></p>
    <p class="black-adj">Ações concluídas recentemente</p>
    <p class="frases" onclick="play(Dois2)"><span class="black">2.</span> I <span class="">have just finished</span> my project.<br>
    <em class="cyan">Acabei de terminar meu projeto.</em></p>
    <p class="black-adj">Ações inacabadas</p>
    <p class="frases" onclick="play(Dois3)"><span class="black">3.</span> She <span class="">has lived </span> in Paris for 5 years.<br>
    <em class="cyan">Ela mora em Paris há 5 anos.</em></p>
    <p class="black-adj">Múltiplas Ações em Tempos Diferentes</p>
    <p class="frases" onclick="play(Dois4)"><span class="black">4.</span> I <span class="">have seen</span> David several times.<br>
    <em class="cyan">Eu vi David várias vezes.</em></p>
    <p class="black-adj">Experiências de vida</p>
    <p class="frases" onclick="play(Dois5)"><span class="black">5.</span> <span class="">Have you ever eaten</span> sushi before?<br>
    <em class="cyan">Você já comeu sushi antes?</em></p>
    <p class="black-adj">Realizações</p>
    <p class="frases" onclick="play(Dois6)"><span class="black">6.</span> Man <span class="">has walked</span> on the moon.<br>
    <em class="cyan">O homem andou na lua.</em></p>
    <p class="black-adj">Mudanças ao longo do tempo</p>
    <p class="frases" onclick="play(Dois7)"><span class="black">7.</span> I <span class="">have become </span> more interested in medicine.<br>
    <em class="cyan">Passei a me interessar mais pela medicina.</em></p>

    <h5 class="green-adj">EVER</h5>
    <p class="green">Já , alguma vez na sua vida</p>
    <p class="frases" onclick="play(Dois8)"><span class="green">8.</span> Have you<span class="green-adj"> ever</span> been to England?<br>
    <em class="green">Você já esteve na Inglaterra?</em></p>
    <p class="frases" onclick="play(Dois9)"><span class="green">9.</span> Nobody has <span class="green-adj">ever</span> said that to me.<br>
    <em class="green">Ninguém nunca me disse isso.</em></p>
    
    <h5 class="vermelho-adj">NEVER</h5>
    <p class="vermelho">Nunca</p>
    <p class="frases" onclick="play(Dois10)"><span class="vermelho">10.</span> We have <span class="vermelho-adj">never</span> seen it before.<br>
    <em class="vermelho">Nós nunca vimos isso antes.</em></p>
    <p class="frases" onclick="play(Dois11)"><span class="vermelho">11.</span> The series has <span class="vermelho-adj">never</span> been shown on television.<br>
    <em class="vermelho">A série nunca foi exibida na televisão.</em></p>
    
    <h5 class="cyan-adj">JUST</h5>
    <p class="cyan">Acabou de acontecer</p>
    <p class="frases" onclick="play(Dois12)"><span class="cyan">12.</span> I have <span class="cyan-adj">just</span> done it.<br>
    <em class="cyan">Acabei de fazer isso.</em></p>
    <p class="frases" onclick="play(Dois13)"><span class="cyan">13.</span> You have <span class="cyan-adj">just </span> arrived.<br>
    <em class="cyan">Você acabou de chegar.</em></p>
    
    <h5 class="roxo-adj">ALREADY</h5>
    <p class="roxo">ação já ocorreu</p>
    <p class="frases" onclick="play(Dois14)"><span class="roxo">14.</span> She <span class="roxo-adj">already</span> knows everything.<br>
    <em class="roxo">Ela já sabe tudo.</em></em></p>
    <p class="frases" onclick="play(Dois15)"><span class="roxo">15.</span> He has <span class="roxo-adj">already </span>arrived at home.<br>
    <em class="roxo">Ele já chegou em casa.</em></p>
    
    <h5 class="ouro-adj">YET</h5>
    <p class="ouro">AINDA em frases negativas;<br>
                     JÁ em frases interrogativas</p>
    <p class="frases" onclick="play(Dois16)"><span class="ouro">16.</span> I haven't seen the Central Park Gallary <span class="ouro-adj">yet</span>.<br>
    <em class="ouro">Ainda não vi o Central Park Gallary.</em></p>
    <p class="frases" onclick="play(Dois17)"><span class="ouro">17.</span> Have you met Bob <span class="ouro-adj">yet</span>?<br>
    <em class="ouro">Você já conheceu o Bob?</em></p>
    
    <h5 class="limao-adj">FOR</h5>
        <p class="limao">por, há | Usado em Duração - for + período de tempo</p>
        <p class="limao">for five years, for a week, for a month, for hours, for three hours</p>

        <p class="frases" onclick="play(Dois18)"><span class="limao">18.</span> I have lived here <span class="limao-adj">for</span> 10 years.<br>
        <em class="limao">Eu moro aqui há 10 anos.</em></p>
        <p class="frases" onclick="play(Dois19)"><span class="limao">19.</span> She has taught at this univerity <span class="limao-adj">for</span> a long time.<br>
        <em class="limao">Ela ensinou nesta universidade por um longo tempo.</em></p>
        
        
    <h5 class="rosa-escuro-adj">SINCE</h5>
    <p class="rosa-escuro">desde | Usado em Ponto de Partida - Since + momento concreto</p>
    <p class="rosa-escuro">since this morning, since last week, since yesterday
          since He was a child, since Friday, since 3 o'clock</p>
        <p class="frases" onclick="play(Dois20)"><span class="rosa-escuro">20.</span> I have lived here <span class="rosa-escuro-adj">since</span> 1990.<br>
        <em class="rosa-escuro">Moro aqui desde 1990.</em></p>
        <p class="frases" onclick="play(Dois21)"><span class="rosa-escuro">21.</span> She has taught at this univerity <span class="rosa-escuro-adj">since</span> 1983.<br>
        <em class="rosa-escuro">Ela ensina nesta universidade desde 1983.</em></p>
    
      <!--END OF SUMMARY BODY-->
  
            
              
                  `;
  
    //changing the content in your element
    element.innerHTML = newContent;
  }
  function changeEnSummary() {
    let element = document.getElementById("text_summary");
    let newContent = `
    <!-- START OF SUMMARY BODY -->
                 
   
        
        <img
                src="./img/present_perfect.jpg"
                alt="List of Pronouns"
                width="100%"
                height="100%"
                class="mb-2 mt-2"
              />

              <img
                src="../../../images/audio.png"
                style="width: 30px; height: 30px"
                class="frases cyan mb-2"
                onclick="play(v2)"
              />
                
              <audio id="Dois1" src="./audio/Grammar/Summary/1.mp3"></audio>
              <audio id="Dois2" src="./audio/Grammar/Summary/2.mp3"></audio>
              <audio id="Dois3" src="./audio/Grammar/Summary/3.mp3"></audio>
              <audio id="Dois4" src="./audio/Grammar/Summary/4.mp3"></audio>
              <audio id="Dois5" src="./audio/Grammar/Summary/5.mp3"></audio>
              <audio id="Dois6" src="./audio/Grammar/Summary/6.mp3"></audio>
              <audio id="Dois7" src="./audio/Grammar/Summary/7.mp3"></audio>
              <audio id="Dois8" src="./audio/Grammar/Summary/8.mp3"></audio>
              <audio id="Dois9" src="./audio/Grammar/Summary/9.mp3"></audio>
              <audio id="Dois10" src="./audio/Grammar/Summary/10.mp3"></audio>
              <audio id="Dois11" src="./audio/Grammar/Summary/11.mp3"></audio>
              <audio id="Dois12" src="./audio/Grammar/Summary/12.mp3"></audio>
              <audio id="Dois13" src="./audio/Grammar/Summary/13.mp3"></audio>
              <audio id="Dois14" src="./audio/Grammar/Summary/14.mp3"></audio>
              <audio id="Dois15" src="./audio/Grammar/Summary/15.mp3"></audio>
              <audio id="Dois16" src="./audio/Grammar/Summary/16.mp3"></audio>
              <audio id="Dois17" src="./audio/Grammar/Summary/17.mp3"></audio>
              <audio id="Dois18" src="./audio/Grammar/Summary/18.mp3"></audio>
              <audio id="Dois19" src="./audio/Grammar/Summary/19.mp3"></audio>
              <audio id="Dois20" src="./audio/Grammar/Summary/20.mp3"></audio>
              <audio id="Dois21" src="./audio/Grammar/Summary/21.mp3"></audio>
       

        <div class="buttons">
        <button
          type="button"
          class="btn btn-dark my-2 ms-2"
          id="text_en"
          onclick="changeEnSummary()"
        >
          English
        </button>
        <button
          type="button"
          class="btn btn-info"
          id="text-pt"
          onclick="changePtSummary()"
        >
          Portuguese
        </button>
      </div>
        
      <h5 class="black-adj">Quando usar o Present Perfect?</h5>
      <p>Indicar um vínculo entre o presente e o passado.<br>
        O período em que a ação ocorre é anterior ao presente momento, mas não é especificado.</p>
      <p class="black-adj">Ações Concluídas</p>
      <p class="frases" onclick="play(Dois1)"><span class="black">1.</span> He <span class="">has lost </span> his wallet.</p>
      <p class="black-adj">Ações concluídas recentemente</p>
      <p class="frases" onclick="play(Dois2)"><span class="black">2.</span> I <span class="">have just finished</span> my project.</p>
      <p class="black-adj">Ações inacabadas</p>
      <p class="frases" onclick="play(Dois3)"><span class="black">3.</span> She <span class="">has lived </span> in Paris for 5 years.</p>
      <p class="black-adj">Múltiplas Ações em Tempos Diferentes</p>
      <p class="frases" onclick="play(Dois4)"><span class="black">4.</span> I <span class="">have seen</span> David several times.</p>
      <p class="black-adj">Experiências de vida</p>
      <p class="frases" onclick="play(Dois5)"><span class="black">5.</span> <span class="">Have you ever eaten</span> sushi before?</p>
      <p class="black-adj">Realizações</p>
      <p class="frases" onclick="play(Dois6)"><span class="black">6.</span> Man <span class="">has walked</span> on the moon.</p>
      <p class="black-adj">Mudanças ao longo do tempo</p>
      <p class="frases" onclick="play(Dois7)"><span class="black">7.</span> I <span class="">have become </span> more interested in medicine.</p>


        <h5 class="green-adj">EVER</h5>
        <p class="green">Já , alguma vez na sua vida</p>
        <p class="frases" onclick="play(Dois8)"><span class="green">8.</span> Have you<span class="green-adj"> ever</span> been to England?</p>
        <p class="frases" onclick="play(Dois9)"><span class="green">9.</span> Nobody has <span class="green-adj">ever</span> said that to me.</p>
        
        <h5 class="vermelho-adj">NEVER</h5>
        <p class="vermelho">Nunca</p>
        <p class="frases" onclick="play(Dois10)"><span class="vermelho">10.</span> We have <span class="vermelho-adj">never</span> seen it before.</p>
        <p class="frases" onclick="play(Dois11)"><span class="vermelho">11.</span> The series has <span class="vermelho-adj">never</span> been shown on television.</p>
        
        <h5 class="cyan-adj">JUST</h5>
        <p class="cyan">Acabou de acontecer</p>
        <p class="frases" onclick="play(Dois12)"><span class="cyan">12.</span> I have <span class="cyan-adj">just</span> done it.</p>
        <p class="frases" onclick="play(Dois13)"><span class="cyan">13.</span> You have <span class="cyan-adj">just </span> arrived.</p>
        
        <h5 class="roxo-adj">ALREADY</h5>
        <p class="roxo">ação já ocorreu</p>
        <p class="frases" onclick="play(Dois14)"><span class="roxo">14.</span> She <span class="roxo-adj">already</span> knows everything.</p>
        <p class="frases" onclick="play(Dois15)"><span class="roxo">15.</span> He has <span class="roxo-adj">already </span>arrived at home.</p>
        
        <h5 class="ouro-adj">YET</h5>
        <p class="ouro">AINDA em frases negativas;<br>
                         JÁ em frases interrogativas</p>
        <p class="frases" onclick="play(Dois16)"><span class="ouro">16.</span> I haven't seen the Central Park Gallary <span class="ouro-adj">yet</span>.</p>
        <p class="frases" onclick="play(Dois17)"><span class="ouro">17.</span> Have you met Bob <span class="ouro-adj">yet</span>?</p>
        
        <h5 class="limao-adj">FOR</h5>
        <p class="limao">por, há | Usado em Duração - for + período de tempo</p>
        <p class="limao">for five years, for a week, for a month, for hours, for three hours</p>

        <p class="frases" onclick="play(Dois18)"><span class="limao">18.</span> I have lived here <span class="limao-adj">for</span> 10 years.</p>
        <p class="frases" onclick="play(Dois19)"><span class="limao">19.</span> She has taught at this univerity <span class="limao-adj">for</span> a long time.</p>
        
        <h5 class="rosa-escuro-adj">SINCE</h5>
        <p class="rosa-escuro">desde | Usado em Ponto de Partida - Since + momento concreto</p>
        <p class="rosa-escuro">since this morning, since last week, since yesterday
          since He was a child, since Friday, since 3 o'clock</p>
        <p class="frases" onclick="play(Dois20)"><span class="rosa-escuro">20.</span> I have lived here <span class="rosa-escuro-adj">since</span> 1990.</p>
        <p class="frases" onclick="play(Dois21)"><span class="rosa-escuro">21.</span> She has taught at this univerity <span class="rosa-escuro-adj">since</span> 1983.</p>
        
          <!--END OF SUMMARY BODY-->
              
              `;
  
    //changing the content in your element
    element.innerHTML = newContent;
  }
  
  // START OF VIDEO
  function changeVideoEn() {
    let element = document.getElementById("videoGrammar");
    let newContent = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/XGw2-p2WuJk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                `;
  
    //changing the content in your element
    element.innerHTML = newContent;
  }
  
  function changeVideoPt() {
    let element = document.getElementById("videoGrammar");
    let newContent = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/hpUrLBEuHrg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         
         
          
                  `;
  
    //changing the content in your element
    element.innerHTML = newContent;
  }
  // END OF VIDEO
  
  
  
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
                          
                          
                          <p class="frases" onclick="play(Quatro1)"><span class="cyan">1.</span> Have you ever met a famous person?</p>
                          <p class="frases" onclick="play(Quatro2)"><span class="cyan">2.</span> What have you done today?</p>
                          <p class="frases" onclick="play(Quatro3)"><span class="cyan">3.</span> Have you tried computer programming?</p>
                          <p class="frases" onclick="play(Quatro4)"><span class="cyan">4.</span> Have you sung in public before?</p>
                          <p class="frases" onclick="play(Quatro5)"><span class="cyan">5.</span> Who in your family has helped you a lot?</p>
                          <p class="frases" onclick="play(Quatro6)"><span class="cyan">6.</span> Which countries have been in the news this week?</p>
                          <p class="frases" onclick="play(Quatro7)"><span class="cyan">7.</span> How long have you studied English?</p>
                          <p class="frases" onclick="play(Quatro8)"><span class="cyan">8.</span> Where have you traveled?</p>
                          <p class="frases" onclick="play(Quatro9)"><span class="cyan">9.</span> Have you ever shot a gun?</p>
                          <p class="frases" onclick="play(Quatro10)"><span class="cyan">10.</span> Have you ever screamed at someone in public?</p>
                          <p class="frases" onclick="play(Quatro11)"><span class="cyan">11.</span> What is the best and worst restaurant you have eaten at?</p>
                          <p class="frases" onclick="play(Quatro12)"><span class="cyan">12.</span> Have you ever forgotten an important birthday?</p>
                          <p class="frases" onclick="play(Quatro13)"><span class="cyan">13.</span> Have you ever fallen asleep while talking on the phone?</p>
                          <p class="frases" onclick="play(Quatro14)"><span class="cyan">14.</span> Have you ever worked a job you hated?</p>
                          <p class="frases" onclick="play(Quatro15)"><span class="cyan">15.</span> Have you ever hunted and killed an animal?</p>
                          <p class="frases" onclick="play(Quatro16)"><span class="cyan">16.</span> Have you ever sold something you own?</p>
                          <p class="frases" onclick="play(Quatro17)"><span class="cyan">17.</span> Have you ever hurt yourself in the kitchen?</p>
                          <p class="frases" onclick="play(Quatro18)"><span class="cyan">18.</span> How long	have	they	lived	in Japan?</p>
                          <p class="frases" onclick="play(Quatro19)"><span class="cyan">19.</span> Where	has	he	been?</p>
                          <p class="frases" onclick="play(Quatro20)"><span class="cyan">20.</span> What is the longest time away from home you have ever spent?</p>  
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
                          
                          
                         
                          <p class="frases" onclick="play(Quatro1)"><span class="cyan">1.</span> Have you ever met a famous person?<br>
                          <em class="cyan">Você já conheceu uma pessoa famosa?</em></p>
                          <p class="frases" onclick="play(Quatro2)"><span class="cyan">2.</span> What have you done today?<br>
                          <em class="cyan">O que você fez hoje?</em></p>
                          <p class="frases" onclick="play(Quatro3)"><span class="cyan">3.</span> Have you tried computer programming?<br>
                          <em class="frases">Você já tentou programação de computador?</em></p>
                          <p class="frases" onclick="play(Quatro4)"><span class="cyan">4.</span> Have you sung in public before?<br>
                          <em class="cyan">Você já cantou em público antes?</em></p>
                          <p class="frases" onclick="play(Quatro5)"><span class="cyan">5.</span> Who in your family has helped you a lot?<br>
                          <em class="cyan">Quem da sua família te ajudou muito?</em></p>
                          <p class="frases" onclick="play(Quatro6)"><span class="cyan">6.</span> Which countries have been in the news this week?<br>
                          <em class="cyan">Quais países foram notícia esta semana?</em></p>
                          <p class="frases" onclick="play(Quatro7)"><span class="cyan">7.</span> How long have you studied English?<br>
                          <em class="cyan">Há quanto tempo você estuda inglês?</em></p>
                          <p class="frases" onclick="play(Quatro8)"><span class="cyan">8.</span> Where have you traveled?<br>
                          <em class="cyan">Where have you traveled?</em></p>
                          <p class="frases" onclick="play(Quatro9)"><span class="cyan">9.</span> Have you ever shot a gun?<br>
                          <em class="cyan">Você já atirou com uma arma?</em></p>
                          <p class="frases" onclick="play(Quatro10)"><span class="cyan">10.</span> Have you ever screamed at someone in public?<br>
                          <em class="cyan">Você já gritou com alguém em público?</em></p>
                          <p class="frases" onclick="play(Quatro11)"><span class="cyan">11.</span> What is the best and worst restaurant you have eaten at?<br>
                          <em class="cyan">Qual foi o melhor e o pior restaurante em que você comeu?</em></p>
                          <p class="frases" onclick="play(Quatro12)"><span class="cyan">12.</span> Have you ever forgotten an important birthday?<br>
                          <em class="cyan">Você já se esqueceu de um aniversário importante?</em></p>
                          <p class="frases" onclick="play(Quatro13)"><span class="cyan">13.</span> Have you ever fallen asleep while talking on the phone?<br>
                          <em class="cyan">Você já dormiu falando ao telefone?</em></p>
                          <p class="frases" onclick="play(Quatro14)"><span class="cyan">14.</span> Have you ever worked a job you hated?<br>
                          <em class="cyan">Você já trabalhou em um emprego que odiava?</em></p>
                          <p class="frases" onclick="play(Quatro15)"><span class="cyan">15.</span> Have you ever hunted and killed an animal?<br>
                          <em class="cyan">Você já caçou e matou um animal?</em></p>
                          <p class="frases" onclick="play(Quatro16)"><span class="cyan">16.</span> Have you ever sold something you own?<br>
                          <em class="cyan">Você já vendeu algo que possui?</em></p>
                          <p class="frases" onclick="play(Quatro17)"><span class="cyan">17.</span> Have you ever hurt yourself in the kitchen?<br>
                          <em class="cyan">Você já se machucou na cozinha?</em></p>
                          <p class="frases" onclick="play(Quatro18)"><span class="cyan">18.</span> How long	have they lived	in Japan?<br>
                          <em class="cyan">Há quanto tempo moram no Japão?</em></p>
                          <p class="frases" onclick="play(Quatro19)"><span class="cyan">19.</span> Where	has	he	been?<br>
                          <em class="cyan">Onde ele esteve?</em></p>
                          <p class="frases" onclick="play(Quatro20)"><span class="cyan">20.</span> What is the longest time away from home you have ever spent?<br>
                          <em class="cyan">Qual foi o maior tempo longe de casa que você já passou?</em></p>  
                      
                          
                  `;
  
    //changing the content in your element
    element.innerHTML = newContent;
  }
  s;
  