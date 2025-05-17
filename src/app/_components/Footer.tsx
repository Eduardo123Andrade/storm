import Image from "next/image"
import StormIllustration from "../../../public/assets/svgs/storm.svg"
import SocialMediasIllustration from "../../../public/assets/svgs/social-medias.svg"

export const Footer = () => {
  return (
    <div className="flex justify-between px-8 pt-36 pb-16">
      <Image src={StormIllustration} alt="" />
      <Image src={SocialMediasIllustration} alt="" />
    </div>
  )
}
