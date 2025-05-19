export interface SlideProps {
    id: string
    content?: React.ReactNode

  }
  
  export interface HeroSliderProps {
    slides?: SlideProps[]
    autoPlay?: boolean
    interval?: number
  }
  
  