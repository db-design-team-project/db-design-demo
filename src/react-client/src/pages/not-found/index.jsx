import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export default function NotFound() {
  const { user } = useContext(UserContext);
  let navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  let onNotFoundPath = currentPath.includes('/notfound');
  
  useEffect(() => {
    if (!!onNotFoundPath === false) {
      if (!!user.authenticated === false) 
        navigate("/auth/login");
      else
        navigate("/");
    }
  }, [])

  return <>
    {!!onNotFoundPath && (
      <p>
        존재하지 않는 페이지입니다...
      </p>
    )}
  </>
}
