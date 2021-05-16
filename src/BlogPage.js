import React from 'react'
import BlogCover from './BlogCover'

function BlogPage({Image, Title, body}) {

    return (
        <div className="BlogPage">
            <BlogCover BlogImg={Image} BlogTitle={Title}/>
            <div className="BlogBody boxwidth">
                <p>{body}</p>
            </div>
        </div>
    )
}

export default BlogPage
