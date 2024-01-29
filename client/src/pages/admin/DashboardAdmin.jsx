/* eslint-disable react-hooks/rules-of-hooks */
import { useAuth } from "../../context/AuthContext";

import Button from "../../components/Button";
const dashboardAdmin = () => {
  const { logout, user } = useAuth();
  return (
    <div>
      {user &&
        (user.isAdmin ? (
          <div>
            <div>admin lugar xd</div>
            <Button variant="danger" href="/" event={logout}>
              log out
            </Button>
          </div>
        ) : (
          <div className="flex items-center justify-center bg-gradient-to-r from-red-600 to-yellow-600 p-10 h-96">
            <h1 className="text-2xl">
              ☣️ get out here you are not an admin ☣️
            </h1>
          </div>
        ))}
    </div>
  );
};

export default dashboardAdmin;
