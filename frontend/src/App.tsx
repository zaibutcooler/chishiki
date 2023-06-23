import Navbar from "./components/Navbar";
import IndexPage from "./pages/IndexPage";

function App() {
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
