import React, { Component } from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';

import * as actions from "./actions";
import { connect } from "react-redux";

class Add extends Component {

    state = {
        title: '',
        year: '',
        description: '',
        image: '',
        rate: ''
    }

    handleChangeInput = e => {
        const key = e.target.name
        const itemText = e.target.value
        
        this.setState({
            [key]: itemText
        })
    }

    handleSubmit = () => {

        let item = new FormData();
        item.append('title', this.state.title)
        item.append('year', this.state.year)
        item.append('description', this.state.description)
        item.append('image', this.state.image)
        item.append('rate', this.state.rate)

        this.props.addMovie(item, this.props.history)
    }

    render() {
        return (
            <Container>
                <h4>Add new movie</h4>
                <br/>
                <Form>
                    <FormGroup row>
                        <Label for="title" sm={2}>Judul</Label>
                        <Col sm={10}>
                            <Input 
                                type="text" 
                                name="title" 
                                id="title"
                                onChange = {this.handleChangeInput}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="title" sm={2}>Image URL</Label>
                        <Col sm={10}>
                            <Input 
                                type="text" 
                                name="image" 
                                id="image"
                                onChange = {this.handleChangeInput}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="title" sm={2}>Tahun</Label>
                        <Col sm={10}>
                            <Input 
                                type="text" 
                                name="year" 
                                id="year"
                                onChange = {this.handleChangeInput}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="title" sm={2}>Rating</Label>
                        <Col sm={10}>
                            <Input 
                                type="text" 
                                name="rate" 
                                id="rate"
                                onChange = {this.handleChangeInput}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleText" sm={2}>Deskripsi</Label>
                        <Col sm={10}>
                            <Input 
                                type="textarea" 
                                name="description" 
                                id="exampleText"
                                onChange = {this.handleChangeInput}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Button 
                            color="primary" 
                            type="button"
                            onClick={this.handleSubmit}
                        >
                                Submit
                        </Button>
                    </FormGroup>
                </Form>
            </Container>
        )
    }
}

export default connect(null, actions)(Add);