(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [30],
  {
    '4pTN': function (e, n, l) {
      'use strict';
      l.r(n);
      var a = l('q1tI'),
        t = l.n(a),
        c = l('dEAq'),
        o = l('H1Ra');
      l('JjdP');
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
              '\u8f6c\u4e49\u5c31\u662f\u5c06\u4e00\u4e9b\u7279\u6b8a\u5b57\u7b26\u8f6c\u6362\u6210\u6b63\u5e38\u663e\u793a\u7684\u6837\u5b50\uff0c\u548c\u5927\u591a\u6570\u7f16\u7a0b\u8bed\u8a00\u76f8\u540c\u4f7f\u7528\u53cd\u659c\u6760()\u8868\u793a',
            ),
            t.a.createElement(o['a'], {
              code: '* \\\\\n* \\`\n* \\*\n* \\!',
              lang: 'unknown',
            }),
            t.a.createElement(
              'ul',
              null,
              t.a.createElement('li', null, '\\'),
              t.a.createElement('li', null, '`'),
              t.a.createElement('li', null, '*'),
              t.a.createElement('li', null, '!'),
            ),
          ),
        )
      );
    },
    JjdP: function (e, n, l) {
      'use strict';
      l.r(n), (n['default'] = {});
    },
    Zs1V: function (e) {
      e.exports = JSON.parse('{}');
    },
  },
]);
