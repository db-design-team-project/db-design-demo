import { BrowserRouter } from "react-router-dom";
import MainLayout from "./components/main-layout";
import { UserProvider } from "./contexts/UserContext";
import AuthRoutes from "./lib/auth-routes";
import '@fontsource-variable/noto-sans-kr';

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <MainLayout>
            <AuthRoutes />
          </MainLayout>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
