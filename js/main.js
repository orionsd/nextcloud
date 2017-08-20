$(document).ready(function () {

    //Текст для каждой машины
    var text_array = [
        {name: "Майбах тип «DS 8»", descr: "Майбах Созданный в 30-е годы, это был один из крупнейших немецких автомобилей. По своим ходовым качествам и удобству этот шикарный лимузин не уступал автомобилям «Роллс-Ройса»."},
        {name: "Фольксваген «Жук» 1951 г.", descr: "Фольксваген «Жук» 1951 г Созданный в 30-е годы, это был один из крупнейших немецких автомобилей. По своим ходовым качествам и удобству этот шикарный лимузин не уступал автомобилям «Роллс-Ройса»"},
        {name: "Фольксваген «VW 1300»", descr: "Фольксваген «VW 1300» Созданный в 20-е годы, это был один из крупнейших немецких автомобилей. По своим ходовым качествам и удобству этот шикарный лимузин не уступал автомобилям «Роллс-Ройса»."},
        {name: "Horch модель «951 А»", descr: "Horch модель «951 А» Созданный в 10-е годы, это был один из крупнейших немецких автомобилей. По своим ходовым качествам и удобству этот шикарный лимузин не уступал автомобилям «Роллс-Ройса»."},
        {name: "«Ситроен тип А»", descr: "«Ситроен тип А» Созданный в 50-е годы, это был один из крупнейших немецких автомобилей. По своим ходовым качествам и удобству этот шикарный лимузин не уступал автомобилям «Роллс-Ройса»."}
    ];

    //Проверка на принадлежность машин заданной стране - 12шт
    var name_countries = [
        {name:"Россия"},
        {name:"Франция"},
        {name:"Германия"},
        {name:"США"}
    ];

    var k = [];
    for (var m = 0; m < $(".countries span").length; m++) {
        k[m] = $(".countries span").eq(m).text();
    }

    function matchWords() {
        var rusCounter = 0,
            frCounter = 0,
            gerCounter = 0,
            usCounter = 0;
        for (var l = 0; l < k.length; l++) {
            if (name_countries[0].name == k[l]) {
                rusCounter++;
            }
            else if (name_countries[1].name == k[l]) {
                frCounter++;
            }
            else if (name_countries[2].name == k[l]) {
                gerCounter++;
            }
            else if (name_countries[3].name == k[l]) {
                usCounter++;
            }
        }
        if (gerCounter == 12) {
            $(".hint-ger").show();
        } else if (frCounter == 12) {
            $(".hint-fr").show();
        } else if (usCounter == 12) {
            $(".hint-us").show();
        } else if (rusCounter == 12) {
            $(".hint-rus").show();
        }
    }
    matchWords();


    //Модальное окно
    $(".buy").click(function () {
        $("#ouibounce-modal").fadeIn(200);
    });
    $(".popup-cross").click(function () {
        $('#ouibounce-modal').fadeOut(200);
    });

    //Первый активный элемент
    $(".buy").first().addClass("buy-active");
    $(".specifications div").first().addClass("specifications-active");
    $(".aside p").append(text_array[0].descr);

    //Переключение по продуктам
    $(".product").hover(
        function () {
            $(".aside p").empty();
            var $searchCar = $(this).find(".car-name").text();

            if ($(".buy").first().hasClass("buy-active")) {
                $(".buy").first().removeClass("buy-active");
                $(".specifications div").removeClass("specifications-active");
            }
            for (var i = 0; i < text_array.length; i++) {
                if ($searchCar == text_array[i].name) {
                    $(".aside p").append(text_array[i].descr);
                }
            }
        }
    );

    //Cо скролом и без - по psd макету)
    function scrollCheck() {
        var o = document.querySelector('.main');
        if (o.clientHeight < o.scrollHeight) {
            $(".popup").width(498);
        } else {
            $(".specifications").width(322);
            $(".popup").width(481);
        }
    }
    scrollCheck();

});