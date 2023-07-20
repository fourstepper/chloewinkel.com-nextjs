export function Container ({ children }: { children: React.ReactNode }) {
    return (
        <div className='sm:px-10 md:px-40 xl:px-60 2xl:px-100'>
        {children}
        </div>
    )
}

export function GridWrapper ({ children }: { children: React.ReactNode }) {
  return (
    <div className='grid grid-flow-row sm:grid-flow-col place-content-center pt-8 gap-8'>
    {children}
    </div>
  )
}

export function h1 ({ children }: { children: React.ReactNode }) {
  return <h1 className="text-center text-4xl font-bold">{children}</h1>
}

export function p ({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-center text-l pt-4">{children}</p>
    )
}
