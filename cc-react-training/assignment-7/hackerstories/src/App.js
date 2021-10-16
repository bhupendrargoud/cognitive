import logo from './logo.svg';
import './App.css';
import List from './component/List';

const stories =[
  {
      title :"react",
      url : " http//react",
      author :"jordan walke",
      num_comments : 3,
      points : 4,
      objectid :0,
  },
  {
      title :"redax",
      url :"http//redax",
      author :"man hattan",
      num_comments : 2,
      points : 5,
      objectid :1,
  }
  
]

function App() {
  return (
    <div className="stories">
       <h1> my stories </h1>
          <List stories={stories} items={stories} />
    </div>
  );
}

export default App;
