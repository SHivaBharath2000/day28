import { configureStore } from "@reduxjs/toolkit";
import countReducer  from "../slices/userSlice";
const store= configureStore({
    reducer:{
        countReducer,
    },
    devTools:true
});
export default store