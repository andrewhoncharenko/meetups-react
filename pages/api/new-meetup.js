import { MongoClient } from "mongodb";

import { user, password, host } from "./pasword";

async function handler(req, res) {
    if(req.method === "POST") {
        const data = req.body;
        const client = await MongoClient.connect(`mongodb+srv://${user}:${password}@${host}/?retryWrites=true&w=majority&appName=Cluster0`);
        const db = client.db("meetups");
        const meetupsCollection = db.collection("meetups");
        const result = await meetupsCollection.insertOne(data);
        client.close();
        res.status(201).json({message: "Meetup insert", id: result.insertedId});
    }
}

export default handler;