import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name:"search",
    initialState:{
        search: "",
        showSearch: false,
    },

    reducers:{
        displaySearchBar: (state)=>{
            state.showSearch=true;
        },
        closeSearchBar: (state)=>{
            state.showSearch=false;
        },
      
    }
})

export const {displaySearchBar,closeSearchBar} =  searchSlice.actions;

export default searchSlice.reducer;