import './App.css';
import { createHashRouter, RouterProvider, Route, Routes } from 'react-router-dom';

import Navegation from './Patrones/Home';
import UserName from './Patrones/Singleton/UserName';
import UserAge from './Patrones/Singleton/UserAge';
import Archivo from './Patrones/Decorator/Archivo';
import ArchivoSin from './Patrones/Decorator/ArchivoSin';

import Home from './routes/home';
import Contact from './routes/contact';
import About from './routes/about';


const router = createHashRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/about',
    element: <About />
  },
])

function App() {


  return (
    <>

      <div className="App">
        <header className="App-header">
          <RouterProvider router={router}>
            <Navegation />
          </RouterProvider>
          ----------------
          <br />
          Futer:
          <UserName />
          <UserAge />
        </header>
      </div>
      {
        /*
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
        */
      }
    </>
  );
}

export default App;
