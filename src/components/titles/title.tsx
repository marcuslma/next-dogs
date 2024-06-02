export default function Title({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <h1
      className="font-dogs-next-display leading-none text-5xl font-bold my-4 relative z-[1]
        after:content-[''] after:block after:w-6 after:h-6 after:bg-[#fb1] after:absolute
        after:bottom-1 after:left-[-5px] after:rounded-[0.2rem] after:z-[-1]"
    >
      {children}
    </h1>
  );
}
