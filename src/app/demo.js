import React from 'react';  

class HomePage extends React.Component {
    call(message) {
        alert(message)
    }
    render() {

        const style = {
            // "background-color": this.getColor(this.state.innerWidth)
            // "background-color": 
        }

        return <div>

            <h1>
                {/* this.state.innerWidth: {this.state.innerWidth} */}
            </h1>

            <br />

            <h1 style={style}>
                The background color of this div changes as you resize your screen
            </h1>

            <button onClick={this.call.bind(this, "message")} type=""></button>
        </div>
    }
}

export default HomePage
