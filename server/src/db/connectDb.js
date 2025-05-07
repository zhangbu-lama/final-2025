import mongoose from "mongoose";

export default async function connectDb() {
    const db_url = process.env.DB_URL;

    if (!db_url) {
        throw new Error("DB_URL not found, please load it in .env file");
    }

    try {
        const connection = await mongoose.connect(db_url);
        console.log(
            `MongoDB database connection succeed! [${connection.connection.host}]`,
        );
    } catch (error) {
        console.log("MongoDB database connection failed!", error);
    }
}
<<<<<<< HEAD
=======

// import mongoose from "mongoose";

// const conntDB = async () => {

//     mongoose.connection.on('connected', () => console.log("dateabase connected "))
//     await mongoose.connect(`${process.env.MONGODB_URI}/trek-database1`)
// }
// export default conntDB
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
