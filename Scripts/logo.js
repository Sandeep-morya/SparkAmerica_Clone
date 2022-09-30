function header() {
  let header = document.querySelector("#header");
  let logo = document.createElement("div");
  logo.id = "logo";
  let logo_image = document.createElement("img");
  logo_image.src = "./Images/homepage/SparkAmericaLogo.png";
  logo_image.addEventListener("click",e=>{
    window.location.href="./index.html"
  });
  logo_image.style.cursor="pointer";
  logo.append(logo_image);

  let navbar = document.createElement("div");
  navbar.id = "navbar";
  let a2 = document.createElement("a");
  a2.href = "./joinTheMovement.html";
  a2.innerText = "JOIN THE MOVEMENT";

  let a3 = document.createElement("a");
  a3.href = "./partners.html";
  a3.innerText = "PARTNERS";

  let a4 = document.createElement("a");
  a4.href = "./calendar.html";
  a4.innerText = "CALENDAR";

  let a5 = document.createElement("a");
  a5.href = "./theApp.html";
  a5.innerText = "THE APP";

  let a6 = document.createElement("a");
  a6.href = "./contactUs.html";
  a6.innerText = "CONTACT US";

  let a7 = document.createElement("a");
  a7.href = "./register.html";
  a7.innerText = "REGISTER";

  let fb = document.createElement("img");
  fb.id = "fb";
  fb.src = "./Images/homepage/fb.png";

  let insta = document.createElement("img");
  insta.id = "insta";
  insta.src = "./Images/homepage/insta.png";

  navbar.append(a2, a3, a4, a5, a6, a7, fb, insta);
  header.append(logo, navbar);
}
header();

function footer() {
  let footer = document.querySelector("#footer");
  let diversion = document.createElement("div");
  let ul1 = document.createElement("ul");
  ul1.type = "none";
  let L1 = document.createElement("li");
  L1.innerText = "CONTACT US";

  let L2 = document.createElement("li");
  let a0 = document.createElement("a");
  a0.href = "https://mail.google.com/";
  a0.innerText = "support@sparkamerica.com";
  L2.append(a0);

  let L3 = document.createElement("li");
  L3.innerText = "(888) 330-6891";

  let L4 = document.createElement("li");
  L4.innerText = "SparkAmerica";

  let L5 = document.createElement("li");
  L5.innerText = "P.O. Box 123, Oakmont, PA 15139";
  ul1.append(L1, L2, L3, L4, L5);

  let ul2 = document.createElement("ul");
  ul2.type = "none";

  let l1 = document.createElement("li");
  let a1 = document.createElement("a");
  a1.href = "./Index.html";
  a1.innerText = "SPARKAMERICA";
  l1.append(a1);

  let l2 = document.createElement("li");
  let a2 = document.createElement("a");
  a2.href = "./joinTheMovement.html";
  a2.innerText = "JOIN THE MOVEMENT";
  l2.append(a2);

  let l3 = document.createElement("li");
  let a3 = document.createElement("a");
  a3.href = "./partners.html";
  a3.innerText = "PARTNERS";
  l3.append(a3);

  let l4 = document.createElement("li");
  let a4 = document.createElement("a");
  a4.href = "./calendar.html";
  a4.innerText = "CALENDAR";
  l4.append(a4);

  let l5 = document.createElement("li");
  let a5 = document.createElement("a");
  a5.href = "./theApp.html";
  a5.innerText = "THE APP";
  l5.append(a5);

  let l6 = document.createElement("li");
  let a6 = document.createElement("a");
  a6.href = "./contactUs.html";
  a6.innerText = "CONTACT US";
  l6.append(a6);

  let l7 = document.createElement("li");
  let a7 = document.createElement("a");
  a7.href = "./register.html";
  a7.innerText = "REGISTER";
  l7.append(a7);
  ul2.append(l1, l2, l3, l4, l5, l6, l7);

  diversion.append(ul1, ul2);

  let paragraph = document.createElement("p");
  paragraph.innerText = "® 2020 PeopleOne Health. All Rights Reserved.";
  footer.append(diversion, paragraph);
}
footer();
