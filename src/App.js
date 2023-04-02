import './App.css';
import imagenrickmorty from './img/rick-morty.png';
import {useState} from "react";
import Characters from './components/Characters.js'

function App() {

  const [characters, setCharacters] = useState(null);
  const reqapi = async () => {

    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();


    

    
    setCharacters(characterApi.results);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Title">Rick & Morty</h1>

        {characters ?(
          <Characters characters={characters} setCharacters={setCharacters}/>
          ) : (

              <>    
              <img src={imagenrickmorty} alt="Rick & Morty" className="img-home" />
              <button onClick={reqapi} className="btn-search">Search Character</button></>
          )

      }

        

      </header>
    </div>
  );
}

export default App;
