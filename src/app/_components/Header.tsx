import { Inter } from "next/font/google"
import StormIllustration from "../../../public/assets/svgs/storm.svg"
import Image from "next/image"
import { RefAttributes, useMemo } from "react"

const inter = Inter({
  weight: ["500"],
  style: ["normal"],
  subsets: ["latin"],
})

interface HeaderProps {
  refs: (() => void)[]
}

interface ItemProps {
  label: string
  onClick?: () => void
}
const Item: React.FC<ItemProps> = ({ label, onClick }) => (
  <label
    className={`${inter.className} rounded-md hover:bg-[#FF4E17] cursor-pointer py-1 px-2 select-none`}
    onClick={onClick}
  >
    {label}
  </label>
)

export const Header: React.FC<HeaderProps> = ({ refs }) => {
  const [ref1, ref2, ref3] = refs

  const onPressAboutUs = () => {
    if (ref1) {
      ref1()
    }
  }

  const onPressServices = () => {
    if (ref2) {
      ref2()
    }
  }

  const onPressCases = () => {}

  const onPressClients = () => {
    if (ref3) {
      ref3()
    }
  }

  return (
    <nav
      className="
      px-32
      flex
      justify-between
      items-center
      sticky
      top-0
      backdrop-brightness-0
      bg-test1
      z-2
    "
    >
      <div className="py-4">
        <Image src={StormIllustration} alt="storm" />
      </div>
      <div className="flex gap-x-8 py-2 px-5 2xl:text-xl">
        <Item label="Sobre nós" onClick={onPressAboutUs} />
        <Item label="Serviços Oferecidos" onClick={onPressServices} />
        <Item label="Cases" onClick={onPressCases} />
        <Item label="Clientes" onClick={onPressClients} />
      </div>
    </nav>
  )
}
