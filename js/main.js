let x = document.getElementById("viewDigitalReceipt");

function hide(){
    document.getElementById('viewDigitalReceipt').style.display = "none";
    document.getElementById('show').style.display = "none";

}

function hideshow(){
   
    if (document.getElementById('viewDigitalReceipt').style.display=="none"){
        document.getElementById('viewDigitalReceipt').style.display="block";
    } else {
        document.getElementById('viewDigitalReceipt').style.display="none";
    }

    if(document.getElementById('show').textContent == "View Order Summary"){
        document.getElementById('show').textContent = "Hide Order Summary";
    } else {
        document.getElementById('show').textContent = "View Order Summary";
    }
    
}

