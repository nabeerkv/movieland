import React from "react";

const CourseCard = ({ key, movie }) => {
    return (
        <div key={key} className="movie">

          <div>
            <p>{movie.topic}</p>
          </div>

          <div>
            <img src={movie.thumbnail !== "N/A" ? movie.thumbnail : "https://via.placeholder.com/400"} alt={movie.title} />
          </div>
          
          <div>
           <span>{movie.topic}</span>
           <h3>{movie.title}</h3>
          </div>

         </div>
    )
}

export default CourseCard;