import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardFooter, Button, Badge } from 'reactstrap';
import { Link } from "react-router-dom";


const CardList = ({item,...other}) => {
    return (
        <div className="col-lg-4 col-md-4 col-md-4 col-4 mb-5">
            <Card>
                <CardImg top width="100%" src={item.image} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{item.title}</CardTitle>
                    <CardSubtitle>
                        <Badge color="success">Rating: {item.rate}</Badge>
                    </CardSubtitle>
                    <CardText></CardText>
                </CardBody>
                <CardFooter>
                    <Link to={`/detail/${item.id}`}>
                        <Button color="primary" block>
                            Show
                        </Button>   
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
};

export default CardList;