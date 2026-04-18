import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  const yr = [2024, 2025, 2026];
  const comp = {name:"KIET", location:"Ghaziabad", EstYear: "1990"};
  return (
    <div>
      <Header title="My first React App" color="red" year="2026"/>
      <Header title="Lets's explore FSD together"/>
      <h1>Hello</h1>
      <card>
        <p>Product: </p>
        <p>Description: </p>
        <p>Price: </p>
      </card>
      <Footer year={yr} company={comp}/>
    </div>
  )
}
