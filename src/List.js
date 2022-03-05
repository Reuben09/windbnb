import React from "react";
import { useState } from "react";
import GradeIcon from '@mui/icons-material/Grade';

export default function List({ list }) {
  return (
    <div className="list-card-container">
      {list.map((item) => {
        const { city, country, title, photo, type, rating, beds } = item;
        return (
          <div className='card-container'>
            <div className='image-container'>
            <img src={photo} alt='product' />
            </div>
            <div className='type-bed-container'>
            <div className='type-bed'>
              <p>{type}</p>
            <p>{beds} beds</p>
            </div>
            <p className='grade'>  <GradeIcon className='grade-icon'/>4.2</p>
            </div>
            <p className='title'>{title}</p>
          </div>
        );
      })}
    </div>
  );
}
