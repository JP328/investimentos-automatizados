function Home() {
  return(
    <div className="w-full max-xl:h-4/5">
      <div className="relative bg-blue-800 h-full">
        {window.screen.width >= 760 ?
          <img 
          src="/investimentos-automatizados/homepage.jpeg" 
          alt="Robot-showing-candles"
          className="w-full max-xl:h-full" 
          />
          :
          <img 
          src="/investimentos-automatizados/homepage-mobile.jpeg" 
          alt="Robot-showing-candles"
          className="w-full max-xl:h-full" 
          />  
        }
        <div className=" w-3/5 md:w-2/5 lg:w-1/3 h-2/5 lg:h-1/3 absolute right-0 top-1/3 xl:top-1/2 md:px-2 flex items-center justify-center bg-gradient-to-t from-cyan-600/90 to-blue-700/90">
          <h1 className="w-5/6 font-extrabold text-2xl xl:text-4xl text-white">
            O FUTURO DO INVESTIMENTO INTELIGENTE ESTÁ AQUI!
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Home;