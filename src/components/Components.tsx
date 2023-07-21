export function Container({ children }: { children: React.ReactNode }) {
  return (
    // <div className="grid grid-flow-col sm:px-10 md:px-40 xl:px-60 2xl:px-120">
    <div className="grid grid-flow-col content-center">{children}</div>
  );
}

export function GridWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-flow-row lg:grid-flow-col place-content-center relative pt-8 gap-12 md:gap-24">
      {children}
    </div>
  );
}

export function h1({ children }: { children: React.ReactNode }) {
  return <h1 className="text-center text-6xl">{children}</h1>;
}

export function p({ children }: { children: React.ReactNode }) {
  return (
    <div className="justify-center">
      <p className="text-center text-l pt-4">{children}</p>
    </div>
  );
}

export function testing({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
