const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();

app.use(express.json());

// MongoDB Connection
const client = new MongoClient("mongodb://127.0.0.1:27017");

let students;

app.post("/addStudent", async (req, res) => {
    try {
        console.log("Received Body:", req.body);

        // Make sure body is not empty
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({
                message: "Student data is required"
            });
        }

        const result = await students.insertOne(req.body);

        res.status(201).json({
            message: "Student Added Successfully",
            id: result.insertedId
        });

    } catch (error) {
        console.log("POST Error:", error);

        res.status(500).json({
            message: "Error Adding Student",
            error: error.message
        });
    }
});

app.get("/Students", async (req, res) => {
    try {
        const data = await students.find({}).toArray();

        res.json(data);

    } catch (error) {
        console.log("GET Error:", error);

        res.status(500).json({
            message: "Error Fetching Students",
            error: error.message
        });
    }
});

app.get("/Students/:id", async (req, res) => {
    try {
        const id = req.params.id;

        // Validate ObjectId before using it
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid Student ID"
            });
        }

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
        console.log("GET ONE Error:", error);

        res.status(500).json({
            message: "Error Fetching Student",
            error: error.message
        });
    }
});

app.put("/Students/:id", async (req, res) => {
    try {
        const id = req.params.id;

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid Student ID"
            });
        }

        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({
                message: "Updated student data is required"
            });
        }

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
        console.log("PUT Error:", error);

        res.status(500).json({
            message: "Error Updating Student",
            error: error.message
        });
    }
});

app.delete("/Students/:id", async (req, res) => {
    try {
        const id = req.params.id;

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid Student ID"
            });
        }

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
        console.log("DELETE Error:", error);

        res.status(500).json({
            message: "Error Deleting Student",
            error: error.message
        });
    }
});

async function connectDB() {
    try {
        await client.connect();

        const db = client.db("college");
        students = db.collection("students");

        console.log("MongoDB Connected");

        app.listen(3000, () => {
            console.log("Server running on http://localhost:3000");
        });

    } catch (error) {
        console.log("Database Connection Error:", error);
    }
}

connectDB();


