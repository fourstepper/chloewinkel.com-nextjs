import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-amber-50 flex min-h-screen flex-col items-center justify-between p-12">
    <div className="bg-gradient-to-tr hover:bg-gradient-to-bl p-[15px] from-[#7928ca] to-[#ff0080]">
        <h1 className='text-8xl text-stone-200 font-sans'>Testing</h1>
    </div>
    <div className='grid grid-flow-row md:grid-flow-col items-center justify-items-center w-full gap-y-16'>
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
    </div>
    </main>
  )
}
