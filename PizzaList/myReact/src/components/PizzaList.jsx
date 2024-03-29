import { connect, useSelector } from "react-redux";
import { deletePizza } from "../pizza/PizzaSlice";
import qr from "../assets/qrCode.jpg";
const PizzaList = ({ deletePizza }) => {
  const { pizza } = useSelector((state) => state);
  const downloadContent = () => {
    const content = pizza.list
      .map(
        (item) => `
       qrCode${qr}
        Tur: ${item.turi}
        Narx: ${item.narx} so'm
        Soni: ${item.count}
        Hajmi: ${item.hajmi}
      `
      )
      .join("\n\n");

    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");

    link.href = window.URL.createObjectURL(blob);
    link.download = "pizza_order.txt";
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };



  return (
    <>
         <h1 className="font-monospace text-center">PizzaList</h1>
      <div className=" d-flex flex-wrap gap-3">
        {pizza.list &&
          pizza.list.map((item) => {
            return (
              <div key={item.id} className="card" style={{ width: "18rem" }}>
                <img src={item.img} className="card-img-top" alt={item.turi} />
                <div className="card-body">
                  <h5 className="card-title text-capitalize text-center">
                    {item.turi}
                  </h5>
                  <p className="card-text text-capitalize">
                    Hajmi:{item.hajmi}
                  </p>
                  <p className="card-text">Narx:{item.narx}so'm</p>
                  <p className="card-text text-center">Soni:{item.count}</p>
                  <div className="buttons d-flex gap-5">
                    <button
                      className="btn btn-info text-light"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={downloadContent}
                    >
                      Harid qilish
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deletePizza(item)}
                    >
                      O'chirish
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
         
      </div>
    </>
  );
};
function mapDispatchToProps(dispatch) {
  return {
    deletePizza: (param) => dispatch(deletePizza(param)),
  };
}
export default connect((state) => state, mapDispatchToProps)(PizzaList);
