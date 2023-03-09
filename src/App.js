import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import "./App.css";

function App() {
  return (
    <main>
      <Header />
        <div className="container">
          {
          /*
          <img className='menu-img' src="/imagens/youtube.png" alt="Bit Energy" />       
          <iframe width="560" height="315" src="https://www.youtube.com/embed/yUJv2RccUL0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          */
          }
           <iframe className='video' width="1366" height="494" src="https://www.youtube.com/embed/yUJv2RccUL0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <br/>
        <section>
          <h1>Seremos o maior condomínio de energia solar do RN</h1>
          <p>Gerador de energia limpa e sustentável</p>
        </section>
        <br/>
        <div className="container">
          <div class="card">
            <h3>Especialista em energia solar</h3>
            <p>Totalmente especializada e segura.</p>
          </div>
          <div class="card">
            <h3>Estaremos presente em uma área total de 190 hectares.</h3>
            <p>Projeto para instalação de usinas com total de 5MW.</p>
          </div>
          <div class="card">
            <h3>Especialista em energia solar</h3>
            <p>Totalmente especializada e segura.</p>
          </div>
        </div>
        <hr className="bar" />

        <section>
          <h1>Sua plataforma de energia solar 100% digital.</h1>
          <p>Totalmente segura, simples e interativa!</p>
        </section>

          <br />

        <div className="container">
          <img className="img" src="/imagens/group.png" alt="Bit Energy" />
        </div>

        <hr className="bar" />

        <section>
          <h1>Conheça nossas soluções</h1>
          <p>Totalmente segura, simples e interativa!</p>
        </section>

        <hr className="bar" />
        
        {/* FAQ de Perguntas Frequentes */}
        <h2>Perguntas Frequentes</h2>
        <div className="container">
          <div className="faqbox">
            <details>
              <summary>
                O que é a Bit Energy?
              </summary>
              Seremos o maior condomínio de energia solar do RN, levando economia aos nossos clientes por meio de usinas de energia solar fotovoltaica.
            </details>
            <details>
              <summary>
              Como funciona a energia solar pela bitenergy?
              </summary>
              A energia gerada por uma determinada usina é compartilhada entre todas as UCs (Unidades Consumidoras) do grupo.

              O excedente da geração de energia pode ser injetado na concessionária local e ser utilizado depois para o abatimento na conta de luz.

              Por meio de um contrato feito com a BitEnergy, o cliente tem o direito de usufruir da energia gerada pela usina que foi alugada. Recebendo os créditos de energia gerados e obtendo a economia real na conta de luz. 
            </details>

            <details>
              <summary>
              Como eu faço para utilizar a energia solar?
              </summary>
              Tendo concluído todo o processo de adesão, você será notificado quando a sua usina solar entrar em fase de operação. A partir deste momento, os créditos começarão a ser considerados em sua conta no primeiro mês de geração de energia do seu produto escolhido.  
            </details>

            <details>
              <summary>
              Quais são os requisitos necessários para a adesão ao condomínio solar?
              </summary>
              Primeiramente demonstrar o interesse em aderir um de nossos produtos,
              - Deve estar cadastrado na distribuidora de energia (COSERN); 
              - É preciso ter um consumo mensal de energia elétrica de pelo menos R$500,00 para pessoas físicas e jurídicas; 
              - O CNPJ, ou o CPF, informado deve estar adimplente com a distribuidora.

              Após esses dados serem submetidos, será realizada uma revisão do perfil do cliente. E entraremos em contato a cada status do processo.
            </details>
            <br />
          </div>
        </div>
        <br/>
      <Footer />
    </main>
  );
}

export default App;