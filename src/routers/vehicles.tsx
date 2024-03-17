import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { IFormData } from "../components/vehicleForm"
import ListVehicles, { vehicleFormProps } from "../components/listVehicles";
import { useContext } from "react";
import { ThemeContext } from "../App";
export interface IFilterData {
    location: string;
    model: string;
    no_of_owners: string;
    transmission: string;
}

const Vehicles = () => {
    const vehicles = useSelector((state: vehicleFormProps) => state.vehicles);
  
    const [searchFilter, setSearchFilter] = useState<IFilterData>({
        location: '', model: '',
        no_of_owners: '',
        transmission: ''
    });
    const [filteredVehicles, setFilteredVehicles] = useState<IFormData[]>(vehicles);

    const getUniqueValues = (array: IFormData[], property: keyof IFormData) => {
        return array.filter((value, index, self) => {
            return self.map(item => item[property]).indexOf(value[property]) === index;
        });
    };

    const handleInput = (e: any) => {
        setSearchFilter({ ...searchFilter, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        let results = filteredVehicles;
        if (searchFilter?.location) {
            results = filteredVehicles.filter((filteredVehicle) =>
                filteredVehicle?.location.toLowerCase().includes(searchFilter?.location.toLowerCase())
            );
        }
        if (searchFilter.model) {
            results = filteredVehicles?.filter((filteredVehicle) => filteredVehicle?.model &&
                filteredVehicle?.model.toLowerCase().includes(searchFilter?.model.toLowerCase())
            );
        }
        if (searchFilter.no_of_owners) {
            results = filteredVehicles.filter((filteredVehicle) =>
                filteredVehicle?.no_of_owners.toLowerCase().includes(searchFilter?.no_of_owners.toLowerCase())
            );
        }
        if (searchFilter.transmission) {
            results = filteredVehicles.filter((filteredVehicle) =>
                filteredVehicle?.transmission.toLowerCase().includes(searchFilter?.transmission.toLowerCase())
            );
        }

        setFilteredVehicles(results)
    }, [searchFilter])

    return (
        <>
            <table>
                <tr>
                    <td> Location</td>
                    <td>
                        <div className="main">
                            <input list="data" name="location" onChange={(e) => handleInput(e)} placeholder="Search" />
                            <datalist id="data">
                                {getUniqueValues(vehicles, 'location').map((vehicle) => <option>{vehicle.location}</option>)}
                            </datalist>
                        </div>
                    </td>
                    <td>Brand</td>
                    <td>
                        {getUniqueValues(vehicles, 'model').map((vehicle, index) => (
                            <li key={index} style={{ listStyle: "none" }}>
                                <input
                                    type="checkbox"
                                    id={`custom-checkbox-${index}`}
                                    name="model"
                                    value={vehicle.model}
                                    checked={searchFilter.model === vehicle.model}
                                    onChange={(e) => handleInput(e)}
                                />
                                {vehicle.model}
                            </li>
                        ))}
                    </td>
                    <td>Owners</td>
                    <td>
                        {getUniqueValues(vehicles, 'no_of_owners').map((vehicle, index) => (
                            <li key={index} style={{ listStyle: "none" }}>
                                <input
                                    type="radio"
                                    id={`custom-checkbox-${index}`}
                                    name="no_of_owners"
                                    value={vehicle.no_of_owners}
                                    onChange={(e) => handleInput(e)}
                                />
                                {vehicle.no_of_owners}
                            </li>
                        ))}
                    </td>
                    <td>Transmission</td>
                    <td>
                        {getUniqueValues(vehicles, 'transmission').map((vehicle, index) => (
                            <li key={index} style={{ listStyle: "none" }}>
                                <input
                                    type="radio"
                                    id={`custom-checkbox-${index}`}
                                    name="transmission"
                                    value={vehicle.transmission}
                                    onChange={(e) => handleInput(e)}
                                />
                                {vehicle.transmission}
                            </li>
                        ))}
                    </td>
                </tr>
            </table>
            <ListVehicles vehicles={filteredVehicles}></ListVehicles>
        </>
    );
}

export default Vehicles