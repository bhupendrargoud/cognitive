import logo from './logo.svg';
import './App.css';
import Ass from "./Ass";

const list =(<ul>
  <li> one</li>
  <li> two</li>
  <li> three</li>
  <li> four</li>
</ul>)

function App() {
  return (
    <>
    <div >
    <h1>Grocery List</h1>
    <Ass/>
    </div>
    </>
  );
}

export default App;
