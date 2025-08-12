let hamburger = document.querySelector("#hamburger");
let nav = document.querySelector(".navMenu");
let navLinks = document.querySelectorAll(".navMenu a");
let learnBtn = document.getElementById("learn-btn");

// toggle nav on click of Hamburger menu icon
// hamburger.addEventListener("click", () => {
//   nav.classList.toggle("nav-active");
//   // burger animation
//   hamburger.classList.toggle("toggle");
// });

// close nav by clicking on list items
Array.from(navLinks).forEach((li) =>
    li.addEventListener("click", () => {
        if (hamburger.classList.contains("toggle")) {
            hamburger.classList.remove("toggle");
        }
        if (nav.classList.contains("nav-active")) {
            nav.classList.remove("nav-active");
        }
    })
);

// Time and Date for open or closed
let openClosed = document.querySelector("#open-closed");
let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let date = new Date();
let day = date.getDay();
let hour = date.getHours();

const openOrClosed = (day, hour) => {
    if (day !== 0 && day !== 6){
        if (hour >= 9 && hour < 17) {
            console.log("hi")
            openClosed.innerText = `${week[day]}, Open Today`;
        } else if (day === 1 && (hour >= 8 && hour < 17)) {
            console.log("hi")
            openClosed.innerText = `${week[day]}, Open Today`;
        } else {
            openClosed.innerText = `${week[day]}, Closed After Hours`;
        }
    } else {
        openClosed.innerText = `${week[day]}, Closed Today`;
    }
}

openOrClosed(day, hour);

// Telephone add dashes and re-insert innertText

// document.getElementById("msgForm").addEventListener("submit", (e) => {
//   e.preventDefault();
// })

// Materialize Functions for Select, Datgepicker, and Modal
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    M.Datepicker.init(elems, {
        format: 'mm/dd/yyyy',
        yearRange: [1940, new Date().getFullYear()],
        defaultDate: new Date(2000, 0, 1),
        setDefaultDate: true
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {
        "preventScrolling": true,
        "dismissible": false,
        "inDuration": 400
    });
});

const allowedMimeTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

const allowedExtensions = ['.pdf', '.doc', '.docx'];

function getFileExtension(filename) {
    return filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 1).toLowerCase();
}

function isValidFile(file) {
    if (!file) return false;

    const extension = '.' + getFileExtension(file.name);
    const isMimeValid = allowedMimeTypes.includes(file.type);
    const isExtensionValid = allowedExtensions.includes(extension);

    return isMimeValid || isExtensionValid;
}

