import React, { FC } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { navbar } from '../../data'
import { useNavMobileStore } from '../hooks/use-store'
import PortionSelectedCard from './PortionSelectedCard'

type PortionNavProps = {
  portion: string
}

export function AnimationWrapper({ children, classNames }: { children: React.ReactNode, classNames?: string }) {
  return (
    <motion.div
      key="modal"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={`mx-5 ${classNames}`}
    >
      {children}
    </motion.div>
  )
}

const PortionNav: FC<PortionNavProps> = ({ portion }) => {
  const { navMobile } = useNavMobileStore()
  const { selectedNavMobile } = navMobile
  const particularOne = navbar[selectedNavMobile].find((n) => n.title === portion)
  console.log(particularOne)
  switch (portion) {
    case "featured-products":
      return (
        <AnimationWrapper>
          {particularOne.portionNav.map((pn) => (
            <PortionSelectedCard title={pn.title} imgUrl={pn.imgUrl} />
          ))}
        </AnimationWrapper>

      )
    case "market-insights":
      return (
        <AnimationWrapper classNames='flex flex-col gap-4 mb-[200px]'>
          {particularOne.portionNav.map((pn) => (
            <PortionSelectedCard title={pn.title} imgUrl={pn.imgUrl} />
          ))}
        </AnimationWrapper>
      )
    default: (
      <>Hello</>
    )
  }
}

export default PortionNav
