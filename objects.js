var course = {
	name: 'JavaScript Applications',
	awesome: true,
	teachers: ['Assaf', 'Shane'],
	students: [
		{
			name: 'Steve',
			computer: {
				OS: 'Linux',
				type: 'laptop'
			}
		},
		{
			name: 'Katy',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		},
		{
			name: 'Chuck',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		}

	],
	preReqs : {
		skills : ['html', 'css', 'git'],
		equipment: {
			laptop: true,
			OSOptions: ['linux', 'osx']
		}
	}
};

// Get name of the course
let courseName = course.name;

// Get name of the second teacher
let secondTeacher = course.teachers[1];

// Get name of the first student
let firstStudent = course.students[0].name;

// Katy's computer type
let type = course.students[1].computer.type;

// Get preReq object
let preReq = course.preReqs.equipment;

// Second OSOoption from equipment preReqs
let secondOption = course.preReqs.equipment.OSOptions[1];

let optToString = course.preReqs.equipment.OSOptions[0] + " or " + course.preReqs.equipment.OSOptions[1];

// Array of students using OSX

let students = [];

// for (let i = 0; i < course.students.length; i++) {
// 	if (course.students[i].computer.OS === "OSX") {
// 		students.push(course.students[i].name)
// 	
// }

let arry = course.students.filter(function(obj) {
	if (obj.computer.OS === "OSX") {
		return obj.name;
	}
})

console.log(arry)




