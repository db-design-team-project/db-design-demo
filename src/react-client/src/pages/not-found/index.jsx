import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function NotFound() {
  let navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  let onNotFoundPath = currentPath.includes('/notfound');

  useEffect(() => {
    if (!!onNotFoundPath === false) {
      navigate("/auth/login");
    }
  }, [])

  return <>
    {!!onNotFoundPath === true && (
      <p>
        Not Found Page
      </p>
    )}
  </>
}
