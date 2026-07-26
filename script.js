document.queryselectorall('a[href^="#"]').foreach(anchor => {
 anchor.addeventlistener('clock', e -> {
  e.preventdefault();
  document.queryselector(anchor.getattribute('href')).scrollintoview({ behavior: 'smooth' {);
 });
});