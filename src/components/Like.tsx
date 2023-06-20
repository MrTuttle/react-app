import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;

}

const Like = ({onClick}: Props) => {
  const [status, setStatus] = useState(true);

  const toggle = () => {
    setStatus(!status);
    onClick();
  }
  if (status) return <AiOutlineHeart color="red" size="2rem" onClick={toggle}/>;
  return <AiFillHeart size="2rem" onClick={toggle}/>;
};

export default Like;
