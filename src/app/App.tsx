import BiggerSephirot from '../components/sephirot/bigger/BiggerSephirot';
import Sephirot from '../components/sephirot/Sephirot';

function App() {
  return (
    <section className="App">
      <BiggerSephirot
        world={{
          title: '  Briah (Mundo Criativo)',
          aspect: '     Onisciência',
        }}
        regent={{
          title: '   Tronos - Tzafquiel',
          name: 'YHVH ELOHIM',
          defect: 'Avareza',
          fontColor: 'white',
        }}
        sephirot={{
          name: '  Binah',
          valor: 'Entendimento',
          backgroundColor: 'rgb(217, 217, 217)',
          strokeColor: 'white',
        }}
        planet={{
          number: 3,
          backgroundColor: 'rgb(73, 73, 73)',
        }}
      />

      <Sephirot
        regent={{
          title: '   Anjos - Gabriel',
          name: 'Shaddai El Chai',
          defect: 'Preguiça',
          fontColor: 'white',
          strokeColor: 'white',
          backgroundColor: 'rgb(138, 41, 135)',
        }}
        sephirot={{
          name: 'Yesod',
          valor: 'Fundação',
          backgroundColor: 'rgb(205, 172, 209)',
          strokeColor: 'white',
        }}
        planet={{
          icon: '☽',
          number: 9,
          strokeColor: 'white',
          fontColor: 'white',
          backgroundColor: 'rgb(138, 41, 135)',
        }}
      />
    </section>
  );
}

export default App;