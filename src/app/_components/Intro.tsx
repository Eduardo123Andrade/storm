"use client"

import { Open_Sans } from "next/font/google"
import { Button } from "./Button"
import Image from "next/image"
import TVImage from "../../../public/assets/images/tvs.png"
import { Section } from "./Section"

const openSans = Open_Sans({
  weight: ["800", "700"],
  style: ["normal"],
  subsets: ["latin"],
})

export const Intro = () => {
  const onClick = () => {
    console.log("here")
  }

  return (
    <Section className="overflow-hidden flex flex-col justify-end">
      <section className="flex justify-between items-center ">
        <div className="flex flex-col gap-5 2xl:gap-10">
          <div>
            <h1
              className={`${openSans.className} text-5xl 2xl:text-6xl font-extrabold`}
            >
              Mais do que uma agência,
              <br />
              somos uma{" "}
              <span className="text-[#FF4E17]">
                tempestade
                <br />
              </span>
              de ideias.
            </h1>
          </div>

          <p
            className={`${openSans.className} text-2xl 2xl:text-3xl font-bold`}
          >
            A Storm Studio une criatividade, estratégia e inovação
            <br />
            para transformar marcas e negócios.
          </p>

          <div>
            <Button label="Transforme seu negócio" onClick={onClick} />
          </div>
        </div>

        <div className="">
          <Image
            className="object-fill"
            alt="image background"
            src={TVImage}
            // fill
            sizes="(max-width: 768px) 0vw, 50vw"
            quality={100}
          />
        </div>
      </section>
    </Section>
  )
}
