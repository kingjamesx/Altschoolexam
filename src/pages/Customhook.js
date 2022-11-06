import React from 'react'

const Customhook = () => {
  return (
    <div>
    <h1>React: How to create a Custom Hook</h1>
    <p>React introduced Hooks quite a while ago. With their release, Hooks gave function components the ability to use state and side-effects with built-in Hooks such as React's useState Hook and React's useEffect Hook.</p>
     <p>There are only a handful built-in Hooks (e.g. useReducer, useCallback, useMemo, useContext) provided by React though. However, by using these Hooks as a foundation, React developers can create their own hooks called custom hooks.</p>
     <h2>rules to creating Custom hooks:</h2>
     <ul>
      
      <li>Custom Hooks are named with "use" as prefix. For example, a custom hook could be named useLocalStorage or useAuthentication. In our case, the custom hook will be named useBoolean.</li>
      <li>Custom Hooks consist of built-in React Hooks or other custom Hooks. Therefore a custom Hook is always a new composition of one or multiple Hooks. If a custom Hook does not use any hooks internally, it's not a custom Hook and shouldn't have the prefix "use".</li>
     </ul>
    </div>
  )
}

export default Customhook