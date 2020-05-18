document.addEventListener("DOMContentLoaded", initJs)



function initJs() {
	const d = document;
	const w = window;
	const header_search = d.querySelector('.header__search');
	const search_icon = d.querySelector('.header__search img');
	const header_ddown = d.querySelector('.header__contacts-ddown');
	const header__ddownEl = d.querySelector('.header__contacts-items');
	const read_more_ddown = d.querySelector('.btn_ddown');
	const desc_ddown = d.querySelector('.top__descr');
	const left_menu_btn = d.querySelector('.header__left-btn');
	const nav = d.querySelector('.header__left nav');
	const nav_soc = d.querySelector('.header__right');
	const mob_call_icon = d.querySelector('.header__mob-contacts');
	const mob_call_ddown = d.querySelector('.header__mob-contacts-items');
	const kika_logo = d.querySelector('.header__logo');
	const kika_mob_logo = d.querySelector('.header__mob-logo');
	const salons_slider =  d.querySelector('.slider__items');
	const instafeed = d.getElementById('instafeed');
	const price_slider = d.querySelector('.price__slider-items');
	const price_slider_one = d.querySelector('.price__vacancy-items')
	const price_ddown = d.querySelector('.price-in__ddown');
	const price_list = d.querySelector('.price-in__service-list');
	const price_slider2 = d.querySelector('.price-in__slider-items');
	const salons_ddown = d.querySelector('.salons-mob__ddown');
	const salons_list = d.querySelector('.salons-mob__address-list');
	const ph_slider = d.querySelector('.ph-slider__items');
	const vd_slider = d.querySelector('.vd-slider__items');

	const device = {
        'md' : w.matchMedia("(max-width: 769px)").matches
    }

	search_icon.addEventListener('click', e=>{
		if(header_search.classList.contains('active')){
			header_search.classList.remove('active');
		}else{
			header_search.classList.add('active');
		}
	}
	)

	left_menu_btn.addEventListener('click', e=>{
		if(nav.classList.contains('active')){
			nav.classList.remove('active');
			nav_soc.classList.remove('active');
			left_menu_btn.classList.remove('active');
			mob_call_icon.classList.remove('active');
		}else{
			nav.classList.add('active');
			nav_soc.classList.add('active');
			left_menu_btn.classList.add('active');
			mob_call_icon.classList.add('active');
		}
	}
	)

	mob_call_icon.addEventListener('click', e=>{
		if(mob_call_ddown.classList.contains('slide')){
			mob_call_ddown.classList.remove('slide');
			mob_call_icon.classList.remove('slide');
			left_menu_btn.classList.remove('slide');
			kika_logo.classList.remove('slide');
			kika_mob_logo.classList.remove('slide');
		}else{
			mob_call_ddown.classList.add('slide');
			mob_call_icon.classList.add('slide');
			left_menu_btn.classList.add('slide');
			kika_logo.classList.add('slide');
			kika_mob_logo.classList.add('slide');
		}
	}
	)

	header_ddown.addEventListener('click', e=>{
		if(header__ddownEl.classList.contains('active-el')){
			header__ddownEl.classList.remove('active-el');
		}else{
			header__ddownEl.classList.add('active-el');
		}
	}
	)

	if(read_more_ddown){
		read_more_ddown.addEventListener('click', e=>{
			if(desc_ddown.classList.contains('active')){
				desc_ddown.classList.remove('active');
				read_more_ddown.textContent = "Читать больше";
			}else{
				desc_ddown.classList.add('active');
				read_more_ddown.textContent = "Читать меньше";
			}
		}
		)
	}

	if(price_ddown){
		price_ddown.addEventListener('click', e=>{
			if(price_list.classList.contains('active')){
				price_list.classList.remove('active');
			}else{
				price_list.classList.add('active');
			}
		}
		)
	}

	if(salons_ddown){
		salons_ddown.addEventListener('click', e=>{
			if(salons_list.classList.contains('active')){
				salons_list.classList.remove('active');
			}else{
				salons_list.classList.add('active');
			}
		}
		)
	}


	if(salons_slider){
		$(salons_slider).slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1
		})
		if(window.matchMedia("(max-width: 992px)").matches){
			$(salons_slider).slick('unslick');
		}
	}

	if(price_slider){
		$(price_slider).slick({
			infinite: false,
			slidesToShow: 4,
			slidesToScroll: 1,
			centerMode: true,
			vertical: true,
			focusOnSelect: true,
			asNavFor: price_slider_one,
			responsive: [
				{
					breakpoint: 789,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3
					}
				}
			]
		})
		$(price_slider_one).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			infinite: false,
			dots: false,
			fade: true,
			asNavFor: price_slider
		  });
	}

	if(price_slider2){
		$(price_slider2).slick({
			infinite: false,
			slidesToShow: 4,
			slidesToScroll: 1,
			centerMode: true,
			vertical: true,
			focusOnSelect: true,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3
					}
				}
			]
		})
	}

	if(ph_slider){
		$(ph_slider).slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
		})
	}
	if(vd_slider){
		$(vd_slider).slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2
					}
				}
			]
		})
	}

	if(instafeed) {
		const targetUrl = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=341164711.1677ed0.a852694971fd49d487744fc79080a517&count=9'
		fetch(targetUrl)
		.then(res => res.json())
		.then(res => {
			  res.data.forEach(el => {
				  let img     = d.createElement('img');
				  let li      = d.createElement('li');
				  let link    = d.createElement('a');
					  li.className = "instafeed__item";
					  img.src = el.images.low_resolution.url;
					  link.href = el.link;
					  link.target = '_blank';
					  link.appendChild(img);
					  li.appendChild(link);
					  instafeed.appendChild(li);
			  });
		})
		.catch(err => console.error('Insta Error:', err));
	};

	// if(price_slider){
	// 	let slide_hover = d.querySelectorAll('.price__slider-item')
	// 		slide_hover.forEach(el=>{
	// 			el.addEventListener('mouseover', e=>{
	// 			console.log(el);
	// 		})
	// 	})
		
	// }

	$('.overlay-video').parent().click(function () {

		if($(this).children(".overlay-video").get(0).paused){       
	   $(this).children(".overlay-video").get(0).play();   
	  $(this).children(".playpause").fadeOut();
	  
		  }else{      
	   $(this).children(".overlay-video").get(0).pause();
	  
		$(this).children(".playpause").fadeIn();
	  
		  }
	  
	  });


	


}

// var map;
// 	if(document.getElementById('map')){
//     function initMap() {
//         map = new google.maps.Map(document.getElementById('map'), {
//           center: {lat: 50.423558, lng: 30.541601},
// 		  zoom: 15,
// 		  icon: { url: '/img/icons/maps-ico.png'}
//         });
// 	  }
// 	}

	

	if(document.getElementById('map')){
	  function initMap() {

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: {lat: 50.423558, lng: 30.541601}
		});
		
		var locations = [
			{lat: 50.423558, lng: 30.541601},
			{lat: 50.437324, lng: 30.513197},
			{lat: 50.421388, lng: 30.552531},
			{lat: 50.437353, lng: 30.545127},
			{lat: 50.444366, lng: 30.526756},
			{lat: 50.343234, lng: 30.552141},
			{lat: 50.439792, lng: 30.521257}
		  ]

        // Create an array of alphabetical characters used to label the markers.
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.
        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
	  }
	}else{
		function initMap() {
		let lat = Number(document.getElementById('map2').dataset.lat);
		let lng = Number(document.getElementById('map2').dataset.lng);
		console.log(lat)
		var gMap = {
		//   LUkrainky: {
		// 	position: {lat:50.423558, lng: 30.541601},
		// 	map() { return newMap('map2', this.position) }
		//   },
		  Antonovytha: {
			position: {lat:lat, lng:lng},
			map() { return newMap('map2', this.position) }
		  },
		//   Bolsunovska: {
		// 	position: {lat:50.421388, lng:30.552531},
		// 	map() { return newMap('map3', this.position) }
		//   },
		//   Moskovskaya: {
		// 	position: {lat:50.437353, lng:30.545127},
		// 	map() { return newMap('map4', this.position) }
		//   },
		//   Luteranskaya: {
		// 	position: {lat:50.444366, lng:30.526756},
		// 	map() { return newMap('map5', this.position) }
		//   },
		//   Stolitchnoe: {
		// 	position: {lat:50.343234, lng:30.552141},
		// 	map() { return newMap('map6', this.position) }
		//   },
		//  ShotaRust: {
		// 	position: {lat:50.439792, lng:30.521257},
		// 	map() { return newMap('map7', this.position) }
		//   }
		};
	  
		for(let key in gMap) {
			gMarker(gMap[key].position, gMap[key].map() );
		}
	  
		function gMarker(position, map) {
		  return new google.maps.Marker({
			  position,
			  map,
			  animation: google.maps.Animation.BOUNCE,
			  icon: { url: '/img/icons/maps-ico.svg'}
		  })
		}
	  
		function newMap(id, position) {
		  return new google.maps.Map(document.getElementById(id), {zoom: 18, center: position})
		}
	  }
	}

function autoHeight(el) {
	el.style.height = (el.scrollHeight) + "px";
}