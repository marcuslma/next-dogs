type InputProps = React.ComponentProps<"input"> & {
  label: string;
  error?: string;
};

export default function InputText({ label, error, ...props }: InputProps) {
  return (
    <div className="mb-4">
      <label className="block text-base leading-4 pb-2" htmlFor={props.name}>
        {label}
      </label>

      <input
        id={props.name}
        className="border border-[#eee] block w-full text-base
          p-[0.8rem] rounded-[0.4rem] bg-[#eee] transition duration-200
          hover:outline-none hover:border-[#fb1] hover:bg-white hover:ring hover:ring-[#fea]
          focus:outline-none focus:border-[#fb1] focus:bg-white focus:ring focus:ring-[#fea]"
        type="text"
        {...props}
      />

      {error && <p className="text-[#f31] text-sm mt-1">{error}</p>}
    </div>
  );
}
