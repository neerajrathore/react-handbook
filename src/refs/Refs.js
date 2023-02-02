import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const SelectorDiv = styled.div`
  background-color: black;
  color: white;
  height: 50px;
`;

const stylediv = {
    "background-color": "black",
    "color": "white",
    "height": "50px"
}
console.dir(SelectorDiv, "SelectorDiv");

export class Refs extends React.Component {
    constructor(props) {
        super(props);

        this.selectorRef = React.createRef(null);
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside = (event) => {
        console.log(this.selectorRef.current); // undefined
    };

    handleClickInside = () => {
        alert("Clicked inside");
    };

    render() {
        return (
            <Container>
                {/* <SelectorDiv onClick={this.handleClickInside} ref={this.selectorRef}>
                    <p>This is the content to click</p>
                </SelectorDiv> */}
                <div style={stylediv} onClick={this.handleClickInside} ref={this.selectorRef}>
                    <p>This is the content to click</p>
                </div>
            </Container>
        )
    }
}

export default Refs;