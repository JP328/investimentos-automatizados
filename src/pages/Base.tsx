import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function BasePage() {
  return(
    <div className="w-screen h-screen font-roboto overflow-x-hidden">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default BasePage;