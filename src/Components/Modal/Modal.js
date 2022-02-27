import { IntLink } from "../Buttons/Buttons";
import "./Modal.css";

export const Modal = ({ props, state }) => {
  return (
    <div className="container-modal">
      <div className="modal-wrapper">
        <button className="modal-close-btn" onClick={state}></button>
        <div className="modal-content">
          <h1>{props.title}</h1>
          {props.info.map((prop) => {
            return <p key={Math.random()}>{prop}</p>;
          })}
          <IntLink href="/contact">Contact</IntLink>
        </div>
      </div>
    </div>
  );
};
