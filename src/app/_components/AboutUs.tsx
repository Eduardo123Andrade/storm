"use client"

import { Open_Sans } from "next/font/google"
import { Button } from "./Button"

const openSans = Open_Sans({
  weight: ["800", "700"],
  style: ["normal"],
  subsets: ["latin"],
})

// console.log(openSans.style)

export const AboutUs = () => {
  const onClick = () => {
    console.log("here")
  }

  return (
    <section className="overflow-hidden">
      <article>
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
      </article>
    </section>
  )
}
