import './Budgets.css';
export default function About() {

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
    modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
    }
    return (
        <div>
            {/* <h1 class="heading" style={{font: "bold 40px Avant Garde, Avantgarde, Century Gothic, CenturyGothic, AppleGothic, sans-serif"}}>
                Your Budgets
            </h1>

            <button type="button" class="budget-button" data-toggle="modal" data-target="#exampleModal"> Add Budget </button> */}
                <button class="budget-button" id="myBtn">Add Budget</button>


                <div id="myModal" class="modal">

                <div class="modal-content">
                    <span class="close">&times;</span>
                    <p>Create a budget here</p>
                </div>

                </div>
        </div>

        
    )
}