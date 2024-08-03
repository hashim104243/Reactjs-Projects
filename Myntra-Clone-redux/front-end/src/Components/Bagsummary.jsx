import React from 'react'
import { useSelector } from 'react-redux'
export default function Bagsummary() {

  const bagItemsids = useSelector((bag) => bag.bag);
  const item = useSelector(store => store.items);
  const bagItem = useSelector(store => store.bag);
  const finalItem = item.filter((item) => {
    const foundElement = bagItem.indexOf(item.id);
    return foundElement >= 0
  })
  const CONVENIENCE_FEES = 0
  let totalItem = bagItemsids.length;
  let totalMRP = 0;
  let totalDiscount = 0;


  finalItem.forEach(bagItem => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;


  return (
    <div>
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem}Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni" >PLACE ORDER</div>
      </button>
    </div>
  )
}
