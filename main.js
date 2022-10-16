let events = [{
    event_id: '001',
    ticket_adult_price: 500,
    ticket_kid_price: 300,
    ticket_exemption_price: 0,
    ticket_group_price: 200,
    ticket_type1_price: 0,
    ticket_type2_price: 0
},
{
    event_id: '002',
    ticket_adult_price: 700,
    ticket_kid_price: 500,
    ticket_exemption_price: 300,
    ticket_group_price: 250,
    ticket_type1_price: 0,
    ticket_type2_price: 0
},
{
    event_id: '003',
    ticket_adult_price: 900,
    ticket_kid_price: 700,
    ticket_exemption_price: 0,
    ticket_group_price: 400,
    ticket_type1_price: 450,
    ticket_type2_price: 400
}
]

let users = [
    {
        user_id: '0001',
        surname: 'Фамилия',
        name: 'Имя'
    }
]

let Orders = [];


document.addEventListener("DOMContentLoaded", function (event) {

    let restoredOrders = JSON.parse(localStorage.getItem("Orders"));

    if ((restoredOrders != null) && (restoredOrders.length != 0)) {
        for (i = 0; i < restoredOrders.length; i++) {
            Orders.push(restoredOrders[i]);
        }

        for (let order of restoredOrders) {
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
            <td>${order.ticket_type1_price}</td>
            <td>${order.ticket_type1_quantity}</td>
            <td>${order.ticket_type2_price}</td>
            <td>${order.ticket_type2_quantity}</td>
            <td>${order.barcode}</td>
            <td>${order.user_id}</td>
            <td>${order.equal_price}</td>
            <td>${order.created}</td>
        </tr>`
        }
    }
});

let eventId = document.getElementById('eventId');
let exemptionTicket = document.getElementById('exemptionTicket');
let type1Ticket = document.getElementById('type1Ticket');
let type2Ticket = document.getElementById('type2Ticket');
let eventTime;

eventId.addEventListener('change', function () {

    let times = document.getElementsByClassName('select');

    for (let time of times) {
        time.style.display = 'none';
    }

    let getValue = this.value;
    eventTime = document.getElementById('eventTime' + getValue);
    eventTime.style.display = 'block';

    if (getValue == '002') {
        exemptionTicket.style.display = 'block';
        type1Ticket.style.display = 'none';
        type2Ticket.style.display = 'none';
    }
    if (getValue == '003') {
        exemptionTicket.style.display = 'none';
        type1Ticket.style.display = 'block';
        type2Ticket.style.display = 'block';
    }

});

function closeList() {
    eventTime.style.display = 'none';
}

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
    let ticket_type1_quantity = document.getElementById('type1').value;
    let ticket_type2_quantity = document.getElementById('type2').value;

    for (let event of events) {
        if (event_id == Object.values(event)[0]) {
            adultPrice = event.ticket_adult_price;
            kidPrice = event.ticket_kid_price;
            exemptionPrice = event.ticket_exemption_price;
            groupPrice = event.ticket_group_price;
            type1Price = event.ticket_type1_price;
            type2Price = event.ticket_type2_price;
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
        ticket_type1_price: type1Price,
        ticket_type1_quantity: +0 + +ticket_type1_quantity,
        ticket_type2_price: type2Price,
        ticket_type2_quantity: +0 + +ticket_type2_quantity,
        barcode: (Math.random() * (1000000 - 0) + 0).toFixed(0),
        user_id: users[0].user_id,
        equal_price:
            (ticket_adult_quantity * adultPrice) +
            (ticket_kid_quantity * kidPrice) +
            (ticket_exemption_quantity * exemptionPrice) +
            (ticket_group_quantity * groupPrice) +
            (ticket_type1_quantity * type1Price) +
            (ticket_type2_quantity * type2Price),
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
            <td>${order.ticket_type1_price}</td>
            <td>${order.ticket_type1_quantity}</td>
            <td>${order.ticket_type2_price}</td>
            <td>${order.ticket_type2_quantity}</td>
            <td>${order.barcode}</td>
            <td>${order.user_id}</td>
            <td>${order.equal_price}</td>
            <td>${order.created}</td>
        </tr>`
    setStorageOrders();
}

