import { Route, Routes } from "react-router-dom";
import pageRoutes from "../configs/page-routes";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function AuthRoutes() {
    const { user } = useContext(UserContext);

    return (
        <>
            <Routes>
                {
                    pageRoutes.map((route, idx) => {
                        const { isPrivate } = route;

                        if (isPrivate === false || user.authenticated === true) 
                            return <Route key={idx} {...route} />
                    })
                }
            </Routes>
        </>
    );
}

