

// Nombre alÃ©atoire entier
function randInt(min, max){
	return Math.floor(Math.random() * (max - min + 1) + min );
}



/*************************************************************************/
/********************            FONCTIONS            ********************/
/*************************************************************************/
$(document).ready(function(){

	    var menuAccueil				= $('#menuAccueil');
	    var menuPropos				= $('#menuPropos');
	    var menuCompetences			= $('#menuCompetences');
	    var menuFormation			= $('#menuFormation');
	    var menuExperience			= $('#menuExperience');
	    var menuContact				= $('#menuContact');
	    var menuTous				= [	$('#menuAccueil'), 
	    								$('#menuPropos'), 
	    								$('#menuCompetences'), 
	    								$('#menuFormation'), 
	    								$('#menuExperience'),
	    								$('#menuContact')];
	    var slideAccueil			= $('#slideAccueil');
	    var slidePropos				= $('#slidePropos');
	    var slideCompetences		= $('#slideCompetences');
	    var slideFormation			= $('#slideFormation');
	    var slideExperience			= $('#slideExperience');
	    var slideContact			= $('#slideContact');
	    var isActive;


/****** MENU MOBILE ******/
		var burgerContainer = document.querySelector('#menu-burger');
		var burgerMenu = document.querySelector('#menu-burger .fa-bars');
		var burgerItems = document.querySelectorAll('#menu-burger ul li');

    	burgerMenu.addEventListener("click", onClickMenu.bind(this));

    	function onClickMenu() {
    		if(burgerMenu.classList.contains('fa-times')){
    			closeMenu();
    			return;
    		}
    		burgerContainer.classList.add("opened");
    		burgerMenu.classList.add("fa-times");
    		burgerMenu = document.querySelector('.fa-times')
    		burgerMenu.onclick = closeMenu;
    		setTimeout(function(){slideMenuItems(0);},10);	
    		console.log("openmenu");
    	}

    	function slideMenuItems(param){

    		param = isNaN(param) ? 0 : param;

				burgerItems[param].classList.add("slide");;
				if(param<burgerItems.length-1){
					param++;
					setTimeout(function(){slideMenuItems(param);},300);
				}
			}

    	function closeMenu(){
    		burgerContainer.classList.remove("opened");
    		burgerMenu.classList.remove("fa-times");
    	
    		burgerMenu.onclick = "";
    		for(var i=0;i<burgerItems.length;i++) {
    			burgerItems[i].classList.remove("slide");
    			console.log("closemenu");
    		}
    	}

/*
    $(window).on('scroll', function () {  

    ///////////////////////////// animation des sections au scroll
	    var bloc   			= $('.bloc-gauche, .bloc-droite');
	    var topBloc 		= $('.bloc-gauche, .bloc-droite').offset().top;
	    
	    var scroll 			= $(window).scrollTop();
    	var menu 			= $('#menu');
    	var menuItems 		= $(menu).find('li');
    	

        $(bloc).each(function() {
            
            var topBloc = $(this).offset().top - 300;

                if ( topBloc < scroll ) {
                
	                $(this).css("transform", "translate(0,0)");
	                $(this).css("opacity", "1");
                	var h3Bloc = $(this).children('h3');
                	// $(h3Bloc).css("transform", "translate(0,0)");
                	$(h3Bloc).css("opacity", "1");
                };
        });


        var maPosition = scroll+300;

	    if (maPosition < slidePropos.offset().top) {
	    	$(menuTous).each(function() {
	    		$(this).removeClass('active');
	    	});
	    	$(menuAccueil).addClass('active');
	    	isActive = 0;
	    } else if (maPosition < slideCompetences.offset().top) {
	    	$(menuTous).each(function() {
	    		$(this).removeClass('active');	    		
	    	});
	    	$(menuTous[isActive]).removeClass('active');
	    	$(menuPropos).addClass('active');
	    	isActive = 1;
	    } else if (maPosition < slideFormation.offset().top) {
	    	$(menuTous).each(function() {
	    		$(this).removeClass('active');	    		
	    	});
	    	$(menuTous[isActive]).removeClass('active');
	    	$(menuCompetences).addClass('active');
	    	isActive = 2;
	    } else if (maPosition < slideExperience.offset().top) {
	    	$(menuTous).each(function() {
	    		$(this).removeClass('active');	    		
	    	});
	    	$(menuTous[isActive]).removeClass('active');
	    	$(menuFormation).addClass('active');
	    	isActive = 3;
	    } else if (maPosition < slideContact.offset().top) {
	    	$(menuTous).each(function() {
	    		$(this).removeClass('active');	    		
	    	});
	    	$(menuTous[isActive]).removeClass('active');
	    	$(menuExperience).addClass('active');
	    	isActive = 4;
	    } else if (maPosition > slideContact.offset().top) {
	    	$(menuTous).each(function() {
	    		$(this).removeClass('active');	    		
	    	});
	    	$(menuTous[isActive]).removeClass('active');
	    	$(menuContact).addClass('active');
	    	isActive = 5;
	    }

    });
    	*/

//////////// ANIMATION TITRE SLIDE ACCUEIL    	
    	var tabLetters = [];
    	var idInterval;    	
    	
    	function animation() {

    		var lettreAnime = document.querySelector('.home .interval .lettre');

	    	if (lettreAnime == null) {
	    		clearInterval(idInterval);
	    	} else {
		    	lettreAnime.classList.add('lettre-anime');
		    	lettreAnime.classList.remove('lettre');
	    	}

	    };

    	function lancerLeTimerLettres(){
    		idInterval = setInterval(animation, 100);
    	}

	    $('.home .interval').each(function(){
    		let phrase = $(this).text();
    		tabLetters = [];
	    	for (var i = 0 ; i < phrase.length ; i++) {
	    		tabLetters.push('<span class="lettre">' + phrase[i] + '</span>');
	    	}

	    	$(this).html(tabLetters.join(''));

    	});

    	lancerLeTimerLettres();

 
////////////////////// SVG
/*
var tete = $('#cercle-tete');
var oeilG = $('#oeilG');
var oeilD = $('#oeilD');
var oreilleG = $('#oreilleG');
var oreilleD = $('#oreilleD');
var bouton = $('button');

function baisserLaTete() {
  tete.animate({cy: '130px'});
  oeilG.animate({cy: '130px'});
  oeilD.animate({cy: '130px'});
  oreilleG.attr('transform', 'translate(0,30)');
  oreilleD.attr('transform', 'translate(0,30)');
}

bouton.click(baisserLaTete);*/




});