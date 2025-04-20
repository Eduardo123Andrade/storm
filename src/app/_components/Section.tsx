interface SectionProps extends React.PropsWithChildren {
  className?: string
}

export const Section: React.FC<SectionProps> = ({ children, className }) => {
  return <section className={` h-[70vh] ${className} `}>{children}</section>
}
