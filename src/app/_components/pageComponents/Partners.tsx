import { Open_Sans } from "next/font/google"
import Image from "next/image"
import { forwardRef } from "react"
import DuPOVOIllustration from "../../../../public/assets/images/DuPOVO.png"
import EdAdventistaIllustration from "../../../../public/assets/images/Educação Adventista.png"
import InsanosIllustration from "../../../../public/assets/images/Insanos.png"
import SUpermercadoIllustration from "../../../../public/assets/images/SUpermercado.png"
import { Carousel } from "../Carousel"
import { Section } from "../Section"

const openSans = Open_Sans({
  weight: ["800", "600"],
  style: ["normal"],
  subsets: ["latin"],
})

export const Partners = forwardRef<HTMLElement>((_, ref) => {
  return (
    <Section
      ref={ref}
      className="
        pt-12
        flex
        flex-col
      "
    >
      <div className="flex flex-col items-center">
        <div className="text-center">
          <h1
            className={`${openSans.className} max-xl:px-2 text-5xl 2xl:text-6xl font-extrabold mb-2 `}
          >
            Credibilidade que fala por si.
          </h1>

          <label className={`${openSans.className} 2xl:text-xl font-semibold`}>
            Conheça algumas das marcas que confiam na{" "}
            <span className="text-[#E74E13]">Storm Studio.</span>
          </label>
        </div>
        {/* Images - good lock */}
        <div className="p-12 grid max-lg:grid max-lg:grid-cols-1 grid-cols-2 grid-rows-2 gap-9">
          <Image src={InsanosIllustration} alt="Insanos" />
          <Image src={EdAdventistaIllustration} alt="Educação Adventista" />
          <Image src={DuPOVOIllustration} alt="DuPovo" />
          <Image src={SUpermercadoIllustration} alt="Preço Bom" />
        </div>
      </div>

      <div className="py-6">
        <Carousel />
      </div>
    </Section>
  )
})
