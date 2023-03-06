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
          <div class="card green">
            <h3>Especialista em energia solar</h3>
            <p>Totalmente especializada e segura.</p>
          </div>
          <img className='card green' src='./imagens/card01.jpg' alt='Card'/>
        </div>
      <Footer />
    </main>
  );
}

export default App;