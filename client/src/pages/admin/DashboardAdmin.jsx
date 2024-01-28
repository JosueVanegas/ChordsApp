/* eslint-disable react-hooks/rules-of-hooks */
import { useAuth } from "../../context/AuthContext";
import Button from "../../components/Button";
const dashboardAdmin = () => {
  const { logout } = useAuth();
  return (
    <div>
      <div>admin lugar xd</div>
      <Button variant="danger" href="/" event={logout}>
        log out
      </Button>
    </div>
  );
};

export default dashboardAdmin;
