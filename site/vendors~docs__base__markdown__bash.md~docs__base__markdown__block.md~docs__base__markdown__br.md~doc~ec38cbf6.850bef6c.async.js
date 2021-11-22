(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [1],
  {
    H1Ra: function (e, t, n) {
      'use strict';
      var a = n('q1tI'),
        r = n.n(a),
        i = (function () {
          var e = 0,
            t = {
              util: {
                encode: function (e) {
                  return e instanceof n
                    ? new n(e.type, t.util.encode(e.content), e.alias)
                    : 'Array' === t.util.type(e)
                    ? e.map(t.util.encode)
                    : e
                        .replace(/&/g, '&amp;')
                        .replace(/</g, '&lt;')
                        .replace(/\u00a0/g, ' ');
                },
                type: function (e) {
                  return Object.prototype.toString
                    .call(e)
                    .match(/\[object (\w+)\]/)[1];
                },
                objId: function (t) {
                  return (
                    t['__id'] ||
                      Object.defineProperty(t, '__id', { value: ++e }),
                    t['__id']
                  );
                },
                clone: function (e, n) {
                  var a = t.util.type(e);
                  switch (((n = n || {}), a)) {
                    case 'Object':
                      if (n[t.util.objId(e)]) return n[t.util.objId(e)];
                      i = {};
                      for (var r in ((n[t.util.objId(e)] = i), e))
                        e.hasOwnProperty(r) && (i[r] = t.util.clone(e[r], n));
                      return i;
                    case 'Array':
                      if (n[t.util.objId(e)]) return n[t.util.objId(e)];
                      var i = [];
                      return (
                        (n[t.util.objId(e)] = i),
                        e.forEach(function (e, a) {
                          i[a] = t.util.clone(e, n);
                        }),
                        i
                      );
                  }
                  return e;
                },
              },
              languages: {
                extend: function (e, n) {
                  var a = t.util.clone(t.languages[e]);
                  for (var r in n) a[r] = n[r];
                  return a;
                },
                insertBefore: function (e, n, a, r) {
                  r = r || t.languages;
                  var i = r[e];
                  if (2 == arguments.length) {
                    for (var s in ((a = arguments[1]), a))
                      a.hasOwnProperty(s) && (i[s] = a[s]);
                    return i;
                  }
                  var o = {};
                  for (var l in i)
                    if (i.hasOwnProperty(l)) {
                      if (l == n)
                        for (var s in a) a.hasOwnProperty(s) && (o[s] = a[s]);
                      o[l] = i[l];
                    }
                  return (
                    t.languages.DFS(t.languages, function (t, n) {
                      n === r[e] && t != e && (this[t] = o);
                    }),
                    (r[e] = o)
                  );
                },
                DFS: function (e, n, a, r) {
                  for (var i in ((r = r || {}), e))
                    e.hasOwnProperty(i) &&
                      (n.call(e, i, e[i], a || i),
                      'Object' !== t.util.type(e[i]) || r[t.util.objId(e[i])]
                        ? 'Array' !== t.util.type(e[i]) ||
                          r[t.util.objId(e[i])] ||
                          ((r[t.util.objId(e[i])] = !0),
                          t.languages.DFS(e[i], n, i, r))
                        : ((r[t.util.objId(e[i])] = !0),
                          t.languages.DFS(e[i], n, null, r)));
                },
              },
              plugins: {},
              highlight: function (e, a, r) {
                var i = { code: e, grammar: a, language: r };
                return (
                  t.hooks.run('before-tokenize', i),
                  (i.tokens = t.tokenize(i.code, i.grammar)),
                  t.hooks.run('after-tokenize', i),
                  n.stringify(t.util.encode(i.tokens), i.language)
                );
              },
              matchGrammar: function (e, n, a, r, i, s, o) {
                var l = t.Token;
                for (var u in a)
                  if (a.hasOwnProperty(u) && a[u]) {
                    if (u == o) return;
                    var c = a[u];
                    c = 'Array' === t.util.type(c) ? c : [c];
                    for (var d = 0; d < c.length; ++d) {
                      var p = c[d],
                        g = p.inside,
                        f = !!p.lookbehind,
                        b = !!p.greedy,
                        m = 0,
                        h = p.alias;
                      if (b && !p.pattern.global) {
                        var y = p.pattern.toString().match(/[imuy]*$/)[0];
                        p.pattern = RegExp(p.pattern.source, y + 'g');
                      }
                      p = p.pattern || p;
                      for (
                        var E = r, S = i;
                        E < n.length;
                        S += n[E].length, ++E
                      ) {
                        var k = n[E];
                        if (n.length > e.length) return;
                        if (!(k instanceof l)) {
                          if (b && E != n.length - 1) {
                            p.lastIndex = S;
                            var w = p.exec(e);
                            if (!w) break;
                            for (
                              var A = w.index + (f ? w[1].length : 0),
                                v = w.index + w[0].length,
                                T = E,
                                I = S,
                                _ = n.length;
                              T < _ &&
                              (I < v || (!n[T].type && !n[T - 1].greedy));
                              ++T
                            )
                              (I += n[T].length), A >= I && (++E, (S = I));
                            if (n[E] instanceof l) continue;
                            (R = T - E), (k = e.slice(S, I)), (w.index -= S);
                          } else {
                            p.lastIndex = 0;
                            w = p.exec(k);
                            var R = 1;
                          }
                          if (w) {
                            f && (m = w[1] ? w[1].length : 0);
                            (A = w.index + m),
                              (w = w[0].slice(m)),
                              (v = A + w.length);
                            var O = k.slice(0, A),
                              N = k.slice(v),
                              L = [E, R];
                            O && (++E, (S += O.length), L.push(O));
                            var x = new l(u, g ? t.tokenize(w, g) : w, h, w, b);
                            if (
                              (L.push(x),
                              N && L.push(N),
                              Array.prototype.splice.apply(n, L),
                              1 != R && t.matchGrammar(e, n, a, E, S, !0, u),
                              s)
                            )
                              break;
                          } else if (s) break;
                        }
                      }
                    }
                  }
              },
              hooks: { add: function () {}, run: function (e, t) {} },
              tokenize: function (e, n, a) {
                var r = [e],
                  i = n.rest;
                if (i) {
                  for (var s in i) n[s] = i[s];
                  delete n.rest;
                }
                return t.matchGrammar(e, r, n, 0, 0, !1), r;
              },
            },
            n = (t.Token = function (e, t, n, a, r) {
              (this.type = e),
                (this.content = t),
                (this.alias = n),
                (this.length = 0 | (a || '').length),
                (this.greedy = !!r);
            });
          return (
            (n.stringify = function (e, a, r) {
              if ('string' == typeof e) return e;
              if ('Array' === t.util.type(e))
                return e
                  .map(function (t) {
                    return n.stringify(t, a, e);
                  })
                  .join('');
              var i = {
                type: e.type,
                content: n.stringify(e.content, a, r),
                tag: 'span',
                classes: ['token', e.type],
                attributes: {},
                language: a,
                parent: r,
              };
              if (e.alias) {
                var s = 'Array' === t.util.type(e.alias) ? e.alias : [e.alias];
                Array.prototype.push.apply(i.classes, s);
              }
              var o = Object.keys(i.attributes)
                .map(function (e) {
                  return (
                    e +
                    '="' +
                    (i.attributes[e] || '').replace(/"/g, '&quot;') +
                    '"'
                  );
                })
                .join(' ');
              return (
                '<' +
                i.tag +
                ' class="' +
                i.classes.join(' ') +
                '"' +
                (o ? ' ' + o : '') +
                '>' +
                i.content +
                '</' +
                i.tag +
                '>'
              );
            }),
            t
          );
        })();
      (i.languages.markup = {
        comment: /<!--[\s\S]*?-->/,
        prolog: /<\?[\s\S]+?\?>/,
        doctype: {
          pattern:
            /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
          greedy: !0,
          inside: {
            'internal-subset': {
              pattern: /(\[)[\s\S]+(?=\]>$)/,
              lookbehind: !0,
              greedy: !0,
              inside: null,
            },
            string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
            punctuation: /^<!|>$|[[\]]/,
            'doctype-tag': /^DOCTYPE/,
            name: /[^\s<>'"]+/,
          },
        },
        cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
        tag: {
          pattern:
            /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
          greedy: !0,
          inside: {
            tag: {
              pattern: /^<\/?[^\s>\/]+/,
              inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
            },
            'attr-value': {
              pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
              inside: {
                punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/],
              },
            },
            punctuation: /\/?>/,
            'attr-name': {
              pattern: /[^\s>\/]+/,
              inside: { namespace: /^[^\s>\/:]+:/ },
            },
          },
        },
        entity: [
          { pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' },
          /&#x?[\da-f]{1,8};/i,
        ],
      }),
        (i.languages.markup['tag'].inside['attr-value'].inside['entity'] =
          i.languages.markup['entity']),
        (i.languages.markup['doctype'].inside['internal-subset'].inside =
          i.languages.markup),
        i.hooks.add('wrap', function (e) {
          'entity' === e.type &&
            (e.attributes['title'] = e.content.replace(/&amp;/, '&'));
        }),
        Object.defineProperty(i.languages.markup.tag, 'addInlined', {
          value: function (e, t) {
            var n = {};
            (n['language-' + t] = {
              pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
              lookbehind: !0,
              inside: i.languages[t],
            }),
              (n['cdata'] = /^<!\[CDATA\[|\]\]>$/i);
            var a = {
              'included-cdata': {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: n,
              },
            };
            a['language-' + t] = { pattern: /[\s\S]+/, inside: i.languages[t] };
            var r = {};
            (r[e] = {
              pattern: RegExp(
                /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                  /__/g,
                  function () {
                    return e;
                  },
                ),
                'i',
              ),
              lookbehind: !0,
              greedy: !0,
              inside: a,
            }),
              i.languages.insertBefore('markup', 'cdata', r);
          },
        }),
        (i.languages.html = i.languages.markup),
        (i.languages.mathml = i.languages.markup),
        (i.languages.svg = i.languages.markup),
        (i.languages.xml = i.languages.extend('markup', {})),
        (i.languages.ssml = i.languages.xml),
        (i.languages.atom = i.languages.xml),
        (i.languages.rss = i.languages.xml),
        (function (e) {
          var t =
              '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b',
            n = {
              pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
              lookbehind: !0,
              alias: 'punctuation',
              inside: null,
            },
            a = {
              bash: n,
              environment: { pattern: RegExp('\\$' + t), alias: 'constant' },
              variable: [
                {
                  pattern: /\$?\(\([\s\S]+?\)\)/,
                  greedy: !0,
                  inside: {
                    variable: [
                      { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
                      /^\$\(\(/,
                    ],
                    number:
                      /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                    operator:
                      /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
                    punctuation: /\(\(?|\)\)?|,|;/,
                  },
                },
                {
                  pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                  greedy: !0,
                  inside: { variable: /^\$\(|^`|\)$|`$/ },
                },
                {
                  pattern: /\$\{[^}]+\}/,
                  greedy: !0,
                  inside: {
                    operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                    punctuation: /[\[\]]/,
                    environment: {
                      pattern: RegExp('(\\{)' + t),
                      lookbehind: !0,
                      alias: 'constant',
                    },
                  },
                },
                /\$(?:\w+|[#?*!@$])/,
              ],
              entity:
                /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/,
            };
          (e.languages.bash = {
            shebang: { pattern: /^#!\s*\/.*/, alias: 'important' },
            comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
            'function-name': [
              {
                pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                lookbehind: !0,
                alias: 'function',
              },
              { pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/, alias: 'function' },
            ],
            'for-or-select': {
              pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
              alias: 'variable',
              lookbehind: !0,
            },
            'assign-left': {
              pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
              inside: {
                environment: {
                  pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + t),
                  lookbehind: !0,
                  alias: 'constant',
                },
              },
              alias: 'variable',
              lookbehind: !0,
            },
            string: [
              {
                pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s[\s\S]*?(?:\r?\n|\r)\2/,
                lookbehind: !0,
                greedy: !0,
                inside: a,
              },
              {
                pattern:
                  /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
                lookbehind: !0,
                greedy: !0,
                inside: { bash: n },
              },
              {
                pattern:
                  /(^|[^\\](?:\\\\)*)(["'])(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|(?!\2)[^\\`$])*\2/,
                lookbehind: !0,
                greedy: !0,
                inside: a,
              },
            ],
            environment: { pattern: RegExp('\\$?' + t), alias: 'constant' },
            variable: a.variable,
            function: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            keyword: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            builtin: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
              lookbehind: !0,
              alias: 'class-name',
            },
            boolean: {
              pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            'file-descriptor': { pattern: /\B&\d\b/, alias: 'important' },
            operator: {
              pattern:
                /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
              inside: {
                'file-descriptor': { pattern: /^\d/, alias: 'important' },
              },
            },
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
            number: {
              pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
              lookbehind: !0,
            },
          }),
            (n.inside = e.languages.bash);
          for (
            var r = [
                'comment',
                'function-name',
                'for-or-select',
                'assign-left',
                'string',
                'environment',
                'function',
                'keyword',
                'builtin',
                'boolean',
                'file-descriptor',
                'operator',
                'punctuation',
                'number',
              ],
              i = a.variable[1].inside,
              s = 0;
            s < r.length;
            s++
          )
            i[r[s]] = e.languages.bash[r[s]];
          e.languages.shell = e.languages.bash;
        })(i),
        (i.languages.clike = {
          comment: [
            {
              pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
              lookbehind: !0,
              greedy: !0,
            },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
          ],
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          'class-name': {
            pattern:
              /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ },
          },
          keyword:
            /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
          boolean: /\b(?:true|false)\b/,
          function: /\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (i.languages.c = i.languages.extend('clike', {
          comment: {
            pattern:
              /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
            greedy: !0,
          },
          'class-name': {
            pattern:
              /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
            lookbehind: !0,
          },
          keyword:
            /\b(?:__attribute__|_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
          function: /[a-z_]\w*(?=\s*\()/i,
          number:
            /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
          operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
        })),
        i.languages.insertBefore('c', 'string', {
          macro: {
            pattern:
              /(^\s*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
            lookbehind: !0,
            greedy: !0,
            alias: 'property',
            inside: {
              string: [
                { pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 },
                i.languages.c['string'],
              ],
              comment: i.languages.c['comment'],
              'macro-name': [
                { pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 },
                {
                  pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
                  lookbehind: !0,
                  alias: 'function',
                },
              ],
              directive: {
                pattern: /^(#\s*)[a-z]+/,
                lookbehind: !0,
                alias: 'keyword',
              },
              'directive-hash': /^#/,
              punctuation: /##|\\(?=[\r\n])/,
              expression: { pattern: /\S[\s\S]*/, inside: i.languages.c },
            },
          },
          constant:
            /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/,
        }),
        delete i.languages.c['boolean'],
        (function (e) {
          var t =
            /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char8_t|char16_t|char32_t|class|compl|concept|const|consteval|constexpr|constinit|const_cast|continue|co_await|co_return|co_yield|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/;
          (e.languages.cpp = e.languages.extend('c', {
            'class-name': [
              {
                pattern: RegExp(
                  /(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(
                    /<keyword>/g,
                    function () {
                      return t.source;
                    },
                  ),
                ),
                lookbehind: !0,
              },
              /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
              /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
              /\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/,
            ],
            keyword: t,
            number: {
              pattern:
                /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
              greedy: !0,
            },
            operator:
              />>=?|<<=?|->|([-+&|:])\1|[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
            boolean: /\b(?:true|false)\b/,
          })),
            e.languages.insertBefore('cpp', 'string', {
              'raw-string': {
                pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
                alias: 'string',
                greedy: !0,
              },
            }),
            e.languages.insertBefore('cpp', 'class-name', {
              'base-clause': {
                pattern:
                  /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
                lookbehind: !0,
                greedy: !0,
                inside: e.languages.extend('cpp', {}),
              },
            }),
            e.languages.insertBefore(
              'inside',
              'operator',
              { 'class-name': /\b[a-z_]\w*\b(?!\s*::)/i },
              e.languages.cpp['base-clause'],
            );
        })(i),
        (function (e) {
          var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
          (e.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
              inside: {
                rule: /^@[\w-]+/,
                'selector-function-argument': {
                  pattern:
                    /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                  lookbehind: !0,
                  alias: 'selector',
                },
                keyword: {
                  pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                  lookbehind: !0,
                },
              },
            },
            url: {
              pattern: RegExp(
                '\\burl\\((?:' +
                  t.source +
                  '|' +
                  /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
                  ')\\)',
                'i',
              ),
              greedy: !0,
              inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: { pattern: RegExp('^' + t.source + '$'), alias: 'url' },
              },
            },
            selector: RegExp(
              '[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' +
                t.source +
                ')*(?=\\s*\\{)',
            ),
            string: { pattern: t, greedy: !0 },
            property:
              /(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            important: /!important\b/i,
            function: /[-a-z0-9]+(?=\()/i,
            punctuation: /[(){};:,]/,
          }),
            (e.languages.css['atrule'].inside.rest = e.languages.css);
          var n = e.languages.markup;
          n &&
            (n.tag.addInlined('style', 'css'),
            e.languages.insertBefore(
              'inside',
              'attr-value',
              {
                'style-attr': {
                  pattern: /(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,
                  lookbehind: !0,
                  inside: {
                    'attr-value': {
                      pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                      inside: {
                        style: {
                          pattern: /(["'])[\s\S]+(?=["']$)/,
                          lookbehind: !0,
                          alias: 'language-css',
                          inside: e.languages.css,
                        },
                        punctuation: [
                          { pattern: /^=/, alias: 'attr-equals' },
                          /"|'/,
                        ],
                      },
                    },
                    'attr-name': /^style/i,
                  },
                },
              },
              n.tag,
            ));
        })(i),
        (function (e) {
          var t,
            n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
          (e.languages.css.selector = {
            pattern: e.languages.css.selector,
            inside: (t = {
              'pseudo-element':
                /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
              'pseudo-class': /:[-\w]+/,
              class: /\.[-\w]+/,
              id: /#[-\w]+/,
              attribute: {
                pattern: RegExp('\\[(?:[^[\\]"\']|' + n.source + ')*\\]'),
                greedy: !0,
                inside: {
                  punctuation: /^\[|\]$/,
                  'case-sensitivity': {
                    pattern: /(\s)[si]$/i,
                    lookbehind: !0,
                    alias: 'keyword',
                  },
                  namespace: {
                    pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
                    lookbehind: !0,
                    inside: { punctuation: /\|$/ },
                  },
                  'attr-name': {
                    pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
                    lookbehind: !0,
                  },
                  'attr-value': [
                    n,
                    {
                      pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
                      lookbehind: !0,
                    },
                  ],
                  operator: /[|~*^$]?=/,
                },
              },
              'n-th': [
                {
                  pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                  lookbehind: !0,
                  inside: { number: /[\dn]+/, operator: /[+-]/ },
                },
                { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 },
              ],
              combinator: />|\+|~|\|\|/,
              punctuation: /[(),]/,
            }),
          }),
            (e.languages.css['atrule'].inside[
              'selector-function-argument'
            ].inside = t),
            e.languages.insertBefore('css', 'property', {
              variable: {
                pattern:
                  /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
                lookbehind: !0,
              },
            });
          var a = { pattern: /(\b\d+)(?:%|[a-z]+\b)/, lookbehind: !0 },
            r = {
              pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
              lookbehind: !0,
            };
          e.languages.insertBefore('css', 'function', {
            operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 },
            hexcode: { pattern: /\B#(?:[\da-f]{1,2}){3,4}\b/i, alias: 'color' },
            color: [
              /\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
              {
                pattern:
                  /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                inside: {
                  unit: a,
                  number: r,
                  function: /[\w-]+(?=\()/,
                  punctuation: /[(),]/,
                },
              },
            ],
            entity: /\\[\da-f]{1,8}/i,
            unit: a,
            number: r,
          });
        })(i),
        (i.languages.javascript = i.languages.extend('clike', {
          'class-name': [
            i.languages.clike['class-name'],
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
              lookbehind: !0,
            },
          ],
          keyword: [
            { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
            {
              pattern:
                /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0,
            },
          ],
          function:
            /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          number:
            /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
          operator:
            /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
        })),
        (i.languages.javascript['class-name'][0].pattern =
          /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
        i.languages.insertBefore('javascript', 'keyword', {
          regex: {
            pattern:
              /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
            lookbehind: !0,
            greedy: !0,
            inside: {
              'regex-source': {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: !0,
                alias: 'language-regex',
                inside: i.languages.regex,
              },
              'regex-flags': /[a-z]+$/,
              'regex-delimiter': /^\/|\/$/,
            },
          },
          'function-variable': {
            pattern:
              /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: 'function',
          },
          parameter: [
            {
              pattern:
                /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
              lookbehind: !0,
              inside: i.languages.javascript,
            },
            {
              pattern:
                /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
              inside: i.languages.javascript,
            },
            {
              pattern:
                /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
              lookbehind: !0,
              inside: i.languages.javascript,
            },
            {
              pattern:
                /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
              lookbehind: !0,
              inside: i.languages.javascript,
            },
          ],
          constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
        }),
        i.languages.insertBefore('javascript', 'string', {
          'template-string': {
            pattern:
              /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
            greedy: !0,
            inside: {
              'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
              interpolation: {
                pattern:
                  /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                lookbehind: !0,
                inside: {
                  'interpolation-punctuation': {
                    pattern: /^\${|}$/,
                    alias: 'punctuation',
                  },
                  rest: i.languages.javascript,
                },
              },
              string: /[\s\S]+/,
            },
          },
        }),
        i.languages.markup &&
          i.languages.markup.tag.addInlined('script', 'javascript'),
        (i.languages.js = i.languages.javascript),
        (function (e) {
          var t = e.util.clone(e.languages.javascript);
          (e.languages.jsx = e.languages.extend('markup', t)),
            (e.languages.jsx.tag.pattern =
              /<\/?(?:[\w.:-]+(?:\s+(?:[\w.:$-]+(?:=(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s{'">=]+|\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i),
            (e.languages.jsx.tag.inside['tag'].pattern = /^<\/?[^\s>\/]*/i),
            (e.languages.jsx.tag.inside['attr-value'].pattern =
              /=(?!\{)(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s'">]+)/i),
            (e.languages.jsx.tag.inside['tag'].inside['class-name'] =
              /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
            e.languages.insertBefore(
              'inside',
              'attr-name',
              {
                spread: {
                  pattern:
                    /\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,
                  inside: { punctuation: /\.{3}|[{}.]/, 'attr-value': /\w+/ },
                },
              },
              e.languages.jsx.tag,
            ),
            e.languages.insertBefore(
              'inside',
              'attr-value',
              {
                script: {
                  pattern: /=(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\})/i,
                  inside: {
                    'script-punctuation': {
                      pattern: /^=(?={)/,
                      alias: 'punctuation',
                    },
                    rest: e.languages.jsx,
                  },
                  alias: 'language-javascript',
                },
              },
              e.languages.jsx.tag,
            );
          var n = function e(t) {
              return t
                ? 'string' === typeof t
                  ? t
                  : 'string' === typeof t.content
                  ? t.content
                  : t.content.map(e).join('')
                : '';
            },
            a = function t(a) {
              for (var r = [], i = 0; i < a.length; i++) {
                var s = a[i],
                  o = !1;
                if (
                  ('string' !== typeof s &&
                    ('tag' === s.type &&
                    s.content[0] &&
                    'tag' === s.content[0].type
                      ? '</' === s.content[0].content[0].content
                        ? r.length > 0 &&
                          r[r.length - 1].tagName ===
                            n(s.content[0].content[1]) &&
                          r.pop()
                        : '/>' === s.content[s.content.length - 1].content ||
                          r.push({
                            tagName: n(s.content[0].content[1]),
                            openedBraces: 0,
                          })
                      : r.length > 0 &&
                        'punctuation' === s.type &&
                        '{' === s.content
                      ? r[r.length - 1].openedBraces++
                      : r.length > 0 &&
                        r[r.length - 1].openedBraces > 0 &&
                        'punctuation' === s.type &&
                        '}' === s.content
                      ? r[r.length - 1].openedBraces--
                      : (o = !0)),
                  (o || 'string' === typeof s) &&
                    r.length > 0 &&
                    0 === r[r.length - 1].openedBraces)
                ) {
                  var l = n(s);
                  i < a.length - 1 &&
                    ('string' === typeof a[i + 1] ||
                      'plain-text' === a[i + 1].type) &&
                    ((l += n(a[i + 1])), a.splice(i + 1, 1)),
                    i > 0 &&
                      ('string' === typeof a[i - 1] ||
                        'plain-text' === a[i - 1].type) &&
                      ((l = n(a[i - 1]) + l), a.splice(i - 1, 1), i--),
                    (a[i] = new e.Token('plain-text', l, null, l));
                }
                s.content && 'string' !== typeof s.content && t(s.content);
              }
            };
          e.hooks.add('after-tokenize', function (e) {
            ('jsx' !== e.language && 'tsx' !== e.language) || a(e.tokens);
          });
        })(i),
        (function (e) {
          function t(e, t) {
            return RegExp(
              e.replace(/<ID>/g, function () {
                return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/
                  .source;
              }),
              t,
            );
          }
          e.languages.insertBefore('javascript', 'function-variable', {
            'method-variable': {
              pattern: RegExp(
                '(\\.\\s*)' +
                  e.languages.javascript['function-variable'].pattern.source,
              ),
              lookbehind: !0,
              alias: [
                'function-variable',
                'method',
                'function',
                'property-access',
              ],
            },
          }),
            e.languages.insertBefore('javascript', 'function', {
              method: {
                pattern: RegExp(
                  '(\\.\\s*)' + e.languages.javascript['function'].source,
                ),
                lookbehind: !0,
                alias: ['function', 'property-access'],
              },
            }),
            e.languages.insertBefore('javascript', 'constant', {
              'known-class-name': [
                {
                  pattern:
                    /\b(?:(?:(?:Uint|Int)(?:8|16|32)|Uint8Clamped|Float(?:32|64))?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|(?:Weak)?(?:Set|Map)|WebAssembly)\b/,
                  alias: 'class-name',
                },
                { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: 'class-name' },
              ],
            }),
            e.languages.insertBefore('javascript', 'keyword', {
              imports: {
                pattern: t(
                  /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
                    .source,
                ),
                lookbehind: !0,
                inside: e.languages.javascript,
              },
              exports: {
                pattern: t(
                  /(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/
                    .source,
                ),
                lookbehind: !0,
                inside: e.languages.javascript,
              },
            }),
            e.languages.javascript['keyword'].unshift(
              {
                pattern: /\b(?:as|default|export|from|import)\b/,
                alias: 'module',
              },
              {
                pattern:
                  /\b(?:await|break|catch|continue|do|else|for|finally|if|return|switch|throw|try|while|yield)\b/,
                alias: 'control-flow',
              },
              { pattern: /\bnull\b/, alias: ['null', 'nil'] },
              { pattern: /\bundefined\b/, alias: 'nil' },
            ),
            e.languages.insertBefore('javascript', 'operator', {
              spread: { pattern: /\.{3}/, alias: 'operator' },
              arrow: { pattern: /=>/, alias: 'operator' },
            }),
            e.languages.insertBefore('javascript', 'punctuation', {
              'property-access': {
                pattern: t(/(\.\s*)#?<ID>/.source),
                lookbehind: !0,
              },
              'maybe-class-name': {
                pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
                lookbehind: !0,
              },
              dom: {
                pattern:
                  /\b(?:document|location|navigator|performance|(?:local|session)Storage|window)\b/,
                alias: 'variable',
              },
              console: { pattern: /\bconsole(?=\s*\.)/, alias: 'class-name' },
            });
          for (
            var n = [
                'function',
                'function-variable',
                'method',
                'method-variable',
                'property-access',
              ],
              a = 0;
            a < n.length;
            a++
          ) {
            var r = n[a],
              i = e.languages.javascript[r];
            'RegExp' === e.util.type(i) &&
              (i = e.languages.javascript[r] = { pattern: i });
            var s = i.inside || {};
            (i.inside = s), (s['maybe-class-name'] = /^[A-Z][\s\S]*/);
          }
        })(i),
        (function (e) {
          var t = /#(?!\{).+/,
            n = { pattern: /#\{[^}]+\}/, alias: 'variable' };
          (e.languages.coffeescript = e.languages.extend('javascript', {
            comment: t,
            string: [
              { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 },
              {
                pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                greedy: !0,
                inside: { interpolation: n },
              },
            ],
            keyword:
              /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
            'class-member': { pattern: /@(?!\d)\w+/, alias: 'variable' },
          })),
            e.languages.insertBefore('coffeescript', 'comment', {
              'multiline-comment': {
                pattern: /###[\s\S]+?###/,
                alias: 'comment',
              },
              'block-regex': {
                pattern: /\/{3}[\s\S]*?\/{3}/,
                alias: 'regex',
                inside: { comment: t, interpolation: n },
              },
            }),
            e.languages.insertBefore('coffeescript', 'string', {
              'inline-javascript': {
                pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                inside: {
                  delimiter: { pattern: /^`|`$/, alias: 'punctuation' },
                  script: {
                    pattern: /[\s\S]+/,
                    alias: 'language-javascript',
                    inside: e.languages.javascript,
                  },
                },
              },
              'multiline-string': [
                { pattern: /'''[\s\S]*?'''/, greedy: !0, alias: 'string' },
                {
                  pattern: /"""[\s\S]*?"""/,
                  greedy: !0,
                  alias: 'string',
                  inside: { interpolation: n },
                },
              ],
            }),
            e.languages.insertBefore('coffeescript', 'keyword', {
              property: /(?!\d)\w+(?=\s*:(?!:))/,
            }),
            delete e.languages.coffeescript['template-string'],
            (e.languages.coffee = e.languages.coffeescript);
        })(i),
        (function (e) {
          e.languages.diff = {
            coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m],
          };
          var t = {
            'deleted-sign': '-',
            'deleted-arrow': '<',
            'inserted-sign': '+',
            'inserted-arrow': '>',
            unchanged: ' ',
            diff: '!',
          };
          Object.keys(t).forEach(function (n) {
            var a = t[n],
              r = [];
            /^\w+$/.test(n) || r.push(/\w+/.exec(n)[0]),
              'diff' === n && r.push('bold'),
              (e.languages.diff[n] = {
                pattern: RegExp(
                  '^(?:[' + a + '].*(?:\r\n?|\n|(?![\\s\\S])))+',
                  'm',
                ),
                alias: r,
                inside: {
                  line: {
                    pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
                    lookbehind: !0,
                  },
                  prefix: { pattern: /[\s\S]/, alias: /\w+/.exec(n)[0] },
                },
              });
          }),
            Object.defineProperty(e.languages.diff, 'PREFIXES', { value: t });
        })(i),
        (i.languages.git = {
          comment: /^#.*/m,
          deleted: /^[-\u2013].*/m,
          inserted: /^\+.*/m,
          string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
          command: {
            pattern: /^.*\$ git .*$/m,
            inside: { parameter: /\s--?\w+/m },
          },
          coord: /^@@.*@@$/m,
          'commit-sha1': /^commit \w{40}$/m,
        }),
        (i.languages.go = i.languages.extend('clike', {
          string: { pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 },
          keyword:
            /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
          boolean: /\b(?:_|iota|nil|true|false)\b/,
          number:
            /(?:\b0x[a-f\d]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
          operator:
            /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
          builtin:
            /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
        })),
        delete i.languages.go['class-name'],
        (i.languages.graphql = {
          comment: /#.*/,
          description: {
            pattern:
              /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
            greedy: !0,
            alias: 'string',
            inside: {
              'language-markdown': {
                pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                lookbehind: !0,
                inside: i.languages.markdown,
              },
            },
          },
          string: {
            pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
            greedy: !0,
          },
          number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          boolean: /\b(?:true|false)\b/,
          variable: /\$[a-z_]\w*/i,
          directive: { pattern: /@[a-z_]\w*/i, alias: 'function' },
          'attr-name': {
            pattern:
              /[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
            greedy: !0,
          },
          'class-name': {
            pattern:
              /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*)[a-zA-Z_]\w*/,
            lookbehind: !0,
          },
          fragment: {
            pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: 'function',
          },
          keyword:
            /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
          operator: /[!=|&]|\.{3}/,
          punctuation: /[!(){}\[\]:=,]/,
          constant: /\b(?!ID\b)[A-Z][A-Z_\d]*\b/,
        }),
        (function (e) {
          function t(e, t) {
            return '___' + e.toUpperCase() + t + '___';
          }
          Object.defineProperties((e.languages['markup-templating'] = {}), {
            buildPlaceholders: {
              value: function (n, a, r, i) {
                if (n.language === a) {
                  var s = (n.tokenStack = []);
                  (n.code = n.code.replace(r, function (e) {
                    if ('function' === typeof i && !i(e)) return e;
                    var r,
                      o = s.length;
                    while (-1 !== n.code.indexOf((r = t(a, o)))) ++o;
                    return (s[o] = e), r;
                  })),
                    (n.grammar = e.languages.markup);
                }
              },
            },
            tokenizePlaceholders: {
              value: function (n, a) {
                if (n.language === a && n.tokenStack) {
                  n.grammar = e.languages[a];
                  var r = 0,
                    i = Object.keys(n.tokenStack);
                  s(n.tokens);
                }
                function s(o) {
                  for (var l = 0; l < o.length; l++) {
                    if (r >= i.length) break;
                    var u = o[l];
                    if (
                      'string' === typeof u ||
                      (u.content && 'string' === typeof u.content)
                    ) {
                      var c = i[r],
                        d = n.tokenStack[c],
                        p = 'string' === typeof u ? u : u.content,
                        g = t(a, c),
                        f = p.indexOf(g);
                      if (f > -1) {
                        ++r;
                        var b = p.substring(0, f),
                          m = new e.Token(
                            a,
                            e.tokenize(d, n.grammar),
                            'language-' + a,
                            d,
                          ),
                          h = p.substring(f + g.length),
                          y = [];
                        b && y.push.apply(y, s([b])),
                          y.push(m),
                          h && y.push.apply(y, s([h])),
                          'string' === typeof u
                            ? o.splice.apply(o, [l, 1].concat(y))
                            : (u.content = y);
                      }
                    } else u.content && s(u.content);
                  }
                  return o;
                }
              },
            },
          });
        })(i),
        (function (e) {
          (e.languages.handlebars = {
            comment: /\{\{![\s\S]*?\}\}/,
            delimiter: { pattern: /^\{\{\{?|\}\}\}?$/i, alias: 'punctuation' },
            string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
            number:
              /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
            boolean: /\b(?:true|false)\b/,
            block: {
              pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/i,
              lookbehind: !0,
              alias: 'keyword',
            },
            brackets: {
              pattern: /\[[^\]]+\]/,
              inside: { punctuation: /\[|\]/, variable: /[\s\S]+/ },
            },
            punctuation: /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
            variable: /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/,
          }),
            e.hooks.add('before-tokenize', function (t) {
              var n = /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;
              e.languages['markup-templating'].buildPlaceholders(
                t,
                'handlebars',
                n,
              );
            }),
            e.hooks.add('after-tokenize', function (t) {
              e.languages['markup-templating'].tokenizePlaceholders(
                t,
                'handlebars',
              );
            });
        })(i),
        (i.languages.json = {
          property: { pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, greedy: !0 },
          string: { pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: !0 },
          comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
          number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          punctuation: /[{}[\],]/,
          operator: /:/,
          boolean: /\b(?:true|false)\b/,
          null: { pattern: /\bnull\b/, alias: 'keyword' },
        }),
        (i.languages.webmanifest = i.languages.json),
        (i.languages.less = i.languages.extend('css', {
          comment: [
            /\/\*[\s\S]*?\*\//,
            { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 },
          ],
          atrule: {
            pattern:
              /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
            inside: { punctuation: /[:()]/ },
          },
          selector: {
            pattern:
              /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
            inside: { variable: /@+[\w-]+/ },
          },
          property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
          operator: /[+\-*\/]/,
        })),
        i.languages.insertBefore('less', 'property', {
          variable: [
            { pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } },
            /@@?[\w-]+/,
          ],
          'mixin-usage': {
            pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
            lookbehind: !0,
            alias: 'function',
          },
        }),
        (i.languages.makefile = {
          comment: {
            pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
            lookbehind: !0,
          },
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          builtin: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
          symbol: {
            pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
            inside: { variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/ },
          },
          variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
          keyword: [
            /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
            {
              pattern:
                /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
              lookbehind: !0,
            },
          ],
          operator: /(?:::|[?:+!])?=|[|@]/,
          punctuation: /[:;(){}]/,
        }),
        (function (e) {
          var t = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?!\n|\r\n?))/.source;
          function n(e) {
            return (
              (e = e.replace(/<inner>/g, function () {
                return t;
              })),
              RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + e + ')')
            );
          }
          var a = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/
              .source,
            r = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
              /__/g,
              function () {
                return a;
              },
            ),
            i =
              /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/
                .source;
          (e.languages.markdown = e.languages.extend('markup', {})),
            e.languages.insertBefore('markdown', 'prolog', {
              'front-matter-block': {
                pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                lookbehind: !0,
                greedy: !0,
                inside: {
                  punctuation: /^---|---$/,
                  'font-matter': {
                    pattern: /\S+(?:\s+\S+)*/,
                    alias: ['yaml', 'language-yaml'],
                    inside: e.languages.yaml,
                  },
                },
              },
              blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation' },
              table: {
                pattern: RegExp('^' + r + i + '(?:' + r + ')*', 'm'),
                inside: {
                  'table-data-rows': {
                    pattern: RegExp('^(' + r + i + ')(?:' + r + ')*$'),
                    lookbehind: !0,
                    inside: {
                      'table-data': {
                        pattern: RegExp(a),
                        inside: e.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                  'table-line': {
                    pattern: RegExp('^(' + r + ')' + i + '$'),
                    lookbehind: !0,
                    inside: { punctuation: /\||:?-{3,}:?/ },
                  },
                  'table-header-row': {
                    pattern: RegExp('^' + r + '$'),
                    inside: {
                      'table-header': {
                        pattern: RegExp(a),
                        alias: 'important',
                        inside: e.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                },
              },
              code: [
                {
                  pattern:
                    /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                  lookbehind: !0,
                  alias: 'keyword',
                },
                { pattern: /``.+?``|`[^`\r\n]+`/, alias: 'keyword' },
                {
                  pattern: /^```[\s\S]*?^```$/m,
                  greedy: !0,
                  inside: {
                    'code-block': {
                      pattern:
                        /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                      lookbehind: !0,
                    },
                    'code-language': { pattern: /^(```).+/, lookbehind: !0 },
                    punctuation: /```/,
                  },
                },
              ],
              title: [
                {
                  pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                  alias: 'important',
                  inside: { punctuation: /==+$|--+$/ },
                },
                {
                  pattern: /(^\s*)#.+/m,
                  lookbehind: !0,
                  alias: 'important',
                  inside: { punctuation: /^#+|#+$/ },
                },
              ],
              hr: {
                pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                lookbehind: !0,
                alias: 'punctuation',
              },
              list: {
                pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                lookbehind: !0,
                alias: 'punctuation',
              },
              'url-reference': {
                pattern:
                  /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                inside: {
                  variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                  string:
                    /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                  punctuation: /^[\[\]!:]|[<>]/,
                },
                alias: 'url',
              },
              bold: {
                pattern: n(
                  /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
                    .source,
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^..)[\s\S]+(?=..$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /\*\*|__/,
                },
              },
              italic: {
                pattern: n(
                  /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
                    .source,
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^.)[\s\S]+(?=.$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /[*_]/,
                },
              },
              strike: {
                pattern: n(/(~~?)(?:(?!~)<inner>)+?\2/.source),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^~~?)[\s\S]+(?=\1$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /~~?/,
                },
              },
              url: {
                pattern: n(
                  /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
                    .source,
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  operator: /^!/,
                  content: {
                    pattern: /(^\[)[^\]]+(?=\])/,
                    lookbehind: !0,
                    inside: {},
                  },
                  variable: {
                    pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
                    lookbehind: !0,
                  },
                  url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
                  string: {
                    pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
                    lookbehind: !0,
                  },
                },
              },
            }),
            ['url', 'bold', 'italic', 'strike'].forEach(function (t) {
              ['url', 'bold', 'italic', 'strike'].forEach(function (n) {
                t !== n &&
                  (e.languages.markdown[t].inside.content.inside[n] =
                    e.languages.markdown[n]);
              });
            }),
            e.hooks.add('after-tokenize', function (e) {
              function t(e) {
                if (e && 'string' !== typeof e)
                  for (var n = 0, a = e.length; n < a; n++) {
                    var r = e[n];
                    if ('code' === r.type) {
                      var i = r.content[1],
                        s = r.content[3];
                      if (
                        i &&
                        s &&
                        'code-language' === i.type &&
                        'code-block' === s.type &&
                        'string' === typeof i.content
                      ) {
                        var o = i.content
                          .replace(/\b#/g, 'sharp')
                          .replace(/\b\+\+/g, 'pp');
                        o = (/[a-z][\w-]*/i.exec(o) || [''])[0].toLowerCase();
                        var l = 'language-' + o;
                        s.alias
                          ? 'string' === typeof s.alias
                            ? (s.alias = [s.alias, l])
                            : s.alias.push(l)
                          : (s.alias = [l]);
                      }
                    } else t(r.content);
                  }
              }
              ('markdown' !== e.language && 'md' !== e.language) || t(e.tokens);
            }),
            e.hooks.add('wrap', function (t) {
              if ('code-block' === t.type) {
                for (var n = '', a = 0, r = t.classes.length; a < r; a++) {
                  var i = t.classes[a],
                    s = /language-(.+)/.exec(i);
                  if (s) {
                    n = s[1];
                    break;
                  }
                }
                var o = e.languages[n];
                if (o) {
                  var l = t.content
                    .replace(/&lt;/g, '<')
                    .replace(/&amp;/g, '&');
                  t.content = e.highlight(l, o, n);
                } else if (n && 'none' !== n && e.plugins.autoloader) {
                  var u =
                    'md-' +
                    new Date().valueOf() +
                    '-' +
                    Math.floor(1e16 * Math.random());
                  (t.attributes['id'] = u),
                    e.plugins.autoloader.loadLanguages(n, function () {
                      var t = document.getElementById(u);
                      t &&
                        (t.innerHTML = e.highlight(
                          t.textContent,
                          e.languages[n],
                          n,
                        ));
                    });
                }
              }
            }),
            (e.languages.md = e.languages.markdown);
        })(i),
        (i.languages.objectivec = i.languages.extend('c', {
          string:
            /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
          keyword:
            /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
          operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/,
        })),
        delete i.languages.objectivec['class-name'],
        (i.languages.objc = i.languages.objectivec),
        (i.languages.ocaml = {
          comment: /\(\*[\s\S]*?\*\)/,
          string: [
            { pattern: /"(?:\\.|[^\\\r\n"])*"/, greedy: !0 },
            {
              pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,
              greedy: !0,
            },
          ],
          number:
            /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?[\d_]+)?)/i,
          directive: { pattern: /\B#\w+/, alias: 'important' },
          label: { pattern: /\B~\w+/, alias: 'function' },
          'type-variable': { pattern: /\B'\w+/, alias: 'function' },
          variant: { pattern: /`\w+/, alias: 'variable' },
          module: { pattern: /\b[A-Z]\w+/, alias: 'variable' },
          keyword:
            /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
          boolean: /\b(?:false|true)\b/,
          operator:
            /:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
          punctuation: /[(){}\[\]|.,:;]|\b_\b/,
        }),
        (i.languages.python = {
          comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 },
          'string-interpolation': {
            pattern:
              /(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
            greedy: !0,
            inside: {
              interpolation: {
                pattern:
                  /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,
                lookbehind: !0,
                inside: {
                  'format-spec': {
                    pattern: /(:)[^:(){}]+(?=}$)/,
                    lookbehind: !0,
                  },
                  'conversion-option': {
                    pattern: /![sra](?=[:}]$)/,
                    alias: 'punctuation',
                  },
                  rest: null,
                },
              },
              string: /[\s\S]+/,
            },
          },
          'triple-quoted-string': {
            pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i,
            greedy: !0,
            alias: 'string',
          },
          string: {
            pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
            greedy: !0,
          },
          function: {
            pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
            lookbehind: !0,
          },
          'class-name': { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
          decorator: {
            pattern: /(^\s*)@\w+(?:\.\w+)*/im,
            lookbehind: !0,
            alias: ['annotation', 'punctuation'],
            inside: { punctuation: /\./ },
          },
          keyword:
            /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
          builtin:
            /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
          boolean: /\b(?:True|False|None)\b/,
          number:
            /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,
          operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (i.languages.python['string-interpolation'].inside[
          'interpolation'
        ].inside.rest = i.languages.python),
        (i.languages.py = i.languages.python),
        (i.languages.reason = i.languages.extend('clike', {
          string: {
            pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
            greedy: !0,
          },
          'class-name': /\b[A-Z]\w*/,
          keyword:
            /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
          operator:
            /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/,
        })),
        i.languages.insertBefore('reason', 'class-name', {
          character: {
            pattern:
              /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
            alias: 'string',
          },
          constructor: { pattern: /\b[A-Z]\w*\b(?!\s*\.)/, alias: 'variable' },
          label: { pattern: /\b[a-z]\w*(?=::)/, alias: 'symbol' },
        }),
        delete i.languages.reason['function'],
        (function (e) {
          (e.languages.sass = e.languages.extend('css', {
            comment: {
              pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
              lookbehind: !0,
            },
          })),
            e.languages.insertBefore('sass', 'atrule', {
              'atrule-line': {
                pattern: /^(?:[ \t]*)[@+=].+/m,
                inside: { atrule: /(?:@[\w-]+|[+=])/m },
              },
            }),
            delete e.languages.sass.atrule;
          var t = /\$[-\w]+|#\{\$[-\w]+\}/,
            n = [
              /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,
              { pattern: /(\s+)-(?=\s)/, lookbehind: !0 },
            ];
          e.languages.insertBefore('sass', 'property', {
            'variable-line': {
              pattern: /^[ \t]*\$.+/m,
              inside: { punctuation: /:/, variable: t, operator: n },
            },
            'property-line': {
              pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
              inside: {
                property: [
                  /[^:\s]+(?=\s*:)/,
                  { pattern: /(:)[^:\s]+/, lookbehind: !0 },
                ],
                punctuation: /:/,
                variable: t,
                operator: n,
                important: e.languages.sass.important,
              },
            },
          }),
            delete e.languages.sass.property,
            delete e.languages.sass.important,
            e.languages.insertBefore('sass', 'punctuation', {
              selector: {
                pattern:
                  /([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/,
                lookbehind: !0,
              },
            });
        })(i),
        (i.languages.scss = i.languages.extend('css', {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0,
          },
          atrule: {
            pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
            inside: { rule: /@[\w-]+/ },
          },
          url: /(?:[-a-z]+-)?url(?=\()/i,
          selector: {
            pattern:
              /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]+))/m,
            inside: {
              parent: { pattern: /&/, alias: 'important' },
              placeholder: /%[-\w]+/,
              variable: /\$[-\w]+|#\{\$[-\w]+\}/,
            },
          },
          property: {
            pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
            inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ },
          },
        })),
        i.languages.insertBefore('scss', 'atrule', {
          keyword: [
            /@(?:if|else(?: if)?|forward|for|each|while|import|use|extend|debug|warn|mixin|include|function|return|content)\b/i,
            { pattern: /( +)(?:from|through)(?= )/, lookbehind: !0 },
          ],
        }),
        i.languages.insertBefore('scss', 'important', {
          variable: /\$[-\w]+|#\{\$[-\w]+\}/,
        }),
        i.languages.insertBefore('scss', 'function', {
          'module-modifier': {
            pattern: /\b(?:as|with|show|hide)\b/i,
            alias: 'keyword',
          },
          placeholder: { pattern: /%[-\w]+/, alias: 'selector' },
          statement: {
            pattern: /\B!(?:default|optional)\b/i,
            alias: 'keyword',
          },
          boolean: /\b(?:true|false)\b/,
          null: { pattern: /\bnull\b/, alias: 'keyword' },
          operator: {
            pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
            lookbehind: !0,
          },
        }),
        (i.languages.scss['atrule'].inside.rest = i.languages.scss),
        (i.languages.sql = {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
            lookbehind: !0,
          },
          variable: [
            { pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 },
            /@[\w.$]+/,
          ],
          string: {
            pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
            greedy: !0,
            lookbehind: !0,
          },
          function:
            /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
          keyword:
            /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:S|ING)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
          boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
          number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
          operator:
            /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
          punctuation: /[;[\]()`,.]/,
        }),
        (function (e) {
          var t = { pattern: /(\b\d+)(?:%|[a-z]+)/, lookbehind: !0 },
            n = {
              pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
              lookbehind: !0,
            },
            a = {
              comment: {
                pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                lookbehind: !0,
              },
              url: { pattern: /url\((["']?).*?\1\)/i, greedy: !0 },
              string: {
                pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
                greedy: !0,
              },
              interpolation: null,
              func: null,
              important: /\B!(?:important|optional)\b/i,
              keyword: {
                pattern:
                  /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,
                lookbehind: !0,
              },
              hexcode: /#[\da-f]{3,6}/i,
              color: [
                /\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
                {
                  pattern:
                    /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                  inside: {
                    unit: t,
                    number: n,
                    function: /[\w-]+(?=\()/,
                    punctuation: /[(),]/,
                  },
                },
              ],
              entity: /\\[\da-f]{1,8}/i,
              unit: t,
              boolean: /\b(?:true|false)\b/,
              operator: [
                /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/,
              ],
              number: n,
              punctuation: /[{}()\[\];:,]/,
            };
          (a['interpolation'] = {
            pattern: /\{[^\r\n}:]+\}/,
            alias: 'variable',
            inside: {
              delimiter: { pattern: /^{|}$/, alias: 'punctuation' },
              rest: a,
            },
          }),
            (a['func'] = {
              pattern: /[\w-]+\([^)]*\).*/,
              inside: { function: /^[^(]+/, rest: a },
            }),
            (e.languages.stylus = {
              'atrule-declaration': {
                pattern: /(^\s*)@.+/m,
                lookbehind: !0,
                inside: { atrule: /^@[\w-]+/, rest: a },
              },
              'variable-declaration': {
                pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
                lookbehind: !0,
                inside: { variable: /^\S+/, rest: a },
              },
              statement: {
                pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t].+/m,
                lookbehind: !0,
                inside: { keyword: /^\S+/, rest: a },
              },
              'property-declaration': {
                pattern:
                  /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(?:\r?\n|\r)(?:\{|\2[ \t]+)))/m,
                lookbehind: !0,
                inside: {
                  property: {
                    pattern: /^[^\s:]+/,
                    inside: { interpolation: a.interpolation },
                  },
                  rest: a,
                },
              },
              selector: {
                pattern:
                  /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,
                lookbehind: !0,
                inside: {
                  interpolation: a.interpolation,
                  comment: a.comment,
                  punctuation: /[{},]/,
                },
              },
              func: a.func,
              string: a.string,
              comment: {
                pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                lookbehind: !0,
                greedy: !0,
              },
              interpolation: a.interpolation,
              punctuation: /[{}()\[\];:.]/,
            });
        })(i),
        (function (e) {
          (e.languages.typescript = e.languages.extend('javascript', {
            'class-name': {
              pattern:
                /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
              lookbehind: !0,
              greedy: !0,
              inside: null,
            },
            keyword:
              /\b(?:abstract|as|asserts|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\b/,
            builtin:
              /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
          })),
            delete e.languages.typescript['parameter'];
          var t = e.languages.extend('typescript', {});
          delete t['class-name'],
            (e.languages.typescript['class-name'].inside = t),
            e.languages.insertBefore('typescript', 'function', {
              'generic-function': {
                pattern:
                  /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                greedy: !0,
                inside: {
                  function:
                    /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                  generic: {
                    pattern: /<[\s\S]+/,
                    alias: 'class-name',
                    inside: t,
                  },
                },
              },
            }),
            (e.languages.ts = e.languages.typescript);
        })(i),
        (function (e) {
          var t = e.util.clone(e.languages.typescript);
          e.languages.tsx = e.languages.extend('jsx', t);
          var n = e.languages.tsx.tag;
          (n.pattern = RegExp(
            /(^|[^\w$]|(?=<\/))/.source + '(?:' + n.pattern.source + ')',
            n.pattern.flags,
          )),
            (n.lookbehind = !0);
        })(i),
        (i.languages.wasm = {
          comment: [/\(;[\s\S]*?;\)/, { pattern: /;;.*/, greedy: !0 }],
          string: { pattern: /"(?:\\[\s\S]|[^"\\])*"/, greedy: !0 },
          keyword: [
            { pattern: /\b(?:align|offset)=/, inside: { operator: /=/ } },
            {
              pattern:
                /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
              inside: { punctuation: /\./ },
            },
            /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/,
          ],
          variable: /\$[\w!#$%&'*+\-./:<=>?@\\^_`|~]+/i,
          number:
            /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
          punctuation: /[()]/,
        }),
        (function (e) {
          var t = /[*&][^\s[\]{},]+/,
            n =
              /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
            a =
              '(?:' +
              n.source +
              '(?:[ \t]+' +
              t.source +
              ')?|' +
              t.source +
              '(?:[ \t]+' +
              n.source +
              ')?)',
            r =
              /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
                /<PLAIN>/g,
                function () {
                  return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
                    .source;
                },
              ),
            i = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
          function s(e, t) {
            t = (t || '').replace(/m/g, '') + 'm';
            var n =
              /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|]|}|(?:[\r\n]\s*)?#))/.source
                .replace(/<<prop>>/g, function () {
                  return a;
                })
                .replace(/<<value>>/g, function () {
                  return e;
                });
            return RegExp(n, t);
          }
          (e.languages.yaml = {
            scalar: {
              pattern: RegExp(
                /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
                  /<<prop>>/g,
                  function () {
                    return a;
                  },
                ),
              ),
              lookbehind: !0,
              alias: 'string',
            },
            comment: /#.*/,
            key: {
              pattern: RegExp(
                /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
                  .replace(/<<prop>>/g, function () {
                    return a;
                  })
                  .replace(/<<key>>/g, function () {
                    return '(?:' + r + '|' + i + ')';
                  }),
              ),
              lookbehind: !0,
              greedy: !0,
              alias: 'atrule',
            },
            directive: {
              pattern: /(^[ \t]*)%.+/m,
              lookbehind: !0,
              alias: 'important',
            },
            datetime: {
              pattern: s(
                /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
                  .source,
              ),
              lookbehind: !0,
              alias: 'number',
            },
            boolean: {
              pattern: s(/true|false/.source, 'i'),
              lookbehind: !0,
              alias: 'important',
            },
            null: {
              pattern: s(/null|~/.source, 'i'),
              lookbehind: !0,
              alias: 'important',
            },
            string: { pattern: s(i), lookbehind: !0, greedy: !0 },
            number: {
              pattern: s(
                /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/
                  .source,
                'i',
              ),
              lookbehind: !0,
            },
            tag: n,
            important: t,
            punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
          }),
            (e.languages.yml = e.languages.yaml);
        })(i);
      var s = i,
        o = {
          plain: { backgroundColor: '#2a2734', color: '#9a86fd' },
          styles: [
            {
              types: ['comment', 'prolog', 'doctype', 'cdata', 'punctuation'],
              style: { color: '#6c6783' },
            },
            { types: ['namespace'], style: { opacity: 0.7 } },
            {
              types: ['tag', 'operator', 'number'],
              style: { color: '#e09142' },
            },
            { types: ['property', 'function'], style: { color: '#9a86fd' } },
            {
              types: ['tag-id', 'selector', 'atrule-id'],
              style: { color: '#eeebff' },
            },
            { types: ['attr-name'], style: { color: '#c4b9fe' } },
            {
              types: [
                'boolean',
                'string',
                'entity',
                'url',
                'attr-value',
                'keyword',
                'control',
                'directive',
                'unit',
                'statement',
                'regex',
                'at-rule',
                'placeholder',
                'variable',
              ],
              style: { color: '#ffcc99' },
            },
            {
              types: ['deleted'],
              style: { textDecorationLine: 'line-through' },
            },
            { types: ['inserted'], style: { textDecorationLine: 'underline' } },
            { types: ['italic'], style: { fontStyle: 'italic' } },
            { types: ['important', 'bold'], style: { fontWeight: 'bold' } },
            { types: ['important'], style: { color: '#c4b9fe' } },
          ],
        },
        l = o,
        u = { Prism: s, theme: l };
      function c(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function d() {
        return (
          (d =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          d.apply(this, arguments)
        );
      }
      var p = /\r\n|\r|\n/,
        g = function (e) {
          0 === e.length
            ? e.push({ types: ['plain'], content: '\n', empty: !0 })
            : 1 === e.length &&
              '' === e[0].content &&
              ((e[0].content = '\n'), (e[0].empty = !0));
        },
        f = function (e, t) {
          var n = e.length;
          return n > 0 && e[n - 1] === t ? e : e.concat(t);
        },
        b = function (e) {
          var t = [[]],
            n = [e],
            a = [0],
            r = [e.length],
            i = 0,
            s = 0,
            o = [],
            l = [o];
          while (s > -1) {
            while ((i = a[s]++) < r[s]) {
              var u = void 0,
                c = t[s],
                d = n[s],
                b = d[i];
              if (
                ('string' === typeof b
                  ? ((c = s > 0 ? c : ['plain']), (u = b))
                  : ((c = f(c, b.type)),
                    b.alias && (c = f(c, b.alias)),
                    (u = b.content)),
                'string' === typeof u)
              ) {
                var m = u.split(p),
                  h = m.length;
                o.push({ types: c, content: m[0] });
                for (var y = 1; y < h; y++)
                  g(o), l.push((o = [])), o.push({ types: c, content: m[y] });
              } else s++, t.push(c), n.push(u), a.push(0), r.push(u.length);
            }
            s--, t.pop(), n.pop(), a.pop(), r.pop();
          }
          return g(o), l;
        },
        m = function (e, t) {
          var n = e.plain,
            a = Object.create(null),
            r = e.styles.reduce(function (e, n) {
              var a = n.languages,
                r = n.style;
              return (
                (a && !a.includes(t)) ||
                  n.types.forEach(function (t) {
                    var n = d({}, e[t], r);
                    e[t] = n;
                  }),
                e
              );
            }, a);
          return (
            (r.root = n), (r.plain = d({}, n, { backgroundColor: null })), r
          );
        };
      function h(e, t) {
        var n = {};
        for (var a in e)
          Object.prototype.hasOwnProperty.call(e, a) &&
            -1 === t.indexOf(a) &&
            (n[a] = e[a]);
        return n;
      }
      var y = (function (e) {
          function t() {
            var t = this,
              n = [],
              a = arguments.length;
            while (a--) n[a] = arguments[a];
            e.apply(this, n),
              c(this, 'getThemeDict', function (e) {
                if (
                  void 0 !== t.themeDict &&
                  e.theme === t.prevTheme &&
                  e.language === t.prevLanguage
                )
                  return t.themeDict;
                (t.prevTheme = e.theme), (t.prevLanguage = e.language);
                var n = e.theme ? m(e.theme, e.language) : void 0;
                return (t.themeDict = n);
              }),
              c(this, 'getLineProps', function (e) {
                var n = e.key,
                  a = e.className,
                  r = e.style,
                  i = h(e, ['key', 'className', 'style', 'line']),
                  s = i,
                  o = d({}, s, {
                    className: 'token-line',
                    style: void 0,
                    key: void 0,
                  }),
                  l = t.getThemeDict(t.props);
                return (
                  void 0 !== l && (o.style = l.plain),
                  void 0 !== r &&
                    (o.style = void 0 !== o.style ? d({}, o.style, r) : r),
                  void 0 !== n && (o.key = n),
                  a && (o.className += ' ' + a),
                  o
                );
              }),
              c(this, 'getStyleForToken', function (e) {
                var n = e.types,
                  a = e.empty,
                  r = n.length,
                  i = t.getThemeDict(t.props);
                if (void 0 !== i) {
                  if (1 === r && 'plain' === n[0])
                    return a ? { display: 'inline-block' } : void 0;
                  if (1 === r && !a) return i[n[0]];
                  var s = a ? { display: 'inline-block' } : {},
                    o = n.map(function (e) {
                      return i[e];
                    });
                  return Object.assign.apply(Object, [s].concat(o));
                }
              }),
              c(this, 'getTokenProps', function (e) {
                var n = e.key,
                  a = e.className,
                  r = e.style,
                  i = e.token,
                  s = h(e, ['key', 'className', 'style', 'token']),
                  o = s,
                  l = d({}, o, {
                    className: 'token ' + i.types.join(' '),
                    children: i.content,
                    style: t.getStyleForToken(i),
                    key: void 0,
                  });
                return (
                  void 0 !== r &&
                    (l.style = void 0 !== l.style ? d({}, l.style, r) : r),
                  void 0 !== n && (l.key = n),
                  a && (l.className += ' ' + a),
                  l
                );
              }),
              c(this, 'tokenize', function (e, t, n, a) {
                var r = { code: t, grammar: n, language: a, tokens: [] };
                e.hooks.run('before-tokenize', r);
                var i = (r.tokens = e.tokenize(r.code, r.grammar, r.language));
                return e.hooks.run('after-tokenize', r), i;
              });
          }
          return (
            e && (t.__proto__ = e),
            (t.prototype = Object.create(e && e.prototype)),
            (t.prototype.constructor = t),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.Prism,
                n = e.language,
                a = e.code,
                r = e.children,
                i = this.getThemeDict(this.props),
                s = t.languages[n],
                o = void 0 !== s ? this.tokenize(t, a, s, n) : [a],
                l = b(o);
              return r({
                tokens: l,
                className: 'prism-code language-' + n,
                style: void 0 !== i ? i.root : {},
                getLineProps: this.getLineProps,
                getTokenProps: this.getTokenProps,
              });
            }),
            t
          );
        })(a['Component']),
        E = y,
        S = n('dEAq');
      n('qHiR'), n('foS9');
      function k() {
        return (
          (k =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          k.apply(this, arguments)
        );
      }
      function w(e, t) {
        return _(e) || I(e, t) || v(e, t) || A();
      }
      function A() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function v(e, t) {
        if (e) {
          if ('string' === typeof e) return T(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? T(e, t)
              : void 0
          );
        }
      }
      function T(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
        return a;
      }
      function I(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (null != n) {
          var a,
            r,
            i = [],
            s = !0,
            o = !1;
          try {
            for (n = n.call(e); !(s = (a = n.next()).done); s = !0)
              if ((i.push(a.value), t && i.length === t)) break;
          } catch (l) {
            (o = !0), (r = l);
          } finally {
            try {
              s || null == n['return'] || n['return']();
            } finally {
              if (o) throw r;
            }
          }
          return i;
        }
      }
      function _(e) {
        if (Array.isArray(e)) return e;
      }
      var R = { acss: 'css', axml: 'xml' };
      t['a'] = function (e) {
        var t = e.code,
          n = e.lang,
          a = e.showCopy,
          i = void 0 === a || a,
          s = Object(S['useCopy'])(),
          o = w(s, 2),
          l = o[0],
          c = o[1];
        return r.a.createElement(
          'div',
          { className: '__dumi-default-code-block' },
          r.a.createElement(
            E,
            k({}, u, { code: t, language: R[n] || n, theme: void 0 }),
            function (e) {
              var n = e.className,
                a = e.style,
                s = e.tokens,
                o = e.getLineProps,
                u = e.getTokenProps;
              return r.a.createElement(
                'pre',
                { className: n, style: a },
                i &&
                  r.a.createElement('button', {
                    className:
                      '__dumi-default-icon __dumi-default-code-block-copy-btn',
                    'data-status': c,
                    onClick: function () {
                      return l(t);
                    },
                  }),
                s.map(function (e, t) {
                  return r.a.createElement(
                    'div',
                    o({ line: e, key: t }),
                    e.map(function (e, t) {
                      return r.a.createElement('span', u({ token: e, key: t }));
                    }),
                  );
                }),
              );
            },
          ),
        );
      };
    },
    foS9: function (e, t, n) {},
    qHiR: function (e, t, n) {},
  },
]);
