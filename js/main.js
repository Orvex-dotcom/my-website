(function () {
  /* ---- Thumbnail reel: each thumbnail appears in exactly one row ---- */
  var DIMS = [[800, 450], [800, 450], [800, 435], [800, 453], [800, 425], [800, 480], [800, 439], [800, 455], [800, 442], [800, 452], [800, 446], [800, 452], [800, 451], [800, 452], [800, 443], [800, 472], [800, 448], [800, 449], [800, 441], [800, 440], [800, 422], [800, 485], [800, 441], [800, 442], [800, 445], [800, 448], [800, 443], [800, 440], [800, 450], [800, 456], [800, 445], [800, 446]];
  var ALT = [
    'Thumbnail: red map with a gagged man and the word DETAINED',
    'Thumbnail: man pointing at a seafood spread, $1,000',
    'Thumbnail: man lying on a crowded train bunk, DAY 3',
    'Thumbnail: man holding a huge cheeseburger at a fair, UMMM! WOWWW!',
    'Thumbnail: man with a cracked mask in a red jumpsuit above a city',
    'Thumbnail: shocked man pointing at a video, MAKE A THUMBNAIL',
    'Thumbnail: man holding orange juice, SECRET',
    'Thumbnail: man in a diner with a giant waffle stack, THE 10,000 CALORIE TOWER',
    'Thumbnail: man pointing at a polar cruise ship, FIRST CLASS',
    'Thumbnail: man holding a CHINA sign beside football memorabilia',
    'Thumbnail: man in a snowstorm, REALITY OF -64\u00b0C',
    'Thumbnail: man looking out of a train, NEW ZEALAND',
    'Thumbnail: three men in red jumpsuits with a heist mask, GTA HEIST',
    'Thumbnail: man facing metal claws, LIVE, WOLVERINE',
    'Thumbnail: creator among analytics screens, Views Don\u2019t Pay You',
    'Thumbnail: portrait with a chart rising from 127 to 8700k views',
    'Thumbnail: two men in a car heading to a stadium, 24 Hour',
    'Thumbnail: former top 250 tennis player lined up with five players in red',
    'Thumbnail: split face, BALD and TATTOO',
    'Thumbnail: man on a snowy cliff above a village, No Light!',
    'Thumbnail: two wingsuit flyers beside a shocked man',
    'Thumbnail: tennis Beginner versus Elite Jr in front of IMG Academy',
    'Thumbnail: two men and a blue house, $25K Per House',
    'Thumbnail: man on a call above an aerial view of houses, LIVE, +$33,000',
    'Thumbnail: man in front of four AI tool panels, Fully Automatic',
    'Thumbnail: man peeking over an exam booklet, enem 2026, 12H',
    'Thumbnail: man with a notebook and four glowing icons, N\u00e3o se Perca!',
    'Thumbnail: man holding koshari and kebab plates in a Cairo street',
    'Thumbnail: two men in bibs at a long buffet table',
    'Thumbnail: two chefs and a flaming pan of pasta',
    'Thumbnail: man holding meatballs and fries, Belgium Food Tour',
    'Thumbnail: man holding a jalape\u00f1o sandwich, 70M views'
  ];
  var COPIES = 4;
  // Thumbnail numbers (t01 to t32) for each reel. Index 5 is the food row.
  var SETS = [
    [1, 5, 9, 13, 17],
    [6, 10, 14, 18, 22],
    [3, 11, 15, 19],
    [12, 16, 20, 21],
    [23, 24, 25, 26, 27],
    [28, 29, 30, 31, 32, 2, 4, 8, 7]
  ];
  var DATA = {"thumbs/t01.webp": "images/thumbs/t01.webp", "thumbs/t02.webp": "images/thumbs/t02.webp", "thumbs/t03.webp": "images/thumbs/t03.webp", "thumbs/t04.webp": "images/thumbs/t04.webp", "thumbs/t05.webp": "images/thumbs/t05.webp", "thumbs/t06.webp": "images/thumbs/t06.webp", "thumbs/t07.webp": "images/thumbs/t07.webp", "thumbs/t08.webp": "images/thumbs/t08.webp", "thumbs/t09.webp": "images/thumbs/t09.webp", "thumbs/t10.webp": "images/thumbs/t10.webp", "thumbs/t11.webp": "images/thumbs/t11.webp", "thumbs/t12.webp": "images/thumbs/t12.webp", "thumbs/t13.webp": "images/thumbs/t13.webp", "thumbs/t14.webp": "images/thumbs/t14.webp", "thumbs/t15.webp": "images/thumbs/t15.webp", "thumbs/t16.webp": "images/thumbs/t16.webp", "thumbs/t17.webp": "images/thumbs/t17.webp", "thumbs/t18.webp": "images/thumbs/t18.webp", "thumbs/t19.webp": "images/thumbs/t19.webp", "thumbs/t20.webp": "images/thumbs/t20.webp", "thumbs/t21.webp": "images/thumbs/t21.webp", "thumbs/t22.webp": "images/thumbs/t22.webp", "thumbs/t23.webp": "images/thumbs/t23.webp", "thumbs/t24.webp": "images/thumbs/t24.webp", "thumbs/t25.webp": "images/thumbs/t25.webp", "thumbs/t26.webp": "images/thumbs/t26.webp", "thumbs/t27.webp": "images/thumbs/t27.webp", "thumbs/t28.webp": "images/thumbs/t28.webp", "thumbs/t29.webp": "images/thumbs/t29.webp", "thumbs/t30.webp": "images/thumbs/t30.webp", "thumbs/t31.webp": "images/thumbs/t31.webp", "thumbs/t32.webp": "images/thumbs/t32.webp", "thumbs/t32b.webp": "images/thumbs/t32b.webp"};
  var FILE = { 32: 'thumbs/t32b.webp' };   // t32 re-exported without the duration badge
  function item(i) {
    var n = ('0' + (i + 1)).slice(-2);
    return '<div class="thumb"><img src="' + DATA[(FILE[i + 1] || 'thumbs/t' + n + '.webp')] + '" alt="' + ALT[i] + '" width="' + DIMS[i][0] + '" height="' + DIMS[i][1] + '" draggable="false"></div>';
  }
  document.querySelectorAll('[data-row]').forEach(function (track) {
    var r = +track.getAttribute('data-row'), set = '';
    SETS[r].forEach(function (k) { set += item(k - 1); });
    var html = set;
    for (var c = 1; c < COPIES; c++) html += set.replace(/class="thumb"/g, 'class="thumb" aria-hidden="true"');
    track.innerHTML = html;
  });

  /* ---- Scroll progress ---- */
  var bar = document.getElementById('progress');
  function onScroll() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, window.scrollY / max) : 0) + ')';
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Scroll reveal ---- */
  var items = document.querySelectorAll('.rv');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -6% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

})();
