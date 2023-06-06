import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsHeartFill, BsHeartbreakFill } from "react-icons/bs";

function CardItem(props) {
  const [addedToFav, setAddedToFav] = useState(false);
  return (
    <Card style={{ width: "18rem", background: "#32383e"}} className="text-light">
      <Card.Img variant="top" src={props.thumbnail} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.content}</Card.Text>
        <Button
          onClick={() => {
            setAddedToFav(!addedToFav);
          }}
          variant={(addedToFav ? "danger" : "primary")}
        >
          {addedToFav ? (
            <>
              <BsHeartbreakFill /> Remove Favourite
            </>
          ) : (
            <>
              <BsHeartFill /> Add Favourite
            </>
          )}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
