// 'this' jest slowem kluczowym za pomoca ktorego mozemy sie odwolywac do instancji klasy, czy tez obiektu.
// Byc moze przydatnosc slowa kluczowego 'this' nie jest zbyt widoczna w przypadku obiektow stworzonych za pomoca
// literalu obiektu {}, gdzie do wlasciwosci i metod obiektu mozemy sie odwolac za pomoca nazwy zmiennej, w ktorej zapisalismy
// obiekt, jednak nawet tutaj 'this' moze byc przydatny, gdy np. chcemy w kilku obiektach uzyc tej samej metody. W kazdym
// obiekcie musielibysmy w tej metodzie zmieniac nazwe zmiennej, do ktorej jest przypisany obiekt, czego mozemy uniknac za pomoca
// slowa 'this'.

// Przyklad bez slowa 'this':

// const o = {
//     name: 'John',
//     greet() {
//         console.log(`Hello, my name is ${o.name}`);
//     }
// }

// const o2 = {
//     name: 'Jane',
//     greet() {
//         console.log(`Hello, my name is ${o2.name}`);
//     }
// }

// o.greet(); // Output: Hello, my name is John
// o2.greet(); // Output: Hello, my name is Jane


// Przyklad ze slowem 'this':

// const o = {
//     name: 'John',
//     greet() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }

// const o2 = {
//     name: 'Jane',
//     greet() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }

// o.greet(); // Output: Hello, my name is John
// o2.greet(); // Output: Hello, my name is Jane

// W tym przypadku metoda greet() jest dokladnie taka sama w obydwu obiektach - nie bylo koniecznosci w ciele metody zmieniac
// nazwy obiektu, zeby uzyskac dostep do wlascicwosci name.

// W klasach ma to jeszcze wieksze znaczenie, poniewaz w momencie definiowania klasy, nie wiemy pod jakimi nazwami zmiennych
// beda zapisane instancje klasy.


// Funkcje, ktore sa metodami slowem 'this' odwoluja sie do obiektu, do ktorego naleza, natomiast funkcje, ktore nie sa metodami
// slowem 'this' odwoluja sie do obiektu globalnego lub undefined, jesli kod jest w strict mode.

// let o = {                            // obiekt o
//     m: function() {                 // metoda m obiektu o
//         let self = this;
//         this === o                  // => true: this jest obiektem o
//         f();

//         function f() {              // zagniezdzona funkcja f
//             this === o              // => false: this jest obiektem globalnym lub undefined, jesli jest strict mode
//             self === o              // => true: self zawiera zewnetrzna wartosc this
//         }
//     }
// }

// o.m();



const maciej = {                            // obiekt maciej
    username: 'Maciej',                     // username przechowuje imie uzytkownika

    showName() {                            // metoda wypisujaca w konsoli imie uzytkownika
        console.log(this.username)
    }
}

maciej.showName()                           // wywolanie metody showName obiektu maciej


const bookShelf = {                         // obiekt bookShelf
    authors: [],                            // tablica przechowujaca autorow

    addAuthor(author) {                     // metoda dopisujaca autora do listy autorow
        this.authors.push(author)           // dodanie autora do tablicy authors
    },

    getAuthors() {                          // metoda zwracajaca tablice z zapisanymi autorami
        return this.authors
    }
}


console.log(bookShelf.getAuthors())
bookShelf.addAuthor("David Flanagan")
bookShelf.addAuthor("John Eldredge")
console.log(bookShelf.getAuthors())