import { Route, Routes } from "react-router-dom";
import pageRoutes from "../configs/page-routes";

export default function AuthRoutes() {
    return (
        <>
            <Routes>
                {
                    pageRoutes.map((route, idx) => {
                        const { element, path, isPrivate, index } = route;
                        
                        // User Session 있을 때 아래 코드 수정
                        // if (isPrivate) {
                        //     return ()
                        // }
                        if (index !== undefined)
                            return <Route key={idx} index element={element} />
                        else
                            return (<Route key={idx} path={path} element={element} />)
                    })
                }
            </Routes>
        </>
    );
}

