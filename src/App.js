//TODO: STEP 1 - Import the useState hook.
// import React, from "react";
import "./App.css";
import BottomRow from "./BottomRow";
  // 1. =========== IMPORT HERE (insert the " { userstate }" in between the existing 
  // "react" statement. ...see above)^^^
  import React, { useState } from "react";

  

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  
  // You'll need one for the home score and another for the away score.

  // 2.A =========== Home Score 
  const [count, setCount] = useState(0);
  const [ homeFieldGoal, setFieldGoal] = useState(0);
  // 2.B =========== Away Score 
  const [awayCount, setAwayCount] = useState(0);
  const [ awayFieldGoal, setAwayFieldGoal] = useState(0);

  /* TODO STEP 3 - We need to change the hardcoded values in 
            these divs to accept dynamic values from our state. */
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          {/* //HOME// */}
          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{count + homeFieldGoal}</div>
          </div>
          <div className="timer">00:03</div>
          {/* //AWAY// */}
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{count + awayFieldGoal}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown">Home Touchdown</button>
          <button className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown">Away Touchdown</button>
          <button className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;







// //========= Kiernan lecture code sandbox ========//

// function App() {
//   const [count, setCount] = useState(0);
//     // this is array destructuring
//     // count is a variable being set and referenced in the useState
//     // setCount is a helper function we're using to update count
//     // useState is a hook 
//   console.log("this is useState", useState(0));
//   console.log(count);
//   console.log(setCount);

//   return (
//     <div className="counter">
//       <h1>React Counter</h1>
//       <p className="click_desc">
//         {/* count is just a variable and can be inserted in our curly braces just like any other variable 👇 */}
//         You clicked <span>{count}</span> times
//       </p>
//       {/* <p>{color}</p> */}
//       <div className="button_container">
//         {/* In Rect we typically use an onclick attribute similar to what is in Vanilla JS. The onClick attribute is our event handler and it is added to the target element in order to specify the function to be executed when that element is clicked. like any other event listener it expects a callback function. So let's use the onClick attribute(also called property in React) */}
//         {/* If we leave off the call back our expression would run after the browser parsed our file and not when we click on the button like it will with the function. We wrap it in a function so onClick will only run when we we decide to click on it not when the browser first runs  */}
//         {/* <button onClick={console.log('click')}>Add 1</button> */}
//         {/* Now we can use the setCount function to increase our count */}
//         {/* When we call setCount we are telling React to rerender the component and count will be = to what ever we have clicked. And then the updated state is displayed on our page.*/}
//         <button onClick={() => setCount(count + 1)}>Add 1</button>
//         {/* When we click the buttons, we call setCount with a new value. React will then re-render the App component, passing the new count value to it. */}
//         <button onClick={() => setCount(count * 5)}>multiply by 5</button>
//         <button onClick={() => setCount(0)}>reset</button>
//         {/* <button onClick={handleReset}>Reset</button> */}
//       </div>
//     </div>
//   );
// }
// // Blog on event handlers
// // https://blog.logrocket.com/a-guide-to-react-onclick-event-handlers-d411943b14dd/
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);


// //======LECTURE ======//

// // *** 1. Main lecture material

// function App() {
//   // const [someState, setSomeState] = React.useState(0);
//   // // const [anotherState, setAnotherState] = React.useState(true);
//   // if (someState < 5) {
//   //   setSomeState(someState + 1);
//   // }
//   // console.log(someState);

//   // Emma
//   // const [anotherState, setAnotherState] = React.useState(1);

//   // if (anotherState < 50) {
//   //   setAnotherState(anotherState * 5);
//   // } else {
//   //   console.log('Too high!');
//   // }

//   // console.log(anotherState);

//   // Sebastian
//   // const [lamp, turnOn] = React.useState(false);

//   // if (lamp === false) {
//   //   turnOn(true);
//   // }
  
//   // console.log(lamp);

//   const [counter, setCounter] = React.useState(0);
  
//   return (
//     <div className="counter">
//       {
//         // We can use regular JS within our JSX
//         // console.log('hello')
//       }
//       <h1>React Counter</h1>
//       <p className="click_desc">
//         You clicked <span>{ counter }</span> times
//       </p>
//       <div className="button_container">
//         <button onClick={() => setCounter(counter + 1)}>Add 1</button>
//         <button onClick={() => setCounter(counter * 5)}>multiply by 5</button>
//         <button onClick={() => setCounter(0)}>reset</button>
//       </div>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);


// // *** 2. Challenge lecture material

// // 2. NEW VERSION (ADDITIONS MADE)
// // don't forget to destructure useState
// import React from "react";
// import ReactDOM from "react-dom";

// import "./index.css";

// function App() {
//   // Declare a new state variable
//   const [color, setColor] = React.useState('Red');
//   // This is code to change the color on the "picker-choice span to match the color of the button choosen"

//   const styles = {
//     color: '#E62739'
//   }
  
//   if (color === "Green") {
//     styles.color = "#57e278";
//   } else if (color === "Pink") {
//     styles.color = "#e257c1";
//   } else if (color === "Blue") {
//     styles.color = "#2e6cd3";
//   } else {
//     styles.color = "#E62739";
//   }

//   return (
//     <div className="counter">
//       <p>
//         {/* Using template literal to add space after color 👇 */}
//         {`Color: `}
//         {/* <span className="picker-choice" style={color:}> */}
//         <span className="picker-choice" style={styles}>
//           { color }
//           {/* 👈This color is hard coded in. Replace it with our state variable */}
//         </span>
//       </p>
//       {/* Add click listeners to each button to update our color on click. */}
//       <div className="button_container">
//         <button className="color_button" onClick={e => setColor('Blue')}>
//           <span role="img" aria-label="blue heart">
//             💙
//           </span>
//         </button>
//         <button className="color_button" onClick={e => setColor('Green')}>
//           <span role="img" aria-label="green heart">
//             💚
//           </span>
//         </button>
//         <button className="color_button" onClick={e => setColor('Pink')}>
//           <span role="img" aria-label="pink heart">
//             💗
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);