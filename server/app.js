require("dotenv").config();
const Express = require("express");
const app = Express();
const dbConnection = require("./db");

const controller = require("./controllers");

app.use(Express.json());

app.use("/journal", controller.journalController);

// app.use(require("./middleware/validate-jwt"));
app.use("/user", controller.userController);

dbConnection.authenticate()
    .then(() => dbConnection.sync())
    .then(() => {
        app.listen(3000, () => {
            console.log(`[server]: App is listening on 3000.`);
        });
    })

    .catch((err) => {
        console.log(`[Server]: Server crashed. Error = ${err}`)
    });