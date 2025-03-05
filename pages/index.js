import Head from "next/head";
import { MongoClient } from "mongodb";

import {user, password, host} from "./database";
import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
    return <>
            <Head>
                <title>React meetups</title>
                <meta name="description" content="Browse a huge list of highly active react meetups!" />
            </Head>
            <MeetupList meetups={props.meetups} />
        </>;
}

//export function getServerSideProps() {
//    return {
//        props: {
//            meetups: DUMMY_MEETUPS
//        }
//    };
//}

 export async function getStaticProps() {
    const client = await MongoClient.connect(`mongodb+srv://${user}:${password}@${host}/?retryWrites=true&w=majority&appName=Cluster0`);
    const db = client.db("meetups");
    const meetupsCollection = db.collection("meetups");
    const meetups = await meetupsCollection.find().toArray();
    client.close();
     return {
         props: {
             meetups: meetups.map((meetup) => ({
                id: meetup._id.toString(),
                title: meetup.title,
                image: meetup.image,
                address: meetup.address
             }))
         },
         revalidate: 1
     };
 }

export default HomePage;