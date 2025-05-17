import { forwardRef } from "react"
import { SERVICES } from "../../_utils/services"
import { Service as IService } from "../../interfaces"
import { SectionHeader } from "../HeaderSection"
import { Section } from "../Section"
import { Service } from "../Service"

export const Services = forwardRef<HTMLElement>((_, ref) => {
  const renderItem = (item: IService) => {
    return (
      <Service
        key={item.title}
        title={item.title}
        description={item.description}
        icon={item.image}
        className="bg-storm-dark-blue"
      />
    )
  }
  return (
    <Section
      ref={ref}
      className="flex flex-col justify-end gap-12 bg-linear-to-b from-test1 from-50% to-gradient-end"
    >
      <div
        className="
        flex
        flex-col
      "
      >
        <SectionHeader
          title="Tecnologia com estratégia"
          subtitle="soluções que conectam inovação, agilidade e resultado."
        />

        <div
          className="
          grid
          grid-cols-3
          gap-12
          max-xl:hidden
          self-center
          pt-12
      "
        >
          {SERVICES.map(renderItem)}
        </div>

        <div
          className="
          flex
          gap-12
          pt-12
          px-12
          overflow-scroll
          min-xl:hidden
          no-scrollbar
      "
        >
          {SERVICES.map(renderItem)}
        </div>
      </div>
    </Section>
  )
})
