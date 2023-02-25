import { useParams } from "react-router-dom";

export default function UserChildren() {
  const { id } = useParams();
  return <>user children: {id}</>;
}
