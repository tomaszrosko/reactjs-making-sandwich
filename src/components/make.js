import React, {useState, useEffect} from 'react';
import Date from '../data.json';

function Make(props) {

    const [accessories, setAccessories] = useState([]);
    const [cost, setCost] = useState(0);
    const [baza , setBaza] = useState(600);

    useEffect(() => {
        Date.map(accessor => {
            accessor.checked = accessor.cost === 0;
            return accessor;
        })
        setAccessories(Date)
    }, [])

    useEffect(()=> {
        setCost(  accessories.reduce((sum, accessor) => {
            return accessor.checked ? sum + accessor.cost : sum;
        }, baza))
    },[baza, accessories])


    const accessorChange = (accessor) => {
        setAccessories(
            accessories.map(el => {
                if (el.name === accessor.name) {
                    el.checked = !el.checked;
                }
                return el;
            })
        );
    }

    const changeSize = (size) => {
        setBaza(size);
    }

    const addProduct = () => {
        let size = 'Średnia';
        if (baza === 400) {
            size = "Mała"
        } else if (baza === 600 ) {
            size = "Średnia"
        } else {
            size = "Duża"
        }
      let sandwich = {size : size, cost: cost, accessories: []}
        accessories.forEach(accessor => {
            if (accessor.checked) sandwich.accessories.push(accessor);
        })
        props.getSandwich(sandwich);
        resetSandwich();
    }
    const resetSandwich = () => {
        accessories.forEach(accessor => {
            accessor.cost === 0 ? accessor.checked = true : accessor.checked = false;
        })
        setBaza(600);
    }


    return (
        <div className="make">
            <h2 className={"title"}>Zrób kanapkę</h2>
            <div className={"summary"}>Cena kanapki: {(cost / 100).toFixed(2)}zł</div>
            <div className={"roll"}>
                <img className={"size size-small " + (baza === 400 ? "changed" : '')} onClick={() => changeSize(400)} src={process.env.PUBLIC_URL + "/assents/img/" + "small" + ".png"}
                    alt="size"/>
                <img className={"size size-medium " + (baza === 600 ? "changed" : '')} onClick={() => changeSize(600)}
                src={process.env.PUBLIC_URL + "/assents/img/" + "average" + ".png"} alt="size"/>
                <img
                className={"size size-big " + (baza === 800 ? "changed" : '')} onClick={() => changeSize(800)} src={process.env.PUBLIC_URL + "/assents/img/" + "big" + ".png"} alt="size"/>
            </div>
          <div className={"box-btn"}>
            <button className={"btn-add"} onClick={() => addProduct()}>Dodaj</button>
          </div>

            <div className="accessories">
                {accessories.map((accessories, index) => {
                    return (
                        <div key={index} className="accessories__box">
                            <input type="checkbox" checked={accessories.checked}
                                onChange={() => accessorChange(accessories)}/>
                          <div className={"accessories__box--content"}>
                            <img className={"accessories__img"}
                                 src={process.env.PUBLIC_URL + "/assents/img/" + accessories.name + ".png"}
                                 title={accessories.name} alt={accessories.name} width={accessories.width} height={accessories.height}/>
                            <p>{accessories.name}</p>
                          </div>
                          {accessories.cost === 0 ? <p>darmo</p> :
                            <p>{(accessories.cost / 100).toFixed(2)}zł</p>}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Make;
