import './App.css'
import Header from './components/Header'
import Events from './components/Events'
import Footer from './components/Footer'
import atheletics from './assets/atheletics.PNG'
import badminton from './assets/badminton.PNG'
import basketball from './assets/basketball.PNG'
import cricket from './assets/cricket.PNG'
import football from './assets/football.PNG'
import tabletennis from './assets/tabletennis.PNG'
import voleyball from './assets/voleyball.PNG'

function App() {
  return (
    <div>
    <Header />
    <main className='container'>
      <Events
        image={atheletics}
        title="Atheletics"
        description="Track and field events featuring students from various colleges."
        category="Track & Field"
      />
      <Events
        image={badminton}
        title="Badminton"
        description="Singles and doubles badminton competitions."
        category="Racket Sport"
      />
      <Events
        image={basketball}
        title="Basketball"
        description="Inter-college basketball matches with full-court action."
        category="Team Sport"
      /> 
      <Events
        image={cricket}
        title="Cricket"
        description="Cricket tournament with college teams batting and bowling for glory."
        category="Team Sport"
      /> 
      <Events
        image={football}
        title="Football"
        description="Football matches showcasing teamwork and scoring goals."
        category="Team Sport"
      />
      <Events
        image={tabletennis}
        title="Table Tennis"
        description="Fast-paced table tennis competitions."
        category="Indoor Sport"
      />
      <Events
        image={voleyball}
        title="Voleyball"
        description="Team volleyball matches with high spikes and blocks."
        category="Team Sport"
      />
    </main>
    <Footer />
    </div>
  );
}

export default App
