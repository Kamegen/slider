
let links = [
"https://www.google.com",
"https://www.yandex.by",
"https://www.mail.ru",
"https://www.facebook.com",
"https://www.instagram.com",
"https://www.youtube.com"
]

let desc = [
    "1.Вероятно вы заметили, что два метода, indexOf() и search(), очень похожи друг на друга. Они принимают одинаковые аргументы (параметры)",
    "2.В связи с тем, что строка должна заключаться в кавычки, JavaScript не поймет следующую строку:",
    "3.Для решения этой проблемы нужно воспользоваться экранирующим символом. Экранирующий символ преобразует специальные символы в символы строки",
    "4.Все эти 6 экранированных символов изначально были введены для управления телетайпных, печатных и факс устройств. В HTML эти символы не имеют смысла.",
    "5.Если строковое выражение JavaScript не помещается на одной строке, то его можно перенести на новую строку. Делать перенос лучше всего после оператора:",
    "6.Обычно, строки JavaScript это примитивные значения, созданные при помощи литералов."
]

let n = 0, max = 6;

function timer() {
    if (++n > max) n = 1;

idLink.href = links[n-1];
linkDesc.href = links[n-1];
linkDesc.innerHTML = desc[n-1];
urlAdress.innerHTML = links[n-1].substring(12);

head.innerHTML = `Заголовок слайда №${n}`;
pic.src = `images/img${n}b.jpg`;



timerId = setTimeout(timer,2000);

}

function stop() {
    clearTimeout(timerId);  
}


function forward() {
    if (n >= max) n=1;
    else n++;
head.innerHTML = `Заголовок слайда №${n}`;

idLink.href = links[n-1];
linkDesc.href = links[n-1];
linkDesc.innerHTML = desc[n-1];
urlAdress.innerHTML = links[n-1].substring(12);


pic.src = `images/img${n}b.jpg`;

}

function previous() {
    if (n > 1 ) n--;
    else n=max

head.innerHTML = `Заголовок слайда №${n}`;
pic.src = `images/img${n}b.jpg`;



urlAdress.innerHTML = links[n-1].substring(12);

linkDesc.innerHTML = desc[n-1];
linkDesc.href = links[n-1];
idLink.href = links[n-1];

}