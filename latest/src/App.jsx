import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  const yr = [2024, 2025, 2026];
  const comp = {name:"KIET", location:"Ghaziabad", EstYear: "1990"};
  return (
    <div>
      <Header title="Its my React App"/>
      <Header title="Thanks"/>
      <h1>Hello</h1>
      <Footer year={yr} company={comp}/>
    </div>
  )
}
