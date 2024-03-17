import { useContext } from "react";
import { ThemeContext } from "../../App";
import { IFormData } from "../vehicleForm";

export interface vehicleFormProps {
    vehicles: IFormData[]
}
const ListVehicles: React.FC<vehicleFormProps> = ({ vehicles }) => {
    const theme = useContext(ThemeContext)
    return (<>
        {vehicles && vehicles.length > 0 ?
            <div>
                <table style={{padding: '20px' , backgroundColor: theme?.secondaryColor}}>
                    <thead>
                        <th>S.No</th>
                        <th>Model</th>
                        <th>Location</th>
                        <th>color</th>
                        <th>No of Owners</th>
                        <th>Year of Manufactures</th>
                        <th>Transmission</th>
                        <th>Insurance Valid upto</th>
                        <th>External Fitments</th>
                        <th>Kms</th>
                        <th>Photo</th>
                    </thead>
                    <tbody>
                        {vehicles.map((vehicle, index) => <tr>
                            <td>{index + 1}</td>
                            <td>{vehicle.model}</td>
                            <td>{vehicle.location}</td>
                            <td>{vehicle.color}</td>
                            <td>{vehicle.no_of_owners}</td>
                            <td>{vehicle.year_of_manufacture}</td>
                            <td>{vehicle.transmission}</td>
                            <td>{vehicle.insurance_valid_upto}</td>
                            <td>{vehicle.external_fitments}</td>
                            <td>{vehicle.kms}</td>
                            <td>{vehicle.photo}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
            : null}
    </>)

}
export default ListVehicles;