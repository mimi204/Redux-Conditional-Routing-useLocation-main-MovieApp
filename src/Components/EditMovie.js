import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { editMovie } from "../redux/actions";
// import { addMovie } from "../redux/actions";
import StarRating from "./StarRating";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const AddMovie = ({ oldMovie }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  //   const [edited, setEdited] = useState(oldMovie)
  // const [name, setName] = useState("");
  // const [imageUrl, setImageURL] = useState("");
  // const [date, setDate] = useState("");
  // const [rate, setRate] = useState(1);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    id: oldMovie.id,
    name: oldMovie.name,
    date: oldMovie.date,
    image: oldMovie.image,
    rating: oldMovie.rating,
  });
  // handle change in the form input
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  // handle rating
  const handleRate = (rate) => setForm({ ...form, rating: rate });
  return (
    <div>
      <button className="btn btn-primary" onClick={openModal}>
        Edit
      </button>
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // let editedMovie = {
            //   ...form,
            // };
            dispatch(editMovie(form));
            closeModal();
          }}
        >
          <label>Name</label>
          <input
            type="text"
            value={form.name}
            name="name"
            onChange={handleChange}
            // required
          />
          <label> Date of release </label>
          <input
            type="date"
            value={form.date}
            name="date"
            onChange={handleChange}
            // required
          />
          <label> Rating </label>
          <StarRating rate={form.rating} handleRating={handleRate} />

          <label>Image</label>
          <input
            type="url"
            value={form.image}
            name="image"
            onChange={handleChange}
            // required
          />
          <div>
            <button className="btn btn-primary" type="submit">
              Edit
            </button>
            <button className="btn btn-danger" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddMovie;
