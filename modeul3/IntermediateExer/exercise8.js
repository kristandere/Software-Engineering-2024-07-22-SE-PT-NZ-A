const phoneBookABC = new Map()
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')


const initialEntriesDEF = [
    ['Krim', '0412345678'],
    ['Kents', '0412345679'],
    ['Krit', '0412345670']
];
const phoneBookDEF = new Map(initialEntriesDEF);

phoneBookABC.set('Caroline', '0477777776');

function printPhoneBook(contacts) {
    contacts.forEach((phoneNumber, name) => {
        console.log(`${name}: ${phoneNumber}`);
    });
};

const combinedPhoneBook = new Map(phoneBookABC);
phoneBookDEF.forEach((phoneNumber, name) => {
    combinedPhoneBook.set(name, phoneNumber);
});

printPhoneBook(combinedPhoneBook);