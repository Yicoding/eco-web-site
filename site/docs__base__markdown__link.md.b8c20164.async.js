(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [26],
  {
    JjdP: function (e, t, a) {
      'use strict';
      a.r(t), (t['default'] = {});
    },
    Zs1V: function (e) {
      e.exports = JSON.parse('{}');
    },
    'tsH+': function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a('q1tI'),
        l = a.n(n),
        o = a('dEAq'),
        c = a('H1Ra');
      a('JjdP');
      t['default'] = (e) => (
        l.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            o['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            'div',
            { className: 'markdown' },
            l.a.createElement(
              'p',
              null,
              l.a.createElement('code', null, '\u884c\u5185\u5f0f'),
            ),
            l.a.createElement(c['a'], {
              code: '[\u94fe\u63a5](https://lianjie.com)',
              lang: 'unknown',
            }),
            l.a.createElement(
              'p',
              null,
              l.a.createElement(
                o['Link'],
                { to: 'https://lianjie.com/' },
                '\u94fe\u63a5',
              ),
            ),
            l.a.createElement(
              'p',
              null,
              l.a.createElement('code', null, '\u53c2\u6570\u5f0f'),
            ),
            l.a.createElement(c['a'], {
              code: '\u8fd9\u662f\u6211\u7684[blog],\u6211\u60f3\u770b\u5230\u6211\u7684\u4e2d\u6587\u63d0\u793a[\u6211\u7684\u535a\u5ba2](http;//myblog.com "\u6211\u7684\u535a\u5ba2")\n\n\n[blog]: http;//myblog.com "\u6211\u7684\u535a\u5ba2"',
              lang: 'unknown',
            }),
            l.a.createElement(
              'p',
              null,
              '\u8fd9\u662f\u6211\u7684',
              l.a.createElement(
                o['Link'],
                { to: 'http;//myblog.com', title: '\u6211\u7684\u535a\u5ba2' },
                'blog',
              ),
              ',\u6211\u60f3\u770b\u5230\u6211\u7684\u4e2d\u6587\u63d0\u793a',
              l.a.createElement(
                o['Link'],
                { to: 'http;//myblog.com', title: '\u6211\u7684\u535a\u5ba2' },
                '\u6211\u7684\u535a\u5ba2',
              ),
            ),
            l.a.createElement(
              'p',
              null,
              l.a.createElement('code', null, '\u81ea\u52a8\u94fe\u63a5'),
            ),
            l.a.createElement(
              'p',
              null,
              'Markdown \u652f\u6301\u4ee5\u6bd4\u8f83\u7b80\u77ed\u7684\u81ea\u52a8\u94fe\u63a5\u5f62\u5f0f\u6765\u5904\u7406\u7f51\u5740\u548c\u7535\u5b50\u90ae\u4ef6\u4fe1\u7bb1\uff0c\u53ea\u8981\u662f\u7528<>\u5305\u8d77\u6765\uff0c Markdown \u5c31\u4f1a\u81ea\u52a8\u628a\u5b83\u8f6c\u6210\u94fe\u63a5\u3002\u4e00\u822c\u7f51\u5740\u7684\u94fe\u63a5\u6587\u5b57\u5c31\u548c\u94fe\u63a5\u5730\u5740\u4e00\u6837\uff0c\u4f8b\u5982\uff1a',
            ),
            l.a.createElement(c['a'], {
              code: '<http://example.com/>\n<address@example.com>',
              lang: 'unknown',
            }),
            l.a.createElement(
              'p',
              null,
              l.a.createElement(
                o['Link'],
                { to: 'http://example.com/' },
                'http://example.com/',
              ),
            ),
            l.a.createElement(
              'p',
              null,
              l.a.createElement(
                o['Link'],
                { to: 'mailto:address@example.com' },
                'address@example.com',
              ),
            ),
          ),
        )
      );
    },
  },
]);
