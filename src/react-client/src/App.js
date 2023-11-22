import MainLayout from "./components/main-layout";
import AuthRoutes from "./utils/auth-routes";

function App() {
  return (
    <>
      <MainLayout>
        <AuthRoutes />
      </MainLayout>
    </>
  );
}

export default App;
