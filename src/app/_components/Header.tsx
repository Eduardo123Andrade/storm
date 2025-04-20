import { Inter } from "next/font/google"
import StormIllustration from "../../../public/assets/svgs/storm.svg"
import Image from "next/image"

const inter = Inter({
  weight: ["500"],
  style: ["normal"],
  subsets: ["latin"],
})

const Item: React.FC<{ label: string }> = ({ label }) => (
  <label
    className={`${inter.className} hover:bg-[#FF4E17] cursor-pointer px-2 `}
  >
    {label}
  </label>
)
export const Header = () => {
  return (
    <div className="flex justify-between  items-center">
      <div className="">
        <Image src={StormIllustration} alt="storm" />
      </div>
      <div className="flex gap-x-8 py-2 px-5 2xl:text-xl">
        <Item label="Sobre nós" />
        <Item label="Serviços Oferecidos" />
        <Item label="Cases" />
        <Item label="Clientes" />
      </div>
    </div>
  )
}
