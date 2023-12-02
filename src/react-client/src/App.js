import MainLayout from "./components/main-layout";
import { UserProvider } from "./contexts/UserContext";
import AuthRoutes from "./lib/auth-routes";

function App() {
  return (
    <>
      <MainLayout>
        <UserProvider>
          <AuthRoutes />
        </UserProvider>
      </MainLayout>
    </>
  );
}

export default App;
