"use client"
import { Inter } from "next/font/google"

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
      className="py-2.5 px-2 rounded-2xl bg-orange-500 hover:cursor-pointer focus:border-0"
      onClick={_onPress}
    >
      <label className={`${inter.className} font-lg hover:cursor-pointer`}>
        {label}
      </label>
    </button>
  )
}
