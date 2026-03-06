function openBooking() {
    document.getElementById("bookingPopup").style.display = "block";
}

function closeBooking() {
    document.getElementById("bookingPopup").style.display = "none";
}

function showPrice(service) {
    let title = "";
    let price = "";

    if(service === "hair") {
        title = "Hair Styling";
        price = "Hair Cut: ₹500\nHair Coloring: ₹1500\nHair Spa: ₹1200";
    }

    if(service === "facial") {
        title = "Facial Treatment";
        price = "Basic Facial: ₹800\nGold Facial: ₹1500\nHydra Facial: ₹2500";
    }

    if(service === "makeup") {
        title = "Makeup Services";
        price = "Party Makeup: ₹2000\nBridal Makeup: ₹8000";
    }

    document.getElementById("serviceTitle").innerText = title;
    document.getElementById("servicePrice").innerText = price;
    document.getElementById("pricePopup").style.display = "block";
}

function closePrice() {
    document.getElementById("pricePopup").style.display = "none";
}

window.onclick = function(event) {
    if (event.target.classList.contains("popup")) {
        event.target.style.display = "none";
    }
}