import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import axios from "axios";
import useFastor from "../context/useFastor";

const Otp = ({ mobile: phone, onBack }) => {
  const [code, setCode] = useState("");
  const history = useHistory();
  const {loading,setLoading} = useFastor()

  const onLogin = async (e) => {
    setLoading(true)
    e.preventDefault();

    const requestData = {
      phone,
      otp: code,
      dial_code: "+91",
    };

    await axios
      .post("http://staging.fastor.in/v1/pwa/user/login", requestData)
      .then((response) => {
        const {data:{token,refresh_token,...rest}} = response.data;

        localStorage.setItem('token',token)

        console.log(" ----- token ----- ",token)

        history.push('/restaurents')

        setLoading(false)
      })
      .catch((error) => console.log(" ----- Error ----- ", error));
  };

  return (
    <div>
      <div className="w-100 p-3 cursor-pointer" onClick={onBack}>
        <BsChevronLeft />
      </div>
      <div
        style={{ minHeight: "100vh" }}
        className="d-flex justify-content-center align-items-center p-3"
      >
        <div>
          <div className="mb-4">
            <h4>OTP Verification</h4>
            <span className="text-secondary">
              Enter the verification code we just sent on your Mobile Number.
            </span>
          </div>
          <Form onSubmit={onLogin}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter your otp"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button type="submit" variant="danger" size="lg">
                Send Code
              </Button>
            </div>

            <div className="text-center mt-3">
              <span>
                Didn’t received code? <Link to="#">Resend</Link>
              </span>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Otp;
