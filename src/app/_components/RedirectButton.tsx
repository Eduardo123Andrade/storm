"use client"
import { Inter } from "next/font/google"
import ArrowLeft from "../../../public/assets/svgs/arrow.svg"
import Image from "next/image"
import { useEffect, useState } from "react"

interface ButtonProps {
  label: string
  rightIcon?: any
}

const inter = Inter({
  weight: ["600"],
  style: ["normal"],
  subsets: ["latin"],
})

const MOBILE_WIDTH = 512

// const PHONE_NUMBER = "558186487809"
const PHONE_NUMBER = "5581998194658"
const MESSAGE = "Olá. Tenho interesse em conhecer os serviços"

export const RedirectButton: React.FC<ButtonProps> = ({ label }) => {
  const [url, setUrl] = useState<string>()

  useEffect(() => {
    if (!url) {
      const { innerWidth } = window
      const URL =
        innerWidth <= MOBILE_WIDTH
          ? `https://wa.me/${PHONE_NUMBER}?text=${MESSAGE}`
          : `https://web.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${MESSAGE}`
      setUrl(URL)
    }
  }, [url])

  const _onPress = () => {
    window.open(url)
  }

  return (
    <button
      className="py-2.5 px-2 rounded-2xl bg-storm-orange hover:cursor-pointer focus:border-0 flex items-center gap-2"
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
