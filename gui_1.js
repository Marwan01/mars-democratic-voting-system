var text
var candidates = ["Ali", "Ahmed", "Omar"];


$(document).ready( () => {
    $('#addButton, #deleteButton').click(function () {
        if (this.id == 'addButton') {

            var candidateName = $("#inputBox").val();
                if(candidateName !== "") {
                addCandidate(candidateName);
                $('#inputBox').val("");
            }
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
    candidates.push(candidate)
        $("table").append("<tr><td>" +candidate+ "</td></tr>")
        console.log("candidate "+ candidate + " has been added.")
}

function getUserInput() {
    if($("#addButton").click())
    var candidateName = $("#inputBox").val();
    return candidateName
}

function save() {
    
    
    $("#addButton").click();
}


