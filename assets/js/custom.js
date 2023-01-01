(function($) {
	$(document).ready(function(){
		$('.customer-logos').slick({
			slidesToShow: 6,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 1500,
			arrows: false,
			dots: false,
			pauseOnHover: false,
			responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 4
				}
			}, {
				breakpoint: 520,
				settings: {
					slidesToShow: 3
				}
			}]
		});
	});

	$(".navbar-toggle").click(function(event) {
		$(".navbar-collapse").toggle('in');
	});

// prettyPhoto
	jQuery(document).ready(function(){
		jQuery('a[data-gal]').each(function() {
			jQuery(this).attr('rel', jQuery(this).data('gal'));
		});  	
		jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:false,overlay_gallery: false,social_tools:false,deeplinking:false});
	}); 

	var form = document.getElementById("my-form");

	async function handleSubmit(event) {
		event.preventDefault();
		var status = document.getElementById("my-form-status");
		var data = new FormData(event.target);
		fetch(event.target.action, {
		method: form.method,
		body: data,
		headers: {
			'Accept': 'application/json'
		}
		}).then(response => {
		if (response.ok) {
			$('#info').show();

			status.innerHTML = "Thanks for your submission!";
			form.reset()

		} else {
			response.json().then(data => {
			if (Object.hasOwn(data, 'errors')) {
				$('#info').show();

				status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
			} else {
				$('#info').show();

				status.innerHTML = "Oops! There was a problem submitting your form"
			}
			})
		}
		}).catch(error => {
			$('#info').show();
			status.innerHTML = "Oops! There was a problem submitting your form"
		});
	}
	form.addEventListener("submit", handleSubmit)

			
})(jQuery);