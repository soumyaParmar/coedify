import React from "react";
import { Link } from "react-router-dom";
import "./blogcard.css"
import { FiArrowRight } from "react-icons/fi";

function BlogsCard({ id, url, title, author}) {
    const style = {
        backgroundImage:`url(${url})`,
        backgroundSize:'cover',
        backgroundPosition: 'center center'
    }
  return (
    <><Link to="/blog1">
      <div className="blogCard">
        <div className="blog_detail" style={style}>
                
            <div className="blogTitle" >
                {title}    
            </div>   
            <div className="author" >
                {author} 
            </div>   
            <div className="tags">
                    <span>#JAVA</span>
                    <span>#MICROSERVICES</span>
                    <span>#SPRING BOOT</span>
                    <span>#CIRCUIT BREAKER</span>
            
            </div>   
        </div>
        <div className="blog_arrow">
            <FiArrowRight size={100} />
                Know More
        </div>          
      </div>
      </Link>
    </>
  );
}

export default BlogsCard;
