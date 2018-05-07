		
		window.onscroll = function() {scrollFunction()};

		function scrollFunction() {
		    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		        document.getElementById("toTop").style.display = "block";
		    } else {
		        document.getElementById("toTop").style.display = "none";
		    }
		}


				
		scrollTo = (element) => {

			var scrollSize = 0;

			var monitorWidth = document.documentElement.clientWidth;

			if (monitorWidth < 992 && monitorWidth > 590) {
				scrollSize = 900;
			} else if (monitorWidth <= 590) {
				scrollSize = 600;
			}

			window.scroll({
				behavior: 'smooth',
			    left: 0,
			    top: element.offsetTop + scrollSize
			});
		}

		document.getElementById("1").addEventListener('click', () => {
		  scrollTo(document.getElementById("about"));
		});

		document.getElementById("2").addEventListener('click', () => {
		  scrollTo(document.getElementById("skills"));
		});

		document.getElementById("3").addEventListener('click', () => {
		  scrollTo(document.getElementById("experience"));
		});

		document.getElementById("4").addEventListener('click', () => {
		  scrollTo(document.getElementById("education"));
		});

		document.getElementById("5").addEventListener('click', () => {
		  scrollTo(document.getElementById("hobbies"));
		});

		document.getElementById("toTop").addEventListener('click', () => {
		  scrollTo(document.getElementById("about"));
		});