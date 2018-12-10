import React, { Component } from 'react'
import { Container, Row, Table } from 'reactstrap';

import * as actions from "./actions";
import { connect } from "react-redux";
import { favorites, loading } from "./selectors";

class Favorite extends Component {

    componentDidMount() {
        this.props.getFavorites()
    }

    renderFavorites() {
        const {favorites} = this.props

        return (
            <Row>
                <Table>
                    <thead>
                        <tr>
                            <td>Judul</td>
                            <td>Tanggal ditambahkan</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        favorites.map(item => (
                            <tr key={item.id}>
                                <td>{item.movie.title}</td>
                                <td>{item.created_at}</td>
                                <td>Hapus</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </Row>
        )
        }

    render() {

        const {loading} = this.props; 

        if(loading) {
            return <Container>Loading</Container>
        }

        return (
            <Container>
                {this.renderFavorites()}
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    favorites: favorites(state),
    loading: loading(state)
});

export default connect(mapStateToProps, actions)(Favorite);
