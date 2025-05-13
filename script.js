const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const menuLinks = document.querySelectorAll("#nav-links a");

if (hamburger && navLinks) {
	hamburger.addEventListener("click", () => {
		navLinks.classList.toggle("active");
		hamburger.classList.toggle("active");
	});

	menuLinks.forEach((link) => {
		link.addEventListener("click", () => {
			navLinks.classList.remove("active");
			hamburger.classList.remove("active");
		});
	});
}
