import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../UserAuth";

const PhoneSignUp = () => {
  const [error, setError] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [accessCode, setaccessCode] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha } = useUserAuth();
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(phoneNumber);
    setError("");
    if (phoneNumber === "" || phoneNumber === undefined)
      return setError("Please enter your valid phone number!");
    try {
      const response = await setUpRecaptha(phoneNumber);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (accessCode === "" || accessCode === null) return;
    try {
      await result.confirm(accessCode);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Sign in by phone number</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
          <Form.Group className="mb-3">
            <PhoneInput
              defaultCountry="US"
              value={phoneNumber}
              onChange={setphoneNumber}
              placeholder="Enter Your Phone Number"
            />
            <div id="recaptcha-container"></div>
          </Form.Group>
          <div className="button-right">
            <Link to="/">
              <Button variant="secondary">Cancel</Button>
            </Link>
            &nbsp;
            <Button type="submit" variant="primary">
              Send Access Code
            </Button>
          </div>
        </Form>

        <Form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicOtp">
            <Form.Control
              type="accessCode"
              placeholder="Enter Access Code"
              onChange={(e) => setaccessCode(e.target.value)}
            />
          </Form.Group>
          <div className="button-right">
            <Link to="/">
              <Button variant="secondary">Cancel</Button>
            </Link>
            <Button type="submit" variant="primary">Verify</Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default PhoneSignUp;
