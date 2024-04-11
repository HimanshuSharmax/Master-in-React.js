import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import MemoHook from './components/useMemo/MemoHook'
// import LayoutEffect from './components/useLayoutEffect/LayoutEffect'
// import RefHook1 from './components/useRef/RefHook1'
// import RefHook from './components/useRef/RefHook'
// import { AppProvider } from './components/useContext/UseContext'
// import ReducerHook from './components/useReducer/ReducerHook'
// import ClearUp from './components/useEffect/ClearUp'
// import UseState from './components/useState/useState.jsx'
// import UseStateObject from './components/useState/UseStateObject.jsx'
// import UseEffect from './components/useEffect/UseEffect'
import Callbackhook from './components/useCallback/Callbackhook'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <UseState/> */}
    {/* <UseStateObject/> */}
    {/* <UseEffect/> */}
    {/* <ClearUp/> */}
    {/* <UseContext/> */}
    {/* <ReducerHook/> */}
    {/* <RefHook1/> */}
    {/* <RefHook/> */}
    {/* <LayoutEffect/> */}
    {/* <MemoHook/> */}
    <Callbackhook/>
  </React.StrictMode>,
)
