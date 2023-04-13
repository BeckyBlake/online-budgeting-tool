import './Budgets.css';
import Liquid_Lizard from '../assets/liquid_lizard.png';
import { useState } from 'react';
export default function About() {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <div>
            <h1 className="heading" style={{font: "bold 50px Avant Garde, Avantgarde, Century Gothic, CenturyGothic, AppleGothic, sans-serif"}}>
                Your Budgets
            </h1>

            <button className="budget-button" onClick={openModal}>Add Budget</button>

            {modalVisible && (
                <div className="modal">

                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="close" onClick={closeModal}>&times;</span>
                            <h2>Create a budget</h2>
                        </div>
                        <div className="modal-body">
                            <p>Budget creator goes here</p>
                        </div>
                        <div className="modal-footer">
                            <img alt="" src={Liquid_Lizard} width="130" style={{marginTop: "10px", marginLeft: "10px"} }></img>
                        </div>
                    </div>

                </div>
            )}
        </div>

    )


}