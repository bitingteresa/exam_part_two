var sget = require('sget');

function Book(title, author, genre, size, status) {
	this.title = title;
	this.author = author;
	this.genre = genre;
	this.size = size;
	this.status = status;
}
//prototype for display one book then can throw it into the view all books - do this at the END

function Librarian(){
	this.books = [];
	this.viewAllBooks = function() {
		for(var i = 0; i < this.books.length; i++) {
			console.log('Title: ' + this.books[i].title + ' Author: ' + this.books[i].author + ' Genre: ' + this.books[i].genre + ' Size of Book: ' + this.books[i].size + ' Checked: ' + this.books[i].status);
		}
	}
	this.createBook = function() {
		this.books.push(new Book(input('Enter a title'), input('Enter Author Last Name, First Name'), input('Enter genre'), input('Size of Book'), input('Checked Status')));
	};
	this.removeBookByTitle = function(userInput) {
		// for(var i = 0; i < this.books.length; i++) {
		// 	if (this.books[i] === userInput) {

		// 	}

		// }
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
			
		}
	}
}

function input(saying) {
	return sget(saying).trim().toLowerCase();
}

var library = new Librarian();
var mobyDick = new Book("moby dick", "melville, herman", "fiction", "long", "in");
var sedaris = new Book("dress up your family in corduory and denim", "sedaris, david", "nonfiction", "short", "out");
var maus = new Book("maus", "spiegelman, art", "graphic novel", "short", "in");
library.books.push(mobyDick);
library.books.push(sedaris);
library.books.push(maus);

//library.searchTitle("maus");
//library.createBook();
//library.viewAllBooks();
library.searchAuthor("sedaris, david");


