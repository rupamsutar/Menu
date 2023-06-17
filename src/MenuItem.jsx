import React from 'react'

const MenuItem = ({img, title, price, desc}) => {
  return (
    <article>
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <div className="item-price">${price}</div>
        </header>

        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
}

export default MenuItem