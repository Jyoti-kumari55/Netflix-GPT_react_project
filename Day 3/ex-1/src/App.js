import './App.css';
import { CORE_CONCEPTS } from './data';

const des = ["Fundamental", "Crucial", "Core"];

function getRandomData(max){
  return Math.floor(Math.random() * (max + 1));

}

// 1. One way of using props
function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt = {props.title}></img>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

function App() {
  return (
    <div className="App">
      {/* <p>
      {des[getRandomData(2)]} React concepts you will need for ....etc     
      </p> */}
      <main>
     <section id="core-concepts">
      <h2> Core Concepts</h2>
      <ul>

        <CoreConcept // this method of using props is not optimal using so much code
            title = {CORE_CONCEPTS[0].title}
            description = {CORE_CONCEPTS[0].description}
            image = {CORE_CONCEPTS[0].image} />

          {/* // 2. we can access this with using spread opertor  */}
          {/* // shorter alternative of props  */}

        <CoreConcept {...CORE_CONCEPTS[1]} /> 


        <CoreConcept {...CORE_CONCEPTS[2]} />
        <CoreConcept {...CORE_CONCEPTS[3]} />

           
      </ul>
    </section>
  </main>
  </div>
  );
}

export default App;
