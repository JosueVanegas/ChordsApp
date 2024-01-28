import "./style.css";
import { Link } from "react-router-dom";
const Page404 = () => {
  return (
    <div className="notFound">
      <div className="frog">
        <img className="frog-image" src="/raderLogo.png" alt="" />
      </div>
      <h1>Page not found</h1>
      <Link className="link" to="/">
        Rader | Home
      </Link>
    </div>
  );
};

export default Page404;
