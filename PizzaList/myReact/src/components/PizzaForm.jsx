import { useState } from "react";
import { addPizza } from "../pizza/PizzaSlice";
import { connect, useSelector } from "react-redux";


const PizzaForm = ({ addPizza }) => {
  const [turi, setTuri] = useState("odatiy");
  const [hajmi, setHajmi] = useState("kichik");
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const handlerPizza = () => {
    let narx = 30;
    if (hajmi == "katta") {
      narx = 50000 * count;
    } else if (hajmi == "orta") {
      narx = 40000 * count;
    } else {
      narx = 30000 * count;
    }
    const newPizza = {
      id: Date.now(),
      img: "https://img.freepik.com/premium-photo/isolated-pizza-with-mushrooms-olives_219193-8149.jpg?size=626&ext=jpg",
      turi,
      hajmi,
      count,
      narx,
    };
    addPizza(newPizza);
    setHajmi("kichik")
    setCount(0)
    setTuri("odatiy")

  };  
  return (
    <>
      <button
        className="btn btn-info text-white"
        onClick={() => setShow((prev) => !prev)}
      >
        {show ? "Hidden" : "Show"}
      </button>
      {show && <div>
      <h1 className="text-center">Pizza turini tanlang</h1>
      <div className="list-group">
        <h3 className="text-center">Naxlar</h3>
        <div className="list-group-item bg-light mt-2 text-primary">
          Kichkina 30.000 so'm
        </div>
        <div className="list-group-item bg-light mt-2 text-primary">
          O'rtacha 40.000 so'm
        </div>
        <div className="list-group-item bg-light mt-2 text-primary">
          Katta 50.000 so'm
        </div>
      </div>
      <form className="form-control">
        <label>
          <select
            onChange={(e) => setTuri(e.target.value)}
            className="form-control form-select w-100"
            value="odatiy"
          >
            <option className="form-option" value="odatiy">
              Odatiy
            </option>
            <option value="pishloqli">Pishloqli</option>
            <option value="kabobli">Kabobli</option>
            <option value="goshli">Go'shli</option>
            <option value="kolbasali">Kalbasali</option>
            <option value="qazili">Qazili</option>
          </select>
        </label>
        <br />
        <label>
          <select
            onChange={(e) => setHajmi(e.target.value)}
            className="form-control form-select mt-3 w-100"
            value="kichik"
          >
            <option value="kichik">
              Kichkina
            </option>
            <option value="orta">O'rtacha</option>
            <option value="katta">Katta</option>
          </select>
        </label>
        <br />
        <label>
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            className="form-control mt-2"
          />
        </label>
        <br />
        <label>
          <button
            type="button"
            className="btn btn-success mt-2 w-100"
            onClick={handlerPizza}
            data-bs-toggle="modal" data-bs-target="#exampleModal"
          >
            Buyurtma qilish{" "}
          </button>
        </label>
      </form>
      
      </div>}
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    addPizza: (param) => dispatch(addPizza(param)),
  };
}
export default connect((state) => state, mapDispatchToProps)(PizzaForm);
