import './Budgets.css';
import Liquid_Lizard from '../assets/liquid_lizard.png';
import { useState } from 'react';
export default function About() {

    // // Get the modal
    // var modal = document.getElementById("myModal");

    // // Get the button that opens the modal
    // var btn = document.getElementById("myBtn");

    // // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName("close")[0];

    // // When the user clicks on the button, open the modal
    // btn.onclick = function() {
    // modal.style.display = "block";
    // }

    // // When the user clicks on <span> (x), close the modal
    // span.onclick = function() {
    // modal.style.display = "none";
    // }

    // // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    // if (event.target === modal) {
    //     modal.style.display = "none";
    // }
    // }
    // return (
    //     <div>
    //         <h1 class="heading" style={{font: "bold 40px Avant Garde, Avantgarde, Century Gothic, CenturyGothic, AppleGothic, sans-serif"}}>
    //             Your Budgets
    //         </h1>

    //         {/* <button type="button" class="budget-button" data-toggle="modal" data-target="#exampleModal"> Add Budget </button> */} 
    //             <button class="budget-button" id="myBtn">Add Budget</button>


    //             <div id="myModal" class="modal">

    //             <div class="modal-content">
    //                 <div class="modal-header">
    //                     <span class="close">&times;</span>
    //                     <h2>Create a budget</h2>
    //                 </div>
    //                 <div class="modal-body">
    //                     <p>Some text in the Modal Body</p>
    //                     <p>Some other text...</p>
    //                 </div>
    //                 <div class="modal-footer">
    //                     <img alt="" src={Liquid_Lizard} width="130" style={{marginTop: "10px", marginLeft: "10px"} }></img>
    //                 </div>
    //             </div>

    //             </div>
    //     </div>

        
    // )
    const [modalVisible, setModalVisible] = useState(false);

const openModal = () => {
    setModalVisible(true);
};

const closeModal = () => {
    setModalVisible(false);
};

return (
    <div>
        <h1 className="heading" style={{font: "bold 40px Avant Garde, Avantgarde, Century Gothic, CenturyGothic, AppleGothic, sans-serif"}}>
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
                        <p>Some text in the Modal Body</p>
                        <p>Some other text...</p>
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