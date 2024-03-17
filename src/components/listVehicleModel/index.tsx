import { useState } from "react";
import VehicleForm from "../vehicleForm";
import data from "./data";
import ListVehicles, { vehicleFormProps } from "../listVehicles";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import VehicleModel from "../vehicleModel";
const ListVehicleModel = () => {

    const [vehicleModel, setvehicleModel] = useState<string>("");
    const handleVehicleModel = (title: string) => {
        setvehicleModel(title);
    }
    const vehicles = useSelector((state: vehicleFormProps) => state?.vehicles);

    return (
        <>
            {/* Vehicle model Component */}
            <VehicleModel data={data} handleVehicleModel={handleVehicleModel}></VehicleModel>
            {/* routes - Get all the vehicles */}
            <div>
                <li style={{ listStyle: 'none' }}> <Link to='/vehicles'> List All the Vehicles</Link> </li>
            </div>
            {/* Vehicle model form component */}
            {vehicleModel && <VehicleForm vehicleModel={vehicleModel}></VehicleForm>}
            {/* diplay all the vehicles */}
            <ListVehicles vehicles={vehicles}></ListVehicles>
        </>
    )
}

export default ListVehicleModel;