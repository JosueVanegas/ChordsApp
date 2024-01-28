/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Button = ({
  href = "/",
  children,
  event = () => {},
  type = "",
  variant = "default",
}) => {
  const handleVariant = () => {
    switch (variant) {
      case "default":
        return "text-white bg-blue-900 border border-white px-4 p-1 hover:bg-white hover:text-blue-900";
      case "primary":
        return "text-blue-900 bg-white border border-blue-900 px-4 p-1 hover:bg-blue-700 hover:text-white";
      case "danger":
        return "text-white bg-red-600 border border-red-900 px-4 p-1 hover:bg-white hover:text-red-600";
    }
  };
  return (
    <Link to={href}>
      <button className={handleVariant()} onClick={event} type={type}>
        {children}
      </button>
    </Link>
  );
};

export default Button;
