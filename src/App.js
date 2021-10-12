import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Bienvenido a mi página
        </h1>
        <a
          className="App-link"
          href="https://giovanniperezibarra.github.io/portafolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visita mi web
        </a>
      </header>
    </div>
  );
}
export default App;