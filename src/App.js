import {
    ListGroup,
    ListGroupItem,
    FormControl
} from 'react-bootstrap';
import React, {Component} from 'react';

const card = {
    "width": "90%",
    "margin": "auto"
}
const headerRow = {
    "height": "7.5em",
    "borderTop": "none",
    "borderLeft": "none",
    "borderRight": "none",
    "borderBottom": "solid",
    "borderColor":"red",
    "background": "#DFF0D8"
}
const normalLineRow = {
    "minHeight": "5.5em",
    "background": "#DFF0D8"
}
const textField = {
    "minHeight" : "1.5em",
    "background": "#DFF0D8",
    "border": "none",
    "paddingLeft":"1em",
    "boxShadow":"none",
    "fontSize" : "4em"

}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit = (e) => {
        if (e.key === 'Enter') {
            this.setState({value: ''});
        }
    }

    render() {
        return (
            <div style={card}>
                  <ListGroup fill>
                      <ListGroupItem style={headerRow}/>
                      <ListGroupItem style={normalLineRow}/>
                      <ListGroupItem style={normalLineRow}/>
                      <ListGroupItem style={normalLineRow}>
                              <FormControl
                                type="text"
                                value={this.state.value}
                                onChange={this.handleChange}
                                onKeyPress={this.handleSubmit}
                                autoFocus="true"
                                style={textField}/>
                      </ListGroupItem>
                      <ListGroupItem style={normalLineRow}/>
                      <ListGroupItem style={normalLineRow}/>
                      <ListGroupItem style={normalLineRow}/>
                      <ListGroupItem style={normalLineRow}/>
                  </ListGroup>
            </div>
        );
    }
}

export default App;
