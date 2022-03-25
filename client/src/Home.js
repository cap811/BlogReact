import {useState} from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'First blog', body: '...', author: 'Nick', id: 1},
        {title: 'Second blog', body: '...', author: 'Cap', id: 2},
        {title: 'Third blog', body: '...', author: 'Nick', id: 3}
    ]);

    return(
        <div className="home">
            <BlogList bloglist = {blogs} title = "All Blogs"/>
            <BlogList bloglist = {blogs.filter(blog => blog.author === 'Cap')} title = "Cap's Blogs"/>
            <BlogList bloglist = {blogs.filter(blog => blog.author === 'Nick')} title = "Nick's Blogs"/>
        </div>
    );
}

export default Home;