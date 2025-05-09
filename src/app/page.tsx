"use client"
import { useRef } from "react"
import {
  AboutUs,
  Header,
  Intro,
  ITSolution,
  MoreResults,
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
  const refStorm = useRef<HTMLElement>(null)
  const refAboutUs = useRef<HTMLElement>(null)
  const refServices = useRef<HTMLElement>(null)
  const itSolutions = useRef<HTMLElement>(null)
  const ref4 = useRef<HTMLElement>(null)

  const onPressHome = () => {
    if (refStorm.current) {
      scrollTo(refStorm.current)
    }
  }

  const onPressAboutUs = () => {
    if (refAboutUs.current) {
      scrollTo(refAboutUs.current)
    }
  }

  const onPressServices = () => {
    if (refServices.current) {
      scrollTo(refServices.current)
    }
  }

  const onPressITSolutions = () => {
    if (itSolutions.current) {
      scrollTo(itSolutions.current)
    }
  }

  const onPressClients = () => {
    if (ref4.current) {
      scrollTo(ref4.current)
    }
  }

  return (
    <>
      {/* <FirstPage /> */}
      <div className="pt-8 bg-test3">
        <Header
          onPressHome={onPressHome}
          onPressClients={onPressClients}
          onPressAboutUs={onPressAboutUs}
          onPressServices={onPressServices}
          onPressITSolutions={onPressITSolutions}
        />
        <div className="flex flex-col overflow-hidden">
          <Intro ref={refStorm} />
          <AboutUs ref={refAboutUs} />
          <Services ref={refServices} />
          <ITSolution ref={itSolutions} />
          <Partners ref={ref4} />
          <MoreResults />
        </div>
      </div>
    </>
  )
}
