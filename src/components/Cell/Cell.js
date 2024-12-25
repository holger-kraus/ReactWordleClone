import React from 'react';

function Cell({content}) {
  console.log(content);
  return <span className={content.result+ ' cell'}>{content.letter}</span>;
}
export default Cell;
