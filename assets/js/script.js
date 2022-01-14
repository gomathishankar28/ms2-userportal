var userData = [ 
    {  
        "emp_no":"10001",
        "fullname":"gomathi shankar",
        "mobile":"9600048330",
        "email": "gomsy@gmail.com"
     },
     {  
        "emp_no":"10002",
        "fullname":"samarth shankar",
        "mobile":"9600048331",
        "email": "samy@gmail.com"
     },
     {  
        "emp_no":"10003",
        "fullname":"akanksha shankar",
        "mobile":"9600048332",
        "email": "akay@gmail.com"
     },
     {  
        "emp_no":"10004",
        "fullname":"lakshman shankar",
        "mobile":"9600048333",
        "email": "laksh@gmail.com"
     },
]

var userdata_str = JSON.stringify(userData);
localStorage.setItem("userData", userdata_str); 

function renderUSerCards() {
    var mainDiv = document.querySelector('.usercards');
    if (mainDiv.childElementCount == 0) {
        for(var i = 0; i < userData.length; i++){
            var colDiv = document.createElement('div');
            colDiv.classList.add('col-md-6', 'col-lg-4', 'col-xl-3');
            var cardDiv = document.createElement('div');
            cardDiv.className = 'card';
            colDiv.append(cardDiv);
            var badges = document.createElement('p');
            badges.className = 'badge';
            var badgeText = userData[i].fullname.split(" ")[0].slice(0,1).toUpperCase() + userData[i].fullname.split(" ")[1].slice(0,1).toUpperCase();
            badges.innerHTML = badgeText;
            var emp_no = document.createElement('p');
            emp_no.className = 'emp_no';
            emp_no.innerHTML = userData[i].emp_no;
            var fullname = document.createElement('p');
            fullname.className = 'fullname';
            fullname.innerHTML = userData[i].fullname;
            var mobile = document.createElement('p');
            mobile.className = 'mobile';
            mobile.innerHTML = userData[i].mobile;
            var email = document.createElement('p');
            email.className = 'email';
            email.innerHTML = userData[i].email;
            var btns = document.createElement('p');
            btns.className = 'btn'
            btns.innerHTML = `<a data-toggle="modal" href="#edituser" onclick="return editUSerCard(this)">EDIT</a>
            <a onclick="deleteUserCard(this)">DELETE</a>`;
            cardDiv.append(badges, emp_no, fullname, mobile, email, btns); 
            console.log(cardDiv);
            mainDiv.appendChild(colDiv);
        }
    } 
}

function onFormSubmit() {
    var formData = getFormData();
    createUSerCard(formData);
    var oldItems = JSON.parse(localStorage.getItem('userData'));
    oldItems.push(formData);
    var userdata_str = JSON.stringify(oldItems);
    localStorage.setItem("userData", userdata_str); 
    console.log("")
}
function getFormData() {
    var formData = {};
    formData["emp_no"] = document.getElementById("emp_no").value;
    formData["fullname"] = document.getElementById("fname").value + " " + document.getElementById("lname").value;
    formData["mobile"] = document.getElementById("mobile").value;
    formData["email"] = document.getElementById("email").value;
    resetForm();
    return formData;
}
function createUSerCard(formData) {
    var mainDiv = document.querySelector('.usercards');
    var colDiv = document.createElement('div');
        colDiv.classList.add('col-md-6', 'col-lg-4', 'col-xl-3');
        var cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        colDiv.append(cardDiv);
        var badges = document.createElement('p');
        badges.className = 'badge';
        var badgeText = formData.fullname.split(" ")[0].slice(0,1).toUpperCase() + formData.fullname.split(" ")[1].slice(0,1).toUpperCase();
        badges.innerHTML = badgeText;
        var emp_no = document.createElement('p');
        emp_no.className = 'emp_no';
        emp_no.innerHTML = formData.emp_no;
        var fullname = document.createElement('p');
        fullname.className = 'fullname';
        fullname.innerHTML = formData.fullname;
        var mobile = document.createElement('p');
        mobile.className = 'mobile';
        mobile.innerHTML = formData.mobile;
        var email = document.createElement('p');
        email.className = 'email';
        email.innerHTML = formData.email;
        var btns = document.createElement('p');
        btns.className = 'btn'
        btns.innerHTML = `<a data-toggle="modal" href="#edituser" onclick="return editUSerCard(this)">EDIT</a>
        <a onclick="deleteUserCard(this)">DELETE</a>`;
        cardDiv.append(badges, emp_no, fullname, mobile, email, btns);
        console.log(cardDiv);
        mainDiv.appendChild(colDiv);
}

function onEditFormSubmit() {
    var formData = getEditFormData();
    console.log(formData);
    updateUSerCard(formData);
    renderUSerCards(userData);
}
function getEditFormData() {
    var formData = {};
    formData["emp_no"] = document.getElementById("eemp_no").value;
    formData["fullname"] = document.getElementById("efname").value + " " + document.getElementById("elname").value;
    formData["mobile"] = document.getElementById("emobile").value;
    formData["email"] = document.getElementById("eemail").value;
    return formData;
}



function resetForm() {
    document.getElementById("emp_no").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("email").value = "";
    
}
 
function editUSerCard(e) {
    var selected_card = e.parentElement.parentElement;
    document.getElementById("efname").value = selected_card.childNodes[2].innerHTML.split(" ")[0];
    document.getElementById("elname").value = selected_card.childNodes[2].innerHTML.split(" ")[1];
    document.getElementById("emobile").value = selected_card.childNodes[3].innerHTML;
    document.getElementById("eemail").value = selected_card.childNodes[4].innerHTML;
    document.getElementById("eemp_no").value = selected_card.childNodes[1].innerHTML;
    
 }


function updateUSerCard(formData) {
    console.log("updated");
    totalcards = document.getElementsByClassName('card');
    for (i=0; i < (totalcards-1); i++) {
        if (totalcards[i].getElementsByClassName('emp_no')[0].innerHTML === formData['emp_no'])
        {   
            totalcards[i].getElementsByClassName('fullname')[0].innerHTML = formData.fullname;
            totalcards[i].getElementsByClassName('mobile')[0].innerHTML = formData.mobile;
            totalcards[i].getElementsByClassName('email')[0].innerHTML = formData.email;
            totalcards[i].getElementsByClassName('badge')[0].innerHTML = formData.fullname.split(" ")[0].slice(0,1) + formData.fullname.split(" ")[1].slice(0,1);
        }
    
    }
}
function deleteUserCard(usercard) {
    if (confirm("Are you sure you want to delete this user?")) {
        usercard.parentElement.parentElement.remove();
    }  
}

