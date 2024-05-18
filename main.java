// This is the java script which shows the name list of the students with their grades
const students = [
    { id: Y23001, grade: 96, firstName: 'Adrian', lastName: 'Sanchez' },
    { id: Y23012, grade: 75, firstName: 'Brent', lastName: 'McDonald' },
    { id: Y23006, grade: 88, firstName: 'Chelsie', lastName: 'Green' },
    { id: Y23009, grade: 69, firstName: 'Donald', lastName: 'Fellings' },
    { id: Y23023, grade: 58, firstName: 'Edaward', lastName: 'Cullen' },
    { id: Y23034, grade: 95, firstName: 'Freddie', lastName: 'Mercury' },
    { id: Y23029, grade: 88, firstName: 'Gabriella', lastName: 'Bloomfield' },
    { id: Y23004, grade: 93, firstName: 'Helda', lastName: 'Foley' },
    { id: Y23014, grade: 90, firstName: 'Ivanka', lastName: 'Trump' },
    { id: Y23020, grade: 70, firstName: 'Jade', lastName: 'Thomas' }
];

// This function use to sort students based on multiple fields
function sortStudents(students) {
    return students.sort((a, b) => {
        // Shows the comparison by last name
        if (a.lastName < b.lastName) return -1;
        if (a.lastName > b.lastName) return 1;

        // Last names are equal, shows the comparrison by the first name
        if (a.firstName < b.firstName) return -1;
        if (a.firstName > b.firstName) return 1;

        // First names are equal, comparisson did by id numbers
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;

        // ID numbers  are equal, comparrison did by grade
        return a.grade - b.grade;
    });
}

// For sorting the student arrays
const sortedStudents = sortStudents(students);

// To log the sorted studens
console.log('Sorted Students:');
sortedStudents.forEach(student => {
    console.log(`ID: ${student.id}, Grade: ${student.grade}, Name: ${student.firstName} ${student.lastName}`);
});
