import React from 'react'

const Usereducer = () => {
  return (
    <div>
      <h1>ReactJS useReducer Hook</h1>
      <p>The useReducer Hook is the better alternative to the useState hook and is generally more preferred over the useState hook when you have complex state-building logic or when the next state value depends upon its previous value or when the components are needed to be optimized.</p>
       <p>The useReducer hook takes three arguments including reducer, initial state, and the function to load the initial state lazily.</p>
       <p>Syntax:</p>
       <code>
       const [state, dispatch] = useReducer(reducer, initialArgs, init);
        </code>
        <p>Example: Here reducer is the user-defined function that pairs the current state with the dispatch method to handle the state, initialArgs refers to the initial arguments and init is the function to initialize the state lazily.</p>
        <code>
        <iframe src="https://codesandbox.io/embed/usecounter-hook-lylx9r?fontsize=14&hidenavigation=1&theme=dark"
     style={{'width':'100%','height':'500px', 'border':0, 'border-radius': '4px',overflow:'hidden'}}
     title="USecounter hook"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
        </code>
       
    </div>
  )
}

export default Usereducer