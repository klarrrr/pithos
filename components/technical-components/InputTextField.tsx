interface InputTextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

const InputTextField = ({ placeholder, className, ...props }: InputTextFieldProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`border-muted outline-none focus:border-foreground focus:ring-foreground h-full w-[400px] hover:border hover:border-foreground bg-primary-foreground px-5 py-2 rounded-md ${className}`}
      {...props}
    />
  );
};

export default InputTextField;
