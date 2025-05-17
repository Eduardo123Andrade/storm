import { Service } from "../interfaces"
import CodeIllustration from "../../../public/assets/svgs/code.svg"
import UserIllustration from "../../../public/assets/svgs/users.svg"
import NetworkTreeIllustration from "../../../public/assets/svgs/network-tree.svg"

export const IT_SOLUTIONS: Service[] = [
  {
    title: "Consultoria em Processos Ágeis",
    description:
      "Mapeamos e otimizamos seus fluxos de trabalho para adoção de frameworks como Scrum, Kanban e SAFe, adaptando à realidade do seu negócio.",
    image: NetworkTreeIllustration,
  },
  {
    title: "Desenvolvimento Personalizado",
    description:
      "Criamos soluções digitais sob medida aplicativos, sistemas internos, plataformas web com foco em performance e usabilidade.",
    image: CodeIllustration,
  },
  {
    title: "Treinamentos e Capacitações",
    description:
      "Oferecemos treinamentos personalizados para equipes, líderes e squads ágeis, com foco em resultados e engajamento.",
    image: UserIllustration,
  },
]
