var text
var candidates = ["Ali", "Ahmed", "Omar"];
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
            $('#inputBox').val("");
        }
     });
} );



var container = $("inputBox");
$("table").append("<tr><td>candiate one hardcoded yaay</td></tr>")




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













    // var found = true;
    // for(i = 0; i < candidates.length; i++ ) {
    //     if(candidate == candidates[i]) {
    //         found = true;
    //         var userResponse = prompt(candidate + " already exists in the list. Would you like to reset the vote counts? enter y for yes or anything else to cancel");
    //         if(userResponse === "y") {
    //             votes[i] = 0;
    //         }
            
    //     }
    //     else {
    //         found = false;
    //     }
    // }      
    // if(candidate !== "" && !found) {
    //     candidates.push(candidate)
    //     $("table").append("<tr><td>" +candidate+ "</td></tr>")
    //     console.log("candidate: "+ candidate + " has been added.")
    //     $('#inputBox').val("");
    // }          
}

function getUserInput() {
    if($("#addButton").click())
    var candidateName = $("#inputBox").val();
    return candidateName
}

function save() {
    
    
    $("#addButton").click();
}


