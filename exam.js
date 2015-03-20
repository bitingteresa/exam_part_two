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




