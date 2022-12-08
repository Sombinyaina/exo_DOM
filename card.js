const articles =[{
  title:"google",
  img:{src:"https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1",alt:""},
  description:"ceci est un site de google",
  url:"https://www.google.com/"
},{
  title:"youtube",
  img:{src:"https://www.youtube.com/img/desktop/yt_1200.png",alt:""},
  description:"ceci est un site pour youtube",
  url:"https://www.youtube.com/watch?v=UDdukH546fs"
},{title:"saha technologie",
  img:{src:"https://www.codeur.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK0YrRkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--1fb7f6737235e9163e4b59b2092ecad11bc33929/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtDOUFGcEF2UUIiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--390d91818ea65bf14712709ad6dcab7845a215cd/avatar.jpg",alt:""},
  description:"ceci est un site de saha technology",
  url:"https://www.codeur.com/-sahatechnology"
}];

const $dive = document.createElement("div");
document.body.append($dive);
$dive.classList.add("main");


for (let i = 0; i < articles.length; i++) {
  const data = articles[i];

  const $div = document.createElement("div");
  $dive.append($div);
  $div.classList.add("content");

  const $img = document.createElement("img");
  $img.setAttribute("src",data.img.src);
  $img.setAttribute("alt", data.description.alt);
  $img.setAttribute("height", "300");
  $div.append($img);

  const $title = document.createElement("h2");
  $title.textContent = data.title;
  $div.append($title);
  
  const $p = document.createElement("p");
  $p.textContent = data.description;
  $div.append($p);

  const $a = document.createElement("a");
  $a.setAttribute("href",data.url);
  $a.textContent = "Voir plus";
  $div.append($a);
}
