(function() {
  var baseCSS = '*,*:before,*:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing: border-box}.row:before,.row:after{display:table;content:" "}.row:after{clear:both}.row>*{float:left}html{font-size:10px}';
  var sCSS = '@media(max-width:64rem){';
  var mCSS = '@media(min-width:64.1em)and(max-width:102.4rem){';
  var lCSS = '@media(min-width:102.5rem)and(max-width:144rem){';
  var xlCSS = '@media(min-width:144.1rem)and(max-width:192rem){';
  var xxlCSS = '@media (min-width:192.1rem){';
  var mediaStyles = {s:[], m:[], l:[], xl:[], xxl:[]};
  var mediaCSS = {s:sCSS, m:mCSS, l:lCSS, xl:xlCSS, xxl:xxlCSS};
  var finalCSS = '';

  var classes = document.querySelectorAll("*[class*=of]");
  var set = {};
  var styles = [];

  [].map.call(classes, function(c) {
    [].map.call(c.classList, function(cl) {
      if (!(cl in set)) {
        set[cl] = true;
      }
    });
  });

  for (key in set) {
    if (set.hasOwnProperty(key)) {
      var segments = key.split(/\-|of/);

      if (segments.length === 2 && isNum(segments[0]) && isNum(segments[1])) {
        var width = Number(parseInt(segments[0]) / parseInt(segments[1]) * 100);
        var wParts = width.toString().split('.');
        var wStr = wParts[0] + ((wParts[1] === undefined) ? '': '.'+ wParts[1].substr(0, 2));
        var css = '.\\3' + key + '{width:' + wStr + '%}';

        styles.push(css);

      } else if (segments.length === 3) {
        if (segments[0] in mediaStyles && isNum(segments[1]) && isNum(segments[2])) {
          var width = Number(parseInt(segments[1]) / parseInt(segments[2]) * 100).toFixed(2);
          var css = "." + key + "{width:" + width + "%}";
          var width = Number(parseInt(segments[1]) / parseInt(segments[2]) * 100);
          var wParts = width.toString().split(".");
          var wStr = wParts[0] + ((wParts[1] === undefined) ? '': '.'+ wParts[1].substr(0, 2));
          var css = '.' + key + '{width:' + wStr + '%}';

          mediaStyles[segments[0]].push(css);

        }
      }
    }
  }

  finalCSS += baseCSS;
  finalCSS += styles.join('');

  for (key in mediaStyles) {
    if (mediaStyles.hasOwnProperty(key)) {
      finalCSS += mediaCSS[key];
      finalCSS += mediaStyles[key].join('');
      finalCSS += '}';
    }
  }

  console.log(finalCSS);

  var s = document.createElement('style');
  s.id = 'mathemusic-for-my-ears';
  s.innerHTML = finalCSS;
  document.getElementsByTagName('head')[0].appendChild(s);

  function isNum(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

})();
