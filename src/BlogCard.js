import React from 'react';

function BlogCard({cardImg, Title, body}) {
    return (
        <div className="BlogCard boxwidth">
            <div className="cardImg">
                <img className="cardCover" src={cardImg} alt=""/>
            </div>
            <div className="cardContent">
                <div className="cardheads">
                    <h2>{Title}</h2>
                    <p>{body.substr(0,500)}...</p>
                </div>
                <a href="//">Visit Blog ➜</a>
            </div>
        </div>
    )
}

export default BlogCard
