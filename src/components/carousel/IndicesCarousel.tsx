import useEmblaCarousel from 'embla-carousel-react'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useAutoplay } from './AutoPlay'

type PropType = {
  slides: any[]
  options?: EmblaOptionsType
}

const IndicesCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: false, delay: 3000 })
  ])
  const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
    useAutoplay(emblaApi)

  return (
    <section className="">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex items-center gap-[20px] lg:gap-[40px] mt-10">
          {slides.map((slide, i) => (
            <div className="" key={i}>
              <div className="p-5">{slide.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndicesCarousel
