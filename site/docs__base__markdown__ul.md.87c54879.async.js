(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [31],
  {
    '3CTR': function (e, l, n) {
      'use strict';
      n.r(l);
      var a = n('q1tI'),
        t = n.n(a),
        c = n('dEAq'),
        u = n('H1Ra');
      n('JjdP');
      l['default'] = (e) => (
        t.a.useEffect(() => {
          var l;
          null !== e &&
            void 0 !== e &&
            null !== (l = e.location) &&
            void 0 !== l &&
            l.hash &&
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
              t.a.createElement('code', null, '\u65e0\u5e8f\u5217\u8868'),
            ),
            t.a.createElement(u['a'], {
              code: '* 1\n  * 2\n    *3\n- 4\n  - 5\n    - 6\n+ 7\n  + 8\n    + 9',
              lang: 'unknown',
            }),
            t.a.createElement(
              'ul',
              null,
              t.a.createElement(
                'li',
                null,
                '1',
                t.a.createElement(
                  'ul',
                  null,
                  t.a.createElement(
                    'li',
                    null,
                    '2',
                    t.a.createElement(
                      'ul',
                      null,
                      t.a.createElement('li', null, '3'),
                    ),
                  ),
                ),
              ),
            ),
            t.a.createElement(
              'ul',
              null,
              t.a.createElement(
                'li',
                null,
                '4',
                t.a.createElement(
                  'ul',
                  null,
                  t.a.createElement(
                    'li',
                    null,
                    '5',
                    t.a.createElement(
                      'ul',
                      null,
                      t.a.createElement('li', null, '6'),
                    ),
                  ),
                ),
              ),
            ),
            t.a.createElement(
              'ul',
              null,
              t.a.createElement(
                'li',
                null,
                '7',
                t.a.createElement(
                  'ul',
                  null,
                  t.a.createElement(
                    'li',
                    null,
                    '8',
                    t.a.createElement(
                      'ul',
                      null,
                      t.a.createElement('li', null, '9'),
                    ),
                  ),
                ),
              ),
            ),
            t.a.createElement(
              'p',
              null,
              t.a.createElement('code', null, '\u6709\u5e8f\u5217\u8868'),
            ),
            t.a.createElement(u['a'], {
              code: '1. 1\n2. 2\n3. 3',
              lang: 'unknown',
            }),
            t.a.createElement(
              'ol',
              null,
              t.a.createElement('li', null, '1'),
              t.a.createElement('li', null, '2'),
              t.a.createElement('li', null, '3'),
            ),
          ),
        )
      );
    },
    JjdP: function (e, l, n) {
      'use strict';
      n.r(l), (l['default'] = {});
    },
    Zs1V: function (e) {
      e.exports = JSON.parse('{}');
    },
  },
]);
