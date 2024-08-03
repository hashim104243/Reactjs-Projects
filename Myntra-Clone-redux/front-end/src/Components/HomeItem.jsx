import React from 'react'
import store from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { bagActions } from '../store/bagSlice';


export default function HomeItem({ item }) {
  const bagItems = useSelector((bag) => bag.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0
  console.log(item.id, elementFound);
  const dispatch = useDispatch();

  function handleBag() {
    dispatch(bagActions.addbages(item.id))
  }
  function handleRemove() {
    dispatch(bagActions.removebage(item.id))

  }

  return (
    <div>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          ${item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>

        {elementFound ? <button className="btn-add-bag btn btn-danger  " onClick={handleRemove}>remove bag</button> : <button className="btn-add-bag" onClick={handleBag}>Add to Bag</button>}


      </div>
    </div>
  )
}
