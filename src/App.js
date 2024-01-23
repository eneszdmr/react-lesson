import Berkant from "./components/Berkant";

function App() {
  const deneme = "props testi denemesi";

  const clicked=()=>{
    console.log("sen tıkladın !");
  }

  const array=[
    {name:'ali first', id:0 },
    {name:'ahmet second', id:1},
    {name:'mehmet third', id:2}
  ]




  
  return (
    <div className="App">
      <Berkant props={deneme} />
     
      <button onClick={clicked}>Button</button>

{array.map((item,id) => 
<div key={id}>{item.name}</div>
)}



    </div>
  );
}

export default App;
