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
    <Section
      // className="flex flex-col mb-80 items-center bg-linear-to-b from-gradient-end from-0% to-test3 to-70%"
      className="pt-12 flex flex-col mb-80 items-center bg-linear-to-b from-gradient-end from-0% to-test3 to-70%"
      // className="mb-80 bg-linear-to-b from-gradient-end from-0% to-test3 to-70%"
      ref={ref}
    >
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

        <div className="py-12">
          <Image src={PartnersIllustration} alt="parceiros" />
        </div>
      </div>
      <div className="">
        <Carousel />
      </div>
    </Section>
  )
})
