import { useRouter } from "next/router";
import Head from "next/head";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const router = useRouter();

    async function addMeetupHandler(enteredMeetupData) {
        await fetch("/api/new-meetup", {
            method: "POST",
            body: JSON.stringify(enteredMeetupData),
            headers: {
                "Content-Type": "application/json"
            }
        });
        router.push("/");
    }

    return <>
            <Head>
                <title>Add a new meetup</title>
                <meta name="description" content="Add your own meetups and create amazing networking opportunities." />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </>;
}

export default NewMeetupPage;