/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
const Toast = ({ message }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 4000);
  }, []);
  return (
    <div
      className={`fixed bottom-20 right-0 bg-green-500 shadow-2xl shadow-green-700 text-white px-20 py-4 transition-all  ${
        visible ? "flex" : "hidden"
      }`}
    >
      <span>{message}</span>
    </div>
  );
};
export default Toast;
