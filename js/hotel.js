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
// register event
document.getElementById('submit').addEventListener('click', reservation);


console.log(guest.name);
