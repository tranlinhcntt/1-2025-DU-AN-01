// class component 
// funtion component

import react from "react";

class MyComponent extends react.Component {

    state = {
        name: ' tên khác ',
        address: 'học reactjs ',
        age: 35 
    };



    //JSX
    render() {
        return (

            <div>

                đây là thư mục đầu tiên của component 
                <hr></hr>
               
                Tên {this.state.name} and địa chỉ {this.state.address}
            </div>
        )
    }
}

export default MyComponent;