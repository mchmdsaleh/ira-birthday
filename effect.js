$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		var polaroidIndex = 0;
		var leftPolaroidCount = 0;
		var rightPolaroidCount = 0;
		var polaroidContainer = $('#polaroid_background');
		var polaroidIntroTimeout = null;
		var polaroidPhotos = [
			{src: 'polaroid1.jpg', caption: 'Birthday Joy'},
			{src: 'polaroid2.jpg', caption: 'Sweet Memories'},
			{src: 'polaroid3.jpg', caption: 'Captured Smiles'},
			{src: 'polaroid4.jpg', caption: 'Golden Lights'},
			{src: 'polaroid5.jpg', caption: 'Party Vibes'},
			{src: 'polaroid6.jpg', caption: 'We Are The Best'}
		];

		function resetPolaroids() {
			polaroidContainer.empty();
			polaroidContainer.removeClass('is-active');
			polaroidIndex = 0;
			leftPolaroidCount = 0;
			rightPolaroidCount = 0;
			if (polaroidIntroTimeout) {
				clearTimeout(polaroidIntroTimeout);
				polaroidIntroTimeout = null;
			}
		}

		function buildPolaroid(photo, isLeft, stackPosition) {
			var rotationBase = isLeft ? -12 : 12;
			var rotationJitter = (Math.random() * 6) - 3;
			var verticalOffset = Math.min(10 + stackPosition * 9, 80);
			var horizontalOffset = 4 + Math.min(stackPosition * 1.2, 6);
			var polaroid = $('<figure/>', {
				'class': 'polaroid ' + (isLeft ? 'polaroid--left' : 'polaroid--right')
			}).css({
				top: verticalOffset + 'vh',
				'--rotation': (rotationBase + rotationJitter) + 'deg',
				'--offset-x': horizontalOffset + 'vw',
				'z-index': 5 + stackPosition
			});

			polaroid.append(
				$('<img/>', { src: photo.src, alt: photo.caption }),
				$('<figcaption/>', { 'class': 'caption', text: photo.caption })
			);

			return polaroid;
		}

		function showNextPolaroid() {
			if (polaroidIndex >= polaroidPhotos.length) {
				return false;
			}

			var isLeft = polaroidIndex % 2 === 0;
			var stackPosition = isLeft ? leftPolaroidCount : rightPolaroidCount;
			var polaroid = buildPolaroid(polaroidPhotos[polaroidIndex], isLeft, stackPosition);

			if (!polaroidContainer.hasClass('is-active')) {
				polaroidContainer.addClass('is-active');
			}

			polaroidContainer.append(polaroid);

			requestAnimationFrame(function(){
				requestAnimationFrame(function(){
					polaroid.addClass('is-visible');
				});
			});

			polaroidIndex += 1;
			if (isLeft) {
				leftPolaroidCount += 1;
			} else {
				rightPolaroidCount += 1;
			}

			return true;
		}

		function startPolaroidSequence() {
			resetPolaroids();
			if (!polaroidPhotos.length) {
				return;
			}

			polaroidContainer.addClass('is-active');

			if (showNextPolaroid() && polaroidIndex < polaroidPhotos.length) {
				polaroidIntroTimeout = setTimeout(function(){
					showNextPolaroid();
					polaroidIntroTimeout = null;
				}, 360);
			}
		}

		function advancePolaroids() {
			showNextPolaroid();
		}

		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		startPolaroidSequence();
		$('.bannar').addClass('bannar-come');
		$('#inline_cake').hide();
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		advancePolaroids();
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('#inline_cake').fadeIn('slow');
		advancePolaroids();
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		advancePolaroids();
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		advancePolaroids();
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b11').animate({top:240, left: vw-350},500);
		$('#b22').animate({top:240, left: vw-250},500);
		$('#b33').animate({top:240, left: vw-150},500);
		$('#b44').animate({top:240, left: vw-50},500);
		$('#b55').animate({top:240, left: vw+50},500);
		$('#b66').animate({top:240, left: vw+150},500);
		$('#b77').animate({top:240, left: vw+250},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		advancePolaroids();
		$(this).fadeOut('slow');
		$('.cake, #inline_cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow');
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
		
	});
});




//alert('hello');
