//~import modules
import { client } from "../models/client.js";
import { _500 } from "./errorController.js";

async function fetchAllUsers(req, res) {
  try {
    //^connect DB  
    await client.connect();
    //^DB name
    const db = client.db("test");

    //^define collection
    const collection = db.collection("user");

    //^insert data in collection
    //     const insertData = await collection.insertMany([
    //   {
    //     name: "Fredo",
    //     password: "purple"
    //   },
    //   {
    //     name: "Gaetan",
    //     password: "purple",
    //     role: "test"
    //   },
    //   {
    //     name: "Suni",
    //     mood: "happy"
    //   }
    // ]);
    // console.log("Datas are inserted !! ", insertData);

    //^fetch all datas
    const users = await collection.find().toArray();
    console.log("users: ", users);

    res.render("home", { title: "HOME PAGE", users });
  } catch (err) {
    _500(err, req, res);
  }
}

async function createUser(req, res) {
  try {
    //^connect DB
    await client.connect();
    //^DB name
    const db = client.db("demo-mongo");

    //^define collection
    const collection = db.collection("user");

    //^insert data in collection
        const insertData = await collection.insertMany([
      {
        name: "Fredo",
        password: "purple"
      },
      {
        name: "Gaetan",
        password: "purple",
        role: "test"
      },
      {
        name: "Suni",
        mood: "happy"
      }
    ]);
    // console.log("Datas are inserted !! ", insertData);


    res.render("home", { title: "HOME PAGE", users });
  } catch (err) {
    _500(err, req, res);
  }
}

export { fetchAllUsers};
