import { Open_Sans } from "next/font/google"

interface TitleProps {
  title: string
}

const openSans = Open_Sans({
  weight: ["800", "600"],
  style: ["normal"],
  subsets: ["latin"],
})

export const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <h1
      className={`${openSans.className} text-5xl 2xl:text-6xl font-extrabold max-mobile:text-3xl`}
    >
      {title}
    </h1>
  )
}
