[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=23777898&assignment_repo_type=AssignmentRepo)
# SE2011---Web-Technologies---Lab-03

# Lab Sheet 03 – JavaScript for Website Interactivity

**Module:** IT1100 – Internet and Web Technologies  
**Topic:** JavaScript Basics and DOM Interactions  
**Duration:** 2 Hours  
**Type:** Self-guided lab sheet  
**Important:** This lab sheet continues from **Lab Sheet 01 (HTML)** and **Lab Sheet 02 (CSS)**. You must use the same website and make all JavaScript changes on top of that existing code. The **final task of this lab** must also be done on top of the **final task answer from Lab Sheet 02**.

---

## 1. Learning outcomes

By the end of this lab, you should be able to:

- create and connect an external JavaScript file
- understand what JavaScript does in a web page
- use variables, functions, events, conditions, arrays, loops, and DOM manipulation
- access HTML elements using JavaScript
- change text and styles dynamically
- validate simple form inputs
- create interactive features for an existing website
- continue the same website from HTML to CSS to JavaScript in a connected way

---

## 2. What you will do in this lab

In the first lab, you created the website structure using HTML.  
In the second lab, you styled the website using CSS.  
In this third lab, you will make the same website **interactive** using JavaScript.

You will continue the same **Campus Tech Store** website and add features such as:

- welcome message
- button click events
- product count display
- discount calculation
- form validation
- dynamic offer display
- interactive product search
- advanced final task features

This means students will now see that HTML gives the structure, CSS gives the appearance, and JavaScript gives the behavior.

---

## 3. Before you start: what is JavaScript?

JavaScript is the programming language used to make web pages interactive.

HTML creates the page structure.  
CSS styles the page.  
JavaScript makes the page respond to actions.

For example, JavaScript can:

- respond to button clicks
- show messages
- check form input
- update page content without reloading
- calculate values
- hide or show parts of the page
- change styles dynamically

So in this lab, you will not create a new website.  
You will improve the same website you already built.

---

## 4. Project folder you should already have

From the first two labs, your project should already look like this:

```text
IWT_Lab_01  
│  
├── src  
│   ├── images  
│   │   ├── logo.png  
│   │   └── hero.jpg  
│   ├── styles  
│   │   └── styles.css  
│   ├── js  
│   └── index.html


```
Now, for this JavaScript lab, create this new file inside the `js` folder:

```text
IWT_Lab_01/src/js/script.js

```

## 5. Step 1 – Create the JavaScript file

Inside the `js` folder, create a file named:

```text
IWT_Lab_01/src/js/script.js

```
## 6. Step 2 – Link the JavaScript file to `index.html`

Open your current `index.html`.

Add this line just before the closing `</body>` tag:

### HTML:

```html
</div>  

<script src="js/script.js"></script>  
</body>  
</html>



```
### Explanation

### Why do we add the `<script>` tag?

Because the browser must know which JavaScript file to load.

### Why do we place it before `</body>`?

Because the HTML should load first.  
Then JavaScript can safely access those HTML elements.

### Why `src="js/script.js"`?

Because the file is inside the `js` folder.

---

## 7. Step 3 – Update the existing HTML for JavaScript features

Before writing JavaScript, we need to add a few small elements to the current HTML from Lab 02.

These changes must be made on top of the **Lab 02 final task answer**.

---

## 8. Updated HTML additions
Make the following changes to your current `index.html`.

### 8.1 Add a welcome button and a message area in the Home section

Inside the `home` section, below the hero image, add:

### HTML:

```html
<button id="welcomeBtn">Click for Welcome Message</button>
<p id="welcomeMessage"></p>

```

### Why do we add these?

- The button will allow the user to click and trigger JavaScript.
- The paragraph will display the message.

---

### 8.2 Add a product count display and discount area in the Products section

Below the table, add:

### HTML:

```html
<p><strong>Total Products:</strong> <span id="productCount">0</span></p>  

<label for="priceInput">Enter Product Price:</label><br>  
<input type="number" id="priceInput" placeholder="Enter price"><br><br>  

<button id="discountBtn">Calculate 10% Student Discount</button>  
<p id="discountResult"></p>

```
### Why do we add these?

* `productCount` will show how many products are in the table.
* `priceInput` lets the user enter a number.
* `discountBtn` will calculate a discount.
* `discountResult` will show the answer.

---

### 8.3 Add a search feature in the Products section

Below the discount section, add:

### HTML:

```html
<label for="searchInput">Search Product:</label><br>  
<input type="text" id="searchInput" placeholder="Type product name"><br><br>  
<button id="searchBtn">Search</button>  
<p id="searchResult"></p>



```

### Why do we add this?

Because we want a more advanced feature where JavaScript checks whether a product exists.

---

### 8.4 Add a button for showing offers in the Student Offers section

Inside the `offers` section, below the ordered list, add:

### HTML:

```html
<button id="offersBtn">Show Special Offer Message</button>  
<p id="offersMessage"></p>

```
### 8.5 Add IDs to the contact form and submit button

Change this:

### HTML:

```html
<form class="contact-form" id="contactForm">


```
### Why do we add IDs?

Because JavaScript can access elements more easily when they have IDs.

---

### 8.6 Add an area for form feedback

Below the submit button, add:

### HTML:

```html
<p id="formMessage"></p>



```

## 10. Step 4 – Write your first JavaScript code

Open `script.js` and type:

### JavaScript:

```javascript
alert("Welcome to Campus Tech Store JavaScript Lab!");


```
### Explanation

### `alert()`

This shows a message box in the browser.

**Why do we use it first?**  
Because it is one of the simplest ways to confirm that JavaScript is working.

### Test it

Save both files and open `index.html`.  
If you see the alert, the JavaScript file is connected correctly.

After testing, you can remove that line or keep it commented later.

---

## 11. Step 5 – Use variables

Now replace the alert with this:

### JavaScript:

```javascript
let storeName = "Campus Tech Store";  
let year = 2026;  

console.log(storeName);  
console.log(year);


```
### Explanation

### What is a variable?

A variable stores data that JavaScript can use later.

### Why `let`?

Because `let` is used to create a variable whose value can change later.

### Why give names like `storeName`?

Because clear variable names make code easier to understand.

### What is `console.log()`?

It prints values into the browser console.

Open browser developer tools and check the console to see the output.

---

## 12. Step 6 – Add a click event for the welcome message

Now write:

### JavaScript:

```javascript
let welcomeButton = document.getElementById("welcomeBtn");
let welcomeMessage = document.getElementById("welcomeMessage");

welcomeButton.onclick = function () {
    welcomeMessage.textContent = "Welcome to Campus Tech Store! Enjoy student-friendly technology deals.";
};


```


### Explanation
document.getElementById("welcomeBtn")

This gets the HTML element with the ID welcomeBtn.

### Why do we use it?
Because JavaScript must first find the button before it can work with it.

`onclick`

This means what should happen when the user clicks the button.

function () { ... }

This is the block of code that runs when the click happens.

`textContent`

This changes the text inside an element.

Why do we use it?
Because we want to display a message inside the paragraph.

13. Step 7 – Count the number of products automatically

Add this code:


```html
let productTable = document.getElementById("productTable");
let productCount = document.getElementById("productCount");

let totalRows = productTable.rows.length - 1;
productCount.textContent = totalRows;


```
### Explanation
productTable.rows.length

This gives the total number of rows in the table.

### Why - 1?

Because the first row is the heading row.
We only want the product rows.

productCount.textContent = totalRows;

This displays the number inside the span.

So if there are 4 products, it will show 4.

14. Step 8 – Calculate 10% discount

Add this code:
```javascript
let discountButton = document.getElementById("discountBtn");
let priceInput = document.getElementById("priceInput");
let discountResult = document.getElementById("discountResult");

discountButton.onclick = function () {
    let price = Number(priceInput.value);

    if (price > 0) {
        let discount = price * 0.10;
        let finalPrice = price - discount;
        discountResult.textContent = "Discount: Rs. " + discount + " | Final Price: Rs. " + finalPrice;
    } else {
        discountResult.textContent = "Please enter a valid product price.";
    }
};

```
### Explanation
Number(priceInput.value)

### Input values come as text.

Why do we convert it to Number?
Because we want to do a mathematical calculation.

`if (price > 0)`

This checks whether the entered value is valid.

Why do we use an if statement?
Because JavaScript should only calculate when the input is correct.

`price * 0.10`

This calculates 10% of the price.

`price - discoun`t

This finds the final amount after discount.

### 15. Step 9 – Show a special offers message

Add this code:
```javascript
let offersButton = document.getElementById("offersBtn");
let offersMessage = document.getElementById("offersMessage");

offersButton.onclick = function () {
    offersMessage.textContent = "Special student offer active: Free delivery and selected item discounts are available today.";
};

```
### Explanation

This works like the welcome message button.

### Why do we do this?
Because students need practice using more than one button and event.

### 16. Step 10 – Search for a product using an array and loop

Now we make the lab a little more advanced.

Add this code:
```javascript
let products = ["Laptop", "Headphones", "Smart Watch", "USB Flash Drive"];

let searchButton = document.getElementById("searchBtn");
let searchInput = document.getElementById("searchInput");
let searchResult = document.getElementById("searchResult");

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
        searchResult.textContent = "Product found in the store list.";
    } else {
        searchResult.textContent = "Sorry, this product is not in the current store list.";
    }
};

```

### Explanation
### What is an array?

An array stores multiple values in one variable.

Example:
```javascript
let fruits = ["Apple", "Banana", "Orange"];
```
Why do we use an array here?
Because we have multiple product names.

Why use a loop?

Because JavaScript must check each product one by one.

for (let i = 0; i < products.length; i++)

This loop starts at index 0 and checks each product until the end.

Why toLowerCase()?

Because we want the search to ignore uppercase and lowercase differences.

For example:

Laptop
laptop
LAPTOP

All should still match.

Why use found = false first?

Because before the search starts, we assume the product is not found.

Then if a match is found, it becomes true.

### 17. Step 11 – Validate the contact form

Now add form validation.

Type this code:
```javascript
let contactForm = document.getElementById("contactForm");
let formMessage = document.getElementById("formMessage");

contactForm.onsubmit = function (event) {
    event.preventDefault();

    let fullName = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    if (fullName === "" || email === "" || phone === "" || message === "") {
        formMessage.textContent = "Please fill in all fields before submitting.";
        formMessage.style.color = "red";
    } else if (phone.length < 10) {
        formMessage.textContent = "Phone number should contain at least 10 characters.";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "Form submitted successfully!";
        formMessage.style.color = "green";
    }
};
```

### Explanation
`onsubmit`

This runs when the form is submitted.

`event.preventDefault()`

Normally, a form tries to submit and reload the page.

### Why do we stop that?
Because in this lab we only want to validate and show a message.

`.trim()`

This removes extra spaces from the beginning and end.

### Why do we use it?
Because a field that contains only spaces should still count as empty.

`===`

This checks exact equality.

`||`

This means OR.

### Why do we use it?
Because if even one field is empty, the form should not continue.

`formMessage.style.color`

This changes the message color using JavaScript.

### Why do we do this?
Because red is useful for errors and green is useful for success.

### 18. Step 12 – Make the page more dynamic when it loads

Now add this:
```javascript
window.onload = function () {
    document.getElementById("welcomeMessage").textContent = "Page loaded successfully. Click buttons below to interact with the website.";
};
```

### Explanation
`window.onloa

This runs when the whole page finishes loading.

### Why do we use it?
Because it is useful when we want something to happen automatically when the page opens.

### 19. Full script.js code

Here is the full JavaScript file.

```javascript 
let storeName = "Campus Tech Store";
let year = 2026;

console.log(storeName);
console.log(year);

let welcomeButton = document.getElementById("welcomeBtn");
let welcomeMessage = document.getElementById("welcomeMessage");

welcomeButton.onclick = function () {
    welcomeMessage.textContent = "Welcome to Campus Tech Store! Enjoy student-friendly technology deals.";
};

let productTable = document.getElementById("productTable");
let productCount = document.getElementById("productCount");

let totalRows = productTable.rows.length - 1;
productCount.textContent = totalRows;

let discountButton = document.getElementById("discountBtn");
let priceInput = document.getElementById("priceInput");
let discountResult = document.getElementById("discountResult");

discountButton.onclick = function () {
    let price = Number(priceInput.value);

    if (price > 0) {
        let discount = price * 0.10;
        let finalPrice = price - discount;
        discountResult.textContent = "Discount: Rs. " + discount + " | Final Price: Rs. " + finalPrice;
    } else {
        discountResult.textContent = "Please enter a valid product price.";
    }
};

let offersButton = document.getElementById("offersBtn");
let offersMessage = document.getElementById("offersMessage");

offersButton.onclick = function () {
    offersMessage.textContent = "Special student offer active: Free delivery and selected item discounts are available today.";
};

let products = ["Laptop", "Headphones", "Smart Watch", "USB Flash Drive"];

let searchButton = document.getElementById("searchBtn");
let searchInput = document.getElementById("searchInput");
let searchResult = document.getElementById("searchResult");

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
        searchResult.textContent = "Product found in the store list.";
    } else {
        searchResult.textContent = "Sorry, this product is not in the current store list.";
    }
};

let contactForm = document.getElementById("contactForm");
let formMessage = document.getElementById("formMessage");

contactForm.onsubmit = function (event) {
    event.preventDefault();

    let fullName = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    if (fullName === "" || email === "" || phone === "" || message === "") {
        formMessage.textContent = "Please fill in all fields before submitting.";
        formMessage.style.color = "red";
    } else if (phone.length < 10) {
        formMessage.textContent = "Phone number should contain at least 10 characters.";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "Form submitted successfully!";
        formMessage.style.color = "green";
    }
};

window.onload = function () {
    document.getElementById("welcomeMessage").textContent = "Page loaded successfully. Click buttons below to interact with the website.";
};

```
20. Small CSS improvements for JavaScript features

Because this is now a more advanced lab, it is better to style the new buttons and result areas too.

Add the following at the bottom of your existing styles.css file:
```css 
button {
    background-color: #1d4d7a;
    color: white;
    border: none;
    padding: 10px 18px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 8px;
    margin-bottom: 10px;
}

button:hover {
    background-color: #163a5b;
}

#welcomeMessage,
#discountResult,
#offersMessage,
#searchResult,
#formMessage {
    margin-top: 10px;
    font-weight: bold;
}

#priceInput,
#searchInput {
    width: 100%;
    padding: 10px;
    margin-top: 6px;
    margin-bottom: 10px;
    border: 1px solid #bbbbbb;
    border-radius: 4px;
    box-sizing: border-box;
}

```
### Explanation

We already have styles for the form fields, but now we also have extra text boxes and buttons outside the form.
## So we style them too.

21. Check your work

### After saving the files, open index.html and test the following:

- the page loads normally
- the welcome message area shows a message on page load
- the welcome button changes the message
- the total product count shows correctly
- the discount button calculates a 10% discount
- the offers button displays an offer message
- the search button checks whether a product exists
- the form shows validation messages
- buttons look styled
- 22. Common mistakes and fixes
- Problem: JavaScript is not working

 ### Check:

- did you create script.js inside the js folder?
- did you link it correctly?

```javascript
<script src="js/script.js"></script>

```
- did you place the script tag before </body>?
- Problem: Button click does nothing

### Check:

- does the button have the correct ID?
- does JavaScript use exactly the same ID?
- did you save the file?
- Problem: Product count is wrong

### Check:

- did you give the table this ID?
- id="productTable"
- did you remember that one row is the heading row?
- Problem: Form validation does not show

###  Check:

- did you add id="contactForm" to the form?
- did you add <p id="formMessage"></p>?
- did you use event.preventDefault()?
# 23. Final task for the second hour

This final task must be done on top of the Lab 02 final task answer and the JavaScript work you completed in this lab.

## This final task is more advanced.

You must extend the same website further.

# Final Task – Advanced JavaScript Improvements

Add the following new features to the same website.

### Task A – Add a dark mode toggle button

Add a button near the top of the page that lets the user switch between normal mode and dark mode.

### HTML to add

Place this inside the header, below the paragraph:
```javascript
<button id="themeBtn">Toggle Dark Mode</button>

```
JavaScript idea

### When the button is clicked:

add a class called dark-mode to the body
if already added, remove it
CSS to add

```css
.dark-mode {
    background-color: #121212;
    color: #f1f1f1;
}

.dark-mode .container {
    background-color: #1e1e1e;
}

.dark-mode header,
.dark-mode #offers,
.dark-mode .contact-form {
    background-color: #2b2b2b;
    color: #f1f1f1;
}

.dark-mode nav {
    background-color: #000000;
}

.dark-mode .product-table th {
    background-color: #333333;
}

.dark-mode .product-table td,
.dark-mode .product-table tr {
    color: #f1f1f1;
}

.dark-mode a {
    color: #8ec8ff;
}

```
### JavaScript sample

```javascript
let themeButton = document.getElementById("themeBtn");

themeButton.onclick = function () {
    document.body.classList.toggle("dark-mode");
};

```
## Task B – Add a live clock in the footer

Show the current time that updates every second.

### HTML to add

Inside the footer, add:
```javascript
<p id="clock"></p>
JavaScript sample
function updateClock() {
    let now = new Date();
    document.getElementById("clock").textContent = "Current Time: " + now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();


```
### Why do we use a function here?

Because we want to reuse the same code every second.

### Why setInterval()?

Because it repeats the function again and again after a fixed time.

### Task C – Add a button to display all product names
HTML to add

Below the search feature, add:
```javascript
<button id="showProductsBtn">Show All Product Names</button>
<ul id="productListDisplay"></ul>


```
### JavaScript sample

```javascript
let showProductsBtn = document.getElementById("showProductsBtn");
let productListDisplay = document.getElementById("productListDisplay");
```

``` html
showProductsBtn.onclick = function () {
    productListDisplay.innerHTML = "";

    for (let i = 0; i < products.length; i++) {
        productListDisplay.innerHTML += "<li>" + products[i] + "</li>";
    }
};

```
### Why innerHTML = "" first?

Because we want to clear old content before adding the list again.

### Why use a loop?

Because we want to display every product in the array.

### Task D – Improve form validation further

## Add these extra checks:

`email must include @`

message must be at least 10 characters long

## Sample updated logic

```javascript
if (fullName === "" || email === "" || phone === "" || message === "") {
    formMessage.textContent = "Please fill in all fields before submitting.";
    formMessage.style.color = "red";
} else if (!email.includes("@")) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "red";
} else if (phone.length < 10) {
    formMessage.textContent = "Phone number should contain at least 10 characters.";
    formMessage.style.color = "red";
} else if (message.length < 10) {
    formMessage.textContent = "Message should be at least 10 characters long.";
    formMessage.style.color = "red";
} else {
    formMessage.textContent = "Form submitted successfully!";
    formMessage.style.color = "green";
}

