var sget = require('sget');

function Book(title, author, genre, size, status) {
	this.title = title;
	this.author = author;
	this.genre = genre;
	this.size = size;
	this.status = status;
}

function Librarian(){
	this.books = [];
	this.viewAllBooks = function() {
		for(var i = 0; i < this.books.length; i++) {
			console.log('Title: ' + this.books[i].title + ' Author: ' + this.books[i].author + ' Genre: ' + this.books[i].genre + ' Size of Book: ' + this.books[i].size + ' Checked: ' + this.books[i].status);
		}
	}
	this.createBook = function(userTitle, userAuthor, userGenre, userSize, userStatus) {
		this.books.push(new Book(userTitle, userAuthor, userGenre, userSize, userStatus));
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
				console.log(this.books[i]);
				//when you have time you can just display the individual bit 
				return;
			}
		}
	};
	this.searchAuthor = function(userInput) {
		for(var i = 0; i < this.books.length; i++) {
			if (this.books[i].author === userInput) {
				console.log(this.books[i]);
				return;
			}
		}
	};
	this.displayGenre = function(userInput) {
		for(var i = 0; i < this.books.length; i++) {
			if (this.books[i].genre === userInput) {
				console.log(this.books[i]);
				return;
			}
		}
	};
	this.changeStatus = function(userTitle, userStatus) {
		for(var i = 0; i < this.books.length; i++) {
			if (this.books[i].title === userTitle) {
				this.books[i]["status"] = userStatus;
				console.log(this.books[i]);
			}
		}	
	}
}

function input(saying) {
	return sget(saying).trim().toLowerCase();
}

function menu() {
	switch(input('Please Choose an Option \n1 - View all Books \n2 - Add a new Book \n3 - Remove a Book by Title \n4 - Search by Title \n5 - Search by Author \n6 - Display Books by Genre \n7 - Quit')) {
		case '1':
			library.viewAllBooks();
			menu();
			break;
		case '2':
			library.createBook(input('Enter a title'), input('Enter "Author Last Name, First Name"'), input('Enter genre'), input('Size of Book'), input('Checked Status'));
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
			process.exit(0);
		default:
			console.log('Please enter a valid entry.');
			menu();
			break;
	}
}

var library = new Librarian();
var mobyDick = new Book("moby dick", "melville, herman", "fiction", "long", "in");
var sedaris = new Book("dress up your family in corduory and denim", "sedaris, david", "nonfiction", "short", "out");
var maus = new Book("maus", "spiegelman, art", "graphic novel", "short", "in");
library.books.push(mobyDick);
library.books.push(sedaris);
library.books.push(maus);


menu();


