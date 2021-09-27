const hasMeeting = false;
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
        reject(new Error('Meeting already scheduled!'))
    }
});

meeting
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err.message);
    })