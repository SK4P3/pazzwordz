/**
 * FingerprintJS v4.0.0 - Copyright (c) FingerprintJS, Inc, 2023 (https://fingerprint.com)
 *
 * Licensed under Business Source License 1.1 https://mariadb.com/bsl11/
 * Licensor: FingerprintJS, Inc.
 * Licensed Work: FingerprintJS browser fingerprinting library
 * Additional Use Grant: None
 * Change Date: Four years from first release for the specific version.
 * Change License: MIT, text at https://opensource.org/license/mit/ with the following copyright notice:
 * Copyright 2015-present FingerprintJS, Inc.
 *
 * This software contains code from open-source projects:
 * MurmurHash3 by Karan Lyons (https://github.com/karanlyons/murmurHash3.js)
 */
// @ts-nocheck
var e = function () {
    return e = Object.assign || function (e) {
        for (var n, t = 1, r = arguments.length; t < r; t++) for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        return e
    }, e.apply(this, arguments)
};

function n(e, n, t, r) {
    return new (t || (t = Promise))((function (o, a) {
        function i(e) {
            try {
                u(r.next(e))
            } catch (n) {
                a(n)
            }
        }

        function c(e) {
            try {
                u(r.throw(e))
            } catch (n) {
                a(n)
            }
        }

        function u(e) {
            var n;
            e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function (e) {
                e(n)
            }))).then(i, c)
        }

        u((r = r.apply(e, n || [])).next())
    }))
}

function t(e, n) {
    var t, r, o, a, i = {
        label: 0, sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1]
        }, trys: [], ops: []
    };
    return a = {
        next: c(0),
        throw: c(1),
        return: c(2)
    }, "function" == typeof Symbol && (a[Symbol.iterator] = function () {
        return this
    }), a;

    function c(c) {
        return function (u) {
            return function (c) {
                if (t) throw new TypeError("Generator is already executing.");
                for (; a && (a = 0, c[0] && (i = 0)), i;) try {
                    if (t = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                    switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                        case 0:
                        case 1:
                            o = c;
                            break;
                        case 4:
                            return i.label++, {value: c[1], done: !1};
                        case 5:
                            i.label++, r = c[1], c = [0];
                            continue;
                        case 7:
                            c = i.ops.pop(), i.trys.pop();
                            continue;
                        default:
                            if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                i = 0;
                                continue
                            }
                            if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                i.label = c[1];
                                break
                            }
                            if (6 === c[0] && i.label < o[1]) {
                                i.label = o[1], o = c;
                                break
                            }
                            if (o && i.label < o[2]) {
                                i.label = o[2], i.ops.push(c);
                                break
                            }
                            o[2] && i.ops.pop(), i.trys.pop();
                            continue
                    }
                    c = n.call(e, i)
                } catch (u) {
                    c = [6, u], r = 0
                } finally {
                    t = o = 0
                }
                if (5 & c[0]) throw c[1];
                return {value: c[0] ? c[1] : void 0, done: !0}
            }([c, u])
        }
    }
}

function r(e, n, t) {
    if (t || 2 === arguments.length) for (var r, o = 0, a = n.length; o < a; o++) !r && o in n || (r || (r = Array.prototype.slice.call(n, 0, o)), r[o] = n[o]);
    return e.concat(r || Array.prototype.slice.call(n))
}

function o(e, n) {
    return new Promise((function (t) {
        return setTimeout(t, e, n)
    }))
}

function a() {
    return o(0)
}

function i(e) {
    return !!e && "function" == typeof e.then
}

function c(e, n) {
    try {
        var t = e();
        i(t) ? t.then((function (e) {
            return n(!0, e)
        }), (function (e) {
            return n(!1, e)
        })) : n(!0, t)
    } catch (r) {
        n(!1, r)
    }
}

function u(e, r, a) {
    return void 0 === a && (a = 16), n(this, void 0, void 0, (function () {
        var n, i, c, u;
        return t(this, (function (t) {
            switch (t.label) {
                case 0:
                    n = Array(e.length), i = Date.now(), c = 0, t.label = 1;
                case 1:
                    return c < e.length ? (n[c] = r(e[c], c), (u = Date.now()) >= i + a ? (i = u, [4, o(0)]) : [3, 3]) : [3, 4];
                case 2:
                    t.sent(), t.label = 3;
                case 3:
                    return ++c, [3, 1];
                case 4:
                    return [2, n]
            }
        }))
    }))
}

function l(e) {
    e.then(void 0, (function () {
    }))
}

function s(e, n) {
    e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], n = [n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1]];
    var t = [0, 0, 0, 0];
    return t[3] += e[3] + n[3], t[2] += t[3] >>> 16, t[3] &= 65535, t[2] += e[2] + n[2], t[1] += t[2] >>> 16, t[2] &= 65535, t[1] += e[1] + n[1], t[0] += t[1] >>> 16, t[1] &= 65535, t[0] += e[0] + n[0], t[0] &= 65535, [t[0] << 16 | t[1], t[2] << 16 | t[3]]
}

function d(e, n) {
    e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], n = [n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1]];
    var t = [0, 0, 0, 0];
    return t[3] += e[3] * n[3], t[2] += t[3] >>> 16, t[3] &= 65535, t[2] += e[2] * n[3], t[1] += t[2] >>> 16, t[2] &= 65535, t[2] += e[3] * n[2], t[1] += t[2] >>> 16, t[2] &= 65535, t[1] += e[1] * n[3], t[0] += t[1] >>> 16, t[1] &= 65535, t[1] += e[2] * n[2], t[0] += t[1] >>> 16, t[1] &= 65535, t[1] += e[3] * n[1], t[0] += t[1] >>> 16, t[1] &= 65535, t[0] += e[0] * n[3] + e[1] * n[2] + e[2] * n[1] + e[3] * n[0], t[0] &= 65535, [t[0] << 16 | t[1], t[2] << 16 | t[3]]
}

function f(e, n) {
    return 32 === (n %= 64) ? [e[1], e[0]] : n < 32 ? [e[0] << n | e[1] >>> 32 - n, e[1] << n | e[0] >>> 32 - n] : (n -= 32, [e[1] << n | e[0] >>> 32 - n, e[0] << n | e[1] >>> 32 - n])
}

function m(e, n) {
    return 0 === (n %= 64) ? e : n < 32 ? [e[0] << n | e[1] >>> 32 - n, e[1] << n] : [e[1] << n - 32, 0]
}

function v(e, n) {
    return [e[0] ^ n[0], e[1] ^ n[1]]
}

function h(e) {
    return e = v(e, [0, e[0] >>> 1]), e = v(e = d(e, [4283543511, 3981806797]), [0, e[0] >>> 1]), e = v(e = d(e, [3301882366, 444984403]), [0, e[0] >>> 1])
}

function p(e, n) {
    n = n || 0;
    var t, r = (e = e || "").length % 16, o = e.length - r, a = [0, n], i = [0, n], c = [0, 0], u = [0, 0],
        l = [2277735313, 289559509], p = [1291169091, 658871167];
    for (t = 0; t < o; t += 16) c = [255 & e.charCodeAt(t + 4) | (255 & e.charCodeAt(t + 5)) << 8 | (255 & e.charCodeAt(t + 6)) << 16 | (255 & e.charCodeAt(t + 7)) << 24, 255 & e.charCodeAt(t) | (255 & e.charCodeAt(t + 1)) << 8 | (255 & e.charCodeAt(t + 2)) << 16 | (255 & e.charCodeAt(t + 3)) << 24], u = [255 & e.charCodeAt(t + 12) | (255 & e.charCodeAt(t + 13)) << 8 | (255 & e.charCodeAt(t + 14)) << 16 | (255 & e.charCodeAt(t + 15)) << 24, 255 & e.charCodeAt(t + 8) | (255 & e.charCodeAt(t + 9)) << 8 | (255 & e.charCodeAt(t + 10)) << 16 | (255 & e.charCodeAt(t + 11)) << 24], c = f(c = d(c, l), 31), a = s(a = f(a = v(a, c = d(c, p)), 27), i), a = s(d(a, [0, 5]), [0, 1390208809]), u = f(u = d(u, p), 33), i = s(i = f(i = v(i, u = d(u, l)), 31), a), i = s(d(i, [0, 5]), [0, 944331445]);
    switch (c = [0, 0], u = [0, 0], r) {
        case 15:
            u = v(u, m([0, e.charCodeAt(t + 14)], 48));
        case 14:
            u = v(u, m([0, e.charCodeAt(t + 13)], 40));
        case 13:
            u = v(u, m([0, e.charCodeAt(t + 12)], 32));
        case 12:
            u = v(u, m([0, e.charCodeAt(t + 11)], 24));
        case 11:
            u = v(u, m([0, e.charCodeAt(t + 10)], 16));
        case 10:
            u = v(u, m([0, e.charCodeAt(t + 9)], 8));
        case 9:
            u = d(u = v(u, [0, e.charCodeAt(t + 8)]), p), i = v(i, u = d(u = f(u, 33), l));
        case 8:
            c = v(c, m([0, e.charCodeAt(t + 7)], 56));
        case 7:
            c = v(c, m([0, e.charCodeAt(t + 6)], 48));
        case 6:
            c = v(c, m([0, e.charCodeAt(t + 5)], 40));
        case 5:
            c = v(c, m([0, e.charCodeAt(t + 4)], 32));
        case 4:
            c = v(c, m([0, e.charCodeAt(t + 3)], 24));
        case 3:
            c = v(c, m([0, e.charCodeAt(t + 2)], 16));
        case 2:
            c = v(c, m([0, e.charCodeAt(t + 1)], 8));
        case 1:
            c = d(c = v(c, [0, e.charCodeAt(t)]), l), a = v(a, c = d(c = f(c, 31), p))
    }
    return a = s(a = v(a, [0, e.length]), i = v(i, [0, e.length])), i = s(i, a), a = s(a = h(a), i = h(i)), i = s(i, a), ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[1] >>> 0).toString(16)).slice(-8)
}

function b(e) {
    return parseInt(e)
}

function y(e) {
    return parseFloat(e)
}

function g(e, n) {
    return "number" == typeof e && isNaN(e) ? n : e
}

function w(e) {
    return e.reduce((function (e, n) {
        return e + (n ? 1 : 0)
    }), 0)
}

function L(e, n) {
    if (void 0 === n && (n = 1), Math.abs(n) >= 1) return Math.round(e / n) * n;
    var t = 1 / n;
    return Math.round(e * t) / t
}

function k(e) {
    return "function" != typeof e
}

function V(e, r, o) {
    var a = Object.keys(e).filter((function (e) {
        return !function (e, n) {
            for (var t = 0, r = e.length; t < r; ++t) if (e[t] === n) return !0;
            return !1
        }(o, e)
    })), i = u(a, (function (n) {
        return function (e, n) {
            var t = new Promise((function (t) {
                var r = Date.now();
                c(e.bind(null, n), (function () {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    var o = Date.now() - r;
                    if (!e[0]) return t((function () {
                        return {error: e[1], duration: o}
                    }));
                    var a = e[1];
                    if (k(a)) return t((function () {
                        return {value: a, duration: o}
                    }));
                    t((function () {
                        return new Promise((function (e) {
                            var n = Date.now();
                            c(a, (function () {
                                for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                var a = o + Date.now() - n;
                                if (!t[0]) return e({error: t[1], duration: a});
                                e({value: t[1], duration: a})
                            }))
                        }))
                    }))
                }))
            }));
            return l(t), function () {
                return t.then((function (e) {
                    return e()
                }))
            }
        }(e[n], r)
    }));
    return l(i), function () {
        return n(this, void 0, void 0, (function () {
            var e, n, r, o;
            return t(this, (function (t) {
                switch (t.label) {
                    case 0:
                        return [4, i];
                    case 1:
                        return [4, u(t.sent(), (function (e) {
                            var n = e();
                            return l(n), n
                        }))];
                    case 2:
                        return e = t.sent(), [4, Promise.all(e)];
                    case 3:
                        for (n = t.sent(), r = {}, o = 0; o < a.length; ++o) r[a[o]] = n[o];
                        return [2, r]
                }
            }))
        }))
    }
}

function S(e, n) {
    var t = function (e) {
        return k(e) ? n(e) : function () {
            var t = e();
            return i(t) ? t.then(n) : n(t)
        }
    };
    return function (n) {
        var r = e(n);
        return i(r) ? r.then(t) : t(r)
    }
}

function W() {
    var e = window, n = navigator;
    return w(["MSCSSMatrix" in e, "msSetImmediate" in e, "msIndexedDB" in e, "msMaxTouchPoints" in n, "msPointerEnabled" in n]) >= 4
}

function Z() {
    var e = window, n = navigator;
    return w(["msWriteProfilerMark" in e, "MSStream" in e, "msLaunchUri" in n, "msSaveBlob" in n]) >= 3 && !W()
}

function x() {
    var e = window, n = navigator;
    return w(["webkitPersistentStorage" in n, "webkitTemporaryStorage" in n, 0 === n.vendor.indexOf("Google"), "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5
}

function C() {
    var e = window, n = navigator;
    return w(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, 0 === n.vendor.indexOf("Apple"), "getStorageUpdates" in n, "WebKitMediaKeys" in e]) >= 4
}

function M() {
    var e = window;
    return w(["safari" in e, !("ongestureend" in e), !("TouchEvent" in e), !("orientation" in e), "HTMLElement" in e && !("autocapitalize" in HTMLElement.prototype), "Document" in e && "pointerLockElement" in Document.prototype]) >= 4
}

function A() {
    var e, n, t = window;
    return w(["buildID" in navigator, "MozAppearance" in (null !== (n = null === (e = document.documentElement) || void 0 === e ? void 0 : e.style) && void 0 !== n ? n : {}), "onmozfullscreenchange" in t, "mozInnerScreenX" in t, "CSSMozDocumentRule" in t, "CanvasCaptureMediaStream" in t]) >= 4
}

function R() {
    var e = document;
    return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null
}

function G() {
    var e = x(), n = A();
    if (!e && !n) return !1;
    var t = window;
    return w(["onorientationchange" in t, "orientation" in t, e && !("SharedWorker" in t), n && /android/i.test(navigator.appVersion)]) >= 2
}

function F(e) {
    var n = new Error(e);
    return n.name = e, n
}

function I(e, r, a) {
    var i, c, u;
    return void 0 === a && (a = 50), n(this, void 0, void 0, (function () {
        var n, l;
        return t(this, (function (t) {
            switch (t.label) {
                case 0:
                    n = document, t.label = 1;
                case 1:
                    return n.body ? [3, 3] : [4, o(a)];
                case 2:
                    return t.sent(), [3, 1];
                case 3:
                    l = n.createElement("iframe"), t.label = 4;
                case 4:
                    return t.trys.push([4, , 10, 11]), [4, new Promise((function (e, t) {
                        var o = !1, a = function () {
                            o = !0, e()
                        };
                        l.onload = a, l.onerror = function (e) {
                            o = !0, t(e)
                        };
                        var i = l.style;
                        i.setProperty("display", "block", "important"), i.position = "absolute", i.top = "0", i.left = "0", i.visibility = "hidden", r && "srcdoc" in l ? l.srcdoc = r : l.src = "about:blank", n.body.appendChild(l);
                        var c = function () {
                            var e, n;
                            o || ("complete" === (null === (n = null === (e = l.contentWindow) || void 0 === e ? void 0 : e.document) || void 0 === n ? void 0 : n.readyState) ? a() : setTimeout(c, 10))
                        };
                        c()
                    }))];
                case 5:
                    t.sent(), t.label = 6;
                case 6:
                    return (null === (c = null === (i = l.contentWindow) || void 0 === i ? void 0 : i.document) || void 0 === c ? void 0 : c.body) ? [3, 8] : [4, o(a)];
                case 7:
                    return t.sent(), [3, 6];
                case 8:
                    return [4, e(l, l.contentWindow)];
                case 9:
                    return [2, t.sent()];
                case 10:
                    return null === (u = l.parentNode) || void 0 === u || u.removeChild(l), [7];
                case 11:
                    return [2]
            }
        }))
    }))
}

function Y(e) {
    for (var n = function (e) {
        for (var n, t, r = "Unexpected syntax '".concat(e, "'"), o = /^\s*([a-z-]*)(.*)$/i.exec(e), a = o[1] || void 0, i = {}, c = /([.:#][\w-]+|\[.+?\])/gi, u = function (e, n) {
            i[e] = i[e] || [], i[e].push(n)
        }; ;) {
            var l = c.exec(o[2]);
            if (!l) break;
            var s = l[0];
            switch (s[0]) {
                case ".":
                    u("class", s.slice(1));
                    break;
                case "#":
                    u("id", s.slice(1));
                    break;
                case "[":
                    var d = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(s);
                    if (!d) throw new Error(r);
                    u(d[1], null !== (t = null !== (n = d[4]) && void 0 !== n ? n : d[5]) && void 0 !== t ? t : "");
                    break;
                default:
                    throw new Error(r)
            }
        }
        return [a, i]
    }(e), t = n[0], r = n[1], o = document.createElement(null != t ? t : "div"), a = 0, i = Object.keys(r); a < i.length; a++) {
        var c = i[a], u = r[c].join(" ");
        "style" === c ? X(o.style, u) : o.setAttribute(c, u)
    }
    return o
}

function X(e, n) {
    for (var t = 0, r = n.split(";"); t < r.length; t++) {
        var o = r[t], a = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(o);
        if (a) {
            var i = a[1], c = a[2], u = a[4];
            e.setProperty(i, c, u || "")
        }
    }
}

var j = ["monospace", "sans-serif", "serif"],
    P = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];

function E(e) {
    return e.toDataURL()
}

var H, N;

function J() {
    var e = this;
    return function () {
        if (void 0 === N) {
            var e = function () {
                var n = D();
                T(n) ? N = setTimeout(e, 2500) : (H = n, N = void 0)
            };
            e()
        }
    }(), function () {
        return n(e, void 0, void 0, (function () {
            var e;
            return t(this, (function (n) {
                switch (n.label) {
                    case 0:
                        return T(e = D()) ? H ? [2, r([], H, !0)] : R() ? [4, (t = document, (t.exitFullscreen || t.msExitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen).call(t))] : [3, 2] : [3, 2];
                    case 1:
                        n.sent(), e = D(), n.label = 2;
                    case 2:
                        return T(e) || (H = e), [2, e]
                }
                var t
            }))
        }))
    }
}

function D() {
    var e = screen;
    return [g(y(e.availTop), null), g(y(e.width) - y(e.availWidth) - g(y(e.availLeft), 0), null), g(y(e.height) - y(e.availHeight) - g(y(e.availTop), 0), null), g(y(e.availLeft), null)]
}

function T(e) {
    for (var n = 0; n < 4; ++n) if (e[n]) return !1;
    return !0
}

function _(e) {
    var r;
    return n(this, void 0, void 0, (function () {
        var n, i, c, u, l, s, d;
        return t(this, (function (t) {
            switch (t.label) {
                case 0:
                    for (n = document, i = n.createElement("div"), c = new Array(e.length), u = {}, z(i), d = 0; d < e.length; ++d) "DIALOG" === (l = Y(e[d])).tagName && l.show(), z(s = n.createElement("div")), s.appendChild(l), i.appendChild(s), c[d] = l;
                    t.label = 1;
                case 1:
                    return n.body ? [3, 3] : [4, o(50)];
                case 2:
                    return t.sent(), [3, 1];
                case 3:
                    return n.body.appendChild(i), [4, a()];
                case 4:
                    t.sent();
                    try {
                        for (d = 0; d < e.length; ++d) c[d].offsetParent || (u[e[d]] = !0)
                    } finally {
                        null === (r = i.parentNode) || void 0 === r || r.removeChild(i)
                    }
                    return [2, u]
            }
        }))
    }))
}

function z(e) {
    e.style.setProperty("visibility", "hidden", "important"), e.style.setProperty("display", "block", "important")
}

function B(e) {
    return matchMedia("(inverted-colors: ".concat(e, ")")).matches
}

function O(e) {
    return matchMedia("(forced-colors: ".concat(e, ")")).matches
}

function U(e) {
    return matchMedia("(prefers-contrast: ".concat(e, ")")).matches
}

function Q(e) {
    return matchMedia("(prefers-reduced-motion: ".concat(e, ")")).matches
}

function K(e) {
    return matchMedia("(dynamic-range: ".concat(e, ")")).matches
}

var q = Math, $ = function () {
    return 0
};
var ee = {
    default: [],
    apple: [{font: "-apple-system-body"}],
    serif: [{fontFamily: "serif"}],
    sans: [{fontFamily: "sans-serif"}],
    mono: [{fontFamily: "monospace"}],
    min: [{fontSize: "1px"}],
    system: [{fontFamily: "system-ui"}]
};

function ne(e) {
    if (e instanceof Error) {
        if ("InvalidAccessError" === e.name) {
            if (/\bfrom\b.*\binsecure\b/i.test(e.message)) return -2;
            if (/\bdifferent\b.*\borigin\b.*top.level\b.*\bframe\b/i.test(e.message)) return -3
        }
        if ("SecurityError" === e.name && /\bthird.party iframes?.*\bnot.allowed\b/i.test(e.message)) return -3
    }
    throw e
}

var te = new Set([10752, 2849, 2884, 2885, 2886, 2928, 2929, 2930, 2931, 2932, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2978, 3024, 3042, 3088, 3089, 3106, 3107, 32773, 32777, 32777, 32823, 32824, 32936, 32937, 32938, 32939, 32968, 32969, 32970, 32971, 3317, 33170, 3333, 3379, 3386, 33901, 33902, 34016, 34024, 34076, 3408, 3410, 3411, 3412, 3413, 3414, 3415, 34467, 34816, 34817, 34818, 34819, 34877, 34921, 34930, 35660, 35661, 35724, 35738, 35739, 36003, 36004, 36005, 36347, 36348, 36349, 37440, 37441, 37443, 7936, 7937, 7938]),
    re = new Set([34047, 35723, 36063, 34852, 34853, 34854, 34229, 36392, 36795, 38449]),
    oe = ["FRAGMENT_SHADER", "VERTEX_SHADER"],
    ae = ["LOW_FLOAT", "MEDIUM_FLOAT", "HIGH_FLOAT", "LOW_INT", "MEDIUM_INT", "HIGH_INT"];

function ie(e) {
    if (e.webgl) return e.webgl.context;
    var n, t = document.createElement("canvas");
    t.addEventListener("webglCreateContextError", (function () {
        return n = void 0
    }));
    for (var r = 0, o = ["webgl", "experimental-webgl"]; r < o.length; r++) {
        var a = o[r];
        try {
            n = t.getContext(a)
        } catch (i) {
        }
        if (n) break
    }
    return e.webgl = {context: n}, n
}

function ce(e, n, t) {
    var r = e.getShaderPrecisionFormat(e[n], e[t]);
    return r ? [r.rangeMin, r.rangeMax, r.precision] : []
}

function ue(e) {
    return Object.keys(e.__proto__).filter(le)
}

function le(e) {
    return "string" == typeof e && !e.match(/[^A-Z0-9_x]/)
}

function se() {
    return A()
}

function de(e) {
    return "function" == typeof e.getParameter
}

var fe = {
    fonts: function () {
        var e = this;
        return I((function (r, o) {
            var i = o.document;
            return n(e, void 0, void 0, (function () {
                var e, n, r, o, c, u, l, s, d, f, m;
                return t(this, (function (t) {
                    switch (t.label) {
                        case 0:
                            return (e = i.body).style.fontSize = "48px", (n = i.createElement("div")).style.setProperty("visibility", "hidden", "important"), r = {}, o = {}, c = function (e) {
                                var t = i.createElement("span"), r = t.style;
                                return r.position = "absolute", r.top = "0", r.left = "0", r.fontFamily = e, t.textContent = "mmMwWLliI0O&1", n.appendChild(t), t
                            }, u = function (e, n) {
                                return c("'".concat(e, "',").concat(n))
                            }, l = function () {
                                for (var e = {}, n = function (n) {
                                    e[n] = j.map((function (e) {
                                        return u(n, e)
                                    }))
                                }, t = 0, r = P; t < r.length; t++) {
                                    n(r[t])
                                }
                                return e
                            }, s = function (e) {
                                return j.some((function (n, t) {
                                    return e[t].offsetWidth !== r[n] || e[t].offsetHeight !== o[n]
                                }))
                            }, d = function () {
                                return j.map(c)
                            }(), f = l(), e.appendChild(n), [4, a()];
                        case 1:
                            for (t.sent(), m = 0; m < j.length; m++) r[j[m]] = d[m].offsetWidth, o[j[m]] = d[m].offsetHeight;
                            return [2, P.filter((function (e) {
                                return s(f[e])
                            }))]
                    }
                }))
            }))
        }))
    }, domBlockers: function (e) {
        var r = (void 0 === e ? {} : e).debug;
        return n(this, void 0, void 0, (function () {
            var e, n, o, a, i;
            return t(this, (function (t) {
                switch (t.label) {
                    case 0:
                        return C() || G() ? (c = atob, e = {
                            abpIndo: ["#Iklan-Melayang", "#Kolom-Iklan-728", "#SidebarIklan-wrapper", '[title="ALIENBOLA" i]', c("I0JveC1CYW5uZXItYWRz")],
                            abpvn: [".quangcao", "#mobileCatfish", c("LmNsb3NlLWFkcw=="), '[id^="bn_bottom_fixed_"]', "#pmadv"],
                            adBlockFinland: [".mainostila", c("LnNwb25zb3JpdA=="), ".ylamainos", c("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"), c("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],
                            adBlockPersian: ["#navbar_notice_50", ".kadr", 'TABLE[width="140px"]', "#divAgahi", c("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],
                            adBlockWarningRemoval: ["#adblock-honeypot", ".adblocker-root", ".wp_adblock_detect", c("LmhlYWRlci1ibG9ja2VkLWFk"), c("I2FkX2Jsb2NrZXI=")],
                            adGuardAnnoyances: [".hs-sosyal", "#cookieconsentdiv", 'div[class^="app_gdpr"]', ".as-oil", '[data-cypress="soft-push-notification-modal"]'],
                            adGuardBase: [".BetterJsPopOverlay", c("I2FkXzMwMFgyNTA="), c("I2Jhbm5lcmZsb2F0MjI="), c("I2NhbXBhaWduLWJhbm5lcg=="), c("I0FkLUNvbnRlbnQ=")],
                            adGuardChinese: [c("LlppX2FkX2FfSA=="), c("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"), "#widget-quan", c("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"), c("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")],
                            adGuardFrench: ["#pavePub", c("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"), ".mobile_adhesion", ".widgetadv", c("LmFkc19iYW4=")],
                            adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
                            adGuardJapanese: ["#kauli_yad_1", c("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="), c("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="), c("LmFkZ29vZ2xl"), c("Ll9faXNib29zdFJldHVybkFk")],
                            adGuardMobile: [c("YW1wLWF1dG8tYWRz"), c("LmFtcF9hZA=="), 'amp-embed[type="24smi"]', "#mgid_iframe1", c("I2FkX2ludmlld19hcmVh")],
                            adGuardRussian: [c("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="), c("LnJlY2xhbWE="), 'div[id^="smi2adblock"]', c("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"), "#psyduckpockeball"],
                            adGuardSocial: [c("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="), c("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="), ".etsy-tweet", "#inlineShare", ".popup-social"],
                            adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", ".cnt-publi"],
                            adGuardTrackingProtection: ["#qoo-counter", c("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="), c("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="), c("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="), "#top100counter"],
                            adGuardTurkish: ["#backkapat", c("I3Jla2xhbWk="), c("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="), c("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"), c("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],
                            bulgarian: [c("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"],
                            easyList: [".yb-floorad", c("LndpZGdldF9wb19hZHNfd2lkZ2V0"), c("LnRyYWZmaWNqdW5reS1hZA=="), ".textad_headline", c("LnNwb25zb3JlZC10ZXh0LWxpbmtz")],
                            easyListChina: [c("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="), c("LmZyb250cGFnZUFkdk0="), "#taotaole", "#aafoot.top_box", ".cfa_popup"],
                            easyListCookie: [".ezmob-footer", ".cc-CookieWarning", "[data-cookie-number]", c("LmF3LWNvb2tpZS1iYW5uZXI="), ".sygnal24-gdpr-modal-wrap"],
                            easyListCzechSlovak: ["#onlajny-stickers", c("I3Jla2xhbW5pLWJveA=="), c("LnJla2xhbWEtbWVnYWJvYXJk"), ".sklik", c("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],
                            easyListDutch: [c("I2FkdmVydGVudGll"), c("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="), ".adstekst", c("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="), "#semilo-lrectangle"],
                            easyListGermany: ["#SSpotIMPopSlider", c("LnNwb25zb3JsaW5rZ3J1ZW4="), c("I3dlcmJ1bmdza3k="), c("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"), c("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")],
                            easyListItaly: [c("LmJveF9hZHZfYW5udW5jaQ=="), ".sb-box-pubbliredazionale", c("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"), c("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"), c("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],
                            easyListLithuania: [c("LnJla2xhbW9zX3RhcnBhcw=="), c("LnJla2xhbW9zX251b3JvZG9z"), c("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"), c("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"), c("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],
                            estonian: [c("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
                            fanboyAnnoyances: ["#ac-lre-player", ".navigate-to-top", "#subscribe_popup", ".newsletter_holder", "#back-top"],
                            fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
                            fanboyEnhancedTrackers: [".open.pushModal", "#issuem-leaky-paywall-articles-zero-remaining-nag", "#sovrn_container", 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', ".BlockNag__Card"],
                            fanboySocial: ["#FollowUs", "#meteored_share", "#social_follow", ".article-sharer", ".community__social-desc"],
                            frellwitSwedish: [c("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="), c("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="), "article.category-samarbete", c("ZGl2LmhvbGlkQWRz"), "ul.adsmodern"],
                            greekAdBlock: [c("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"), c("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="), c("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"), "DIV.agores300", "TABLE.advright"],
                            hungarian: ["#cemp_doboz", ".optimonk-iframe-container", c("LmFkX19tYWlu"), c("W2NsYXNzKj0iR29vZ2xlQWRzIl0="), "#hirdetesek_box"],
                            iDontCareAboutCookies: ['.alert-info[data-block-track*="CookieNotice"]', ".ModuleTemplateCookieIndicator", ".o--cookies--container", "#cookies-policy-sticky", "#stickyCookieBar"],
                            icelandicAbp: [c("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
                            latvian: [c("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="), c("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],
                            listKr: [c("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="), c("I2xpdmVyZUFkV3JhcHBlcg=="), c("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="), c("aW5zLmZhc3R2aWV3LWFk"), ".revenue_unit_item.dable"],
                            listeAr: [c("LmdlbWluaUxCMUFk"), ".right-and-left-sponsers", c("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="), c("YVtocmVmKj0iYm9vcmFxLm9yZyJd"), c("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],
                            listeFr: [c("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="), c("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="), c("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="), ".site-pub-interstitiel", 'div[id^="crt-"][data-criteo-id]'],
                            officialPolish: ["#ceneo-placeholder-ceneo-12", c("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"), c("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="), c("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="), c("ZGl2I3NrYXBpZWNfYWQ=")],
                            ro: [c("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"), c("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"), c("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="), c("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"), 'a[href^="/url/"]'],
                            ruAd: [c("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"), c("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="), c("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="), "#pgeldiz", ".yandex-rtb-block"],
                            thaiAds: ["a[href*=macau-uta-popup]", c("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="), c("LmFkczMwMHM="), ".bumq", ".img-kosana"],
                            webAnnoyancesUltralist: ["#mod-social-share-2", "#social-tools", c("LmN0cGwtZnVsbGJhbm5lcg=="), ".zergnet-recommend", ".yt.btn-link.btn-md.btn"]
                        }, n = Object.keys(e), [4, _((i = []).concat.apply(i, n.map((function (n) {
                            return e[n]
                        }))))]) : [2, void 0];
                    case 1:
                        return o = t.sent(), r && function (e, n) {
                            for (var t = "DOM blockers debug:\n```", r = 0, o = Object.keys(e); r < o.length; r++) {
                                var a = o[r];
                                t += "\n".concat(a, ":");
                                for (var i = 0, c = e[a]; i < c.length; i++) {
                                    var u = c[i];
                                    t += "\n  ".concat(n[u] ? "🚫" : "➡️", " ").concat(u)
                                }
                            }
                            console.log("".concat(t, "\n```"))
                        }(e, o), (a = n.filter((function (n) {
                            var t = e[n];
                            return w(t.map((function (e) {
                                return o[e]
                            }))) > .6 * t.length
                        }))).sort(), [2, a]
                }
                var c
            }))
        }))
    }, fontPreferences: function () {
        return function (e, n) {
            void 0 === n && (n = 4e3);
            return I((function (t, o) {
                var a = o.document, i = a.body, c = i.style;
                c.width = "".concat(n, "px"), c.webkitTextSizeAdjust = c.textSizeAdjust = "none", x() ? i.style.zoom = "".concat(1 / o.devicePixelRatio) : C() && (i.style.zoom = "reset");
                var u = a.createElement("div");
                return u.textContent = r([], Array(n / 20 << 0), !0).map((function () {
                    return "word"
                })).join(" "), i.appendChild(u), e(a, i)
            }), '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')
        }((function (e, n) {
            for (var t = {}, r = {}, o = 0, a = Object.keys(ee); o < a.length; o++) {
                var i = a[o], c = ee[i], u = c[0], l = void 0 === u ? {} : u, s = c[1],
                    d = void 0 === s ? "mmMwWLliI0fiflO&1" : s, f = e.createElement("span");
                f.textContent = d, f.style.whiteSpace = "nowrap";
                for (var m = 0, v = Object.keys(l); m < v.length; m++) {
                    var h = v[m], p = l[h];
                    void 0 !== p && (f.style[h] = p)
                }
                t[i] = f, n.appendChild(e.createElement("br")), n.appendChild(f)
            }
            for (var b = 0, y = Object.keys(ee); b < y.length; b++) {
                r[i = y[b]] = t[i].getBoundingClientRect().width
            }
            return r
        }))
    }, audio: function () {
        var e = window, n = e.OfflineAudioContext || e.webkitOfflineAudioContext;
        if (!n) return -2;
        if (C() && !M() && !function () {
            var e = window;
            return w(["DOMRectList" in e, "RTCPeerConnectionIceEvent" in e, "SVGGeometryElement" in e, "ontransitioncancel" in e]) >= 3
        }()) return -1;
        var t = new n(1, 5e3, 44100), r = t.createOscillator();
        r.type = "triangle", r.frequency.value = 1e4;
        var o = t.createDynamicsCompressor();
        o.threshold.value = -50, o.knee.value = 40, o.ratio.value = 12, o.attack.value = 0, o.release.value = .25, r.connect(o), o.connect(t.destination), r.start(0);
        var a = function (e) {
            var n = 3, t = 500, r = 500, o = 5e3, a = function () {
            };
            return [new Promise((function (c, u) {
                var s = !1, d = 0, f = 0;
                e.oncomplete = function (e) {
                    return c(e.renderedBuffer)
                };
                var m = function () {
                    setTimeout((function () {
                        return u(F("timeout"))
                    }), Math.min(r, f + o - Date.now()))
                }, v = function () {
                    try {
                        var r = e.startRendering();
                        switch (i(r) && l(r), e.state) {
                            case "running":
                                f = Date.now(), s && m();
                                break;
                            case "suspended":
                                document.hidden || d++, s && d >= n ? u(F("suspended")) : setTimeout(v, t)
                        }
                    } catch (o) {
                        u(o)
                    }
                };
                v(), a = function () {
                    s || (s = !0, f > 0 && m())
                }
            })), a]
        }(t), c = a[0], u = a[1], s = c.then((function (e) {
            return function (e) {
                for (var n = 0, t = 0; t < e.length; ++t) n += Math.abs(e[t]);
                return n
            }(e.getChannelData(0).subarray(4500))
        }), (function (e) {
            if ("timeout" === e.name || "suspended" === e.name) return -3;
            throw e
        }));
        return l(s), function () {
            return u(), s
        }
    }, screenFrame: function () {
        var e = this, r = J();
        return function () {
            return n(e, void 0, void 0, (function () {
                var e, n;
                return t(this, (function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, r()];
                        case 1:
                            return e = t.sent(), [2, [(n = function (e) {
                                return null === e ? null : L(e, 10)
                            })(e[0]), n(e[1]), n(e[2]), n(e[3])]]
                    }
                }))
            }))
        }
    }, canvas: function () {
        return n(this, void 0, void 0, (function () {
            var e, n, r, o, i, c, u, l;
            return t(this, (function (t) {
                switch (t.label) {
                    case 0:
                        return e = !1, o = function () {
                            var e = document.createElement("canvas");
                            return e.width = 1, e.height = 1, [e, e.getContext("2d")]
                        }(), i = o[0], c = o[1], function (e, n) {
                            return !(!n || !e.toDataURL)
                        }(i, c) ? [3, 1] : (n = r = "unsupported", [3, 5]);
                    case 1:
                        return e = function (e) {
                            return e.rect(0, 0, 10, 10), e.rect(2, 2, 6, 6), !e.isPointInPath(5, 5, "evenodd")
                        }(c), function (e, n) {
                            e.width = 240, e.height = 60, n.textBaseline = "alphabetic", n.fillStyle = "#f60", n.fillRect(100, 1, 62, 20), n.fillStyle = "#069", n.font = '11pt "Times New Roman"';
                            var t = "Cwm fjordbank gly ".concat(String.fromCharCode(55357, 56835));
                            n.fillText(t, 2, 15), n.fillStyle = "rgba(102, 204, 0, 0.2)", n.font = "18pt Arial", n.fillText(t, 4, 45)
                        }(i, c), [4, a()];
                    case 2:
                        return t.sent(), u = E(i), l = E(i), u === l ? [3, 3] : (n = r = "unstable", [3, 5]);
                    case 3:
                        return r = u, function (e, n) {
                            e.width = 122, e.height = 110, n.globalCompositeOperation = "multiply";
                            for (var t = 0, r = [["#f2f", 40, 40], ["#2ff", 80, 40], ["#ff2", 60, 80]]; t < r.length; t++) {
                                var o = r[t], a = o[0], i = o[1], c = o[2];
                                n.fillStyle = a, n.beginPath(), n.arc(i, c, 40, 0, 2 * Math.PI, !0), n.closePath(), n.fill()
                            }
                            n.fillStyle = "#f9c", n.arc(60, 60, 60, 0, 2 * Math.PI, !0), n.arc(60, 60, 20, 0, 2 * Math.PI, !0), n.fill("evenodd")
                        }(i, c), [4, a()];
                    case 4:
                        t.sent(), n = E(i), t.label = 5;
                    case 5:
                        return [2, {winding: e, geometry: n, text: r}]
                }
            }))
        }))
    }, osCpu: function () {
        return navigator.oscpu
    }, languages: function () {
        var e, n = navigator, t = [], r = n.language || n.userLanguage || n.browserLanguage || n.systemLanguage;
        if (void 0 !== r && t.push([r]), Array.isArray(n.languages)) x() && w([!("MediaSettingsRange" in (e = window)), "RTCEncodedAudioFrame" in e, "" + e.Intl == "[object Intl]", "" + e.Reflect == "[object Reflect]"]) >= 3 || t.push(n.languages); else if ("string" == typeof n.languages) {
            var o = n.languages;
            o && t.push(o.split(","))
        }
        return t
    }, colorDepth: function () {
        return window.screen.colorDepth
    }, deviceMemory: function () {
        return g(y(navigator.deviceMemory), void 0)
    }, screenResolution: function () {
        var e = screen, n = function (e) {
            return g(b(e), null)
        }, t = [n(e.width), n(e.height)];
        return t.sort().reverse(), t
    }, hardwareConcurrency: function () {
        return g(b(navigator.hardwareConcurrency), void 0)
    }, timezone: function () {
        var e, n = null === (e = window.Intl) || void 0 === e ? void 0 : e.DateTimeFormat;
        if (n) {
            var t = (new n).resolvedOptions().timeZone;
            if (t) return t
        }
        var r,
            o = (r = (new Date).getFullYear(), -Math.max(y(new Date(r, 0, 1).getTimezoneOffset()), y(new Date(r, 6, 1).getTimezoneOffset())));
        return "UTC".concat(o >= 0 ? "+" : "").concat(Math.abs(o))
    }, sessionStorage: function () {
        try {
            return !!window.sessionStorage
        } catch (e) {
            return !0
        }
    }, localStorage: function () {
        try {
            return !!window.localStorage
        } catch (e) {
            return !0
        }
    }, indexedDB: function () {
        if (!W() && !Z()) try {
            return !!window.indexedDB
        } catch (e) {
            return !0
        }
    }, openDatabase: function () {
        return !!window.openDatabase
    }, cpuClass: function () {
        return navigator.cpuClass
    }, platform: function () {
        var e = navigator.platform;
        return "MacIntel" === e && C() && !M() ? function () {
            if ("iPad" === navigator.platform) return !0;
            var e = screen, n = e.width / e.height;
            return w(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, n > .65 && n < 1.53]) >= 2
        }() ? "iPad" : "iPhone" : e
    }, plugins: function () {
        var e = navigator.plugins;
        if (e) {
            for (var n = [], t = 0; t < e.length; ++t) {
                var r = e[t];
                if (r) {
                    for (var o = [], a = 0; a < r.length; ++a) {
                        var i = r[a];
                        o.push({type: i.type, suffixes: i.suffixes})
                    }
                    n.push({name: r.name, description: r.description, mimeTypes: o})
                }
            }
            return n
        }
    }, touchSupport: function () {
        var e, n = navigator, t = 0;
        void 0 !== n.maxTouchPoints ? t = b(n.maxTouchPoints) : void 0 !== n.msMaxTouchPoints && (t = n.msMaxTouchPoints);
        try {
            document.createEvent("TouchEvent"), e = !0
        } catch (r) {
            e = !1
        }
        return {maxTouchPoints: t, touchEvent: e, touchStart: "ontouchstart" in window}
    }, vendor: function () {
        return navigator.vendor || ""
    }, vendorFlavors: function () {
        for (var e = [], n = 0, t = ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]; n < t.length; n++) {
            var r = t[n], o = window[r];
            o && "object" == typeof o && e.push(r)
        }
        return e.sort()
    }, cookiesEnabled: function () {
        var e = document;
        try {
            e.cookie = "cookietest=1; SameSite=Strict;";
            var n = -1 !== e.cookie.indexOf("cookietest=");
            return e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", n
        } catch (t) {
            return !1
        }
    }, colorGamut: function () {
        for (var e = 0, n = ["rec2020", "p3", "srgb"]; e < n.length; e++) {
            var t = n[e];
            if (matchMedia("(color-gamut: ".concat(t, ")")).matches) return t
        }
    }, invertedColors: function () {
        return !!B("inverted") || !B("none") && void 0
    }, forcedColors: function () {
        return !!O("active") || !O("none") && void 0
    }, monochrome: function () {
        if (matchMedia("(min-monochrome: 0)").matches) {
            for (var e = 0; e <= 100; ++e) if (matchMedia("(max-monochrome: ".concat(e, ")")).matches) return e;
            throw new Error("Too high value")
        }
    }, contrast: function () {
        return U("no-preference") ? 0 : U("high") || U("more") ? 1 : U("low") || U("less") ? -1 : U("forced") ? 10 : void 0
    }, reducedMotion: function () {
        return !!Q("reduce") || !Q("no-preference") && void 0
    }, hdr: function () {
        return !!K("high") || !K("standard") && void 0
    }, math: function () {
        var e, n = q.acos || $, t = q.acosh || $, r = q.asin || $, o = q.asinh || $, a = q.atanh || $, i = q.atan || $,
            c = q.sin || $, u = q.sinh || $, l = q.cos || $, s = q.cosh || $, d = q.tan || $, f = q.tanh || $,
            m = q.exp || $, v = q.expm1 || $, h = q.log1p || $;
        return {
            acos: n(.12312423423423424),
            acosh: t(1e308),
            acoshPf: (e = 1e154, q.log(e + q.sqrt(e * e - 1))),
            asin: r(.12312423423423424),
            asinh: o(1),
            asinhPf: function (e) {
                return q.log(e + q.sqrt(e * e + 1))
            }(1),
            atanh: a(.5),
            atanhPf: function (e) {
                return q.log((1 + e) / (1 - e)) / 2
            }(.5),
            atan: i(.5),
            sin: c(-1e300),
            sinh: u(1),
            sinhPf: function (e) {
                return q.exp(e) - 1 / q.exp(e) / 2
            }(1),
            cos: l(10.000000000123),
            cosh: s(1),
            coshPf: function (e) {
                return (q.exp(e) + 1 / q.exp(e)) / 2
            }(1),
            tan: d(-1e300),
            tanh: f(1),
            tanhPf: function (e) {
                return (q.exp(2 * e) - 1) / (q.exp(2 * e) + 1)
            }(1),
            exp: m(1),
            expm1: v(1),
            expm1Pf: function (e) {
                return q.exp(e) - 1
            }(1),
            log1p: h(10),
            log1pPf: function (e) {
                return q.log(1 + e)
            }(10),
            powPI: function (e) {
                return q.pow(q.PI, e)
            }(-100)
        }
    }, pdfViewerEnabled: function () {
        return navigator.pdfViewerEnabled
    }, architecture: function () {
        var e = new Float32Array(1), n = new Uint8Array(e.buffer);
        return e[0] = 1 / 0, e[0] = e[0] - e[0], n[3]
    }, applePay: function () {
        var e = window.ApplePaySession;
        if ("function" != typeof (null == e ? void 0 : e.canMakePayments)) return -1;
        try {
            return e.canMakePayments() ? 1 : 0
        } catch (n) {
            return ne(n)
        }
    }, privateClickMeasurement: function () {
        var e, n = document.createElement("a"),
            t = null !== (e = n.attributionSourceId) && void 0 !== e ? e : n.attributionsourceid;
        return void 0 === t ? void 0 : String(t)
    }, webGlBasics: function (e) {
        var n, t, r, o, a, i, c = ie(e.cache);
        if (!c) return -1;
        if (!de(c)) return -2;
        var u = se() ? null : c.getExtension("WEBGL_debug_renderer_info");
        return {
            version: (null === (n = c.getParameter(c.VERSION)) || void 0 === n ? void 0 : n.toString()) || "",
            vendor: (null === (t = c.getParameter(c.VENDOR)) || void 0 === t ? void 0 : t.toString()) || "",
            vendorUnmasked: u ? null === (r = c.getParameter(u.UNMASKED_VENDOR_WEBGL)) || void 0 === r ? void 0 : r.toString() : "",
            renderer: (null === (o = c.getParameter(c.RENDERER)) || void 0 === o ? void 0 : o.toString()) || "",
            rendererUnmasked: u ? null === (a = c.getParameter(u.UNMASKED_RENDERER_WEBGL)) || void 0 === a ? void 0 : a.toString() : "",
            shadingLanguageVersion: (null === (i = c.getParameter(c.SHADING_LANGUAGE_VERSION)) || void 0 === i ? void 0 : i.toString()) || ""
        }
    }, webGlExtensions: function (e) {
        var n = ie(e.cache);
        if (!n) return -1;
        if (!de(n)) return -2;
        var t = n.getSupportedExtensions(), r = n.getContextAttributes(), o = [], a = [], i = [], c = [];
        if (r) for (var u = 0, l = Object.keys(r); u < l.length; u++) {
            var s = l[u];
            o.push("".concat(s, "=").concat(r[s]))
        }
        for (var d = 0, f = ue(n); d < f.length; d++) {
            var m = n[w = f[d]];
            a.push("".concat(w, "=").concat(m).concat(te.has(m) ? "=".concat(n.getParameter(m)) : ""))
        }
        if (t) for (var v = 0, h = t; v < h.length; v++) {
            var p = h[v];
            if ("WEBGL_debug_renderer_info" !== p || !se()) {
                var b = n.getExtension(p);
                if (b) for (var y = 0, g = ue(b); y < g.length; y++) {
                    var w;
                    m = b[w = g[y]];
                    i.push("".concat(w, "=").concat(m).concat(re.has(m) ? "=".concat(n.getParameter(m)) : ""))
                }
            }
        }
        for (var L = 0, k = oe; L < k.length; L++) for (var V = k[L], S = 0, W = ae; S < W.length; S++) {
            var Z = W[S], x = ce(n, V, Z);
            c.push("".concat(V, ".").concat(Z, "=").concat(x.join(",")))
        }
        return i.sort(), a.sort(), {
            contextAttributes: o,
            parameters: a,
            shaderPrecisions: c,
            extensions: t,
            extensionParameters: i
        }
    }
};

function me(e) {
    var n = function (e) {
        if (G()) return .4;
        if (C()) return M() ? .5 : .3;
        var n = "value" in e.platform ? e.platform.value : "";
        if (/^Win/.test(n)) return .6;
        if (/^Mac/.test(n)) return .5;
        return .7
    }(e), t = function (e) {
        return L(.99 + .01 * e, 1e-4)
    }(n);
    return {score: n, comment: "$ if upgrade to Pro: https://fpjs.dev/pro".replace(/\$/g, "".concat(t))}
}

function ve(n) {
    return JSON.stringify(n, (function (n, t) {
        return t instanceof Error ? e({
            name: (r = t).name,
            message: r.message,
            stack: null === (o = r.stack) || void 0 === o ? void 0 : o.split("\n")
        }, r) : t;
        var r, o
    }), 2)
}

function he(e) {
    return p(function (e) {
        for (var n = "", t = 0, r = Object.keys(e).sort(); t < r.length; t++) {
            var o = r[t], a = e[o], i = "error" in a ? "error" : JSON.stringify(a.value);
            n += "".concat(n ? "|" : "").concat(o.replace(/([:|\\])/g, "\\$1"), ":").concat(i)
        }
        return n
    }(e))
}

function pe(e) {
    return void 0 === e && (e = 50), function (e, n) {
        void 0 === n && (n = 1 / 0);
        var t = window.requestIdleCallback;
        return t ? new Promise((function (e) {
            return t.call(window, (function () {
                return e()
            }), {timeout: n})
        })) : o(Math.min(e, n))
    }(e, 2 * e)
}

function be(e, r) {
    var o = Date.now();
    return {
        get: function (a) {
            return n(this, void 0, void 0, (function () {
                var n, i, c;
                return t(this, (function (t) {
                    switch (t.label) {
                        case 0:
                            return n = Date.now(), [4, e()];
                        case 1:
                            return i = t.sent(), c = function (e) {
                                var n;
                                return {
                                    get visitorId() {
                                        return void 0 === n && (n = he(this.components)), n
                                    }, set visitorId(e) {
                                        n = e
                                    }, confidence: me(e), components: e, version: "4.0.0"
                                }
                            }(i), (r || (null == a ? void 0 : a.debug)) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(c.version, "\nuserAgent: ").concat(navigator.userAgent, "\ntimeBetweenLoadAndGet: ").concat(n - o, "\nvisitorId: ").concat(c.visitorId, "\ncomponents: ").concat(ve(i), "\n```")), [2, c]
                    }
                }))
            }))
        }
    }
}

function ye(e) {
    var r = void 0 === e ? {} : e, o = r.delayFallback, a = r.debug;
    return r.monitoring, n(this, void 0, void 0, (function () {
        return t(this, (function (e) {
            switch (e.label) {
                case 0:
                    return [4, pe(o)];
                case 1:
                    return e.sent(), [2, be(V(fe, {cache: {}, debug: a}, []), a)]
            }
        }))
    }))
}

var ge = {load: ye, hashComponents: he, componentsToDebugString: ve}, we = p;
export {
    ve as componentsToDebugString,
    ge as default,
    R as getFullscreenElement,
    J as getScreenFrame,
    ie as getWebGLContext,
    ne as handleApplePayError,
    he as hashComponents,
    G as isAndroid,
    x as isChromium,
    M as isDesktopSafari,
    Z as isEdgeHTML,
    A as isGecko,
    W as isTrident,
    C as isWebKit,
    ye as load,
    V as loadSources,
    we as murmurX64Hash128,
    pe as prepareForSources,
    fe as sources,
    S as transformSource,
    I as withIframe
};