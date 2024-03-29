import className from "classnames"
import { Link } from "react-router-dom";
import Modal from "./Modal";
import useModal from "../hooks/useModal";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxExit } from "react-icons/rx";
import { useState } from "react";

function Header() {

  const {showModal, toggleModal} = useModal();

  const notification = () => {
    toggleModal() 
  }

  const closeNotification = () => {
    toggleModal() 
    toggleMenu()
  }

  const modal = <Modal 
    styles="xl:w-2/5 lg:w-1/3 md:w-2/5 max-sm:w-2/3 xl:h-2/5 lg:h-1/3 md:h-1/3 max-sm:h-2/5 top-1/3 max-sm:text-lg" 
    title={<p>Serviço indisponivel</p>} 
    text={<p>Este serviço ainda não está no ar, aguarde novidades!</p>} 
    closeModal={closeNotification}
    modalType="Notification"
  />

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    window.screen.width < 768 ? setShowMenu((prevState) => !prevState) : null
  }

  const classes = (bol:boolean) => {
    const style = bol ?
        "absolute z-50 inset-0 overflow-hidden bg-slate-300 flex-col text-4xl"
      :
        "max-md:invisible w-full text-xs"

    return className("flex text-center items-center justify-evenly md:text-xl font-bold text-slate-800", style)
  }

  return(
    <div className="w-full md:h-1/6 h-[14%]  flex items-center bg-slate-200">
      <div 
        className={classes(showMenu)}
      >
        <div className="absolute z-50 top-8 right-6 md:hidden text-3xl" onClick={toggleMenu}>
          <RxExit/>
        </div>
        <div className="hover:text-cyan-600" onClick={toggleMenu}>
          <Link to={'/investimentos-automatizados/'}>Home</Link>
        </div>
        <div className="hover:text-cyan-600" onClick={toggleMenu}>
          <Link to={'/investimentos-automatizados/StartInvest'}>Comece Aqui</Link>
        </div>
        <div className="hover:text-cyan-600" onClick={() => notification()}>
          {/* <Link to={'/investimentos-automatizados/AboutUs'}>Quem Somos</Link> */}
          Quem somos
        </div>
        <div className="hover:text-cyan-600" onClick={() => notification()}>
          {/* <Link to={'/investimentos-automatizados/ClientArea'}>Área do Cliente</Link> */}
          Área do Cliente
        </div>
        {showModal && modal}
      </div>
      <div className="mr-5 md:hidden text-3xl" onClick={toggleMenu}>
        <GiHamburgerMenu />
      </div>
    </div>
  )
}

export default Header;