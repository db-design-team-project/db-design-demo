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
                        const { element, path, isPrivate, index } = route;

                        if (isPrivate === false || user.authenticated === true) {
                            if (index !== undefined)
                                return <Route key={idx} index element={element} />
                            else
                                return (<Route key={idx} path={path} element={element} />)
                        }
                    })
                }
            </Routes>
        </>
    );
}

