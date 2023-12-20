import './App.css';
import List from './components/List';

// Directly rendered the list into the dom

    // const numbers = [1,2,3,4,5];

    // const updatedNums = numbers.map((number) => {
    //   return <li>{number}</li>
    // })

    // function App() {
    //   return (
    //     <div className="App">
    //     <ul>
    //       {updatedNums}
    //     </ul>
      
    //     </div>
    //   );
    // }

  // Rendering list inside the Components
 
  const numbers = [1,2,3,4,5];
    function App(){
      return (
        <div>
          <List number = {numbers}/>
       
        </div>
      )
    }
export default App;
