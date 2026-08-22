const express = require("express");
const app = express();

app.use(express.json());

let student = [
    {id:1, name: "Anuj", marks: 100},
    {id:2, name: "VPDK", marks: 99}
];

app.get("/Students", (req, res) => {
    res.send(student);
});

app.post("/addStudent", (req, res) => {
    student.push(req.body);

    res.json({
        message: "Student Added",
        student: req.body
    });
});

app.delete("/delete/:id", (req, res) =>{
    const id = Number(req.params.id);
    student = student.filter(s => s.id !== id);
        res.send("Student Deleted");
});

app.put("/Students/:id", (req, res) => {
    const id = Number(req.params.id);
    const student = student.find(s => s.id == id);

    if(student){
        student.name = req.body.name;
        student.marks = req.body.marks;

        res.send("Student Updated Succesfully");
    }else{
        res.send("Student Not Found !!!");
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});