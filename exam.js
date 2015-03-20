var sget = require('sget');

function Book(title, author, genre, size, status) {
	this.title = title;
	this.author = author;
	this.genre = genre;
	this.size = size;
	this.status = status;
}
//prototype for given genre to display or throw it in the Librarian function

function Librarian(){
	this.books = [];
	this.viewAllBooks = function() {
		for(var i = 0; i < this.books.length; i++) {
			console.log('Title: ' + this.books[i].title + ' Author: ' + this.books[i].author + ' Genre: ' + this.books[i].genre + ' Size of Book: ' + this.books[i].size + ' Checked: ' + this.books[i].status);
		}
	}
	this.createBook = function() {

	};
	this.removeBook = function(userInput) {

	};
	this.searchTitle = function(userInput) {

	};
	this.searchAuthor = function(userInput) {

	};
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
library.viewAllBooks();



