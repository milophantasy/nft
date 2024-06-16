import logo from './logo.svg';
import bandeau from './assets/Bandeau Profil1400x350x72dpi.jpg'
import './App.css';



function App() {
  const handleClick = () => {
    console.log('Button was clicked!');
  };
  return (
    <div className="App">
      <header className="App-header">
      <img class="bandeau" src={bandeau} className="bandeau" alt="badeau" />
        <img src={logo} className="App-logo" alt="logo" />
        <button class="button" onClick={handleClick}>mon bouton</button>
      </header>
    </div>
  );
}


export default App;
