import { ToastContainer } from "react-toastify";
import { CountryProvider } from "./contexts/CountryContext";
import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <CountryProvider>
      <div className="flex flex-col min-h-screen">
        {/* Navbar siempre arriba */}
        <Navbar />

        {/* Aquí se renderizan las páginas */}
        <div className="flex-grow">
          <AppRouter />
        </div>

        {/* Footer siempre abajo */}
        <Footer />
      </div>
      <ToastContainer />
    </CountryProvider>
  )
}

export default App;
