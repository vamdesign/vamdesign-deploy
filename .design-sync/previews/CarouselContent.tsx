import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from 'vamdesign-portfolio'

// As used on the Littler case study (app/uc/litman/details): full-width
// image slides, inset prev/next arrows, dot row below.
const slides = [
  { src: "/images/littler/VirtualBinderTemplatev11_aProjectA_Page_01.jpg", alt: "Littler CaseSmart dashboard" },
  { src: "/images/littler/VirtualBinderTemplatev11_aProjectA_Page_02.jpg", alt: "Littler CaseSmart navigation" },
]

export const CaseStudyImages = () => (
  <div className="w-[640px] px-12">
    <Carousel className="w-full">
      <CarouselContent>
        {slides.map((s) => (
          <CarouselItem key={s.src}>
            <div className="p-1">
              <img src={s.src} alt={s.alt} className="h-auto w-full rounded-md object-contain" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 h-8 w-8 sm:left-4 sm:h-10 sm:w-10" />
      <CarouselNext className="right-2 h-8 w-8 sm:right-4 sm:h-10 sm:w-10" />
      <div className="mt-2 flex w-full justify-center gap-1">
        {[0, 1].map((i) => (
          <button key={i} className="h-2 w-2 rounded-full bg-gray-300" aria-label={`Go to slide ${i + 1}`} />
        ))}
      </div>
    </Carousel>
  </div>
)
