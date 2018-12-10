import React, { Component } from 'react'
import CardList from '../../components/Card/CardList'
import { Container, Row, CardDeck, Button } from 'reactstrap';
import { Link } from "react-router-dom";


import * as actions from "./actions";
import { connect } from "react-redux";
import { getMovies } from "./selectors";

class Home extends Component {

    componentDidMount = () => {
        this.props.syncMovies();
    };

    renderList = () => {
        const { movies } = this.props;

        if (movies) {
            return movies.map(item => (
                <CardList
                    key={item.id}
                    item={item}
                />
            
            ))
        } 
    }

    render() {

        return (
            <Container>
                <Row>
                    <Link to='/add'>
                        <Button color="primary" block>
                            Add New Movie
                        </Button>   
                    </Link>
                    <br/>
                    <br/>
                    <CardDeck>
                        {this.renderList()}
                    </CardDeck>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    movies: getMovies(state),
});

export default connect(mapStateToProps, actions)(Home);