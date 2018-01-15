console.log('foundation.js file');
! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length,
            n = ie.type(e);
        return "function" !== n && !ie.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e, t, n) {
        if (ie.isFunction(t)) return ie.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return ie.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (ge.test(t)) return ie.filter(t, e, n);
            t = ie.filter(t, e)
        }
        return ie.grep(e, function(e) {
            return Z.call(t, e) > -1 !== n
        })
    }

    function o(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function i(e) {
        var t = {};
        return ie.each(e.match(we) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        Q.removeEventListener("DOMContentLoaded", a), e.removeEventListener("load", a), ie.ready()
    }

    function s() {
        this.expando = ie.expando + s.uid++
    }

    function l(e, t, n) {
        var r;
        if (n === undefined && 1 === e.nodeType)
            if (r = "data-" + t.replace(Me, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ee.test(n) ? ie.parseJSON(n) : n)
                } catch (e) {}
                Oe.set(e, t, n)
            } else n = undefined;
        return n
    }

    function c(e, t, n, r) {
        var o, i = 1,
            a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return ie.css(e, t, "")
            },
            l = s(),
            c = n && n[3] || (ie.cssNumber[t] ? "" : "px"),
            u = (ie.cssNumber[t] || "px" !== c && +l) && je.exec(ie.css(e, t));
        if (u && u[3] !== c) {
            c = c || u[3], n = n || [], u = +l || 1;
            do {
                i = i || ".5", u /= i, ie.style(e, t, u + c)
            } while (i !== (i = s() / l) && 1 !== i && --a)
        }
        return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = u, r.end = o)), o
    }

    function u(e, t) {
        var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return t === undefined || t && ie.nodeName(e, t) ? ie.merge([e], n) : n
    }

    function d(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Se.set(e[n], "globalEval", !t || Se.get(t[n], "globalEval"))
    }

    function f(e, t, n, r, o) {
        for (var i, a, s, l, c, f, p = t.createDocumentFragment(), h = [], g = 0, m = e.length; g < m; g++)
            if ((i = e[g]) || 0 === i)
                if ("object" === ie.type(i)) ie.merge(h, i.nodeType ? [i] : i);
                else if (De.test(i)) {
            for (a = a || p.appendChild(t.createElement("div")), s = (Ae.exec(i) || ["", ""])[1].toLowerCase(), l = Le[s] || Le._default, a.innerHTML = l[1] + ie.htmlPrefilter(i) + l[2], f = l[0]; f--;) a = a.lastChild;
            ie.merge(h, a.childNodes), a = p.firstChild, a.textContent = ""
        } else h.push(t.createTextNode(i));
        for (p.textContent = "", g = 0; i = h[g++];)
            if (r && ie.inArray(i, r) > -1) o && o.push(i);
            else if (c = ie.contains(i.ownerDocument, i), a = u(p.appendChild(i), "script"), c && d(a), n)
            for (f = 0; i = a[f++];) _e.test(i.type || "") && n.push(i);
        return p
    }

    function p() {
        return !0
    }

    function h() {
        return !1
    }

    function g() {
        try {
            return Q.activeElement
        } catch (e) {}
    }

    function m(e, t, n, r, o, i) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = undefined);
            for (s in t) m(e, s, n, r, t[s], i);
            return e
        }
        if (null == r && null == o ? (o = n, r = n = undefined) : null == o && ("string" == typeof n ? (o = r, r = undefined) : (o = r, r = n, n = undefined)), !1 === o) o = h;
        else if (!o) return e;
        return 1 === i && (a = o, o = function(e) {
            return ie().off(e), a.apply(this, arguments)
        }, o.guid = a.guid || (a.guid = ie.guid++)), e.each(function() {
            ie.event.add(this, t, o, r, n)
        })
    }

    function v(e, t) {
        return ie.nodeName(e, "table") && ie.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function y(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function b(e) {
        var t = Be.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function w(e, t) {
        var n, r, o, i, a, s, l, c;
        if (1 === t.nodeType) {
            if (Se.hasData(e) && (i = Se.access(e), a = Se.set(t, i), c = i.events)) {
                delete a.handle, a.events = {};
                for (o in c)
                    for (n = 0, r = c[o].length; n < r; n++) ie.event.add(t, o, c[o][n])
            }
            Oe.hasData(e) && (s = Oe.access(e), l = ie.extend({}, s), Oe.set(t, l))
        }
    }

    function C(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function T(e, t, n, r) {
        t = J.apply([], t);
        var o, i, a, s, l, c, d = 0,
            p = e.length,
            h = p - 1,
            g = t[0],
            m = ie.isFunction(g);
        if (m || p > 1 && "string" == typeof g && !re.checkClone && Fe.test(g)) return e.each(function(o) {
            var i = e.eq(o);
            m && (t[0] = g.call(this, o, i.html())), T(i, t, n, r)
        });
        if (p && (o = f(t, e[0].ownerDocument, !1, e, r), i = o.firstChild, 1 === o.childNodes.length && (o = i), i || r)) {
            for (a = ie.map(u(o, "script"), y), s = a.length; d < p; d++) l = o, d !== h && (l = ie.clone(l, !0, !0), s && ie.merge(a, u(l, "script"))), n.call(e[d], l, d);
            if (s)
                for (c = a[a.length - 1].ownerDocument, ie.map(a, b), d = 0; d < s; d++) l = a[d], _e.test(l.type || "") && !Se.access(l, "globalEval") && ie.contains(c, l) && (l.src ? ie._evalUrl && ie._evalUrl(l.src) : ie.globalEval(l.textContent.replace(qe, "")))
        }
        return e
    }

    function x(e, t, n) {
        for (var r, o = t ? ie.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || ie.cleanData(u(r)), r.parentNode && (n && ie.contains(r.ownerDocument, r) && d(u(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function S(e, t) {
        var n = ie(t.createElement(e)).appendTo(t.body),
            r = ie.css(n[0], "display");
        return n.detach(), r
    }

    function O(e) {
        var t = Q,
            n = Ue[e];
        return n || (n = S(e, t), "none" !== n && n || (We = (We || ie("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = We[0].contentDocument, t.write(), t.close(), n = S(e, t), We.detach()), Ue[e] = n), n
    }

    function E(e, t, n) {
        var r, o, i, a, s = e.style;
        return n = n || Qe(e), a = n ? n.getPropertyValue(t) || n[t] : undefined, "" !== a && a !== undefined || ie.contains(e.ownerDocument, e) || (a = ie.style(e, t)), n && !re.pixelMarginRight() && Ke.test(a) && Ge.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i), a !== undefined ? a + "" : a
    }

    function M(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function k(e) {
        if (e in nt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = tt.length; n--;)
            if ((e = tt[n] + t) in nt) return e
    }

    function j(e, t, n) {
        var r = je.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function I(e, t, n, r, o) {
        for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; i < 4; i += 2) "margin" === n && (a += ie.css(e, n + Ie[i], !0, o)), r ? ("content" === n && (a -= ie.css(e, "padding" + Ie[i], !0, o)), "margin" !== n && (a -= ie.css(e, "border" + Ie[i] + "Width", !0, o))) : (a += ie.css(e, "padding" + Ie[i], !0, o), "padding" !== n && (a += ie.css(e, "border" + Ie[i] + "Width", !0, o)));
        return a
    }

    function N(e, t, n) {
        var r = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            i = Qe(e),
            a = "border-box" === ie.css(e, "boxSizing", !1, i);
        if (o <= 0 || null == o) {
            if (o = E(e, t, i), (o < 0 || null == o) && (o = e.style[t]), Ke.test(o)) return o;
            r = a && (re.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + I(e, t, n || (a ? "border" : "content"), r, i) + "px"
    }

    function P(e, t) {
        for (var n, r, o, i = [], a = 0, s = e.length; a < s; a++) r = e[a], r.style && (i[a] = Se.get(r, "olddisplay"), n = r.style.display, t ? (i[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ne(r) && (i[a] = Se.access(r, "olddisplay", O(r.nodeName)))) : (o = Ne(r), "none" === n && o || Se.set(r, "olddisplay", o ? n : ie.css(r, "display"))));
        for (a = 0; a < s; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? i[a] || "" : "none"));
        return e
    }

    function A(e, t, n, r, o) {
        return new A.prototype.init(e, t, n, r, o)
    }

    function _() {
        return e.setTimeout(function() {
            rt = undefined
        }), rt = ie.now()
    }

    function L(e, t) {
        var n, r = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) n = Ie[r], o["margin" + n] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function D(e, t, n) {
        for (var r, o = (z.tweeners[t] || []).concat(z.tweeners["*"]), i = 0, a = o.length; i < a; i++)
            if (r = o[i].call(n, t, e)) return r
    }

    function R(e, t, n) {
        var r, o, i, a, s, l, c, u = this,
            d = {},
            f = e.style,
            p = e.nodeType && Ne(e),
            h = Se.get(e, "fxshow");
        n.queue || (s = ie._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, u.always(function() {
            u.always(function() {
                s.unqueued--, ie.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = ie.css(e, "display"), "inline" === ("none" === c ? Se.get(e, "olddisplay") || O(e.nodeName) : c) && "none" === ie.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", u.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (o = t[r], it.exec(o)) {
                if (delete t[r], i = i || "toggle" === o, o === (p ? "hide" : "show")) {
                    if ("show" !== o || !h || h[r] === undefined) continue;
                    p = !0
                }
                d[r] = h && h[r] || ie.style(e, r)
            } else c = undefined;
        if (ie.isEmptyObject(d)) "inline" === ("none" === c ? O(e.nodeName) : c) && (f.display = c);
        else {
            h ? "hidden" in h && (p = h.hidden) : h = Se.access(e, "fxshow", {}), i && (h.hidden = !p), p ? ie(e).show() : u.done(function() {
                ie(e).hide()
            }), u.done(function() {
                var t;
                Se.remove(e, "fxshow");
                for (t in d) ie.style(e, t, d[t])
            });
            for (r in d) a = D(p ? h[r] : 0, r, u), r in h || (h[r] = a.start, p && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function V(e, t) {
        var n, r, o, i, a;
        for (n in e)
            if (r = ie.camelCase(n), o = t[r], i = e[n], ie.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (a = ie.cssHooks[r]) && "expand" in a) {
                i = a.expand(i), delete e[r];
                for (n in i) n in e || (e[n] = i[n], t[n] = o)
            } else t[r] = o
    }

    function z(e, t, n) {
        var r, o, i = 0,
            a = z.prefilters.length,
            s = ie.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var t = rt || _(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, i = 1 - r, a = 0, l = c.tweens.length; a < l; a++) c.tweens[a].run(i);
                return s.notifyWith(e, [c, i, n]), i < 1 && l ? n : (s.resolveWith(e, [c]), !1)
            },
            c = s.promise({
                elem: e,
                props: ie.extend({}, t),
                opts: ie.extend(!0, {
                    specialEasing: {},
                    easing: ie.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: rt || _(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = ie.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < r; n++) c.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (V(u, c.opts.specialEasing); i < a; i++)
            if (r = z.prefilters[i].call(c, e, u, c.opts)) return ie.isFunction(r.stop) && (ie._queueHooks(c.elem, c.opts.queue).stop = ie.proxy(r.stop, r)), r;
        return ie.map(u, D, c), ie.isFunction(c.opts.start) && c.opts.start.call(e, c), ie.fx.timer(ie.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function H(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function $(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, o = 0,
                i = t.toLowerCase().match(we) || [];
            if (ie.isFunction(n))
                for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function F(e, t, n, r) {
        function o(s) {
            var l;
            return i[s] = !0, ie.each(e[s] || [], function(e, s) {
                var c = s(t, n, r);
                return "string" != typeof c || a || i[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        var i = {},
            a = e === Ot;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }

    function B(e, t) {
        var n, r, o = ie.ajaxSettings.flatOptions || {};
        for (n in t) t[n] !== undefined && ((o[n] ? e : r || (r = {}))[n] = t[n]);
        return r && ie.extend(!0, e, r), e
    }

    function q(e, t, n) {
        for (var r, o, i, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (o in s)
                if (s[o] && s[o].test(r)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in n) i = l[0];
        else {
            for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    i = o;
                    break
                }
                a || (a = o)
            }
            i = i || a
        }
        if (i) return i !== l[0] && l.unshift(i), n[i]
    }

    function W(e, t, n, r) {
        var o, i, a, s, l, c = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
        for (i = u.shift(); i;)
            if (e.responseFields[i] && (n[e.responseFields[i]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = i, i = u.shift())
                if ("*" === i) i = l;
                else if ("*" !== l && l !== i) {
            if (!(a = c[l + " " + i] || c["* " + i]))
                for (o in c)
                    if (s = o.split(" "), s[1] === i && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                        !0 === a ? a = c[o] : !0 !== c[o] && (i = s[0], u.unshift(s[1]));
                        break
                    }
            if (!0 !== a)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: a ? e : "No conversion from " + l + " to " + i
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function U(e, t, n, r) {
        var o;
        if (ie.isArray(t)) ie.each(t, function(t, o) {
            n || jt.test(e) ? r(e, o) : U(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r)
        });
        else if (n || "object" !== ie.type(t)) r(e, t);
        else
            for (o in t) U(e + "[" + o + "]", t[o], n, r)
    }

    function G(e) {
        return ie.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var K = [],
        Q = e.document,
        X = K.slice,
        J = K.concat,
        Y = K.push,
        Z = K.indexOf,
        ee = {},
        te = ee.toString,
        ne = ee.hasOwnProperty,
        re = {},
        oe = "2.2.4",
        ie = function(e, t) {
            return new ie.fn.init(e, t)
        },
        ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        se = /^-ms-/,
        le = /-([\da-z])/gi,
        ce = function(e, t) {
            return t.toUpperCase()
        };
    ie.fn = ie.prototype = {
        jquery: oe,
        constructor: ie,
        selector: "",
        length: 0,
        toArray: function() {
            return X.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : X.call(this)
        },
        pushStack: function(e) {
            var t = ie.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return ie.each(this, e)
        },
        map: function(e) {
            return this.pushStack(ie.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(X.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: Y,
        sort: K.sort,
        splice: K.splice
    }, ie.extend = ie.fn.extend = function() {
        var e, t, n, r, o, i, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || ie.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], r = e[t], a !== r && (c && r && (ie.isPlainObject(r) || (o = ie.isArray(r))) ? (o ? (o = !1, i = n && ie.isArray(n) ? n : []) : i = n && ie.isPlainObject(n) ? n : {}, a[t] = ie.extend(c, i, r)) : r !== undefined && (a[t] = r));
        return a
    }, ie.extend({
        expando: "jQuery" + (oe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === ie.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !ie.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(e) {
            var t;
            if ("object" !== ie.type(e) || e.nodeType || ie.isWindow(e)) return !1;
            if (e.constructor && !ne.call(e, "constructor") && !ne.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (t in e);
            return t === undefined || ne.call(e, t)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            (e = ie.trim(e)) && (1 === e.indexOf("use strict") ? (t = Q.createElement("script"), t.text = e, Q.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(se, "ms-").replace(le, ce)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var r, o = 0;
            if (n(e))
                for (r = e.length; o < r && !1 !== t.call(e[o], o, e[o]); o++);
            else
                for (o in e)
                    if (!1 === t.call(e[o], o, e[o])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ae, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? ie.merge(r, "string" == typeof e ? [e] : e) : Y.call(r, e)), r
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : Z.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) !t(e[o], o) !== a && r.push(e[o]);
            return r
        },
        map: function(e, t, r) {
            var o, i, a = 0,
                s = [];
            if (n(e))
                for (o = e.length; a < o; a++) null != (i = t(e[a], a, r)) && s.push(i);
            else
                for (a in e) null != (i = t(e[a], a, r)) && s.push(i);
            return J.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, o;
            return "string" == typeof t && (n = e[t], t = e, e = n), ie.isFunction(e) ? (r = X.call(arguments, 2), o = function() {
                return e.apply(t || this, r.concat(X.call(arguments)))
            }, o.guid = e.guid = e.guid || ie.guid++, o) : undefined
        },
        now: Date.now,
        support: re
    }), "function" == typeof Symbol && (ie.fn[Symbol.iterator] = K[Symbol.iterator]), ie.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ee["[object " + t + "]"] = t.toLowerCase()
    });
    var ue = function(e) {
        function t(e, t, n, r) {
            var o, i, a, s, l, c, d, p, h = t && t.ownerDocument,
                g = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n;
            if (!r && ((t ? t.ownerDocument || t : H) !== P && N(t), t = t || P, _)) {
                if (11 !== g && (c = ve.exec(e)))
                    if (o = c[1]) {
                        if (9 === g) {
                            if (!(a = t.getElementById(o))) return n;
                            if (a.id === o) return n.push(a), n
                        } else if (h && (a = h.getElementById(o)) && V(t, a) && a.id === o) return n.push(a), n
                    } else {
                        if (c[2]) return Y.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = c[3]) && C.getElementsByClassName && t.getElementsByClassName) return Y.apply(n, t.getElementsByClassName(o)), n
                    }
                if (C.qsa && !W[e + " "] && (!L || !L.test(e))) {
                    if (1 !== g) h = t, p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(be, "\\$&") : t.setAttribute("id", s = z), d = O(e), i = d.length, l = fe.test(s) ? "#" + s : "[id='" + s + "']"; i--;) d[i] = l + " " + f(d[i]);
                        p = d.join(","), h = ye.test(e) && u(t.parentNode) || t
                    }
                    if (p) try {
                        return Y.apply(n, h.querySelectorAll(p)), n
                    } catch (e) {} finally {
                        s === z && t.removeAttribute("id")
                    }
                }
            }
            return M(e.replace(se, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[z] = !0, e
        }

        function o(e) {
            var t = P.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function i(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) T.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function c(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var o, i = e([], n.length, t), a = i.length; a--;) n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                })
            })
        }

        function u(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function d() {}

        function f(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function p(e, t, n) {
            var r = t.dir,
                o = n && "parentNode" === r,
                i = F++;
            return t.first ? function(t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || o) return e(t, n, i)
            } : function(t, n, a) {
                var s, l, c, u = [$, i];
                if (a) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || o) && e(t, n, a)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || o) {
                            if (c = t[z] || (t[z] = {}), l = c[t.uniqueID] || (c[t.uniqueID] = {}), (s = l[r]) && s[0] === $ && s[1] === i) return u[2] = s[2];
                            if (l[r] = u, u[2] = e(t, n, a)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function g(e, n, r) {
            for (var o = 0, i = n.length; o < i; o++) t(e, n[o], r);
            return r
        }

        function m(e, t, n, r, o) {
            for (var i, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(i = e[s]) && (n && !n(i, r, o) || (a.push(i), c && t.push(s)));
            return a
        }

        function v(e, t, n, o, i, a) {
            return o && !o[z] && (o = v(o)), i && !i[z] && (i = v(i, a)), r(function(r, a, s, l) {
                var c, u, d, f = [],
                    p = [],
                    h = a.length,
                    v = r || g(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !r && t ? v : m(v, f, e, s, l),
                    b = n ? i || (r ? e : h || o) ? [] : a : y;
                if (n && n(y, b, s, l), o)
                    for (c = m(b, p), o(c, [], s, l), u = c.length; u--;)(d = c[u]) && (b[p[u]] = !(y[p[u]] = d));
                if (r) {
                    if (i || e) {
                        if (i) {
                            for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
                            i(null, b = [], c, l)
                        }
                        for (u = b.length; u--;)(d = b[u]) && (c = i ? ee(r, d) : f[u]) > -1 && (r[c] = !(a[c] = d))
                    }
                } else b = m(b === a ? b.splice(h, b.length) : b), i ? i(null, a, b, l) : Y.apply(a, b)
            })
        }

        function y(e) {
            for (var t, n, r, o = e.length, i = T.relative[e[0].type], a = i || T.relative[" "], s = i ? 1 : 0, l = p(function(e) {
                    return e === t
                }, a, !0), c = p(function(e) {
                    return ee(t, e) > -1
                }, a, !0), u = [function(e, n, r) {
                    var o = !i && (r || n !== k) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r));
                    return t = null, o
                }]; s < o; s++)
                if (n = T.relative[e[s].type]) u = [p(h(u), n)];
                else {
                    if (n = T.filter[e[s].type].apply(null, e[s].matches), n[z]) {
                        for (r = ++s; r < o && !T.relative[e[r].type]; r++);
                        return v(s > 1 && h(u), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(se, "$1"), n, s < r && y(e.slice(s, r)), r < o && y(e = e.slice(r)), r < o && f(e))
                    }
                    u.push(n)
                }
            return h(u)
        }

        function b(e, n) {
            var o = n.length > 0,
                i = e.length > 0,
                a = function(r, a, s, l, c) {
                    var u, d, f, p = 0,
                        h = "0",
                        g = r && [],
                        v = [],
                        y = k,
                        b = r || i && T.find.TAG("*", c),
                        w = $ += null == y ? 1 : Math.random() || .1,
                        C = b.length;
                    for (c && (k = a === P || a || c); h !== C && null != (u = b[h]); h++) {
                        if (i && u) {
                            for (d = 0, a || u.ownerDocument === P || (N(u), s = !_); f = e[d++];)
                                if (f(u, a || P, s)) {
                                    l.push(u);
                                    break
                                }
                            c && ($ = w)
                        }
                        o && ((u = !f && u) && p--, r && g.push(u))
                    }
                    if (p += h, o && h !== p) {
                        for (d = 0; f = n[d++];) f(g, v, a, s);
                        if (r) {
                            if (p > 0)
                                for (; h--;) g[h] || v[h] || (v[h] = X.call(l));
                            v = m(v)
                        }
                        Y.apply(l, v), c && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                    }
                    return c && ($ = w, k = y), g
                };
            return o ? r(a) : a
        }
        var w, C, T, x, S, O, E, M, k, j, I, N, P, A, _, L, D, R, V, z = "sizzle" + 1 * new Date,
            H = e.document,
            $ = 0,
            F = 0,
            B = n(),
            q = n(),
            W = n(),
            U = function(e, t) {
                return e === t && (I = !0), 0
            },
            G = 1 << 31,
            K = {}.hasOwnProperty,
            Q = [],
            X = Q.pop,
            J = Q.push,
            Y = Q.push,
            Z = Q.slice,
            ee = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
            ie = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            ae = new RegExp(ne + "+", "g"),
            se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            de = new RegExp(ie),
            fe = new RegExp("^" + re + "$"),
            pe = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re + "|[*])"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + ie),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            he = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            me = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            be = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            Ce = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            Te = function() {
                N()
            };
        try {
            Y.apply(Q = Z.call(H.childNodes), H.childNodes), Q[H.childNodes.length].nodeType
        } catch (e) {
            Y = {
                apply: Q.length ? function(e, t) {
                    J.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        C = t.support = {}, S = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, N = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : H;
            return r !== P && 9 === r.nodeType && r.documentElement ? (P = r, A = P.documentElement, _ = !S(P), (n = P.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), C.attributes = o(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), C.getElementsByTagName = o(function(e) {
                return e.appendChild(P.createComment("")), !e.getElementsByTagName("*").length
            }), C.getElementsByClassName = me.test(P.getElementsByClassName), C.getById = o(function(e) {
                return A.appendChild(e).id = z, !P.getElementsByName || !P.getElementsByName(z).length
            }), C.getById ? (T.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && _) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, T.filter.ID = function(e) {
                var t = e.replace(we, Ce);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function(e) {
                var t = e.replace(we, Ce);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = C.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : C.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    o = 0,
                    i = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return i
            }, T.find.CLASS = C.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && _) return t.getElementsByClassName(e)
            }, D = [], L = [], (C.qsa = me.test(P.querySelectorAll)) && (o(function(e) {
                A.appendChild(e).innerHTML = "<a id='" + z + "'></a><select id='" + z + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || L.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + z + "-]").length || L.push("~="), e.querySelectorAll(":checked").length || L.push(":checked"), e.querySelectorAll("a#" + z + "+*").length || L.push(".#.+[+~]")
            }), o(function(e) {
                var t = P.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && L.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), L.push(",.*:")
            })), (C.matchesSelector = me.test(R = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && o(function(e) {
                C.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), D.push("!=", ie)
            }), L = L.length && new RegExp(L.join("|")), D = D.length && new RegExp(D.join("|")), t = me.test(A.compareDocumentPosition), V = t || me.test(A.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, U = t ? function(e, t) {
                if (e === t) return I = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !C.sortDetached && t.compareDocumentPosition(e) === n ? e === P || e.ownerDocument === H && V(H, e) ? -1 : t === P || t.ownerDocument === H && V(H, t) ? 1 : j ? ee(j, e) - ee(j, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return I = !0, 0;
                var n, r = 0,
                    o = e.parentNode,
                    i = t.parentNode,
                    s = [e],
                    l = [t];
                if (!o || !i) return e === P ? -1 : t === P ? 1 : o ? -1 : i ? 1 : j ? ee(j, e) - ee(j, t) : 0;
                if (o === i) return a(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; s[r] === l[r];) r++;
                return r ? a(s[r], l[r]) : s[r] === H ? -1 : l[r] === H ? 1 : 0
            }, P) : P
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== P && N(e), n = n.replace(ue, "='$1']"), C.matchesSelector && _ && !W[n + " "] && (!D || !D.test(n)) && (!L || !L.test(n))) try {
                var r = R.call(e, n);
                if (r || C.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {}
            return t(n, P, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== P && N(e), V(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== P && N(e);
            var n = T.attrHandle[t.toLowerCase()],
                r = n && K.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !_) : undefined;
            return r !== undefined ? r : C.attributes || !_ ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                o = 0;
            if (I = !C.detectDuplicates, j = !C.sortStable && e.slice(0), e.sort(U), I) {
                for (; t = e[o++];) t === e[o] && (r = n.push(o));
                for (; r--;) e.splice(n[r], 1)
            }
            return j = null, e
        }, x = t.getText = function(e) {
            var t, n = "",
                r = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += x(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[r++];) n += x(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(we, Ce), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Ce), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = O(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(we, Ce).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = B[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && B(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(o) {
                        var i = t.attr(o, e);
                        return null == i ? "!=" === n : !n || (i += "", "=" === n ? i === r : "!=" === n ? i !== r : "^=" === n ? r && 0 === i.indexOf(r) : "*=" === n ? r && i.indexOf(r) > -1 : "$=" === n ? r && i.slice(-r.length) === r : "~=" === n ? (" " + i.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n && (i === r || i.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, o) {
                    var i = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === o ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var c, u, d, f, p, h, g = i !== a ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !l && !s,
                            b = !1;
                        if (m) {
                            if (i) {
                                for (; g;) {
                                    for (f = t; f = f[g];)
                                        if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && y) {
                                for (f = m, d = f[z] || (f[z] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), c = u[e] || [], p = c[0] === $ && c[1], b = p && c[2], f = p && m.childNodes[p]; f = ++p && f && f[g] || (b = p = 0) || h.pop();)
                                    if (1 === f.nodeType && ++b && f === t) {
                                        u[e] = [$, p, b];
                                        break
                                    }
                            } else if (y && (f = t, d = f[z] || (f[z] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), c = u[e] || [], p = c[0] === $ && c[1], b = p), !1 === b)
                                for (;
                                    (f = ++p && f && f[g] || (b = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && (d = f[z] || (f[z] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), u[e] = [$, b]), f !== t)););
                            return (b -= o) === r || b % r == 0 && b / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var o, i = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return i[z] ? i(n) : i.length > 1 ? (o = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, o = i(e, n), a = o.length; a--;) r = ee(e, o[a]), e[r] = !(t[r] = o[a])
                    }) : function(e) {
                        return i(e, 0, o)
                    }) : i
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        o = E(e.replace(se, "$1"));
                    return o[z] ? r(function(e, t, n, r) {
                        for (var i, a = o(e, null, r, []), s = e.length; s--;)(i = a[s]) && (e[s] = !(t[s] = i))
                    }) : function(e, r, i) {
                        return t[0] = e, o(t, null, i, n), t[0] = null, !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(we, Ce),
                        function(t) {
                            return (t.textContent || t.innerText || x(t)).indexOf(e) > -1
                        }
                }),
                lang: r(function(e) {
                    return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Ce).toLowerCase(),
                        function(t) {
                            var n;
                            do {
                                if (n = _ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === A
                },
                focus: function(e) {
                    return e === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return !1 === e.disabled
                },
                disabled: function(e) {
                    return !0 === e.disabled
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !T.pseudos.empty(e)
                },
                header: function(e) {
                    return ge.test(e.nodeName)
                },
                input: function(e) {
                    return he.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) T.pseudos[w] = s(w);
        for (w in {
                submit: !0,
                reset: !0
            }) T.pseudos[w] = l(w);
        return d.prototype = T.filters = T.pseudos, T.setFilters = new d, O = t.tokenize = function(e, n) {
            var r, o, i, a, s, l, c, u = q[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (s = e, l = [], c = T.preFilter; s;) {
                r && !(o = le.exec(s)) || (o && (s = s.slice(o[0].length) || s), l.push(i = [])), r = !1, (o = ce.exec(s)) && (r = o.shift(), i.push({
                    value: r,
                    type: o[0].replace(se, " ")
                }), s = s.slice(r.length));
                for (a in T.filter) !(o = pe[a].exec(s)) || c[a] && !(o = c[a](o)) || (r = o.shift(), i.push({
                    value: r,
                    type: a,
                    matches: o
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : q(e, l).slice(0)
        }, E = t.compile = function(e, t) {
            var n, r = [],
                o = [],
                i = W[e + " "];
            if (!i) {
                for (t || (t = O(e)), n = t.length; n--;) i = y(t[n]), i[z] ? r.push(i) : o.push(i);
                i = W(e, b(o, r)), i.selector = e
            }
            return i
        }, M = t.select = function(e, t, n, r) {
            var o, i, a, s, l, c = "function" == typeof e && e,
                d = !r && O(e = c.selector || e);
            if (n = n || [], 1 === d.length) {
                if (i = d[0] = d[0].slice(0), i.length > 2 && "ID" === (a = i[0]).type && C.getById && 9 === t.nodeType && _ && T.relative[i[1].type]) {
                    if (!(t = (T.find.ID(a.matches[0].replace(we, Ce), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(i.shift().value.length)
                }
                for (o = pe.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !T.relative[s = a.type]);)
                    if ((l = T.find[s]) && (r = l(a.matches[0].replace(we, Ce), ye.test(i[0].type) && u(t.parentNode) || t))) {
                        if (i.splice(o, 1), !(e = r.length && f(i))) return Y.apply(n, r), n;
                        break
                    }
            }
            return (c || E(e, d))(r, t, !_, n, !t || ye.test(e) && u(t.parentNode) || t), n
        }, C.sortStable = z.split("").sort(U).join("") === z, C.detectDuplicates = !!I, N(), C.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(P.createElement("div"))
        }), o(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || i("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), C.attributes && o(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || i("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), o(function(e) {
            return null == e.getAttribute("disabled")
        }) || i(te, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    ie.find = ue, ie.expr = ue.selectors, ie.expr[":"] = ie.expr.pseudos, ie.uniqueSort = ie.unique = ue.uniqueSort, ie.text = ue.getText, ie.isXMLDoc = ue.isXML, ie.contains = ue.contains;
    var de = function(e, t, n) {
            for (var r = [], o = n !== undefined;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && ie(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        fe = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        pe = ie.expr.match.needsContext,
        he = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        ge = /^.[^:#\[\.,]*$/;
    ie.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ie.find.matchesSelector(r, e) ? [r] : [] : ie.find.matches(e, ie.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, ie.fn.extend({
        find: function(e) {
            var t, n = this.length,
                r = [],
                o = this;
            if ("string" != typeof e) return this.pushStack(ie(e).filter(function() {
                for (t = 0; t < n; t++)
                    if (ie.contains(o[t], this)) return !0
            }));
            for (t = 0; t < n; t++) ie.find(e, o[t], r);
            return r = this.pushStack(n > 1 ? ie.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && pe.test(e) ? ie(e) : e || [], !1).length
        }
    });
    var me, ve = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (ie.fn.init = function(e, t, n) {
        var r, o;
        if (!e) return this;
        if (n = n || me, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ve.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof ie ? t[0] : t, ie.merge(this, ie.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : Q, !0)), he.test(r[1]) && ie.isPlainObject(t))
                    for (r in t) ie.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return o = Q.getElementById(r[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = Q, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ie.isFunction(e) ? n.ready !== undefined ? n.ready(e) : e(ie) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), ie.makeArray(e, this))
    }).prototype = ie.fn, me = ie(Q);
    var ye = /^(?:parents|prev(?:Until|All))/,
        be = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ie.fn.extend({
        has: function(e) {
            var t = ie(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (ie.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, o = this.length, i = [], a = pe.test(e) || "string" != typeof e ? ie(e, t || this.context) : 0; r < o; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ie.find.matchesSelector(n, e))) {
                        i.push(n);
                        break
                    }
            return this.pushStack(i.length > 1 ? ie.uniqueSort(i) : i)
        },
        index: function(e) {
            return e ? "string" == typeof e ? Z.call(ie(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ie.uniqueSort(ie.merge(this.get(), ie(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ie.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return de(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return de(e, "parentNode", n)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return de(e, "nextSibling")
        },
        prevAll: function(e) {
            return de(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return de(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return de(e, "previousSibling", n)
        },
        siblings: function(e) {
            return fe((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return fe(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || ie.merge([], e.childNodes)
        }
    }, function(e, t) {
        ie.fn[e] = function(n, r) {
            var o = ie.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = ie.filter(r, o)), this.length > 1 && (be[e] || ie.uniqueSort(o), ye.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var we = /\S+/g;
    ie.Callbacks = function(e) {
        e = "string" == typeof e ? i(e) : ie.extend({}, e);
        var t, n, r, o, a = [],
            s = [],
            l = -1,
            c = function() {
                for (o = e.once, r = t = !0; s.length; l = -1)
                    for (n = s.shift(); ++l < a.length;) !1 === a[l].apply(n[0], n[1]) && e.stopOnFalse && (l = a.length, n = !1);
                e.memory || (n = !1), t = !1, o && (a = n ? [] : "")
            },
            u = {
                add: function() {
                    return a && (n && !t && (l = a.length - 1, s.push(n)), function t(n) {
                        ie.each(n, function(n, r) {
                            ie.isFunction(r) ? e.unique && u.has(r) || a.push(r) : r && r.length && "string" !== ie.type(r) && t(r)
                        })
                    }(arguments), n && !t && c()), this
                },
                remove: function() {
                    return ie.each(arguments, function(e, t) {
                        for (var n;
                            (n = ie.inArray(t, a, n)) > -1;) a.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? ie.inArray(e, a) > -1 : a.length > 0
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return o = s = [], a = n = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return o = s = [], n || (a = n = ""), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(e, n) {
                    return o || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return u
    }, ie.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", ie.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ie.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ie.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return ie.Deferred(function(n) {
                            ie.each(t, function(t, i) {
                                var a = ie.isFunction(e[t]) && e[t];
                                o[i[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && ie.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ie.extend(e, r) : r
                    }
                },
                o = {};
            return r.pipe = r.then, ie.each(t, function(e, i) {
                var a = i[2],
                    s = i[3];
                r[i[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), o[i[0]] = function() {
                    return o[i[0] + "With"](this === o ? r : this, arguments), this
                }, o[i[0] + "With"] = a.fireWith
            }), r.promise(o), e && e.call(o, o), o
        },
        when: function(e) {
            var t, n, r, o = 0,
                i = X.call(arguments),
                a = i.length,
                s = 1 !== a || e && ie.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : ie.Deferred(),
                c = function(e, n, r) {
                    return function(o) {
                        n[e] = this, r[e] = arguments.length > 1 ? X.call(arguments) : o, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), r = new Array(a); o < a; o++) i[o] && ie.isFunction(i[o].promise) ? i[o].promise().progress(c(o, n, t)).done(c(o, r, i)).fail(l.reject) : --s;
            return s || l.resolveWith(r, i), l.promise()
        }
    });
    var Ce;
    ie.fn.ready = function(e) {
        return ie.ready.promise().done(e), this
    }, ie.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ie.readyWait++ : ie.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --ie.readyWait : ie.isReady) || (ie.isReady = !0, !0 !== e && --ie.readyWait > 0 || (Ce.resolveWith(Q, [ie]), ie.fn.triggerHandler && (ie(Q).triggerHandler("ready"), ie(Q).off("ready"))))
        }
    }), ie.ready.promise = function(t) {
        return Ce || (Ce = ie.Deferred(), "complete" === Q.readyState || "loading" !== Q.readyState && !Q.documentElement.doScroll ? e.setTimeout(ie.ready) : (Q.addEventListener("DOMContentLoaded", a), e.addEventListener("load", a))), Ce.promise(t)
    }, ie.ready.promise();
    var Te = function(e, t, n, r, o, i, a) {
            var s = 0,
                l = e.length,
                c = null == n;
            if ("object" === ie.type(n)) {
                o = !0;
                for (s in n) Te(e, t, s, n[s], !0, i, a)
            } else if (r !== undefined && (o = !0, ie.isFunction(r) || (a = !0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(ie(e), n)
                })), t))
                for (; s < l; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return o ? e : c ? t.call(e) : l ? t(e[0], n) : i
        },
        xe = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    s.uid = 1, s.prototype = {
        register: function(e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        },
        cache: function(e) {
            if (!xe(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, xe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, o = this.cache(e);
            if ("string" == typeof t) o[t] = n;
            else
                for (r in t) o[r] = t[r];
            return o
        },
        get: function(e, t) {
            return t === undefined ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, n) {
            var r;
            return t === undefined || t && "string" == typeof t && n === undefined ? (r = this.get(e, t), r !== undefined ? r : this.get(e, ie.camelCase(t))) : (this.set(e, t, n), n !== undefined ? n : t)
        },
        remove: function(e, t) {
            var n, r, o, i = e[this.expando];
            if (i !== undefined) {
                if (t === undefined) this.register(e);
                else {
                    ie.isArray(t) ? r = t.concat(t.map(ie.camelCase)) : (o = ie.camelCase(t), t in i ? r = [t, o] : (r = o, r = r in i ? [r] : r.match(we) || [])), n = r.length;
                    for (; n--;) delete i[r[n]]
                }(t === undefined || ie.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = undefined : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return t !== undefined && !ie.isEmptyObject(t)
        }
    };
    var Se = new s,
        Oe = new s,
        Ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Me = /[A-Z]/g;
    ie.extend({
        hasData: function(e) {
            return Oe.hasData(e) || Se.hasData(e)
        },
        data: function(e, t, n) {
            return Oe.access(e, t, n)
        },
        removeData: function(e, t) {
            Oe.remove(e, t)
        },
        _data: function(e, t, n) {
            return Se.access(e, t, n)
        },
        _removeData: function(e, t) {
            Se.remove(e, t)
        }
    }), ie.fn.extend({
        data: function(e, t) {
            var n, r, o, i = this[0],
                a = i && i.attributes;
            if (e === undefined) {
                if (this.length && (o = Oe.get(i), 1 === i.nodeType && !Se.get(i, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = ie.camelCase(r.slice(5)), l(i, r, o[r])));
                    Se.set(i, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                Oe.set(this, e)
            }) : Te(this, function(t) {
                var n, r;
                if (i && t === undefined) {
                    if ((n = Oe.get(i, e) || Oe.get(i, e.replace(Me, "-$&").toLowerCase())) !== undefined) return n;
                    if (r = ie.camelCase(e), (n = Oe.get(i, r)) !== undefined) return n;
                    if ((n = l(i, r, undefined)) !== undefined) return n
                } else r = ie.camelCase(e), this.each(function() {
                    var n = Oe.get(this, r);
                    Oe.set(this, r, t), e.indexOf("-") > -1 && n !== undefined && Oe.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Oe.remove(this, e)
            })
        }
    }), ie.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Se.get(e, t), n && (!r || ie.isArray(n) ? r = Se.access(e, t, ie.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ie.queue(e, t),
                r = n.length,
                o = n.shift(),
                i = ie._queueHooks(e, t),
                a = function() {
                    ie.dequeue(e, t)
                };
            "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, a, i)), !r && i && i.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Se.get(e, n) || Se.access(e, n, {
                empty: ie.Callbacks("once memory").add(function() {
                    Se.remove(e, [t + "queue", n])
                })
            })
        }
    }), ie.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ie.queue(this[0], e) : t === undefined ? this : this.each(function() {
                var n = ie.queue(this, e, t);
                ie._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ie.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ie.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                o = ie.Deferred(),
                i = this,
                a = this.length,
                s = function() {
                    --r || o.resolveWith(i, [i])
                };
            for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; a--;)(n = Se.get(i[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), o.promise(t)
        }
    });
    var ke = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        je = new RegExp("^(?:([+-])=|)(" + ke + ")([a-z%]*)$", "i"),
        Ie = ["Top", "Right", "Bottom", "Left"],
        Ne = function(e, t) {
            return e = t || e, "none" === ie.css(e, "display") || !ie.contains(e.ownerDocument, e)
        },
        Pe = /^(?:checkbox|radio)$/i,
        Ae = /<([\w:-]+)/,
        _e = /^$|\/(?:java|ecma)script/i,
        Le = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Le.optgroup = Le.option, Le.tbody = Le.tfoot = Le.colgroup = Le.caption = Le.thead, Le.th = Le.td;
    var De = /<|&#?\w+;/;
    ! function() {
        var e = Q.createDocumentFragment(),
            t = e.appendChild(Q.createElement("div")),
            n = Q.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), re.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", re.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Re = /^key/,
        Ve = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ze = /^([^.]*)(?:\.(.+)|)/;
    ie.event = {
        global: {},
        add: function(e, t, n, r, o) {
            var i, a, s, l, c, u, d, f, p, h, g, m = Se.get(e);
            if (m)
                for (n.handler && (i = n, n = i.handler, o = i.selector), n.guid || (n.guid = ie.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
                        return void 0 !== ie && ie.event.triggered !== t.type ? ie.event.dispatch.apply(e, arguments) : undefined
                    }), t = (t || "").match(we) || [""], c = t.length; c--;) s = ze.exec(t[c]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p && (d = ie.event.special[p] || {}, p = (o ? d.delegateType : d.bindType) || p, d = ie.event.special[p] || {}, u = ie.extend({
                    type: p,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && ie.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, i), (f = l[p]) || (f = l[p] = [], f.delegateCount = 0, d.setup && !1 !== d.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, u) : f.push(u), ie.event.global[p] = !0)
        },
        remove: function(e, t, n, r, o) {
            var i, a, s, l, c, u, d, f, p, h, g, m = Se.hasData(e) && Se.get(e);
            if (m && (l = m.events)) {
                for (t = (t || "").match(we) || [""], c = t.length; c--;)
                    if (s = ze.exec(t[c]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = ie.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = l[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = f.length; i--;) u = f[i], !o && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (f.splice(i, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                        a && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, m.handle) || ie.removeEvent(e, p, m.handle), delete l[p])
                    } else
                        for (p in l) ie.event.remove(e, p + t[c], n, r, !0);
                ie.isEmptyObject(l) && Se.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = ie.event.fix(e);
            var t, n, r, o, i, a = [],
                s = X.call(arguments),
                l = (Se.get(this, "events") || {})[e.type] || [],
                c = ie.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (a = ie.event.handlers.call(this, e, l), t = 0;
                    (o = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, n = 0;
                        (i = o.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(i.namespace) || (e.handleObj = i, e.data = i.data, (r = ((ie.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s)) !== undefined && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, o, i, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (r = [], n = 0; n < s; n++) i = t[n], o = i.selector + " ", r[o] === undefined && (r[o] = i.needsContext ? ie(o, this).index(l) > -1 : ie.find(o, this, null, [l]).length), r[o] && r.push(i);
                        r.length && a.push({
                            elem: l,
                            handlers: r
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, o, i = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Q, r = n.documentElement, o = n.body, e.pageX = t.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)), e.which || i === undefined || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[ie.expando]) return e;
            var t, n, r, o = e.type,
                i = e,
                a = this.fixHooks[o];
            for (a || (this.fixHooks[o] = a = Ve.test(o) ? this.mouseHooks : Re.test(o) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ie.Event(i), t = r.length; t--;) n = r[t], e[n] = i[n];
            return e.target || (e.target = Q), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, i) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== g() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === g() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && ie.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return ie.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, ie.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, ie.Event = function(e, t) {
        if (!(this instanceof ie.Event)) return new ie.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? p : h) : this.type = e, t && ie.extend(this, t), this.timeStamp = e && e.timeStamp || ie.now(), this[ie.expando] = !0
    }, ie.Event.prototype = {
        constructor: ie.Event,
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = p, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = p, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = p, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ie.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        ie.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    o = e.relatedTarget,
                    i = e.handleObj;
                return o && (o === r || ie.contains(r, o)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ie.fn.extend({
        on: function(e, t, n, r) {
            return m(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return m(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ie(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = undefined), !1 === n && (n = h), this.each(function() {
                ie.event.remove(this, e, n, t)
            })
        }
    });
    var He = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        $e = /<script|<style|<link/i,
        Fe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Be = /^true\/(.*)/,
        qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ie.extend({
        htmlPrefilter: function(e) {
            return e.replace(He, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, o, i, a, s = e.cloneNode(!0),
                l = ie.contains(e.ownerDocument, e);
            if (!(re.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ie.isXMLDoc(e)))
                for (a = u(s), i = u(e), r = 0, o = i.length; r < o; r++) C(i[r], a[r]);
            if (t)
                if (n)
                    for (i = i || u(e), a = a || u(s), r = 0, o = i.length; r < o; r++) w(i[r], a[r]);
                else w(e, s);
            return a = u(s, "script"), a.length > 0 && d(a, !l && u(e, "script")), s
        },
        cleanData: function(e) {
            for (var t, n, r, o = ie.event.special, i = 0;
                (n = e[i]) !== undefined; i++)
                if (xe(n)) {
                    if (t = n[Se.expando]) {
                        if (t.events)
                            for (r in t.events) o[r] ? ie.event.remove(n, r) : ie.removeEvent(n, r, t.handle);
                        n[Se.expando] = undefined
                    }
                    n[Oe.expando] && (n[Oe.expando] = undefined)
                }
        }
    }), ie.fn.extend({
        domManip: T,
        detach: function(e) {
            return x(this, e, !0)
        },
        remove: function(e) {
            return x(this, e)
        },
        text: function(e) {
            return Te(this, function(e) {
                return e === undefined ? ie.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return T(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    v(this, e).appendChild(e)
                }
            })
        },
        prepend: function() {
            return T(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return T(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return T(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ie.cleanData(u(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return ie.clone(this, e, t)
            })
        },
        html: function(e) {
            return Te(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (e === undefined && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !$e.test(e) && !Le[(Ae.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = ie.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) t = this[n] || {}, 1 === t.nodeType && (ie.cleanData(u(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return T(this, arguments, function(t) {
                var n = this.parentNode;
                ie.inArray(this, e) < 0 && (ie.cleanData(u(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), ie.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ie.fn[e] = function(e) {
            for (var n, r = [], o = ie(e), i = o.length - 1, a = 0; a <= i; a++) n = a === i ? this : this.clone(!0), ie(o[a])[t](n), Y.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var We, Ue = {
            HTML: "block",
            BODY: "block"
        },
        Ge = /^margin/,
        Ke = new RegExp("^(" + ke + ")(?!px)[a-z%]+$", "i"),
        Qe = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Xe = function(e, t, n, r) {
            var o, i, a = {};
            for (i in t) a[i] = e.style[i], e.style[i] = t[i];
            o = n.apply(e, r || []);
            for (i in t) e.style[i] = a[i];
            return o
        },
        Je = Q.documentElement;
    ! function() {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Je.appendChild(a);
            var t = e.getComputedStyle(s);
            n = "1%" !== t.top, i = "2px" === t.marginLeft, r = "4px" === t.width, s.style.marginRight = "50%", o = "4px" === t.marginRight, Je.removeChild(a)
        }
        var n, r, o, i, a = Q.createElement("div"),
            s = Q.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", re.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), ie.extend(re, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return null == r && t(), r
            },
            pixelMarginRight: function() {
                return null == r && t(), o
            },
            reliableMarginLeft: function() {
                return null == r && t(), i
            },
            reliableMarginRight: function() {
                var t, n = s.appendChild(Q.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", Je.appendChild(a), t = !parseFloat(e.getComputedStyle(n).marginRight), Je.removeChild(a), s.removeChild(n), t
            }
        }))
    }();
    var Ye = /^(none|table(?!-c[ea]).+)/,
        Ze = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        et = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        tt = ["Webkit", "O", "Moz", "ms"],
        nt = Q.createElement("div").style;
    ie.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = E(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, i, a, s = ie.camelCase(t),
                    l = e.style;
                if (t = ie.cssProps[s] || (ie.cssProps[s] = k(s) || s), a = ie.cssHooks[t] || ie.cssHooks[s], n === undefined) return a && "get" in a && (o = a.get(e, !1, r)) !== undefined ? o : l[t];
                i = typeof n, "string" === i && (o = je.exec(n)) && o[1] && (n = c(e, t, o), i = "number"), null != n && n === n && ("number" === i && (n += o && o[3] || (ie.cssNumber[s] ? "" : "px")), re.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && (n = a.set(e, n, r)) === undefined || (l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var o, i, a, s = ie.camelCase(t);
            return t = ie.cssProps[s] || (ie.cssProps[s] = k(s) || s), a = ie.cssHooks[t] || ie.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), o === undefined && (o = E(e, t, r)), "normal" === o && t in et && (o = et[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
        }
    }), ie.each(["height", "width"], function(e, t) {
        ie.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return Ye.test(ie.css(e, "display")) && 0 === e.offsetWidth ? Xe(e, Ze, function() {
                    return N(e, t, r)
                }) : N(e, t, r)
            },
            set: function(e, n, r) {
                var o, i = r && Qe(e),
                    a = r && I(e, t, r, "border-box" === ie.css(e, "boxSizing", !1, i), i);
                return a && (o = je.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = ie.css(e, t)), j(e, n, a)
            }
        }
    }), ie.cssHooks.marginLeft = M(re.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(E(e, "marginLeft")) || e.getBoundingClientRect().left - Xe(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), ie.cssHooks.marginRight = M(re.reliableMarginRight, function(e, t) {
        if (t) return Xe(e, {
            display: "inline-block"
        }, E, [e, "marginRight"])
    }), ie.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ie.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) o[e + Ie[r] + t] = i[r] || i[r - 2] || i[0];
                return o
            }
        }, Ge.test(e) || (ie.cssHooks[e + t].set = j)
    }), ie.fn.extend({
        css: function(e, t) {
            return Te(this, function(e, t, n) {
                var r, o, i = {},
                    a = 0;
                if (ie.isArray(t)) {
                    for (r = Qe(e), o = t.length; a < o; a++) i[t[a]] = ie.css(e, t[a], !1, r);
                    return i
                }
                return n !== undefined ? ie.style(e, t, n) : ie.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return P(this, !0)
        },
        hide: function() {
            return P(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ne(this) ? ie(this).show() : ie(this).hide()
            })
        }
    }), ie.Tween = A, A.prototype = {
        constructor: A,
        init: function(e, t, n, r, o, i) {
            this.elem = e, this.prop = n, this.easing = o || ie.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (ie.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = A.propHooks[this.prop];
            return e && e.get ? e.get(this) : A.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = A.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ie.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : A.propHooks._default.set(this), this
        }
    }, A.prototype.init.prototype = A.prototype, A.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ie.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                ie.fx.step[e.prop] ? ie.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ie.cssProps[e.prop]] && !ie.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ie.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, A.propHooks.scrollTop = A.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ie.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, ie.fx = A.prototype.init, ie.fx.step = {};
    var rt, ot, it = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;
    ie.Animation = ie.extend(z, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return c(n.elem, e, je.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                ie.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(we);
                for (var n, r = 0, o = e.length; r < o; r++) n = e[r], z.tweeners[n] = z.tweeners[n] || [], z.tweeners[n].unshift(t)
            },
            prefilters: [R],
            prefilter: function(e, t) {
                t ? z.prefilters.unshift(e) : z.prefilters.push(e)
            }
        }), ie.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? ie.extend({}, e) : {
                complete: n || !n && t || ie.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ie.isFunction(t) && t
            };
            return r.duration = ie.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ie.fx.speeds ? ie.fx.speeds[r.duration] : ie.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                ie.isFunction(r.old) && r.old.call(this), r.queue && ie.dequeue(this, r.queue)
            }, r
        }, ie.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(Ne).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var o = ie.isEmptyObject(e),
                    i = ie.speed(t, n, r),
                    a = function() {
                        var t = z(this, ie.extend({}, e), i);
                        (o || Se.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = undefined), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        i = ie.timers,
                        a = Se.get(this);
                    if (o) a[o] && a[o].stop && r(a[o]);
                    else
                        for (o in a) a[o] && a[o].stop && at.test(o) && r(a[o]);
                    for (o = i.length; o--;) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));
                    !t && n || ie.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = Se.get(this),
                        r = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        i = ie.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, ie.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ie.each(["toggle", "show", "hide"], function(e, t) {
            var n = ie.fn[t];
            ie.fn[t] = function(e, r, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(L(t, !0), e, r, o)
            }
        }), ie.each({
            slideDown: L("show"),
            slideUp: L("hide"),
            slideToggle: L("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            ie.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), ie.timers = [], ie.fx.tick = function() {
            var e, t = 0,
                n = ie.timers;
            for (rt = ie.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || ie.fx.stop(), rt = undefined
        }, ie.fx.timer = function(e) {
            ie.timers.push(e), e() ? ie.fx.start() : ie.timers.pop()
        }, ie.fx.interval = 13, ie.fx.start = function() {
            ot || (ot = e.setInterval(ie.fx.tick, ie.fx.interval))
        }, ie.fx.stop = function() {
            e.clearInterval(ot), ot = null
        }, ie.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ie.fn.delay = function(t, n) {
            return t = ie.fx ? ie.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
                var o = e.setTimeout(n, t);
                r.stop = function() {
                    e.clearTimeout(o)
                }
            })
        },
        function() {
            var e = Q.createElement("input"),
                t = Q.createElement("select"),
                n = t.appendChild(Q.createElement("option"));
            e.type = "checkbox", re.checkOn = "" !== e.value, re.optSelected = n.selected, t.disabled = !0, re.optDisabled = !n.disabled, e = Q.createElement("input"), e.value = "t", e.type = "radio", re.radioValue = "t" === e.value
        }();
    var st, lt = ie.expr.attrHandle;
    ie.fn.extend({
        attr: function(e, t) {
            return Te(this, ie.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ie.removeAttr(this, e)
            })
        }
    }), ie.extend({
        attr: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) return "undefined" == typeof e.getAttribute ? ie.prop(e, t, n) : (1 === i && ie.isXMLDoc(e) || (t = t.toLowerCase(), o = ie.attrHooks[t] || (ie.expr.match.bool.test(t) ? st : undefined)), n !== undefined ? null === n ? void ie.removeAttr(e, t) : o && "set" in o && (r = o.set(e, n, t)) !== undefined ? r : (e.setAttribute(t, n + ""),
                n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : (r = ie.find.attr(e, t), null == r ? undefined : r))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!re.radioValue && "radio" === t && ie.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r, o = 0,
                i = t && t.match(we);
            if (i && 1 === e.nodeType)
                for (; n = i[o++];) r = ie.propFix[n] || n, ie.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        }
    }), st = {
        set: function(e, t, n) {
            return !1 === t ? ie.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, ie.each(ie.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = lt[t] || ie.find.attr;
        lt[t] = function(e, t, r) {
            var o, i;
            return r || (i = lt[t], lt[t] = o, o = null != n(e, t, r) ? t.toLowerCase() : null, lt[t] = i), o
        }
    });
    var ct = /^(?:input|select|textarea|button)$/i,
        ut = /^(?:a|area)$/i;
    ie.fn.extend({
        prop: function(e, t) {
            return Te(this, ie.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[ie.propFix[e] || e]
            })
        }
    }), ie.extend({
        prop: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) return 1 === i && ie.isXMLDoc(e) || (t = ie.propFix[t] || t, o = ie.propHooks[t]), n !== undefined ? o && "set" in o && (r = o.set(e, n, t)) !== undefined ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ie.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ct.test(e.nodeName) || ut.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), re.optSelected || (ie.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), ie.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ie.propFix[this.toLowerCase()] = this
    });
    var dt = /[\t\r\n\f]/g;
    ie.fn.extend({
        addClass: function(e) {
            var t, n, r, o, i, a, s, l = 0;
            if (ie.isFunction(e)) return this.each(function(t) {
                ie(this).addClass(e.call(this, t, H(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(we) || []; n = this[l++];)
                    if (o = H(n), r = 1 === n.nodeType && (" " + o + " ").replace(dt, " ")) {
                        for (a = 0; i = t[a++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        s = ie.trim(r), o !== s && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, o, i, a, s, l = 0;
            if (ie.isFunction(e)) return this.each(function(t) {
                ie(this).removeClass(e.call(this, t, H(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(we) || []; n = this[l++];)
                    if (o = H(n), r = 1 === n.nodeType && (" " + o + " ").replace(dt, " ")) {
                        for (a = 0; i = t[a++];)
                            for (; r.indexOf(" " + i + " ") > -1;) r = r.replace(" " + i + " ", " ");
                        s = ie.trim(r), o !== s && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ie.isFunction(e) ? this.each(function(n) {
                ie(this).toggleClass(e.call(this, n, H(this), t), t)
            }) : this.each(function() {
                var t, r, o, i;
                if ("string" === n)
                    for (r = 0, o = ie(this), i = e.match(we) || []; t = i[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else e !== undefined && "boolean" !== n || (t = H(this), t && Se.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Se.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + H(n) + " ").replace(dt, " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var ft = /\r/g,
        pt = /[\x20\t\r\n\f]+/g;
    ie.fn.extend({
        val: function(e) {
            var t, n, r, o = this[0]; {
                if (arguments.length) return r = ie.isFunction(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = r ? e.call(this, n, ie(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ie.isArray(o) && (o = ie.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), (t = ie.valHooks[this.type] || ie.valHooks[this.nodeName.toLowerCase()]) && "set" in t && t.set(this, o, "value") !== undefined || (this.value = o))
                });
                if (o) return (t = ie.valHooks[o.type] || ie.valHooks[o.nodeName.toLowerCase()]) && "get" in t && (n = t.get(o, "value")) !== undefined ? n : (n = o.value, "string" == typeof n ? n.replace(ft, "") : null == n ? "" : n)
            }
        }
    }), ie.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ie.find.attr(e, "value");
                    return null != t ? t : ie.trim(ie.text(e)).replace(pt, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, o = e.selectedIndex, i = "select-one" === e.type || o < 0, a = i ? null : [], s = i ? o + 1 : r.length, l = o < 0 ? s : i ? o : 0; l < s; l++)
                        if (n = r[l], (n.selected || l === o) && (re.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ie.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ie(n).val(), i) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, o = e.options, i = ie.makeArray(t), a = o.length; a--;) r = o[a], (r.selected = ie.inArray(ie.valHooks.option.get(r), i) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), ie.each(["radio", "checkbox"], function() {
        ie.valHooks[this] = {
            set: function(e, t) {
                if (ie.isArray(t)) return e.checked = ie.inArray(ie(e).val(), t) > -1
            }
        }, re.checkOn || (ie.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var ht = /^(?:focusinfocus|focusoutblur)$/;
    ie.extend(ie.event, {
        trigger: function(t, n, r, o) {
            var i, a, s, l, c, u, d, f = [r || Q],
                p = ne.call(t, "type") ? t.type : t,
                h = ne.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = r = r || Q, 3 !== r.nodeType && 8 !== r.nodeType && !ht.test(p + ie.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), c = p.indexOf(":") < 0 && "on" + p, t = t[ie.expando] ? t : new ie.Event(p, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = r), n = null == n ? [t] : ie.makeArray(n, [t]), d = ie.event.special[p] || {}, o || !d.trigger || !1 !== d.trigger.apply(r, n))) {
                if (!o && !d.noBubble && !ie.isWindow(r)) {
                    for (l = d.delegateType || p, ht.test(l + p) || (a = a.parentNode); a; a = a.parentNode) f.push(a), s = a;
                    s === (r.ownerDocument || Q) && f.push(s.defaultView || s.parentWindow || e)
                }
                for (i = 0;
                    (a = f[i++]) && !t.isPropagationStopped();) t.type = i > 1 ? l : d.bindType || p, u = (Se.get(a, "events") || {})[t.type] && Se.get(a, "handle"), u && u.apply(a, n), (u = c && a[c]) && u.apply && xe(a) && (t.result = u.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = p, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(f.pop(), n) || !xe(r) || c && ie.isFunction(r[p]) && !ie.isWindow(r) && (s = r[c], s && (r[c] = null), ie.event.triggered = p, r[p](), ie.event.triggered = undefined, s && (r[c] = s)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = ie.extend(new ie.Event, n, {
                type: e,
                isSimulated: !0
            });
            ie.event.trigger(r, null, t)
        }
    }), ie.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                ie.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return ie.event.trigger(e, t, n, !0)
        }
    }), ie.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        ie.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ie.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), re.focusin = "onfocusin" in e, re.focusin || ie.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            ie.event.simulate(t, e.target, ie.event.fix(e))
        };
        ie.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    o = Se.access(r, t);
                o || r.addEventListener(e, n, !0), Se.access(r, t, (o || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    o = Se.access(r, t) - 1;
                o ? Se.access(r, t, o) : (r.removeEventListener(e, n, !0), Se.remove(r, t))
            }
        }
    });
    var gt = e.location,
        mt = ie.now(),
        vt = /\?/;
    ie.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, ie.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = undefined
        }
        return n && !n.getElementsByTagName("parsererror").length || ie.error("Invalid XML: " + t), n
    };
    var yt = /#.*$/,
        bt = /([?&])_=[^&]*/,
        wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ct = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Tt = /^(?:GET|HEAD)$/,
        xt = /^\/\//,
        St = {},
        Ot = {},
        Et = "*/".concat("*"),
        Mt = Q.createElement("a");
    Mt.href = gt.href, ie.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gt.href,
            type: "GET",
            isLocal: Ct.test(gt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Et,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ie.parseJSON,
                "text xml": ie.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? B(B(e, ie.ajaxSettings), t) : B(ie.ajaxSettings, e)
        },
        ajaxPrefilter: $(St),
        ajaxTransport: $(Ot),
        ajax: function(t, n) {
            function r(t, n, r, s) {
                var c, d, y, b, C, x = n;
                2 !== w && (w = 2, l && e.clearTimeout(l), o = undefined, a = s || "", T.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, r && (b = q(f, T, r)), b = W(f, b, T, c), c ? (f.ifModified && (C = T.getResponseHeader("Last-Modified"), C && (ie.lastModified[i] = C), (C = T.getResponseHeader("etag")) && (ie.etag[i] = C)), 204 === t || "HEAD" === f.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = b.state, d = b.data, y = b.error, c = !y)) : (y = x, !t && x || (x = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || x) + "", c ? g.resolveWith(p, [d, x, T]) : g.rejectWith(p, [T, x, y]), T.statusCode(v), v = undefined, u && h.trigger(c ? "ajaxSuccess" : "ajaxError", [T, f, c ? d : y]), m.fireWith(p, [T, x]), u && (h.trigger("ajaxComplete", [T, f]), --ie.active || ie.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = undefined), n = n || {};
            var o, i, a, s, l, c, u, d, f = ie.ajaxSetup({}, n),
                p = f.context || f,
                h = f.context && (p.nodeType || p.jquery) ? ie(p) : ie.event,
                g = ie.Deferred(),
                m = ie.Callbacks("once memory"),
                v = f.statusCode || {},
                y = {},
                b = {},
                w = 0,
                C = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === w) {
                            if (!s)
                                for (s = {}; t = wt.exec(a);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return w || (e = b[n] = b[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return w || (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (w < 2)
                                for (t in e) v[t] = [v[t], e[t]];
                            else T.always(e[T.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || C;
                        return o && o.abort(t), r(0, t), this
                    }
                };
            if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, f.url = ((t || f.url || gt.href) + "").replace(yt, "").replace(xt, gt.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = ie.trim(f.dataType || "*").toLowerCase().match(we) || [""], null == f.crossDomain) {
                c = Q.createElement("a");
                try {
                    c.href = f.url, c.href = c.href, f.crossDomain = Mt.protocol + "//" + Mt.host != c.protocol + "//" + c.host
                } catch (e) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = ie.param(f.data, f.traditional)), F(St, f, n, T), 2 === w) return T;
            u = ie.event && f.global, u && 0 == ie.active++ && ie.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Tt.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (vt.test(i) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = bt.test(i) ? i.replace(bt, "$1_=" + mt++) : i + (vt.test(i) ? "&" : "?") + "_=" + mt++)), f.ifModified && (ie.lastModified[i] && T.setRequestHeader("If-Modified-Since", ie.lastModified[i]), ie.etag[i] && T.setRequestHeader("If-None-Match", ie.etag[i])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && T.setRequestHeader("Content-Type", f.contentType), T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Et + "; q=0.01" : "") : f.accepts["*"]);
            for (d in f.headers) T.setRequestHeader(d, f.headers[d]);
            if (f.beforeSend && (!1 === f.beforeSend.call(p, T, f) || 2 === w)) return T.abort();
            C = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[d](f[d]);
            if (o = F(Ot, f, n, T)) {
                if (T.readyState = 1, u && h.trigger("ajaxSend", [T, f]), 2 === w) return T;
                f.async && f.timeout > 0 && (l = e.setTimeout(function() {
                    T.abort("timeout")
                }, f.timeout));
                try {
                    w = 1, o.send(y, r)
                } catch (e) {
                    if (!(w < 2)) throw e;
                    r(-1, e)
                }
            } else r(-1, "No Transport");
            return T
        },
        getJSON: function(e, t, n) {
            return ie.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return ie.get(e, undefined, t, "script")
        }
    }), ie.each(["get", "post"], function(e, t) {
        ie[t] = function(e, n, r, o) {
            return ie.isFunction(n) && (o = o || r, r = n, n = undefined), ie.ajax(ie.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: r
            }, ie.isPlainObject(e) && e))
        }
    }), ie._evalUrl = function(e) {
        return ie.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ie.fn.extend({
        wrapAll: function(e) {
            var t;
            return ie.isFunction(e) ? this.each(function(t) {
                ie(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = ie(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return ie.isFunction(e) ? this.each(function(t) {
                ie(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = ie(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ie.isFunction(e);
            return this.each(function(n) {
                ie(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ie.nodeName(this, "body") || ie(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ie.expr.filters.hidden = function(e) {
        return !ie.expr.filters.visible(e)
    }, ie.expr.filters.visible = function(e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    };
    var kt = /%20/g,
        jt = /\[\]$/,
        It = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        Pt = /^(?:input|select|textarea|keygen)/i;
    ie.param = function(e, t) {
        var n, r = [],
            o = function(e, t) {
                t = ie.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (t === undefined && (t = ie.ajaxSettings && ie.ajaxSettings.traditional), ie.isArray(e) || e.jquery && !ie.isPlainObject(e)) ie.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e) U(n, e[n], t, o);
        return r.join("&").replace(kt, "+")
    }, ie.fn.extend({
        serialize: function() {
            return ie.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ie.prop(this, "elements");
                return e ? ie.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ie(this).is(":disabled") && Pt.test(this.nodeName) && !Nt.test(e) && (this.checked || !Pe.test(e))
            }).map(function(e, t) {
                var n = ie(this).val();
                return null == n ? null : ie.isArray(n) ? ie.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(It, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(It, "\r\n")
                }
            }).get()
        }
    }), ie.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var At = {
            0: 200,
            1223: 204
        },
        _t = ie.ajaxSettings.xhr();
    re.cors = !!_t && "withCredentials" in _t, re.ajax = _t = !!_t, ie.ajaxTransport(function(t) {
        var n, r;
        if (re.cors || _t && !t.crossDomain) return {
            send: function(o, i) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                for (a in o) s.setRequestHeader(a, o[a]);
                n = function(e) {
                    return function() {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i(At[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = n("error"), s.onabort !== undefined ? s.onabort = r : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), ie.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return ie.globalEval(e), e
            }
        }
    }), ie.ajaxPrefilter("script", function(e) {
        e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), ie.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, o) {
                    t = ie("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), Q.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Lt = [],
        Dt = /(=)\?(?=&|$)|\?\?/;
    ie.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Lt.pop() || ie.expando + "_" + mt++;
            return this[e] = !0, e
        }
    }), ie.ajaxPrefilter("json jsonp", function(t, n, r) {
        var o, i, a, s = !1 !== t.jsonp && (Dt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Dt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = ie.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Dt, "$1" + o) : !1 !== t.jsonp && (t.url += (vt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return a || ie.error(o + " was not called"), a[0]
        }, t.dataTypes[0] = "json", i = e[o], e[o] = function() {
            a = arguments
        }, r.always(function() {
            i === undefined ? ie(e).removeProp(o) : e[o] = i, t[o] && (t.jsonpCallback = n.jsonpCallback, Lt.push(o)), a && ie.isFunction(i) && i(a[0]), a = i = undefined
        }), "script"
    }), ie.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || Q;
        var r = he.exec(e),
            o = !n && [];
        return r ? [t.createElement(r[1])] : (r = f([e], t, o), o && o.length && ie(o).remove(), ie.merge([], r.childNodes))
    };
    var Rt = ie.fn.load;
    ie.fn.load = function(e, t, n) {
        if ("string" != typeof e && Rt) return Rt.apply(this, arguments);
        var r, o, i, a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = ie.trim(e.slice(s)), e = e.slice(0, s)), ie.isFunction(t) ? (n = t, t = undefined) : t && "object" == typeof t && (o = "POST"), a.length > 0 && ie.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments, a.html(r ? ie("<div>").append(ie.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, i || [e.responseText, t, e])
            })
        }), this
    }, ie.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ie.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), ie.expr.filters.animated = function(e) {
        return ie.grep(ie.timers, function(t) {
            return e === t.elem
        }).length
    }, ie.offset = {
        setOffset: function(e, t, n) {
            var r, o, i, a, s, l, c, u = ie.css(e, "position"),
                d = ie(e),
                f = {};
            "static" === u && (e.style.position = "relative"), s = d.offset(), i = ie.css(e, "top"), l = ie.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (i + l).indexOf("auto") > -1, c ? (r = d.position(), a = r.top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(l) || 0), ie.isFunction(t) && (t = t.call(e, n, ie.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : d.css(f)
        }
    }, ie.fn.extend({
        offset: function(e) {
            if (arguments.length) return e === undefined ? this : this.each(function(t) {
                ie.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0],
                o = {
                    top: 0,
                    left: 0
                },
                i = r && r.ownerDocument;
            if (i) return t = i.documentElement, ie.contains(t, r) ? (o = r.getBoundingClientRect(), n = G(i), {
                top: o.top + n.pageYOffset - t.clientTop,
                left: o.left + n.pageXOffset - t.clientLeft
            }) : o
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === ie.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ie.nodeName(e[0], "html") || (r = e.offset()), r.top += ie.css(e[0], "borderTopWidth", !0), r.left += ie.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - ie.css(n, "marginTop", !0),
                    left: t.left - r.left - ie.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === ie.css(e, "position");) e = e.offsetParent;
                return e || Je
            })
        }
    }), ie.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        ie.fn[e] = function(r) {
            return Te(this, function(e, r, o) {
                var i = G(e);
                if (o === undefined) return i ? i[t] : e[r];
                i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o
            }, e, r, arguments.length)
        }
    }), ie.each(["top", "left"], function(e, t) {
        ie.cssHooks[t] = M(re.pixelPosition, function(e, n) {
            if (n) return n = E(e, t), Ke.test(n) ? ie(e).position()[t] + "px" : n
        })
    }), ie.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        ie.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            ie.fn[r] = function(r, o) {
                var i = arguments.length && (n || "boolean" != typeof r),
                    a = n || (!0 === r || !0 === o ? "margin" : "border");
                return Te(this, function(t, n, r) {
                    var o;
                    return ie.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : r === undefined ? ie.css(t, n, a) : ie.style(t, n, r, a)
                }, t, i ? r : undefined, i, null)
            }
        })
    }), ie.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function() {
            return this.length
        }
    }), ie.fn.andSelf = ie.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ie
    });
    var Vt = e.jQuery,
        zt = e.$;
    return ie.noConflict = function(t) {
        return e.$ === ie && (e.$ = zt), t && e.jQuery === ie && (e.jQuery = Vt), ie
    }, t || (e.jQuery = e.$ = ie), ie
}),
function(e, t) {
    fontSpy = function(e, n) {
        var r = t("html"),
            o = t("body"),
            i = e;
        if ("string" != typeof i || "" === i) throw "A valid fontName is required. fontName must be a string and must not be an empty string.";
        var a = {
                font: i,
                fontClass: i.toLowerCase().replace(/\s/g, ""),
                success: function() {},
                failure: function() {},
                testFont: "Courier New",
                testString: "QW@HhsXJ",
                glyphs: "",
                delay: 50,
                timeOut: 1e3,
                callback: t.noop
            },
            s = t.extend(a, n),
            l = t("<span>" + s.testString + s.glyphs + "</span>").css("position", "absolute").css("top", "-9999px").css("left", "-9999px").css("visibility", "hidden").css("fontFamily", s.testFont).css("fontSize", "250px");
        o.append(l);
        var c = l.outerWidth();
        l.css("fontFamily", s.font + "," + s.testFont);
        var u = function() {
                r.addClass("no-" + s.fontClass), s && s.failure && s.failure(), s.callback(new Error("FontSpy timeout")), l.remove()
            },
            d = function() {
                s.callback(), r.addClass(s.fontClass), s && s.success && s.success(), l.remove()
            },
            f = function() {
                setTimeout(p, s.delay), s.timeOut = s.timeOut - s.delay
            },
            p = function() {
                var e = l.outerWidth();
                c !== e ? d() : s.timeOut < 0 ? u() : f()
            };
        p()
    }
}(0, jQuery),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(e) {
    var t, n, r, o, i, a, s = "Close",
        l = "BeforeClose",
        c = "AfterClose",
        u = "BeforeAppend",
        d = "MarkupParse",
        f = "Open",
        p = "Change",
        h = "mfp",
        g = "." + h,
        m = "mfp-ready",
        v = "mfp-removing",
        y = "mfp-prevent-close",
        b = function() {},
        w = !!window.jQuery,
        C = e(window),
        T = function(e, n) {
            t.ev.on(h + e + g, n)
        },
        x = function(t, n, r, o) {
            var i = document.createElement("div");
            return i.className = "mfp-" + t, r && (i.innerHTML = r), o ? n && n.appendChild(i) : (i = e(i), n && i.appendTo(n)), i
        },
        S = function(n, r) {
            t.ev.triggerHandler(h + n, r), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(r) ? r : [r]))
        },
        O = function(n) {
            return n === a && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), a = n), t.currTemplate.closeBtn
        },
        E = function() {
            e.magnificPopup.instance || (t = new b, t.init(), e.magnificPopup.instance = t)
        },
        M = function() {
            var e = document.createElement("p").style,
                t = ["ms", "O", "Moz", "Webkit"];
            if (e.transition !== undefined) return !0;
            for (; t.length;)
                if (t.pop() + "Transition" in e) return !0;
            return !1
        };
    b.prototype = {
        constructor: b,
        init: function() {
            var n = navigator.appVersion;
            t.isIE7 = -1 !== n.indexOf("MSIE 7."), t.isIE8 = -1 !== n.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = M(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), r = e(document), t.popupsCache = {}
        },
        open: function(n) {
            var o;
            if (!1 === n.isObj) {
                t.items = n.items.toArray(), t.index = 0;
                var a, s = n.items;
                for (o = 0; o < s.length; o++)
                    if (a = s[o], a.parsed && (a = a.el[0]), a === n.el[0]) {
                        t.index = o;
                        break
                    }
            } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;
            if (t.isOpen) return void t.updateItemHTML();
            t.types = [], i = "", n.mainEl && n.mainEl.length ? t.ev = n.mainEl.eq(0) : t.ev = r, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = x("bg").on("click" + g, function() {
                t.close()
            }), t.wrap = x("wrap").attr("tabindex", -1).on("click" + g, function(e) {
                t._checkIfClose(e.target) && t.close()
            }), t.container = x("container", t.wrap)), t.contentContainer = x("content"), t.st.preloader && (t.preloader = x("preloader", t.container, t.st.tLoading));
            var l = e.magnificPopup.modules;
            for (o = 0; o < l.length; o++) {
                var c = l[o];
                c = c.charAt(0).toUpperCase() + c.slice(1), t["init" + c].call(t)
            }
            S("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (T(d, function(e, t, n, r) {
                n.close_replaceWith = O(r.type)
            }), i += " mfp-close-btn-in") : t.wrap.append(O())), t.st.alignTop && (i += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
                overflow: t.st.overflowY,
                overflowX: "hidden",
                overflowY: t.st.overflowY
            }) : t.wrap.css({
                top: C.scrollTop(),
                position: "absolute"
            }), (!1 === t.st.fixedBgPos || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                height: r.height(),
                position: "absolute"
            }), t.st.enableEscapeKey && r.on("keyup" + g, function(e) {
                27 === e.keyCode && t.close()
            }), C.on("resize" + g, function() {
                t.updateSize()
            }), t.st.closeOnContentClick || (i += " mfp-auto-cursor"), i && t.wrap.addClass(i);
            var u = t.wH = C.height(),
                p = {};
            if (t.fixedContentPos && t._hasScrollBar(u)) {
                var h = t._getScrollbarSize();
                h && (p.marginRight = h)
            }
            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : p.overflow = "hidden");
            var v = t.st.mainClass;
            return t.isIE7 && (v += " mfp-ie7"), v && t._addClassToMFP(v), t.updateItemHTML(), S("BuildControls"), e("html").css(p), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function() {
                t.content ? (t._addClassToMFP(m), t._setFocus()) : t.bgOverlay.addClass(m), r.on("focusin" + g, t._onFocusIn)
            }, 16), t.isOpen = !0, t.updateSize(u), S(f), n
        },
        close: function() {
            t.isOpen && (S(l), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(v), setTimeout(function() {
                t._close()
            }, t.st.removalDelay)) : t._close())
        },
        _close: function() {
            S(s);
            var n = v + " " + m + " ";
            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
                var o = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : o.overflow = "", e("html").css(o)
            }
            r.off("keyup" + g + " focusin" + g), t.ev.off(g), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type] || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, S(c)
        },
        updateSize: function(e) {
            if (t.isIOS) {
                var n = document.documentElement.clientWidth / window.innerWidth,
                    r = window.innerHeight * n;
                t.wrap.css("height", r), t.wH = r
            } else t.wH = e || C.height();
            t.fixedContentPos || t.wrap.css("height", t.wH), S("Resize")
        },
        updateItemHTML: function() {
            var n = t.items[t.index];
            t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
            var r = n.type;
            if (S("BeforeChange", [t.currItem ? t.currItem.type : "", r]), t.currItem = n, !t.currTemplate[r]) {
                var i = !!t.st[r] && t.st[r].markup;
                S("FirstMarkupParse", i), t.currTemplate[r] = !i || e(i)
            }
            o && o !== n.type && t.container.removeClass("mfp-" + o + "-holder");
            var a = t["get" + r.charAt(0).toUpperCase() + r.slice(1)](n, t.currTemplate[r]);
            t.appendContent(a, r), n.preloaded = !0, S(p, n), o = n.type, t.container.prepend(t.contentContainer), S("AfterChange")
        },
        appendContent: function(e, n) {
            t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && !0 === t.currTemplate[n] ? t.content.find(".mfp-close").length || t.content.append(O()) : t.content = e : t.content = "", S(u), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content)
        },
        parseEl: function(n) {
            var r, o = t.items[n];
            if (o.tagName ? o = {
                    el: e(o)
                } : (r = o.type, o = {
                    data: o,
                    src: o.src
                }), o.el) {
                for (var i = t.types, a = 0; a < i.length; a++)
                    if (o.el.hasClass("mfp-" + i[a])) {
                        r = i[a];
                        break
                    }
                o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
            }
            return o.type = r || t.st.type || "inline", o.index = n, o.parsed = !0, t.items[n] = o, S("ElementParse", o), t.items[n]
        },
        addGroup: function(e, n) {
            var r = function(r) {
                r.mfpEl = this, t._openClick(r, e, n)
            };
            n || (n = {});
            var o = "click.magnificPopup";
            n.mainEl = e, n.items ? (n.isObj = !0, e.off(o).on(o, r)) : (n.isObj = !1, n.delegate ? e.off(o).on(o, n.delegate, r) : (n.items = e, e.off(o).on(o, r)))
        },
        _openClick: function(n, r, o) {
            if ((o.midClick !== undefined ? o.midClick : e.magnificPopup.defaults.midClick) || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) {
                var i = o.disableOn !== undefined ? o.disableOn : e.magnificPopup.defaults.disableOn;
                if (i)
                    if (e.isFunction(i)) {
                        if (!i.call(t)) return !0
                    } else if (C.width() < i) return !0;
                n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), o.el = e(n.mfpEl), o.delegate && (o.items = r.find(o.delegate)), t.open(o)
            }
        },
        updateStatus: function(e, r) {
            if (t.preloader) {
                n !== e && t.container.removeClass("mfp-s-" + n), r || "loading" !== e || (r = t.st.tLoading);
                var o = {
                    status: e,
                    text: r
                };
                S("UpdateStatus", o), e = o.status, r = o.text, t.preloader.html(r), t.preloader.find("a").on("click", function(e) {
                    e.stopImmediatePropagation()
                }), t.container.addClass("mfp-s-" + e), n = e
            }
        },
        _checkIfClose: function(n) {
            if (!e(n).hasClass(y)) {
                var r = t.st.closeOnContentClick,
                    o = t.st.closeOnBgClick;
                if (r && o) return !0;
                if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;
                if (n === t.content[0] || e.contains(t.content[0], n)) {
                    if (r) return !0
                } else if (o && e.contains(document, n)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) {
            t.bgOverlay.addClass(e), t.wrap.addClass(e)
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
        },
        _hasScrollBar: function(e) {
            return (t.isIE7 ? r.height() : document.body.scrollHeight) > (e || C.height())
        },
        _setFocus: function() {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function(n) {
            if (n.target !== t.wrap[0] && !e.contains(t.wrap[0], n.target)) return t._setFocus(), !1
        },
        _parseMarkup: function(t, n, r) {
            var o;
            r.data && (n = e.extend(r.data, n)), S(d, [t, n, r]), e.each(n, function(e, n) {
                if (n === undefined || !1 === n) return !0;
                if (o = e.split("_"), o.length > 1) {
                    var r = t.find(g + "-" + o[0]);
                    if (r.length > 0) {
                        var i = o[1];
                        "replaceWith" === i ? r[0] !== n[0] && r.replaceWith(n) : "img" === i ? r.is("img") ? r.attr("src", n) : r.replaceWith('<img src="' + n + '" class="' + r.attr("class") + '" />') : r.attr(o[1], n)
                    }
                } else t.find(g + "-" + e).html(n)
            })
        },
        _getScrollbarSize: function() {
            if (t.scrollbarSize === undefined) {
                var e = document.createElement("div");
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    }, e.magnificPopup = {
        instance: null,
        proto: b.prototype,
        modules: [],
        open: function(t, n) {
            return E(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t)
        },
        close: function() {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function(t, n) {
            n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, e.fn.magnificPopup = function(n) {
        E();
        var r = e(this);
        if ("string" == typeof n)
            if ("open" === n) {
                var o, i = w ? r.data("magnificPopup") : r[0].magnificPopup,
                    a = parseInt(arguments[1], 10) || 0;
                i.items ? o = i.items[a] : (o = r, i.delegate && (o = o.find(i.delegate)), o = o.eq(a)), t._openClick({
                    mfpEl: o
                }, r, i)
            } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
        else n = e.extend(!0, {}, n), w ? r.data("magnificPopup", n) : r[0].magnificPopup = n, t.addGroup(r, n);
        return r
    };
    var k, j, I, N = "inline",
        P = function() {
            I && (j.after(I.addClass(k)).detach(), I = null)
        };
    e.magnificPopup.registerModule(N, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                t.types.push(N), T(s + "." + N, function() {
                    P()
                })
            },
            getInline: function(n, r) {
                if (P(), n.src) {
                    var o = t.st.inline,
                        i = e(n.src);
                    if (i.length) {
                        var a = i[0].parentNode;
                        a && a.tagName && (j || (k = o.hiddenClass, j = x(k), k = "mfp-" + k), I = i.after(j).detach().removeClass(k)), t.updateStatus("ready")
                    } else t.updateStatus("error", o.tNotFound), i = e("<div>");
                    return n.inlineElement = i, i
                }
                return t.updateStatus("ready"), t._parseMarkup(r, {}, n), r
            }
        }
    });
    var A, _ = "ajax",
        L = function() {
            A && e(document.body).removeClass(A)
        },
        D = function() {
            L(), t.req && t.req.abort()
        };
    e.magnificPopup.registerModule(_, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                t.types.push(_), A = t.st.ajax.cursor, T(s + "." + _, D), T("BeforeChange." + _, D)
            },
            getAjax: function(n) {
                A && e(document.body).addClass(A), t.updateStatus("loading");
                var r = e.extend({
                    url: n.src,
                    success: function(r, o, i) {
                        var a = {
                            data: r,
                            xhr: i
                        };
                        S("ParseAjax", a), t.appendContent(e(a.data), _), n.finished = !0, L(), t._setFocus(), setTimeout(function() {
                            t.wrap.addClass(m)
                        }, 16), t.updateStatus("ready"), S("AjaxContentAdded")
                    },
                    error: function() {
                        L(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src))
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(r), ""
            }
        }
    });
    var R, V = function(n) {
        if (n.data && n.data.title !== undefined) return n.data.title;
        var r = t.st.image.titleSrc;
        if (r) {
            if (e.isFunction(r)) return r.call(t, n);
            if (n.el) return n.el.attr(r) || ""
        }
        return ""
    };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var n = t.st.image,
                    r = ".image";
                t.types.push("image"), T(f + r, function() {
                    "image" === t.currItem.type && n.cursor && e(document.body).addClass(n.cursor)
                }), T(s + r, function() {
                    n.cursor && e(document.body).removeClass(n.cursor), C.off("resize" + g)
                }), T("Resize" + r, t.resizeImage), t.isLowIE && T("AfterChange", t.resizeImage)
            },
            resizeImage: function() {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var n = 0;
                    t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n)
                }
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0, R && clearInterval(R), e.isCheckingImgSize = !1, S("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
            },
            findImageSize: function(e) {
                var n = 0,
                    r = e.img[0],
                    o = function(i) {
                        R && clearInterval(R), R = setInterval(function() {
                            if (r.naturalWidth > 0) return void t._onImageHasSize(e);
                            n > 200 && clearInterval(R), n++, 3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500)
                        }, i)
                    };
                o(1)
            },
            getImage: function(n, r) {
                var o = 0,
                    i = function() {
                        n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, S("ImageLoadComplete")) : (o++, o < 200 ? setTimeout(i, 100) : a()))
                    },
                    a = function() {
                        n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
                    },
                    s = t.st.image,
                    l = r.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img", n.el && n.el.find("img").length && (c.alt = n.el.find("img").attr("alt")), n.img = e(c).on("load.mfploader", i).on("error.mfploader", a), c.src = n.src, l.is("img") && (n.img = n.img.clone()), c = n.img[0], c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1)
                }
                return t._parseMarkup(r, {
                    title: V(n),
                    img_replaceWith: n.img
                }, n), t.resizeImage(), n.hasSize ? (R && clearInterval(R), n.loadError ? (r.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", n.src))) : (r.removeClass("mfp-loading"), t.updateStatus("ready")), r) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, r.addClass("mfp-loading"), t.findImageSize(n)), r)
            }
        }
    });
    var z, H = function() {
        return z === undefined && (z = document.createElement("p").style.MozTransform !== undefined), z
    };
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e, n = t.st.zoom,
                    r = ".zoom";
                if (n.enabled && t.supportsTransition) {
                    var o, i, a = n.duration,
                        c = function(e) {
                            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                r = "all " + n.duration / 1e3 + "s " + n.easing,
                                o = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                i = "transition";
                            return o["-webkit-" + i] = o["-moz-" + i] = o["-o-" + i] = o[i] = r, t.css(o), t
                        },
                        u = function() {
                            t.content.css("visibility", "visible")
                        };
                    T("BuildControls" + r, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.content.css("visibility", "hidden"), !(e = t._getItemToZoom())) return void u();
                            i = c(e), i.css(t._getOffset()), t.wrap.append(i), o = setTimeout(function() {
                                i.css(t._getOffset(!0)), o = setTimeout(function() {
                                    u(), setTimeout(function() {
                                        i.remove(), e = i = null, S("ZoomAnimationEnded")
                                    }, 16)
                                }, a)
                            }, 16)
                        }
                    }), T(l + r, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.st.removalDelay = a, !e) {
                                if (!(e = t._getItemToZoom())) return;
                                i = c(e)
                            }
                            i.css(t._getOffset(!0)), t.wrap.append(i), t.content.css("visibility", "hidden"), setTimeout(function() {
                                i.css(t._getOffset())
                            }, 16)
                        }
                    }), T(s + r, function() {
                        t._allowZoom() && (u(), i && i.remove(), e = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function() {
                return !!t.currItem.hasSize && t.currItem.img
            },
            _getOffset: function(n) {
                var r;
                r = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var o = r.offset(),
                    i = parseInt(r.css("padding-top"), 10),
                    a = parseInt(r.css("padding-bottom"), 10);
                o.top -= e(window).scrollTop() - i;
                var s = {
                    width: r.width(),
                    height: (w ? r.innerHeight() : r[0].offsetHeight) - a - i
                };
                return H() ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left, s.top = o.top), s
            }
        }
    });
    var $ = "iframe",
        F = "//about:blank",
        B = function(e) {
            if (t.currTemplate[$]) {
                var n = t.currTemplate[$].find("iframe");
                n.length && (e || (n[0].src = F), t.isIE8 && n.css("display", e ? "block" : "none"))
            }
        };
    e.magnificPopup.registerModule($, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                t.types.push($), T("BeforeChange", function(e, t, n) {
                    t !== n && (t === $ ? B() : n === $ && B(!0))
                }), T(s + "." + $, function() {
                    B()
                })
            },
            getIframe: function(n, r) {
                var o = n.src,
                    i = t.st.iframe;
                e.each(i.patterns, function() {
                    if (o.indexOf(this.index) > -1) return this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1
                });
                var a = {};
                return i.srcAction && (a[i.srcAction] = o), t._parseMarkup(r, a, n), t.updateStatus("ready"), r
            }
        }
    });
    var q = function(e) {
            var n = t.items.length;
            return e > n - 1 ? e - n : e < 0 ? n + e : e
        },
        W = function(e, t, n) {
            return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
        };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var n = t.st.gallery,
                    o = ".mfp-gallery",
                    a = Boolean(e.fn.mfpFastClick);
                if (t.direction = !0, !n || !n.enabled) return !1;
                i += " mfp-gallery", T(f + o, function() {
                    n.navigateByImgClick && t.wrap.on("click" + o, ".mfp-img", function() {
                        if (t.items.length > 1) return t.next(), !1
                    }), r.on("keydown" + o, function(e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    })
                }), T("UpdateStatus" + o, function(e, n) {
                    n.text && (n.text = W(n.text, t.currItem.index, t.items.length))
                }), T(d + o, function(e, r, o, i) {
                    var a = t.items.length;
                    o.counter = a > 1 ? W(n.tCounter, i.index, a) : ""
                }), T("BuildControls" + o, function() {
                    if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                        var r = n.arrowMarkup,
                            o = t.arrowLeft = e(r.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(y),
                            i = t.arrowRight = e(r.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(y),
                            s = a ? "mfpFastClick" : "click";
                        o[s](function() {
                            t.prev()
                        }), i[s](function() {
                            t.next()
                        }), t.isIE7 && (x("b", o[0], !1, !0), x("a", o[0], !1, !0), x("b", i[0], !1, !0), x("a", i[0], !1, !0)), t.container.append(o.add(i))
                    }
                }), T(p + o, function() {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function() {
                        t.preloadNearbyImages(), t._preloadTimeout = null
                    }, 16)
                }), T(s + o, function() {
                    r.off(o), t.wrap.off("click" + o), t.arrowLeft && a && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null
                })
            },
            next: function() {
                t.direction = !0, t.index = q(t.index + 1), t.updateItemHTML()
            },
            prev: function() {
                t.direction = !1, t.index = q(t.index - 1), t.updateItemHTML()
            },
            goTo: function(e) {
                t.direction = e >= t.index, t.index = e, t.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var e, n = t.st.gallery.preload,
                    r = Math.min(n[0], t.items.length),
                    o = Math.min(n[1], t.items.length);
                for (e = 1; e <= (t.direction ? o : r); e++) t._preloadItem(t.index + e);
                for (e = 1; e <= (t.direction ? r : o); e++) t._preloadItem(t.index - e)
            },
            _preloadItem: function(n) {
                if (n = q(n), !t.items[n].preloaded) {
                    var r = t.items[n];
                    r.parsed || (r = t.parseEl(n)), S("LazyLoad", r), "image" === r.type && (r.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                        r.hasSize = !0
                    }).on("error.mfploader", function() {
                        r.hasSize = !0, r.loadError = !0, S("LazyLoadError", r)
                    }).attr("src", r.src)), r.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    e.magnificPopup.registerModule(U, {
            options: {
                replaceSrc: function(e) {
                    return e.src.replace(/\.\w+$/, function(e) {
                        return "@2x" + e
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var e = t.st.retina,
                            n = e.ratio;
                        n = isNaN(n) ? n() : n, n > 1 && (T("ImageHasSize." + U, function(e, t) {
                            t.img.css({
                                "max-width": t.img[0].naturalWidth / n,
                                width: "100%"
                            })
                        }), T("ElementParse." + U, function(t, r) {
                            r.src = e.replaceSrc(r, n)
                        }))
                    }
                }
            }
        }),
        function() {
            var t = "ontouchstart" in window,
                n = function() {
                    C.off("touchmove" + o + " touchend" + o)
                },
                r = "mfpFastClick",
                o = "." + r;
            e.fn.mfpFastClick = function(r) {
                return e(this).each(function() {
                    var i, a = e(this);
                    if (t) {
                        var s, l, c, u, d, f;
                        a.on("touchstart" + o, function(e) {
                            u = !1, f = 1, d = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], l = d.clientX, c = d.clientY, C.on("touchmove" + o, function(e) {
                                d = e.originalEvent ? e.originalEvent.touches : e.touches, f = d.length, d = d[0], (Math.abs(d.clientX - l) > 10 || Math.abs(d.clientY - c) > 10) && (u = !0, n())
                            }).on("touchend" + o, function(e) {
                                n(), u || f > 1 || (i = !0, e.preventDefault(), clearTimeout(s), s = setTimeout(function() {
                                    i = !1
                                }, 1e3), r())
                            })
                        })
                    }
                    a.on("click" + o, function() {
                        i || r()
                    })
                })
            }, e.fn.destroyMfpFastClick = function() {
                e(this).off("touchstart" + o + " click" + o), t && C.off("touchmove" + o + " touchend" + o)
            }
        }(), E()
}),
function(e, t, n) {
    function r(t, n) {
        this.bodyOverflowX, this.callbacks = {
            hide: [],
            show: []
        }, this.checkInterval = null, this.Content, this.$el = e(t), this.$elProxy, this.elProxyPosition, this.enabled = !0, this.options = e.extend({}, s, n), this.mouseIsOverProxy = !1, this.namespace = "tooltipster-" + Math.round(1e5 * Math.random()), this.Status = "hidden", this.timerHide = null, this.timerShow = null, this.$tooltip, this.options.iconTheme = this.options.iconTheme.replace(".", ""), this.options.theme = this.options.theme.replace(".", ""), this._init()
    }

    function o(t, n) {
        var r = !0;
        return e.each(t, function(e) {
            if ("undefined" == typeof n[e] || t[e] !== n[e]) return r = !1, !1
        }), r
    }

    function i() {
        return !c && l
    }

    function a() {
        var e = n.body || n.documentElement,
            t = e.style,
            r = "transition";
        if ("string" == typeof t[r]) return !0;
        v = ["Moz", "Webkit", "Khtml", "O", "ms"], r = r.charAt(0).toUpperCase() + r.substr(1);
        for (var o = 0; o < v.length; o++)
            if ("string" == typeof t[v[o] + r]) return !0;
        return !1
    }
    var s = {
        animation: "fade",
        arrow: !0,
        arrowColor: "",
        autoClose: !0,
        content: null,
        contentAsHTML: !1,
        contentCloning: !0,
        debug: !0,
        delay: 200,
        minWidth: 0,
        maxWidth: null,
        functionInit: function() {},
        functionBefore: function(e, t) {
            t()
        },
        functionReady: function() {},
        functionAfter: function() {},
        hideOnClick: !1,
        icon: "(?)",
        iconCloning: !0,
        iconDesktop: !1,
        iconTouch: !1,
        iconTheme: "tooltipster-icon",
        interactive: !1,
        interactiveTolerance: 350,
        multiple: !1,
        offsetX: 0,
        offsetY: 0,
        onlyOne: !1,
        position: "top",
        positionTracker: !1,
        positionTrackerCallback: function() {
            "hover" == this.option("trigger") && this.option("autoClose") && this.hide()
        },
        restoration: "current",
        speed: 350,
        timer: 0,
        theme: "tooltipster-default",
        touchDevices: !0,
        trigger: "hover",
        updateAnimation: !0
    };
    r.prototype = {
        _init: function() {
            var t = this;
            if (n.querySelector) {
                var r = null;
                t.$el.data("tooltipster-initialTitle") === undefined && (r = t.$el.attr("title"), r === undefined && (r = null), t.$el.data("tooltipster-initialTitle", r)), null !== t.options.content ? t._content_set(t.options.content) : t._content_set(r);
                var o = t.options.functionInit.call(t.$el, t.$el, t.Content);
                void 0 !== o && t._content_set(o), t.$el.removeAttr("title").addClass("tooltipstered"), !l && t.options.iconDesktop || l && t.options.iconTouch ? ("string" == typeof t.options.icon ? (t.$elProxy = e('<span class="' + t.options.iconTheme + '"></span>'), t.$elProxy.text(t.options.icon)) : t.options.iconCloning ? t.$elProxy = t.options.icon.clone(!0) : t.$elProxy = t.options.icon, t.$elProxy.insertAfter(t.$el)) : t.$elProxy = t.$el, "hover" == t.options.trigger ? (t.$elProxy.on("mouseenter." + t.namespace, function() {
                    i() && !t.options.touchDevices || (t.mouseIsOverProxy = !0, t._show())
                }).on("mouseleave." + t.namespace, function() {
                    i() && !t.options.touchDevices || (t.mouseIsOverProxy = !1)
                }), l && t.options.touchDevices && t.$elProxy.on("touchstart." + t.namespace, function() {
                    t._showNow()
                })) : "click" == t.options.trigger && t.$elProxy.on("click." + t.namespace, function() {
                    i() && !t.options.touchDevices || t._show()
                })
            }
        },
        _show: function() {
            var e = this;
            "shown" != e.Status && "appearing" != e.Status && (e.options.delay ? e.timerShow = setTimeout(function() {
                ("click" == e.options.trigger || "hover" == e.options.trigger && e.mouseIsOverProxy) && e._showNow()
            }, e.options.delay) : e._showNow())
        },
        _showNow: function(n) {
            var r = this;
            r.options.functionBefore.call(r.$el, r.$el, function() {
                if (r.enabled && null !== r.Content) {
                    n && r.callbacks.show.push(n), r.callbacks.hide = [], clearTimeout(r.timerShow), r.timerShow = null, clearTimeout(r.timerHide), r.timerHide = null, r.options.onlyOne && e(".tooltipstered").not(r.$el).each(function(t, n) {
                        var r = e(n),
                            o = r.data("tooltipster-ns");
                        e.each(o, function(e, t) {
                            var n = r.data(t),
                                o = n.status(),
                                i = n.option("autoClose");
                            "hidden" !== o && "disappearing" !== o && i && n.hide()
                        })
                    });
                    var o = function() {
                        r.Status = "shown", e.each(r.callbacks.show, function(e, t) {
                            t.call(r.$el)
                        }), r.callbacks.show = []
                    };
                    if ("hidden" !== r.Status) {
                        var i = 0;
                        "disappearing" === r.Status ? (r.Status = "appearing", a() ? (r.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-" + r.options.animation + "-show"), r.options.speed > 0 && r.$tooltip.delay(r.options.speed), r.$tooltip.queue(o)) : r.$tooltip.stop().fadeIn(o)) : "shown" === r.Status && o()
                    } else {
                        r.Status = "appearing";
                        var i = r.options.speed;
                        r.bodyOverflowX = e("body").css("overflow-x"), e("body").css("overflow-x", "hidden");
                        var s = "tooltipster-" + r.options.animation,
                            c = "-webkit-transition-duration: " + r.options.speed + "ms; -webkit-animation-duration: " + r.options.speed + "ms; -moz-transition-duration: " + r.options.speed + "ms; -moz-animation-duration: " + r.options.speed + "ms; -o-transition-duration: " + r.options.speed + "ms; -o-animation-duration: " + r.options.speed + "ms; -ms-transition-duration: " + r.options.speed + "ms; -ms-animation-duration: " + r.options.speed + "ms; transition-duration: " + r.options.speed + "ms; animation-duration: " + r.options.speed + "ms;",
                            u = r.options.minWidth ? "min-width:" + Math.round(r.options.minWidth) + "px;" : "",
                            d = r.options.maxWidth ? "max-width:" + Math.round(r.options.maxWidth) + "px;" : "",
                            f = r.options.interactive ? "pointer-events: auto;" : "";
                        if (r.$tooltip = e('<div class="tooltipster-base ' + r.options.theme + '" style="' + u + " " + d + " " + f + " " + c + '"><div class="tooltipster-content"></div></div>'), a() && r.$tooltip.addClass(s), r._content_insert(), r.$tooltip.appendTo("body"), r.reposition(), r.options.functionReady.call(r.$el, r.$el, r.$tooltip), a() ? (r.$tooltip.addClass(s + "-show"), r.options.speed > 0 && r.$tooltip.delay(r.options.speed), r.$tooltip.queue(o)) : r.$tooltip.css("display", "none").fadeIn(r.options.speed, o), r._interval_set(), e(t).on("scroll." + r.namespace + " resize." + r.namespace, function() {
                                r.reposition()
                            }), r.options.autoClose)
                            if (e("body").off("." + r.namespace), "hover" == r.options.trigger) {
                                if (l && setTimeout(function() {
                                        e("body").on("touchstart." + r.namespace, function() {
                                            r.hide()
                                        })
                                    }, 0), r.options.interactive) {
                                    l && r.$tooltip.on("touchstart." + r.namespace, function(e) {
                                        e.stopPropagation()
                                    });
                                    var p = null;
                                    r.$elProxy.add(r.$tooltip).on("mouseleave." + r.namespace + "-autoClose", function() {
                                        clearTimeout(p), p = setTimeout(function() {
                                            r.hide()
                                        }, r.options.interactiveTolerance)
                                    }).on("mouseenter." + r.namespace + "-autoClose", function() {
                                        clearTimeout(p)
                                    })
                                } else r.$elProxy.on("mouseleave." + r.namespace + "-autoClose", function() {
                                    r.hide()
                                });
                                r.options.hideOnClick && r.$elProxy.on("click." + r.namespace + "-autoClose", function() {
                                    r.hide()
                                })
                            } else "click" == r.options.trigger && (setTimeout(function() {
                                e("body").on("click." + r.namespace + " touchstart." + r.namespace, function() {
                                    r.hide()
                                })
                            }, 0), r.options.interactive && r.$tooltip.on("click." + r.namespace + " touchstart." + r.namespace, function(e) {
                                e.stopPropagation()
                            }))
                    }
                    r.options.timer > 0 && (r.timerHide = setTimeout(function() {
                        r.timerHide = null, r.hide()
                    }, r.options.timer + i))
                }
            })
        },
        _interval_set: function() {
            var t = this;
            t.checkInterval = setInterval(function() {
                if (0 === e("body").find(t.$el).length || 0 === e("body").find(t.$elProxy).length || "hidden" == t.Status || 0 === e("body").find(t.$tooltip).length) "shown" != t.Status && "appearing" != t.Status || t.hide(), t._interval_cancel();
                else if (t.options.positionTracker) {
                    var n = t._repositionInfo(t.$elProxy),
                        r = !1;
                    o(n.dimension, t.elProxyPosition.dimension) && ("fixed" === t.$elProxy.css("position") ? o(n.position, t.elProxyPosition.position) && (r = !0) : o(n.offset, t.elProxyPosition.offset) && (r = !0)), r || (t.reposition(), t.options.positionTrackerCallback.call(t, t.$el))
                }
            }, 200)
        },
        _interval_cancel: function() {
            clearInterval(this.checkInterval), this.checkInterval = null
        },
        _content_set: function(e) {
            "object" == typeof e && null !== e && this.options.contentCloning && (e = e.clone(!0)), this.Content = e
        },
        _content_insert: function() {
            var e = this,
                t = this.$tooltip.find(".tooltipster-content");
            "string" != typeof e.Content || e.options.contentAsHTML ? t.empty().append(e.Content) : t.text(e.Content)
        },
        _update: function(e) {
            var t = this;
            t._content_set(e), null !== t.Content ? "hidden" !== t.Status && (t._content_insert(), t.reposition(), t.options.updateAnimation && (a() ? (t.$tooltip.css({
                width: "",
                "-webkit-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                "-moz-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                "-o-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                "-ms-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                transition: "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms"
            }).addClass("tooltipster-content-changing"), setTimeout(function() {
                "hidden" != t.Status && (t.$tooltip.removeClass("tooltipster-content-changing"), setTimeout(function() {
                    "hidden" !== t.Status && t.$tooltip.css({
                        "-webkit-transition": t.options.speed + "ms",
                        "-moz-transition": t.options.speed + "ms",
                        "-o-transition": t.options.speed + "ms",
                        "-ms-transition": t.options.speed + "ms",
                        transition: t.options.speed + "ms"
                    })
                }, t.options.speed))
            }, t.options.speed)) : t.$tooltip.fadeTo(t.options.speed, .5, function() {
                "hidden" != t.Status && t.$tooltip.fadeTo(t.options.speed, 1)
            }))) : t.hide()
        },
        _repositionInfo: function(e) {
            return {
                dimension: {
                    height: e.outerHeight(!1),
                    width: e.outerWidth(!1)
                },
                offset: e.offset(),
                position: {
                    left: parseInt(e.css("left")),
                    top: parseInt(e.css("top"))
                }
            }
        },
        hide: function(n) {
            var r = this;
            n && r.callbacks.hide.push(n), r.callbacks.show = [], clearTimeout(r.timerShow), r.timerShow = null, clearTimeout(r.timerHide), r.timerHide = null;
            var o = function() {
                e.each(r.callbacks.hide, function(e, t) {
                    t.call(r.$el)
                }), r.callbacks.hide = []
            };
            if ("shown" == r.Status || "appearing" == r.Status) {
                r.Status = "disappearing";
                var i = function() {
                    r.Status = "hidden", "object" == typeof r.Content && null !== r.Content && r.Content.detach(), r.$tooltip.remove(), r.$tooltip = null, e(t).off("." + r.namespace), e("body").off("." + r.namespace).css("overflow-x", r.bodyOverflowX), e("body").off("." + r.namespace), r.$elProxy.off("." + r.namespace + "-autoClose"), r.options.functionAfter.call(r.$el, r.$el), o()
                };
                a() ? (r.$tooltip.clearQueue().removeClass("tooltipster-" + r.options.animation + "-show").addClass("tooltipster-dying"), r.options.speed > 0 && r.$tooltip.delay(r.options.speed), r.$tooltip.queue(i)) : r.$tooltip.stop().fadeOut(r.options.speed, i)
            } else "hidden" == r.Status && o();
            return r
        },
        show: function(e) {
            return this._showNow(e), this
        },
        update: function(e) {
            return this.content(e)
        },
        content: function(e) {
            return void 0 === e ? this.Content : (this._update(e), this)
        },
        reposition: function() {
            function n() {
                var n = e(t).scrollLeft();
                k - n < 0 && (i = k - n, k = n), k + l - n > a && (i = k - (a + n - l), k = a + n - l)
            }

            function r(n, r) {
                s.offset.top - e(t).scrollTop() - c - N - 12 < 0 && r.indexOf("top") > -1 && (A = n), s.offset.top + s.dimension.height + c + 12 + N > e(t).scrollTop() + e(t).height() && r.indexOf("bottom") > -1 && (A = n, I = s.offset.top - c - N - 12)
            }
            var o = this;
            if (0 !== e("body").find(o.$tooltip).length) {
                o.$tooltip.css("width", ""), o.elProxyPosition = o._repositionInfo(o.$elProxy);
                var i = null,
                    a = e(t).width(),
                    s = o.elProxyPosition,
                    l = o.$tooltip.outerWidth(!1),
                    c = (o.$tooltip.innerWidth(), o.$tooltip.outerHeight(!1));
                if (o.$elProxy.is("area")) {
                    var u = o.$elProxy.attr("shape"),
                        d = o.$elProxy.parent().attr("name"),
                        f = e('img[usemap="#' + d + '"]'),
                        p = f.offset().left,
                        h = f.offset().top,
                        g = o.$elProxy.attr("coords") !== undefined ? o.$elProxy.attr("coords").split(",") : undefined;
                    if ("circle" == u) {
                        var m = parseInt(g[0]),
                            v = parseInt(g[1]),
                            y = parseInt(g[2]);
                        s.dimension.height = 2 * y, s.dimension.width = 2 * y, s.offset.top = h + v - y, s.offset.left = p + m - y
                    } else if ("rect" == u) {
                        var m = parseInt(g[0]),
                            v = parseInt(g[1]),
                            b = parseInt(g[2]),
                            w = parseInt(g[3]);
                        s.dimension.height = w - v, s.dimension.width = b - m, s.offset.top = h + v, s.offset.left = p + m
                    } else if ("poly" == u) {
                        for (var C = 0, T = 0, x = 0, S = 0, O = "even", E = 0; E < g.length; E++) {
                            var M = parseInt(g[E]);
                            "even" == O ? (M > x && (x = M, 0 === E && (C = x)), M < C && (C = M), O = "odd") : (M > S && (S = M, 1 == E && (T = S)), M < T && (T = M), O = "even")
                        }
                        s.dimension.height = S - T, s.dimension.width = x - C, s.offset.top = h + T, s.offset.left = p + C
                    } else s.dimension.height = f.outerHeight(!1), s.dimension.width = f.outerWidth(!1), s.offset.top = h, s.offset.left = p
                }
                var k = 0,
                    j = 0,
                    I = 0,
                    N = parseInt(o.options.offsetY),
                    P = parseInt(o.options.offsetX),
                    A = o.options.position;
                if ("top" == A) {
                    var _ = s.offset.left + l - (s.offset.left + s.dimension.width);
                    k = s.offset.left + P - _ / 2, I = s.offset.top - c - N - 12, n(), r("bottom", "top")
                }
                if ("top-left" == A && (k = s.offset.left + P, I = s.offset.top - c - N - 12, n(), r("bottom-left", "top-left")), "top-right" == A && (k = s.offset.left + s.dimension.width + P - l, I = s.offset.top - c - N - 12, n(), r("bottom-right", "top-right")), "bottom" == A) {
                    var _ = s.offset.left + l - (s.offset.left + s.dimension.width);
                    k = s.offset.left - _ / 2 + P, I = s.offset.top + s.dimension.height + N + 12, n(), r("top", "bottom")
                }
                if ("bottom-left" == A && (k = s.offset.left + P, I = s.offset.top + s.dimension.height + N + 12, n(), r("top-left", "bottom-left")), "bottom-right" == A && (k = s.offset.left + s.dimension.width + P - l, I = s.offset.top + s.dimension.height + N + 12, n(), r("top-right", "bottom-right")), "left" == A) {
                    k = s.offset.left - P - l - 12, j = s.offset.left + P + s.dimension.width + 12;
                    var L = s.offset.top + c - (s.offset.top + s.dimension.height);
                    if (I = s.offset.top - L / 2 - N, k < 0 && j + l > a) {
                        var D = 2 * parseFloat(o.$tooltip.css("border-width")),
                            R = l + k - D;
                        o.$tooltip.css("width", R + "px"), c = o.$tooltip.outerHeight(!1), k = s.offset.left - P - R - 12 - D, L = s.offset.top + c - (s.offset.top + s.dimension.height), I = s.offset.top - L / 2 - N
                    } else k < 0 && (k = s.offset.left + P + s.dimension.width + 12, i = "left")
                }
                if ("right" == A) {
                    k = s.offset.left + P + s.dimension.width + 12, j = s.offset.left - P - l - 12;
                    var L = s.offset.top + c - (s.offset.top + s.dimension.height);
                    if (I = s.offset.top - L / 2 - N, k + l > a && j < 0) {
                        var D = 2 * parseFloat(o.$tooltip.css("border-width")),
                            R = a - k - D;
                        o.$tooltip.css("width", R + "px"), c = o.$tooltip.outerHeight(!1), L = s.offset.top + c - (s.offset.top + s.dimension.height), I = s.offset.top - L / 2 - N
                    } else k + l > a && (k = s.offset.left - P - l - 12, i = "right")
                }
                if (o.options.arrow) {
                    var V = "tooltipster-arrow-" + A;
                    if (o.options.arrowColor.length < 1) var z = o.$tooltip.css("background-color");
                    else var z = o.options.arrowColor;
                    if (i ? "left" == i ? (V = "tooltipster-arrow-right", i = "") : "right" == i ? (V = "tooltipster-arrow-left", i = "") : i = "left:" + Math.round(i) + "px;" : i = "", "top" == A || "top-left" == A || "top-right" == A) var H = parseFloat(o.$tooltip.css("border-bottom-width")),
                        $ = o.$tooltip.css("border-bottom-color");
                    else if ("bottom" == A || "bottom-left" == A || "bottom-right" == A) var H = parseFloat(o.$tooltip.css("border-top-width")),
                        $ = o.$tooltip.css("border-top-color");
                    else if ("left" == A) var H = parseFloat(o.$tooltip.css("border-right-width")),
                        $ = o.$tooltip.css("border-right-color");
                    else if ("right" == A) var H = parseFloat(o.$tooltip.css("border-left-width")),
                        $ = o.$tooltip.css("border-left-color");
                    else var H = parseFloat(o.$tooltip.css("border-bottom-width")),
                        $ = o.$tooltip.css("border-bottom-color");
                    H > 1 && H++;
                    var F = "";
                    if (0 !== H) {
                        var B = "",
                            q = "border-color: " + $ + ";"; - 1 !== V.indexOf("bottom") ? B = "margin-top: -" + Math.round(H) + "px;" : -1 !== V.indexOf("top") ? B = "margin-bottom: -" + Math.round(H) + "px;" : -1 !== V.indexOf("left") ? B = "margin-right: -" + Math.round(H) + "px;" : -1 !== V.indexOf("right") && (B = "margin-left: -" + Math.round(H) + "px;"), F = '<span class="tooltipster-arrow-border" style="' + B + " " + q + ';"></span>'
                    }
                    o.$tooltip.find(".tooltipster-arrow").remove();
                    var W = '<div class="' + V + ' tooltipster-arrow" style="' + i + '">' + F + '<span style="border-color:' + z + ';"></span></div>';
                    o.$tooltip.append(W)
                }
                o.$tooltip.css({
                    top: Math.round(I) + "px",
                    left: Math.round(k) + "px"
                })
            }
            return o
        },
        enable: function() {
            return this.enabled = !0, this
        },
        disable: function() {
            return this.hide(), this.enabled = !1, this
        },
        destroy: function() {
            var t = this;
            t.hide(), t.$el[0] !== t.$elProxy[0] && t.$elProxy.remove(), t.$el.removeData(t.namespace).off("." + t.namespace);
            var n = t.$el.data("tooltipster-ns");
            if (1 === n.length) {
                var r = null;
                "previous" === t.options.restoration ? r = t.$el.data("tooltipster-initialTitle") : "current" === t.options.restoration && (r = "string" == typeof t.Content ? t.Content : e("<div></div>").append(t.Content).html()), r && t.$el.attr("title", r), t.$el.removeClass("tooltipstered").removeData("tooltipster-ns").removeData("tooltipster-initialTitle")
            } else n = e.grep(n, function(e) {
                return e !== t.namespace
            }), t.$el.data("tooltipster-ns", n);
            return t
        },
        elementIcon: function() {
            return this.$el[0] !== this.$elProxy[0] ? this.$elProxy[0] : undefined
        },
        elementTooltip: function() {
            return this.$tooltip ? this.$tooltip[0] : undefined
        },
        option: function(e, t) {
            return void 0 === t ? this.options[e] : (this.options[e] = t, this)
        },
        status: function() {
            return this.Status
        }
    }, e.fn.tooltipster = function() {
        var t = arguments;
        if (0 === this.length) {
            if ("string" == typeof t[0]) {
                var n = !0;
                switch (t[0]) {
                    case "setDefaults":
                        e.extend(s, t[1]);
                        break;
                    default:
                        n = !1
                }
                return !!n || this
            }
            return this
        }
        if ("string" == typeof t[0]) {
            var o = "#*$~&";
            return this.each(function() {
                var n = e(this).data("tooltipster-ns"),
                    r = n ? e(this).data(n[0]) : null;
                if (!r) throw new Error("You called Tooltipster's \"" + t[0] + '" method on an uninitialized element');
                if ("function" != typeof r[t[0]]) throw new Error('Unknown method .tooltipster("' + t[0] + '")');
                var i = r[t[0]](t[1], t[2]);
                if (i !== r) return o = i, !1
            }), "#*$~&" !== o ? o : this
        }
        var i = [],
            a = t[0] && "undefined" != typeof t[0].multiple,
            l = a && t[0].multiple || !a && s.multiple,
            c = t[0] && "undefined" != typeof t[0].debug,
            u = c && t[0].debug || !c && s.debug;
        return this.each(function() {
            var n = !1,
                o = e(this).data("tooltipster-ns"),
                a = null;
            o ? l ? n = !0 : u && console.log('Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the "multiple" option to attach more tooltips.') : n = !0, n && (a = new r(this, t[0]), o || (o = []), o.push(a.namespace), e(this).data("tooltipster-ns", o), e(this).data(a.namespace, a)), i.push(a)
        }), l ? i : this
    };
    var l = !!("ontouchstart" in t),
        c = !1;
    e("body").one("mousemove", function() {
        c = !0
    })
}(jQuery, window, document),
function() {
    "use strict";

    function e(t, r) {
        function o(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }
        var i;
        if (r = r || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = r.touchBoundary || 10, this.layer = t, this.tapDelay = r.tapDelay || 200, this.tapTimeout = r.tapTimeout || 700, !e.notNeeded(t)) {
            for (var a = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], s = this, l = 0, c = a.length; l < c; l++) s[a[l]] = o(s[a[l]], s);
            n && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)), t.addEventListener("click", this.onClick, !0), t.addEventListener("touchstart", this.onTouchStart, !1), t.addEventListener("touchmove", this.onTouchMove, !1), t.addEventListener("touchend", this.onTouchEnd, !1), t.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, n, r) {
                var o = Node.prototype.removeEventListener;
                "click" === e ? o.call(t, e, n.hijacked || n, r) : o.call(t, e, n, r)
            }, t.addEventListener = function(e, n, r) {
                var o = Node.prototype.addEventListener;
                "click" === e ? o.call(t, e, n.hijacked || (n.hijacked = function(e) {
                    e.propagationStopped || n(e)
                }), r) : o.call(t, e, n, r)
            }), "function" == typeof t.onclick && (i = t.onclick, t.addEventListener("click", function(e) {
                i(e)
            }, !1), t.onclick = null)
        }
    }
    var t = navigator.userAgent.indexOf("Windows Phone") >= 0,
        n = navigator.userAgent.indexOf("Android") > 0 && !t,
        r = /iP(ad|hone|od)/.test(navigator.userAgent) && !t,
        o = r && /OS 4_\d(_\d)?/.test(navigator.userAgent),
        i = r && /OS [6-7]_\d/.test(navigator.userAgent),
        a = navigator.userAgent.indexOf("BB10") > 0;
    e.prototype.needsClick = function(e) {
        switch (e.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
                if (e.disabled) return !0;
                break;
            case "input":
                if (r && "file" === e.type || e.disabled) return !0;
                break;
            case "label":
            case "iframe":
            case "video":
                return !0
        }
        return /\bneedsclick\b/.test(e.className)
    }, e.prototype.needsFocus = function(e) {
        switch (e.nodeName.toLowerCase()) {
            case "textarea":
                return !0;
            case "select":
                return !n;
            case "input":
                switch (e.type) {
                    case "button":
                    case "checkbox":
                    case "file":
                    case "image":
                    case "radio":
                    case "submit":
                        return !1
                }
                return !e.disabled && !e.readOnly;
            default:
                return /\bneedsfocus\b/.test(e.className)
        }
    }, e.prototype.sendClick = function(e, t) {
        var n, r;
        document.activeElement && document.activeElement !== e && document.activeElement.blur(), r = t.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, e.dispatchEvent(n)
    }, e.prototype.determineEventType = function(e) {
        return n && "select" === e.tagName.toLowerCase() ? "mousedown" : "click"
    }, e.prototype.focus = function(e) {
        var t;
        r && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type && "month" !== e.type ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
    }, e.prototype.updateScrollParent = function(e) {
        var t, n;
        if (!(t = e.fastClickScrollParent) || !t.contains(e)) {
            n = e;
            do {
                if (n.scrollHeight > n.offsetHeight) {
                    t = n, e.fastClickScrollParent = n;
                    break
                }
                n = n.parentElement
            } while (n)
        }
        t && (t.fastClickLastScrollTop = t.scrollTop)
    }, e.prototype.getTargetElementFromEventTarget = function(e) {
        return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
    }, e.prototype.onTouchStart = function(e) {
        var t, n, i;
        if (e.targetTouches.length > 1) return !0;
        if (t = this.getTargetElementFromEventTarget(e.target), n = e.targetTouches[0], r) {
            if (i = window.getSelection(), i.rangeCount && !i.isCollapsed) return !0;
            if (!o) {
                if (n.identifier && n.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
                this.lastTouchIdentifier = n.identifier, this.updateScrollParent(t)
            }
        }
        return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = n.pageX, this.touchStartY = n.pageY, e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(), !0
    }, e.prototype.touchHasMoved = function(e) {
        var t = e.changedTouches[0],
            n = this.touchBoundary;
        return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n
    }, e.prototype.onTouchMove = function(e) {
        return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0)
    }, e.prototype.findControl = function(e) {
        return e.control !== undefined ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }, e.prototype.onTouchEnd = function(e) {
        var t, a, s, l, c, u = this.targetElement;
        if (!this.trackingClick) return !0;
        if (e.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
        if (e.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
        if (this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, a = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, i && (c = e.changedTouches[0], u = document.elementFromPoint(c.pageX - window.pageXOffset, c.pageY - window.pageYOffset) || u, u.fastClickScrollParent = this.targetElement.fastClickScrollParent), "label" === (s = u.tagName.toLowerCase())) {
            if (t = this.findControl(u)) {
                if (this.focus(u), n) return !1;
                u = t
            }
        } else if (this.needsFocus(u)) return e.timeStamp - a > 100 || r && window.top !== window && "input" === s ? (this.targetElement = null, !1) : (this.focus(u), this.sendClick(u, e), r && "select" === s || (this.targetElement = null, e.preventDefault()), !1);
        return !(!r || o || !(l = u.fastClickScrollParent) || l.fastClickLastScrollTop === l.scrollTop) || (this.needsClick(u) || (e.preventDefault(), this.sendClick(u, e)), !1)
    }, e.prototype.onTouchCancel = function() {
        this.trackingClick = !1, this.targetElement = null
    }, e.prototype.onMouse = function(e) {
        return !this.targetElement || (!!e.forwardedTouchEvent || (!e.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1))))
    }, e.prototype.onClick = function(e) {
        var t;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === e.target.type && 0 === e.detail || (t = this.onMouse(e), t || (this.targetElement = null), t)
    }, e.prototype.destroy = function() {
        var e = this.layer;
        n && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }, e.notNeeded = function(e) {
        var t, r, o;
        if ("undefined" == typeof window.ontouchstart) return !0;
        if (r = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!n) return !0;
            if (t = document.querySelector("meta[name=viewport]")) {
                if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
                if (r > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
        }
        if (a && (o = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), o[1] >= 10 && o[2] >= 3 && (t = document.querySelector("meta[name=viewport]")))) {
            if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
            if (document.documentElement.scrollWidth <= window.outerWidth) return !0
        }
        return "none" === e.style.msTouchAction || "manipulation" === e.style.touchAction || (!!(+(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1] >= 27 && (t = document.querySelector("meta[name=viewport]")) && (-1 !== t.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) || ("none" === e.style.touchAction || "manipulation" === e.style.touchAction))
    }, e.attach = function(t, n) {
        return new e(t, n)
    }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
        return e
    }) : "undefined" != typeof module && module.exports ? (module.exports = e.attach, module.exports.FastClick = e) : window.FastClick = e
}();
var Terra = window.Terra || {};
window.Terra = Terra,
    function(e, t) {
        Terra.transitionSpeed = 200, Terra.themedMediaQueries = !1, Terra.mediaQueries = [
            ["xxl", e.matchMedia("screen and (min-width: 2068px)")],
            ["xl", e.matchMedia("screen and (min-width: 1540px)")],
            ["lg", e.matchMedia("screen and (min-width: 1276px)")],
            ["md", e.matchMedia("screen and (min-width: 1024px)")],
            ["s", e.matchMedia("screen and (min-width: 760px)")],
            ["xs", e.matchMedia("screen and (min-width: 580px)")],
            ["xxs", e.matchMedia("screen and (max-width: 580px)")]
        ], Terra.availableLocales = ["de", "es", "en", "en-US", "en-GB", "fi-FI", "fr", "pt"], Terra.canGlobalize = function() {
            return "undefined" != typeof Globalize && Globalize.locale() !== t
        }, Terra._i18n = function(e, t) {
            return Terra.canGlobalize() ? Globalize.formatMessage(e) : t
        }, Terra.getLocale = function() {
            return $("html").attr("lang")
        }, Terra.setLocale = function(e) {
            $("html").attr("lang", e), Globalize.locale(e), $("body").trigger("Terra.init")
        }, $(e).on("resize", function() {
            this.resizeStopListener && clearTimeout(this.resizeStopListener), this.resizeStopListener = setTimeout(function() {
                $(this).trigger("Terra.resizeEnd")
            }, 250)
        }), $(function() {
            $("body").trigger("Terra.init")
        })
    }(window),
    function(e) {
        "use strict";

        function t(t, r) {
            $.ajax({
                url: t.url,
                type: t.method,
                data: t.data,
                error: function() {
                    var o = Terra._i18n("Terra/ajax/error", "This content failed to load."),
                        i = r.data("error-msg");
                    $(t.targetSelector).html('<p class="text-error">' + (i === e ? o : i) + "</p>"), n(r, "ajaxFailed", t)
                },
                success: function(e) {
                    $(t.targetSelector).html(e), n(r, "ajaxLoaded", t), !1 === r.data("allow-reload") && r.data("ajax-disabled", !0)
                }
            })
        }

        function n(e, t, n) {
            var r = $.Event(t, {
                url: n.url,
                targetSelector: n.targetSelector
            });
            e.trigger(r)
        }

        function r(e, n, r) {
            if (!0 !== n.data("ajax-disabled")) {
                t({
                    url: n.attr("href") || n.attr("action") || n.data("ajax-url"),
                    method: n.data("method") || n.attr("method") || "get",
                    data: n.serializeArray(),
                    targetSelector: n.data("ajax-target") || r
                }, n)
            }
            e.preventDefault()
        }
        Terra.ajaxRequestHandler = r
    }(), Terra.Colors = {
        base: "#ffffff",
        inverse: "#1c1f21",
        "medium-fg-50": "#2d3539",
        "medium-fg-40": "#434a4d",
        "medium-fg-30": "#595f62",
        "medium-fg-20": "#6f7477",
        "medium-fg-10": "#868a8c",
        medium: "#9b9fa1",
        "medium-bg-10": "#b2b5b6",
        "medium-bg-20": "#c8cacb",
        "medium-bg-30": "#dedfe0",
        "medium-bg-40": "#f4f4f4",
        "accent-fg-50": "#004c76",
        "accent-fg-40": "#0065a3",
        "accent-fg-30": "#007cc3",
        "accent-fg-20": "#0092e0",
        "accent-fg-10": "#26a2e5",
        accent: "#4cb2e9",
        "accent-bg-10": "#7fc8ef",
        "accent-bg-20": "#a6d9f4",
        "accent-bg-30": "#cce9f9",
        "accent-bg-40": "#ebf6fd",
        "accent-secondary-fg-50": "#406c23",
        "accent-secondary-fg-40": "#4e832b",
        "accent-secondary-fg-30": "#5c9a32",
        "accent-secondary-fg-20": "#69b13a",
        "accent-secondary-fg-10": "#78c346",
        "accent-secondary": "#8ccc62",
        "accent-secondary-bg-10": "#a5d784",
        "accent-secondary-bg-20": "#bce1a3",
        "accent-secondary-bg-30": "#d2ebc1",
        "accent-secondary-bg-40": "#e9f5e0",
        "complement-fg-50": "#da3b03",
        "complement-fg-40": "#e34c02",
        "complement-fg-30": "#ed5e00",
        "complement-fg-20": "#f76e00",
        "complement-fg-10": "#ff7d00",
        complement: "#ff9733",
        "complement-bg-10": "#ffb166",
        "complement-bg-20": "#ffcb99",
        "complement-bg-30": "#ffe5cc",
        "complement-bg-40": "#fff5eb",
        "complement-secondary-fg-50": "#441650",
        "complement-secondary-fg-40": "#5f1f6f",
        "complement-secondary-fg-30": "#78288c",
        "complement-secondary-fg-20": "#9631af",
        "complement-secondary-fg-10": "#aa3ec5",
        "complement-secondary": "#b961cf",
        "complement-secondary-bg-10": "#c985da",
        "complement-secondary-bg-20": "#daace6",
        "complement-secondary-bg-30": "#eacff0",
        "complement-secondary-bg-40": "#f6ebf9",
        "highlight-fg-50": "#fe8b0e",
        "highlight-fg-40": "#fe9c0d",
        "highlight-fg-30": "#ffa70c",
        "highlight-fg-20": "#ffb20b",
        "highlight-fg-10": "#ffc20a",
        highlight: "#ffce3b",
        "highlight-bg-10": "#ffda6c",
        "highlight-bg-20": "#ffe79d",
        "highlight-bg-30": "#fff3ce",
        "highlight-bg-40": "#fff9e6",
        "clinical-high": "#ff6100",
        "clinical-low": "#0053e6",
        "clinical-critical": "#cc0000",
        "clinical-abnormal": "#654a08",
        "positive-fg-50": "#406c23",
        "positive-fg-40": "#4e832b",
        "positive-fg-30": "#5c9a32",
        "positive-fg-20": "#69b13a",
        "positive-fg-10": "#78c346",
        positive: "#8ccc62",
        "positive-bg-10": "#a5d784",
        "positive-bg-20": "#bce1a3",
        "positive-bg-30": "#d2ebc1",
        "positive-bg-40": "#e9f5e0",
        "negative-fg-50": "#ab0406",
        "negative-fg-40": "#bc0203",
        "negative-fg-30": "#d10000",
        "negative-fg-20": "#e50000",
        "negative-fg-10": "#fa0000",
        negative: "#fb4c4c",
        "negative-bg-10": "#fc7f7f",
        "negative-bg-20": "#fdabab",
        "negative-bg-30": "#fed1d1",
        "negative-bg-40": "#ffebeb",
        "theme-accent-fg-50": "#004c76",
        "theme-accent-fg-40": "#0065a3",
        "theme-accent-fg-30": "#007cc3",
        "theme-accent-fg-20": "#0092e0",
        "theme-accent-fg-10": "#26a2e5",
        "theme-accent": "#4cb2e9",
        "theme-accent-bg-10": "#7fc8ef",
        "theme-accent-bg-20": "#a6d9f4",
        "theme-accent-bg-30": "#cce9f9",
        "theme-accent-bg-40": "#ebf6fd",
        "theme-accent-secondary-fg-50": "#406c23",
        "theme-accent-secondary-fg-40": "#4e832b",
        "theme-accent-secondary-fg-30": "#5c9a32",
        "theme-accent-secondary-fg-20": "#69b13a",
        "theme-accent-secondary-fg-10": "#78c346",
        "theme-accent-secondary": "#8ccc62",
        "theme-accent-secondary-bg-10": "#a5d784",
        "theme-accent-secondary-bg-20": "#bce1a3",
        "theme-accent-secondary-bg-30": "#d2ebc1",
        "theme-accent-secondary-bg-40": "#e9f5e0",
        "border-color": "#dedfe0",
        "hover-background": "#ebf6fd",
        "selected-color": "#f4f4f4",
        "selected-background": "#007cc3",
        "link-color": "#0065a3",
        "link-color-hover": "#004c76",
        "link-color-disabled": "#004c76",
        "text-error": "#e50000",
        "text-placeholder": "#dedfe0",
        "text-reverse": "#f4f4f4"
    },
    function(e, t) {
        t._initFastClick = function() {
            "undefined" != typeof FastClick && FastClick.attach(document.body)
        }, e(function() {
            t._initFastClick()
        })
    }(jQuery, Terra),
    function(e) {
        e(function() {
            fontSpy("Terra Icons", {
                glyphs: "\uf100\uf101\uf102"
            })
        })
    }(jQuery),
    function(e, t) {
        t.activate = function(t, n) {
            var r = e(t),
                o = n || "active";
            r.siblings().removeClass(o), r.addClass(o)
        }, t.ariaSelected = function(t, n) {
            var r = e(t);
            if (n = n || {}, !r.hasClass("selection-static")) {
                if (r.is("[aria-selected]")) return "multiple" === n.selectStyle && r.removeAttr("aria-selected"), !1;
                "multiple" !== n.selectStyle && r.siblings().removeAttr("aria-selected"), r.attr("aria-selected", "true"), n.customEvent && r.trigger(n.customEvent)
            }
        }
    }(jQuery, Terra),
    function(e) {
        e(document).on("click", 'a.terra-u-disabled[aria-disabled="true"], .terra-u-disabled[aria-disabled="true"] a', function(e) {
            e.preventDefault()
        }).on("contextmenu", 'a.terra-u-disabled[aria-disabled="true"], .terra-u-disabled[aria-disabled="true"] a', function() {
            return !1
        })
    }(jQuery),
    function(e, t, n) {
        t.justifyHeight = function() {
            var t = e("body"),
                r = function() {
                    return e(this).height()
                },
                o = function(e) {
                    e.height("auto")
                },
                i = function(t) {
                    var n = t.map(r),
                        o = Math.max.apply(Math, e.makeArray(n));
                    t.height(o)
                },
                a = function(t) {
                    t.find("[data-justify-height=true], .callout-grid.divided[data-columns], .callout-grid.boxed[data-columns]").not('[data-columns=1], [data-columns=""]').each(function() {
                        var t = e(this.children);
                        o(t), i(t)
                    })
                };
            return e(document).ajaxComplete(function() {
                    a(t)
                }), e(n).on("Terra.resizeEnd", function() {
                    a(t)
                }),
                function(n) {
                    a(n ? e(n) : t)
                }
        }(), e(function() {
            t.justifyHeight("body")
        })
    }(jQuery, Terra, window),
    function(e) {
        e.getMediaQueries = function() {
            if (e.themedMediaQueries) {
                var t, n = document.body;
                if (n && window.getComputedStyle) {
                    var r = window.getComputedStyle(n, ":before").getPropertyValue("content").replace(/'|"/g, '"').slice(1).slice(0, -1).split(String.fromCharCode(92)).join("");
                    t = JSON.parse("[" + r + "]");
                    for (var o = 0, i = t.length; o < i; o++) t[o][1] = window.matchMedia(t[o][1]);
                    e.mediaQueries = t
                }
            }
        }, e.getMediaQueryName = function() {
            for (var t = 0, n = e.mediaQueries.length; t < n; t++)
                if (e.mediaQueries[t][1].matches) return e.mediaQueries[t][0]
        }, $(document).ready(e.getMediaQueries)
    }(Terra),
    function(e) {
        e.escapeChars = function(e) {
            return e.replace(/[!"#$%&'()*+,.\/:;<=>?@\[\\\]^`{|}~]/g, "\\$&")
        }, e.unescapeChars = function(e) {
            return e.replace(/[\\]([!"#$%&'()*+,.\/:;<=>?@\[\\\]^`{|}~])/g, "$1")
        }
    }(Terra),
    function(e, t, n, r) {
        function o(t) {
            var r, o = t.parent(),
                i = e(n),
                a = parseInt(t.css("min-height"), 10),
                s = o.offset().top - i.scrollTop() + o.height();
            return r = i.height() - s - 10, r <= 0 && (r = null), null !== r && r < a && (r = a), r
        }

        function i() {
            e(this).trigger("Terra.toggler.shown")
        }

        function a() {
            e(this).trigger("Terra.toggler.hidden")
        }
        var s = 13,
            l = 32,
            c = function(t, n) {
                this.options = e.extend({}, c.DEFAULTS, n), this.$element = e(t), this.target = this.options.target || t.hash, this.options.toggle && this.toggle()
            };
        c.DEFAULTS = {
            slide: !1,
            toggle: !0
        }, c.prototype.constructor = c, c.prototype.hide = function() {
            var n = e(this.target);
            !0 === this.options.slide ? n.slideUp(t.transitionSpeed, a) : n.fadeOut(t.transitionSpeed, a), this.$element.removeClass("toggler-shown"), n.addClass("hide")
        }, c.prototype.show = function() {
            var n = e(this.target);
            !0 === this.options.fitToViewport && n.css("max-height", o(n) + "px"), !0 === this.options.slide ? n.slideDown(t.transitionSpeed, i) : n.fadeIn(t.transitionSpeed, i), this.$element.addClass("toggler-shown"), n.removeClass("hide")
        }, c.prototype.toggle = function() {
            this[e(this.target).hasClass("hide") ? "show" : "hide"]()
        };
        var u = e.fn.toggler;
        e.fn.toggler = function(t) {
            return this.each(function() {
                var n = e(this),
                    o = n.data("toggler"),
                    i = e.extend({}, n.data(), "object" == typeof t && t);
                o === r && n.data("toggler", o = new c(this, i)), "string" == typeof t && o[t]()
            })
        }, e.fn.toggler.Constructor = c, e.fn.toggler.noConflict = function() {
            return e.fn.toggler = u, this
        }, e(document).on("click keydown", ".toggler", function(t) {
            if ("click" === t.type || t.keyCode === s || t.keyCode === l) {
                var n = e(this);
                n.toggler(n.data("toggler") ? "toggle" : null), t.preventDefault()
            }
        })
    }(jQuery, Terra, window),
    function(e) {
        e.fn.transitionAndRemove = function(t, n) {
            return this.each(function() {
                var r = e(this);
                n = n || "normal", r[t](n, function() {
                    r.remove()
                })
            })
        }
    }(jQuery),
    function(e, t) {
        t.toggleContentPanel = function(n) {
            if ("click" === n.type || 13 === n.keyCode || 32 === n.keyCode) {
                n.preventDefault();
                var r = e(n.target),
                    o = r.closest(".content-panel");
                o.children(".content-panel-inner").stop(!0, !0).slideToggle("fast", function() {
                    o.trigger("Terra.contentPanelToggled")
                }), o.toggleClass("collapsed").promise().done(function(e) {
                    var r = e.children("[data-ajax-url]");
                    e.hasClass("collapsed") || t.justifyHeight(e), r.length > 0 && !e.hasClass("collapsed") && t.ajaxRequestHandler(n, r, e.find(".content-panel-body"))
                })
            }
        }, t.setPanelAriaRoles = function(t) {
            var n = e(t.target).closest(".content-panel");
            e(n).find("header").attr("aria-pressed", function(e, t) {
                return "true" === t ? "false" : "true"
            }), n.attr("aria-expanded", function(e, t) {
                return "true" === t ? "false" : "true"
            })
        }, e(document).on("click", ".content-panel.collapsible > header", t.toggleContentPanel).on("keydown", ".content-panel.collapsible > header:focus", t.toggleContentPanel).on("Terra.contentPanelToggled", t.setPanelAriaRoles).on("click", ".content-panel .actions .btn-group, .content-panel .actions .btn, .content-panel .actions a, .content-panel .actions button", function(t) {
            0 === e(this).parent(".btn-group").length && t.stopPropagation()
        })
    }(jQuery, Terra),
    function(e, t, n, r) {
        function o(t) {
            e(t.target).find('[role~="tablist"]').each(function() {
                var t, o = e(this),
                    a = o.find("a");
                n.location.hash && a.each(function() {
                    if (this.hash === n.location.hash) return a.attr("aria-selected", !1), e(this).attr("aria-selected", !0), t = this.text, !1
                }), t === r && (t = a.first().text()), o.hasClass("btn-group") || i(o, t), s(a), a.filter('[aria-selected="true"]').each(function() {
                    var t = e(l(this.hash));
                    t.show(), t.attr("aria-expanded", !0), t.attr("aria-hidden", !1), e(this).hasClass("is-active") || e(this).addClass("is-active")
                })
            }), a()
        }

        function i(e, t) {
            var n = u.clone();
            n.children().first().html(t), 0 === e.siblings('button[data-toggle="dropdown"]').length && e.attr("role", "tablist menu").parent().addClass("has-tabs").prepend(n)
        }

        function a() {
            var n = t.getMediaQueryName(),
                r = e(".has-tabs");
            e.inArray(n, d) > -1 ? (r.addClass("dropdown").find("[role~=tablist]").attr("aria-hidden", "true"), r.each(function() {
                c.call(this)
            })) : r.removeClass("dropdown").find("[role~=tablist]").removeAttr("aria-hidden")
        }

        function s(t) {
            t.not('[aria-selected="true"]').each(function() {
                var t = e(l(this.hash));
                t.hide(), t.attr("aria-expanded", !1), t.attr("aria-hidden", !0), e(this).removeClass("is-active")
            })
        }

        function l(e) {
            return e.replace(f, "$1")
        }

        function c() {
            var t = e(this),
                n = t.find('[aria-selected="true"]')[0].text;
            t.find("button").children().first().html(n)
        }
        var u, d = ["xxs", "xs"],
            f = /^(#?)tab-/;
        u = e('<button class="btn" aria-expanded="false" aria-haspopup="true" data-toggle="dropdown"><span></span><span class="icon-decrement"></span></button>'), e(document).on("Terra.init", o).on("click.terra.tabs", '[role~="tablist"] a', function(o) {
            var i = e(l(this.hash)),
                a = e(this),
                c = a.closest('[role~="tablist"]'),
                u = c.find("a"),
                d = this.hash.replace("#", "");
            u.attr("aria-selected", !1), e(this).attr("aria-selected", !0), e(this).hasClass("is-active") || e(this).addClass("is-active"), s(u), i.fadeIn(2 * t.transitionSpeed), i.attr("aria-expanded", !0), i.attr("aria-hidden", !1), c.data("update-hash") !== r && (i.attr("id", ""), n.location.hash = d, i.attr("id", l(d))), a.trigger("Terra.tabClick"), o.preventDefault()
        }).on("click.terra.dropdown", ".dropdown.has-tabs", c), e(n).on("Terra.resizeEnd", a)
    }(jQuery, Terra, window),
    function(e, t) {
        function n() {
            var n = e(this),
                r = n.parent().data("toggle");
            "buttons-radio" === r ? t.ariaSelected(n) : "buttons-checkbox" === r && t.ariaSelected(n, {
                selectStyle: "multiple"
            })
        }
        e(document).on("click.terra[aria-selected]", ".btn-group .btn", n)
    }(jQuery, Terra),
    function(e) {
        function t(t) {
            var n, i, a, s = e(this);
            if (!s.is(".disabled, :disabled")) {
                if (n = o(s), i = n.hasClass("open"), r(), !i) {
                    if ("ontouchstart" in document.documentElement && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(s).on("click", r), a = {
                            relatedTarget: this
                        }, n.trigger(t = e.Event("show.terra.dropdown", a)), t.isDefaultPrevented()) return;
                    s.trigger("focus").attr("aria-expanded", "true").siblings('[role~="menu"]').attr("aria-hidden", "false"), n.toggleClass("open").trigger("shown.terra.dropdown", a)
                }
                return !1
            }
        }

        function n(t) {
            var n, r, i, a, d, f = e(this);
            if (!(t.which !== l && t.which !== c && t.which !== u || /input|textarea/i.test(t.target.tagName) || (t.preventDefault(), t.stopPropagation(), f.is(".disabled, :disabled")))) {
                if (n = o(f), (!(r = n.hasClass("open")) && t.which !== u || r && t.which === u) && (t.which === u || t.which === c)) return n.find(s).trigger("focus"), f.trigger("click");
                if (i = " li:not(.disabled):visible a", a = n.find('[role~="menu"]' + i + ', [role="listbox"]' + i), a.length) {
                    if (d = a.index(t.target), t.which === l) {
                        if (!(d > 0)) return n.find(s).trigger("focus"), f.trigger("click");
                        d--
                    }
                    t.which === c && d < a.length - 1 && d++, a.eq(d).trigger("focus")
                }
            }
        }

        function r(t) {
            t && t.which === d || (e(a).remove(), e(s).each(function() {
                var n = e(this),
                    r = o(n),
                    i = {
                        relatedTarget: this
                    };
                r.hasClass("open") && (t && "click" === t.type && /input|textarea/i.test(t.target.tagName) && e.contains(r[0], t.target) || (r.trigger(t = e.Event("hide.terra.dropdown", i)), t.isDefaultPrevented() || (n.attr("aria-expanded", "false").siblings('[role~="menu"]').attr("aria-hidden", "true"), r.removeClass("open").trigger("hidden.terra.dropdown", i))))
            }))
        }

        function o(t) {
            var n, r = t.attr("data-target");
            return r || (r = t.attr("href"), r = r && /#[A-Za-z]/.test(r) && r.replace(/.*(?=#[^\s]*$)/, "")), n = r && e(r), n && n.length ? n : t.parent()
        }

        function i() {
            e(this).find('[data-toggle="dropdown"]').focus()
        }
        var a = ".dropdown-backdrop",
            s = '[data-toggle="dropdown"]',
            l = 38,
            c = 40,
            u = 27,
            d = 3;
        e(document).on("click.terra.dropdown", r).on("click.terra.dropdown", ".dropdown, .dropdown-end, .dropdown-flip", i).on("click.terra.dropdown", ".dropdown form, .dropdown-end form, .dropdown-flip form", function(e) {
            e.stopPropagation()
        }).on("click.terra.dropdown", s, t).on("keydown.terra.dropdown", '.dropdown [role~="menu"], .dropdown-end [role~="menu"], .dropdown-flip [role~="menu"], ' + s, n)
    }(jQuery),
    function(e) {
        function t() {
            Terra.ariaSelected(this, {
                customEvent: "terra.list.itemSelected"
            })
        }

        function n() {
            Terra.ariaSelected(this, {
                customEvent: "terra.list.itemSelected",
                selectStyle: "multiple"
            })
        }
        e(document).on("click", ".list-selectable li", t).on("click", ".list-multi-selectable li", n)
    }(jQuery),
    function(e, t) {
        t.selectTableRow = function() {
            var t = e(this),
                n = t.closest("table"),
                r = t.parent("tbody");
            n.hasClass("table-grouped-rows") ? (r.toggleClass("selected"), n.hasClass("table-multi-selectable") || r.siblings().removeClass("selected")) : (t.toggleClass("selected"), n.hasClass("table-multi-selectable") || t.siblings().removeClass("selected")), t.trigger("Terra.table.rowSelected")
        }, e(document).on("click", ".table-selectable tbody tr, .table-multi-selectable tbody tr", t.selectTableRow)
    }(jQuery, Terra),
    function(e, t) {
        t.Alerts = {}, t.Alerts.init = function(t) {
            return t = t || "", e(t + " .alert:not([data-rendered])").attr("data-rendered", !0).filter(function() {
                return e(this).attr("data-remove") > 0
            }).each(function() {
                var t = e(this);
                setTimeout(function() {
                    t.transitionAndRemove("slideUp")
                }, 1e3 * t.data("remove"))
            }), this
        }, t.Alerts.addAlert = function(n, r, o, i, a) {
            var s = null,
                l = e(document.createElement("div")),
                c = e(document.createElement("p"));
            return a && (s = e(document.createElement("button")).addClass("icon-dismiss").attr({
                "aria-label": "Dismiss",
                type: "button"
            })), c.html(r), l.addClass("alert alert-" + (o || "info")).attr({
                "data-remove": i,
                role: "alert"
            }).html(c).prepend(s).appendTo(n), t.Alerts.init(n), this
        }, t.Alerts.addSiteAlert = function(e, n, r) {
            return t.Alerts.addAlert("#alert-site-level", e, n, r, !0)
        }, t.Alerts.info = function(e, n, r) {
            return r ? t.Alerts.addAlert(e, n, "info", r.time, r.dismissible) : t.Alerts.addAlert(e, n, "info")
        }, t.Alerts.success = function(e, n, r) {
            return r ? t.Alerts.addAlert(e, n, "success", r.time, r.dismissible) : t.Alerts.addAlert(e, n, "success")
        }, t.Alerts.warning = function(e, n, r) {
            return r ? t.Alerts.addAlert(e, n, "warning", r.time, r.dismissible) : t.Alerts.addAlert(e, n, "warning")
        }, t.Alerts.error = function(e, n, r) {
            return r ? t.Alerts.addAlert(e, n, "error", r.time, r.dismissible) : t.Alerts.addAlert(e, n, "error")
        }, e(document).on("click.terra.alert-dismiss", ".alert .icon-dismiss", function() {
            e(this).parent(".alert").transitionAndRemove("slideUp")
        }).ajaxComplete(function() {
            t.Alerts.init()
        }), e(function() {
            t.Alerts.init()
        })
    }(jQuery, Terra),
    function(e, t) {
        var n = null,
            r = e('<div class="overlay" tabindex="-1"></div>');
        t.Overlay = {}, t.Overlay.isVisible = function() {
            return e(".overlay:visible").length > 0
        }, t.Overlay.show = function() {
            return this.isVisible() ? this : (n = document.activeElement, e("body").prepend(r), r.focus(), e(document).on("focusin.terra.overlay", function(e) {
                r[0] !== e.target && r.focus()
            }), e(document).trigger("Terra.overlayOpened"), this)
        }, t.Overlay.showWithContent = function(t) {
            return this.isVisible() ? this : (e(t).show(), this.show())
        }, t.Overlay.hide = function() {
            return r.remove(), e(".overlay-content").hide(), e(document).off("focusin.terra.overlay"), n && (e(n).focus(), n = null), e(document).trigger("Terra.overlayClosed"), this
        }
    }(jQuery, Terra),
    function(e, t, n) {
        function r(t) {
            var r = e(n).height(),
                o = t.find("header").outerHeight() + t.find(".header-secondary").outerHeight(),
                i = t.find("footer").outerHeight() || t.find(".form-actions").outerHeight();
            t.hasClass("modal-full-screen") ? t.find(".modal-body").css("height", r - o - i) : t.find(".modal-body").css("max-height", .85 * r - o - i), t.hasClass("modal-form") && t.css("padding-bottom", i)
        }

        function o() {
            this.content && (this.content.addClass("open").trigger("terra.modal.open"), this.content.attr("data-modal-width") && this.content.css("width", this.content.attr("data-modal-width")), r(this.content))
        }

        function i() {
            this.content && this.content.removeClass("open").trigger("terra.modal.close")
        }

        function a() {
            this.content && (r(this.content), e(this.content).trigger("terra.modal.resize"))
        }

        function s(t, n, r) {
            var o = e.extend(!0, {}, u, r);
            n && n.form && e.extend(!0, o, f), n && n.block && e.extend(!0, o, d), t ? e(t).magnificPopup(o).magnificPopup("open").attr("data-rendered", !0) : n.modalLocation && (e.extend(!0, o, {
                items: {
                    src: n.modalLocation
                }
            }), e.magnificPopup.open(o))
        }

        function l(n) {
            var r = {
                form: this.getAttribute("data-modal-form") || !1,
                block: this.getAttribute("data-modal-block") || !1,
                selector: this.getAttribute("data-modal-selector")
            };
            "modal-inline" === this.getAttribute("data-toggle") ? t.Modal.inline(e(this), r) : t.Modal.standard(e(this), r), n.preventDefault()
        }

        function c() {
            e.magnificPopup.close()
        }
        t.Modal = {};
        var u = {
                closeMarkup: '<button class="mfp-close icon-dismiss" aria-label="Dismiss"></button>',
                type: "ajax",
                callbacks: {
                    ajaxContentAdded: o,
                    close: i,
                    resize: a
                }
            },
            d = {
                closeOnBgClick: !1,
                enableEscapeKey: !1
            },
            f = e.extend(!0, {}, d, {
                callbacks: {
                    close: function() {
                        this.content.find("form").trigger("reset"), i.apply(this)
                    }
                }
            });
        t.Modal.standard = function(t, n) {
            n.selector ? s(t, n, {
                callbacks: {
                    parseAjax: function(t) {
                        var r = e(t.data),
                            o = r.filter(n.selector);
                        0 !== o.length ? t.data = o : t.data = r.find(n.selector)
                    }
                }
            }) : s(t, n)
        }, t.Modal.inline = function(e, t) {
            s(e, t, {
                type: null,
                callbacks: {
                    open: o,
                    ajaxContentAdded: null
                }
            })
        }, e(document).on("click.terra.modal", '[data-toggle^="modal"]:not([data-rendered])', l).on("click.terra.modal", '.modal [data-dismiss="modal"]', c)
    }(jQuery, Terra, window),
    function(e, t) {
        function n(t, n, r) {
            if ("boolean" == typeof n.popupArrow && (r.arrow = n.popupArrow), n.popupContent && (r.functionInit = function() {
                    return e(n.popupContent).html()
                }), r.functionBefore = function(e, t) {
                    function n(t) {
                        return e.tooltipster("content", t)
                    }
                    t(), e.trigger("Terra.Popup.open", [n])
                }, r.functionAfter = function(e) {
                    e.trigger("Terra.Popup.close")
                }, r.contentAsHTML = "true", r.maxWidth = n.popupMaxwidth || 500, r.position = n.popupPosition || "top", n.popupPosition) {
                var o = n.popupPosition.toLowerCase(),
                    i = e(document).attr("dir");
                r.position = "start" === o ? "rtl" === i ? "right" : "left" : "end" === o ? "rtl" === i ? "left" : "right" : o
            }
            t.tooltipster(r).tooltipster("show")
        }

        function r() {
            t.Popups.showHover()
        }

        function o() {
            t.Popups.show(this)
        }

        function i(e) {
            var n = e.data || {};
            t.Popups.hideWithTrigger(this, {
                trigger: n.trigger,
                triggerTarget: e.target
            })
        }
        t.Popups = {}, t.Popups.showHover = function() {
            e('[data-popup="hover"]').on("mouseover", o).on("mouseout", {
                trigger: "hover"
            }, i)
        }, t.Popups.show = function(t) {
            var r = e(t),
                o = r.data(),
                i = {
                    debug: !1,
                    interactive: !0,
                    trigger: "click",
                    autoClose: !1
                };
            "undefined" != typeof o.popup && "hover" === o.popup.toLowerCase() && (i.trigger = "hover"), n(r, o, i)
        }, t.Popups.hide = function(t) {
            e(t).tooltipster("hide")
        }, t.Popups.hideWithTrigger = function(t, n) {
            var r, o = e(t),
                i = o.data(),
                a = n || {};
            switch (a.trigger) {
                case "popup-button":
                    "undefined" != typeof i.popupClose && e(i.popupClose).tooltipster("hide");
                    break;
                case "tab-button":
                    e('[role="tabpanel"] .tooltipstered[data-popup]').tooltipster("hide");
                    break;
                case "content-toggler":
                    o.find(".tooltipstered[data-popup]").tooltipster("hide");
                    break;
                case "auto-close":
                    r = e(a.triggerTarget).closest(".tooltipstered"), r.length ? e('.tooltipstered:not([data-popup-auto-close="false"])').not(r).tooltipster("hide") : e(a.triggerTarget).closest(".tooltipster-base").length || e('.tooltipstered:not([data-popup-auto-close="false"])').tooltipster("hide");
                    break;
                case "modal-close":
                    e(".mfp-hide .tooltipstered").tooltipster("hide");
                    break;
                default:
                    o.tooltipster("hide")
            }
        }, e(document).on("Terra.init Terra.hover.popup.show", r).on("click.terra.popup.show", '[data-popup="click"]', o).on("click.terra.popup.hide", "[data-popup-close]", {
            trigger: "popup-button"
        }, i).on("Terra.tabClick", {
            trigger: "tab-button"
        }, i).on("Terra.toggler.hidden Terra.contentPanelToggled", {
            trigger: "content-toggler"
        }, i).on("click.terra.popup.hide", "html", {
            trigger: "auto-close"
        }, i).on("terra.modal.close", {
            trigger: "modal-close"
        }, i)
    }(jQuery, Terra),
    function(e, t, n) {
        function r() {
            return "split" === this.$container.data("slide-panel-behavior")
        }

        function o() {
            var e = t.getMediaQueryName();
            return e !== n && -1 === ["xxs", "xs"].indexOf(e)
        }

        function i(e) {
            return o.call(this) ? !r.call(this) : (this.$detail.attr("aria-hidden", e.toString()), !0)
        }

        function a() {
            o.call(this) ? (r.call(this) ? this.$master.attr("aria-hidden", !1) : this.isOpen() ? this.$master.attr("aria-hidden", !1) : this.$master.attr("aria-hidden", !0), this.$detail.attr("aria-hidden", !1)) : this.isOpen() ? (this.$master.attr("aria-hidden", !1), this.$detail.attr("aria-hidden", !0)) : (this.$master.attr("aria-hidden", !0), this.$detail.attr("aria-hidden", !1))
        }

        function s() {
            t.SlidePanel(e(this).data("slide-panel-target")).toggle()
        }

        function l(e) {
            return 'body[data-slide-panel-behavior="' + e + '"], div[data-slide-panel-behavior="' + e + '"], main[data-slide-panel-behavior="' + e + '"]'
        }

        function c() {
            u(h, y), u(g, b), u(m, w), u(v, C)
        }

        function u(t, n) {
            t && e(n).each(function() {
                a.call(new f(e(this)))
            })
        }

        function d() {
            h = e(y).length > 0, g = e(b).length > 0, m = e(w).length > 0, v = e(C).length > 0, c()
        }
        var f = function(e) {
            return this.$container = e, this.$master = this.$container.children(".slide-panel-master"), this.$detail = this.$container.children(".slide-panel-detail"), this
        };
        f.prototype.isOpen = function() {
            return this.$container.hasClass("slide-panel-open")
        }, f.prototype.open = function() {
            return i.call(this, !0) ? (this.$master.attr("aria-hidden", "false"), this.$container.addClass("slide-panel-open").trigger("Terra.slidePanelOpened"), this) : this
        }, f.prototype.close = function() {
            return i.call(this, !1) ? (this.$master.attr("aria-hidden", "true"), this.$container.removeClass("slide-panel-open").trigger("Terra.slidePanelClosed"), this) : this
        }, f.prototype.toggle = function() {
            return this.isOpen() ? this.close() : this.open(), this
        }, t.SlidePanel = function(t) {
            return new f(e(t))
        };
        var p, h = !1,
            g = !1,
            m = !1,
            v = !1,
            y = l("split"),
            b = l("push"),
            w = l("overlay"),
            C = l("squish");
        p = "ontouchstart" in document.documentElement ? "touchstart.terra.slidePanel" : "click.terra.slidePanel", e(document).on("Terra.init", d).on(p, "[data-slide-panel-target]", s), e(window).on("Terra.resizeEnd", c)
    }(jQuery, Terra),
    function(e, t) {
        function n(n) {
            e(n.target).find("[data-truncate-limit]:not([aria-live])").each(function() {
                var n = e(this),
                    r = n.data("truncate-limit"),
                    o = n.text().trim(),
                    i = e("<div></div>");
                if (o.length > r) {
                    n.data("originalHTML", n.html());
                    var a, s, l = n.data("more-label") || t._i18n("Terra/truncateText/showMore", "Show more");
                    a = o.substr(0, Math.min(r, o.substr(0, r).lastIndexOf(" "))) + "...", s = '<span class="muted-placeholder" aria-hidden="true" data-original-html=" ' + n.text() + ' " data-element-to-change=" ' + i + ' " data-short-text=" ' + a + ' "></span><button class="btn btn-link truncate-trigger" aria-expanded="false">' + l + "</button>", i.html(a), n.html(i), n.append(s), n.data("elementToChange", i), n.data("truncatedText", a), n.attr("aria-live", "polite")
                }
            })
        }

        function r() {
            var n = e(this),
                r = n.closest("[data-truncate-limit]").find(".muted-placeholder"),
                o = n.closest("[data-truncate-limit]");
            return "true" === n.attr("aria-expanded") ? (n.attr("aria-expanded", "false"), o.data("elementToChange") !== undefined ? o.data("elementToChange").html(o.data("truncatedText")) : o.find(">div").html(r.data("short-text")), n.html(o.data("more-label") || t._i18n("Terra/truncateText/showMore", "Show more"))) : (n.attr("aria-expanded", "true"), o.data("elementToChange") !== undefined ? o.data("elementToChange").html(o.data("originalHTML")) : o.find(">div").html(r.data("original-html")), n.html(o.data("less-label") || t._i18n("Terra/truncateText/showLess", "Show less"))), !1
        }
        e(document).on("Terra.init", n).on("click", "[data-truncate-limit] .truncate-trigger", r)
    }(jQuery, Terra);
var BlueSteel = window.BlueSteel || {
    version: "9.12.0"
};
window.BlueSteel = BlueSteel, Terra.Colors.priority = Terra.Colors["complement-fg-20"], $(function() {
    var e = $("body");
    e.on("terra.modal.open", ".modal", function() {
        e.addClass("modal-open")
    }).on("terra.modal.close", ".modal", function() {
        e.removeClass("modal-open")
    })
}), window.TerraRailsViewModels && window.console && window.console.warn && window.console.warn("view_models_core.js: TerraRailsViewModels has already been defined on window. Duplication of these assets will lead to undefined behavior. Please update your asset bundles to ensure no duplication is present.");
var TerraRailsViewModels = window.TerraRailsViewModels || {};
window.TerraRailsViewModels = TerraRailsViewModels, $(function() {
        $(window).load(function() {
            $("html").hasClass("no-terraicons") && ($("html").removeClass("no-terraicons"), fontSpy("Terra Icons", {
                glyphs: "\uf100\uf101\uf102"
            }))
        })
    }), Globalize.loadMessages({
        en: {
            "terra-rails-view_models": {
                navigation: {
                    loading: "Loading"
                },
                buttons: {
                    back: "Back",
                    close: "Close"
                }
            }
        },
        "en-GB": {
            "terra-rails-view_models": {
                navigation: {
                    loading: "Loading"
                },
                buttons: {
                    back: "Back",
                    close: "Close"
                }
            }
        },
        de: {
            "terra-rails-view_models": {
                navigation: {
                    loading: "Ladevorgang"
                },
                buttons: {
                    back: "Zur\xfcck",
                    close: "Schlie\xdfen"
                }
            }
        },
        es: {
            "terra-rails-view_models": {
                navigation: {
                    loading: "Cargando"
                },
                buttons: {
                    back: "Retroceder",
                    close: "Cerrar"
                }
            }
        },
        fr: {
            "terra-rails-view_models": {
                navigation: {
                    loading: "Chargement"
                },
                buttons: {
                    back: "Pr\xe9c\xe9dent",
                    close: "Fermer"
                }
            }
        },
        pt: {
            "terra-rails-view_models": {
                navigation: {
                    loading: "Carregando"
                },
                buttons: {
                    back: "Voltar",
                    close: "Fechar"
                }
            }
        }
    }), Globalize.loadMessages({
        en: {
            ion_errors: {
                title: {
                    "default": "System Error",
                    app_authorization: "Access Denied",
                    bad_request: "Invalid Request",
                    not_found: "Resource Not Found",
                    forbidden: "Restricted Content",
                    unauthorized: "Not Logged In",
                    not_connected: "Not Connected"
                },
                message: {
                    "default": "An error has occurred. Go back and try again.",
                    app_authorization: "You have not been granted access to this application. Contact your system administrator.",
                    bad_request: "Resubmit your request with the appropriate information.",
                    forbidden: "You do not have permission to view this content.",
                    not_found: "The resource you are searching for does not exist. Go back and try again.",
                    unauthorized: "You are not logged in. Log in to proceed.",
                    internal_server_error: "The operation you requested could not be completed."
                },
                button: {
                    back: "Back",
                    retry: "Retry",
                    login: "Login"
                }
            }
        },
        "en-GB": {
            ion_errors: {
                title: {
                    "default": "System Error",
                    app_authorization: "Access Denied",
                    bad_request: "Invalid Request",
                    not_found: "Resource Not Found",
                    forbidden: "Restricted Content",
                    unauthorized: "Not Logged In",
                    not_connected: "Not Connected"
                },
                message: {
                    "default": "An error has occurred. Go back and try again.",
                    app_authorization: "You have not been granted access to this application. Contact your system administrator.",
                    bad_request: "Resubmit your request with the appropriate information.",
                    forbidden: "You do not have permission to view this content.",
                    not_found: "The resource you are searching for does not exist. Go back and try again.",
                    unauthorized: "You are not logged in. Log in to proceed.",
                    internal_server_error: "The operation you requested could not be completed."
                },
                button: {
                    back: "Back",
                    retry: "Retry",
                    login: "Log-In"
                }
            }
        },
        de: {
            ion_errors: {
                title: {
                    "default": "Systemfehler",
                    app_authorization: "Zugriff verweigert",
                    bad_request: "Ung\xfcltige Anfrage",
                    not_found: "Ressource nicht gefunden",
                    forbidden: "Zugriffsbeschr\xe4nkte Inhalte",
                    unauthorized: "Nicht angemeldet",
                    not_connected: "Nicht verbunden"
                },
                message: {
                    "default": "Es ist ein Fehler aufgetreten. Gehen Sie zur\xfcck und versuchen Sie es erneut.",
                    app_authorization: "Sie haben keine Berechtigung f\xfcr den Zugriff auf diese Anwendung. Bitte wenden Sie sich an Ihren Systemverwalter.",
                    bad_request: "Reichen Sie Ihre Anfrage mit den entsprechenden Angaben erneut ein.",
                    forbidden: "Sie haben keine Berechtigung, diese Inhalte einzusehen.",
                    not_found: "Die gesuchte Ressource existiert nicht. Gehen Sie zur\xfcck und versuchen Sie es erneut.",
                    unauthorized: "Sie sind zurzeit nicht angemeldet. Bitte melden Sie sich an, um fortzufahren.",
                    internal_server_error: "Die beabsichtigte Aktion konnte nicht ausgef\xfchrt werden."
                },
                button: {
                    back: "Zur\xfcck",
                    retry: "Erneut versuchen",
                    login: "Anmelden"
                }
            }
        },
        es: {
            ion_errors: {
                title: {
                    "default": "Error del sistema",
                    app_authorization: "Acceso denegado",
                    bad_request: "Solicitud no v\xe1lida",
                    not_found: "No se encontr\xf3 el recurso",
                    forbidden: "Contenido restringido",
                    unauthorized: "No se inici\xf3 sesi\xf3n",
                    not_connected: "No conectado"
                },
                message: {
                    "default": "Se produjo un error. Int\xe9ntelo de nuevo.",
                    app_authorization: "No se le ha otorgado acceso a esta aplicaci\xf3n. P\xf3ngase en contacto con el administrador del sistema.",
                    bad_request: "Reenv\xede la solicitud con la informaci\xf3n pertinente.",
                    forbidden: "No tiene permiso para ver este contenido.",
                    not_found: "El recurso que est\xe1 buscando no existe. Int\xe9ntelo de nuevo.",
                    unauthorized: "No ha iniciado sesi\xf3n. Inicie sesi\xf3n para continuar.",
                    internal_server_error: "No se pudo completar la operaci\xf3n solicitada."
                },
                button: {
                    back: "Atr\xe1s",
                    retry: "Reintentar",
                    login: "Inicio de sesi\xf3n"
                }
            }
        },
        fr: {
            ion_errors: {
                title: {
                    "default": "Erreur syst\xe8me",
                    app_authorization: "Acc\xe8s refus\xe9",
                    bad_request: "Demande non valide",
                    not_found: "Ressource introuvable",
                    forbidden: "Contenu restreint",
                    unauthorized: "Vous n'\xeates pas connect\xe9.",
                    not_connected: "Non connect\xe9"
                },
                message: {
                    "default": "Une erreur s'est produite. Revenez en arri\xe8re et r\xe9essayez.",
                    app_authorization: "L'acc\xe8s \xe0 cette application ne vous a pas \xe9t\xe9 accord\xe9. Contactez l'administrateur syst\xe8me.",
                    bad_request: "Renvoyez votre demande avec les informations appropri\xe9es.",
                    forbidden: "Vous n'\xeates pas autoris\xe9 \xe0 afficher ce contenu.",
                    not_found: "La ressource que vous recherchez n'existe pas. Revenez en arri\xe8re et r\xe9essayez.",
                    unauthorized: "Vous n'\xeates pas connect\xe9. Connectez-vous pour continuer.",
                    internal_server_error: "L'op\xe9ration demand\xe9e n'a pas pu \xeatre effectu\xe9e."
                },
                button: {
                    back: "Pr\xe9c\xe9dent",
                    retry: "R\xe9essayer",
                    login: "Connexion"
                }
            }
        },
        pt: {
            ion_errors: {
                title: {
                    "default": "Erro do sistema",
                    app_authorization: "Acesso negado",
                    bad_request: "Solicita\xe7\xe3o inv\xe1lida",
                    not_found: "Recurso n\xe3o encontrado",
                    forbidden: "Conte\xfado restrito",
                    unauthorized: "N\xe3o logado",
                    not_connected: "N\xe3o conectado"
                },
                message: {
                    "default": "Ocorreu um erro. Tente novamente.",
                    app_authorization: "Voc\xea n\xe3o tem acesso a este aplicativo. Entre em contato com o administrador do sistema.",
                    bad_request: "Reenvie novamente sua solicita\xe7\xe3o com as informa\xe7\xf5es adequadas.",
                    forbidden: "Voc\xea n\xe3o tem permiss\xe3o para visualizar este conte\xfado.",
                    not_found: "O recurso pelo qual voc\xea procura n\xe3o existe. Volte e tente novamente.",
                    unauthorized: "Voc\xea n\xe3o est\xe1 logado. Fa\xe7a logon para continuar.",
                    internal_server_error: "A opera\xe7\xe3o solicitada n\xe3o p\xf4de ser conclu\xedda."
                },
                button: {
                    back: "Voltar",
                    retry: "Tentar novamente",
                    login: "Logon"
                }
            }
        }
    }),
    function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
        }
        var n = {};
        t.m = e, t.c = n, t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e["default"]
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 3)
    }([function(e) {
        "use strict";
        var t = {
            clientId: "ionClient",
            availableClients: [],
            initialize: function() {
                for (var e in t.availableClients) t.availableClients.hasOwnProperty(e) && t.availableClients[e].initialize()
            },
            utils: {
                messageString: function(e) {
                    return "[ " + t.clientId + " | " + e + " ]"
                },
                generateGUID: function() {
                    function e() {
                        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                    }
                    return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
                },
                triggerEvent: function(e, t) {
                    t || (t = document);
                    var n = document.createEvent("Events");
                    n.initEvent(e, !0, !0), t.dispatchEvent(n)
                }
            },
            logger: {
                debug: function(e) {
                    "undefined" != typeof Canadarm && Canadarm.debug(t.utils.messageString(e))
                },
                info: function(e) {
                    "undefined" != typeof Canadarm && Canadarm.info(t.utils.messageString(e))
                },
                warn: function(e) {
                    "undefined" != typeof Canadarm && Canadarm.warn(t.utils.messageString(e))
                },
                error: function(e) {
                    "undefined" != typeof Canadarm && Canadarm.error(t.utils.messageString(e))
                },
                fatal: function(e) {
                    "undefined" != typeof Canadarm && Canadarm.fatal(t.utils.messageString(e))
                }
            }
        };
        e.exports = t
    }, function(e, t, n) {
        "use strict";

        function r(e, t, n) {
            this.messageId = o.utils.generateGUID(), this.klass = t || o.messaging.clientKlass, this.messageType = t || o.messaging.defaultMessageType, this.metaData = n, this.isFromServer = !0, e && (this.success = !1, this.messageCallback = e), this.callback = function(e) {
                this.messageCallback ? this.messageCallback(this.success, e) : o.logger.info("No messageCallback...")
            }, this.toClientString = function() {
                return JSON.stringify(this)
            }
        }
        var o = n(0);
        e.exports = r
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            o = n(1);
        r.valueChange = r.valueChange || {},
            function() {
                this.clientKlass = r.messaging.clientKlass, this.notify = function(e, t, n) {
                    r.messaging.sendMessage(new o(e, this.clientKlass, {
                        keyPath: t,
                        value: n
                    }))
                }
            }.apply(r.valueChange)
    }, function(e, t, n) {
        e.exports = n(4)
    }, function(e, t, n) {
        n(5)
    }, function(e, t, n) {
        "use strict";
        var r = n(6);
        window.ionClient = r, window.addEventListener("load", r.initialize)
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        n(7), n(8), n(9), n(10), n(11), n(12), n(13), n(14), n(17), n(18), n(19), n(20), n(21), n(22), n(23), n(2), n(24), n(25), "undefined" != typeof window && (window.ionClient = r, window.addEventListener("load", r.initialize)), e.exports = r
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        r.availableClients.push({
            clientId: "ANDROID-1.0.0",
            isAvailable: function() {
                return "undefined" != typeof Android
            },
            initialize: function() {
                this.isAvailable() && (r.clientId = this.clientId, r.messaging && (r.messaging.notify = function(e) {
                    Android.sendMessage(e.toClientString())
                }), r.utils.triggerEvent("ionClient.init"))
            }
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        r.availableClients.push({
            clientId: "iAware-1.0.0",
            isAvailable: function() {
                return "undefined" != typeof iAwareIonMessage
            },
            initialize: function() {
                this.isAvailable() && (r.clientId = this.clientId, r.messaging && (r.messaging.notify = function(e) {
                    iAwareIonMessage(e.toClientString())
                }), r.utils.triggerEvent("ionClient.init"))
            }
        })
    }, function(e, t, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            o = n(0),
            i = n(1);
        o.availableClients.push({
            clientId: "iOS-UIKit-1.2.0",
            isAvailable: function() {
                return "undefined" != typeof window.WebViewJavascriptBridge && "undefined" == typeof window.WebViewJavascriptBridge.send
            },
            connect: function(e) {
                if ("object" === r(window.uikit)) {
                    if (this.isAvailable()) return e(WebViewJavascriptBridge);
                    if (window.WVJBCallbacks) return window.WVJBCallbacks.push(e);
                    window.WVJBCallbacks = [e];
                    var t = document.createElement("iframe");
                    t.style.display = "none", t.src = "wvjbscheme://__BRIDGE_LOADED__", document.documentElement.appendChild(t), setTimeout(function() {
                        document.documentElement.removeChild(t)
                    }, 0)
                }
            },
            initialize: function() {
                var e = this;
                this.connect(function(t) {
                    o.clientId = e.clientId, i.fromWebViewJavascriptBridge = function(e, t) {
                        var n = null;
                        void 0 !== t && (n = function(e, n) {
                            t({
                                success: e,
                                data: n
                            })
                        });
                        var r = new i(n, e.messageType, e);
                        return r.hasOwnProperty("isFromServer") && delete r.isFromServer, r
                    }, t.registerHandler("CernJSHandler", function(e, t) {
                        o.messaging.sendMessage(i.fromWebViewJavascriptBridge(e, t))
                    }), o.messaging && (o.messaging.clientKlass = "CernJSBridgeMessage", o.messaging.issueCallback = function(e, t) {
                        "success" in t && (e.success = t.success, delete t.success), e.metaData = t, o.messaging.sendMessage(e)
                    }, o.messaging.notify = function(e) {
                        t.callHandler("CernObjCHandler", e, function(t) {
                            o.messaging.issueCallback(e, t)
                        })
                    }), o.valueChange && (o.valueChange.clientKlass = "CernJSBridgeValueChange"), o.heightChange && (o.heightChange.clientObjectKey = "calculatedContentHeight"), o.navigation && (o.navigation.enabled = !0, o.navigation.clientKlass = "CernJSBridgeNavigation"), o.formInput && (o.formInput.enabled = !0, o.formInput.clientKlass = "CernJSBridgeFormInputMessage"), o.workflowComponentsLoaded && (o.workflowComponentsLoaded.enabled = !0, o.workflowComponentsLoaded.clientKlass = "DOCWorkflowComponentsLoadedBridgeMessage"), o.workflowComponentSaved && (o.workflowComponentSaved.enabled = !0, o.workflowComponentSaved.clientKlass = "DOCWorkflowComponentSavedBridgeMessage"), o.dictation && (o.dictation.enabled = !0, o.dictation.clientKlassReady = "DICComponentsReadyBridgeMessage", o.dictation.clientKlassEnd = "DICDictationEndedBridgeMessage"), o.alertView && (o.alertView.enabled = !0, o.alertView.clientKlass = "CernJSBridgeAlertViewMessage"), o.photoCapture && (o.photoCapture.enabled = !0, o.photoCapture.clientKlass = "ICLPhotoCaptureBridgeMessage"), o.utils.triggerEvent("ionClient.init")
                })
            }
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        r.availableClients.push({
            clientId: "iOS-WebKit-1.0.0",
            isAvailable: function() {
                return "undefined" != typeof window.webkit
            },
            initialize: function() {
                this.isAvailable() && (r.clientId = this.clientId, r.messaging && (r.messaging.clientKlass = "CernWKBridgeMessage", r.messaging.notify = function(e) {
                    window.webkit.messageHandlers.CernWKBridge.postMessage(e.toClientString())
                }), r.valueChange && (r.valueChange.clientKlass = "CernWKBridgeValueChange"), r.heightChange && (r.heightChange.clientObjectKey = "calculatedContentHeight"), r.navigation && (r.navigation.enabled = !0, r.navigation.clientKlass = "CernWKBridgeNavigation"), r.utils.triggerEvent("ionClient.init"))
            }
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        r.availableClients.push({
            clientId: "XFC-Client-1.0.1",
            isAvailable: function() {
                return "undefined" != typeof XFC1 && window.self !== window.top
            },
            initialize: function() {
                this.isAvailable() && (r.clientId = this.clientId, r.messaging && (r.messaging.notify = function(e) {
                    XFC1.Provider.trigger("orionComponent.message", e.toClientString())
                }), r.utils.triggerEvent("ionClient.init"))
            }
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        r.availableClients.push({
            clientId: "EmbeddedContent-1.0.0",
            isAvailable: function() {
                return "undefined" != typeof EmbeddedContent && window.self !== window.top
            },
            initialize: function() {
                this.isAvailable() && (r.clientId = this.clientId, r.messaging && (r.messaging.notify = function(e) {
                    EmbeddedContent.provider["default"].trigger({
                        event: "orionComponent.message",
                        detail: e.toClientString()
                    })
                }), r.utils.triggerEvent("ionClient.init"))
            }
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        r.availableClients.push({
            clientId: "Powerchart-Client-1.0.0",
            isAvailable: function() {
                return window.external && "undefined" != typeof window.external.PowerchartIonMessage
            },
            initialize: function() {
                this.isAvailable() && (r.clientId = this.clientId, r.messaging && (r.messaging.notify = function(e) {
                    window.external.PowerchartIonMessage(e.toClientString())
                }), r.utils.triggerEvent("ionClient.init"))
            }
        })
    }, function(e, t, n) {
        "use strict";
        n(15), n(16)
    }, function(e, t, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            o = n(1);
        "undefined" != typeof window && (window.IonMessage = o);
        var i = n(0);
        i.messaging = i.messaging || {},
            function() {
                this.clientKlass = "ionClientMessage", this.defaultMessageType = "ionClientMessage", this.clientTimeoutSeconds = .1, this.messageDictionary = {}, this.clientMessageEvent = "ionClient.message.notify", this.sendMessage = function(e) {
                    if ((void 0 === e ? "undefined" : r(e)) === String && (e = JSON.parse(e)), !(e.messageId in this.messageDictionary || !0 !== e.success)) return void i.logger.info(e.messageId + " | " + e.messageType + "Received a reply message with messageId not in the messageDictionary, ignore this message to avoid infinite recursion");
                    if (e.messageId in this.messageDictionary) {
                        i.logger.info(e.messageId + " | " + e.messageType + " | Message found, issuing callback...");
                        var t = this.messageDictionary[e.messageId];
                        t.timeout && clearTimeout(t.timeout), delete this.messageDictionary[e.messageId], e.success && (t.success = e.success), t.callback(e.metaData)
                    } else i.logger.info(e.messageId + " | " + e.messageType + " | New message, notifying client..."), e.messageCallback && (this.messageDictionary[e.messageId] = e, e.timeout = setTimeout(function() {
                        i.logger.info(e.messageId + " | " + e.messageType + " | Message timed out..."), e.success = !1, i.messaging.sendMessage(e)
                    }, 1e3 * this.clientTimeoutSeconds)), e.hasOwnProperty("isFromServer") && e.isFromServer ? this.notify(e) : this.broadcastMessage(e)
                }, this.notify = function(e) {
                    this.broadcastMessage(e)
                }, this.broadcastMessage = function(e) {
                    var t = new CustomEvent(this.clientMessageEvent, {
                        detail: {
                            message: e
                        },
                        bubbles: !0,
                        cancelable: !0
                    });
                    document.dispatchEvent(t)
                }
            }.apply(i.messaging)
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            o = n(1);
        r.statusNotifications = function() {
            return {
                _lastNotification: {},
                checkPage: function() {
                    var e = document.getElementsByClassName("ion-client-status");
                    if (0 !== e.length) {
                        var t = e[0],
                            n = t.getAttribute("data-status"),
                            o = t.getAttribute("data-location");
                        r.statusNotifications.notify(n, o)
                    }
                },
                notify: function(e, t) {
                    var n = {
                        statusCode: e
                    };
                    if (t && (n.location = t), JSON.stringify(n) !== JSON.stringify(r.statusNotifications._lastNotification)) {
                        var i = new o(function(e) {
                            e && (r.statusNotifications._lastNotification = n)
                        }, "httpStatusReceived", n);
                        r.messaging.sendMessage(i)
                    }
                }
            }
        }(), "undefined" != typeof window && (window.addEventListener("pageshow", function() {
            r.statusNotifications.checkPage()
        }, !1), window.addEventListener("ionClient.init", function() {
            r.statusNotifications.checkPage()
        }, !1))
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            o = n(1);
        r.alertView = function() {
            return {
                clientKlass: r.messaging.clientKlass,
                show: function(e, t, n, i) {
                    if (!r.alertView.enabled || null === e || null === t || !n) return r.logger.error("Invalid alert message"), void(i && i(!1, null));
                    r.messaging.sendMessage(new o(i, this.clientKlass, {
                        title: e,
                        message: t,
                        alertButtons: n
                    }))
                }
            }
        }()
    }, function(e, t, n) {
        "use strict";
        n(2);
        var r = n(0);
        r.heightChange = r.heightChange || {},
            function() {
                this.clientObjectKey = "contentHeight", this.lastRecordedContentHeight = 0;
                var e = this;
                this.notify = function(t) {
                    t || (t = e.getContentHeight()), t !== e.lastRecordedContentHeight && r.valueChange.notify(function(n) {
                        n && (e.lastRecordedContentHeight = t)
                    }, this.clientObjectKey, t)
                }, this.getMainContent = function() {
                    return document.getElementsByClassName("main-content")[0]
                }, this.getContentHeight = function() {
                    var t = e.getMainContent();
                    return t ? t.offsetHeight : 0
                }, "undefined" != typeof window && (window.addEventListener("pageshow", function() {
                    r.heightChange.notify()
                }, !1), window.addEventListener("ionClient.init", function() {
                    r.heightChange.notify()
                }, !1))
            }.apply(r.heightChange)
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            o = n(1);
        r.dictation = function() {
            return {
                clientKlassReady: r.messaging.clientKlassReady,
                clientKlassEnd: r.messaging.clientKlassEnd,
                notifyReady: function(e, t, n) {
                    if (!t) return void r.logger.error("Invalid Dictation Components Ready Message; controlIds not given");
                    n || (n = {}), n.controlIds = t, n.updateControls = e, r.messaging.sendMessage(new o(null, this.clientKlassReady, n))
                },
                notifyEnd: function(e, t) {
                    e !== undefined && (t || (t = {}), t.stop = e), r.messaging.sendMessage(new o(null, this.clientKlassEnd, t))
                }
            }
        }()
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            o = n(1);
        r.dirtyData = function() {
            return {
                messageTypeToCheck: "ionClientDirtyDataMessage",
                messageTypeToPresent: "ionClientPresentDirtyData",
                dirtyDataCheckEvent: "ionClient.dirtyDataCheck",
                dirtyDataNotification: "ionClient.notifyDirtyStatus",
                dirtyDataPresent: !1,
                messages: [],
                callbackInfo: {
                    callback: function() {},
                    options: {}
                },
                alertCallback: function(e, t) {
                    e && (t.discardSelected && r.dirtyData.messages.length > 0 ? r.messaging.sendMessage(new o(r.dirtyData.alertCallback, r.dirtyData.messageTypeToPresent, r.dirtyData.messages.shift())) : t.discardSelected && 0 === r.dirtyData.messages.length ? r.dirtyData.callbackInfo.callback(r.dirtyData.callbackInfo.options) : t.discardSelected || (r.dirtyData.messages = []))
                },
                handleDirtyData: function(e, t) {
                    if (e) {
                        r.dirtyData.timeout && clearTimeout(r.dirtyData.timeout);
                        var n = null;
                        n = t.discard ? ["Discard", "Cancel"] : ["Ok"];
                        var i = {
                            isDirty: !0,
                            options: {
                                message: t.message,
                                discard: t.discard,
                                buttons: n
                            }
                        };
                        r.dirtyData.dirtyDataPresent ? r.dirtyData.messages.push(i) : (r.dirtyData.dirtyDataPresent = !0, r.messaging.sendMessage(new o(r.dirtyData.alertCallback, r.dirtyData.messageTypeToPresent, i)))
                    }
                },
                check: function(e, t) {
                    r.logger.info("Checking for dirty data..."), r.dirtyData.dirtyDataPresent = !1, r.dirtyData.messages = [], r.dirtyData.callbackInfo.callback = e, r.dirtyData.callbackInfo.options = t, t || (t = {}), r.dirtyData.timeout = setTimeout(function() {
                        e && (r.logger.info("Dirty data check timed out..."), e(r.dirtyData.dirtyDataPresent, t))
                    }, 1e3 * r.messaging.clientTimeoutSeconds), r.utils.triggerEvent(r.dirtyData.dirtyDataCheckEvent), r.messaging.sendMessage(new o(r.dirtyData.handleDirtyData, r.dirtyData.messageTypeToCheck, {
                        options: t
                    }))
                },
                notify: function(e, t) {
                    r.logger.info("Notifying listening consumers of client..."), t === undefined && (t = !0);
                    var n = {
                            isDirty: t,
                            id: e
                        },
                        i = new o(null, r.dirtyData.dirtyDataNotification, n);
                    r.messaging.sendMessage(i)
                }
            }
        }(), document.addEventListener(r.messaging.clientMessageEvent, function(e) {
            var t = e.detail.message;
            t.isFromServer !== undefined && !1 !== t.isFromServer || null == t.metaData || "ionClient.dirtyDataCheck" !== t.metaData.action || (e.detail.message.success = !0, r.messaging.sendMessage(e.detail.message), r.dirtyData.check())
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            o = n(1);
        r.photoCapture = function() {
            return {
                notifyReady: function(e, t, n) {
                    var i = {
                        patientId: t,
                        options: n
                    };
                    r.messaging.sendMessage(new o(e, this.clientKlass, i))
                }
            }
        }()
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            o = n(1);
        r.formInput = function() {
            return {
                clientKlass: r.messaging.clientKlass,
                notify: function(e, t, n) {
                    if (!n) return void r.logger.error("Invalid FormInput Message");
                    n.eventName = t, r.messaging.sendMessage(new o(e, this.clientKlass, n))
                }
            }
        }()
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            o = n(1);
        r.navigation = r.navigation || {},
            function() {
                this.enabled = !1, this.clientKlass = r.messaging.clientKlass, this.types = {
                    MODAL: 0,
                    POPOVER: 1,
                    PUSH: 2,
                    POP: 3,
                    DISMISS: 4,
                    CLOSE_PATIENT: 5
                }, this.navigate = function(e, t) {
                    r.messaging.sendMessage(new o(e, this.clientKlass, t))
                }, this.displayPopover = function(e, t, n, o, i, a) {
                    r.navigation.navigate(e, {
                        type: r.navigation.types.POPOVER,
                        destination: t,
                        xPosition: n,
                        yPosition: o,
                        width: i,
                        height: a
                    })
                }, this.dismiss = function(e) {
                    r.navigation.navigate(e, {
                        type: r.navigation.types.DISMISS
                    })
                }, this.closePatientContext = function(e, t) {
                    t = !0 === t, r.navigation.navigate(e, {
                        type: r.navigation.types.CLOSE_PATIENT,
                        force: t
                    })
                }
            }.apply(r.navigation)
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            o = n(1);
        r.workflowComponentSaved = function() {
            return {
                clientKlass: r.messaging.clientKlass,
                notify: function(e, t, n) {
                    if (!n) return void r.logger.error("Invalid Workflow Component Saved Message");
                    n.eventName = t, r.messaging.sendMessage(new o(e, this.clientKlass, n))
                }
            }
        }()
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            o = n(1);
        r.workflowComponentsLoaded = function() {
            return {
                clientKlass: r.messaging.clientKlass,
                notify: function(e, t, n) {
                    if (!n) return void r.logger.error("Invalid Workflow Components Loaded Message");
                    n.eventName = t, r.messaging.sendMessage(new o(e, this.clientKlass, n))
                }
            }
        }()
    }]),
    function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
        }
        var n = {};
        t.m = e, t.c = n, t.p = "", t(0)
    }([function(e, t, n) {
        e.exports = n(1)
    }, function(e, t, n) {
        n(2)
    }, function(e, t, n) {
        "use strict";
        var r = n(3);
        "undefined" != typeof window && (window.ionXHR = r), e.exports = r
    }, function(e) {
        "use strict";
        var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            n = {
                request: function(e, t, n, r, o, i, a, s) {
                    var l = this,
                        c = {
                            method: t,
                            url: e,
                            data: n,
                            dataType: r,
                            retryLimit: o,
                            retryCount: 0,
                            beforeSend: function(t, n) {
                                if (!s) return !0;
                                t.url = e, s(t, n)
                            },
                            error: function(t, n, r) {
                                if (++this.retryCount <= this.retryLimit && "abort" !== n) return void $.ajax(this);
                                t.url = e, t.handleError = !0, i(t, n, r), t.handleError && l.defaultErrorHandler(t.status, t.url)
                            },
                            success: function(t, n, r) {
                                r.url = e, a(t, n, r)
                            }
                        };
                    try {
                        JSON.parse(n), c.contentType = "application/json"
                    } catch (e) {}
                    var u = $.ajax(c);
                    return u.url = e, u
                },
                abort: function(e) {
                    return !(!e || 4 === e.readyState) && (e.abort(), !0)
                },
                stringToJSONObject: function(e) {
                    try {
                        var n = JSON.parse(e);
                        if (n && "object" === (void 0 === n ? "undefined" : t(n))) return n
                    } catch (e) {}
                    return null
                },
                defaultErrorHandler: function(e, t) {
                    var n = [401, 403, 420, 419, 500];
                    return "undefined" != typeof ionClient && n.indexOf(e) > -1 && (ionClient.statusNotifications.notify(e, t), !0)
                }
            };
        e.exports = n
    }]);
var TerraRailsViewModels = window.TerraRailsViewModels || {};
window.TerraRailsViewModels = TerraRailsViewModels,
    function(e, t, n) {
        "use strict";
        var r = function() {
            function t(e) {
                if (e < 0) return "";
                for (var t, n = "xxs", r = 1; r < u && (t = l[r], e >= c[t]); r++) n = n + " " + t;
                return n
            }

            function r() {
                i(e("body"))
            }

            function o(t) {
                t && t.length && e(t).each(function() {
                    i(e(this))
                })
            }

            function i(n) {
                if (n) {
                    var r = "[data-terra-responsive-element=true]",
                        o = e(n).find(r),
                        i = [],
                        a = [];
                    o.each(function() {
                        var n = e(this);
                        i.push(n), a.push(t(n.width()))
                    }), e(i).each(function() {
                        e(this).attr("data-terra-js-mq-dirty", "true")
                    });
                    for (var s = 0; s < i.length; s++) "true" === i[s].attr("data-terra-js-mq-dirty") && (i[s].attr("data-terra-js-mq-sizes", a[s]), i[s].removeAttr("data-terra-js-mq-dirty"), e(document).trigger("Terra.responsiveElements.sizeUpdated", i[s]))
                }
            }

            function a(t, n) {
                var r = e(t).attr("data-terra-js-mq-sizes");
                return !!r && -1 !== r.split(" ").indexOf(n)
            }

            function s() {}
            var l = ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"],
                c = {
                    xxs: 0,
                    xs: 580,
                    sm: 760,
                    md: 1024,
                    lg: 1276,
                    xl: 1540,
                    xxl: 2068
                },
                u = l.length;
            return e(n).on("Terra.init Terra.resizeEnd", r), e(document).on("orion.navigator.contentDidLoad", function(e, t) {
                o(t)
            }), {
                initialize: s,
                update: r,
                updateElement: i,
                updateElements: o,
                sizesForWidth: t,
                elementHasSize: a
            }
        }();
        t.ResponsiveElements = r
    }(jQuery, TerraRailsViewModels, window), TerraRailsViewModels.ResponsiveElements.initialize(),
    function(e, t) {
        "use strict";
        var n = {};
        n._ajaxCache = {}, n._selectorContent = {}, n.replace = function(e, t, r) {
            return n.empty(e, r), n.append(e, t, r)
        }, n.replaceContent = function(e, t, r) {
            n.replace(e, t, r)
        }, n.append = function(e, r, o) {
            var i = t(e),
                a = t(r),
                s = !o || !o.caching || !o.caching.isFromCache;
            return s && i.trigger("orion.navigator.contentWillLoad", [a, o]), i.trigger("orion.navigator.contentWillAttach", [a, o]), o && o.removeSelectorContent && n.removeContentSelectorElementWithOptions(i, o), i.append(a), s && i.trigger("orion.navigator.contentDidLoad", [a, o]), i.trigger("orion.navigator.contentDidAttach", [a, o]), a
        }, n.remove = function(e, r) {
            var o = t(e),
                i = o.parent(),
                a = !r || !r.caching || r.caching.doNotCache;
            i.trigger("orion.navigator.contentWillDetach", [o, r]), a && i.trigger("orion.navigator.contentWillUnload", [o, r]), o.detach(), n.restoreAllNestedElements(o), i.trigger("orion.navigator.contentDidDetach", [o, r]), a && i.trigger("orion.navigator.contentDidUnload", [o, r])
        }, n.empty = function(e, r) {
            var o = t(e),
                i = o.contents();
            return n.restoreAllNestedElements(o), n.remove(i, r)
        }, n.showLoadingIndicator = function(e) {
            var n = t('<div class="terraVM-LoadingOverlay" tabindex="-1"></div>'),
                r = '<div class=\'terraVM-LoadingOverlay-content loading loading-large\'><span class="icon-spinner" aria-hidden="true"></span> ' + Globalize.formatMessage("terra-rails-view_models/navigation/loading") + "<marquee direction='right'>&hellip;&nbsp;</marquee></div>";
            n.append(r), n.focus(), t(e).prepend(n)
        }, n.removeLoadingIndicator = function(e) {
            t(e).find(".terraVM-LoadingOverlay").remove()
        }, n.findInContent = function(e, n) {
            var r = t(e);
            return r.find(n).add(r.filter(n))
        }, n.populateContent = function(e, r, o) {
            var i, a = r.contentHtml,
                s = r.contentUrl,
                l = r.contentSelector,
                c = r.includeParentSelector;
            if (n.restoreAllNestedElements(e), a) i = n.replace(e, a), o && o(i);
            else if (s) n.loadContentURLWithOptions({
                url: s,
                ajaxTarget: e,
                selector: l,
                successCallback: o,
                errorCallback: r.errorCallback
            });
            else if (l) {
                var u;
                u = c ? t(r.contentSelector)[0].outerHTML : t(r.contentSelector).html(), i = n.replace(e, u, {
                    contentSelector: l,
                    removeSelectorContent: !0,
                    includeParentSelector: c
                }), o && o(i)
            } else e.trigger("orion.navigator.showFailed", [r])
        }, n.removeContentSelectorElement = function(e, r) {
            var o = n.generateUniqueId();
            t(e).attr("swap-element-id", o), t(e).attr("swap-selector", r), n._selectorContent[o] = t(r).first().children().detach(), t(r).first().append("<div id=" + o + "></div>")
        }, n.removeContentSelectorElementWhole = function(e, r) {
            var o = n.generateUniqueId();
            t(e).attr("swap-element-id", o), t(e).attr("swap-selector", r), t("<div id=" + o + "></div>").attr("data-swap-use-parent", "true").insertBefore(t(r).first()), n._selectorContent[o] = t(r).first().detach()
        }, n.removeContentSelectorElementWithOptions = function(e, t) {
            t.contentSelector && (t.includeParentSelector ? n.removeContentSelectorElementWhole(e, t.contentSelector) : n.removeContentSelectorElement(e, t.contentSelector))
        }, n.restoreElementById = function(e) {
            if (n._selectorContent[e]) {
                var r = t("#" + e);
                if (r.data("swap-use-parent")) r.replaceWith(n._selectorContent[e]);
                else {
                    var o = r.parent();
                    o.empty(), o.append(n._selectorContent[e])
                }
                delete n._selectorContent[e]
            }
        }, n.restoreAllNestedElements = function(e) {
            for (var r = e.find("[swap-element-id]").addBack("[swap-element-id]"), o = 0; o < r.length; o++) {
                var i = t(r[o]);
                n.restoreElementById(i.attr("swap-element-id")), i.removeAttr("swap-element-id"), i.removeAttr("swap-selector")
            }
        }, n.loadContentURL = function(e, t, r, o, i) {
            n.loadContentURLWithOptions({
                url: t,
                ajaxTarget: e,
                selector: r,
                successCallback: o,
                contentOptions: i
            })
        }, n.loadContentURLWithOptions = function(e) {
            var r = e.selector,
                o = e.successCallback,
                i = e.ajaxTarget,
                a = e.errorCallback;
            n.ajax({
                url: e.url,
                ajaxTarget: i,
                beforeSend: function() {
                    n.showLoadingIndicator(i)
                },
                successCallback: function(a) {
                    var s = t(a);
                    r && !s.is(r) && (s = s.find(r)), n.removeLoadingIndicator(i);
                    var l = n.replace(i, s, e.contentOptions);
                    o && o(l)
                },
                failureCallback: function(e, t, r) {
                    n.removeLoadingIndicator(i), i.trigger("orion.navigator.contentDidFail", {
                        jqXHR: e,
                        textStatus: t,
                        errorThrown: r
                    })
                },
                errorCallback: a
            })
        }, n.ajax = function(e) {
            var r = e.url,
                o = e.type,
                i = e.dataType,
                a = e.data,
                s = t(e.ajaxTarget).first(),
                l = e.beforeSend,
                c = e.successCallback,
                u = e.failureCallback,
                d = e.errorCallback;
            if (r && s.length) {
                var f = s.data("orion-ajax-id"),
                    p = function(e) {
                        f && n._ajaxCache[f] && n._ajaxCache[f].abort();
                        var t = n.generateUniqueId();
                        s.data("orion-ajax-id", t), n._ajaxCache[t] = e, f = t, l && l(e)
                    },
                    h = function(t, r, o) {
                        delete n._ajaxCache[f], s.removeData("orion-ajax-id"), c && e.successCallback(t, r, o)
                    },
                    g = function(r, o, i) {
                        if (delete n._ajaxCache[f], s.removeData("orion-ajax-id"), 0 !== r.status || "abort" !== o) {
                            if (d) e.errorCallback(r, o, i);
                            else {
                                var a = s.find(".terraVM-ErrorView-container");
                                if (0 === a.length) {
                                    a = t("<div class=terraVM-ErrorView-container>");
                                    var l = n.ajax.bind(n, e),
                                        c = n.errorDisplaysForStatus(r.status),
                                        p = s.find(".terraVM-ContentPanel--contentModel");
                                    p.length ? n.replace(p, a) : s.append(a), IonErrorsComponents.ErrorView.render({
                                        glyph: !0,
                                        name: c.name,
                                        description: c.message,
                                        buttonDisplay: Globalize.formatMessage("ion_errors/button/retry"),
                                        buttonAttributes: {
                                            onClick: l
                                        }
                                    }, a[0])
                                }
                            }
                            u && e.failureCallback(r, o, i)
                        }
                    },
                    m = i || "html";
                !0 === e.inferDataType && (m = null), ionXHR.request(r, o || "GET", a, m, 0, g, h, p)
            }
        }, n.errorDisplaysForStatus = function(e) {
            var t = "",
                n = "";
            return 400 === e ? (t = Globalize.formatMessage("ion_errors/title/bad_request"), n = Globalize.formatMessage("ion_errors/message/bad_request")) : 401 === e ? (t = Globalize.formatMessage("ion_errors/title/unauthorized"), n = Globalize.formatMessage("ion_errors/message/unauthorized")) : 403 === e ? (t = Globalize.formatMessage("ion_errors/title/forbidden"), n = Globalize.formatMessage("ion_errors/message/forbidden")) : 404 === e ? (t = Globalize.formatMessage("ion_errors/title/not_found"), n = Globalize.formatMessage("ion_errors/message/not_found")) : 420 === e ? (t = Globalize.formatMessage("ion_errors/title/app_authorization"), n = Globalize.formatMessage("ion_errors/message/app_authorization")) : 422 === e ? (t = Globalize.formatMessage("ion_errors/title/default"), n = Globalize.formatMessage("ion_errors/message/default")) : (t = Globalize.formatMessage("ion_errors/title/default"), n = Globalize.formatMessage("ion_errors/message/internal_server_error")), {
                name: t,
                message: n
            }
        }, n.camelizeAttributeName = function(e) {
            return e.replace(/-+([^-])/g, function(e, t) {
                return t.toUpperCase()
            })
        }, n.extractAttributesWithPrefix = function(e, r) {
            var o = t(e),
                i = {};
            return o.length && t.each(o[0].attributes, function(e, t) {
                var o = t.name,
                    a = t.value;
                "true" === a ? a = !0 : "false" === a && (a = !1), 0 === o.indexOf(r) && (i[n.camelizeAttributeName(o.replace(r, ""))] = a)
            }), i
        }, n.generateUniqueId = function() {
            return Date.now().toString(36) + "_" + Math.random().toString(36).substr(2, 9)
        }, e.OrionLoadingUtil = n
    }(window, jQuery);
var TerraRailsViewModels = window.TerraRailsViewModels || {};
window.TerraRailsViewModels = TerraRailsViewModels, TerraRailsViewModels.debounce = function(e, t) {
    var n, r = 250;
    return t = t || r,
        function() {
            var r = this,
                o = arguments,
                i = function() {
                    n = null, e.apply(r, o)
                };
            clearTimeout(n), n = setTimeout(i, t)
        }
};
var TerraRailsViewModels = window.TerraRailsViewModels || {};
window.TerraRailsViewModels = TerraRailsViewModels,
    function(e) {
        var t = function() {
            function e() {
                return i
            }

            function n(e) {
                return t.isStorageSupported() ? JSON.parse(window.sessionStorage.orionStorage)[e] : undefined
            }

            function r(e, n) {
                if (t.isStorageSupported()) {
                    var r = JSON.parse(window.sessionStorage.orionStorage);
                    r[e] = n, window.sessionStorage.orionStorage = JSON.stringify(r)
                }
            }
            var o = "key",
                i = !1;
            try {
                window.sessionStorage[o] = o, window.sessionStorage.removeItem(o), i = !0, window.sessionStorage.orionStorage = window.sessionStorage.orionStorage || JSON.stringify({})
            } catch (e) {
                console.log("sessionStorage is disabled.  Anything using OrionStorage will not persist.")
            }
            return {
                isStorageSupported: e,
                getValueForKey: n,
                setValueForKey: r
            }
        }();
        e.OrionStorage = t
    }(window.TerraRailsViewModels),
    function(e, t, n, r) {
        function o(e) {
            return "scrollPositionTop-" + r.location + "-" + e.id
        }

        function i() {
            for (var e = n.getElementsByClassName("js-saveScrollPositionTrigger"), r = e.length, i = 0; i < r; i++) {
                var a = e[i];
                t.setValueForKey(o(a), a.scrollTop)
            }
        }
        n.addEventListener("DOMContentLoaded", function() {
            for (var e = n.getElementsByClassName("js-saveScrollPositionTrigger"), r = e.length, i = 0; i < r; i++) {
                var a = e[i],
                    s = t.getValueForKey(o(a));
                s && (a.scrollTop = s)
            }
        }), "onpagehide" in r ? r.addEventListener("pagehide", i) : r.addEventListener("unload", i)
    }(0, TerraRailsViewModels.OrionStorage, document, window),
    function(e, t, n, r) {
        "use strict";

        function o(e, n) {
            var r = t(e),
                o = r.data("stack-nav-context-id"),
                i = r.attr("swap-selector"),
                a = t(n);
            o || (o = g.generateUniqueId(), r.data("stack-nav-context-id", o), m[o] = []), r.trigger("orion.navigator.contentWillDetach", [a]), m[o].push({
                content: a.detach(),
                sourceSelector: i
            }), r.trigger("orion.navigator.contentDidDetach", [a])
        }

        function i(e) {
            var n = t(e),
                r = n.data("stack-nav-context-id");
            return m[r].pop()
        }

        function a(e) {
            var n = t(e).data("stack-nav-context-id");
            return !!n && m[n].length > 0
        }

        function s(e) {
            var n = t(e),
                r = n.data("stack-nav-context-id");
            if (r) {
                n.removeData("stack-nav-context-id");
                for (var o = m[r].length - 1; o >= 0; o--) {
                    var i = t(m[r][o].content);
                    n.trigger("orion.navigator.contentWillUnload", [i]), m[r].pop(), n.trigger("orion.navigator.contentDidUnload", [i])
                }
                delete m[r]
            }
        }

        function l(e, n) {
            if (!e.isDefaultPrevented()) {
                if (!1 === n.navigate || n.navigate && "false" === n.navigate.toString()) return void e.preventDefault();
                var r = t(e.delegateTarget),
                    i = r.children();
                i.length && o(r, i);
                var a = function() {
                    h.prependActionToolbar(r, n.headerTitle)
                };
                g.populateContent(r, n, a), r.trigger("orion.navigator.showComplete", [e, n]), e.preventDefault()
            }
        }

        function c(e) {
            if (!e.isDefaultPrevented()) {
                var n = t(e.delegateTarget);
                if (t(e.target).hasClass("terraVM-ActionToolbar-button--close")) return void s(n);
                if (a(n)) {
                    g.restoreAllNestedElements(n), g.empty(n);
                    var r = i(n);
                    r.sourceSelector && g.removeContentSelectorElement(n, r.sourceSelector), n.trigger("orion.navigator.contentWillAttach", [r.content]), n.append(r.content), n.trigger("orion.navigator.contentDidAttach", [r.content]), e.preventDefault()
                }
            }
        }

        function u(e, t, n) {
            e.addClass("terraVM-StackNav-actionToolbar"), t ? f(e) : e.find(".terraVM-ActionToolbar-button--back").remove(), n && p(e)
        }

        function d(e, n, r, o) {
            var i = t("<header/>").addClass("terraVM-StackNav-actionToolbar terraVM-ActionToolbar bar terraVM-ActionToolbar--includesTitle"),
                a = t("<div/>").addClass("terraVM-ActionToolbar-leftButtons"),
                s = t("<div/>").addClass("terraVM-ActionToolbar-rightButtons"),
                l = t("<div/>").addClass("terraVM-ActionToolbar-title");
            n && l.append(t("<h1/>").text(n)), i.append(a), i.append(l), i.append(s), r && f(i), o && p(i), e.trigger("orion.navigator.contentWillDetach", [e.children()]);
            var c = e.children().detach();
            e.trigger("orion.navigator.contentDidDetach", [c]);
            var u = TerraRailsViewModelComponents.ContentPanel.createHTML({
                fixedHeader: !0,
                header: i[0].outerHTML,
                attributes: {
                    className: "terraVM-ContentPanel--border-none"
                }
            });
            g.append(e, u);
            var d = e.find(".terraVM-ContentPanel").first().find(".terraVM-ContentPanel--contentModel");
            d.length && (d.trigger("orion.navigator.contentWillAttach", [c]), d.append(c), d.trigger("orion.navigator.contentDidAttach", [c]))
        }

        function f(e) {
            var n = t(e),
                r = n.find(".terraVM-ActionToolbar-leftButtons");
            r.find(".terraVM-ActionToolbar-button--back").remove();
            var o = t("<button/>").addClass("btn terraVM-Button terraVM-ActionToolbar-button js-navigator-dismissTrigger terraVM-ActionToolbar-button--back terraVM-ActionToolbar-button--margin-left-none"),
                i = t("<div/>").addClass("terraVM-Graphic"),
                a = t("<span/>").addClass("terraVM-Graphic-icon icon-arrow-left medium-heading").attr("aria-label", Globalize.formatMessage("terra-rails-view_models/buttons/back"));
            i.append(a), o.append(i), r.prepend(o)
        }

        function p(e) {
            var n = t(e),
                r = n.find(".terraVM-ActionToolbar-rightButtons");
            r.find(".terraVM-ActionToolbar-button--close").remove();
            var o = t("<button/>").addClass("btn terraVM-Button terraVM-ActionToolbar-button js-navigator-dismissTrigger terraVM-ActionToolbar-button--close terraVM-ActionToolbar-button--margin-right-none"),
                i = t("<div/>").addClass("terraVM-Graphic"),
                a = t("<span/>").addClass("terraVM-Graphic-icon icon-not-achieved medium-heading").attr("aria-label", Globalize.formatMessage("terra-rails-view_models/buttons/close"));
            i.append(a), o.append(i), r.append(o)
        }
        var h = {},
            g = e.OrionLoadingUtil,
            m = {};
        h.prependActionToolbar = function(e, n, r) {
            var o = t(e),
                i = o.hasClass("js-StackNavigator-hide-close-button");
            void 0 === r && !0 !== i && (r = !0);
            var s = o.find(".terraVM-ActionToolbar").first(),
                l = a(o);
            s.length ? u(s, l, r) : d(o, n, l, r), o.trigger("Terra.init")
        }, h.initialize = function(e, t) {
            e.on("navigator.disclose.detail._stackNav", l).on("navigator.dismiss._stackNav", c), e.hasClass("js-StackNavigator--modal") && e.on("navigator.disclose.modal._stackNav", l).on("navigator.disclose.popup._stackNav", l), h.prependActionToolbar(e, t)
        }, t(function() {
            h.initialize(t(".js-StackNavigator"), r)
        }), t(document).on("orion.navigator.contentDidLoad", function(e, t) {
            var n = g.findInContent(t, ".js-StackNavigator");
            n.length && h.initialize(n, r)
        }), t(document).on("orion.navigator.contentWillUnload", function(e, t) {
            var n = g.findInContent(t, ".js-StackNavigator");
            n.length && s(n)
        }), e.StackNavigator = h
    }(window, jQuery, window.OrionNavigator),
    function(e, t, n) {
        "use strict";

        function r(e) {
            e = e || [];
            for (var n = 0; n < e.length; n++)
                for (var r = "[data-orion-swap-initial= true]", o = t(e[n]).find(r).addBack(r), i = 0; i < o.length; i++) {
                    var a = t(o[i]),
                        s = a.data("orion-swap-id"),
                        l = t(a.data("orion-swap-target"));
                    l.data("orion-swap-source-id", s)
                }
        }
        var o = {},
            i = {};
        o.clearCache = function(e) {
            var t;
            return e ? (t = i[e], delete i[e], t) : (t = i, i = {}, t)
        }, o.swap = function(e, r, a) {
            var s = r.data("orion-swap-source-id");
            if (e !== s && 0 !== r.length) {
                var l = i[e] ? i[e].content : null,
                    c = l || a.swapContent,
                    u = a.url;
                if (c) n.replace(r, c, {
                    unloadedContentSourceId: s,
                    caching: {
                        isFromCache: !!l,
                        doNotCache: a.doNotCache
                    }
                });
                else if (u) {
                    var d = function(e) {
                            r.trigger("orion.navigator.showComplete", [event, a, {
                                content: e
                            }])
                        },
                        f = {
                            unloadedContentSourceId: s,
                            caching: {
                                isFromCache: !1,
                                doNotCache: a.doNotCache
                            }
                        },
                        p = a.errorCallback;
                    p || (p = function(t) {
                        r.removeData("orion-swap-source-id");
                        var i = o.swap.bind(o, e, r, a),
                            s = n.errorDisplaysForStatus(t.status);
                        IonErrorsComponents.ErrorView.render({
                            glyph: !0,
                            attributes: {
                                "class": "terraVM-ErrorView-container"
                            },
                            name: s.name,
                            description: s.message,
                            buttonDisplay: Globalize.formatMessage("ion_errors/button/retry"),
                            buttonAttributes: {
                                onClick: i
                            }
                        }, r[0])
                    }), n.loadContentURLWithOptions({
                        ajaxTarget: r,
                        url: u,
                        selector: a.contentSelector,
                        successCallback: d,
                        contentOptions: f,
                        errorCallback: p
                    })
                } else {
                    if (!a.contentSelector) return;
                    var h;
                    h = a.includeParentSelector ? t(a.contentSelector)[0].outerHTML : t(a.contentSelector).html(), n.replace(r, h, {
                        unloadedContentSourceId: s,
                        caching: {
                            isFromCache: !1,
                            doNotCache: a.doNotCache
                        },
                        includeParentSelector: a.includeParentSelector,
                        removeSelectorContent: a.removeSelectorContent,
                        contentSelector: a.contentSelector
                    })
                }
                r.data("orion-swap-source-id", e)
            }
        }, t(document).on("orion.navigator.contentDidDetach", function(e, n, r) {
            var o = r ? r.unloadedContentSourceId : null;
            if (n && o && (!r || r.caching && !r.caching.doNotCache)) {
                t("[data-orion-swap-id=" + o + "]").data("orion-swap-do-not-cache") || (i[o] = {
                    content: n
                })
            }
        }), t(document).on("orion.navigator.contentDidLoad", function(e, t) {
            r(t)
        }), t(document).on("click", ".js-ContentSwapper", function(e) {
            var r = t(e.currentTarget),
                i = n.extractAttributesWithPrefix(r, "data-orion-swap-"),
                a = {
                    swapSource: r,
                    swapContent: i.content,
                    doNotCache: i.doNotCache,
                    url: i.contentUrl,
                    contentSelector: i.contentSelector,
                    includeParentSelector: i.includeParentSelector,
                    removeSelectorContent: i.removeSelectorContent,
                    errorCallback: i.errorCallback
                };
            o.swap(i.id, t(i.target), a)
        }), t(function() {
            r(t(".js-ContentSwapper"))
        }), e.ContentSwapper = o
    }(window, jQuery, window.OrionLoadingUtil),
    function(e, t, n, r) {
        "use strict";
        var o = {},
            i = e.StackNavigator;
        o.launch = function(e) {
            function a(e) {
                r.replace(c, e)
            }
            var s = o.isOpen();
            s || (o.appendHTMLTags(), o.adjustWebkitScrolling(!0));
            var l = t(".terraVM-OrionModal");
            l.attr("fitToContent", e.fitToContent);
            var c = l.find(".terraVM-OrionModal-body"),
                u = function() {
                    i.prependActionToolbar(c, e.headerTitle, e.addCloseButton)
                };
            e.willDisplayPopupContent && (e.willDisplayPopupContent(a), i.prependActionToolbar(c, e.headerTitle, e.addCloseButton)), r.populateContent(c, e, u), s || n.Modal.inline(null, {
                modalLocation: ".terraVM-OrionModal",
                block: !0
            })
        }, o.adjustModalHeights = function() {
            var n = t(".terraVM-OrionModal"),
                r = n.find(".terraVM-OrionModal-body"),
                o = e.innerHeight;
            n.hasClass("modal-full-screen") ? r.css("height", o) : r.css("height", .5 * o)
        }, o.adjustWebkitScrolling = function(e) {
            var n = t("#orion-Layout-main-content");
            n.length && (e ? (o.layoutPosition = n.css("position"), o.webkitScrolling = n.css("-webkit-overflow-scrolling"), n.css("position", "fixed"), n.css("-webkit-overflow-scrolling", "auto")) : (n.css("position", o.layoutPosition), n.css("-webkit-overflow-scrolling", o.webkitScrolling)))
        }, o.appendHTMLTags = function() {
            var e = t('<aside class="terraVM-OrionModal js-ModalNavigator modal modal-inline" role="dialog"></aside>').append('<div class="terraVM-OrionModal-body js-StackNavigator js-StackNavigator--modal terraVM-StackNavigator--layout">'),
                r = n.getMediaQueryName();
            "xs" !== r && "xxs" !== r || e.addClass("modal-full-screen"), t(document.body).append(e).trigger("orion.navigator.contentDidLoad", [e]).trigger("orion.navigator.contentDidAttach", [e])
        }, o.close = function() {
            o.adjustWebkitScrolling(!1);
            var e = t(".terraVM-OrionModal");
            e.trigger("orion.modal.willDismiss"), r.empty(e.find(".terraVM-OrionModal-body")), t.magnificPopup.close()
        }, o.isOpen = function() {
            return t(".terraVM-OrionModal").length > 0
        }, o.removeDismissIcon = function() {
            var e = t(".terraVM-OrionModal").find(".icon-dismiss");
            e.length && e.remove()
        }, t(document).on("terra.modal.open", function() {
            o.removeDismissIcon(), o.adjustModalHeights()
        }).on("terra.modal.resize Terra.init", function() {
            o.adjustModalHeights()
        }).on("terra.modal.close", function() {
            var e = t(".terraVM-OrionModal");
            e.trigger("orion.modal.didDismiss"), r.remove(e)
        }), e.OrionModal = o
    }(window, jQuery, window.Terra, window.OrionLoadingUtil);
var OrionDialog = function(e, t) {
    "use strict";

    function n(n, r, o, i) {
        if (!o || 0 === o.length) return void(e.console && console.log("Button titles must not be null or empty! A button must be added."));
        var a = function(t) {
                i && i(t.data.actionIndex), e.OrionModal.close()
            },
            s = $("<div/>", {
                "class": "terraVM-OrionDialog"
            }),
            l = $("<div/>", {
                "class": "terraVM-OrionDialog-content"
            }),
            c = $("<div/>", {
                "class": "terraVM-OrionDialog-actions margin-all"
            }),
            u = $("<div/>", {
                "class": "terraVM-OrionDialog-footer"
            });
        l.append(r), u.append(c), s.append(l).append(u);
        for (var d = 0; d < o.length; d++) {
            var f = "btn terraVM-Button terraVM-Button--graphic-none ";
            f += 0 === d && o.length > 1 ? "btn-primary" : "btn-outline";
            var p = $("<button/>", {
                "class": f,
                text: o[d]
            });
            p.on("click", {
                actionIndex: d
            }, a), c.append(p)
        }
        $(t).trigger("navigator.disclose.modal", {
            contentHtml: s,
            headerTitle: n,
            addCloseButton: !1,
            fitToContent: !0
        })
    }
    return {
        showMessageBox: n
    }
}(window, document);
window.OrionDialog = OrionDialog;
var TerraRailsViewModels = window.TerraRailsViewModels || {};
window.TerraRailsViewModels = TerraRailsViewModels,
    function(e, t, n) {
        "use strict";

        function r(t) {
            if (t) {
                var n = e(document).attr("dir");
                t = t.toLowerCase(), "start" === t ? t = "rtl" === n ? "right" : "left" : "end" === t && (t = "rtl" === n ? "left" : "right")
            } else t = "top";
            return t
        }

        function o() {
            return '<div class=\'loading\'><span class="icon-spinner" aria-hidden="true"></span> ' + Globalize.formatMessage("terra-rails-view_models/navigation/loading") + "<marquee direction='right'>&hellip;&nbsp;</marquee></div>"
        }

        function i(e) {
            e.removeAttr("data-popup")
        }

        function a(t) {
            if (c.isOpen()) {
                var n = e(t.target).closest(".terraVM-ResponsivePopup--opened"),
                    r = e(".terraVM-ResponsivePopup--opened").not(n);
                !e(t.target).closest(".tooltipster-base").length && r.length && (r.trigger("TerraRailsViewModel.ResponsivePopup.willClose"), l.empty(e(".tooltipster-base")), s(r), r.trigger("TerraRailsViewModel.ResponsivePopup.didClose"))
            }
        }

        function s(t) {
            t.tooltipster("destroy"), t.removeClass("terraVM-ResponsivePopup--opened"), e(".terraVM-PopupOverlay").remove()
        }
        var l = window.OrionLoadingUtil,
            c = {};
        c.displayPopup = function(t, n) {
            var i = {
                    arrow: !0,
                    contentAsHTML: !0,
                    autoClose: !1,
                    debug: !1,
                    interactive: !0,
                    trigger: "click",
                    onlyOne: !0,
                    offsetX: n.offsetX,
                    offsetY: n.offsetY,
                    maxWidth: n.maxWidth,
                    minWidth: 300,
                    position: n.position,
                    restoration: "previous"
                },
                a = n.errorCallback;
            i.functionInit = function() {
                return o()
            }, i.functionBefore = function(t, r) {
                function i(n) {
                    var r = window.innerHeight,
                        o = e("<div></div>").css("max-height", .5 * r).css("overflow-y", "auto").append(n);
                    return t.tooltipster("content", o)
                }
                if (n.willDisplayPopupContent(i), r(), l.restoreAllNestedElements(e(".tooltipster-content")), n.contentHtml) i(n.contentHtml);
                else if (n.contentUrl) {
                    i(o());
                    var s = function(t) {
                            i(n.contentSelector ? e(t).find(n.contentSelector) : t)
                        },
                        c = function(e, t, r) {
                            if (a) n.errorCallback(e, t, r);
                            else {
                                var o = l.errorDisplaysForStatus(e.status);
                                i(IonErrorsComponents.ErrorView.createHTML({
                                    glyph: !0,
                                    name: o.name,
                                    description: o.message,
                                    attributes: {
                                        "class": "terraVM-ErrorView-container"
                                    }
                                }))
                            }
                        };
                    ionXHR.request(n.contentUrl, "GET", null, "html", 0, c, s, null)
                } else if (n.contentSelector) {
                    var u = e(n.contentSelector);
                    i(n.includeParentSelector && u.length ? u[0].outerHTML : u.html()), l.removeContentSelectorElement(e(".tooltipster-content"), n.contentSelector)
                }
            }, i.position = r(n.position), t.tooltipster(i).tooltipster("show").addClass("terraVM-ResponsivePopup--opened");
            var s = document.createElement("div");
            s.className = "terraVM-PopupOverlay", document.body.appendChild(s)
        }, c.launch = function(r, o) {
            var a = t.getMediaQueryName(),
                s = e(r),
                l = {
                    contentHtml: o.contentHtml,
                    contentSelector: o.contentSelector,
                    contentUrl: o.contentUrl,
                    willDisplayPopupContent: o.willDisplayPopupContent || function() {},
                    offsetX: o.offsetX || s.data("popup-offset-x") || 0,
                    offsetY: o.offsetY || s.data("popup-offset-y") || 0,
                    maxWidth: o.maxWidth || s.data("popup-maxWidth") || 500,
                    position: o.position || s.data("popup-position"),
                    errorCallback: o.errorCallback,
                    includeParentSelector: o.includeParentSelector
                };
            if (c.close(), i(s), "xs" === a || "xxs" === a) {
                var u = {
                    contentHtml: l.contentHtml,
                    contentSelector: l.contentSelector,
                    contentUrl: l.contentUrl,
                    headerTitle: o.headerTitle || s.data("orion-modal-header-title"),
                    navigate: !1,
                    errorCallback: l.errorCallback,
                    includeParentSelector: l.includeParentSelector,
                    willDisplayPopupContent: l.willDisplayPopupContent
                };
                n.launch(u)
            } else c.displayPopup(s, l);
            s.trigger("TerraRailsViewModel.ResponsivePopup.didOpen")
        }, c.isOpen = function() {
            return e(".terraVM-ResponsivePopup--opened").length > 0 || n.isOpen()
        }, c.close = function() {
            if (c.isOpen()) {
                var t = e(".terraVM-ResponsivePopup--opened");
                t.trigger("TerraRailsViewModel.ResponsivePopup.willClose"), l.empty(e(".tooltipster-base")), s(t), e.magnificPopup.close(), t.trigger("TerraRailsViewModel.ResponsivePopup.didClose")
            }
        }, window.TerraRailsViewModels.ResponsivePopup = c, e(document).on("click.responsivePopup.dismiss touchstart", ".js-ResponsivePopup--dismiss", function() {
            c.isOpen() && c.close()
        }), e(document).on("click.responsivePopup.dismiss touchstart", "html", a)
    }(jQuery, window.Terra, window.OrionModal),
    function(e, t, n, r) {
        "use strict";

        function o(o, i) {
            o.isDefaultPrevented() || (f.isOpen() && f.close(), u.isEmbedded() && i.embeddedContentUrl ? e.ionClient.messaging.notify(new IonMessage(r, "orionComponent.disclose", {
                url: i.embeddedContentUrl,
                key: i.embeddedContentKey,
                disclosureType: "modal"
            })) : (d.launch(i), n(t).trigger("navigator.completed", [o, i]), o.preventDefault()))
        }

        function i(t, n) {
            t.isDefaultPrevented() || (u.isEmbedded() && n.embeddedContentUrl ? e.ionClient.messaging.notify(new IonMessage(r, "orionComponent.disclose", {
                url: n.embeddedContentUrl,
                key: n.embeddedContentKey,
                disclosureType: "detailPanel"
            })) : o(t, n))
        }

        function a(e, r) {
            e.isDefaultPrevented() || (f.launch(e.target, r), n(t).trigger("navigator.completed", [e, r]), e.preventDefault())
        }

        function s(o, i) {
            o.isDefaultPrevented() || (u.isEmbedded() && !f.isOpen() ? e.ionClient.messaging.notify(new IonMessage(r, "orionComponent.dismiss", {})) : (f.isOpen() && f.close(), n(t).trigger("navigator.completed", [o, i]), o.preventDefault()))
        }

        function l(r, o) {
            r.isDefaultPrevented() || (o.contentUrl ? e.location = o.contentUrl : n(t).trigger("navigator.failed", [r, o]), r.preventDefault())
        }

        function c(t) {
            t.isDefaultPrevented() || e.history.back()
        }
        var u = {},
            d = e.OrionModal,
            f = e.TerraRailsViewModels.ResponsivePopup;
        u.backForContent = function(e) {
            for (var t, r = n(e).find(".terraVM-ActionToolbar").not('[aria-hidden="true"] .terraVM-ActionToolbar'), o = r.length - 1; o >= 0; o--)
                if (t = n(r[o]).find(".terraVM-ActionToolbar-button--back"), t.length || (t = n(r[o]).find(".terraVM-ActionToolbar-button--close")), t.length) return t.click(), !0;
            return !1
        }, u.logicalBack = function(e) {
            var t = !0;
            d.isOpen() ? u.backForContent(n(".terraVM-OrionModal")) : f.isOpen() ? f.close() : t = u.backForContent(n("body")), e && e(t)
        }, u.isEmbedded = function() {
            return "EmbeddedContent" === e.ionClient.clientId.substr(0, 15)
        }, n(t).on("navigator.disclose.detail", i).on("navigator.disclose.modal", o).on("navigator.disclose.popup", a).on("navigator.dismiss", s).on("navigator.show.page", l).on("navigator.back", c), n(e).on("navigator.completed navigator.failed", function() {
            n(this).trigger("Terra.init")
        }), e.ionClient && e.ionClient.messaging && t.addEventListener(ionClient.messaging.clientMessageEvent, function(e) {
            var t = e.detail.message.metaData;
            t !== r && "ionNativeBackPressed" === t.action && u.logicalBack(function(e) {
                ionClient.messaging.sendMessage(new IonMessage(null, "ionNavigationComplete", {
                    handled: e
                }))
            })
        }), e.OrionNavigator = u
    }(window, document, jQuery),
    function(e, t) {
        "use strict";

        function n(e, n) {
            e.isDefaultPrevented() || (i.isOpen() && i.close(), t(document).trigger("navigator.completed", [e, n]), e.preventDefault())
        }

        function r(e) {
            e.on("navigator.dismiss", n)
        }
        var o = e.OrionLoadingUtil,
            i = e.OrionModal;
        t(function() {
            r(t(".js-ModalNavigator"))
        }), t(document).on("orion.navigator.contentDidLoad", function(e, t) {
            var n = o.findInContent(t, ".js-ModalNavigator");
            n.length && r(n)
        })
    }(window, jQuery),
    function(e, t, n, r) {
        "use strict";

        function o(e, o) {
            if (!e.isDefaultPrevented()) {
                var i = n.SlidePanel(t(e.delegateTarget)),
                    a = i.$container.find(".slide-panel-master").first();
                if (o.slidePanelWidth) i.$container.attr("data-slide-panel-master-width", o.slidePanelWidth);
                else {
                    var s = i.$container.attr("data-slide-panel-default-width");
                    s === r && (s = null), i.$container.attr("data-slide-panel-master-width", s)
                }
                d.empty(a);
                var l = !i.isOpen();
                i.open();
                var c = t("<div/>").addClass("js-StackNavigator terraVM-StackNavigator--layout");
                a.prepend(c), f.initialize(c, o.headerTitle);
                var u = function() {
                    f.prependActionToolbar(c, o.headerTitle)
                };
                l ? a.one("transitionend", function() {
                    d.populateContent(c, o, u), i.$container.trigger("navigator.completed", [e, o])
                }) : (d.populateContent(c, o, u), i.$container.trigger("navigator.completed", [e, o])), e.preventDefault()
            }
        }

        function i(e, r) {
            if (!e.isDefaultPrevented()) {
                var o = n.SlidePanel(t(e.delegateTarget));
                s(o, function() {
                    o.$container.trigger("navigator.completed", [e, r])
                }), e.preventDefault()
            }
        }

        function a(e, r) {
            if (!e.isDefaultPrevented()) {
                var o = n.SlidePanel(t(e.delegateTarget));
                s(o, function() {
                    o.$container.trigger("navigator.completed", [e, r])
                }), e.preventDefault()
            }
        }

        function s(e, t) {
            var n = e.isOpen();
            e.close(), e.$master.removeClass("slide-panel-master-fullscreen"), n ? e.$container.one("transitionend", function() {
                d.empty(e.$container.find(".slide-panel-master").first()), t()
            }) : t()
        }

        function l(e) {
            var n = t(e.delegateTarget);
            n.toggleClass("slide-panel-master-fullscreen"), c(n), n.hasClass("slide-panel-master-fullscreen") ? n.trigger("SlidePanel.expanded") : n.trigger("SlidePanel.collapsed"), n.trigger("Terra.init")
        }

        function c(e) {
            var t = e.find(".terraVM-ActionToolbar-button--expand .terraVM-Graphic-icon");
            t.length && (e.hasClass("slide-panel-master-fullscreen") ? t.hasClass("icon-maximize") && t.toggleClass("icon-maximize icon-minimize") : t.hasClass("icon-minimize") && t.toggleClass("icon-maximize icon-minimize"))
        }

        function u(e) {
            e.find(".slide-panel-master").each(function() {
                var e = t(this),
                    n = e.children(".js-StackNavigator"),
                    o = e.children();
                0 === n.length && o.length && (n = t("<div/>").addClass("js-StackNavigator terraVM-StackNavigator--layout"), n.append(o), e.prepend(n), f.initialize(n, r)), e.on("terraVM-ActionToolbar.expand", l)
            }), e.on("navigator.disclose.detail", o).on("navigator.dismiss", i).on("navigator.maximize", a)
        }
        var d = e.OrionLoadingUtil,
            f = e.StackNavigator;
        t(function() {
            u(t(".js-SlidePanelNavigator"))
        }), t(document).on("orion.navigator.contentDidLoad", function(e, t) {
            var n = d.findInContent(t, ".js-SlidePanelNavigator");
            n.length && u(n)
        }), t(document).on("orion.navigator.contentDidAttach", function() {
            var e = t(".js-SlidePanelNavigator");
            e.length && e.find(".slide-panel-master").each(function() {
                c(t(this))
            })
        })
    }(window, jQuery, window.Terra),
    function(e, t, n) {
        "use strict";

        function r(t) {
            var r = n(t.currentTarget);
            r.trigger(t.data.eventName, e.OrionLoadingUtil.extractAttributesWithPrefix(r, "data-nav-"))
        }
        n(t).on("click", ".js-navigator-discloseDetailTrigger", {
            eventName: "navigator.disclose.detail"
        }, r).on("click", ".js-navigator-discloseModalTrigger", {
            eventName: "navigator.disclose.modal"
        }, r).on("click", ".js-navigator-disclosePopupTrigger", {
            eventName: "navigator.disclose.popup"
        }, r).on("click", ".js-navigator-dismissTrigger", {
            eventName: "navigator.dismiss"
        }, r).on("click", ".js-navigator-maximizeTrigger", {
            eventName: "navigator.maximize"
        }, r).on("click", ".js-navigator-showPageTrigger", {
            eventName: "navigator.show.page"
        }, r).on("click", ".js-navigator-backTrigger", {
            eventName: "navigator.back"
        }, r)
    }(window, document, jQuery);
var TerraRailsViewModels = window.TerraRailsViewModels || {};
window.TerraRailsViewModels = TerraRailsViewModels,
    function() {
        var e = function(e, t) {
            function n() {}

            function r() {}
            return t(document).on("click.actionToolbarBack", ".terraVM-ActionToolbar-button--back", function() {
                t(this).trigger("terraVM-ActionToolbar.back")
            }), t(document).on("click.actionToolbarExpand", ".terraVM-ActionToolbar-button--expand", function() {
                t(this).trigger("terraVM-ActionToolbar.expand")
            }), t(document).on("click.actionToolbarPrevious", ".terraVM-ActionToolbar-button--previous", function() {
                t(this).trigger("terraVM-ActionToolbar.previous")
            }), t(document).on("click.actionToolbarNext", ".terraVM-ActionToolbar-button--next", function() {
                t(this).trigger("terraVM-ActionToolbar.next")
            }), t(document).on("click.actionToolbarClose", ".terraVM-ActionToolbar-button--close", function() {
                t(this).trigger("terraVM-ActionToolbar.close")
            }), t(document).on("click.actionToolbarCancel", ".terraVM-ActionToolbar-button--cancel", function() {
                t(this).trigger("terraVM-ActionToolbar.cancel")
            }), {
                updateActionToolbars: r,
                init: n
            }
        }(0, jQuery);
        TerraRailsViewModels.ActionToolbar = e
    }(window, jQuery);
var TerraRailsViewModels = window.TerraRailsViewModels || {};
window.TerraRailsViewModels = TerraRailsViewModels,
    function(e, t) {
        function n(e) {
            e.each(function() {
                var e = t(this);
                e.attr("data-cbv-identifier") || e.attr("data-cbv-identifier", OrionLoadingUtil.generateUniqueId())
            }), e.on("click", ".terraVM-CollapsibleButtonView-moreButton", function(e) {
                a(t(e.delegateTarget))
            }), r(e)
        }

        function r(e) {
            e.each(function() {
                var e = t(this),
                    n = e.find(".terraVM-CollapsibleButtonView-collapsibleContainer"),
                    r = e.find(".terraVM-CollapsibleButtonView-collapsibleButton"),
                    o = e.find(".terraVM-CollapsibleButtonView-moreButtonContainer"),
                    i = .01;
                if (n.length) {
                    r.show(), o.show();
                    var a = n[0].getBoundingClientRect().width,
                        s = o[0].getBoundingClientRect().width,
                        l = !1;
                    r.each(function(e) {
                        var n = t(this);
                        if (l) return void n.hide();
                        var o = n[0].getBoundingClientRect().width;
                        if (o <= a + i) a -= o;
                        else {
                            if (o <= a + i + s && e === r.length - 1) return;
                            n.hide(), a = 0, l = !0
                        }
                    }), l || o.hide()
                }
            })
        }

        function o(e, n) {
            var r = t("<li><span>" + e.attr("data-title") + "</span></li>").attr("data-child-index", n);
            return e.attr("aria-selected") && r.attr("aria-selected", "true"), "disabled" === e.attr("disabled") && r.addClass("selection-static"), r
        }

        function i(e) {
            var n = t('<ul class="terraVM-CollapsibleButtonView-list list-multi-selectable list-padded-tight list-padded-sides" data-cbv-source="' + e.attr("data-cbv-identifier") + '" />'),
                r = e.find(".terraVM-CollapsibleButtonView-collapsibleButton");
            return r.filter(":hidden").each(function() {
                var e, i, a = t(this),
                    s = r.index(a);
                a.find(".btn-group").length ? (i = a.find("button"), i.each(function(r) {
                    e = o(t(this), s), e.attr("data-button-group-index", r), 0 === r ? e.addClass("terraVM-CollapsibleButtonView-listItem--groupTop") : r === i.length - 1 && e.addClass("terraVM-CollapsibleButtonView-listItem--groupBottom"), n.append(e)
                })) : n.append(o(a.find("button"), s))
            }), n
        }

        function a(e) {
            var t = {
                contentHtml: i(e),
                maxWidth: 400
            };
            e.find(".terraVM-CollapsibleButtonView-moreButton").trigger("navigator.disclose.popup", t)
        }

        function s(e, n) {
            var r = '.terraVM-CollapsibleButtonView[data-cbv-identifier="' + n.collapsibleButtonViewId + '"]',
                o = t(r);
            if (o.length) {
                var i, a = t(o.find(".terraVM-CollapsibleButtonView-collapsibleButton")[n.childIndex]);
                i = n.buttonGroupIndex ? t(a.find("button")[n.buttonGroupIndex]) : a.find("button"), i.click()
            }
        }

        function l(e) {
            var t = OrionLoadingUtil.findInContent(e, ".terraVM-CollapsibleButtonView");
            t.length && n(t)
        }

        function c() {
            l(t("body"))
        }

        function u(e) {
            var t = OrionLoadingUtil.findInContent(e, ".terraVM-CollapsibleButtonView");
            t.length && r(t)
        }

        function d(e) {
            var n = t(e.currentTarget),
                r = {
                    collapsibleButtonViewId: n.parent(".terraVM-CollapsibleButtonView-list").attr("data-cbv-source"),
                    childIndex: n.attr("data-child-index"),
                    buttonGroupIndex: n.attr("data-button-group-index")
                };
            n.trigger("navigator.dismiss"), t(document).trigger("collapsibleButtonView.listItemSelected", [r])
        }

        function f() {
            var e = t(".tooltipster-base .terraVM-CollapsibleButtonView-list");
            e.length && e.trigger("navigator.dismiss")
        }
        t(document).on("ready", c).on("collapsibleButtonView.listItemSelected", s).on("click", ".terraVM-CollapsibleButtonView-list > li", d).on("orion.navigator.contentDidLoad", function(e, t) {
            l(t)
        }).on("orion.navigator.contentDidAttach", function(e, t) {
            u(t)
        }), t(e).on("Terra.init Terra.resizeEnd", function() {
            u(t(".terraVM-CollapsibleButtonView"))
        }).on("Terra.resizeEnd", f), TerraRailsViewModels.CollapsibleButtonView = {
            initialize: n,
            update: r
        }
    }(window, jQuery);
var TerraRailsViewModels = window.TerraRailsViewModels || {};
window.TerraRailsViewModels = TerraRailsViewModels,
    function(e) {
        var t = ".terraVM-List",
            n = function(e, n) {
                function r() {
                    o(n(t))
                }

                function o(e) {
                    e.each(function() {
                        var e = n(this);
                        if (e.find(".terraVM-List-item--grid").height(""), TerraRailsViewModels.ResponsiveElements.elementHasSize(e, "sm")) {
                            var t = e.children("li"),
                                r = [];
                            t.each(function() {
                                var e = n(this);
                                e.hasClass("terraVM-List-item--grid") ? r.push(e) : (i(r), r = [])
                            }), i(r)
                        }
                    })
                }

                function i(e) {
                    if (0 !== e.length)
                        for (var t = n(e[0]).attr("data-number-of-columns"); e.length > 0;) a(e.slice(0, t)), e.splice(0, t)
                }

                function a(e) {
                    var t = 0;
                    e.forEach(function(e) {
                        t = Math.max(t, e.height())
                    }), e.forEach(function(e) {
                        e.height(t)
                    })
                }
                return n(document).on("Terra.responsiveElements.sizeUpdated", function(e, t) {
                    n(t).hasClass("terraVM-List") && TerraRailsViewModels.ResponsiveElements.updateElement(n(t))
                }).on("orion.navigator.contentDidLoad", function(e, n) {
                    o(OrionLoadingUtil.findInContent(n, t))
                }), n(e).on("Terra.init.list", function() {
                    r()
                }).on("Terra.resizeEnd.list", function() {
                    o(n(t))
                }), {
                    updateLists: o,
                    init: r
                }
            }(e, jQuery);
        TerraRailsViewModels.List = n
    }(window, jQuery),
    function(e, t, n) {
        "use strict";

        function r() {
            var e = ["xxs", "xs", "s", "md", "lg", "xl", "xxl"],
                r = n.getMediaQueryName();
            t(".js-action-ClickOnLoad").each(function() {
                var n = t(this).attr("data-min-window-size");
                e.indexOf(r) >= e.indexOf(n) && t(this).click()
            })
        }
        t(e).load(r)
    }(window, jQuery, window.Terra);
var TerraRailsViewModels = window.TerraRailsViewModels || {};
window.TerraRailsViewModels = TerraRailsViewModels,
    function(e) {
        var t = function(e) {
            this.searchBar = e, this.searchBarInput = e.find(".terraVM-SearchBar-input"), this.searchMinimumTextLength = this.searchBarInput.attr("data-minimum-search-text-length"), this.searchDelay = this.searchBarInput.attr("data-search-delay")
        };
        t.prototype.onInput = function(e, t) {
            function n() {
                o.val().length >= i ? e(o) : void 0 !== t && t()
            }
            var r = this.searchBar,
                o = this.searchBarInput,
                i = this.searchMinimumTextLength,
                a = this.searchDelay;
            r.off("input"), r.on("input", TerraRailsViewModels.debounce(n, a))
        }, e.TerraRailsViewModels.SearchBar = function(e) {
            return new t(e)
        }
    }(window, jQuery),
    function(e, t, n) {
        function r(e) {
            for (var n = 0; n < e.length; n++) new s(t(e[n]))
        }
        var o = ".js-InfiniteScroller",
            i = "scroll",
            a = "data-inf-scroll-url",
            s = function(r) {
                function o() {
                    l() ? c() : !d && s() && r.is(":visible") && (d = !0, t.ajax({
                        cache: !1,
                        dataType: "html",
                        method: "GET",
                        url: r.attr(a),
                        success: function(i) {
                            var s = t(i).find(".terraVM-InfiniteScroller-page").addBack(".terraVM-InfiniteScroller-page");
                            if (!s.length) return void c();
                            var l = s.children(),
                                u = s.attr("data-inf-scroll-selector");
                            if (u && (l = t(n.findInContent(l, u))), r.parent().length && 0 !== l.length) {
                                var f = ".terraVM-InfiniteScroller-content",
                                    p = r.find(f).children().addBack(f).last();
                                n.append(p, l, {}), t(e).resize();
                                var h = s.attr(a);
                                r.attr(a, h || null)
                            }
                            d = !1, o()
                        },
                        error: function() {
                            r.attr(a, null), c()
                        }
                    }))
                }

                function s() {
                    var e = 0;
                    return r.children().each(function() {
                        e += t(this).outerHeight()
                    }), r.scrollTop() + 2 * r.height() > e
                }

                function l() {
                    return !r.attr(a)
                }

                function c() {
                    r.off(i, u), r.find(".terraVM-InfiniteScroller-loading").remove()
                }

                function u() {
                    TerraRailsViewModels.debounce(o, 250)()
                }
                var d = !1;
                r.on(i, u), o()
            };
        t(e).on("Terra.resizeEnd", function() {
            t(o).trigger(i)
        }), t(document).on("orion.navigator.contentDidAttach", function(e, n) {
            t(n).find(o).addBack(o).trigger(i)
        }), t(document).ready(function() {
            r(t(o))
        }), t(document).on("orion.navigator.contentDidLoad", function(e, n) {
            r(t(n).find(o).addBack(o))
        })
    }(window, jQuery, window.OrionLoadingUtil),
    function(e, t) {
        TerraRailsViewModels.OrionFilterView = function(e) {
            function n() {
                return !!e && (i = e.find(".terraVM-SearchBar"), !!i.length && (a = e.attr("data-filter-type"), s = e.attr("data-case-type"), i.val() > 0 && r(), TerraRailsViewModels.SearchBar(i).onInput(o, r), !0))
            }

            function r() {
                e.find("." + l + "[data-filterable]").removeClass("hide-important")
            }

            function o(n) {
                var r = n.val();
                e.find("." + l).filter(function() {
                    return !0
                }).addClass("hide-important"), e.find("." + l).filter(function() {
                    return 0 !== t(this).data("filterable").filter(function(e) {
                        var t = !1;
                        return "CONTAINS" === a ? (String.prototype.includes || (String.prototype.includes = function(e, t) {
                            "use strict";
                            return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t)
                        }), t = "CASE_INSENSITIVE" === s ? e.toLowerCase().includes(r.toLowerCase()) : e.includes(r)) : (String.prototype.startsWith || (String.prototype.startsWith = function(e, t) {
                            return this.substr(t || 0, e.length) === e
                        }), t = "STARTS_WITH" === a && "CASE_INSENSITIVE" === s ? e.toLowerCase().startsWith(r.toLowerCase()) : e.startsWith(r)), t ? [r] : null
                    }).length
                }).removeClass("hide-important")
            }
            var i, a, s, l = "terraVM-Filterable";
            return this instanceof TerraRailsViewModels.OrionFilterView ? n() ? {
                isvalid: !0
            } : {
                isValid: !1
            } : new TerraRailsViewModels.OrionFilterView(e)
        };
        var n = "terraVM-FilterView";
        t(function() {
            t("." + n).each(function() {
                new TerraRailsViewModels.OrionFilterView(t(this))
            })
        }), t(document).on("orion.navigator.contentDidLoad", function(e, r) {
            if (r) {
                (r.hasClass(n) ? r : r.find("." + n)).each(function() {
                    new TerraRailsViewModels.OrionFilterView(t(this))
                })
            }
        })
    }(window, jQuery),
    function(e, t) {
        TerraRailsViewModels.MPageCompatibilityContainer = function(t) {
            if (t) {
                var n = !1;
                if (t.hasClass("terraVM-MPageCompatibilityContainer--forced") ? n = !0 : e.ionClient && (n = "EmbeddedContent" === e.ionClient.clientId.substr(0, 15)), n) {
                    t.addClass("isEmbedded");
                    var r = t[0].querySelector(".terraVM-ContentPanel--header");
                    if (!r) return;
                    if (r.classList.contains("terraVM-ActionToolbar")) {
                        var o = r.querySelector(".terraVM-ActionToolbar-leftButtons").children,
                            i = r.querySelector(".terraVM-ActionToolbar-rightButtons").children;
                        o.length || i.length || r.style.setProperty("display", "none", "important")
                    }
                    if (r.classList.contains("terraVM-Header")) {
                        var a = r.querySelector(".actions");
                        a && a.children.length || r.style.setProperty("display", "none", "important")
                    }
                }
            }
        };
        var n = "terraVM-MPageCompatibilityContainer";
        t(function() {
            t("." + n).each(function() {
                new TerraRailsViewModels.MPageCompatibilityContainer(t(this))
            })
        }), t(document).on("orion.navigator.contentDidLoad", function(e, r) {
            if (r) {
                (r.hasClass(n) ? r : r.find("." + n)).each(function() {
                    new TerraRailsViewModels.MPageCompatibilityContainer(t(this))
                })
            }
        })
    }(window, jQuery),
    function() {
        function e(e, t) {
            t || (t = $(document));
            var n = ".terraVM-Flowsheet";
            $(t).find(n).addBack(n).on("click", "td", function(e) {
                $(e.target).closest("table").find("[aria-selected=true]").removeAttr("aria-selected");
                var t = $(e.target).closest("td.terraVM-Flowsheet-cell--selectable");
                t.is(t.parent().children().first()) ? t.parent().find("td").attr("aria-selected", !0) : t.attr("aria-selected", !0)
            })
        }
        $(document).on("ready orion.navigator.contentDidLoad", e)
    }();
var TerraRailsViewModelComponents = window.TerraRailsViewModelComponents || {};
window.TerraRailsViewModelComponents = TerraRailsViewModelComponents,
    function() {
        var e = function() {
            function e(e) {
                return JSON.parse(ReactOnRails.serverRenderReactComponent({
                    name: "NoDataViewComponent",
                    props: e
                })).html
            }

            function t(e, t) {
                var n = t.id;
                n || (t.id = "terra-rails-view-models-component-react-on-rails"), ReactOnRails.render("NoDataViewComponent", e, t.id), t.id = n
            }
            return {
                createHTML: e,
                render: t
            }
        }();
        TerraRailsViewModelComponents.NoDataView = e
    }(window);
var TerraRailsViewModelComponents = window.TerraRailsViewModelComponents || {};
window.TerraRailsViewModelComponents = TerraRailsViewModelComponents,
    function() {
        var e = function() {
            function e(e) {
                return JSON.parse(ReactOnRails.serverRenderReactComponent({
                    name: "ContentPanelComponent",
                    props: e
                })).html
            }

            function t(e, t) {
                var n = t.id;
                n || (t.id = "terra-rails-view-models-component-react-on-rails"), ReactOnRails.render("ContentPanelComponent", e, t.id), t.id = n
            }
            return {
                createHTML: e,
                render: t
            }
        }();
        TerraRailsViewModelComponents.ContentPanel = e
    }(window);
var TerraRailsViewModelComponents = window.TerraRailsViewModelComponents || {};
window.TerraRailsViewModelComponents = TerraRailsViewModelComponents,
    function() {
        var e = function() {
            function e(e) {
                return JSON.parse(ReactOnRails.serverRenderReactComponent({
                    name: "DetailViewComponent",
                    props: e
                })).html
            }

            function t(e, t) {
                var n = t.id;
                n || (t.id = "terra-rails-view-models-component-react-on-rails"), ReactOnRails.render("DetailViewComponent", e, t.id), t.id = n
            }
            return {
                createHTML: e,
                render: t
            }
        }();
        TerraRailsViewModelComponents.DetailView = e
    }(window);
var TerraRailsViewModelComponents = window.TerraRailsViewModelComponents || {};
window.TerraRailsViewModelComponents = TerraRailsViewModelComponents;
var ionErrors = {
        retrySelectedEvent: "ionErrors:retrySelected",
        retryHandler: function() {
            $(".ion-Error-btn-retry").click(function(e) {
                e.preventDefault(), e.stopPropagation(), $(this).trigger({
                    type: ionErrors.retrySelectedEvent
                })
            })
        }
    },
    IonErrorsComponents = window.IonErrorsComponents || {};
window.IonErrorsComponents = IonErrorsComponents,
    function() {
        var e = function() {
            function e(e) {
                return JSON.parse(ReactOnRails.serverRenderReactComponent({
                    name: "ErrorViewComponent",
                    props: e
                })).html
            }

            function t(e, t) {
                var n = t.id;
                n || (t.id = "ion-errors-component-react-on-rails"), ReactOnRails.render("ErrorViewComponent", e, t.id), t.id = n
            }
            return {
                createHTML: e,
                render: t
            }
        }();
        IonErrorsComponents.ErrorView = e
    }(window);
var IonErrorsComponents = window.IonErrorsComponents || {};
window.IonErrorsComponents = IonErrorsComponents,
    function(e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.returnExports = t()
    }(this, function() {
        "use strict";
        var e, t = Function.call.bind(Function.apply),
            n = Function.call.bind(Function.call),
            r = Array.isArray,
            o = Object.keys,
            i = function(e) {
                return function() {
                    return !t(e, this, arguments)
                }
            },
            a = function(e) {
                try {
                    return e(), !1
                } catch (e) {
                    return !0
                }
            },
            s = function(e) {
                try {
                    return e()
                } catch (e) {
                    return !1
                }
            },
            l = i(a),
            c = function() {
                return !a(function() {
                    Object.defineProperty({}, "x", {
                        get: function() {}
                    })
                })
            },
            u = !!Object.defineProperty && c(),
            d = "foo" === function() {}.name,
            f = Function.call.bind(Array.prototype.forEach),
            p = Function.call.bind(Array.prototype.reduce),
            h = Function.call.bind(Array.prototype.filter),
            g = Function.call.bind(Array.prototype.some),
            m = function(e, t, n, r) {
                !r && t in e || (u ? Object.defineProperty(e, t, {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: n
                }) : e[t] = n)
            },
            v = function(e, t, n) {
                f(o(t), function(r) {
                    var o = t[r];
                    m(e, r, o, !!n)
                })
            },
            y = Function.call.bind(Object.prototype.toString),
            b = "function" == typeof /abc/ ? function(e) {
                return "function" == typeof e && "[object Function]" === y(e)
            } : function(e) {
                return "function" == typeof e
            },
            w = {
                getter: function(e, t, n) {
                    if (!u) throw new TypeError("getters require true ES5 support");
                    Object.defineProperty(e, t, {
                        configurable: !0,
                        enumerable: !1,
                        get: n
                    })
                },
                proxy: function(e, t, n) {
                    if (!u) throw new TypeError("getters require true ES5 support");
                    var r = Object.getOwnPropertyDescriptor(e, t);
                    Object.defineProperty(n, t, {
                        configurable: r.configurable,
                        enumerable: r.enumerable,
                        get: function() {
                            return e[t]
                        },
                        set: function(n) {
                            e[t] = n
                        }
                    })
                },
                redefine: function(e, t, n) {
                    if (u) {
                        var r = Object.getOwnPropertyDescriptor(e, t);
                        r.value = n, Object.defineProperty(e, t, r)
                    } else e[t] = n
                },
                defineByDescriptor: function(e, t, n) {
                    u ? Object.defineProperty(e, t, n) : "value" in n && (e[t] = n.value)
                },
                preserveToString: function(e, t) {
                    t && b(t.toString) && m(e, "toString", t.toString.bind(t), !0)
                }
            },
            C = Object.create || function(e, t) {
                var n = function() {};
                n.prototype = e;
                var r = new n;
                return void 0 !== t && o(t).forEach(function(e) {
                    w.defineByDescriptor(r, e, t[e])
                }), r
            },
            T = function(e, t) {
                return !!Object.setPrototypeOf && s(function() {
                    var n = function t(n) {
                        var r = new e(n);
                        return Object.setPrototypeOf(r, t.prototype), r
                    };
                    return Object.setPrototypeOf(n, e), n.prototype = C(e.prototype, {
                        constructor: {
                            value: n
                        }
                    }), t(n)
                })
            },
            x = function() {
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw new Error("unable to locate global object")
            },
            S = x(),
            O = S.isFinite,
            E = Function.call.bind(String.prototype.indexOf),
            M = Function.apply.bind(Array.prototype.indexOf),
            k = Function.call.bind(Array.prototype.concat),
            j = Function.call.bind(String.prototype.slice),
            I = Function.call.bind(Array.prototype.push),
            N = Function.apply.bind(Array.prototype.push),
            P = Function.call.bind(Array.prototype.shift),
            A = Math.max,
            _ = Math.min,
            L = Math.floor,
            D = Math.abs,
            R = Math.exp,
            V = Math.log,
            z = Math.sqrt,
            H = Function.call.bind(Object.prototype.hasOwnProperty),
            $ = function() {},
            F = S.Symbol || {},
            B = F.species || "@@species",
            q = Number.isNaN || function(e) {
                return e !== e
            },
            W = Number.isFinite || function(e) {
                return "number" == typeof e && O(e)
            },
            U = b(Math.sign) ? Math.sign : function(e) {
                var t = Number(e);
                return 0 === t ? t : q(t) ? t : t < 0 ? -1 : 1
            },
            G = function(e) {
                return "[object Arguments]" === y(e)
            },
            K = function(e) {
                return null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Array]" !== y(e) && "[object Function]" === y(e.callee)
            },
            Q = G(arguments) ? G : K,
            X = {
                primitive: function(e) {
                    return null === e || "function" != typeof e && "object" != typeof e
                },
                string: function(e) {
                    return "[object String]" === y(e)
                },
                regex: function(e) {
                    return "[object RegExp]" === y(e)
                },
                symbol: function(e) {
                    return "function" == typeof S.Symbol && "symbol" == typeof e
                }
            },
            J = function(e, t, n) {
                var r = e[t];
                m(e, t, n, !0), w.preserveToString(e[t], r)
            },
            Y = "function" == typeof F && "function" == typeof F["for"] && X.symbol(F()),
            Z = X.symbol(F.iterator) ? F.iterator : "_es6-shim iterator_";
        S.Set && "function" == typeof(new S.Set)["@@iterator"] && (Z = "@@iterator"), S.Reflect || m(S, "Reflect", {}, !0);
        var ee = S.Reflect,
            te = String,
            ne = {
                Call: function(e, n) {
                    var r = arguments.length > 2 ? arguments[2] : [];
                    if (!ne.IsCallable(e)) throw new TypeError(e + " is not a function");
                    return t(e, n, r)
                },
                RequireObjectCoercible: function(e, t) {
                    if (null == e) throw new TypeError(t || "Cannot call method on " + e);
                    return e
                },
                TypeIsObject: function(e) {
                    return void 0 !== e && null !== e && !0 !== e && !1 !== e && ("function" == typeof e || "object" == typeof e)
                },
                ToObject: function(e, t) {
                    return Object(ne.RequireObjectCoercible(e, t))
                },
                IsCallable: b,
                IsConstructor: function(e) {
                    return ne.IsCallable(e)
                },
                ToInt32: function(e) {
                    return ne.ToNumber(e) >> 0
                },
                ToUint32: function(e) {
                    return ne.ToNumber(e) >>> 0
                },
                ToNumber: function(e) {
                    if ("[object Symbol]" === y(e)) throw new TypeError("Cannot convert a Symbol value to a number");
                    return +e
                },
                ToInteger: function(e) {
                    var t = ne.ToNumber(e);
                    return q(t) ? 0 : 0 !== t && W(t) ? (t > 0 ? 1 : -1) * L(D(t)) : t
                },
                ToLength: function(e) {
                    var t = ne.ToInteger(e);
                    return t <= 0 ? 0 : t > Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : t
                },
                SameValue: function(e, t) {
                    return e === t ? 0 !== e || 1 / e == 1 / t : q(e) && q(t)
                },
                SameValueZero: function(e, t) {
                    return e === t || q(e) && q(t)
                },
                IsIterable: function(e) {
                    return ne.TypeIsObject(e) && ("undefined" != typeof e[Z] || Q(e))
                },
                GetIterator: function(t) {
                    if (Q(t)) return new e(t, "value");
                    var n = ne.GetMethod(t, Z);
                    if (!ne.IsCallable(n)) throw new TypeError("value is not an iterable");
                    var r = ne.Call(n, t);
                    if (!ne.TypeIsObject(r)) throw new TypeError("bad iterator");
                    return r
                },
                GetMethod: function(e, t) {
                    var n = ne.ToObject(e)[t];
                    if (void 0 !== n && null !== n) {
                        if (!ne.IsCallable(n)) throw new TypeError("Method not callable: " + t);
                        return n
                    }
                },
                IteratorComplete: function(e) {
                    return !!e.done
                },
                IteratorClose: function(e, t) {
                    var n = ne.GetMethod(e, "return");
                    if (void 0 !== n) {
                        var r, o;
                        try {
                            r = ne.Call(n, e)
                        } catch (e) {
                            o = e
                        }
                        if (!t) {
                            if (o) throw o;
                            if (!ne.TypeIsObject(r)) throw new TypeError("Iterator's return method returned a non-object.")
                        }
                    }
                },
                IteratorNext: function(e) {
                    var t = arguments.length > 1 ? e.next(arguments[1]) : e.next();
                    if (!ne.TypeIsObject(t)) throw new TypeError("bad iterator");
                    return t
                },
                IteratorStep: function(e) {
                    var t = ne.IteratorNext(e);
                    return !ne.IteratorComplete(t) && t
                },
                Construct: function(e, t, n, r) {
                    var o = void 0 === n ? e : n;
                    if (!r && ee.construct) return ee.construct(e, t, o);
                    var i = o.prototype;
                    ne.TypeIsObject(i) || (i = Object.prototype);
                    var a = C(i),
                        s = ne.Call(e, a, t);
                    return ne.TypeIsObject(s) ? s : a
                },
                SpeciesConstructor: function(e, t) {
                    var n = e.constructor;
                    if (void 0 === n) return t;
                    if (!ne.TypeIsObject(n)) throw new TypeError("Bad constructor");
                    var r = n[B];
                    if (void 0 === r || null === r) return t;
                    if (!ne.IsConstructor(r)) throw new TypeError("Bad @@species");
                    return r
                },
                CreateHTML: function(e, t, n, r) {
                    var o = ne.ToString(e),
                        i = "<" + t;
                    if ("" !== n) {
                        i += " " + n + '="' + ne.ToString(r).replace(/"/g, "&quot;") + '"'
                    }
                    return i + ">" + o + "</" + t + ">"
                },
                IsRegExp: function(e) {
                    if (!ne.TypeIsObject(e)) return !1;
                    var t = e[F.match];
                    return void 0 !== t ? !!t : X.regex(e)
                },
                ToString: function(e) {
                    return te(e)
                }
            };
        if (u && Y) {
            var re = function(e) {
                if (X.symbol(F[e])) return F[e];
                var t = F["for"]("Symbol." + e);
                return Object.defineProperty(F, e, {
                    configurable: !1,
                    enumerable: !1,
                    writable: !1,
                    value: t
                }), t
            };
            if (!X.symbol(F.search)) {
                var oe = re("search"),
                    ie = String.prototype.search;
                m(RegExp.prototype, oe, function(e) {
                    return ne.Call(ie, e, [this])
                });
                var ae = function(e) {
                    var t = ne.RequireObjectCoercible(this);
                    if (null !== e && void 0 !== e) {
                        var n = ne.GetMethod(e, oe);
                        if (void 0 !== n) return ne.Call(n, e, [t])
                    }
                    return ne.Call(ie, t, [ne.ToString(e)])
                };
                J(String.prototype, "search", ae)
            }
            if (!X.symbol(F.replace)) {
                var se = re("replace"),
                    le = String.prototype.replace;
                m(RegExp.prototype, se, function(e, t) {
                    return ne.Call(le, e, [this, t])
                });
                var ce = function(e, t) {
                    var n = ne.RequireObjectCoercible(this);
                    if (null !== e && void 0 !== e) {
                        var r = ne.GetMethod(e, se);
                        if (void 0 !== r) return ne.Call(r, e, [n, t])
                    }
                    return ne.Call(le, n, [ne.ToString(e), t])
                };
                J(String.prototype, "replace", ce)
            }
            if (!X.symbol(F.split)) {
                var ue = re("split"),
                    de = String.prototype.split;
                m(RegExp.prototype, ue, function(e, t) {
                    return ne.Call(de, e, [this, t])
                });
                var fe = function(e, t) {
                    var n = ne.RequireObjectCoercible(this);
                    if (null !== e && void 0 !== e) {
                        var r = ne.GetMethod(e, ue);
                        if (void 0 !== r) return ne.Call(r, e, [n, t])
                    }
                    return ne.Call(de, n, [ne.ToString(e), t])
                };
                J(String.prototype, "split", fe)
            }
            var pe = X.symbol(F.match),
                he = pe && function() {
                    var e = {};
                    return e[F.match] = function() {
                        return 42
                    }, 42 !== "a".match(e)
                }();
            if (!pe || he) {
                var ge = re("match"),
                    me = String.prototype.match;
                m(RegExp.prototype, ge, function(e) {
                    return ne.Call(me, e, [this])
                });
                var ve = function(e) {
                    var t = ne.RequireObjectCoercible(this);
                    if (null !== e && void 0 !== e) {
                        var n = ne.GetMethod(e, ge);
                        if (void 0 !== n) return ne.Call(n, e, [t])
                    }
                    return ne.Call(me, t, [ne.ToString(e)])
                };
                J(String.prototype, "match", ve)
            }
        }
        var ye = function(e, t, n) {
                w.preserveToString(t, e), Object.setPrototypeOf && Object.setPrototypeOf(e, t), u ? f(Object.getOwnPropertyNames(e), function(r) {
                    r in $ || n[r] || w.proxy(e, r, t)
                }) : f(Object.keys(e), function(r) {
                    r in $ || n[r] || (t[r] = e[r])
                }), t.prototype = e.prototype, w.redefine(e.prototype, "constructor", t)
            },
            be = function() {
                return this
            },
            we = function(e) {
                u && !H(e, B) && w.getter(e, B, be)
            },
            Ce = function(e, t) {
                var n = t || function() {
                    return this
                };
                m(e, Z, n), !e[Z] && X.symbol(Z) && (e[Z] = n)
            },
            Te = function(e, t, n) {
                u ? Object.defineProperty(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n
            },
            xe = function(e, t, n) {
                if (Te(e, t, n), !ne.SameValue(e[t], n)) throw new TypeError("property is nonconfigurable")
            },
            Se = function(e, t, n, r) {
                if (!ne.TypeIsObject(e)) throw new TypeError("Constructor requires `new`: " + t.name);
                var o = t.prototype;
                ne.TypeIsObject(o) || (o = n);
                var i = C(o);
                for (var a in r)
                    if (H(r, a)) {
                        var s = r[a];
                        m(i, a, s, !0)
                    }
                return i
            };
        if (String.fromCodePoint && 1 !== String.fromCodePoint.length) {
            var Oe = String.fromCodePoint;
            J(String, "fromCodePoint", function() {
                return ne.Call(Oe, this, arguments)
            })
        }
        var Ee = {
            fromCodePoint: function() {
                for (var e, t = [], n = 0, r = arguments.length; n < r; n++) {
                    if (e = Number(arguments[n]), !ne.SameValue(e, ne.ToInteger(e)) || e < 0 || e > 1114111) throw new RangeError("Invalid code point " + e);
                    e < 65536 ? I(t, String.fromCharCode(e)) : (e -= 65536, I(t, String.fromCharCode(55296 + (e >> 10))), I(t, String.fromCharCode(e % 1024 + 56320)))
                }
                return t.join("")
            },
            raw: function(e) {
                var t = ne.ToObject(e, "bad callSite"),
                    n = ne.ToObject(t.raw, "bad raw value"),
                    r = n.length,
                    o = ne.ToLength(r);
                if (o <= 0) return "";
                for (var i, a, s, l, c = [], u = 0; u < o && (i = ne.ToString(u), s = ne.ToString(n[i]), I(c, s), !(u + 1 >= o));) a = u + 1 < arguments.length ? arguments[u + 1] : "", l = ne.ToString(a), I(c, l), u += 1;
                return c.join("")
            }
        };
        String.raw && "xy" !== String.raw({
            raw: {
                0: "x",
                1: "y",
                length: 2
            }
        }) && J(String, "raw", Ee.raw), v(String, Ee);
        var Me = function e(t, n) {
                if (n < 1) return "";
                if (n % 2) return e(t, n - 1) + t;
                var r = e(t, n / 2);
                return r + r
            },
            ke = Infinity,
            je = {
                repeat: function(e) {
                    var t = ne.ToString(ne.RequireObjectCoercible(this)),
                        n = ne.ToInteger(e);
                    if (n < 0 || n >= ke) throw new RangeError("repeat count must be less than infinity and not overflow maximum string size");
                    return Me(t, n)
                },
                startsWith: function(e) {
                    var t = ne.ToString(ne.RequireObjectCoercible(this));
                    if (ne.IsRegExp(e)) throw new TypeError('Cannot call method "startsWith" with a regex');
                    var n, r = ne.ToString(e);
                    arguments.length > 1 && (n = arguments[1]);
                    var o = A(ne.ToInteger(n), 0);
                    return j(t, o, o + r.length) === r
                },
                endsWith: function(e) {
                    var t = ne.ToString(ne.RequireObjectCoercible(this));
                    if (ne.IsRegExp(e)) throw new TypeError('Cannot call method "endsWith" with a regex');
                    var n, r = ne.ToString(e),
                        o = t.length;
                    arguments.length > 1 && (n = arguments[1]);
                    var i = void 0 === n ? o : ne.ToInteger(n),
                        a = _(A(i, 0), o);
                    return j(t, a - r.length, a) === r
                },
                includes: function(e) {
                    if (ne.IsRegExp(e)) throw new TypeError('"includes" does not accept a RegExp');
                    var t, n = ne.ToString(e);
                    return arguments.length > 1 && (t = arguments[1]), -1 !== E(this, n, t)
                },
                codePointAt: function(e) {
                    var t = ne.ToString(ne.RequireObjectCoercible(this)),
                        n = ne.ToInteger(e),
                        r = t.length;
                    if (n >= 0 && n < r) {
                        var o = t.charCodeAt(n),
                            i = n + 1 === r;
                        if (o < 55296 || o > 56319 || i) return o;
                        var a = t.charCodeAt(n + 1);
                        return a < 56320 || a > 57343 ? o : 1024 * (o - 55296) + (a - 56320) + 65536
                    }
                }
            };
        if (String.prototype.includes && !1 !== "a".includes("a", Infinity) && J(String.prototype, "includes", je.includes), String.prototype.startsWith && String.prototype.endsWith) {
            var Ie = a(function() {
                    "/a/".startsWith(/a/)
                }),
                Ne = s(function() {
                    return !1 === "abc".startsWith("a", Infinity)
                });
            Ie && Ne || (J(String.prototype, "startsWith", je.startsWith), J(String.prototype, "endsWith", je.endsWith))
        }
        if (Y) {
            s(function() {
                var e = /a/;
                return e[F.match] = !1, "/a/".startsWith(e)
            }) || J(String.prototype, "startsWith", je.startsWith);
            s(function() {
                var e = /a/;
                return e[F.match] = !1, "/a/".endsWith(e)
            }) || J(String.prototype, "endsWith", je.endsWith);
            s(function() {
                var e = /a/;
                return e[F.match] = !1, "/a/".includes(e)
            }) || J(String.prototype, "includes", je.includes)
        }
        v(String.prototype, je);
        var Pe = ["\t\n\x0B\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003", "\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028", "\u2029\ufeff"].join(""),
            Ae = new RegExp("(^[" + Pe + "]+)|([" + Pe + "]+$)", "g"),
            _e = function() {
                return ne.ToString(ne.RequireObjectCoercible(this)).replace(Ae, "")
            },
            Le = ["\x85", "\u200b", "\ufffe"].join(""),
            De = new RegExp("[" + Le + "]", "g"),
            Re = /^[\-+]0x[0-9a-f]+$/i,
            Ve = Le.trim().length !== Le.length;
        m(String.prototype, "trim", _e, Ve);
        var ze = function(e) {
                return {
                    value: e,
                    done: 0 === arguments.length
                }
            },
            He = function(e) {
                ne.RequireObjectCoercible(e), this._s = ne.ToString(e), this._i = 0
            };
        He.prototype.next = function() {
            var e = this._s,
                t = this._i;
            if (void 0 === e || t >= e.length) return this._s = void 0, ze();
            var n, r, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === e.length ? r = 1 : (n = e.charCodeAt(t + 1), r = n < 56320 || n > 57343 ? 1 : 2), this._i = t + r, ze(e.substr(t, r))
        }, Ce(He.prototype), Ce(String.prototype, function() {
            return new He(this)
        });
        var $e = {
            from: function(e) {
                var t, r = this;
                arguments.length > 1 && (t = arguments[1]);
                var o, i;
                if (void 0 === t) o = !1;
                else {
                    if (!ne.IsCallable(t)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                    arguments.length > 2 && (i = arguments[2]), o = !0
                }
                var a, s, l, c = void 0 !== (Q(e) || ne.GetMethod(e, Z));
                if (c) {
                    s = ne.IsConstructor(r) ? Object(new r) : [];
                    var u, d, f = ne.GetIterator(e);
                    for (l = 0;;) {
                        if (!1 === (u = ne.IteratorStep(f))) break;
                        d = u.value;
                        try {
                            o && (d = void 0 === i ? t(d, l) : n(t, i, d, l)), s[l] = d
                        } catch (e) {
                            throw ne.IteratorClose(f, !0), e
                        }
                        l += 1
                    }
                    a = l
                } else {
                    var p = ne.ToObject(e);
                    a = ne.ToLength(p.length), s = ne.IsConstructor(r) ? Object(new r(a)) : new Array(a);
                    var h;
                    for (l = 0; l < a; ++l) h = p[l], o && (h = void 0 === i ? t(h, l) : n(t, i, h, l)), xe(s, l, h)
                }
                return s.length = a, s
            },
            of: function() {
                for (var e = arguments.length, t = this, n = r(t) || !ne.IsCallable(t) ? new Array(e) : ne.Construct(t, [e]), o = 0; o < e; ++o) xe(n, o, arguments[o]);
                return n.length = e, n
            }
        };
        v(Array, $e), we(Array), e = function(e, t) {
            this.i = 0, this.array = e, this.kind = t
        }, v(e.prototype, {
            next: function() {
                var t = this.i,
                    n = this.array;
                if (!(this instanceof e)) throw new TypeError("Not an ArrayIterator");
                if (void 0 !== n)
                    for (var r = ne.ToLength(n.length); t < r; t++) {
                        var o, i = this.kind;
                        return "key" === i ? o = t : "value" === i ? o = n[t] : "entry" === i && (o = [t, n[t]]), this.i = t + 1, ze(o)
                    }
                return this.array = void 0, ze()
            }
        }), Ce(e.prototype), Array.of === $e.of || function() {
            var e = function(e) {
                this.length = e
            };
            e.prototype = [];
            var t = Array.of.apply(e, [1, 2]);
            return t instanceof e && 2 === t.length
        }() || J(Array, "of", $e.of);
        var Fe = {
            copyWithin: function(e, t) {
                var n, r = ne.ToObject(this),
                    o = ne.ToLength(r.length),
                    i = ne.ToInteger(e),
                    a = ne.ToInteger(t),
                    s = i < 0 ? A(o + i, 0) : _(i, o),
                    l = a < 0 ? A(o + a, 0) : _(a, o);
                arguments.length > 2 && (n = arguments[2]);
                var c = void 0 === n ? o : ne.ToInteger(n),
                    u = c < 0 ? A(o + c, 0) : _(c, o),
                    d = _(u - l, o - s),
                    f = 1;
                for (l < s && s < l + d && (f = -1, l += d - 1, s += d - 1); d > 0;) l in r ? r[s] = r[l] : delete r[s], l += f, s += f, d -= 1;
                return r
            },
            fill: function(e) {
                var t;
                arguments.length > 1 && (t = arguments[1]);
                var n;
                arguments.length > 2 && (n = arguments[2]);
                var r = ne.ToObject(this),
                    o = ne.ToLength(r.length);
                t = ne.ToInteger(void 0 === t ? 0 : t), n = ne.ToInteger(void 0 === n ? o : n);
                for (var i = t < 0 ? A(o + t, 0) : _(t, o), a = n < 0 ? o + n : n, s = i; s < o && s < a; ++s) r[s] = e;
                return r
            },
            find: function(e) {
                var t = ne.ToObject(this),
                    r = ne.ToLength(t.length);
                if (!ne.IsCallable(e)) throw new TypeError("Array#find: predicate must be a function");
                for (var o, i = arguments.length > 1 ? arguments[1] : null, a = 0; a < r; a++)
                    if (o = t[a], i) {
                        if (n(e, i, o, a, t)) return o
                    } else if (e(o, a, t)) return o
            },
            findIndex: function(e) {
                var t = ne.ToObject(this),
                    r = ne.ToLength(t.length);
                if (!ne.IsCallable(e)) throw new TypeError("Array#findIndex: predicate must be a function");
                for (var o = arguments.length > 1 ? arguments[1] : null, i = 0; i < r; i++)
                    if (o) {
                        if (n(e, o, t[i], i, t)) return i
                    } else if (e(t[i], i, t)) return i;
                return -1
            },
            keys: function() {
                return new e(this, "key")
            },
            values: function() {
                return new e(this, "value")
            },
            entries: function() {
                return new e(this, "entry")
            }
        };
        if (Array.prototype.keys && !ne.IsCallable([1].keys().next) && delete Array.prototype.keys, Array.prototype.entries && !ne.IsCallable([1].entries().next) && delete Array.prototype.entries, Array.prototype.keys && Array.prototype.entries && !Array.prototype.values && Array.prototype[Z] && (v(Array.prototype, {
                values: Array.prototype[Z]
            }), X.symbol(F.unscopables) && (Array.prototype[F.unscopables].values = !0)), d && Array.prototype.values && "values" !== Array.prototype.values.name) {
            var Be = Array.prototype.values;
            J(Array.prototype, "values", function() {
                return ne.Call(Be, this, arguments)
            }), m(Array.prototype, Z, Array.prototype.values, !0)
        }
        v(Array.prototype, Fe), 1 / [!0].indexOf(!0, -0) < 0 && m(Array.prototype, "indexOf", function() {
            var e = M(this, arguments);
            return 0 === e && 1 / e < 0 ? 0 : e
        }, !0), Ce(Array.prototype, function() {
            return this.values()
        }), Object.getPrototypeOf && Ce(Object.getPrototypeOf([].values()));
        var qe = function() {
                return s(function() {
                    return 0 === Array.from({
                        length: -1
                    }).length
                })
            }(),
            We = function() {
                var e = Array.from([0].entries());
                return 1 === e.length && r(e[0]) && 0 === e[0][0] && 0 === e[0][1]
            }();
        if (qe && We || J(Array, "from", $e.from), ! function() {
                return s(function() {
                    return Array.from([0], void 0)
                })
            }()) {
            var Ue = Array.from;
            J(Array, "from", function(e) {
                return arguments.length > 1 && "undefined" != typeof arguments[1] ? ne.Call(Ue, this, arguments) : n(Ue, this, e)
            })
        }
        var Ge = -(Math.pow(2, 32) - 1),
            Ke = function(e, t) {
                var r = {
                    length: Ge
                };
                return r[t ? (r.length >>> 0) - 1 : 0] = !0, s(function() {
                    return n(e, r, function() {
                        throw new RangeError("should not reach here")
                    }, []), !0
                })
            };
        if (!Ke(Array.prototype.forEach)) {
            var Qe = Array.prototype.forEach;
            J(Array.prototype, "forEach", function() {
                return ne.Call(Qe, this.length >= 0 ? this : [], arguments)
            }, !0)
        }
        if (!Ke(Array.prototype.map)) {
            var Xe = Array.prototype.map;
            J(Array.prototype, "map", function() {
                return ne.Call(Xe, this.length >= 0 ? this : [], arguments)
            }, !0)
        }
        if (!Ke(Array.prototype.filter)) {
            var Je = Array.prototype.filter;
            J(Array.prototype, "filter", function() {
                return ne.Call(Je, this.length >= 0 ? this : [], arguments)
            }, !0)
        }
        if (!Ke(Array.prototype.some)) {
            var Ye = Array.prototype.some;
            J(Array.prototype, "some", function() {
                return ne.Call(Ye, this.length >= 0 ? this : [], arguments)
            }, !0)
        }
        if (!Ke(Array.prototype.every)) {
            var Ze = Array.prototype.every;
            J(Array.prototype, "every", function() {
                return ne.Call(Ze, this.length >= 0 ? this : [], arguments)
            }, !0)
        }
        if (!Ke(Array.prototype.reduce)) {
            var et = Array.prototype.reduce;
            J(Array.prototype, "reduce", function() {
                return ne.Call(et, this.length >= 0 ? this : [], arguments)
            }, !0)
        }
        if (!Ke(Array.prototype.reduceRight, !0)) {
            var tt = Array.prototype.reduceRight;
            J(Array.prototype, "reduceRight", function() {
                return ne.Call(tt, this.length >= 0 ? this : [], arguments)
            }, !0)
        }
        var nt = 8 !== Number("0o10"),
            rt = 2 !== Number("0b10"),
            ot = g(Le, function(e) {
                return 0 === Number(e + 0 + e)
            });
        if (nt || rt || ot) {
            var it = Number,
                at = /^0b[01]+$/i,
                st = /^0o[0-7]+$/i,
                lt = at.test.bind(at),
                ct = st.test.bind(st),
                ut = function(e) {
                    var t;
                    if ("function" == typeof e.valueOf && (t = e.valueOf(), X.primitive(t))) return t;
                    if ("function" == typeof e.toString && (t = e.toString(), X.primitive(t))) return t;
                    throw new TypeError("No default value")
                },
                dt = De.test.bind(De),
                ft = Re.test.bind(Re),
                pt = function() {
                    var e = function(t) {
                        var n;
                        "string" == typeof(n = arguments.length > 0 ? X.primitive(t) ? t : ut(t, "number") : 0) && (n = ne.Call(_e, n), lt(n) ? n = parseInt(j(n, 2), 2) : ct(n) ? n = parseInt(j(n, 2), 8) : (dt(n) || ft(n)) && (n = NaN));
                        var r = this,
                            o = s(function() {
                                return it.prototype.valueOf.call(r), !0
                            });
                        return r instanceof e && !o ? new it(n) : it(n)
                    };
                    return e
                }();
            ye(it, pt, {}), v(pt, {
                NaN: it.NaN,
                MAX_VALUE: it.MAX_VALUE,
                MIN_VALUE: it.MIN_VALUE,
                NEGATIVE_INFINITY: it.NEGATIVE_INFINITY,
                POSITIVE_INFINITY: it.POSITIVE_INFINITY
            }), Number = pt, w.redefine(S, "Number", pt)
        }
        var ht = Math.pow(2, 53) - 1;
        v(Number, {
            MAX_SAFE_INTEGER: ht,
            MIN_SAFE_INTEGER: -ht,
            EPSILON: 2.220446049250313e-16,
            parseInt: S.parseInt,
            parseFloat: S.parseFloat,
            isFinite: W,
            isInteger: function(e) {
                return W(e) && ne.ToInteger(e) === e
            },
            isSafeInteger: function(e) {
                return Number.isInteger(e) && D(e) <= Number.MAX_SAFE_INTEGER
            },
            isNaN: q
        }), m(Number, "parseInt", S.parseInt, Number.parseInt !== S.parseInt), [, 1].find(function(e, t) {
            return 0 === t
        }) || J(Array.prototype, "find", Fe.find), 0 !== [, 1].findIndex(function(e, t) {
            return 0 === t
        }) && J(Array.prototype, "findIndex", Fe.findIndex);
        var gt = Function.bind.call(Function.bind, Object.prototype.propertyIsEnumerable),
            mt = function(e, t) {
                u && gt(e, t) && Object.defineProperty(e, t, {
                    enumerable: !1
                })
            },
            vt = function() {
                for (var e = Number(this), t = arguments.length, n = t - e, r = new Array(n < 0 ? 0 : n), o = e; o < t; ++o) r[o - e] = arguments[o];
                return r
            },
            yt = function(e) {
                return function(t, n) {
                    return t[n] = e[n], t
                }
            },
            bt = function(e, t) {
                var n, r = o(Object(t));
                return ne.IsCallable(Object.getOwnPropertySymbols) && (n = h(Object.getOwnPropertySymbols(Object(t)), gt(t))), p(k(r, n || []), yt(t), e)
            },
            wt = {
                assign: function(e) {
                    var t = ne.ToObject(e, "Cannot convert undefined or null to object");
                    return p(ne.Call(vt, 1, arguments), bt, t)
                },
                is: function(e, t) {
                    return ne.SameValue(e, t)
                }
            };
        if (Object.assign && Object.preventExtensions && function() {
                var e = Object.preventExtensions({
                    1: 2
                });
                try {
                    Object.assign(e, "xy")
                } catch (t) {
                    return "y" === e[1]
                }
            }() && J(Object, "assign", wt.assign), v(Object, wt), u) {
            var Ct = {
                setPrototypeOf: function(e, t) {
                    var r, o = function(e, t) {
                            if (!ne.TypeIsObject(e)) throw new TypeError("cannot set prototype on a non-object");
                            if (null !== t && !ne.TypeIsObject(t)) throw new TypeError("can only set prototype to an object or null" + t)
                        },
                        i = function(e, t) {
                            return o(e, t), n(r, e, t), e
                        };
                    try {
                        r = e.getOwnPropertyDescriptor(e.prototype, t).set, n(r, {}, null)
                    } catch (n) {
                        if (e.prototype !== {}[t]) return;
                        r = function(e) {
                            this[t] = e
                        }, i.polyfill = i(i({}, null), e.prototype) instanceof e
                    }
                    return i
                }(Object, "__proto__")
            };
            v(Object, Ct)
        }
        if (Object.setPrototypeOf && Object.getPrototypeOf && null !== Object.getPrototypeOf(Object.setPrototypeOf({}, null)) && null === Object.getPrototypeOf(Object.create(null)) && function() {
                var e = Object.create(null),
                    t = Object.getPrototypeOf,
                    n = Object.setPrototypeOf;
                Object.getPrototypeOf = function(n) {
                    var r = t(n);
                    return r === e ? null : r
                }, Object.setPrototypeOf = function(t, r) {
                    return n(t, null === r ? e : r)
                }, Object.setPrototypeOf.polyfill = !1
            }(), !!a(function() {
                Object.keys("foo")
            })) {
            var Tt = Object.keys;
            J(Object, "keys", function(e) {
                return Tt(ne.ToObject(e))
            }), o = Object.keys
        }
        if (a(function() {
                Object.keys(/a/g)
            })) {
            var xt = Object.keys;
            J(Object, "keys", function(e) {
                if (X.regex(e)) {
                    var t = [];
                    for (var n in e) H(e, n) && I(t, n);
                    return t
                }
                return xt(e)
            }), o = Object.keys
        }
        if (Object.getOwnPropertyNames) {
            if (!!a(function() {
                    Object.getOwnPropertyNames("foo")
                })) {
                var St = "object" == typeof window ? Object.getOwnPropertyNames(window) : [],
                    Ot = Object.getOwnPropertyNames;
                J(Object, "getOwnPropertyNames", function(e) {
                    var t = ne.ToObject(e);
                    if ("[object Window]" === y(t)) try {
                        return Ot(t)
                    } catch (e) {
                        return k([], St)
                    }
                    return Ot(t)
                })
            }
        }
        if (Object.getOwnPropertyDescriptor) {
            if (!!a(function() {
                    Object.getOwnPropertyDescriptor("foo", "bar")
                })) {
                var Et = Object.getOwnPropertyDescriptor;
                J(Object, "getOwnPropertyDescriptor", function(e, t) {
                    return Et(ne.ToObject(e), t)
                })
            }
        }
        if (Object.seal) {
            if (!!a(function() {
                    Object.seal("foo")
                })) {
                var Mt = Object.seal;
                J(Object, "seal", function(e) {
                    return ne.TypeIsObject(e) ? Mt(e) : e
                })
            }
        }
        if (Object.isSealed) {
            if (!!a(function() {
                    Object.isSealed("foo")
                })) {
                var kt = Object.isSealed;
                J(Object, "isSealed", function(e) {
                    return !ne.TypeIsObject(e) || kt(e)
                })
            }
        }
        if (Object.freeze) {
            if (!!a(function() {
                    Object.freeze("foo")
                })) {
                var jt = Object.freeze;
                J(Object, "freeze", function(e) {
                    return ne.TypeIsObject(e) ? jt(e) : e
                })
            }
        }
        if (Object.isFrozen) {
            if (!!a(function() {
                    Object.isFrozen("foo")
                })) {
                var It = Object.isFrozen;
                J(Object, "isFrozen", function(e) {
                    return !ne.TypeIsObject(e) || It(e)
                })
            }
        }
        if (Object.preventExtensions) {
            if (!!a(function() {
                    Object.preventExtensions("foo")
                })) {
                var Nt = Object.preventExtensions;
                J(Object, "preventExtensions", function(e) {
                    return ne.TypeIsObject(e) ? Nt(e) : e
                })
            }
        }
        if (Object.isExtensible) {
            if (!!a(function() {
                    Object.isExtensible("foo")
                })) {
                var Pt = Object.isExtensible;
                J(Object, "isExtensible", function(e) {
                    return !!ne.TypeIsObject(e) && Pt(e)
                })
            }
        }
        if (Object.getPrototypeOf) {
            if (!!a(function() {
                    Object.getPrototypeOf("foo")
                })) {
                var At = Object.getPrototypeOf;
                J(Object, "getPrototypeOf", function(e) {
                    return At(ne.ToObject(e))
                })
            }
        }
        var _t = u && function() {
            var e = Object.getOwnPropertyDescriptor(RegExp.prototype, "flags");
            return e && ne.IsCallable(e.get)
        }();
        if (u && !_t) {
            var Lt = function() {
                if (!ne.TypeIsObject(this)) throw new TypeError("Method called on incompatible type: must be an object.");
                var e = "";
                return this.global && (e += "g"), this.ignoreCase && (e += "i"), this.multiline && (e += "m"), this.unicode && (e += "u"), this.sticky && (e += "y"), e
            };
            w.getter(RegExp.prototype, "flags", Lt)
        }
        var Dt = u && s(function() {
                return "/a/i" === String(new RegExp(/a/g, "i"))
            }),
            Rt = Y && u && function() {
                var e = /./;
                return e[F.match] = !1, RegExp(e) === e
            }(),
            Vt = s(function() {
                return "/abc/" === RegExp.prototype.toString.call({
                    source: "abc"
                })
            }),
            zt = Vt && s(function() {
                return "/a/b" === RegExp.prototype.toString.call({
                    source: "a",
                    flags: "b"
                })
            });
        if (!Vt || !zt) {
            var Ht = RegExp.prototype.toString;
            m(RegExp.prototype, "toString", function() {
                var e = ne.RequireObjectCoercible(this);
                return X.regex(e) ? n(Ht, e) : "/" + te(e.source) + "/" + te(e.flags)
            }, !0), w.preserveToString(RegExp.prototype.toString, Ht)
        }
        if (u && (!Dt || Rt)) {
            var $t = Object.getOwnPropertyDescriptor(RegExp.prototype, "flags").get,
                Ft = Object.getOwnPropertyDescriptor(RegExp.prototype, "source") || {},
                Bt = function() {
                    return this.source
                },
                qt = ne.IsCallable(Ft.get) ? Ft.get : Bt,
                Wt = RegExp,
                Ut = function() {
                    return function e(t, n) {
                        var r = ne.IsRegExp(t);
                        if (!(this instanceof e) && r && void 0 === n && t.constructor === e) return t;
                        var o = t,
                            i = n;
                        return X.regex(t) ? (o = ne.Call(qt, t), i = void 0 === n ? ne.Call($t, t) : n, new e(o, i)) : (r && (o = t.source, i = void 0 === n ? t.flags : n), new Wt(t, n))
                    }
                }();
            ye(Wt, Ut, {
                $input: !0
            }), RegExp = Ut, w.redefine(S, "RegExp", Ut)
        }
        if (u) {
            var Gt = {
                input: "$_",
                lastMatch: "$&",
                lastParen: "$+",
                leftContext: "$`",
                rightContext: "$'"
            };
            f(o(Gt), function(e) {
                e in RegExp && !(Gt[e] in RegExp) && w.getter(RegExp, Gt[e], function() {
                    return RegExp[e]
                })
            })
        }
        we(RegExp);
        var Kt = 1 / Number.EPSILON,
            Qt = function(e) {
                return e + Kt - Kt
            },
            Xt = Math.pow(2, -23),
            Jt = Math.pow(2, 127) * (2 - Xt),
            Yt = Math.pow(2, -126),
            Zt = Math.E,
            en = Math.LOG2E,
            tn = Math.LOG10E,
            nn = Number.prototype.clz;
        delete Number.prototype.clz;
        var rn = {
            acosh: function(e) {
                var t = Number(e);
                return q(t) || e < 1 ? NaN : 1 === t ? 0 : t === Infinity ? t : V(t / Zt + z(t + 1) * z(t - 1) / Zt) + 1
            },
            asinh: function e(t) {
                var n = Number(t);
                return 0 !== n && O(n) ? n < 0 ? -e(-n) : V(n + z(n * n + 1)) : n
            },
            atanh: function(e) {
                var t = Number(e);
                return q(t) || t < -1 || t > 1 ? NaN : -1 === t ? -Infinity : 1 === t ? Infinity : 0 === t ? t : .5 * V((1 + t) / (1 - t))
            },
            cbrt: function(e) {
                var t = Number(e);
                if (0 === t) return t;
                var n, r = t < 0;
                return r && (t = -t), t === Infinity ? n = Infinity : (n = R(V(t) / 3), n = (t / (n * n) + 2 * n) / 3), r ? -n : n
            },
            clz32: function(e) {
                var t = Number(e),
                    n = ne.ToUint32(t);
                return 0 === n ? 32 : nn ? ne.Call(nn, n) : 31 - L(V(n + .5) * en)
            },
            cosh: function(e) {
                var t = Number(e);
                return 0 === t ? 1 : q(t) ? NaN : O(t) ? (t < 0 && (t = -t), t > 21 ? R(t) / 2 : (R(t) + R(-t)) / 2) : Infinity
            },
            expm1: function(e) {
                var t = Number(e);
                if (t === -Infinity) return -1;
                if (!O(t) || 0 === t) return t;
                if (D(t) > .5) return R(t) - 1;
                for (var n = t, r = 0, o = 1; r + n !== r;) r += n, o += 1, n *= t / o;
                return r
            },
            hypot: function() {
                for (var e = 0, t = 0, n = 0; n < arguments.length; ++n) {
                    var r = D(Number(arguments[n]));
                    t < r ? (e *= t / r * (t / r), e += 1, t = r) : e += r > 0 ? r / t * (r / t) : r
                }
                return t === Infinity ? Infinity : t * z(e)
            },
            log2: function(e) {
                return V(e) * en
            },
            log10: function(e) {
                return V(e) * tn
            },
            log1p: function(e) {
                var t = Number(e);
                return t < -1 || q(t) ? NaN : 0 === t || t === Infinity ? t : -1 === t ? -Infinity : 1 + t - 1 == 0 ? t : t * (V(1 + t) / (1 + t - 1))
            },
            sign: U,
            sinh: function(e) {
                var t = Number(e);
                return O(t) && 0 !== t ? D(t) < 1 ? (Math.expm1(t) - Math.expm1(-t)) / 2 : (R(t - 1) - R(-t - 1)) * Zt / 2 : t
            },
            tanh: function(e) {
                var t = Number(e);
                return q(t) || 0 === t ? t : t >= 20 ? 1 : t <= -20 ? -1 : (Math.expm1(t) - Math.expm1(-t)) / (R(t) + R(-t))
            },
            trunc: function(e) {
                var t = Number(e);
                return t < 0 ? -L(-t) : L(t)
            },
            imul: function(e, t) {
                var n = ne.ToUint32(e),
                    r = ne.ToUint32(t),
                    o = n >>> 16 & 65535,
                    i = 65535 & n,
                    a = r >>> 16 & 65535,
                    s = 65535 & r;
                return i * s + (o * s + i * a << 16 >>> 0) | 0
            },
            fround: function(e) {
                var t = Number(e);
                if (0 === t || t === Infinity || t === -Infinity || q(t)) return t;
                var n = U(t),
                    r = D(t);
                if (r < Yt) return n * Qt(r / Yt / Xt) * Yt * Xt;
                var o = (1 + Xt / Number.EPSILON) * r,
                    i = o - (o - r);
                return i > Jt || q(i) ? n * Infinity : n * i
            }
        };
        v(Math, rn), m(Math, "log1p", rn.log1p, -1e-17 !== Math.log1p(-1e-17)), m(Math, "asinh", rn.asinh, Math.asinh(-1e7) !== -Math.asinh(1e7)), m(Math, "tanh", rn.tanh, -2e-17 !== Math.tanh(-2e-17)), m(Math, "acosh", rn.acosh, Math.acosh(Number.MAX_VALUE) === Infinity), m(Math, "cbrt", rn.cbrt, Math.abs(1 - Math.cbrt(1e-300) / 1e-100) / Number.EPSILON > 8), m(Math, "sinh", rn.sinh, -2e-17 !== Math.sinh(-2e-17));
        var on = Math.expm1(10);
        m(Math, "expm1", rn.expm1, on > 22025.465794806718 || on < 22025.465794806718);
        var an = Math.round,
            sn = 0 === Math.round(.5 - Number.EPSILON / 4) && 1 === Math.round(Number.EPSILON / 3.99 - .5),
            ln = Kt + 1,
            cn = 2 * Kt - 1,
            un = [ln, cn].every(function(e) {
                return Math.round(e) === e
            });
        m(Math, "round", function(e) {
            var t = L(e),
                n = -1 === t ? -0 : t + 1;
            return e - t < .5 ? t : n
        }, !sn || !un), w.preserveToString(Math.round, an);
        var dn = Math.imul; - 5 !== Math.imul(4294967295, 5) && (Math.imul = rn.imul, w.preserveToString(Math.imul, dn)), 2 !== Math.imul.length && J(Math, "imul", function() {
            return ne.Call(dn, Math, arguments)
        });
        var fn = function() {
            var e = S.setTimeout;
            if ("function" == typeof e || "object" == typeof e) {
                ne.IsPromise = function(e) {
                    return !!ne.TypeIsObject(e) && "undefined" != typeof e._promise
                };
                var t, r = function(e) {
                    if (!ne.IsConstructor(e)) throw new TypeError("Bad promise constructor");
                    var t = this,
                        n = function(e, n) {
                            if (void 0 !== t.resolve || void 0 !== t.reject) throw new TypeError("Bad Promise implementation!");
                            t.resolve = e, t.reject = n
                        };
                    if (t.resolve = void 0, t.reject = void 0, t.promise = new e(n), !ne.IsCallable(t.resolve) || !ne.IsCallable(t.reject)) throw new TypeError("Bad promise constructor")
                };
                "undefined" != typeof window && ne.IsCallable(window.postMessage) && (t = function() {
                    var e = [],
                        t = "zero-timeout-message",
                        n = function(n) {
                            I(e, n), window.postMessage(t, "*")
                        },
                        r = function(n) {
                            if (n.source === window && n.data === t) {
                                if (n.stopPropagation(), 0 === e.length) return;
                                P(e)()
                            }
                        };
                    return window.addEventListener("message", r, !0), n
                });
                var o, i, a = function() {
                        var e = S.Promise,
                            t = e && e.resolve && e.resolve();
                        return t && function(e) {
                            return t.then(e)
                        }
                    },
                    s = ne.IsCallable(S.setImmediate) ? S.setImmediate : "object" == typeof process && process.nextTick ? process.nextTick : a() || (ne.IsCallable(t) ? t() : function(t) {
                        e(t, 0)
                    }),
                    l = function(e) {
                        return e
                    },
                    c = function(e) {
                        throw e
                    },
                    u = 0,
                    d = 1,
                    f = 2,
                    p = 0,
                    h = 1,
                    g = 2,
                    m = {},
                    y = function(e, t, n) {
                        s(function() {
                            b(e, t, n)
                        })
                    },
                    b = function(e, t, n) {
                        var r, o;
                        if (t === m) return e(n);
                        try {
                            r = e(n), o = t.resolve
                        } catch (e) {
                            r = e, o = t.reject
                        }
                        o(r)
                    },
                    w = function(e, t) {
                        var n = e._promise,
                            r = n.reactionLength;
                        if (r > 0 && (y(n.fulfillReactionHandler0, n.reactionCapability0, t), n.fulfillReactionHandler0 = void 0, n.rejectReactions0 = void 0, n.reactionCapability0 = void 0, r > 1))
                            for (var o = 1, i = 0; o < r; o++, i += 3) y(n[i + p], n[i + g], t), e[i + p] = void 0, e[i + h] = void 0, e[i + g] = void 0;
                        n.result = t, n.state = d, n.reactionLength = 0
                    },
                    C = function(e, t) {
                        var n = e._promise,
                            r = n.reactionLength;
                        if (r > 0 && (y(n.rejectReactionHandler0, n.reactionCapability0, t), n.fulfillReactionHandler0 = void 0, n.rejectReactions0 = void 0, n.reactionCapability0 = void 0, r > 1))
                            for (var o = 1, i = 0; o < r; o++, i += 3) y(n[i + h], n[i + g], t), e[i + p] = void 0, e[i + h] = void 0, e[i + g] = void 0;
                        n.result = t, n.state = f, n.reactionLength = 0
                    },
                    T = function(e) {
                        var t = !1;
                        return {
                            resolve: function(n) {
                                var r;
                                if (!t) {
                                    if (t = !0, n === e) return C(e, new TypeError("Self resolution"));
                                    if (!ne.TypeIsObject(n)) return w(e, n);
                                    try {
                                        r = n.then
                                    } catch (t) {
                                        return C(e, t)
                                    }
                                    if (!ne.IsCallable(r)) return w(e, n);
                                    s(function() {
                                        O(e, n, r)
                                    })
                                }
                            },
                            reject: function(n) {
                                if (!t) return t = !0, C(e, n)
                            }
                        }
                    },
                    x = function(e, t, r, o) {
                        e === i ? n(e, t, r, o, m) : n(e, t, r, o)
                    },
                    O = function(e, t, n) {
                        var r = T(e),
                            o = r.resolve,
                            i = r.reject;
                        try {
                            x(n, t, o, i)
                        } catch (e) {
                            i(e)
                        }
                    },
                    E = function() {
                        var e = function(t) {
                            if (!(this instanceof e)) throw new TypeError('Constructor Promise requires "new"');
                            if (this && this._promise) throw new TypeError("Bad construction");
                            if (!ne.IsCallable(t)) throw new TypeError("not a valid resolver");
                            var n = Se(this, e, o, {
                                    _promise: {
                                        result: void 0,
                                        state: u,
                                        reactionLength: 0,
                                        fulfillReactionHandler0: void 0,
                                        rejectReactionHandler0: void 0,
                                        reactionCapability0: void 0
                                    }
                                }),
                                r = T(n),
                                i = r.reject;
                            try {
                                t(r.resolve, i)
                            } catch (e) {
                                i(e)
                            }
                            return n
                        };
                        return e
                    }();
                o = E.prototype;
                var M = function(e, t, n, r) {
                        var o = !1;
                        return function(i) {
                            if (!o && (o = !0, t[e] = i, 0 == --r.count)) {
                                (0, n.resolve)(t)
                            }
                        }
                    },
                    k = function(e, t, n) {
                        for (var r, o, i = e.iterator, a = [], s = {
                                count: 1
                            }, l = 0;;) {
                            try {
                                if (!1 === (r = ne.IteratorStep(i))) {
                                    e.done = !0;
                                    break
                                }
                                o = r.value
                            } catch (t) {
                                throw e.done = !0, t
                            }
                            a[l] = void 0;
                            var c = t.resolve(o),
                                u = M(l, a, n, s);
                            s.count += 1, x(c.then, c, u, n.reject), l += 1
                        }
                        if (0 == --s.count) {
                            (0, n.resolve)(a)
                        }
                        return n.promise
                    },
                    j = function(e, t, n) {
                        for (var r, o, i, a = e.iterator;;) {
                            try {
                                if (!1 === (r = ne.IteratorStep(a))) {
                                    e.done = !0;
                                    break
                                }
                                o = r.value
                            } catch (t) {
                                throw e.done = !0, t
                            }
                            i = t.resolve(o), x(i.then, i, n.resolve, n.reject)
                        }
                        return n.promise
                    };
                return v(E, {
                    all: function(e) {
                        var t = this;
                        if (!ne.TypeIsObject(t)) throw new TypeError("Promise is not object");
                        var n, o, i = new r(t);
                        try {
                            return n = ne.GetIterator(e), o = {
                                iterator: n,
                                done: !1
                            }, k(o, t, i)
                        } catch (e) {
                            var a = e;
                            if (o && !o.done) try {
                                ne.IteratorClose(n, !0)
                            } catch (e) {
                                a = e
                            }
                            var s = i.reject;
                            return s(a), i.promise
                        }
                    },
                    race: function(e) {
                        var t = this;
                        if (!ne.TypeIsObject(t)) throw new TypeError("Promise is not object");
                        var n, o, i = new r(t);
                        try {
                            return n = ne.GetIterator(e), o = {
                                iterator: n,
                                done: !1
                            }, j(o, t, i)
                        } catch (e) {
                            var a = e;
                            if (o && !o.done) try {
                                ne.IteratorClose(n, !0)
                            } catch (e) {
                                a = e
                            }
                            var s = i.reject;
                            return s(a), i.promise
                        }
                    },
                    reject: function(e) {
                        var t = this;
                        if (!ne.TypeIsObject(t)) throw new TypeError("Bad promise constructor");
                        var n = new r(t);
                        return (0, n.reject)(e), n.promise
                    },
                    resolve: function(e) {
                        var t = this;
                        if (!ne.TypeIsObject(t)) throw new TypeError("Bad promise constructor");
                        if (ne.IsPromise(e)) {
                            var n = e.constructor;
                            if (n === t) return e
                        }
                        var o = new r(t);
                        return (0, o.resolve)(e), o.promise
                    }
                }), v(o, {
                    "catch": function(e) {
                        return this.then(null, e)
                    },
                    then: function(e, t) {
                        var n = this;
                        if (!ne.IsPromise(n)) throw new TypeError("not a promise");
                        var o, i = ne.SpeciesConstructor(n, E);
                        o = arguments.length > 2 && arguments[2] === m && i === E ? m : new r(i);
                        var a, s = ne.IsCallable(e) ? e : l,
                            v = ne.IsCallable(t) ? t : c,
                            b = n._promise;
                        if (b.state === u) {
                            if (0 === b.reactionLength) b.fulfillReactionHandler0 = s, b.rejectReactionHandler0 = v, b.reactionCapability0 = o;
                            else {
                                var w = 3 * (b.reactionLength - 1);
                                b[w + p] = s, b[w + h] = v, b[w + g] = o
                            }
                            b.reactionLength += 1
                        } else if (b.state === d) a = b.result, y(s, o, a);
                        else {
                            if (b.state !== f) throw new TypeError("unexpected Promise state");
                            a = b.result, y(v, o, a)
                        }
                        return o.promise
                    }
                }), m = new r(E), i = o.then, E
            }
        }();
        if (S.Promise && (delete S.Promise.accept, delete S.Promise.defer, delete S.Promise.prototype.chain), "function" == typeof fn) {
            v(S, {
                Promise: fn
            });
            var pn = T(S.Promise, function(e) {
                    return e.resolve(42).then(function() {}) instanceof e
                }),
                hn = !a(function() {
                    S.Promise.reject(42).then(null, 5).then(null, $)
                }),
                gn = a(function() {
                    S.Promise.call(3, $)
                }),
                mn = function(e) {
                    var t = e.resolve(5);
                    t.constructor = {};
                    var n = e.resolve(t);
                    try {
                        n.then(null, $).then(null, $)
                    } catch (e) {
                        return !0
                    }
                    return t === n
                }(S.Promise),
                vn = u && function() {
                    var e = 0,
                        t = Object.defineProperty({}, "then", {
                            get: function() {
                                e += 1
                            }
                        });
                    return Promise.resolve(t), 1 === e
                }(),
                yn = function e(t) {
                    var n = new Promise(t);
                    t(3, function() {}), this.then = n.then, this.constructor = e
                };
            yn.prototype = Promise.prototype, yn.all = Promise.all;
            var bn = s(function() {
                return !!yn.all([1, 2])
            });
            if (pn && hn && gn && !mn && vn && !bn || (Promise = fn, J(S, "Promise", fn)), 1 !== Promise.all.length) {
                var wn = Promise.all;
                J(Promise, "all", function() {
                    return ne.Call(wn, this, arguments)
                })
            }
            if (1 !== Promise.race.length) {
                var Cn = Promise.race;
                J(Promise, "race", function() {
                    return ne.Call(Cn, this, arguments)
                })
            }
            if (1 !== Promise.resolve.length) {
                var Tn = Promise.resolve;
                J(Promise, "resolve", function() {
                    return ne.Call(Tn, this, arguments)
                })
            }
            if (1 !== Promise.reject.length) {
                var xn = Promise.reject;
                J(Promise, "reject", function() {
                    return ne.Call(xn, this, arguments)
                })
            }
            mt(Promise, "all"), mt(Promise, "race"), mt(Promise, "resolve"), mt(Promise, "reject"), we(Promise)
        }
        var Sn = function(e) {
                var t = o(p(e, function(e, t) {
                    return e[t] = !0, e
                }, {}));
                return e.join(":") === t.join(":")
            },
            On = Sn(["z", "a", "bb"]),
            En = Sn(["z", 1, "a", "3", 2]);
        if (u) {
            var Mn = function(e) {
                    return On ? void 0 === e || null === e ? "^" + ne.ToString(e) : "string" == typeof e ? "$" + e : "number" == typeof e ? En ? e : "n" + e : "boolean" == typeof e ? "b" + e : null : null
                },
                kn = function() {
                    return Object.create ? Object.create(null) : {}
                },
                jn = function(e, t, o) {
                    if (r(o) || X.string(o)) f(o, function(e) {
                        if (!ne.TypeIsObject(e)) throw new TypeError("Iterator value " + e + " is not an entry object");
                        t.set(e[0], e[1])
                    });
                    else if (o instanceof e) n(e.prototype.forEach, o, function(e, n) {
                        t.set(n, e)
                    });
                    else {
                        var i, a;
                        if (null !== o && void 0 !== o) {
                            if (a = t.set, !ne.IsCallable(a)) throw new TypeError("bad map");
                            i = ne.GetIterator(o)
                        }
                        if (void 0 !== i)
                            for (;;) {
                                var s = ne.IteratorStep(i);
                                if (!1 === s) break;
                                var l = s.value;
                                try {
                                    if (!ne.TypeIsObject(l)) throw new TypeError("Iterator value " + l + " is not an entry object");
                                    n(a, t, l[0], l[1])
                                } catch (e) {
                                    throw ne.IteratorClose(i, !0), e
                                }
                            }
                    }
                },
                In = function(e, t, o) {
                    if (r(o) || X.string(o)) f(o, function(e) {
                        t.add(e)
                    });
                    else if (o instanceof e) n(e.prototype.forEach, o, function(e) {
                        t.add(e)
                    });
                    else {
                        var i, a;
                        if (null !== o && void 0 !== o) {
                            if (a = t.add, !ne.IsCallable(a)) throw new TypeError("bad set");
                            i = ne.GetIterator(o)
                        }
                        if (void 0 !== i)
                            for (;;) {
                                var s = ne.IteratorStep(i);
                                if (!1 === s) break;
                                var l = s.value;
                                try {
                                    n(a, t, l)
                                } catch (e) {
                                    throw ne.IteratorClose(i, !0), e
                                }
                            }
                    }
                },
                Nn = {
                    Map: function() {
                        var e = {},
                            t = function(e, t) {
                                this.key = e, this.value = t, this.next = null, this.prev = null
                            };
                        t.prototype.isRemoved = function() {
                            return this.key === e
                        };
                        var r = function(e) {
                                return !!e._es6map
                            },
                            o = function(e, t) {
                                if (!ne.TypeIsObject(e) || !r(e)) throw new TypeError("Method Map.prototype." + t + " called on incompatible receiver " + ne.ToString(e))
                            },
                            i = function(e, t) {
                                o(e, "[[MapIterator]]"), this.head = e._head, this.i = this.head, this.kind = t
                            };
                        i.prototype = {
                            next: function() {
                                var e = this.i,
                                    t = this.kind,
                                    n = this.head;
                                if ("undefined" == typeof this.i) return ze();
                                for (; e.isRemoved() && e !== n;) e = e.prev;
                                for (var r; e.next !== n;)
                                    if (e = e.next, !e.isRemoved()) return r = "key" === t ? e.key : "value" === t ? e.value : [e.key, e.value], this.i = e, ze(r);
                                return this.i = void 0, ze()
                            }
                        }, Ce(i.prototype);
                        var a, s = function e() {
                            if (!(this instanceof e)) throw new TypeError('Constructor Map requires "new"');
                            if (this && this._es6map) throw new TypeError("Bad construction");
                            var n = Se(this, e, a, {
                                    _es6map: !0,
                                    _head: null,
                                    _storage: kn(),
                                    _size: 0
                                }),
                                r = new t(null, null);
                            return r.next = r.prev = r, n._head = r, arguments.length > 0 && jn(e, n, arguments[0]), n
                        };
                        return a = s.prototype, w.getter(a, "size", function() {
                            if ("undefined" == typeof this._size) throw new TypeError("size method called on incompatible Map");
                            return this._size
                        }), v(a, {
                            get: function(e) {
                                o(this, "get");
                                var t = Mn(e);
                                if (null !== t) {
                                    var n = this._storage[t];
                                    return n ? n.value : void 0
                                }
                                for (var r = this._head, i = r;
                                    (i = i.next) !== r;)
                                    if (ne.SameValueZero(i.key, e)) return i.value
                            },
                            has: function(e) {
                                o(this, "has");
                                var t = Mn(e);
                                if (null !== t) return "undefined" != typeof this._storage[t];
                                for (var n = this._head, r = n;
                                    (r = r.next) !== n;)
                                    if (ne.SameValueZero(r.key, e)) return !0;
                                return !1
                            },
                            set: function(e, n) {
                                o(this, "set");
                                var r, i = this._head,
                                    a = i,
                                    s = Mn(e);
                                if (null !== s) {
                                    if ("undefined" != typeof this._storage[s]) return this._storage[s].value = n, this;
                                    r = this._storage[s] = new t(e, n), a = i.prev
                                }
                                for (;
                                    (a = a.next) !== i;)
                                    if (ne.SameValueZero(a.key, e)) return a.value = n, this;
                                return r = r || new t(e, n), ne.SameValue(-0, e) && (r.key = 0), r.next = this._head, r.prev = this._head.prev, r.prev.next = r, r.next.prev = r, this._size += 1, this
                            },
                            "delete": function(t) {
                                o(this, "delete");
                                var n = this._head,
                                    r = n,
                                    i = Mn(t);
                                if (null !== i) {
                                    if ("undefined" == typeof this._storage[i]) return !1;
                                    r = this._storage[i].prev, delete this._storage[i]
                                }
                                for (;
                                    (r = r.next) !== n;)
                                    if (ne.SameValueZero(r.key, t)) return r.key = r.value = e, r.prev.next = r.next, r.next.prev = r.prev, this._size -= 1, !0;
                                return !1
                            },
                            clear: function() {
                                o(this, "clear"), this._size = 0, this._storage = kn();
                                for (var t = this._head, n = t, r = n.next;
                                    (n = r) !== t;) n.key = n.value = e, r = n.next, n.next = n.prev = t;
                                t.next = t.prev = t
                            },
                            keys: function() {
                                return o(this, "keys"), new i(this, "key")
                            },
                            values: function() {
                                return o(this, "values"), new i(this, "value")
                            },
                            entries: function() {
                                return o(this, "entries"), new i(this, "key+value")
                            },
                            forEach: function(e) {
                                o(this, "forEach");
                                for (var t = arguments.length > 1 ? arguments[1] : null, r = this.entries(), i = r.next(); !i.done; i = r.next()) t ? n(e, t, i.value[1], i.value[0], this) : e(i.value[1], i.value[0], this)
                            }
                        }), Ce(a, a.entries), s
                    }(),
                    Set: function() {
                        var e, t = function(e) {
                                return e._es6set && "undefined" != typeof e._storage
                            },
                            r = function(e, n) {
                                if (!ne.TypeIsObject(e) || !t(e)) throw new TypeError("Set.prototype." + n + " called on incompatible receiver " + ne.ToString(e))
                            },
                            i = function t() {
                                if (!(this instanceof t)) throw new TypeError('Constructor Set requires "new"');
                                if (this && this._es6set) throw new TypeError("Bad construction");
                                var n = Se(this, t, e, {
                                    _es6set: !0,
                                    "[[SetData]]": null,
                                    _storage: kn()
                                });
                                if (!n._es6set) throw new TypeError("bad set");
                                return arguments.length > 0 && In(t, n, arguments[0]), n
                            };
                        e = i.prototype;
                        var a = function(e) {
                                var t = e;
                                if ("^null" === t) return null;
                                if ("^undefined" !== t) {
                                    var n = t.charAt(0);
                                    return "$" === n ? j(t, 1) : "n" === n ? +j(t, 1) : "b" === n ? "btrue" === t : +t
                                }
                            },
                            s = function(e) {
                                if (!e["[[SetData]]"]) {
                                    var t = e["[[SetData]]"] = new Nn.Map;
                                    f(o(e._storage), function(e) {
                                        var n = a(e);
                                        t.set(n, n)
                                    }), e["[[SetData]]"] = t
                                }
                                e._storage = null
                            };
                        return w.getter(i.prototype, "size", function() {
                            return r(this, "size"), this._storage ? o(this._storage).length : (s(this), this["[[SetData]]"].size)
                        }), v(i.prototype, {
                            has: function(e) {
                                r(this, "has");
                                var t;
                                return this._storage && null !== (t = Mn(e)) ? !!this._storage[t] : (s(this), this["[[SetData]]"].has(e))
                            },
                            add: function(e) {
                                r(this, "add");
                                var t;
                                return this._storage && null !== (t = Mn(e)) ? (this._storage[t] = !0, this) : (s(this), this["[[SetData]]"].set(e, e), this)
                            },
                            "delete": function(e) {
                                r(this, "delete");
                                var t;
                                if (this._storage && null !== (t = Mn(e))) {
                                    var n = H(this._storage, t);
                                    return delete this._storage[t] && n
                                }
                                return s(this), this["[[SetData]]"]["delete"](e)
                            },
                            clear: function() {
                                r(this, "clear"), this._storage && (this._storage = kn()), this["[[SetData]]"] && this["[[SetData]]"].clear()
                            },
                            values: function() {
                                return r(this, "values"), s(this), this["[[SetData]]"].values()
                            },
                            entries: function() {
                                return r(this, "entries"), s(this), this["[[SetData]]"].entries()
                            },
                            forEach: function(e) {
                                r(this, "forEach");
                                var t = arguments.length > 1 ? arguments[1] : null,
                                    o = this;
                                s(o), this["[[SetData]]"].forEach(function(r, i) {
                                    t ? n(e, t, i, i, o) : e(i, i, o)
                                })
                            }
                        }), m(i.prototype, "keys", i.prototype.values, !0), Ce(i.prototype, i.prototype.values), i
                    }()
                };
            if (S.Map || S.Set) {
                if (!s(function() {
                        return 2 === new Map([
                            [1, 2]
                        ]).get(1)
                    })) {
                    var Pn = S.Map;
                    S.Map = function e() {
                        if (!(this instanceof e)) throw new TypeError('Constructor Map requires "new"');
                        var t = new Pn;
                        return arguments.length > 0 && jn(e, t, arguments[0]), delete t.constructor, Object.setPrototypeOf(t, S.Map.prototype), t
                    }, S.Map.prototype = C(Pn.prototype), m(S.Map.prototype, "constructor", S.Map, !0), w.preserveToString(S.Map, Pn)
                }
                var An = new Map,
                    _n = function() {
                        var e = new Map([
                            [1, 0],
                            [2, 0],
                            [3, 0],
                            [4, 0]
                        ]);
                        return e.set(-0, e), e.get(0) === e && e.get(-0) === e && e.has(0) && e.has(-0)
                    }(),
                    Ln = An.set(1, 2) === An;
                if (!_n || !Ln) {
                    var Dn = Map.prototype.set;
                    J(Map.prototype, "set", function(e, t) {
                        return n(Dn, this, 0 === e ? 0 : e, t), this
                    })
                }
                if (!_n) {
                    var Rn = Map.prototype.get,
                        Vn = Map.prototype.has;
                    v(Map.prototype, {
                        get: function(e) {
                            return n(Rn, this, 0 === e ? 0 : e)
                        },
                        has: function(e) {
                            return n(Vn, this, 0 === e ? 0 : e)
                        }
                    }, !0), w.preserveToString(Map.prototype.get, Rn), w.preserveToString(Map.prototype.has, Vn)
                }
                var zn = new Set,
                    Hn = function(e) {
                        return e["delete"](0), e.add(-0), !e.has(0)
                    }(zn),
                    $n = zn.add(1) === zn;
                if (!Hn || !$n) {
                    var Fn = Set.prototype.add;
                    Set.prototype.add = function(e) {
                        return n(Fn, this, 0 === e ? 0 : e), this
                    }, w.preserveToString(Set.prototype.add, Fn)
                }
                if (!Hn) {
                    var Bn = Set.prototype.has;
                    Set.prototype.has = function(e) {
                        return n(Bn, this, 0 === e ? 0 : e)
                    }, w.preserveToString(Set.prototype.has, Bn);
                    var qn = Set.prototype["delete"];
                    Set.prototype["delete"] = function(e) {
                        return n(qn, this, 0 === e ? 0 : e)
                    }, w.preserveToString(Set.prototype["delete"], qn)
                }
                var Wn = T(S.Map, function(e) {
                        var t = new e([]);
                        return t.set(42, 42), t instanceof e
                    }),
                    Un = Object.setPrototypeOf && !Wn,
                    Gn = function() {
                        try {
                            return !(S.Map() instanceof S.Map)
                        } catch (e) {
                            return e instanceof TypeError
                        }
                    }();
                if (0 !== S.Map.length || Un || !Gn) {
                    var Kn = S.Map;
                    S.Map = function e() {
                        if (!(this instanceof e)) throw new TypeError('Constructor Map requires "new"');
                        var t = new Kn;
                        return arguments.length > 0 && jn(e, t, arguments[0]), delete t.constructor, Object.setPrototypeOf(t, e.prototype), t
                    }, S.Map.prototype = Kn.prototype, m(S.Map.prototype, "constructor", S.Map, !0), w.preserveToString(S.Map, Kn)
                }
                var Qn = T(S.Set, function(e) {
                        var t = new e([]);
                        return t.add(42, 42), t instanceof e
                    }),
                    Xn = Object.setPrototypeOf && !Qn,
                    Jn = function() {
                        try {
                            return !(S.Set() instanceof S.Set)
                        } catch (e) {
                            return e instanceof TypeError
                        }
                    }();
                if (0 !== S.Set.length || Xn || !Jn) {
                    var Yn = S.Set;
                    S.Set = function e() {
                        if (!(this instanceof e)) throw new TypeError('Constructor Set requires "new"');
                        var t = new Yn;
                        return arguments.length > 0 && In(e, t, arguments[0]), delete t.constructor, Object.setPrototypeOf(t, e.prototype), t
                    }, S.Set.prototype = Yn.prototype, m(S.Set.prototype, "constructor", S.Set, !0), w.preserveToString(S.Set, Yn)
                }
                var Zn = new S.Map,
                    er = !s(function() {
                        return Zn.keys().next().done
                    });
                if (("function" != typeof S.Map.prototype.clear || 0 !== (new S.Set).size || 0 !== Zn.size || "function" != typeof S.Map.prototype.keys || "function" != typeof S.Set.prototype.keys || "function" != typeof S.Map.prototype.forEach || "function" != typeof S.Set.prototype.forEach || l(S.Map) || l(S.Set) || "function" != typeof Zn.keys().next || er || !Wn) && v(S, {
                        Map: Nn.Map,
                        Set: Nn.Set
                    }, !0), S.Set.prototype.keys !== S.Set.prototype.values && m(S.Set.prototype, "keys", S.Set.prototype.values, !0), Ce(Object.getPrototypeOf((new S.Map).keys())), Ce(Object.getPrototypeOf((new S.Set).keys())), d && "has" !== S.Set.prototype.has.name) {
                    var tr = S.Set.prototype.has;
                    J(S.Set.prototype, "has", function(e) {
                        return n(tr, this, e)
                    })
                }
            }
            v(S, Nn), we(S.Map), we(S.Set)
        }
        var nr = function(e) {
                if (!ne.TypeIsObject(e)) throw new TypeError("target must be an object")
            },
            rr = {
                apply: function() {
                    return ne.Call(ne.Call, null, arguments)
                },
                construct: function(e, t) {
                    if (!ne.IsConstructor(e)) throw new TypeError("First argument must be a constructor.");
                    var n = arguments.length > 2 ? arguments[2] : e;
                    if (!ne.IsConstructor(n)) throw new TypeError("new.target must be a constructor.");
                    return ne.Construct(e, t, n, "internal")
                },
                deleteProperty: function(e, t) {
                    if (nr(e), u) {
                        var n = Object.getOwnPropertyDescriptor(e, t);
                        if (n && !n.configurable) return !1
                    }
                    return delete e[t]
                },
                has: function(e, t) {
                    return nr(e), t in e
                }
            };
        Object.getOwnPropertyNames && Object.assign(rr, {
            ownKeys: function(e) {
                nr(e);
                var t = Object.getOwnPropertyNames(e);
                return ne.IsCallable(Object.getOwnPropertySymbols) && N(t, Object.getOwnPropertySymbols(e)), t
            }
        });
        var or = function(e) {
            return !a(e)
        };
        if (Object.preventExtensions && Object.assign(rr, {
                isExtensible: function(e) {
                    return nr(e), Object.isExtensible(e)
                },
                preventExtensions: function(e) {
                    return nr(e), or(function() {
                        Object.preventExtensions(e)
                    })
                }
            }), u) {
            var ir = function(e, t, n) {
                    var r = Object.getOwnPropertyDescriptor(e, t);
                    if (!r) {
                        var o = Object.getPrototypeOf(e);
                        if (null === o) return;
                        return ir(o, t, n)
                    }
                    return "value" in r ? r.value : r.get ? ne.Call(r.get, n) : void 0
                },
                ar = function(e, t, r, o) {
                    var i = Object.getOwnPropertyDescriptor(e, t);
                    if (!i) {
                        var a = Object.getPrototypeOf(e);
                        if (null !== a) return ar(a, t, r, o);
                        i = {
                            value: void 0,
                            writable: !0,
                            enumerable: !0,
                            configurable: !0
                        }
                    }
                    if ("value" in i) {
                        if (!i.writable) return !1;
                        if (!ne.TypeIsObject(o)) return !1;
                        return Object.getOwnPropertyDescriptor(o, t) ? ee.defineProperty(o, t, {
                            value: r
                        }) : ee.defineProperty(o, t, {
                            value: r,
                            writable: !0,
                            enumerable: !0,
                            configurable: !0
                        })
                    }
                    return !!i.set && (n(i.set, o, r), !0)
                };
            Object.assign(rr, {
                defineProperty: function(e, t, n) {
                    return nr(e), or(function() {
                        Object.defineProperty(e, t, n)
                    })
                },
                getOwnPropertyDescriptor: function(e, t) {
                    return nr(e), Object.getOwnPropertyDescriptor(e, t)
                },
                get: function(e, t) {
                    nr(e);
                    var n = arguments.length > 2 ? arguments[2] : e;
                    return ir(e, t, n)
                },
                set: function(e, t, n) {
                    nr(e);
                    var r = arguments.length > 3 ? arguments[3] : e;
                    return ar(e, t, n, r)
                }
            })
        }
        if (Object.getPrototypeOf) {
            var sr = Object.getPrototypeOf;
            rr.getPrototypeOf = function(e) {
                return nr(e), sr(e)
            }
        }
        if (Object.setPrototypeOf && rr.getPrototypeOf) {
            var lr = function(e, t) {
                for (var n = t; n;) {
                    if (e === n) return !0;
                    n = rr.getPrototypeOf(n)
                }
                return !1
            };
            Object.assign(rr, {
                setPrototypeOf: function(e, t) {
                    if (nr(e), null !== t && !ne.TypeIsObject(t)) throw new TypeError("proto must be an object or null");
                    return t === ee.getPrototypeOf(e) || !(ee.isExtensible && !ee.isExtensible(e)) && (!lr(e, t) && (Object.setPrototypeOf(e, t), !0))
                }
            })
        }
        var cr = function(e, t) {
            if (ne.IsCallable(S.Reflect[e])) {
                s(function() {
                    return S.Reflect[e](1), S.Reflect[e](NaN), S.Reflect[e](!0), !0
                }) && J(S.Reflect, e, t)
            } else m(S.Reflect, e, t)
        };
        Object.keys(rr).forEach(function(e) {
            cr(e, rr[e])
        });
        var ur = S.Reflect.getPrototypeOf;
        if (d && ur && "getPrototypeOf" !== ur.name && J(S.Reflect, "getPrototypeOf", function(e) {
                return n(ur, S.Reflect, e)
            }), S.Reflect.setPrototypeOf && s(function() {
                return S.Reflect.setPrototypeOf(1, {}), !0
            }) && J(S.Reflect, "setPrototypeOf", rr.setPrototypeOf), S.Reflect.defineProperty && (s(function() {
                var e = !S.Reflect.defineProperty(1, "test", {
                        value: 1
                    }),
                    t = "function" != typeof Object.preventExtensions || !S.Reflect.defineProperty(Object.preventExtensions({}), "test", {});
                return e && t
            }) || J(S.Reflect, "defineProperty", rr.defineProperty)), S.Reflect.construct && (s(function() {
                var e = function() {};
                return S.Reflect.construct(function() {}, [], e) instanceof e
            }) || J(S.Reflect, "construct", rr.construct)), "Invalid Date" !== String(new Date(NaN))) {
            var dr = Date.prototype.toString,
                fr = function() {
                    var e = +this;
                    return e !== e ? "Invalid Date" : ne.Call(dr, this)
                };
            J(Date.prototype, "toString", fr)
        }
        var pr = {
            anchor: function(e) {
                return ne.CreateHTML(this, "a", "name", e)
            },
            big: function() {
                return ne.CreateHTML(this, "big", "", "")
            },
            blink: function() {
                return ne.CreateHTML(this, "blink", "", "")
            },
            bold: function() {
                return ne.CreateHTML(this, "b", "", "")
            },
            fixed: function() {
                return ne.CreateHTML(this, "tt", "", "")
            },
            fontcolor: function(e) {
                return ne.CreateHTML(this, "font", "color", e)
            },
            fontsize: function(e) {
                return ne.CreateHTML(this, "font", "size", e)
            },
            italics: function() {
                return ne.CreateHTML(this, "i", "", "")
            },
            link: function(e) {
                return ne.CreateHTML(this, "a", "href", e)
            },
            small: function() {
                return ne.CreateHTML(this, "small", "", "")
            },
            strike: function() {
                return ne.CreateHTML(this, "strike", "", "")
            },
            sub: function() {
                return ne.CreateHTML(this, "sub", "", "")
            },
            sup: function() {
                return ne.CreateHTML(this, "sup", "", "")
            }
        };
        f(Object.keys(pr), function(e) {
            var t = String.prototype[e],
                r = !1;
            if (ne.IsCallable(t)) {
                var o = n(t, "", ' " '),
                    i = k([], o.match(/"/g)).length;
                r = o !== o.toLowerCase() || i > 2
            } else r = !0;
            r && J(String.prototype, e, pr[e])
        });
        var hr = function() {
                if (!Y) return !1;
                var e = "object" == typeof JSON && "function" == typeof JSON.stringify ? JSON.stringify : null;
                if (!e) return !1;
                if (void 0 !== e(F())) return !0;
                if ("[null]" !== e([F()])) return !0;
                var t = {
                    a: F()
                };
                return t[F()] = !0, "{}" !== e(t)
            }(),
            gr = s(function() {
                return !Y || "{}" === JSON.stringify(Object(F())) && "[{}]" === JSON.stringify([Object(F())])
            });
        if (hr || !gr) {
            var mr = JSON.stringify;
            J(JSON, "stringify", function(e) {
                if ("symbol" != typeof e) {
                    var t;
                    arguments.length > 1 && (t = arguments[1]);
                    var o = [e];
                    if (r(t)) o.push(t);
                    else {
                        var i = ne.IsCallable(t) ? t : null,
                            a = function(e, t) {
                                var r = i ? n(i, this, e, t) : t;
                                if ("symbol" != typeof r) return X.symbol(r) ? yt({})(r) : r
                            };
                        o.push(a)
                    }
                    return arguments.length > 2 && o.push(arguments[2]), mr.apply(this, o)
                }
            })
        }
        return S
    }), Array.prototype.find || (Array.prototype.find = function(e, t) {
        "use strict";
        if (null == this) throw new TypeError("Array.prototype.find called on null or undefined");
        if ("function" != typeof e) throw new TypeError("predicate must be a function");
        for (var n, r = Object(this), o = r.length >>> 0, i = 0; i < o; i++)
            if (n = r[i], e.call(t, n, i, r)) return n;
        return undefined
    }), Array.prototype.includes || (Array.prototype.includes = function(e, t) {
        if (null == this) throw new TypeError("Array.prototype.includes called on null or undefined");
        var n = this,
            r = parseInt(n.length, 10) || 0;
        if (0 === r) return !1;
        var o, i = parseInt(t, 10) || 0;
        i >= 0 ? o = i : (o = r + i) < 0 && (o = 0);
        for (var a; o < r;) {
            if (a = n[o], e === a || e !== e && a !== a) return !0;
            o++
        }
        return !1
    }), Array.prototype.findIndex || (Array.prototype.findIndex = function(e, t) {
        if (null == this) throw new TypeError("Array.prototype.findIndex called on null or undefined");
        if ("function" != typeof e) throw new TypeError("predicate must be a function");
        for (var n, r = this, o = r.length >>> 0, i = 0; i < o; i++)
            if (n = r[i], e.call(t, n, i, r)) return i;
        return -1
    }),
    function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.provider = t() : (e.EmbeddedContent = e.EmbeddedContent || {}, e.EmbeddedContent.provider = t())
    }(this, function() {
        return function(e) {
            function t(r) {
                if (n[r]) return n[r].exports;
                var o = n[r] = {
                    exports: {},
                    id: r,
                    loaded: !1
                };
                return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
            }
            var n = {};
            return t.m = e, t.c = n, t.p = "", t(0)
        }({
            0: function(e, t, n) {
                n(1), e.exports = n(95)
            },
            1: function(e, t) {
                var n, r;
                ! function(o, i) {
                    function a(e) {
                        return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
                            return "%" + e.charCodeAt(0).toString(16)
                        })
                    }

                    function s(e) {
                        var t, n = e || {};
                        if (!1 !== n.onError && w.setUpOnErrorHandler(), !1 !== n.wrapEvents && w.setUpEventListening(), n.appenders)
                            for (t = 0; t < n.appenders.length; t++) w.addAppender(n.appenders[t]);
                        if (n.handlers)
                            for (t = 0; t < n.handlers.length; t++) w.addHandler(n.handlers[t]);
                        n.logLevel && (w.loggingLevel = n.logLevel)
                    }

                    function l(e) {
                        T.push(e)
                    }

                    function c(e) {
                        x.push(e)
                    }

                    function u(e, t, n, r, o) {
                        var i, a, s, l, c = {},
                            u = o || T;
                        for (s = 0; s < u.length; s++) {
                            i = u[s], a = i(e, t, n, r);
                            for (l in a) a.hasOwnProperty(l) && (c[l] = a[l])
                        }
                        return c
                    }

                    function d(e, t) {
                        var n, r = t || x;
                        for (n = 0; n < r.length; n++)(0, r[n])(e)
                    }

                    function f(e) {
                        return function(t, n, r, o) {
                            if (!(w.levelOrder.indexOf(e) < w.levelOrder.indexOf(w.loggingLevel))) {
                                var i = o || {};
                                d(u(e, n, t, r, i.appenders), i.handlers)
                            }
                        }
                    }

                    function p(e, t, n, r) {
                        function a(e) {
                            if (e === i || null === e) return {
                                url: w.constant.UNKNOWN_LOG,
                                lineNumber: w.constant.UNKNOWN_LOG,
                                columnNumber: w.constant.UNKNOWN_LOG
                            };
                            for (var t = e.replace(/(\r\n|\n|\r)/gm, "").match(T), n = [], r = null !== t && t !== i; r;) t = t[1].match(T), null !== t ? t[1] : null, n = null !== t ? t : n, r = null !== t && t !== i;
                            return {
                                url: n.length >= 1 ? n[1] : w.constant.UNKNOWN_LOG,
                                lineNumber: n.length >= 1 ? n[2] : w.constant.UNKNOWN_LOG,
                                columnNumber: n.length >= 1 ? n[3] : w.constant.UNKNOWN_LOG
                            }
                        }

                        function s(e) {
                            return e < 10 ? "0" + e : e
                        }
                        var l, c, u, d, f = t ? t.stack : (new Error).stack || null,
                            p = w.constant.UNKNOWN_LOG,
                            h = n || t.message || w.constant.UNKNOWN_LOG,
                            g = new Date,
                            m = o.location.href,
                            v = w.constant.UNKNOWN_LOG,
                            y = w.constant.UNKNOWN_LOG,
                            b = o.navigator.language || w.constant.UNKNOWN_LOG,
                            C = o.document.characterSet || o.document.charset || o.document.defaultCharset || w.constant.UNKNOWN_LOG,
                            T = /(http\:\/\/.*\/.*\.js)\:(\d+)\:(\d+)(.*)$/;
                        if (d = g.toISOString ? g.toISOString() : function() {
                                return g.getUTCFullYear() + "-" + s(g.getUTCMonth() + 1) + "-" + s(g.getUTCDate()) + "T" + s(g.getUTCHours()) + ":" + s(g.getUTCMinutes()) + ":" + s(g.getUTCSeconds()) + "." + (g.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z"
                            }(), t === i || null === t || null === t.stack)
                            if ("function" == typeof o.document.getElementsByTagName) {
                                var x = o.document.getElementsByTagName("script");
                                p = (o.document.currentScript || x[x.length - 1]).src
                            } else p = w.constant.UNKNOWN_LOG;
                        else u = a(f), p = u.url, v = u.lineNumber, y = u.columnNumber;
                        l = {
                            characterSet: C,
                            columnNumber: y,
                            language: b,
                            lineNumber: v,
                            logDate: d,
                            msg: "[" + e + "]: " + h,
                            pageURL: m,
                            stack: f || w.constant.UNKNOWN_LOG,
                            type: "jserror",
                            scriptURL: p
                        };
                        for (c in r) r.hasOwnProperty(c) && null !== r[c] && r[c] !== i && (l[c] = r[c]);
                        return l
                    }

                    function h(e) {
                        return function(t) {
                            var n, r = [],
                                o = new Image;
                            for (n in t) t.hasOwnProperty(n) && r.push(n + "=" + w.utils.fixedEncodeURIComponent(t[n] + "\n"));
                            o.src = e + "?" + r.join("&")
                        }
                    }

                    function g(e) {
                        var t, n = "";
                        if (console)
                            if (o.attachEvent) {
                                for (t in e) e.hasOwnProperty(t) && (n += t + "=" + e[t] + "\n");
                                console.error(n)
                            } else "undefined" != typeof e.msg ? console.error(e.msg, e) : console.error(e)
                    }

                    function m(e, t, n) {
                        if (e && e._wrapper && (e._wrapper, !0)) return e._wrapper;
                        var r = function() {
                            try {
                                return e.apply(t || this, arguments)
                            } catch (e) {
                                w.error(e.message, e, i, n)
                            }
                        };
                        return e._wrapper = r, r
                    }

                    function v(e, t, n, r, o) {
                        var i;
                        return S && "function" == typeof S && (i = S.apply(this, arguments)), w.fatal(e, o, {
                            url: t,
                            lineNumber: n,
                            columnNumber: r
                        }), i
                    }

                    function y() {
                        o.onerror = v
                    }

                    function b() {
                        var e, t, n = [];
                        o.EventTarget ? (e = o.EventTarget.prototype.addEventListener, t = o.EventTarget.prototype.removeEventListener, o.EventTarget.prototype.addEventListener = function(t, n, r) {
                            return e.call(this, t, w.watch(n), r)
                        }, o.EventTarget.prototype.removeEventListener = function(e, n, r) {
                            return t.call(this, e, w.watch(n), r)
                        }) : o.Element && o.Element.prototype && o.Element.prototype.attachEvent && o.Element.prototype.addEventListener === i && (Event.prototype.preventDefault || (Event.prototype.preventDefault = function() {
                            this.returnValue = !1
                        }), Event.prototype.stopPropagation || (Event.prototype.stopPropagation = function() {
                            this.cancelBubble = !0
                        }), Element.prototype.addEventListener || (e = function(e, t) {
                            var r = this,
                                o = function(e) {
                                    e.target = e.srcElement, e.currentTarget = r, t.handleEvent ? t.handleEvent(e) : t.call(r, e)
                                };
                            "DOMContentLoaded" !== e && (this.attachEvent("on" + e, w.watch(o)), n.push({
                                object: this,
                                type: e,
                                listener: t,
                                wrapper: o
                            }))
                        }, t = function(e, t) {
                            for (var r, o = 0; o < n.length;) {
                                if (r = n[o], r.object == this && r.type === e && r.listener == t) {
                                    "DOMContentLoaded" !== e && this.detachEvent("on" + e, w.watch(r.wrapper)), n.splice(o, 1);
                                    break
                                }++o
                            }
                        }, Element.prototype.addEventListener = e, Element.prototype.removeEventListener = t))
                    }
                    var w = {};
                    w.Appender = {}, w.Handler = {}, w.constant = {}, w.utils = {}, w.version = "1.0.2", w.constant.UNKNOWN_LOG = "?";
                    var C = {
                        FATAL: "FATAL",
                        ERROR: "ERROR",
                        WARN: "WARN",
                        INFO: "INFO",
                        DEBUG: "DEBUG"
                    };
                    w.level = C, w.levelOrder = [C.DEBUG, C.INFO, C.WARN, C.ERROR, C.FATAL], "undefined" == typeof w.levelOrder.indexOf && (w.levelOrder.indexOf = function(e, t) {
                        var n;
                        if (null == this) throw new TypeError('"this" is null or not defined');
                        var r = Object(this),
                            o = r.length >>> 0;
                        if (0 === o) return -1;
                        var i = +t || 0;
                        if (Math.abs(i) === Infinity && (i = 0), i >= o) return -1;
                        for (n = Math.max(i >= 0 ? i : o - Math.abs(i), 0); n < o;) {
                            if (n in r && r[n] === e) return n;
                            n++
                        }
                        return -1
                    }), w.utils.fixedEncodeURIComponent = a;
                    var T = [],
                        x = [];
                    w.debug = f(w.level.DEBUG), w.info = f(w.level.INFO), w.warn = f(w.level.WARN), w.error = f(w.level.ERROR), w.fatal = f(w.level.FATAL), w.addHandler = c, w.addAppender = l, w.init = s, w.loggingLevel = w.level.DEBUG, w.Appender.standardLogAppender = p, w.Handler.beaconLogHandler = h, w.Handler.consoleLogHandler = g, w.watch = function(e, t) {
                        return m(e, t)
                    }, w.attempt = function(e, t) {
                        var n = Array.prototype.slice.call(arguments, 2);
                        return m(e, t)(n)
                    }, w.localWatch = function(e, t, n) {
                        return m(e, n, t)
                    }, w.localAttempt = function(e, t, n) {
                        var r = Array.prototype.slice.call(arguments, 3);
                        return m(e, n, t)(r)
                    };
                    var S = o.onerror;
                    w.setUpOnErrorHandler = y, w.setUpEventListening = b, o.navigator || (o.navigator = {}), o.location || (o.location = {}), o.document || (o.document = {}), o.navigator || (o.navigator = {}), w._window = o, o.Canadarm = w, n = [], (r = function() {
                        return w
                    }.apply(t, n)) !== i && (e.exports = r)
                }("undefined" != typeof window ? window : this)
            },
            30: function(e) {
                function t() {
                    throw new Error("setTimeout has not been defined")
                }

                function n() {
                    throw new Error("clearTimeout has not been defined")
                }

                function r(e) {
                    if (c === setTimeout) return setTimeout(e, 0);
                    if ((c === t || !c) && setTimeout) return c = setTimeout, setTimeout(e, 0);
                    try {
                        return c(e, 0)
                    } catch (t) {
                        try {
                            return c.call(null, e, 0)
                        } catch (t) {
                            return c.call(this, e, 0)
                        }
                    }
                }

                function o(e) {
                    if (u === clearTimeout) return clearTimeout(e);
                    if ((u === n || !u) && clearTimeout) return u = clearTimeout, clearTimeout(e);
                    try {
                        return u(e)
                    } catch (t) {
                        try {
                            return u.call(null, e)
                        } catch (t) {
                            return u.call(this, e)
                        }
                    }
                }

                function i() {
                    h && f && (h = !1, f.length ? p = f.concat(p) : g = -1, p.length && a())
                }

                function a() {
                    if (!h) {
                        var e = r(i);
                        h = !0;
                        for (var t = p.length; t;) {
                            for (f = p, p = []; ++g < t;) f && f[g].run();
                            g = -1, t = p.length
                        }
                        f = null, h = !1, o(e)
                    }
                }

                function s(e, t) {
                    this.fun = e, this.array = t
                }

                function l() {}
                var c, u, d = e.exports = {};
                ! function() {
                    try {
                        c = "function" == typeof setTimeout ? setTimeout : t
                    } catch (e) {
                        c = t
                    }
                    try {
                        u = "function" == typeof clearTimeout ? clearTimeout : n
                    } catch (e) {
                        u = n
                    }
                }();
                var f, p = [],
                    h = !1,
                    g = -1;
                d.nextTick = function(e) {
                    var t = new Array(arguments.length - 1);
                    if (arguments.length > 1)
                        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    p.push(new s(e, t)), 1 !== p.length || h || r(a)
                }, s.prototype.run = function() {
                    this.fun.apply(null, this.array)
                }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = l, d.addListener = l, d.once = l, d.off = l, d.removeListener = l, d.removeAllListeners = l, d.emit = l, d.prependListener = l, d.prependOnceListener = l, d.listeners = function() {
                    return []
                }, d.binding = function() {
                    throw new Error("process.binding is not supported")
                }, d.cwd = function() {
                    return "/"
                }, d.chdir = function() {
                    throw new Error("process.chdir is not supported")
                }, d.umask = function() {
                    return 0
                }
            },
            46: function(e) {
                function t() {
                    this._events = this._events || {}, this._maxListeners = this._maxListeners || undefined
                }

                function n(e) {
                    return "function" == typeof e
                }

                function r(e) {
                    return "number" == typeof e
                }

                function o(e) {
                    return "object" == typeof e && null !== e
                }

                function i(e) {
                    return void 0 === e
                }
                e.exports = t, t.EventEmitter = t, t.prototype._events = undefined, t.prototype._maxListeners = undefined, t.defaultMaxListeners = 10, t.prototype.setMaxListeners = function(e) {
                    if (!r(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
                    return this._maxListeners = e, this
                }, t.prototype.emit = function(e) {
                    var t, r, a, s, l, c;
                    if (this._events || (this._events = {}), "error" === e && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
                        if ((t = arguments[1]) instanceof Error) throw t;
                        var u = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                        throw u.context = t, u
                    }
                    if (r = this._events[e], i(r)) return !1;
                    if (n(r)) switch (arguments.length) {
                        case 1:
                            r.call(this);
                            break;
                        case 2:
                            r.call(this, arguments[1]);
                            break;
                        case 3:
                            r.call(this, arguments[1], arguments[2]);
                            break;
                        default:
                            s = Array.prototype.slice.call(arguments, 1), r.apply(this, s)
                    } else if (o(r))
                        for (s = Array.prototype.slice.call(arguments, 1), c = r.slice(), a = c.length, l = 0; l < a; l++) c[l].apply(this, s);
                    return !0
                }, t.prototype.addListener = function(e, r) {
                    var a;
                    if (!n(r)) throw TypeError("listener must be a function");
                    return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, n(r.listener) ? r.listener : r), this._events[e] ? o(this._events[e]) ? this._events[e].push(r) : this._events[e] = [this._events[e], r] : this._events[e] = r, o(this._events[e]) && !this._events[e].warned && (a = i(this._maxListeners) ? t.defaultMaxListeners : this._maxListeners) && a > 0 && this._events[e].length > a && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this
                }, t.prototype.on = t.prototype.addListener, t.prototype.once = function(e, t) {
                    function r() {
                        this.removeListener(e, r), o || (o = !0, t.apply(this, arguments))
                    }
                    if (!n(t)) throw TypeError("listener must be a function");
                    var o = !1;
                    return r.listener = t, this.on(e, r), this
                }, t.prototype.removeListener = function(e, t) {
                    var r, i, a, s;
                    if (!n(t)) throw TypeError("listener must be a function");
                    if (!this._events || !this._events[e]) return this;
                    if (r = this._events[e], a = r.length, i = -1, r === t || n(r.listener) && r.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
                    else if (o(r)) {
                        for (s = a; s-- > 0;)
                            if (r[s] === t || r[s].listener && r[s].listener === t) {
                                i = s;
                                break
                            }
                        if (i < 0) return this;
                        1 === r.length ? (r.length = 0, delete this._events[e]) : r.splice(i, 1), this._events.removeListener && this.emit("removeListener", e, t)
                    }
                    return this
                }, t.prototype.removeAllListeners = function(e) {
                    var t, r;
                    if (!this._events) return this;
                    if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
                    if (0 === arguments.length) {
                        for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
                        return this.removeAllListeners("removeListener"), this._events = {}, this
                    }
                    if (r = this._events[e], n(r)) this.removeListener(e, r);
                    else if (r)
                        for (; r.length;) this.removeListener(e, r[r.length - 1]);
                    return delete this._events[e], this
                }, t.prototype.listeners = function(e) {
                    return this._events && this._events[e] ? n(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
                }, t.prototype.listenerCount = function(e) {
                    if (this._events) {
                        var t = this._events[e];
                        if (n(t)) return 1;
                        if (t) return t.length
                    }
                    return 0
                }, t.listenerCount = function(e, t) {
                    return e.listenerCount(t)
                }
            },
            86: function(e, t, n) {
                (function(e) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t["default"] = {
                        log: function() {
                            if ("production" !== e.env.NODE_ENV) {
                                var t;
                                (t = console).log.apply(t, arguments)
                            }
                        },
                        warn: function() {
                            var e;
                            return (e = console).warn.apply(e, arguments)
                        },
                        error: function() {
                            var e;
                            return (e = console).error.apply(e, arguments)
                        }
                    }
                }).call(t, n(30))
            },
            87: function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                }

                function o(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    a = n(88),
                    s = r(a),
                    l = n(93),
                    c = r(l),
                    u = "2.0",
                    d = function() {
                        function e(t) {
                            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                            o(this, e), this.version = u, this.deferreds = {}, this.methods = n, this.dispatcher = t
                        }
                        return i(e, [{
                            key: "send",
                            value: function(e) {
                                var t = Object.assign({}, e);
                                t.jsonrpc = this.version, this.dispatcher(t)
                            }
                        }, {
                            key: "notification",
                            value: function(e) {
                                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
                                this.send({
                                    method: e,
                                    params: t
                                })
                            }
                        }, {
                            key: "request",
                            value: function(e) {
                                var t = this,
                                    n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
                                return new Promise(function(r, o) {
                                    var i = s["default"].v4();
                                    t.deferreds[i] = {
                                        resolve: r,
                                        reject: o
                                    }, t.send({
                                        id: i,
                                        method: e,
                                        params: n
                                    })
                                })
                            }
                        }, {
                            key: "handle",
                            value: function(e) {
                                e.method ? e.id ? this.handleRequest(e) : this.handleNotification(e) : e.id && this.handleResponse(e)
                            }
                        }, {
                            key: "handleResponse",
                            value: function(e) {
                                var t = this.deferreds[e.id];
                                t !== undefined && (e.error ? t.reject(e.error) : t.resolve(e.result), delete this.deferreds[e.id])
                            }
                        }, {
                            key: "handleRequest",
                            value: function(e) {
                                var t = this,
                                    n = this.methods[e.method];
                                if ("function" != typeof n) {
                                    var r = {
                                        message: "The method " + n + " was not found.",
                                        code: c["default"].METHOD_NOT_FOUND
                                    };
                                    return void this.send({
                                        id: e.id,
                                        error: r
                                    })
                                }
                                n.apply(e, e.params).then(function(n) {
                                    t.send({
                                        id: e.id,
                                        result: n
                                    })
                                })["catch"](function(n) {
                                    var r = {
                                        message: n,
                                        code: c["default"].INTERNAL_ERROR
                                    };
                                    t.send({
                                        id: e.id,
                                        error: r
                                    })
                                })
                            }
                        }, {
                            key: "handleNotification",
                            value: function(e) {
                                var t = this.methods[e.method];
                                t && "function" == typeof t && t.apply(e, e.params)
                            }
                        }]), e
                    }();
                t["default"] = Object.freeze(d)
            },
            88: function(e, t, n) {
                "use strict";
                var r = n(89),
                    o = n(92),
                    i = o;
                i.v1 = r, i.v4 = o, e.exports = i
            },
            89: function(e, t, n) {
                function r(e, t, n) {
                    var r = t && n || 0,
                        o = t || [];
                    e = e || {};
                    var a = e.clockseq !== undefined ? e.clockseq : l,
                        d = e.msecs !== undefined ? e.msecs : (new Date).getTime(),
                        f = e.nsecs !== undefined ? e.nsecs : u + 1,
                        p = d - c + (f - u) / 1e4;
                    if (p < 0 && e.clockseq === undefined && (a = a + 1 & 16383), (p < 0 || d > c) && e.nsecs === undefined && (f = 0), f >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                    c = d, u = f, l = a, d += 122192928e5;
                    var h = (1e4 * (268435455 & d) + f) % 4294967296;
                    o[r++] = h >>> 24 & 255, o[r++] = h >>> 16 & 255, o[r++] = h >>> 8 & 255, o[r++] = 255 & h;
                    var g = d / 4294967296 * 1e4 & 268435455;
                    o[r++] = g >>> 8 & 255, o[r++] = 255 & g, o[r++] = g >>> 24 & 15 | 16, o[r++] = g >>> 16 & 255, o[r++] = a >>> 8 | 128, o[r++] = 255 & a;
                    for (var m = e.node || s, v = 0; v < 6; ++v) o[r + v] = m[v];
                    return t || i(o)
                }
                var o = n(90),
                    i = n(91),
                    a = o(),
                    s = [1 | a[0], a[1], a[2], a[3], a[4], a[5]],
                    l = 16383 & (a[6] << 8 | a[7]),
                    c = 0,
                    u = 0;
                e.exports = r
            },
            90: function(e, t) {
                (function(t) {
                    var n, r = t.crypto || t.msCrypto;
                    if (r && r.getRandomValues) {
                        var o = new Uint8Array(16);
                        n = function() {
                            return r.getRandomValues(o), o
                        }
                    }
                    if (!n) {
                        var i = new Array(16);
                        n = function() {
                            for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), i[t] = e >>> ((3 & t) << 3) & 255;
                            return i
                        }
                    }
                    e.exports = n
                }).call(t, function() {
                    return this
                }())
            },
            91: function(e) {
                function t(e, t) {
                    var r = t || 0,
                        o = n;
                    return o[e[r++]] + o[e[r++]] + o[e[r++]] + o[e[r++]] + "-" + o[e[r++]] + o[e[r++]] + "-" + o[e[r++]] + o[e[r++]] + "-" + o[e[r++]] + o[e[r++]] + "-" + o[e[r++]] + o[e[r++]] + o[e[r++]] + o[e[r++]] + o[e[r++]] + o[e[r++]]
                }
                for (var n = [], r = 0; r < 256; ++r) n[r] = (r + 256).toString(16).substr(1);
                e.exports = t
            },
            92: function(e, t, n) {
                function r(e, t, n) {
                    var r = t && n || 0;
                    "string" == typeof e && (t = "binary" == e ? new Array(16) : null, e = null), e = e || {};
                    var a = e.random || (e.rng || o)();
                    if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t)
                        for (var s = 0; s < 16; ++s) t[r + s] = a[s];
                    return t || i(a)
                }
                var o = n(90),
                    i = n(91);
                e.exports = r
            },
            93: function(e) {
                "use strict";
                var t = Object.freeze({
                        message: "Parse error",
                        code: -32700
                    }),
                    n = Object.freeze({
                        message: "Invalid request",
                        code: -32600
                    }),
                    r = Object.freeze({
                        message: "Method not found",
                        code: -32601
                    }),
                    o = Object.freeze({
                        message: "Invalid params",
                        code: -32602
                    }),
                    i = Object.freeze({
                        message: "Internal error",
                        code: -32603
                    });
                e.exports = Object.freeze({
                    PARSE_ERROR: t,
                    INVALID_REQUEST: n,
                    METHOD_NOT_FOUND: r,
                    INVALID_PARAMS: o,
                    INTERNAL_ERROR: i
                })
            },
            94: function(e, t) {
                "use strict";

                function n(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function e(t) {
                    n(this, e);
                    var r = document.createElement("a");
                    r.href = t, this.protocol = r.protocol, this.pathname = r.pathname;
                    var o = "http:" === this.protocol ? /(:80)$/ : /(:443)$/;
                    this.host = r.host.replace(o, ""), this.origin = this.protocol + "//" + this.host
                };
                t["default"] = r
            },
            95: function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = n(96),
                    i = r(o),
                    a = {
                        init: function(e) {
                            i["default"].init(e)
                        },
                        fullscreen: function(e) {
                            i["default"].fullscreen(e.url)
                        },
                        trigger: function(e) {
                            i["default"].trigger(e.event, e.detail)
                        },
                        httpError: function(e) {
                            i["default"].httpError(e)
                        },
                        on: function(e, t) {
                            i["default"].on(e, t)
                        },
                        loadPage: function(e) {
                            i["default"].loadPage(e)
                        }
                    };
                t["default"] = a
            },
            96: function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = n(97),
                    i = r(o),
                    a = {
                        init: function(e) {
                            this.application = new i["default"], this.application.init(e), this.application.launch()
                        },
                        on: function(e, t) {
                            this.application.on(e, t)
                        },
                        fullscreen: function(e) {
                            this.application.fullscreen(e)
                        },
                        httpError: function(e) {
                            this.application.httpError(e)
                        },
                        trigger: function(e, t) {
                            this.application.trigger(e, t)
                        },
                        loadPage: function(e) {
                            this.application.loadPage(e)
                        }
                    };
                t["default"] = a
            },
            97: function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                }

                function o(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function i(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }

                function a(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var s = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    l = n(87),
                    c = r(l),
                    u = n(98),
                    d = n(46),
                    f = n(94),
                    p = r(f),
                    h = n(86),
                    g = r(h),
                    m = n(99),
                    v = n(100),
                    y = r(v),
                    b = function(e) {
                        function t() {
                            return o(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                        }
                        return a(t, e), s(t, [{
                            key: "init",
                            value: function(e) {
                                var t = e.acls,
                                    n = t === undefined ? [] : t,
                                    r = e.secret,
                                    o = r === undefined ? null : r,
                                    i = e.onReady,
                                    a = i === undefined ? null : i;
                                this.acls = [].concat(n), this.secret = o, this.onReady = a, this.resizeConfig = null, this.requestResize = this.requestResize.bind(this), this.handleConsumerMessage = this.handleConsumerMessage.bind(this), this.authorizeConsumer = this.authorizeConsumer.bind(this), this.verifyChallenge = this.verifyChallenge.bind(this), this.emitError = this.emitError.bind(this);
                                var s = new p["default"](document.referrer).origin;
                                this.acls.includes(s) && (this.activeACL = s);
                                var l = this;
                                this.JSONRPC = new c["default"](l.send.bind(l), {
                                    event: function(e, t) {
                                        return l.emit(e, t), Promise.resolve()
                                    },
                                    resize: function() {
                                        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                                        l.resizeConfig = e, l.requestResize(), new y["default"](function() {
                                            return l.requestResize()
                                        }).observe(document.body, {
                                            attributes: !0,
                                            childList: !0,
                                            characterData: !0,
                                            subtree: !0
                                        });
                                        var t = null;
                                        return window.onresize = function() {
                                            clearTimeout(t), t = setTimeout(function() {
                                                return l.requestResize()
                                            }, 100)
                                        }, Promise.resolve()
                                    }
                                })
                            }
                        }, {
                            key: "requestResize",
                            value: function() {
                                if (this.resizeConfig.customCal) this.JSONRPC.notification("resize");
                                else if (this.resizeConfig.autoResizeWidth) {
                                    var e = (0, m.calculateWidth)(this.resizeConfig.WidthCalculationMethod);
                                    this.JSONRPC.notification("resize", [null, e + "px"])
                                } else {
                                    var t = (0, m.calculateHeight)(this.resizeConfig.heightCalculationMethod);
                                    this.JSONRPC.notification("resize", [t + "px"])
                                }
                            }
                        }, {
                            key: "trigger",
                            value: function(e, t) {
                                this.JSONRPC.notification("event", [e, t])
                            }
                        }, {
                            key: "fullscreen",
                            value: function(e) {
                                this.trigger("xfc.fullscreen", e)
                            }
                        }, {
                            key: "httpError",
                            value: function() {
                                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                                this.trigger("xfc.provider.httpError", e)
                            }
                        }, {
                            key: "loadPage",
                            value: function(e) {
                                this.JSONRPC.notification("loadPage", [e])
                            }
                        }, {
                            key: "launch",
                            value: function() {
                                window.self !== window.top ? (window.addEventListener("message", this.handleConsumerMessage), this.JSONRPC.notification("launch"), this.acls.some(function(e) {
                                    return "*" !== e
                                }) && this.JSONRPC.request("authorizeConsumer", []).then(this.authorizeConsumer)["catch"](this.emitError), this.secret && this.JSONRPC.request("challengeConsumer", []).then(this.verifyChallenge)["catch"](this.emitError)) : this.authorizeConsumer()
                            }
                        }, {
                            key: "handleConsumerMessage",
                            value: function(e) {
                                if (e.data.jsonrpc && e.source === window.parent) {
                                    g["default"].log("<< provider", e.origin, e.data);
                                    var t = e.origin || e.originalEvent.origin;
                                    !this.activeACL && this.acls.includes(t) && (this.activeACL = t), (this.acls.includes("*") || this.acls.includes(t)) && this.JSONRPC.handle(e.data)
                                }
                            }
                        }, {
                            key: "send",
                            value: function(e) {
                                window.self !== window.top && (this.acls.length < 1 && g["default"].error("Message not sent, no acls provided."), e && (g["default"].log(">> provider", this.acls, e), this.activeACL ? parent.postMessage(e, this.activeACL) : this.acls.forEach(function(t) {
                                    return parent.postMessage(e, t)
                                })))
                            }
                        }, {
                            key: "verifyChallenge",
                            value: function(e) {
                                var t = this,
                                    n = function() {
                                        t.acls = ["*"], t.authorizeConsumer()
                                    };
                                "string" == typeof this.secret && (0, u.fixedTimeCompare)(this.secret, e) ? n() : "function" == typeof this.secret && this.secret.call(this, e).then(n)
                            }
                        }, {
                            key: "authorizeConsumer",
                            value: function() {
                                document.documentElement.removeAttribute("hidden"), this.emit("xfc.ready"), this.JSONRPC.notification("authorized", [{
                                    url: window.location.href
                                }]), "function" == typeof this.onReady && this.onReady.call(this)
                            }
                        }, {
                            key: "emitError",
                            value: function(e) {
                                this.emit("xfc.error", e)
                            }
                        }]), t
                    }(d.EventEmitter);
                window.self === window.top || document.documentElement.hasAttribute("hidden") || (document.documentElement.setAttribute("hidden", null), g["default"].warn("Security warning: Hidden attribute not detected on document and has been added.")), t["default"] = b
            },
            98: function(e, t) {
                "use strict";

                function n(e, t) {
                    var n = function(n, r, o) {
                        return n | e.charCodeAt(o) ^ t.charCodeAt(o)
                    };
                    return e.split("").reduce(n, e.length ^ t.length) < 1
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.fixedTimeCompare = n
            },
            99: function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                }

                function o(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                    return Array.from(e)
                }

                function i(e) {
                    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body,
                        n = null;
                    return n = "getComputedStyle" in window ? window.getComputedStyle(t, null) : document.defaultView.getComputedStyle(t, null), null !== n ? parseInt(n[e], 10) : 0
                }

                function a(e) {
                    return [e.bodyOffset(), e.bodyScroll(), e.documentElementOffset(), e.documentElementScroll()]
                }

                function s() {
                    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "bodyOffset";
                    return e in d || u["default"].error("'" + e + "' is not a valid method name!"), d[e]()
                }

                function l() {
                    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "scroll";
                    return e in f || u["default"].error("'" + e + "' is not a valid method name!"), f[e]()
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.calculateHeight = s, t.calculateWidth = l;
                var c = n(86),
                    u = r(c),
                    d = {
                        bodyOffset: function() {
                            return document.body.offsetHeight + i("marginTop") + i("marginBottom")
                        },
                        bodyScroll: function() {
                            return document.body.scrollHeight
                        },
                        documentElementOffset: function() {
                            return document.documentElement.offsetHeight
                        },
                        documentElementScroll: function() {
                            return document.documentElement.scrollHeight
                        },
                        max: function() {
                            return Math.max.apply(Math, o(a(d)))
                        },
                        min: function() {
                            return Math.min.apply(Math, o(a(d)))
                        }
                    },
                    f = {
                        bodyOffset: function() {
                            return document.body.offsetWidth
                        },
                        bodyScroll: function() {
                            return document.body.scrollWidth
                        },
                        documentElementOffset: function() {
                            return document.documentElement.offsetWidth
                        },
                        documentElementScroll: function() {
                            return document.documentElement.scrollWidth
                        },
                        scroll: function() {
                            return Math.max(f.bodyScroll(), f.documentElementScroll())
                        },
                        max: function() {
                            return Math.max.apply(Math, o(a(f)))
                        },
                        min: function() {
                            return Math.min.apply(Math, o(a(f)))
                        }
                    }
            },
            100: function(e) {
                "use strict";

                function t(e) {
                    S.push(e), x || (x = !0, w(r))
                }

                function n(e) {
                    return window.ShadowDOMPolyfill && window.ShadowDOMPolyfill.wrapIfNeeded(e) || e
                }

                function r() {
                    x = !1;
                    var e = S;
                    S = [], e.sort(function(e, t) {
                        return e.uid_ - t.uid_
                    });
                    var t = !1;
                    e.forEach(function(e) {
                        var n = e.takeRecords();
                        o(e), n.length && (e.callback_(n, e), t = !0)
                    }), t && r()
                }

                function o(e) {
                    e.nodes_.forEach(function(t) {
                        var n = b.get(t);
                        n && n.forEach(function(t) {
                            t.observer === e && t.removeTransientObservers()
                        })
                    })
                }

                function i(e, t) {
                    for (var n = e; n; n = n.parentNode) {
                        var r = b.get(n);
                        if (r)
                            for (var o = 0; o < r.length; o++) {
                                var i = r[o],
                                    a = i.options;
                                if (n === e || a.subtree) {
                                    var s = t(a);
                                    s && i.enqueue(s)
                                }
                            }
                    }
                }

                function a(e) {
                    this.callback_ = e, this.nodes_ = [], this.records_ = [], this.uid_ = ++O
                }

                function s(e, t) {
                    this.type = e, this.target = t, this.addedNodes = [], this.removedNodes = [], this.previousSibling = null, this.nextSibling = null, this.attributeName = null, this.attributeNamespace = null, this.oldValue = null
                }

                function l(e) {
                    var t = new s(e.type, e.target);
                    return t.addedNodes = e.addedNodes.slice(), t.removedNodes = e.removedNodes.slice(), t.previousSibling = e.previousSibling, t.nextSibling = e.nextSibling, t.attributeName = e.attributeName, t.attributeNamespace = e.attributeNamespace, t.oldValue = e.oldValue, t
                }

                function c(e, t) {
                    return E = new s(e, t)
                }

                function u(e) {
                    return M || (M = l(E), M.oldValue = e, M)
                }

                function d() {
                    E = M = undefined
                }

                function f(e) {
                    return e === M || e === E
                }

                function p(e, t) {
                    return e === t ? e : M && f(e) ? M : null
                }

                function h(e, t, n) {
                    this.observer = e, this.target = t, this.options = n, this.transientObservedNodes = []
                }
                var g = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
                    m = window.WeakMap;
                if (void 0 === m) {
                    var v = Object.defineProperty,
                        y = Date.now() % 1e9;
                    m = function() {
                        this.name = "__st" + (1e9 * Math.random() >>> 0) + y++ + "__"
                    }, m.prototype = {
                        set: function(e, t) {
                            var n = e[this.name];
                            return n && n[0] === e ? n[1] = t : v(e, this.name, {
                                value: [e, t],
                                writable: !0
                            }), this
                        },
                        get: function(e) {
                            var t;
                            return (t = e[this.name]) && t[0] === e ? t[1] : undefined
                        },
                        "delete": function(e) {
                            var t = e[this.name];
                            if (!t) return !1;
                            var n = t[0] === e;
                            return t[0] = t[1] = undefined, n
                        },
                        has: function(e) {
                            var t = e[this.name];
                            return !!t && t[0] === e
                        }
                    }
                }
                var b = new m,
                    w = window.msSetImmediate;
                if (!w) {
                    var C = [],
                        T = String(Math.random());
                    window.addEventListener("message", function(e) {
                        if (e.data === T) {
                            var t = C;
                            C = [], t.forEach(function(e) {
                                e()
                            })
                        }
                    }), w = function(e) {
                        C.push(e), window.postMessage(T, "*")
                    }
                }
                var x = !1,
                    S = [],
                    O = 0;
                a.prototype = {
                    observe: function(e, t) {
                        if (e = n(e), !t.childList && !t.attributes && !t.characterData || t.attributeOldValue && !t.attributes || t.attributeFilter && t.attributeFilter.length && !t.attributes || t.characterDataOldValue && !t.characterData) throw new SyntaxError;
                        var r = b.get(e);
                        r || b.set(e, r = []);
                        for (var o, i = 0; i < r.length; i++)
                            if (r[i].observer === this) {
                                o = r[i], o.removeListeners(), o.options = t;
                                break
                            }
                        o || (o = new h(this, e, t), r.push(o), this.nodes_.push(e)), o.addListeners()
                    },
                    disconnect: function() {
                        this.nodes_.forEach(function(e) {
                            for (var t = b.get(e), n = 0; n < t.length; n++) {
                                var r = t[n];
                                if (r.observer === this) {
                                    r.removeListeners(), t.splice(n, 1);
                                    break
                                }
                            }
                        }, this), this.records_ = []
                    },
                    takeRecords: function() {
                        var e = this.records_;
                        return this.records_ = [], e
                    }
                };
                var E, M;
                h.prototype = {
                    enqueue: function(e) {
                        var n = this.observer.records_,
                            r = n.length;
                        if (n.length > 0) {
                            var o = n[r - 1],
                                i = p(o, e);
                            if (i) return void(n[r - 1] = i)
                        } else t(this.observer);
                        n[r] = e
                    },
                    addListeners: function() {
                        this.addListeners_(this.target)
                    },
                    addListeners_: function(e) {
                        var t = this.options;
                        t.attributes && e.addEventListener("DOMAttrModified", this, !0), t.characterData && e.addEventListener("DOMCharacterDataModified", this, !0), t.childList && e.addEventListener("DOMNodeInserted", this, !0), (t.childList || t.subtree) && e.addEventListener("DOMNodeRemoved", this, !0)
                    },
                    removeListeners: function() {
                        this.removeListeners_(this.target)
                    },
                    removeListeners_: function(e) {
                        var t = this.options;
                        t.attributes && e.removeEventListener("DOMAttrModified", this, !0), t.characterData && e.removeEventListener("DOMCharacterDataModified", this, !0), t.childList && e.removeEventListener("DOMNodeInserted", this, !0), (t.childList || t.subtree) && e.removeEventListener("DOMNodeRemoved", this, !0)
                    },
                    addTransientObserver: function(e) {
                        if (e !== this.target) {
                            this.addListeners_(e), this.transientObservedNodes.push(e);
                            var t = b.get(e);
                            t || b.set(e, t = []), t.push(this)
                        }
                    },
                    removeTransientObservers: function() {
                        var e = this.transientObservedNodes;
                        this.transientObservedNodes = [], e.forEach(function(e) {
                            this.removeListeners_(e);
                            for (var t = b.get(e), n = 0; n < t.length; n++)
                                if (t[n] === this) {
                                    t.splice(n, 1);
                                    break
                                }
                        }, this)
                    },
                    handleEvent: function(e) {
                        switch (e.stopImmediatePropagation(), e.type) {
                            case "DOMAttrModified":
                                var t = e.attrName,
                                    n = e.relatedNode.namespaceURI,
                                    r = e.target,
                                    o = new c("attributes", r);
                                o.attributeName = t, o.attributeNamespace = n;
                                var a = e.attrChange === MutationEvent.ADDITION ? null : e.prevValue;
                                i(r, function(e) {
                                    if (e.attributes && (!e.attributeFilter || !e.attributeFilter.length || -1 !== e.attributeFilter.indexOf(t) || -1 !== e.attributeFilter.indexOf(n))) return e.attributeOldValue ? u(a) : o
                                });
                                break;
                            case "DOMCharacterDataModified":
                                var r = e.target,
                                    o = c("characterData", r),
                                    a = e.prevValue;
                                i(r, function(e) {
                                    if (e.characterData) return e.characterDataOldValue ? u(a) : o
                                });
                                break;
                            case "DOMNodeRemoved":
                                this.addTransientObserver(e.target);
                            case "DOMNodeInserted":
                                var s, l, r = e.relatedNode,
                                    f = e.target;
                                "DOMNodeInserted" === e.type ? (s = [f], l = []) : (s = [], l = [f]);
                                var p = f.previousSibling,
                                    h = f.nextSibling,
                                    o = c("childList", r);
                                o.addedNodes = s, o.removedNodes = l, o.previousSibling = p, o.nextSibling = h, i(r, function(e) {
                                    if (e.childList) return o
                                })
                        }
                        d()
                    }
                }, g || (g = a), e.exports = g
            }
        })
    });
var embedded_content = embedded_content || {};
embedded_content.acls = ["https://embedded.devcerner.com"], EmbeddedContent.provider["default"].init({
    acls: embedded_content.acls
}), $(document).ready(function() {
    window.top !== window.self && (document.documentElement.className += " embeddedcontent")
});
var iframeHeightHandler = {};
iframeHeightHandler.customResizer = function() {
    var e = document.getElementsByTagName("html")[0].scrollHeight + "px";
    Canadarm.debug("Auto resize calculation height of an iFrame is " + e), EmbeddedContent.provider["default"].trigger({
        event: "iframeCustomResizer",
        detail: {
            height: e
        }
    })
}, EmbeddedContent.provider["default"].on("iframeCustomResizer", function() {
    iframeHeightHandler.customResizer()
});
var OrionFoundationFastClickOverride = function() {};
Terra._initFastClick = OrionFoundationFastClickOverride;
