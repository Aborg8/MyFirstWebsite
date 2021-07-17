var infoDivs = document.getElementsByClassName ('infoDivs');
var contactInfoDiv = document.getElementById('contactInfo');

function displayInfo(index) {
    for (var i = 0; i < infoDivs.length; i++) {
        infoDivs[i].style.display = 'none';
    }

    infoDivs[index].style.display = 'block';
}

function showcontactInfo() {
    contactInfoDiv.style.display = 'block'
}

function hidecontactInfo() {
    contactInfoDiv.style.display = 'none'
}



//line 12-18 is what should be my issue? Otherwise line 2? //