"use client"
import { Inter, Open_Sans } from "next/font/google"
import { Section } from "../Section"
import { forwardRef } from "react"
import { AnimatedResults } from "../AnimatedResults"

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

const projectsCreated = [20, 40, 60, 80, 100]
const clientsSatisfied = [10, 20, 30, 40, 50]
const convertedResults = [35, 45, 55, 65, 75]

export const AboutUs = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <Section
      ref={ref}
      className="flex justify-center flex-col text-center gap-12  pt-32"
    >
      <h1
        className={`${openSans.className}  text-5xl 2xl:text-7xl font-extrabold`}
      >
        <span className="underline underline-offset-[14px] 2xl:underline-offset-[20px] decoration-storm-orange">
          Impulsione
        </span>{" "}
        sua marca
      </h1>

      <p
        className={`${inter.className} px-20 xl:px-80 2xl:px-40 text-left text-2xl 2xl:text-3xl font-normal`}
      >
        Unimos criatividade e tecnologia para criar estratégias inovadoras em
        marketing digital, design, audiovisual e tecnologia. Cada projeto é um
        desafio que encaramos com ousadia, sempre buscando o equilíbrio perfeito
        entre performance e originalidade. Criamos experiências que envolvem,
        emocionam e convertem, porque sabemos que, no digital, ser apenas mais
        um não é uma opção. Se você quer levar sua marca para o próximo nível
        com campanhas estratégicas, design de alto impacto e soluções
        tecnológicas de ponta, fale conosco. Juntos, podemos fazer chover
        inovação no seu negócio.
      </p>

      <div className="flex justify-between px-56 2xl:px-34 gap-6 max-xl:flex-col max-xl:gap-10">
        <AnimatedResults
          values={projectsCreated}
          prefix="+"
          label="Projetos realizados"
        />

        <AnimatedResults
          values={clientsSatisfied}
          prefix="+"
          label="Clientes satisfeitos"
          delay
        />

        <AnimatedResults
          values={convertedResults}
          prefix="+"
          label="Resultados convertidos"
          suffix="%"
        />
      </div>
    </Section>
  )
})
