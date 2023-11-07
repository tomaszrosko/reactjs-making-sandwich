import React, {useEffect, useState} from 'react';

function Order(props) {


  const [cost, setCost] = useState(0)
  const [order, setOrder] = useState([])
  useEffect(() => {
    if (props.newSandwich) {
      setOrder(renderOrder => [...renderOrder, props.newSandwich])
    }
  }, [props.newSandwich])
  useEffect(() => {
    let costAll = order.reduce((sum, sandwich) => sum + sandwich.cost, 0)
    setCost(costAll)
  }, [order]);

  const removeSandwich = (indx) => {
      let myOrder = order.filter((sandwich, index) => index !== indx);
      setOrder(myOrder);
  }

  return (
    <div>
      <h2>Złóż zamówienie</h2>{order.map((sandwich, index) => {
      return (
        <div key={index} className={"row-order"}>
          <h3>{index + 1}: {sandwich.size} kanapka
            (ilość dodatków: {sandwich.accessories.length})
            &nbsp; | &nbsp;
            {(sandwich.cost / 100).toFixed(2)}zł
          </h3>
          <div className="btn-order" onClick={() => removeSandwich(index)}>x</div>
        </div>
      )
    })}<p>----------</p>
      <p>Do zapłaty: {(cost / 100).toFixed(2)}zł</p>
    </div>
  )
}

export default Order;
