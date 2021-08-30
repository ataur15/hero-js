/**
 * কোন একটা function কে call করার সময় parameter হিসেবে যদি কোন একটা function কে পাঠানো হয় তাকেই callback function বলে
 */

function welComeMessage (param) {
    console.log(param);
    param(); // callback function
}

function greetings () {
    console.log("Good morning");
}

welComeMessage(greetings);