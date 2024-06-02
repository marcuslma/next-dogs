export default function Subtitle({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <h2
      className="font-dogs-next-display leading-none text-[2rem] after:content-['']
        after:block after:w-12 after:h-2 after:bg-[#ddd] after:rounded-[0.2rem]"
    >
      {children}
    </h2>
  );
}
