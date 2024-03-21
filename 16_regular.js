function bbtagit(text) {
  text = text.replace(/\[u\]([\s\S]*)\[\/u\]/gim, "<u>$1</u>");

  return text;
}

var line = "[u]мой\n текст[/u]";
console.log(bbtagit(line));
var text = " [b]a [u]b[/u] c [/b] ";

var reg = /\[([bus])\](.*?)\[\/\1\] /;
text = text.replace(reg, "<$1>$2</$1>"); // <b>a [u]b[/u] c </b>
console.log(text);

console.log("2 ++ 1".replace(/\+/g, "*"));

var str = "count 30 - 28, 18 - 2";
str = str.replace(/(\d+) - (\d+)/g, function (a, b, c) {
  return b - c;
});
console.log(str);
