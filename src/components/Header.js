import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";


const Header = () => {
  const history = useHistory();

  const onLogout = () => {
    localStorage.removeItem("token");
    history.push("/")
    window.location.reload()
  };

  return (
    <div className="my-2">
      <Button variant="danger" type="button" onClick={onLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Header;
