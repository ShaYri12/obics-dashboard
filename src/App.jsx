import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ObicsDocumentation from "./components/ObicsDocumentation";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import ConnectToObics from "./components/ConnectToObics";
import InsertingData from "./components/InsertingData";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-1 relative">
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={
              <Navigate to="/getting-started/child-four/grand-child-one" />
            }
          />
          <Route
            path="/getting-started/child-four/grand-child-one"
            element={<ObicsDocumentation />}
          />
          <Route
            path="/getting-started/child-four/grand-child-two"
            element={<ConnectToObics />}
          />
          <Route
            path="/getting-started/child-four/grand-child-three"
            element={<InsertingData />}
          />
          <Route path="/privacy-policy" element={<ObicsDocumentation />} />
        </Routes>
      </main>
    </div>
  );
}
