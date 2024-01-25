import LoginButton from "./Button";
import {useState,useEffect} from 'react'
const menu = 
[
    {name:'Home',path:'/'},
    {name:'artist',path:'/artist'},
    {name:'songs',path:'/songs'},
]

const Header = () => {
    const [data,setData] = useState();
    const getData = async()=>{
        try {
            const response = await fetch('http://localhost:8081/api/song');
            const data = await response.json();
            setData(data)
            console.log(data)
        } catch (error) {
            return console.log(error);
        }
    }
   // useEffect(getData(),[]);
    return (
      <div>
        <nav className="flex items-center justify-between  p-5 mb-10 pt-0 pb-0">
        <div className="p-3 cursor-pointer transition-transform hover:-translate-y-1">
          <h1 className="text-white text-3xl ">Rader</h1>
        </div>
        <div className="">
          <ul className="flex items-center justify-center space-x-2">
            {menu.map((item) => {
              return <MenuItem name={item.name} path={item.path} />;
            })}
          </ul>
        </div>
        <LoginButton href="/auth/login">log in</LoginButton>
      </nav>
      <div className="flex items-center justify-around text-white ml-10 p-10">
        <div>
        <h1 className="text-5xl mb-10">Welcome</h1>
        <p className="text-lg max-w-96 mb-10">Descover chords and lyrics of the music that you love sing and play.</p>
        <LoginButton href="/auth/login">get started</LoginButton>
        </div>
        <div className=" hidden md:flex">
            <img className="h-44 w-44 rotate-12" src="https://img.freepik.com/foto-gratis/notas-musicales_144627-33651.jpg?size=626&ext=jpg&ga=GA1.2.2063873471.1705965134&semt=sph" alt="" />
        </div>
      </div>
      </div>
    );
  };
  
  const MenuItem = ({ name, path }) => {
    return (
      <li className="transition hover:bg-white rounded-2xl">
        <a className="p-2 text-white text-md hover:text-blue-800" href={path}>
          {name}
        </a>
      </li>
    );
  };
  
  export default Header;
  
