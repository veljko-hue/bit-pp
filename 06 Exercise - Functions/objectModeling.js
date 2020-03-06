function Student(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.toString = function () {
        return 'Name : ' + name + '\nAge : ' + age + '\nID : ' + id;
    }
}
var aleksa = new Student('Aleksa', 20, 507999710120);
var veljko = new Student('Veljko', 33, 19870119110080);
var aragorn = new Student('Aragorn', 43, 1)
// console.log(aleksa);
// console.log(veljko);


function Subject(title, description) {
    this.title = title;
    this.description = description;
    this.toString = function () {
        return 'Title : ' + title + '\nDescription : ' + description;
    }
}

var bitWeb = new Subject('BIT WEB', 'Theoretical and Exercise');
var bitPP = new Subject('BIT PP', 'Theoretical and Practical');

// console.log(bitWeb)
// console.log(bitPP);


function Classroom(name) {
    this.name = name;
    this.subject = [];
    this.students = [];

    this.addSubject = function (subject) {
        this.subject.push(subject);
    }
    this.addStudents = function (students) {
        this.students.push(students)
    }
    this.toString = function () {
        var resSubject = '';
        var resStudents = '';
        for (var i = 0; i < this.subject.length; i++) {
            resSubject += '\n' + (i + 1) + '. Subject :\n' + this.subject[i].toString() + '\n';
        }
        for (var i = 0; i < this.students.length; i++) {
            resStudents += '\n' + (i + 1) + '. Student :\n' + this.students[i].toString() + '\n';
        }
        return 'Name : ' + name + '\nSubjects : \n' + resSubject + '\nStudents : \n' + resStudents;
    }
}
var bit008 = new Classroom('Gen Osam');

bit008.addSubject(bitWeb);
bit008.addSubject(bitPP);
bit008.addStudents(veljko);
bit008.addStudents(aleksa);
bit008.addStudents(aragorn)
console.log(bit008.toString());
