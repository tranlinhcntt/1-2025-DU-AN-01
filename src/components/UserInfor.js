import React from "react";

class UserInfor extends React.Component {
  state = {
    name: " Trần Link ",
    address: "Nghệ An ",
    age: 35,
  };

  handleOnChangeInput = (event) => {  
    this.setState({
      name: event.target.value,
    });
  };

  handleOnChangeAge = (event) => {   
    this.setState({
      age: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    //ngăn chặn cái việc reload lại trang
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        Tên: {this.state.name} <br />
        Địa chỉ: {this.state.address} <br />
        age: {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>You name: </label>
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => {
              this.handleOnChangeInput(event);
            }}
          />
          <br />

          <label>You age: </label>
          <input
            type="text"
            value={this.state.age}
            onChange={(event) => {
              this.handleOnChangeAge(event);
            }}
          />
          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfor;
