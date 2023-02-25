import { useParams } from "react-router-dom";

export default function PostSegment() {
  const { id } = useParams();
  return <>post segment: {id}</>;
}
