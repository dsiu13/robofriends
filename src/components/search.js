import React from 'react';

const search = ({ searchbox, searchChange }) => (
  <div className='pa2'>
    <input className='pa3 ba b--green bg-lightest-blue'
       type='search'
       onChange={ searchChange }
       placeholder='search robots'/>

  </div>

)

export default search;
