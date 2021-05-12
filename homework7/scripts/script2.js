var myArray = [
  "Зовнішній 1",
  "Зовнішній 2",
  [
    "Внутрішній 1",
    "Внутрішній 2",
    "Внутрішній 3",
    "Внутрішній 4",
    "Внутрішній 5",
  ],
  "Зовнішній 3",
  "Зовнішній 4",
  [
    "Внутрішній 1",
    "Внутрішній 2",
    "Внутрішній 3",
    "Внутрішній 4",
    "Внутрішній 5",
    "Внутрішній 6",
  ],
  "Зовнішній 5",
  "Зовнішній 6",
  "Зовнішній 7",
  [
    "Внутрішній 1", 
    "Внутрішній 2",
    "Внутрішній 3", 
    "Внутрішній 4"
  ],
  "Зовнішній 8",
];

/*function addLiInUl(root, item) {
  var ul = document.createElement("ul");
  var li;

  root.appendChild(ul);

  arr.forEach(function (item) {
    if (Array.isArray(item)) {
      arrToUl(li, item);
      return;
    }

    li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    ul.appendChild(li);
  });
}

var div = document.getElementById("myList2");

addLiInUl(div, myArray);*/
function iter(target) {
    var ul = document.createElement('ul'),
        li;

    target.appendChild(ul);
    return function (a) {
        if (Array.isArray(a)) {
            if (!li) {
                li = document.createElement('li');
                ul.appendChild(li);
            }
            a.forEach(iter(li));
            return;
        }
        li = document.createElement('li');
        li.appendChild(document.createTextNode(a));
        ul.appendChild(li);
    };
}
myArray.forEach(iter(document.getElementById('myList2')));