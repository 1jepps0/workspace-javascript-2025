// test for object

var guest = {
	name: "Epps",
	date: "Oct 17 2015",
	member: "Diamond",
	otherguest: ["Mike", "Cindy", "Sally"],
	roomnumber: "125",
	display: function() {return this.name + this.otherguest}
};

var room = {
	guest: ["Epps", "Mike", "Cindy", "Sally"],
	number: "125",
};

var guestgroup = new Array();

//hotel registration
function reservation() {
	// get user reservation
	var guest = {
		name: document.getElementById("guestname").value,
		checkin: document.getElementById("checkin").value,
		roomtype: document.getElementById("room").value,
		guestnum: document.getElementById("guestnum").value,
		room: document.getElementById("room").value,
	};
	guestgroup.push(guest);
	console.log(guestgroup);
}

// show reservations
function showbookings() {
	var text = ""
	guestgroup.forEach((element, index, array) => {
		text += "<br> Name: " + element.name + "<br>Check In: " + element.checkin + "<br>Room Type: " + element.roomtype + "<br>Guest Number: " + element.gustnum + "<br>Room: " + element.room + "<br><br>"
	});
	document.getElementById("reservation_list").innerHTML = text;
}

// register event
document.getElementById('submit').addEventListener('click', reservation);
document.getElementById('lists').addEventListener('click', showbookings);


console.log(guest.name);
