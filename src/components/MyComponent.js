// class component 
// funtion component

import react from "react";

class MyComponent extends react.Component {

    state = {
        name: ' tên khác ',
        address: 'học reactjs ',
        age: 35 
    };


handleClick (event) {
        console.log("click me vào tôi");
        // console.log(event.target)      
        // console.log(event)        
        console.log("tên :", this.state.name );
        // console.log("tuổi", this.state.age);
        

        this.setState({
            name: 'link',
            age: Math.random()
        })
        
        
        
}
handleOnMouseOver = (event) => { 
    // console.log(event.pageX);
    
}


    //JSX
    render() {
        return (

            <div>               
                Tên {this.state.name} and địa chỉ {this.state.address} 
                age {this.state.age}
                <button onClick={(event) => {this.handleClick(event)}}>click </button>
                <button onMouseOver={this.handleOnMouseOver}>hover me</button>
            </div>
        )
    }
}

export default MyComponent;