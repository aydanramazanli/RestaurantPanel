import { configureStore } from "@reduxjs/toolkit";
import {reducer} from './reducer'
import Restaurant from './slices/restaurant'

const store = configureStore({
    reducer:{
        restaurant: Restaurant
    },
})

export default store