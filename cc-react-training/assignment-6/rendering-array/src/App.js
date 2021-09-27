import logo from './logo.svg';
import './App.css';
import Search from "./Search";

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
    <h1>array rendering </h1>
    
    {list} 
    </div>
    </>
  );
}

export default App;
