interface IButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  width?: number;
  text?: string;
  cstyle?: string;
}

const Button: React.FC<IButtonProps> = ({ width, cstyle, text, ...rest }) => {
  const customStyle: string = cstyle === 'green' ? 'bg-green text-white hover:bg-[#36DA87]' : 'border-2 border-green box-content bg-white text-green'
  return (
    <div {...rest}  className={`${customStyle} font-sans cursor-pointer flex justify-center items-center rounded-lg py-[14px] max-w-[240px] w-full text-base font-bold btn-shadow transition-all hover:scale-105`}>
      {text}
    </div>
  );
};

export default Button;