import className from 'classnames';
import { ReactElement } from 'react';

export interface modalProps {
  title: ReactElement,
  text: ReactElement, 
  action: () => void,
  closeModal: () => void,
  styles:string
}

function Modal({title, text, action, closeModal, styles}: modalProps) {
  const classes = className(
    "z-[100] xl:w-3/5 w-[90%] xl:h-4/5 max-sm:h-1/2 h-3/5 top-[10%] mx-[5%] md:mx-[8%] xl:mx-[20%] md:px-8 absolute p-4 flex flex-col justify-between items-center bg-slate-100 rounded-xl shadow-lg shadow-black/50  font-medium text-justify xl:text-lg md:text-base text-xs ",
    styles)

  return(
    <> 
      <div onClick={() => closeModal()} className="absolute z-[99] w-screen h-screen inset-0 bg-slate-500/50 flex items-center justify-center">
      </div>

      <div className={classes}>
        <div className='flex flex-col items-center'>
          <h1 className='md:text-2xl text-base text-center'>{title}</h1>
        </div>
        {text}
        <div className='md:px-8 px-2 mt-3 w-full flex justify-between'>
          <button className='w-24 bg-green-600 text-zinc-100 text-xl font-bold px-2 py-1 rounded-md' onClick={() => action()}>Sim</button>
          <button className='w-24 bg-red-600 text-zinc-100 text-xl font-bold px-2 py-1 rounded-md' onClick={() => closeModal()}>Não</button>
        </div>
      </div>
    </>
  )
}

export default Modal;