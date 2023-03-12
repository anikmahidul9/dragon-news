import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData();
    const { image_url, details} = news;

    return (
        <>
        <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Text>
          {details}
          </Card.Text>
        </Card.Body>
      </Card>
      </>
    );
};

export default News;