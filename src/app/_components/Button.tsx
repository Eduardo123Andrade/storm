"use client"
import { Inter } from "next/font/google"
import ArrowLeft from "../../../public/assets/svgs/arrow.svg"
import Image from "next/image"

interface ButtonProps {
  label: string
  onClick: () => void
  rightIcon?: any
}

const inter = Inter({
  weight: ["600"],
  style: ["normal"],
  subsets: ["latin"],
})

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  const _onPress = () => {
    onClick()
  }

  return (
    <button
      className="py-2.5 px-2 rounded-2xl bg-[#FF4E17] hover:cursor-pointer focus:border-0 flex items-center gap-2"
      onClick={_onPress}
    >
      <label
        className={`${inter.className} text-lg 2xl:text-2xl hover:cursor-pointer`}
      >
        {label}
      </label>
      <Image src={ArrowLeft} alt="" width={16} height={16} />
    </button>
  )
}
