var text
var candidates = [];
var votes = []

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
    $("#candidatesTable tbody tr").live('click', function ()
    {
        $('#candidatesTable table td').eq(0).text(candidateName);
    });
} );

$(document).ready( () => {
    //check if the addButton or delete button is clicked
    $('#addButton, #deleteButton').click(function () {
        //if the addbutton is clicked
        if (this.id == 'addButton') {
            //get the canidantes name 
            var candidateName = $("#inputBox").val();
            //add candidates name to the array list
            addCandidate(candidateName);
        }
        //if the delete button is clicked
        else if (this.id == 'deleteButton') {            
            //get the canidantes name 
            var candidateName = $("#inputBox").val();
            //delete the candidate form the array
            deleteCandidate(candidateName);
        }
        //get the row that was clicked
    $("#candidatesTable tbody tr").live('click', function ()
    {
        // get the name of the candidate from the html
        $('#candidatesTable table td').eq(0).text(candidateName);
    });
     });
} );

function addCandidate(candidate) {
    //Check if the candidates already exists
    if(candidates.includes(candidate)) {
        //create pop up and get user input
        var userResponse = prompt(candidate + " already exists in the list. Would you like to reset the vote counts? enter y for yes or anything else to cancel");
        // if the candidates needs to be reset its votes do it.
        if(userResponse === "y") {
            //this line is worng
            votes[i] = 0;
            // to work on later
        }
    }
    else {
        //Check if candidates is not of valid input
        if(candidate !== "") {
            //add candidate to array list
            candidates.push(candidate)
            //add row to html table
            $("table").append("<tr><td>" +candidate+ "</td></tr>")
            console.log("candidate: "+ candidate + " has been added.")
            $('#inputBox').val("");
        }          
    }        
}

function deleteCandidate(candidate) {
    //check if candidates is in the array 
    if(candidates.includes(candidate)) {
        //get candidate index
        var candidateIndex = candidates.indexOf(candidate);
        //remove candidate from array
        candidates.splice(candidateIndex, 1);
        //delete html row
        document.getElementById("candidatesTable").deleteRow(candidateIndex);
        console.log("candidate: "+ candidate + " has been removed.")
        $('#inputBox').val("");
    }  
    else {
        //candidate is not in the array 
        console.log("candidate not found")
        alert("candidate " + candidate + " was not found in the list.")
        $('#inputBox').val("");
    }      
}

function performRotation(onElement)
{
	//alert("You clicked me!");
	
	onElement.css("transform", "rotate(90deg)");
	

}
