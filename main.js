let texts = ["HI", "ХАЙ", "ПРИВЕТИКИ", "ПРИВЕТ", "ХАЮШКИ", "HELLO", "!ПОКА"]

document.querySelector("b").innerHTML = texts[Math.round(Math.random() * (texts.length - 1))];
document.querySelector("title").innerHTML = document.querySelector("b").innerHTML;