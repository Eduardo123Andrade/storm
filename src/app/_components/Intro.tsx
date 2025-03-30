"use client"

import { Open_Sans } from "next/font/google"
import { Button } from "./Button"
import Image from "next/image"
import TVImage from "../../../public/assets/wolf.jpg"

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
    <section className="overflow-hidden">
      <article className="grid grid-cols-1 lg:grid-cols-2 gap-4 relative">
        <div className="flex flex-col gap-5">
          <div>
            <h1 className={`${openSans.className} text-5xl font-extrabold`}>
              Mais do que uma agência, somos uma{" "}
              <span className="text-orange-400">
                tempestade
                <br />
              </span>
              de ideias.
            </h1>
          </div>

          <p className={`${openSans.className} text-2xl font-bold`}>
            A Storm Studio une criatividade, estratégia e inovação para
            transformar marcas e negócios.
          </p>

          <div>
            <Button label="Transforme seu negócio" onClick={onClick} />
          </div>
        </div>

        <div className="hidden md:block h-full relative">
          <Image
            className="object-contain"
            alt="image background"
            src={TVImage}
            fill
            sizes="(max-width: 768px) 0vw, 50vw"
            quality={100}
          />
        </div>
      </article>
    </section>
  )
}
