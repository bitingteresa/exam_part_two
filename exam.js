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
var mobyDick = new Book("moby dick", "melville, herman", "fiction", "long", "checked in");
var sedaris = new Book("dress up your family in corduory and denim", "sedaris, david", "nonfiction", "short", "checked out");
var maus = new Book("maus", "spiegelman, art", "graphic novel", "short", "checked in");




