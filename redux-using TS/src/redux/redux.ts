import { configureStore } from "@reduxjs/toolkit";
import customReducer from "./countReducer";


const store = configureStore({
    reducer:{
        counter:customReducer
     
    }
})

export default store;


// import { configureStore } from "@reduxjs/toolkit";
// // import { reducer } from "./countReducer";
// import customReducer from "./countReducer";


// const store = configureStore({
//     reducer:{
//         counter:customReducer
//         // counter:reducer
//     }
// })

// export default store;