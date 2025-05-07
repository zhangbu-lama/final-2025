<<<<<<< HEAD
import  dotenv  from "dotenv";
dotenv.config();
=======
import { config } from "dotenv";
config();
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
import connectDb from "./db/connectDb.js";
import { app } from "./app.js";

const port = process.env.PORT || 6969;

connectDb()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running on PORT: ${port}`);
        });
    })
    .catch((err) => {
        console.log("Server failed to run!", err);
    });
