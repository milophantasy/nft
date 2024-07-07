// import logo from './logo.svg';
import image from './assets/Animation_Accueil.gif'
import './App.css';



function App() {
  // const handleClick = () => {
  //   console.log('Button was clicked!');
  // };
  return (
    <div className="App">
      <header className="App-header">
      <img class="tableau" src={image} alt="tableau" />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <button class="button" onClick={handleClick}>mon bouton</button> */}
      </header>
    </div>
  );
}


export default App;
