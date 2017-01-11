import {
    Grid,
    Row,
    Col,
    Panel,
    ListGroup,
    ListGroupItem,
    FormControl
} from 'react-bootstrap';
import React, {Component} from 'react';

const headerRow = {
    "height": "4.5em",
    "background": "#DFF0D8"
}
const normalLineRow = {
    "minHeight": "3.3em",
    "background": "#DFF0D8"
}
const textField = {
    "background": "#DFF0D8",
    "border": "none",
    "padding":"0px",
    "marginTop":"-10px",
    "boxShadow":"none",
    "fontSize" : "230%"

}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'the grandchild'
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
            <div>
                <Grid>
                    <Row>
                        <Col md={10} mdOffset={1}>
                            <Panel>
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
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default App;