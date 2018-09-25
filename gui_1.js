 var candidates = []; // store names of candidates
var votes = [] // keep track of the votes of every candidate
var voteCount = 0; // keep track of total num of votes
var candidateCount = 0; // keep count of table element indexes (also num of candidates)

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
     });
} );

// addcandidate takes in a candidate name which will be added to the table in view, the candidate array, and 
// will be able to be voted for. this function does not return anything.
function addCandidate(candidate) {
    //Check if the candidates already exists
    if(candidates.includes(candidate)) {
        //create pop up and get user input
        var userResponse = prompt(candidate + " already exists in the list. Would you like to reset the vote counts? enter y for yes or anything else to cancel");
        // if the candidates needs to be reset its votes do it.
        if(userResponse === "y") {
            voteCount -= votes[candidates.indexOf(candidate)]; // decrement the total vote count by the amount of votes the candidate had before resetting
            votes[candidates.indexOf(candidate)]=0; // reset the vote count to 0
            console.log("votes for candidate: " + candidate + " has been reset to 0");
            updateCss(); // update the css since this impacts the rest of the candidate's bars
            $('#inputBox').val("");
        }
    }
    else {
        //Check if candidates is not of valid input
        if(candidate !== "") {
            //add candidate to array list
            candidates.push(candidate)
            // add a cell in the votes array for the freshly added candidate, and set it to 0, 0 votes for this new candidate.
            votes.push(0)
            // add table element with variable id to be manipulated to select elements later.
            $("table").append("<tr><td id=\"" + candidateCount + "\"> <div>" +candidate+ "</div></td></tr>")
            console.log("candidate: "+ candidate + " has been added.")
            $('#inputBox').val(""); // empty out the input box
            $("#" + candidateCount).click( function() {  // call the vote function once an already added cell is clicked.
                    vote(this)
                });
                candidateCount++; // increment num of candidates
        }
        
    }        
}

// deleteCandidate takes in a string representing the name of the candidate to be deleted.
// it returns nothing, and performs the deletion of the candidate from the view
// taking into account resetting the votes and updating the total vote counts.
function deleteCandidate(candidate) {
    //check if candidates is in the array 
    if(candidates.includes(candidate)) {
        // var to hold the index of the found candidate
        var candidateIndex = candidates.indexOf(candidate); 
        //remove candidate from array
        voteCount = voteCount - votes[candidateIndex] // update total vote count by removing the old registered votes from the total.
        // candidates.splice(candidateIndex, 1);
        votes[candidateIndex] = 0; // set the votes for the deleted candidate to 0
        //delete html row
        document.getElementById("candidatesTable").deleteRow(candidateIndex);
        console.log("candidate: "+ candidate + " has been removed.")
        updateCss(); // update the css after performing a deletion since it will impact the votes
        $('#inputBox').val("");
    }  
    else {
        //candidate is not in the array 
        console.log("candidate not found")
        alert("candidate " + candidate + " was not found in the list.")
        $('#inputBox').val("");
    }      
}

// vote function takes in one argument denoting the clicked table element (td) and returns nothing.
// it updates the votes array for the corresponding candidates.
function vote(candidateId) {
    var candId = candidateId.id // get the id number of the selected/clicked td
    votes[candId]++; // increment the votes of the corresponding candidate'index
    voteCount++; // increment total vote count
    updateCss(); // update the css every time the vote function gets called 
}

// this function doesn't take any argument nor return anything.
// this function updates the css of ALL the elements of the table 
// simultaneously.
function updateCss() {
    for (var i = 0; i < candidates.length; i++) {   
        var percentOfVotes = (votes[i] / voteCount )*100; // new dimention of the width that the div contained in the td should be to reflect coloring/voting
        console.log("Now, " + candidates[i] + " has: " + percentOfVotes + "% of the votes")
        percentOfVotes = percentOfVotes + '%'; // add % to the string to indicate measure in % in css
        $('#'+i).children().css('width',percentOfVotes); // update the css of the div (child) of the td while looping over the indexes.
        $('#'+i).children().css('background-color','plum'); // set the color of the voted for candidate to plum
    }
    console.log("--------------------------")

}