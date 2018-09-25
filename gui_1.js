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

function addCandidate(candidate) {
    //Check if the candidates already exists
    if(candidates.includes(candidate)) {
        //create pop up and get user input
        var userResponse = prompt(candidate + " already exists in the list. Would you like to reset the vote counts? enter y for yes or anything else to cancel");
        // if the candidates needs to be reset its votes do it.
        if(userResponse === "y") {
            voteCount -= votes[candidates.indexOf(candidate)];
            votes[candidates.indexOf(candidate)]=0;
            updateCss();
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

function deleteCandidate(candidate) {
    //check if candidates is in the array 
    if(candidates.includes(candidate)) {
        //get candidate candidateCount
        var candidateIndex = candidates.indexOf(candidate);
        //remove candidate from array
        voteCount = voteCount - votes[candidateIndex]
        candidates.splice(candidateIndex, 1);
        votes[candidateIndex] = 0;
        //delete html row
        document.getElementById("candidatesTable").deleteRow(candidateIndex);
        updateCss();
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

function vote(e) {
    // console.log(candidateCount)
    // console.log(votes[candidateCount-1])
    console.log(e.id)
    var candId = e.id 
    votes[candId]++;
    voteCount++;
    console.log(votes)
    updateCss();
}

function updateCss() {
    for (var i = 0; i < candidates.length; i++) {   

    var newd = (votes[i] / voteCount )*100;
    newd = newd + '%';
    $('#'+i).children().css('width',newd);
    $('#'+i).children().css('background-color','red');
    }
}