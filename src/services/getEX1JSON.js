/**
 * Api Action for jsn
 */
export default function getEX1JSON() {
    return dispatch =>
        dispatch({
            type: 'SET_EX1_DATA',
            payload: {
                data: [
                    { "Organization": "Google", "UserId": "akumar", "UserName": "Ashok Kumar", "Department": "Sales", "Designation": "Sales", "CheckInTime": 1548909000000, "CheckOutTime": 1548945000000 },
                    { "Organization": "Google", "UserId": "akumar", "UserName": "Ashok Kumar", "Department": "Sales", "Designation": "Sales", "CheckInTime": 1549081800000, "CheckOutTime": 1549110600000 },
                    { "Organization": "FB", "UserId": "phanis", "UserName": "Phani Sai", "Department": "Sales", "Designation": "Sales", "CheckInTime": 1548909000000, "CheckOutTime": 1548945000000 },
                    { "Organization": "FB", "UserId": "phanis", "UserName": "Phani Sai", "Department": "Sales", "Designation": "Sales", "CheckInTime": 1549081800000, "CheckOutTime": 1549110600000 },
                    { "Organization": "FB", "UserId": "lakshmig", "UserName": "Laskhmi Gayathri", "Department": "Quality", "Designation": "QA Engineer", "CheckInTime": 1549081800000, "CheckOutTime": 1549110600000 },
                    { "Organization": "FB", "UserId": "lakshmig", "UserName": "Laskhmi Gayathri", "Department": "Quality", "Designation": "QA Engineer", "CheckInTime": 1549081800000, "CheckOutTime": 1549110600000 }
                ]

            }
        })
}