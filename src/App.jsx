import './App.css'
import DaisyNavbar from './assets/Components/DaisyNavbar/DaisyNavbar'
import LineChart from './assets/Components/Line Chart/LineChart'
import Navbar from './assets/Components/Navbar/Navbar'
import PriceOptions from './assets/Components/PriceOptions/PriceOptions'

function App() {

  return (
    <>
        {/* <DaisyNavbar></DaisyNavbar> */}
        <Navbar></Navbar>
        <PriceOptions></PriceOptions>
        <LineChart></LineChart>
        
    </>
  )
}

export default App
