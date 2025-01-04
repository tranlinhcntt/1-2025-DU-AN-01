// class component
// funtion component

import react from "react";
import UserInfor from "./UserInfor";

class MyComponent extends react.Component {
  //JSX
  render() {
    return (
      <div>
        <UserInfor />
      </div>
    );
  }
}

export default MyComponent;
