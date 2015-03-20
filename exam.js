/* - The software should track the library's inventory of books
- Each book listing should include the title, author, genre (Fiction, Non-Fiction, etc.), length, and checked-in/checked-out status
- Librarians should be able to:
a.) add books to the inventory
b.) remove books from the inventory 
c.) view a list of all the books in the library
d.) view a list of all the books in a given genre
e.) search for a book by title or author */

function Book(title, author, genre, size, status) {
	this.title = title;
	this.author = author;
	this.genre = genre;
	this.size = size;
	this.status = status;
}