const students = {
    name: "Jasim",
    id: 15,
    major: "mathmetics",
    isRich: false,
    subject: [ "english", "economics", "calculus" ],
    bestFriend: {
        name: "Kasem",
        major: "physics"
    },
    takeExam: function () {
        console.log(this.name, 'taking exam');
    }
}

students.takeExam();