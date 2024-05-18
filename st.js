// To show different variables
    let Y23001 = 10;
    let Y23012 = 12;
    let Y23006 = 6;
    let Y23009 = 9;
    let Y23023 = 23;
    let Y23034 = 34;
    let Y23029 = 29;
    let Y23004 = 4;
    let Y23014 = 14;
    let Y23020 = 20;

    // To Log the value of Y23001
    console.log(Y23001);

    // These are use to define the arrays of students
    const students = [
        { id: Y23001, grade: 96, firstName: 'Adrian', lastName: 'Sanchez' },
        { id: Y23012, grade: 75, firstName: 'Brent', lastName: 'McDonald' },
        { id: Y23006, grade: 88, firstName: 'Chelsie', lastName: 'Green' },
        { id: Y23009, grade: 69, firstName: 'Donald', lastName: 'Fellings' },
        { id: Y23023, grade: 58, firstName: 'Edward', lastName: 'Cullen' },
        { id: Y23034, grade: 95, firstName: 'Freddie', lastName: 'Mercury' },
        { id: Y23029, grade: 88, firstName: 'Gabriella', lastName: 'Bloomfield' },
        { id: Y23004, grade: 93, firstName: 'Helda', lastName: 'Foley' },
        { id: Y23014, grade: 90, firstName: 'Ivanka', lastName: 'Trump' },
        { id: Y23020, grade: 70, firstName: 'Jade', lastName: 'Thomas' }
    ];

    // To show the functions based on multiple field
    function sortStudents(students) {
        return students.sort((a, b) => {
            // To do comparrison with the last names
            if (a.lastName < b.lastName) return -1;
            if (a.lastName > b.lastName) return 1;

            // Last names are equal, To do the comparisson with first name
            if (a.firstName < b.firstName) return -1;
            if (a.firstName > b.firstName) return 1;

            // First names are equal, To do the comparisson with student ids
            if (a.id < b.id) return -1;
            if (a.id > b.id) return 1;

            // If ids are also equal, To do the comparrison with grades
            return a.grade - b.grade;
        });
    }

    // To sort the student arrays
    const sortedStudents = sortStudents(students);

    // To display sorted students in the console
    console.log('Sorted Students:');
    sortedStudents.forEach(student => {
        console.log(`ID: ${student.id}, Grade: ${student.grade}, Name: ${student.firstName} ${student.lastName}`);
    });