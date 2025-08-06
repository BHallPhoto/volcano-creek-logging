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

// let cleaninput = document.getElementById("clean-air-input");
// let formElement = document.getElementById("contact");
// if (cleaninput) {
//   cleaninput.addEventListener("change", (e) => {
//     if (e.target.checked) {
//       this.__toggle = !this.__toggle;
//       let eTarget = 
//       formElement.classList.toggle("hidden");
//     }
//   });
//   console.log("exists and checked");
// } else {
//   console.log("does not exists");
// }

const buttons = document.querySelectorAll('.app-btn');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const ele = document.getElementById('content');
        const newDiv = document.createElement('div');
        newDiv.innerHTML =  
        `
            <form action="#" method="POST" class="application-form">
                <div class="row two-form-field">
                    <div class="input-field col s12 two-form-field-div">
                        <input id="first-name" type="text" class="validate" name="first-name" required>
                        <label for="first-name">First Name</label>
                    </div>
                    <div class="input-field col s12 two-form-field-div">
                        <input id="last-name" type="text" class="validate" name="last-name" required>
                        <label for="last-name">Last Name</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="address" type="text" class="validate" name="address" required>
                        <label for="address">Address</label>
                    </div>
                </div>
                <div class="row two-form-field">
                    <div class="input-field col s12 two-form-field-div">
                        <input id="city" type="text" class="validate" name="city" required>
                        <label for="city">City</label>
                    </div>
                    <div class="input-field col s12 display-fix">
                        <select id="state" name="state" required> 
                                    <option value="" class="select-color" disabled selected>Select State</option>
                                    <option value="AL">Alabama (AL)</option>
                                    <option value="AK">Alaska (AK)</option>
                                    <option value="AZ">Arizona (AZ)</option>
                                    <option value="AR">Arkansas (AR)</option>
                                    <option value="CA">California (CA)</option>
                                    <option value="CO">Colorado (CO)</option>
                                    <option value="CT">Connecticut (CT)</option>
                                    <option value="DE">Delaware (DE)</option>
                                    <option value="DC">District Of Columbia (DC)</option>
                                    <option value="FL">Florida (FL)</option>
                                    <option value="GA">Georgia (GA)</option>
                                    <option value="HI">Hawaii (HI)</option>
                                    <option value="ID">Idaho (ID)</option>
                                    <option value="IL">Illinois (IL)</option>
                                    <option value="IN">Indiana (IN)</option>
                                    <option value="IA">Iowa (IA)</option>
                                    <option value="KS">Kansas (KS)</option>
                                    <option value="KY">Kentucky (KY)</option>
                                    <option value="LA">Louisiana (LA)</option>
                                    <option value="ME">Maine (ME)</option>
                                    <option value="MD">Maryland (MD)</option>
                                    <option value="MA">Massachusetts (MA)</option>
                                    <option value="MI">Michigan (MI)</option>
                                    <option value="MN">Minnesota (MN)</option>
                                    <option value="MS">Mississippi (MS)</option>
                                    <option value="MO">Missouri (MO)</option>
                                    <option value="MT">Montana (MT)</option>
                                    <option value="NE">Nebraska (NE)</option>
                                    <option value="NV">Nevada (NV)</option>
                                    <option value="NH">New Hampshire (NH)</option>
                                    <option value="NJ">New Jersey (NJ)</option>
                                    <option value="NM">New Mexico (NM)</option>
                                    <option value="NY">New York (NY)</option>
                                    <option value="NC">North Carolina (NC)</option>
                                    <option value="ND">North Dakota (ND)</option>
                                    <option value="OH">Ohio (OH)</option>
                                    <option value="OK">Oklahoma (OK)</option>
                                    <option value="OR">Oregon (OR)</option>
                                    <option value="PA">Pennsylvania (PA)</option>
                                    <option value="RI">Rhode Island (RI)</option>
                                    <option value="SC">South Carolina (SC)</option>
                                    <option value="SD">South Dakota (SD)</option>
                                    <option value="TN">Tennessee (TN)</option>
                                    <option value="TX">Texas (TX)</option>
                                    <option value="UT">Utah (UT)</option>
                                    <option value="VT">Vermont (VT)</option>
                                    <option value="VA">Virginia (VA)</option>
                                    <option value="WA">Washington (WA)</option>
                                    <option value="WV">West Virginia (WV)</option>
                                    <option value="WI">Wisconsin (WI)</option>
                                    <option value="WY">Wyoming (WY)</option>
                        </select>
                        <label for="state">State</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="email" type="email" class="validate" name="email" required>
                        <span class="helper-text" data-error="wrong" data-success="right">Verify</span>
                        <label for="email">E-Mail</label>
                    </div>
                </div>
                <div class="row two-form-field">
                    <div class="input-field col s12 two-form-field-div">
                        <input id="tel" type="tel" class="validate" name="tel" required>
                        <label for="tel">Telephone</label>
                    </div>
                    <div class="input-field col s12 two-form-field-div">
                        <input id="birthday" type="text" class="datepicker" name="birthday" required>
                        <label for="birthday">Birthday</label>
                    </div>
                </div>
        
                <div class="row">
                    <div class="input-field col s12">
                        <div class="file-field input-field">
                            <div class="btn">
                                <span>Resume</span>
                                <input id="fileInput" type="file" accept="application/*">
                            </div>
                                <div class="file-path-wrapper">
                                <input class="file-path validate" type="text" placeholder="Upload in .PDF .DOC or .DOCX format">
                                
                            </div>
                            <span id="fileVerify" class="helper-text" data-error="wrong" data-success="right"></span>
                        </div>
                    </div>
                </div>
        
                <div class="input-field center">
                    <button class="btn waves-effect waves-light" type="submit" for="msgForm">Submit</button>
                </div>
            </form>
        `;
        ele.appendChild(newDiv);
    })
})

// const btn = document.getElementById('btn');
//     function appendHTML(){

//     }
// btn.addEventListener('click', appendHTML);