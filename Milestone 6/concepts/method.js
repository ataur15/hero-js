const students = {
    name: "Jasim",
    id: 15,
    majon: "mathmetics",
    isRich: false,
    subject: [ "english", "economics", "calculus" ],
    bestFriend: {
        name: "Kasem",
        majon: "physics"
    },
    takeExam: function () {
        console.log(this.name, 'taking exam');
    }
}

students.takeExam();