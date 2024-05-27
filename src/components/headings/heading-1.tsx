export default async function Heading1({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <h1 className="font-spectral leading-none text-[3rem] font-bold my-4 relative z-[1]">
      <span className="block w-6 h-6 bg-[#fb1] absolute bottom-1 left-[-5px] rounded-[0.2rem] z-[-1]" />
      {children}
    </h1>
  );
}
