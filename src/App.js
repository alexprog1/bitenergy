import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import "./App.css";

function App() {
  return (
    <main>
      <Header />
        <br/>
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/yUJv2RccUL0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <br/>
        <section>
          <h1>Seremos o maior condomínio de energia solar do RN</h1>
          <p>Gerador de energia limpa e sustentável</p>
        </section>
        <br/>
        <div class="row">
          <div class="card">
            <h3>Especialista em energia solar</h3>
            <p>Totalmente especializada e segura.</p>
          </div>
          <div class="card">
            <h3>Especialista em energia solar</h3>
            <p>Totalmente especializada e segura.</p>
          </div>
          <div class="card">
            <h3>Especialista em energia solar</h3>
            <p>Totalmente especializada e segura.</p>
          </div>
        </div>
        <hr className="bar" />
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
          </div>
        </div>
        <br/>
      <Footer />
    </main>
  );
}

export default App;