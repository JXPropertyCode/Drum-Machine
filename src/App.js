import './App.css';
import React, { useEffect, useState } from 'react';
// the useState was helpful when doing the Modal.js/Testing the ComponetWillUnMount
import { audioPlay } from './functions.js';
// import Modal from './Modal.js'

// note, this is a little different from FreeCodeCamp since I feel like certain rules or requirements arent needed and are extra.
// maybe it is just me not seeing the big picture, but for my current knowledge, there are more effecient and better ways of completing this project
// note: importing functions reference: https://stackoverflow.com/questions/38467574/import-javascript-file-and-call-functions-using-webpack-es6-reactjs

// this functionApp was a version to test the compoentWillUnMount w/ the Modal.js
// can IGNORE THIS as it is not related to the current project
// function App() {
//   let [isOpen, setOpen] = useState(true)

//   return (
//     <div>
//       <button onClick={() => setOpen(!isOpen)}>close</button>
//       {isOpen && <Modal/>}
//     </div>
//   )
// }

  const keysAndValues = {
    "q": "Heater1",
    "w": "Heater2",
    "e": "Heater3",
    "a": "Heater4",
    "s": "Clap",
    "d": "Open HH",
    "z": "Kick n' Hat",
    "x": "Kick",
    "c": "Closed HH",
  };

  // this is to get all the key values into an array from keysAndValues
  const keys = Object.keys(keysAndValues);

  function App() {

    useEffect(() => {
      function onKeydown(e) {

        // this if statement is to prevent other wrong inputs of keys to activate anything or run anything
        // if keys doesn't include any of the buttons pressed, then it returns nothing
        if (!keys.includes(e.key)) return document.getElementById("display").innerHTML = "Click A Key That Is Listed Below";

        // e.key - the e is the listener for hte event, the .key is to get the object which is the "event's" key which is to get the key presses
        // upperCase since anytime you press a key, usually it is lowercase
        audioPlay(e.key.toUpperCase(), keysAndValues[e.key])
      }
      window.addEventListener('keydown', onKeydown);
      return () => {
        window.removeEventListener('keydown', onKeydown)
        console.log('close')
        // under the return statement will bethe compoentUnMount which is after you close the application
      };
    }, []);
    // these array looking things are basically to keep track of the states and if any of the states inside changes, then the useEffect would run

  return (
    <div>
      <h1 id="display">Play Something</h1>
      <button onClick={() => audioPlay("Q", keysAndValues["q"])}>Q</button>

      {/* I tried doing the onClick(audioPlay("Q")) but doesn't work since right when it loads it would play it, if you do onClick={() => audioPlay("Q")} instead, it means it activates a fucntion and play it when it is clicked */}
        <audio className="audio-element" id="Q">
          <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></source>
        </audio>

      <button onClick={() => audioPlay("W", keysAndValues["w"])}>W</button>
        <audio className="audio-element" id="W">
          <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></source>
        </audio>
      
      <button onClick={() => audioPlay("E", keysAndValues["e"])}>E</button>
        <audio className="audio-element" id="E">
          <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></source>
        </audio>

      <button onClick={() => audioPlay("A", keysAndValues["a"])}>A</button>
        <audio className="audio-element" id="A">
          <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></source>
        </audio>

      <button onClick={() => audioPlay("S", keysAndValues["s"])}>S</button>
        <audio className="audio-element" id="S">
          <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></source>
        </audio>

      <button onClick={() => audioPlay("D", keysAndValues["d"])}>D</button>
        <audio className="audio-element" id="D">
          <source src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></source>
        </audio>

      <button onClick={() => audioPlay("Z", keysAndValues["z"])}>Z</button>
        <audio className="audio-element" id="Z">
          <source src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></source>
        </audio>
      <button onClick={() => audioPlay("X", keysAndValues["x"])}>X</button>
        <audio className="audio-element" id="X">
          <source src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></source>
        </audio>

      <button onClick={() => audioPlay("C", keysAndValues["c"])}>C</button>
      <audio className="audio-element" id="C">
          <source src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></source>
        </audio>

    </div>
  );
}

export default App;
