// import logo from './logo.svg';
// import './App.css';
import Table from "./table"
import Edit from "./edit"
import{Routes,Route}from "react-router-dom"

function App() {
  return (
    <div >
      <Routes>
      <Route exact path = "/table"element={<Table/>}/>
      <Route exact path = "/edit" element={<Edit/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
