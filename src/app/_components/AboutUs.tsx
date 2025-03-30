import { Inter, Open_Sans } from "next/font/google"
import { Results } from "./Results"

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

export const AboutUs = () => {
  return (
    <section className="flex justify-center flex-col text-center gap-12 px-48">
      <h1 className={`${openSans.className} text-5xl font-extrabold`}>
        <span className="underline underline-offset-[14px] decoration-amber-600">
          Impulsione
        </span>{" "}
        sua marca
      </h1>

      <p className={`${inter.className} text-2xl font-normal`}>
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

      <div className="grid grid-cols-3">
        <Results quantity="+100" label="Projetos realizados" />
        <Results quantity="+50" label="Clientes satisfeitos" />
        <Results quantity="+75%" label="Resultados convertidos" />
      </div>
    </section>
  )
}
