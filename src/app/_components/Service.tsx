import { Inter } from "next/font/google"
import React from "react"

interface ServiceProps {
  title: string
  icon?: any
  description: string
}

const inter = Inter({
  weight: ["700", "400"],
  style: ["normal"],
  subsets: ["latin"],
})

export const Service: React.FC<ServiceProps> = ({ title, description }) => {
  return (
    <div className="py-6 pl-4 pr-10 space-y-4 max-w-96 bg-amber-800">
      <div>
        <h6 className={`${inter.className} text-lg font-bold`}>{title}</h6>
      </div>

      <p className="">{description}</p>
    </div>
  )
}
