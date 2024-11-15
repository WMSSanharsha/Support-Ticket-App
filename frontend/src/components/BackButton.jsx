import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function BackButton({ url }) {
  return (
    <Link className="btn btn-reverse btn-back" to={url}>
      <FaArrowCircleLeft /> Back
    </Link>
  );
}

export default BackButton;
