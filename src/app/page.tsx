"use client"
import { useRef } from "react"
import {
  AboutUs,
  Header,
  Intro,
  Partners,
  Section,
  Services,
} from "./_components"

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
  const ref4 = useRef<HTMLElement>(null)

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

  const onPressClients = () => {
    if (ref4.current) {
      scrollTo(ref4.current)
    }
  }

  return (
    <div className="pt-32 bg-gradient-start">
      {/* <div className="pt-32 bg-test1"> */}
      <Header
        onPressClients={onPressClients}
        onPressAboutUs={onPressAboutUs}
        onPressServices={onPressServices}
        onPressCases={onPressCases}
      />
      <div className="flex flex-col overflow-hidden">
        <Intro ref={ref1} />
        <AboutUs ref={ref2} />
        <Services ref={ref3} />
        <Partners ref={ref4} />
        {/* <Section /> */}
      </div>
    </div>
  )
}
