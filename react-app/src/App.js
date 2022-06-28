import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Cardwidget/Card";
import Coffy from "./components/Coffybody/Coffy";
import './App.css'


function App() {

  return (

   <>
    <div className="container">
      <div>
        <Navbar />
      </div>
      <div className="coffy_container">
          <Coffy />
      </div>
    </div>
    </>
  )

}


export default App;