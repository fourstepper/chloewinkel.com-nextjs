import Image from 'next/image'

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center pb-8 justify-between">
    // <div className='grid grid-flow-row md:grid-flow-col items-center justify-items-center w-full gap-y-8'>
    <main>
    <div className='grid grid-flow-row md:grid-flow-col items-center justify-items-center w-full gap-y-8'>
        <Image
            src='/next.svg'
            alt='next logo'
            width='200'
            height='30'
        />
        <Image
            src='/vercel.svg'
            alt='vercel logo'
            width='200'
            height='30'
        />
        <Image
            src='/next.svg'
            alt='next logo'
            width='200'
            height='30'
        />
    </div>
    </main>
  )
}
