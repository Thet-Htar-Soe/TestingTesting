import React from "react";
import { Card } from 'react-bootstrap';
import './../styles.css';

const ArticleCard = ({ article }) => {
    return (
        <Card classname="mb-3 h-50">
            <Card.Img variant="top" src={article.urlToImage} className="custom-card-img"/>
            <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
                <Card.Link href={article.url} target="_blank">Read More</Card.Link>
            </Card.Body>
        </Card>
            )
}

            export default ArticleCard;
