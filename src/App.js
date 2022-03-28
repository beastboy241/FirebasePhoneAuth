import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import PhoneSignUp from "./components/PhoneSignUp";
import { UserAuthContextProvider } from "./UserAuth";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <Container style={{ width: "500px" }}>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/home" element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<PhoneSignUp />} />
            </Routes>
          </UserAuthContextProvider>
     </Container>
  );
}

export default App;
