import React from 'react';
import  {range}  from '../../utils.js'
import Cell from "../Cell";

function Row({word}) {
  return (
      <p className="guess">
        {
          range(5).map((index) => <Cell key={index} content={word && word[index] ? word[index] : {letter:''}}></Cell>)
        }
      </p>);
}

export default Row;
