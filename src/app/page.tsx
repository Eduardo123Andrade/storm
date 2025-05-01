"use client"
import { useRef } from "react"
import { AboutUs, Carousel, Header, Intro, Services } from "./_components"

const scrollTo = (refElement: HTMLElement) => {
  const navbar = document.querySelector("nav")
  const navbarHeight = navbar ? navbar.offsetHeight : 0

  const targetPosition = refElement.offsetTop - navbarHeight
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  })
}

export default function Home() {
  const ref1 = useRef<HTMLElement>(null)
  const ref2 = useRef<HTMLElement>(null)
  const ref3 = useRef<HTMLElement>(null)

  const onPressAboutUs = () => {
    if (ref1.current) {
      scrollTo(ref1.current)
    }
  }

  const onPressServices = () => {
    if (ref2.current) {
      scrollTo(ref2.current)
    }
  }

  const onPressCases = () => {
    if (ref3.current) {
      scrollTo(ref3.current)
    }
  }

  return (
    // <div className="px-32 pt-32 bg-gradient-to-b from-test1 from-70% via-test2 via-95% to-test1 to-100%">
    <div className="bg-gradient-to-b from-test1 from-70% via-test2 via-95% to-test1 to-100%">
      <Header refs={[onPressAboutUs, onPressServices, onPressCases]} />
      <div className="gap-12 flex flex-col">
        <Intro ref={ref1} />
        <AboutUs ref={ref2} />
        <Services ref={ref3} />
      </div>
      <Carousel />
    </div>
  )
}
