(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [27],
  {
    '0PcU': function (e, n, a) {
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
              code: '---\n_ _ _\n***\n* * *',
              lang: 'unknown',
            }),
            t.a.createElement('hr', null),
            t.a.createElement('hr', null),
            t.a.createElement('hr', null),
            t.a.createElement('hr', null),
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
