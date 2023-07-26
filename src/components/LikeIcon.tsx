import { useState } from "react";
import { FcLikePlaceholder } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";

interface likeProps {
  onClick: () => void;
}

const LikeIcon = ({ onClick }: likeProps) => {
  const [status, setStatus] = useState(true);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <AiOutlineHeart onClick={toggle} />;
  return <FcLikePlaceholder onClick={toggle} />;
};
export default LikeIcon;
