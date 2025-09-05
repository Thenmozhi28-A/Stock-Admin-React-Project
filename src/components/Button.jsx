const Button = ({ type = "button", children, className = "", onClick, ...props }) => {
  return (
    <button
      type={type}
      onClick={onClick} 
      className={` bg-gradient-to-r from-[#4a00e0] to-[#8e2de2] text-white  cursor-pointer transition-opacity duration-300 ease-in-out hover:opacity-90 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
