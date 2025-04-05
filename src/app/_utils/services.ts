import { Service } from "../interfaces"
import MovieIllustration from "../../../public/assets/svgs/movie.svg"
import LikeIllustration from "../../../public/assets/svgs/like.svg"
import SmartCadIllustration from "../../../public/assets/svgs/smartcad.svg"
import ColorPalletIllustration from "../../../public/assets/svgs/color-palette.svg"
import LaptopIllustration from "../../../public/assets/svgs/laptop.svg"

export const SERVICES: Service[] = [
  {
    title: "Produção de Vídeos",
    description:
      "Criamos vídeos impactantes que contam a história da sua marca de forma envolvente e estratégica. Do roteiro à edição, produzimos conteúdos que captam atenção e geram conexão com seu público.",
    image: MovieIllustration,
  },
  {
    title: "Gerenciamento de Redes",
    description:
      "Transformamos suas redes sociais em um canal poderoso de engajamento e conversão. Criamos conteúdo estratégico, gerenciamos interações e otimizamos sua presença digital para potencializar resultados.",
    image: LikeIllustration,
  },
  {
    title: "Smartcad",
    description:
      "Facilite o acesso ao seu conteúdo com uma árvore de links profissional e personalizada. Direcione seu público para seus canais principais e aumente sua conversão com praticidade e organização.",
    image: SmartCadIllustration,
  },
  {
    title: "Tráfego Pago",
    description:
      "Maximize sua visibilidade e alcance o público certo com campanhas de tráfego pago. Criamos e otimizamos anúncios estratégicos para garantir maior engajamento, cliques e conversões.",
    image: MovieIllustration,
  },
  {
    title: "Identidade Visual",
    description:
      "Damos vida à essência da sua marca com um branding forte e autêntico. Criamos identidades visuais que comunicam seus valores e diferenciam seu negócio no mercado.",
    image: ColorPalletIllustration,
  },
  {
    title: "Tecnologia",
    description:
      "Oferecemos soluções digitais ágeis e personalizadas para seu negócio. Do desenvolvimento de sites e sistemas à consultoria tecnológica, garantimos inovação e eficiência para sua empresa crescer.",
    image: LaptopIllustration,
  },
]
