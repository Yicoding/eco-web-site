(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [44],
  {
    CoGl: function (e, a, n) {
      'use strict';
      n.r(a);
      var t = n('q1tI'),
        c = n.n(t),
        i = n('dEAq');
      n('JjdP');
      a['default'] = (e) => (
        c.a.useEffect(() => {
          var a;
          null !== e &&
            void 0 !== e &&
            null !== (a = e.location) &&
            void 0 !== a &&
            a.hash &&
            i['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        c.a.createElement(
          c.a.Fragment,
          null,
          c.a.createElement(
            'div',
            { className: 'markdown' },
            c.a.createElement(
              'h1',
              { id: 'bug' },
              c.a.createElement(
                i['AnchorLink'],
                { to: '#bug', 'aria-hidden': 'true', tabIndex: -1 },
                c.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'bug',
            ),
            c.a.createElement(
              'h2',
              { id: 'react' },
              c.a.createElement(
                i['AnchorLink'],
                { to: '#react', 'aria-hidden': 'true', tabIndex: -1 },
                c.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'React',
            ),
            c.a.createElement(
              'h2',
              { id: 'vue' },
              c.a.createElement(
                i['AnchorLink'],
                { to: '#vue', 'aria-hidden': 'true', tabIndex: -1 },
                c.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Vue',
            ),
          ),
        )
      );
    },
    JjdP: function (e, a, n) {
      'use strict';
      n.r(a), (a['default'] = {});
    },
    Zs1V: function (e) {
      e.exports = JSON.parse('{}');
    },
  },
]);
