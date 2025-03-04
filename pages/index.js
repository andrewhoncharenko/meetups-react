import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id:"m1",
        title: "Meetup 1",
        image: "https://media.istockphoto.com/id/2150662366/uk/%D1%84%D0%BE%D1%82%D0%BE/beautiful-friends-gathered-to-celebrate-a-birthday-event-in-a-street-cafe-group-of-young-women.webp?s=2048x2048&w=is&k=20&c=UZ03e_GMfHR9DYRxhQk4ftxp0ObxZOH-lDUziRygVV0=",
        address: "Meetup address",
        description: "First meetup"
    },
    {   
        id: "m2",
        title: "Meetup 2",
        image: "https://media.istockphoto.com/id/2177925778/uk/%D1%84%D0%BE%D1%82%D0%BE/casual-meet-up-in-the-outdoor.webp?s=2048x2048&w=is&k=20&c=jgPPdqJ3vRRIjFU98oLiS8B46mCkJpeDXTDnVInNIu8=",
        address: "Meetup address 2",
        description: "Second meetup"
    }
];

function HomePage() {
    return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;