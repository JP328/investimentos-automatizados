import {BrowserRouter, Routes, Route} from 'react-router-dom';
import BasePage from '../pages/Base';
import Home from '../pages/Home';
import StartInvest from '../pages/StartInvest';

function MainRoutes() {  
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/Startup-De-Investimento/' element={<BasePage/>} >
          <Route index element={<Home/>} />
          <Route path='/Startup-De-Investimento/StartInvest' element={<StartInvest/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes;

