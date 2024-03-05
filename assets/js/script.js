$(function () {
	var Accordion = function (el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
	}

	Accordion.prototype.dropdown = function (e) {
		var $el = e.data.el;
		$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}

	var accordion = new Accordion($('#accordion1,#accordion2,#accordion3'), false);
});



// counter js

$(document).ready(function () {

	var counters = $(".count");
	var countersQuantity = counters.length;
	var counter = [];

	for (i = 0; i < countersQuantity; i++) {
		counter[i] = parseInt(counters[i].innerHTML);
	}

	var count = function (start, value, id) {
		var localStart = start;
		setInterval(function () {
			if (localStart < value) {
				localStart++;
				counters[id].innerHTML = localStart;
			}
		},);
	}

	for (j = 0; j < countersQuantity; j++) {
		count(0, counter[j], j);
	}
});
$('.counting').each(function () {
	var $this = $(this),
		countTo = $this.attr('data-count');

	$({ countNum: $this.text() }).animate({
		countNum: countTo
	},

		{

			duration: 3000,
			easing: 'linear',
			step: function () {
				$this.text(Math.floor(this.countNum));
			},
			complete: function () {
				$this.text(this.countNum);
				//alert('finished');
			}

		});


});

$(document).ready(function () {
	$(".toggle").click(function () {
		$(".slide").toggleClass("compact");
		$(".aside").toggleClass("extend");
		$(".hd").toggleClass("hide");
		$(".m-hide").toggleClass("hide");
		$(".submenu").toggleClass("submenu-2");
		$(".accordion .link").toggleClass("padding-0");
		$(".logo").toggleClass("hide");
		$(".img-none").toggleClass("img-flex");
		$(".link1").toggleClass("width");
		$(".pd").toggleClass("side");
		$(".navbar .menu").toggleClass("height");
	});
});




$("#toggle").click(function () {
	$(this).toggleClass("on");
	$("#menu").slideToggle();
});
$(".sm-bar").click(function () {
	$("#nav").slideToggle();
});


$(".aside").on("scroll", function () {
	if ($(".aside").scrollTop() > 50) {
		$(".try").css("background-color", "#05192f");

	} else {
		$(".try").css("background-color", "transparent");

	}
});


$(".aside").on("scroll", function () {
	if ($(".aside").scrollTop() > 200) {
		$(".top-btn").css("display", "flex");
	} else {
		$(".top-btn").css("display", "none");
	}
});