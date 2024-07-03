import { API_BASE_URL } from "../config";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const WatchLecture = () => {
  const params = useParams();
  useEffect(() => {
    async function increaseViewCount() {
      await fetch(`${API_BASE_URL}/${params.id}/increaseViewCount`, {
        method: "PATCH",
      });
    }
    increaseViewCount();
  }, []);
  return <div>WatchLecture</div>;
};

export default WatchLecture;
