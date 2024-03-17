
import './index.css';
import { useContext } from 'react';

interface vehicleModelProps {
    data: any[];
    handleVehicleModel: (title: string) => void;
}
const VehicleModel: React.FC<vehicleModelProps> = ({ data, handleVehicleModel }) => {
    return (
        <div className="container">
            <div className="vehicle-container">
                {data && data.length > 0 ?
                    data.map((dataItem) => <div className='item' onClick={() => handleVehicleModel(dataItem.title)}>
                        <img src={dataItem.image} width={50} height={50}></img>
                        <p className="title">{dataItem.title}</p>
                    </div>)
                    : <div> The data is not available. </div>}
            </div>
        </div>
    )
}

export default VehicleModel;