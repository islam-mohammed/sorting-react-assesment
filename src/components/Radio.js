import React from 'react'

function Radio({onSortSelect}) {
  return (
    <div className="layout-row align-items-center justify-content-center mt-75">
      <label className="pr-10">Sort By</label>
      <input type="radio" data-testid="name" name="sort" onChange={()=>onSortSelect('name')}/>
      <label className="px-4">Name</label>
      <input type="radio" data-testid="age" name="sort" onChange={()=>onSortSelect('age')}/>
      <label className="px-4">Age</label>
    </div>
  )
}

export default Radio
