import "./feeds.css";
import Share from "../share/Share";
import Post from "../Posts/post";
import { Posts } from "../../Users";

export default function Feeds() {
  return (
    <div className="feeds_container">
      <div className="feeds_wrapper">
        <Share />
        {Posts.map((p) => {
          return <Post key={p.id} posts={p} />;
        })}
      </div>
    </div>
  );
}
