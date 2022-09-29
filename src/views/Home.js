import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Login, Otp } from "../components";
import useFastor from "../context/useFastor";

const Home = () => {
  const [isNextScreen,setIsNextScreen] = useState(false);
  const [mobile,setMobile] = useState("");
  const {token} = useFastor();
  const history = useHistory();

  useEffect(() => {
    if(token){
      history.push("/restaurents")
    }
  },[])

  const onBack = () => {
    setMobile("")
    setIsNextScreen(!isNextScreen)
  }

  const onSendOtp = (e) => {
    e.preventDefault();
    if(!mobile) return;
    setIsNextScreen(!isNextScreen)
  }
  
  return (
    <Container
      style={{ minHeight: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      {
        isNextScreen ? (
          <Otp 
            mobile={mobile}
            onBack={onBack}
          />
        ):(
          <Login 
            onChange={(e) => setMobile(e.target.value)}
            mobile={mobile}
            onSendOtp={onSendOtp}
          />
        )
      }
    </Container>
  );
};

export default Home;
