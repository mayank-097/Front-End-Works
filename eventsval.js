function displayContent() {
    var Ename = document.getElementById("name").value;
    var Estate = document.getElementById("state").value;
    var Ephone = document.getElementById("phone").value;
    var Eaadhar = document.getElementById("aadhar").value;
    var Epan = document.getElementById("PAN").value;
    var Eamount = document.getElementById("amount").value;

    if (Estate === "HARYANA") {
        var detailList = document.getElementsByName("northzone")[0];

        var newDetail = document.createElement("li");



        newDetail.textContent = Ename + " " + Estate + " " + Ephone + " " + Eaadhar + " " + Epan + " " + Eamount + " ";

        detailList.appendChild(newDetail);
    }
    
    if (Estate === "GUJARAT") {
        var detailList = document.getElementsByName("westzone")[0];

        var newDetail = document.createElement("li");



        newDetail.textContent = Ename + " " + Estate + " " + Ephone + " " + Eaadhar + " " + Epan + " " + Eamount + " ";

        detailList.appendChild(newDetail);
    }
    if (Estate === "KOLKATA") {
        var detailList = document.getElementsByName("eastzone")[0];

        var newDetail = document.createElement("li");



        newDetail.textContent = Ename + " " + Estate + " " + Ephone + " " + Eaadhar + " " + Epan + " " + Eamount + " ";

        detailList.appendChild(newDetail);
    }
    if (Estate === "MADHYA PRADESH") {
        var detailList = document.getElementsByName("centralzone")[0];

        var newDetail = document.createElement("li");



        newDetail.textContent = Ename + " " + Estate + " " + Ephone + " " + Eaadhar + " " + Epan + " " + Eamount + " ";

        detailList.appendChild(newDetail);
    }
    if (Estate === "KERALA") {
        var detailList = document.getElementsByName("southzone")[0];

        var newDetail = document.createElement("li");



        newDetail.textContent = Ename + " " + Estate + " " + Ephone + " " + Eaadhar + " " + Epan + " " + Eamount + " ";

        detailList.appendChild(newDetail);
    }
}




function checkName() {
    var name = /^[A-Za-z ]+$/;
    if (document.getElementById("name").value.match(name)) {
        return true;
    }
    else {
        document.getElementById("namespan").innerHTML = "Enter the valid Name";
        return false;
    }
}

function checkState() {
    var state = /^[A-Za-z ]+$/;
    if (document.getElementById("state").value.match(state)) {
        return true;
    }
    else {
        document.getElementById("statespan").innerHTML = "Enter the valid State";
        return false;
    }
}

function checkPhone() {
    var phoneno = /^\d{10}$/;
    if (document.getElementById("phone").value.match(phoneno)) {
        return true;
    }
    else {
        document.getElementById("phonespan").innerHTML = "Enter the valid Phone Number";
        return false;
    }
}

function checkAadhar() {
    var aadharno = /^\d{12}$/;
    if (document.getElementById("aadhar").value.match(aadharno)) {
        return true;
    }
    else {
        document.getElementById("aadharspan").innerHTML = "Enter the valid Aadhar Number";
        return false;
    }
}

function checkPAN() {
    var panno = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
    if (document.getElementById("PAN").value.match(panno)) {
        return true;
    }
    else {
        document.getElementById("PANspan").innerHTML = "Enter the valid PAN Number";
        return false;
    }
}

function checkAmount() {
    if (document.getElementById("amount").value > 0) {
        return true;
    }
    else {
        document.getElementById("amountspan").innerHTML = "Enter the valid Amount";
        return false;
    }
}