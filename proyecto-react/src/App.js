// import './App.css';
import Header from "./components/Header/header.js"
import Footer from "./components/Footer/Footer.js"
import Tarjetas from "./components/Tarjetas/Tarjetas.js"

function App() {
  return (
    <div className="App">
      < Header />
      

      {/* aca abajo arranca el componente contenedor de tarjetas */}
      <main>
        {/* este main deberia ser el COMPONENTE CONTENEDOR de tarjetas */}
        
        <Tarjetas />
        

      </main>
      {/* aca arriba termina el componente contenedor de tarjetas */}

      < Footer />
    </div>
  );
}

export default App;
