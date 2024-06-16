import { useSelector } from 'react-redux'


function Calc (){
 
  const {count}=useSelector((state)=>state.countReducer)
 
    return(
        <>
         <div className="contain">
          <div className="labels">
          <h3><p>SUBTOTAL</p></h3>
          <h3><p>SHIPPING</p></h3>
          <h3><p style={{marginTop: "100%"}}>TOTAL</p></h3>
        </div>
        <div className="values">
          <p style={{fontSize:"30px"}}>${count} </p>
          <h3><p>FREE</p></h3>
          <p style={{marginTop: "144%" ,fontSize:"30px"}}>${count}</p>
         
        </div>
       
      </div>
        </>
    )
}
export default Calc