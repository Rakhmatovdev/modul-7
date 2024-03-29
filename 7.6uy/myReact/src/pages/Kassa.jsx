import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createKassa,
  removeKassa,
  updateKassa,
  updated,
} from "../redux/HisonSlice";

const Kassa = () => {
  const { todo } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const updatedKassa = (user) => {
    dispatch(updated(user));
    setShow(true);
  };
  return (
    <div className="container">
      <div className="card">
        <div className="d-flex justify-content-around p-3">
          <h1> Kassa</h1>
          <MyModal show={show} setShow={setShow} />
        </div>
        {todo.list.length > 0 && (
          <div className="row p-2">
            <div className="col-2">#</div>
            <div className="col-3">Foydalanuvch</div>
            <div className="col-3">Kassa</div>
          </div>
        )}

        {todo?.list.map((user, index) => {
          return (
            <div className="row p-2 align-items-center" key={user.id}>
              <div className="col-2">{index + 1}</div>
              <div className="col-3">{user.name}</div>
              <div className="col-3">{user.kassa}</div>
              <div className="col-1 buttons d-flex gap-2">
                <button
                  className="col btn btn-info"
                  onClick={() => updatedKassa(user)}
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

export default Kassa;

export function MyModal({ show, setShow }) {
  const dispatch = useDispatch();
  const { todo } = useSelector((state) => state);
  const [name, setName] = useState("");
  const [kassa, setKassa] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handelSubmit = () => {
    if (!todo.update.name) {
      const newObj = {
        id: Date.now(),
        name,
        kassa,
      };
      dispatch(createKassa(newObj));
      handleClose();
      setKassa("");
      setName("");
    } else {
      const newObj2 = {
        id: todo.update.id,
        name,
        kassa,
      };
      dispatch(updateKassa(newObj2));
      handleClose();
      setKassa("");
      setName("");
      dispatch(updated({}));
    }
  };
  return (
    <>
      <Button variant="btn btn-outline-info text-primary" onClick={handleShow}>
        +ADD
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            className="form-control mt-3"
            placeholder="Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="form-control mt-3"
            placeholder="Kassa..."
            value={kassa}
            onChange={(e) => setKassa(e.target.value)}
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
