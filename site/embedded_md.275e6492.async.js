(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [46],
  {
    '3ia+': function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        c = l('dEAq');
      l('JjdP');
      t['default'] = (e) => (
        a.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            c['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u5206\u4e3a\u57fa\u672c\u6570\u636e\u7c7b\u578b\u548c\u5f15\u7528\u6570\u636e\u7c7b\u578b',
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '1.\u57fa\u672c\u7c7b\u578b'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u5b58\u50a8\u5728\u6808\uff08stack\uff09\u4e2d\u7684\u7b80\u5355\u6570\u636e\u6bb5\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b83\u4eec\u7684\u503c\u76f4\u63a5\u5b58\u50a8\u5728\u53d8\u91cf\u8bbf\u95ee\u7684\u4f4d\u7f6e',
              ),
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', { align: 'left' }, '\u5206\u7c7b'),
                  a.a.createElement('th', { align: 'center' }, '\u540d\u79f0'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'String'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u5b57\u7b26\u4e32',
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Number'),
                  a.a.createElement('td', { align: 'center' }, '\u6570\u5b57'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Boolean'),
                  a.a.createElement('td', { align: 'center' }, '\u5e03\u5c14'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Null'),
                  a.a.createElement('td', { align: 'center' }, '\u7a7a'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Undefined'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u672a\u5b9a\u4e49',
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Symbol'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u72ec\u4e00\u65e0\u4e8c\u7684\u503c',
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'BigInt'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u5927\u6574\u6570',
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '2.\u5f15\u7528\u7c7b\u578b'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u5b58\u50a8\u5728\u5806\uff08heap\uff09\u4e2d\u7684\u5bf9\u8c61\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b58\u50a8\u5728\u53d8\u91cf\u5904\u7684\u503c\u662f\u4e00\u4e2a\u6307\u9488\uff08point\uff09\uff0c\u6307\u5411\u5b58\u50a8\u5bf9\u8c61\u7684',
                a.a.createElement('code', null, '\u5185\u5b58\u5730\u5740'),
              ),
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', { align: 'left' }, '\u5206\u7c7b'),
                  a.a.createElement('th', { align: 'center' }, '\u540d\u79f0'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Object'),
                  a.a.createElement('td', { align: 'center' }, '\u5bf9\u8c61'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Array'),
                  a.a.createElement('td', { align: 'center' }, '\u6570\u7ec4'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Function'),
                  a.a.createElement('td', { align: 'center' }, '\u51fd\u6570'),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '3.JS\u6570\u636e\u7c7b\u578b'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                a.a.createElement('code', null, 'String'),
                '\u3001 ',
                a.a.createElement('code', null, 'Number'),
                '\u3001 ',
                a.a.createElement('code', null, 'Boolean'),
                '\u3001 ',
                a.a.createElement('code', null, 'Null'),
                '\u3001 ',
                a.a.createElement('code', null, 'Undefined'),
                '\u3001 ',
                a.a.createElement('code', null, 'Object'),
                ' \u4ee5\u53ca ES6 \u65b0\u52a0\u7684 ',
                a.a.createElement('code', null, 'Symbol'),
                '\u548c',
                a.a.createElement('code', null, 'BigInt'),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement(
                'code',
                null,
                '4.null \u548c undefined \u533a\u522b',
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement('p', null, '1.\u5b9a\u4e49'),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  'null: object \u7c7b\u578b\uff0c\u8868\u793a\u4e00\u4e2a\u503c\u88ab\u5b9a\u4e49\u4e86\uff0c\u4f46\u662f\u8fd9\u4e2a\u503c\u662f"\u7a7a\u503c"\uff0c\u4ee3\u8868\u4e00\u4e2a',
                  a.a.createElement(
                    'code',
                    null,
                    '\u7a7a\u5bf9\u8c61\u6307\u9488',
                  ),
                ),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  'undefined: undefined \u7c7b\u578b\uff0c\u4ee3\u8868',
                  a.a.createElement('code', null, '\u672a\u5b9a\u4e49'),
                ),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement('p', null, '2.\u8f6c\u6362\u503c'),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'Number(null) => 0'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, '1 + null => 1'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'Number(undefined) => NaN'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, '1 + undefined => NaN'),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement('p', null, '3.\u5224\u65ad\u9898'),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'null == undefined => true'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'null === undefined => false'),
              ),
            ),
          ),
        )
      );
    },
    '6HVA': function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        c = l('dEAq'),
        r = l('H1Ra');
      l('JjdP');
      t['default'] = (e) => (
        a.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            c['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '1.typeof'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                'typeof \u64cd\u4f5c\u7b26\u53ef\u4ee5\u7528\u6765\u5224\u65ad\u53d8\u91cf\u7684\u6570\u636e\u7c7b\u578b',
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u5bf9\u4e8e\u503c\u7c7b\u578b\u6709\u56db\u79cd\u7ed3\u679c\uff08undefined\u3001string\u3001number\u3001boolean\uff09',
                ),
                a.a.createElement(
                  'blockquote',
                  null,
                  a.a.createElement(
                    'p',
                    null,
                    '\u5bf9\u4e8e\u5f15\u7528\u7c7b\u578b\u6709\u4e24\u79cd\u7ed3\u679c\uff08function\u3001object\uff09',
                  ),
                  a.a.createElement(
                    'blockquote',
                    null,
                    a.a.createElement(
                      'p',
                      null,
                      "\u6ce8\u610f: typeof null === 'object'",
                    ),
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', { align: 'left' }, '\u6267\u884c'),
                  a.a.createElement('th', { align: 'center' }, '\u8f93\u51fa'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof ""'),
                  a.a.createElement('td', { align: 'center' }, 'string'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof 1'),
                  a.a.createElement('td', { align: 'center' }, 'number'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof true'),
                  a.a.createElement('td', { align: 'center' }, 'boolean'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof null'),
                  a.a.createElement('td', { align: 'center' }, 'object'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement(
                    'td',
                    { align: 'left' },
                    'typeof undefined',
                  ),
                  a.a.createElement('td', { align: 'center' }, 'undefined'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof []'),
                  a.a.createElement('td', { align: 'center' }, 'object'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement(
                    'td',
                    { align: 'left' },
                    'typeof function()',
                    '{',
                    '}',
                  ),
                  a.a.createElement('td', { align: 'center' }, 'function'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement(
                    'td',
                    { align: 'left' },
                    'typeof ',
                    '{',
                    '}',
                  ),
                  a.a.createElement('td', { align: 'center' }, 'object'),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '2.instanceof'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                'instanceof \u64cd\u4f5c\u7b26\u7528\u6765',
                a.a.createElement(
                  'code',
                  null,
                  '\u5224\u65ad\u5f15\u7528\u7c7b\u578b',
                ),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u8bed\u6cd5\uff1aA instanceof B',
                ),
                a.a.createElement(
                  'blockquote',
                  null,
                  a.a.createElement(
                    'p',
                    null,
                    '\u5224\u65ad\u89c4\u5219\uff1a\u6cbf\u7740 A \u7684',
                    a.a.createElement('code', null, '_proto_'),
                    '\u5c5e\u6027\u8fd9\u6761\u7ebf\u6765\u627e\uff0c\u540c\u65f6\u6cbf\u7740 B \u7684 prototype \u5c5e\u6027\u8fd9\u6761\u7ebf\uff0c\u82e5\u679c\u4e24\u6761\u7ebf\u80fd\u627e\u5230\u540c\u4e00\u4e2a\u5f15\u7528\uff0c\u5373 \u540c\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de true',
                  ),
                  a.a.createElement(
                    'blockquote',
                    null,
                    a.a.createElement(
                      'p',
                      null,
                      'instanceof \u8868\u793a\u7684\u5c31\u662f\u539f\u578b\u94fe\u7684\u7ed3\u6784',
                    ),
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u7528\u4e8e\u68c0\u6d4b\u6784\u9020\u51fd\u6570\u7684 ',
                a.a.createElement('code', null, 'prototype'),
                ' \u5c5e\u6027\u662f\u5426\u51fa\u73b0\u5728\u67d0\u4e2a\u5b9e\u4f8b\u5bf9\u8c61\u7684',
                a.a.createElement('code', null, '\u539f\u578b\u94fe'),
                '\u4e0a',
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u65e0\u6cd5\u901a\u8fc7\u5bf9\u8c61\u6765\u83b7\u5f97\u7c7b\u540d(\u4f8b\u5982: ',
                  a.a.createElement('code', null, "typeof ''"),
                  ' \u5f97\u5230\u7684\u7c7b\u540d\u662f',
                  a.a.createElement('code', null, 'string'),
                  ')\uff0c\u53ea\u80fd\u68c0\u6d4b\u5bf9\u8c61\u662f\u5426\u5c5e\u4e8e\u6307\u5b9a\u7684\u7c7b\u540d(\u4f8b\u5982: ',
                  a.a.createElement('code', null, 'a instanceof String'),
                  ')',
                ),
              ),
            ),
            a.a.createElement(r['a'], {
              code: "var simpleStr = 'This is a simple string';\nvar myString = new String();\nvar newStr = new String('String created with constructor');\nvar myDate = new Date();\nvar myObj = {};\nvar myNonObj = Object.create(null);\n\nsimpleStr instanceof String; // \u8fd4\u56de false, simpleStr\u5e76\u4e0d\u662f\u5bf9\u8c61\nmyString instanceof String; // \u8fd4\u56de true\nnewStr instanceof String; // \u8fd4\u56de true\nmyString instanceof Object; // \u8fd4\u56de true\n\nmyObj instanceof Object; // \u8fd4\u56de true, \u5c3d\u7ba1\u539f\u578b\u6ca1\u6709\u5b9a\u4e49\n({} instanceof Object); // \u8fd4\u56de true, \u540c\u4e0a\nmyNonObj instanceof Object; // \u8fd4\u56de false, \u4e00\u79cd\u521b\u5efa\u975e Object \u5b9e\u4f8b\u7684\u5bf9\u8c61\u7684\u65b9\u6cd5\n\nmyString instanceof Date; // \u8fd4\u56de false\n\nmyDate instanceof Date; // \u8fd4\u56de true\nmyDate instanceof Object; // \u8fd4\u56de true\nmyDate instanceof String; // \u8fd4\u56de false",
              lang: 'js',
            }),
            a.a.createElement(
              'p',
              null,
              a.a.createElement(
                'code',
                null,
                '3.\u624b\u52a8\u5b9e\u73b0instanceof',
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u6838\u5fc3: \u539f\u578b\u94fe\u7684\u5411\u4e0a\u67e5\u627e',
              ),
            ),
            a.a.createElement(r['a'], {
              code: "function myInstanceof(left, right) {\n  // \u57fa\u672c\u6570\u636e\u7c7b\u578b\u76f4\u63a5\u8fd4\u56defalse\n  if (typeof left !== 'object' || left === null) return false;\n  // getProtypeOf\u662fObject\u5bf9\u8c61\u81ea\u5e26\u7684\u4e00\u4e2a\u65b9\u6cd5\uff0c\u80fd\u591f\u62ff\u5230\u53c2\u6570\u7684\u539f\u578b\u5bf9\u8c61\n  let proto = Object.getPrototypeOf(left);\n  while (true) {\n    // \u67e5\u627e\u5230\u5c3d\u5934\uff0c\u8fd8\u6ca1\u627e\u5230\n    if (proto == null) return false;\n    // \u627e\u5230\u76f8\u540c\u7684\u539f\u578b\u5bf9\u8c61\n    if (proto == right.prototype) return true;\n    proto = Object.getPrototypeOf(proto);\n  }\n}\n\n// \u6d4b\u8bd5\nconsole.log(myInstanceof('111', String)); // false\nconsole.log(myInstanceof(new String('111'), String)); // true",
              lang: 'js',
            }),
          ),
        )
      );
    },
    '7YVn': function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        c = l('dEAq');
      l('JjdP');
      t['default'] = (e) => (
        a.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            c['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u5206\u4e3a\u57fa\u672c\u6570\u636e\u7c7b\u578b\u548c\u5f15\u7528\u6570\u636e\u7c7b\u578b',
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '1.\u57fa\u672c\u7c7b\u578b'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u5b58\u50a8\u5728\u6808\uff08stack\uff09\u4e2d\u7684\u7b80\u5355\u6570\u636e\u6bb5\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b83\u4eec\u7684\u503c\u76f4\u63a5\u5b58\u50a8\u5728\u53d8\u91cf\u8bbf\u95ee\u7684\u4f4d\u7f6e',
              ),
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', { align: 'left' }, '\u5206\u7c7b'),
                  a.a.createElement('th', { align: 'center' }, '\u540d\u79f0'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'String'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u5b57\u7b26\u4e32',
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Number'),
                  a.a.createElement('td', { align: 'center' }, '\u6570\u5b57'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Boolean'),
                  a.a.createElement('td', { align: 'center' }, '\u5e03\u5c14'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Null'),
                  a.a.createElement('td', { align: 'center' }, '\u7a7a'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Undefined'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u672a\u5b9a\u4e49',
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Symbol'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u72ec\u4e00\u65e0\u4e8c\u7684\u503c',
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'BigInt'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u5927\u6574\u6570',
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '2.\u5f15\u7528\u7c7b\u578b'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u5b58\u50a8\u5728\u5806\uff08heap\uff09\u4e2d\u7684\u5bf9\u8c61\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b58\u50a8\u5728\u53d8\u91cf\u5904\u7684\u503c\u662f\u4e00\u4e2a\u6307\u9488\uff08point\uff09\uff0c\u6307\u5411\u5b58\u50a8\u5bf9\u8c61\u7684',
                a.a.createElement('code', null, '\u5185\u5b58\u5730\u5740'),
              ),
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', { align: 'left' }, '\u5206\u7c7b'),
                  a.a.createElement('th', { align: 'center' }, '\u540d\u79f0'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Object'),
                  a.a.createElement('td', { align: 'center' }, '\u5bf9\u8c61'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Array'),
                  a.a.createElement('td', { align: 'center' }, '\u6570\u7ec4'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Function'),
                  a.a.createElement('td', { align: 'center' }, '\u51fd\u6570'),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '3.JS\u6570\u636e\u7c7b\u578b'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                a.a.createElement('code', null, 'String'),
                '\u3001 ',
                a.a.createElement('code', null, 'Number'),
                '\u3001 ',
                a.a.createElement('code', null, 'Boolean'),
                '\u3001 ',
                a.a.createElement('code', null, 'Null'),
                '\u3001 ',
                a.a.createElement('code', null, 'Undefined'),
                '\u3001 ',
                a.a.createElement('code', null, 'Object'),
                ' \u4ee5\u53ca ES6 \u65b0\u52a0\u7684 ',
                a.a.createElement('code', null, 'Symbol'),
                '\u548c',
                a.a.createElement('code', null, 'BigInt'),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement(
                'code',
                null,
                '4.null \u548c undefined \u533a\u522b',
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement('p', null, '1.\u5b9a\u4e49'),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  'null: object \u7c7b\u578b\uff0c\u8868\u793a\u4e00\u4e2a\u503c\u88ab\u5b9a\u4e49\u4e86\uff0c\u4f46\u662f\u8fd9\u4e2a\u503c\u662f"\u7a7a\u503c"\uff0c\u4ee3\u8868\u4e00\u4e2a',
                  a.a.createElement(
                    'code',
                    null,
                    '\u7a7a\u5bf9\u8c61\u6307\u9488',
                  ),
                ),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  'undefined: undefined \u7c7b\u578b\uff0c\u4ee3\u8868',
                  a.a.createElement('code', null, '\u672a\u5b9a\u4e49'),
                ),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement('p', null, '2.\u8f6c\u6362\u503c'),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'Number(null) => 0'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, '1 + null => 1'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'Number(undefined) => NaN'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, '1 + undefined => NaN'),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement('p', null, '3.\u5224\u65ad\u9898'),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'null == undefined => true'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'null === undefined => false'),
              ),
            ),
          ),
        )
      );
    },
    '7yH5': function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        c = l('dEAq'),
        r = l('H1Ra');
      l('JjdP');
      t['default'] = (e) => (
        a.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            c['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '1.typeof'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                'typeof \u64cd\u4f5c\u7b26\u53ef\u4ee5\u7528\u6765\u5224\u65ad\u53d8\u91cf\u7684\u6570\u636e\u7c7b\u578b',
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u5bf9\u4e8e\u503c\u7c7b\u578b\u6709\u56db\u79cd\u7ed3\u679c\uff08undefined\u3001string\u3001number\u3001boolean\uff09',
                ),
                a.a.createElement(
                  'blockquote',
                  null,
                  a.a.createElement(
                    'p',
                    null,
                    '\u5bf9\u4e8e\u5f15\u7528\u7c7b\u578b\u6709\u4e24\u79cd\u7ed3\u679c\uff08function\u3001object\uff09',
                  ),
                  a.a.createElement(
                    'blockquote',
                    null,
                    a.a.createElement(
                      'p',
                      null,
                      "\u6ce8\u610f: typeof null === 'object'",
                    ),
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', { align: 'left' }, '\u6267\u884c'),
                  a.a.createElement('th', { align: 'center' }, '\u8f93\u51fa'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof ""'),
                  a.a.createElement('td', { align: 'center' }, 'string'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof 1'),
                  a.a.createElement('td', { align: 'center' }, 'number'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof true'),
                  a.a.createElement('td', { align: 'center' }, 'boolean'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof null'),
                  a.a.createElement('td', { align: 'center' }, 'object'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement(
                    'td',
                    { align: 'left' },
                    'typeof undefined',
                  ),
                  a.a.createElement('td', { align: 'center' }, 'undefined'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof []'),
                  a.a.createElement('td', { align: 'center' }, 'object'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement(
                    'td',
                    { align: 'left' },
                    'typeof function()',
                    '{',
                    '}',
                  ),
                  a.a.createElement('td', { align: 'center' }, 'function'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement(
                    'td',
                    { align: 'left' },
                    'typeof ',
                    '{',
                    '}',
                  ),
                  a.a.createElement('td', { align: 'center' }, 'object'),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '2.instanceof'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                'instanceof \u64cd\u4f5c\u7b26\u7528\u6765',
                a.a.createElement(
                  'code',
                  null,
                  '\u5224\u65ad\u5f15\u7528\u7c7b\u578b',
                ),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u8bed\u6cd5\uff1aA instanceof B',
                ),
                a.a.createElement(
                  'blockquote',
                  null,
                  a.a.createElement(
                    'p',
                    null,
                    '\u5224\u65ad\u89c4\u5219\uff1a\u6cbf\u7740 A \u7684',
                    a.a.createElement('code', null, '_proto_'),
                    '\u5c5e\u6027\u8fd9\u6761\u7ebf\u6765\u627e\uff0c\u540c\u65f6\u6cbf\u7740 B \u7684 prototype \u5c5e\u6027\u8fd9\u6761\u7ebf\uff0c\u82e5\u679c\u4e24\u6761\u7ebf\u80fd\u627e\u5230\u540c\u4e00\u4e2a\u5f15\u7528\uff0c\u5373 \u540c\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de true',
                  ),
                  a.a.createElement(
                    'blockquote',
                    null,
                    a.a.createElement(
                      'p',
                      null,
                      'instanceof \u8868\u793a\u7684\u5c31\u662f\u539f\u578b\u94fe\u7684\u7ed3\u6784',
                    ),
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u7528\u4e8e\u68c0\u6d4b\u6784\u9020\u51fd\u6570\u7684 ',
                a.a.createElement('code', null, 'prototype'),
                ' \u5c5e\u6027\u662f\u5426\u51fa\u73b0\u5728\u67d0\u4e2a\u5b9e\u4f8b\u5bf9\u8c61\u7684',
                a.a.createElement('code', null, '\u539f\u578b\u94fe'),
                '\u4e0a',
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u65e0\u6cd5\u901a\u8fc7\u5bf9\u8c61\u6765\u83b7\u5f97\u7c7b\u540d(\u4f8b\u5982: ',
                  a.a.createElement('code', null, "typeof ''"),
                  ' \u5f97\u5230\u7684\u7c7b\u540d\u662f',
                  a.a.createElement('code', null, 'string'),
                  ')\uff0c\u53ea\u80fd\u68c0\u6d4b\u5bf9\u8c61\u662f\u5426\u5c5e\u4e8e\u6307\u5b9a\u7684\u7c7b\u540d(\u4f8b\u5982: ',
                  a.a.createElement('code', null, 'a instanceof String'),
                  ')',
                ),
              ),
            ),
            a.a.createElement(r['a'], {
              code: "var simpleStr = 'This is a simple string';\nvar myString = new String();\nvar newStr = new String('String created with constructor');\nvar myDate = new Date();\nvar myObj = {};\nvar myNonObj = Object.create(null);\n\nsimpleStr instanceof String; // \u8fd4\u56de false, simpleStr\u5e76\u4e0d\u662f\u5bf9\u8c61\nmyString instanceof String; // \u8fd4\u56de true\nnewStr instanceof String; // \u8fd4\u56de true\nmyString instanceof Object; // \u8fd4\u56de true\n\nmyObj instanceof Object; // \u8fd4\u56de true, \u5c3d\u7ba1\u539f\u578b\u6ca1\u6709\u5b9a\u4e49\n({} instanceof Object); // \u8fd4\u56de true, \u540c\u4e0a\nmyNonObj instanceof Object; // \u8fd4\u56de false, \u4e00\u79cd\u521b\u5efa\u975e Object \u5b9e\u4f8b\u7684\u5bf9\u8c61\u7684\u65b9\u6cd5\n\nmyString instanceof Date; // \u8fd4\u56de false\n\nmyDate instanceof Date; // \u8fd4\u56de true\nmyDate instanceof Object; // \u8fd4\u56de true\nmyDate instanceof String; // \u8fd4\u56de false",
              lang: 'js',
            }),
            a.a.createElement(
              'p',
              null,
              a.a.createElement(
                'code',
                null,
                '3.\u624b\u52a8\u5b9e\u73b0instanceof',
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u6838\u5fc3: \u539f\u578b\u94fe\u7684\u5411\u4e0a\u67e5\u627e',
              ),
            ),
            a.a.createElement(r['a'], {
              code: "function myInstanceof(left, right) {\n  // \u57fa\u672c\u6570\u636e\u7c7b\u578b\u76f4\u63a5\u8fd4\u56defalse\n  if (typeof left !== 'object' || left === null) return false;\n  // getProtypeOf\u662fObject\u5bf9\u8c61\u81ea\u5e26\u7684\u4e00\u4e2a\u65b9\u6cd5\uff0c\u80fd\u591f\u62ff\u5230\u53c2\u6570\u7684\u539f\u578b\u5bf9\u8c61\n  let proto = Object.getPrototypeOf(left);\n  while (true) {\n    // \u67e5\u627e\u5230\u5c3d\u5934\uff0c\u8fd8\u6ca1\u627e\u5230\n    if (proto == null) return false;\n    // \u627e\u5230\u76f8\u540c\u7684\u539f\u578b\u5bf9\u8c61\n    if (proto == right.prototype) return true;\n    proto = Object.getPrototypeOf(proto);\n  }\n}\n\n// \u6d4b\u8bd5\nconsole.log(myInstanceof('111', String)); // false\nconsole.log(myInstanceof(new String('111'), String)); // true",
              lang: 'js',
            }),
          ),
        )
      );
    },
    BRFb: function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        c = l('dEAq');
      l('JjdP');
      t['default'] = (e) => (
        a.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            c['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u5206\u4e3a\u57fa\u672c\u6570\u636e\u7c7b\u578b\u548c\u5f15\u7528\u6570\u636e\u7c7b\u578b',
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '1.\u57fa\u672c\u7c7b\u578b'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u5b58\u50a8\u5728\u6808\uff08stack\uff09\u4e2d\u7684\u7b80\u5355\u6570\u636e\u6bb5\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b83\u4eec\u7684\u503c\u76f4\u63a5\u5b58\u50a8\u5728\u53d8\u91cf\u8bbf\u95ee\u7684\u4f4d\u7f6e',
              ),
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', { align: 'left' }, '\u5206\u7c7b'),
                  a.a.createElement('th', { align: 'center' }, '\u540d\u79f0'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'String'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u5b57\u7b26\u4e32',
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Number'),
                  a.a.createElement('td', { align: 'center' }, '\u6570\u5b57'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Boolean'),
                  a.a.createElement('td', { align: 'center' }, '\u5e03\u5c14'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Null'),
                  a.a.createElement('td', { align: 'center' }, '\u7a7a'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Undefined'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u672a\u5b9a\u4e49',
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Symbol'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u72ec\u4e00\u65e0\u4e8c\u7684\u503c',
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'BigInt'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u5927\u6574\u6570',
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '2.\u5f15\u7528\u7c7b\u578b'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u5b58\u50a8\u5728\u5806\uff08heap\uff09\u4e2d\u7684\u5bf9\u8c61\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b58\u50a8\u5728\u53d8\u91cf\u5904\u7684\u503c\u662f\u4e00\u4e2a\u6307\u9488\uff08point\uff09\uff0c\u6307\u5411\u5b58\u50a8\u5bf9\u8c61\u7684',
                a.a.createElement('code', null, '\u5185\u5b58\u5730\u5740'),
              ),
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', { align: 'left' }, '\u5206\u7c7b'),
                  a.a.createElement('th', { align: 'center' }, '\u540d\u79f0'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Object'),
                  a.a.createElement('td', { align: 'center' }, '\u5bf9\u8c61'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Array'),
                  a.a.createElement('td', { align: 'center' }, '\u6570\u7ec4'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Function'),
                  a.a.createElement('td', { align: 'center' }, '\u51fd\u6570'),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '3.JS\u6570\u636e\u7c7b\u578b'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                a.a.createElement('code', null, 'String'),
                '\u3001 ',
                a.a.createElement('code', null, 'Number'),
                '\u3001 ',
                a.a.createElement('code', null, 'Boolean'),
                '\u3001 ',
                a.a.createElement('code', null, 'Null'),
                '\u3001 ',
                a.a.createElement('code', null, 'Undefined'),
                '\u3001 ',
                a.a.createElement('code', null, 'Object'),
                ' \u4ee5\u53ca ES6 \u65b0\u52a0\u7684 ',
                a.a.createElement('code', null, 'Symbol'),
                '\u548c',
                a.a.createElement('code', null, 'BigInt'),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement(
                'code',
                null,
                '4.null \u548c undefined \u533a\u522b',
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement('p', null, '1.\u5b9a\u4e49'),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  'null: object \u7c7b\u578b\uff0c\u8868\u793a\u4e00\u4e2a\u503c\u88ab\u5b9a\u4e49\u4e86\uff0c\u4f46\u662f\u8fd9\u4e2a\u503c\u662f"\u7a7a\u503c"\uff0c\u4ee3\u8868\u4e00\u4e2a',
                  a.a.createElement(
                    'code',
                    null,
                    '\u7a7a\u5bf9\u8c61\u6307\u9488',
                  ),
                ),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  'undefined: undefined \u7c7b\u578b\uff0c\u4ee3\u8868',
                  a.a.createElement('code', null, '\u672a\u5b9a\u4e49'),
                ),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement('p', null, '2.\u8f6c\u6362\u503c'),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'Number(null) => 0'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, '1 + null => 1'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'Number(undefined) => NaN'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, '1 + undefined => NaN'),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement('p', null, '3.\u5224\u65ad\u9898'),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'null == undefined => true'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'null === undefined => false'),
              ),
            ),
          ),
        )
      );
    },
    BhFT: function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        c = l('dEAq'),
        r = l('H1Ra');
      l('JjdP');
      t['default'] = (e) => (
        a.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            c['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '\u5355\u884c\u4ee3\u7801\u5757'),
            ),
            a.a.createElement(r['a'], {
              code: '`<p>\u8fd9\u662f\u4e00\u4e2a\u4ee3\u7801\u5757</p>`',
              lang: 'unknown',
            }),
            a.a.createElement(
              'p',
              null,
              a.a.createElement(
                'code',
                null,
                '<p>\u8fd9\u662f\u4e00\u4e2a\u4ee3\u7801\u5757</p>',
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '\u591a\u884c\u4ee3\u7801\u5757'),
            ),
            a.a.createElement(r['a'], {
              code: '```\n    \u8fd9\u91cc\u8fd8\u53ef\u4ee5\u5199\u591a\u884c\n    \u8fd8\u53ef\u4ee5\u5199\u4e00\u884c\n    \u8fd8\u53ef\u4ee5\u5199\u66f4\u591a\n  ```',
              lang: 'unknown',
            }),
            a.a.createElement(r['a'], {
              code: '\u8fd9\u91cc\u8fd8\u53ef\u4ee5\u5199\u591a\u884c\n  \u8fd8\u53ef\u4ee5\u5199\u4e00\u884c\n  \u8fd8\u53ef\u4ee5\u5199\u66f4\u591a',
              lang: 'unknown',
            }),
          ),
        )
      );
    },
    'CL/G': function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        c = l('dEAq'),
        r = l('H1Ra');
      l('JjdP');
      t['default'] = (e) => (
        a.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            c['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(r['a'], {
              code: '---\n_ _ _\n***\n* * *',
              lang: 'unknown',
            }),
            a.a.createElement('hr', null),
            a.a.createElement('hr', null),
            a.a.createElement('hr', null),
            a.a.createElement('hr', null),
          ),
        )
      );
    },
    LPpv: function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        c = l('dEAq'),
        r = l('H1Ra');
      l('JjdP');
      t['default'] = (e) => (
        a.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            c['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(r['a'], {
              code: '> \u8fd9\u662f\u4e00\u4e2a\u533a\u5757\u5f15\u7528\n\n> \u8fd9\u662f\u53e6\u4e00\u4e2a\u533a\u5757\u5f15\u7528\n>> \u8fd9\u662f\u4e00\u4e2a\u4e8c\u7ea7\u5d4c\u5957\u5f15\u7528\n>>> \u8fd9\u662f\u4e00\u4e2a\u4e09\u7ea7\u5d4c\u5957\u5f15\u7528\n\n\n> \u8fd9\u662f\u53e6\u4e00\u4e2a\u533a\u5757\u5f15\u7528\n\n>> \u8fd9\u662f\u4e00\u4e2a\u4e8c\u7ea7\u5d4c\u5957\u5f15\u7528\n\n>>> \u8fd9\u662f\u4e00\u4e2a\u4e09\u7ea7\u5d4c\u5957\u5f15\u7528',
              lang: 'unknown',
            }),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u8fd9\u662f\u4e00\u4e2a\u533a\u5757\u5f15\u7528',
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u8fd9\u662f\u53e6\u4e00\u4e2a\u533a\u5757\u5f15\u7528',
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u8fd9\u662f\u4e00\u4e2a\u4e8c\u7ea7\u5d4c\u5957\u5f15\u7528',
                ),
                a.a.createElement(
                  'blockquote',
                  null,
                  a.a.createElement(
                    'p',
                    null,
                    '\u8fd9\u662f\u4e00\u4e2a\u4e09\u7ea7\u5d4c\u5957\u5f15\u7528',
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u8fd9\u662f\u53e6\u4e00\u4e2a\u533a\u5757\u5f15\u7528',
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u8fd9\u662f\u4e00\u4e2a\u4e8c\u7ea7\u5d4c\u5957\u5f15\u7528',
                ),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'blockquote',
                  null,
                  a.a.createElement(
                    'p',
                    null,
                    '\u8fd9\u662f\u4e00\u4e2a\u4e09\u7ea7\u5d4c\u5957\u5f15\u7528',
                  ),
                ),
              ),
            ),
          ),
        )
      );
    },
    LgSl: function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        c = l('dEAq');
      l('JjdP');
      t['default'] = (e) => (
        a.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            c['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u5206\u4e3a\u57fa\u672c\u6570\u636e\u7c7b\u578b\u548c\u5f15\u7528\u6570\u636e\u7c7b\u578b',
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '1.\u57fa\u672c\u7c7b\u578b'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u5b58\u50a8\u5728\u6808\uff08stack\uff09\u4e2d\u7684\u7b80\u5355\u6570\u636e\u6bb5\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b83\u4eec\u7684\u503c\u76f4\u63a5\u5b58\u50a8\u5728\u53d8\u91cf\u8bbf\u95ee\u7684\u4f4d\u7f6e',
              ),
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', { align: 'left' }, '\u5206\u7c7b'),
                  a.a.createElement('th', { align: 'center' }, '\u540d\u79f0'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'String'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u5b57\u7b26\u4e32',
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Number'),
                  a.a.createElement('td', { align: 'center' }, '\u6570\u5b57'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Boolean'),
                  a.a.createElement('td', { align: 'center' }, '\u5e03\u5c14'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Null'),
                  a.a.createElement('td', { align: 'center' }, '\u7a7a'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Undefined'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u672a\u5b9a\u4e49',
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Symbol'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u72ec\u4e00\u65e0\u4e8c\u7684\u503c',
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'BigInt'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u5927\u6574\u6570',
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '2.\u5f15\u7528\u7c7b\u578b'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u5b58\u50a8\u5728\u5806\uff08heap\uff09\u4e2d\u7684\u5bf9\u8c61\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b58\u50a8\u5728\u53d8\u91cf\u5904\u7684\u503c\u662f\u4e00\u4e2a\u6307\u9488\uff08point\uff09\uff0c\u6307\u5411\u5b58\u50a8\u5bf9\u8c61\u7684',
                a.a.createElement('code', null, '\u5185\u5b58\u5730\u5740'),
              ),
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', { align: 'left' }, '\u5206\u7c7b'),
                  a.a.createElement('th', { align: 'center' }, '\u540d\u79f0'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Object'),
                  a.a.createElement('td', { align: 'center' }, '\u5bf9\u8c61'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Array'),
                  a.a.createElement('td', { align: 'center' }, '\u6570\u7ec4'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Function'),
                  a.a.createElement('td', { align: 'center' }, '\u51fd\u6570'),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '3.JS\u6570\u636e\u7c7b\u578b'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                a.a.createElement('code', null, 'String'),
                '\u3001 ',
                a.a.createElement('code', null, 'Number'),
                '\u3001 ',
                a.a.createElement('code', null, 'Boolean'),
                '\u3001 ',
                a.a.createElement('code', null, 'Null'),
                '\u3001 ',
                a.a.createElement('code', null, 'Undefined'),
                '\u3001 ',
                a.a.createElement('code', null, 'Object'),
                ' \u4ee5\u53ca ES6 \u65b0\u52a0\u7684 ',
                a.a.createElement('code', null, 'Symbol'),
                '\u548c',
                a.a.createElement('code', null, 'BigInt'),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement(
                'code',
                null,
                '4.null \u548c undefined \u533a\u522b',
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement('p', null, '1.\u5b9a\u4e49'),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  'null: object \u7c7b\u578b\uff0c\u8868\u793a\u4e00\u4e2a\u503c\u88ab\u5b9a\u4e49\u4e86\uff0c\u4f46\u662f\u8fd9\u4e2a\u503c\u662f"\u7a7a\u503c"\uff0c\u4ee3\u8868\u4e00\u4e2a',
                  a.a.createElement(
                    'code',
                    null,
                    '\u7a7a\u5bf9\u8c61\u6307\u9488',
                  ),
                ),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  'undefined: undefined \u7c7b\u578b\uff0c\u4ee3\u8868',
                  a.a.createElement('code', null, '\u672a\u5b9a\u4e49'),
                ),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement('p', null, '2.\u8f6c\u6362\u503c'),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'Number(null) => 0'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, '1 + null => 1'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'Number(undefined) => NaN'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, '1 + undefined => NaN'),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement('p', null, '3.\u5224\u65ad\u9898'),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'null == undefined => true'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'null === undefined => false'),
              ),
            ),
          ),
        )
      );
    },
    LwQY: function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        c = l('dEAq'),
        r = l('H1Ra');
      l('JjdP');
      t['default'] = (e) => (
        a.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            c['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '1.typeof'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                'typeof \u64cd\u4f5c\u7b26\u53ef\u4ee5\u7528\u6765\u5224\u65ad\u53d8\u91cf\u7684\u6570\u636e\u7c7b\u578b',
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u5bf9\u4e8e\u503c\u7c7b\u578b\u6709\u56db\u79cd\u7ed3\u679c\uff08undefined\u3001string\u3001number\u3001boolean\uff09',
                ),
                a.a.createElement(
                  'blockquote',
                  null,
                  a.a.createElement(
                    'p',
                    null,
                    '\u5bf9\u4e8e\u5f15\u7528\u7c7b\u578b\u6709\u4e24\u79cd\u7ed3\u679c\uff08function\u3001object\uff09',
                  ),
                  a.a.createElement(
                    'blockquote',
                    null,
                    a.a.createElement(
                      'p',
                      null,
                      "\u6ce8\u610f: typeof null === 'object'",
                    ),
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', { align: 'left' }, '\u6267\u884c'),
                  a.a.createElement('th', { align: 'center' }, '\u8f93\u51fa'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof ""'),
                  a.a.createElement('td', { align: 'center' }, 'string'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof 1'),
                  a.a.createElement('td', { align: 'center' }, 'number'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof true'),
                  a.a.createElement('td', { align: 'center' }, 'boolean'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof null'),
                  a.a.createElement('td', { align: 'center' }, 'object'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement(
                    'td',
                    { align: 'left' },
                    'typeof undefined',
                  ),
                  a.a.createElement('td', { align: 'center' }, 'undefined'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof []'),
                  a.a.createElement('td', { align: 'center' }, 'object'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement(
                    'td',
                    { align: 'left' },
                    'typeof function()',
                    '{',
                    '}',
                  ),
                  a.a.createElement('td', { align: 'center' }, 'function'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement(
                    'td',
                    { align: 'left' },
                    'typeof ',
                    '{',
                    '}',
                  ),
                  a.a.createElement('td', { align: 'center' }, 'object'),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '2.instanceof'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                'instanceof \u64cd\u4f5c\u7b26\u7528\u6765',
                a.a.createElement(
                  'code',
                  null,
                  '\u5224\u65ad\u5f15\u7528\u7c7b\u578b',
                ),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u8bed\u6cd5\uff1aA instanceof B',
                ),
                a.a.createElement(
                  'blockquote',
                  null,
                  a.a.createElement(
                    'p',
                    null,
                    '\u5224\u65ad\u89c4\u5219\uff1a\u6cbf\u7740 A \u7684',
                    a.a.createElement('code', null, '_proto_'),
                    '\u5c5e\u6027\u8fd9\u6761\u7ebf\u6765\u627e\uff0c\u540c\u65f6\u6cbf\u7740 B \u7684 prototype \u5c5e\u6027\u8fd9\u6761\u7ebf\uff0c\u82e5\u679c\u4e24\u6761\u7ebf\u80fd\u627e\u5230\u540c\u4e00\u4e2a\u5f15\u7528\uff0c\u5373 \u540c\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de true',
                  ),
                  a.a.createElement(
                    'blockquote',
                    null,
                    a.a.createElement(
                      'p',
                      null,
                      'instanceof \u8868\u793a\u7684\u5c31\u662f\u539f\u578b\u94fe\u7684\u7ed3\u6784',
                    ),
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u7528\u4e8e\u68c0\u6d4b\u6784\u9020\u51fd\u6570\u7684 ',
                a.a.createElement('code', null, 'prototype'),
                ' \u5c5e\u6027\u662f\u5426\u51fa\u73b0\u5728\u67d0\u4e2a\u5b9e\u4f8b\u5bf9\u8c61\u7684',
                a.a.createElement('code', null, '\u539f\u578b\u94fe'),
                '\u4e0a',
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u65e0\u6cd5\u901a\u8fc7\u5bf9\u8c61\u6765\u83b7\u5f97\u7c7b\u540d(\u4f8b\u5982: ',
                  a.a.createElement('code', null, "typeof ''"),
                  ' \u5f97\u5230\u7684\u7c7b\u540d\u662f',
                  a.a.createElement('code', null, 'string'),
                  ')\uff0c\u53ea\u80fd\u68c0\u6d4b\u5bf9\u8c61\u662f\u5426\u5c5e\u4e8e\u6307\u5b9a\u7684\u7c7b\u540d(\u4f8b\u5982: ',
                  a.a.createElement('code', null, 'a instanceof String'),
                  ')',
                ),
              ),
            ),
            a.a.createElement(r['a'], {
              code: "var simpleStr = 'This is a simple string';\nvar myString = new String();\nvar newStr = new String('String created with constructor');\nvar myDate = new Date();\nvar myObj = {};\nvar myNonObj = Object.create(null);\n\nsimpleStr instanceof String; // \u8fd4\u56de false, simpleStr\u5e76\u4e0d\u662f\u5bf9\u8c61\nmyString instanceof String; // \u8fd4\u56de true\nnewStr instanceof String; // \u8fd4\u56de true\nmyString instanceof Object; // \u8fd4\u56de true\n\nmyObj instanceof Object; // \u8fd4\u56de true, \u5c3d\u7ba1\u539f\u578b\u6ca1\u6709\u5b9a\u4e49\n({} instanceof Object); // \u8fd4\u56de true, \u540c\u4e0a\nmyNonObj instanceof Object; // \u8fd4\u56de false, \u4e00\u79cd\u521b\u5efa\u975e Object \u5b9e\u4f8b\u7684\u5bf9\u8c61\u7684\u65b9\u6cd5\n\nmyString instanceof Date; // \u8fd4\u56de false\n\nmyDate instanceof Date; // \u8fd4\u56de true\nmyDate instanceof Object; // \u8fd4\u56de true\nmyDate instanceof String; // \u8fd4\u56de false",
              lang: 'js',
            }),
            a.a.createElement(
              'p',
              null,
              a.a.createElement(
                'code',
                null,
                '3.\u624b\u52a8\u5b9e\u73b0instanceof',
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u6838\u5fc3: \u539f\u578b\u94fe\u7684\u5411\u4e0a\u67e5\u627e',
              ),
            ),
            a.a.createElement(r['a'], {
              code: "function myInstanceof(left, right) {\n  // \u57fa\u672c\u6570\u636e\u7c7b\u578b\u76f4\u63a5\u8fd4\u56defalse\n  if (typeof left !== 'object' || left === null) return false;\n  // getProtypeOf\u662fObject\u5bf9\u8c61\u81ea\u5e26\u7684\u4e00\u4e2a\u65b9\u6cd5\uff0c\u80fd\u591f\u62ff\u5230\u53c2\u6570\u7684\u539f\u578b\u5bf9\u8c61\n  let proto = Object.getPrototypeOf(left);\n  while (true) {\n    // \u67e5\u627e\u5230\u5c3d\u5934\uff0c\u8fd8\u6ca1\u627e\u5230\n    if (proto == null) return false;\n    // \u627e\u5230\u76f8\u540c\u7684\u539f\u578b\u5bf9\u8c61\n    if (proto == right.prototype) return true;\n    proto = Object.getPrototypeOf(proto);\n  }\n}\n\n// \u6d4b\u8bd5\nconsole.log(myInstanceof('111', String)); // false\nconsole.log(myInstanceof(new String('111'), String)); // true",
              lang: 'js',
            }),
          ),
        )
      );
    },
    'Mr+h': function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        c = l('dEAq'),
        r = l('H1Ra');
      l('JjdP');
      t['default'] = (e) => (
        a.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            c['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(r['a'], {
              code: '\u6bb5\u843d1<br>\u6bb5\u843d2\n\n\u6bb5\u843d3\n\n\n\u6bb5\u843d4',
              lang: 'unknown',
            }),
            a.a.createElement(
              'p',
              null,
              '\u6bb5\u843d 1',
              a.a.createElement('br', null),
              '\u6bb5\u843d 2',
            ),
            a.a.createElement('p', null, '\u6bb5\u843d 3'),
            a.a.createElement('p', null, '\u6bb5\u843d 4'),
          ),
        )
      );
    },
    N7WW: function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        c = l('dEAq'),
        r = l('H1Ra');
      l('JjdP');
      t['default'] = (e) => (
        a.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            c['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '1.typeof'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                'typeof \u64cd\u4f5c\u7b26\u53ef\u4ee5\u7528\u6765\u5224\u65ad\u53d8\u91cf\u7684\u6570\u636e\u7c7b\u578b',
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u5bf9\u4e8e\u503c\u7c7b\u578b\u6709\u56db\u79cd\u7ed3\u679c\uff08undefined\u3001string\u3001number\u3001boolean\uff09',
                ),
                a.a.createElement(
                  'blockquote',
                  null,
                  a.a.createElement(
                    'p',
                    null,
                    '\u5bf9\u4e8e\u5f15\u7528\u7c7b\u578b\u6709\u4e24\u79cd\u7ed3\u679c\uff08function\u3001object\uff09',
                  ),
                  a.a.createElement(
                    'blockquote',
                    null,
                    a.a.createElement(
                      'p',
                      null,
                      "\u6ce8\u610f: typeof null === 'object'",
                    ),
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', { align: 'left' }, '\u6267\u884c'),
                  a.a.createElement('th', { align: 'center' }, '\u8f93\u51fa'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof ""'),
                  a.a.createElement('td', { align: 'center' }, 'string'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof 1'),
                  a.a.createElement('td', { align: 'center' }, 'number'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof true'),
                  a.a.createElement('td', { align: 'center' }, 'boolean'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof null'),
                  a.a.createElement('td', { align: 'center' }, 'object'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement(
                    'td',
                    { align: 'left' },
                    'typeof undefined',
                  ),
                  a.a.createElement('td', { align: 'center' }, 'undefined'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof []'),
                  a.a.createElement('td', { align: 'center' }, 'object'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement(
                    'td',
                    { align: 'left' },
                    'typeof function()',
                    '{',
                    '}',
                  ),
                  a.a.createElement('td', { align: 'center' }, 'function'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement(
                    'td',
                    { align: 'left' },
                    'typeof ',
                    '{',
                    '}',
                  ),
                  a.a.createElement('td', { align: 'center' }, 'object'),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '2.instanceof'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                'instanceof \u64cd\u4f5c\u7b26\u7528\u6765',
                a.a.createElement(
                  'code',
                  null,
                  '\u5224\u65ad\u5f15\u7528\u7c7b\u578b',
                ),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u8bed\u6cd5\uff1aA instanceof B',
                ),
                a.a.createElement(
                  'blockquote',
                  null,
                  a.a.createElement(
                    'p',
                    null,
                    '\u5224\u65ad\u89c4\u5219\uff1a\u6cbf\u7740 A \u7684',
                    a.a.createElement('code', null, '_proto_'),
                    '\u5c5e\u6027\u8fd9\u6761\u7ebf\u6765\u627e\uff0c\u540c\u65f6\u6cbf\u7740 B \u7684 prototype \u5c5e\u6027\u8fd9\u6761\u7ebf\uff0c\u82e5\u679c\u4e24\u6761\u7ebf\u80fd\u627e\u5230\u540c\u4e00\u4e2a\u5f15\u7528\uff0c\u5373 \u540c\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de true',
                  ),
                  a.a.createElement(
                    'blockquote',
                    null,
                    a.a.createElement(
                      'p',
                      null,
                      'instanceof \u8868\u793a\u7684\u5c31\u662f\u539f\u578b\u94fe\u7684\u7ed3\u6784',
                    ),
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u7528\u4e8e\u68c0\u6d4b\u6784\u9020\u51fd\u6570\u7684 ',
                a.a.createElement('code', null, 'prototype'),
                ' \u5c5e\u6027\u662f\u5426\u51fa\u73b0\u5728\u67d0\u4e2a\u5b9e\u4f8b\u5bf9\u8c61\u7684',
                a.a.createElement('code', null, '\u539f\u578b\u94fe'),
                '\u4e0a',
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u65e0\u6cd5\u901a\u8fc7\u5bf9\u8c61\u6765\u83b7\u5f97\u7c7b\u540d(\u4f8b\u5982: ',
                  a.a.createElement('code', null, "typeof ''"),
                  ' \u5f97\u5230\u7684\u7c7b\u540d\u662f',
                  a.a.createElement('code', null, 'string'),
                  ')\uff0c\u53ea\u80fd\u68c0\u6d4b\u5bf9\u8c61\u662f\u5426\u5c5e\u4e8e\u6307\u5b9a\u7684\u7c7b\u540d(\u4f8b\u5982: ',
                  a.a.createElement('code', null, 'a instanceof String'),
                  ')',
                ),
              ),
            ),
            a.a.createElement(r['a'], {
              code: "var simpleStr = 'This is a simple string';\nvar myString = new String();\nvar newStr = new String('String created with constructor');\nvar myDate = new Date();\nvar myObj = {};\nvar myNonObj = Object.create(null);\n\nsimpleStr instanceof String; // \u8fd4\u56de false, simpleStr\u5e76\u4e0d\u662f\u5bf9\u8c61\nmyString instanceof String; // \u8fd4\u56de true\nnewStr instanceof String; // \u8fd4\u56de true\nmyString instanceof Object; // \u8fd4\u56de true\n\nmyObj instanceof Object; // \u8fd4\u56de true, \u5c3d\u7ba1\u539f\u578b\u6ca1\u6709\u5b9a\u4e49\n({} instanceof Object); // \u8fd4\u56de true, \u540c\u4e0a\nmyNonObj instanceof Object; // \u8fd4\u56de false, \u4e00\u79cd\u521b\u5efa\u975e Object \u5b9e\u4f8b\u7684\u5bf9\u8c61\u7684\u65b9\u6cd5\n\nmyString instanceof Date; // \u8fd4\u56de false\n\nmyDate instanceof Date; // \u8fd4\u56de true\nmyDate instanceof Object; // \u8fd4\u56de true\nmyDate instanceof String; // \u8fd4\u56de false",
              lang: 'js',
            }),
            a.a.createElement(
              'p',
              null,
              a.a.createElement(
                'code',
                null,
                '3.\u624b\u52a8\u5b9e\u73b0instanceof',
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u6838\u5fc3: \u539f\u578b\u94fe\u7684\u5411\u4e0a\u67e5\u627e',
              ),
            ),
            a.a.createElement(r['a'], {
              code: "function myInstanceof(left, right) {\n  // \u57fa\u672c\u6570\u636e\u7c7b\u578b\u76f4\u63a5\u8fd4\u56defalse\n  if (typeof left !== 'object' || left === null) return false;\n  // getProtypeOf\u662fObject\u5bf9\u8c61\u81ea\u5e26\u7684\u4e00\u4e2a\u65b9\u6cd5\uff0c\u80fd\u591f\u62ff\u5230\u53c2\u6570\u7684\u539f\u578b\u5bf9\u8c61\n  let proto = Object.getPrototypeOf(left);\n  while (true) {\n    // \u67e5\u627e\u5230\u5c3d\u5934\uff0c\u8fd8\u6ca1\u627e\u5230\n    if (proto == null) return false;\n    // \u627e\u5230\u76f8\u540c\u7684\u539f\u578b\u5bf9\u8c61\n    if (proto == right.prototype) return true;\n    proto = Object.getPrototypeOf(proto);\n  }\n}\n\n// \u6d4b\u8bd5\nconsole.log(myInstanceof('111', String)); // false\nconsole.log(myInstanceof(new String('111'), String)); // true",
              lang: 'js',
            }),
          ),
        )
      );
    },
    Q4xk: function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        c = l('dEAq'),
        r = l('H1Ra');
      l('JjdP');
      t['default'] = (e) => (
        a.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            c['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '\u884c\u5185\u5f0f'),
            ),
            a.a.createElement(r['a'], {
              code: '[\u94fe\u63a5](https://lianjie.com)',
              lang: 'unknown',
            }),
            a.a.createElement(
              'p',
              null,
              a.a.createElement(
                c['Link'],
                { to: 'https://lianjie.com/' },
                '\u94fe\u63a5',
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '\u53c2\u6570\u5f0f'),
            ),
            a.a.createElement(r['a'], {
              code: '\u8fd9\u662f\u6211\u7684[blog],\u6211\u60f3\u770b\u5230\u6211\u7684\u4e2d\u6587\u63d0\u793a[\u6211\u7684\u535a\u5ba2](http;//myblog.com "\u6211\u7684\u535a\u5ba2")\n\n\n[blog]: http;//myblog.com "\u6211\u7684\u535a\u5ba2"',
              lang: 'unknown',
            }),
            a.a.createElement(
              'p',
              null,
              '\u8fd9\u662f\u6211\u7684',
              a.a.createElement(
                c['Link'],
                { to: 'http;//myblog.com', title: '\u6211\u7684\u535a\u5ba2' },
                'blog',
              ),
              ',\u6211\u60f3\u770b\u5230\u6211\u7684\u4e2d\u6587\u63d0\u793a',
              a.a.createElement(
                c['Link'],
                { to: 'http;//myblog.com', title: '\u6211\u7684\u535a\u5ba2' },
                '\u6211\u7684\u535a\u5ba2',
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '\u81ea\u52a8\u94fe\u63a5'),
            ),
            a.a.createElement(
              'p',
              null,
              'Markdown \u652f\u6301\u4ee5\u6bd4\u8f83\u7b80\u77ed\u7684\u81ea\u52a8\u94fe\u63a5\u5f62\u5f0f\u6765\u5904\u7406\u7f51\u5740\u548c\u7535\u5b50\u90ae\u4ef6\u4fe1\u7bb1\uff0c\u53ea\u8981\u662f\u7528<>\u5305\u8d77\u6765\uff0c Markdown \u5c31\u4f1a\u81ea\u52a8\u628a\u5b83\u8f6c\u6210\u94fe\u63a5\u3002\u4e00\u822c\u7f51\u5740\u7684\u94fe\u63a5\u6587\u5b57\u5c31\u548c\u94fe\u63a5\u5730\u5740\u4e00\u6837\uff0c\u4f8b\u5982\uff1a',
            ),
            a.a.createElement(r['a'], {
              code: '<http://example.com/>\n<address@example.com>',
              lang: 'unknown',
            }),
            a.a.createElement(
              'p',
              null,
              a.a.createElement(
                c['Link'],
                { to: 'http://example.com/' },
                'http://example.com/',
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement(
                c['Link'],
                { to: 'mailto:address@example.com' },
                'address@example.com',
              ),
            ),
          ),
        )
      );
    },
    Wwmw: function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        c = l('dEAq'),
        r = l('H1Ra');
      l('JjdP');
      t['default'] = (e) => (
        a.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            c['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(r['a'], {
              code: '# \u4e00\u7ea7\u6807\u9898\n## \u4e8c\u7ea7\u6807\u9898\n### \u4e09\u7ea7\u6807\u9898\n#### \u56db\u7ea7\u6807\u9898\n##### \u4e94\u7ea7\u6807\u9898\n###### \u516d\u7ea7\u6807\u9898',
              lang: 'unknown',
            }),
          ),
        )
      );
    },
    fiGr: function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        c = l('dEAq');
      l('JjdP');
      t['default'] = (e) => (
        a.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            c['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u5206\u4e3a\u57fa\u672c\u6570\u636e\u7c7b\u578b\u548c\u5f15\u7528\u6570\u636e\u7c7b\u578b',
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '1.\u57fa\u672c\u7c7b\u578b'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u5b58\u50a8\u5728\u6808\uff08stack\uff09\u4e2d\u7684\u7b80\u5355\u6570\u636e\u6bb5\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b83\u4eec\u7684\u503c\u76f4\u63a5\u5b58\u50a8\u5728\u53d8\u91cf\u8bbf\u95ee\u7684\u4f4d\u7f6e',
              ),
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', { align: 'left' }, '\u5206\u7c7b'),
                  a.a.createElement('th', { align: 'center' }, '\u540d\u79f0'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'String'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u5b57\u7b26\u4e32',
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Number'),
                  a.a.createElement('td', { align: 'center' }, '\u6570\u5b57'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Boolean'),
                  a.a.createElement('td', { align: 'center' }, '\u5e03\u5c14'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Null'),
                  a.a.createElement('td', { align: 'center' }, '\u7a7a'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Undefined'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u672a\u5b9a\u4e49',
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Symbol'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u72ec\u4e00\u65e0\u4e8c\u7684\u503c',
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'BigInt'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u5927\u6574\u6570',
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '2.\u5f15\u7528\u7c7b\u578b'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u5b58\u50a8\u5728\u5806\uff08heap\uff09\u4e2d\u7684\u5bf9\u8c61\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b58\u50a8\u5728\u53d8\u91cf\u5904\u7684\u503c\u662f\u4e00\u4e2a\u6307\u9488\uff08point\uff09\uff0c\u6307\u5411\u5b58\u50a8\u5bf9\u8c61\u7684',
                a.a.createElement('code', null, '\u5185\u5b58\u5730\u5740'),
              ),
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', { align: 'left' }, '\u5206\u7c7b'),
                  a.a.createElement('th', { align: 'center' }, '\u540d\u79f0'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Object'),
                  a.a.createElement('td', { align: 'center' }, '\u5bf9\u8c61'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Array'),
                  a.a.createElement('td', { align: 'center' }, '\u6570\u7ec4'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Function'),
                  a.a.createElement('td', { align: 'center' }, '\u51fd\u6570'),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '3.JS\u6570\u636e\u7c7b\u578b'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                a.a.createElement('code', null, 'String'),
                '\u3001 ',
                a.a.createElement('code', null, 'Number'),
                '\u3001 ',
                a.a.createElement('code', null, 'Boolean'),
                '\u3001 ',
                a.a.createElement('code', null, 'Null'),
                '\u3001 ',
                a.a.createElement('code', null, 'Undefined'),
                '\u3001 ',
                a.a.createElement('code', null, 'Object'),
                ' \u4ee5\u53ca ES6 \u65b0\u52a0\u7684 ',
                a.a.createElement('code', null, 'Symbol'),
                '\u548c',
                a.a.createElement('code', null, 'BigInt'),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement(
                'code',
                null,
                '4.null \u548c undefined \u533a\u522b',
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement('p', null, '1.\u5b9a\u4e49'),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  'null: object \u7c7b\u578b\uff0c\u8868\u793a\u4e00\u4e2a\u503c\u88ab\u5b9a\u4e49\u4e86\uff0c\u4f46\u662f\u8fd9\u4e2a\u503c\u662f"\u7a7a\u503c"\uff0c\u4ee3\u8868\u4e00\u4e2a',
                  a.a.createElement(
                    'code',
                    null,
                    '\u7a7a\u5bf9\u8c61\u6307\u9488',
                  ),
                ),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  'undefined: undefined \u7c7b\u578b\uff0c\u4ee3\u8868',
                  a.a.createElement('code', null, '\u672a\u5b9a\u4e49'),
                ),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement('p', null, '2.\u8f6c\u6362\u503c'),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'Number(null) => 0'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, '1 + null => 1'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'Number(undefined) => NaN'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, '1 + undefined => NaN'),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement('p', null, '3.\u5224\u65ad\u9898'),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'null == undefined => true'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'null === undefined => false'),
              ),
            ),
          ),
        )
      );
    },
    gKy3: function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        c = l('dEAq'),
        r = l('H1Ra');
      l('JjdP');
      t['default'] = (e) => (
        a.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            c['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(r['a'], {
              code: '|  \u59d3\u540d | \u5e74\u9f84 |  \u6027\u522b |\n|:-----|-----:|:-----:|\n|Kevin |  18  |   \u7537  |\n|Jack  |  17  |   \u5973  |\n|Bruce |  19  |   \u7537  |',
              lang: 'unknown',
            }),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', { align: 'left' }, '\u59d3\u540d'),
                  a.a.createElement('th', { align: 'right' }, '\u5e74\u9f84'),
                  a.a.createElement('th', { align: 'center' }, '\u6027\u522b'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Kevin'),
                  a.a.createElement('td', { align: 'right' }, '18'),
                  a.a.createElement('td', { align: 'center' }, '\u7537'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Jack'),
                  a.a.createElement('td', { align: 'right' }, '17'),
                  a.a.createElement('td', { align: 'center' }, '\u5973'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Bruce'),
                  a.a.createElement('td', { align: 'right' }, '19'),
                  a.a.createElement('td', { align: 'center' }, '\u7537'),
                ),
              ),
            ),
          ),
        )
      );
    },
    gytJ: function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        c = l('dEAq'),
        r = l('H1Ra');
      l('JjdP');
      t['default'] = (e) => (
        a.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            c['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '\u52a0\u7c97'),
            ),
            a.a.createElement(r['a'], {
              code: '**\u52a0\u7c97**\n\n__\u5b57\u4f53\u52a0\u7c97__',
              lang: 'unknown',
            }),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('strong', null, '\u52a0\u7c97'),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('strong', null, '\u5b57\u4f53\u52a0\u7c97'),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '\u659c\u4f53'),
            ),
            a.a.createElement(r['a'], {
              code: '*\u5b57\u4f53\u503e\u659c*\n\n_\u5b57\u4f53\u503e\u659c_',
              lang: 'unknown',
            }),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('em', null, '\u5b57\u4f53\u503e\u659c'),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('em', null, '\u5b57\u4f53\u503e\u659c'),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '\u52a0\u7c97\u5e76\u659c\u4f53'),
            ),
            a.a.createElement(r['a'], {
              code: '***\u7c97\u659c***\n\n___\u7c97\u659c___',
              lang: 'unknown',
            }),
            a.a.createElement(
              'p',
              null,
              a.a.createElement(
                'strong',
                null,
                a.a.createElement('em', null, '\u7c97\u659c'),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement(
                'strong',
                null,
                a.a.createElement('em', null, '\u7c97\u659c'),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '\u5220\u9664\u7ebf'),
            ),
            a.a.createElement(r['a'], {
              code: '~~\u5220\u9664\u6211\u5427~~',
              lang: 'unknown',
            }),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('del', null, '\u5220\u9664\u6211\u5427'),
            ),
          ),
        )
      );
    },
    jHaQ: function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        c = l('dEAq'),
        r = l('H1Ra');
      l('JjdP');
      t['default'] = (e) => (
        a.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            c['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '1.typeof'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                'typeof \u64cd\u4f5c\u7b26\u53ef\u4ee5\u7528\u6765\u5224\u65ad\u53d8\u91cf\u7684\u6570\u636e\u7c7b\u578b',
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u5bf9\u4e8e\u503c\u7c7b\u578b\u6709\u56db\u79cd\u7ed3\u679c\uff08undefined\u3001string\u3001number\u3001boolean\uff09',
                ),
                a.a.createElement(
                  'blockquote',
                  null,
                  a.a.createElement(
                    'p',
                    null,
                    '\u5bf9\u4e8e\u5f15\u7528\u7c7b\u578b\u6709\u4e24\u79cd\u7ed3\u679c\uff08function\u3001object\uff09',
                  ),
                  a.a.createElement(
                    'blockquote',
                    null,
                    a.a.createElement(
                      'p',
                      null,
                      "\u6ce8\u610f: typeof null === 'object'",
                    ),
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', { align: 'left' }, '\u6267\u884c'),
                  a.a.createElement('th', { align: 'center' }, '\u8f93\u51fa'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof ""'),
                  a.a.createElement('td', { align: 'center' }, 'string'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof 1'),
                  a.a.createElement('td', { align: 'center' }, 'number'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof true'),
                  a.a.createElement('td', { align: 'center' }, 'boolean'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof null'),
                  a.a.createElement('td', { align: 'center' }, 'object'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement(
                    'td',
                    { align: 'left' },
                    'typeof undefined',
                  ),
                  a.a.createElement('td', { align: 'center' }, 'undefined'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof []'),
                  a.a.createElement('td', { align: 'center' }, 'object'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement(
                    'td',
                    { align: 'left' },
                    'typeof function()',
                    '{',
                    '}',
                  ),
                  a.a.createElement('td', { align: 'center' }, 'function'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement(
                    'td',
                    { align: 'left' },
                    'typeof ',
                    '{',
                    '}',
                  ),
                  a.a.createElement('td', { align: 'center' }, 'object'),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '2.instanceof'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                'instanceof \u64cd\u4f5c\u7b26\u7528\u6765',
                a.a.createElement(
                  'code',
                  null,
                  '\u5224\u65ad\u5f15\u7528\u7c7b\u578b',
                ),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u8bed\u6cd5\uff1aA instanceof B',
                ),
                a.a.createElement(
                  'blockquote',
                  null,
                  a.a.createElement(
                    'p',
                    null,
                    '\u5224\u65ad\u89c4\u5219\uff1a\u6cbf\u7740 A \u7684',
                    a.a.createElement('code', null, '_proto_'),
                    '\u5c5e\u6027\u8fd9\u6761\u7ebf\u6765\u627e\uff0c\u540c\u65f6\u6cbf\u7740 B \u7684 prototype \u5c5e\u6027\u8fd9\u6761\u7ebf\uff0c\u82e5\u679c\u4e24\u6761\u7ebf\u80fd\u627e\u5230\u540c\u4e00\u4e2a\u5f15\u7528\uff0c\u5373 \u540c\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de true',
                  ),
                  a.a.createElement(
                    'blockquote',
                    null,
                    a.a.createElement(
                      'p',
                      null,
                      'instanceof \u8868\u793a\u7684\u5c31\u662f\u539f\u578b\u94fe\u7684\u7ed3\u6784',
                    ),
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u7528\u4e8e\u68c0\u6d4b\u6784\u9020\u51fd\u6570\u7684 ',
                a.a.createElement('code', null, 'prototype'),
                ' \u5c5e\u6027\u662f\u5426\u51fa\u73b0\u5728\u67d0\u4e2a\u5b9e\u4f8b\u5bf9\u8c61\u7684',
                a.a.createElement('code', null, '\u539f\u578b\u94fe'),
                '\u4e0a',
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u65e0\u6cd5\u901a\u8fc7\u5bf9\u8c61\u6765\u83b7\u5f97\u7c7b\u540d(\u4f8b\u5982: ',
                  a.a.createElement('code', null, "typeof ''"),
                  ' \u5f97\u5230\u7684\u7c7b\u540d\u662f',
                  a.a.createElement('code', null, 'string'),
                  ')\uff0c\u53ea\u80fd\u68c0\u6d4b\u5bf9\u8c61\u662f\u5426\u5c5e\u4e8e\u6307\u5b9a\u7684\u7c7b\u540d(\u4f8b\u5982: ',
                  a.a.createElement('code', null, 'a instanceof String'),
                  ')',
                ),
              ),
            ),
            a.a.createElement(r['a'], {
              code: "var simpleStr = 'This is a simple string';\nvar myString = new String();\nvar newStr = new String('String created with constructor');\nvar myDate = new Date();\nvar myObj = {};\nvar myNonObj = Object.create(null);\n\nsimpleStr instanceof String; // \u8fd4\u56de false, simpleStr\u5e76\u4e0d\u662f\u5bf9\u8c61\nmyString instanceof String; // \u8fd4\u56de true\nnewStr instanceof String; // \u8fd4\u56de true\nmyString instanceof Object; // \u8fd4\u56de true\n\nmyObj instanceof Object; // \u8fd4\u56de true, \u5c3d\u7ba1\u539f\u578b\u6ca1\u6709\u5b9a\u4e49\n({} instanceof Object); // \u8fd4\u56de true, \u540c\u4e0a\nmyNonObj instanceof Object; // \u8fd4\u56de false, \u4e00\u79cd\u521b\u5efa\u975e Object \u5b9e\u4f8b\u7684\u5bf9\u8c61\u7684\u65b9\u6cd5\n\nmyString instanceof Date; // \u8fd4\u56de false\n\nmyDate instanceof Date; // \u8fd4\u56de true\nmyDate instanceof Object; // \u8fd4\u56de true\nmyDate instanceof String; // \u8fd4\u56de false",
              lang: 'js',
            }),
            a.a.createElement(
              'p',
              null,
              a.a.createElement(
                'code',
                null,
                '3.\u624b\u52a8\u5b9e\u73b0instanceof',
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u6838\u5fc3: \u539f\u578b\u94fe\u7684\u5411\u4e0a\u67e5\u627e',
              ),
            ),
            a.a.createElement(r['a'], {
              code: "function myInstanceof(left, right) {\n  // \u57fa\u672c\u6570\u636e\u7c7b\u578b\u76f4\u63a5\u8fd4\u56defalse\n  if (typeof left !== 'object' || left === null) return false;\n  // getProtypeOf\u662fObject\u5bf9\u8c61\u81ea\u5e26\u7684\u4e00\u4e2a\u65b9\u6cd5\uff0c\u80fd\u591f\u62ff\u5230\u53c2\u6570\u7684\u539f\u578b\u5bf9\u8c61\n  let proto = Object.getPrototypeOf(left);\n  while (true) {\n    // \u67e5\u627e\u5230\u5c3d\u5934\uff0c\u8fd8\u6ca1\u627e\u5230\n    if (proto == null) return false;\n    // \u627e\u5230\u76f8\u540c\u7684\u539f\u578b\u5bf9\u8c61\n    if (proto == right.prototype) return true;\n    proto = Object.getPrototypeOf(proto);\n  }\n}\n\n// \u6d4b\u8bd5\nconsole.log(myInstanceof('111', String)); // false\nconsole.log(myInstanceof(new String('111'), String)); // true",
              lang: 'js',
            }),
          ),
        )
      );
    },
    jNcd: function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        c = l('dEAq');
      l('JjdP');
      t['default'] = (e) => (
        a.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            c['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u5206\u4e3a\u57fa\u672c\u6570\u636e\u7c7b\u578b\u548c\u5f15\u7528\u6570\u636e\u7c7b\u578b',
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '1.\u57fa\u672c\u7c7b\u578b'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u5b58\u50a8\u5728\u6808\uff08stack\uff09\u4e2d\u7684\u7b80\u5355\u6570\u636e\u6bb5\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b83\u4eec\u7684\u503c\u76f4\u63a5\u5b58\u50a8\u5728\u53d8\u91cf\u8bbf\u95ee\u7684\u4f4d\u7f6e',
              ),
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', { align: 'left' }, '\u5206\u7c7b'),
                  a.a.createElement('th', { align: 'center' }, '\u540d\u79f0'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'String'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u5b57\u7b26\u4e32',
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Number'),
                  a.a.createElement('td', { align: 'center' }, '\u6570\u5b57'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Boolean'),
                  a.a.createElement('td', { align: 'center' }, '\u5e03\u5c14'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Null'),
                  a.a.createElement('td', { align: 'center' }, '\u7a7a'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Undefined'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u672a\u5b9a\u4e49',
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Symbol'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u72ec\u4e00\u65e0\u4e8c\u7684\u503c',
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'BigInt'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u5927\u6574\u6570',
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '2.\u5f15\u7528\u7c7b\u578b'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u5b58\u50a8\u5728\u5806\uff08heap\uff09\u4e2d\u7684\u5bf9\u8c61\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b58\u50a8\u5728\u53d8\u91cf\u5904\u7684\u503c\u662f\u4e00\u4e2a\u6307\u9488\uff08point\uff09\uff0c\u6307\u5411\u5b58\u50a8\u5bf9\u8c61\u7684',
                a.a.createElement('code', null, '\u5185\u5b58\u5730\u5740'),
              ),
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', { align: 'left' }, '\u5206\u7c7b'),
                  a.a.createElement('th', { align: 'center' }, '\u540d\u79f0'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Object'),
                  a.a.createElement('td', { align: 'center' }, '\u5bf9\u8c61'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Array'),
                  a.a.createElement('td', { align: 'center' }, '\u6570\u7ec4'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Function'),
                  a.a.createElement('td', { align: 'center' }, '\u51fd\u6570'),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '3.JS\u6570\u636e\u7c7b\u578b'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                a.a.createElement('code', null, 'String'),
                '\u3001 ',
                a.a.createElement('code', null, 'Number'),
                '\u3001 ',
                a.a.createElement('code', null, 'Boolean'),
                '\u3001 ',
                a.a.createElement('code', null, 'Null'),
                '\u3001 ',
                a.a.createElement('code', null, 'Undefined'),
                '\u3001 ',
                a.a.createElement('code', null, 'Object'),
                ' \u4ee5\u53ca ES6 \u65b0\u52a0\u7684 ',
                a.a.createElement('code', null, 'Symbol'),
                '\u548c',
                a.a.createElement('code', null, 'BigInt'),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement(
                'code',
                null,
                '4.null \u548c undefined \u533a\u522b',
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement('p', null, '1.\u5b9a\u4e49'),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  'null: object \u7c7b\u578b\uff0c\u8868\u793a\u4e00\u4e2a\u503c\u88ab\u5b9a\u4e49\u4e86\uff0c\u4f46\u662f\u8fd9\u4e2a\u503c\u662f"\u7a7a\u503c"\uff0c\u4ee3\u8868\u4e00\u4e2a',
                  a.a.createElement(
                    'code',
                    null,
                    '\u7a7a\u5bf9\u8c61\u6307\u9488',
                  ),
                ),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  'undefined: undefined \u7c7b\u578b\uff0c\u4ee3\u8868',
                  a.a.createElement('code', null, '\u672a\u5b9a\u4e49'),
                ),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement('p', null, '2.\u8f6c\u6362\u503c'),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'Number(null) => 0'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, '1 + null => 1'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'Number(undefined) => NaN'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, '1 + undefined => NaN'),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement('p', null, '3.\u5224\u65ad\u9898'),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'null == undefined => true'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'null === undefined => false'),
              ),
            ),
          ),
        )
      );
    },
    lYE8: function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        c = l('dEAq');
      l('JjdP');
      t['default'] = (e) => (
        a.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            c['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u5206\u4e3a\u57fa\u672c\u6570\u636e\u7c7b\u578b\u548c\u5f15\u7528\u6570\u636e\u7c7b\u578b',
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '1.\u57fa\u672c\u7c7b\u578b'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u5b58\u50a8\u5728\u6808\uff08stack\uff09\u4e2d\u7684\u7b80\u5355\u6570\u636e\u6bb5\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b83\u4eec\u7684\u503c\u76f4\u63a5\u5b58\u50a8\u5728\u53d8\u91cf\u8bbf\u95ee\u7684\u4f4d\u7f6e',
              ),
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', { align: 'left' }, '\u5206\u7c7b'),
                  a.a.createElement('th', { align: 'center' }, '\u540d\u79f0'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'String'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u5b57\u7b26\u4e32',
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Number'),
                  a.a.createElement('td', { align: 'center' }, '\u6570\u5b57'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Boolean'),
                  a.a.createElement('td', { align: 'center' }, '\u5e03\u5c14'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Null'),
                  a.a.createElement('td', { align: 'center' }, '\u7a7a'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Undefined'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u672a\u5b9a\u4e49',
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Symbol'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u72ec\u4e00\u65e0\u4e8c\u7684\u503c',
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'BigInt'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u5927\u6574\u6570',
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '2.\u5f15\u7528\u7c7b\u578b'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u5b58\u50a8\u5728\u5806\uff08heap\uff09\u4e2d\u7684\u5bf9\u8c61\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b58\u50a8\u5728\u53d8\u91cf\u5904\u7684\u503c\u662f\u4e00\u4e2a\u6307\u9488\uff08point\uff09\uff0c\u6307\u5411\u5b58\u50a8\u5bf9\u8c61\u7684',
                a.a.createElement('code', null, '\u5185\u5b58\u5730\u5740'),
              ),
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', { align: 'left' }, '\u5206\u7c7b'),
                  a.a.createElement('th', { align: 'center' }, '\u540d\u79f0'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Object'),
                  a.a.createElement('td', { align: 'center' }, '\u5bf9\u8c61'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Array'),
                  a.a.createElement('td', { align: 'center' }, '\u6570\u7ec4'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Function'),
                  a.a.createElement('td', { align: 'center' }, '\u51fd\u6570'),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '3.JS\u6570\u636e\u7c7b\u578b'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                a.a.createElement('code', null, 'String'),
                '\u3001 ',
                a.a.createElement('code', null, 'Number'),
                '\u3001 ',
                a.a.createElement('code', null, 'Boolean'),
                '\u3001 ',
                a.a.createElement('code', null, 'Null'),
                '\u3001 ',
                a.a.createElement('code', null, 'Undefined'),
                '\u3001 ',
                a.a.createElement('code', null, 'Object'),
                ' \u4ee5\u53ca ES6 \u65b0\u52a0\u7684 ',
                a.a.createElement('code', null, 'Symbol'),
                '\u548c',
                a.a.createElement('code', null, 'BigInt'),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement(
                'code',
                null,
                '4.null \u548c undefined \u533a\u522b',
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement('p', null, '1.\u5b9a\u4e49'),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  'null: object \u7c7b\u578b\uff0c\u8868\u793a\u4e00\u4e2a\u503c\u88ab\u5b9a\u4e49\u4e86\uff0c\u4f46\u662f\u8fd9\u4e2a\u503c\u662f"\u7a7a\u503c"\uff0c\u4ee3\u8868\u4e00\u4e2a',
                  a.a.createElement(
                    'code',
                    null,
                    '\u7a7a\u5bf9\u8c61\u6307\u9488',
                  ),
                ),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  'undefined: undefined \u7c7b\u578b\uff0c\u4ee3\u8868',
                  a.a.createElement('code', null, '\u672a\u5b9a\u4e49'),
                ),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement('p', null, '2.\u8f6c\u6362\u503c'),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'Number(null) => 0'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, '1 + null => 1'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'Number(undefined) => NaN'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, '1 + undefined => NaN'),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement('p', null, '3.\u5224\u65ad\u9898'),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'null == undefined => true'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'null === undefined => false'),
              ),
            ),
          ),
        )
      );
    },
    lxTn: function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        c = l('dEAq');
      l('JjdP');
      t['default'] = (e) => (
        a.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            c['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u5206\u4e3a\u57fa\u672c\u6570\u636e\u7c7b\u578b\u548c\u5f15\u7528\u6570\u636e\u7c7b\u578b',
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '1.\u57fa\u672c\u7c7b\u578b'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u5b58\u50a8\u5728\u6808\uff08stack\uff09\u4e2d\u7684\u7b80\u5355\u6570\u636e\u6bb5\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b83\u4eec\u7684\u503c\u76f4\u63a5\u5b58\u50a8\u5728\u53d8\u91cf\u8bbf\u95ee\u7684\u4f4d\u7f6e',
              ),
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', { align: 'left' }, '\u5206\u7c7b'),
                  a.a.createElement('th', { align: 'center' }, '\u540d\u79f0'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'String'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u5b57\u7b26\u4e32',
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Number'),
                  a.a.createElement('td', { align: 'center' }, '\u6570\u5b57'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Boolean'),
                  a.a.createElement('td', { align: 'center' }, '\u5e03\u5c14'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Null'),
                  a.a.createElement('td', { align: 'center' }, '\u7a7a'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Undefined'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u672a\u5b9a\u4e49',
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Symbol'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u72ec\u4e00\u65e0\u4e8c\u7684\u503c',
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'BigInt'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u5927\u6574\u6570',
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '2.\u5f15\u7528\u7c7b\u578b'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u5b58\u50a8\u5728\u5806\uff08heap\uff09\u4e2d\u7684\u5bf9\u8c61\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b58\u50a8\u5728\u53d8\u91cf\u5904\u7684\u503c\u662f\u4e00\u4e2a\u6307\u9488\uff08point\uff09\uff0c\u6307\u5411\u5b58\u50a8\u5bf9\u8c61\u7684',
                a.a.createElement('code', null, '\u5185\u5b58\u5730\u5740'),
              ),
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', { align: 'left' }, '\u5206\u7c7b'),
                  a.a.createElement('th', { align: 'center' }, '\u540d\u79f0'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Object'),
                  a.a.createElement('td', { align: 'center' }, '\u5bf9\u8c61'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Array'),
                  a.a.createElement('td', { align: 'center' }, '\u6570\u7ec4'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Function'),
                  a.a.createElement('td', { align: 'center' }, '\u51fd\u6570'),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '3.JS\u6570\u636e\u7c7b\u578b'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                a.a.createElement('code', null, 'String'),
                '\u3001 ',
                a.a.createElement('code', null, 'Number'),
                '\u3001 ',
                a.a.createElement('code', null, 'Boolean'),
                '\u3001 ',
                a.a.createElement('code', null, 'Null'),
                '\u3001 ',
                a.a.createElement('code', null, 'Undefined'),
                '\u3001 ',
                a.a.createElement('code', null, 'Object'),
                ' \u4ee5\u53ca ES6 \u65b0\u52a0\u7684 ',
                a.a.createElement('code', null, 'Symbol'),
                '\u548c',
                a.a.createElement('code', null, 'BigInt'),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement(
                'code',
                null,
                '4.null \u548c undefined \u533a\u522b',
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement('p', null, '1.\u5b9a\u4e49'),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  'null: object \u7c7b\u578b\uff0c\u8868\u793a\u4e00\u4e2a\u503c\u88ab\u5b9a\u4e49\u4e86\uff0c\u4f46\u662f\u8fd9\u4e2a\u503c\u662f"\u7a7a\u503c"\uff0c\u4ee3\u8868\u4e00\u4e2a',
                  a.a.createElement(
                    'code',
                    null,
                    '\u7a7a\u5bf9\u8c61\u6307\u9488',
                  ),
                ),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  'undefined: undefined \u7c7b\u578b\uff0c\u4ee3\u8868',
                  a.a.createElement('code', null, '\u672a\u5b9a\u4e49'),
                ),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement('p', null, '2.\u8f6c\u6362\u503c'),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'Number(null) => 0'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, '1 + null => 1'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'Number(undefined) => NaN'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, '1 + undefined => NaN'),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement('p', null, '3.\u5224\u65ad\u9898'),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'null == undefined => true'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'null === undefined => false'),
              ),
            ),
          ),
        )
      );
    },
    o0Wq: function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        c = l('dEAq'),
        r = l('H1Ra');
      l('JjdP');
      t['default'] = (e) => (
        a.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            c['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'p',
              null,
              '\u7528\u6cd5\u8ddf\u94fe\u63a5\u7684\u57fa\u672c\u4e00\u6837\uff0c\u552f\u4e00\u7684\u4e0d\u540c\u5c31\u662f\uff0c\u56fe\u7247\u524d\u9762\u8981\u5199\u4e00\u4e2a\uff01',
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '\u884c\u5185\u5f0f'),
            ),
            a.a.createElement(r['a'], {
              code: '![\u6211\u7684\u56fe\u7247](https://static.oschina.net/uploads/user/1808/3617290_100.jpeg?t=1523231638000 "\u6211\u7684\u5f00\u6e90\u4e2d\u56fd\u535a\u5ba2logo")',
              lang: 'unknown',
            }),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('img', {
                src: 'https://static.oschina.net/uploads/user/1808/3617290_100.jpeg?t=1523231638000',
                alt: '\u6211\u7684\u56fe\u7247',
                title: '\u6211\u7684\u5f00\u6e90\u4e2d\u56fd\u535a\u5ba2logo',
              }),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '\u53c2\u6570\u5f0f'),
            ),
            a.a.createElement(r['a'], {
              code: '\u8fd9\u662f\u53c2\u6570\u5f0f\u7684\u5f15\u7528![\u6211\u7684logo]\n\n[\u6211\u7684logo]: https://static.oschina.net/uploads/user/1808/3617290_100.jpeg?t=1523231638000 "\u6211\u7684\u5f00\u6e90\u4e2d\u56fd\u535a\u5ba2logo"',
              lang: 'unknown',
            }),
            a.a.createElement(
              'p',
              null,
              '\u8fd9\u662f\u53c2\u6570\u5f0f\u7684\u5f15\u7528',
              a.a.createElement('img', {
                src: 'https://static.oschina.net/uploads/user/1808/3617290_100.jpeg?t=1523231638000',
                alt: '\u6211\u7684logo',
                title: '\u6211\u7684\u5f00\u6e90\u4e2d\u56fd\u535a\u5ba2logo',
              }),
            ),
          ),
        )
      );
    },
    poDE: function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        c = l('dEAq'),
        r = l('H1Ra');
      l('JjdP');
      t['default'] = (e) => (
        a.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            c['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '1.typeof'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                'typeof \u64cd\u4f5c\u7b26\u53ef\u4ee5\u7528\u6765\u5224\u65ad\u53d8\u91cf\u7684\u6570\u636e\u7c7b\u578b',
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u5bf9\u4e8e\u503c\u7c7b\u578b\u6709\u56db\u79cd\u7ed3\u679c\uff08undefined\u3001string\u3001number\u3001boolean\uff09',
                ),
                a.a.createElement(
                  'blockquote',
                  null,
                  a.a.createElement(
                    'p',
                    null,
                    '\u5bf9\u4e8e\u5f15\u7528\u7c7b\u578b\u6709\u4e24\u79cd\u7ed3\u679c\uff08function\u3001object\uff09',
                  ),
                  a.a.createElement(
                    'blockquote',
                    null,
                    a.a.createElement(
                      'p',
                      null,
                      "\u6ce8\u610f: typeof null === 'object'",
                    ),
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', { align: 'left' }, '\u6267\u884c'),
                  a.a.createElement('th', { align: 'center' }, '\u8f93\u51fa'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof ""'),
                  a.a.createElement('td', { align: 'center' }, 'string'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof 1'),
                  a.a.createElement('td', { align: 'center' }, 'number'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof true'),
                  a.a.createElement('td', { align: 'center' }, 'boolean'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof null'),
                  a.a.createElement('td', { align: 'center' }, 'object'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement(
                    'td',
                    { align: 'left' },
                    'typeof undefined',
                  ),
                  a.a.createElement('td', { align: 'center' }, 'undefined'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof []'),
                  a.a.createElement('td', { align: 'center' }, 'object'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement(
                    'td',
                    { align: 'left' },
                    'typeof function()',
                    '{',
                    '}',
                  ),
                  a.a.createElement('td', { align: 'center' }, 'function'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement(
                    'td',
                    { align: 'left' },
                    'typeof ',
                    '{',
                    '}',
                  ),
                  a.a.createElement('td', { align: 'center' }, 'object'),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '2.instanceof'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                'instanceof \u64cd\u4f5c\u7b26\u7528\u6765',
                a.a.createElement(
                  'code',
                  null,
                  '\u5224\u65ad\u5f15\u7528\u7c7b\u578b',
                ),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u8bed\u6cd5\uff1aA instanceof B',
                ),
                a.a.createElement(
                  'blockquote',
                  null,
                  a.a.createElement(
                    'p',
                    null,
                    '\u5224\u65ad\u89c4\u5219\uff1a\u6cbf\u7740 A \u7684',
                    a.a.createElement('code', null, '_proto_'),
                    '\u5c5e\u6027\u8fd9\u6761\u7ebf\u6765\u627e\uff0c\u540c\u65f6\u6cbf\u7740 B \u7684 prototype \u5c5e\u6027\u8fd9\u6761\u7ebf\uff0c\u82e5\u679c\u4e24\u6761\u7ebf\u80fd\u627e\u5230\u540c\u4e00\u4e2a\u5f15\u7528\uff0c\u5373 \u540c\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de true',
                  ),
                  a.a.createElement(
                    'blockquote',
                    null,
                    a.a.createElement(
                      'p',
                      null,
                      'instanceof \u8868\u793a\u7684\u5c31\u662f\u539f\u578b\u94fe\u7684\u7ed3\u6784',
                    ),
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u7528\u4e8e\u68c0\u6d4b\u6784\u9020\u51fd\u6570\u7684 ',
                a.a.createElement('code', null, 'prototype'),
                ' \u5c5e\u6027\u662f\u5426\u51fa\u73b0\u5728\u67d0\u4e2a\u5b9e\u4f8b\u5bf9\u8c61\u7684',
                a.a.createElement('code', null, '\u539f\u578b\u94fe'),
                '\u4e0a',
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u65e0\u6cd5\u901a\u8fc7\u5bf9\u8c61\u6765\u83b7\u5f97\u7c7b\u540d(\u4f8b\u5982: ',
                  a.a.createElement('code', null, "typeof ''"),
                  ' \u5f97\u5230\u7684\u7c7b\u540d\u662f',
                  a.a.createElement('code', null, 'string'),
                  ')\uff0c\u53ea\u80fd\u68c0\u6d4b\u5bf9\u8c61\u662f\u5426\u5c5e\u4e8e\u6307\u5b9a\u7684\u7c7b\u540d(\u4f8b\u5982: ',
                  a.a.createElement('code', null, 'a instanceof String'),
                  ')',
                ),
              ),
            ),
            a.a.createElement(r['a'], {
              code: "var simpleStr = 'This is a simple string';\nvar myString = new String();\nvar newStr = new String('String created with constructor');\nvar myDate = new Date();\nvar myObj = {};\nvar myNonObj = Object.create(null);\n\nsimpleStr instanceof String; // \u8fd4\u56de false, simpleStr\u5e76\u4e0d\u662f\u5bf9\u8c61\nmyString instanceof String; // \u8fd4\u56de true\nnewStr instanceof String; // \u8fd4\u56de true\nmyString instanceof Object; // \u8fd4\u56de true\n\nmyObj instanceof Object; // \u8fd4\u56de true, \u5c3d\u7ba1\u539f\u578b\u6ca1\u6709\u5b9a\u4e49\n({} instanceof Object); // \u8fd4\u56de true, \u540c\u4e0a\nmyNonObj instanceof Object; // \u8fd4\u56de false, \u4e00\u79cd\u521b\u5efa\u975e Object \u5b9e\u4f8b\u7684\u5bf9\u8c61\u7684\u65b9\u6cd5\n\nmyString instanceof Date; // \u8fd4\u56de false\n\nmyDate instanceof Date; // \u8fd4\u56de true\nmyDate instanceof Object; // \u8fd4\u56de true\nmyDate instanceof String; // \u8fd4\u56de false",
              lang: 'js',
            }),
            a.a.createElement(
              'p',
              null,
              a.a.createElement(
                'code',
                null,
                '3.\u624b\u52a8\u5b9e\u73b0instanceof',
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u6838\u5fc3: \u539f\u578b\u94fe\u7684\u5411\u4e0a\u67e5\u627e',
              ),
            ),
            a.a.createElement(r['a'], {
              code: "function myInstanceof(left, right) {\n  // \u57fa\u672c\u6570\u636e\u7c7b\u578b\u76f4\u63a5\u8fd4\u56defalse\n  if (typeof left !== 'object' || left === null) return false;\n  // getProtypeOf\u662fObject\u5bf9\u8c61\u81ea\u5e26\u7684\u4e00\u4e2a\u65b9\u6cd5\uff0c\u80fd\u591f\u62ff\u5230\u53c2\u6570\u7684\u539f\u578b\u5bf9\u8c61\n  let proto = Object.getPrototypeOf(left);\n  while (true) {\n    // \u67e5\u627e\u5230\u5c3d\u5934\uff0c\u8fd8\u6ca1\u627e\u5230\n    if (proto == null) return false;\n    // \u627e\u5230\u76f8\u540c\u7684\u539f\u578b\u5bf9\u8c61\n    if (proto == right.prototype) return true;\n    proto = Object.getPrototypeOf(proto);\n  }\n}\n\n// \u6d4b\u8bd5\nconsole.log(myInstanceof('111', String)); // false\nconsole.log(myInstanceof(new String('111'), String)); // true",
              lang: 'js',
            }),
          ),
        )
      );
    },
    rM6x: function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        c = l('dEAq'),
        r = l('H1Ra');
      l('JjdP');
      t['default'] = (e) => (
        a.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            c['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '1.typeof'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                'typeof \u64cd\u4f5c\u7b26\u53ef\u4ee5\u7528\u6765\u5224\u65ad\u53d8\u91cf\u7684\u6570\u636e\u7c7b\u578b',
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u5bf9\u4e8e\u503c\u7c7b\u578b\u6709\u56db\u79cd\u7ed3\u679c\uff08undefined\u3001string\u3001number\u3001boolean\uff09',
                ),
                a.a.createElement(
                  'blockquote',
                  null,
                  a.a.createElement(
                    'p',
                    null,
                    '\u5bf9\u4e8e\u5f15\u7528\u7c7b\u578b\u6709\u4e24\u79cd\u7ed3\u679c\uff08function\u3001object\uff09',
                  ),
                  a.a.createElement(
                    'blockquote',
                    null,
                    a.a.createElement(
                      'p',
                      null,
                      "\u6ce8\u610f: typeof null === 'object'",
                    ),
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', { align: 'left' }, '\u6267\u884c'),
                  a.a.createElement('th', { align: 'center' }, '\u8f93\u51fa'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof ""'),
                  a.a.createElement('td', { align: 'center' }, 'string'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof 1'),
                  a.a.createElement('td', { align: 'center' }, 'number'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof true'),
                  a.a.createElement('td', { align: 'center' }, 'boolean'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof null'),
                  a.a.createElement('td', { align: 'center' }, 'object'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement(
                    'td',
                    { align: 'left' },
                    'typeof undefined',
                  ),
                  a.a.createElement('td', { align: 'center' }, 'undefined'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof []'),
                  a.a.createElement('td', { align: 'center' }, 'object'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement(
                    'td',
                    { align: 'left' },
                    'typeof function()',
                    '{',
                    '}',
                  ),
                  a.a.createElement('td', { align: 'center' }, 'function'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement(
                    'td',
                    { align: 'left' },
                    'typeof ',
                    '{',
                    '}',
                  ),
                  a.a.createElement('td', { align: 'center' }, 'object'),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '2.instanceof'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                'instanceof \u64cd\u4f5c\u7b26\u7528\u6765',
                a.a.createElement(
                  'code',
                  null,
                  '\u5224\u65ad\u5f15\u7528\u7c7b\u578b',
                ),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u8bed\u6cd5\uff1aA instanceof B',
                ),
                a.a.createElement(
                  'blockquote',
                  null,
                  a.a.createElement(
                    'p',
                    null,
                    '\u5224\u65ad\u89c4\u5219\uff1a\u6cbf\u7740 A \u7684',
                    a.a.createElement('code', null, '_proto_'),
                    '\u5c5e\u6027\u8fd9\u6761\u7ebf\u6765\u627e\uff0c\u540c\u65f6\u6cbf\u7740 B \u7684 prototype \u5c5e\u6027\u8fd9\u6761\u7ebf\uff0c\u82e5\u679c\u4e24\u6761\u7ebf\u80fd\u627e\u5230\u540c\u4e00\u4e2a\u5f15\u7528\uff0c\u5373 \u540c\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de true',
                  ),
                  a.a.createElement(
                    'blockquote',
                    null,
                    a.a.createElement(
                      'p',
                      null,
                      'instanceof \u8868\u793a\u7684\u5c31\u662f\u539f\u578b\u94fe\u7684\u7ed3\u6784',
                    ),
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u7528\u4e8e\u68c0\u6d4b\u6784\u9020\u51fd\u6570\u7684 ',
                a.a.createElement('code', null, 'prototype'),
                ' \u5c5e\u6027\u662f\u5426\u51fa\u73b0\u5728\u67d0\u4e2a\u5b9e\u4f8b\u5bf9\u8c61\u7684',
                a.a.createElement('code', null, '\u539f\u578b\u94fe'),
                '\u4e0a',
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u65e0\u6cd5\u901a\u8fc7\u5bf9\u8c61\u6765\u83b7\u5f97\u7c7b\u540d(\u4f8b\u5982: ',
                  a.a.createElement('code', null, "typeof ''"),
                  ' \u5f97\u5230\u7684\u7c7b\u540d\u662f',
                  a.a.createElement('code', null, 'string'),
                  ')\uff0c\u53ea\u80fd\u68c0\u6d4b\u5bf9\u8c61\u662f\u5426\u5c5e\u4e8e\u6307\u5b9a\u7684\u7c7b\u540d(\u4f8b\u5982: ',
                  a.a.createElement('code', null, 'a instanceof String'),
                  ')',
                ),
              ),
            ),
            a.a.createElement(r['a'], {
              code: "var simpleStr = 'This is a simple string';\nvar myString = new String();\nvar newStr = new String('String created with constructor');\nvar myDate = new Date();\nvar myObj = {};\nvar myNonObj = Object.create(null);\n\nsimpleStr instanceof String; // \u8fd4\u56de false, simpleStr\u5e76\u4e0d\u662f\u5bf9\u8c61\nmyString instanceof String; // \u8fd4\u56de true\nnewStr instanceof String; // \u8fd4\u56de true\nmyString instanceof Object; // \u8fd4\u56de true\n\nmyObj instanceof Object; // \u8fd4\u56de true, \u5c3d\u7ba1\u539f\u578b\u6ca1\u6709\u5b9a\u4e49\n({} instanceof Object); // \u8fd4\u56de true, \u540c\u4e0a\nmyNonObj instanceof Object; // \u8fd4\u56de false, \u4e00\u79cd\u521b\u5efa\u975e Object \u5b9e\u4f8b\u7684\u5bf9\u8c61\u7684\u65b9\u6cd5\n\nmyString instanceof Date; // \u8fd4\u56de false\n\nmyDate instanceof Date; // \u8fd4\u56de true\nmyDate instanceof Object; // \u8fd4\u56de true\nmyDate instanceof String; // \u8fd4\u56de false",
              lang: 'js',
            }),
            a.a.createElement(
              'p',
              null,
              a.a.createElement(
                'code',
                null,
                '3.\u624b\u52a8\u5b9e\u73b0instanceof',
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u6838\u5fc3: \u539f\u578b\u94fe\u7684\u5411\u4e0a\u67e5\u627e',
              ),
            ),
            a.a.createElement(r['a'], {
              code: "function myInstanceof(left, right) {\n  // \u57fa\u672c\u6570\u636e\u7c7b\u578b\u76f4\u63a5\u8fd4\u56defalse\n  if (typeof left !== 'object' || left === null) return false;\n  // getProtypeOf\u662fObject\u5bf9\u8c61\u81ea\u5e26\u7684\u4e00\u4e2a\u65b9\u6cd5\uff0c\u80fd\u591f\u62ff\u5230\u53c2\u6570\u7684\u539f\u578b\u5bf9\u8c61\n  let proto = Object.getPrototypeOf(left);\n  while (true) {\n    // \u67e5\u627e\u5230\u5c3d\u5934\uff0c\u8fd8\u6ca1\u627e\u5230\n    if (proto == null) return false;\n    // \u627e\u5230\u76f8\u540c\u7684\u539f\u578b\u5bf9\u8c61\n    if (proto == right.prototype) return true;\n    proto = Object.getPrototypeOf(proto);\n  }\n}\n\n// \u6d4b\u8bd5\nconsole.log(myInstanceof('111', String)); // false\nconsole.log(myInstanceof(new String('111'), String)); // true",
              lang: 'js',
            }),
          ),
        )
      );
    },
    tdsX: function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        c = l('dEAq'),
        r = l('H1Ra');
      l('JjdP');
      t['default'] = (e) => (
        a.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            c['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '\u65e0\u5e8f\u5217\u8868'),
            ),
            a.a.createElement(r['a'], {
              code: '* 1\n  * 2\n    *3\n- 4\n  - 5\n    - 6\n+ 7\n  + 8\n    + 9',
              lang: 'unknown',
            }),
            a.a.createElement(
              'ul',
              null,
              a.a.createElement(
                'li',
                null,
                '1',
                a.a.createElement(
                  'ul',
                  null,
                  a.a.createElement(
                    'li',
                    null,
                    '2',
                    a.a.createElement(
                      'ul',
                      null,
                      a.a.createElement('li', null, '3'),
                    ),
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'ul',
              null,
              a.a.createElement(
                'li',
                null,
                '4',
                a.a.createElement(
                  'ul',
                  null,
                  a.a.createElement(
                    'li',
                    null,
                    '5',
                    a.a.createElement(
                      'ul',
                      null,
                      a.a.createElement('li', null, '6'),
                    ),
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'ul',
              null,
              a.a.createElement(
                'li',
                null,
                '7',
                a.a.createElement(
                  'ul',
                  null,
                  a.a.createElement(
                    'li',
                    null,
                    '8',
                    a.a.createElement(
                      'ul',
                      null,
                      a.a.createElement('li', null, '9'),
                    ),
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '\u6709\u5e8f\u5217\u8868'),
            ),
            a.a.createElement(r['a'], {
              code: '1. 1\n2. 2\n3. 3',
              lang: 'unknown',
            }),
            a.a.createElement(
              'ol',
              null,
              a.a.createElement('li', null, '1'),
              a.a.createElement('li', null, '2'),
              a.a.createElement('li', null, '3'),
            ),
          ),
        )
      );
    },
    tvIM: function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        c = l('dEAq'),
        r = l('H1Ra');
      l('JjdP');
      t['default'] = (e) => (
        a.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            c['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '1.typeof'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                'typeof \u64cd\u4f5c\u7b26\u53ef\u4ee5\u7528\u6765\u5224\u65ad\u53d8\u91cf\u7684\u6570\u636e\u7c7b\u578b',
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u5bf9\u4e8e\u503c\u7c7b\u578b\u6709\u56db\u79cd\u7ed3\u679c\uff08undefined\u3001string\u3001number\u3001boolean\uff09',
                ),
                a.a.createElement(
                  'blockquote',
                  null,
                  a.a.createElement(
                    'p',
                    null,
                    '\u5bf9\u4e8e\u5f15\u7528\u7c7b\u578b\u6709\u4e24\u79cd\u7ed3\u679c\uff08function\u3001object\uff09',
                  ),
                  a.a.createElement(
                    'blockquote',
                    null,
                    a.a.createElement(
                      'p',
                      null,
                      "\u6ce8\u610f: typeof null === 'object'",
                    ),
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', { align: 'left' }, '\u6267\u884c'),
                  a.a.createElement('th', { align: 'center' }, '\u8f93\u51fa'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof ""'),
                  a.a.createElement('td', { align: 'center' }, 'string'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof 1'),
                  a.a.createElement('td', { align: 'center' }, 'number'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof true'),
                  a.a.createElement('td', { align: 'center' }, 'boolean'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof null'),
                  a.a.createElement('td', { align: 'center' }, 'object'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement(
                    'td',
                    { align: 'left' },
                    'typeof undefined',
                  ),
                  a.a.createElement('td', { align: 'center' }, 'undefined'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof []'),
                  a.a.createElement('td', { align: 'center' }, 'object'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement(
                    'td',
                    { align: 'left' },
                    'typeof function()',
                    '{',
                    '}',
                  ),
                  a.a.createElement('td', { align: 'center' }, 'function'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement(
                    'td',
                    { align: 'left' },
                    'typeof ',
                    '{',
                    '}',
                  ),
                  a.a.createElement('td', { align: 'center' }, 'object'),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '2.instanceof'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                'instanceof \u64cd\u4f5c\u7b26\u7528\u6765',
                a.a.createElement(
                  'code',
                  null,
                  '\u5224\u65ad\u5f15\u7528\u7c7b\u578b',
                ),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u8bed\u6cd5\uff1aA instanceof B',
                ),
                a.a.createElement(
                  'blockquote',
                  null,
                  a.a.createElement(
                    'p',
                    null,
                    '\u5224\u65ad\u89c4\u5219\uff1a\u6cbf\u7740 A \u7684',
                    a.a.createElement('code', null, '_proto_'),
                    '\u5c5e\u6027\u8fd9\u6761\u7ebf\u6765\u627e\uff0c\u540c\u65f6\u6cbf\u7740 B \u7684 prototype \u5c5e\u6027\u8fd9\u6761\u7ebf\uff0c\u82e5\u679c\u4e24\u6761\u7ebf\u80fd\u627e\u5230\u540c\u4e00\u4e2a\u5f15\u7528\uff0c\u5373 \u540c\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de true',
                  ),
                  a.a.createElement(
                    'blockquote',
                    null,
                    a.a.createElement(
                      'p',
                      null,
                      'instanceof \u8868\u793a\u7684\u5c31\u662f\u539f\u578b\u94fe\u7684\u7ed3\u6784',
                    ),
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u7528\u4e8e\u68c0\u6d4b\u6784\u9020\u51fd\u6570\u7684 ',
                a.a.createElement('code', null, 'prototype'),
                ' \u5c5e\u6027\u662f\u5426\u51fa\u73b0\u5728\u67d0\u4e2a\u5b9e\u4f8b\u5bf9\u8c61\u7684',
                a.a.createElement('code', null, '\u539f\u578b\u94fe'),
                '\u4e0a',
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u65e0\u6cd5\u901a\u8fc7\u5bf9\u8c61\u6765\u83b7\u5f97\u7c7b\u540d(\u4f8b\u5982: ',
                  a.a.createElement('code', null, "typeof ''"),
                  ' \u5f97\u5230\u7684\u7c7b\u540d\u662f',
                  a.a.createElement('code', null, 'string'),
                  ')\uff0c\u53ea\u80fd\u68c0\u6d4b\u5bf9\u8c61\u662f\u5426\u5c5e\u4e8e\u6307\u5b9a\u7684\u7c7b\u540d(\u4f8b\u5982: ',
                  a.a.createElement('code', null, 'a instanceof String'),
                  ')',
                ),
              ),
            ),
            a.a.createElement(r['a'], {
              code: "var simpleStr = 'This is a simple string';\nvar myString = new String();\nvar newStr = new String('String created with constructor');\nvar myDate = new Date();\nvar myObj = {};\nvar myNonObj = Object.create(null);\n\nsimpleStr instanceof String; // \u8fd4\u56de false, simpleStr\u5e76\u4e0d\u662f\u5bf9\u8c61\nmyString instanceof String; // \u8fd4\u56de true\nnewStr instanceof String; // \u8fd4\u56de true\nmyString instanceof Object; // \u8fd4\u56de true\n\nmyObj instanceof Object; // \u8fd4\u56de true, \u5c3d\u7ba1\u539f\u578b\u6ca1\u6709\u5b9a\u4e49\n({} instanceof Object); // \u8fd4\u56de true, \u540c\u4e0a\nmyNonObj instanceof Object; // \u8fd4\u56de false, \u4e00\u79cd\u521b\u5efa\u975e Object \u5b9e\u4f8b\u7684\u5bf9\u8c61\u7684\u65b9\u6cd5\n\nmyString instanceof Date; // \u8fd4\u56de false\n\nmyDate instanceof Date; // \u8fd4\u56de true\nmyDate instanceof Object; // \u8fd4\u56de true\nmyDate instanceof String; // \u8fd4\u56de false",
              lang: 'js',
            }),
            a.a.createElement(
              'p',
              null,
              a.a.createElement(
                'code',
                null,
                '3.\u624b\u52a8\u5b9e\u73b0instanceof',
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u6838\u5fc3: \u539f\u578b\u94fe\u7684\u5411\u4e0a\u67e5\u627e',
              ),
            ),
            a.a.createElement(r['a'], {
              code: "function myInstanceof(left, right) {\n  // \u57fa\u672c\u6570\u636e\u7c7b\u578b\u76f4\u63a5\u8fd4\u56defalse\n  if (typeof left !== 'object' || left === null) return false;\n  // getProtypeOf\u662fObject\u5bf9\u8c61\u81ea\u5e26\u7684\u4e00\u4e2a\u65b9\u6cd5\uff0c\u80fd\u591f\u62ff\u5230\u53c2\u6570\u7684\u539f\u578b\u5bf9\u8c61\n  let proto = Object.getPrototypeOf(left);\n  while (true) {\n    // \u67e5\u627e\u5230\u5c3d\u5934\uff0c\u8fd8\u6ca1\u627e\u5230\n    if (proto == null) return false;\n    // \u627e\u5230\u76f8\u540c\u7684\u539f\u578b\u5bf9\u8c61\n    if (proto == right.prototype) return true;\n    proto = Object.getPrototypeOf(proto);\n  }\n}\n\n// \u6d4b\u8bd5\nconsole.log(myInstanceof('111', String)); // false\nconsole.log(myInstanceof(new String('111'), String)); // true",
              lang: 'js',
            }),
          ),
        )
      );
    },
    uJio: function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        c = l('dEAq'),
        r = l('H1Ra');
      l('JjdP');
      t['default'] = (e) => (
        a.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            c['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'p',
              null,
              '\u8f6c\u4e49\u5c31\u662f\u5c06\u4e00\u4e9b\u7279\u6b8a\u5b57\u7b26\u8f6c\u6362\u6210\u6b63\u5e38\u663e\u793a\u7684\u6837\u5b50\uff0c\u548c\u5927\u591a\u6570\u7f16\u7a0b\u8bed\u8a00\u76f8\u540c\u4f7f\u7528\u53cd\u659c\u6760()\u8868\u793a',
            ),
            a.a.createElement(r['a'], {
              code: '* \\\\\n* \\`\n* \\*\n* \\!',
              lang: 'unknown',
            }),
            a.a.createElement(
              'ul',
              null,
              a.a.createElement('li', null, '\\'),
              a.a.createElement('li', null, '`'),
              a.a.createElement('li', null, '*'),
              a.a.createElement('li', null, '!'),
            ),
          ),
        )
      );
    },
    ubHY: function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        c = l('dEAq'),
        r = l('H1Ra');
      l('JjdP');
      t['default'] = (e) => (
        a.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            c['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '1.typeof'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                'typeof \u64cd\u4f5c\u7b26\u53ef\u4ee5\u7528\u6765\u5224\u65ad\u53d8\u91cf\u7684\u6570\u636e\u7c7b\u578b',
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u5bf9\u4e8e\u503c\u7c7b\u578b\u6709\u56db\u79cd\u7ed3\u679c\uff08undefined\u3001string\u3001number\u3001boolean\uff09',
                ),
                a.a.createElement(
                  'blockquote',
                  null,
                  a.a.createElement(
                    'p',
                    null,
                    '\u5bf9\u4e8e\u5f15\u7528\u7c7b\u578b\u6709\u4e24\u79cd\u7ed3\u679c\uff08function\u3001object\uff09',
                  ),
                  a.a.createElement(
                    'blockquote',
                    null,
                    a.a.createElement(
                      'p',
                      null,
                      "\u6ce8\u610f: typeof null === 'object'",
                    ),
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', { align: 'left' }, '\u6267\u884c'),
                  a.a.createElement('th', { align: 'center' }, '\u8f93\u51fa'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof ""'),
                  a.a.createElement('td', { align: 'center' }, 'string'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof 1'),
                  a.a.createElement('td', { align: 'center' }, 'number'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof true'),
                  a.a.createElement('td', { align: 'center' }, 'boolean'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof null'),
                  a.a.createElement('td', { align: 'center' }, 'object'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement(
                    'td',
                    { align: 'left' },
                    'typeof undefined',
                  ),
                  a.a.createElement('td', { align: 'center' }, 'undefined'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof []'),
                  a.a.createElement('td', { align: 'center' }, 'object'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement(
                    'td',
                    { align: 'left' },
                    'typeof function()',
                    '{',
                    '}',
                  ),
                  a.a.createElement('td', { align: 'center' }, 'function'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement(
                    'td',
                    { align: 'left' },
                    'typeof ',
                    '{',
                    '}',
                  ),
                  a.a.createElement('td', { align: 'center' }, 'object'),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '2.instanceof'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                'instanceof \u64cd\u4f5c\u7b26\u7528\u6765',
                a.a.createElement(
                  'code',
                  null,
                  '\u5224\u65ad\u5f15\u7528\u7c7b\u578b',
                ),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u8bed\u6cd5\uff1aA instanceof B',
                ),
                a.a.createElement(
                  'blockquote',
                  null,
                  a.a.createElement(
                    'p',
                    null,
                    '\u5224\u65ad\u89c4\u5219\uff1a\u6cbf\u7740 A \u7684',
                    a.a.createElement('code', null, '_proto_'),
                    '\u5c5e\u6027\u8fd9\u6761\u7ebf\u6765\u627e\uff0c\u540c\u65f6\u6cbf\u7740 B \u7684 prototype \u5c5e\u6027\u8fd9\u6761\u7ebf\uff0c\u82e5\u679c\u4e24\u6761\u7ebf\u80fd\u627e\u5230\u540c\u4e00\u4e2a\u5f15\u7528\uff0c\u5373 \u540c\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de true',
                  ),
                  a.a.createElement(
                    'blockquote',
                    null,
                    a.a.createElement(
                      'p',
                      null,
                      'instanceof \u8868\u793a\u7684\u5c31\u662f\u539f\u578b\u94fe\u7684\u7ed3\u6784',
                    ),
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u7528\u4e8e\u68c0\u6d4b\u6784\u9020\u51fd\u6570\u7684 ',
                a.a.createElement('code', null, 'prototype'),
                ' \u5c5e\u6027\u662f\u5426\u51fa\u73b0\u5728\u67d0\u4e2a\u5b9e\u4f8b\u5bf9\u8c61\u7684',
                a.a.createElement('code', null, '\u539f\u578b\u94fe'),
                '\u4e0a',
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u65e0\u6cd5\u901a\u8fc7\u5bf9\u8c61\u6765\u83b7\u5f97\u7c7b\u540d(\u4f8b\u5982: ',
                  a.a.createElement('code', null, "typeof ''"),
                  ' \u5f97\u5230\u7684\u7c7b\u540d\u662f',
                  a.a.createElement('code', null, 'string'),
                  ')\uff0c\u53ea\u80fd\u68c0\u6d4b\u5bf9\u8c61\u662f\u5426\u5c5e\u4e8e\u6307\u5b9a\u7684\u7c7b\u540d(\u4f8b\u5982: ',
                  a.a.createElement('code', null, 'a instanceof String'),
                  ')',
                ),
              ),
            ),
            a.a.createElement(r['a'], {
              code: "var simpleStr = 'This is a simple string';\nvar myString = new String();\nvar newStr = new String('String created with constructor');\nvar myDate = new Date();\nvar myObj = {};\nvar myNonObj = Object.create(null);\n\nsimpleStr instanceof String; // \u8fd4\u56de false, simpleStr\u5e76\u4e0d\u662f\u5bf9\u8c61\nmyString instanceof String; // \u8fd4\u56de true\nnewStr instanceof String; // \u8fd4\u56de true\nmyString instanceof Object; // \u8fd4\u56de true\n\nmyObj instanceof Object; // \u8fd4\u56de true, \u5c3d\u7ba1\u539f\u578b\u6ca1\u6709\u5b9a\u4e49\n({} instanceof Object); // \u8fd4\u56de true, \u540c\u4e0a\nmyNonObj instanceof Object; // \u8fd4\u56de false, \u4e00\u79cd\u521b\u5efa\u975e Object \u5b9e\u4f8b\u7684\u5bf9\u8c61\u7684\u65b9\u6cd5\n\nmyString instanceof Date; // \u8fd4\u56de false\n\nmyDate instanceof Date; // \u8fd4\u56de true\nmyDate instanceof Object; // \u8fd4\u56de true\nmyDate instanceof String; // \u8fd4\u56de false",
              lang: 'js',
            }),
            a.a.createElement(
              'p',
              null,
              a.a.createElement(
                'code',
                null,
                '3.\u624b\u52a8\u5b9e\u73b0instanceof',
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u6838\u5fc3: \u539f\u578b\u94fe\u7684\u5411\u4e0a\u67e5\u627e',
              ),
            ),
            a.a.createElement(r['a'], {
              code: "function myInstanceof(left, right) {\n  // \u57fa\u672c\u6570\u636e\u7c7b\u578b\u76f4\u63a5\u8fd4\u56defalse\n  if (typeof left !== 'object' || left === null) return false;\n  // getProtypeOf\u662fObject\u5bf9\u8c61\u81ea\u5e26\u7684\u4e00\u4e2a\u65b9\u6cd5\uff0c\u80fd\u591f\u62ff\u5230\u53c2\u6570\u7684\u539f\u578b\u5bf9\u8c61\n  let proto = Object.getPrototypeOf(left);\n  while (true) {\n    // \u67e5\u627e\u5230\u5c3d\u5934\uff0c\u8fd8\u6ca1\u627e\u5230\n    if (proto == null) return false;\n    // \u627e\u5230\u76f8\u540c\u7684\u539f\u578b\u5bf9\u8c61\n    if (proto == right.prototype) return true;\n    proto = Object.getPrototypeOf(proto);\n  }\n}\n\n// \u6d4b\u8bd5\nconsole.log(myInstanceof('111', String)); // false\nconsole.log(myInstanceof(new String('111'), String)); // true",
              lang: 'js',
            }),
          ),
        )
      );
    },
    vc5i: function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        c = l('dEAq'),
        r = l('H1Ra');
      l('JjdP');
      t['default'] = (e) => (
        a.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            c['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '1.typeof'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                'typeof \u64cd\u4f5c\u7b26\u53ef\u4ee5\u7528\u6765\u5224\u65ad\u53d8\u91cf\u7684\u6570\u636e\u7c7b\u578b',
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u5bf9\u4e8e\u503c\u7c7b\u578b\u6709\u56db\u79cd\u7ed3\u679c\uff08undefined\u3001string\u3001number\u3001boolean\uff09',
                ),
                a.a.createElement(
                  'blockquote',
                  null,
                  a.a.createElement(
                    'p',
                    null,
                    '\u5bf9\u4e8e\u5f15\u7528\u7c7b\u578b\u6709\u4e24\u79cd\u7ed3\u679c\uff08function\u3001object\uff09',
                  ),
                  a.a.createElement(
                    'blockquote',
                    null,
                    a.a.createElement(
                      'p',
                      null,
                      "\u6ce8\u610f: typeof null === 'object'",
                    ),
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', { align: 'left' }, '\u6267\u884c'),
                  a.a.createElement('th', { align: 'center' }, '\u8f93\u51fa'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof ""'),
                  a.a.createElement('td', { align: 'center' }, 'string'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof 1'),
                  a.a.createElement('td', { align: 'center' }, 'number'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof true'),
                  a.a.createElement('td', { align: 'center' }, 'boolean'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof null'),
                  a.a.createElement('td', { align: 'center' }, 'object'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement(
                    'td',
                    { align: 'left' },
                    'typeof undefined',
                  ),
                  a.a.createElement('td', { align: 'center' }, 'undefined'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof []'),
                  a.a.createElement('td', { align: 'center' }, 'object'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement(
                    'td',
                    { align: 'left' },
                    'typeof function()',
                    '{',
                    '}',
                  ),
                  a.a.createElement('td', { align: 'center' }, 'function'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement(
                    'td',
                    { align: 'left' },
                    'typeof ',
                    '{',
                    '}',
                  ),
                  a.a.createElement('td', { align: 'center' }, 'object'),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '2.instanceof'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                'instanceof \u64cd\u4f5c\u7b26\u7528\u6765',
                a.a.createElement(
                  'code',
                  null,
                  '\u5224\u65ad\u5f15\u7528\u7c7b\u578b',
                ),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u8bed\u6cd5\uff1aA instanceof B',
                ),
                a.a.createElement(
                  'blockquote',
                  null,
                  a.a.createElement(
                    'p',
                    null,
                    '\u5224\u65ad\u89c4\u5219\uff1a\u6cbf\u7740 A \u7684',
                    a.a.createElement('code', null, '_proto_'),
                    '\u5c5e\u6027\u8fd9\u6761\u7ebf\u6765\u627e\uff0c\u540c\u65f6\u6cbf\u7740 B \u7684 prototype \u5c5e\u6027\u8fd9\u6761\u7ebf\uff0c\u82e5\u679c\u4e24\u6761\u7ebf\u80fd\u627e\u5230\u540c\u4e00\u4e2a\u5f15\u7528\uff0c\u5373 \u540c\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de true',
                  ),
                  a.a.createElement(
                    'blockquote',
                    null,
                    a.a.createElement(
                      'p',
                      null,
                      'instanceof \u8868\u793a\u7684\u5c31\u662f\u539f\u578b\u94fe\u7684\u7ed3\u6784',
                    ),
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u7528\u4e8e\u68c0\u6d4b\u6784\u9020\u51fd\u6570\u7684 ',
                a.a.createElement('code', null, 'prototype'),
                ' \u5c5e\u6027\u662f\u5426\u51fa\u73b0\u5728\u67d0\u4e2a\u5b9e\u4f8b\u5bf9\u8c61\u7684',
                a.a.createElement('code', null, '\u539f\u578b\u94fe'),
                '\u4e0a',
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u65e0\u6cd5\u901a\u8fc7\u5bf9\u8c61\u6765\u83b7\u5f97\u7c7b\u540d(\u4f8b\u5982: ',
                  a.a.createElement('code', null, "typeof ''"),
                  ' \u5f97\u5230\u7684\u7c7b\u540d\u662f',
                  a.a.createElement('code', null, 'string'),
                  ')\uff0c\u53ea\u80fd\u68c0\u6d4b\u5bf9\u8c61\u662f\u5426\u5c5e\u4e8e\u6307\u5b9a\u7684\u7c7b\u540d(\u4f8b\u5982: ',
                  a.a.createElement('code', null, 'a instanceof String'),
                  ')',
                ),
              ),
            ),
            a.a.createElement(r['a'], {
              code: "var simpleStr = 'This is a simple string';\nvar myString = new String();\nvar newStr = new String('String created with constructor');\nvar myDate = new Date();\nvar myObj = {};\nvar myNonObj = Object.create(null);\n\nsimpleStr instanceof String; // \u8fd4\u56de false, simpleStr\u5e76\u4e0d\u662f\u5bf9\u8c61\nmyString instanceof String; // \u8fd4\u56de true\nnewStr instanceof String; // \u8fd4\u56de true\nmyString instanceof Object; // \u8fd4\u56de true\n\nmyObj instanceof Object; // \u8fd4\u56de true, \u5c3d\u7ba1\u539f\u578b\u6ca1\u6709\u5b9a\u4e49\n({} instanceof Object); // \u8fd4\u56de true, \u540c\u4e0a\nmyNonObj instanceof Object; // \u8fd4\u56de false, \u4e00\u79cd\u521b\u5efa\u975e Object \u5b9e\u4f8b\u7684\u5bf9\u8c61\u7684\u65b9\u6cd5\n\nmyString instanceof Date; // \u8fd4\u56de false\n\nmyDate instanceof Date; // \u8fd4\u56de true\nmyDate instanceof Object; // \u8fd4\u56de true\nmyDate instanceof String; // \u8fd4\u56de false",
              lang: 'js',
            }),
            a.a.createElement(
              'p',
              null,
              a.a.createElement(
                'code',
                null,
                '3.\u624b\u52a8\u5b9e\u73b0instanceof',
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u6838\u5fc3: \u539f\u578b\u94fe\u7684\u5411\u4e0a\u67e5\u627e',
              ),
            ),
            a.a.createElement(r['a'], {
              code: "function myInstanceof(left, right) {\n  // \u57fa\u672c\u6570\u636e\u7c7b\u578b\u76f4\u63a5\u8fd4\u56defalse\n  if (typeof left !== 'object' || left === null) return false;\n  // getProtypeOf\u662fObject\u5bf9\u8c61\u81ea\u5e26\u7684\u4e00\u4e2a\u65b9\u6cd5\uff0c\u80fd\u591f\u62ff\u5230\u53c2\u6570\u7684\u539f\u578b\u5bf9\u8c61\n  let proto = Object.getPrototypeOf(left);\n  while (true) {\n    // \u67e5\u627e\u5230\u5c3d\u5934\uff0c\u8fd8\u6ca1\u627e\u5230\n    if (proto == null) return false;\n    // \u627e\u5230\u76f8\u540c\u7684\u539f\u578b\u5bf9\u8c61\n    if (proto == right.prototype) return true;\n    proto = Object.getPrototypeOf(proto);\n  }\n}\n\n// \u6d4b\u8bd5\nconsole.log(myInstanceof('111', String)); // false\nconsole.log(myInstanceof(new String('111'), String)); // true",
              lang: 'js',
            }),
          ),
        )
      );
    },
    vxhN: function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        c = l('dEAq');
      l('JjdP');
      t['default'] = (e) => (
        a.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            c['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u5206\u4e3a\u57fa\u672c\u6570\u636e\u7c7b\u578b\u548c\u5f15\u7528\u6570\u636e\u7c7b\u578b',
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '1.\u57fa\u672c\u7c7b\u578b'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u5b58\u50a8\u5728\u6808\uff08stack\uff09\u4e2d\u7684\u7b80\u5355\u6570\u636e\u6bb5\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b83\u4eec\u7684\u503c\u76f4\u63a5\u5b58\u50a8\u5728\u53d8\u91cf\u8bbf\u95ee\u7684\u4f4d\u7f6e',
              ),
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', { align: 'left' }, '\u5206\u7c7b'),
                  a.a.createElement('th', { align: 'center' }, '\u540d\u79f0'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'String'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u5b57\u7b26\u4e32',
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Number'),
                  a.a.createElement('td', { align: 'center' }, '\u6570\u5b57'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Boolean'),
                  a.a.createElement('td', { align: 'center' }, '\u5e03\u5c14'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Null'),
                  a.a.createElement('td', { align: 'center' }, '\u7a7a'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Undefined'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u672a\u5b9a\u4e49',
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Symbol'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u72ec\u4e00\u65e0\u4e8c\u7684\u503c',
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'BigInt'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u5927\u6574\u6570',
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '2.\u5f15\u7528\u7c7b\u578b'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u5b58\u50a8\u5728\u5806\uff08heap\uff09\u4e2d\u7684\u5bf9\u8c61\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b58\u50a8\u5728\u53d8\u91cf\u5904\u7684\u503c\u662f\u4e00\u4e2a\u6307\u9488\uff08point\uff09\uff0c\u6307\u5411\u5b58\u50a8\u5bf9\u8c61\u7684',
                a.a.createElement('code', null, '\u5185\u5b58\u5730\u5740'),
              ),
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', { align: 'left' }, '\u5206\u7c7b'),
                  a.a.createElement('th', { align: 'center' }, '\u540d\u79f0'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Object'),
                  a.a.createElement('td', { align: 'center' }, '\u5bf9\u8c61'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Array'),
                  a.a.createElement('td', { align: 'center' }, '\u6570\u7ec4'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Function'),
                  a.a.createElement('td', { align: 'center' }, '\u51fd\u6570'),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '3.JS\u6570\u636e\u7c7b\u578b'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                a.a.createElement('code', null, 'String'),
                '\u3001 ',
                a.a.createElement('code', null, 'Number'),
                '\u3001 ',
                a.a.createElement('code', null, 'Boolean'),
                '\u3001 ',
                a.a.createElement('code', null, 'Null'),
                '\u3001 ',
                a.a.createElement('code', null, 'Undefined'),
                '\u3001 ',
                a.a.createElement('code', null, 'Object'),
                ' \u4ee5\u53ca ES6 \u65b0\u52a0\u7684 ',
                a.a.createElement('code', null, 'Symbol'),
                '\u548c',
                a.a.createElement('code', null, 'BigInt'),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement(
                'code',
                null,
                '4.null \u548c undefined \u533a\u522b',
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement('p', null, '1.\u5b9a\u4e49'),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  'null: object \u7c7b\u578b\uff0c\u8868\u793a\u4e00\u4e2a\u503c\u88ab\u5b9a\u4e49\u4e86\uff0c\u4f46\u662f\u8fd9\u4e2a\u503c\u662f"\u7a7a\u503c"\uff0c\u4ee3\u8868\u4e00\u4e2a',
                  a.a.createElement(
                    'code',
                    null,
                    '\u7a7a\u5bf9\u8c61\u6307\u9488',
                  ),
                ),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  'undefined: undefined \u7c7b\u578b\uff0c\u4ee3\u8868',
                  a.a.createElement('code', null, '\u672a\u5b9a\u4e49'),
                ),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement('p', null, '2.\u8f6c\u6362\u503c'),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'Number(null) => 0'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, '1 + null => 1'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'Number(undefined) => NaN'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, '1 + undefined => NaN'),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement('p', null, '3.\u5224\u65ad\u9898'),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'null == undefined => true'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'null === undefined => false'),
              ),
            ),
          ),
        )
      );
    },
    yQiI: function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        c = l('dEAq');
      l('JjdP');
      t['default'] = (e) => (
        a.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            c['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u5206\u4e3a\u57fa\u672c\u6570\u636e\u7c7b\u578b\u548c\u5f15\u7528\u6570\u636e\u7c7b\u578b',
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '1.\u57fa\u672c\u7c7b\u578b'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u5b58\u50a8\u5728\u6808\uff08stack\uff09\u4e2d\u7684\u7b80\u5355\u6570\u636e\u6bb5\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b83\u4eec\u7684\u503c\u76f4\u63a5\u5b58\u50a8\u5728\u53d8\u91cf\u8bbf\u95ee\u7684\u4f4d\u7f6e',
              ),
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', { align: 'left' }, '\u5206\u7c7b'),
                  a.a.createElement('th', { align: 'center' }, '\u540d\u79f0'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'String'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u5b57\u7b26\u4e32',
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Number'),
                  a.a.createElement('td', { align: 'center' }, '\u6570\u5b57'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Boolean'),
                  a.a.createElement('td', { align: 'center' }, '\u5e03\u5c14'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Null'),
                  a.a.createElement('td', { align: 'center' }, '\u7a7a'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Undefined'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u672a\u5b9a\u4e49',
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Symbol'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u72ec\u4e00\u65e0\u4e8c\u7684\u503c',
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'BigInt'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u5927\u6574\u6570',
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '2.\u5f15\u7528\u7c7b\u578b'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u5b58\u50a8\u5728\u5806\uff08heap\uff09\u4e2d\u7684\u5bf9\u8c61\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b58\u50a8\u5728\u53d8\u91cf\u5904\u7684\u503c\u662f\u4e00\u4e2a\u6307\u9488\uff08point\uff09\uff0c\u6307\u5411\u5b58\u50a8\u5bf9\u8c61\u7684',
                a.a.createElement('code', null, '\u5185\u5b58\u5730\u5740'),
              ),
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', { align: 'left' }, '\u5206\u7c7b'),
                  a.a.createElement('th', { align: 'center' }, '\u540d\u79f0'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Object'),
                  a.a.createElement('td', { align: 'center' }, '\u5bf9\u8c61'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Array'),
                  a.a.createElement('td', { align: 'center' }, '\u6570\u7ec4'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Function'),
                  a.a.createElement('td', { align: 'center' }, '\u51fd\u6570'),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '3.JS\u6570\u636e\u7c7b\u578b'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                a.a.createElement('code', null, 'String'),
                '\u3001 ',
                a.a.createElement('code', null, 'Number'),
                '\u3001 ',
                a.a.createElement('code', null, 'Boolean'),
                '\u3001 ',
                a.a.createElement('code', null, 'Null'),
                '\u3001 ',
                a.a.createElement('code', null, 'Undefined'),
                '\u3001 ',
                a.a.createElement('code', null, 'Object'),
                ' \u4ee5\u53ca ES6 \u65b0\u52a0\u7684 ',
                a.a.createElement('code', null, 'Symbol'),
                '\u548c',
                a.a.createElement('code', null, 'BigInt'),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement(
                'code',
                null,
                '4.null \u548c undefined \u533a\u522b',
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement('p', null, '1.\u5b9a\u4e49'),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  'null: object \u7c7b\u578b\uff0c\u8868\u793a\u4e00\u4e2a\u503c\u88ab\u5b9a\u4e49\u4e86\uff0c\u4f46\u662f\u8fd9\u4e2a\u503c\u662f"\u7a7a\u503c"\uff0c\u4ee3\u8868\u4e00\u4e2a',
                  a.a.createElement(
                    'code',
                    null,
                    '\u7a7a\u5bf9\u8c61\u6307\u9488',
                  ),
                ),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  'undefined: undefined \u7c7b\u578b\uff0c\u4ee3\u8868',
                  a.a.createElement('code', null, '\u672a\u5b9a\u4e49'),
                ),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement('p', null, '2.\u8f6c\u6362\u503c'),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'Number(null) => 0'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, '1 + null => 1'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'Number(undefined) => NaN'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, '1 + undefined => NaN'),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement('p', null, '3.\u5224\u65ad\u9898'),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'null == undefined => true'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'null === undefined => false'),
              ),
            ),
          ),
        )
      );
    },
    zCmW: function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        c = l('dEAq');
      l('JjdP');
      t['default'] = (e) => (
        a.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            c['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u5206\u4e3a\u57fa\u672c\u6570\u636e\u7c7b\u578b\u548c\u5f15\u7528\u6570\u636e\u7c7b\u578b',
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '1.\u57fa\u672c\u7c7b\u578b'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u5b58\u50a8\u5728\u6808\uff08stack\uff09\u4e2d\u7684\u7b80\u5355\u6570\u636e\u6bb5\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b83\u4eec\u7684\u503c\u76f4\u63a5\u5b58\u50a8\u5728\u53d8\u91cf\u8bbf\u95ee\u7684\u4f4d\u7f6e',
              ),
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', { align: 'left' }, '\u5206\u7c7b'),
                  a.a.createElement('th', { align: 'center' }, '\u540d\u79f0'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'String'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u5b57\u7b26\u4e32',
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Number'),
                  a.a.createElement('td', { align: 'center' }, '\u6570\u5b57'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Boolean'),
                  a.a.createElement('td', { align: 'center' }, '\u5e03\u5c14'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Null'),
                  a.a.createElement('td', { align: 'center' }, '\u7a7a'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Undefined'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u672a\u5b9a\u4e49',
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Symbol'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u72ec\u4e00\u65e0\u4e8c\u7684\u503c',
                  ),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'BigInt'),
                  a.a.createElement(
                    'td',
                    { align: 'center' },
                    '\u5927\u6574\u6570',
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '2.\u5f15\u7528\u7c7b\u578b'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u5b58\u50a8\u5728\u5806\uff08heap\uff09\u4e2d\u7684\u5bf9\u8c61\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b58\u50a8\u5728\u53d8\u91cf\u5904\u7684\u503c\u662f\u4e00\u4e2a\u6307\u9488\uff08point\uff09\uff0c\u6307\u5411\u5b58\u50a8\u5bf9\u8c61\u7684',
                a.a.createElement('code', null, '\u5185\u5b58\u5730\u5740'),
              ),
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', { align: 'left' }, '\u5206\u7c7b'),
                  a.a.createElement('th', { align: 'center' }, '\u540d\u79f0'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Object'),
                  a.a.createElement('td', { align: 'center' }, '\u5bf9\u8c61'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Array'),
                  a.a.createElement('td', { align: 'center' }, '\u6570\u7ec4'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'Function'),
                  a.a.createElement('td', { align: 'center' }, '\u51fd\u6570'),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '3.JS\u6570\u636e\u7c7b\u578b'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                a.a.createElement('code', null, 'String'),
                '\u3001 ',
                a.a.createElement('code', null, 'Number'),
                '\u3001 ',
                a.a.createElement('code', null, 'Boolean'),
                '\u3001 ',
                a.a.createElement('code', null, 'Null'),
                '\u3001 ',
                a.a.createElement('code', null, 'Undefined'),
                '\u3001 ',
                a.a.createElement('code', null, 'Object'),
                ' \u4ee5\u53ca ES6 \u65b0\u52a0\u7684 ',
                a.a.createElement('code', null, 'Symbol'),
                '\u548c',
                a.a.createElement('code', null, 'BigInt'),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement(
                'code',
                null,
                '4.null \u548c undefined \u533a\u522b',
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement('p', null, '1.\u5b9a\u4e49'),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  'null: object \u7c7b\u578b\uff0c\u8868\u793a\u4e00\u4e2a\u503c\u88ab\u5b9a\u4e49\u4e86\uff0c\u4f46\u662f\u8fd9\u4e2a\u503c\u662f"\u7a7a\u503c"\uff0c\u4ee3\u8868\u4e00\u4e2a',
                  a.a.createElement(
                    'code',
                    null,
                    '\u7a7a\u5bf9\u8c61\u6307\u9488',
                  ),
                ),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  'undefined: undefined \u7c7b\u578b\uff0c\u4ee3\u8868',
                  a.a.createElement('code', null, '\u672a\u5b9a\u4e49'),
                ),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement('p', null, '2.\u8f6c\u6362\u503c'),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'Number(null) => 0'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, '1 + null => 1'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'Number(undefined) => NaN'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, '1 + undefined => NaN'),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement('p', null, '3.\u5224\u65ad\u9898'),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'null == undefined => true'),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement('p', null, 'null === undefined => false'),
              ),
            ),
          ),
        )
      );
    },
    zFGx: function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        c = l('dEAq'),
        r = l('H1Ra');
      l('JjdP');
      t['default'] = (e) => (
        a.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            c['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '1.typeof'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                'typeof \u64cd\u4f5c\u7b26\u53ef\u4ee5\u7528\u6765\u5224\u65ad\u53d8\u91cf\u7684\u6570\u636e\u7c7b\u578b',
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u5bf9\u4e8e\u503c\u7c7b\u578b\u6709\u56db\u79cd\u7ed3\u679c\uff08undefined\u3001string\u3001number\u3001boolean\uff09',
                ),
                a.a.createElement(
                  'blockquote',
                  null,
                  a.a.createElement(
                    'p',
                    null,
                    '\u5bf9\u4e8e\u5f15\u7528\u7c7b\u578b\u6709\u4e24\u79cd\u7ed3\u679c\uff08function\u3001object\uff09',
                  ),
                  a.a.createElement(
                    'blockquote',
                    null,
                    a.a.createElement(
                      'p',
                      null,
                      "\u6ce8\u610f: typeof null === 'object'",
                    ),
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'table',
              null,
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', { align: 'left' }, '\u6267\u884c'),
                  a.a.createElement('th', { align: 'center' }, '\u8f93\u51fa'),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof ""'),
                  a.a.createElement('td', { align: 'center' }, 'string'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof 1'),
                  a.a.createElement('td', { align: 'center' }, 'number'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof true'),
                  a.a.createElement('td', { align: 'center' }, 'boolean'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof null'),
                  a.a.createElement('td', { align: 'center' }, 'object'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement(
                    'td',
                    { align: 'left' },
                    'typeof undefined',
                  ),
                  a.a.createElement('td', { align: 'center' }, 'undefined'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('td', { align: 'left' }, 'typeof []'),
                  a.a.createElement('td', { align: 'center' }, 'object'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement(
                    'td',
                    { align: 'left' },
                    'typeof function()',
                    '{',
                    '}',
                  ),
                  a.a.createElement('td', { align: 'center' }, 'function'),
                ),
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement(
                    'td',
                    { align: 'left' },
                    'typeof ',
                    '{',
                    '}',
                  ),
                  a.a.createElement('td', { align: 'center' }, 'object'),
                ),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement('code', null, '2.instanceof'),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                'instanceof \u64cd\u4f5c\u7b26\u7528\u6765',
                a.a.createElement(
                  'code',
                  null,
                  '\u5224\u65ad\u5f15\u7528\u7c7b\u578b',
                ),
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u8bed\u6cd5\uff1aA instanceof B',
                ),
                a.a.createElement(
                  'blockquote',
                  null,
                  a.a.createElement(
                    'p',
                    null,
                    '\u5224\u65ad\u89c4\u5219\uff1a\u6cbf\u7740 A \u7684',
                    a.a.createElement('code', null, '_proto_'),
                    '\u5c5e\u6027\u8fd9\u6761\u7ebf\u6765\u627e\uff0c\u540c\u65f6\u6cbf\u7740 B \u7684 prototype \u5c5e\u6027\u8fd9\u6761\u7ebf\uff0c\u82e5\u679c\u4e24\u6761\u7ebf\u80fd\u627e\u5230\u540c\u4e00\u4e2a\u5f15\u7528\uff0c\u5373 \u540c\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de true',
                  ),
                  a.a.createElement(
                    'blockquote',
                    null,
                    a.a.createElement(
                      'p',
                      null,
                      'instanceof \u8868\u793a\u7684\u5c31\u662f\u539f\u578b\u94fe\u7684\u7ed3\u6784',
                    ),
                  ),
                ),
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u7528\u4e8e\u68c0\u6d4b\u6784\u9020\u51fd\u6570\u7684 ',
                a.a.createElement('code', null, 'prototype'),
                ' \u5c5e\u6027\u662f\u5426\u51fa\u73b0\u5728\u67d0\u4e2a\u5b9e\u4f8b\u5bf9\u8c61\u7684',
                a.a.createElement('code', null, '\u539f\u578b\u94fe'),
                '\u4e0a',
              ),
              a.a.createElement(
                'blockquote',
                null,
                a.a.createElement(
                  'p',
                  null,
                  '\u65e0\u6cd5\u901a\u8fc7\u5bf9\u8c61\u6765\u83b7\u5f97\u7c7b\u540d(\u4f8b\u5982: ',
                  a.a.createElement('code', null, "typeof ''"),
                  ' \u5f97\u5230\u7684\u7c7b\u540d\u662f',
                  a.a.createElement('code', null, 'string'),
                  ')\uff0c\u53ea\u80fd\u68c0\u6d4b\u5bf9\u8c61\u662f\u5426\u5c5e\u4e8e\u6307\u5b9a\u7684\u7c7b\u540d(\u4f8b\u5982: ',
                  a.a.createElement('code', null, 'a instanceof String'),
                  ')',
                ),
              ),
            ),
            a.a.createElement(r['a'], {
              code: "var simpleStr = 'This is a simple string';\nvar myString = new String();\nvar newStr = new String('String created with constructor');\nvar myDate = new Date();\nvar myObj = {};\nvar myNonObj = Object.create(null);\n\nsimpleStr instanceof String; // \u8fd4\u56de false, simpleStr\u5e76\u4e0d\u662f\u5bf9\u8c61\nmyString instanceof String; // \u8fd4\u56de true\nnewStr instanceof String; // \u8fd4\u56de true\nmyString instanceof Object; // \u8fd4\u56de true\n\nmyObj instanceof Object; // \u8fd4\u56de true, \u5c3d\u7ba1\u539f\u578b\u6ca1\u6709\u5b9a\u4e49\n({} instanceof Object); // \u8fd4\u56de true, \u540c\u4e0a\nmyNonObj instanceof Object; // \u8fd4\u56de false, \u4e00\u79cd\u521b\u5efa\u975e Object \u5b9e\u4f8b\u7684\u5bf9\u8c61\u7684\u65b9\u6cd5\n\nmyString instanceof Date; // \u8fd4\u56de false\n\nmyDate instanceof Date; // \u8fd4\u56de true\nmyDate instanceof Object; // \u8fd4\u56de true\nmyDate instanceof String; // \u8fd4\u56de false",
              lang: 'js',
            }),
            a.a.createElement(
              'p',
              null,
              a.a.createElement(
                'code',
                null,
                '3.\u624b\u52a8\u5b9e\u73b0instanceof',
              ),
            ),
            a.a.createElement(
              'blockquote',
              null,
              a.a.createElement(
                'p',
                null,
                '\u6838\u5fc3: \u539f\u578b\u94fe\u7684\u5411\u4e0a\u67e5\u627e',
              ),
            ),
            a.a.createElement(r['a'], {
              code: "function myInstanceof(left, right) {\n  // \u57fa\u672c\u6570\u636e\u7c7b\u578b\u76f4\u63a5\u8fd4\u56defalse\n  if (typeof left !== 'object' || left === null) return false;\n  // getProtypeOf\u662fObject\u5bf9\u8c61\u81ea\u5e26\u7684\u4e00\u4e2a\u65b9\u6cd5\uff0c\u80fd\u591f\u62ff\u5230\u53c2\u6570\u7684\u539f\u578b\u5bf9\u8c61\n  let proto = Object.getPrototypeOf(left);\n  while (true) {\n    // \u67e5\u627e\u5230\u5c3d\u5934\uff0c\u8fd8\u6ca1\u627e\u5230\n    if (proto == null) return false;\n    // \u627e\u5230\u76f8\u540c\u7684\u539f\u578b\u5bf9\u8c61\n    if (proto == right.prototype) return true;\n    proto = Object.getPrototypeOf(proto);\n  }\n}\n\n// \u6d4b\u8bd5\nconsole.log(myInstanceof('111', String)); // false\nconsole.log(myInstanceof(new String('111'), String)); // true",
              lang: 'js',
            }),
          ),
        )
      );
    },
  },
]);
