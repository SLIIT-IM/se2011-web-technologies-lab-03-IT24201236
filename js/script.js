
let storeName = "Campus Tech Store";
let year = 2026;

console.log(storeName);
console.log(year);


let welcomeButton = document.getElementById("welcomeBtn");
let welcomeMessage = document.getElementById("welcomeMessage");

if (welcomeButton) {
    welcomeButton.onclick = function () {
        welcomeMessage.textContent = "Welcome to Campus Tech Store! Enjoy student-friendly technology deals.";
        welcomeMessage.style.color = "#1d4d7a";
    };
}


let productTable = document.getElementById("productTable");
let productCount = document.getElementById("productCount");

if (productTable && productCount) {
    let totalRows = productTable.rows.length - 1;
    productCount.textContent = totalRows;
}


let discountButton = document.getElementById("discountBtn");
let priceInput = document.getElementById("priceInput");
let discountResult = document.getElementById("discountResult");

if (discountButton) {
    discountButton.onclick = function () {
        let price = Number(priceInput.value);
        
        if (price > 0) {
            let discount = price * 0.10;
            let finalPrice = price - discount;
            discountResult.textContent = "Discount: Rs. " + discount.toFixed(2) + " | Final Price: Rs. " + finalPrice.toFixed(2);
            discountResult.style.color = "green";
        } else {
            discountResult.textContent = "Please enter a valid product price.";
            discountResult.style.color = "red";
        }
    };
}

let offersButton = document.getElementById("offersBtn");
let offersMessage = document.getElementById("offersMessage");

if (offersButton) {
    offersButton.onclick = function () {
        offersMessage.textContent = "Special student offer active: Free delivery and selected item discounts are available today.";
        offersMessage.style.color = "#cc8400";
    };
}


let products = ["Laptop", "Headphones", "Smart Watch", "USB Flash Drive"];
let searchButton = document.getElementById("searchBtn");
let searchInput = document.getElementById("searchInput");
let searchResult = document.getElementById("searchResult");

if (searchButton) {
    searchButton.onclick = function () {
        let userInput = searchInput.value.toLowerCase();
        let found = false;
        
        for (let i = 0; i < products.length; i++) {
            if (products[i].toLowerCase() === userInput) {
                found = true;
                break;
            }
        }
        
        if (found) {
            searchResult.textContent = " Product found in the store list.";
            searchResult.style.color = "green";
        } else {
            searchResult.textContent = "Sorry, this product is not in the current store list.";
            searchResult.style.color = "red";
        }
    };
}

let contactForm = document.getElementById("contactForm");
let formMessage = document.getElementById("formMessage");

if (contactForm) {
    contactForm.onsubmit = function (event) {
        event.preventDefault();
        
        let fullName = document.getElementById("fullname").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let message = document.getElementById("message").value.trim();
        
        // Check 1: All fields filled
        if (fullName === "" || email === "" || phone === "" || message === "") {
            formMessage.textContent = " Please fill in all fields before submitting.";
            formMessage.style.color = "red";
        }
        // Check 2: Email must include @
        else if (!email.includes("@")) {
            formMessage.textContent = " Please enter a valid email address (must contain @).";
            formMessage.style.color = "red";
        }
        // Check 3: Phone number at least 10 characters
        else if (phone.length < 10) {
            formMessage.textContent = " Phone number should contain at least 10 characters.";
            formMessage.style.color = "red";
        }
        // Check 4: Message at least 10 characters (TASK D)
        else if (message.length < 10) {
            formMessage.textContent = " Message should be at least 10 characters long.";
            formMessage.style.color = "red";
        }
        // All validations passed
        else {
            formMessage.textContent = "Form submitted successfully! Thank you for contacting us.";
            formMessage.style.color = "green";
            
          
        }
    };
}

window.onload = function () {
    if (welcomeMessage) {
        welcomeMessage.textContent = " Page loaded successfully! Click the buttons below to interact with the website.";
        welcomeMessage.style.color = "green";
    }
    console.log("Campus Tech Store - Page fully loaded!");
};


//  TASK A: DARK MODE TOGGLE 
let themeButton = document.getElementById("themeBtn");

if (themeButton) {
    themeButton.onclick = function () {
        document.body.classList.toggle("dark-mode");
        
        // Change button text based on mode
        if (document.body.classList.contains("dark-mode")) {
            themeButton.textContent = " Light Mode";
            themeButton.style.backgroundColor = "#0d3a5a";
        } else {
            themeButton.textContent = " Dark Mode";
            themeButton.style.backgroundColor = "#1d4d7a";
        }
    };
    
}

// ---------- TASK B: LIVE CLOCK ----------
function updateClock() {
    let clockElement = document.getElementById("clock");
    if (clockElement) {
        let now = new Date();
        clockElement.textContent = "Current Time: " + now.toLocaleTimeString();
    }
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Call immediately when page loads

// ---------- TASK C: SHOW ALL PRODUCTS BUTTON ----------
let showProductsBtn = document.getElementById("showProductsBtn");
let productListDisplay = document.getElementById("productListDisplay");

if (showProductsBtn) {
    showProductsBtn.onclick = function () {
       
        productListDisplay.innerHTML = "";
        
        for (let i = 0; i < products.length; i++) {
            productListDisplay.innerHTML += "<li> " + products[i] + "</li>";
        }
        
        // Add total count at the end
        productListDisplay.innerHTML += "<li style='margin-top: 10px; font-weight: bold; background-color: #1d4d7a; color: white;'>Total Products: " + products.length + "</li>";
    };
}

if (themeButton) {
    themeButton.onclick = function () {
        document.body.classList.toggle("dark-mode");
        
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            themeButton.textContent = " Light Mode";
        } else {
            localStorage.setItem("darkMode", "disabled");
            themeButton.textContent = "Dark Mode";
        }
    };
}

console.log("All JavaScript features loaded successfully!");