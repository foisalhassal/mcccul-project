
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("MCCUL Backend Running");
});

app.post("/donate", (req, res) => {

    const { name, amount } = req.body;

    console.log("====== DONATION ======");
    console.log("Name:", name);
    console.log("Amount:", amount);

    res.json({
        success: true,
        message: "Donation Received"
    });

});

app.listen(5000, () => {
    console.log("Server Running On Port 5000");
});