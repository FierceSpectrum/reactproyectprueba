import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Patrones/Home';
import UserName from './Patrones/Singleton/UserName';
import UserAge from './Patrones/Singleton/UserAge';
import Archivo from './Patrones/Decorator/Archivo';
import ArchivoSin from './Patrones/Decorator/ArchivoSin';



function App() {


  return (
    <>
      <div>hola</div>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Routes>
              <Route path="/" element={
                <>
                  <Home></Home>
                </>
              } />
              <Route path="/Singleton" element={
                <>
                  <UserName />
                  <UserAge />
                </>
              } />
              <Route path="/Decorator" element={
                <>
                  <Archivo />
                  <ArchivoSin />
                </>
              } />

            </Routes>
          </header>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
