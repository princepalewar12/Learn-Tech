import { createSlice } from "@reduxjs/toolkit";
const initialState={
    firstName:" ",
    lastName: " ",
    City: " "
}

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers:{
        changeFirstName:(state, action)=>{
            state.firstName = action.payload
        },
        changeLastName:(state,action)=>{

        },
        changeCityName:(state,action)=>{

        }

    }
})

export const {changeFirstName,changeLastName,changeCityName} = formSlice.actions;
export default formSlice.reducer