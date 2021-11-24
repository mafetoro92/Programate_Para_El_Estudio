require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const allRoutes = require("./routes");

// Conection MongoDB
require("./db/mongo");

// Init Express
const app = express();

// Middleware
app.use(
    cors({
        origin: "*", //servidor que deseas que consuma o (*) en caso que sea acceso libre
        credentials: true,
    })
);
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("../client/build"));
app.use(allRoutes);

// sirve pal error xd
//if (process.env.NODE_ENV === 'production'){set static folder app.use(express.static('client/build')) app.get('*',(req, res) => { res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')) }) }

// Setting
const port = process.env.PORT || 3001;
app.set("port", port);

// Init Server
app.listen(app.get("port"), (error) => {
    if (error) {
        console.error("Error connecting the server");
    } else {
        console.log(`Server running on port: ${port}`);
    }
});

module.exports = app;
