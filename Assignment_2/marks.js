document.getElementById("Marks").addEventListener("submit", function(event){
     event.preventDefault();

    let physics = parseInt(document.getElementById("Phy").value) || 0;
    let chemistry = parseInt(document.getElementById("chem").value) || 0;
    let maths = parseInt(document.getElementById("math").value) || 0;

    let total = maths + chemistry + physics;
    let percentage = (total / 300) * 100;

    document.getElementById("result").innerText="Total Marks: " + total ;
    document.getElementById("percentage").innerText="Percentage: " + percentage.toFixed(2) + "%" ;
});