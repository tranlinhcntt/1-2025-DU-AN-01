// class component
// funtion component

import react from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends react.Component {
  //JSX
state = {
  listUsers: [
  {id: 1, name: "linh" , age: 16  },
  {id: 2, name: "tran " , age: 26  },
  {id: 3, name: "Duy" , age: 46  }
]
}

handleAddNewUser =(userObj) => {
  console.log("check", userObj);
  this.setState({
    listUsers: [userObj,...this.state.listUsers]
  })
  
}


  render() {
    const MyInfor = ['ab', 'cd', 'e']

    const myAge = 35  

    
    return (
      <div>
        <AddUserInfor 
          handleAddNewUser={this.handleAddNewUser}
        /> <br/>
        <DisplayInfor listUsers={this.state.listUsers}
                    
        />
      </div>
    );
  }
}

export default MyComponent;
