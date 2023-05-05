import className from 'classnames';
import { ReactElement } from 'react';

export interface modalProps {
  title: ReactElement,
  text: ReactElement, 
  closeModal: () => void,
  styles:string,
  action?: () => void,
  modalType?: string
}

function Modal({title, text, action, closeModal, styles, modalType}: modalProps) {
  const type = modalType === undefined ? "standard" : modalType 

  const classes = className(
    "z-[100] xl:w-3/5 w-[90%] md:h-4/5 max-sm:h-2/3 top-[8%] mx-[5%] md:mx-[8%] xl:mx-[20%] md:px-8 absolute p-4 flex flex-col justify-between items-center bg-slate-100 rounded-xl shadow-lg shadow-black/50 font-medium text-justify xl:text-lg md:text-base text-xs ",
    styles)

  const buttons = (type:string) => {
    return type === "standard" && action ?
      <div className='md:px-8 px-2 mt-3 w-full flex justify-between'>
          <button className='w-24 bg-green-600 text-zinc-100 text-xl font-bold px-2 py-1 rounded-md' onClick={() => action()}>Sim</button>
          <button className='w-24 bg-red-600 text-zinc-100 text-xl font-bold px-2 py-1 rounded-md' onClick={() => closeModal()}>Não</button>
      </div>
    : 
      <div className='md:px-8 px-2 mt-3 w-full flex justify-center'>
      <button className='w-24 bg-green-600 text-zinc-100 text-xl font-bold px-2 py-1 rounded-md' onClick={() => closeModal()}>
        OK
      </button>
      </div>
  }

  return(
    <> 
      <div onClick={() => closeModal()} className="absolute z-[99] w-screen h-screen inset-0 bg-slate-500/50 flex items-center justify-center">
      </div>

      <div className={classes}>
        <div className='flex flex-col items-center'>
          <h1 className='md:text-2xl sm:text-base text-lg text-center'>{title}</h1>
        </div>
        {text}
        {buttons(type)}     
      </div>
    </>
  )
}

export default Modal;