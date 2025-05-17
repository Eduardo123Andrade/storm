import { StaticImport } from "next/dist/shared/lib/get-img-props"

export interface Service {
  title: string
  description: string
  image: StaticImport
}
