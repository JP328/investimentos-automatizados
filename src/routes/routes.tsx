import {BrowserRouter, Routes, Route} from 'react-router-dom';
import BasePage from '../pages/Base';
import Home from '../pages/Home';
import StartInvest from '../pages/StartInvest';

function MainRoutes() {  
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/investimentos-automatizados/' element={<BasePage/>} >
          <Route index element={<Home/>} />
          <Route path='/investimentos-automatizados/StartInvest' element={<StartInvest/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes;

