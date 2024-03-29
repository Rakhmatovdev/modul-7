// style
import { useState } from "react";
import "./Modal.css";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../reducer/Reducer";

function Modal({ closeModal, edite,setEdite }) {
  const [inputValue, setInputValue] = useState({
    id: Date.now(),
    name: "",
    lname: "",
    telefon: null,
    lavozim: "User",
    daraja: "Junior",
  });

  const dispatch = useDispatch();

  //add
  const handleAdd = () => {
    if (edite) {
      dispatch(updateTodo(inputValue));
    closeModal()
    } else {
      dispatch(addTodo(inputValue));
    }
    setEdite(false)
    closeModal();
  };

  return (
    <div className="modal-backdrop1">
      <div className="modal1">
        <div className="navbar">
          <div className="logo h3">Modal</div>
          <div className="icon btn h3 btn-outline-dark" onClick={closeModal}>
            x
          </div>
        </div>
        <form>
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Name..."
            value={inputValue.name}
            onChange={(e) =>
              setInputValue((prew) => ({ ...prew, name: e.target.value }))
            }
          />
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Familya..."
            value={inputValue.lname}
            onChange={(e) =>
              setInputValue((prew) => ({ ...prew, lname: e.target.value }))
            }
          />
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Telefon..."
            value={inputValue.telefon}
            onChange={(e) =>
              setInputValue((prew) => ({ ...prew, telefon: e.target.value }))
            }
          />
          <select
            name="Lavozim"
            className="form-control mt-2 form-select"
            value={inputValue.lavozim}
            onChange={(e) =>
              setInputValue((prew) => ({ ...prew, lavozim: e.target.value }))
            }
          >
            <option value="User">User</option>
            <option value="Jamoa-Sardori">Jamoa Sardori</option>
            <option value="Developer">Developer</option>
            <option value="Admin">Admin</option>
            <option value="Teacher">Teacher</option>
          </select>
          <select
            name="Daraja"
            className="form-control mt-2 form-select"
            value={inputValue.daraja}
            onChange={(e) =>
              setInputValue((prew) => ({ ...prew, daraja: e.target.value }))
            }
          >
            <option value="Junior">Junior</option>
            <option value="Middle">Middle</option>
            <option value="Senior">Senior</option>
          </select>
          <div className="buttons mt-2 gap-3 d-flex">
            <button
              type="button"
              className="btn btn-outline-info"
              onClick={handleAdd}
            >
              ADD
            </button>
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
