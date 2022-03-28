import React from "react";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../UserAuth";
import { useNavigate } from "react-router";


const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="p-4 box text-center">
        Logged in! <br/>
        {user}
      </div>
      <div className="d-grid">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;
