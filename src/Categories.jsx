import React from 'react'

const Categories = ({categories, filterItems}) => {
  return (
    <div className="btn-container">
        {categories.map((category) => {
            return (
                <button onClick={() => filterItems(category)} className="btn" type="button" key={category}>{category}</button>
            )
        })}
    </div>
  )
}

export default Categories