import { createSlice } from "@reduxjs/toolkit";
import vehiclesData from "../components/vehicleForm/vehiclesData";
const initialState = vehiclesData
const vehicleSlice = createSlice({
    name: 'vehicle',
    initialState: initialState,
    reducers: {
        addVehicle(state , action) {
            state.push(action.payload)
        }
    }
})

export const {addVehicle} = vehicleSlice.actions

export default vehicleSlice.reducer