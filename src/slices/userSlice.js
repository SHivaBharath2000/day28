// import { createSlice } from "@reduxjs/toolkit";

const initialstate={
    count:199
}
 const countReducer=(state=initialstate,action)=>{
    switch(action.type){
        case "inc":
            return{
                ...state,
                count:state.count+state.count,
            }
        case ("dec"):
            if (state.count > 199) {
                return { ...state, count: state.count - 199 }; 
              } else {
                return state; 
              }
         
        default:
                return initialstate;
    }
}
export default countReducer
// export const userSlice=createSlice({
//     name:"users",
//     initialState,
//     reducers:{
//         setUsers:(state,action)=>{
//             state.users=action.payload+1
            
//         },
//         setDecrese:(state,action)=>{
//             state.users=action.payload-1
//         }
//     }
// })
// export const {setUsers,setDecrese}= userSlice.actions
// export  default userSlice.reducer