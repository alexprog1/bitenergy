import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import "./App.css";

function App() {
  return (
    <div>
      <Header />
        <br/>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/yUJv2RccUL0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <br/>
        <h1>Seremos o maior condomínio de energia solar do RN</h1>
        <br/>
      <Footer />
    </div>
  );
}

export default App;