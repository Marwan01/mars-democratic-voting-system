var text
var candidates = ["Ali", "Ahmed", "Omar"];

var container = $("inputBox");
$("table").append("<tr><td>candiate one hardcoded yaay</td></tr>")

for (var c in candidates) {
    $("table").append("<tr><td>" +candidates[c]+ "</td></tr>")
}