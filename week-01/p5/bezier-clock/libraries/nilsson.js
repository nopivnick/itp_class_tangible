// Generated by CoffeeScript 1.11.1
var ass, assert, bg, bsort, circle, compare, fc, fixColor, getParameters, nilsson_version, print, range, rd, sc, sw;

nilsson_version = "1.0";

ass = function(msg, a, b) {
  return chai.assert.deepEqual(a, b, msg);
};

assert = function(a, b) {
  if (!_.isEqual(a, b)) {
    return print("Assert failed: " + a + " != " + b);
  }
};

fixColor = function(args) {
  var a, b, g, n, r, ref, ref1;
  n = args.length;
  a = 1;
  if (n === 1) {
    ref = [args[0], args[0], args[0]], r = ref[0], g = ref[1], b = ref[2];
  }
  if (n === 2) {
    ref1 = [args[0], args[0], args[0], args[1]], r = ref1[0], g = ref1[1], b = ref1[2], a = ref1[3];
  }
  if (n === 3) {
    r = args[0], g = args[1], b = args[2];
  }
  if (n === 4) {
    r = args[0], g = args[1], b = args[2], a = args[3];
  }
  return color(255 * r, 255 * g, 255 * b, 255 * a);
};

fc = function() {
  if (arguments.length === 0) {
    return noFill();
  } else {
    return fill(fixColor(arguments));
  }
};

sc = function() {
  if (arguments.length === 0) {
    return noStroke();
  } else {
    return stroke(fixColor(arguments));
  }
};

bg = function() {
  return background(fixColor(arguments));
};

sw = function(n) {
  return strokeWeight(n);
};

circle = function(x, y, r) {
  return ellipse(x, y, 2 * r, 2 * r);
};

rd = function(degrees) {
  return rotate(radians(degrees));
};

print = console.log;

range = _.range;

getParameters = function(h) {
  var f;
  if (h == null) {
    h = window.location.href;
  }
  return _.object((function() {
    var k, len, ref, results;
    ref = h.split('?')[1].split('&');
    results = [];
    for (k = 0, len = ref.length; k < len; k++) {
      f = ref[k];
      results.push(f.split('='));
    }
    return results;
  })());
};

assert(getParameters('http:\\christernilsson.github.io\Shortcut\www?a=0&b=1'), {
  'a': '0',
  'b': '1'
});

compare = function(a, b) {
  var c, i, k, len, ref;
  if (typeof a !== "object") {
    if (a > b) {
      return -1;
    } else {
      if (a < b) {
        return 1;
      } else {
        return 0;
      }
    }
  }
  ref = range(min(a.length, b.length));
  for (k = 0, len = ref.length; k < len; k++) {
    i = ref[k];
    c = compare(a[i], b[i]);
    if (c !== 0) {
      return c;
    }
  }
  return 0;
};

bsort = function(list, cmp) {
  var i, j, k, l, len, len1, ref, ref1, ref2;
  ref = range(list.length);
  for (k = 0, len = ref.length; k < len; k++) {
    i = ref[k];
    ref1 = range(list.length - 1);
    for (l = 0, len1 = ref1.length; l < len1; l++) {
      j = ref1[l];
      if (cmp(list[j], list[j + 1]) < 0) {
        ref2 = [list[j + 1], list[j]], list[j] = ref2[0], list[j + 1] = ref2[1];
      }
    }
  }
  return list;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmlsc3Nvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5pbHNzb24uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFBOztBQUFBLGVBQUEsR0FBa0I7O0FBRWxCLEdBQUEsR0FBTSxTQUFDLEdBQUQsRUFBSyxDQUFMLEVBQU8sQ0FBUDtTQUFhLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBWixDQUFzQixDQUF0QixFQUF3QixDQUF4QixFQUEwQixHQUExQjtBQUFiOztBQUNOLE1BQUEsR0FBUyxTQUFDLENBQUQsRUFBRyxDQUFIO0VBQ1AsSUFBdUMsQ0FBQyxDQUFDLENBQUMsT0FBRixDQUFVLENBQVYsRUFBWSxDQUFaLENBQXhDO1dBQUEsS0FBQSxDQUFNLGlCQUFBLEdBQWtCLENBQWxCLEdBQW9CLE1BQXBCLEdBQTBCLENBQWhDLEVBQUE7O0FBRE87O0FBR1QsUUFBQSxHQUFXLFNBQUMsSUFBRDtBQUNULE1BQUE7RUFBQSxDQUFBLEdBQUksSUFBSSxDQUFDO0VBQ1QsQ0FBQSxHQUFJO0VBQ0osSUFBdUMsQ0FBQSxLQUFLLENBQTVDO0lBQUEsTUFBVSxDQUFDLElBQUssQ0FBQSxDQUFBLENBQU4sRUFBUyxJQUFLLENBQUEsQ0FBQSxDQUFkLEVBQWlCLElBQUssQ0FBQSxDQUFBLENBQXRCLENBQVYsRUFBQyxVQUFELEVBQUcsVUFBSCxFQUFLLFdBQUw7O0VBQ0EsSUFBaUQsQ0FBQSxLQUFLLENBQXREO0lBQUEsT0FBWSxDQUFDLElBQUssQ0FBQSxDQUFBLENBQU4sRUFBUyxJQUFLLENBQUEsQ0FBQSxDQUFkLEVBQWlCLElBQUssQ0FBQSxDQUFBLENBQXRCLEVBQXlCLElBQUssQ0FBQSxDQUFBLENBQTlCLENBQVosRUFBQyxXQUFELEVBQUcsV0FBSCxFQUFLLFdBQUwsRUFBTyxZQUFQOztFQUNBLElBQWtCLENBQUEsS0FBSyxDQUF2QjtJQUFDLFdBQUQsRUFBRyxXQUFILEVBQUssWUFBTDs7RUFDQSxJQUFvQixDQUFBLEtBQUss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KG1zZyxhLGIpIC0+IGNoYWkuYXNzZXJ0LmRlZXBFcXVhbChhLGIsbXNnKVxyXG5hc3NlcnQgPSAoYSxiKSAtPiBcclxuICBwcmludCBcIkFzc2VydCBmYWlsZWQ6ICN7YX0gIT0gI3tifVwiIGlmICFfLmlzRXF1YWwoYSxiKVxyXG5cclxuZml4Q29sb3IgPSAoYXJncykgLT5cclxuICBuID0gYXJncy5sZW5ndGhcclxuICBhID0gMVxyXG4gIFtyLGcsYl0gPSBbYXJnc1swXSxhcmdzWzBdLGFyZ3NbMF1dIGlmIG4gPT0gMVxyXG4gIFtyLGcsYixhXSA9IFthcmdzWzBdLGFyZ3NbMF0sYXJnc1swXSxhcmdzWzFdXSBpZiBuID09IDJcclxuICBbcixnLGJdID0gYXJncyBpZiBuID09IDNcclxuICBbcixnLGIsYV0gPSBhcmdzIGlmIG4gPT0gNFxyXG4gIHJldHVybiBjb2xvciAyNTUgKiByLCAyNTUgKiBnLCAyNTUgKiBiLCAyNTUgKiBhXHJcblxyXG5mYyA9IC0+IGlmIGFyZ3VtZW50cy5sZW5ndGggPT0gMCB0aGVuIG5vRmlsbCgpIGVsc2UgZmlsbCBmaXhDb2xvciBhcmd1bWVudHNcclxuc2MgPSAtPiBpZiBhcmd1bWVudHMubGVuZ3RoID09IDAgdGhlbiBub1N0cm9rZSgpIGVsc2Ugc3Ryb2tlIGZpeENvbG9yIGFyZ3VtZW50c1xyXG5iZyA9IC0+IGJhY2tncm91bmQgZml4Q29sb3IgYXJndW1lbnRzXHJcbnN3ID0gKG4pIC0+IHN0cm9rZVdlaWdodCBuXHJcbmNpcmNsZSA9ICh4LHkscikgLT4gZWxsaXBzZSB4LHksMipyLDIqclxyXG5yZCA9IChkZWdyZWVzKSAtPiByb3RhdGUgcmFkaWFucyBkZWdyZWVzXHJcbnByaW50ID0gY29uc29sZS5sb2dcclxucmFuZ2UgPSBfLnJhbmdlICMgZnJvbSB1bmRlcnNjb3JlLmNvZmZlZVxyXG5cclxuZ2V0UGFyYW1ldGVycyA9IChoID0gd2luZG93LmxvY2F0aW9uLmhyZWYpIC0+IF8ub2JqZWN0KGYuc3BsaXQgJz0nIGZvciBmIGluIGguc3BsaXQoJz8nKVsxXS5zcGxpdCgnJicpKVxyXG5hc3NlcnQgZ2V0UGFyYW1ldGVycygnaHR0cDpcXFxcY2hyaXN0ZXJuaWxzc29uLmdpdGh1Yi5pb1xcU2hvcnRjdXRcXHd3dz9hPTAmYj0xJyksIHsnYSc6JzAnLCAnYic6JzEnfVxyXG5cclxuY29tcGFyZSA9IChhLGIpIC0+XHJcblx0aWYgdHlwZW9mIGEgIT0gXCJvYmplY3RcIiB0aGVuIChpZiBhID4gYiB0aGVuIHJldHVybiAtMSBlbHNlIChpZiBhIDwgYiB0aGVuIHJldHVybiAxIGVsc2UgcmV0dXJuIDApKVxyXG5cdGZvciBpIGluIHJhbmdlIG1pbiBhLmxlbmd0aCxiLmxlbmd0aFxyXG5cdFx0YyA9IGNvbXBhcmUgYVtpXSxiW2ldXHJcblx0XHRpZiBjICE9IDAgdGhlbiByZXR1cm4gY1xyXG5cdDBcclxuXHJcbmJzb3J0ID0gKGxpc3QsY21wKSAtPlxyXG4gIGZvciBpIGluIHJhbmdlIGxpc3QubGVuZ3RoXHJcbiAgICBmb3IgaiBpbiByYW5nZSBsaXN0Lmxlbmd0aC0xXHJcbiAgICAgIFtsaXN0W2pdLCBsaXN0W2orMV1dID0gW2xpc3RbaisxXSwgbGlzdFtqXV0gaWYgY21wKGxpc3Rbal0sIGxpc3RbaisxXSkgPCAwXHJcbiAgbGlzdFxyXG5cclxuIl19
//# sourceURL=C:\github\Nilsson\nilsson.coffee