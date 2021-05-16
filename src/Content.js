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
                <button onClick={e=>e.preventDefault()}>
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2488 20.2467H21.3021L26.9554 25.9267C27.5021 26.4734 27.5021 27.3667 26.9554 27.9134C26.4088 28.4601 25.5154 28.4601 24.9688 27.9134L19.3021 22.2467V21.1934L18.9421 20.8201C17.0754 22.4201 14.5288 23.2467 11.8221 22.7934C8.11542 22.1667 5.15542 19.0734 4.70208 15.3401C4.00875 9.70006 8.75542 4.95339 14.3954 5.64672C18.1288 6.10006 21.2221 9.06006 21.8488 12.7667C22.3021 15.4734 21.4754 18.0201 19.8754 19.8867L20.2488 20.2467ZM7.30208 14.2467C7.30208 17.5667 9.98208 20.2467 13.3021 20.2467C16.6221 20.2467 19.3021 17.5667 19.3021 14.2467C19.3021 10.9267 16.6221 8.24672 13.3021 8.24672C9.98208 8.24672 7.30208 10.9267 7.30208 14.2467Z" fill="white"/>
                    </svg>
                </button>
            </form>
            {Blogs.filter(blog=>input==="" || blog.heading.includes(input)).map(blog => (
                <BlogCard param={blog.key} key={blog.key} Title={blog.heading} body={blog.body} cardImg={blog.image}/>
            ))}
        </div>
    )
}

export default Content
