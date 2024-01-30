import { PayloadAction, createAction, createReducer } from "@reduxjs/toolkit";


export interface StateType{
    count:number;
}

const initialState :StateType  = {
    count:0,
}

export const incrementByValue = createAction<number>('incrementByValue');

const customReducer = createReducer(initialState,(builder)=>{
    builder
    .addCase("increment",(state)=>{
        state.count += 1; 
    })
    .addCase("decrement",(state)=>{
        state.count -= 1; 
    })
    .addCase(incrementByValue,(state,action:PayloadAction<number>)=>{
        state.count += action.payload
    })
    
})

export default customReducer;




// -------------------- using CreateSlice

// import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// export interface StateType{
//     count:number;
// }

// const initialState :StateType  = {
//     count:0
// }
// const rootSlice = createSlice({
//     name:'counting',
//     initialState,
//     reducers:{
//        increment:(state)=>{
//         state.count += 1;
//        },
//        decrement:(state)=>{()
//         state.count -= 1;
//        },
//        incrementByValue:(state,action:PayloadAction<number>)=>{
//          state.count += action.payload
//        }
//     }
// })

// export const {increment,decrement,incrementByValue} = rootSlice.actions;
// export const reducer = rootSlice.reducer;


