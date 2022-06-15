import { createSlice } from "@reduxjs/toolkit";

/* Tables
    id: number,
    table:number,
    waiter: string,
    orders: {}

*/

/* Orders
    id: number,
    name: string,
    amount: number,
    price: number,
    date: number,
    isDone: boolean,
    actions: string,
*/

const initState = {
    tables: [],
}

export const restaurantSlice = createSlice({
    name: "restaurantSlice",
    initialState: initState,
    reducers: {

        //add table
        addTable: (state, action) => {
            state.tables.push(action.payload);
        },

        //add order
        addOrder: (state, action) => {
            const table = state.tables.find(s=>s.id === action.payload.tableId);
            table.orders = action.payload.order
        },
        // remove order 
          removeOrder: (state, action) => {
            state.tables= state.tables.filter((item)=> item.id !== action.payload)
            
        },
    }
})


export const selectTables=(state)=>state.restaurant.tables




export const {addTable, addOrder,removeOrder} = restaurantSlice.actions;

export default restaurantSlice.reducer;