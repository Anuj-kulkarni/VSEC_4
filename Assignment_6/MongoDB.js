const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();

app.use(express.json());

// MongoDB Connection
const client = new MongoClient("mongodb://127.0.0.1:27017");

let students;

async function connectDB() {
    try {
        await client.connect();

        const db = client.db("college");
        students = db.collection("students");

        console.log("MongoDB Connected");

        app.listen(3000, () => {
            console.log("Server running on port 3000");
        });

    } catch (error) {
        console.log("Database Connection Error:", error);
    }
}

connectDB();


// =====================================
// 1. CREATE - Add Student
// =====================================

app.post("/addStudent", async (req, res) => {

    try {

        const result = await students.insertOne(req.body);

        res.json({
            message: "Student Added Successfully",
            id: result.insertedId
        });

    } catch (error) {

        res.status(500).json({
            message: "Error Adding Student"
        });

    }
});


// =====================================
// 2. READ - Get All Students
// =====================================

app.get("/Students", async (req, res) => {

    try {

        const data = await students.find().toArray();

        res.json(data);

    } catch (error) {

        res.status(500).json({
            message: "Error Fetching Students"
        });

    }
});


// =====================================
// 3. READ - Get One Student
// =====================================

app.get("/Students/:id", async (req, res) => {

    try {

        const id = req.params.id;

        const student = await students.findOne({
            _id: new ObjectId(id)
        });

        if (!student) {
            return res.status(404).json({
                message: "Student Not Found"
            });
        }

        res.json(student);

    } catch (error) {

        res.status(400).json({
            message: "Invalid Student ID"
        });

    }
});


// =====================================
// 4. UPDATE - Update Student
// =====================================

app.put("/Students/:id", async (req, res) => {

    try {

        const id = req.params.id;

        const result = await students.updateOne(
            {
                _id: new ObjectId(id)
            },
            {
                $set: req.body
            }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({
                message: "Student Not Found"
            });
        }

        res.json({
            message: "Student Updated Successfully"
        });

    } catch (error) {

        res.status(400).json({
            message: "Invalid Student ID"
        });

    }
});


// =====================================
// 5. DELETE - Delete Student
// =====================================

app.delete("/Students/:id", async (req, res) => {

    try {

        const id = req.params.id;

        const result = await students.deleteOne({
            _id: new ObjectId(id)
        });

        if (result.deletedCount === 0) {
            return res.status(404).json({
                message: "Student Not Found"
            });
        }

        res.json({
            message: "Student Deleted Successfully"
        });

    } catch (error) {

        res.status(400).json({
            message: "Invalid Student ID"
        });

    }
});