import "./App.css";
import { Login } from "./view/Login/index";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Dashboard } from "./view/Dashboard/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PrivateRoutes } from "./components/privateroutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import About from "./view/About";

function App() {
  const queryClient = new QueryClient();

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </QueryClientProvider>
      <ToastContainer position="top-right" autoClose={1000} theme="light" />
    </Router>
  );
}

export default App;
