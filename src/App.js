import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import "./App.css";

function App() {
  return (
    <main>
      <Header />
        <br/>
        <div className='container'>
          <img className='menu-img' src="/imagens/youtube.png" alt="Bit Energy" />       
          <iframe width="560" height="315" src="https://www.youtube.com/embed/yUJv2RccUL0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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

        <div className='container'>
          <img className='menu-img' src="/imagens/group.png" alt="Bit Energy" />
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
              Seremos o maior condomínio de energia solar do RN, 
            </details>
            <details>
              <summary>
              Como funciona a energia solar pela bitenergy?
              </summary>
              Seremos o maior condomínio de energia solar do RN, 
            </details>

            <details>
              <summary>
              Como eu faço para utilizar a energia solar?
              </summary>
              Seremos o maior condomínio de energia solar do RN, 
            </details>

            <details>
              <summary>
              Quanto tempo dura até eu poder pagar minha conta pela usina?
              </summary>
              Seremos o maior condomínio de energia solar do RN, 
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