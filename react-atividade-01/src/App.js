import './App.css';
import PersonCard from './components/developers/developerCard'

function App() {

  const devs = [
    {
      nome: "Teste01",
      idade: 25,
      pais: "Brasil"
    },
    {
      nome: "Teste02",
      idade: 22,
      pais: "Brasil"
    },
    {
      nome: "Teste03",
      idade: 23,
      pais: "Brasil"
    }
  ]


  return (
    <div className="App">
      <header className="App-header">
        {
          devs.map(
            (dev, i) => {
            return <PersonCard 
                    key={i} 
                    nome={dev.nome} 
                    idade={dev.idade} 
                    pais={dev.pais}
            />
            }
          )
        }

      </header>
    </div>
  );
}

export default App;
