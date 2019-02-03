/*
    Robert Tessnow-Ramirez
    St. Petersburg College
    Jun 12 2017 ©
    Professor: Adrian Tillman

    Write a loop that simulates checkouts and checkins for a 3 month period. Every day iterate over the catalog, and every person in the patrons array. If the patron
    currently has the book checked out then check it in. If it is not checked out then add it to the patrons list of books via the patrons read method. If the book is overdue  
    then add  a  fine of $5.00 to the patron returning it. At the end of the 3 month period, display each patron, the books they have currently checked out and any fine they 
    may have.   
*/ 


/*==================================
=            Book Class            =
==================================*/ 
function Book(title, pub_date, call_num, authors){
        this.title = title;
   	    this.available = true;
   	    this.pub_date = pub_date; 
   	    this.checkout_date = null;
   	    this.call_num = call_num;
   	    this.authors = authors;
}
      /*=========================================================
      =            adds checkOut method to book prototype            =
      =========================================================*/
Book.prototype.checkOut = function() {
  if(this.available == true){
    this.available = false;
    var rand_num = Math.floor((Math.random() * 31) + 1).toFixed(0);
    var checkout_d = new Date();
    checkout_d.setDate(checkout_d.getDate() - rand_num);
    this.checkout_date = checkout_d.toDateString();
  }
}
      /*========================================================
      =            adds checkIn method to book prototype            =
      ========================================================*/      
Book.prototype.checkIn = function(){
  if(this.available == false){
    this.available = true;
  }
}
      /*========================================================
      =            adds isOverdue to book prototype            =
      ========================================================*/
Book.prototype.isOverdue = function(){
  if(this.available == false){
    var overdue_d = new Date(this.checkout_date);
    var today_d = new Date();
    overdue_d.setDate(overdue_d.getDate() + 14);
    if(today_d > overdue_d){
      return this.overdue = true;
    }else{
      return this.overdue = false;
    }
  }  
} 

/*====================================
=            Author Class            =
====================================*/
function Author(first_name,last_name) {
		this.first_name = first_name;
		this.last_name = last_name;
}

/*====================================
=            Patron Class            =
====================================*/
function Patron(Firstname,Lastname,Library_Card){
		this.Firstname = Firstname;
		this.Lastname = Lastname;
		this.Library_Card = Library_Card;
		this.Books_Out = [];
		this.fine = 0;
}
		/*===================================================
		=            add read function to patron            =
		===================================================*/
Patron.prototype.read = function(book){
    this.Books_Out.push(book);
}
		/*===============================================
		=            add return function to patron            =
		===============================================*/
Patron.prototype.return = function(book){
  for(i = 0; i < book.length; i++){
    var book_name = p[i];
    var q = this.Books_Out.indexOf(book_name);
    if(q != -1){
      this.Books_Out.splice(q,1);
    }
  }
}

var author1 = new Author('Jules', 'Verne');
var author2 = new Author('Aleksey', 'Pisemsky');
var author3 = new Author('Herman', 'Melville');
var author4 = new Author('Irwin', 'Shapiro');
var author5 = new Author('Daniel', 'Defoe');
var author6 = new Author('Alexandre','Dumas');

var book1 = new Book('Twenty Thousand Leagues Under the Sea',1870,00001,author1 );
var book2 = new Book('In the Vortex', 1871, 00002, author2);
var book3 = new Book('Mobey-Dick',1851, 00003,[author3,author4] );
var book4 = new Book('Robinson Crusoe',1719,00004, author5);
var book5 = new Book('The Count of Monte Cristo',1844,00005,author6);
var catalog = [book1, book2, book3, book4, book5];

var patron1 = new Patron('Jimmy', 'Fallon',10000);
var patron2 = new Patron('Scooby', 'Doo',20000);
var patron3 = new Patron('Sherlock', 'Holmes',30000);
var patron4 = new Patron('Robert','Tessnow-Ramirez',40000);
var patron5 = new Patron('Scrappy','Doo', 50000);
var patrons = [patron1, patron2, patron3, patron4, patron5];


for (var day_count  = 0; day_count < 90; day_count++){
    for (var book_count = 0; book_count < 5; book_count++){
        if (catalog[book_count].available == true){
            for (var pat_count = 0; pat_count < 5; pat_count++){
                if (patrons[pat_count].Books_Out.length <= 1){
                    catalog[book_count].checkOut();
                    patrons[pat_count].read(catalog[book_count]);
                    break;
                }
                else
                    continue;
            }
        }
        else {
            catalog[book_count].checkIn();
            for (pat_counter = 0; pat_counter < 5; pat_counter++){
                if (catalog[book_count] in patrons[pat_counter].Books_Out){
                    if (catalog[book_count].isOverdue)
                        patrons[pat_counter].fine += 5;
                    patrons[pat_counter].Books_Out.return(catalog[book_count]);
                }
            }
        }       
    }
}

for (var k = 0; k < 5; k++){
    console.log("Patron: " + patrons[k].Firstname + " " + patrons[k].Lastname);
    console.log("Books checked out: ")
    for (l = 0; l < patrons[k].Books_Out.length; l++) {
        console.log(patrons[k].Books_Out[l].title);
    }
    console.log("Fine: $" + patrons[k].fine);
    console.log();
} 
