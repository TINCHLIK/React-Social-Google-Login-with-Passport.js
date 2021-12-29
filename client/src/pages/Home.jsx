import Cart from "../components/Card";
import {posts} from "../data";

const Home = () => {
    return (
        <div className="home">
                {posts.map(post=>(
                    <Cart key={post.id} post={post}/>
                ))}
        </div>
    );
};

export default Home;