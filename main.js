let events = [{
    event_id: '001',
    ticket_adult_price: 500,
    ticket_kid_price: 300,
    ticket_exemption_price: 250,
    ticket_group_price: 200
},
{
    event_id: '002',
    ticket_adult_price: 700,
    ticket_kid_price: 500,
    ticket_exemption_price: 300,
    ticket_group_price: 250
},
{
    event_id: '003',
    ticket_adult_price: 900,
    ticket_kid_price: 700,
    ticket_exemption_price: 450,
    ticket_group_price: 400
}
]

let Orders = [];

function setStorageOrders() {
    localStorage.setItem("Orders", JSON.stringify(Orders));
}

function buyTickets() {
    let adultPrice;
    let kidPrice;
    let event_id = document.getElementById('eventId').value;
    let event_date = document.getElementById('eventDate').value;
    let ticket_adult_quantity = document.getElementById('adult').value;
    let ticket_kid_quantity = document.getElementById('child').value;
    let ticket_exemption_quantity = document.getElementById('exemption').value;
    let ticket_group_quantity = document.getElementById('group').value;


    for (let event of events) {
        if (event_id == Object.values(event)[0]) {
            adultPrice = event.ticket_adult_price;
            kidPrice = event.ticket_kid_price;
            exemptionPrice = event.ticket_exemption_price;
            groupPrice = event.ticket_group_price;
        }
    }

    let order = {
        id: (Math.random() * (100 - 0) + 0).toFixed(0),
        event_id: event_id,
        event_date: event_date,
        ticket_adult_price: adultPrice,
        ticket_adult_quantity: ticket_adult_quantity,
        ticket_kid_price: kidPrice,
        ticket_kid_quantity: ticket_kid_quantity,
        ticket_exemption_price: exemptionPrice,
        ticket_exemption_quantity: ticket_exemption_quantity,
        ticket_group_price: groupPrice,
        ticket_group_quantity: ticket_group_quantity,
        barcode: (Math.random() * (100000 - 0) + 0).toFixed(0),
        equal_price: (ticket_adult_quantity * adultPrice) + (ticket_kid_quantity * kidPrice) + (ticket_exemption_quantity * exemptionPrice) + (ticket_group_quantity * groupPrice),
        created: new Date()
    }
    console.log(order)
    Orders.push(order);
    setStorageOrders();
    console.log(Orders)
}

