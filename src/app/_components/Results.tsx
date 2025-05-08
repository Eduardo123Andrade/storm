import { Open_Sans } from "next/font/google"
import React from "react"

interface ResultsProps {
  quantity: string
  label: string
}

const openSans = Open_Sans({
  weight: ["800", "600"],
  style: ["normal"],
  subsets: ["latin"],
})

export const Results: React.FC<ResultsProps> = ({ quantity, label }) => {
  return (
    <div className="text-center">
      <h1
        className={`${openSans.className} text-8xl 2xl:text-9xl font-extrabold`}
      >
        {quantity}
      </h1>
      <p
        className={`${openSans.className} text-2xl 2xl:text-3xl font-semibold`}
      >
        {label}
      </p>
    </div>
  )
}
