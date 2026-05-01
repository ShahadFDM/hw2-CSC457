/* --- REQUIREMENT 5: DYNAMIC HOMEPAGE ELEMENT (onload) --- */
window.onload = function(){
    var newParagraph = document.createElement("p");
    var currentDate = new Date();
    var textMessage = document.createTextNode("Page loaded on:" + currentDate.toString());
    var footerElement = document.querySelector("footer");
    newParagraph.appendChild(textMessage);
    if(footerElement)
        footerElement.appendChild(newParagraph);
};

/* --- REQUIREMENT 4: EVENT HANDLING ON CV PAGE (addEventListener) --- */
var quoteElement = document.querySelector("blockquote");
if(quoteElement){
    quoteElement.addEventListener("mouseover", function(){
        quoteElement.style.backgroundColor = "#dbe6f9";
        quoteElement.style.fontStyle = "italic";
        quoteElement.style.fontWeight = "bold";
        quoteElement.style.transition = "all 0.3s ease";
    });

    quoteElement.addEventListener("mouseout", function(){
        quoteElement.style.backgroundColor = "";
        quoteElement.style.fontStyle = "normal";
        quoteElement.style.fontWeight = "normal";
    });
}

/* --- REQUIREMENT 3: DOM MANIPULATION ON PROJECTS PAGE (onclick) --- */
function toggleDetails(containerId, clickedButton){
    var detailsElement = document.getElementById(containerId);

    if(detailsElement.style.display === "none"){
       detailsElement.style.display = "block";
       clickedButton.innerText = "Show Less"; 
    }
    else {
        detailsElement.style.display = "none";
        clickedButton.innerText = "Show More"; 
    }
}

/* --- REQUIREMENT 2: FORM VALIDATION ON CONTACT PAGE (onsubmit) --- */
function validateForm(event) {
    var nameValue = document.getElementById("userName").value;
    var emailValue = document.getElementById("userEmail").value;

    if( nameValue === "" || emailValue === ""){
        alert("Please fill out all required fields.");

        /*It PREVENTS the form from actually submitting!*/
        event.preventDefault();
    }
    else {
        /*do nothing*/
    }
}