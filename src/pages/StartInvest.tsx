import { useState, useRef } from "react";
import Modal from "../components/Modal";
import useModal from "../hooks/useModal";

interface modalContentProps {
  type: string,
  index: number,
}

function StartInvest() {
  const ref = useRef<HTMLDivElement>(null);
  
  const data = [
    {id: 1, nomeCorretora: "BTG PACTUAL", active: "inativo"},
    // {id: 2, nomeCorretora: "EQI Investimentos", active: "inativo"},
    // {id: 3, nomeCorretora: "XP Investimentos", active: "inativo"}
  ]
  const [operating, setOperating] = useState(data);
  const [modalContent, setModalContent] = useState<modalContentProps>(); 
  const {showModal, toggleModal} = useModal();

  const toggleOperation = (index:number, type:string, action?: boolean) => {
    type ? setModalContent({type, index}) : null
    toggleModal()
    
    if (action === true) {
      data[index].active = type  
      setOperating([...data])
    }  
  }

  const moveToSection = () => {
    ref.current?.scrollIntoView({behavior:"smooth"});
  }

  const modal = () => {
    return modalContent ?
      modalContent?.type === "confirmar" ?
      <Modal 
          title= {<p>Tem certeza que deseja <span className="text-green-600">confirmar</span> esse investimento?</p>} 
          text= {
            <>
              <p className="font-bold text-lg md:text-2xl my-1">DISCLAIMER!</p>
              <p>A rentabilidade obtida no passado não representa garantia de rentabilidade futura.</p>
              <p>
                Os investidores devem estar preparados para aceitar os riscos inerentes aos diversos mercados em que os robôs atuam e, 
                consequentemente, possíveis variações no patrimônio investido.
              </p>
              <p>
                Os produtos e serviços aqui mencionados podem não estar disponíveis em todas as juridições ou para determinadas categorias de investidores. Adicionalmente, a legislação e regulamentação de proteção a investidores de determinadas juridições/países, pode não se aplicar a produtos e serviços prestados em outras juridições/países, sujeitos á legislação e regulamentação respectivamente aplicáveis, além de previsões contratuais específicas.    
              </p>
            </>
          }
          action={() => toggleOperation(modalContent.index, "ativo", true)} 
          closeModal={toggleModal} 
          styles="md:w-[85%] md:mx-[8%]"
        />
      :
        <Modal 
          title= {<p>Tem certeza que deseja <span className="text-red-600">cancelar</span> esse investimento?</p>} 
          text= {
            <>
              <p className="font-bold text-lg md:text-2xl my-1">DISCLAIMER!</p>
              <p>
                Cancelando essa operação você estará de acordo com que os robôs não trabalhem de forma correta, levando assim a um possível prejuizo.
              </p>
              <p>A interrupção dos robôs resultará em lucro ou perda de forma aleatória, logo, sem fundamento técnico.</p>
              <p>
                Os investidores devem estar preparados para aceitarem os riscos inerentes aos diversos mercados em que os robôs atuam e, conquentemente, possíveis variações no patrimônio investido.
              </p>
            </>
          }
          action={() => toggleOperation(modalContent.index, "inativo", true)} 
          closeModal={toggleModal} 
          styles="xl:w-1/2 w-[80%] md:h-1/2 xl:h-1/2 xl:mx-[24%] mx-[9%]"
        />
    : null
  }
  
  return(
    <div className="w-full max-h-fit top-[18%]">
      <div className="relative">
      {window.screen.width >= 760 ?
          <img 
            src="/startinvest.jpeg" 
            alt="Two robots"
            className="w-full h-full min-h-[600px] opacity-70" 
          />
          :
          <img 
            src="/startinvest-mobile.jpeg" 
            alt="Two robots"
            className="w-full h-full min-h-[600px] opacity-70" 
          />
        }
        

        <div className=" xl:w-3/5 xl:h-3/4 w-4/5 md:h-3/4  h-5/6 absolute md:left-16 left-8 top-[8%] text-center text-white px-4 lg:px-20 py-6 bg-gradient-to-t from-cyan-700/90 to-blue-700/90 rounded-lg">
            <h1 className="font-extrabold text-lg lg:text-2xl lg:mb-7 my-4">
              Como Funciona?
            </h1>
            <div className="md:h-3/5 h-[70%] text-sm md:text-base lg:text-lg sm:text-justify flex flex-col justify-between">
              <p>
                Somos uma empresa de investimentos automatizados que busca maximizar a sua rentabilidade com risco controlado.
                Atuamos na bolsa de valores brasileira, mais especificamente no mercado futuro com mini índice.
              </p>
              <p>
                Usamos robôs que são gerenciados por uma inteligência artificial inteiramente criada por nós.
              </p>
              <p>Para começar, basta selecionar a sua corretora na abaixo e clicar no botão "investir".</p>
              <p>Ou se preferir clique no botão abaixo:</p>
            </div>
            <button 
              className="w-1/2 bg-green-600 text-zinc-100 font-bold lg:text-2xl text-xl mt-8 px-3 py-2 rounded-md" 
              onClick={moveToSection}
            >
                INVESTIR
            </button>
        </div>
      </div>
      <div className="w-full min-h-[600px] ">
       <h2 ref={ref} id="investir" className="my-8 text-center text-3xl font-bold text-blue-900">INVESTIR</h2>
        <div className="
          w-4/5  max-md:ml-10 flex flex-col max-md:items-center text-white pl-4 bg-gradient-to-r from-sky-700 to-sky-900 shadow-blue-950 shadow-lg"
        >
          <h3 className="text-xl max-md:text-2xl mt-2">Escolha sua corretora:</h3>
        
          {operating.map((corretora, index) => {
              return(
                <div key={corretora.id} className="w-3/4 lg:h-32 h-72 my-8 flex flex-col justify-between">
                  <div className="mt-2 flex max-md:flex-col max-md:items-center justify-between">
                    <div className="md:w-[300px]">
                      <h4 className="text-3xl font-bold">{corretora.nomeCorretora}</h4>
                    </div>
                    <div className="flex flex-col justify-between my-7"> 
                      <h5 className="mb-3 text-2xl font-semibold">Mini Índice</h5>
                      {
                        corretora.active === "ativo" ?
                        <button 
                          className="my-3 bg-red-600 text-zinc-100 font-bold px-2 py-1 rounded-md"
                          onClick={() => toggleOperation(index, "cancelar")}
                        >
                            CANCELAR
                        </button>
                        :
                        <button 
                          className="my-3 bg-green-600 text-zinc-100 font-bold px-2 py-1 rounded-md"
                          onClick={() => toggleOperation(index, "confirmar")}
                        >
                            INVESTIR
                        </button>
                      }
                    </div>

                    <div className="text-2xl font-semibold text-center">
                        <h5>Operação</h5>
                      <p>{corretora.active === 'ativo' ? "ATIVA" : "INATIVA"}</p>
                    </div>
                  
                  </div>

                  <div className="w-full h-[2px] bg-gradient-to-r from-slate-50/80 to-sky-300/80 rounded-2xl"/>
                </div>
              )
          })} 
        </div>
      </div>

      {showModal && modal()}
    </div>
  )
}

export default StartInvest;