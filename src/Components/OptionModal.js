import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOpt}
        onRequestClose={props.handleSelectedOpt}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className= "modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOpt && <p className="modal__body">{props.selectedOpt}</p>}
        <button className="button" onClick={props.handleSelectedOpt}>Okay!</button>
    </Modal>
);

export default OptionModal;