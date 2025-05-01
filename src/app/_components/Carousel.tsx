import Image from "next/image"
import { slidesData } from "../_utils/companies"

export const Carousel = () => {
  const duplicatedSlidesData = [...slidesData, ...slidesData]

  return (
    <div className="overflow-hidden">
      <ul
        className="
        flex
        gap-10
        [&_img]:max-w-none
        animate-horizontal-infinity-scroll
        "
      >
        {duplicatedSlidesData.map((item, index) => (
          <li key={index}>
            <Image src={item.src} alt="" width={250} height={250} />
          </li>
        ))}
      </ul>
    </div>
  )
}
