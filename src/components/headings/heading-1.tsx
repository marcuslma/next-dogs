export default async function Heading1({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <h1
      className="font-spectral leading-none text-[3rem] font-bold my-4 relative z-[1]
        after:block after:w-6 after:h-6 after:bg-[#fb1] after:absolute after:bottom-1
        after:left-[-5px] after:rounded-[0.2rem] after:z-[-1]"
    >
      {children}
    </h1>
  );
}
