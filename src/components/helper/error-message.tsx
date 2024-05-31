export default function ErrorMessage({ error }: { error: string }) {
  if (error === "") return null;
  return <p className="text-[#f31] my-4 mx-0">{error}</p>;
}
