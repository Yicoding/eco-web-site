(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [40],
  {
    'Ds+B': function (e, n, a) {
      'use strict';
      a.r(n);
      var t = a('q1tI'),
        o = a.n(t),
        l = a('dEAq');
      a('JjdP');
      n['default'] = (e) => (
        o.a.useEffect(() => {
          var n;
          null !== e &&
            void 0 !== e &&
            null !== (n = e.location) &&
            void 0 !== n &&
            n.hash &&
            l['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              'div',
              { className: 'markdown' },
              o.a.createElement('p', null, 'react hooks'),
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
