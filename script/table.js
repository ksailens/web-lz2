var fotos = ["cirilla.jpg", "doctor_who.jpg", "dovakin.jpg", "geralt.jpg", "illidan.jpg",
    "jaina.jpeg", "Jean.jpeg", "konstantin.jpg", "legolas.jpg", "neo.jpg",
    "ragnaros.jpg", "silvana.jpeg", "tauriel.jpg", "thrall.jpg", "tiranda.png"];
var titles = ["Цирилла","Доктор Кто","Довакин","Геральт","Иллидан",
    "Джайна Праудмур","Джин Грей","Джон Константин","Леголас","Нео",
    "Рагнарос","Сильвана Ветрокрылая","Тауриэль","Тралл","Тиранда Шелест Ветра"];

function paintTable() {
    var tbl = "<table class=\"album\"";
    var f = 0;
    var t = 0;
    var f1 = 0;
    var t1 = 0;
    document.write(tbl);
    for (var i = 0; i < 6; i++) {
        document.write("<tr>");
        for (var j = 0; j < 5; j++) {
            if (i%2===0) {
                document.write("<td><img src=\"img/" + fotos[f] + "\" title=\""+titles[t1]+"\"></td>");
                f++;
                t1++;
            }
            else {
                document.write("<td><a href=\"img/" +fotos[f1] +"\" target=\"_blank\">"  + titles[t] + "</a></td>");
                f1++;
                t++;
            }
        }
        document.write("</tr>");
    }
    document.write("</table>");
}
