import { Inter, Open_Sans } from "next/font/google"
import { Section } from "./Section"
import Image from "next/image"
import PartnersIllustration from "../../../public/assets/svgs/partners.svg"
import { Carousel } from "./Carousel"

const inter = Inter({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
})

const openSans = Open_Sans({
  weight: ["800", "600"],
  style: ["normal"],
  subsets: ["latin"],
})

export const Partners = () => {
  return (
    <Section className="mb-80">
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
}
