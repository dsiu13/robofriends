import React from 'react';

const search = ({ searchBox, searchChange }) => (
  <div className='pa2'>
    <input className='tc pa3 ba b--green bg-lightest-blue'
       type='search'
       onChange={ searchChange }
       placeholder='search robots'/>

  </div>

)

export default search;
