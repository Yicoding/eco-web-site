(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [20],
  {
    '7DTJ': function (e, n, a) {
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
            t.a.createElement(
              'p',
              null,
              t.a.createElement('code', null, '\u5355\u884c\u4ee3\u7801\u5757'),
            ),
            t.a.createElement(o['a'], {
              code: '`<p>\u8fd9\u662f\u4e00\u4e2a\u4ee3\u7801\u5757</p>`',
              lang: 'unknown',
            }),
            t.a.createElement(
              'p',
              null,
              t.a.createElement(
                'code',
                null,
                '<p>\u8fd9\u662f\u4e00\u4e2a\u4ee3\u7801\u5757</p>',
              ),
            ),
            t.a.createElement(
              'p',
              null,
              t.a.createElement('code', null, '\u591a\u884c\u4ee3\u7801\u5757'),
            ),
            t.a.createElement(o['a'], {
              code: '```\n    \u8fd9\u91cc\u8fd8\u53ef\u4ee5\u5199\u591a\u884c\n    \u8fd8\u53ef\u4ee5\u5199\u4e00\u884c\n    \u8fd8\u53ef\u4ee5\u5199\u66f4\u591a\n  ```',
              lang: 'unknown',
            }),
            t.a.createElement(o['a'], {
              code: '\u8fd9\u91cc\u8fd8\u53ef\u4ee5\u5199\u591a\u884c\n  \u8fd8\u53ef\u4ee5\u5199\u4e00\u884c\n  \u8fd8\u53ef\u4ee5\u5199\u66f4\u591a',
              lang: 'unknown',
            }),
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
