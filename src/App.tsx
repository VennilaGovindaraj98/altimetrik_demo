import React, { createContext } from 'react';
import Header from './components/header';
import ListVehicleModel from './components/listVehicleModel';
import { Provider } from 'react-redux';
import { store } from './store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Vehicles from './routers/vehicles';
import vehiclesData from './components/vehicleForm/vehiclesData';
interface Theme {
  primaryColor: string;
  secondaryColor: string;
}
export const ThemeContext = createContext<Theme | null>(null)
const theme = {
  primaryColor: 'blue',
  secondaryColor: '#E8E8E8'
};
function App() {
  return (
    <ThemeContext.Provider value={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header></Header>
          </div>
          <Routes>
            <Route path='/' element={<ListVehicleModel></ListVehicleModel>}></Route>
            <Route path='/vehicles' element={<Vehicles></Vehicles>}></Route>
          </Routes>
        </BrowserRouter>

      </Provider>
    </ThemeContext.Provider>
  );
}

export default App;
