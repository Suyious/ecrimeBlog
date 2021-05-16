import React, { useState } from 'react';
import BlogCard from './BlogCard';
import "./Content.css"
import {Blogs} from "./BlogsJSON"


function Content() {

    const [input, setInput] = useState("");

    return (
        <div className="Content">
            <form className="searchBar" action="">
                <input type="text" onChange={e=>setInput(e.target.value)} value={input}/>
                <button onClick={e=>e.preventDefault()}>Search</button>
            </form>
            {Blogs.filter(blog=>input==="" || blog.heading.includes(input)).map(blog => (
                <BlogCard key={blog.key} Title={blog.heading} body={blog.body} cardImg={blog.image}/>
            ))}
        </div>
    )
}

export default Content
