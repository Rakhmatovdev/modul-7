import { useDispatch, useSelector } from "react-redux";
import {

  removeKassa,
  updateKassa,
  updated,
} from "../redux/HisonSlice";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const Chiqim = () => {
  const { todo } = useSelector((state) => state);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleUpdate = (user) => {
    dispatch(updated(user));
    setShow(true);
  };
  return (
    <div className="container">
      <div className="card">
        <div className="d-flex justify-content-around p-3">
          <h1> Chiqim </h1>
          <MyModalc show={show} setShow={setShow} />
        </div>

        <div className="row p-2">
          <div className="col-1">#</div>
          <div className="col-3">Foydalanuvch</div>
          <div className="col-2">Miqdor</div>
          <div className="col-2">Kassa</div>
          <div className="col">Vaqt</div>
        </div>

        {todo?.list.map((user, index) => {
          return (
            <div className="row p-2 align-items-center" key={user.id}>
              <div className="col-1">{index + 1}</div>
              <div className="col-3">{user.name}</div>
              <div className="col-2">{user.miqdor?user.miqdor:0}$</div>
              <div className="col-2">{user.kassa}</div>
              <div className="col">{user.date?user.date:"####-##-##"}</div>
              <div className="col buttons d-flex gap-2">
                <button
                  className="col  btn btn-info"
                  onClick={() => handleUpdate(user)}
                >
                  ✏️
                </button>
                <button
                  className="col btn btn-danger"
                  onClick={() => dispatch(removeKassa(user.id))}
                >
                  ␡
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Chiqim;

export function MyModalc({ show, setShow }) {
  const dispatch = useDispatch();
  const { todo } = useSelector((state) => state);
  const [miqdor, setMiqdor] = useState("");
  const [date, setDate] = useState("");
  const [kassa, setKassa] = useState("");
  const [name, setName] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handelSubmit = () => {
    const newObj = {
      id: todo.update.id,
      name: todo.update.name,
      kassa: todo.update.kassa,
      date,
      miqdor,
    };
    dispatch(updateKassa(newObj));
    handleClose();
    setMiqdor("");
    setDate("");
    dispatch(updated({}));
  };
  return (
    <>
      <Button variant="btn btn-outline-info text-primary" onClick={handleShow}>
        +ADD
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Chiqim</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <select
            name="name"
            id="name"
            className="text-capitalize form-control form-check"
            value={todo.update ? todo.update.name : name}
            disabled={todo.update ? true : false}
            onChange={(e) => setName(e.target.value)}
          >
            {todo.list.map((user) => {
              return (
                <option
                  className=""
                  key={user.id}
                  
                  value={todo.update ? todo.update.name : user.name}
                >
                  {todo.update ? todo.update.name : user.name}
                </option>
              );
            })}
          </select>
          <select
          disabled={todo.update ? true : false}
            name="kassa"
            id="kassa"
            className="text-capitalize form-control"
            value={todo.update ? todo.update.kassa : kassa}
            onChange={(e) => setKassa(e.target.value)}
          >
            {todo.list.map((user) => {
              return (
                <option className="" key={user.id} value={todo.update?todo.update.kassa:user.kassa}>
                  {todo.update?todo.update.kassa:user.kassa}
                </option>
              );
            })}
          </select>
          <input
            type="number"
            className="form-control mt-3"
            placeholder="Miqdor..."
            value={miqdor}
            onChange={(e) => setMiqdor(e.target.value)}
          />
          <input
            type="date"
            className="form-control mt-3"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Yop
          </Button>
          <Button variant="primary" onClick={handelSubmit}>
            Saqla
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
