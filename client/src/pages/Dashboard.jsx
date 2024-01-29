/* eslint-disable react-hooks/rules-of-hooks */
import { useAuth } from "../context/AuthContext";
import Button from "../components/Button";
const Dashboard = () => {
  const { logout } = useAuth();
  return (
    <div>
      <div>los mortales aqui</div>
      <Button variant="danger" href="/" event={logout}>
        log out
      </Button>
    </div>
  );
};

export default Dashboard;
