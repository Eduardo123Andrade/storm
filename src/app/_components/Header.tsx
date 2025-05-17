import { Inter } from "next/font/google"
import StormIllustration from "../../../public/assets/svgs/storm.svg"
import Image from "next/image"

const inter = Inter({
  weight: ["500"],
  style: ["normal"],
  subsets: ["latin"],
})

interface HeaderProps {
  onPressAboutUs: () => void
  onPressServices: () => void
  onPressITSolutions: () => void
  onPressClients: () => void
  onPressHome: () => void
}

interface ItemProps {
  label: string
  onClick?: () => void
}
const Item: React.FC<ItemProps> = ({ label, onClick }) => (
  <label
    className={`${inter.className} rounded-md hover:bg-storm-orange cursor-pointer py-1 px-2 select-none`}
    onClick={onClick}
  >
    {label}
  </label>
)

export const Header: React.FC<HeaderProps> = ({
  onPressAboutUs,
  onPressITSolutions,
  onPressClients,
  onPressServices,
  onPressHome,
}) => {
  const _onPressHome = () => {
    if (onPressHome) onPressHome()
  }

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

  const _onPressITSolutions = () => {
    if (onPressITSolutions) {
      onPressITSolutions()
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
      px-16
      flex
      justify-between
      items-center
      sticky
      top-0
      bg-gradient-start
      pb-2
      pt-8
      z-1
    "
    >
      <div className="cursor-pointer" onClick={_onPressHome}>
        <Image src={StormIllustration} alt="storm" />
      </div>
      <div className="gap-x-8 px-5 2xl:text-xl max-mobile:hidden">
        <Item label="Sobre nós" onClick={_onPressAboutUs} />
        <Item label="Serviços Oferecidos" onClick={_onPressServices} />
        <Item label="Soluções em TI" onClick={_onPressITSolutions} />
        <Item label="Clientes" onClick={_onPressClients} />
      </div>
    </nav>
  )
}
