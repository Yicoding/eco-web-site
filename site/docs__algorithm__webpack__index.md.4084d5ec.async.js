(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [10],
  {
    '2pij': function (e, n, a) {
      'use strict';
      a.r(n);
      var o = a('q1tI'),
        t = a.n(o),
        c = a('dEAq');
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
            t.a.createElement('p', null, '\u6a21\u5757\u5316'),
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
