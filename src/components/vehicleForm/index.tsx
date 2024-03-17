import { useEffect, useState } from 'react';
import './index.css';
import { addVehicle } from '../../slices/vehicleSlice';
import { useDispatch } from 'react-redux';
// Define the prop types for the component
interface vehicleFormProps {
    vehicleModel?: string;
}

export interface IFormData {
    model?: string ;
    color?: string;
    year_of_manufacture?: string;
    insurance_valid_upto?: string;
    kms?: string;
    location: string;
    no_of_owners: string;
    transmission: string;
    external_fitments?: string;
    photo?: string;
}

// Define the functional component
const VehicleForm: React.FC<vehicleFormProps> = ({ vehicleModel }) => {
    const initialFormValues = {
        model: vehicleModel, color: '', year_of_manufacture: '',
        insurance_valid_upto: '', kms: '', location: '', no_of_owners: '', transmission: '', external_fitments: '', photo: ''
    }

    const [formData, setFormData] = useState<IFormData>(initialFormValues)

    const dispatch = useDispatch()

    const handleInput = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    useEffect(() => {

        vehicleModel && setFormData({ ...formData, model: vehicleModel });

    }, [vehicleModel])

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(addVehicle(formData));
        alert("Done");
        setFormData(initialFormValues);

    }

    return (
        vehicleModel ? <div className="form-container">
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label>  Model </label>
                            </td>
                            <td>
                                <input type="text" name="model" value={vehicleModel} disabled={true} />
                            </td>
                            <td><label>
                                Location
                            </label>
                            </td>
                            <td>
                                <input type="text" name="location" value={formData?.location} onChange={handleInput} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    Color
                                </label>
                            </td>
                            <td>
                                <input type="text" name="color" value={formData?.color} onChange={handleInput} />
                            </td>
                            <td>
                                <label>
                                    No of Owners
                                </label>

                            </td>
                            <td>
                                <input type="text" name="no_of_owners" value={formData?.no_of_owners} onChange={handleInput} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    Year of manufactures
                                </label>

                            </td>
                            <td>
                                <input type="text" name="year_of_manufacture" value={formData?.year_of_manufacture} onChange={handleInput} />
                            </td>
                            <td>
                                <label>
                                    Transmission
                                </label>

                            </td>
                            <td>
                                <input type="text" name="transmission" value={formData?.transmission} onChange={handleInput} />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label>
                                    Insurance Valid upto
                                </label>

                            </td>
                            <td>
                                <input type="text" name="insurance_valid_upto" value={formData?.insurance_valid_upto} onChange={handleInput} />
                            </td>
                            <td>
                                <label>
                                    External Fitments
                                </label>

                            </td>
                            <td>
                                <input type="text" name="external_fitments" value={formData?.external_fitments} onChange={handleInput} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    Kms
                                </label>

                            </td>
                            <td>
                                <input type="text" name="kms" value={formData?.kms} onChange={handleInput} />
                            </td>
                            <td>
                                <label>
                                    Photo
                                </label>

                            </td>
                            <td>
                                <input type="file" name="photo" value={formData?.photo} onChange={handleInput} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="submit" name="submit" value="submit" className="submitBut" />

                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div> : null
    )
}

export default VehicleForm