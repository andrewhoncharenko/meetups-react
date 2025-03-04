import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
    return <MeetupDetail image="" title="" address="" description="" />;
}

export function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: "m1"
                }
            },
            {
                params: {
                    meetupId: "m2"
                }
            }    
        ]
    };
}

export function getStaticProps() {
    return {};
}

export default MeetupDetails;