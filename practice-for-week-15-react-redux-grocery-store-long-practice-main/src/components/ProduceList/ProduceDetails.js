import { useDispatch } from "react-redux";
import { addCartItem } from "../../store/cart";

function ProduceDetails({ produce }) {
  // const count = 1;
  const dispatch = useDispatch();
  let cartItem = {};

  const handleClick = e => {
    e.preventDefault();

    const produceItem = produce.id;

    dispatch(addCartItem(produceItem));
  }
  
  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button onClick={handleClick}
          className={"plus-button" + (cartItem ? " selected" : "")}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;