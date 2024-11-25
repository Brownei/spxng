import { Link } from "@tanstack/react-router"
import { ArrowRight } from "lucide-react"

const GridHeader = () => {
  return (
    <main className="px-5 lg:px-10">
      <div className="flex flex-col gap-[20px] lg:gap-[40px] lg:h-[500px] lg:flex-row w-full">
        <Link to="/about" className="lg:w-[65%] w-full lg:h-full h-[485px] border relative group">
          <div className="absolute z-0 top-0 left-0 bottom-0 right-0">
            <img src="https://spglobal.scene7.com/is/image/spglobalcom/Corp_1022_TokenizedPrivateCredit_bannner?$responsive$" alt="credit-market" className=" w-full object-cover h-full" />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60" />
          </div>
          <div className="absolute top-4 left-4 pr-[4rem] flex flex-col gap-3">
            <span className=" z-20 text-white font-Akkurat font-bold text-[0.687rem] leading-[0.894rem]">CREDIT MARKET</span>
            <h1 className="font-Akkurat z-20 leading-[2.587rem] text-[2.25rem] font-bold text-white group-hover:underline">Tokenized Private Credit: A New Digital Frontier for Real World Assets</h1>
            <p className="text-white font-Akkurat font-normal text-base leading-[1.4rem]">Private credit is evolving. Lenders are providing money to an ever-widening base of borrowers, as well as offering a growing range of funds and investment vehicles. At the same time, a digital revolution is brewing that could open access to private credit for both investors and borrowers in a whole new way.</p>
          </div>

          <div className="absolute bottom-4 left-4">
            <ArrowRight className="size-[20px]" color="#fff" />
          </div>
        </Link>
        <div className="lg:w-[35%] w-full grid gap-[30px]">
          <div className="relative h-[220px] lg:h-full">
            <Link to='/about' className="group">
              <div className="absolute z-0 top-0 left-0 bottom-0 right-0">
                <img src="https://spglobal.scene7.com/is/image/spglobalcom/Corp_0618_PrivateMarketsBanner?$responsive$" alt="capital-market" className="h-full w-full object-cover" />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60" />
              </div>
              <div className="absolute z-10 top-3 left-3 text-white">
                <span>CAPITAL MARKET</span>
                <h2 className="group-hover:underline">Private Markets</h2>
                <p>Private markets are not growing, they are envolving, Fundamentsal shifts in business....</p>
              </div>

              <div className="absolute bottom-4 left-4">
                <ArrowRight className="size-[20px]" color="#fff" />
              </div>
            </Link>
          </div>
          <div className="relative h-[220px] lg:h-full">
            <Link to='/about' className='group'>
              <div className="absolute z-0 top-0 left-0 bottom-0 right-0">
                <img src="https://spglobal.scene7.com/is/image/spglobalcom/Corp_0712_DigitalAssets?$responsive$" alt="capital-market" className="h-full w-full object-cover" />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60" />
              </div>
              <div className="absolute z-10 top-3 left-3 text-white">
                <span>CAPITAL MARKET</span>
                <h2 className="group-hover:underline">Private Markets</h2>
                <p>Private markets are not growing, they are envolving, Fundamentsal shifts in business....</p>
              </div>

              <div className="absolute bottom-4 left-4">
                <ArrowRight className="size-[20px]" color="#fff" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default GridHeader
