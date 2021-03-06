var sget = require('sget');

function Book(title, author, genre, size, status, overdue) {
	this.title = title;
	this.author = author;
	this.genre = genre;
	this.size = size;
	this.status = status;
	this.overdue = overdue;
}

Book.prototype.viewBook = function() {
	console.log('TITLE: ' + this.title + ' AUTHOR: ' + this.author + ' GENRE: ' + this.genre + ' SIZE: ' + this.size + ' CHECK-OUT: ' + this.status + ' OVERDUE: ' + this.overdue);
};

function Librarian(){
	this.books = [];
	this.viewAllBooks = function() {
		for(var i = 0; i < this.books.length; i++) {
			this.books[i].viewBook();
		}
	}
	this.createBook = function(userTitle, userAuthor, userGenre, userSize, userStatus, userOverdue) {
		this.books.push(new Book(userTitle, userAuthor, userGenre, userSize, userStatus, userOverdue));
		console.log('Added');
	};
	this.removeBookByTitle = function(userInput) {
		for(var i = 0; i < this.books.length; i++) {
			if (this.books[i].title === userInput) {
				this.books.splice(i, 1)
				console.log('Removed');
				return;
			}
		}
	};
	this.searchTitle = function(userInput) {
		for(var i = 0; i < this.books.length; i++) {
			if (this.books[i].title === userInput) {
				this.books[i].viewBook();
				return;
			}
		}
	};
	this.searchAuthor = function(userInput) {
		for(var i = 0; i < this.books.length; i++) {
			if (this.books[i].author === userInput) {
				this.books[i].viewBook();
				return;
			}
		}
	};
	this.displayGenre = function(userInput) {
		for(var i = 0; i < this.books.length; i++) {
			if (this.books[i].genre === userInput) {
				this.books[i].viewBook();
			}
		}
	};
	this.changeStatus = function(userTitle, userStatus) {
		for(var i = 0; i < this.books.length; i++) {
			if (this.books[i].title === userTitle) {
				this.books[i]["status"] = userStatus;
				this.books[i].viewBook();
			}
		}	
	};
	this.displayStatus = function(userInput) {
		for(var i = 0; i < this.books.length; i++) {
			if (this.books[i].status === userInput) {
				this.books[i].viewBook();
			}
		}
	};
	this.changeOverdue = function(userTitle, userOverdue) {
		for(var i = 0; i < this.books.length; i++) {
			if (this.books[i].title === userTitle) {
				this.books[i]["overdue"] = userOverdue;
				this.books[i].viewBook();
			}
		}	
	}
}

function input(saying) {
	return sget(saying).trim().toLowerCase();
}

function menu() {
	switch(input('\nPlease Choose an Option \n1 - View all Books \n2 - Add a new Book \n3 - Remove a Book by Title \n4 - Search by Title \n5 - Search by Author \n6 - Display Books by Genre \n7 - Change Check-Out Status of Book \n8 - View by Check-Out Status \n9 - Mark a book as Overdue \n10 - Quit')) {
		case '1':
			library.viewAllBooks();
			menu();
			break;
		case '2':
			library.createBook(input('Enter a title'), input('Enter "Author Last Name, First Name"'), input('Enter genre'), input('Size of Book'), input('Checked Status'), input('Overdue'));
			menu();
			break;
		case '3':
			library.removeBookByTitle(input('Enter in the title you are trying to remove'));
			menu();
			break;
		case '4':
			library.searchTitle(input('Enter in the title you are searching for'));
			menu();
			break;
		case '5':
			library.searchAuthor(input('Enter in the author "Last name, First name" you are searching for'));
			menu();
			break;
		case '6':
			library.displayGenre(input('Enter in the genre you would like to view'));
			menu();
			break;
		case '7':
			library.changeStatus(input('Please enter in the title you would like to change the status of'), input('Enter in the new status'));
			menu();
			break;
		case '8':
			library.displayStatus(input('Enter in the Check-Out status you would like to view'));
			menu();
			break;
		case '9':
			library.changeOverdue(input('Enter in title you would like to change Overdue status'), input('Enter in Overdue Status'));
			menu();
			break;
		case '10':
			process.exit(0);
		default:
			console.log('Please enter a valid entry.');
			menu();
			break;
	}
}

var library = new Librarian();
var mobyDick = new Book("moby dick", "melville, herman", "fiction", "long", "in", "no");
var sedaris = new Book("dress up your family in corduory and denim", "sedaris, david", "nonfiction", "short", "out", "no");
var maus = new Book("maus", "spiegelman, art", "graphic novel", "short", "in", "yes");
library.books.push(mobyDick);
library.books.push(sedaris);
library.books.push(maus);

// maus.viewBook();
// library.viewAllBooks();
menu();


