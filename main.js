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

document.addEventListener("DOMContentLoaded", function (event) {
    let restoredOrders = JSON.parse(localStorage.getItem("Orders"));

    for (let order of restoredOrders) {
        document.getElementById("trips").innerHTML +=
            `<div class="trip">
            <div class="tripSection">${order.id}</div>
            <div class="tripSection">${trip.country}</div>
            <div class="tripSection">${trip.city}</div>
            <button class="tripSectionButton" onclick="openDetails()" id=${trip.id}>>>details</button>
            <button class="deleteTrip" onclick="deleteTrip('${trip.id}');">delete</button>
            </div>`
    }
});

let eventId = document.getElementById('eventId');
let eventTime;

eventId.addEventListener('change', function () {
    let getValue = this.value;
    eventTime = document.getElementById('eventTime' + getValue);
    eventTime.style.display = 'block';
});

function setStorageOrders() {
    localStorage.setItem("Orders", JSON.stringify(Orders));
}

function buyTickets() {
    let adultPrice;
    let kidPrice;
    let event_id = document.getElementById('eventId').value;
    let event_date = eventTime.value;
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
        id: (Math.random() * (1000 - 0) + 0).toFixed(0),
        event_id: event_id,
        event_date: event_date,
        ticket_adult_price: adultPrice,
        ticket_adult_quantity: +0 + +ticket_adult_quantity,
        ticket_kid_price: kidPrice,
        ticket_kid_quantity: +0 + +ticket_kid_quantity,
        ticket_exemption_price: exemptionPrice,
        ticket_exemption_quantity: +0 + +ticket_exemption_quantity,
        ticket_group_price: groupPrice,
        ticket_group_quantity: +0 + +ticket_group_quantity,
        barcode: (Math.random() * (1000000 - 0) + 0).toFixed(0),
        equal_price: (ticket_adult_quantity * adultPrice) + (ticket_kid_quantity * kidPrice) + (ticket_exemption_quantity * exemptionPrice) + (ticket_group_quantity * groupPrice),
        created: new Date().toString()
    }
    console.log(order)
    Orders.push(order);
    document.querySelector('.table').innerHTML +=
        `<tr>
            <td>${order.id}</td>
            <td>${order.event_id}</td>
            <td>${order.event_date}</td>
            <td>${order.ticket_adult_price}</td>
            <td>${order.ticket_adult_quantity}</td>
            <td>${order.ticket_kid_price}</td>
            <td>${order.ticket_kid_quantity}</td>
            <td>${order.ticket_exemption_price}</td>
            <td>${order.ticket_exemption_quantity}</td>
            <td>${order.ticket_group_price}</td>
            <td>${order.ticket_group_quantity}</td>
            <td>${order.barcode}</td>
            <td>${order.equal_price}</td>
            <td>${order.created}</td>
        </tr>`
    setStorageOrders();
    console.log(Orders)
}

