import { Intro, Header, AboutUs, Services } from "./_components"

export default function Home() {
  return (
    <div className="px-32 pt-32 bg-gradient-to-b from-test1 from-70% via-test2 via-95% to-test1 to-100%">
      <Header />
      <Intro />
      <div className="gap-12 flex flex-col">
        <AboutUs />
        <Services />
      </div>
    </div>
  )
}
