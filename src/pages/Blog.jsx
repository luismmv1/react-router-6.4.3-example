import { useLoaderData, Link } from "react-router-dom";

const Blog = () => {

    const { posts } = useLoaderData();
    console.log(posts);
    
    return (
        <>
            <input
                className="form-control-my-3"
                type="text"
            />
            <ul className="list-group">
                {posts.length > 0 ? (
                    posts.map((blog) => (
                        <li key={blog.id}>
                            <Link to={`/blog/${blog.id}`}>{blog.id} - {blog.title}</Link>
                        </li>
                    ))
                ) : (
                    <li>No blogs found</li>
                )}
            </ul>
        </>
    );
};
export default Blog;

export const loaderBlog = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) throw ({
        status: res.status,
        statusTex: "No encontrado",
    });
    const posts = await res.json();
    return { posts };
};