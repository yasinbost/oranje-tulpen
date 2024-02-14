import React from "react";

interface TitleProps {
  children: React.ReactNode;
  addClass: string;
}

const Title = ({ children, addClass }: TitleProps) => {
  return <div className={`${addClass} font-dancing font-bold`}>{children}</div>;
};

export default Title;
