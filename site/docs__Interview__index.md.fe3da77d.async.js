(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [2],
  {
    JjdP: function (e, a, n) {
      'use strict';
      n.r(a), (a['default'] = {});
    },
    KUuz: function (e, a, n) {
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
              { id: 'javascript-\u5e93' },
              c.a.createElement(
                i['AnchorLink'],
                {
                  to: '#javascript-\u5e93',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                c.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'JavaScript \u5e93',
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
    Zs1V: function (e) {
      e.exports = JSON.parse('{}');
    },
  },
]);
