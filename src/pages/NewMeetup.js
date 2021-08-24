import { useHistory } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {
    const apiUrl = 'https://react-meetups-d2d0c-default-rtdb.firebaseio.com/meetups.json';

    const history = useHistory();

    function onAddMeetupHandler(meetupData) {
        fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            history.replace('/');
        });
    }

    return (
        <section>
            <h1>Add New Meetup</h1>

            <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
        </section>
    );
}

export default NewMeetup;
