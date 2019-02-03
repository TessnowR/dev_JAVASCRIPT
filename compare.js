function Book(title, pub_date, call_number, authors){
    this.title = title;
    this.availability = true;
    this.pub_date = pub_date;
    this.current_date = null;
    this.check_out_date = null;
    this.call_number = call_number;
    this.authors = authors;
}
Book.prototype.checkOut = function(){
        this.availability = false;
        var rdom = (Math.random() * 31 +1).toFixed(0);
        var current_date = new Date();
        this.check_out_date = new Date(current_date - rdom*24*3600*1000);
    }

Book.prototype.checkIn = function(){
        this.availability = true;
    }

Book.prototype.isOverdue = function(){
        var current_date = new Date();
        if ((current_date - this.check_out_date)/1000/3600/24 > 14)
            return true;
        else
            return false;
    }

function Author(first_name, last_name){
    this.first_name = first_name;
    this.last_name = last_name;
}

function Patron(firstname, lastname, lib_card){
    this.firstname = firstname;
    this.lastname = lastname;
    this.lib_card = lib_card;
    this.books_out = [];
    this.fine = 0;
}
Patron.prototype.readBook = function(book){
        this.books_out.push(book);
    }

Patron.prototype.returnBook = function(book){
        this.books_out.pop(book);
    }

var redAuthors, blueAuthors, greenAuthors, yellowAuthors, purpleAuthors
var redAuthor1 = new Author('John', 'Smith');
var redAuthor2 = new Author('James', 'Sullivan');
var redAuthors = [redAuthor1, redAuthor2];
var blueAuthors = greenAuthors = yellowAuthors = purpleAuthors = redAuthors;

redBook = new Book('Lakes', 1963, 456789, redAuthors);
blueBook = new Book('Rivers', 1964, 123456, blueAuthors);
greenBook = new Book('Streams', 1965, 234567, greenAuthors);
yellowBook = new Book('Ponds', 1966, 345678, yellowAuthors);
purpleBook = new Book('Brooks', 1967, 567891, purpleAuthors);
var catalog = [redBook, blueBook, greenBook, yellowBook, purpleBook]

var patron1 = new Patron('Sally', 'Hudson', '1');
var patron2 = new Patron('Rachel', 'Hung', '2');
var patron3 = new Patron('Andy', 'Cunningham', '3');
var patron4 = new Patron('Steve', 'Cote', '4');
var patron5 = new Patron ('Ted', 'Mitrou', '5');
var patrons = [patron1, patron2, patron3, patron4, patron5]

for (var day_count = 0; day_count < 90; day_count++){
    for (var book_count = 0; book_count < 5; book_count++){
        if (catalog[book_count].availability == true){
            for (var pat_count = 0; pat_count < 5; pat_count++){
                if (patrons[pat_count].books_out.length <= 1){
                    catalog[book_count].checkOut();
                    patrons[pat_count].readBook(catalog[book_count]);
                    break;
                }
                else
                    continue;
            }
        }
        else {
            catalog[book_count].checkIn();
            for (pat_counter = 0; pat_counter < 5; pat_counter++){
                if (catalog[book_count] in patrons[pat_counter].books_out){
                    if (catalog[book_count].isOverdue)
                        patrons[pat_counter].fine += 5;
                    patrons[pat_counter].books_out.returnBook(catalog[book_count]);
                }
            }
        }       
    }
}

for (var k = 0; k < 5; k++){
    console.log("Patron: " + patrons[k].firstname + " " + patrons[k].lastname);
    console.log("Books checked out: ")
    for (l = 0; l < patrons[k].books_out.length; l++) {
        console.log(patrons[k].books_out[l].title);
    }
    console.log("Fine: $" + patrons[k].fine);
    console.log();
}    
 