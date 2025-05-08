import Image from "next/image"
import StormIllustration from "../../../public/assets/svgs/storm.svg"
import { Open_Sans } from "next/font/google"
import { Button } from "../../_components/Button"

const openSans = Open_Sans({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin"],
})

export const FirstPage = () => {
  const onClick = () => {}

  return (
    <div
      className="
      bg-red-800 h-[100vh]
        pt-48
        px-56
        flex
        flex-col
        gap-36
        items-center
  "
    >
      <div className="">
        <Image src={StormIllustration} alt="storm" />
      </div>

      <div className="flex flex-col justify-center items-center">
        <label className={`${openSans.className} text-3xl 2xl:text-4xl `}>
          Impulsionamos marcas com a força da inovação.
        </label>

        <div className="flex flex-row overflow-hidden">
          <h1 className={`${openSans.className} text-7xl 2xl:text-9xl `}>
            Nós somos
          </h1>

          <div className="overflow-hidden relative h-[130px]">
            {" "}
            {/* Container interno para os textos */}
            <h1
              // className={`${openSans.className} translate-y-32 text-7xl 2xl:text-9xl animate-infinite-slide-up-3`}
              className={`${openSans.className} text-7xl 2xl:text-9xl animate-infinite-slide-up-1`}
            >
              ousadia
            </h1>
            <h1
              className={`${openSans.className}  text-7xl 2xl:text-9xl animate-infinite-slide-up-2`}
              // className={`${openSans.className}  text-7xl 2xl:text-9xl animate-infinite-slide-up-3`}
            >
              criatividade
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Button label="Transforme seu negócio" onClick={onClick} />
        </div>
      </div>
    </div>
  )
}
