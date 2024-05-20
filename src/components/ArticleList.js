import React from "react";
import { Container, Row , Col } from 'react-bootstrap';
import ArticleCard from "./ArticleCard";

const ArticleList = ({articles}) => {
    return(
        <Container>
            <Row>
                {articles.map((article,index ) => (
                    <Col key={index} sm={12} md={6} lg={4}>
                        <ArticleCard article={article}></ArticleCard>
                    </Col>
                )
                )}
            </Row>
        </Container>
    )
}

export default ArticleList;
