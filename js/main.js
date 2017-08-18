$(document).ready(function () {

    //Текст для каждой машины
    var text_array = [
        {name: "Майбах тип «DS 8»", descr: "Майбах Созданный в 30-е годы, это был один из крупнейших немецких автомобилей. По своим ходовым качествам и удобству этот шикарный лимузин не уступал автомобилям «Роллс-Ройса»."},
        {name: "Фольксваген «Жук» 1951 г.", descr: "Фольксваген «Жук» 1951 г Созданный в 30-е годы, это был один из крупнейших немецких автомобилей. По своим ходовым качествам и удобству этот шикарный лимузин не уступал автомобилям «Роллс-Ройса»"},
        {name: "Фольксваген «VW 1300»", descr: "Фольксваген «VW 1300» Созданный в 20-е годы, это был один из крупнейших немецких автомобилей. По своим ходовым качествам и удобству этот шикарный лимузин не уступал автомобилям «Роллс-Ройса»."},
        {name: "Horch модель «951 А»", descr: "Horch модель «951 А» Созданный в 10-е годы, это был один из крупнейших немецких автомобилей. По своим ходовым качествам и удобству этот шикарный лимузин не уступал автомобилям «Роллс-Ройса»."},
        {name: "«Ситроен тип А»", descr: "«Ситроен тип А» Созданный в 50-е годы, это был один из крупнейших немецких автомобилей. По своим ходовым качествам и удобству этот шикарный лимузин не уступал автомобилям «Роллс-Ройса»."}
    ];

    //Проверка на принадлежность машин заданной стране
   /* var name_countries = [
        {name:"Россия"},
        {name:"Франция"},
        {name:"Германия"},
        {name:"США"}
    ];

    var k = [];
    for (var m = 0; m < $(".countries span").length; m++) {
        k[m] = $(".countries span").eq(m).text();
    }
    console.log(k);*/

    //Модальное окно
    $(".buy").click(function () {
        $("#ouibounce-modal").fadeIn(200);
    });
    $(".popup__cross").click(function () {
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
        } else {
            $(".specifications").width(322);
        }
    }
    scrollCheck();
});








