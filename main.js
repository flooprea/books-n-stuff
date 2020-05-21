let historyOfEverything = new Book('A Short History of Nearly Everything', "Book", 'Bill Bryson', 544); 
//let speed = new Movie('Speed', "Movie", 'Jan de Bont', 116); 

historyOfEverything.toggleCheckOutStatus()
historyOfEverything.isCheckedOut;
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);


document.getElementById("p1").innerHTML = "Title: " + historyOfEverything.title;
document.getElementById("p2").innerHTML = "Media type: " + historyOfEverything.type;
document.getElementById("p3").innerHTML = "Rating: " + historyOfEverything.getAverageRating();
document.getElementById("p4").innerHTML = "Checked out: " + historyOfEverything.isCheckedOut;
