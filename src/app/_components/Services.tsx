import { Open_Sans } from "next/font/google"
import { Service } from "./Service"
import { SERVICES } from "../_utils/services"
import { Service as IService } from "../interfaces"
import { Section } from "./Section"

const openSans = Open_Sans({
  weight: ["800", "600"],
  style: ["normal"],
  subsets: ["latin"],
})

export const Services = () => {
  const renderItem = (item: IService) => {
    return (
      <Service
        key={item.title}
        title={item.title}
        description={item.description}
        icon={item.image}
      />
    )
  }
  return (
    <Section className="flex flex-col gap-12">
      <div className="text-center">
        <h1 className={`${openSans.className} text-5xl font-extrabold`}>
          Seu sucesso começa aqui
        </h1>
        <p className={`${openSans.className} text-2xl font-semibold`}>
          Da ideia à execução, somos a tempestade que move seu negócio.
        </p>
      </div>

      <div className="grid grid-cols-3 space-x-6 space-y-6 self-center">
        {SERVICES.map(renderItem)}
      </div>
    </Section>
  )
}
