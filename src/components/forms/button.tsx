import React from "react";

type ButtonType = React.ComponentProps<"button">;

export default function Button(props: ButtonType) {
  return (
    <button
      className="font-dogs-next-body block text-base text-[#764701] cursor-pointer
        rounded-[0.4rem] border-none bg-[#fb1] min-w-32 py-[0.8rem] px-[1.2rem]
        box-border transition duration-100 disabled:opacity-50 disabled:cursor-wait
        after:outline-none hover:shadow-[0_0_0_3px_#fea,0_0_0_4px_#fb1]
        focus:outline-none focus:shadow-[0_0_0_3px_#fea,0_0_0_4px_#fb1]"
      {...props}
    >
      {props.children}
    </button>
  );
}
