export const Header = ({ heading }: { readonly heading: string }) => {
  return (
    <div className="container text-center">
      <h1 className="text-6xl">{heading}</h1>
    </div>
  );
};
