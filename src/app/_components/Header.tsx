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
  onPressAboutUs: () => void
  onPressServices: () => void
  onPressCases: () => void
  onPressClients: () => void
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

export const Header: React.FC<HeaderProps> = ({
  onPressAboutUs,
  onPressCases,
  onPressClients,
  onPressServices,
}) => {
  const _onPressAboutUs = () => {
    if (onPressAboutUs) {
      onPressAboutUs()
    }
  }

  const _onPressServices = () => {
    if (onPressServices) {
      onPressServices()
    }
  }

  const _onPressCases = () => {
    if (onPressCases) {
      onPressCases()
    }
  }

  const _onPressClients = () => {
    if (onPressClients) {
      onPressClients()
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
        <Item label="Sobre nós" onClick={_onPressAboutUs} />
        <Item label="Serviços Oferecidos" onClick={_onPressServices} />
        <Item label="Cases" onClick={_onPressCases} />
        <Item label="Clientes" onClick={_onPressClients} />
      </div>
    </nav>
  )
}
