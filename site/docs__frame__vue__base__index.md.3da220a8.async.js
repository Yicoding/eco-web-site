(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [41],
  {
    'FrT/': function (e, n, a) {
      'use strict';
      a.r(n);
      var t = a('q1tI'),
        l = a.n(t),
        o = a('dEAq');
      a('JjdP');
      n['default'] = (e) => (
        l.a.useEffect(() => {
          var n;
          null !== e &&
            void 0 !== e &&
            null !== (n = e.location) &&
            void 0 !== n &&
            n.hash &&
            o['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'div',
              { className: 'markdown' },
              l.a.createElement('p', null, 'vue \u57fa\u672c'),
            ),
          ),
        )
      );
    },
    JjdP: function (e, n, a) {
      'use strict';
      a.r(n), (n['default'] = {});
    },
    Zs1V: function (e) {
      e.exports = JSON.parse('{}');
    },
  },
]);
