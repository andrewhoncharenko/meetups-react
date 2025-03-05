import { MongoClient, ObjectId } from "mongodb";

import {user, password, host} from "../api/pasword";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
    return <MeetupDetail
        title={props.meetupData.title}
        address={props.meetupData.address} 
        image={props.meetupData.image}
        description={props.meetupData.description} />;
}

export async function getStaticPaths() {
    const client = await MongoClient.connect(`mongodb+srv://${user}:${password}@${host}/?retryWrites=true&w=majority&appName=Cluster0`);
    const db = client.db("meetups");
    const meetupsCollection = db.collection("meetups");
    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();
    client.close();
    return {
        fallback: false,
        paths: meetups.map((meetup) => ({
            params: {
                meetupId: meetup._id.toString()
            }
        }))
    };
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    const client = await MongoClient.connect(`mongodb+srv://${user}:${password}@${host}/?retryWrites=true&w=majority&appName=Cluster0`);
    const db = client.db("meetups");
    const meetupsCollection = db.collection("meetups");
    const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId.createFromHexString(meetupId)});
    client.close();
    return {
        props: {
            meetupData: {
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            }
        }
    };
}

export default MeetupDetails;