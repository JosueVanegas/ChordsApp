import LoginButton from "./Button";
const menu = [
  { name: "Home", path: "/" },
  { name: "songs", path: "/songs" },
];

const Header = ({
  cardTitle = "",
  cardContent = "",
  buttonUrl = "",
  buttonMessage = "",
}) => {
  return (
    <div>
      <nav className="flex items-center justify-between  p-5  pt-0 pb-0">
        <div className="p-3 cursor-pointer transition-transform hover:-translate-y-1">
          <h1 className="text-white text-3xl ">Rader</h1>
        </div>
        <div className="">
          <ul className="flex items-center justify-center space-x-2">
            {menu.map((item, index) => {
              return (
                <li key={index}>
                  <MenuItem name={item.name} path={item.path} />
                </li>
              );
            })}
          </ul>
        </div>
        <LoginButton href="/auth/login">log in</LoginButton>
      </nav>
      <div className="flex items-center justify-around text-white ml-10 p-10">
        <div>
          <h1 className="text-5xl mb-10">{cardTitle}</h1>
          <p className="text-lg max-w-96 mb-10">{cardContent}</p>
          {buttonUrl && (
            <LoginButton href={buttonUrl}>{buttonMessage}</LoginButton>
          )}
        </div>
        <div className=" hidden md:flex">
          <img
            className="h-44 w-44 rotate-12"
            src="https://img.freepik.com/foto-gratis/notas-musicales_144627-33651.jpg?size=626&ext=jpg&ga=GA1.2.2063873471.1705965134&semt=sph"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({ name, path }) => {
  return (
    <div className="transition hover:bg-white rounded-2xl">
      <a className="p-2 text-white text-md hover:text-blue-800" href={path}>
        {name}
      </a>
    </div>
  );
};

export default Header;
