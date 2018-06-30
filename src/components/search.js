import React from 'react';

const search = ({ searchfield, searchChange }) => (
  <div className='pa2'>
    <input className='pa3 ba b--green bg-lightest-blue'
       type='search'
       onChange={ searchChange }
       placeholder='search robots'/>

  </div>

)

export default search;
