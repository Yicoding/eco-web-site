(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [22],
  {
    JjdP: function (e, n, a) {
      'use strict';
      a.r(n), (n['default'] = {});
    },
    Zs1V: function (e) {
      e.exports = JSON.parse('{}');
    },
    puVR: function (e, n, a) {
      'use strict';
      a.r(n);
      var l = a('q1tI'),
        t = a.n(l),
        c = a('dEAq'),
        o = a('H1Ra');
      a('JjdP');
      n['default'] = (e) => (
        t.a.useEffect(() => {
          var n;
          null !== e &&
            void 0 !== e &&
            null !== (n = e.location) &&
            void 0 !== n &&
            n.hash &&
            c['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        t.a.createElement(
          t.a.Fragment,
          null,
          t.a.createElement(
            'div',
            { className: 'markdown' },
            t.a.createElement(o['a'], {
              code: '\u6bb5\u843d1<br>\u6bb5\u843d2\n\n\u6bb5\u843d3\n\n\n\u6bb5\u843d4',
              lang: 'unknown',
            }),
            t.a.createElement(
              'p',
              null,
              '\u6bb5\u843d 1',
              t.a.createElement('br', null),
              '\u6bb5\u843d 2',
            ),
            t.a.createElement('p', null, '\u6bb5\u843d 3'),
            t.a.createElement('p', null, '\u6bb5\u843d 4'),
          ),
        )
      );
    },
  },
]);
