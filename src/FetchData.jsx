import { useState } from "react";

export default function FetchData() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [post, setPost] = useState({});

  const handleClick = () => {
    setLoading(true);
    setError(false);
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        setPost(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  };
  return (
    <div>
      <p>{post?.title}</p>
      <p>{error && "errorです"}</p>
      <button onClick={handleClick}>{loading ? "...Loading" : "送信"}</button>
    </div>
  );
}

