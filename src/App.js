import Header from './components/Header'
import './App.css';

function App() {

  const dados = {
    nome:"Jéssica Lopes",
    empresa:"LeroLero",
    site:"https://www.fiap.com.br",
    className:"App-link",
  }

  return (
    // JSX - JavaScript Extensible
    <div className="App">
      <Header title="Bem vindo! Bom almoço!" options={dados}/>
    </div>

  );
}

export default App;
