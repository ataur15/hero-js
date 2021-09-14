const hasMeeting = true;
const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meetingDetails = {
            name: 'Technical meetings',
            location: 'Google meet',
            time: '10:00 pm'
        };
        resolve(meetingDetails)
    }
    else {
        reject(new Error('Meeting already scheduled!'));
    }
});

async function myMeeting () {
    try {
        const meetingDetails = await meeting;
        console.log(meetingDetails);
    }
    catch (error) {
        console.log(error.message);
    }
}
myMeeting();