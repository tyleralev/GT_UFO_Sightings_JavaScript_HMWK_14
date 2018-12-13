// from data.js
var tableData = data;

//selecting the submit button
var submit = d3.select("#filter-btn");

//action when button is clicked
submit.on("click", function() {
    console.log("ping");
    // prevent the page from refreshing
    d3.event.preventDefault();

    //Select the input element and get the raw HTML node
    inputElement = d3.select("#datetime");

    //Get the value property of the input element
    var inputValue = inputElement.property("value");

    //storring input and tableData to the console
    console.log(inputValue);
    console.log(tableData);


    //Filtering data based on an input
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    console.log(filteredData);

    //Getting a reference to the table body
    var tbody = d3.select("tbody");

    //Putting info into the website table
    filteredData.forEach((ufoData) => {
        var row = tbody.append("tr");
        console.log(filteredData);
        Object.entries(ufoData).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        }); 
    });
});

