import React from "react";
import { Button, Form } from "react-bootstrap";

const Login = ({mobile,onChange,onSendOtp}) => {
  return (
    <div className="p-3">
      <div className="mb-4">
        <h4>Enter Your Mobile Number</h4>
        <span className="text-secondary">
          We will send you the 4 digit verification conde
        </span>
      </div>
      <Form onSubmit={onSendOtp}>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Enter your mobile number" value={mobile} onChange={onChange} />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button variant="danger" size="lg" type="submit" onClick={onSendOtp}>
            Send Code
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
