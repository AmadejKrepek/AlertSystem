import React from "react";

const variantClasses = {
  h1: "font-medium sm:text-5xl md:text-5xl text-[64px]",
  h2: "font-medium text-2xl md:text-[22px] sm:text-xl",
  h3: "font-semibold sm:text-5xl md:text-5xl text-9xl",
};

const Text = ({ children, className = "", variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
