import Image from "next/image"
import { AboutUs, Header } from "./_components"

export default function Home() {
  return (
    <div className="ml-32 mr-32 mt-32">
      <Header />
      <AboutUs />
    </div>
  )
}
