import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function Loading() {
  return(
    <div className="w-full h-screen bg-slate-100 flex justify-center items-center">
      <div className="w-24 h-24 absolute block overflow-x-clip animate-spin">
        <AiOutlineLoading3Quarters style={{width:"6rem", height: "6rem", color: "rgb(5 150 105/60)"}} />
      </div>
  </div>
  )
}

export default Loading;