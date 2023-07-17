import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pb-8 justify-between">
    <div className="bg-gradient-to-tr hover:bg-gradient-to-bl p-[30px] from-[#7928ca] to-[#ff0080] w-screen text-center">
        <h1 className='text-8xl text-stone-200 font-sans'>Testing</h1>
    </div>
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
