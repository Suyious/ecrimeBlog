import React from 'react'

function BlogCover({BlogImg, BlogTitle}) {
    return (
        <div className="ViewPager BlogCover">
            <img className="PagerImg" src={BlogImg} alt="cover"/>
            <div className="overlay"/>
            <div className="title">
                <h2>{BlogTitle}</h2>
            </div>
            <div className="gradient"></div>
        </div>
    )
}

export default BlogCover
