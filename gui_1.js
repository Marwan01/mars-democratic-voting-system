var text
var candidates = [];
var votes = [1, 3, 10]

$(document).ready( () => {
    $('#addButton, #deleteButton').click(function () {
        if (this.id == 'addButton') {
            var candidateName = $("#inputBox").val();
            addCandidate(candidateName);
        }
        else if (this.id == 'deleteButton') {
            var candidateName = $("#inputBox").val();
            deleteCandidate(candidateName);
        }
     });
} );




function performRotation(onElement)
{
	//alert("You clicked me!");
	
	onElement.css("transform", "rotate(90deg)");
	

}

function addCandidate(candidate) {

    if(candidates.includes(candidate)) {
        var userResponse = prompt(candidate + " already exists in the list. Would you like to reset the vote counts? enter y for yes or anything else to cancel");
        if(userResponse === "y") {
            votes[i] = 0;
            // to work on later
        }
    }
    else {
        if(candidate !== "") {
            candidates.push(candidate)
            $("table").append("<tr><td>" +candidate+ "</td></tr>")
            console.log("candidate: "+ candidate + " has been added.")
            $('#inputBox').val("");
        }          
    }        
}

function deleteCandidate(candidate) {

    if(candidates.includes(candidate)) {
        var candidateIndex = candidates.indexOf(candidate);
        candidates.splice(candidateIndex, 1);
        document.getElementById("candidatesTable").deleteRow(candidateIndex);
        console.log("candidate: "+ candidate + " has been removed.")
        $('#inputBox').val("");
    }  
    else {
        console.log("candidate not found")
        alert("candidate " + candidate + " was not found in the list.")
        $('#inputBox').val("");
    }      
}

function getUserInput() {
    if($("#addButton").click())
    var candidateName = $("#inputBox").val();
    return candidateName
}

function save() {
    
    
    $("#addButton").click();
}


