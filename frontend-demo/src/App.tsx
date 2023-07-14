import Navbar from "./components/Navbar";
import useAuthentication from "./hooks/useAuthentication";
import IndexPage from "./pages/IndexPage";

function App() {
  useAuthentication();
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <IndexPage />
      </div>
    </>
  );
}

export default App;
