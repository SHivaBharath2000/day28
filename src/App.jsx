
import { useSelector } from 'react-redux'
import Calc from './calc'
import './App.css'
import { Provider } from 'react-redux'
import { useDispatch } from 'react-redux'
import store from './app/store.js'

function App() {
  const dispatch=useDispatch()
  const {count}=useSelector((state)=>state.countReducer)

// const add=()=>{
//  dispatch({type:"inc"})
// }
// const dec=()=>{
//   dispatch({type:"dec"})
// }
  return (
    <>
    <Provider store={store}>
       <div className="row">
        <div className="col-1">
          <img 
            style={{ width: "100%" ,backgroundColor:"#f0f0f0"}}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUaP_jMIi4sbIflif2R6c7xgD7W9Fva1So_A&s'
          ></img>
        </div>
        <div className="col-2">
          <h3>The Road</h3>
         <h5><i>The Road is a 2006 post-apocalyptic novel by American writer Cormac McCarthy.The book details the grueling journey of a father and his young son </i></h5>
        </div>
        <div className="col-3">
         <div style={{marginTop:"20px",display: "flex"}}>
          <button type="button" className="btn btn-success" onClick={()=>dispatch({type:"inc"})}>Add</button>
          <h4  style={{marginLeft:"5px"}}>→</h4>
          </div>
        </div>
        <div className="col-4">
          <h3 className='count'>${count}</h3>
          <button type="button" className="btn btn-danger" style={{backgroundColor:"white"}}onClick={()=>dispatch({type:"dec"})}>Remove from Cart</button>
        </div>
        
          <Calc/>
        
     </div>
     </Provider>
    </>
  )
}

export default App
