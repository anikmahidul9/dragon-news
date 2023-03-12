import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaEye, FaSave, FaShareAlt, FaStar, FiSave } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";

const NewsCardSummery = ({ news }) => {
  const { _id, author, image_url,rating, details, title,total_view } = news;
  return (
    <div>
      <Card className="mb-5">
        <Card.Header as="h5" className=" d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <Image
            className="me-2"
              roundedCircle
              style={{ height: "60px" }}
              variant="top"
              src={author.img}
            />
            <div>
              <p className="mb-0">{author.name}</p>
              <small>{author.published_date}</small>
            </div>
          </div>
          <div>
            <BsFillBookmarkFill className="me-2"></BsFillBookmarkFill>
            <FaShareAlt />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length > 250 ? (
              <p>
                {details.slice(0, 250) + "..."}
                <Link to={`/news/${_id}`}>See more</Link>
              </p>
            ) : (
              details
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer as='h5' className="d-flex justify-content-between mb-0">
              <div className="d-flex ">
                <FaStar className="text-warning me-2"></FaStar>
                <p>{rating.number}</p>
              </div>
              <div className="d-flex ">
                <FaEye className="me-2"></FaEye>
                <p>{total_view}</p>
              </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCardSummery;
