require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');  // Import CORS
const PORT = process.env.PORT || 2000; // Use || for default value




const SignUpRouter = require('./routes/sign_up_logic'); // Import the route for sign-up
const SignInRouter = require('./routes/signIn_logic'); // Import the route for sign-in




const bodyparser = require("body-parser");
app.use(bodyparser.json()); // To parse JSON data
app.use(bodyparser.urlencoded({ extended: true })); // To parse URL-encoded data


// Enable CORS for all routes
app.use(cors({
    origin: 'http://localhost:2000',  // Allow only your React app's origin
}));


const mongoose = require("mongoose");

// Replace the URI with your own MongoDB connection string
const DB_URI = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB is connected"))
.catch(err => console.log("Error connecting to MongoDB: ", err));




// API routes
app.use("/register", SignUpRouter); // For sign-up
app.use("/sign_in", SignInRouter); // For sign-in




// Serve static files from the frontend build directory
app.use(express.static(path.join(__dirname, '../frontend/dist'))); // Adjusted to 'dist' folder

// The "catchall" handler: for any request that doesn't match one above,
// send back the React app.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html')); // Serve the main HTML file
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
