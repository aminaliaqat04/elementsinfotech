import lottieWeb from "https://cdn.skypack.dev/lottie-web";
const banner = document.getElementById("banner-img");
lottieWeb.loadAnimation({
  container: banner,
  path: "./assets/json/powerful-apps.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
  name: "Banner Animation",
});

const aboutUs = document.getElementById("about-us-img");
lottieWeb.loadAnimation({
  container: aboutUs,
  path: "./assets/json/about-us.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
  name: "About Animation",
});

const aboutUsCircles = document.getElementById("about-us-circles-img");
lottieWeb.loadAnimation({
  container: aboutUsCircles,
  path: "./assets/json/about-us-circles.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
  name: "About Animation",
});

const missionCircles = document.getElementById("mission-bg-circles-img");
lottieWeb.loadAnimation({
  container: missionCircles,
  path: "./assets/json/circles.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
  name: "Mission Animation",
});

const businessApps = document.getElementById("business-apps-img");
lottieWeb.loadAnimation({
  container: businessApps,
  path: "./assets/json/business-idea-animation.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
  name: "Business Apps Animation",
});

const dataMigration = document.getElementById("data-migration-img");
lottieWeb.loadAnimation({
  container: dataMigration,
  path: "./assets/json/data-migration.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
  name: "Data Migration Animation",
});

const crmSystems = document.getElementById("crm-systems-img");
lottieWeb.loadAnimation({
  container: crmSystems,
  path: "./assets/json/crm-systems.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
  name: "CRM Systems Animation",
});

const startupSoftware = document.getElementById("startup-software-img");
lottieWeb.loadAnimation({
  container: startupSoftware,
  path: "./assets/json/startup-software.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
  name: "Startup Software Animation",
});

const consultancy = document.getElementById("consultancy-img");
lottieWeb.loadAnimation({
  container: consultancy,
  path: "./assets/json/consultancy.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
  name: "Consultancy Animation",
  rendererSettings: {
    className: 'consultancy',
  }
});

const whiteLabel = document.getElementById("white-label-img");
lottieWeb.loadAnimation({
  container: whiteLabel,
  path: "./assets/json/white-label.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
  name: "White Label Animation",
});

const faq = document.getElementById("faq-img");
lottieWeb.loadAnimation({
  container: faq,
  path: "./assets/json/faq.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
  name: "FAQ's Animation",
});

// container.addEventListener("click", () => {
//   animation.playSegments([0, 50], true);
// });
