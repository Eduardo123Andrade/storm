import Image from "next/image"
import { slidesData } from "../_utils/companies"

export const Carousel = () => {
  const duplicatedSlidesData = [...slidesData, ...slidesData]

  return (
    <div className="overflow-hidden">
      <ul
        className="flex gap-10 animate-horizontal-infinity-scroll"
        style={{
          width: `${
            250 * duplicatedSlidesData.length +
            10 * (duplicatedSlidesData.length - 1)
          }px`,
        }}
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
