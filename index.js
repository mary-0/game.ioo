function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

function meteorFly() {
	//инициализация метеорита (случайного)
	$(".met").css("top","0px");
	$(".met").css("left", getRandomArbitrary(15,955) + "px");
	$(".met").css("display","block");

	// код полета метеорита
	var a = setInterval(function() {
		var currentTop = parseInt($(".met").css("top"));
		if (currentTop >= 600) {
			clearInterval(a);
			// Вот гщде-то тута юудет уменьшение очков юзверя
			$(".met").css("display","none");
			meteorFly();
		} else {
			$(".met").css("top",currentTop+5 + "px");
		}

	},50);
}

function fire() {
	var a = setInterval(function() {
		if (parseInt($(".p").css("bottom")) >=600) {
			clearInterval(a);
			$(".p").css("bottom", "0px");
		} else {
			var pbottom = parseInt($(".p").css("bottom"));
			$(".p").css("bottom", pbottom+5 + "px");
		}
	},5);
}

$(document).ready(function() {

	var korCurrent = 50;


	$("button").click(function() {

		$("button").attr("disabled",true);

		meteorFly();

		var b = setInterval(function() {
			var current = parseInt($(".timer").text());
			if (current == 0) {
				clearInterval(b);
	
			} else {
				current--;
				$(".timer").text(current);				
			}

		}, 1000);

		$(document).keydown(function(event) {
			if (event.which == 32) {

			} else if (event.which == 39){
				if (korCurrent != 1000) {
					$(".kor").css("left", parseInt($(".kor").css("left"))+ 5 + "px");
					korCurrent += 5;	
				}
						
			} else if (event.which == 37){
				if (korCurrent != 50) {
					$(".kor").css("left", parseInt($(".kor").css("left"))- 5 + "px");
					korCurrent -= 5;
				}
						
			}
		});

		$(document).keydown(function(event) {

			if (event.which == 38) {
				fire();
			}
			
		});
	})
	
});