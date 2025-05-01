import { Open_Sans } from "next/font/google"
import Image from "next/image"
import { forwardRef } from "react"
import PartnersIllustration from "../../../public/assets/svgs/partners.svg"
import { Carousel } from "./Carousel"
import { Section } from "./Section"

const openSans = Open_Sans({
  weight: ["800", "600"],
  style: ["normal"],
  subsets: ["latin"],
})

export const Partners = forwardRef<HTMLElement>((_, ref) => {
  return (
    <Section className="mb-80" ref={ref}>
      <div className="flex flex-col items-center">
        <div className="text-center">
          <h1
            className={`${openSans.className} text-5xl 2xl:text-6xl font-extrabold mb-2`}
          >
            Credibilidade que fala por si.
          </h1>

          <label className={`${openSans.className} 2xl:text-xl font-semibold`}>
            Conheça algumas das marcas que confiam na{" "}
            <span className="text-[#E74E13]">Storm Studio.</span>
          </label>
        </div>

        <div className="py-24">
          <Image src={PartnersIllustration} alt="parceiros" />
        </div>
      </div>
      <Carousel />
    </Section>
  )
})
