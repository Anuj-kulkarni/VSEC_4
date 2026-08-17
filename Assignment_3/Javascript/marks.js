document.getElementById("Marks").addEventListener("submit", function(event){
  event.preventDefault(); // not to perfrom default action 

 let physics = parseInt(document.getElementById("Phy").value) || 0;
  let chemistry = parseInt(document.getElementById("chem").value) || 0;
  let maths = parseInt(document.getElementById("math").value) || 0;

  let total = maths + chemistry + physics;
  let percentage = (total / 300) * 100;

  document.getElementById("result").innerText = "Total Marks: " + total;
  document.getElementById("percentage").innerText = "Percentage: " + percentage.toFixed(2) + "%";

    let name = document.getElementById("username").value;
    let table = document.getElementById("t1");
    let row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = physics;
    row.insertCell(2).innerHTML = chemistry;
    row.insertCell(3).innerHTML = maths;
    row.insertCell(4).innerHTML = total;
    row.insertCell(5).innerHTML = percentage;

    document.getElementById("username").value = "";
    document.getElementById("Phy").value = "";
    document.getElementById("chem").value = "";
    document.getElementById("math").value = "";
    document.getElementById("result").value = "";
    document.getElementById("percentage").value = "";
 
});
