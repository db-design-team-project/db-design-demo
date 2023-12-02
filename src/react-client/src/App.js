import MainLayout from "./components/main-layout";
import { UserProvider } from "./contexts/UserContext";
import AuthRoutes from "./lib/auth-routes";

function App() {
  return (
    <>
      <UserProvider>
        <MainLayout>
          <AuthRoutes />
        </MainLayout>
      </UserProvider>
    </>
  );
}

export default App;
