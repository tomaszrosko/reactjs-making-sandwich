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
    <div className={"box-order"}>
      <ul className={"order-details"}>Paragon:
        {order.map((sandwich, index) => {
          return (
            <li key={index}>
              <p>{index + 1}: {sandwich.size} kanapka
                (ilość dodatków: {sandwich.accessories.length})
                &nbsp; | &nbsp;
                {(sandwich.cost / 100).toFixed(2)}zł
                <span className="btn-remove" onClick={() => removeSandwich(index)}>x</span>
              </p>

            </li>
          )
        })}
      </ul>
      <span className={"to-pay"}>Do zapłaty: {(cost / 100).toFixed(2)}zł</span>
    </div>
  )
}

export default Order;
