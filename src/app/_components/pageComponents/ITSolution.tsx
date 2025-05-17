import { forwardRef } from "react"
import { SectionHeader } from "../HeaderSection"
import { Section } from "../Section"
import { Service } from "../Service"
import { Service as IService } from "../../interfaces"
import { IT_SOLUTIONS } from "@/app/_utils"

export const ITSolution = forwardRef<HTMLElement>((_, ref) => {
  const renderItem = (item: IService) => {
    return (
      <Service
        key={item.title}
        title={item.title}
        description={item.description}
        icon={item.image}
        className="bg-storm-light-blue"
      />
    )
  }

  return (
    <Section
      ref={ref}
      className="
        pt-12
        bg-linear-to-b 
        from-gradient-end 
        from-0%
        to-test3
        to-30%
      "
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
            max-xl:grid-cols-1
            self-center
            pt-12 
          "
        >
          {IT_SOLUTIONS.map(renderItem)}
        </div>
      </div>
    </Section>
  )
})
