import React, { Component } from 'react'
import { Container, Row, Col, Table, Badge, Button } from 'reactstrap';


import * as actions from "./actions";
import { connect } from "react-redux";
import { detailMovie, loading } from "./selectors";


class Detail extends Component {

    componentDidMount() {
        const {movieId} = this.props.match.params;
        this.props.getDetailMovie(movieId);
    }

    fecthData() {
        const {loading} = this.props;

        if (loading) {
            return 'Loading'
        } else {
            return this.renderDetailMovie()
        }

    }

    renderDetailMovie() {
        const {detailMovie} = this.props
        
        return (
            <Row>
                <Col sm="4">
                    <img src={detailMovie.image} alt={detailMovie.title} width="100%"/>
                    <br/>
                    <br/>

                    <Button color="success" block onClick={() => this.props.addToFavorite(detailMovie.id)}>
                        Add to Favorite
                    </Button>   
                </Col>
                <Col sm="8">
                    <h1>Detail Movie</h1>

                    <Table>
                        <tr>
                            <td>Judul</td>
                            <td>{detailMovie.title}</td>
                        </tr>
                        <tr>
                            <td>Year</td>
                            <td>{detailMovie.year}</td>
                        </tr>
                        <tr>
                            <td>Rating</td>
                            <td><Badge color="success">{detailMovie.rate}</Badge></td>
                        </tr>
                        <tr>
                            <td>Sinopsis</td>
                            <td>{detailMovie.description}</td>
                        </tr>
                    </Table>
                </Col>
            </Row>
        )
    }

    render() {
            return (
            <Container>
                {this.fecthData()}
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    detailMovie: detailMovie(state),
    loading: loading(state)
});

export default connect(mapStateToProps, actions)(Detail);