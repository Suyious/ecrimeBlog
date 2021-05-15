import React from 'react';
import BlogCard from './BlogCard';
import "./Content.css"
import {Blogs} from "./BlogsJSON"


function Content() {
    return (
        <div className="Content">
            <form className="searchBar" action="">
                <input type="text"/>
                <button>Search</button>
            </form>
            {Blogs.map(blog => (
                <BlogCard Title={blog.heading} body={blog.body} cardImg={blog.image}/>
            ))}
        </div>
    )
}

export default Content
