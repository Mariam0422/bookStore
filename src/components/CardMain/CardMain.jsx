import React from "react";
import "./index.css";
const CardMain = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        if(!item.cover_i){
            return null
        }
          const title = item?.title || "No Title"; 
        return (
        <div className="mainCard" key={index}>
            <img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`} alt="imageBook"/>
            <h3> {title.length > 25 ? `${title.slice(0,25)}...` : title}</h3>
        </div>
    );
      })}
    </>
  );
};

export default CardMain;
