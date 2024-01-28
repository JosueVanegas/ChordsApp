import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user } = useAuth();
  return (
    <main>
      <h1>hola</h1>
    </main>
  );
};

export default Home;
