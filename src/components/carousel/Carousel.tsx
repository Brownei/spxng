import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './ArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import { Insights } from '../MarketInsights'
import { ArrowRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'

type PropType = {
  slides: Insights[]
  isThereButtons: boolean
  options?: EmblaOptionsType
}

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options, isThereButtons } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex items-center gap-[20px] lg:gap-[40px] mt-10">
          {slides.map((slide, i) => {
            function addHyphen(str: string): string {
              return str.includes(' ') ? str.replace(/\s+/g, '-') : str;
            }

            return (
              <Link params={{ title: addHyphen(slide.title.toLowerCase()) }} to={`/market-insights/$title`} className="group cursor-pointer min-w-[282px] lg:min-w-[256px] min-h-[430px] relative border" key={i}>
                <div className='absolute top-0 left-0 right-0 bottom-0'>
                  <img src={slide.url} className='w-full h-full object-cover' />
                </div>
                <div className="absolute group-hover:underline  top-5 left-3 text-white max-w-[100px] font-Akkurat font-bold tracking-[-0.02em] text-[1.875rem] leading-[2.156rem]">{slide.title}</div>

                <ArrowRight className='size-[20px] absolute bottom-5 left-3' color='#fff' />
              </Link>
            )
          })}
        </div>
      </div>

      {
        isThereButtons && (
          <div className="mt-4">
            <div className="flex gap-3 items-center">
              <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
              <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>
          </div>
        )
      }
    </section >
  )
}

export default Carousel

