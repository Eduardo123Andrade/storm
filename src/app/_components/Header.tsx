import { Inter } from "next/font/google"
import StormIllustration from "../../../public/assets/svgs/storm.svg"
import Image from "next/image"

const inter = Inter({
  weight: ["500"],
  style: ["normal"],
  subsets: ["latin"],
})

export const Header = () => {
  return (
    <div className="flex justify-between  items-center">
      <div className="">
        <Image src={StormIllustration} alt="storm" />
      </div>
      <div className="flex gap-x-10 pt-2 pb-2 pl-5 pr-5">
        <label className={`${inter.className} `}>Sobre nós</label>
        <label className={inter.className}>Serviços Oferecidos</label>
        <label className={inter.className}>Cases</label>
        <label className={inter.className}>Clientes</label>
      </div>
    </div>
  )
}
