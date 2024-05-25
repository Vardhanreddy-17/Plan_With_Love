import { useState } from "react";
import "./App.css";
import Tours from "./components/Tours";
import data from "./data";

function App() {
  const[tours,SetTours] = useState(data);
  function removeTour(id){
    const newTours = tours.filter(tour => tour.id!==id);
    SetTours(newTours);
  }
  if(tours.length===0){
    return(
      <div className="refresh">
      <h2>No Tours Left</h2>
      <button className="refreshBtn" onClick={()=> SetTours(data)}>Resfresh</button>
      </div>
    );
  }
  return (
   <div className="App">
    <Tours tours={tours} removeTour={removeTour}></Tours>
   </div>
  );
}

export default App;
