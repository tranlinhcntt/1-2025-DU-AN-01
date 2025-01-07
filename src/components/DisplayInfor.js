import react from "react";

class DisplayInfor extends react.Component {

state = {
    isShowListUser: true
}

    handleShowHide = () => {
       this.setState({
        isShowListUser: !this.state.isShowListUser

       })
    }

  render() {
    // console.log(this.props);
    // //destrusturing
    const { listUsers } = this.props;
    // // console.log(listUsers);

  

    

    return (
        <div>
            <div>
                <button onClick={() => {this.handleShowHide()}}>
                    {this.state.isShowListUser === true ? "hide list users: " : "Show list users:"}
                </button>
            </div>
        {this.state.isShowListUser && 
      <div>
        {listUsers.map((user, index) => {
          // console.log('check map user' ,user);

          return (

            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
              <div> tên :{user.name} </div>
              <div>age : {user.age} </div>
              <hr />
            </div>
          );
        })}      
      </div>
    }

      </div>
    );
  }
}

export default DisplayInfor;
