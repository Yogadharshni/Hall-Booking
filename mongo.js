db.room_entries.find({})

db.room_entries.insertMany(
    [
        {
            Roomname: "ABC hall",
            Room_Id: 120,
            Booked_status: "booked",
            Customer_name: "Yogadharshni",
            Booked_date: "1/03/2023",
            Entry_time: "8AM",
            Exit_time: "1PM",
        },
        {
            Roomname: "ABC hall",
            Room_Id: 121,
            Booked_status: "booked",
            Customer_name: "Revathi",
            Booked_date: "3/03/2023",
            Entry_time: "10AM",
            Exit_time: "12PM",
        },
        {
            Roomname: "ABC hall",
            Room_Id: 122,
            Booked_status: "booked",
            Customer_name: "Maaya",
            Booked_date: "5/03/2023",
            Entry_time: "9AM",
            Exit_time: "5PM",
        },
        {
            Roomname: "ABC hall",
            Room_Id: 123,
            Booked_status: "booked",
            Customer_name: "shruthi",
            Booked_date: "10/03/2023",
            Entry_time: "3PM",
            Exit_time: "10PM",
        },
        {
            Roomname: "ABC hall",
            Room_Id: 124,
            Booked_status: "booked",
            Customer_name: "preethi",
            Booked_date: "12/03/2023",
            Entry_time: "5pM",
            Exit_time: "9PM",
        },
        {
            Roomname: "ABC hall",
            Room_Id: 125,
            Booked_status: "booked",
            Customer_name: "sridhar",
            Booked_date: "12/03/2023",
            Entry_time: "7AM",
            Exit_time: "1PM",
        },
        {
            Roomname: "ABC Hall",
            Room_Id: 126,
            Booked_status: "booked",
            Customer_name: "dharshni",
            Booked_date: "15/03/2023",
            Entry_time: "8AM",
            Exit_time: "2PM",
        },
        {
            Roomname: "ABC Hall",
            Room_Id: 127,
            Booked_status: "booked",
            Customer_name: "bharani",
            Booked_date: "20/03/2023",
            Entry_time: "6PM",
            Exit_time: "12AM",
        },
    ]
)

db.rooms.insertOne({
    NumberofSeatsavailable: 200,
    Amenities_in_room: "A/C or NON AC, Attached bathroom ,TV with cable , Dining options",
    Price_1_hour: 1000,
})

