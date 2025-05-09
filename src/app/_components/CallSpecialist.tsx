import { RedirectButton } from "./RedirectButton"
import { Title } from "./Title"
import StormLogoIllustration from "../../../public/assets/svgs/storm-logo.svg"
import Image from "next/image"

export const CallSpecialist = () => {
  return (
    <div className="flex justify-between px-32">
      <div className="flex flex-col gap-6">
        <Title title="Quer mais resultado para o seu negócio?" />
        <div>
          <RedirectButton label="Fale com um especialista" />
        </div>
      </div>
      <Image src={StormLogoIllustration} alt="" />
    </div>
  )
}
