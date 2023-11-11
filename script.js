document.addEventListener("DOMContentLoaded", () => {
	const canvas = document.getElementById("matrix-canvas");
	const context = canvas.getContext("2d");

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	window.addEventListener("resize", () => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	});

	const katakana =
		"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
	const latin = katakana.split("");

	const fontSize = 16;
	const columns = canvas.width / fontSize;

	const rainDrops = [];

	for (let x = 0; x < columns; x++) {
		rainDrops[x] = 1;
	}

	const draw = () => {
		context.fillStyle = "rgba(0, 0, 0, 0.05)";
		context.fillRect(0, 0, canvas.width, canvas.height);

		context.fillStyle = "#0f0"; // Green text
		context.font = fontSize + "px monospace";

		for (let i = 0; i < rainDrops.length; i++) {
			const text = latin[Math.floor(Math.random() * latin.length)];
			context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

			if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
				rainDrops[i] = 0;
			}
			rainDrops[i]++;
		}
	};

	setInterval(draw, 30);

	// After a few seconds, hide the loading text and show the button
	setTimeout(() => {
		document.getElementById("loading").style.display = "none";
		document.getElementById("begin-btn").style.display = "block";
	}, 5000); // Adjust the time as needed (5000ms = 5 seconds)

	const beginBtn = document.getElementById("begin-btn");
	const aboutBtn = document.getElementById("about-icon");
	const aboutBtn2 = document.getElementById("about-icon-2");
	const homeBtn = document.getElementById("home-icon");
	const skillBtn = document.getElementById("skill-icon");
	const profileTile = document.getElementById("profile-tile");
	const aboutTile = document.getElementById("about-section-tile");
	const skillTile = document.getElementById("skill-section-tile");
	const portfolioBtn = document.getElementById("portfolio-icon");
	const portfolioTile = document.getElementById("portfolio-section-tile");
	const skillBtn2 = document.getElementById("skill-icon-2");
	const viewWorkBtn = document.getElementById("view-work");
	const contactBtn = document.getElementById("contact-icon");
	const portfolioBtn2 = document.getElementById("portfolio-icon-2");
	const contactTile = document.getElementById("contact-section-tile");
	const homeBtn2 = document.getElementById("home-icon-2");

	beginBtn.addEventListener("click", () => {
		// Hide the button
		beginBtn.style.display = "none";

		// After a brief delay, display the profile tile
		setTimeout(() => {
			profileTile.style.display = "block";
			profileTile.style.opacity = 0;
			profileTile.style.top = "60%"; // Start slightly off-center

			// Animate the opacity and sliding effect
			setTimeout(() => {
				profileTile.style.opacity = 1;
				profileTile.style.top = "50%"; // Slide to center
			}, 100);
		}, 500); // This delay allows for a smooth transition, adjust timing as needed
	});

	aboutBtn.addEventListener("click", () => {
		profileTile.style.display = "none";

		setTimeout(() => {
			aboutTile.style.display = "block";
			aboutTile.style.opacity = 0;
			aboutTile.style.top = "60%";

			setTimeout(() => {
				aboutTile.style.opacity = 1;
				aboutTile.style.top = "50%";
			}, 100);
		}, 500);
	});

	homeBtn.addEventListener("click", () => {
		aboutTile.style.display = "none";

		setTimeout(() => {
			profileTile.style.display = "block";
			profileTile.style.opacity = 0;
			profileTile.style.up = "60%";

			setTimeout(() => {
				profileTile.style.opacity = 1;
				profileTile.style.up = "50%";
			}, 100);
		}, 500);
	});

	skillBtn.addEventListener("click", () => {
		aboutTile.style.display = "none";

		setTimeout(() => {
			skillTile.style.display = "block";
			skillTile.style.opacity = 0;
			skillTile.style.up = "60%";

			setTimeout(() => {
				skillTile.style.opacity = 1;
				skillTile.style.up = "50%";
			}, 100);
		}, 500);
	});

	aboutBtn2.addEventListener("click", () => {
		skillTile.style.display = "none";

		setTimeout(() => {
			aboutTile.style.display = "block";
			aboutTile.style.opacity = 0;
			aboutTile.style.top = "60%";

			setTimeout(() => {
				aboutTile.style.opacity = 1;
				aboutTile.style.top = "50%";
			}, 100);
		}, 500);
	});

	portfolioBtn.addEventListener("click", () => {
		skillTile.style.display = "none";

		setTimeout(() => {
			portfolioTile.style.display = "block";
			portfolioTile.style.opacity = 0;
			portfolioTile.style.top = "60%";

			setTimeout(() => {
				portfolioTile.style.opacity = 1;
				portfolioTile.style.top = "50%";
			}, 100);
		}, 500);
	});

	viewWorkBtn.addEventListener("click", () => {
		profileTile.style.display = "none";

		setTimeout(() => {
			portfolioTile.style.display = "block";
			portfolioTile.style.opacity = 0;
			portfolioTile.style.top = "60%";

			setTimeout(() => {
				portfolioTile.style.opacity = 1;
				portfolioTile.style.top = "50%";
			}, 100);
		}, 500);
	});

	skillBtn2.addEventListener("click", () => {
		portfolioTile.style.display = "none";

		setTimeout(() => {
			skillTile.style.display = "block";
			skillTile.style.opacity = 0;
			skillTile.style.top = "60%";

			setTimeout(() => {
				skillTile.style.opacity = 1;
				skillTile.style.top = "50%";
			}, 100);
		}, 500);
	});

	contactBtn.addEventListener("click", () => {
		portfolioTile.style.display = "none";

		setTimeout(() => {
			contactTile.style.display = "block";
			contactTile.style.opacity = 0;
			contactTile.style.top = "60%";

			setTimeout(() => {
				contactTile.style.opacity = 1;
				contactTile.style.top = "50%";
			}, 100);
		}, 500);
	});

	portfolioBtn2.addEventListener("click", () => {
		contactTile.style.display = "none";

		setTimeout(() => {
			portfolioTile.style.display = "block";
			portfolioTile.style.opacity = 0;
			portfolioTile.style.top = "60%";

			setTimeout(() => {
				portfolioTile.style.opacity = 1;
				portfolioTile.style.top = "50%";
			}, 100);
		}, 500);
	});

	homeBtn2.addEventListener("click", () => {
		contactTile.style.display = "none";

		setTimeout(() => {
			profileTile.style.display = "block";
			profileTile.style.opacity = 0;
			profileTile.style.top = "60%";

			setTimeout(() => {
				profileTile.style.opacity = 1;
				profileTile.style.top = "50%";
			}, 100);
		}, 500);
	});

	function downloadPDF() {
		var a = document.createElement("a");
		a.href = "assets/dasun_sucharith_cv.pdf";
		a.download = "dasun_sucharith_cv.pdf";
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	}

	document
		.getElementById("download-resume")
		.addEventListener("click", downloadPDF);
});

var swiper = new Swiper(".swiper-container", {
	slidesPerView: 3,
	spaceBetween: 20,
	centeredSlides: true,
	loop: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
    },
    breakpoints: {
        // when window width is <= 768px
        768: {
            slidesPerView: 1,
            spaceBetween: 10
        },
    },
});
