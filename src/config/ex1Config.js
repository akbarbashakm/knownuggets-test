import moment from 'moment';

export default [{
    HeaderName: 'Organization',
    Column: 'Organization',
    Merge: true
}, {
    HeaderName: 'Department',
    Column: 'Department',
    Merge: true
}, {
    HeaderName: 'UserName',
    Column: 'UserName',
    Merge: true
}, {
    HeaderName: 'Date',
    Column: ({ CheckInTime }) => {
        return moment(CheckInTime).format("DD/MM/YYYY")
    },
    Merge: false
}, {
    HeaderName: 'Time',
    Column: ({ CheckInTime, CheckOutTime }) => {
        // Column can be a string or callback which can be called with the specific row record to get the computed column value.
        const secs = ((CheckOutTime - CheckInTime) / 1000)
        // TODO: Return in (x Hrs y Mins) format.
        return (secs / 60) + ' Mins' // Returning in minutes	
    },
    Merge: false
},
]