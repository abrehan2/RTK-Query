// IMPORTS -
import { FormEvent, useState } from "react";
import PostCard from "./components/PostCard";
import { useGetPostsQuery, useNewPostMutation } from "./redux/api";

const App = () => {
  const { isLoading, data } = useGetPostsQuery("");
  const [newPost] = useNewPostMutation();
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const post: Post = {
      title,
      body,
      userId: Math.random() * 1000,
      id: Math.random() * 1000,
    };

    newPost(post);
    setTitle("");
    setBody("");
  };

  return (
    <>
      <div>
        <h1>My App!</h1>

        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />

          <button type="submit">Add</button>
        </form>

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data?.map((i) => <PostCard post={i} key={i.id} />)
        )}
      </div>
    </>
  );
};

export default App;
