import React from 'react';
import {connect} from 'react-redux';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const modalLookup = {
    LoginModal,
    RegisterModal
}

const mapState = (state) => ({
    currentModal: state.modals
})

const ModalManager = ({currentModal}) => {
    let renderModal;

    if(currentModal){
        const {modalType, modalProps} = currentModal;
        const ModalComponent = modalLookup[modalType];
    
        renderModal = <ModalComponent {...modalProps}/>
    }
    
    return (
        <span>{renderModal}</span>
    )
}
 
export default connect(mapState)(ModalManager);