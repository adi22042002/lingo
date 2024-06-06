
import Image from 'next/image'
export default function Home() {
  return (
  
      <div className='max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2'>
        <div className='relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0'>
          <Image src="/hero.svg" layout="fill" alt="hero" />
        </div>
        <div className='flex flex-col items-center gap-y-8'>
          <h1 className='text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center'>
            Learn, practice, and master new languages with Lingo.
          </h1>
          <div>
          </div>
        </div>
      </div>
    
  
  )
}
