"use client"

import { Open_Sans } from "next/font/google"
import { RedirectButton } from "../RedirectButton"
import Image from "next/image"
import TVImage from "../../../../public/assets/gifs/tvs3.gif"
import { Section } from "../Section"
import { forwardRef } from "react"

const openSans = Open_Sans({
  weight: ["800", "700"],
  style: ["normal"],
  subsets: ["latin"],
})

export const Intro = forwardRef<HTMLElement>((_, ref) => {
  return (
    <Section
      ref={ref}
      className="flex flex-col justify-center px-32 max-mobile:px-16"
    >
      <div className="flex justify-between items-center max-mobile:flex-col-reverse">
        <div className="flex flex-col gap-5 2xl:gap-10">
          <div>
            <h1
              className={`${openSans.className} leading-16 text-5xl 2xl:text-6xl font-extrabold`}
            >
              Mais do que uma agência, somos uma{" "}
              <span className="text-storm-orange">
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
            <RedirectButton label="Transforme seu negócio" />
          </div>
        </div>

        <div
          className="
            flex
            max-mobile:justify-evenly
          "
        >
          <Image
            unoptimized
            // className="object-fill"
            alt="image background"
            src={TVImage}
            // fill
            // sizes="(max-width: 768px) 0vw, 50vw"
            quality={100}
          />
        </div>
      </div>
    </Section>
  )
})
