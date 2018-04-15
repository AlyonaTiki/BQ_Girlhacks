//images
const images = [
	"img/s1.jpeg",
	"img/p1.jpg",
	"img/a1.jpg",
	"img/c1.jpg"
];

//questions and answers
const questions = [

    {
        problem: "1) Do you like to learn how the world works?",
        option: {
            A: "yes, I do",
            B: "no"
        },
       answer: "yes,I do"
	},
    {
        problem: "2) do you like to play puzzle game?",
        option: {
            A: "yes, I have one",
            B: "no"
        },
       answer: "yes, I have one"
	},
    {
        problem: "3) Can you count how many apples?",
        option: {
            A: "yes, there are 5 apples",
            B: "no"
        },
        answer: "yes, there are 5 apples"
	},
    {
        problem: "4) do you like building towers?",
        option: {
            A: "yes",
            B: "no"
        },
        answer: "yes"
	}
];

//display the questions and images

const container = document.getElementById("container");
for (let i = 0; i < images.length; i++) {

    const imgContainer = document.createElement('div');

    const problems = document.createElement('p');
    problems.classList.add("problem");
    problems.textContent = questions[i].problem;
    imgContainer.appendChild(problems);

    const img = new Image();
    img.src = images[i];
    img.id = "img" + i;
    img.classList.add("slide");
    imgContainer.appendChild(img);

    for (let key in questions[i].option) {
        let option = questions[i].option[key];
        const options = document.createElement('button');
        options.classList.add("option");
        options.textContent = option;
        var counterS = 0;
        var counterT = 0;
        var counterE = 0;
        var counterM = 0;

        options.onclick = function () {
            options.disabled = true;
            if (questions[i].answer == "yes,I do") {
                counterS++;
            } else if
                (questions[i].answer == "yes, I have one") {
                counterT++;
            } else if
                (questions[i].answer == "yes, there are 5 apples") {
                counterE++;
            } else if
                (questions[i].answer == "yes") {
                counterM++;
            } 
            
            console.log(counterS);
            console.log(counterT);
            console.log(counterE);
            console.log(counterM);
         
        };
        imgContainer.appendChild(options);
    }
    container.appendChild(imgContainer);
}

//html elements
var submitButton = document.getElementById('submit');
var resultsContainer = document.getElementById('results');

// on submit, show results
submitButton.onclick = function () {
    var S = '';
    var T = '';
    var E = '';
    var M = '';
	
    if (counterS >= 1) {
     	S = ' You are interested in Science, try our S game \n';
    }  
    if (counterT >= 1) {
        T = ' You are a tech future, try our T game';
    }
    if (counterE >= 1) {
        E = ' Engineering might be interesting for you, try our Circuit game';
    }
    if (counterM >= 1) {
        M = ' You are math profi, try our M game';
    }
    resultsContainer.innerHTML = S + T + E + M;
}
