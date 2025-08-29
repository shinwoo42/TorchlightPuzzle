function jb(e, n) {
    for (var o = 0; o < n.length; o++) {
        const i = n[o];
        if (typeof i != "string" && !Array.isArray(i)) {
            for (const a in i)
                if (a !== "default" && !(a in e)) {
                    const u = Object.getOwnPropertyDescriptor(i, a);
                    u && Object.defineProperty(e, a, u.get ? u : {
                        enumerable: !0,
                        get: () => i[a]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const n = document.createElement("link").relList;
    if (n && n.supports && n.supports("modulepreload"))
        return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]'))
        i(a);
    new MutationObserver(a => {
        for (const u of a)
            if (u.type === "childList")
                for (const c of u.addedNodes)
                    c.tagName === "LINK" && c.rel === "modulepreload" && i(c)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function o(a) {
        const u = {};
        return a.integrity && (u.integrity = a.integrity),
        a.referrerPolicy && (u.referrerPolicy = a.referrerPolicy),
        a.crossOrigin === "use-credentials" ? u.credentials = "include" : a.crossOrigin === "anonymous" ? u.credentials = "omit" : u.credentials = "same-origin",
        u
    }
    function i(a) {
        if (a.ep)
            return;
        a.ep = !0;
        const u = o(a);
        fetch(a.href, u)
    }
}
)();
function $d(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var vc = {
    exports: {}
}
  , Ki = {}
  , yc = {
    exports: {}
}
  , De = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rm;
function Ob() {
    if (Rm)
        return De;
    Rm = 1;
    var e = Symbol.for("react.element")
      , n = Symbol.for("react.portal")
      , o = Symbol.for("react.fragment")
      , i = Symbol.for("react.strict_mode")
      , a = Symbol.for("react.profiler")
      , u = Symbol.for("react.provider")
      , c = Symbol.for("react.context")
      , d = Symbol.for("react.forward_ref")
      , p = Symbol.for("react.suspense")
      , h = Symbol.for("react.memo")
      , g = Symbol.for("react.lazy")
      , y = Symbol.iterator;
    function x(D) {
        return D === null || typeof D != "object" ? null : (D = y && D[y] || D["@@iterator"],
        typeof D == "function" ? D : null)
    }
    var v = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , T = Object.assign
      , C = {};
    function E(D, z, se) {
        this.props = D,
        this.context = z,
        this.refs = C,
        this.updater = se || v
    }
    E.prototype.isReactComponent = {},
    E.prototype.setState = function(D, z) {
        if (typeof D != "object" && typeof D != "function" && D != null)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, D, z, "setState")
    }
    ,
    E.prototype.forceUpdate = function(D) {
        this.updater.enqueueForceUpdate(this, D, "forceUpdate")
    }
    ;
    function P() {}
    P.prototype = E.prototype;
    function A(D, z, se) {
        this.props = D,
        this.context = z,
        this.refs = C,
        this.updater = se || v
    }
    var R = A.prototype = new P;
    R.constructor = A,
    T(R, E.prototype),
    R.isPureReactComponent = !0;
    var O = Array.isArray
      , j = Object.prototype.hasOwnProperty
      , $ = {
        current: null
    }
      , I = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function U(D, z, se) {
        var ae, pe = {}, K = null, F = null;
        if (z != null)
            for (ae in z.ref !== void 0 && (F = z.ref),
            z.key !== void 0 && (K = "" + z.key),
            z)
                j.call(z, ae) && !I.hasOwnProperty(ae) && (pe[ae] = z[ae]);
        var ee = arguments.length - 2;
        if (ee === 1)
            pe.children = se;
        else if (1 < ee) {
            for (var he = Array(ee), ce = 0; ce < ee; ce++)
                he[ce] = arguments[ce + 2];
            pe.children = he
        }
        if (D && D.defaultProps)
            for (ae in ee = D.defaultProps,
            ee)
                pe[ae] === void 0 && (pe[ae] = ee[ae]);
        return {
            $$typeof: e,
            type: D,
            key: K,
            ref: F,
            props: pe,
            _owner: $.current
        }
    }
    function oe(D, z) {
        return {
            $$typeof: e,
            type: D.type,
            key: z,
            ref: D.ref,
            props: D.props,
            _owner: D._owner
        }
    }
    function J(D) {
        return typeof D == "object" && D !== null && D.$$typeof === e
    }
    function ne(D) {
        var z = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + D.replace(/[=:]/g, function(se) {
            return z[se]
        })
    }
    var Z = /\/+/g;
    function le(D, z) {
        return typeof D == "object" && D !== null && D.key != null ? ne("" + D.key) : z.toString(36)
    }
    function ue(D, z, se, ae, pe) {
        var K = typeof D;
        (K === "undefined" || K === "boolean") && (D = null);
        var F = !1;
        if (D === null)
            F = !0;
        else
            switch (K) {
            case "string":
            case "number":
                F = !0;
                break;
            case "object":
                switch (D.$$typeof) {
                case e:
                case n:
                    F = !0
                }
            }
        if (F)
            return F = D,
            pe = pe(F),
            D = ae === "" ? "." + le(F, 0) : ae,
            O(pe) ? (se = "",
            D != null && (se = D.replace(Z, "$&/") + "/"),
            ue(pe, z, se, "", function(ce) {
                return ce
            })) : pe != null && (J(pe) && (pe = oe(pe, se + (!pe.key || F && F.key === pe.key ? "" : ("" + pe.key).replace(Z, "$&/") + "/") + D)),
            z.push(pe)),
            1;
        if (F = 0,
        ae = ae === "" ? "." : ae + ":",
        O(D))
            for (var ee = 0; ee < D.length; ee++) {
                K = D[ee];
                var he = ae + le(K, ee);
                F += ue(K, z, se, he, pe)
            }
        else if (he = x(D),
        typeof he == "function")
            for (D = he.call(D),
            ee = 0; !(K = D.next()).done; )
                K = K.value,
                he = ae + le(K, ee++),
                F += ue(K, z, se, he, pe);
        else if (K === "object")
            throw z = String(D),
            Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(D).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.");
        return F
    }
    function ge(D, z, se) {
        if (D == null)
            return D;
        var ae = []
          , pe = 0;
        return ue(D, ae, "", "", function(K) {
            return z.call(se, K, pe++)
        }),
        ae
    }
    function re(D) {
        if (D._status === -1) {
            var z = D._result;
            z = z(),
            z.then(function(se) {
                (D._status === 0 || D._status === -1) && (D._status = 1,
                D._result = se)
            }, function(se) {
                (D._status === 0 || D._status === -1) && (D._status = 2,
                D._result = se)
            }),
            D._status === -1 && (D._status = 0,
            D._result = z)
        }
        if (D._status === 1)
            return D._result.default;
        throw D._result
    }
    var Q = {
        current: null
    }
      , V = {
        transition: null
    }
      , H = {
        ReactCurrentDispatcher: Q,
        ReactCurrentBatchConfig: V,
        ReactCurrentOwner: $
    };
    function G() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return De.Children = {
        map: ge,
        forEach: function(D, z, se) {
            ge(D, function() {
                z.apply(this, arguments)
            }, se)
        },
        count: function(D) {
            var z = 0;
            return ge(D, function() {
                z++
            }),
            z
        },
        toArray: function(D) {
            return ge(D, function(z) {
                return z
            }) || []
        },
        only: function(D) {
            if (!J(D))
                throw Error("React.Children.only expected to receive a single React element child.");
            return D
        }
    },
    De.Component = E,
    De.Fragment = o,
    De.Profiler = a,
    De.PureComponent = A,
    De.StrictMode = i,
    De.Suspense = p,
    De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H,
    De.act = G,
    De.cloneElement = function(D, z, se) {
        if (D == null)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + D + ".");
        var ae = T({}, D.props)
          , pe = D.key
          , K = D.ref
          , F = D._owner;
        if (z != null) {
            if (z.ref !== void 0 && (K = z.ref,
            F = $.current),
            z.key !== void 0 && (pe = "" + z.key),
            D.type && D.type.defaultProps)
                var ee = D.type.defaultProps;
            for (he in z)
                j.call(z, he) && !I.hasOwnProperty(he) && (ae[he] = z[he] === void 0 && ee !== void 0 ? ee[he] : z[he])
        }
        var he = arguments.length - 2;
        if (he === 1)
            ae.children = se;
        else if (1 < he) {
            ee = Array(he);
            for (var ce = 0; ce < he; ce++)
                ee[ce] = arguments[ce + 2];
            ae.children = ee
        }
        return {
            $$typeof: e,
            type: D.type,
            key: pe,
            ref: K,
            props: ae,
            _owner: F
        }
    }
    ,
    De.createContext = function(D) {
        return D = {
            $$typeof: c,
            _currentValue: D,
            _currentValue2: D,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        },
        D.Provider = {
            $$typeof: u,
            _context: D
        },
        D.Consumer = D
    }
    ,
    De.createElement = U,
    De.createFactory = function(D) {
        var z = U.bind(null, D);
        return z.type = D,
        z
    }
    ,
    De.createRef = function() {
        return {
            current: null
        }
    }
    ,
    De.forwardRef = function(D) {
        return {
            $$typeof: d,
            render: D
        }
    }
    ,
    De.isValidElement = J,
    De.lazy = function(D) {
        return {
            $$typeof: g,
            _payload: {
                _status: -1,
                _result: D
            },
            _init: re
        }
    }
    ,
    De.memo = function(D, z) {
        return {
            $$typeof: h,
            type: D,
            compare: z === void 0 ? null : z
        }
    }
    ,
    De.startTransition = function(D) {
        var z = V.transition;
        V.transition = {};
        try {
            D()
        } finally {
            V.transition = z
        }
    }
    ,
    De.unstable_act = G,
    De.useCallback = function(D, z) {
        return Q.current.useCallback(D, z)
    }
    ,
    De.useContext = function(D) {
        return Q.current.useContext(D)
    }
    ,
    De.useDebugValue = function() {}
    ,
    De.useDeferredValue = function(D) {
        return Q.current.useDeferredValue(D)
    }
    ,
    De.useEffect = function(D, z) {
        return Q.current.useEffect(D, z)
    }
    ,
    De.useId = function() {
        return Q.current.useId()
    }
    ,
    De.useImperativeHandle = function(D, z, se) {
        return Q.current.useImperativeHandle(D, z, se)
    }
    ,
    De.useInsertionEffect = function(D, z) {
        return Q.current.useInsertionEffect(D, z)
    }
    ,
    De.useLayoutEffect = function(D, z) {
        return Q.current.useLayoutEffect(D, z)
    }
    ,
    De.useMemo = function(D, z) {
        return Q.current.useMemo(D, z)
    }
    ,
    De.useReducer = function(D, z, se) {
        return Q.current.useReducer(D, z, se)
    }
    ,
    De.useRef = function(D) {
        return Q.current.useRef(D)
    }
    ,
    De.useState = function(D) {
        return Q.current.useState(D)
    }
    ,
    De.useSyncExternalStore = function(D, z, se) {
        return Q.current.useSyncExternalStore(D, z, se)
    }
    ,
    De.useTransition = function() {
        return Q.current.useTransition()
    }
    ,
    De.version = "18.3.1",
    De
}
var Nm;
function Hd() {
    return Nm || (Nm = 1,
    yc.exports = Ob()),
    yc.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dm;
function _b() {
    if (Dm)
        return Ki;
    Dm = 1;
    var e = Hd()
      , n = Symbol.for("react.element")
      , o = Symbol.for("react.fragment")
      , i = Object.prototype.hasOwnProperty
      , a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
      , u = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function c(d, p, h) {
        var g, y = {}, x = null, v = null;
        h !== void 0 && (x = "" + h),
        p.key !== void 0 && (x = "" + p.key),
        p.ref !== void 0 && (v = p.ref);
        for (g in p)
            i.call(p, g) && !u.hasOwnProperty(g) && (y[g] = p[g]);
        if (d && d.defaultProps)
            for (g in p = d.defaultProps,
            p)
                y[g] === void 0 && (y[g] = p[g]);
        return {
            $$typeof: n,
            type: d,
            key: x,
            ref: v,
            props: y,
            _owner: a.current
        }
    }
    return Ki.Fragment = o,
    Ki.jsx = c,
    Ki.jsxs = c,
    Ki
}
var Mm;
function Ib() {
    return Mm || (Mm = 1,
    vc.exports = _b()),
    vc.exports
}
var S = Ib()
  , w = Hd();
const ie = $d(w)
  , Lb = jb({
    __proto__: null,
    default: ie
}, [w]);
var Ra = {}
  , xc = {
    exports: {}
}
  , Ft = {}
  , wc = {
    exports: {}
}
  , Sc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jm;
function Vb() {
    return jm || (jm = 1,
    function(e) {
        function n(V, H) {
            var G = V.length;
            V.push(H);
            e: for (; 0 < G; ) {
                var D = G - 1 >>> 1
                  , z = V[D];
                if (0 < a(z, H))
                    V[D] = H,
                    V[G] = z,
                    G = D;
                else
                    break e
            }
        }
        function o(V) {
            return V.length === 0 ? null : V[0]
        }
        function i(V) {
            if (V.length === 0)
                return null;
            var H = V[0]
              , G = V.pop();
            if (G !== H) {
                V[0] = G;
                e: for (var D = 0, z = V.length, se = z >>> 1; D < se; ) {
                    var ae = 2 * (D + 1) - 1
                      , pe = V[ae]
                      , K = ae + 1
                      , F = V[K];
                    if (0 > a(pe, G))
                        K < z && 0 > a(F, pe) ? (V[D] = F,
                        V[K] = G,
                        D = K) : (V[D] = pe,
                        V[ae] = G,
                        D = ae);
                    else if (K < z && 0 > a(F, G))
                        V[D] = F,
                        V[K] = G,
                        D = K;
                    else
                        break e
                }
            }
            return H
        }
        function a(V, H) {
            var G = V.sortIndex - H.sortIndex;
            return G !== 0 ? G : V.id - H.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var u = performance;
            e.unstable_now = function() {
                return u.now()
            }
        } else {
            var c = Date
              , d = c.now();
            e.unstable_now = function() {
                return c.now() - d
            }
        }
        var p = []
          , h = []
          , g = 1
          , y = null
          , x = 3
          , v = !1
          , T = !1
          , C = !1
          , E = typeof setTimeout == "function" ? setTimeout : null
          , P = typeof clearTimeout == "function" ? clearTimeout : null
          , A = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function R(V) {
            for (var H = o(h); H !== null; ) {
                if (H.callback === null)
                    i(h);
                else if (H.startTime <= V)
                    i(h),
                    H.sortIndex = H.expirationTime,
                    n(p, H);
                else
                    break;
                H = o(h)
            }
        }
        function O(V) {
            if (C = !1,
            R(V),
            !T)
                if (o(p) !== null)
                    T = !0,
                    re(j);
                else {
                    var H = o(h);
                    H !== null && Q(O, H.startTime - V)
                }
        }
        function j(V, H) {
            T = !1,
            C && (C = !1,
            P(U),
            U = -1),
            v = !0;
            var G = x;
            try {
                for (R(H),
                y = o(p); y !== null && (!(y.expirationTime > H) || V && !ne()); ) {
                    var D = y.callback;
                    if (typeof D == "function") {
                        y.callback = null,
                        x = y.priorityLevel;
                        var z = D(y.expirationTime <= H);
                        H = e.unstable_now(),
                        typeof z == "function" ? y.callback = z : y === o(p) && i(p),
                        R(H)
                    } else
                        i(p);
                    y = o(p)
                }
                if (y !== null)
                    var se = !0;
                else {
                    var ae = o(h);
                    ae !== null && Q(O, ae.startTime - H),
                    se = !1
                }
                return se
            } finally {
                y = null,
                x = G,
                v = !1
            }
        }
        var $ = !1
          , I = null
          , U = -1
          , oe = 5
          , J = -1;
        function ne() {
            return !(e.unstable_now() - J < oe)
        }
        function Z() {
            if (I !== null) {
                var V = e.unstable_now();
                J = V;
                var H = !0;
                try {
                    H = I(!0, V)
                } finally {
                    H ? le() : ($ = !1,
                    I = null)
                }
            } else
                $ = !1
        }
        var le;
        if (typeof A == "function")
            le = function() {
                A(Z)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var ue = new MessageChannel
              , ge = ue.port2;
            ue.port1.onmessage = Z,
            le = function() {
                ge.postMessage(null)
            }
        } else
            le = function() {
                E(Z, 0)
            }
            ;
        function re(V) {
            I = V,
            $ || ($ = !0,
            le())
        }
        function Q(V, H) {
            U = E(function() {
                V(e.unstable_now())
            }, H)
        }
        e.unstable_IdlePriority = 5,
        e.unstable_ImmediatePriority = 1,
        e.unstable_LowPriority = 4,
        e.unstable_NormalPriority = 3,
        e.unstable_Profiling = null,
        e.unstable_UserBlockingPriority = 2,
        e.unstable_cancelCallback = function(V) {
            V.callback = null
        }
        ,
        e.unstable_continueExecution = function() {
            T || v || (T = !0,
            re(j))
        }
        ,
        e.unstable_forceFrameRate = function(V) {
            0 > V || 125 < V ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : oe = 0 < V ? Math.floor(1e3 / V) : 5
        }
        ,
        e.unstable_getCurrentPriorityLevel = function() {
            return x
        }
        ,
        e.unstable_getFirstCallbackNode = function() {
            return o(p)
        }
        ,
        e.unstable_next = function(V) {
            switch (x) {
            case 1:
            case 2:
            case 3:
                var H = 3;
                break;
            default:
                H = x
            }
            var G = x;
            x = H;
            try {
                return V()
            } finally {
                x = G
            }
        }
        ,
        e.unstable_pauseExecution = function() {}
        ,
        e.unstable_requestPaint = function() {}
        ,
        e.unstable_runWithPriority = function(V, H) {
            switch (V) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                V = 3
            }
            var G = x;
            x = V;
            try {
                return H()
            } finally {
                x = G
            }
        }
        ,
        e.unstable_scheduleCallback = function(V, H, G) {
            var D = e.unstable_now();
            switch (typeof G == "object" && G !== null ? (G = G.delay,
            G = typeof G == "number" && 0 < G ? D + G : D) : G = D,
            V) {
            case 1:
                var z = -1;
                break;
            case 2:
                z = 250;
                break;
            case 5:
                z = 1073741823;
                break;
            case 4:
                z = 1e4;
                break;
            default:
                z = 5e3
            }
            return z = G + z,
            V = {
                id: g++,
                callback: H,
                priorityLevel: V,
                startTime: G,
                expirationTime: z,
                sortIndex: -1
            },
            G > D ? (V.sortIndex = G,
            n(h, V),
            o(p) === null && V === o(h) && (C ? (P(U),
            U = -1) : C = !0,
            Q(O, G - D))) : (V.sortIndex = z,
            n(p, V),
            T || v || (T = !0,
            re(j))),
            V
        }
        ,
        e.unstable_shouldYield = ne,
        e.unstable_wrapCallback = function(V) {
            var H = x;
            return function() {
                var G = x;
                x = H;
                try {
                    return V.apply(this, arguments)
                } finally {
                    x = G
                }
            }
        }
    }(Sc)),
    Sc
}
var Om;
function Fb() {
    return Om || (Om = 1,
    wc.exports = Vb()),
    wc.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _m;
function Bb() {
    if (_m)
        return Ft;
    _m = 1;
    var e = Hd()
      , n = Fb();
    function o(t) {
        for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, s = 1; s < arguments.length; s++)
            r += "&args[]=" + encodeURIComponent(arguments[s]);
        return "Minified React error #" + t + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var i = new Set
      , a = {};
    function u(t, r) {
        c(t, r),
        c(t + "Capture", r)
    }
    function c(t, r) {
        for (a[t] = r,
        t = 0; t < r.length; t++)
            i.add(r[t])
    }
    var d = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , p = Object.prototype.hasOwnProperty
      , h = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
      , g = {}
      , y = {};
    function x(t) {
        return p.call(y, t) ? !0 : p.call(g, t) ? !1 : h.test(t) ? y[t] = !0 : (g[t] = !0,
        !1)
    }
    function v(t, r, s, l) {
        if (s !== null && s.type === 0)
            return !1;
        switch (typeof r) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return l ? !1 : s !== null ? !s.acceptsBooleans : (t = t.toLowerCase().slice(0, 5),
            t !== "data-" && t !== "aria-");
        default:
            return !1
        }
    }
    function T(t, r, s, l) {
        if (r === null || typeof r > "u" || v(t, r, s, l))
            return !0;
        if (l)
            return !1;
        if (s !== null)
            switch (s.type) {
            case 3:
                return !r;
            case 4:
                return r === !1;
            case 5:
                return isNaN(r);
            case 6:
                return isNaN(r) || 1 > r
            }
        return !1
    }
    function C(t, r, s, l, f, m, b) {
        this.acceptsBooleans = r === 2 || r === 3 || r === 4,
        this.attributeName = l,
        this.attributeNamespace = f,
        this.mustUseProperty = s,
        this.propertyName = t,
        this.type = r,
        this.sanitizeURL = m,
        this.removeEmptyString = b
    }
    var E = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
        E[t] = new C(t,0,!1,t,null,!1,!1)
    }),
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
        var r = t[0];
        E[r] = new C(r,1,!1,t[1],null,!1,!1)
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
        E[t] = new C(t,2,!1,t.toLowerCase(),null,!1,!1)
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
        E[t] = new C(t,2,!1,t,null,!1,!1)
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
        E[t] = new C(t,3,!1,t.toLowerCase(),null,!1,!1)
    }),
    ["checked", "multiple", "muted", "selected"].forEach(function(t) {
        E[t] = new C(t,3,!0,t,null,!1,!1)
    }),
    ["capture", "download"].forEach(function(t) {
        E[t] = new C(t,4,!1,t,null,!1,!1)
    }),
    ["cols", "rows", "size", "span"].forEach(function(t) {
        E[t] = new C(t,6,!1,t,null,!1,!1)
    }),
    ["rowSpan", "start"].forEach(function(t) {
        E[t] = new C(t,5,!1,t.toLowerCase(),null,!1,!1)
    });
    var P = /[\-:]([a-z])/g;
    function A(t) {
        return t[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
        var r = t.replace(P, A);
        E[r] = new C(r,1,!1,t,null,!1,!1)
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
        var r = t.replace(P, A);
        E[r] = new C(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)
    }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
        var r = t.replace(P, A);
        E[r] = new C(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)
    }),
    ["tabIndex", "crossOrigin"].forEach(function(t) {
        E[t] = new C(t,1,!1,t.toLowerCase(),null,!1,!1)
    }),
    E.xlinkHref = new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
    ["src", "href", "action", "formAction"].forEach(function(t) {
        E[t] = new C(t,1,!1,t.toLowerCase(),null,!0,!0)
    });
    function R(t, r, s, l) {
        var f = E.hasOwnProperty(r) ? E[r] : null;
        (f !== null ? f.type !== 0 : l || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (T(r, s, f, l) && (s = null),
        l || f === null ? x(r) && (s === null ? t.removeAttribute(r) : t.setAttribute(r, "" + s)) : f.mustUseProperty ? t[f.propertyName] = s === null ? f.type === 3 ? !1 : "" : s : (r = f.attributeName,
        l = f.attributeNamespace,
        s === null ? t.removeAttribute(r) : (f = f.type,
        s = f === 3 || f === 4 && s === !0 ? "" : "" + s,
        l ? t.setAttributeNS(l, r, s) : t.setAttribute(r, s))))
    }
    var O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      , j = Symbol.for("react.element")
      , $ = Symbol.for("react.portal")
      , I = Symbol.for("react.fragment")
      , U = Symbol.for("react.strict_mode")
      , oe = Symbol.for("react.profiler")
      , J = Symbol.for("react.provider")
      , ne = Symbol.for("react.context")
      , Z = Symbol.for("react.forward_ref")
      , le = Symbol.for("react.suspense")
      , ue = Symbol.for("react.suspense_list")
      , ge = Symbol.for("react.memo")
      , re = Symbol.for("react.lazy")
      , Q = Symbol.for("react.offscreen")
      , V = Symbol.iterator;
    function H(t) {
        return t === null || typeof t != "object" ? null : (t = V && t[V] || t["@@iterator"],
        typeof t == "function" ? t : null)
    }
    var G = Object.assign, D;
    function z(t) {
        if (D === void 0)
            try {
                throw Error()
            } catch (s) {
                var r = s.stack.trim().match(/\n( *(at )?)/);
                D = r && r[1] || ""
            }
        return `
` + D + t
    }
    var se = !1;
    function ae(t, r) {
        if (!t || se)
            return "";
        se = !0;
        var s = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (r)
                if (r = function() {
                    throw Error()
                }
                ,
                Object.defineProperty(r.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(r, [])
                    } catch (B) {
                        var l = B
                    }
                    Reflect.construct(t, [], r)
                } else {
                    try {
                        r.call()
                    } catch (B) {
                        l = B
                    }
                    t.call(r.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (B) {
                    l = B
                }
                t()
            }
        } catch (B) {
            if (B && l && typeof B.stack == "string") {
                for (var f = B.stack.split(`
`), m = l.stack.split(`
`), b = f.length - 1, k = m.length - 1; 1 <= b && 0 <= k && f[b] !== m[k]; )
                    k--;
                for (; 1 <= b && 0 <= k; b--,
                k--)
                    if (f[b] !== m[k]) {
                        if (b !== 1 || k !== 1)
                            do
                                if (b--,
                                k--,
                                0 > k || f[b] !== m[k]) {
                                    var N = `
` + f[b].replace(" at new ", " at ");
                                    return t.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", t.displayName)),
                                    N
                                }
                            while (1 <= b && 0 <= k);
                        break
                    }
            }
        } finally {
            se = !1,
            Error.prepareStackTrace = s
        }
        return (t = t ? t.displayName || t.name : "") ? z(t) : ""
    }
    function pe(t) {
        switch (t.tag) {
        case 5:
            return z(t.type);
        case 16:
            return z("Lazy");
        case 13:
            return z("Suspense");
        case 19:
            return z("SuspenseList");
        case 0:
        case 2:
        case 15:
            return t = ae(t.type, !1),
            t;
        case 11:
            return t = ae(t.type.render, !1),
            t;
        case 1:
            return t = ae(t.type, !0),
            t;
        default:
            return ""
        }
    }
    function K(t) {
        if (t == null)
            return null;
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t;
        switch (t) {
        case I:
            return "Fragment";
        case $:
            return "Portal";
        case oe:
            return "Profiler";
        case U:
            return "StrictMode";
        case le:
            return "Suspense";
        case ue:
            return "SuspenseList"
        }
        if (typeof t == "object")
            switch (t.$$typeof) {
            case ne:
                return (t.displayName || "Context") + ".Consumer";
            case J:
                return (t._context.displayName || "Context") + ".Provider";
            case Z:
                var r = t.render;
                return t = t.displayName,
                t || (t = r.displayName || r.name || "",
                t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
                t;
            case ge:
                return r = t.displayName || null,
                r !== null ? r : K(t.type) || "Memo";
            case re:
                r = t._payload,
                t = t._init;
                try {
                    return K(t(r))
                } catch {}
            }
        return null
    }
    function F(t) {
        var r = t.type;
        switch (t.tag) {
        case 24:
            return "Cache";
        case 9:
            return (r.displayName || "Context") + ".Consumer";
        case 10:
            return (r._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return t = r.render,
            t = t.displayName || t.name || "",
            r.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return r;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return K(r);
        case 8:
            return r === U ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof r == "function")
                return r.displayName || r.name || null;
            if (typeof r == "string")
                return r
        }
        return null
    }
    function ee(t) {
        switch (typeof t) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return t;
        case "object":
            return t;
        default:
            return ""
        }
    }
    function he(t) {
        var r = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (r === "checkbox" || r === "radio")
    }
    function ce(t) {
        var r = he(t) ? "checked" : "value"
          , s = Object.getOwnPropertyDescriptor(t.constructor.prototype, r)
          , l = "" + t[r];
        if (!t.hasOwnProperty(r) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
            var f = s.get
              , m = s.set;
            return Object.defineProperty(t, r, {
                configurable: !0,
                get: function() {
                    return f.call(this)
                },
                set: function(b) {
                    l = "" + b,
                    m.call(this, b)
                }
            }),
            Object.defineProperty(t, r, {
                enumerable: s.enumerable
            }),
            {
                getValue: function() {
                    return l
                },
                setValue: function(b) {
                    l = "" + b
                },
                stopTracking: function() {
                    t._valueTracker = null,
                    delete t[r]
                }
            }
        }
    }
    function Te(t) {
        t._valueTracker || (t._valueTracker = ce(t))
    }
    function Me(t) {
        if (!t)
            return !1;
        var r = t._valueTracker;
        if (!r)
            return !0;
        var s = r.getValue()
          , l = "";
        return t && (l = he(t) ? t.checked ? "true" : "false" : t.value),
        t = l,
        t !== s ? (r.setValue(t),
        !0) : !1
    }
    function Fe(t) {
        if (t = t || (typeof document < "u" ? document : void 0),
        typeof t > "u")
            return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    function W(t, r) {
        var s = r.checked;
        return G({}, r, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: s ?? t._wrapperState.initialChecked
        })
    }
    function xe(t, r) {
        var s = r.defaultValue == null ? "" : r.defaultValue
          , l = r.checked != null ? r.checked : r.defaultChecked;
        s = ee(r.value != null ? r.value : s),
        t._wrapperState = {
            initialChecked: l,
            initialValue: s,
            controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null
        }
    }
    function be(t, r) {
        r = r.checked,
        r != null && R(t, "checked", r, !1)
    }
    function je(t, r) {
        be(t, r);
        var s = ee(r.value)
          , l = r.type;
        if (s != null)
            l === "number" ? (s === 0 && t.value === "" || t.value != s) && (t.value = "" + s) : t.value !== "" + s && (t.value = "" + s);
        else if (l === "submit" || l === "reset") {
            t.removeAttribute("value");
            return
        }
        r.hasOwnProperty("value") ? it(t, r.type, s) : r.hasOwnProperty("defaultValue") && it(t, r.type, ee(r.defaultValue)),
        r.checked == null && r.defaultChecked != null && (t.defaultChecked = !!r.defaultChecked)
    }
    function Oe(t, r, s) {
        if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
            var l = r.type;
            if (!(l !== "submit" && l !== "reset" || r.value !== void 0 && r.value !== null))
                return;
            r = "" + t._wrapperState.initialValue,
            s || r === t.value || (t.value = r),
            t.defaultValue = r
        }
        s = t.name,
        s !== "" && (t.name = ""),
        t.defaultChecked = !!t._wrapperState.initialChecked,
        s !== "" && (t.name = s)
    }
    function it(t, r, s) {
        (r !== "number" || Fe(t.ownerDocument) !== t) && (s == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + s && (t.defaultValue = "" + s))
    }
    var $e = Array.isArray;
    function ze(t, r, s, l) {
        if (t = t.options,
        r) {
            r = {};
            for (var f = 0; f < s.length; f++)
                r["$" + s[f]] = !0;
            for (s = 0; s < t.length; s++)
                f = r.hasOwnProperty("$" + t[s].value),
                t[s].selected !== f && (t[s].selected = f),
                f && l && (t[s].defaultSelected = !0)
        } else {
            for (s = "" + ee(s),
            r = null,
            f = 0; f < t.length; f++) {
                if (t[f].value === s) {
                    t[f].selected = !0,
                    l && (t[f].defaultSelected = !0);
                    return
                }
                r !== null || t[f].disabled || (r = t[f])
            }
            r !== null && (r.selected = !0)
        }
    }
    function Et(t, r) {
        if (r.dangerouslySetInnerHTML != null)
            throw Error(o(91));
        return G({}, r, {
            value: void 0,
            defaultValue: void 0,
            children: "" + t._wrapperState.initialValue
        })
    }
    function yt(t, r) {
        var s = r.value;
        if (s == null) {
            if (s = r.children,
            r = r.defaultValue,
            s != null) {
                if (r != null)
                    throw Error(o(92));
                if ($e(s)) {
                    if (1 < s.length)
                        throw Error(o(93));
                    s = s[0]
                }
                r = s
            }
            r == null && (r = ""),
            s = r
        }
        t._wrapperState = {
            initialValue: ee(s)
        }
    }
    function or(t, r) {
        var s = ee(r.value)
          , l = ee(r.defaultValue);
        s != null && (s = "" + s,
        s !== t.value && (t.value = s),
        r.defaultValue == null && t.defaultValue !== s && (t.defaultValue = s)),
        l != null && (t.defaultValue = "" + l)
    }
    function ir(t) {
        var r = t.textContent;
        r === t._wrapperState.initialValue && r !== "" && r !== null && (t.value = r)
    }
    function lt(t) {
        switch (t) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
        }
    }
    function $t(t, r) {
        return t == null || t === "http://www.w3.org/1999/xhtml" ? lt(r) : t === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t
    }
    var $n, ys = function(t) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, s, l, f) {
            MSApp.execUnsafeLocalFunction(function() {
                return t(r, s, l, f)
            })
        }
        : t
    }(function(t, r) {
        if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in t)
            t.innerHTML = r;
        else {
            for ($n = $n || document.createElement("div"),
            $n.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>",
            r = $n.firstChild; t.firstChild; )
                t.removeChild(t.firstChild);
            for (; r.firstChild; )
                t.appendChild(r.firstChild)
        }
    });
    function bn(t, r) {
        if (r) {
            var s = t.firstChild;
            if (s && s === t.lastChild && s.nodeType === 3) {
                s.nodeValue = r;
                return
            }
        }
        t.textContent = r
    }
    var Fr = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }
      , xs = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Fr).forEach(function(t) {
        xs.forEach(function(r) {
            r = r + t.charAt(0).toUpperCase() + t.substring(1),
            Fr[r] = Fr[t]
        })
    });
    function co(t, r, s) {
        return r == null || typeof r == "boolean" || r === "" ? "" : s || typeof r != "number" || r === 0 || Fr.hasOwnProperty(t) && Fr[t] ? ("" + r).trim() : r + "px"
    }
    function Hn(t, r) {
        t = t.style;
        for (var s in r)
            if (r.hasOwnProperty(s)) {
                var l = s.indexOf("--") === 0
                  , f = co(s, r[s], l);
                s === "float" && (s = "cssFloat"),
                l ? t.setProperty(s, f) : t[s] = f
            }
    }
    var ws = G({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });
    function Cn(t, r) {
        if (r) {
            if (ws[t] && (r.children != null || r.dangerouslySetInnerHTML != null))
                throw Error(o(137, t));
            if (r.dangerouslySetInnerHTML != null) {
                if (r.children != null)
                    throw Error(o(60));
                if (typeof r.dangerouslySetInnerHTML != "object" || !("__html"in r.dangerouslySetInnerHTML))
                    throw Error(o(61))
            }
            if (r.style != null && typeof r.style != "object")
                throw Error(o(62))
        }
    }
    function ci(t, r) {
        if (t.indexOf("-") === -1)
            return typeof r.is == "string";
        switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var di = null;
    function fo(t) {
        return t = t.target || t.srcElement || window,
        t.correspondingUseElement && (t = t.correspondingUseElement),
        t.nodeType === 3 ? t.parentNode : t
    }
    var po = null
      , sr = null
      , En = null;
    function sn(t) {
        if (t = Di(t)) {
            if (typeof po != "function")
                throw Error(o(280));
            var r = t.stateNode;
            r && (r = Us(r),
            po(t.stateNode, t.type, r))
        }
    }
    function Ss(t) {
        sr ? En ? En.push(t) : En = [t] : sr = t
    }
    function ke() {
        if (sr) {
            var t = sr
              , r = En;
            if (En = sr = null,
            sn(t),
            r)
                for (t = 0; t < r.length; t++)
                    sn(r[t])
        }
    }
    function Ve(t, r) {
        return t(r)
    }
    function He() {}
    var Tt = !1;
    function Mt(t, r, s) {
        if (Tt)
            return t(r, s);
        Tt = !0;
        try {
            return Ve(t, r, s)
        } finally {
            Tt = !1,
            (sr !== null || En !== null) && (He(),
            ke())
        }
    }
    function jt(t, r) {
        var s = t.stateNode;
        if (s === null)
            return null;
        var l = Us(s);
        if (l === null)
            return null;
        s = l[r];
        e: switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (l = !l.disabled) || (t = t.type,
            l = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
            t = !l;
            break e;
        default:
            t = !1
        }
        if (t)
            return null;
        if (s && typeof s != "function")
            throw Error(o(231, r, typeof s));
        return s
    }
    var an = !1;
    if (d)
        try {
            var ht = {};
            Object.defineProperty(ht, "passive", {
                get: function() {
                    an = !0
                }
            }),
            window.addEventListener("test", ht, ht),
            window.removeEventListener("test", ht, ht)
        } catch {
            an = !1
        }
    function Tn(t, r, s, l, f, m, b, k, N) {
        var B = Array.prototype.slice.call(arguments, 3);
        try {
            r.apply(s, B)
        } catch (X) {
            this.onError(X)
        }
    }
    var fi = !1
      , bs = null
      , Cs = !1
      , Il = null
      , B1 = {
        onError: function(t) {
            fi = !0,
            bs = t
        }
    };
    function z1(t, r, s, l, f, m, b, k, N) {
        fi = !1,
        bs = null,
        Tn.apply(B1, arguments)
    }
    function $1(t, r, s, l, f, m, b, k, N) {
        if (z1.apply(this, arguments),
        fi) {
            if (fi) {
                var B = bs;
                fi = !1,
                bs = null
            } else
                throw Error(o(198));
            Cs || (Cs = !0,
            Il = B)
        }
    }
    function Br(t) {
        var r = t
          , s = t;
        if (t.alternate)
            for (; r.return; )
                r = r.return;
        else {
            t = r;
            do
                r = t,
                (r.flags & 4098) !== 0 && (s = r.return),
                t = r.return;
            while (t)
        }
        return r.tag === 3 ? s : null
    }
    function qf(t) {
        if (t.tag === 13) {
            var r = t.memoizedState;
            if (r === null && (t = t.alternate,
            t !== null && (r = t.memoizedState)),
            r !== null)
                return r.dehydrated
        }
        return null
    }
    function Jf(t) {
        if (Br(t) !== t)
            throw Error(o(188))
    }
    function H1(t) {
        var r = t.alternate;
        if (!r) {
            if (r = Br(t),
            r === null)
                throw Error(o(188));
            return r !== t ? null : t
        }
        for (var s = t, l = r; ; ) {
            var f = s.return;
            if (f === null)
                break;
            var m = f.alternate;
            if (m === null) {
                if (l = f.return,
                l !== null) {
                    s = l;
                    continue
                }
                break
            }
            if (f.child === m.child) {
                for (m = f.child; m; ) {
                    if (m === s)
                        return Jf(f),
                        t;
                    if (m === l)
                        return Jf(f),
                        r;
                    m = m.sibling
                }
                throw Error(o(188))
            }
            if (s.return !== l.return)
                s = f,
                l = m;
            else {
                for (var b = !1, k = f.child; k; ) {
                    if (k === s) {
                        b = !0,
                        s = f,
                        l = m;
                        break
                    }
                    if (k === l) {
                        b = !0,
                        l = f,
                        s = m;
                        break
                    }
                    k = k.sibling
                }
                if (!b) {
                    for (k = m.child; k; ) {
                        if (k === s) {
                            b = !0,
                            s = m,
                            l = f;
                            break
                        }
                        if (k === l) {
                            b = !0,
                            l = m,
                            s = f;
                            break
                        }
                        k = k.sibling
                    }
                    if (!b)
                        throw Error(o(189))
                }
            }
            if (s.alternate !== l)
                throw Error(o(190))
        }
        if (s.tag !== 3)
            throw Error(o(188));
        return s.stateNode.current === s ? t : r
    }
    function ep(t) {
        return t = H1(t),
        t !== null ? tp(t) : null
    }
    function tp(t) {
        if (t.tag === 5 || t.tag === 6)
            return t;
        for (t = t.child; t !== null; ) {
            var r = tp(t);
            if (r !== null)
                return r;
            t = t.sibling
        }
        return null
    }
    var np = n.unstable_scheduleCallback
      , rp = n.unstable_cancelCallback
      , U1 = n.unstable_shouldYield
      , W1 = n.unstable_requestPaint
      , nt = n.unstable_now
      , K1 = n.unstable_getCurrentPriorityLevel
      , Ll = n.unstable_ImmediatePriority
      , op = n.unstable_UserBlockingPriority
      , Es = n.unstable_NormalPriority
      , G1 = n.unstable_LowPriority
      , ip = n.unstable_IdlePriority
      , Ts = null
      , Pn = null;
    function Y1(t) {
        if (Pn && typeof Pn.onCommitFiberRoot == "function")
            try {
                Pn.onCommitFiberRoot(Ts, t, void 0, (t.current.flags & 128) === 128)
            } catch {}
    }
    var ln = Math.clz32 ? Math.clz32 : Z1
      , X1 = Math.log
      , Q1 = Math.LN2;
    function Z1(t) {
        return t >>>= 0,
        t === 0 ? 32 : 31 - (X1(t) / Q1 | 0) | 0
    }
    var Ps = 64
      , ks = 4194304;
    function pi(t) {
        switch (t & -t) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return t & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return t
        }
    }
    function As(t, r) {
        var s = t.pendingLanes;
        if (s === 0)
            return 0;
        var l = 0
          , f = t.suspendedLanes
          , m = t.pingedLanes
          , b = s & 268435455;
        if (b !== 0) {
            var k = b & ~f;
            k !== 0 ? l = pi(k) : (m &= b,
            m !== 0 && (l = pi(m)))
        } else
            b = s & ~f,
            b !== 0 ? l = pi(b) : m !== 0 && (l = pi(m));
        if (l === 0)
            return 0;
        if (r !== 0 && r !== l && (r & f) === 0 && (f = l & -l,
        m = r & -r,
        f >= m || f === 16 && (m & 4194240) !== 0))
            return r;
        if ((l & 4) !== 0 && (l |= s & 16),
        r = t.entangledLanes,
        r !== 0)
            for (t = t.entanglements,
            r &= l; 0 < r; )
                s = 31 - ln(r),
                f = 1 << s,
                l |= t[s],
                r &= ~f;
        return l
    }
    function q1(t, r) {
        switch (t) {
        case 1:
        case 2:
        case 4:
            return r + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return r + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function J1(t, r) {
        for (var s = t.suspendedLanes, l = t.pingedLanes, f = t.expirationTimes, m = t.pendingLanes; 0 < m; ) {
            var b = 31 - ln(m)
              , k = 1 << b
              , N = f[b];
            N === -1 ? ((k & s) === 0 || (k & l) !== 0) && (f[b] = q1(k, r)) : N <= r && (t.expiredLanes |= k),
            m &= ~k
        }
    }
    function Vl(t) {
        return t = t.pendingLanes & -1073741825,
        t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
    }
    function sp() {
        var t = Ps;
        return Ps <<= 1,
        (Ps & 4194240) === 0 && (Ps = 64),
        t
    }
    function Fl(t) {
        for (var r = [], s = 0; 31 > s; s++)
            r.push(t);
        return r
    }
    function hi(t, r, s) {
        t.pendingLanes |= r,
        r !== 536870912 && (t.suspendedLanes = 0,
        t.pingedLanes = 0),
        t = t.eventTimes,
        r = 31 - ln(r),
        t[r] = s
    }
    function eS(t, r) {
        var s = t.pendingLanes & ~r;
        t.pendingLanes = r,
        t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.expiredLanes &= r,
        t.mutableReadLanes &= r,
        t.entangledLanes &= r,
        r = t.entanglements;
        var l = t.eventTimes;
        for (t = t.expirationTimes; 0 < s; ) {
            var f = 31 - ln(s)
              , m = 1 << f;
            r[f] = 0,
            l[f] = -1,
            t[f] = -1,
            s &= ~m
        }
    }
    function Bl(t, r) {
        var s = t.entangledLanes |= r;
        for (t = t.entanglements; s; ) {
            var l = 31 - ln(s)
              , f = 1 << l;
            f & r | t[l] & r && (t[l] |= r),
            s &= ~f
        }
    }
    var Be = 0;
    function ap(t) {
        return t &= -t,
        1 < t ? 4 < t ? (t & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var lp, zl, up, cp, dp, $l = !1, Rs = [], ar = null, lr = null, ur = null, mi = new Map, gi = new Map, cr = [], tS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function fp(t, r) {
        switch (t) {
        case "focusin":
        case "focusout":
            ar = null;
            break;
        case "dragenter":
        case "dragleave":
            lr = null;
            break;
        case "mouseover":
        case "mouseout":
            ur = null;
            break;
        case "pointerover":
        case "pointerout":
            mi.delete(r.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            gi.delete(r.pointerId)
        }
    }
    function vi(t, r, s, l, f, m) {
        return t === null || t.nativeEvent !== m ? (t = {
            blockedOn: r,
            domEventName: s,
            eventSystemFlags: l,
            nativeEvent: m,
            targetContainers: [f]
        },
        r !== null && (r = Di(r),
        r !== null && zl(r)),
        t) : (t.eventSystemFlags |= l,
        r = t.targetContainers,
        f !== null && r.indexOf(f) === -1 && r.push(f),
        t)
    }
    function nS(t, r, s, l, f) {
        switch (r) {
        case "focusin":
            return ar = vi(ar, t, r, s, l, f),
            !0;
        case "dragenter":
            return lr = vi(lr, t, r, s, l, f),
            !0;
        case "mouseover":
            return ur = vi(ur, t, r, s, l, f),
            !0;
        case "pointerover":
            var m = f.pointerId;
            return mi.set(m, vi(mi.get(m) || null, t, r, s, l, f)),
            !0;
        case "gotpointercapture":
            return m = f.pointerId,
            gi.set(m, vi(gi.get(m) || null, t, r, s, l, f)),
            !0
        }
        return !1
    }
    function pp(t) {
        var r = zr(t.target);
        if (r !== null) {
            var s = Br(r);
            if (s !== null) {
                if (r = s.tag,
                r === 13) {
                    if (r = qf(s),
                    r !== null) {
                        t.blockedOn = r,
                        dp(t.priority, function() {
                            up(s)
                        });
                        return
                    }
                } else if (r === 3 && s.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }
    function Ns(t) {
        if (t.blockedOn !== null)
            return !1;
        for (var r = t.targetContainers; 0 < r.length; ) {
            var s = Ul(t.domEventName, t.eventSystemFlags, r[0], t.nativeEvent);
            if (s === null) {
                s = t.nativeEvent;
                var l = new s.constructor(s.type,s);
                di = l,
                s.target.dispatchEvent(l),
                di = null
            } else
                return r = Di(s),
                r !== null && zl(r),
                t.blockedOn = s,
                !1;
            r.shift()
        }
        return !0
    }
    function hp(t, r, s) {
        Ns(t) && s.delete(r)
    }
    function rS() {
        $l = !1,
        ar !== null && Ns(ar) && (ar = null),
        lr !== null && Ns(lr) && (lr = null),
        ur !== null && Ns(ur) && (ur = null),
        mi.forEach(hp),
        gi.forEach(hp)
    }
    function yi(t, r) {
        t.blockedOn === r && (t.blockedOn = null,
        $l || ($l = !0,
        n.unstable_scheduleCallback(n.unstable_NormalPriority, rS)))
    }
    function xi(t) {
        function r(f) {
            return yi(f, t)
        }
        if (0 < Rs.length) {
            yi(Rs[0], t);
            for (var s = 1; s < Rs.length; s++) {
                var l = Rs[s];
                l.blockedOn === t && (l.blockedOn = null)
            }
        }
        for (ar !== null && yi(ar, t),
        lr !== null && yi(lr, t),
        ur !== null && yi(ur, t),
        mi.forEach(r),
        gi.forEach(r),
        s = 0; s < cr.length; s++)
            l = cr[s],
            l.blockedOn === t && (l.blockedOn = null);
        for (; 0 < cr.length && (s = cr[0],
        s.blockedOn === null); )
            pp(s),
            s.blockedOn === null && cr.shift()
    }
    var ho = O.ReactCurrentBatchConfig
      , Ds = !0;
    function oS(t, r, s, l) {
        var f = Be
          , m = ho.transition;
        ho.transition = null;
        try {
            Be = 1,
            Hl(t, r, s, l)
        } finally {
            Be = f,
            ho.transition = m
        }
    }
    function iS(t, r, s, l) {
        var f = Be
          , m = ho.transition;
        ho.transition = null;
        try {
            Be = 4,
            Hl(t, r, s, l)
        } finally {
            Be = f,
            ho.transition = m
        }
    }
    function Hl(t, r, s, l) {
        if (Ds) {
            var f = Ul(t, r, s, l);
            if (f === null)
                au(t, r, l, Ms, s),
                fp(t, l);
            else if (nS(f, t, r, s, l))
                l.stopPropagation();
            else if (fp(t, l),
            r & 4 && -1 < tS.indexOf(t)) {
                for (; f !== null; ) {
                    var m = Di(f);
                    if (m !== null && lp(m),
                    m = Ul(t, r, s, l),
                    m === null && au(t, r, l, Ms, s),
                    m === f)
                        break;
                    f = m
                }
                f !== null && l.stopPropagation()
            } else
                au(t, r, l, null, s)
        }
    }
    var Ms = null;
    function Ul(t, r, s, l) {
        if (Ms = null,
        t = fo(l),
        t = zr(t),
        t !== null)
            if (r = Br(t),
            r === null)
                t = null;
            else if (s = r.tag,
            s === 13) {
                if (t = qf(r),
                t !== null)
                    return t;
                t = null
            } else if (s === 3) {
                if (r.stateNode.current.memoizedState.isDehydrated)
                    return r.tag === 3 ? r.stateNode.containerInfo : null;
                t = null
            } else
                r !== t && (t = null);
        return Ms = t,
        null
    }
    function mp(t) {
        switch (t) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (K1()) {
            case Ll:
                return 1;
            case op:
                return 4;
            case Es:
            case G1:
                return 16;
            case ip:
                return 536870912;
            default:
                return 16
            }
        default:
            return 16
        }
    }
    var dr = null
      , Wl = null
      , js = null;
    function gp() {
        if (js)
            return js;
        var t, r = Wl, s = r.length, l, f = "value"in dr ? dr.value : dr.textContent, m = f.length;
        for (t = 0; t < s && r[t] === f[t]; t++)
            ;
        var b = s - t;
        for (l = 1; l <= b && r[s - l] === f[m - l]; l++)
            ;
        return js = f.slice(t, 1 < l ? 1 - l : void 0)
    }
    function Os(t) {
        var r = t.keyCode;
        return "charCode"in t ? (t = t.charCode,
        t === 0 && r === 13 && (t = 13)) : t = r,
        t === 10 && (t = 13),
        32 <= t || t === 13 ? t : 0
    }
    function _s() {
        return !0
    }
    function vp() {
        return !1
    }
    function Ht(t) {
        function r(s, l, f, m, b) {
            this._reactName = s,
            this._targetInst = f,
            this.type = l,
            this.nativeEvent = m,
            this.target = b,
            this.currentTarget = null;
            for (var k in t)
                t.hasOwnProperty(k) && (s = t[k],
                this[k] = s ? s(m) : m[k]);
            return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? _s : vp,
            this.isPropagationStopped = vp,
            this
        }
        return G(r.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var s = this.nativeEvent;
                s && (s.preventDefault ? s.preventDefault() : typeof s.returnValue != "unknown" && (s.returnValue = !1),
                this.isDefaultPrevented = _s)
            },
            stopPropagation: function() {
                var s = this.nativeEvent;
                s && (s.stopPropagation ? s.stopPropagation() : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0),
                this.isPropagationStopped = _s)
            },
            persist: function() {},
            isPersistent: _s
        }),
        r
    }
    var mo = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(t) {
            return t.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Kl = Ht(mo), wi = G({}, mo, {
        view: 0,
        detail: 0
    }), sS = Ht(wi), Gl, Yl, Si, Is = G({}, wi, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Ql,
        button: 0,
        buttons: 0,
        relatedTarget: function(t) {
            return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
        },
        movementX: function(t) {
            return "movementX"in t ? t.movementX : (t !== Si && (Si && t.type === "mousemove" ? (Gl = t.screenX - Si.screenX,
            Yl = t.screenY - Si.screenY) : Yl = Gl = 0,
            Si = t),
            Gl)
        },
        movementY: function(t) {
            return "movementY"in t ? t.movementY : Yl
        }
    }), yp = Ht(Is), aS = G({}, Is, {
        dataTransfer: 0
    }), lS = Ht(aS), uS = G({}, wi, {
        relatedTarget: 0
    }), Xl = Ht(uS), cS = G({}, mo, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), dS = Ht(cS), fS = G({}, mo, {
        clipboardData: function(t) {
            return "clipboardData"in t ? t.clipboardData : window.clipboardData
        }
    }), pS = Ht(fS), hS = G({}, mo, {
        data: 0
    }), xp = Ht(hS), mS = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, gS = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, vS = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function yS(t) {
        var r = this.nativeEvent;
        return r.getModifierState ? r.getModifierState(t) : (t = vS[t]) ? !!r[t] : !1
    }
    function Ql() {
        return yS
    }
    var xS = G({}, wi, {
        key: function(t) {
            if (t.key) {
                var r = mS[t.key] || t.key;
                if (r !== "Unidentified")
                    return r
            }
            return t.type === "keypress" ? (t = Os(t),
            t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? gS[t.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Ql,
        charCode: function(t) {
            return t.type === "keypress" ? Os(t) : 0
        },
        keyCode: function(t) {
            return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        },
        which: function(t) {
            return t.type === "keypress" ? Os(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        }
    })
      , wS = Ht(xS)
      , SS = G({}, Is, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , wp = Ht(SS)
      , bS = G({}, wi, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Ql
    })
      , CS = Ht(bS)
      , ES = G({}, mo, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , TS = Ht(ES)
      , PS = G({}, Is, {
        deltaX: function(t) {
            return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
        },
        deltaY: function(t) {
            return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , kS = Ht(PS)
      , AS = [9, 13, 27, 32]
      , Zl = d && "CompositionEvent"in window
      , bi = null;
    d && "documentMode"in document && (bi = document.documentMode);
    var RS = d && "TextEvent"in window && !bi
      , Sp = d && (!Zl || bi && 8 < bi && 11 >= bi)
      , bp = " "
      , Cp = !1;
    function Ep(t, r) {
        switch (t) {
        case "keyup":
            return AS.indexOf(r.keyCode) !== -1;
        case "keydown":
            return r.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function Tp(t) {
        return t = t.detail,
        typeof t == "object" && "data"in t ? t.data : null
    }
    var go = !1;
    function NS(t, r) {
        switch (t) {
        case "compositionend":
            return Tp(r);
        case "keypress":
            return r.which !== 32 ? null : (Cp = !0,
            bp);
        case "textInput":
            return t = r.data,
            t === bp && Cp ? null : t;
        default:
            return null
        }
    }
    function DS(t, r) {
        if (go)
            return t === "compositionend" || !Zl && Ep(t, r) ? (t = gp(),
            js = Wl = dr = null,
            go = !1,
            t) : null;
        switch (t) {
        case "paste":
            return null;
        case "keypress":
            if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
                if (r.char && 1 < r.char.length)
                    return r.char;
                if (r.which)
                    return String.fromCharCode(r.which)
            }
            return null;
        case "compositionend":
            return Sp && r.locale !== "ko" ? null : r.data;
        default:
            return null
        }
    }
    var MS = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Pp(t) {
        var r = t && t.nodeName && t.nodeName.toLowerCase();
        return r === "input" ? !!MS[t.type] : r === "textarea"
    }
    function kp(t, r, s, l) {
        Ss(l),
        r = zs(r, "onChange"),
        0 < r.length && (s = new Kl("onChange","change",null,s,l),
        t.push({
            event: s,
            listeners: r
        }))
    }
    var Ci = null
      , Ei = null;
    function jS(t) {
        Wp(t, 0)
    }
    function Ls(t) {
        var r = So(t);
        if (Me(r))
            return t
    }
    function OS(t, r) {
        if (t === "change")
            return r
    }
    var Ap = !1;
    if (d) {
        var ql;
        if (d) {
            var Jl = "oninput"in document;
            if (!Jl) {
                var Rp = document.createElement("div");
                Rp.setAttribute("oninput", "return;"),
                Jl = typeof Rp.oninput == "function"
            }
            ql = Jl
        } else
            ql = !1;
        Ap = ql && (!document.documentMode || 9 < document.documentMode)
    }
    function Np() {
        Ci && (Ci.detachEvent("onpropertychange", Dp),
        Ei = Ci = null)
    }
    function Dp(t) {
        if (t.propertyName === "value" && Ls(Ei)) {
            var r = [];
            kp(r, Ei, t, fo(t)),
            Mt(jS, r)
        }
    }
    function _S(t, r, s) {
        t === "focusin" ? (Np(),
        Ci = r,
        Ei = s,
        Ci.attachEvent("onpropertychange", Dp)) : t === "focusout" && Np()
    }
    function IS(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown")
            return Ls(Ei)
    }
    function LS(t, r) {
        if (t === "click")
            return Ls(r)
    }
    function VS(t, r) {
        if (t === "input" || t === "change")
            return Ls(r)
    }
    function FS(t, r) {
        return t === r && (t !== 0 || 1 / t === 1 / r) || t !== t && r !== r
    }
    var un = typeof Object.is == "function" ? Object.is : FS;
    function Ti(t, r) {
        if (un(t, r))
            return !0;
        if (typeof t != "object" || t === null || typeof r != "object" || r === null)
            return !1;
        var s = Object.keys(t)
          , l = Object.keys(r);
        if (s.length !== l.length)
            return !1;
        for (l = 0; l < s.length; l++) {
            var f = s[l];
            if (!p.call(r, f) || !un(t[f], r[f]))
                return !1
        }
        return !0
    }
    function Mp(t) {
        for (; t && t.firstChild; )
            t = t.firstChild;
        return t
    }
    function jp(t, r) {
        var s = Mp(t);
        t = 0;
        for (var l; s; ) {
            if (s.nodeType === 3) {
                if (l = t + s.textContent.length,
                t <= r && l >= r)
                    return {
                        node: s,
                        offset: r - t
                    };
                t = l
            }
            e: {
                for (; s; ) {
                    if (s.nextSibling) {
                        s = s.nextSibling;
                        break e
                    }
                    s = s.parentNode
                }
                s = void 0
            }
            s = Mp(s)
        }
    }
    function Op(t, r) {
        return t && r ? t === r ? !0 : t && t.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Op(t, r.parentNode) : "contains"in t ? t.contains(r) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(r) & 16) : !1 : !1
    }
    function _p() {
        for (var t = window, r = Fe(); r instanceof t.HTMLIFrameElement; ) {
            try {
                var s = typeof r.contentWindow.location.href == "string"
            } catch {
                s = !1
            }
            if (s)
                t = r.contentWindow;
            else
                break;
            r = Fe(t.document)
        }
        return r
    }
    function eu(t) {
        var r = t && t.nodeName && t.nodeName.toLowerCase();
        return r && (r === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || r === "textarea" || t.contentEditable === "true")
    }
    function BS(t) {
        var r = _p()
          , s = t.focusedElem
          , l = t.selectionRange;
        if (r !== s && s && s.ownerDocument && Op(s.ownerDocument.documentElement, s)) {
            if (l !== null && eu(s)) {
                if (r = l.start,
                t = l.end,
                t === void 0 && (t = r),
                "selectionStart"in s)
                    s.selectionStart = r,
                    s.selectionEnd = Math.min(t, s.value.length);
                else if (t = (r = s.ownerDocument || document) && r.defaultView || window,
                t.getSelection) {
                    t = t.getSelection();
                    var f = s.textContent.length
                      , m = Math.min(l.start, f);
                    l = l.end === void 0 ? m : Math.min(l.end, f),
                    !t.extend && m > l && (f = l,
                    l = m,
                    m = f),
                    f = jp(s, m);
                    var b = jp(s, l);
                    f && b && (t.rangeCount !== 1 || t.anchorNode !== f.node || t.anchorOffset !== f.offset || t.focusNode !== b.node || t.focusOffset !== b.offset) && (r = r.createRange(),
                    r.setStart(f.node, f.offset),
                    t.removeAllRanges(),
                    m > l ? (t.addRange(r),
                    t.extend(b.node, b.offset)) : (r.setEnd(b.node, b.offset),
                    t.addRange(r)))
                }
            }
            for (r = [],
            t = s; t = t.parentNode; )
                t.nodeType === 1 && r.push({
                    element: t,
                    left: t.scrollLeft,
                    top: t.scrollTop
                });
            for (typeof s.focus == "function" && s.focus(),
            s = 0; s < r.length; s++)
                t = r[s],
                t.element.scrollLeft = t.left,
                t.element.scrollTop = t.top
        }
    }
    var zS = d && "documentMode"in document && 11 >= document.documentMode
      , vo = null
      , tu = null
      , Pi = null
      , nu = !1;
    function Ip(t, r, s) {
        var l = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
        nu || vo == null || vo !== Fe(l) || (l = vo,
        "selectionStart"in l && eu(l) ? l = {
            start: l.selectionStart,
            end: l.selectionEnd
        } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(),
        l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
        }),
        Pi && Ti(Pi, l) || (Pi = l,
        l = zs(tu, "onSelect"),
        0 < l.length && (r = new Kl("onSelect","select",null,r,s),
        t.push({
            event: r,
            listeners: l
        }),
        r.target = vo)))
    }
    function Vs(t, r) {
        var s = {};
        return s[t.toLowerCase()] = r.toLowerCase(),
        s["Webkit" + t] = "webkit" + r,
        s["Moz" + t] = "moz" + r,
        s
    }
    var yo = {
        animationend: Vs("Animation", "AnimationEnd"),
        animationiteration: Vs("Animation", "AnimationIteration"),
        animationstart: Vs("Animation", "AnimationStart"),
        transitionend: Vs("Transition", "TransitionEnd")
    }
      , ru = {}
      , Lp = {};
    d && (Lp = document.createElement("div").style,
    "AnimationEvent"in window || (delete yo.animationend.animation,
    delete yo.animationiteration.animation,
    delete yo.animationstart.animation),
    "TransitionEvent"in window || delete yo.transitionend.transition);
    function Fs(t) {
        if (ru[t])
            return ru[t];
        if (!yo[t])
            return t;
        var r = yo[t], s;
        for (s in r)
            if (r.hasOwnProperty(s) && s in Lp)
                return ru[t] = r[s];
        return t
    }
    var Vp = Fs("animationend")
      , Fp = Fs("animationiteration")
      , Bp = Fs("animationstart")
      , zp = Fs("transitionend")
      , $p = new Map
      , Hp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function fr(t, r) {
        $p.set(t, r),
        u(r, [t])
    }
    for (var ou = 0; ou < Hp.length; ou++) {
        var iu = Hp[ou]
          , $S = iu.toLowerCase()
          , HS = iu[0].toUpperCase() + iu.slice(1);
        fr($S, "on" + HS)
    }
    fr(Vp, "onAnimationEnd"),
    fr(Fp, "onAnimationIteration"),
    fr(Bp, "onAnimationStart"),
    fr("dblclick", "onDoubleClick"),
    fr("focusin", "onFocus"),
    fr("focusout", "onBlur"),
    fr(zp, "onTransitionEnd"),
    c("onMouseEnter", ["mouseout", "mouseover"]),
    c("onMouseLeave", ["mouseout", "mouseover"]),
    c("onPointerEnter", ["pointerout", "pointerover"]),
    c("onPointerLeave", ["pointerout", "pointerover"]),
    u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var ki = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , US = new Set("cancel close invalid load scroll toggle".split(" ").concat(ki));
    function Up(t, r, s) {
        var l = t.type || "unknown-event";
        t.currentTarget = s,
        $1(l, r, void 0, t),
        t.currentTarget = null
    }
    function Wp(t, r) {
        r = (r & 4) !== 0;
        for (var s = 0; s < t.length; s++) {
            var l = t[s]
              , f = l.event;
            l = l.listeners;
            e: {
                var m = void 0;
                if (r)
                    for (var b = l.length - 1; 0 <= b; b--) {
                        var k = l[b]
                          , N = k.instance
                          , B = k.currentTarget;
                        if (k = k.listener,
                        N !== m && f.isPropagationStopped())
                            break e;
                        Up(f, k, B),
                        m = N
                    }
                else
                    for (b = 0; b < l.length; b++) {
                        if (k = l[b],
                        N = k.instance,
                        B = k.currentTarget,
                        k = k.listener,
                        N !== m && f.isPropagationStopped())
                            break e;
                        Up(f, k, B),
                        m = N
                    }
            }
        }
        if (Cs)
            throw t = Il,
            Cs = !1,
            Il = null,
            t
    }
    function We(t, r) {
        var s = r[pu];
        s === void 0 && (s = r[pu] = new Set);
        var l = t + "__bubble";
        s.has(l) || (Kp(r, t, 2, !1),
        s.add(l))
    }
    function su(t, r, s) {
        var l = 0;
        r && (l |= 4),
        Kp(s, t, l, r)
    }
    var Bs = "_reactListening" + Math.random().toString(36).slice(2);
    function Ai(t) {
        if (!t[Bs]) {
            t[Bs] = !0,
            i.forEach(function(s) {
                s !== "selectionchange" && (US.has(s) || su(s, !1, t),
                su(s, !0, t))
            });
            var r = t.nodeType === 9 ? t : t.ownerDocument;
            r === null || r[Bs] || (r[Bs] = !0,
            su("selectionchange", !1, r))
        }
    }
    function Kp(t, r, s, l) {
        switch (mp(r)) {
        case 1:
            var f = oS;
            break;
        case 4:
            f = iS;
            break;
        default:
            f = Hl
        }
        s = f.bind(null, r, s, t),
        f = void 0,
        !an || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (f = !0),
        l ? f !== void 0 ? t.addEventListener(r, s, {
            capture: !0,
            passive: f
        }) : t.addEventListener(r, s, !0) : f !== void 0 ? t.addEventListener(r, s, {
            passive: f
        }) : t.addEventListener(r, s, !1)
    }
    function au(t, r, s, l, f) {
        var m = l;
        if ((r & 1) === 0 && (r & 2) === 0 && l !== null)
            e: for (; ; ) {
                if (l === null)
                    return;
                var b = l.tag;
                if (b === 3 || b === 4) {
                    var k = l.stateNode.containerInfo;
                    if (k === f || k.nodeType === 8 && k.parentNode === f)
                        break;
                    if (b === 4)
                        for (b = l.return; b !== null; ) {
                            var N = b.tag;
                            if ((N === 3 || N === 4) && (N = b.stateNode.containerInfo,
                            N === f || N.nodeType === 8 && N.parentNode === f))
                                return;
                            b = b.return
                        }
                    for (; k !== null; ) {
                        if (b = zr(k),
                        b === null)
                            return;
                        if (N = b.tag,
                        N === 5 || N === 6) {
                            l = m = b;
                            continue e
                        }
                        k = k.parentNode
                    }
                }
                l = l.return
            }
        Mt(function() {
            var B = m
              , X = fo(s)
              , q = [];
            e: {
                var Y = $p.get(t);
                if (Y !== void 0) {
                    var de = Kl
                      , me = t;
                    switch (t) {
                    case "keypress":
                        if (Os(s) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        de = wS;
                        break;
                    case "focusin":
                        me = "focus",
                        de = Xl;
                        break;
                    case "focusout":
                        me = "blur",
                        de = Xl;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        de = Xl;
                        break;
                    case "click":
                        if (s.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        de = yp;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        de = lS;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        de = CS;
                        break;
                    case Vp:
                    case Fp:
                    case Bp:
                        de = dS;
                        break;
                    case zp:
                        de = TS;
                        break;
                    case "scroll":
                        de = sS;
                        break;
                    case "wheel":
                        de = kS;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        de = pS;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        de = wp
                    }
                    var ve = (r & 4) !== 0
                      , rt = !ve && t === "scroll"
                      , _ = ve ? Y !== null ? Y + "Capture" : null : Y;
                    ve = [];
                    for (var M = B, L; M !== null; ) {
                        L = M;
                        var te = L.stateNode;
                        if (L.tag === 5 && te !== null && (L = te,
                        _ !== null && (te = jt(M, _),
                        te != null && ve.push(Ri(M, te, L)))),
                        rt)
                            break;
                        M = M.return
                    }
                    0 < ve.length && (Y = new de(Y,me,null,s,X),
                    q.push({
                        event: Y,
                        listeners: ve
                    }))
                }
            }
            if ((r & 7) === 0) {
                e: {
                    if (Y = t === "mouseover" || t === "pointerover",
                    de = t === "mouseout" || t === "pointerout",
                    Y && s !== di && (me = s.relatedTarget || s.fromElement) && (zr(me) || me[Un]))
                        break e;
                    if ((de || Y) && (Y = X.window === X ? X : (Y = X.ownerDocument) ? Y.defaultView || Y.parentWindow : window,
                    de ? (me = s.relatedTarget || s.toElement,
                    de = B,
                    me = me ? zr(me) : null,
                    me !== null && (rt = Br(me),
                    me !== rt || me.tag !== 5 && me.tag !== 6) && (me = null)) : (de = null,
                    me = B),
                    de !== me)) {
                        if (ve = yp,
                        te = "onMouseLeave",
                        _ = "onMouseEnter",
                        M = "mouse",
                        (t === "pointerout" || t === "pointerover") && (ve = wp,
                        te = "onPointerLeave",
                        _ = "onPointerEnter",
                        M = "pointer"),
                        rt = de == null ? Y : So(de),
                        L = me == null ? Y : So(me),
                        Y = new ve(te,M + "leave",de,s,X),
                        Y.target = rt,
                        Y.relatedTarget = L,
                        te = null,
                        zr(X) === B && (ve = new ve(_,M + "enter",me,s,X),
                        ve.target = L,
                        ve.relatedTarget = rt,
                        te = ve),
                        rt = te,
                        de && me)
                            t: {
                                for (ve = de,
                                _ = me,
                                M = 0,
                                L = ve; L; L = xo(L))
                                    M++;
                                for (L = 0,
                                te = _; te; te = xo(te))
                                    L++;
                                for (; 0 < M - L; )
                                    ve = xo(ve),
                                    M--;
                                for (; 0 < L - M; )
                                    _ = xo(_),
                                    L--;
                                for (; M--; ) {
                                    if (ve === _ || _ !== null && ve === _.alternate)
                                        break t;
                                    ve = xo(ve),
                                    _ = xo(_)
                                }
                                ve = null
                            }
                        else
                            ve = null;
                        de !== null && Gp(q, Y, de, ve, !1),
                        me !== null && rt !== null && Gp(q, rt, me, ve, !0)
                    }
                }
                e: {
                    if (Y = B ? So(B) : window,
                    de = Y.nodeName && Y.nodeName.toLowerCase(),
                    de === "select" || de === "input" && Y.type === "file")
                        var ye = OS;
                    else if (Pp(Y))
                        if (Ap)
                            ye = VS;
                        else {
                            ye = IS;
                            var we = _S
                        }
                    else
                        (de = Y.nodeName) && de.toLowerCase() === "input" && (Y.type === "checkbox" || Y.type === "radio") && (ye = LS);
                    if (ye && (ye = ye(t, B))) {
                        kp(q, ye, s, X);
                        break e
                    }
                    we && we(t, Y, B),
                    t === "focusout" && (we = Y._wrapperState) && we.controlled && Y.type === "number" && it(Y, "number", Y.value)
                }
                switch (we = B ? So(B) : window,
                t) {
                case "focusin":
                    (Pp(we) || we.contentEditable === "true") && (vo = we,
                    tu = B,
                    Pi = null);
                    break;
                case "focusout":
                    Pi = tu = vo = null;
                    break;
                case "mousedown":
                    nu = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    nu = !1,
                    Ip(q, s, X);
                    break;
                case "selectionchange":
                    if (zS)
                        break;
                case "keydown":
                case "keyup":
                    Ip(q, s, X)
                }
                var Se;
                if (Zl)
                    e: {
                        switch (t) {
                        case "compositionstart":
                            var Pe = "onCompositionStart";
                            break e;
                        case "compositionend":
                            Pe = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            Pe = "onCompositionUpdate";
                            break e
                        }
                        Pe = void 0
                    }
                else
                    go ? Ep(t, s) && (Pe = "onCompositionEnd") : t === "keydown" && s.keyCode === 229 && (Pe = "onCompositionStart");
                Pe && (Sp && s.locale !== "ko" && (go || Pe !== "onCompositionStart" ? Pe === "onCompositionEnd" && go && (Se = gp()) : (dr = X,
                Wl = "value"in dr ? dr.value : dr.textContent,
                go = !0)),
                we = zs(B, Pe),
                0 < we.length && (Pe = new xp(Pe,t,null,s,X),
                q.push({
                    event: Pe,
                    listeners: we
                }),
                Se ? Pe.data = Se : (Se = Tp(s),
                Se !== null && (Pe.data = Se)))),
                (Se = RS ? NS(t, s) : DS(t, s)) && (B = zs(B, "onBeforeInput"),
                0 < B.length && (X = new xp("onBeforeInput","beforeinput",null,s,X),
                q.push({
                    event: X,
                    listeners: B
                }),
                X.data = Se))
            }
            Wp(q, r)
        })
    }
    function Ri(t, r, s) {
        return {
            instance: t,
            listener: r,
            currentTarget: s
        }
    }
    function zs(t, r) {
        for (var s = r + "Capture", l = []; t !== null; ) {
            var f = t
              , m = f.stateNode;
            f.tag === 5 && m !== null && (f = m,
            m = jt(t, s),
            m != null && l.unshift(Ri(t, m, f)),
            m = jt(t, r),
            m != null && l.push(Ri(t, m, f))),
            t = t.return
        }
        return l
    }
    function xo(t) {
        if (t === null)
            return null;
        do
            t = t.return;
        while (t && t.tag !== 5);
        return t || null
    }
    function Gp(t, r, s, l, f) {
        for (var m = r._reactName, b = []; s !== null && s !== l; ) {
            var k = s
              , N = k.alternate
              , B = k.stateNode;
            if (N !== null && N === l)
                break;
            k.tag === 5 && B !== null && (k = B,
            f ? (N = jt(s, m),
            N != null && b.unshift(Ri(s, N, k))) : f || (N = jt(s, m),
            N != null && b.push(Ri(s, N, k)))),
            s = s.return
        }
        b.length !== 0 && t.push({
            event: r,
            listeners: b
        })
    }
    var WS = /\r\n?/g
      , KS = /\u0000|\uFFFD/g;
    function Yp(t) {
        return (typeof t == "string" ? t : "" + t).replace(WS, `
`).replace(KS, "")
    }
    function $s(t, r, s) {
        if (r = Yp(r),
        Yp(t) !== r && s)
            throw Error(o(425))
    }
    function Hs() {}
    var lu = null
      , uu = null;
    function cu(t, r) {
        return t === "textarea" || t === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null
    }
    var du = typeof setTimeout == "function" ? setTimeout : void 0
      , GS = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Xp = typeof Promise == "function" ? Promise : void 0
      , YS = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xp < "u" ? function(t) {
        return Xp.resolve(null).then(t).catch(XS)
    }
    : du;
    function XS(t) {
        setTimeout(function() {
            throw t
        })
    }
    function fu(t, r) {
        var s = r
          , l = 0;
        do {
            var f = s.nextSibling;
            if (t.removeChild(s),
            f && f.nodeType === 8)
                if (s = f.data,
                s === "/$") {
                    if (l === 0) {
                        t.removeChild(f),
                        xi(r);
                        return
                    }
                    l--
                } else
                    s !== "$" && s !== "$?" && s !== "$!" || l++;
            s = f
        } while (s);
        xi(r)
    }
    function pr(t) {
        for (; t != null; t = t.nextSibling) {
            var r = t.nodeType;
            if (r === 1 || r === 3)
                break;
            if (r === 8) {
                if (r = t.data,
                r === "$" || r === "$!" || r === "$?")
                    break;
                if (r === "/$")
                    return null
            }
        }
        return t
    }
    function Qp(t) {
        t = t.previousSibling;
        for (var r = 0; t; ) {
            if (t.nodeType === 8) {
                var s = t.data;
                if (s === "$" || s === "$!" || s === "$?") {
                    if (r === 0)
                        return t;
                    r--
                } else
                    s === "/$" && r++
            }
            t = t.previousSibling
        }
        return null
    }
    var wo = Math.random().toString(36).slice(2)
      , kn = "__reactFiber$" + wo
      , Ni = "__reactProps$" + wo
      , Un = "__reactContainer$" + wo
      , pu = "__reactEvents$" + wo
      , QS = "__reactListeners$" + wo
      , ZS = "__reactHandles$" + wo;
    function zr(t) {
        var r = t[kn];
        if (r)
            return r;
        for (var s = t.parentNode; s; ) {
            if (r = s[Un] || s[kn]) {
                if (s = r.alternate,
                r.child !== null || s !== null && s.child !== null)
                    for (t = Qp(t); t !== null; ) {
                        if (s = t[kn])
                            return s;
                        t = Qp(t)
                    }
                return r
            }
            t = s,
            s = t.parentNode
        }
        return null
    }
    function Di(t) {
        return t = t[kn] || t[Un],
        !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t
    }
    function So(t) {
        if (t.tag === 5 || t.tag === 6)
            return t.stateNode;
        throw Error(o(33))
    }
    function Us(t) {
        return t[Ni] || null
    }
    var hu = []
      , bo = -1;
    function hr(t) {
        return {
            current: t
        }
    }
    function Ke(t) {
        0 > bo || (t.current = hu[bo],
        hu[bo] = null,
        bo--)
    }
    function Ue(t, r) {
        bo++,
        hu[bo] = t.current,
        t.current = r
    }
    var mr = {}
      , xt = hr(mr)
      , Ot = hr(!1)
      , $r = mr;
    function Co(t, r) {
        var s = t.type.contextTypes;
        if (!s)
            return mr;
        var l = t.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === r)
            return l.__reactInternalMemoizedMaskedChildContext;
        var f = {}, m;
        for (m in s)
            f[m] = r[m];
        return l && (t = t.stateNode,
        t.__reactInternalMemoizedUnmaskedChildContext = r,
        t.__reactInternalMemoizedMaskedChildContext = f),
        f
    }
    function _t(t) {
        return t = t.childContextTypes,
        t != null
    }
    function Ws() {
        Ke(Ot),
        Ke(xt)
    }
    function Zp(t, r, s) {
        if (xt.current !== mr)
            throw Error(o(168));
        Ue(xt, r),
        Ue(Ot, s)
    }
    function qp(t, r, s) {
        var l = t.stateNode;
        if (r = r.childContextTypes,
        typeof l.getChildContext != "function")
            return s;
        l = l.getChildContext();
        for (var f in l)
            if (!(f in r))
                throw Error(o(108, F(t) || "Unknown", f));
        return G({}, s, l)
    }
    function Ks(t) {
        return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || mr,
        $r = xt.current,
        Ue(xt, t),
        Ue(Ot, Ot.current),
        !0
    }
    function Jp(t, r, s) {
        var l = t.stateNode;
        if (!l)
            throw Error(o(169));
        s ? (t = qp(t, r, $r),
        l.__reactInternalMemoizedMergedChildContext = t,
        Ke(Ot),
        Ke(xt),
        Ue(xt, t)) : Ke(Ot),
        Ue(Ot, s)
    }
    var Wn = null
      , Gs = !1
      , mu = !1;
    function eh(t) {
        Wn === null ? Wn = [t] : Wn.push(t)
    }
    function qS(t) {
        Gs = !0,
        eh(t)
    }
    function gr() {
        if (!mu && Wn !== null) {
            mu = !0;
            var t = 0
              , r = Be;
            try {
                var s = Wn;
                for (Be = 1; t < s.length; t++) {
                    var l = s[t];
                    do
                        l = l(!0);
                    while (l !== null)
                }
                Wn = null,
                Gs = !1
            } catch (f) {
                throw Wn !== null && (Wn = Wn.slice(t + 1)),
                np(Ll, gr),
                f
            } finally {
                Be = r,
                mu = !1
            }
        }
        return null
    }
    var Eo = []
      , To = 0
      , Ys = null
      , Xs = 0
      , Qt = []
      , Zt = 0
      , Hr = null
      , Kn = 1
      , Gn = "";
    function Ur(t, r) {
        Eo[To++] = Xs,
        Eo[To++] = Ys,
        Ys = t,
        Xs = r
    }
    function th(t, r, s) {
        Qt[Zt++] = Kn,
        Qt[Zt++] = Gn,
        Qt[Zt++] = Hr,
        Hr = t;
        var l = Kn;
        t = Gn;
        var f = 32 - ln(l) - 1;
        l &= ~(1 << f),
        s += 1;
        var m = 32 - ln(r) + f;
        if (30 < m) {
            var b = f - f % 5;
            m = (l & (1 << b) - 1).toString(32),
            l >>= b,
            f -= b,
            Kn = 1 << 32 - ln(r) + f | s << f | l,
            Gn = m + t
        } else
            Kn = 1 << m | s << f | l,
            Gn = t
    }
    function gu(t) {
        t.return !== null && (Ur(t, 1),
        th(t, 1, 0))
    }
    function vu(t) {
        for (; t === Ys; )
            Ys = Eo[--To],
            Eo[To] = null,
            Xs = Eo[--To],
            Eo[To] = null;
        for (; t === Hr; )
            Hr = Qt[--Zt],
            Qt[Zt] = null,
            Gn = Qt[--Zt],
            Qt[Zt] = null,
            Kn = Qt[--Zt],
            Qt[Zt] = null
    }
    var Ut = null
      , Wt = null
      , Ye = !1
      , cn = null;
    function nh(t, r) {
        var s = tn(5, null, null, 0);
        s.elementType = "DELETED",
        s.stateNode = r,
        s.return = t,
        r = t.deletions,
        r === null ? (t.deletions = [s],
        t.flags |= 16) : r.push(s)
    }
    function rh(t, r) {
        switch (t.tag) {
        case 5:
            var s = t.type;
            return r = r.nodeType !== 1 || s.toLowerCase() !== r.nodeName.toLowerCase() ? null : r,
            r !== null ? (t.stateNode = r,
            Ut = t,
            Wt = pr(r.firstChild),
            !0) : !1;
        case 6:
            return r = t.pendingProps === "" || r.nodeType !== 3 ? null : r,
            r !== null ? (t.stateNode = r,
            Ut = t,
            Wt = null,
            !0) : !1;
        case 13:
            return r = r.nodeType !== 8 ? null : r,
            r !== null ? (s = Hr !== null ? {
                id: Kn,
                overflow: Gn
            } : null,
            t.memoizedState = {
                dehydrated: r,
                treeContext: s,
                retryLane: 1073741824
            },
            s = tn(18, null, null, 0),
            s.stateNode = r,
            s.return = t,
            t.child = s,
            Ut = t,
            Wt = null,
            !0) : !1;
        default:
            return !1
        }
    }
    function yu(t) {
        return (t.mode & 1) !== 0 && (t.flags & 128) === 0
    }
    function xu(t) {
        if (Ye) {
            var r = Wt;
            if (r) {
                var s = r;
                if (!rh(t, r)) {
                    if (yu(t))
                        throw Error(o(418));
                    r = pr(s.nextSibling);
                    var l = Ut;
                    r && rh(t, r) ? nh(l, s) : (t.flags = t.flags & -4097 | 2,
                    Ye = !1,
                    Ut = t)
                }
            } else {
                if (yu(t))
                    throw Error(o(418));
                t.flags = t.flags & -4097 | 2,
                Ye = !1,
                Ut = t
            }
        }
    }
    function oh(t) {
        for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
            t = t.return;
        Ut = t
    }
    function Qs(t) {
        if (t !== Ut)
            return !1;
        if (!Ye)
            return oh(t),
            Ye = !0,
            !1;
        var r;
        if ((r = t.tag !== 3) && !(r = t.tag !== 5) && (r = t.type,
        r = r !== "head" && r !== "body" && !cu(t.type, t.memoizedProps)),
        r && (r = Wt)) {
            if (yu(t))
                throw ih(),
                Error(o(418));
            for (; r; )
                nh(t, r),
                r = pr(r.nextSibling)
        }
        if (oh(t),
        t.tag === 13) {
            if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
                throw Error(o(317));
            e: {
                for (t = t.nextSibling,
                r = 0; t; ) {
                    if (t.nodeType === 8) {
                        var s = t.data;
                        if (s === "/$") {
                            if (r === 0) {
                                Wt = pr(t.nextSibling);
                                break e
                            }
                            r--
                        } else
                            s !== "$" && s !== "$!" && s !== "$?" || r++
                    }
                    t = t.nextSibling
                }
                Wt = null
            }
        } else
            Wt = Ut ? pr(t.stateNode.nextSibling) : null;
        return !0
    }
    function ih() {
        for (var t = Wt; t; )
            t = pr(t.nextSibling)
    }
    function Po() {
        Wt = Ut = null,
        Ye = !1
    }
    function wu(t) {
        cn === null ? cn = [t] : cn.push(t)
    }
    var JS = O.ReactCurrentBatchConfig;
    function Mi(t, r, s) {
        if (t = s.ref,
        t !== null && typeof t != "function" && typeof t != "object") {
            if (s._owner) {
                if (s = s._owner,
                s) {
                    if (s.tag !== 1)
                        throw Error(o(309));
                    var l = s.stateNode
                }
                if (!l)
                    throw Error(o(147, t));
                var f = l
                  , m = "" + t;
                return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === m ? r.ref : (r = function(b) {
                    var k = f.refs;
                    b === null ? delete k[m] : k[m] = b
                }
                ,
                r._stringRef = m,
                r)
            }
            if (typeof t != "string")
                throw Error(o(284));
            if (!s._owner)
                throw Error(o(290, t))
        }
        return t
    }
    function Zs(t, r) {
        throw t = Object.prototype.toString.call(r),
        Error(o(31, t === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : t))
    }
    function sh(t) {
        var r = t._init;
        return r(t._payload)
    }
    function ah(t) {
        function r(_, M) {
            if (t) {
                var L = _.deletions;
                L === null ? (_.deletions = [M],
                _.flags |= 16) : L.push(M)
            }
        }
        function s(_, M) {
            if (!t)
                return null;
            for (; M !== null; )
                r(_, M),
                M = M.sibling;
            return null
        }
        function l(_, M) {
            for (_ = new Map; M !== null; )
                M.key !== null ? _.set(M.key, M) : _.set(M.index, M),
                M = M.sibling;
            return _
        }
        function f(_, M) {
            return _ = Er(_, M),
            _.index = 0,
            _.sibling = null,
            _
        }
        function m(_, M, L) {
            return _.index = L,
            t ? (L = _.alternate,
            L !== null ? (L = L.index,
            L < M ? (_.flags |= 2,
            M) : L) : (_.flags |= 2,
            M)) : (_.flags |= 1048576,
            M)
        }
        function b(_) {
            return t && _.alternate === null && (_.flags |= 2),
            _
        }
        function k(_, M, L, te) {
            return M === null || M.tag !== 6 ? (M = dc(L, _.mode, te),
            M.return = _,
            M) : (M = f(M, L),
            M.return = _,
            M)
        }
        function N(_, M, L, te) {
            var ye = L.type;
            return ye === I ? X(_, M, L.props.children, te, L.key) : M !== null && (M.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === re && sh(ye) === M.type) ? (te = f(M, L.props),
            te.ref = Mi(_, M, L),
            te.return = _,
            te) : (te = Sa(L.type, L.key, L.props, null, _.mode, te),
            te.ref = Mi(_, M, L),
            te.return = _,
            te)
        }
        function B(_, M, L, te) {
            return M === null || M.tag !== 4 || M.stateNode.containerInfo !== L.containerInfo || M.stateNode.implementation !== L.implementation ? (M = fc(L, _.mode, te),
            M.return = _,
            M) : (M = f(M, L.children || []),
            M.return = _,
            M)
        }
        function X(_, M, L, te, ye) {
            return M === null || M.tag !== 7 ? (M = qr(L, _.mode, te, ye),
            M.return = _,
            M) : (M = f(M, L),
            M.return = _,
            M)
        }
        function q(_, M, L) {
            if (typeof M == "string" && M !== "" || typeof M == "number")
                return M = dc("" + M, _.mode, L),
                M.return = _,
                M;
            if (typeof M == "object" && M !== null) {
                switch (M.$$typeof) {
                case j:
                    return L = Sa(M.type, M.key, M.props, null, _.mode, L),
                    L.ref = Mi(_, null, M),
                    L.return = _,
                    L;
                case $:
                    return M = fc(M, _.mode, L),
                    M.return = _,
                    M;
                case re:
                    var te = M._init;
                    return q(_, te(M._payload), L)
                }
                if ($e(M) || H(M))
                    return M = qr(M, _.mode, L, null),
                    M.return = _,
                    M;
                Zs(_, M)
            }
            return null
        }
        function Y(_, M, L, te) {
            var ye = M !== null ? M.key : null;
            if (typeof L == "string" && L !== "" || typeof L == "number")
                return ye !== null ? null : k(_, M, "" + L, te);
            if (typeof L == "object" && L !== null) {
                switch (L.$$typeof) {
                case j:
                    return L.key === ye ? N(_, M, L, te) : null;
                case $:
                    return L.key === ye ? B(_, M, L, te) : null;
                case re:
                    return ye = L._init,
                    Y(_, M, ye(L._payload), te)
                }
                if ($e(L) || H(L))
                    return ye !== null ? null : X(_, M, L, te, null);
                Zs(_, L)
            }
            return null
        }
        function de(_, M, L, te, ye) {
            if (typeof te == "string" && te !== "" || typeof te == "number")
                return _ = _.get(L) || null,
                k(M, _, "" + te, ye);
            if (typeof te == "object" && te !== null) {
                switch (te.$$typeof) {
                case j:
                    return _ = _.get(te.key === null ? L : te.key) || null,
                    N(M, _, te, ye);
                case $:
                    return _ = _.get(te.key === null ? L : te.key) || null,
                    B(M, _, te, ye);
                case re:
                    var we = te._init;
                    return de(_, M, L, we(te._payload), ye)
                }
                if ($e(te) || H(te))
                    return _ = _.get(L) || null,
                    X(M, _, te, ye, null);
                Zs(M, te)
            }
            return null
        }
        function me(_, M, L, te) {
            for (var ye = null, we = null, Se = M, Pe = M = 0, pt = null; Se !== null && Pe < L.length; Pe++) {
                Se.index > Pe ? (pt = Se,
                Se = null) : pt = Se.sibling;
                var Le = Y(_, Se, L[Pe], te);
                if (Le === null) {
                    Se === null && (Se = pt);
                    break
                }
                t && Se && Le.alternate === null && r(_, Se),
                M = m(Le, M, Pe),
                we === null ? ye = Le : we.sibling = Le,
                we = Le,
                Se = pt
            }
            if (Pe === L.length)
                return s(_, Se),
                Ye && Ur(_, Pe),
                ye;
            if (Se === null) {
                for (; Pe < L.length; Pe++)
                    Se = q(_, L[Pe], te),
                    Se !== null && (M = m(Se, M, Pe),
                    we === null ? ye = Se : we.sibling = Se,
                    we = Se);
                return Ye && Ur(_, Pe),
                ye
            }
            for (Se = l(_, Se); Pe < L.length; Pe++)
                pt = de(Se, _, Pe, L[Pe], te),
                pt !== null && (t && pt.alternate !== null && Se.delete(pt.key === null ? Pe : pt.key),
                M = m(pt, M, Pe),
                we === null ? ye = pt : we.sibling = pt,
                we = pt);
            return t && Se.forEach(function(Tr) {
                return r(_, Tr)
            }),
            Ye && Ur(_, Pe),
            ye
        }
        function ve(_, M, L, te) {
            var ye = H(L);
            if (typeof ye != "function")
                throw Error(o(150));
            if (L = ye.call(L),
            L == null)
                throw Error(o(151));
            for (var we = ye = null, Se = M, Pe = M = 0, pt = null, Le = L.next(); Se !== null && !Le.done; Pe++,
            Le = L.next()) {
                Se.index > Pe ? (pt = Se,
                Se = null) : pt = Se.sibling;
                var Tr = Y(_, Se, Le.value, te);
                if (Tr === null) {
                    Se === null && (Se = pt);
                    break
                }
                t && Se && Tr.alternate === null && r(_, Se),
                M = m(Tr, M, Pe),
                we === null ? ye = Tr : we.sibling = Tr,
                we = Tr,
                Se = pt
            }
            if (Le.done)
                return s(_, Se),
                Ye && Ur(_, Pe),
                ye;
            if (Se === null) {
                for (; !Le.done; Pe++,
                Le = L.next())
                    Le = q(_, Le.value, te),
                    Le !== null && (M = m(Le, M, Pe),
                    we === null ? ye = Le : we.sibling = Le,
                    we = Le);
                return Ye && Ur(_, Pe),
                ye
            }
            for (Se = l(_, Se); !Le.done; Pe++,
            Le = L.next())
                Le = de(Se, _, Pe, Le.value, te),
                Le !== null && (t && Le.alternate !== null && Se.delete(Le.key === null ? Pe : Le.key),
                M = m(Le, M, Pe),
                we === null ? ye = Le : we.sibling = Le,
                we = Le);
            return t && Se.forEach(function(Mb) {
                return r(_, Mb)
            }),
            Ye && Ur(_, Pe),
            ye
        }
        function rt(_, M, L, te) {
            if (typeof L == "object" && L !== null && L.type === I && L.key === null && (L = L.props.children),
            typeof L == "object" && L !== null) {
                switch (L.$$typeof) {
                case j:
                    e: {
                        for (var ye = L.key, we = M; we !== null; ) {
                            if (we.key === ye) {
                                if (ye = L.type,
                                ye === I) {
                                    if (we.tag === 7) {
                                        s(_, we.sibling),
                                        M = f(we, L.props.children),
                                        M.return = _,
                                        _ = M;
                                        break e
                                    }
                                } else if (we.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === re && sh(ye) === we.type) {
                                    s(_, we.sibling),
                                    M = f(we, L.props),
                                    M.ref = Mi(_, we, L),
                                    M.return = _,
                                    _ = M;
                                    break e
                                }
                                s(_, we);
                                break
                            } else
                                r(_, we);
                            we = we.sibling
                        }
                        L.type === I ? (M = qr(L.props.children, _.mode, te, L.key),
                        M.return = _,
                        _ = M) : (te = Sa(L.type, L.key, L.props, null, _.mode, te),
                        te.ref = Mi(_, M, L),
                        te.return = _,
                        _ = te)
                    }
                    return b(_);
                case $:
                    e: {
                        for (we = L.key; M !== null; ) {
                            if (M.key === we)
                                if (M.tag === 4 && M.stateNode.containerInfo === L.containerInfo && M.stateNode.implementation === L.implementation) {
                                    s(_, M.sibling),
                                    M = f(M, L.children || []),
                                    M.return = _,
                                    _ = M;
                                    break e
                                } else {
                                    s(_, M);
                                    break
                                }
                            else
                                r(_, M);
                            M = M.sibling
                        }
                        M = fc(L, _.mode, te),
                        M.return = _,
                        _ = M
                    }
                    return b(_);
                case re:
                    return we = L._init,
                    rt(_, M, we(L._payload), te)
                }
                if ($e(L))
                    return me(_, M, L, te);
                if (H(L))
                    return ve(_, M, L, te);
                Zs(_, L)
            }
            return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L,
            M !== null && M.tag === 6 ? (s(_, M.sibling),
            M = f(M, L),
            M.return = _,
            _ = M) : (s(_, M),
            M = dc(L, _.mode, te),
            M.return = _,
            _ = M),
            b(_)) : s(_, M)
        }
        return rt
    }
    var ko = ah(!0)
      , lh = ah(!1)
      , qs = hr(null)
      , Js = null
      , Ao = null
      , Su = null;
    function bu() {
        Su = Ao = Js = null
    }
    function Cu(t) {
        var r = qs.current;
        Ke(qs),
        t._currentValue = r
    }
    function Eu(t, r, s) {
        for (; t !== null; ) {
            var l = t.alternate;
            if ((t.childLanes & r) !== r ? (t.childLanes |= r,
            l !== null && (l.childLanes |= r)) : l !== null && (l.childLanes & r) !== r && (l.childLanes |= r),
            t === s)
                break;
            t = t.return
        }
    }
    function Ro(t, r) {
        Js = t,
        Su = Ao = null,
        t = t.dependencies,
        t !== null && t.firstContext !== null && ((t.lanes & r) !== 0 && (It = !0),
        t.firstContext = null)
    }
    function qt(t) {
        var r = t._currentValue;
        if (Su !== t)
            if (t = {
                context: t,
                memoizedValue: r,
                next: null
            },
            Ao === null) {
                if (Js === null)
                    throw Error(o(308));
                Ao = t,
                Js.dependencies = {
                    lanes: 0,
                    firstContext: t
                }
            } else
                Ao = Ao.next = t;
        return r
    }
    var Wr = null;
    function Tu(t) {
        Wr === null ? Wr = [t] : Wr.push(t)
    }
    function uh(t, r, s, l) {
        var f = r.interleaved;
        return f === null ? (s.next = s,
        Tu(r)) : (s.next = f.next,
        f.next = s),
        r.interleaved = s,
        Yn(t, l)
    }
    function Yn(t, r) {
        t.lanes |= r;
        var s = t.alternate;
        for (s !== null && (s.lanes |= r),
        s = t,
        t = t.return; t !== null; )
            t.childLanes |= r,
            s = t.alternate,
            s !== null && (s.childLanes |= r),
            s = t,
            t = t.return;
        return s.tag === 3 ? s.stateNode : null
    }
    var vr = !1;
    function Pu(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }
    function ch(t, r) {
        t = t.updateQueue,
        r.updateQueue === t && (r.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            effects: t.effects
        })
    }
    function Xn(t, r) {
        return {
            eventTime: t,
            lane: r,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function yr(t, r, s) {
        var l = t.updateQueue;
        if (l === null)
            return null;
        if (l = l.shared,
        (Ie & 2) !== 0) {
            var f = l.pending;
            return f === null ? r.next = r : (r.next = f.next,
            f.next = r),
            l.pending = r,
            Yn(t, s)
        }
        return f = l.interleaved,
        f === null ? (r.next = r,
        Tu(l)) : (r.next = f.next,
        f.next = r),
        l.interleaved = r,
        Yn(t, s)
    }
    function ea(t, r, s) {
        if (r = r.updateQueue,
        r !== null && (r = r.shared,
        (s & 4194240) !== 0)) {
            var l = r.lanes;
            l &= t.pendingLanes,
            s |= l,
            r.lanes = s,
            Bl(t, s)
        }
    }
    function dh(t, r) {
        var s = t.updateQueue
          , l = t.alternate;
        if (l !== null && (l = l.updateQueue,
        s === l)) {
            var f = null
              , m = null;
            if (s = s.firstBaseUpdate,
            s !== null) {
                do {
                    var b = {
                        eventTime: s.eventTime,
                        lane: s.lane,
                        tag: s.tag,
                        payload: s.payload,
                        callback: s.callback,
                        next: null
                    };
                    m === null ? f = m = b : m = m.next = b,
                    s = s.next
                } while (s !== null);
                m === null ? f = m = r : m = m.next = r
            } else
                f = m = r;
            s = {
                baseState: l.baseState,
                firstBaseUpdate: f,
                lastBaseUpdate: m,
                shared: l.shared,
                effects: l.effects
            },
            t.updateQueue = s;
            return
        }
        t = s.lastBaseUpdate,
        t === null ? s.firstBaseUpdate = r : t.next = r,
        s.lastBaseUpdate = r
    }
    function ta(t, r, s, l) {
        var f = t.updateQueue;
        vr = !1;
        var m = f.firstBaseUpdate
          , b = f.lastBaseUpdate
          , k = f.shared.pending;
        if (k !== null) {
            f.shared.pending = null;
            var N = k
              , B = N.next;
            N.next = null,
            b === null ? m = B : b.next = B,
            b = N;
            var X = t.alternate;
            X !== null && (X = X.updateQueue,
            k = X.lastBaseUpdate,
            k !== b && (k === null ? X.firstBaseUpdate = B : k.next = B,
            X.lastBaseUpdate = N))
        }
        if (m !== null) {
            var q = f.baseState;
            b = 0,
            X = B = N = null,
            k = m;
            do {
                var Y = k.lane
                  , de = k.eventTime;
                if ((l & Y) === Y) {
                    X !== null && (X = X.next = {
                        eventTime: de,
                        lane: 0,
                        tag: k.tag,
                        payload: k.payload,
                        callback: k.callback,
                        next: null
                    });
                    e: {
                        var me = t
                          , ve = k;
                        switch (Y = r,
                        de = s,
                        ve.tag) {
                        case 1:
                            if (me = ve.payload,
                            typeof me == "function") {
                                q = me.call(de, q, Y);
                                break e
                            }
                            q = me;
                            break e;
                        case 3:
                            me.flags = me.flags & -65537 | 128;
                        case 0:
                            if (me = ve.payload,
                            Y = typeof me == "function" ? me.call(de, q, Y) : me,
                            Y == null)
                                break e;
                            q = G({}, q, Y);
                            break e;
                        case 2:
                            vr = !0
                        }
                    }
                    k.callback !== null && k.lane !== 0 && (t.flags |= 64,
                    Y = f.effects,
                    Y === null ? f.effects = [k] : Y.push(k))
                } else
                    de = {
                        eventTime: de,
                        lane: Y,
                        tag: k.tag,
                        payload: k.payload,
                        callback: k.callback,
                        next: null
                    },
                    X === null ? (B = X = de,
                    N = q) : X = X.next = de,
                    b |= Y;
                if (k = k.next,
                k === null) {
                    if (k = f.shared.pending,
                    k === null)
                        break;
                    Y = k,
                    k = Y.next,
                    Y.next = null,
                    f.lastBaseUpdate = Y,
                    f.shared.pending = null
                }
            } while (!0);
            if (X === null && (N = q),
            f.baseState = N,
            f.firstBaseUpdate = B,
            f.lastBaseUpdate = X,
            r = f.shared.interleaved,
            r !== null) {
                f = r;
                do
                    b |= f.lane,
                    f = f.next;
                while (f !== r)
            } else
                m === null && (f.shared.lanes = 0);
            Yr |= b,
            t.lanes = b,
            t.memoizedState = q
        }
    }
    function fh(t, r, s) {
        if (t = r.effects,
        r.effects = null,
        t !== null)
            for (r = 0; r < t.length; r++) {
                var l = t[r]
                  , f = l.callback;
                if (f !== null) {
                    if (l.callback = null,
                    l = s,
                    typeof f != "function")
                        throw Error(o(191, f));
                    f.call(l)
                }
            }
    }
    var ji = {}
      , An = hr(ji)
      , Oi = hr(ji)
      , _i = hr(ji);
    function Kr(t) {
        if (t === ji)
            throw Error(o(174));
        return t
    }
    function ku(t, r) {
        switch (Ue(_i, r),
        Ue(Oi, t),
        Ue(An, ji),
        t = r.nodeType,
        t) {
        case 9:
        case 11:
            r = (r = r.documentElement) ? r.namespaceURI : $t(null, "");
            break;
        default:
            t = t === 8 ? r.parentNode : r,
            r = t.namespaceURI || null,
            t = t.tagName,
            r = $t(r, t)
        }
        Ke(An),
        Ue(An, r)
    }
    function No() {
        Ke(An),
        Ke(Oi),
        Ke(_i)
    }
    function ph(t) {
        Kr(_i.current);
        var r = Kr(An.current)
          , s = $t(r, t.type);
        r !== s && (Ue(Oi, t),
        Ue(An, s))
    }
    function Au(t) {
        Oi.current === t && (Ke(An),
        Ke(Oi))
    }
    var Ze = hr(0);
    function na(t) {
        for (var r = t; r !== null; ) {
            if (r.tag === 13) {
                var s = r.memoizedState;
                if (s !== null && (s = s.dehydrated,
                s === null || s.data === "$?" || s.data === "$!"))
                    return r
            } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
                if ((r.flags & 128) !== 0)
                    return r
            } else if (r.child !== null) {
                r.child.return = r,
                r = r.child;
                continue
            }
            if (r === t)
                break;
            for (; r.sibling === null; ) {
                if (r.return === null || r.return === t)
                    return null;
                r = r.return
            }
            r.sibling.return = r.return,
            r = r.sibling
        }
        return null
    }
    var Ru = [];
    function Nu() {
        for (var t = 0; t < Ru.length; t++)
            Ru[t]._workInProgressVersionPrimary = null;
        Ru.length = 0
    }
    var ra = O.ReactCurrentDispatcher
      , Du = O.ReactCurrentBatchConfig
      , Gr = 0
      , qe = null
      , ut = null
      , dt = null
      , oa = !1
      , Ii = !1
      , Li = 0
      , eb = 0;
    function wt() {
        throw Error(o(321))
    }
    function Mu(t, r) {
        if (r === null)
            return !1;
        for (var s = 0; s < r.length && s < t.length; s++)
            if (!un(t[s], r[s]))
                return !1;
        return !0
    }
    function ju(t, r, s, l, f, m) {
        if (Gr = m,
        qe = r,
        r.memoizedState = null,
        r.updateQueue = null,
        r.lanes = 0,
        ra.current = t === null || t.memoizedState === null ? ob : ib,
        t = s(l, f),
        Ii) {
            m = 0;
            do {
                if (Ii = !1,
                Li = 0,
                25 <= m)
                    throw Error(o(301));
                m += 1,
                dt = ut = null,
                r.updateQueue = null,
                ra.current = sb,
                t = s(l, f)
            } while (Ii)
        }
        if (ra.current = aa,
        r = ut !== null && ut.next !== null,
        Gr = 0,
        dt = ut = qe = null,
        oa = !1,
        r)
            throw Error(o(300));
        return t
    }
    function Ou() {
        var t = Li !== 0;
        return Li = 0,
        t
    }
    function Rn() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return dt === null ? qe.memoizedState = dt = t : dt = dt.next = t,
        dt
    }
    function Jt() {
        if (ut === null) {
            var t = qe.alternate;
            t = t !== null ? t.memoizedState : null
        } else
            t = ut.next;
        var r = dt === null ? qe.memoizedState : dt.next;
        if (r !== null)
            dt = r,
            ut = t;
        else {
            if (t === null)
                throw Error(o(310));
            ut = t,
            t = {
                memoizedState: ut.memoizedState,
                baseState: ut.baseState,
                baseQueue: ut.baseQueue,
                queue: ut.queue,
                next: null
            },
            dt === null ? qe.memoizedState = dt = t : dt = dt.next = t
        }
        return dt
    }
    function Vi(t, r) {
        return typeof r == "function" ? r(t) : r
    }
    function _u(t) {
        var r = Jt()
          , s = r.queue;
        if (s === null)
            throw Error(o(311));
        s.lastRenderedReducer = t;
        var l = ut
          , f = l.baseQueue
          , m = s.pending;
        if (m !== null) {
            if (f !== null) {
                var b = f.next;
                f.next = m.next,
                m.next = b
            }
            l.baseQueue = f = m,
            s.pending = null
        }
        if (f !== null) {
            m = f.next,
            l = l.baseState;
            var k = b = null
              , N = null
              , B = m;
            do {
                var X = B.lane;
                if ((Gr & X) === X)
                    N !== null && (N = N.next = {
                        lane: 0,
                        action: B.action,
                        hasEagerState: B.hasEagerState,
                        eagerState: B.eagerState,
                        next: null
                    }),
                    l = B.hasEagerState ? B.eagerState : t(l, B.action);
                else {
                    var q = {
                        lane: X,
                        action: B.action,
                        hasEagerState: B.hasEagerState,
                        eagerState: B.eagerState,
                        next: null
                    };
                    N === null ? (k = N = q,
                    b = l) : N = N.next = q,
                    qe.lanes |= X,
                    Yr |= X
                }
                B = B.next
            } while (B !== null && B !== m);
            N === null ? b = l : N.next = k,
            un(l, r.memoizedState) || (It = !0),
            r.memoizedState = l,
            r.baseState = b,
            r.baseQueue = N,
            s.lastRenderedState = l
        }
        if (t = s.interleaved,
        t !== null) {
            f = t;
            do
                m = f.lane,
                qe.lanes |= m,
                Yr |= m,
                f = f.next;
            while (f !== t)
        } else
            f === null && (s.lanes = 0);
        return [r.memoizedState, s.dispatch]
    }
    function Iu(t) {
        var r = Jt()
          , s = r.queue;
        if (s === null)
            throw Error(o(311));
        s.lastRenderedReducer = t;
        var l = s.dispatch
          , f = s.pending
          , m = r.memoizedState;
        if (f !== null) {
            s.pending = null;
            var b = f = f.next;
            do
                m = t(m, b.action),
                b = b.next;
            while (b !== f);
            un(m, r.memoizedState) || (It = !0),
            r.memoizedState = m,
            r.baseQueue === null && (r.baseState = m),
            s.lastRenderedState = m
        }
        return [m, l]
    }
    function hh() {}
    function mh(t, r) {
        var s = qe
          , l = Jt()
          , f = r()
          , m = !un(l.memoizedState, f);
        if (m && (l.memoizedState = f,
        It = !0),
        l = l.queue,
        Lu(yh.bind(null, s, l, t), [t]),
        l.getSnapshot !== r || m || dt !== null && dt.memoizedState.tag & 1) {
            if (s.flags |= 2048,
            Fi(9, vh.bind(null, s, l, f, r), void 0, null),
            ft === null)
                throw Error(o(349));
            (Gr & 30) !== 0 || gh(s, r, f)
        }
        return f
    }
    function gh(t, r, s) {
        t.flags |= 16384,
        t = {
            getSnapshot: r,
            value: s
        },
        r = qe.updateQueue,
        r === null ? (r = {
            lastEffect: null,
            stores: null
        },
        qe.updateQueue = r,
        r.stores = [t]) : (s = r.stores,
        s === null ? r.stores = [t] : s.push(t))
    }
    function vh(t, r, s, l) {
        r.value = s,
        r.getSnapshot = l,
        xh(r) && wh(t)
    }
    function yh(t, r, s) {
        return s(function() {
            xh(r) && wh(t)
        })
    }
    function xh(t) {
        var r = t.getSnapshot;
        t = t.value;
        try {
            var s = r();
            return !un(t, s)
        } catch {
            return !0
        }
    }
    function wh(t) {
        var r = Yn(t, 1);
        r !== null && hn(r, t, 1, -1)
    }
    function Sh(t) {
        var r = Rn();
        return typeof t == "function" && (t = t()),
        r.memoizedState = r.baseState = t,
        t = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Vi,
            lastRenderedState: t
        },
        r.queue = t,
        t = t.dispatch = rb.bind(null, qe, t),
        [r.memoizedState, t]
    }
    function Fi(t, r, s, l) {
        return t = {
            tag: t,
            create: r,
            destroy: s,
            deps: l,
            next: null
        },
        r = qe.updateQueue,
        r === null ? (r = {
            lastEffect: null,
            stores: null
        },
        qe.updateQueue = r,
        r.lastEffect = t.next = t) : (s = r.lastEffect,
        s === null ? r.lastEffect = t.next = t : (l = s.next,
        s.next = t,
        t.next = l,
        r.lastEffect = t)),
        t
    }
    function bh() {
        return Jt().memoizedState
    }
    function ia(t, r, s, l) {
        var f = Rn();
        qe.flags |= t,
        f.memoizedState = Fi(1 | r, s, void 0, l === void 0 ? null : l)
    }
    function sa(t, r, s, l) {
        var f = Jt();
        l = l === void 0 ? null : l;
        var m = void 0;
        if (ut !== null) {
            var b = ut.memoizedState;
            if (m = b.destroy,
            l !== null && Mu(l, b.deps)) {
                f.memoizedState = Fi(r, s, m, l);
                return
            }
        }
        qe.flags |= t,
        f.memoizedState = Fi(1 | r, s, m, l)
    }
    function Ch(t, r) {
        return ia(8390656, 8, t, r)
    }
    function Lu(t, r) {
        return sa(2048, 8, t, r)
    }
    function Eh(t, r) {
        return sa(4, 2, t, r)
    }
    function Th(t, r) {
        return sa(4, 4, t, r)
    }
    function Ph(t, r) {
        if (typeof r == "function")
            return t = t(),
            r(t),
            function() {
                r(null)
            }
            ;
        if (r != null)
            return t = t(),
            r.current = t,
            function() {
                r.current = null
            }
    }
    function kh(t, r, s) {
        return s = s != null ? s.concat([t]) : null,
        sa(4, 4, Ph.bind(null, r, t), s)
    }
    function Vu() {}
    function Ah(t, r) {
        var s = Jt();
        r = r === void 0 ? null : r;
        var l = s.memoizedState;
        return l !== null && r !== null && Mu(r, l[1]) ? l[0] : (s.memoizedState = [t, r],
        t)
    }
    function Rh(t, r) {
        var s = Jt();
        r = r === void 0 ? null : r;
        var l = s.memoizedState;
        return l !== null && r !== null && Mu(r, l[1]) ? l[0] : (t = t(),
        s.memoizedState = [t, r],
        t)
    }
    function Nh(t, r, s) {
        return (Gr & 21) === 0 ? (t.baseState && (t.baseState = !1,
        It = !0),
        t.memoizedState = s) : (un(s, r) || (s = sp(),
        qe.lanes |= s,
        Yr |= s,
        t.baseState = !0),
        r)
    }
    function tb(t, r) {
        var s = Be;
        Be = s !== 0 && 4 > s ? s : 4,
        t(!0);
        var l = Du.transition;
        Du.transition = {};
        try {
            t(!1),
            r()
        } finally {
            Be = s,
            Du.transition = l
        }
    }
    function Dh() {
        return Jt().memoizedState
    }
    function nb(t, r, s) {
        var l = br(t);
        if (s = {
            lane: l,
            action: s,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Mh(t))
            jh(r, s);
        else if (s = uh(t, r, s, l),
        s !== null) {
            var f = kt();
            hn(s, t, l, f),
            Oh(s, r, l)
        }
    }
    function rb(t, r, s) {
        var l = br(t)
          , f = {
            lane: l,
            action: s,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Mh(t))
            jh(r, f);
        else {
            var m = t.alternate;
            if (t.lanes === 0 && (m === null || m.lanes === 0) && (m = r.lastRenderedReducer,
            m !== null))
                try {
                    var b = r.lastRenderedState
                      , k = m(b, s);
                    if (f.hasEagerState = !0,
                    f.eagerState = k,
                    un(k, b)) {
                        var N = r.interleaved;
                        N === null ? (f.next = f,
                        Tu(r)) : (f.next = N.next,
                        N.next = f),
                        r.interleaved = f;
                        return
                    }
                } catch {} finally {}
            s = uh(t, r, f, l),
            s !== null && (f = kt(),
            hn(s, t, l, f),
            Oh(s, r, l))
        }
    }
    function Mh(t) {
        var r = t.alternate;
        return t === qe || r !== null && r === qe
    }
    function jh(t, r) {
        Ii = oa = !0;
        var s = t.pending;
        s === null ? r.next = r : (r.next = s.next,
        s.next = r),
        t.pending = r
    }
    function Oh(t, r, s) {
        if ((s & 4194240) !== 0) {
            var l = r.lanes;
            l &= t.pendingLanes,
            s |= l,
            r.lanes = s,
            Bl(t, s)
        }
    }
    var aa = {
        readContext: qt,
        useCallback: wt,
        useContext: wt,
        useEffect: wt,
        useImperativeHandle: wt,
        useInsertionEffect: wt,
        useLayoutEffect: wt,
        useMemo: wt,
        useReducer: wt,
        useRef: wt,
        useState: wt,
        useDebugValue: wt,
        useDeferredValue: wt,
        useTransition: wt,
        useMutableSource: wt,
        useSyncExternalStore: wt,
        useId: wt,
        unstable_isNewReconciler: !1
    }
      , ob = {
        readContext: qt,
        useCallback: function(t, r) {
            return Rn().memoizedState = [t, r === void 0 ? null : r],
            t
        },
        useContext: qt,
        useEffect: Ch,
        useImperativeHandle: function(t, r, s) {
            return s = s != null ? s.concat([t]) : null,
            ia(4194308, 4, Ph.bind(null, r, t), s)
        },
        useLayoutEffect: function(t, r) {
            return ia(4194308, 4, t, r)
        },
        useInsertionEffect: function(t, r) {
            return ia(4, 2, t, r)
        },
        useMemo: function(t, r) {
            var s = Rn();
            return r = r === void 0 ? null : r,
            t = t(),
            s.memoizedState = [t, r],
            t
        },
        useReducer: function(t, r, s) {
            var l = Rn();
            return r = s !== void 0 ? s(r) : r,
            l.memoizedState = l.baseState = r,
            t = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: t,
                lastRenderedState: r
            },
            l.queue = t,
            t = t.dispatch = nb.bind(null, qe, t),
            [l.memoizedState, t]
        },
        useRef: function(t) {
            var r = Rn();
            return t = {
                current: t
            },
            r.memoizedState = t
        },
        useState: Sh,
        useDebugValue: Vu,
        useDeferredValue: function(t) {
            return Rn().memoizedState = t
        },
        useTransition: function() {
            var t = Sh(!1)
              , r = t[0];
            return t = tb.bind(null, t[1]),
            Rn().memoizedState = t,
            [r, t]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(t, r, s) {
            var l = qe
              , f = Rn();
            if (Ye) {
                if (s === void 0)
                    throw Error(o(407));
                s = s()
            } else {
                if (s = r(),
                ft === null)
                    throw Error(o(349));
                (Gr & 30) !== 0 || gh(l, r, s)
            }
            f.memoizedState = s;
            var m = {
                value: s,
                getSnapshot: r
            };
            return f.queue = m,
            Ch(yh.bind(null, l, m, t), [t]),
            l.flags |= 2048,
            Fi(9, vh.bind(null, l, m, s, r), void 0, null),
            s
        },
        useId: function() {
            var t = Rn()
              , r = ft.identifierPrefix;
            if (Ye) {
                var s = Gn
                  , l = Kn;
                s = (l & ~(1 << 32 - ln(l) - 1)).toString(32) + s,
                r = ":" + r + "R" + s,
                s = Li++,
                0 < s && (r += "H" + s.toString(32)),
                r += ":"
            } else
                s = eb++,
                r = ":" + r + "r" + s.toString(32) + ":";
            return t.memoizedState = r
        },
        unstable_isNewReconciler: !1
    }
      , ib = {
        readContext: qt,
        useCallback: Ah,
        useContext: qt,
        useEffect: Lu,
        useImperativeHandle: kh,
        useInsertionEffect: Eh,
        useLayoutEffect: Th,
        useMemo: Rh,
        useReducer: _u,
        useRef: bh,
        useState: function() {
            return _u(Vi)
        },
        useDebugValue: Vu,
        useDeferredValue: function(t) {
            var r = Jt();
            return Nh(r, ut.memoizedState, t)
        },
        useTransition: function() {
            var t = _u(Vi)[0]
              , r = Jt().memoizedState;
            return [t, r]
        },
        useMutableSource: hh,
        useSyncExternalStore: mh,
        useId: Dh,
        unstable_isNewReconciler: !1
    }
      , sb = {
        readContext: qt,
        useCallback: Ah,
        useContext: qt,
        useEffect: Lu,
        useImperativeHandle: kh,
        useInsertionEffect: Eh,
        useLayoutEffect: Th,
        useMemo: Rh,
        useReducer: Iu,
        useRef: bh,
        useState: function() {
            return Iu(Vi)
        },
        useDebugValue: Vu,
        useDeferredValue: function(t) {
            var r = Jt();
            return ut === null ? r.memoizedState = t : Nh(r, ut.memoizedState, t)
        },
        useTransition: function() {
            var t = Iu(Vi)[0]
              , r = Jt().memoizedState;
            return [t, r]
        },
        useMutableSource: hh,
        useSyncExternalStore: mh,
        useId: Dh,
        unstable_isNewReconciler: !1
    };
    function dn(t, r) {
        if (t && t.defaultProps) {
            r = G({}, r),
            t = t.defaultProps;
            for (var s in t)
                r[s] === void 0 && (r[s] = t[s]);
            return r
        }
        return r
    }
    function Fu(t, r, s, l) {
        r = t.memoizedState,
        s = s(l, r),
        s = s == null ? r : G({}, r, s),
        t.memoizedState = s,
        t.lanes === 0 && (t.updateQueue.baseState = s)
    }
    var la = {
        isMounted: function(t) {
            return (t = t._reactInternals) ? Br(t) === t : !1
        },
        enqueueSetState: function(t, r, s) {
            t = t._reactInternals;
            var l = kt()
              , f = br(t)
              , m = Xn(l, f);
            m.payload = r,
            s != null && (m.callback = s),
            r = yr(t, m, f),
            r !== null && (hn(r, t, f, l),
            ea(r, t, f))
        },
        enqueueReplaceState: function(t, r, s) {
            t = t._reactInternals;
            var l = kt()
              , f = br(t)
              , m = Xn(l, f);
            m.tag = 1,
            m.payload = r,
            s != null && (m.callback = s),
            r = yr(t, m, f),
            r !== null && (hn(r, t, f, l),
            ea(r, t, f))
        },
        enqueueForceUpdate: function(t, r) {
            t = t._reactInternals;
            var s = kt()
              , l = br(t)
              , f = Xn(s, l);
            f.tag = 2,
            r != null && (f.callback = r),
            r = yr(t, f, l),
            r !== null && (hn(r, t, l, s),
            ea(r, t, l))
        }
    };
    function _h(t, r, s, l, f, m, b) {
        return t = t.stateNode,
        typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, m, b) : r.prototype && r.prototype.isPureReactComponent ? !Ti(s, l) || !Ti(f, m) : !0
    }
    function Ih(t, r, s) {
        var l = !1
          , f = mr
          , m = r.contextType;
        return typeof m == "object" && m !== null ? m = qt(m) : (f = _t(r) ? $r : xt.current,
        l = r.contextTypes,
        m = (l = l != null) ? Co(t, f) : mr),
        r = new r(s,m),
        t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null,
        r.updater = la,
        t.stateNode = r,
        r._reactInternals = t,
        l && (t = t.stateNode,
        t.__reactInternalMemoizedUnmaskedChildContext = f,
        t.__reactInternalMemoizedMaskedChildContext = m),
        r
    }
    function Lh(t, r, s, l) {
        t = r.state,
        typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(s, l),
        typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(s, l),
        r.state !== t && la.enqueueReplaceState(r, r.state, null)
    }
    function Bu(t, r, s, l) {
        var f = t.stateNode;
        f.props = s,
        f.state = t.memoizedState,
        f.refs = {},
        Pu(t);
        var m = r.contextType;
        typeof m == "object" && m !== null ? f.context = qt(m) : (m = _t(r) ? $r : xt.current,
        f.context = Co(t, m)),
        f.state = t.memoizedState,
        m = r.getDerivedStateFromProps,
        typeof m == "function" && (Fu(t, r, m, s),
        f.state = t.memoizedState),
        typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (r = f.state,
        typeof f.componentWillMount == "function" && f.componentWillMount(),
        typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(),
        r !== f.state && la.enqueueReplaceState(f, f.state, null),
        ta(t, s, f, l),
        f.state = t.memoizedState),
        typeof f.componentDidMount == "function" && (t.flags |= 4194308)
    }
    function Do(t, r) {
        try {
            var s = ""
              , l = r;
            do
                s += pe(l),
                l = l.return;
            while (l);
            var f = s
        } catch (m) {
            f = `
Error generating stack: ` + m.message + `
` + m.stack
        }
        return {
            value: t,
            source: r,
            stack: f,
            digest: null
        }
    }
    function zu(t, r, s) {
        return {
            value: t,
            source: null,
            stack: s ?? null,
            digest: r ?? null
        }
    }
    function $u(t, r) {
        try {
            console.error(r.value)
        } catch (s) {
            setTimeout(function() {
                throw s
            })
        }
    }
    var ab = typeof WeakMap == "function" ? WeakMap : Map;
    function Vh(t, r, s) {
        s = Xn(-1, s),
        s.tag = 3,
        s.payload = {
            element: null
        };
        var l = r.value;
        return s.callback = function() {
            ma || (ma = !0,
            rc = l),
            $u(t, r)
        }
        ,
        s
    }
    function Fh(t, r, s) {
        s = Xn(-1, s),
        s.tag = 3;
        var l = t.type.getDerivedStateFromError;
        if (typeof l == "function") {
            var f = r.value;
            s.payload = function() {
                return l(f)
            }
            ,
            s.callback = function() {
                $u(t, r)
            }
        }
        var m = t.stateNode;
        return m !== null && typeof m.componentDidCatch == "function" && (s.callback = function() {
            $u(t, r),
            typeof l != "function" && (wr === null ? wr = new Set([this]) : wr.add(this));
            var b = r.stack;
            this.componentDidCatch(r.value, {
                componentStack: b !== null ? b : ""
            })
        }
        ),
        s
    }
    function Bh(t, r, s) {
        var l = t.pingCache;
        if (l === null) {
            l = t.pingCache = new ab;
            var f = new Set;
            l.set(r, f)
        } else
            f = l.get(r),
            f === void 0 && (f = new Set,
            l.set(r, f));
        f.has(s) || (f.add(s),
        t = Sb.bind(null, t, r, s),
        r.then(t, t))
    }
    function zh(t) {
        do {
            var r;
            if ((r = t.tag === 13) && (r = t.memoizedState,
            r = r !== null ? r.dehydrated !== null : !0),
            r)
                return t;
            t = t.return
        } while (t !== null);
        return null
    }
    function $h(t, r, s, l, f) {
        return (t.mode & 1) === 0 ? (t === r ? t.flags |= 65536 : (t.flags |= 128,
        s.flags |= 131072,
        s.flags &= -52805,
        s.tag === 1 && (s.alternate === null ? s.tag = 17 : (r = Xn(-1, 1),
        r.tag = 2,
        yr(s, r, 1))),
        s.lanes |= 1),
        t) : (t.flags |= 65536,
        t.lanes = f,
        t)
    }
    var lb = O.ReactCurrentOwner
      , It = !1;
    function Pt(t, r, s, l) {
        r.child = t === null ? lh(r, null, s, l) : ko(r, t.child, s, l)
    }
    function Hh(t, r, s, l, f) {
        s = s.render;
        var m = r.ref;
        return Ro(r, f),
        l = ju(t, r, s, l, m, f),
        s = Ou(),
        t !== null && !It ? (r.updateQueue = t.updateQueue,
        r.flags &= -2053,
        t.lanes &= ~f,
        Qn(t, r, f)) : (Ye && s && gu(r),
        r.flags |= 1,
        Pt(t, r, l, f),
        r.child)
    }
    function Uh(t, r, s, l, f) {
        if (t === null) {
            var m = s.type;
            return typeof m == "function" && !cc(m) && m.defaultProps === void 0 && s.compare === null && s.defaultProps === void 0 ? (r.tag = 15,
            r.type = m,
            Wh(t, r, m, l, f)) : (t = Sa(s.type, null, l, r, r.mode, f),
            t.ref = r.ref,
            t.return = r,
            r.child = t)
        }
        if (m = t.child,
        (t.lanes & f) === 0) {
            var b = m.memoizedProps;
            if (s = s.compare,
            s = s !== null ? s : Ti,
            s(b, l) && t.ref === r.ref)
                return Qn(t, r, f)
        }
        return r.flags |= 1,
        t = Er(m, l),
        t.ref = r.ref,
        t.return = r,
        r.child = t
    }
    function Wh(t, r, s, l, f) {
        if (t !== null) {
            var m = t.memoizedProps;
            if (Ti(m, l) && t.ref === r.ref)
                if (It = !1,
                r.pendingProps = l = m,
                (t.lanes & f) !== 0)
                    (t.flags & 131072) !== 0 && (It = !0);
                else
                    return r.lanes = t.lanes,
                    Qn(t, r, f)
        }
        return Hu(t, r, s, l, f)
    }
    function Kh(t, r, s) {
        var l = r.pendingProps
          , f = l.children
          , m = t !== null ? t.memoizedState : null;
        if (l.mode === "hidden")
            if ((r.mode & 1) === 0)
                r.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                Ue(jo, Kt),
                Kt |= s;
            else {
                if ((s & 1073741824) === 0)
                    return t = m !== null ? m.baseLanes | s : s,
                    r.lanes = r.childLanes = 1073741824,
                    r.memoizedState = {
                        baseLanes: t,
                        cachePool: null,
                        transitions: null
                    },
                    r.updateQueue = null,
                    Ue(jo, Kt),
                    Kt |= t,
                    null;
                r.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                l = m !== null ? m.baseLanes : s,
                Ue(jo, Kt),
                Kt |= l
            }
        else
            m !== null ? (l = m.baseLanes | s,
            r.memoizedState = null) : l = s,
            Ue(jo, Kt),
            Kt |= l;
        return Pt(t, r, f, s),
        r.child
    }
    function Gh(t, r) {
        var s = r.ref;
        (t === null && s !== null || t !== null && t.ref !== s) && (r.flags |= 512,
        r.flags |= 2097152)
    }
    function Hu(t, r, s, l, f) {
        var m = _t(s) ? $r : xt.current;
        return m = Co(r, m),
        Ro(r, f),
        s = ju(t, r, s, l, m, f),
        l = Ou(),
        t !== null && !It ? (r.updateQueue = t.updateQueue,
        r.flags &= -2053,
        t.lanes &= ~f,
        Qn(t, r, f)) : (Ye && l && gu(r),
        r.flags |= 1,
        Pt(t, r, s, f),
        r.child)
    }
    function Yh(t, r, s, l, f) {
        if (_t(s)) {
            var m = !0;
            Ks(r)
        } else
            m = !1;
        if (Ro(r, f),
        r.stateNode === null)
            ca(t, r),
            Ih(r, s, l),
            Bu(r, s, l, f),
            l = !0;
        else if (t === null) {
            var b = r.stateNode
              , k = r.memoizedProps;
            b.props = k;
            var N = b.context
              , B = s.contextType;
            typeof B == "object" && B !== null ? B = qt(B) : (B = _t(s) ? $r : xt.current,
            B = Co(r, B));
            var X = s.getDerivedStateFromProps
              , q = typeof X == "function" || typeof b.getSnapshotBeforeUpdate == "function";
            q || typeof b.UNSAFE_componentWillReceiveProps != "function" && typeof b.componentWillReceiveProps != "function" || (k !== l || N !== B) && Lh(r, b, l, B),
            vr = !1;
            var Y = r.memoizedState;
            b.state = Y,
            ta(r, l, b, f),
            N = r.memoizedState,
            k !== l || Y !== N || Ot.current || vr ? (typeof X == "function" && (Fu(r, s, X, l),
            N = r.memoizedState),
            (k = vr || _h(r, s, k, l, Y, N, B)) ? (q || typeof b.UNSAFE_componentWillMount != "function" && typeof b.componentWillMount != "function" || (typeof b.componentWillMount == "function" && b.componentWillMount(),
            typeof b.UNSAFE_componentWillMount == "function" && b.UNSAFE_componentWillMount()),
            typeof b.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof b.componentDidMount == "function" && (r.flags |= 4194308),
            r.memoizedProps = l,
            r.memoizedState = N),
            b.props = l,
            b.state = N,
            b.context = B,
            l = k) : (typeof b.componentDidMount == "function" && (r.flags |= 4194308),
            l = !1)
        } else {
            b = r.stateNode,
            ch(t, r),
            k = r.memoizedProps,
            B = r.type === r.elementType ? k : dn(r.type, k),
            b.props = B,
            q = r.pendingProps,
            Y = b.context,
            N = s.contextType,
            typeof N == "object" && N !== null ? N = qt(N) : (N = _t(s) ? $r : xt.current,
            N = Co(r, N));
            var de = s.getDerivedStateFromProps;
            (X = typeof de == "function" || typeof b.getSnapshotBeforeUpdate == "function") || typeof b.UNSAFE_componentWillReceiveProps != "function" && typeof b.componentWillReceiveProps != "function" || (k !== q || Y !== N) && Lh(r, b, l, N),
            vr = !1,
            Y = r.memoizedState,
            b.state = Y,
            ta(r, l, b, f);
            var me = r.memoizedState;
            k !== q || Y !== me || Ot.current || vr ? (typeof de == "function" && (Fu(r, s, de, l),
            me = r.memoizedState),
            (B = vr || _h(r, s, B, l, Y, me, N) || !1) ? (X || typeof b.UNSAFE_componentWillUpdate != "function" && typeof b.componentWillUpdate != "function" || (typeof b.componentWillUpdate == "function" && b.componentWillUpdate(l, me, N),
            typeof b.UNSAFE_componentWillUpdate == "function" && b.UNSAFE_componentWillUpdate(l, me, N)),
            typeof b.componentDidUpdate == "function" && (r.flags |= 4),
            typeof b.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof b.componentDidUpdate != "function" || k === t.memoizedProps && Y === t.memoizedState || (r.flags |= 4),
            typeof b.getSnapshotBeforeUpdate != "function" || k === t.memoizedProps && Y === t.memoizedState || (r.flags |= 1024),
            r.memoizedProps = l,
            r.memoizedState = me),
            b.props = l,
            b.state = me,
            b.context = N,
            l = B) : (typeof b.componentDidUpdate != "function" || k === t.memoizedProps && Y === t.memoizedState || (r.flags |= 4),
            typeof b.getSnapshotBeforeUpdate != "function" || k === t.memoizedProps && Y === t.memoizedState || (r.flags |= 1024),
            l = !1)
        }
        return Uu(t, r, s, l, m, f)
    }
    function Uu(t, r, s, l, f, m) {
        Gh(t, r);
        var b = (r.flags & 128) !== 0;
        if (!l && !b)
            return f && Jp(r, s, !1),
            Qn(t, r, m);
        l = r.stateNode,
        lb.current = r;
        var k = b && typeof s.getDerivedStateFromError != "function" ? null : l.render();
        return r.flags |= 1,
        t !== null && b ? (r.child = ko(r, t.child, null, m),
        r.child = ko(r, null, k, m)) : Pt(t, r, k, m),
        r.memoizedState = l.state,
        f && Jp(r, s, !0),
        r.child
    }
    function Xh(t) {
        var r = t.stateNode;
        r.pendingContext ? Zp(t, r.pendingContext, r.pendingContext !== r.context) : r.context && Zp(t, r.context, !1),
        ku(t, r.containerInfo)
    }
    function Qh(t, r, s, l, f) {
        return Po(),
        wu(f),
        r.flags |= 256,
        Pt(t, r, s, l),
        r.child
    }
    var Wu = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function Ku(t) {
        return {
            baseLanes: t,
            cachePool: null,
            transitions: null
        }
    }
    function Zh(t, r, s) {
        var l = r.pendingProps, f = Ze.current, m = !1, b = (r.flags & 128) !== 0, k;
        if ((k = b) || (k = t !== null && t.memoizedState === null ? !1 : (f & 2) !== 0),
        k ? (m = !0,
        r.flags &= -129) : (t === null || t.memoizedState !== null) && (f |= 1),
        Ue(Ze, f & 1),
        t === null)
            return xu(r),
            t = r.memoizedState,
            t !== null && (t = t.dehydrated,
            t !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : t.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824,
            null) : (b = l.children,
            t = l.fallback,
            m ? (l = r.mode,
            m = r.child,
            b = {
                mode: "hidden",
                children: b
            },
            (l & 1) === 0 && m !== null ? (m.childLanes = 0,
            m.pendingProps = b) : m = ba(b, l, 0, null),
            t = qr(t, l, s, null),
            m.return = r,
            t.return = r,
            m.sibling = t,
            r.child = m,
            r.child.memoizedState = Ku(s),
            r.memoizedState = Wu,
            t) : Gu(r, b));
        if (f = t.memoizedState,
        f !== null && (k = f.dehydrated,
        k !== null))
            return ub(t, r, b, l, k, f, s);
        if (m) {
            m = l.fallback,
            b = r.mode,
            f = t.child,
            k = f.sibling;
            var N = {
                mode: "hidden",
                children: l.children
            };
            return (b & 1) === 0 && r.child !== f ? (l = r.child,
            l.childLanes = 0,
            l.pendingProps = N,
            r.deletions = null) : (l = Er(f, N),
            l.subtreeFlags = f.subtreeFlags & 14680064),
            k !== null ? m = Er(k, m) : (m = qr(m, b, s, null),
            m.flags |= 2),
            m.return = r,
            l.return = r,
            l.sibling = m,
            r.child = l,
            l = m,
            m = r.child,
            b = t.child.memoizedState,
            b = b === null ? Ku(s) : {
                baseLanes: b.baseLanes | s,
                cachePool: null,
                transitions: b.transitions
            },
            m.memoizedState = b,
            m.childLanes = t.childLanes & ~s,
            r.memoizedState = Wu,
            l
        }
        return m = t.child,
        t = m.sibling,
        l = Er(m, {
            mode: "visible",
            children: l.children
        }),
        (r.mode & 1) === 0 && (l.lanes = s),
        l.return = r,
        l.sibling = null,
        t !== null && (s = r.deletions,
        s === null ? (r.deletions = [t],
        r.flags |= 16) : s.push(t)),
        r.child = l,
        r.memoizedState = null,
        l
    }
    function Gu(t, r) {
        return r = ba({
            mode: "visible",
            children: r
        }, t.mode, 0, null),
        r.return = t,
        t.child = r
    }
    function ua(t, r, s, l) {
        return l !== null && wu(l),
        ko(r, t.child, null, s),
        t = Gu(r, r.pendingProps.children),
        t.flags |= 2,
        r.memoizedState = null,
        t
    }
    function ub(t, r, s, l, f, m, b) {
        if (s)
            return r.flags & 256 ? (r.flags &= -257,
            l = zu(Error(o(422))),
            ua(t, r, b, l)) : r.memoizedState !== null ? (r.child = t.child,
            r.flags |= 128,
            null) : (m = l.fallback,
            f = r.mode,
            l = ba({
                mode: "visible",
                children: l.children
            }, f, 0, null),
            m = qr(m, f, b, null),
            m.flags |= 2,
            l.return = r,
            m.return = r,
            l.sibling = m,
            r.child = l,
            (r.mode & 1) !== 0 && ko(r, t.child, null, b),
            r.child.memoizedState = Ku(b),
            r.memoizedState = Wu,
            m);
        if ((r.mode & 1) === 0)
            return ua(t, r, b, null);
        if (f.data === "$!") {
            if (l = f.nextSibling && f.nextSibling.dataset,
            l)
                var k = l.dgst;
            return l = k,
            m = Error(o(419)),
            l = zu(m, l, void 0),
            ua(t, r, b, l)
        }
        if (k = (b & t.childLanes) !== 0,
        It || k) {
            if (l = ft,
            l !== null) {
                switch (b & -b) {
                case 4:
                    f = 2;
                    break;
                case 16:
                    f = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    f = 32;
                    break;
                case 536870912:
                    f = 268435456;
                    break;
                default:
                    f = 0
                }
                f = (f & (l.suspendedLanes | b)) !== 0 ? 0 : f,
                f !== 0 && f !== m.retryLane && (m.retryLane = f,
                Yn(t, f),
                hn(l, t, f, -1))
            }
            return uc(),
            l = zu(Error(o(421))),
            ua(t, r, b, l)
        }
        return f.data === "$?" ? (r.flags |= 128,
        r.child = t.child,
        r = bb.bind(null, t),
        f._reactRetry = r,
        null) : (t = m.treeContext,
        Wt = pr(f.nextSibling),
        Ut = r,
        Ye = !0,
        cn = null,
        t !== null && (Qt[Zt++] = Kn,
        Qt[Zt++] = Gn,
        Qt[Zt++] = Hr,
        Kn = t.id,
        Gn = t.overflow,
        Hr = r),
        r = Gu(r, l.children),
        r.flags |= 4096,
        r)
    }
    function qh(t, r, s) {
        t.lanes |= r;
        var l = t.alternate;
        l !== null && (l.lanes |= r),
        Eu(t.return, r, s)
    }
    function Yu(t, r, s, l, f) {
        var m = t.memoizedState;
        m === null ? t.memoizedState = {
            isBackwards: r,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: s,
            tailMode: f
        } : (m.isBackwards = r,
        m.rendering = null,
        m.renderingStartTime = 0,
        m.last = l,
        m.tail = s,
        m.tailMode = f)
    }
    function Jh(t, r, s) {
        var l = r.pendingProps
          , f = l.revealOrder
          , m = l.tail;
        if (Pt(t, r, l.children, s),
        l = Ze.current,
        (l & 2) !== 0)
            l = l & 1 | 2,
            r.flags |= 128;
        else {
            if (t !== null && (t.flags & 128) !== 0)
                e: for (t = r.child; t !== null; ) {
                    if (t.tag === 13)
                        t.memoizedState !== null && qh(t, s, r);
                    else if (t.tag === 19)
                        qh(t, s, r);
                    else if (t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === r)
                        break e;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === r)
                            break e;
                        t = t.return
                    }
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            l &= 1
        }
        if (Ue(Ze, l),
        (r.mode & 1) === 0)
            r.memoizedState = null;
        else
            switch (f) {
            case "forwards":
                for (s = r.child,
                f = null; s !== null; )
                    t = s.alternate,
                    t !== null && na(t) === null && (f = s),
                    s = s.sibling;
                s = f,
                s === null ? (f = r.child,
                r.child = null) : (f = s.sibling,
                s.sibling = null),
                Yu(r, !1, f, s, m);
                break;
            case "backwards":
                for (s = null,
                f = r.child,
                r.child = null; f !== null; ) {
                    if (t = f.alternate,
                    t !== null && na(t) === null) {
                        r.child = f;
                        break
                    }
                    t = f.sibling,
                    f.sibling = s,
                    s = f,
                    f = t
                }
                Yu(r, !0, s, null, m);
                break;
            case "together":
                Yu(r, !1, null, null, void 0);
                break;
            default:
                r.memoizedState = null
            }
        return r.child
    }
    function ca(t, r) {
        (r.mode & 1) === 0 && t !== null && (t.alternate = null,
        r.alternate = null,
        r.flags |= 2)
    }
    function Qn(t, r, s) {
        if (t !== null && (r.dependencies = t.dependencies),
        Yr |= r.lanes,
        (s & r.childLanes) === 0)
            return null;
        if (t !== null && r.child !== t.child)
            throw Error(o(153));
        if (r.child !== null) {
            for (t = r.child,
            s = Er(t, t.pendingProps),
            r.child = s,
            s.return = r; t.sibling !== null; )
                t = t.sibling,
                s = s.sibling = Er(t, t.pendingProps),
                s.return = r;
            s.sibling = null
        }
        return r.child
    }
    function cb(t, r, s) {
        switch (r.tag) {
        case 3:
            Xh(r),
            Po();
            break;
        case 5:
            ph(r);
            break;
        case 1:
            _t(r.type) && Ks(r);
            break;
        case 4:
            ku(r, r.stateNode.containerInfo);
            break;
        case 10:
            var l = r.type._context
              , f = r.memoizedProps.value;
            Ue(qs, l._currentValue),
            l._currentValue = f;
            break;
        case 13:
            if (l = r.memoizedState,
            l !== null)
                return l.dehydrated !== null ? (Ue(Ze, Ze.current & 1),
                r.flags |= 128,
                null) : (s & r.child.childLanes) !== 0 ? Zh(t, r, s) : (Ue(Ze, Ze.current & 1),
                t = Qn(t, r, s),
                t !== null ? t.sibling : null);
            Ue(Ze, Ze.current & 1);
            break;
        case 19:
            if (l = (s & r.childLanes) !== 0,
            (t.flags & 128) !== 0) {
                if (l)
                    return Jh(t, r, s);
                r.flags |= 128
            }
            if (f = r.memoizedState,
            f !== null && (f.rendering = null,
            f.tail = null,
            f.lastEffect = null),
            Ue(Ze, Ze.current),
            l)
                break;
            return null;
        case 22:
        case 23:
            return r.lanes = 0,
            Kh(t, r, s)
        }
        return Qn(t, r, s)
    }
    var em, Xu, tm, nm;
    em = function(t, r) {
        for (var s = r.child; s !== null; ) {
            if (s.tag === 5 || s.tag === 6)
                t.appendChild(s.stateNode);
            else if (s.tag !== 4 && s.child !== null) {
                s.child.return = s,
                s = s.child;
                continue
            }
            if (s === r)
                break;
            for (; s.sibling === null; ) {
                if (s.return === null || s.return === r)
                    return;
                s = s.return
            }
            s.sibling.return = s.return,
            s = s.sibling
        }
    }
    ,
    Xu = function() {}
    ,
    tm = function(t, r, s, l) {
        var f = t.memoizedProps;
        if (f !== l) {
            t = r.stateNode,
            Kr(An.current);
            var m = null;
            switch (s) {
            case "input":
                f = W(t, f),
                l = W(t, l),
                m = [];
                break;
            case "select":
                f = G({}, f, {
                    value: void 0
                }),
                l = G({}, l, {
                    value: void 0
                }),
                m = [];
                break;
            case "textarea":
                f = Et(t, f),
                l = Et(t, l),
                m = [];
                break;
            default:
                typeof f.onClick != "function" && typeof l.onClick == "function" && (t.onclick = Hs)
            }
            Cn(s, l);
            var b;
            s = null;
            for (B in f)
                if (!l.hasOwnProperty(B) && f.hasOwnProperty(B) && f[B] != null)
                    if (B === "style") {
                        var k = f[B];
                        for (b in k)
                            k.hasOwnProperty(b) && (s || (s = {}),
                            s[b] = "")
                    } else
                        B !== "dangerouslySetInnerHTML" && B !== "children" && B !== "suppressContentEditableWarning" && B !== "suppressHydrationWarning" && B !== "autoFocus" && (a.hasOwnProperty(B) ? m || (m = []) : (m = m || []).push(B, null));
            for (B in l) {
                var N = l[B];
                if (k = f?.[B],
                l.hasOwnProperty(B) && N !== k && (N != null || k != null))
                    if (B === "style")
                        if (k) {
                            for (b in k)
                                !k.hasOwnProperty(b) || N && N.hasOwnProperty(b) || (s || (s = {}),
                                s[b] = "");
                            for (b in N)
                                N.hasOwnProperty(b) && k[b] !== N[b] && (s || (s = {}),
                                s[b] = N[b])
                        } else
                            s || (m || (m = []),
                            m.push(B, s)),
                            s = N;
                    else
                        B === "dangerouslySetInnerHTML" ? (N = N ? N.__html : void 0,
                        k = k ? k.__html : void 0,
                        N != null && k !== N && (m = m || []).push(B, N)) : B === "children" ? typeof N != "string" && typeof N != "number" || (m = m || []).push(B, "" + N) : B !== "suppressContentEditableWarning" && B !== "suppressHydrationWarning" && (a.hasOwnProperty(B) ? (N != null && B === "onScroll" && We("scroll", t),
                        m || k === N || (m = [])) : (m = m || []).push(B, N))
            }
            s && (m = m || []).push("style", s);
            var B = m;
            (r.updateQueue = B) && (r.flags |= 4)
        }
    }
    ,
    nm = function(t, r, s, l) {
        s !== l && (r.flags |= 4)
    }
    ;
    function Bi(t, r) {
        if (!Ye)
            switch (t.tailMode) {
            case "hidden":
                r = t.tail;
                for (var s = null; r !== null; )
                    r.alternate !== null && (s = r),
                    r = r.sibling;
                s === null ? t.tail = null : s.sibling = null;
                break;
            case "collapsed":
                s = t.tail;
                for (var l = null; s !== null; )
                    s.alternate !== null && (l = s),
                    s = s.sibling;
                l === null ? r || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null
            }
    }
    function St(t) {
        var r = t.alternate !== null && t.alternate.child === t.child
          , s = 0
          , l = 0;
        if (r)
            for (var f = t.child; f !== null; )
                s |= f.lanes | f.childLanes,
                l |= f.subtreeFlags & 14680064,
                l |= f.flags & 14680064,
                f.return = t,
                f = f.sibling;
        else
            for (f = t.child; f !== null; )
                s |= f.lanes | f.childLanes,
                l |= f.subtreeFlags,
                l |= f.flags,
                f.return = t,
                f = f.sibling;
        return t.subtreeFlags |= l,
        t.childLanes = s,
        r
    }
    function db(t, r, s) {
        var l = r.pendingProps;
        switch (vu(r),
        r.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return St(r),
            null;
        case 1:
            return _t(r.type) && Ws(),
            St(r),
            null;
        case 3:
            return l = r.stateNode,
            No(),
            Ke(Ot),
            Ke(xt),
            Nu(),
            l.pendingContext && (l.context = l.pendingContext,
            l.pendingContext = null),
            (t === null || t.child === null) && (Qs(r) ? r.flags |= 4 : t === null || t.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024,
            cn !== null && (sc(cn),
            cn = null))),
            Xu(t, r),
            St(r),
            null;
        case 5:
            Au(r);
            var f = Kr(_i.current);
            if (s = r.type,
            t !== null && r.stateNode != null)
                tm(t, r, s, l, f),
                t.ref !== r.ref && (r.flags |= 512,
                r.flags |= 2097152);
            else {
                if (!l) {
                    if (r.stateNode === null)
                        throw Error(o(166));
                    return St(r),
                    null
                }
                if (t = Kr(An.current),
                Qs(r)) {
                    l = r.stateNode,
                    s = r.type;
                    var m = r.memoizedProps;
                    switch (l[kn] = r,
                    l[Ni] = m,
                    t = (r.mode & 1) !== 0,
                    s) {
                    case "dialog":
                        We("cancel", l),
                        We("close", l);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        We("load", l);
                        break;
                    case "video":
                    case "audio":
                        for (f = 0; f < ki.length; f++)
                            We(ki[f], l);
                        break;
                    case "source":
                        We("error", l);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        We("error", l),
                        We("load", l);
                        break;
                    case "details":
                        We("toggle", l);
                        break;
                    case "input":
                        xe(l, m),
                        We("invalid", l);
                        break;
                    case "select":
                        l._wrapperState = {
                            wasMultiple: !!m.multiple
                        },
                        We("invalid", l);
                        break;
                    case "textarea":
                        yt(l, m),
                        We("invalid", l)
                    }
                    Cn(s, m),
                    f = null;
                    for (var b in m)
                        if (m.hasOwnProperty(b)) {
                            var k = m[b];
                            b === "children" ? typeof k == "string" ? l.textContent !== k && (m.suppressHydrationWarning !== !0 && $s(l.textContent, k, t),
                            f = ["children", k]) : typeof k == "number" && l.textContent !== "" + k && (m.suppressHydrationWarning !== !0 && $s(l.textContent, k, t),
                            f = ["children", "" + k]) : a.hasOwnProperty(b) && k != null && b === "onScroll" && We("scroll", l)
                        }
                    switch (s) {
                    case "input":
                        Te(l),
                        Oe(l, m, !0);
                        break;
                    case "textarea":
                        Te(l),
                        ir(l);
                        break;
                    case "select":
                    case "option":
                        break;
                    default:
                        typeof m.onClick == "function" && (l.onclick = Hs)
                    }
                    l = f,
                    r.updateQueue = l,
                    l !== null && (r.flags |= 4)
                } else {
                    b = f.nodeType === 9 ? f : f.ownerDocument,
                    t === "http://www.w3.org/1999/xhtml" && (t = lt(s)),
                    t === "http://www.w3.org/1999/xhtml" ? s === "script" ? (t = b.createElement("div"),
                    t.innerHTML = "<script><\/script>",
                    t = t.removeChild(t.firstChild)) : typeof l.is == "string" ? t = b.createElement(s, {
                        is: l.is
                    }) : (t = b.createElement(s),
                    s === "select" && (b = t,
                    l.multiple ? b.multiple = !0 : l.size && (b.size = l.size))) : t = b.createElementNS(t, s),
                    t[kn] = r,
                    t[Ni] = l,
                    em(t, r, !1, !1),
                    r.stateNode = t;
                    e: {
                        switch (b = ci(s, l),
                        s) {
                        case "dialog":
                            We("cancel", t),
                            We("close", t),
                            f = l;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            We("load", t),
                            f = l;
                            break;
                        case "video":
                        case "audio":
                            for (f = 0; f < ki.length; f++)
                                We(ki[f], t);
                            f = l;
                            break;
                        case "source":
                            We("error", t),
                            f = l;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            We("error", t),
                            We("load", t),
                            f = l;
                            break;
                        case "details":
                            We("toggle", t),
                            f = l;
                            break;
                        case "input":
                            xe(t, l),
                            f = W(t, l),
                            We("invalid", t);
                            break;
                        case "option":
                            f = l;
                            break;
                        case "select":
                            t._wrapperState = {
                                wasMultiple: !!l.multiple
                            },
                            f = G({}, l, {
                                value: void 0
                            }),
                            We("invalid", t);
                            break;
                        case "textarea":
                            yt(t, l),
                            f = Et(t, l),
                            We("invalid", t);
                            break;
                        default:
                            f = l
                        }
                        Cn(s, f),
                        k = f;
                        for (m in k)
                            if (k.hasOwnProperty(m)) {
                                var N = k[m];
                                m === "style" ? Hn(t, N) : m === "dangerouslySetInnerHTML" ? (N = N ? N.__html : void 0,
                                N != null && ys(t, N)) : m === "children" ? typeof N == "string" ? (s !== "textarea" || N !== "") && bn(t, N) : typeof N == "number" && bn(t, "" + N) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (a.hasOwnProperty(m) ? N != null && m === "onScroll" && We("scroll", t) : N != null && R(t, m, N, b))
                            }
                        switch (s) {
                        case "input":
                            Te(t),
                            Oe(t, l, !1);
                            break;
                        case "textarea":
                            Te(t),
                            ir(t);
                            break;
                        case "option":
                            l.value != null && t.setAttribute("value", "" + ee(l.value));
                            break;
                        case "select":
                            t.multiple = !!l.multiple,
                            m = l.value,
                            m != null ? ze(t, !!l.multiple, m, !1) : l.defaultValue != null && ze(t, !!l.multiple, l.defaultValue, !0);
                            break;
                        default:
                            typeof f.onClick == "function" && (t.onclick = Hs)
                        }
                        switch (s) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            l = !!l.autoFocus;
                            break e;
                        case "img":
                            l = !0;
                            break e;
                        default:
                            l = !1
                        }
                    }
                    l && (r.flags |= 4)
                }
                r.ref !== null && (r.flags |= 512,
                r.flags |= 2097152)
            }
            return St(r),
            null;
        case 6:
            if (t && r.stateNode != null)
                nm(t, r, t.memoizedProps, l);
            else {
                if (typeof l != "string" && r.stateNode === null)
                    throw Error(o(166));
                if (s = Kr(_i.current),
                Kr(An.current),
                Qs(r)) {
                    if (l = r.stateNode,
                    s = r.memoizedProps,
                    l[kn] = r,
                    (m = l.nodeValue !== s) && (t = Ut,
                    t !== null))
                        switch (t.tag) {
                        case 3:
                            $s(l.nodeValue, s, (t.mode & 1) !== 0);
                            break;
                        case 5:
                            t.memoizedProps.suppressHydrationWarning !== !0 && $s(l.nodeValue, s, (t.mode & 1) !== 0)
                        }
                    m && (r.flags |= 4)
                } else
                    l = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(l),
                    l[kn] = r,
                    r.stateNode = l
            }
            return St(r),
            null;
        case 13:
            if (Ke(Ze),
            l = r.memoizedState,
            t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                if (Ye && Wt !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0)
                    ih(),
                    Po(),
                    r.flags |= 98560,
                    m = !1;
                else if (m = Qs(r),
                l !== null && l.dehydrated !== null) {
                    if (t === null) {
                        if (!m)
                            throw Error(o(318));
                        if (m = r.memoizedState,
                        m = m !== null ? m.dehydrated : null,
                        !m)
                            throw Error(o(317));
                        m[kn] = r
                    } else
                        Po(),
                        (r.flags & 128) === 0 && (r.memoizedState = null),
                        r.flags |= 4;
                    St(r),
                    m = !1
                } else
                    cn !== null && (sc(cn),
                    cn = null),
                    m = !0;
                if (!m)
                    return r.flags & 65536 ? r : null
            }
            return (r.flags & 128) !== 0 ? (r.lanes = s,
            r) : (l = l !== null,
            l !== (t !== null && t.memoizedState !== null) && l && (r.child.flags |= 8192,
            (r.mode & 1) !== 0 && (t === null || (Ze.current & 1) !== 0 ? ct === 0 && (ct = 3) : uc())),
            r.updateQueue !== null && (r.flags |= 4),
            St(r),
            null);
        case 4:
            return No(),
            Xu(t, r),
            t === null && Ai(r.stateNode.containerInfo),
            St(r),
            null;
        case 10:
            return Cu(r.type._context),
            St(r),
            null;
        case 17:
            return _t(r.type) && Ws(),
            St(r),
            null;
        case 19:
            if (Ke(Ze),
            m = r.memoizedState,
            m === null)
                return St(r),
                null;
            if (l = (r.flags & 128) !== 0,
            b = m.rendering,
            b === null)
                if (l)
                    Bi(m, !1);
                else {
                    if (ct !== 0 || t !== null && (t.flags & 128) !== 0)
                        for (t = r.child; t !== null; ) {
                            if (b = na(t),
                            b !== null) {
                                for (r.flags |= 128,
                                Bi(m, !1),
                                l = b.updateQueue,
                                l !== null && (r.updateQueue = l,
                                r.flags |= 4),
                                r.subtreeFlags = 0,
                                l = s,
                                s = r.child; s !== null; )
                                    m = s,
                                    t = l,
                                    m.flags &= 14680066,
                                    b = m.alternate,
                                    b === null ? (m.childLanes = 0,
                                    m.lanes = t,
                                    m.child = null,
                                    m.subtreeFlags = 0,
                                    m.memoizedProps = null,
                                    m.memoizedState = null,
                                    m.updateQueue = null,
                                    m.dependencies = null,
                                    m.stateNode = null) : (m.childLanes = b.childLanes,
                                    m.lanes = b.lanes,
                                    m.child = b.child,
                                    m.subtreeFlags = 0,
                                    m.deletions = null,
                                    m.memoizedProps = b.memoizedProps,
                                    m.memoizedState = b.memoizedState,
                                    m.updateQueue = b.updateQueue,
                                    m.type = b.type,
                                    t = b.dependencies,
                                    m.dependencies = t === null ? null : {
                                        lanes: t.lanes,
                                        firstContext: t.firstContext
                                    }),
                                    s = s.sibling;
                                return Ue(Ze, Ze.current & 1 | 2),
                                r.child
                            }
                            t = t.sibling
                        }
                    m.tail !== null && nt() > Oo && (r.flags |= 128,
                    l = !0,
                    Bi(m, !1),
                    r.lanes = 4194304)
                }
            else {
                if (!l)
                    if (t = na(b),
                    t !== null) {
                        if (r.flags |= 128,
                        l = !0,
                        s = t.updateQueue,
                        s !== null && (r.updateQueue = s,
                        r.flags |= 4),
                        Bi(m, !0),
                        m.tail === null && m.tailMode === "hidden" && !b.alternate && !Ye)
                            return St(r),
                            null
                    } else
                        2 * nt() - m.renderingStartTime > Oo && s !== 1073741824 && (r.flags |= 128,
                        l = !0,
                        Bi(m, !1),
                        r.lanes = 4194304);
                m.isBackwards ? (b.sibling = r.child,
                r.child = b) : (s = m.last,
                s !== null ? s.sibling = b : r.child = b,
                m.last = b)
            }
            return m.tail !== null ? (r = m.tail,
            m.rendering = r,
            m.tail = r.sibling,
            m.renderingStartTime = nt(),
            r.sibling = null,
            s = Ze.current,
            Ue(Ze, l ? s & 1 | 2 : s & 1),
            r) : (St(r),
            null);
        case 22:
        case 23:
            return lc(),
            l = r.memoizedState !== null,
            t !== null && t.memoizedState !== null !== l && (r.flags |= 8192),
            l && (r.mode & 1) !== 0 ? (Kt & 1073741824) !== 0 && (St(r),
            r.subtreeFlags & 6 && (r.flags |= 8192)) : St(r),
            null;
        case 24:
            return null;
        case 25:
            return null
        }
        throw Error(o(156, r.tag))
    }
    function fb(t, r) {
        switch (vu(r),
        r.tag) {
        case 1:
            return _t(r.type) && Ws(),
            t = r.flags,
            t & 65536 ? (r.flags = t & -65537 | 128,
            r) : null;
        case 3:
            return No(),
            Ke(Ot),
            Ke(xt),
            Nu(),
            t = r.flags,
            (t & 65536) !== 0 && (t & 128) === 0 ? (r.flags = t & -65537 | 128,
            r) : null;
        case 5:
            return Au(r),
            null;
        case 13:
            if (Ke(Ze),
            t = r.memoizedState,
            t !== null && t.dehydrated !== null) {
                if (r.alternate === null)
                    throw Error(o(340));
                Po()
            }
            return t = r.flags,
            t & 65536 ? (r.flags = t & -65537 | 128,
            r) : null;
        case 19:
            return Ke(Ze),
            null;
        case 4:
            return No(),
            null;
        case 10:
            return Cu(r.type._context),
            null;
        case 22:
        case 23:
            return lc(),
            null;
        case 24:
            return null;
        default:
            return null
        }
    }
    var da = !1
      , bt = !1
      , pb = typeof WeakSet == "function" ? WeakSet : Set
      , fe = null;
    function Mo(t, r) {
        var s = t.ref;
        if (s !== null)
            if (typeof s == "function")
                try {
                    s(null)
                } catch (l) {
                    et(t, r, l)
                }
            else
                s.current = null
    }
    function Qu(t, r, s) {
        try {
            s()
        } catch (l) {
            et(t, r, l)
        }
    }
    var rm = !1;
    function hb(t, r) {
        if (lu = Ds,
        t = _p(),
        eu(t)) {
            if ("selectionStart"in t)
                var s = {
                    start: t.selectionStart,
                    end: t.selectionEnd
                };
            else
                e: {
                    s = (s = t.ownerDocument) && s.defaultView || window;
                    var l = s.getSelection && s.getSelection();
                    if (l && l.rangeCount !== 0) {
                        s = l.anchorNode;
                        var f = l.anchorOffset
                          , m = l.focusNode;
                        l = l.focusOffset;
                        try {
                            s.nodeType,
                            m.nodeType
                        } catch {
                            s = null;
                            break e
                        }
                        var b = 0
                          , k = -1
                          , N = -1
                          , B = 0
                          , X = 0
                          , q = t
                          , Y = null;
                        t: for (; ; ) {
                            for (var de; q !== s || f !== 0 && q.nodeType !== 3 || (k = b + f),
                            q !== m || l !== 0 && q.nodeType !== 3 || (N = b + l),
                            q.nodeType === 3 && (b += q.nodeValue.length),
                            (de = q.firstChild) !== null; )
                                Y = q,
                                q = de;
                            for (; ; ) {
                                if (q === t)
                                    break t;
                                if (Y === s && ++B === f && (k = b),
                                Y === m && ++X === l && (N = b),
                                (de = q.nextSibling) !== null)
                                    break;
                                q = Y,
                                Y = q.parentNode
                            }
                            q = de
                        }
                        s = k === -1 || N === -1 ? null : {
                            start: k,
                            end: N
                        }
                    } else
                        s = null
                }
            s = s || {
                start: 0,
                end: 0
            }
        } else
            s = null;
        for (uu = {
            focusedElem: t,
            selectionRange: s
        },
        Ds = !1,
        fe = r; fe !== null; )
            if (r = fe,
            t = r.child,
            (r.subtreeFlags & 1028) !== 0 && t !== null)
                t.return = r,
                fe = t;
            else
                for (; fe !== null; ) {
                    r = fe;
                    try {
                        var me = r.alternate;
                        if ((r.flags & 1024) !== 0)
                            switch (r.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (me !== null) {
                                    var ve = me.memoizedProps
                                      , rt = me.memoizedState
                                      , _ = r.stateNode
                                      , M = _.getSnapshotBeforeUpdate(r.elementType === r.type ? ve : dn(r.type, ve), rt);
                                    _.__reactInternalSnapshotBeforeUpdate = M
                                }
                                break;
                            case 3:
                                var L = r.stateNode.containerInfo;
                                L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(o(163))
                            }
                    } catch (te) {
                        et(r, r.return, te)
                    }
                    if (t = r.sibling,
                    t !== null) {
                        t.return = r.return,
                        fe = t;
                        break
                    }
                    fe = r.return
                }
        return me = rm,
        rm = !1,
        me
    }
    function zi(t, r, s) {
        var l = r.updateQueue;
        if (l = l !== null ? l.lastEffect : null,
        l !== null) {
            var f = l = l.next;
            do {
                if ((f.tag & t) === t) {
                    var m = f.destroy;
                    f.destroy = void 0,
                    m !== void 0 && Qu(r, s, m)
                }
                f = f.next
            } while (f !== l)
        }
    }
    function fa(t, r) {
        if (r = r.updateQueue,
        r = r !== null ? r.lastEffect : null,
        r !== null) {
            var s = r = r.next;
            do {
                if ((s.tag & t) === t) {
                    var l = s.create;
                    s.destroy = l()
                }
                s = s.next
            } while (s !== r)
        }
    }
    function Zu(t) {
        var r = t.ref;
        if (r !== null) {
            var s = t.stateNode;
            switch (t.tag) {
            case 5:
                t = s;
                break;
            default:
                t = s
            }
            typeof r == "function" ? r(t) : r.current = t
        }
    }
    function om(t) {
        var r = t.alternate;
        r !== null && (t.alternate = null,
        om(r)),
        t.child = null,
        t.deletions = null,
        t.sibling = null,
        t.tag === 5 && (r = t.stateNode,
        r !== null && (delete r[kn],
        delete r[Ni],
        delete r[pu],
        delete r[QS],
        delete r[ZS])),
        t.stateNode = null,
        t.return = null,
        t.dependencies = null,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.pendingProps = null,
        t.stateNode = null,
        t.updateQueue = null
    }
    function im(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 4
    }
    function sm(t) {
        e: for (; ; ) {
            for (; t.sibling === null; ) {
                if (t.return === null || im(t.return))
                    return null;
                t = t.return
            }
            for (t.sibling.return = t.return,
            t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
                if (t.flags & 2 || t.child === null || t.tag === 4)
                    continue e;
                t.child.return = t,
                t = t.child
            }
            if (!(t.flags & 2))
                return t.stateNode
        }
    }
    function qu(t, r, s) {
        var l = t.tag;
        if (l === 5 || l === 6)
            t = t.stateNode,
            r ? s.nodeType === 8 ? s.parentNode.insertBefore(t, r) : s.insertBefore(t, r) : (s.nodeType === 8 ? (r = s.parentNode,
            r.insertBefore(t, s)) : (r = s,
            r.appendChild(t)),
            s = s._reactRootContainer,
            s != null || r.onclick !== null || (r.onclick = Hs));
        else if (l !== 4 && (t = t.child,
        t !== null))
            for (qu(t, r, s),
            t = t.sibling; t !== null; )
                qu(t, r, s),
                t = t.sibling
    }
    function Ju(t, r, s) {
        var l = t.tag;
        if (l === 5 || l === 6)
            t = t.stateNode,
            r ? s.insertBefore(t, r) : s.appendChild(t);
        else if (l !== 4 && (t = t.child,
        t !== null))
            for (Ju(t, r, s),
            t = t.sibling; t !== null; )
                Ju(t, r, s),
                t = t.sibling
    }
    var mt = null
      , fn = !1;
    function xr(t, r, s) {
        for (s = s.child; s !== null; )
            am(t, r, s),
            s = s.sibling
    }
    function am(t, r, s) {
        if (Pn && typeof Pn.onCommitFiberUnmount == "function")
            try {
                Pn.onCommitFiberUnmount(Ts, s)
            } catch {}
        switch (s.tag) {
        case 5:
            bt || Mo(s, r);
        case 6:
            var l = mt
              , f = fn;
            mt = null,
            xr(t, r, s),
            mt = l,
            fn = f,
            mt !== null && (fn ? (t = mt,
            s = s.stateNode,
            t.nodeType === 8 ? t.parentNode.removeChild(s) : t.removeChild(s)) : mt.removeChild(s.stateNode));
            break;
        case 18:
            mt !== null && (fn ? (t = mt,
            s = s.stateNode,
            t.nodeType === 8 ? fu(t.parentNode, s) : t.nodeType === 1 && fu(t, s),
            xi(t)) : fu(mt, s.stateNode));
            break;
        case 4:
            l = mt,
            f = fn,
            mt = s.stateNode.containerInfo,
            fn = !0,
            xr(t, r, s),
            mt = l,
            fn = f;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!bt && (l = s.updateQueue,
            l !== null && (l = l.lastEffect,
            l !== null))) {
                f = l = l.next;
                do {
                    var m = f
                      , b = m.destroy;
                    m = m.tag,
                    b !== void 0 && ((m & 2) !== 0 || (m & 4) !== 0) && Qu(s, r, b),
                    f = f.next
                } while (f !== l)
            }
            xr(t, r, s);
            break;
        case 1:
            if (!bt && (Mo(s, r),
            l = s.stateNode,
            typeof l.componentWillUnmount == "function"))
                try {
                    l.props = s.memoizedProps,
                    l.state = s.memoizedState,
                    l.componentWillUnmount()
                } catch (k) {
                    et(s, r, k)
                }
            xr(t, r, s);
            break;
        case 21:
            xr(t, r, s);
            break;
        case 22:
            s.mode & 1 ? (bt = (l = bt) || s.memoizedState !== null,
            xr(t, r, s),
            bt = l) : xr(t, r, s);
            break;
        default:
            xr(t, r, s)
        }
    }
    function lm(t) {
        var r = t.updateQueue;
        if (r !== null) {
            t.updateQueue = null;
            var s = t.stateNode;
            s === null && (s = t.stateNode = new pb),
            r.forEach(function(l) {
                var f = Cb.bind(null, t, l);
                s.has(l) || (s.add(l),
                l.then(f, f))
            })
        }
    }
    function pn(t, r) {
        var s = r.deletions;
        if (s !== null)
            for (var l = 0; l < s.length; l++) {
                var f = s[l];
                try {
                    var m = t
                      , b = r
                      , k = b;
                    e: for (; k !== null; ) {
                        switch (k.tag) {
                        case 5:
                            mt = k.stateNode,
                            fn = !1;
                            break e;
                        case 3:
                            mt = k.stateNode.containerInfo,
                            fn = !0;
                            break e;
                        case 4:
                            mt = k.stateNode.containerInfo,
                            fn = !0;
                            break e
                        }
                        k = k.return
                    }
                    if (mt === null)
                        throw Error(o(160));
                    am(m, b, f),
                    mt = null,
                    fn = !1;
                    var N = f.alternate;
                    N !== null && (N.return = null),
                    f.return = null
                } catch (B) {
                    et(f, r, B)
                }
            }
        if (r.subtreeFlags & 12854)
            for (r = r.child; r !== null; )
                um(r, t),
                r = r.sibling
    }
    function um(t, r) {
        var s = t.alternate
          , l = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (pn(r, t),
            Nn(t),
            l & 4) {
                try {
                    zi(3, t, t.return),
                    fa(3, t)
                } catch (ve) {
                    et(t, t.return, ve)
                }
                try {
                    zi(5, t, t.return)
                } catch (ve) {
                    et(t, t.return, ve)
                }
            }
            break;
        case 1:
            pn(r, t),
            Nn(t),
            l & 512 && s !== null && Mo(s, s.return);
            break;
        case 5:
            if (pn(r, t),
            Nn(t),
            l & 512 && s !== null && Mo(s, s.return),
            t.flags & 32) {
                var f = t.stateNode;
                try {
                    bn(f, "")
                } catch (ve) {
                    et(t, t.return, ve)
                }
            }
            if (l & 4 && (f = t.stateNode,
            f != null)) {
                var m = t.memoizedProps
                  , b = s !== null ? s.memoizedProps : m
                  , k = t.type
                  , N = t.updateQueue;
                if (t.updateQueue = null,
                N !== null)
                    try {
                        k === "input" && m.type === "radio" && m.name != null && be(f, m),
                        ci(k, b);
                        var B = ci(k, m);
                        for (b = 0; b < N.length; b += 2) {
                            var X = N[b]
                              , q = N[b + 1];
                            X === "style" ? Hn(f, q) : X === "dangerouslySetInnerHTML" ? ys(f, q) : X === "children" ? bn(f, q) : R(f, X, q, B)
                        }
                        switch (k) {
                        case "input":
                            je(f, m);
                            break;
                        case "textarea":
                            or(f, m);
                            break;
                        case "select":
                            var Y = f._wrapperState.wasMultiple;
                            f._wrapperState.wasMultiple = !!m.multiple;
                            var de = m.value;
                            de != null ? ze(f, !!m.multiple, de, !1) : Y !== !!m.multiple && (m.defaultValue != null ? ze(f, !!m.multiple, m.defaultValue, !0) : ze(f, !!m.multiple, m.multiple ? [] : "", !1))
                        }
                        f[Ni] = m
                    } catch (ve) {
                        et(t, t.return, ve)
                    }
            }
            break;
        case 6:
            if (pn(r, t),
            Nn(t),
            l & 4) {
                if (t.stateNode === null)
                    throw Error(o(162));
                f = t.stateNode,
                m = t.memoizedProps;
                try {
                    f.nodeValue = m
                } catch (ve) {
                    et(t, t.return, ve)
                }
            }
            break;
        case 3:
            if (pn(r, t),
            Nn(t),
            l & 4 && s !== null && s.memoizedState.isDehydrated)
                try {
                    xi(r.containerInfo)
                } catch (ve) {
                    et(t, t.return, ve)
                }
            break;
        case 4:
            pn(r, t),
            Nn(t);
            break;
        case 13:
            pn(r, t),
            Nn(t),
            f = t.child,
            f.flags & 8192 && (m = f.memoizedState !== null,
            f.stateNode.isHidden = m,
            !m || f.alternate !== null && f.alternate.memoizedState !== null || (nc = nt())),
            l & 4 && lm(t);
            break;
        case 22:
            if (X = s !== null && s.memoizedState !== null,
            t.mode & 1 ? (bt = (B = bt) || X,
            pn(r, t),
            bt = B) : pn(r, t),
            Nn(t),
            l & 8192) {
                if (B = t.memoizedState !== null,
                (t.stateNode.isHidden = B) && !X && (t.mode & 1) !== 0)
                    for (fe = t,
                    X = t.child; X !== null; ) {
                        for (q = fe = X; fe !== null; ) {
                            switch (Y = fe,
                            de = Y.child,
                            Y.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                zi(4, Y, Y.return);
                                break;
                            case 1:
                                Mo(Y, Y.return);
                                var me = Y.stateNode;
                                if (typeof me.componentWillUnmount == "function") {
                                    l = Y,
                                    s = Y.return;
                                    try {
                                        r = l,
                                        me.props = r.memoizedProps,
                                        me.state = r.memoizedState,
                                        me.componentWillUnmount()
                                    } catch (ve) {
                                        et(l, s, ve)
                                    }
                                }
                                break;
                            case 5:
                                Mo(Y, Y.return);
                                break;
                            case 22:
                                if (Y.memoizedState !== null) {
                                    fm(q);
                                    continue
                                }
                            }
                            de !== null ? (de.return = Y,
                            fe = de) : fm(q)
                        }
                        X = X.sibling
                    }
                e: for (X = null,
                q = t; ; ) {
                    if (q.tag === 5) {
                        if (X === null) {
                            X = q;
                            try {
                                f = q.stateNode,
                                B ? (m = f.style,
                                typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none") : (k = q.stateNode,
                                N = q.memoizedProps.style,
                                b = N != null && N.hasOwnProperty("display") ? N.display : null,
                                k.style.display = co("display", b))
                            } catch (ve) {
                                et(t, t.return, ve)
                            }
                        }
                    } else if (q.tag === 6) {
                        if (X === null)
                            try {
                                q.stateNode.nodeValue = B ? "" : q.memoizedProps
                            } catch (ve) {
                                et(t, t.return, ve)
                            }
                    } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === t) && q.child !== null) {
                        q.child.return = q,
                        q = q.child;
                        continue
                    }
                    if (q === t)
                        break e;
                    for (; q.sibling === null; ) {
                        if (q.return === null || q.return === t)
                            break e;
                        X === q && (X = null),
                        q = q.return
                    }
                    X === q && (X = null),
                    q.sibling.return = q.return,
                    q = q.sibling
                }
            }
            break;
        case 19:
            pn(r, t),
            Nn(t),
            l & 4 && lm(t);
            break;
        case 21:
            break;
        default:
            pn(r, t),
            Nn(t)
        }
    }
    function Nn(t) {
        var r = t.flags;
        if (r & 2) {
            try {
                e: {
                    for (var s = t.return; s !== null; ) {
                        if (im(s)) {
                            var l = s;
                            break e
                        }
                        s = s.return
                    }
                    throw Error(o(160))
                }
                switch (l.tag) {
                case 5:
                    var f = l.stateNode;
                    l.flags & 32 && (bn(f, ""),
                    l.flags &= -33);
                    var m = sm(t);
                    Ju(t, m, f);
                    break;
                case 3:
                case 4:
                    var b = l.stateNode.containerInfo
                      , k = sm(t);
                    qu(t, k, b);
                    break;
                default:
                    throw Error(o(161))
                }
            } catch (N) {
                et(t, t.return, N)
            }
            t.flags &= -3
        }
        r & 4096 && (t.flags &= -4097)
    }
    function mb(t, r, s) {
        fe = t,
        cm(t)
    }
    function cm(t, r, s) {
        for (var l = (t.mode & 1) !== 0; fe !== null; ) {
            var f = fe
              , m = f.child;
            if (f.tag === 22 && l) {
                var b = f.memoizedState !== null || da;
                if (!b) {
                    var k = f.alternate
                      , N = k !== null && k.memoizedState !== null || bt;
                    k = da;
                    var B = bt;
                    if (da = b,
                    (bt = N) && !B)
                        for (fe = f; fe !== null; )
                            b = fe,
                            N = b.child,
                            b.tag === 22 && b.memoizedState !== null ? pm(f) : N !== null ? (N.return = b,
                            fe = N) : pm(f);
                    for (; m !== null; )
                        fe = m,
                        cm(m),
                        m = m.sibling;
                    fe = f,
                    da = k,
                    bt = B
                }
                dm(t)
            } else
                (f.subtreeFlags & 8772) !== 0 && m !== null ? (m.return = f,
                fe = m) : dm(t)
        }
    }
    function dm(t) {
        for (; fe !== null; ) {
            var r = fe;
            if ((r.flags & 8772) !== 0) {
                var s = r.alternate;
                try {
                    if ((r.flags & 8772) !== 0)
                        switch (r.tag) {
                        case 0:
                        case 11:
                        case 15:
                            bt || fa(5, r);
                            break;
                        case 1:
                            var l = r.stateNode;
                            if (r.flags & 4 && !bt)
                                if (s === null)
                                    l.componentDidMount();
                                else {
                                    var f = r.elementType === r.type ? s.memoizedProps : dn(r.type, s.memoizedProps);
                                    l.componentDidUpdate(f, s.memoizedState, l.__reactInternalSnapshotBeforeUpdate)
                                }
                            var m = r.updateQueue;
                            m !== null && fh(r, m, l);
                            break;
                        case 3:
                            var b = r.updateQueue;
                            if (b !== null) {
                                if (s = null,
                                r.child !== null)
                                    switch (r.child.tag) {
                                    case 5:
                                        s = r.child.stateNode;
                                        break;
                                    case 1:
                                        s = r.child.stateNode
                                    }
                                fh(r, b, s)
                            }
                            break;
                        case 5:
                            var k = r.stateNode;
                            if (s === null && r.flags & 4) {
                                s = k;
                                var N = r.memoizedProps;
                                switch (r.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    N.autoFocus && s.focus();
                                    break;
                                case "img":
                                    N.src && (s.src = N.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (r.memoizedState === null) {
                                var B = r.alternate;
                                if (B !== null) {
                                    var X = B.memoizedState;
                                    if (X !== null) {
                                        var q = X.dehydrated;
                                        q !== null && xi(q)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(o(163))
                        }
                    bt || r.flags & 512 && Zu(r)
                } catch (Y) {
                    et(r, r.return, Y)
                }
            }
            if (r === t) {
                fe = null;
                break
            }
            if (s = r.sibling,
            s !== null) {
                s.return = r.return,
                fe = s;
                break
            }
            fe = r.return
        }
    }
    function fm(t) {
        for (; fe !== null; ) {
            var r = fe;
            if (r === t) {
                fe = null;
                break
            }
            var s = r.sibling;
            if (s !== null) {
                s.return = r.return,
                fe = s;
                break
            }
            fe = r.return
        }
    }
    function pm(t) {
        for (; fe !== null; ) {
            var r = fe;
            try {
                switch (r.tag) {
                case 0:
                case 11:
                case 15:
                    var s = r.return;
                    try {
                        fa(4, r)
                    } catch (N) {
                        et(r, s, N)
                    }
                    break;
                case 1:
                    var l = r.stateNode;
                    if (typeof l.componentDidMount == "function") {
                        var f = r.return;
                        try {
                            l.componentDidMount()
                        } catch (N) {
                            et(r, f, N)
                        }
                    }
                    var m = r.return;
                    try {
                        Zu(r)
                    } catch (N) {
                        et(r, m, N)
                    }
                    break;
                case 5:
                    var b = r.return;
                    try {
                        Zu(r)
                    } catch (N) {
                        et(r, b, N)
                    }
                }
            } catch (N) {
                et(r, r.return, N)
            }
            if (r === t) {
                fe = null;
                break
            }
            var k = r.sibling;
            if (k !== null) {
                k.return = r.return,
                fe = k;
                break
            }
            fe = r.return
        }
    }
    var gb = Math.ceil
      , pa = O.ReactCurrentDispatcher
      , ec = O.ReactCurrentOwner
      , en = O.ReactCurrentBatchConfig
      , Ie = 0
      , ft = null
      , st = null
      , gt = 0
      , Kt = 0
      , jo = hr(0)
      , ct = 0
      , $i = null
      , Yr = 0
      , ha = 0
      , tc = 0
      , Hi = null
      , Lt = null
      , nc = 0
      , Oo = 1 / 0
      , Zn = null
      , ma = !1
      , rc = null
      , wr = null
      , ga = !1
      , Sr = null
      , va = 0
      , Ui = 0
      , oc = null
      , ya = -1
      , xa = 0;
    function kt() {
        return (Ie & 6) !== 0 ? nt() : ya !== -1 ? ya : ya = nt()
    }
    function br(t) {
        return (t.mode & 1) === 0 ? 1 : (Ie & 2) !== 0 && gt !== 0 ? gt & -gt : JS.transition !== null ? (xa === 0 && (xa = sp()),
        xa) : (t = Be,
        t !== 0 || (t = window.event,
        t = t === void 0 ? 16 : mp(t.type)),
        t)
    }
    function hn(t, r, s, l) {
        if (50 < Ui)
            throw Ui = 0,
            oc = null,
            Error(o(185));
        hi(t, s, l),
        ((Ie & 2) === 0 || t !== ft) && (t === ft && ((Ie & 2) === 0 && (ha |= s),
        ct === 4 && Cr(t, gt)),
        Vt(t, l),
        s === 1 && Ie === 0 && (r.mode & 1) === 0 && (Oo = nt() + 500,
        Gs && gr()))
    }
    function Vt(t, r) {
        var s = t.callbackNode;
        J1(t, r);
        var l = As(t, t === ft ? gt : 0);
        if (l === 0)
            s !== null && rp(s),
            t.callbackNode = null,
            t.callbackPriority = 0;
        else if (r = l & -l,
        t.callbackPriority !== r) {
            if (s != null && rp(s),
            r === 1)
                t.tag === 0 ? qS(mm.bind(null, t)) : eh(mm.bind(null, t)),
                YS(function() {
                    (Ie & 6) === 0 && gr()
                }),
                s = null;
            else {
                switch (ap(l)) {
                case 1:
                    s = Ll;
                    break;
                case 4:
                    s = op;
                    break;
                case 16:
                    s = Es;
                    break;
                case 536870912:
                    s = ip;
                    break;
                default:
                    s = Es
                }
                s = Cm(s, hm.bind(null, t))
            }
            t.callbackPriority = r,
            t.callbackNode = s
        }
    }
    function hm(t, r) {
        if (ya = -1,
        xa = 0,
        (Ie & 6) !== 0)
            throw Error(o(327));
        var s = t.callbackNode;
        if (_o() && t.callbackNode !== s)
            return null;
        var l = As(t, t === ft ? gt : 0);
        if (l === 0)
            return null;
        if ((l & 30) !== 0 || (l & t.expiredLanes) !== 0 || r)
            r = wa(t, l);
        else {
            r = l;
            var f = Ie;
            Ie |= 2;
            var m = vm();
            (ft !== t || gt !== r) && (Zn = null,
            Oo = nt() + 500,
            Qr(t, r));
            do
                try {
                    xb();
                    break
                } catch (k) {
                    gm(t, k)
                }
            while (!0);
            bu(),
            pa.current = m,
            Ie = f,
            st !== null ? r = 0 : (ft = null,
            gt = 0,
            r = ct)
        }
        if (r !== 0) {
            if (r === 2 && (f = Vl(t),
            f !== 0 && (l = f,
            r = ic(t, f))),
            r === 1)
                throw s = $i,
                Qr(t, 0),
                Cr(t, l),
                Vt(t, nt()),
                s;
            if (r === 6)
                Cr(t, l);
            else {
                if (f = t.current.alternate,
                (l & 30) === 0 && !vb(f) && (r = wa(t, l),
                r === 2 && (m = Vl(t),
                m !== 0 && (l = m,
                r = ic(t, m))),
                r === 1))
                    throw s = $i,
                    Qr(t, 0),
                    Cr(t, l),
                    Vt(t, nt()),
                    s;
                switch (t.finishedWork = f,
                t.finishedLanes = l,
                r) {
                case 0:
                case 1:
                    throw Error(o(345));
                case 2:
                    Zr(t, Lt, Zn);
                    break;
                case 3:
                    if (Cr(t, l),
                    (l & 130023424) === l && (r = nc + 500 - nt(),
                    10 < r)) {
                        if (As(t, 0) !== 0)
                            break;
                        if (f = t.suspendedLanes,
                        (f & l) !== l) {
                            kt(),
                            t.pingedLanes |= t.suspendedLanes & f;
                            break
                        }
                        t.timeoutHandle = du(Zr.bind(null, t, Lt, Zn), r);
                        break
                    }
                    Zr(t, Lt, Zn);
                    break;
                case 4:
                    if (Cr(t, l),
                    (l & 4194240) === l)
                        break;
                    for (r = t.eventTimes,
                    f = -1; 0 < l; ) {
                        var b = 31 - ln(l);
                        m = 1 << b,
                        b = r[b],
                        b > f && (f = b),
                        l &= ~m
                    }
                    if (l = f,
                    l = nt() - l,
                    l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * gb(l / 1960)) - l,
                    10 < l) {
                        t.timeoutHandle = du(Zr.bind(null, t, Lt, Zn), l);
                        break
                    }
                    Zr(t, Lt, Zn);
                    break;
                case 5:
                    Zr(t, Lt, Zn);
                    break;
                default:
                    throw Error(o(329))
                }
            }
        }
        return Vt(t, nt()),
        t.callbackNode === s ? hm.bind(null, t) : null
    }
    function ic(t, r) {
        var s = Hi;
        return t.current.memoizedState.isDehydrated && (Qr(t, r).flags |= 256),
        t = wa(t, r),
        t !== 2 && (r = Lt,
        Lt = s,
        r !== null && sc(r)),
        t
    }
    function sc(t) {
        Lt === null ? Lt = t : Lt.push.apply(Lt, t)
    }
    function vb(t) {
        for (var r = t; ; ) {
            if (r.flags & 16384) {
                var s = r.updateQueue;
                if (s !== null && (s = s.stores,
                s !== null))
                    for (var l = 0; l < s.length; l++) {
                        var f = s[l]
                          , m = f.getSnapshot;
                        f = f.value;
                        try {
                            if (!un(m(), f))
                                return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (s = r.child,
            r.subtreeFlags & 16384 && s !== null)
                s.return = r,
                r = s;
            else {
                if (r === t)
                    break;
                for (; r.sibling === null; ) {
                    if (r.return === null || r.return === t)
                        return !0;
                    r = r.return
                }
                r.sibling.return = r.return,
                r = r.sibling
            }
        }
        return !0
    }
    function Cr(t, r) {
        for (r &= ~tc,
        r &= ~ha,
        t.suspendedLanes |= r,
        t.pingedLanes &= ~r,
        t = t.expirationTimes; 0 < r; ) {
            var s = 31 - ln(r)
              , l = 1 << s;
            t[s] = -1,
            r &= ~l
        }
    }
    function mm(t) {
        if ((Ie & 6) !== 0)
            throw Error(o(327));
        _o();
        var r = As(t, 0);
        if ((r & 1) === 0)
            return Vt(t, nt()),
            null;
        var s = wa(t, r);
        if (t.tag !== 0 && s === 2) {
            var l = Vl(t);
            l !== 0 && (r = l,
            s = ic(t, l))
        }
        if (s === 1)
            throw s = $i,
            Qr(t, 0),
            Cr(t, r),
            Vt(t, nt()),
            s;
        if (s === 6)
            throw Error(o(345));
        return t.finishedWork = t.current.alternate,
        t.finishedLanes = r,
        Zr(t, Lt, Zn),
        Vt(t, nt()),
        null
    }
    function ac(t, r) {
        var s = Ie;
        Ie |= 1;
        try {
            return t(r)
        } finally {
            Ie = s,
            Ie === 0 && (Oo = nt() + 500,
            Gs && gr())
        }
    }
    function Xr(t) {
        Sr !== null && Sr.tag === 0 && (Ie & 6) === 0 && _o();
        var r = Ie;
        Ie |= 1;
        var s = en.transition
          , l = Be;
        try {
            if (en.transition = null,
            Be = 1,
            t)
                return t()
        } finally {
            Be = l,
            en.transition = s,
            Ie = r,
            (Ie & 6) === 0 && gr()
        }
    }
    function lc() {
        Kt = jo.current,
        Ke(jo)
    }
    function Qr(t, r) {
        t.finishedWork = null,
        t.finishedLanes = 0;
        var s = t.timeoutHandle;
        if (s !== -1 && (t.timeoutHandle = -1,
        GS(s)),
        st !== null)
            for (s = st.return; s !== null; ) {
                var l = s;
                switch (vu(l),
                l.tag) {
                case 1:
                    l = l.type.childContextTypes,
                    l != null && Ws();
                    break;
                case 3:
                    No(),
                    Ke(Ot),
                    Ke(xt),
                    Nu();
                    break;
                case 5:
                    Au(l);
                    break;
                case 4:
                    No();
                    break;
                case 13:
                    Ke(Ze);
                    break;
                case 19:
                    Ke(Ze);
                    break;
                case 10:
                    Cu(l.type._context);
                    break;
                case 22:
                case 23:
                    lc()
                }
                s = s.return
            }
        if (ft = t,
        st = t = Er(t.current, null),
        gt = Kt = r,
        ct = 0,
        $i = null,
        tc = ha = Yr = 0,
        Lt = Hi = null,
        Wr !== null) {
            for (r = 0; r < Wr.length; r++)
                if (s = Wr[r],
                l = s.interleaved,
                l !== null) {
                    s.interleaved = null;
                    var f = l.next
                      , m = s.pending;
                    if (m !== null) {
                        var b = m.next;
                        m.next = f,
                        l.next = b
                    }
                    s.pending = l
                }
            Wr = null
        }
        return t
    }
    function gm(t, r) {
        do {
            var s = st;
            try {
                if (bu(),
                ra.current = aa,
                oa) {
                    for (var l = qe.memoizedState; l !== null; ) {
                        var f = l.queue;
                        f !== null && (f.pending = null),
                        l = l.next
                    }
                    oa = !1
                }
                if (Gr = 0,
                dt = ut = qe = null,
                Ii = !1,
                Li = 0,
                ec.current = null,
                s === null || s.return === null) {
                    ct = 1,
                    $i = r,
                    st = null;
                    break
                }
                e: {
                    var m = t
                      , b = s.return
                      , k = s
                      , N = r;
                    if (r = gt,
                    k.flags |= 32768,
                    N !== null && typeof N == "object" && typeof N.then == "function") {
                        var B = N
                          , X = k
                          , q = X.tag;
                        if ((X.mode & 1) === 0 && (q === 0 || q === 11 || q === 15)) {
                            var Y = X.alternate;
                            Y ? (X.updateQueue = Y.updateQueue,
                            X.memoizedState = Y.memoizedState,
                            X.lanes = Y.lanes) : (X.updateQueue = null,
                            X.memoizedState = null)
                        }
                        var de = zh(b);
                        if (de !== null) {
                            de.flags &= -257,
                            $h(de, b, k, m, r),
                            de.mode & 1 && Bh(m, B, r),
                            r = de,
                            N = B;
                            var me = r.updateQueue;
                            if (me === null) {
                                var ve = new Set;
                                ve.add(N),
                                r.updateQueue = ve
                            } else
                                me.add(N);
                            break e
                        } else {
                            if ((r & 1) === 0) {
                                Bh(m, B, r),
                                uc();
                                break e
                            }
                            N = Error(o(426))
                        }
                    } else if (Ye && k.mode & 1) {
                        var rt = zh(b);
                        if (rt !== null) {
                            (rt.flags & 65536) === 0 && (rt.flags |= 256),
                            $h(rt, b, k, m, r),
                            wu(Do(N, k));
                            break e
                        }
                    }
                    m = N = Do(N, k),
                    ct !== 4 && (ct = 2),
                    Hi === null ? Hi = [m] : Hi.push(m),
                    m = b;
                    do {
                        switch (m.tag) {
                        case 3:
                            m.flags |= 65536,
                            r &= -r,
                            m.lanes |= r;
                            var _ = Vh(m, N, r);
                            dh(m, _);
                            break e;
                        case 1:
                            k = N;
                            var M = m.type
                              , L = m.stateNode;
                            if ((m.flags & 128) === 0 && (typeof M.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (wr === null || !wr.has(L)))) {
                                m.flags |= 65536,
                                r &= -r,
                                m.lanes |= r;
                                var te = Fh(m, k, r);
                                dh(m, te);
                                break e
                            }
                        }
                        m = m.return
                    } while (m !== null)
                }
                xm(s)
            } catch (ye) {
                r = ye,
                st === s && s !== null && (st = s = s.return);
                continue
            }
            break
        } while (!0)
    }
    function vm() {
        var t = pa.current;
        return pa.current = aa,
        t === null ? aa : t
    }
    function uc() {
        (ct === 0 || ct === 3 || ct === 2) && (ct = 4),
        ft === null || (Yr & 268435455) === 0 && (ha & 268435455) === 0 || Cr(ft, gt)
    }
    function wa(t, r) {
        var s = Ie;
        Ie |= 2;
        var l = vm();
        (ft !== t || gt !== r) && (Zn = null,
        Qr(t, r));
        do
            try {
                yb();
                break
            } catch (f) {
                gm(t, f)
            }
        while (!0);
        if (bu(),
        Ie = s,
        pa.current = l,
        st !== null)
            throw Error(o(261));
        return ft = null,
        gt = 0,
        ct
    }
    function yb() {
        for (; st !== null; )
            ym(st)
    }
    function xb() {
        for (; st !== null && !U1(); )
            ym(st)
    }
    function ym(t) {
        var r = bm(t.alternate, t, Kt);
        t.memoizedProps = t.pendingProps,
        r === null ? xm(t) : st = r,
        ec.current = null
    }
    function xm(t) {
        var r = t;
        do {
            var s = r.alternate;
            if (t = r.return,
            (r.flags & 32768) === 0) {
                if (s = db(s, r, Kt),
                s !== null) {
                    st = s;
                    return
                }
            } else {
                if (s = fb(s, r),
                s !== null) {
                    s.flags &= 32767,
                    st = s;
                    return
                }
                if (t !== null)
                    t.flags |= 32768,
                    t.subtreeFlags = 0,
                    t.deletions = null;
                else {
                    ct = 6,
                    st = null;
                    return
                }
            }
            if (r = r.sibling,
            r !== null) {
                st = r;
                return
            }
            st = r = t
        } while (r !== null);
        ct === 0 && (ct = 5)
    }
    function Zr(t, r, s) {
        var l = Be
          , f = en.transition;
        try {
            en.transition = null,
            Be = 1,
            wb(t, r, s, l)
        } finally {
            en.transition = f,
            Be = l
        }
        return null
    }
    function wb(t, r, s, l) {
        do
            _o();
        while (Sr !== null);
        if ((Ie & 6) !== 0)
            throw Error(o(327));
        s = t.finishedWork;
        var f = t.finishedLanes;
        if (s === null)
            return null;
        if (t.finishedWork = null,
        t.finishedLanes = 0,
        s === t.current)
            throw Error(o(177));
        t.callbackNode = null,
        t.callbackPriority = 0;
        var m = s.lanes | s.childLanes;
        if (eS(t, m),
        t === ft && (st = ft = null,
        gt = 0),
        (s.subtreeFlags & 2064) === 0 && (s.flags & 2064) === 0 || ga || (ga = !0,
        Cm(Es, function() {
            return _o(),
            null
        })),
        m = (s.flags & 15990) !== 0,
        (s.subtreeFlags & 15990) !== 0 || m) {
            m = en.transition,
            en.transition = null;
            var b = Be;
            Be = 1;
            var k = Ie;
            Ie |= 4,
            ec.current = null,
            hb(t, s),
            um(s, t),
            BS(uu),
            Ds = !!lu,
            uu = lu = null,
            t.current = s,
            mb(s),
            W1(),
            Ie = k,
            Be = b,
            en.transition = m
        } else
            t.current = s;
        if (ga && (ga = !1,
        Sr = t,
        va = f),
        m = t.pendingLanes,
        m === 0 && (wr = null),
        Y1(s.stateNode),
        Vt(t, nt()),
        r !== null)
            for (l = t.onRecoverableError,
            s = 0; s < r.length; s++)
                f = r[s],
                l(f.value, {
                    componentStack: f.stack,
                    digest: f.digest
                });
        if (ma)
            throw ma = !1,
            t = rc,
            rc = null,
            t;
        return (va & 1) !== 0 && t.tag !== 0 && _o(),
        m = t.pendingLanes,
        (m & 1) !== 0 ? t === oc ? Ui++ : (Ui = 0,
        oc = t) : Ui = 0,
        gr(),
        null
    }
    function _o() {
        if (Sr !== null) {
            var t = ap(va)
              , r = en.transition
              , s = Be;
            try {
                if (en.transition = null,
                Be = 16 > t ? 16 : t,
                Sr === null)
                    var l = !1;
                else {
                    if (t = Sr,
                    Sr = null,
                    va = 0,
                    (Ie & 6) !== 0)
                        throw Error(o(331));
                    var f = Ie;
                    for (Ie |= 4,
                    fe = t.current; fe !== null; ) {
                        var m = fe
                          , b = m.child;
                        if ((fe.flags & 16) !== 0) {
                            var k = m.deletions;
                            if (k !== null) {
                                for (var N = 0; N < k.length; N++) {
                                    var B = k[N];
                                    for (fe = B; fe !== null; ) {
                                        var X = fe;
                                        switch (X.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            zi(8, X, m)
                                        }
                                        var q = X.child;
                                        if (q !== null)
                                            q.return = X,
                                            fe = q;
                                        else
                                            for (; fe !== null; ) {
                                                X = fe;
                                                var Y = X.sibling
                                                  , de = X.return;
                                                if (om(X),
                                                X === B) {
                                                    fe = null;
                                                    break
                                                }
                                                if (Y !== null) {
                                                    Y.return = de,
                                                    fe = Y;
                                                    break
                                                }
                                                fe = de
                                            }
                                    }
                                }
                                var me = m.alternate;
                                if (me !== null) {
                                    var ve = me.child;
                                    if (ve !== null) {
                                        me.child = null;
                                        do {
                                            var rt = ve.sibling;
                                            ve.sibling = null,
                                            ve = rt
                                        } while (ve !== null)
                                    }
                                }
                                fe = m
                            }
                        }
                        if ((m.subtreeFlags & 2064) !== 0 && b !== null)
                            b.return = m,
                            fe = b;
                        else
                            e: for (; fe !== null; ) {
                                if (m = fe,
                                (m.flags & 2048) !== 0)
                                    switch (m.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        zi(9, m, m.return)
                                    }
                                var _ = m.sibling;
                                if (_ !== null) {
                                    _.return = m.return,
                                    fe = _;
                                    break e
                                }
                                fe = m.return
                            }
                    }
                    var M = t.current;
                    for (fe = M; fe !== null; ) {
                        b = fe;
                        var L = b.child;
                        if ((b.subtreeFlags & 2064) !== 0 && L !== null)
                            L.return = b,
                            fe = L;
                        else
                            e: for (b = M; fe !== null; ) {
                                if (k = fe,
                                (k.flags & 2048) !== 0)
                                    try {
                                        switch (k.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            fa(9, k)
                                        }
                                    } catch (ye) {
                                        et(k, k.return, ye)
                                    }
                                if (k === b) {
                                    fe = null;
                                    break e
                                }
                                var te = k.sibling;
                                if (te !== null) {
                                    te.return = k.return,
                                    fe = te;
                                    break e
                                }
                                fe = k.return
                            }
                    }
                    if (Ie = f,
                    gr(),
                    Pn && typeof Pn.onPostCommitFiberRoot == "function")
                        try {
                            Pn.onPostCommitFiberRoot(Ts, t)
                        } catch {}
                    l = !0
                }
                return l
            } finally {
                Be = s,
                en.transition = r
            }
        }
        return !1
    }
    function wm(t, r, s) {
        r = Do(s, r),
        r = Vh(t, r, 1),
        t = yr(t, r, 1),
        r = kt(),
        t !== null && (hi(t, 1, r),
        Vt(t, r))
    }
    function et(t, r, s) {
        if (t.tag === 3)
            wm(t, t, s);
        else
            for (; r !== null; ) {
                if (r.tag === 3) {
                    wm(r, t, s);
                    break
                } else if (r.tag === 1) {
                    var l = r.stateNode;
                    if (typeof r.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (wr === null || !wr.has(l))) {
                        t = Do(s, t),
                        t = Fh(r, t, 1),
                        r = yr(r, t, 1),
                        t = kt(),
                        r !== null && (hi(r, 1, t),
                        Vt(r, t));
                        break
                    }
                }
                r = r.return
            }
    }
    function Sb(t, r, s) {
        var l = t.pingCache;
        l !== null && l.delete(r),
        r = kt(),
        t.pingedLanes |= t.suspendedLanes & s,
        ft === t && (gt & s) === s && (ct === 4 || ct === 3 && (gt & 130023424) === gt && 500 > nt() - nc ? Qr(t, 0) : tc |= s),
        Vt(t, r)
    }
    function Sm(t, r) {
        r === 0 && ((t.mode & 1) === 0 ? r = 1 : (r = ks,
        ks <<= 1,
        (ks & 130023424) === 0 && (ks = 4194304)));
        var s = kt();
        t = Yn(t, r),
        t !== null && (hi(t, r, s),
        Vt(t, s))
    }
    function bb(t) {
        var r = t.memoizedState
          , s = 0;
        r !== null && (s = r.retryLane),
        Sm(t, s)
    }
    function Cb(t, r) {
        var s = 0;
        switch (t.tag) {
        case 13:
            var l = t.stateNode
              , f = t.memoizedState;
            f !== null && (s = f.retryLane);
            break;
        case 19:
            l = t.stateNode;
            break;
        default:
            throw Error(o(314))
        }
        l !== null && l.delete(r),
        Sm(t, s)
    }
    var bm;
    bm = function(t, r, s) {
        if (t !== null)
            if (t.memoizedProps !== r.pendingProps || Ot.current)
                It = !0;
            else {
                if ((t.lanes & s) === 0 && (r.flags & 128) === 0)
                    return It = !1,
                    cb(t, r, s);
                It = (t.flags & 131072) !== 0
            }
        else
            It = !1,
            Ye && (r.flags & 1048576) !== 0 && th(r, Xs, r.index);
        switch (r.lanes = 0,
        r.tag) {
        case 2:
            var l = r.type;
            ca(t, r),
            t = r.pendingProps;
            var f = Co(r, xt.current);
            Ro(r, s),
            f = ju(null, r, l, t, f, s);
            var m = Ou();
            return r.flags |= 1,
            typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (r.tag = 1,
            r.memoizedState = null,
            r.updateQueue = null,
            _t(l) ? (m = !0,
            Ks(r)) : m = !1,
            r.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null,
            Pu(r),
            f.updater = la,
            r.stateNode = f,
            f._reactInternals = r,
            Bu(r, l, t, s),
            r = Uu(null, r, l, !0, m, s)) : (r.tag = 0,
            Ye && m && gu(r),
            Pt(null, r, f, s),
            r = r.child),
            r;
        case 16:
            l = r.elementType;
            e: {
                switch (ca(t, r),
                t = r.pendingProps,
                f = l._init,
                l = f(l._payload),
                r.type = l,
                f = r.tag = Tb(l),
                t = dn(l, t),
                f) {
                case 0:
                    r = Hu(null, r, l, t, s);
                    break e;
                case 1:
                    r = Yh(null, r, l, t, s);
                    break e;
                case 11:
                    r = Hh(null, r, l, t, s);
                    break e;
                case 14:
                    r = Uh(null, r, l, dn(l.type, t), s);
                    break e
                }
                throw Error(o(306, l, ""))
            }
            return r;
        case 0:
            return l = r.type,
            f = r.pendingProps,
            f = r.elementType === l ? f : dn(l, f),
            Hu(t, r, l, f, s);
        case 1:
            return l = r.type,
            f = r.pendingProps,
            f = r.elementType === l ? f : dn(l, f),
            Yh(t, r, l, f, s);
        case 3:
            e: {
                if (Xh(r),
                t === null)
                    throw Error(o(387));
                l = r.pendingProps,
                m = r.memoizedState,
                f = m.element,
                ch(t, r),
                ta(r, l, null, s);
                var b = r.memoizedState;
                if (l = b.element,
                m.isDehydrated)
                    if (m = {
                        element: l,
                        isDehydrated: !1,
                        cache: b.cache,
                        pendingSuspenseBoundaries: b.pendingSuspenseBoundaries,
                        transitions: b.transitions
                    },
                    r.updateQueue.baseState = m,
                    r.memoizedState = m,
                    r.flags & 256) {
                        f = Do(Error(o(423)), r),
                        r = Qh(t, r, l, s, f);
                        break e
                    } else if (l !== f) {
                        f = Do(Error(o(424)), r),
                        r = Qh(t, r, l, s, f);
                        break e
                    } else
                        for (Wt = pr(r.stateNode.containerInfo.firstChild),
                        Ut = r,
                        Ye = !0,
                        cn = null,
                        s = lh(r, null, l, s),
                        r.child = s; s; )
                            s.flags = s.flags & -3 | 4096,
                            s = s.sibling;
                else {
                    if (Po(),
                    l === f) {
                        r = Qn(t, r, s);
                        break e
                    }
                    Pt(t, r, l, s)
                }
                r = r.child
            }
            return r;
        case 5:
            return ph(r),
            t === null && xu(r),
            l = r.type,
            f = r.pendingProps,
            m = t !== null ? t.memoizedProps : null,
            b = f.children,
            cu(l, f) ? b = null : m !== null && cu(l, m) && (r.flags |= 32),
            Gh(t, r),
            Pt(t, r, b, s),
            r.child;
        case 6:
            return t === null && xu(r),
            null;
        case 13:
            return Zh(t, r, s);
        case 4:
            return ku(r, r.stateNode.containerInfo),
            l = r.pendingProps,
            t === null ? r.child = ko(r, null, l, s) : Pt(t, r, l, s),
            r.child;
        case 11:
            return l = r.type,
            f = r.pendingProps,
            f = r.elementType === l ? f : dn(l, f),
            Hh(t, r, l, f, s);
        case 7:
            return Pt(t, r, r.pendingProps, s),
            r.child;
        case 8:
            return Pt(t, r, r.pendingProps.children, s),
            r.child;
        case 12:
            return Pt(t, r, r.pendingProps.children, s),
            r.child;
        case 10:
            e: {
                if (l = r.type._context,
                f = r.pendingProps,
                m = r.memoizedProps,
                b = f.value,
                Ue(qs, l._currentValue),
                l._currentValue = b,
                m !== null)
                    if (un(m.value, b)) {
                        if (m.children === f.children && !Ot.current) {
                            r = Qn(t, r, s);
                            break e
                        }
                    } else
                        for (m = r.child,
                        m !== null && (m.return = r); m !== null; ) {
                            var k = m.dependencies;
                            if (k !== null) {
                                b = m.child;
                                for (var N = k.firstContext; N !== null; ) {
                                    if (N.context === l) {
                                        if (m.tag === 1) {
                                            N = Xn(-1, s & -s),
                                            N.tag = 2;
                                            var B = m.updateQueue;
                                            if (B !== null) {
                                                B = B.shared;
                                                var X = B.pending;
                                                X === null ? N.next = N : (N.next = X.next,
                                                X.next = N),
                                                B.pending = N
                                            }
                                        }
                                        m.lanes |= s,
                                        N = m.alternate,
                                        N !== null && (N.lanes |= s),
                                        Eu(m.return, s, r),
                                        k.lanes |= s;
                                        break
                                    }
                                    N = N.next
                                }
                            } else if (m.tag === 10)
                                b = m.type === r.type ? null : m.child;
                            else if (m.tag === 18) {
                                if (b = m.return,
                                b === null)
                                    throw Error(o(341));
                                b.lanes |= s,
                                k = b.alternate,
                                k !== null && (k.lanes |= s),
                                Eu(b, s, r),
                                b = m.sibling
                            } else
                                b = m.child;
                            if (b !== null)
                                b.return = m;
                            else
                                for (b = m; b !== null; ) {
                                    if (b === r) {
                                        b = null;
                                        break
                                    }
                                    if (m = b.sibling,
                                    m !== null) {
                                        m.return = b.return,
                                        b = m;
                                        break
                                    }
                                    b = b.return
                                }
                            m = b
                        }
                Pt(t, r, f.children, s),
                r = r.child
            }
            return r;
        case 9:
            return f = r.type,
            l = r.pendingProps.children,
            Ro(r, s),
            f = qt(f),
            l = l(f),
            r.flags |= 1,
            Pt(t, r, l, s),
            r.child;
        case 14:
            return l = r.type,
            f = dn(l, r.pendingProps),
            f = dn(l.type, f),
            Uh(t, r, l, f, s);
        case 15:
            return Wh(t, r, r.type, r.pendingProps, s);
        case 17:
            return l = r.type,
            f = r.pendingProps,
            f = r.elementType === l ? f : dn(l, f),
            ca(t, r),
            r.tag = 1,
            _t(l) ? (t = !0,
            Ks(r)) : t = !1,
            Ro(r, s),
            Ih(r, l, f),
            Bu(r, l, f, s),
            Uu(null, r, l, !0, t, s);
        case 19:
            return Jh(t, r, s);
        case 22:
            return Kh(t, r, s)
        }
        throw Error(o(156, r.tag))
    }
    ;
    function Cm(t, r) {
        return np(t, r)
    }
    function Eb(t, r, s, l) {
        this.tag = t,
        this.key = s,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = r,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = l,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function tn(t, r, s, l) {
        return new Eb(t,r,s,l)
    }
    function cc(t) {
        return t = t.prototype,
        !(!t || !t.isReactComponent)
    }
    function Tb(t) {
        if (typeof t == "function")
            return cc(t) ? 1 : 0;
        if (t != null) {
            if (t = t.$$typeof,
            t === Z)
                return 11;
            if (t === ge)
                return 14
        }
        return 2
    }
    function Er(t, r) {
        var s = t.alternate;
        return s === null ? (s = tn(t.tag, r, t.key, t.mode),
        s.elementType = t.elementType,
        s.type = t.type,
        s.stateNode = t.stateNode,
        s.alternate = t,
        t.alternate = s) : (s.pendingProps = r,
        s.type = t.type,
        s.flags = 0,
        s.subtreeFlags = 0,
        s.deletions = null),
        s.flags = t.flags & 14680064,
        s.childLanes = t.childLanes,
        s.lanes = t.lanes,
        s.child = t.child,
        s.memoizedProps = t.memoizedProps,
        s.memoizedState = t.memoizedState,
        s.updateQueue = t.updateQueue,
        r = t.dependencies,
        s.dependencies = r === null ? null : {
            lanes: r.lanes,
            firstContext: r.firstContext
        },
        s.sibling = t.sibling,
        s.index = t.index,
        s.ref = t.ref,
        s
    }
    function Sa(t, r, s, l, f, m) {
        var b = 2;
        if (l = t,
        typeof t == "function")
            cc(t) && (b = 1);
        else if (typeof t == "string")
            b = 5;
        else
            e: switch (t) {
            case I:
                return qr(s.children, f, m, r);
            case U:
                b = 8,
                f |= 8;
                break;
            case oe:
                return t = tn(12, s, r, f | 2),
                t.elementType = oe,
                t.lanes = m,
                t;
            case le:
                return t = tn(13, s, r, f),
                t.elementType = le,
                t.lanes = m,
                t;
            case ue:
                return t = tn(19, s, r, f),
                t.elementType = ue,
                t.lanes = m,
                t;
            case Q:
                return ba(s, f, m, r);
            default:
                if (typeof t == "object" && t !== null)
                    switch (t.$$typeof) {
                    case J:
                        b = 10;
                        break e;
                    case ne:
                        b = 9;
                        break e;
                    case Z:
                        b = 11;
                        break e;
                    case ge:
                        b = 14;
                        break e;
                    case re:
                        b = 16,
                        l = null;
                        break e
                    }
                throw Error(o(130, t == null ? t : typeof t, ""))
            }
        return r = tn(b, s, r, f),
        r.elementType = t,
        r.type = l,
        r.lanes = m,
        r
    }
    function qr(t, r, s, l) {
        return t = tn(7, t, l, r),
        t.lanes = s,
        t
    }
    function ba(t, r, s, l) {
        return t = tn(22, t, l, r),
        t.elementType = Q,
        t.lanes = s,
        t.stateNode = {
            isHidden: !1
        },
        t
    }
    function dc(t, r, s) {
        return t = tn(6, t, null, r),
        t.lanes = s,
        t
    }
    function fc(t, r, s) {
        return r = tn(4, t.children !== null ? t.children : [], t.key, r),
        r.lanes = s,
        r.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        },
        r
    }
    function Pb(t, r, s, l, f) {
        this.tag = r,
        this.containerInfo = t,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = Fl(0),
        this.expirationTimes = Fl(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Fl(0),
        this.identifierPrefix = l,
        this.onRecoverableError = f,
        this.mutableSourceEagerHydrationData = null
    }
    function pc(t, r, s, l, f, m, b, k, N) {
        return t = new Pb(t,r,s,k,N),
        r === 1 ? (r = 1,
        m === !0 && (r |= 8)) : r = 0,
        m = tn(3, null, null, r),
        t.current = m,
        m.stateNode = t,
        m.memoizedState = {
            element: l,
            isDehydrated: s,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        Pu(m),
        t
    }
    function kb(t, r, s) {
        var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: $,
            key: l == null ? null : "" + l,
            children: t,
            containerInfo: r,
            implementation: s
        }
    }
    function Em(t) {
        if (!t)
            return mr;
        t = t._reactInternals;
        e: {
            if (Br(t) !== t || t.tag !== 1)
                throw Error(o(170));
            var r = t;
            do {
                switch (r.tag) {
                case 3:
                    r = r.stateNode.context;
                    break e;
                case 1:
                    if (_t(r.type)) {
                        r = r.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
                }
                r = r.return
            } while (r !== null);
            throw Error(o(171))
        }
        if (t.tag === 1) {
            var s = t.type;
            if (_t(s))
                return qp(t, s, r)
        }
        return r
    }
    function Tm(t, r, s, l, f, m, b, k, N) {
        return t = pc(s, l, !0, t, f, m, b, k, N),
        t.context = Em(null),
        s = t.current,
        l = kt(),
        f = br(s),
        m = Xn(l, f),
        m.callback = r ?? null,
        yr(s, m, f),
        t.current.lanes = f,
        hi(t, f, l),
        Vt(t, l),
        t
    }
    function Ca(t, r, s, l) {
        var f = r.current
          , m = kt()
          , b = br(f);
        return s = Em(s),
        r.context === null ? r.context = s : r.pendingContext = s,
        r = Xn(m, b),
        r.payload = {
            element: t
        },
        l = l === void 0 ? null : l,
        l !== null && (r.callback = l),
        t = yr(f, r, b),
        t !== null && (hn(t, f, b, m),
        ea(t, f, b)),
        b
    }
    function Ea(t) {
        if (t = t.current,
        !t.child)
            return null;
        switch (t.child.tag) {
        case 5:
            return t.child.stateNode;
        default:
            return t.child.stateNode
        }
    }
    function Pm(t, r) {
        if (t = t.memoizedState,
        t !== null && t.dehydrated !== null) {
            var s = t.retryLane;
            t.retryLane = s !== 0 && s < r ? s : r
        }
    }
    function hc(t, r) {
        Pm(t, r),
        (t = t.alternate) && Pm(t, r)
    }
    function Ab() {
        return null
    }
    var km = typeof reportError == "function" ? reportError : function(t) {
        console.error(t)
    }
    ;
    function mc(t) {
        this._internalRoot = t
    }
    Ta.prototype.render = mc.prototype.render = function(t) {
        var r = this._internalRoot;
        if (r === null)
            throw Error(o(409));
        Ca(t, r, null, null)
    }
    ,
    Ta.prototype.unmount = mc.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var r = t.containerInfo;
            Xr(function() {
                Ca(null, t, null, null)
            }),
            r[Un] = null
        }
    }
    ;
    function Ta(t) {
        this._internalRoot = t
    }
    Ta.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var r = cp();
            t = {
                blockedOn: null,
                target: t,
                priority: r
            };
            for (var s = 0; s < cr.length && r !== 0 && r < cr[s].priority; s++)
                ;
            cr.splice(s, 0, t),
            s === 0 && pp(t)
        }
    }
    ;
    function gc(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }
    function Pa(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
    }
    function Am() {}
    function Rb(t, r, s, l, f) {
        if (f) {
            if (typeof l == "function") {
                var m = l;
                l = function() {
                    var B = Ea(b);
                    m.call(B)
                }
            }
            var b = Tm(r, l, t, 0, null, !1, !1, "", Am);
            return t._reactRootContainer = b,
            t[Un] = b.current,
            Ai(t.nodeType === 8 ? t.parentNode : t),
            Xr(),
            b
        }
        for (; f = t.lastChild; )
            t.removeChild(f);
        if (typeof l == "function") {
            var k = l;
            l = function() {
                var B = Ea(N);
                k.call(B)
            }
        }
        var N = pc(t, 0, !1, null, null, !1, !1, "", Am);
        return t._reactRootContainer = N,
        t[Un] = N.current,
        Ai(t.nodeType === 8 ? t.parentNode : t),
        Xr(function() {
            Ca(r, N, s, l)
        }),
        N
    }
    function ka(t, r, s, l, f) {
        var m = s._reactRootContainer;
        if (m) {
            var b = m;
            if (typeof f == "function") {
                var k = f;
                f = function() {
                    var N = Ea(b);
                    k.call(N)
                }
            }
            Ca(r, b, t, f)
        } else
            b = Rb(s, r, t, f, l);
        return Ea(b)
    }
    lp = function(t) {
        switch (t.tag) {
        case 3:
            var r = t.stateNode;
            if (r.current.memoizedState.isDehydrated) {
                var s = pi(r.pendingLanes);
                s !== 0 && (Bl(r, s | 1),
                Vt(r, nt()),
                (Ie & 6) === 0 && (Oo = nt() + 500,
                gr()))
            }
            break;
        case 13:
            Xr(function() {
                var l = Yn(t, 1);
                if (l !== null) {
                    var f = kt();
                    hn(l, t, 1, f)
                }
            }),
            hc(t, 1)
        }
    }
    ,
    zl = function(t) {
        if (t.tag === 13) {
            var r = Yn(t, 134217728);
            if (r !== null) {
                var s = kt();
                hn(r, t, 134217728, s)
            }
            hc(t, 134217728)
        }
    }
    ,
    up = function(t) {
        if (t.tag === 13) {
            var r = br(t)
              , s = Yn(t, r);
            if (s !== null) {
                var l = kt();
                hn(s, t, r, l)
            }
            hc(t, r)
        }
    }
    ,
    cp = function() {
        return Be
    }
    ,
    dp = function(t, r) {
        var s = Be;
        try {
            return Be = t,
            r()
        } finally {
            Be = s
        }
    }
    ,
    po = function(t, r, s) {
        switch (r) {
        case "input":
            if (je(t, s),
            r = s.name,
            s.type === "radio" && r != null) {
                for (s = t; s.parentNode; )
                    s = s.parentNode;
                for (s = s.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'),
                r = 0; r < s.length; r++) {
                    var l = s[r];
                    if (l !== t && l.form === t.form) {
                        var f = Us(l);
                        if (!f)
                            throw Error(o(90));
                        Me(l),
                        je(l, f)
                    }
                }
            }
            break;
        case "textarea":
            or(t, s);
            break;
        case "select":
            r = s.value,
            r != null && ze(t, !!s.multiple, r, !1)
        }
    }
    ,
    Ve = ac,
    He = Xr;
    var Nb = {
        usingClientEntryPoint: !1,
        Events: [Di, So, Us, Ss, ke, ac]
    }
      , Wi = {
        findFiberByHostInstance: zr,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }
      , Db = {
        bundleType: Wi.bundleType,
        version: Wi.version,
        rendererPackageName: Wi.rendererPackageName,
        rendererConfig: Wi.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: O.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(t) {
            return t = ep(t),
            t === null ? null : t.stateNode
        },
        findFiberByHostInstance: Wi.findFiberByHostInstance || Ab,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Aa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Aa.isDisabled && Aa.supportsFiber)
            try {
                Ts = Aa.inject(Db),
                Pn = Aa
            } catch {}
    }
    return Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nb,
    Ft.createPortal = function(t, r) {
        var s = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!gc(r))
            throw Error(o(200));
        return kb(t, r, null, s)
    }
    ,
    Ft.createRoot = function(t, r) {
        if (!gc(t))
            throw Error(o(299));
        var s = !1
          , l = ""
          , f = km;
        return r != null && (r.unstable_strictMode === !0 && (s = !0),
        r.identifierPrefix !== void 0 && (l = r.identifierPrefix),
        r.onRecoverableError !== void 0 && (f = r.onRecoverableError)),
        r = pc(t, 1, !1, null, null, s, !1, l, f),
        t[Un] = r.current,
        Ai(t.nodeType === 8 ? t.parentNode : t),
        new mc(r)
    }
    ,
    Ft.findDOMNode = function(t) {
        if (t == null)
            return null;
        if (t.nodeType === 1)
            return t;
        var r = t._reactInternals;
        if (r === void 0)
            throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","),
            Error(o(268, t)));
        return t = ep(r),
        t = t === null ? null : t.stateNode,
        t
    }
    ,
    Ft.flushSync = function(t) {
        return Xr(t)
    }
    ,
    Ft.hydrate = function(t, r, s) {
        if (!Pa(r))
            throw Error(o(200));
        return ka(null, t, r, !0, s)
    }
    ,
    Ft.hydrateRoot = function(t, r, s) {
        if (!gc(t))
            throw Error(o(405));
        var l = s != null && s.hydratedSources || null
          , f = !1
          , m = ""
          , b = km;
        if (s != null && (s.unstable_strictMode === !0 && (f = !0),
        s.identifierPrefix !== void 0 && (m = s.identifierPrefix),
        s.onRecoverableError !== void 0 && (b = s.onRecoverableError)),
        r = Tm(r, null, t, 1, s ?? null, f, !1, m, b),
        t[Un] = r.current,
        Ai(t),
        l)
            for (t = 0; t < l.length; t++)
                s = l[t],
                f = s._getVersion,
                f = f(s._source),
                r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [s, f] : r.mutableSourceEagerHydrationData.push(s, f);
        return new Ta(r)
    }
    ,
    Ft.render = function(t, r, s) {
        if (!Pa(r))
            throw Error(o(200));
        return ka(null, t, r, !1, s)
    }
    ,
    Ft.unmountComponentAtNode = function(t) {
        if (!Pa(t))
            throw Error(o(40));
        return t._reactRootContainer ? (Xr(function() {
            ka(null, null, t, !1, function() {
                t._reactRootContainer = null,
                t[Un] = null
            })
        }),
        !0) : !1
    }
    ,
    Ft.unstable_batchedUpdates = ac,
    Ft.unstable_renderSubtreeIntoContainer = function(t, r, s, l) {
        if (!Pa(s))
            throw Error(o(200));
        if (t == null || t._reactInternals === void 0)
            throw Error(o(38));
        return ka(t, r, s, !1, l)
    }
    ,
    Ft.version = "18.3.1-next-f1338f8080-20240426",
    Ft
}
var Im;
function Nv() {
    if (Im)
        return xc.exports;
    Im = 1;
    function e() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
            } catch (n) {
                console.error(n)
            }
    }
    return e(),
    xc.exports = Bb(),
    xc.exports
}
var Lm;
function zb() {
    if (Lm)
        return Ra;
    Lm = 1;
    var e = Nv();
    return Ra.createRoot = e.createRoot,
    Ra.hydrateRoot = e.hydrateRoot,
    Ra
}
var $b = zb();
const Hb = $d($b);
function Dv(e) {
    var n, o, i = "";
    if (typeof e == "string" || typeof e == "number")
        i += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var a = e.length;
            for (n = 0; n < a; n++)
                e[n] && (o = Dv(e[n])) && (i && (i += " "),
                i += o)
        } else
            for (o in e)
                e[o] && (i && (i += " "),
                i += o);
    return i
}
function Mv() {
    for (var e, n, o = 0, i = "", a = arguments.length; o < a; o++)
        (e = arguments[o]) && (n = Dv(e)) && (i && (i += " "),
        i += n);
    return i
}
const Ud = "-"
  , Ub = e => {
    const n = Kb(e)
      , {conflictingClassGroups: o, conflictingClassGroupModifiers: i} = e;
    return {
        getClassGroupId: c => {
            const d = c.split(Ud);
            return d[0] === "" && d.length !== 1 && d.shift(),
            jv(d, n) || Wb(c)
        }
        ,
        getConflictingClassGroupIds: (c, d) => {
            const p = o[c] || [];
            return d && i[c] ? [...p, ...i[c]] : p
        }
    }
}
  , jv = (e, n) => {
    if (e.length === 0)
        return n.classGroupId;
    const o = e[0]
      , i = n.nextPart.get(o)
      , a = i ? jv(e.slice(1), i) : void 0;
    if (a)
        return a;
    if (n.validators.length === 0)
        return;
    const u = e.join(Ud);
    return n.validators.find( ({validator: c}) => c(u))?.classGroupId
}
  , Vm = /^\[(.+)\]$/
  , Wb = e => {
    if (Vm.test(e)) {
        const n = Vm.exec(e)[1]
          , o = n?.substring(0, n.indexOf(":"));
        if (o)
            return "arbitrary.." + o
    }
}
  , Kb = e => {
    const {theme: n, prefix: o} = e
      , i = {
        nextPart: new Map,
        validators: []
    };
    return Yb(Object.entries(e.classGroups), o).forEach( ([u,c]) => {
        qc(c, i, u, n)
    }
    ),
    i
}
  , qc = (e, n, o, i) => {
    e.forEach(a => {
        if (typeof a == "string") {
            const u = a === "" ? n : Fm(n, a);
            u.classGroupId = o;
            return
        }
        if (typeof a == "function") {
            if (Gb(a)) {
                qc(a(i), n, o, i);
                return
            }
            n.validators.push({
                validator: a,
                classGroupId: o
            });
            return
        }
        Object.entries(a).forEach( ([u,c]) => {
            qc(c, Fm(n, u), o, i)
        }
        )
    }
    )
}
  , Fm = (e, n) => {
    let o = e;
    return n.split(Ud).forEach(i => {
        o.nextPart.has(i) || o.nextPart.set(i, {
            nextPart: new Map,
            validators: []
        }),
        o = o.nextPart.get(i)
    }
    ),
    o
}
  , Gb = e => e.isThemeGetter
  , Yb = (e, n) => n ? e.map( ([o,i]) => {
    const a = i.map(u => typeof u == "string" ? n + u : typeof u == "object" ? Object.fromEntries(Object.entries(u).map( ([c,d]) => [n + c, d])) : u);
    return [o, a]
}
) : e
  , Xb = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let n = 0
      , o = new Map
      , i = new Map;
    const a = (u, c) => {
        o.set(u, c),
        n++,
        n > e && (n = 0,
        i = o,
        o = new Map)
    }
    ;
    return {
        get(u) {
            let c = o.get(u);
            if (c !== void 0)
                return c;
            if ((c = i.get(u)) !== void 0)
                return a(u, c),
                c
        },
        set(u, c) {
            o.has(u) ? o.set(u, c) : a(u, c)
        }
    }
}
  , Ov = "!"
  , Qb = e => {
    const {separator: n, experimentalParseClassName: o} = e
      , i = n.length === 1
      , a = n[0]
      , u = n.length
      , c = d => {
        const p = [];
        let h = 0, g = 0, y;
        for (let E = 0; E < d.length; E++) {
            let P = d[E];
            if (h === 0) {
                if (P === a && (i || d.slice(E, E + u) === n)) {
                    p.push(d.slice(g, E)),
                    g = E + u;
                    continue
                }
                if (P === "/") {
                    y = E;
                    continue
                }
            }
            P === "[" ? h++ : P === "]" && h--
        }
        const x = p.length === 0 ? d : d.substring(g)
          , v = x.startsWith(Ov)
          , T = v ? x.substring(1) : x
          , C = y && y > g ? y - g : void 0;
        return {
            modifiers: p,
            hasImportantModifier: v,
            baseClassName: T,
            maybePostfixModifierPosition: C
        }
    }
    ;
    return o ? d => o({
        className: d,
        parseClassName: c
    }) : c
}
  , Zb = e => {
    if (e.length <= 1)
        return e;
    const n = [];
    let o = [];
    return e.forEach(i => {
        i[0] === "[" ? (n.push(...o.sort(), i),
        o = []) : o.push(i)
    }
    ),
    n.push(...o.sort()),
    n
}
  , qb = e => ({
    cache: Xb(e.cacheSize),
    parseClassName: Qb(e),
    ...Ub(e)
})
  , Jb = /\s+/
  , eC = (e, n) => {
    const {parseClassName: o, getClassGroupId: i, getConflictingClassGroupIds: a} = n
      , u = []
      , c = e.trim().split(Jb);
    let d = "";
    for (let p = c.length - 1; p >= 0; p -= 1) {
        const h = c[p]
          , {modifiers: g, hasImportantModifier: y, baseClassName: x, maybePostfixModifierPosition: v} = o(h);
        let T = !!v
          , C = i(T ? x.substring(0, v) : x);
        if (!C) {
            if (!T) {
                d = h + (d.length > 0 ? " " + d : d);
                continue
            }
            if (C = i(x),
            !C) {
                d = h + (d.length > 0 ? " " + d : d);
                continue
            }
            T = !1
        }
        const E = Zb(g).join(":")
          , P = y ? E + Ov : E
          , A = P + C;
        if (u.includes(A))
            continue;
        u.push(A);
        const R = a(C, T);
        for (let O = 0; O < R.length; ++O) {
            const j = R[O];
            u.push(P + j)
        }
        d = h + (d.length > 0 ? " " + d : d)
    }
    return d
}
;
function tC() {
    let e = 0, n, o, i = "";
    for (; e < arguments.length; )
        (n = arguments[e++]) && (o = _v(n)) && (i && (i += " "),
        i += o);
    return i
}
const _v = e => {
    if (typeof e == "string")
        return e;
    let n, o = "";
    for (let i = 0; i < e.length; i++)
        e[i] && (n = _v(e[i])) && (o && (o += " "),
        o += n);
    return o
}
;
function nC(e, ...n) {
    let o, i, a, u = c;
    function c(p) {
        const h = n.reduce( (g, y) => y(g), e());
        return o = qb(h),
        i = o.cache.get,
        a = o.cache.set,
        u = d,
        d(p)
    }
    function d(p) {
        const h = i(p);
        if (h)
            return h;
        const g = eC(p, o);
        return a(p, g),
        g
    }
    return function() {
        return u(tC.apply(null, arguments))
    }
}
const Ge = e => {
    const n = o => o[e] || [];
    return n.isThemeGetter = !0,
    n
}
  , Iv = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , rC = /^\d+\/\d+$/
  , oC = new Set(["px", "full", "screen"])
  , iC = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , sC = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , aC = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , lC = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , uC = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , qn = e => Wo(e) || oC.has(e) || rC.test(e)
  , Pr = e => ti(e, "length", vC)
  , Wo = e => !!e && !Number.isNaN(Number(e))
  , bc = e => ti(e, "number", Wo)
  , Gi = e => !!e && Number.isInteger(Number(e))
  , cC = e => e.endsWith("%") && Wo(e.slice(0, -1))
  , Ae = e => Iv.test(e)
  , kr = e => iC.test(e)
  , dC = new Set(["length", "size", "percentage"])
  , fC = e => ti(e, dC, Lv)
  , pC = e => ti(e, "position", Lv)
  , hC = new Set(["image", "url"])
  , mC = e => ti(e, hC, xC)
  , gC = e => ti(e, "", yC)
  , Yi = () => !0
  , ti = (e, n, o) => {
    const i = Iv.exec(e);
    return i ? i[1] ? typeof n == "string" ? i[1] === n : n.has(i[1]) : o(i[2]) : !1
}
  , vC = e => sC.test(e) && !aC.test(e)
  , Lv = () => !1
  , yC = e => lC.test(e)
  , xC = e => uC.test(e)
  , wC = () => {
    const e = Ge("colors")
      , n = Ge("spacing")
      , o = Ge("blur")
      , i = Ge("brightness")
      , a = Ge("borderColor")
      , u = Ge("borderRadius")
      , c = Ge("borderSpacing")
      , d = Ge("borderWidth")
      , p = Ge("contrast")
      , h = Ge("grayscale")
      , g = Ge("hueRotate")
      , y = Ge("invert")
      , x = Ge("gap")
      , v = Ge("gradientColorStops")
      , T = Ge("gradientColorStopPositions")
      , C = Ge("inset")
      , E = Ge("margin")
      , P = Ge("opacity")
      , A = Ge("padding")
      , R = Ge("saturate")
      , O = Ge("scale")
      , j = Ge("sepia")
      , $ = Ge("skew")
      , I = Ge("space")
      , U = Ge("translate")
      , oe = () => ["auto", "contain", "none"]
      , J = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , ne = () => ["auto", Ae, n]
      , Z = () => [Ae, n]
      , le = () => ["", qn, Pr]
      , ue = () => ["auto", Wo, Ae]
      , ge = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , re = () => ["solid", "dashed", "dotted", "double", "none"]
      , Q = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , V = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , H = () => ["", "0", Ae]
      , G = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , D = () => [Wo, Ae];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [Yi],
            spacing: [qn, Pr],
            blur: ["none", "", kr, Ae],
            brightness: D(),
            borderColor: [e],
            borderRadius: ["none", "", "full", kr, Ae],
            borderSpacing: Z(),
            borderWidth: le(),
            contrast: D(),
            grayscale: H(),
            hueRotate: D(),
            invert: H(),
            gap: Z(),
            gradientColorStops: [e],
            gradientColorStopPositions: [cC, Pr],
            inset: ne(),
            margin: ne(),
            opacity: D(),
            padding: Z(),
            saturate: D(),
            scale: D(),
            sepia: H(),
            skew: D(),
            space: Z(),
            translate: Z()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", Ae]
            }],
            container: ["container"],
            columns: [{
                columns: [kr]
            }],
            "break-after": [{
                "break-after": G()
            }],
            "break-before": [{
                "break-before": G()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...ge(), Ae]
            }],
            overflow: [{
                overflow: J()
            }],
            "overflow-x": [{
                "overflow-x": J()
            }],
            "overflow-y": [{
                "overflow-y": J()
            }],
            overscroll: [{
                overscroll: oe()
            }],
            "overscroll-x": [{
                "overscroll-x": oe()
            }],
            "overscroll-y": [{
                "overscroll-y": oe()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [C]
            }],
            "inset-x": [{
                "inset-x": [C]
            }],
            "inset-y": [{
                "inset-y": [C]
            }],
            start: [{
                start: [C]
            }],
            end: [{
                end: [C]
            }],
            top: [{
                top: [C]
            }],
            right: [{
                right: [C]
            }],
            bottom: [{
                bottom: [C]
            }],
            left: [{
                left: [C]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", Gi, Ae]
            }],
            basis: [{
                basis: ne()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", Ae]
            }],
            grow: [{
                grow: H()
            }],
            shrink: [{
                shrink: H()
            }],
            order: [{
                order: ["first", "last", "none", Gi, Ae]
            }],
            "grid-cols": [{
                "grid-cols": [Yi]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", Gi, Ae]
                }, Ae]
            }],
            "col-start": [{
                "col-start": ue()
            }],
            "col-end": [{
                "col-end": ue()
            }],
            "grid-rows": [{
                "grid-rows": [Yi]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [Gi, Ae]
                }, Ae]
            }],
            "row-start": [{
                "row-start": ue()
            }],
            "row-end": [{
                "row-end": ue()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", Ae]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", Ae]
            }],
            gap: [{
                gap: [x]
            }],
            "gap-x": [{
                "gap-x": [x]
            }],
            "gap-y": [{
                "gap-y": [x]
            }],
            "justify-content": [{
                justify: ["normal", ...V()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...V(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...V(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [A]
            }],
            px: [{
                px: [A]
            }],
            py: [{
                py: [A]
            }],
            ps: [{
                ps: [A]
            }],
            pe: [{
                pe: [A]
            }],
            pt: [{
                pt: [A]
            }],
            pr: [{
                pr: [A]
            }],
            pb: [{
                pb: [A]
            }],
            pl: [{
                pl: [A]
            }],
            m: [{
                m: [E]
            }],
            mx: [{
                mx: [E]
            }],
            my: [{
                my: [E]
            }],
            ms: [{
                ms: [E]
            }],
            me: [{
                me: [E]
            }],
            mt: [{
                mt: [E]
            }],
            mr: [{
                mr: [E]
            }],
            mb: [{
                mb: [E]
            }],
            ml: [{
                ml: [E]
            }],
            "space-x": [{
                "space-x": [I]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [I]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Ae, n]
            }],
            "min-w": [{
                "min-w": [Ae, n, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [Ae, n, "none", "full", "min", "max", "fit", "prose", {
                    screen: [kr]
                }, kr]
            }],
            h: [{
                h: [Ae, n, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [Ae, n, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [Ae, n, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [Ae, n, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", kr, Pr]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", bc]
            }],
            "font-family": [{
                font: [Yi]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Ae]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Wo, bc]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", qn, Ae]
            }],
            "list-image": [{
                "list-image": ["none", Ae]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", Ae]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [P]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [P]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...re(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", qn, Pr]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", qn, Ae]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: Z()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Ae]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", Ae]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [P]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...ge(), pC]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", fC]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, mC]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [T]
            }],
            "gradient-via-pos": [{
                via: [T]
            }],
            "gradient-to-pos": [{
                to: [T]
            }],
            "gradient-from": [{
                from: [v]
            }],
            "gradient-via": [{
                via: [v]
            }],
            "gradient-to": [{
                to: [v]
            }],
            rounded: [{
                rounded: [u]
            }],
            "rounded-s": [{
                "rounded-s": [u]
            }],
            "rounded-e": [{
                "rounded-e": [u]
            }],
            "rounded-t": [{
                "rounded-t": [u]
            }],
            "rounded-r": [{
                "rounded-r": [u]
            }],
            "rounded-b": [{
                "rounded-b": [u]
            }],
            "rounded-l": [{
                "rounded-l": [u]
            }],
            "rounded-ss": [{
                "rounded-ss": [u]
            }],
            "rounded-se": [{
                "rounded-se": [u]
            }],
            "rounded-ee": [{
                "rounded-ee": [u]
            }],
            "rounded-es": [{
                "rounded-es": [u]
            }],
            "rounded-tl": [{
                "rounded-tl": [u]
            }],
            "rounded-tr": [{
                "rounded-tr": [u]
            }],
            "rounded-br": [{
                "rounded-br": [u]
            }],
            "rounded-bl": [{
                "rounded-bl": [u]
            }],
            "border-w": [{
                border: [d]
            }],
            "border-w-x": [{
                "border-x": [d]
            }],
            "border-w-y": [{
                "border-y": [d]
            }],
            "border-w-s": [{
                "border-s": [d]
            }],
            "border-w-e": [{
                "border-e": [d]
            }],
            "border-w-t": [{
                "border-t": [d]
            }],
            "border-w-r": [{
                "border-r": [d]
            }],
            "border-w-b": [{
                "border-b": [d]
            }],
            "border-w-l": [{
                "border-l": [d]
            }],
            "border-opacity": [{
                "border-opacity": [P]
            }],
            "border-style": [{
                border: [...re(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [d]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [d]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [P]
            }],
            "divide-style": [{
                divide: re()
            }],
            "border-color": [{
                border: [a]
            }],
            "border-color-x": [{
                "border-x": [a]
            }],
            "border-color-y": [{
                "border-y": [a]
            }],
            "border-color-s": [{
                "border-s": [a]
            }],
            "border-color-e": [{
                "border-e": [a]
            }],
            "border-color-t": [{
                "border-t": [a]
            }],
            "border-color-r": [{
                "border-r": [a]
            }],
            "border-color-b": [{
                "border-b": [a]
            }],
            "border-color-l": [{
                "border-l": [a]
            }],
            "divide-color": [{
                divide: [a]
            }],
            "outline-style": [{
                outline: ["", ...re()]
            }],
            "outline-offset": [{
                "outline-offset": [qn, Ae]
            }],
            "outline-w": [{
                outline: [qn, Pr]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: le()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [P]
            }],
            "ring-offset-w": [{
                "ring-offset": [qn, Pr]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", kr, gC]
            }],
            "shadow-color": [{
                shadow: [Yi]
            }],
            opacity: [{
                opacity: [P]
            }],
            "mix-blend": [{
                "mix-blend": [...Q(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": Q()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [o]
            }],
            brightness: [{
                brightness: [i]
            }],
            contrast: [{
                contrast: [p]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", kr, Ae]
            }],
            grayscale: [{
                grayscale: [h]
            }],
            "hue-rotate": [{
                "hue-rotate": [g]
            }],
            invert: [{
                invert: [y]
            }],
            saturate: [{
                saturate: [R]
            }],
            sepia: [{
                sepia: [j]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [o]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [i]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [p]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [h]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [g]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [y]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [P]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [R]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [j]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [c]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [c]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [c]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Ae]
            }],
            duration: [{
                duration: D()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", Ae]
            }],
            delay: [{
                delay: D()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", Ae]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [O]
            }],
            "scale-x": [{
                "scale-x": [O]
            }],
            "scale-y": [{
                "scale-y": [O]
            }],
            rotate: [{
                rotate: [Gi, Ae]
            }],
            "translate-x": [{
                "translate-x": [U]
            }],
            "translate-y": [{
                "translate-y": [U]
            }],
            "skew-x": [{
                "skew-x": [$]
            }],
            "skew-y": [{
                "skew-y": [$]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Ae]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Ae]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": Z()
            }],
            "scroll-mx": [{
                "scroll-mx": Z()
            }],
            "scroll-my": [{
                "scroll-my": Z()
            }],
            "scroll-ms": [{
                "scroll-ms": Z()
            }],
            "scroll-me": [{
                "scroll-me": Z()
            }],
            "scroll-mt": [{
                "scroll-mt": Z()
            }],
            "scroll-mr": [{
                "scroll-mr": Z()
            }],
            "scroll-mb": [{
                "scroll-mb": Z()
            }],
            "scroll-ml": [{
                "scroll-ml": Z()
            }],
            "scroll-p": [{
                "scroll-p": Z()
            }],
            "scroll-px": [{
                "scroll-px": Z()
            }],
            "scroll-py": [{
                "scroll-py": Z()
            }],
            "scroll-ps": [{
                "scroll-ps": Z()
            }],
            "scroll-pe": [{
                "scroll-pe": Z()
            }],
            "scroll-pt": [{
                "scroll-pt": Z()
            }],
            "scroll-pr": [{
                "scroll-pr": Z()
            }],
            "scroll-pb": [{
                "scroll-pb": Z()
            }],
            "scroll-pl": [{
                "scroll-pl": Z()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", Ae]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [qn, Pr, bc]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , SC = nC(wC);
function Re(...e) {
    return SC(Mv(e))
}
const Vv = w.forwardRef( ({className: e, ...n}, o) => S.jsx("div", {
    ref: o,
    className: Re("rounded-lg border bg-card text-card-foreground shadow-sm", e),
    ...n
}));
Vv.displayName = "Card";
const Fv = w.forwardRef( ({className: e, ...n}, o) => S.jsx("div", {
    ref: o,
    className: Re("flex flex-col space-y-1.5 p-6", e),
    ...n
}));
Fv.displayName = "CardHeader";
const Bv = w.forwardRef( ({className: e, ...n}, o) => S.jsx("div", {
    ref: o,
    className: Re("text-2xl font-semibold leading-none tracking-tight", e),
    ...n
}));
Bv.displayName = "CardTitle";
const bC = w.forwardRef( ({className: e, ...n}, o) => S.jsx("div", {
    ref: o,
    className: Re("text-sm text-muted-foreground", e),
    ...n
}));
bC.displayName = "CardDescription";
const zv = w.forwardRef( ({className: e, ...n}, o) => S.jsx("div", {
    ref: o,
    className: Re("p-6 pt-0", e),
    ...n
}));
zv.displayName = "CardContent";
const CC = w.forwardRef( ({className: e, ...n}, o) => S.jsx("div", {
    ref: o,
    className: Re("flex items-center p-6 pt-0", e),
    ...n
}));
CC.displayName = "CardFooter";
function EC({summary: e, count: n}) {
    const o = Object.keys(e).length > 0;
    return S.jsxs(Vv, {
        className: "bg-transparent border-0 shadow-none",
        children: [S.jsx(Fv, {
            children: S.jsx(Bv, {
                children: getTranslation("总属性加成")
            })
        }), S.jsxs(zv, {
            children: [o ? S.jsx("ul", {
                className: "space-y-1 text-sm",
                children: Object.entries(e).map( ([i,a]) => S.jsxs("li", {
                    className: "flex justify-between",
                    children: [S.jsx("span", {
                        children: i
                    }), S.jsxs("span", {
                        className: "font-mono text-blue-400",
                        children: ["+", a % 1 === 0 ? a : (a * 100).toFixed(2), "%"]
                    })]
                }, i))
            }) : S.jsx("p", {
                className: "text-muted-foreground",
                children: getTranslation("暂无属性")
            }), o && n > 0 && S.jsx("div", {
                className: "mt-4 pt-4 border-t border-dashed",
                children: S.jsxs("p", {
                    className: "text-sm text-muted-foreground text-center",
                    children: [getTranslation("共计"), S.jsx("span", {
                        className: "font-bold text-foreground mx-1",
                        children: n
                    }), getTranslation("条新神属性")]
                })
            })]
        })]
    })
}
const Ko = 6
  , $v = 6
  , Dn = {
    Z: [[1, 1, 0], [0, 1, 1], [0, 0, 0]],
    L: [[1, 0, 0], [1, 1, 1], [0, 0, 0]],
    T: [[0, 1, 0], [1, 1, 1], [0, 0, 0]],
    O: [[1, 1], [1, 1]],
    H2: [[1, 1]],
    L3: [[1, 0], [1, 1]],
    S1: [[1]],
    V6: [[1], [1], [1], [1], [1], [1]]
}
  , Xe = {
    A: {
        name: getTranslation("六神石板"),
        color: "bg-purple-500"
    },
    B_Yellow: {
        name: getTranslation("末神泪珠"),
        color: "bg-[#FFDD00]"
    },
    B_Orange: {
        name: getTranslation("群星辉陨"),
        color: "bg-orange-300"
    },
    C: {
        name: getTranslation("神性一角"),
        color: "bg-[#FFDD00]"
    },
    D: {
        name: getTranslation("星星蛾火"),
        color: "bg-amber-500"
    },
    D_Pink: {
        name: getTranslation("蛾火燎原之刻"),
        color: "bg-rose-300"
    },
    E: {
        name: getTranslation("寰空神隙"),
        color: "bg-[#FFDD00]"
    }
}
  , qa = [{
    name: getTranslation("额外物理伤害"),
    baseValue: .13
}, {
    name: getTranslation("额外攻击伤害"),
    baseValue: .13
}, {
    name: getTranslation("额外哨卫伤害"),
    baseValue: .13
}, {
    name: getTranslation("额外火焰伤害"),
    baseValue: .13
}, {
    name: getTranslation("额外冰冷伤害"),
    baseValue: .13
}, {
    name: getTranslation("额外闪电伤害"),
    baseValue: .13
}, {
    name: getTranslation("额外法术伤害"),
    baseValue: .13
}, {
    name: getTranslation("额外腐蚀伤害"),
    baseValue: .13
}, {
    name: getTranslation("额外持续伤害"),
    baseValue: .13
}, {
    name: getTranslation("额外召唤物伤害"),
    baseValue: .13
}, {
    name: getTranslation("额外攻击速度"),
    baseValue: .13
}, {
    name: getTranslation("额外施法速度"),
    baseValue: .13
}]
  , TC = [{
    type: "A",
    subType: "Z",
    shape: Dn.Z,
    rotation: 0,
    flipH: !1,
    flipV: !1,
    color: Xe.A.color,
    icon: "a_1"
}, {
    type: "A",
    subType: "L",
    shape: Dn.L,
    rotation: 0,
    flipH: !1,
    flipV: !1,
    color: Xe.A.color,
    icon: "a_2"
}, {
    type: "A",
    subType: "T",
    shape: Dn.T,
    rotation: 0,
    flipH: !1,
    flipV: !1,
    color: Xe.A.color,
    icon: "a_3"
}, {
    type: "A",
    subType: "O",
    shape: Dn.O,
    rotation: 0,
    flipH: !1,
    flipV: !1,
    color: Xe.A.color,
    icon: "a_4"
}, {
    type: "B",
    subType: "yellow",
    shape: Dn.H2,
    rotation: 0,
    flipH: !1,
    flipV: !1,
    color: Xe.B_Yellow.color,
    icon: "b_1"
}, {
    type: "B",
    subType: "orange",
    shape: Dn.H2,
    rotation: 0,
    flipH: !1,
    flipV: !1,
    color: Xe.B_Orange.color,
    icon: "b_2"
}, {
    type: "C",
    subType: "L3",
    shape: Dn.L3,
    rotation: 0,
    flipH: !1,
    flipV: !1,
    color: Xe.C.color,
    icon: "c"
}, {
    type: "D",
    subType: "S1",
    shape: Dn.S1,
    rotation: 0,
    flipH: !1,
    flipV: !1,
    color: Xe.D.color,
    icon: "d_1"
}, {
    type: "D",
    subType: "S1_Pink",
    shape: Dn.S1,
    rotation: 0,
    flipH: !1,
    flipV: !1,
    color: Xe.D_Pink.color,
    icon: "d_2"
}, {
    type: "E",
    subType: "V6",
    shape: Dn.V6,
    rotation: 0,
    flipH: !1,
    flipV: !1,
    color: Xe.E.color,
    icon: "e"
}]
  , Hv = [{
    x: 2,
    y: 0
}, {
    x: 3,
    y: 0
}, {
    x: 1,
    y: 1
}, {
    x: 2,
    y: 1
}, {
    x: 3,
    y: 1
}, {
    x: 4,
    y: 1
}, {
    x: 1,
    y: 2
}, {
    x: 2,
    y: 2
}, {
    x: 3,
    y: 2
}, {
    x: 4,
    y: 2
}, {
    x: 1,
    y: 3
}, {
    x: 2,
    y: 3
}, {
    x: 3,
    y: 3
}, {
    x: 4,
    y: 3
}, {
    x: 1,
    y: 4
}, {
    x: 2,
    y: 4
}, {
    x: 3,
    y: 4
}, {
    x: 4,
    y: 4
}, {
    x: 2,
    y: 5
}, {
    x: 3,
    y: 5
}, {
    x: 0,
    y: 2
}, {
    x: 0,
    y: 3
}, {
    x: 5,
    y: 2
}, {
    x: 5,
    y: 3
}]
  , PC = {
    B_yellow: 4,
    B_orange: 3,
    C_L3: 3,
    D_S1: 3,
    D_S1_Pink: 1,
    E_V6: 1
};
var At = (e => (e.COPY_DIRECTIONAL = getTranslation("复制单向相邻"),
e.COPY_ALL_ADJACENT = getTranslation("复制四周相邻"),
e.BOOST_ADJACENT = getTranslation("相邻加成"),
e))(At || {});
function Jc(e) {
    if (!e || e.length === 0 || e[0].length === 0)
        return [];
    const n = e.length
      , o = e[0].length
      , i = Array(o).fill(0).map( () => Array(n).fill(0));
    for (let a = 0; a < n; a++)
        for (let u = 0; u < o; u++)
            i[u][n - 1 - a] = e[a][u];
    return i
}
function ed(e) {
    return e.map(n => [...n].reverse())
}
function kC(e) {
    return [...e].reverse()
}
function Uv(e) {
    if (!e || e.length === 0)
        return {
            width: 0,
            height: 0
        };
    const n = e.length;
    return {
        width: e.reduce( (i, a) => Math.max(i, a.length), 0),
        height: n
    }
}
const AC = ({shape: e, color: n, className: o, gap: i=0}) => {
    const {width: a, height: u} = Uv(e);
    return a === 0 || u === 0 ? null : S.jsx("div", {
        className: Re("grid w-full h-full", o),
        style: {
            gridTemplateColumns: `repeat(${a}, 1fr)`,
            gridTemplateRows: `repeat(${u}, 1fr)`,
            gap: `${i}px`
        },
        children: e.flat().map( (c, d) => S.jsx("div", {
            className: c === 1 ? n : "bg-transparent"
        }, d))
    })
}
  , RC = ie.memo( ({stone: e, gridSize: n, gap: o, isSelected: i, onSelect: a, isInConflict: u, hasSuccessfullyCopied: c}) => {
    const {width: d, height: p} = Uv(e.shape)
      , h = d * n + (d > 0 ? d - 1 : 0) * o
      , g = p * n + (p > 0 ? p - 1 : 0) * o
      , y = {
        left: `${e.position.x * (n + o)}px`,
        top: `${e.position.y * (n + o)}px`,
        width: `${h}px`,
        height: `${g}px`
    }
      , x = E => {
        E.stopPropagation(),
        a(e.id)
    }
      , v = w.useMemo( () => {
        if (!i && !u)
            return {};
        const E = u ? "#EF4444" : "#FACC15";
        return {
            filter: `drop-shadow(0px 0px 3px ${E}) drop-shadow(0px 0px 6px ${E})`
        }
    }
    , [i, u])
      , T = w.useMemo( () => !(e.type === "D" || e.type === "E") || !c ? {
        show: !1,
        direction: void 0
    } : e.type === "D" && e.subType === "S1" || e.type === "E" ? {
        show: !0,
        direction: e.attributes.find(A => A.type === At.COPY_DIRECTIONAL || A.type === At.COPY_SIDE_ALL)?.direction
    } : e.type === "D" && e.subType === "S1_Pink" ? {
        show: !0,
        direction: "all"
    } : {
        show: !1,
        direction: void 0
    }, [e.type, e.subType, e.attributes, c])
      , C = w.useMemo( () => {
        if (!T.show || !T.direction || T.direction === "all")
            return {};
        const E = "4px"
          , P = "2px";
        switch (T.direction) {
        case "up":
            return {
                clipPath: `inset(0 ${P} calc(100% - ${E}) ${P})`
            };
        case "down":
            return {
                clipPath: `inset(calc(100% - ${E}) ${P} 0 ${P})`
            };
        case "left":
            return {
                clipPath: `inset(${P} calc(100% - ${E}) ${P} 0)`
            };
        case "right":
            return {
                clipPath: `inset(${P} 0 ${P} calc(100% - ${E}))`
            };
        default:
            return {}
        }
    }
    , [T]);
    return S.jsxs("div", {
        className: Re("absolute transition-all duration-200 ease-in-out cursor-pointer z-10", {
            "z-30": i,
            "animate-slow-pulse": u
        }),
        style: y,
        onClick: x,
        children: [T.show && S.jsxs(S.Fragment, {
            children: [S.jsx("div", {
                className: "steam-border",
                style: C
            }), S.jsx("div", {
                className: "steam-border-glow",
                style: C
            })]
        }), S.jsx("div", {
            className: "relative w-full h-full",
            style: v,
            children: S.jsx(AC, {
                shape: e.shape,
                color: e.color,
                className: "w-full h-full"
            })
        })]
    })
}
)
  , $a = 2
  , Fo = 78
  , Bm = Fo * Ko + $a * (Ko - 1)
  , NC = ie.memo( ({stones: e, selectedStoneId: n, onSelectStone: o, conflictingStoneIds: i, successfullyCopiedStoneIds: a}) => {
    const u = new Set(Hv.map(c => `${c.x},${c.y}`));
    return S.jsxs("div", {
        className: "relative bg-black",
        style: {
            width: `${Bm}px`,
            height: `${Bm}px`
        },
        children: [Array.from({
            length: Ko * $v
        }).map( (c, d) => {
            const p = d % Ko
              , h = Math.floor(d / Ko)
              , g = u.has(`${p},${h}`);
            return S.jsx("div", {
                className: `absolute ${g ? "bg-slate-700" : "bg-transparent"}`,
                style: {
                    left: `${p * (Fo + $a)}px`,
                    top: `${h * (Fo + $a)}px`,
                    width: `${Fo}px`,
                    height: `${Fo}px`
                }
            }, `${p}-${h}`)
        }
        ), Object.values(e).map(c => S.jsx(RC, {
            stone: c,
            gridSize: Fo,
            gap: $a,
            isSelected: n === c.id,
            onSelect: o,
            isInConflict: i.has(c.id),
            hasSuccessfullyCopied: a.has(c.id)
        }, c.id))]
    })
}
);
function zm(e, n) {
    if (typeof e == "function")
        return e(n);
    e != null && (e.current = n)
}
function Wv(...e) {
    return n => {
        let o = !1;
        const i = e.map(a => {
            const u = zm(a, n);
            return !o && typeof u == "function" && (o = !0),
            u
        }
        );
        if (o)
            return () => {
                for (let a = 0; a < i.length; a++) {
                    const u = i[a];
                    typeof u == "function" ? u() : zm(e[a], null)
                }
            }
    }
}
function _e(...e) {
    return w.useCallback(Wv(...e), e)
}
var so = w.forwardRef( (e, n) => {
    const {children: o, ...i} = e
      , a = w.Children.toArray(o)
      , u = a.find(DC);
    if (u) {
        const c = u.props.children
          , d = a.map(p => p === u ? w.Children.count(c) > 1 ? w.Children.only(null) : w.isValidElement(c) ? c.props.children : null : p);
        return S.jsx(td, {
            ...i,
            ref: n,
            children: w.isValidElement(c) ? w.cloneElement(c, void 0, d) : null
        })
    }
    return S.jsx(td, {
        ...i,
        ref: n,
        children: o
    })
}
);
so.displayName = "Slot";
var td = w.forwardRef( (e, n) => {
    const {children: o, ...i} = e;
    if (w.isValidElement(o)) {
        const a = jC(o);
        return w.cloneElement(o, {
            ...MC(i, o.props),
            ref: n ? Wv(n, a) : a
        })
    }
    return w.Children.count(o) > 1 ? w.Children.only(null) : null
}
);
td.displayName = "SlotClone";
var Wd = ({children: e}) => S.jsx(S.Fragment, {
    children: e
});
function DC(e) {
    return w.isValidElement(e) && e.type === Wd
}
function MC(e, n) {
    const o = {
        ...n
    };
    for (const i in n) {
        const a = e[i]
          , u = n[i];
        /^on[A-Z]/.test(i) ? a && u ? o[i] = (...d) => {
            u(...d),
            a(...d)
        }
        : a && (o[i] = a) : i === "style" ? o[i] = {
            ...a,
            ...u
        } : i === "className" && (o[i] = [a, u].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...o
    }
}
function jC(e) {
    let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get
      , o = n && "isReactWarning"in n && n.isReactWarning;
    return o ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get,
    o = n && "isReactWarning"in n && n.isReactWarning,
    o ? e.props.ref : e.props.ref || e.ref)
}
const $m = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , Hm = Mv
  , Kd = (e, n) => o => {
    var i;
    if (n?.variants == null)
        return Hm(e, o?.class, o?.className);
    const {variants: a, defaultVariants: u} = n
      , c = Object.keys(a).map(h => {
        const g = o?.[h]
          , y = u?.[h];
        if (g === null)
            return null;
        const x = $m(g) || $m(y);
        return a[h][x]
    }
    )
      , d = o && Object.entries(o).reduce( (h, g) => {
        let[y,x] = g;
        return x === void 0 || (h[y] = x),
        h
    }
    , {})
      , p = n == null || (i = n.compoundVariants) === null || i === void 0 ? void 0 : i.reduce( (h, g) => {
        let {class: y, className: x, ...v} = g;
        return Object.entries(v).every(T => {
            let[C,E] = T;
            return Array.isArray(E) ? E.includes({
                ...u,
                ...d
            }[C]) : {
                ...u,
                ...d
            }[C] === E
        }
        ) ? [...h, y, x] : h
    }
    , []);
    return Hm(e, c, p, o?.class, o?.className)
}
  , Gd = Kd("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , Yt = w.forwardRef( ({className: e, variant: n, size: o, asChild: i=!1, ...a}, u) => {
    const c = i ? so : "button";
    return S.jsx(c, {
        className: Re(Gd({
            variant: n,
            size: o,
            className: e
        })),
        ref: u,
        ...a
    })
}
);
Yt.displayName = "Button";
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const OC = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Kv = (...e) => e.filter( (n, o, i) => !!n && n.trim() !== "" && i.indexOf(n) === o).join(" ").trim();
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var _C = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const IC = w.forwardRef( ({color: e="currentColor", size: n=24, strokeWidth: o=2, absoluteStrokeWidth: i, className: a="", children: u, iconNode: c, ...d}, p) => w.createElement("svg", {
    ref: p,
    ..._C,
    width: n,
    height: n,
    stroke: e,
    strokeWidth: i ? Number(o) * 24 / Number(n) : o,
    className: Kv("lucide", a),
    ...d
}, [...c.map( ([h,g]) => w.createElement(h, g)), ...Array.isArray(u) ? u : [u]]));
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dt = (e, n) => {
    const o = w.forwardRef( ({className: i, ...a}, u) => w.createElement(IC, {
        ref: u,
        iconNode: n,
        className: Kv(`lucide-${OC(e)}`, i),
        ...a
    }));
    return o.displayName = `${e}`,
    o
}
;
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LC = Dt("ArrowDown", [["path", {
    d: "M12 5v14",
    key: "s699le"
}], ["path", {
    d: "m19 12-7 7-7-7",
    key: "1idqje"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const VC = Dt("ArrowLeft", [["path", {
    d: "m12 19-7-7 7-7",
    key: "1l729n"
}], ["path", {
    d: "M19 12H5",
    key: "x3x0zl"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const FC = Dt("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BC = Dt("ArrowUp", [["path", {
    d: "m5 12 7-7 7 7",
    key: "hav0vg"
}], ["path", {
    d: "M12 19V5",
    key: "x0mq9r"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zC = Dt("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gv = Dt("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $C = Dt("ChevronUp", [["path", {
    d: "m18 15-6-6-6 6",
    key: "153udz"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HC = Dt("CircleHelp", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
    key: "1u773s"
}], ["path", {
    d: "M12 17h.01",
    key: "p32p05"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UC = Dt("Circle", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WC = Dt("Download", [["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
}], ["polyline", {
    points: "7 10 12 15 17 10",
    key: "2ggqvy"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "15",
    y2: "3",
    key: "1vk2je"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const KC = Dt("FlipHorizontal", [["path", {
    d: "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3",
    key: "1i73f7"
}], ["path", {
    d: "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3",
    key: "saxlbk"
}], ["path", {
    d: "M12 20v2",
    key: "1lh1kg"
}], ["path", {
    d: "M12 14v2",
    key: "8jcxud"
}], ["path", {
    d: "M12 8v2",
    key: "1woqiv"
}], ["path", {
    d: "M12 2v2",
    key: "tus03m"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GC = Dt("FlipVertical", [["path", {
    d: "M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3",
    key: "14bfxa"
}], ["path", {
    d: "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3",
    key: "14rx03"
}], ["path", {
    d: "M4 12H2",
    key: "rhcxmi"
}], ["path", {
    d: "M10 12H8",
    key: "s88cx1"
}], ["path", {
    d: "M16 12h-2",
    key: "10asgb"
}], ["path", {
    d: "M22 12h-2",
    key: "14jgyd"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const YC = Dt("RotateCw", [["path", {
    d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
    key: "1p45f6"
}], ["path", {
    d: "M21 3v5h-5",
    key: "1q7to0"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XC = Dt("Trash2", [["path", {
    d: "M3 6h18",
    key: "d0wm0j"
}], ["path", {
    d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
    key: "4alrt4"
}], ["path", {
    d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
    key: "v07s0e"
}], ["line", {
    x1: "10",
    x2: "10",
    y1: "11",
    y2: "17",
    key: "1uufr5"
}], ["line", {
    x1: "14",
    x2: "14",
    y1: "11",
    y2: "17",
    key: "xtxkd"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const QC = Dt("Upload", [["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
}], ["polyline", {
    points: "17 8 12 3 7 8",
    key: "t8dd8p"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "3",
    y2: "15",
    key: "widbto"
}]]);
var ds = Nv();
const Yv = $d(ds);
var ZC = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"]
  , Ne = ZC.reduce( (e, n) => {
    const o = w.forwardRef( (i, a) => {
        const {asChild: u, ...c} = i
          , d = u ? so : n;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        S.jsx(d, {
            ...c,
            ref: a
        })
    }
    );
    return o.displayName = `Primitive.${n}`,
    {
        ...e,
        [n]: o
    }
}
, {});
function qC(e, n) {
    e && ds.flushSync( () => e.dispatchEvent(n))
}
var JC = "Separator"
  , Um = "horizontal"
  , eE = ["horizontal", "vertical"]
  , Xv = w.forwardRef( (e, n) => {
    const {decorative: o, orientation: i=Um, ...a} = e
      , u = tE(i) ? i : Um
      , d = o ? {
        role: "none"
    } : {
        "aria-orientation": u === "vertical" ? u : void 0,
        role: "separator"
    };
    return S.jsx(Ne.div, {
        "data-orientation": u,
        ...d,
        ...a,
        ref: n
    })
}
);
Xv.displayName = JC;
function tE(e) {
    return eE.includes(e)
}
var Qv = Xv;
const Ja = w.forwardRef( ({className: e, orientation: n="horizontal", decorative: o=!0, ...i}, a) => S.jsx(Qv, {
    ref: a,
    decorative: o,
    orientation: n,
    className: Re("shrink-0 bg-border", n === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", e),
    ...i
}));
Ja.displayName = Qv.displayName;
const nE = Kd("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function el({className: e, variant: n, ...o}) {
    return S.jsx("div", {
        className: Re(nE({
            variant: n
        }), e),
        ...o
    })
}
const Yd = e => {
    const n = new Map;
    for (const o of Object.values(e))
        for (let i = 0; i < o.shape.length; i++)
            for (let a = 0; a < o.shape[i].length; a++)
                o.shape[i][a] && n.set(`${o.position.x + a},${o.position.y + i}`, o.id);
    return n
}
  , tl = (e, n, o) => {
    const i = {}
      , a = [{
        dx: 0,
        dy: -1
    }, {
        dx: 0,
        dy: 1
    }, {
        dx: -1,
        dy: 0
    }, {
        dx: 1,
        dy: 0
    }];
    for (let u = 0; u < e.shape.length; u++)
        for (let c = 0; c < e.shape[u].length; c++)
            if (e.shape[u][c]) {
                const d = e.position.x + c
                  , p = e.position.y + u;
                for (const h of a) {
                    const g = d + h.dx
                      , y = p + h.dy
                      , x = o.get(`${g},${y}`);
                    x && x !== e.id && !i[x] && (i[x] = n[x])
                }
            }
    return i
}
  , rE = new Set(Hv.map(e => `${e.x},${e.y}`));
function oE(e, n, o) {
    const {shape: i, position: a} = e
      , u = new Set;
    for (const c of Object.values(n))
        if (c.id !== o)
            for (let d = 0; d < c.shape.length; d++)
                for (let p = 0; p < c.shape[d].length; p++)
                    c.shape[d][p] && u.add(`${c.position.x + p},${c.position.y + d}`);
    for (let c = 0; c < i.length; c++)
        for (let d = 0; d < i[c].length; d++)
            if (i[c][d]) {
                const p = a.x + d
                  , h = a.y + c;
                if (!rE.has(`${p},${h}`) || u.has(`${p},${h}`))
                    return !0
            }
    return !1
}
function iE(e, n, o) {
    const i = [];
    if (o === "E") {
        i.push(e);
        const a = ed(e);
        JSON.stringify(a) !== JSON.stringify(e) && i.push(a)
    } else {
        let a = e;
        for (let u = 0; u < 4; u++)
            i.push(a),
            a = Jc(a);
        a = ed(e);
        for (let u = 0; u < 4; u++)
            i.some(c => JSON.stringify(c) === JSON.stringify(a)) || i.push(a),
            a = Jc(a)
    }
    for (const a of i) {
        const u = a.length
          , c = a[0]?.length || 0;
        if (!(u === 0 || c === 0))
            for (let d = 0; d <= $v - u; d++)
                for (let p = 0; p <= Ko - c; p++) {
                    const h = {
                        x: p,
                        y: d
                    };
                    if (!oE({
                        shape: a,
                        position: h
                    }, n))
                        return {
                            position: h,
                            shape: a
                        }
                }
    }
    return null
}
function Wm(e, n) {
    const o = new Set
      , {shape: i, position: a, id: u} = e
      , c = new Set;
    for (let d = 0; d < i.length; d++)
        for (let p = 0; p < i[d].length; p++)
            i[d][p] && c.add(`${a.x + p},${a.y + d}`);
    for (const d in n) {
        if (d === u)
            continue;
        const p = n[d];
        let h = !1;
        for (let g = 0; g < p.shape.length; g++) {
            for (let y = 0; y < p.shape[g].length; y++)
                if (p.shape[g][y]) {
                    const x = `${p.position.x + y},${p.position.y + g}`;
                    if (c.has(x)) {
                        o.add(d),
                        h = !0;
                        break
                    }
                }
            if (h)
                break
        }
    }
    return Array.from(o)
}
function Na(e, n) {
    for (let o = 0; o < e.length; o++)
        for (let i = 0; i < e[o].length; i++)
            if (e[o][i]) {
                const a = n.x + i
                  , u = n.y + o;
                if (a < 0 || a >= 6 || u < 0 || u >= 6)
                    return !1
            }
    return !0
}
function sE(e) {
    const n = [];
    let o = 0;
    switch (e.type) {
    case "A":
        o = 3;
        break;
    case "B":
        e.subType === "yellow" ? (o = 1,
        n.push({
            id: `special-${Date.now()}`,
            name: getTranslation("相邻石板的常规属性加成+10%"),
            value: .1,
            order: 2,
            isSpecial: !0,
            type: At.BOOST_ADJACENT
        })) : o = 2;
        break;
    case "C":
        o = 2;
        break;
    case "D":
        if (e.subType === "S1") {
            const c = ["up", "down", "left", "right"]
              , d = {
                up: getTranslation("上"),
                down: getTranslation("下"),
                left: getTranslation("左"),
                right: getTranslation("右")
            }
              , p = c[Math.floor(Math.random() * c.length)];
            n.push({
                id: `special-${Date.now()}`,
                name: `${getTranslation("复制")}${d[p]}${getTranslation("侧相邻石板的最后一条属性")}`,
                value: 0,
                order: 1,
                isSpecial: !0,
                type: At.COPY_DIRECTIONAL,
                direction: p
            })
        } else
            e.subType === "S1_Pink" && n.push({
                id: `special-${Date.now()}`,
                name: getTranslation("复制四周相邻石板的最后一条属性"),
                value: 0,
                order: 1,
                isSpecial: !0,
                type: At.COPY_ALL_ADJACENT
            });
        break;
    case "E":
        const i = ["left", "right"]
          , a = {
            left: getTranslation("左"),
            right: getTranslation("右")
        }
          , u = i[Math.floor(Math.random() * i.length)];
        n.push({
            id: `special-${Date.now()}`,
            name: `${getTranslation("复制")}${a[u]}${getTranslation("侧所有相邻石板的常规属性")}`,
            value: 0,
            order: 1,
            isSpecial: !0,
            type: At.COPY_SIDE_ALL,
            direction: u
        });
        break
    }
    for (let i = 0; i < o; i++) {
        const a = qa[Math.floor(Math.random() * qa.length)];
        n.push({
            id: `attr-${Date.now()}-${i}`,
            name: a.name,
            baseValue: a.baseValue,
            value: a.baseValue,
            order: i + 1,
            isSpecial: !1
        })
    }
    return n.sort( (i, a) => i.order - a.order)
}
const nl = (e, n, o) => {
    const i = []
      , a = e.attributes.find(h => h.type === At.COPY_DIRECTIONAL && h.direction)
      , u = e.attributes.find(h => h.type === At.COPY_ALL_ADJACENT)
      , c = e.attributes.find(h => h.type === At.COPY_SIDE_ALL && h.direction)
      , d = h => [...h.attributes].filter(g => !g.isSpecial && g.name !== getTranslation("空置")).pop()
      , p = h => [...h.attributes].filter(g => !g.isSpecial && g.name !== getTranslation("空置"));
    if (a && a.direction) {
        const g = {
            up: {
                dx: 0,
                dy: -1
            },
            down: {
                dx: 0,
                dy: 1
            },
            left: {
                dx: -1,
                dy: 0
            },
            right: {
                dx: 1,
                dy: 0
            }
        }[a.direction];
        let y = null;
        for (let x = 0; x < e.shape.length; x++) {
            for (let v = 0; v < e.shape[x].length; v++)
                if (e.shape[x][v]) {
                    const T = o.get(`${e.position.x + v + g.dx},${e.position.y + x + g.dy}`);
                    if (T && T !== e.id) {
                        y = n[T];
                        break
                    }
                }
            if (y)
                break
        }
        if (y) {
            const x = d(y);
            x && i.push({
                ...x,
                id: `dyn-${e.id}-${x.id}`,
                sourceStoneId: y.id,
                comment: `(${getTranslation("复制于")} ${y.type}-${y.subType})`
            })
        }
    }
    if (u) {
        const h = Object.values(tl(e, n, o));
        for (const g of h) {
            const y = d(g);
            y && i.push({
                ...y,
                id: `dyn-${e.id}-${y.id}-${g.id}`,
                sourceStoneId: g.id,
                comment: `(${getTranslation("复制于")} ${g.type}-${g.subType})`
            })
        }
    }
    if (c && c.direction) {
        const g = {
            left: {
                dx: -1,
                dy: 0
            },
            right: {
                dx: 1,
                dy: 0
            }
        }[c.direction]
          , y = {};
        for (let x = 0; x < e.shape.length; x++)
            for (let v = 0; v < e.shape[x].length; v++)
                if (e.shape[x][v]) {
                    const T = o.get(`${e.position.x + v + g.dx},${e.position.y + x + g.dy}`);
                    T && T !== e.id && !y[T] && (y[T] = n[T])
                }
        for (const x of Object.values(y))
            p(x).forEach(v => {
                i.push({
                    ...v,
                    id: `dyn-${e.id}-${v.id}-${x.id}`,
                    sourceStoneId: x.id,
                    comment: `(${getTranslation("复制于")} ${x.type}-${x.subType})`
                })
            }
            )
    }
    return i
}
;
function aE(e, n) {
    const o = Object.values(e);
    if (o.length === 0)
        return {
            summary: {},
            count: 0
        };
    const i = Yd(e);
    let a = [];
    for (const v of o)
        v.attributes.forEach(C => {
            !C.isSpecial && C.name !== getTranslation("空置") && a.push({
                ...C,
                parentStoneId: v.id
            })
        }
        ),
        nl(v, e, i).forEach(C => {
            C.name !== getTranslation("空置") && a.push({
                ...C,
                parentStoneId: v.id
            })
        }
        );
    const u = o.filter(v => v.attributes.some(T => T.type === At.BOOST_ADJACENT))
      , c = {};
    for (const v of o) {
        let T = 1;
        for (const C of u) {
            const E = tl(C, e, i);
            Object.values(E).some(P => P.id === v.id) && (T += .1)
        }
        c[v.id] = T
    }
    let d = a.map(v => {
        const T = c[v.parentStoneId] || 1;
        return {
            ...v,
            value: (v.baseValue || 0) * T
        }
    }
    );
    const p = d.length;
    let h = d
      , g = 1;
    if (n.isBuff2Active && (g += .25),
    n.isBuff3Active)
        switch (n.starfallStanceOption) {
        case "unwa":
            g += .5;
            break;
        case "singlewa":
            g += .55;
            break;
        case "triplewa":
            g += .6;
            break
        }
    n.isAntinomyActive && (g += n.antinomyValue),
    g > 1 && (h = h.map(v => ({
        ...v,
        value: v.value * g
    })));
    const y = {}
      , x = {};
    h.forEach(v => {
        v.name.includes(getTranslation("额外")) ? (x[v.name] || (x[v.name] = 1),
        x[v.name] *= 1 + (v.value || 0)) : (y[v.name] || (y[v.name] = 0),
        y[v.name] += v.value || 0)
    }
    );
    for (const v in x)
        y[v] = x[v] - 1;
    return {
        summary: y,
        count: p
    }
}
function rl(e, [n,o]) {
    return Math.min(o, Math.max(n, e))
}
function Ee(e, n, {checkForDefaultPrevented: o=!0}={}) {
    return function(a) {
        if (e?.(a),
        o === !1 || !a.defaultPrevented)
            return n?.(a)
    }
}
function lE(e, n) {
    const o = w.createContext(n)
      , i = u => {
        const {children: c, ...d} = u
          , p = w.useMemo( () => d, Object.values(d));
        return S.jsx(o.Provider, {
            value: p,
            children: c
        })
    }
    ;
    i.displayName = e + "Provider";
    function a(u) {
        const c = w.useContext(o);
        if (c)
            return c;
        if (n !== void 0)
            return n;
        throw new Error(`\`${u}\` must be used within \`${e}\``)
    }
    return [i, a]
}
function wn(e, n=[]) {
    let o = [];
    function i(u, c) {
        const d = w.createContext(c)
          , p = o.length;
        o = [...o, c];
        const h = y => {
            const {scope: x, children: v, ...T} = y
              , C = x?.[e]?.[p] || d
              , E = w.useMemo( () => T, Object.values(T));
            return S.jsx(C.Provider, {
                value: E,
                children: v
            })
        }
        ;
        h.displayName = u + "Provider";
        function g(y, x) {
            const v = x?.[e]?.[p] || d
              , T = w.useContext(v);
            if (T)
                return T;
            if (c !== void 0)
                return c;
            throw new Error(`\`${y}\` must be used within \`${u}\``)
        }
        return [h, g]
    }
    const a = () => {
        const u = o.map(c => w.createContext(c));
        return function(d) {
            const p = d?.[e] || u;
            return w.useMemo( () => ({
                [`__scope${e}`]: {
                    ...d,
                    [e]: p
                }
            }), [d, p])
        }
    }
    ;
    return a.scopeName = e,
    [i, uE(a, ...n)]
}
function uE(...e) {
    const n = e[0];
    if (e.length === 1)
        return n;
    const o = () => {
        const i = e.map(a => ({
            useScope: a(),
            scopeName: a.scopeName
        }));
        return function(u) {
            const c = i.reduce( (d, {useScope: p, scopeName: h}) => {
                const y = p(u)[`__scope${h}`];
                return {
                    ...d,
                    ...y
                }
            }
            , {});
            return w.useMemo( () => ({
                [`__scope${n.scopeName}`]: c
            }), [c])
        }
    }
    ;
    return o.scopeName = n.scopeName,
    o
}
function Xd(e) {
    const n = e + "CollectionProvider"
      , [o,i] = wn(n)
      , [a,u] = o(n, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , c = v => {
        const {scope: T, children: C} = v
          , E = ie.useRef(null)
          , P = ie.useRef(new Map).current;
        return S.jsx(a, {
            scope: T,
            itemMap: P,
            collectionRef: E,
            children: C
        })
    }
    ;
    c.displayName = n;
    const d = e + "CollectionSlot"
      , p = ie.forwardRef( (v, T) => {
        const {scope: C, children: E} = v
          , P = u(d, C)
          , A = _e(T, P.collectionRef);
        return S.jsx(so, {
            ref: A,
            children: E
        })
    }
    );
    p.displayName = d;
    const h = e + "CollectionItemSlot"
      , g = "data-radix-collection-item"
      , y = ie.forwardRef( (v, T) => {
        const {scope: C, children: E, ...P} = v
          , A = ie.useRef(null)
          , R = _e(T, A)
          , O = u(h, C);
        return ie.useEffect( () => (O.itemMap.set(A, {
            ref: A,
            ...P
        }),
        () => void O.itemMap.delete(A))),
        S.jsx(so, {
            [g]: "",
            ref: R,
            children: E
        })
    }
    );
    y.displayName = h;
    function x(v) {
        const T = u(e + "CollectionConsumer", v);
        return ie.useCallback( () => {
            const E = T.collectionRef.current;
            if (!E)
                return [];
            const P = Array.from(E.querySelectorAll(`[${g}]`));
            return Array.from(T.itemMap.values()).sort( (O, j) => P.indexOf(O.ref.current) - P.indexOf(j.ref.current))
        }
        , [T.collectionRef, T.itemMap])
    }
    return [{
        Provider: c,
        Slot: p,
        ItemSlot: y
    }, x, i]
}
var cE = w.createContext(void 0);
function ml(e) {
    const n = w.useContext(cE);
    return e || n || "ltr"
}
function Fn(e) {
    const n = w.useRef(e);
    return w.useEffect( () => {
        n.current = e
    }
    ),
    w.useMemo( () => (...o) => n.current?.(...o), [])
}
function dE(e, n=globalThis?.document) {
    const o = Fn(e);
    w.useEffect( () => {
        const i = a => {
            a.key === "Escape" && o(a)
        }
        ;
        return n.addEventListener("keydown", i, {
            capture: !0
        }),
        () => n.removeEventListener("keydown", i, {
            capture: !0
        })
    }
    , [o, n])
}
var fE = "DismissableLayer", nd = "dismissableLayer.update", pE = "dismissableLayer.pointerDownOutside", hE = "dismissableLayer.focusOutside", Km, Zv = w.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), gl = w.forwardRef( (e, n) => {
    const {disableOutsidePointerEvents: o=!1, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: u, onInteractOutside: c, onDismiss: d, ...p} = e
      , h = w.useContext(Zv)
      , [g,y] = w.useState(null)
      , x = g?.ownerDocument ?? globalThis?.document
      , [,v] = w.useState({})
      , T = _e(n, I => y(I))
      , C = Array.from(h.layers)
      , [E] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1)
      , P = C.indexOf(E)
      , A = g ? C.indexOf(g) : -1
      , R = h.layersWithOutsidePointerEventsDisabled.size > 0
      , O = A >= P
      , j = vE(I => {
        const U = I.target
          , oe = [...h.branches].some(J => J.contains(U));
        !O || oe || (a?.(I),
        c?.(I),
        I.defaultPrevented || d?.())
    }
    , x)
      , $ = yE(I => {
        const U = I.target;
        [...h.branches].some(J => J.contains(U)) || (u?.(I),
        c?.(I),
        I.defaultPrevented || d?.())
    }
    , x);
    return dE(I => {
        A === h.layers.size - 1 && (i?.(I),
        !I.defaultPrevented && d && (I.preventDefault(),
        d()))
    }
    , x),
    w.useEffect( () => {
        if (g)
            return o && (h.layersWithOutsidePointerEventsDisabled.size === 0 && (Km = x.body.style.pointerEvents,
            x.body.style.pointerEvents = "none"),
            h.layersWithOutsidePointerEventsDisabled.add(g)),
            h.layers.add(g),
            Gm(),
            () => {
                o && h.layersWithOutsidePointerEventsDisabled.size === 1 && (x.body.style.pointerEvents = Km)
            }
    }
    , [g, x, o, h]),
    w.useEffect( () => () => {
        g && (h.layers.delete(g),
        h.layersWithOutsidePointerEventsDisabled.delete(g),
        Gm())
    }
    , [g, h]),
    w.useEffect( () => {
        const I = () => v({});
        return document.addEventListener(nd, I),
        () => document.removeEventListener(nd, I)
    }
    , []),
    S.jsx(Ne.div, {
        ...p,
        ref: T,
        style: {
            pointerEvents: R ? O ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: Ee(e.onFocusCapture, $.onFocusCapture),
        onBlurCapture: Ee(e.onBlurCapture, $.onBlurCapture),
        onPointerDownCapture: Ee(e.onPointerDownCapture, j.onPointerDownCapture)
    })
}
);
gl.displayName = fE;
var mE = "DismissableLayerBranch"
  , gE = w.forwardRef( (e, n) => {
    const o = w.useContext(Zv)
      , i = w.useRef(null)
      , a = _e(n, i);
    return w.useEffect( () => {
        const u = i.current;
        if (u)
            return o.branches.add(u),
            () => {
                o.branches.delete(u)
            }
    }
    , [o.branches]),
    S.jsx(Ne.div, {
        ...e,
        ref: a
    })
}
);
gE.displayName = mE;
function vE(e, n=globalThis?.document) {
    const o = Fn(e)
      , i = w.useRef(!1)
      , a = w.useRef( () => {}
    );
    return w.useEffect( () => {
        const u = d => {
            if (d.target && !i.current) {
                let p = function() {
                    qv(pE, o, h, {
                        discrete: !0
                    })
                };
                const h = {
                    originalEvent: d
                };
                d.pointerType === "touch" ? (n.removeEventListener("click", a.current),
                a.current = p,
                n.addEventListener("click", a.current, {
                    once: !0
                })) : p()
            } else
                n.removeEventListener("click", a.current);
            i.current = !1
        }
          , c = window.setTimeout( () => {
            n.addEventListener("pointerdown", u)
        }
        , 0);
        return () => {
            window.clearTimeout(c),
            n.removeEventListener("pointerdown", u),
            n.removeEventListener("click", a.current)
        }
    }
    , [n, o]),
    {
        onPointerDownCapture: () => i.current = !0
    }
}
function yE(e, n=globalThis?.document) {
    const o = Fn(e)
      , i = w.useRef(!1);
    return w.useEffect( () => {
        const a = u => {
            u.target && !i.current && qv(hE, o, {
                originalEvent: u
            }, {
                discrete: !1
            })
        }
        ;
        return n.addEventListener("focusin", a),
        () => n.removeEventListener("focusin", a)
    }
    , [n, o]),
    {
        onFocusCapture: () => i.current = !0,
        onBlurCapture: () => i.current = !1
    }
}
function Gm() {
    const e = new CustomEvent(nd);
    document.dispatchEvent(e)
}
function qv(e, n, o, {discrete: i}) {
    const a = o.originalEvent.target
      , u = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: o
    });
    n && a.addEventListener(e, n, {
        once: !0
    }),
    i ? qC(a, u) : a.dispatchEvent(u)
}
var Cc = 0;
function Jv() {
    w.useEffect( () => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ?? Ym()),
        document.body.insertAdjacentElement("beforeend", e[1] ?? Ym()),
        Cc++,
        () => {
            Cc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(n => n.remove()),
            Cc--
        }
    }
    , [])
}
function Ym() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""),
    e.tabIndex = 0,
    e.style.outline = "none",
    e.style.opacity = "0",
    e.style.position = "fixed",
    e.style.pointerEvents = "none",
    e
}
var Ec = "focusScope.autoFocusOnMount"
  , Tc = "focusScope.autoFocusOnUnmount"
  , Xm = {
    bubbles: !1,
    cancelable: !0
}
  , xE = "FocusScope"
  , Qd = w.forwardRef( (e, n) => {
    const {loop: o=!1, trapped: i=!1, onMountAutoFocus: a, onUnmountAutoFocus: u, ...c} = e
      , [d,p] = w.useState(null)
      , h = Fn(a)
      , g = Fn(u)
      , y = w.useRef(null)
      , x = _e(n, C => p(C))
      , v = w.useRef({
        paused: !1,
        pause() {
            this.paused = !0
        },
        resume() {
            this.paused = !1
        }
    }).current;
    w.useEffect( () => {
        if (i) {
            let C = function(R) {
                if (v.paused || !d)
                    return;
                const O = R.target;
                d.contains(O) ? y.current = O : Ar(y.current, {
                    select: !0
                })
            }
              , E = function(R) {
                if (v.paused || !d)
                    return;
                const O = R.relatedTarget;
                O !== null && (d.contains(O) || Ar(y.current, {
                    select: !0
                }))
            }
              , P = function(R) {
                if (document.activeElement === document.body)
                    for (const j of R)
                        j.removedNodes.length > 0 && Ar(d)
            };
            document.addEventListener("focusin", C),
            document.addEventListener("focusout", E);
            const A = new MutationObserver(P);
            return d && A.observe(d, {
                childList: !0,
                subtree: !0
            }),
            () => {
                document.removeEventListener("focusin", C),
                document.removeEventListener("focusout", E),
                A.disconnect()
            }
        }
    }
    , [i, d, v.paused]),
    w.useEffect( () => {
        if (d) {
            Zm.add(v);
            const C = document.activeElement;
            if (!d.contains(C)) {
                const P = new CustomEvent(Ec,Xm);
                d.addEventListener(Ec, h),
                d.dispatchEvent(P),
                P.defaultPrevented || (wE(TE(ey(d)), {
                    select: !0
                }),
                document.activeElement === C && Ar(d))
            }
            return () => {
                d.removeEventListener(Ec, h),
                setTimeout( () => {
                    const P = new CustomEvent(Tc,Xm);
                    d.addEventListener(Tc, g),
                    d.dispatchEvent(P),
                    P.defaultPrevented || Ar(C ?? document.body, {
                        select: !0
                    }),
                    d.removeEventListener(Tc, g),
                    Zm.remove(v)
                }
                , 0)
            }
        }
    }
    , [d, h, g, v]);
    const T = w.useCallback(C => {
        if (!o && !i || v.paused)
            return;
        const E = C.key === "Tab" && !C.altKey && !C.ctrlKey && !C.metaKey
          , P = document.activeElement;
        if (E && P) {
            const A = C.currentTarget
              , [R,O] = SE(A);
            R && O ? !C.shiftKey && P === O ? (C.preventDefault(),
            o && Ar(R, {
                select: !0
            })) : C.shiftKey && P === R && (C.preventDefault(),
            o && Ar(O, {
                select: !0
            })) : P === A && C.preventDefault()
        }
    }
    , [o, i, v.paused]);
    return S.jsx(Ne.div, {
        tabIndex: -1,
        ...c,
        ref: x,
        onKeyDown: T
    })
}
);
Qd.displayName = xE;
function wE(e, {select: n=!1}={}) {
    const o = document.activeElement;
    for (const i of e)
        if (Ar(i, {
            select: n
        }),
        document.activeElement !== o)
            return
}
function SE(e) {
    const n = ey(e)
      , o = Qm(n, e)
      , i = Qm(n.reverse(), e);
    return [o, i]
}
function ey(e) {
    const n = []
      , o = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: i => {
            const a = i.tagName === "INPUT" && i.type === "hidden";
            return i.disabled || i.hidden || a ? NodeFilter.FILTER_SKIP : i.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; o.nextNode(); )
        n.push(o.currentNode);
    return n
}
function Qm(e, n) {
    for (const o of e)
        if (!bE(o, {
            upTo: n
        }))
            return o
}
function bE(e, {upTo: n}) {
    if (getComputedStyle(e).visibility === "hidden")
        return !0;
    for (; e; ) {
        if (n !== void 0 && e === n)
            return !1;
        if (getComputedStyle(e).display === "none")
            return !0;
        e = e.parentElement
    }
    return !1
}
function CE(e) {
    return e instanceof HTMLInputElement && "select"in e
}
function Ar(e, {select: n=!1}={}) {
    if (e && e.focus) {
        const o = document.activeElement;
        e.focus({
            preventScroll: !0
        }),
        e !== o && CE(e) && n && e.select()
    }
}
var Zm = EE();
function EE() {
    let e = [];
    return {
        add(n) {
            const o = e[0];
            n !== o && o?.pause(),
            e = qm(e, n),
            e.unshift(n)
        },
        remove(n) {
            e = qm(e, n),
            e[0]?.resume()
        }
    }
}
function qm(e, n) {
    const o = [...e]
      , i = o.indexOf(n);
    return i !== -1 && o.splice(i, 1),
    o
}
function TE(e) {
    return e.filter(n => n.tagName !== "A")
}
var Nt = globalThis?.document ? w.useLayoutEffect : () => {}
  , PE = Lb.useId || ( () => {}
)
  , kE = 0;
function Nr(e) {
    const [n,o] = w.useState(PE());
    return Nt( () => {
        o(i => i ?? String(kE++))
    }
    , [e]),
    n ? `radix-${n}` : ""
}
const AE = ["top", "right", "bottom", "left"]
  , Dr = Math.min
  , Gt = Math.max
  , ol = Math.round
  , Da = Math.floor
  , _n = e => ({
    x: e,
    y: e
})
  , RE = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , NE = {
    start: "end",
    end: "start"
};
function rd(e, n, o) {
    return Gt(e, Dr(n, o))
}
function Jn(e, n) {
    return typeof e == "function" ? e(n) : e
}
function er(e) {
    return e.split("-")[0]
}
function ni(e) {
    return e.split("-")[1]
}
function Zd(e) {
    return e === "x" ? "y" : "x"
}
function qd(e) {
    return e === "y" ? "height" : "width"
}
const DE = new Set(["top", "bottom"]);
function On(e) {
    return DE.has(er(e)) ? "y" : "x"
}
function Jd(e) {
    return Zd(On(e))
}
function ME(e, n, o) {
    o === void 0 && (o = !1);
    const i = ni(e)
      , a = Jd(e)
      , u = qd(a);
    let c = a === "x" ? i === (o ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
    return n.reference[u] > n.floating[u] && (c = il(c)),
    [c, il(c)]
}
function jE(e) {
    const n = il(e);
    return [od(e), n, od(n)]
}
function od(e) {
    return e.replace(/start|end/g, n => NE[n])
}
const Jm = ["left", "right"]
  , eg = ["right", "left"]
  , OE = ["top", "bottom"]
  , _E = ["bottom", "top"];
function IE(e, n, o) {
    switch (e) {
    case "top":
    case "bottom":
        return o ? n ? eg : Jm : n ? Jm : eg;
    case "left":
    case "right":
        return n ? OE : _E;
    default:
        return []
    }
}
function LE(e, n, o, i) {
    const a = ni(e);
    let u = IE(er(e), o === "start", i);
    return a && (u = u.map(c => c + "-" + a),
    n && (u = u.concat(u.map(od)))),
    u
}
function il(e) {
    return e.replace(/left|right|bottom|top/g, n => RE[n])
}
function VE(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function ty(e) {
    return typeof e != "number" ? VE(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function sl(e) {
    const {x: n, y: o, width: i, height: a} = e;
    return {
        width: i,
        height: a,
        top: o,
        left: n,
        right: n + i,
        bottom: o + a,
        x: n,
        y: o
    }
}
function tg(e, n, o) {
    let {reference: i, floating: a} = e;
    const u = On(n)
      , c = Jd(n)
      , d = qd(c)
      , p = er(n)
      , h = u === "y"
      , g = i.x + i.width / 2 - a.width / 2
      , y = i.y + i.height / 2 - a.height / 2
      , x = i[d] / 2 - a[d] / 2;
    let v;
    switch (p) {
    case "top":
        v = {
            x: g,
            y: i.y - a.height
        };
        break;
    case "bottom":
        v = {
            x: g,
            y: i.y + i.height
        };
        break;
    case "right":
        v = {
            x: i.x + i.width,
            y
        };
        break;
    case "left":
        v = {
            x: i.x - a.width,
            y
        };
        break;
    default:
        v = {
            x: i.x,
            y: i.y
        }
    }
    switch (ni(n)) {
    case "start":
        v[c] -= x * (o && h ? -1 : 1);
        break;
    case "end":
        v[c] += x * (o && h ? -1 : 1);
        break
    }
    return v
}
const FE = async (e, n, o) => {
    const {placement: i="bottom", strategy: a="absolute", middleware: u=[], platform: c} = o
      , d = u.filter(Boolean)
      , p = await (c.isRTL == null ? void 0 : c.isRTL(n));
    let h = await c.getElementRects({
        reference: e,
        floating: n,
        strategy: a
    })
      , {x: g, y} = tg(h, i, p)
      , x = i
      , v = {}
      , T = 0;
    for (let C = 0; C < d.length; C++) {
        const {name: E, fn: P} = d[C]
          , {x: A, y: R, data: O, reset: j} = await P({
            x: g,
            y,
            initialPlacement: i,
            placement: x,
            strategy: a,
            middlewareData: v,
            rects: h,
            platform: c,
            elements: {
                reference: e,
                floating: n
            }
        });
        g = A ?? g,
        y = R ?? y,
        v = {
            ...v,
            [E]: {
                ...v[E],
                ...O
            }
        },
        j && T <= 50 && (T++,
        typeof j == "object" && (j.placement && (x = j.placement),
        j.rects && (h = j.rects === !0 ? await c.getElementRects({
            reference: e,
            floating: n,
            strategy: a
        }) : j.rects),
        {x: g, y} = tg(h, x, p)),
        C = -1)
    }
    return {
        x: g,
        y,
        placement: x,
        strategy: a,
        middlewareData: v
    }
}
;
async function rs(e, n) {
    var o;
    n === void 0 && (n = {});
    const {x: i, y: a, platform: u, rects: c, elements: d, strategy: p} = e
      , {boundary: h="clippingAncestors", rootBoundary: g="viewport", elementContext: y="floating", altBoundary: x=!1, padding: v=0} = Jn(n, e)
      , T = ty(v)
      , E = d[x ? y === "floating" ? "reference" : "floating" : y]
      , P = sl(await u.getClippingRect({
        element: (o = await (u.isElement == null ? void 0 : u.isElement(E))) == null || o ? E : E.contextElement || await (u.getDocumentElement == null ? void 0 : u.getDocumentElement(d.floating)),
        boundary: h,
        rootBoundary: g,
        strategy: p
    }))
      , A = y === "floating" ? {
        x: i,
        y: a,
        width: c.floating.width,
        height: c.floating.height
    } : c.reference
      , R = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(d.floating))
      , O = await (u.isElement == null ? void 0 : u.isElement(R)) ? await (u.getScale == null ? void 0 : u.getScale(R)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , j = sl(u.convertOffsetParentRelativeRectToViewportRelativeRect ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: d,
        rect: A,
        offsetParent: R,
        strategy: p
    }) : A);
    return {
        top: (P.top - j.top + T.top) / O.y,
        bottom: (j.bottom - P.bottom + T.bottom) / O.y,
        left: (P.left - j.left + T.left) / O.x,
        right: (j.right - P.right + T.right) / O.x
    }
}
const BE = e => ({
    name: "arrow",
    options: e,
    async fn(n) {
        const {x: o, y: i, placement: a, rects: u, platform: c, elements: d, middlewareData: p} = n
          , {element: h, padding: g=0} = Jn(e, n) || {};
        if (h == null)
            return {};
        const y = ty(g)
          , x = {
            x: o,
            y: i
        }
          , v = Jd(a)
          , T = qd(v)
          , C = await c.getDimensions(h)
          , E = v === "y"
          , P = E ? "top" : "left"
          , A = E ? "bottom" : "right"
          , R = E ? "clientHeight" : "clientWidth"
          , O = u.reference[T] + u.reference[v] - x[v] - u.floating[T]
          , j = x[v] - u.reference[v]
          , $ = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(h));
        let I = $ ? $[R] : 0;
        (!I || !await (c.isElement == null ? void 0 : c.isElement($))) && (I = d.floating[R] || u.floating[T]);
        const U = O / 2 - j / 2
          , oe = I / 2 - C[T] / 2 - 1
          , J = Dr(y[P], oe)
          , ne = Dr(y[A], oe)
          , Z = J
          , le = I - C[T] - ne
          , ue = I / 2 - C[T] / 2 + U
          , ge = rd(Z, ue, le)
          , re = !p.arrow && ni(a) != null && ue !== ge && u.reference[T] / 2 - (ue < Z ? J : ne) - C[T] / 2 < 0
          , Q = re ? ue < Z ? ue - Z : ue - le : 0;
        return {
            [v]: x[v] + Q,
            data: {
                [v]: ge,
                centerOffset: ue - ge - Q,
                ...re && {
                    alignmentOffset: Q
                }
            },
            reset: re
        }
    }
})
  , zE = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(n) {
            var o, i;
            const {placement: a, middlewareData: u, rects: c, initialPlacement: d, platform: p, elements: h} = n
              , {mainAxis: g=!0, crossAxis: y=!0, fallbackPlacements: x, fallbackStrategy: v="bestFit", fallbackAxisSideDirection: T="none", flipAlignment: C=!0, ...E} = Jn(e, n);
            if ((o = u.arrow) != null && o.alignmentOffset)
                return {};
            const P = er(a)
              , A = On(d)
              , R = er(d) === d
              , O = await (p.isRTL == null ? void 0 : p.isRTL(h.floating))
              , j = x || (R || !C ? [il(d)] : jE(d))
              , $ = T !== "none";
            !x && $ && j.push(...LE(d, C, T, O));
            const I = [d, ...j]
              , U = await rs(n, E)
              , oe = [];
            let J = ((i = u.flip) == null ? void 0 : i.overflows) || [];
            if (g && oe.push(U[P]),
            y) {
                const ue = ME(a, c, O);
                oe.push(U[ue[0]], U[ue[1]])
            }
            if (J = [...J, {
                placement: a,
                overflows: oe
            }],
            !oe.every(ue => ue <= 0)) {
                var ne, Z;
                const ue = (((ne = u.flip) == null ? void 0 : ne.index) || 0) + 1
                  , ge = I[ue];
                if (ge && (!(y === "alignment" ? A !== On(ge) : !1) || J.every(V => V.overflows[0] > 0 && On(V.placement) === A)))
                    return {
                        data: {
                            index: ue,
                            overflows: J
                        },
                        reset: {
                            placement: ge
                        }
                    };
                let re = (Z = J.filter(Q => Q.overflows[0] <= 0).sort( (Q, V) => Q.overflows[1] - V.overflows[1])[0]) == null ? void 0 : Z.placement;
                if (!re)
                    switch (v) {
                    case "bestFit":
                        {
                            var le;
                            const Q = (le = J.filter(V => {
                                if ($) {
                                    const H = On(V.placement);
                                    return H === A || H === "y"
                                }
                                return !0
                            }
                            ).map(V => [V.placement, V.overflows.filter(H => H > 0).reduce( (H, G) => H + G, 0)]).sort( (V, H) => V[1] - H[1])[0]) == null ? void 0 : le[0];
                            Q && (re = Q);
                            break
                        }
                    case "initialPlacement":
                        re = d;
                        break
                    }
                if (a !== re)
                    return {
                        reset: {
                            placement: re
                        }
                    }
            }
            return {}
        }
    }
};
function ng(e, n) {
    return {
        top: e.top - n.height,
        right: e.right - n.width,
        bottom: e.bottom - n.height,
        left: e.left - n.width
    }
}
function rg(e) {
    return AE.some(n => e[n] >= 0)
}
const $E = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(n) {
            const {rects: o} = n
              , {strategy: i="referenceHidden", ...a} = Jn(e, n);
            switch (i) {
            case "referenceHidden":
                {
                    const u = await rs(n, {
                        ...a,
                        elementContext: "reference"
                    })
                      , c = ng(u, o.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: c,
                            referenceHidden: rg(c)
                        }
                    }
                }
            case "escaped":
                {
                    const u = await rs(n, {
                        ...a,
                        altBoundary: !0
                    })
                      , c = ng(u, o.floating);
                    return {
                        data: {
                            escapedOffsets: c,
                            escaped: rg(c)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , ny = new Set(["left", "top"]);
async function HE(e, n) {
    const {placement: o, platform: i, elements: a} = e
      , u = await (i.isRTL == null ? void 0 : i.isRTL(a.floating))
      , c = er(o)
      , d = ni(o)
      , p = On(o) === "y"
      , h = ny.has(c) ? -1 : 1
      , g = u && p ? -1 : 1
      , y = Jn(n, e);
    let {mainAxis: x, crossAxis: v, alignmentAxis: T} = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: y.mainAxis || 0,
        crossAxis: y.crossAxis || 0,
        alignmentAxis: y.alignmentAxis
    };
    return d && typeof T == "number" && (v = d === "end" ? T * -1 : T),
    p ? {
        x: v * g,
        y: x * h
    } : {
        x: x * h,
        y: v * g
    }
}
const UE = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(n) {
            var o, i;
            const {x: a, y: u, placement: c, middlewareData: d} = n
              , p = await HE(n, e);
            return c === ((o = d.offset) == null ? void 0 : o.placement) && (i = d.arrow) != null && i.alignmentOffset ? {} : {
                x: a + p.x,
                y: u + p.y,
                data: {
                    ...p,
                    placement: c
                }
            }
        }
    }
}
  , WE = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(n) {
            const {x: o, y: i, placement: a} = n
              , {mainAxis: u=!0, crossAxis: c=!1, limiter: d={
                fn: E => {
                    let {x: P, y: A} = E;
                    return {
                        x: P,
                        y: A
                    }
                }
            }, ...p} = Jn(e, n)
              , h = {
                x: o,
                y: i
            }
              , g = await rs(n, p)
              , y = On(er(a))
              , x = Zd(y);
            let v = h[x]
              , T = h[y];
            if (u) {
                const E = x === "y" ? "top" : "left"
                  , P = x === "y" ? "bottom" : "right"
                  , A = v + g[E]
                  , R = v - g[P];
                v = rd(A, v, R)
            }
            if (c) {
                const E = y === "y" ? "top" : "left"
                  , P = y === "y" ? "bottom" : "right"
                  , A = T + g[E]
                  , R = T - g[P];
                T = rd(A, T, R)
            }
            const C = d.fn({
                ...n,
                [x]: v,
                [y]: T
            });
            return {
                ...C,
                data: {
                    x: C.x - o,
                    y: C.y - i,
                    enabled: {
                        [x]: u,
                        [y]: c
                    }
                }
            }
        }
    }
}
  , KE = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(n) {
            const {x: o, y: i, placement: a, rects: u, middlewareData: c} = n
              , {offset: d=0, mainAxis: p=!0, crossAxis: h=!0} = Jn(e, n)
              , g = {
                x: o,
                y: i
            }
              , y = On(a)
              , x = Zd(y);
            let v = g[x]
              , T = g[y];
            const C = Jn(d, n)
              , E = typeof C == "number" ? {
                mainAxis: C,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...C
            };
            if (p) {
                const R = x === "y" ? "height" : "width"
                  , O = u.reference[x] - u.floating[R] + E.mainAxis
                  , j = u.reference[x] + u.reference[R] - E.mainAxis;
                v < O ? v = O : v > j && (v = j)
            }
            if (h) {
                var P, A;
                const R = x === "y" ? "width" : "height"
                  , O = ny.has(er(a))
                  , j = u.reference[y] - u.floating[R] + (O && ((P = c.offset) == null ? void 0 : P[y]) || 0) + (O ? 0 : E.crossAxis)
                  , $ = u.reference[y] + u.reference[R] + (O ? 0 : ((A = c.offset) == null ? void 0 : A[y]) || 0) - (O ? E.crossAxis : 0);
                T < j ? T = j : T > $ && (T = $)
            }
            return {
                [x]: v,
                [y]: T
            }
        }
    }
}
  , GE = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(n) {
            var o, i;
            const {placement: a, rects: u, platform: c, elements: d} = n
              , {apply: p= () => {}
            , ...h} = Jn(e, n)
              , g = await rs(n, h)
              , y = er(a)
              , x = ni(a)
              , v = On(a) === "y"
              , {width: T, height: C} = u.floating;
            let E, P;
            y === "top" || y === "bottom" ? (E = y,
            P = x === (await (c.isRTL == null ? void 0 : c.isRTL(d.floating)) ? "start" : "end") ? "left" : "right") : (P = y,
            E = x === "end" ? "top" : "bottom");
            const A = C - g.top - g.bottom
              , R = T - g.left - g.right
              , O = Dr(C - g[E], A)
              , j = Dr(T - g[P], R)
              , $ = !n.middlewareData.shift;
            let I = O
              , U = j;
            if ((o = n.middlewareData.shift) != null && o.enabled.x && (U = R),
            (i = n.middlewareData.shift) != null && i.enabled.y && (I = A),
            $ && !x) {
                const J = Gt(g.left, 0)
                  , ne = Gt(g.right, 0)
                  , Z = Gt(g.top, 0)
                  , le = Gt(g.bottom, 0);
                v ? U = T - 2 * (J !== 0 || ne !== 0 ? J + ne : Gt(g.left, g.right)) : I = C - 2 * (Z !== 0 || le !== 0 ? Z + le : Gt(g.top, g.bottom))
            }
            await p({
                ...n,
                availableWidth: U,
                availableHeight: I
            });
            const oe = await c.getDimensions(d.floating);
            return T !== oe.width || C !== oe.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function vl() {
    return typeof window < "u"
}
function ri(e) {
    return ry(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function Xt(e) {
    var n;
    return (e == null || (n = e.ownerDocument) == null ? void 0 : n.defaultView) || window
}
function zn(e) {
    var n;
    return (n = (ry(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : n.documentElement
}
function ry(e) {
    return vl() ? e instanceof Node || e instanceof Xt(e).Node : !1
}
function yn(e) {
    return vl() ? e instanceof Element || e instanceof Xt(e).Element : !1
}
function Bn(e) {
    return vl() ? e instanceof HTMLElement || e instanceof Xt(e).HTMLElement : !1
}
function og(e) {
    return !vl() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Xt(e).ShadowRoot
}
const YE = new Set(["inline", "contents"]);
function fs(e) {
    const {overflow: n, overflowX: o, overflowY: i, display: a} = xn(e);
    return /auto|scroll|overlay|hidden|clip/.test(n + i + o) && !YE.has(a)
}
const XE = new Set(["table", "td", "th"]);
function QE(e) {
    return XE.has(ri(e))
}
const ZE = [":popover-open", ":modal"];
function yl(e) {
    return ZE.some(n => {
        try {
            return e.matches(n)
        } catch {
            return !1
        }
    }
    )
}
const qE = ["transform", "translate", "scale", "rotate", "perspective"]
  , JE = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , eT = ["paint", "layout", "strict", "content"];
function ef(e) {
    const n = tf()
      , o = yn(e) ? xn(e) : e;
    return qE.some(i => o[i] ? o[i] !== "none" : !1) || (o.containerType ? o.containerType !== "normal" : !1) || !n && (o.backdropFilter ? o.backdropFilter !== "none" : !1) || !n && (o.filter ? o.filter !== "none" : !1) || JE.some(i => (o.willChange || "").includes(i)) || eT.some(i => (o.contain || "").includes(i))
}
function tT(e) {
    let n = Mr(e);
    for (; Bn(n) && !Zo(n); ) {
        if (ef(n))
            return n;
        if (yl(n))
            return null;
        n = Mr(n)
    }
    return null
}
function tf() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const nT = new Set(["html", "body", "#document"]);
function Zo(e) {
    return nT.has(ri(e))
}
function xn(e) {
    return Xt(e).getComputedStyle(e)
}
function xl(e) {
    return yn(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function Mr(e) {
    if (ri(e) === "html")
        return e;
    const n = e.assignedSlot || e.parentNode || og(e) && e.host || zn(e);
    return og(n) ? n.host : n
}
function oy(e) {
    const n = Mr(e);
    return Zo(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : Bn(n) && fs(n) ? n : oy(n)
}
function os(e, n, o) {
    var i;
    n === void 0 && (n = []),
    o === void 0 && (o = !0);
    const a = oy(e)
      , u = a === ((i = e.ownerDocument) == null ? void 0 : i.body)
      , c = Xt(a);
    if (u) {
        const d = id(c);
        return n.concat(c, c.visualViewport || [], fs(a) ? a : [], d && o ? os(d) : [])
    }
    return n.concat(a, os(a, [], o))
}
function id(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function iy(e) {
    const n = xn(e);
    let o = parseFloat(n.width) || 0
      , i = parseFloat(n.height) || 0;
    const a = Bn(e)
      , u = a ? e.offsetWidth : o
      , c = a ? e.offsetHeight : i
      , d = ol(o) !== u || ol(i) !== c;
    return d && (o = u,
    i = c),
    {
        width: o,
        height: i,
        $: d
    }
}
function nf(e) {
    return yn(e) ? e : e.contextElement
}
function Go(e) {
    const n = nf(e);
    if (!Bn(n))
        return _n(1);
    const o = n.getBoundingClientRect()
      , {width: i, height: a, $: u} = iy(n);
    let c = (u ? ol(o.width) : o.width) / i
      , d = (u ? ol(o.height) : o.height) / a;
    return (!c || !Number.isFinite(c)) && (c = 1),
    (!d || !Number.isFinite(d)) && (d = 1),
    {
        x: c,
        y: d
    }
}
const rT = _n(0);
function sy(e) {
    const n = Xt(e);
    return !tf() || !n.visualViewport ? rT : {
        x: n.visualViewport.offsetLeft,
        y: n.visualViewport.offsetTop
    }
}
function oT(e, n, o) {
    return n === void 0 && (n = !1),
    !o || n && o !== Xt(e) ? !1 : n
}
function ao(e, n, o, i) {
    n === void 0 && (n = !1),
    o === void 0 && (o = !1);
    const a = e.getBoundingClientRect()
      , u = nf(e);
    let c = _n(1);
    n && (i ? yn(i) && (c = Go(i)) : c = Go(e));
    const d = oT(u, o, i) ? sy(u) : _n(0);
    let p = (a.left + d.x) / c.x
      , h = (a.top + d.y) / c.y
      , g = a.width / c.x
      , y = a.height / c.y;
    if (u) {
        const x = Xt(u)
          , v = i && yn(i) ? Xt(i) : i;
        let T = x
          , C = id(T);
        for (; C && i && v !== T; ) {
            const E = Go(C)
              , P = C.getBoundingClientRect()
              , A = xn(C)
              , R = P.left + (C.clientLeft + parseFloat(A.paddingLeft)) * E.x
              , O = P.top + (C.clientTop + parseFloat(A.paddingTop)) * E.y;
            p *= E.x,
            h *= E.y,
            g *= E.x,
            y *= E.y,
            p += R,
            h += O,
            T = Xt(C),
            C = id(T)
        }
    }
    return sl({
        width: g,
        height: y,
        x: p,
        y: h
    })
}
function rf(e, n) {
    const o = xl(e).scrollLeft;
    return n ? n.left + o : ao(zn(e)).left + o
}
function ay(e, n, o) {
    o === void 0 && (o = !1);
    const i = e.getBoundingClientRect()
      , a = i.left + n.scrollLeft - (o ? 0 : rf(e, i))
      , u = i.top + n.scrollTop;
    return {
        x: a,
        y: u
    }
}
function iT(e) {
    let {elements: n, rect: o, offsetParent: i, strategy: a} = e;
    const u = a === "fixed"
      , c = zn(i)
      , d = n ? yl(n.floating) : !1;
    if (i === c || d && u)
        return o;
    let p = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , h = _n(1);
    const g = _n(0)
      , y = Bn(i);
    if ((y || !y && !u) && ((ri(i) !== "body" || fs(c)) && (p = xl(i)),
    Bn(i))) {
        const v = ao(i);
        h = Go(i),
        g.x = v.x + i.clientLeft,
        g.y = v.y + i.clientTop
    }
    const x = c && !y && !u ? ay(c, p, !0) : _n(0);
    return {
        width: o.width * h.x,
        height: o.height * h.y,
        x: o.x * h.x - p.scrollLeft * h.x + g.x + x.x,
        y: o.y * h.y - p.scrollTop * h.y + g.y + x.y
    }
}
function sT(e) {
    return Array.from(e.getClientRects())
}
function aT(e) {
    const n = zn(e)
      , o = xl(e)
      , i = e.ownerDocument.body
      , a = Gt(n.scrollWidth, n.clientWidth, i.scrollWidth, i.clientWidth)
      , u = Gt(n.scrollHeight, n.clientHeight, i.scrollHeight, i.clientHeight);
    let c = -o.scrollLeft + rf(e);
    const d = -o.scrollTop;
    return xn(i).direction === "rtl" && (c += Gt(n.clientWidth, i.clientWidth) - a),
    {
        width: a,
        height: u,
        x: c,
        y: d
    }
}
function lT(e, n) {
    const o = Xt(e)
      , i = zn(e)
      , a = o.visualViewport;
    let u = i.clientWidth
      , c = i.clientHeight
      , d = 0
      , p = 0;
    if (a) {
        u = a.width,
        c = a.height;
        const h = tf();
        (!h || h && n === "fixed") && (d = a.offsetLeft,
        p = a.offsetTop)
    }
    return {
        width: u,
        height: c,
        x: d,
        y: p
    }
}
const uT = new Set(["absolute", "fixed"]);
function cT(e, n) {
    const o = ao(e, !0, n === "fixed")
      , i = o.top + e.clientTop
      , a = o.left + e.clientLeft
      , u = Bn(e) ? Go(e) : _n(1)
      , c = e.clientWidth * u.x
      , d = e.clientHeight * u.y
      , p = a * u.x
      , h = i * u.y;
    return {
        width: c,
        height: d,
        x: p,
        y: h
    }
}
function ig(e, n, o) {
    let i;
    if (n === "viewport")
        i = lT(e, o);
    else if (n === "document")
        i = aT(zn(e));
    else if (yn(n))
        i = cT(n, o);
    else {
        const a = sy(e);
        i = {
            x: n.x - a.x,
            y: n.y - a.y,
            width: n.width,
            height: n.height
        }
    }
    return sl(i)
}
function ly(e, n) {
    const o = Mr(e);
    return o === n || !yn(o) || Zo(o) ? !1 : xn(o).position === "fixed" || ly(o, n)
}
function dT(e, n) {
    const o = n.get(e);
    if (o)
        return o;
    let i = os(e, [], !1).filter(d => yn(d) && ri(d) !== "body")
      , a = null;
    const u = xn(e).position === "fixed";
    let c = u ? Mr(e) : e;
    for (; yn(c) && !Zo(c); ) {
        const d = xn(c)
          , p = ef(c);
        !p && d.position === "fixed" && (a = null),
        (u ? !p && !a : !p && d.position === "static" && !!a && uT.has(a.position) || fs(c) && !p && ly(e, c)) ? i = i.filter(g => g !== c) : a = d,
        c = Mr(c)
    }
    return n.set(e, i),
    i
}
function fT(e) {
    let {element: n, boundary: o, rootBoundary: i, strategy: a} = e;
    const c = [...o === "clippingAncestors" ? yl(n) ? [] : dT(n, this._c) : [].concat(o), i]
      , d = c[0]
      , p = c.reduce( (h, g) => {
        const y = ig(n, g, a);
        return h.top = Gt(y.top, h.top),
        h.right = Dr(y.right, h.right),
        h.bottom = Dr(y.bottom, h.bottom),
        h.left = Gt(y.left, h.left),
        h
    }
    , ig(n, d, a));
    return {
        width: p.right - p.left,
        height: p.bottom - p.top,
        x: p.left,
        y: p.top
    }
}
function pT(e) {
    const {width: n, height: o} = iy(e);
    return {
        width: n,
        height: o
    }
}
function hT(e, n, o) {
    const i = Bn(n)
      , a = zn(n)
      , u = o === "fixed"
      , c = ao(e, !0, u, n);
    let d = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const p = _n(0);
    function h() {
        p.x = rf(a)
    }
    if (i || !i && !u)
        if ((ri(n) !== "body" || fs(a)) && (d = xl(n)),
        i) {
            const v = ao(n, !0, u, n);
            p.x = v.x + n.clientLeft,
            p.y = v.y + n.clientTop
        } else
            a && h();
    u && !i && a && h();
    const g = a && !i && !u ? ay(a, d) : _n(0)
      , y = c.left + d.scrollLeft - p.x - g.x
      , x = c.top + d.scrollTop - p.y - g.y;
    return {
        x: y,
        y: x,
        width: c.width,
        height: c.height
    }
}
function Pc(e) {
    return xn(e).position === "static"
}
function sg(e, n) {
    if (!Bn(e) || xn(e).position === "fixed")
        return null;
    if (n)
        return n(e);
    let o = e.offsetParent;
    return zn(e) === o && (o = o.ownerDocument.body),
    o
}
function uy(e, n) {
    const o = Xt(e);
    if (yl(e))
        return o;
    if (!Bn(e)) {
        let a = Mr(e);
        for (; a && !Zo(a); ) {
            if (yn(a) && !Pc(a))
                return a;
            a = Mr(a)
        }
        return o
    }
    let i = sg(e, n);
    for (; i && QE(i) && Pc(i); )
        i = sg(i, n);
    return i && Zo(i) && Pc(i) && !ef(i) ? o : i || tT(e) || o
}
const mT = async function(e) {
    const n = this.getOffsetParent || uy
      , o = this.getDimensions
      , i = await o(e.floating);
    return {
        reference: hT(e.reference, await n(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: i.width,
            height: i.height
        }
    }
};
function gT(e) {
    return xn(e).direction === "rtl"
}
const vT = {
    convertOffsetParentRelativeRectToViewportRelativeRect: iT,
    getDocumentElement: zn,
    getClippingRect: fT,
    getOffsetParent: uy,
    getElementRects: mT,
    getClientRects: sT,
    getDimensions: pT,
    getScale: Go,
    isElement: yn,
    isRTL: gT
};
function cy(e, n) {
    return e.x === n.x && e.y === n.y && e.width === n.width && e.height === n.height
}
function yT(e, n) {
    let o = null, i;
    const a = zn(e);
    function u() {
        var d;
        clearTimeout(i),
        (d = o) == null || d.disconnect(),
        o = null
    }
    function c(d, p) {
        d === void 0 && (d = !1),
        p === void 0 && (p = 1),
        u();
        const h = e.getBoundingClientRect()
          , {left: g, top: y, width: x, height: v} = h;
        if (d || n(),
        !x || !v)
            return;
        const T = Da(y)
          , C = Da(a.clientWidth - (g + x))
          , E = Da(a.clientHeight - (y + v))
          , P = Da(g)
          , R = {
            rootMargin: -T + "px " + -C + "px " + -E + "px " + -P + "px",
            threshold: Gt(0, Dr(1, p)) || 1
        };
        let O = !0;
        function j($) {
            const I = $[0].intersectionRatio;
            if (I !== p) {
                if (!O)
                    return c();
                I ? c(!1, I) : i = setTimeout( () => {
                    c(!1, 1e-7)
                }
                , 1e3)
            }
            I === 1 && !cy(h, e.getBoundingClientRect()) && c(),
            O = !1
        }
        try {
            o = new IntersectionObserver(j,{
                ...R,
                root: a.ownerDocument
            })
        } catch {
            o = new IntersectionObserver(j,R)
        }
        o.observe(e)
    }
    return c(!0),
    u
}
function xT(e, n, o, i) {
    i === void 0 && (i = {});
    const {ancestorScroll: a=!0, ancestorResize: u=!0, elementResize: c=typeof ResizeObserver == "function", layoutShift: d=typeof IntersectionObserver == "function", animationFrame: p=!1} = i
      , h = nf(e)
      , g = a || u ? [...h ? os(h) : [], ...os(n)] : [];
    g.forEach(P => {
        a && P.addEventListener("scroll", o, {
            passive: !0
        }),
        u && P.addEventListener("resize", o)
    }
    );
    const y = h && d ? yT(h, o) : null;
    let x = -1
      , v = null;
    c && (v = new ResizeObserver(P => {
        let[A] = P;
        A && A.target === h && v && (v.unobserve(n),
        cancelAnimationFrame(x),
        x = requestAnimationFrame( () => {
            var R;
            (R = v) == null || R.observe(n)
        }
        )),
        o()
    }
    ),
    h && !p && v.observe(h),
    v.observe(n));
    let T, C = p ? ao(e) : null;
    p && E();
    function E() {
        const P = ao(e);
        C && !cy(C, P) && o(),
        C = P,
        T = requestAnimationFrame(E)
    }
    return o(),
    () => {
        var P;
        g.forEach(A => {
            a && A.removeEventListener("scroll", o),
            u && A.removeEventListener("resize", o)
        }
        ),
        y?.(),
        (P = v) == null || P.disconnect(),
        v = null,
        p && cancelAnimationFrame(T)
    }
}
const wT = UE
  , ST = WE
  , bT = zE
  , CT = GE
  , ET = $E
  , ag = BE
  , TT = KE
  , PT = (e, n, o) => {
    const i = new Map
      , a = {
        platform: vT,
        ...o
    }
      , u = {
        ...a.platform,
        _c: i
    };
    return FE(e, n, {
        ...a,
        platform: u
    })
}
;
var kT = typeof document < "u"
  , AT = function() {}
  , Ha = kT ? w.useLayoutEffect : AT;
function al(e, n) {
    if (e === n)
        return !0;
    if (typeof e != typeof n)
        return !1;
    if (typeof e == "function" && e.toString() === n.toString())
        return !0;
    let o, i, a;
    if (e && n && typeof e == "object") {
        if (Array.isArray(e)) {
            if (o = e.length,
            o !== n.length)
                return !1;
            for (i = o; i-- !== 0; )
                if (!al(e[i], n[i]))
                    return !1;
            return !0
        }
        if (a = Object.keys(e),
        o = a.length,
        o !== Object.keys(n).length)
            return !1;
        for (i = o; i-- !== 0; )
            if (!{}.hasOwnProperty.call(n, a[i]))
                return !1;
        for (i = o; i-- !== 0; ) {
            const u = a[i];
            if (!(u === "_owner" && e.$$typeof) && !al(e[u], n[u]))
                return !1
        }
        return !0
    }
    return e !== e && n !== n
}
function dy(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function lg(e, n) {
    const o = dy(e);
    return Math.round(n * o) / o
}
function kc(e) {
    const n = w.useRef(e);
    return Ha( () => {
        n.current = e
    }
    ),
    n
}
function RT(e) {
    e === void 0 && (e = {});
    const {placement: n="bottom", strategy: o="absolute", middleware: i=[], platform: a, elements: {reference: u, floating: c}={}, transform: d=!0, whileElementsMounted: p, open: h} = e
      , [g,y] = w.useState({
        x: 0,
        y: 0,
        strategy: o,
        placement: n,
        middlewareData: {},
        isPositioned: !1
    })
      , [x,v] = w.useState(i);
    al(x, i) || v(i);
    const [T,C] = w.useState(null)
      , [E,P] = w.useState(null)
      , A = w.useCallback(V => {
        V !== $.current && ($.current = V,
        C(V))
    }
    , [])
      , R = w.useCallback(V => {
        V !== I.current && (I.current = V,
        P(V))
    }
    , [])
      , O = u || T
      , j = c || E
      , $ = w.useRef(null)
      , I = w.useRef(null)
      , U = w.useRef(g)
      , oe = p != null
      , J = kc(p)
      , ne = kc(a)
      , Z = kc(h)
      , le = w.useCallback( () => {
        if (!$.current || !I.current)
            return;
        const V = {
            placement: n,
            strategy: o,
            middleware: x
        };
        ne.current && (V.platform = ne.current),
        PT($.current, I.current, V).then(H => {
            const G = {
                ...H,
                isPositioned: Z.current !== !1
            };
            ue.current && !al(U.current, G) && (U.current = G,
            ds.flushSync( () => {
                y(G)
            }
            ))
        }
        )
    }
    , [x, n, o, ne, Z]);
    Ha( () => {
        h === !1 && U.current.isPositioned && (U.current.isPositioned = !1,
        y(V => ({
            ...V,
            isPositioned: !1
        })))
    }
    , [h]);
    const ue = w.useRef(!1);
    Ha( () => (ue.current = !0,
    () => {
        ue.current = !1
    }
    ), []),
    Ha( () => {
        if (O && ($.current = O),
        j && (I.current = j),
        O && j) {
            if (J.current)
                return J.current(O, j, le);
            le()
        }
    }
    , [O, j, le, J, oe]);
    const ge = w.useMemo( () => ({
        reference: $,
        floating: I,
        setReference: A,
        setFloating: R
    }), [A, R])
      , re = w.useMemo( () => ({
        reference: O,
        floating: j
    }), [O, j])
      , Q = w.useMemo( () => {
        const V = {
            position: o,
            left: 0,
            top: 0
        };
        if (!re.floating)
            return V;
        const H = lg(re.floating, g.x)
          , G = lg(re.floating, g.y);
        return d ? {
            ...V,
            transform: "translate(" + H + "px, " + G + "px)",
            ...dy(re.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: o,
            left: H,
            top: G
        }
    }
    , [o, d, re.floating, g.x, g.y]);
    return w.useMemo( () => ({
        ...g,
        update: le,
        refs: ge,
        elements: re,
        floatingStyles: Q
    }), [g, le, ge, re, Q])
}
const NT = e => {
    function n(o) {
        return {}.hasOwnProperty.call(o, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(o) {
            const {element: i, padding: a} = typeof e == "function" ? e(o) : e;
            return i && n(i) ? i.current != null ? ag({
                element: i.current,
                padding: a
            }).fn(o) : {} : i ? ag({
                element: i,
                padding: a
            }).fn(o) : {}
        }
    }
}
  , DT = (e, n) => ({
    ...wT(e),
    options: [e, n]
})
  , MT = (e, n) => ({
    ...ST(e),
    options: [e, n]
})
  , jT = (e, n) => ({
    ...TT(e),
    options: [e, n]
})
  , OT = (e, n) => ({
    ...bT(e),
    options: [e, n]
})
  , _T = (e, n) => ({
    ...CT(e),
    options: [e, n]
})
  , IT = (e, n) => ({
    ...ET(e),
    options: [e, n]
})
  , LT = (e, n) => ({
    ...NT(e),
    options: [e, n]
});
var VT = "Arrow"
  , fy = w.forwardRef( (e, n) => {
    const {children: o, width: i=10, height: a=5, ...u} = e;
    return S.jsx(Ne.svg, {
        ...u,
        ref: n,
        width: i,
        height: a,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? o : S.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
fy.displayName = VT;
var FT = fy;
function wl(e) {
    const [n,o] = w.useState(void 0);
    return Nt( () => {
        if (e) {
            o({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const i = new ResizeObserver(a => {
                if (!Array.isArray(a) || !a.length)
                    return;
                const u = a[0];
                let c, d;
                if ("borderBoxSize"in u) {
                    const p = u.borderBoxSize
                      , h = Array.isArray(p) ? p[0] : p;
                    c = h.inlineSize,
                    d = h.blockSize
                } else
                    c = e.offsetWidth,
                    d = e.offsetHeight;
                o({
                    width: c,
                    height: d
                })
            }
            );
            return i.observe(e, {
                box: "border-box"
            }),
            () => i.unobserve(e)
        } else
            o(void 0)
    }
    , [e]),
    n
}
var of = "Popper"
  , [py,Sl] = wn(of)
  , [BT,hy] = py(of)
  , my = e => {
    const {__scopePopper: n, children: o} = e
      , [i,a] = w.useState(null);
    return S.jsx(BT, {
        scope: n,
        anchor: i,
        onAnchorChange: a,
        children: o
    })
}
;
my.displayName = of;
var gy = "PopperAnchor"
  , vy = w.forwardRef( (e, n) => {
    const {__scopePopper: o, virtualRef: i, ...a} = e
      , u = hy(gy, o)
      , c = w.useRef(null)
      , d = _e(n, c);
    return w.useEffect( () => {
        u.onAnchorChange(i?.current || c.current)
    }
    ),
    i ? null : S.jsx(Ne.div, {
        ...a,
        ref: d
    })
}
);
vy.displayName = gy;
var sf = "PopperContent"
  , [zT,$T] = py(sf)
  , yy = w.forwardRef( (e, n) => {
    const {__scopePopper: o, side: i="bottom", sideOffset: a=0, align: u="center", alignOffset: c=0, arrowPadding: d=0, avoidCollisions: p=!0, collisionBoundary: h=[], collisionPadding: g=0, sticky: y="partial", hideWhenDetached: x=!1, updatePositionStrategy: v="optimized", onPlaced: T, ...C} = e
      , E = hy(sf, o)
      , [P,A] = w.useState(null)
      , R = _e(n, F => A(F))
      , [O,j] = w.useState(null)
      , $ = wl(O)
      , I = $?.width ?? 0
      , U = $?.height ?? 0
      , oe = i + (u !== "center" ? "-" + u : "")
      , J = typeof g == "number" ? g : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...g
    }
      , ne = Array.isArray(h) ? h : [h]
      , Z = ne.length > 0
      , le = {
        padding: J,
        boundary: ne.filter(UT),
        altBoundary: Z
    }
      , {refs: ue, floatingStyles: ge, placement: re, isPositioned: Q, middlewareData: V} = RT({
        strategy: "fixed",
        placement: oe,
        whileElementsMounted: (...F) => xT(...F, {
            animationFrame: v === "always"
        }),
        elements: {
            reference: E.anchor
        },
        middleware: [DT({
            mainAxis: a + U,
            alignmentAxis: c
        }), p && MT({
            mainAxis: !0,
            crossAxis: !1,
            limiter: y === "partial" ? jT() : void 0,
            ...le
        }), p && OT({
            ...le
        }), _T({
            ...le,
            apply: ({elements: F, rects: ee, availableWidth: he, availableHeight: ce}) => {
                const {width: Te, height: Me} = ee.reference
                  , Fe = F.floating.style;
                Fe.setProperty("--radix-popper-available-width", `${he}px`),
                Fe.setProperty("--radix-popper-available-height", `${ce}px`),
                Fe.setProperty("--radix-popper-anchor-width", `${Te}px`),
                Fe.setProperty("--radix-popper-anchor-height", `${Me}px`)
            }
        }), O && LT({
            element: O,
            padding: d
        }), WT({
            arrowWidth: I,
            arrowHeight: U
        }), x && IT({
            strategy: "referenceHidden",
            ...le
        })]
    })
      , [H,G] = Sy(re)
      , D = Fn(T);
    Nt( () => {
        Q && D?.()
    }
    , [Q, D]);
    const z = V.arrow?.x
      , se = V.arrow?.y
      , ae = V.arrow?.centerOffset !== 0
      , [pe,K] = w.useState();
    return Nt( () => {
        P && K(window.getComputedStyle(P).zIndex)
    }
    , [P]),
    S.jsx("div", {
        ref: ue.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...ge,
            transform: Q ? ge.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: pe,
            "--radix-popper-transform-origin": [V.transformOrigin?.x, V.transformOrigin?.y].join(" "),
            ...V.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: S.jsx(zT, {
            scope: o,
            placedSide: H,
            onArrowChange: j,
            arrowX: z,
            arrowY: se,
            shouldHideArrow: ae,
            children: S.jsx(Ne.div, {
                "data-side": H,
                "data-align": G,
                ...C,
                ref: R,
                style: {
                    ...C.style,
                    animation: Q ? void 0 : "none"
                }
            })
        })
    })
}
);
yy.displayName = sf;
var xy = "PopperArrow"
  , HT = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , wy = w.forwardRef(function(n, o) {
    const {__scopePopper: i, ...a} = n
      , u = $T(xy, i)
      , c = HT[u.placedSide];
    return S.jsx("span", {
        ref: u.onArrowChange,
        style: {
            position: "absolute",
            left: u.arrowX,
            top: u.arrowY,
            [c]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[u.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[u.placedSide],
            visibility: u.shouldHideArrow ? "hidden" : void 0
        },
        children: S.jsx(FT, {
            ...a,
            ref: o,
            style: {
                ...a.style,
                display: "block"
            }
        })
    })
});
wy.displayName = xy;
function UT(e) {
    return e !== null
}
var WT = e => ({
    name: "transformOrigin",
    options: e,
    fn(n) {
        const {placement: o, rects: i, middlewareData: a} = n
          , c = a.arrow?.centerOffset !== 0
          , d = c ? 0 : e.arrowWidth
          , p = c ? 0 : e.arrowHeight
          , [h,g] = Sy(o)
          , y = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[g]
          , x = (a.arrow?.x ?? 0) + d / 2
          , v = (a.arrow?.y ?? 0) + p / 2;
        let T = ""
          , C = "";
        return h === "bottom" ? (T = c ? y : `${x}px`,
        C = `${-p}px`) : h === "top" ? (T = c ? y : `${x}px`,
        C = `${i.floating.height + p}px`) : h === "right" ? (T = `${-p}px`,
        C = c ? y : `${v}px`) : h === "left" && (T = `${i.floating.width + p}px`,
        C = c ? y : `${v}px`),
        {
            data: {
                x: T,
                y: C
            }
        }
    }
});
function Sy(e) {
    const [n,o="center"] = e.split("-");
    return [n, o]
}
var by = my
  , Cy = vy
  , Ey = yy
  , Ty = wy
  , KT = "Portal"
  , af = w.forwardRef( (e, n) => {
    const {container: o, ...i} = e
      , [a,u] = w.useState(!1);
    Nt( () => u(!0), []);
    const c = o || a && globalThis?.document?.body;
    return c ? Yv.createPortal(S.jsx(Ne.div, {
        ...i,
        ref: n
    }), c) : null
}
);
af.displayName = KT;
function jr({prop: e, defaultProp: n, onChange: o= () => {}
}) {
    const [i,a] = GT({
        defaultProp: n,
        onChange: o
    })
      , u = e !== void 0
      , c = u ? e : i
      , d = Fn(o)
      , p = w.useCallback(h => {
        if (u) {
            const y = typeof h == "function" ? h(e) : h;
            y !== e && d(y)
        } else
            a(h)
    }
    , [u, e, a, d]);
    return [c, p]
}
function GT({defaultProp: e, onChange: n}) {
    const o = w.useState(e)
      , [i] = o
      , a = w.useRef(i)
      , u = Fn(n);
    return w.useEffect( () => {
        a.current !== i && (u(i),
        a.current = i)
    }
    , [i, a, u]),
    o
}
function bl(e) {
    const n = w.useRef({
        value: e,
        previous: e
    });
    return w.useMemo( () => (n.current.value !== e && (n.current.previous = n.current.value,
    n.current.value = e),
    n.current.previous), [e])
}
var YT = "VisuallyHidden"
  , lf = w.forwardRef( (e, n) => S.jsx(Ne.span, {
    ...e,
    ref: n,
    style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
    }
}));
lf.displayName = YT;
var XT = lf
  , QT = function(e) {
    if (typeof document > "u")
        return null;
    var n = Array.isArray(e) ? e[0] : e;
    return n.ownerDocument.body
}
  , Io = new WeakMap
  , Ma = new WeakMap
  , ja = {}
  , Ac = 0
  , Py = function(e) {
    return e && (e.host || Py(e.parentNode))
}
  , ZT = function(e, n) {
    return n.map(function(o) {
        if (e.contains(o))
            return o;
        var i = Py(o);
        return i && e.contains(i) ? i : (console.error("aria-hidden", o, "in not contained inside", e, ". Doing nothing"),
        null)
    }).filter(function(o) {
        return !!o
    })
}
  , qT = function(e, n, o, i) {
    var a = ZT(n, Array.isArray(e) ? e : [e]);
    ja[o] || (ja[o] = new WeakMap);
    var u = ja[o]
      , c = []
      , d = new Set
      , p = new Set(a)
      , h = function(y) {
        !y || d.has(y) || (d.add(y),
        h(y.parentNode))
    };
    a.forEach(h);
    var g = function(y) {
        !y || p.has(y) || Array.prototype.forEach.call(y.children, function(x) {
            if (d.has(x))
                g(x);
            else
                try {
                    var v = x.getAttribute(i)
                      , T = v !== null && v !== "false"
                      , C = (Io.get(x) || 0) + 1
                      , E = (u.get(x) || 0) + 1;
                    Io.set(x, C),
                    u.set(x, E),
                    c.push(x),
                    C === 1 && T && Ma.set(x, !0),
                    E === 1 && x.setAttribute(o, "true"),
                    T || x.setAttribute(i, "true")
                } catch (P) {
                    console.error("aria-hidden: cannot operate on ", x, P)
                }
        })
    };
    return g(n),
    d.clear(),
    Ac++,
    function() {
        c.forEach(function(y) {
            var x = Io.get(y) - 1
              , v = u.get(y) - 1;
            Io.set(y, x),
            u.set(y, v),
            x || (Ma.has(y) || y.removeAttribute(i),
            Ma.delete(y)),
            v || y.removeAttribute(o)
        }),
        Ac--,
        Ac || (Io = new WeakMap,
        Io = new WeakMap,
        Ma = new WeakMap,
        ja = {})
    }
}
  , ky = function(e, n, o) {
    o === void 0 && (o = "data-aria-hidden");
    var i = Array.from(Array.isArray(e) ? e : [e])
      , a = QT(e);
    return a ? (i.push.apply(i, Array.from(a.querySelectorAll("[aria-live], script"))),
    qT(i, a, o, "aria-hidden")) : function() {
        return null
    }
}
  , jn = function() {
    return jn = Object.assign || function(n) {
        for (var o, i = 1, a = arguments.length; i < a; i++) {
            o = arguments[i];
            for (var u in o)
                Object.prototype.hasOwnProperty.call(o, u) && (n[u] = o[u])
        }
        return n
    }
    ,
    jn.apply(this, arguments)
};
function Ay(e, n) {
    var o = {};
    for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0 && (o[i] = e[i]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var a = 0, i = Object.getOwnPropertySymbols(e); a < i.length; a++)
            n.indexOf(i[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[a]) && (o[i[a]] = e[i[a]]);
    return o
}
function JT(e, n, o) {
    if (o || arguments.length === 2)
        for (var i = 0, a = n.length, u; i < a; i++)
            (u || !(i in n)) && (u || (u = Array.prototype.slice.call(n, 0, i)),
            u[i] = n[i]);
    return e.concat(u || Array.prototype.slice.call(n))
}
var Ua = "right-scroll-bar-position"
  , Wa = "width-before-scroll-bar"
  , eP = "with-scroll-bars-hidden"
  , tP = "--removed-body-scroll-bar-size";
function Rc(e, n) {
    return typeof e == "function" ? e(n) : e && (e.current = n),
    e
}
function nP(e, n) {
    var o = w.useState(function() {
        return {
            value: e,
            callback: n,
            facade: {
                get current() {
                    return o.value
                },
                set current(i) {
                    var a = o.value;
                    a !== i && (o.value = i,
                    o.callback(i, a))
                }
            }
        }
    })[0];
    return o.callback = n,
    o.facade
}
var rP = typeof window < "u" ? w.useLayoutEffect : w.useEffect
  , ug = new WeakMap;
function oP(e, n) {
    var o = nP(null, function(i) {
        return e.forEach(function(a) {
            return Rc(a, i)
        })
    });
    return rP(function() {
        var i = ug.get(o);
        if (i) {
            var a = new Set(i)
              , u = new Set(e)
              , c = o.current;
            a.forEach(function(d) {
                u.has(d) || Rc(d, null)
            }),
            u.forEach(function(d) {
                a.has(d) || Rc(d, c)
            })
        }
        ug.set(o, e)
    }, [e]),
    o
}
function iP(e) {
    return e
}
function sP(e, n) {
    n === void 0 && (n = iP);
    var o = []
      , i = !1
      , a = {
        read: function() {
            if (i)
                throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return o.length ? o[o.length - 1] : e
        },
        useMedium: function(u) {
            var c = n(u, i);
            return o.push(c),
            function() {
                o = o.filter(function(d) {
                    return d !== c
                })
            }
        },
        assignSyncMedium: function(u) {
            for (i = !0; o.length; ) {
                var c = o;
                o = [],
                c.forEach(u)
            }
            o = {
                push: function(d) {
                    return u(d)
                },
                filter: function() {
                    return o
                }
            }
        },
        assignMedium: function(u) {
            i = !0;
            var c = [];
            if (o.length) {
                var d = o;
                o = [],
                d.forEach(u),
                c = o
            }
            var p = function() {
                var g = c;
                c = [],
                g.forEach(u)
            }
              , h = function() {
                return Promise.resolve().then(p)
            };
            h(),
            o = {
                push: function(g) {
                    c.push(g),
                    h()
                },
                filter: function(g) {
                    return c = c.filter(g),
                    o
                }
            }
        }
    };
    return a
}
function aP(e) {
    e === void 0 && (e = {});
    var n = sP(null);
    return n.options = jn({
        async: !0,
        ssr: !1
    }, e),
    n
}
var Ry = function(e) {
    var n = e.sideCar
      , o = Ay(e, ["sideCar"]);
    if (!n)
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var i = n.read();
    if (!i)
        throw new Error("Sidecar medium not found");
    return w.createElement(i, jn({}, o))
};
Ry.isSideCarExport = !0;
function lP(e, n) {
    return e.useMedium(n),
    Ry
}
var Ny = aP()
  , Nc = function() {}
  , Cl = w.forwardRef(function(e, n) {
    var o = w.useRef(null)
      , i = w.useState({
        onScrollCapture: Nc,
        onWheelCapture: Nc,
        onTouchMoveCapture: Nc
    })
      , a = i[0]
      , u = i[1]
      , c = e.forwardProps
      , d = e.children
      , p = e.className
      , h = e.removeScrollBar
      , g = e.enabled
      , y = e.shards
      , x = e.sideCar
      , v = e.noRelative
      , T = e.noIsolation
      , C = e.inert
      , E = e.allowPinchZoom
      , P = e.as
      , A = P === void 0 ? "div" : P
      , R = e.gapMode
      , O = Ay(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"])
      , j = x
      , $ = oP([o, n])
      , I = jn(jn({}, O), a);
    return w.createElement(w.Fragment, null, g && w.createElement(j, {
        sideCar: Ny,
        removeScrollBar: h,
        shards: y,
        noRelative: v,
        noIsolation: T,
        inert: C,
        setCallbacks: u,
        allowPinchZoom: !!E,
        lockRef: o,
        gapMode: R
    }), c ? w.cloneElement(w.Children.only(d), jn(jn({}, I), {
        ref: $
    })) : w.createElement(A, jn({}, I, {
        className: p,
        ref: $
    }), d))
});
Cl.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
Cl.classNames = {
    fullWidth: Wa,
    zeroRight: Ua
};
var uP = function() {
    if (typeof __webpack_nonce__ < "u")
        return __webpack_nonce__
};
function cP() {
    if (!document)
        return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var n = uP();
    return n && e.setAttribute("nonce", n),
    e
}
function dP(e, n) {
    e.styleSheet ? e.styleSheet.cssText = n : e.appendChild(document.createTextNode(n))
}
function fP(e) {
    var n = document.head || document.getElementsByTagName("head")[0];
    n.appendChild(e)
}
var pP = function() {
    var e = 0
      , n = null;
    return {
        add: function(o) {
            e == 0 && (n = cP()) && (dP(n, o),
            fP(n)),
            e++
        },
        remove: function() {
            e--,
            !e && n && (n.parentNode && n.parentNode.removeChild(n),
            n = null)
        }
    }
}
  , hP = function() {
    var e = pP();
    return function(n, o) {
        w.useEffect(function() {
            return e.add(n),
            function() {
                e.remove()
            }
        }, [n && o])
    }
}
  , Dy = function() {
    var e = hP()
      , n = function(o) {
        var i = o.styles
          , a = o.dynamic;
        return e(i, a),
        null
    };
    return n
}
  , mP = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
}
  , Dc = function(e) {
    return parseInt(e || "", 10) || 0
}
  , gP = function(e) {
    var n = window.getComputedStyle(document.body)
      , o = n[e === "padding" ? "paddingLeft" : "marginLeft"]
      , i = n[e === "padding" ? "paddingTop" : "marginTop"]
      , a = n[e === "padding" ? "paddingRight" : "marginRight"];
    return [Dc(o), Dc(i), Dc(a)]
}
  , vP = function(e) {
    if (e === void 0 && (e = "margin"),
    typeof window > "u")
        return mP;
    var n = gP(e)
      , o = document.documentElement.clientWidth
      , i = window.innerWidth;
    return {
        left: n[0],
        top: n[1],
        right: n[2],
        gap: Math.max(0, i - o + n[2] - n[0])
    }
}
  , yP = Dy()
  , Yo = "data-scroll-locked"
  , xP = function(e, n, o, i) {
    var a = e.left
      , u = e.top
      , c = e.right
      , d = e.gap;
    return o === void 0 && (o = "margin"),
    `
  .`.concat(eP, ` {
   overflow: hidden `).concat(i, `;
   padding-right: `).concat(d, "px ").concat(i, `;
  }
  body[`).concat(Yo, `] {
    overflow: hidden `).concat(i, `;
    overscroll-behavior: contain;
    `).concat([n && "position: relative ".concat(i, ";"), o === "margin" && `
    padding-left: `.concat(a, `px;
    padding-top: `).concat(u, `px;
    padding-right: `).concat(c, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(d, "px ").concat(i, `;
    `), o === "padding" && "padding-right: ".concat(d, "px ").concat(i, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Ua, ` {
    right: `).concat(d, "px ").concat(i, `;
  }
  
  .`).concat(Wa, ` {
    margin-right: `).concat(d, "px ").concat(i, `;
  }
  
  .`).concat(Ua, " .").concat(Ua, ` {
    right: 0 `).concat(i, `;
  }
  
  .`).concat(Wa, " .").concat(Wa, ` {
    margin-right: 0 `).concat(i, `;
  }
  
  body[`).concat(Yo, `] {
    `).concat(tP, ": ").concat(d, `px;
  }
`)
}
  , cg = function() {
    var e = parseInt(document.body.getAttribute(Yo) || "0", 10);
    return isFinite(e) ? e : 0
}
  , wP = function() {
    w.useEffect(function() {
        return document.body.setAttribute(Yo, (cg() + 1).toString()),
        function() {
            var e = cg() - 1;
            e <= 0 ? document.body.removeAttribute(Yo) : document.body.setAttribute(Yo, e.toString())
        }
    }, [])
}
  , SP = function(e) {
    var n = e.noRelative
      , o = e.noImportant
      , i = e.gapMode
      , a = i === void 0 ? "margin" : i;
    wP();
    var u = w.useMemo(function() {
        return vP(a)
    }, [a]);
    return w.createElement(yP, {
        styles: xP(u, !n, a, o ? "" : "!important")
    })
}
  , sd = !1;
if (typeof window < "u")
    try {
        var Oa = Object.defineProperty({}, "passive", {
            get: function() {
                return sd = !0,
                !0
            }
        });
        window.addEventListener("test", Oa, Oa),
        window.removeEventListener("test", Oa, Oa)
    } catch {
        sd = !1
    }
var Lo = sd ? {
    passive: !1
} : !1
  , bP = function(e) {
    return e.tagName === "TEXTAREA"
}
  , My = function(e, n) {
    if (!(e instanceof Element))
        return !1;
    var o = window.getComputedStyle(e);
    return o[n] !== "hidden" && !(o.overflowY === o.overflowX && !bP(e) && o[n] === "visible")
}
  , CP = function(e) {
    return My(e, "overflowY")
}
  , EP = function(e) {
    return My(e, "overflowX")
}
  , dg = function(e, n) {
    var o = n.ownerDocument
      , i = n;
    do {
        typeof ShadowRoot < "u" && i instanceof ShadowRoot && (i = i.host);
        var a = jy(e, i);
        if (a) {
            var u = Oy(e, i)
              , c = u[1]
              , d = u[2];
            if (c > d)
                return !0
        }
        i = i.parentNode
    } while (i && i !== o.body);
    return !1
}
  , TP = function(e) {
    var n = e.scrollTop
      , o = e.scrollHeight
      , i = e.clientHeight;
    return [n, o, i]
}
  , PP = function(e) {
    var n = e.scrollLeft
      , o = e.scrollWidth
      , i = e.clientWidth;
    return [n, o, i]
}
  , jy = function(e, n) {
    return e === "v" ? CP(n) : EP(n)
}
  , Oy = function(e, n) {
    return e === "v" ? TP(n) : PP(n)
}
  , kP = function(e, n) {
    return e === "h" && n === "rtl" ? -1 : 1
}
  , AP = function(e, n, o, i, a) {
    var u = kP(e, window.getComputedStyle(n).direction)
      , c = u * i
      , d = o.target
      , p = n.contains(d)
      , h = !1
      , g = c > 0
      , y = 0
      , x = 0;
    do {
        if (!d)
            break;
        var v = Oy(e, d)
          , T = v[0]
          , C = v[1]
          , E = v[2]
          , P = C - E - u * T;
        (T || P) && jy(e, d) && (y += P,
        x += T);
        var A = d.parentNode;
        d = A && A.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? A.host : A
    } while (!p && d !== document.body || p && (n.contains(d) || n === d));
    return (g && Math.abs(y) < 1 || !g && Math.abs(x) < 1) && (h = !0),
    h
}
  , _a = function(e) {
    return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
}
  , fg = function(e) {
    return [e.deltaX, e.deltaY]
}
  , pg = function(e) {
    return e && "current"in e ? e.current : e
}
  , RP = function(e, n) {
    return e[0] === n[0] && e[1] === n[1]
}
  , NP = function(e) {
    return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
}
  , DP = 0
  , Vo = [];
function MP(e) {
    var n = w.useRef([])
      , o = w.useRef([0, 0])
      , i = w.useRef()
      , a = w.useState(DP++)[0]
      , u = w.useState(Dy)[0]
      , c = w.useRef(e);
    w.useEffect(function() {
        c.current = e
    }, [e]),
    w.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(a));
            var C = JT([e.lockRef.current], (e.shards || []).map(pg), !0).filter(Boolean);
            return C.forEach(function(E) {
                return E.classList.add("allow-interactivity-".concat(a))
            }),
            function() {
                document.body.classList.remove("block-interactivity-".concat(a)),
                C.forEach(function(E) {
                    return E.classList.remove("allow-interactivity-".concat(a))
                })
            }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var d = w.useCallback(function(C, E) {
        if ("touches"in C && C.touches.length === 2 || C.type === "wheel" && C.ctrlKey)
            return !c.current.allowPinchZoom;
        var P = _a(C), A = o.current, R = "deltaX"in C ? C.deltaX : A[0] - P[0], O = "deltaY"in C ? C.deltaY : A[1] - P[1], j, $ = C.target, I = Math.abs(R) > Math.abs(O) ? "h" : "v";
        if ("touches"in C && I === "h" && $.type === "range")
            return !1;
        var U = dg(I, $);
        if (!U)
            return !0;
        if (U ? j = I : (j = I === "v" ? "h" : "v",
        U = dg(I, $)),
        !U)
            return !1;
        if (!i.current && "changedTouches"in C && (R || O) && (i.current = j),
        !j)
            return !0;
        var oe = i.current || j;
        return AP(oe, E, C, oe === "h" ? R : O)
    }, [])
      , p = w.useCallback(function(C) {
        var E = C;
        if (!(!Vo.length || Vo[Vo.length - 1] !== u)) {
            var P = "deltaY"in E ? fg(E) : _a(E)
              , A = n.current.filter(function(j) {
                return j.name === E.type && (j.target === E.target || E.target === j.shadowParent) && RP(j.delta, P)
            })[0];
            if (A && A.should) {
                E.cancelable && E.preventDefault();
                return
            }
            if (!A) {
                var R = (c.current.shards || []).map(pg).filter(Boolean).filter(function(j) {
                    return j.contains(E.target)
                })
                  , O = R.length > 0 ? d(E, R[0]) : !c.current.noIsolation;
                O && E.cancelable && E.preventDefault()
            }
        }
    }, [])
      , h = w.useCallback(function(C, E, P, A) {
        var R = {
            name: C,
            delta: E,
            target: P,
            should: A,
            shadowParent: jP(P)
        };
        n.current.push(R),
        setTimeout(function() {
            n.current = n.current.filter(function(O) {
                return O !== R
            })
        }, 1)
    }, [])
      , g = w.useCallback(function(C) {
        o.current = _a(C),
        i.current = void 0
    }, [])
      , y = w.useCallback(function(C) {
        h(C.type, fg(C), C.target, d(C, e.lockRef.current))
    }, [])
      , x = w.useCallback(function(C) {
        h(C.type, _a(C), C.target, d(C, e.lockRef.current))
    }, []);
    w.useEffect(function() {
        return Vo.push(u),
        e.setCallbacks({
            onScrollCapture: y,
            onWheelCapture: y,
            onTouchMoveCapture: x
        }),
        document.addEventListener("wheel", p, Lo),
        document.addEventListener("touchmove", p, Lo),
        document.addEventListener("touchstart", g, Lo),
        function() {
            Vo = Vo.filter(function(C) {
                return C !== u
            }),
            document.removeEventListener("wheel", p, Lo),
            document.removeEventListener("touchmove", p, Lo),
            document.removeEventListener("touchstart", g, Lo)
        }
    }, []);
    var v = e.removeScrollBar
      , T = e.inert;
    return w.createElement(w.Fragment, null, T ? w.createElement(u, {
        styles: NP(a)
    }) : null, v ? w.createElement(SP, {
        noRelative: e.noRelative,
        gapMode: e.gapMode
    }) : null)
}
function jP(e) {
    for (var n = null; e !== null; )
        e instanceof ShadowRoot && (n = e.host,
        e = e.host),
        e = e.parentNode;
    return n
}
const OP = lP(Ny, MP);
var uf = w.forwardRef(function(e, n) {
    return w.createElement(Cl, jn({}, e, {
        ref: n,
        sideCar: OP
    }))
});
uf.classNames = Cl.classNames;
var _P = [" ", "Enter", "ArrowUp", "ArrowDown"]
  , IP = [" ", "Enter"]
  , ps = "Select"
  , [El,Tl,LP] = Xd(ps)
  , [oi,Dj] = wn(ps, [LP, Sl])
  , Pl = Sl()
  , [VP,Ir] = oi(ps)
  , [FP,BP] = oi(ps)
  , _y = e => {
    const {__scopeSelect: n, children: o, open: i, defaultOpen: a, onOpenChange: u, value: c, defaultValue: d, onValueChange: p, dir: h, name: g, autoComplete: y, disabled: x, required: v, form: T} = e
      , C = Pl(n)
      , [E,P] = w.useState(null)
      , [A,R] = w.useState(null)
      , [O,j] = w.useState(!1)
      , $ = ml(h)
      , [I=!1,U] = jr({
        prop: i,
        defaultProp: a,
        onChange: u
    })
      , [oe,J] = jr({
        prop: c,
        defaultProp: d,
        onChange: p
    })
      , ne = w.useRef(null)
      , Z = E ? T || !!E.closest("form") : !0
      , [le,ue] = w.useState(new Set)
      , ge = Array.from(le).map(re => re.props.value).join(";");
    return S.jsx(by, {
        ...C,
        children: S.jsxs(VP, {
            required: v,
            scope: n,
            trigger: E,
            onTriggerChange: P,
            valueNode: A,
            onValueNodeChange: R,
            valueNodeHasChildren: O,
            onValueNodeHasChildrenChange: j,
            contentId: Nr(),
            value: oe,
            onValueChange: J,
            open: I,
            onOpenChange: U,
            dir: $,
            triggerPointerDownPosRef: ne,
            disabled: x,
            children: [S.jsx(El.Provider, {
                scope: n,
                children: S.jsx(FP, {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: w.useCallback(re => {
                        ue(Q => new Set(Q).add(re))
                    }
                    , []),
                    onNativeOptionRemove: w.useCallback(re => {
                        ue(Q => {
                            const V = new Set(Q);
                            return V.delete(re),
                            V
                        }
                        )
                    }
                    , []),
                    children: o
                })
            }), Z ? S.jsxs(s0, {
                "aria-hidden": !0,
                required: v,
                tabIndex: -1,
                name: g,
                autoComplete: y,
                value: oe,
                onChange: re => J(re.target.value),
                disabled: x,
                form: T,
                children: [oe === void 0 ? S.jsx("option", {
                    value: ""
                }) : null, Array.from(le)]
            }, ge) : null]
        })
    })
}
;
_y.displayName = ps;
var Iy = "SelectTrigger"
  , Ly = w.forwardRef( (e, n) => {
    const {__scopeSelect: o, disabled: i=!1, ...a} = e
      , u = Pl(o)
      , c = Ir(Iy, o)
      , d = c.disabled || i
      , p = _e(n, c.onTriggerChange)
      , h = Tl(o)
      , g = w.useRef("touch")
      , [y,x,v] = a0(C => {
        const E = h().filter(R => !R.disabled)
          , P = E.find(R => R.value === c.value)
          , A = l0(E, C, P);
        A !== void 0 && c.onValueChange(A.value)
    }
    )
      , T = C => {
        d || (c.onOpenChange(!0),
        v()),
        C && (c.triggerPointerDownPosRef.current = {
            x: Math.round(C.pageX),
            y: Math.round(C.pageY)
        })
    }
    ;
    return S.jsx(Cy, {
        asChild: !0,
        ...u,
        children: S.jsx(Ne.button, {
            type: "button",
            role: "combobox",
            "aria-controls": c.contentId,
            "aria-expanded": c.open,
            "aria-required": c.required,
            "aria-autocomplete": "none",
            dir: c.dir,
            "data-state": c.open ? "open" : "closed",
            disabled: d,
            "data-disabled": d ? "" : void 0,
            "data-placeholder": i0(c.value) ? "" : void 0,
            ...a,
            ref: p,
            onClick: Ee(a.onClick, C => {
                C.currentTarget.focus(),
                g.current !== "mouse" && T(C)
            }
            ),
            onPointerDown: Ee(a.onPointerDown, C => {
                g.current = C.pointerType;
                const E = C.target;
                E.hasPointerCapture(C.pointerId) && E.releasePointerCapture(C.pointerId),
                C.button === 0 && C.ctrlKey === !1 && C.pointerType === "mouse" && (T(C),
                C.preventDefault())
            }
            ),
            onKeyDown: Ee(a.onKeyDown, C => {
                const E = y.current !== "";
                !(C.ctrlKey || C.altKey || C.metaKey) && C.key.length === 1 && x(C.key),
                !(E && C.key === " ") && _P.includes(C.key) && (T(),
                C.preventDefault())
            }
            )
        })
    })
}
);
Ly.displayName = Iy;
var Vy = "SelectValue"
  , Fy = w.forwardRef( (e, n) => {
    const {__scopeSelect: o, className: i, style: a, children: u, placeholder: c="", ...d} = e
      , p = Ir(Vy, o)
      , {onValueNodeHasChildrenChange: h} = p
      , g = u !== void 0
      , y = _e(n, p.onValueNodeChange);
    return Nt( () => {
        h(g)
    }
    , [h, g]),
    S.jsx(Ne.span, {
        ...d,
        ref: y,
        style: {
            pointerEvents: "none"
        },
        children: i0(p.value) ? S.jsx(S.Fragment, {
            children: c
        }) : u
    })
}
);
Fy.displayName = Vy;
var zP = "SelectIcon"
  , By = w.forwardRef( (e, n) => {
    const {__scopeSelect: o, children: i, ...a} = e;
    return S.jsx(Ne.span, {
        "aria-hidden": !0,
        ...a,
        ref: n,
        children: i || "▼"
    })
}
);
By.displayName = zP;
var $P = "SelectPortal"
  , zy = e => S.jsx(af, {
    asChild: !0,
    ...e
});
zy.displayName = $P;
var lo = "SelectContent"
  , $y = w.forwardRef( (e, n) => {
    const o = Ir(lo, e.__scopeSelect)
      , [i,a] = w.useState();
    if (Nt( () => {
        a(new DocumentFragment)
    }
    , []),
    !o.open) {
        const u = i;
        return u ? ds.createPortal(S.jsx(Hy, {
            scope: e.__scopeSelect,
            children: S.jsx(El.Slot, {
                scope: e.__scopeSelect,
                children: S.jsx("div", {
                    children: e.children
                })
            })
        }), u) : null
    }
    return S.jsx(Uy, {
        ...e,
        ref: n
    })
}
);
$y.displayName = lo;
var gn = 10
  , [Hy,Lr] = oi(lo)
  , HP = "SelectContentImpl"
  , Uy = w.forwardRef( (e, n) => {
    const {__scopeSelect: o, position: i="item-aligned", onCloseAutoFocus: a, onEscapeKeyDown: u, onPointerDownOutside: c, side: d, sideOffset: p, align: h, alignOffset: g, arrowPadding: y, collisionBoundary: x, collisionPadding: v, sticky: T, hideWhenDetached: C, avoidCollisions: E, ...P} = e
      , A = Ir(lo, o)
      , [R,O] = w.useState(null)
      , [j,$] = w.useState(null)
      , I = _e(n, F => O(F))
      , [U,oe] = w.useState(null)
      , [J,ne] = w.useState(null)
      , Z = Tl(o)
      , [le,ue] = w.useState(!1)
      , ge = w.useRef(!1);
    w.useEffect( () => {
        if (R)
            return ky(R)
    }
    , [R]),
    Jv();
    const re = w.useCallback(F => {
        const [ee,...he] = Z().map(Me => Me.ref.current)
          , [ce] = he.slice(-1)
          , Te = document.activeElement;
        for (const Me of F)
            if (Me === Te || (Me?.scrollIntoView({
                block: "nearest"
            }),
            Me === ee && j && (j.scrollTop = 0),
            Me === ce && j && (j.scrollTop = j.scrollHeight),
            Me?.focus(),
            document.activeElement !== Te))
                return
    }
    , [Z, j])
      , Q = w.useCallback( () => re([U, R]), [re, U, R]);
    w.useEffect( () => {
        le && Q()
    }
    , [le, Q]);
    const {onOpenChange: V, triggerPointerDownPosRef: H} = A;
    w.useEffect( () => {
        if (R) {
            let F = {
                x: 0,
                y: 0
            };
            const ee = ce => {
                F = {
                    x: Math.abs(Math.round(ce.pageX) - (H.current?.x ?? 0)),
                    y: Math.abs(Math.round(ce.pageY) - (H.current?.y ?? 0))
                }
            }
              , he = ce => {
                F.x <= 10 && F.y <= 10 ? ce.preventDefault() : R.contains(ce.target) || V(!1),
                document.removeEventListener("pointermove", ee),
                H.current = null
            }
            ;
            return H.current !== null && (document.addEventListener("pointermove", ee),
            document.addEventListener("pointerup", he, {
                capture: !0,
                once: !0
            })),
            () => {
                document.removeEventListener("pointermove", ee),
                document.removeEventListener("pointerup", he, {
                    capture: !0
                })
            }
        }
    }
    , [R, V, H]),
    w.useEffect( () => {
        const F = () => V(!1);
        return window.addEventListener("blur", F),
        window.addEventListener("resize", F),
        () => {
            window.removeEventListener("blur", F),
            window.removeEventListener("resize", F)
        }
    }
    , [V]);
    const [G,D] = a0(F => {
        const ee = Z().filter(Te => !Te.disabled)
          , he = ee.find(Te => Te.ref.current === document.activeElement)
          , ce = l0(ee, F, he);
        ce && setTimeout( () => ce.ref.current.focus())
    }
    )
      , z = w.useCallback( (F, ee, he) => {
        const ce = !ge.current && !he;
        (A.value !== void 0 && A.value === ee || ce) && (oe(F),
        ce && (ge.current = !0))
    }
    , [A.value])
      , se = w.useCallback( () => R?.focus(), [R])
      , ae = w.useCallback( (F, ee, he) => {
        const ce = !ge.current && !he;
        (A.value !== void 0 && A.value === ee || ce) && ne(F)
    }
    , [A.value])
      , pe = i === "popper" ? ad : Wy
      , K = pe === ad ? {
        side: d,
        sideOffset: p,
        align: h,
        alignOffset: g,
        arrowPadding: y,
        collisionBoundary: x,
        collisionPadding: v,
        sticky: T,
        hideWhenDetached: C,
        avoidCollisions: E
    } : {};
    return S.jsx(Hy, {
        scope: o,
        content: R,
        viewport: j,
        onViewportChange: $,
        itemRefCallback: z,
        selectedItem: U,
        onItemLeave: se,
        itemTextRefCallback: ae,
        focusSelectedItem: Q,
        selectedItemText: J,
        position: i,
        isPositioned: le,
        searchRef: G,
        children: S.jsx(uf, {
            as: so,
            allowPinchZoom: !0,
            children: S.jsx(Qd, {
                asChild: !0,
                trapped: A.open,
                onMountAutoFocus: F => {
                    F.preventDefault()
                }
                ,
                onUnmountAutoFocus: Ee(a, F => {
                    A.trigger?.focus({
                        preventScroll: !0
                    }),
                    F.preventDefault()
                }
                ),
                children: S.jsx(gl, {
                    asChild: !0,
                    disableOutsidePointerEvents: !0,
                    onEscapeKeyDown: u,
                    onPointerDownOutside: c,
                    onFocusOutside: F => F.preventDefault(),
                    onDismiss: () => A.onOpenChange(!1),
                    children: S.jsx(pe, {
                        role: "listbox",
                        id: A.contentId,
                        "data-state": A.open ? "open" : "closed",
                        dir: A.dir,
                        onContextMenu: F => F.preventDefault(),
                        ...P,
                        ...K,
                        onPlaced: () => ue(!0),
                        ref: I,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            outline: "none",
                            ...P.style
                        },
                        onKeyDown: Ee(P.onKeyDown, F => {
                            const ee = F.ctrlKey || F.altKey || F.metaKey;
                            if (F.key === "Tab" && F.preventDefault(),
                            !ee && F.key.length === 1 && D(F.key),
                            ["ArrowUp", "ArrowDown", "Home", "End"].includes(F.key)) {
                                let ce = Z().filter(Te => !Te.disabled).map(Te => Te.ref.current);
                                if (["ArrowUp", "End"].includes(F.key) && (ce = ce.slice().reverse()),
                                ["ArrowUp", "ArrowDown"].includes(F.key)) {
                                    const Te = F.target
                                      , Me = ce.indexOf(Te);
                                    ce = ce.slice(Me + 1)
                                }
                                setTimeout( () => re(ce)),
                                F.preventDefault()
                            }
                        }
                        )
                    })
                })
            })
        })
    })
}
);
Uy.displayName = HP;
var UP = "SelectItemAlignedPosition"
  , Wy = w.forwardRef( (e, n) => {
    const {__scopeSelect: o, onPlaced: i, ...a} = e
      , u = Ir(lo, o)
      , c = Lr(lo, o)
      , [d,p] = w.useState(null)
      , [h,g] = w.useState(null)
      , y = _e(n, I => g(I))
      , x = Tl(o)
      , v = w.useRef(!1)
      , T = w.useRef(!0)
      , {viewport: C, selectedItem: E, selectedItemText: P, focusSelectedItem: A} = c
      , R = w.useCallback( () => {
        if (u.trigger && u.valueNode && d && h && C && E && P) {
            const I = u.trigger.getBoundingClientRect()
              , U = h.getBoundingClientRect()
              , oe = u.valueNode.getBoundingClientRect()
              , J = P.getBoundingClientRect();
            if (u.dir !== "rtl") {
                const Te = J.left - U.left
                  , Me = oe.left - Te
                  , Fe = I.left - Me
                  , W = I.width + Fe
                  , xe = Math.max(W, U.width)
                  , be = window.innerWidth - gn
                  , je = rl(Me, [gn, Math.max(gn, be - xe)]);
                d.style.minWidth = W + "px",
                d.style.left = je + "px"
            } else {
                const Te = U.right - J.right
                  , Me = window.innerWidth - oe.right - Te
                  , Fe = window.innerWidth - I.right - Me
                  , W = I.width + Fe
                  , xe = Math.max(W, U.width)
                  , be = window.innerWidth - gn
                  , je = rl(Me, [gn, Math.max(gn, be - xe)]);
                d.style.minWidth = W + "px",
                d.style.right = je + "px"
            }
            const ne = x()
              , Z = window.innerHeight - gn * 2
              , le = C.scrollHeight
              , ue = window.getComputedStyle(h)
              , ge = parseInt(ue.borderTopWidth, 10)
              , re = parseInt(ue.paddingTop, 10)
              , Q = parseInt(ue.borderBottomWidth, 10)
              , V = parseInt(ue.paddingBottom, 10)
              , H = ge + re + le + V + Q
              , G = Math.min(E.offsetHeight * 5, H)
              , D = window.getComputedStyle(C)
              , z = parseInt(D.paddingTop, 10)
              , se = parseInt(D.paddingBottom, 10)
              , ae = I.top + I.height / 2 - gn
              , pe = Z - ae
              , K = E.offsetHeight / 2
              , F = E.offsetTop + K
              , ee = ge + re + F
              , he = H - ee;
            if (ee <= ae) {
                const Te = ne.length > 0 && E === ne[ne.length - 1].ref.current;
                d.style.bottom = "0px";
                const Me = h.clientHeight - C.offsetTop - C.offsetHeight
                  , Fe = Math.max(pe, K + (Te ? se : 0) + Me + Q)
                  , W = ee + Fe;
                d.style.height = W + "px"
            } else {
                const Te = ne.length > 0 && E === ne[0].ref.current;
                d.style.top = "0px";
                const Fe = Math.max(ae, ge + C.offsetTop + (Te ? z : 0) + K) + he;
                d.style.height = Fe + "px",
                C.scrollTop = ee - ae + C.offsetTop
            }
            d.style.margin = `${gn}px 0`,
            d.style.minHeight = G + "px",
            d.style.maxHeight = Z + "px",
            i?.(),
            requestAnimationFrame( () => v.current = !0)
        }
    }
    , [x, u.trigger, u.valueNode, d, h, C, E, P, u.dir, i]);
    Nt( () => R(), [R]);
    const [O,j] = w.useState();
    Nt( () => {
        h && j(window.getComputedStyle(h).zIndex)
    }
    , [h]);
    const $ = w.useCallback(I => {
        I && T.current === !0 && (R(),
        A?.(),
        T.current = !1)
    }
    , [R, A]);
    return S.jsx(KP, {
        scope: o,
        contentWrapper: d,
        shouldExpandOnScrollRef: v,
        onScrollButtonChange: $,
        children: S.jsx("div", {
            ref: p,
            style: {
                display: "flex",
                flexDirection: "column",
                position: "fixed",
                zIndex: O
            },
            children: S.jsx(Ne.div, {
                ...a,
                ref: y,
                style: {
                    boxSizing: "border-box",
                    maxHeight: "100%",
                    ...a.style
                }
            })
        })
    })
}
);
Wy.displayName = UP;
var WP = "SelectPopperPosition"
  , ad = w.forwardRef( (e, n) => {
    const {__scopeSelect: o, align: i="start", collisionPadding: a=gn, ...u} = e
      , c = Pl(o);
    return S.jsx(Ey, {
        ...c,
        ...u,
        ref: n,
        align: i,
        collisionPadding: a,
        style: {
            boxSizing: "border-box",
            ...u.style,
            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
        }
    })
}
);
ad.displayName = WP;
var [KP,cf] = oi(lo, {})
  , ld = "SelectViewport"
  , Ky = w.forwardRef( (e, n) => {
    const {__scopeSelect: o, nonce: i, ...a} = e
      , u = Lr(ld, o)
      , c = cf(ld, o)
      , d = _e(n, u.onViewportChange)
      , p = w.useRef(0);
    return S.jsxs(S.Fragment, {
        children: [S.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: i
        }), S.jsx(El.Slot, {
            scope: o,
            children: S.jsx(Ne.div, {
                "data-radix-select-viewport": "",
                role: "presentation",
                ...a,
                ref: d,
                style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...a.style
                },
                onScroll: Ee(a.onScroll, h => {
                    const g = h.currentTarget
                      , {contentWrapper: y, shouldExpandOnScrollRef: x} = c;
                    if (x?.current && y) {
                        const v = Math.abs(p.current - g.scrollTop);
                        if (v > 0) {
                            const T = window.innerHeight - gn * 2
                              , C = parseFloat(y.style.minHeight)
                              , E = parseFloat(y.style.height)
                              , P = Math.max(C, E);
                            if (P < T) {
                                const A = P + v
                                  , R = Math.min(T, A)
                                  , O = A - R;
                                y.style.height = R + "px",
                                y.style.bottom === "0px" && (g.scrollTop = O > 0 ? O : 0,
                                y.style.justifyContent = "flex-end")
                            }
                        }
                    }
                    p.current = g.scrollTop
                }
                )
            })
        })]
    })
}
);
Ky.displayName = ld;
var Gy = "SelectGroup"
  , [GP,YP] = oi(Gy)
  , XP = w.forwardRef( (e, n) => {
    const {__scopeSelect: o, ...i} = e
      , a = Nr();
    return S.jsx(GP, {
        scope: o,
        id: a,
        children: S.jsx(Ne.div, {
            role: "group",
            "aria-labelledby": a,
            ...i,
            ref: n
        })
    })
}
);
XP.displayName = Gy;
var Yy = "SelectLabel"
  , Xy = w.forwardRef( (e, n) => {
    const {__scopeSelect: o, ...i} = e
      , a = YP(Yy, o);
    return S.jsx(Ne.div, {
        id: a.id,
        ...i,
        ref: n
    })
}
);
Xy.displayName = Yy;
var ll = "SelectItem"
  , [QP,Qy] = oi(ll)
  , Zy = w.forwardRef( (e, n) => {
    const {__scopeSelect: o, value: i, disabled: a=!1, textValue: u, ...c} = e
      , d = Ir(ll, o)
      , p = Lr(ll, o)
      , h = d.value === i
      , [g,y] = w.useState(u ?? "")
      , [x,v] = w.useState(!1)
      , T = _e(n, A => p.itemRefCallback?.(A, i, a))
      , C = Nr()
      , E = w.useRef("touch")
      , P = () => {
        a || (d.onValueChange(i),
        d.onOpenChange(!1))
    }
    ;
    if (i === "")
        throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
    return S.jsx(QP, {
        scope: o,
        value: i,
        disabled: a,
        textId: C,
        isSelected: h,
        onItemTextChange: w.useCallback(A => {
            y(R => R || (A?.textContent ?? "").trim())
        }
        , []),
        children: S.jsx(El.ItemSlot, {
            scope: o,
            value: i,
            disabled: a,
            textValue: g,
            children: S.jsx(Ne.div, {
                role: "option",
                "aria-labelledby": C,
                "data-highlighted": x ? "" : void 0,
                "aria-selected": h && x,
                "data-state": h ? "checked" : "unchecked",
                "aria-disabled": a || void 0,
                "data-disabled": a ? "" : void 0,
                tabIndex: a ? void 0 : -1,
                ...c,
                ref: T,
                onFocus: Ee(c.onFocus, () => v(!0)),
                onBlur: Ee(c.onBlur, () => v(!1)),
                onClick: Ee(c.onClick, () => {
                    E.current !== "mouse" && P()
                }
                ),
                onPointerUp: Ee(c.onPointerUp, () => {
                    E.current === "mouse" && P()
                }
                ),
                onPointerDown: Ee(c.onPointerDown, A => {
                    E.current = A.pointerType
                }
                ),
                onPointerMove: Ee(c.onPointerMove, A => {
                    E.current = A.pointerType,
                    a ? p.onItemLeave?.() : E.current === "mouse" && A.currentTarget.focus({
                        preventScroll: !0
                    })
                }
                ),
                onPointerLeave: Ee(c.onPointerLeave, A => {
                    A.currentTarget === document.activeElement && p.onItemLeave?.()
                }
                ),
                onKeyDown: Ee(c.onKeyDown, A => {
                    p.searchRef?.current !== "" && A.key === " " || (IP.includes(A.key) && P(),
                    A.key === " " && A.preventDefault())
                }
                )
            })
        })
    })
}
);
Zy.displayName = ll;
var Qi = "SelectItemText"
  , qy = w.forwardRef( (e, n) => {
    const {__scopeSelect: o, className: i, style: a, ...u} = e
      , c = Ir(Qi, o)
      , d = Lr(Qi, o)
      , p = Qy(Qi, o)
      , h = BP(Qi, o)
      , [g,y] = w.useState(null)
      , x = _e(n, P => y(P), p.onItemTextChange, P => d.itemTextRefCallback?.(P, p.value, p.disabled))
      , v = g?.textContent
      , T = w.useMemo( () => S.jsx("option", {
        value: p.value,
        disabled: p.disabled,
        children: v
    }, p.value), [p.disabled, p.value, v])
      , {onNativeOptionAdd: C, onNativeOptionRemove: E} = h;
    return Nt( () => (C(T),
    () => E(T)), [C, E, T]),
    S.jsxs(S.Fragment, {
        children: [S.jsx(Ne.span, {
            id: p.textId,
            ...u,
            ref: x
        }), p.isSelected && c.valueNode && !c.valueNodeHasChildren ? ds.createPortal(u.children, c.valueNode) : null]
    })
}
);
qy.displayName = Qi;
var Jy = "SelectItemIndicator"
  , e0 = w.forwardRef( (e, n) => {
    const {__scopeSelect: o, ...i} = e;
    return Qy(Jy, o).isSelected ? S.jsx(Ne.span, {
        "aria-hidden": !0,
        ...i,
        ref: n
    }) : null
}
);
e0.displayName = Jy;
var ud = "SelectScrollUpButton"
  , t0 = w.forwardRef( (e, n) => {
    const o = Lr(ud, e.__scopeSelect)
      , i = cf(ud, e.__scopeSelect)
      , [a,u] = w.useState(!1)
      , c = _e(n, i.onScrollButtonChange);
    return Nt( () => {
        if (o.viewport && o.isPositioned) {
            let d = function() {
                const h = p.scrollTop > 0;
                u(h)
            };
            const p = o.viewport;
            return d(),
            p.addEventListener("scroll", d),
            () => p.removeEventListener("scroll", d)
        }
    }
    , [o.viewport, o.isPositioned]),
    a ? S.jsx(r0, {
        ...e,
        ref: c,
        onAutoScroll: () => {
            const {viewport: d, selectedItem: p} = o;
            d && p && (d.scrollTop = d.scrollTop - p.offsetHeight)
        }
    }) : null
}
);
t0.displayName = ud;
var cd = "SelectScrollDownButton"
  , n0 = w.forwardRef( (e, n) => {
    const o = Lr(cd, e.__scopeSelect)
      , i = cf(cd, e.__scopeSelect)
      , [a,u] = w.useState(!1)
      , c = _e(n, i.onScrollButtonChange);
    return Nt( () => {
        if (o.viewport && o.isPositioned) {
            let d = function() {
                const h = p.scrollHeight - p.clientHeight
                  , g = Math.ceil(p.scrollTop) < h;
                u(g)
            };
            const p = o.viewport;
            return d(),
            p.addEventListener("scroll", d),
            () => p.removeEventListener("scroll", d)
        }
    }
    , [o.viewport, o.isPositioned]),
    a ? S.jsx(r0, {
        ...e,
        ref: c,
        onAutoScroll: () => {
            const {viewport: d, selectedItem: p} = o;
            d && p && (d.scrollTop = d.scrollTop + p.offsetHeight)
        }
    }) : null
}
);
n0.displayName = cd;
var r0 = w.forwardRef( (e, n) => {
    const {__scopeSelect: o, onAutoScroll: i, ...a} = e
      , u = Lr("SelectScrollButton", o)
      , c = w.useRef(null)
      , d = Tl(o)
      , p = w.useCallback( () => {
        c.current !== null && (window.clearInterval(c.current),
        c.current = null)
    }
    , []);
    return w.useEffect( () => () => p(), [p]),
    Nt( () => {
        d().find(g => g.ref.current === document.activeElement)?.ref.current?.scrollIntoView({
            block: "nearest"
        })
    }
    , [d]),
    S.jsx(Ne.div, {
        "aria-hidden": !0,
        ...a,
        ref: n,
        style: {
            flexShrink: 0,
            ...a.style
        },
        onPointerDown: Ee(a.onPointerDown, () => {
            c.current === null && (c.current = window.setInterval(i, 50))
        }
        ),
        onPointerMove: Ee(a.onPointerMove, () => {
            u.onItemLeave?.(),
            c.current === null && (c.current = window.setInterval(i, 50))
        }
        ),
        onPointerLeave: Ee(a.onPointerLeave, () => {
            p()
        }
        )
    })
}
)
  , ZP = "SelectSeparator"
  , o0 = w.forwardRef( (e, n) => {
    const {__scopeSelect: o, ...i} = e;
    return S.jsx(Ne.div, {
        "aria-hidden": !0,
        ...i,
        ref: n
    })
}
);
o0.displayName = ZP;
var dd = "SelectArrow"
  , qP = w.forwardRef( (e, n) => {
    const {__scopeSelect: o, ...i} = e
      , a = Pl(o)
      , u = Ir(dd, o)
      , c = Lr(dd, o);
    return u.open && c.position === "popper" ? S.jsx(Ty, {
        ...a,
        ...i,
        ref: n
    }) : null
}
);
qP.displayName = dd;
function i0(e) {
    return e === "" || e === void 0
}
var s0 = w.forwardRef( (e, n) => {
    const {value: o, ...i} = e
      , a = w.useRef(null)
      , u = _e(n, a)
      , c = bl(o);
    return w.useEffect( () => {
        const d = a.current
          , p = window.HTMLSelectElement.prototype
          , g = Object.getOwnPropertyDescriptor(p, "value").set;
        if (c !== o && g) {
            const y = new Event("change",{
                bubbles: !0
            });
            g.call(d, o),
            d.dispatchEvent(y)
        }
    }
    , [c, o]),
    S.jsx(lf, {
        asChild: !0,
        children: S.jsx("select", {
            ...i,
            ref: u,
            defaultValue: o
        })
    })
}
);
s0.displayName = "BubbleSelect";
function a0(e) {
    const n = Fn(e)
      , o = w.useRef("")
      , i = w.useRef(0)
      , a = w.useCallback(c => {
        const d = o.current + c;
        n(d),
        function p(h) {
            o.current = h,
            window.clearTimeout(i.current),
            h !== "" && (i.current = window.setTimeout( () => p(""), 1e3))
        }(d)
    }
    , [n])
      , u = w.useCallback( () => {
        o.current = "",
        window.clearTimeout(i.current)
    }
    , []);
    return w.useEffect( () => () => window.clearTimeout(i.current), []),
    [o, a, u]
}
function l0(e, n, o) {
    const a = n.length > 1 && Array.from(n).every(h => h === n[0]) ? n[0] : n
      , u = o ? e.indexOf(o) : -1;
    let c = JP(e, Math.max(u, 0));
    a.length === 1 && (c = c.filter(h => h !== o));
    const p = c.find(h => h.textValue.toLowerCase().startsWith(a.toLowerCase()));
    return p !== o ? p : void 0
}
function JP(e, n) {
    return e.map( (o, i) => e[(n + i) % e.length])
}
var ek = _y
  , u0 = Ly
  , tk = Fy
  , nk = By
  , rk = zy
  , c0 = $y
  , ok = Ky
  , d0 = Xy
  , f0 = Zy
  , ik = qy
  , sk = e0
  , p0 = t0
  , h0 = n0
  , m0 = o0;
const ak = ek
  , lk = tk
  , g0 = w.forwardRef( ({className: e, children: n, ...o}, i) => S.jsxs(u0, {
    ref: i,
    className: Re("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", e),
    ...o,
    children: [n, S.jsx(nk, {
        asChild: !0,
        children: S.jsx(Gv, {
            className: "h-4 w-4 opacity-50"
        })
    })]
}));
g0.displayName = u0.displayName;
const v0 = w.forwardRef( ({className: e, ...n}, o) => S.jsx(p0, {
    ref: o,
    className: Re("flex cursor-default items-center justify-center py-1", e),
    ...n,
    children: S.jsx($C, {
        className: "h-4 w-4"
    })
}));
v0.displayName = p0.displayName;
const y0 = w.forwardRef( ({className: e, ...n}, o) => S.jsx(h0, {
    ref: o,
    className: Re("flex cursor-default items-center justify-center py-1", e),
    ...n,
    children: S.jsx(Gv, {
        className: "h-4 w-4"
    })
}));
y0.displayName = h0.displayName;
const x0 = w.forwardRef( ({className: e, children: n, position: o="popper", ...i}, a) => S.jsx(rk, {
    children: S.jsxs(c0, {
        ref: a,
        className: Re("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", o === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
        position: o,
        ...i,
        children: [S.jsx(v0, {}), S.jsx(ok, {
            className: Re("p-1", o === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
            children: n
        }), S.jsx(y0, {})]
    })
}));
x0.displayName = c0.displayName;
const uk = w.forwardRef( ({className: e, ...n}, o) => S.jsx(d0, {
    ref: o,
    className: Re("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...n
}));
uk.displayName = d0.displayName;
const fd = w.forwardRef( ({className: e, children: n, ...o}, i) => S.jsxs(f0, {
    ref: i,
    className: Re("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
    ...o,
    children: [S.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: S.jsx(sk, {
            children: S.jsx(zC, {
                className: "h-4 w-4"
            })
        })
    }), S.jsx(ik, {
        children: n
    })]
}));
fd.displayName = f0.displayName;
const ck = w.forwardRef( ({className: e, ...n}, o) => S.jsx(m0, {
    ref: o,
    className: Re("-mx-1 my-1 h-px bg-muted", e),
    ...n
}));
ck.displayName = m0.displayName;
const Ia = e => e.isSpecial || e.name === getTranslation("空置") ? null : `${e.value > 0 ? "+" : ""}${(e.value * 100).toFixed(0)}%`
  , dk = ({attributes: e, onUpdateAttribute: n, affectedNeighborInfo: o}) => !e || e.length === 0 ? S.jsx("p", {
    className: "text-sm text-muted-foreground",
    children: getTranslation("无")
}) : S.jsx("div", {
    className: "space-y-2",
    children: e.map(i => i.isSpecial ? S.jsxs("div", {
        className: "text-sm bg-muted p-2 rounded-md",
        children: [S.jsxs("div", {
            className: "flex justify-between items-center",
            children: [S.jsx("span", {
                children: i.name
            }), Ia(i) && S.jsx(el, {
                variant: "secondary",
                children: Ia(i)
            })]
        }), i.type === At.BOOST_ADJACENT && o && S.jsxs("p", {
            className: "text-xs text-muted-foreground mt-1 pl-1",
            children: [`${getTranslation("影响")}: `, o.names, ` (${getTranslation("共")}`, o.count, `${getTranslation("条")})`]
        })]
    }, i.id) : S.jsxs("div", {
        className: "text-sm flex justify-between items-center bg-muted p-2 rounded-md gap-2",
        children: [S.jsxs(ak, {
            value: i.name === getTranslation("空置") ? "none" : i.name,
            onValueChange: a => n(i.id, a),
            children: [S.jsx(g0, {
                className: "w-full border-0 bg-transparent focus:ring-0 focus:ring-offset-0 p-0 h-auto text-left",
                children: S.jsx(lk, {
                    placeholder: getTranslation("选择属性")
                })
            }), S.jsxs(x0, {
                children: [S.jsx(fd, {
                    value: "none",
                    children: getTranslation("空")
                }), qa.map(a => S.jsx(fd, {
                    value: a.name,
                    children: a.name
                }, a.name))]
            })]
        }), Ia(i) && S.jsx(el, {
            variant: "secondary",
            children: Ia(i)
        })]
    }, i.id))
})
  , Mc = e => e.isSpecial || e.name === getTranslation("空置") ? null : `${e.value > 0 ? "+" : ""}${(e.value * 100).toFixed(0)}%`;
function fk({selectedStone: e, allStones: n, onRotate: o, onFlipH: i, onFlipV: a, onRemove: u, onUpdateAttribute: c}) {
    const d = w.useMemo( () => {
        if (e || Object.keys(n).length === 0)
            return null;
        const x = {};
        for (const v of Object.values(n)) {
            const T = v.name || getTranslation("未知石板");
            x[T] = (x[T] || 0) + 1
        }
        return Object.entries(x).sort( ([v], [T]) => v.localeCompare(T))
    }
    , [e, n])
      , p = w.useMemo( () => Yd(n), [n])
      , h = w.useMemo( () => {
        const x = Object.values(n)
          , v = x.filter(C => C.attributes.some(E => E.type === At.BOOST_ADJACENT))
          , T = {};
        for (const C of x)
            T[C.id] = C.attributes.filter(E => !E.isSpecial && E.name !== getTranslation("空置")).map(E => {
                let P = 1;
                for (const A of v) {
                    const R = tl(A, n, p);
                    Object.values(R).some(O => O.id === C.id) && (P += .1)
                }
                return {
                    ...E,
                    value: (E.baseValue || 0) * P
                }
            }
            );
        return T
    }
    , [n, p])
      , g = w.useMemo( () => e ? nl(e, n, p) : [], [e, n, p, h])
      , y = w.useMemo( () => {
        if (e && e.attributes.some(x => x.type === At.BOOST_ADJACENT)) {
            const x = tl(e, n, p)
              , v = Object.values(x);
            if (v.length === 0)
                return null;
            const T = v.map(E => E.name).join(", ")
              , C = v.reduce( (E, P) => {
                const A = P.attributes.filter(O => !O.isSpecial && O.name !== getTranslation("空置")).length
                  , R = nl(P, n, p).length;
                return E + A + R
            }
            , 0);
            return {
                names: T,
                count: C
            }
        }
        return null
    }
    , [e, n, p, h]);
    return e ? S.jsxs("div", {
        className: "space-y-4",
        children: [S.jsxs("div", {
            children: [S.jsx("h3", {
                className: "text-lg font-semibold mb-2",
                children: getTranslation("操作")
            }), S.jsxs("div", {
                className: "grid grid-cols-2 gap-2",
                children: [S.jsxs(Yt, {
                    variant: "outline",
                    onClick: o,
                    disabled: e.type === "E",
                    children: [S.jsx(YC, {
                        className: "mr-2 h-4 w-4"
                    }), ` ${getTranslation("旋转")}`]
                }), S.jsxs(Yt, {
                    variant: "outline",
                    onClick: i,
                    disabled: e.type === "E",
                    children: [S.jsx(KC, {
                        className: "mr-2 h-4 w-4"
                    }), ` ${getTranslation("水平翻转")}`]
                }), S.jsxs(Yt, {
                    variant: "outline",
                    onClick: a,
                    disabled: e.type === "E",
                    children: [S.jsx(GC, {
                        className: "mr-2 h-4 w-4"
                    }), ` ${getTranslation("垂直翻转")}`]
                }), S.jsxs(Yt, {
                    variant: "destructive",
                    onClick: u,
                    children: [S.jsx(XC, {
                        className: "mr-2 h-4 w-4"
                    }), ` ${getTranslation("移除")}`]
                })]
            })]
        }), S.jsx(Ja, {}), S.jsxs("div", {
            children: [S.jsx("h3", {
                className: "text-lg font-semibold mb-3",
                children: getTranslation("固有属性")
            }), ["A", "B", "C"].includes(e.type) ? S.jsx(dk, {
                attributes: e.attributes,
                onUpdateAttribute: (x, v) => c(e.id, x, v),
                affectedNeighborInfo: y
            }) : S.jsx("div", {
                className: "space-y-2",
                children: e.attributes.length > 0 ? e.attributes.map(x => S.jsxs("div", {
                    className: "text-sm flex justify-between items-center bg-muted p-2 rounded-md",
                    children: [S.jsx("span", {
                        children: x.name === getTranslation("空置") ? getTranslation("空") : x.name
                    }), Mc(x) && S.jsx(el, {
                        variant: "secondary",
                        children: Mc(x)
                    })]
                }, x.id)) : S.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children: getTranslation("无")
                })
            })]
        }), g.length > 0 && S.jsxs(S.Fragment, {
            children: [S.jsx(Ja, {}), S.jsxs("div", {
                children: [S.jsx("h3", {
                    className: "text-lg font-semibold mb-3",
                    children: getTranslation("动态获得属性")
                }), S.jsx("div", {
                    className: "space-y-2",
                    children: g.map(x => S.jsxs("div", {
                        className: "text-sm flex justify-between items-center bg-blue-900/50 p-2 rounded-md border border-blue-700",
                        children: [S.jsxs("div", {
                            children: [S.jsx("span", {
                                children: x.name
                            }), S.jsx("p", {
                                className: "text-xs text-muted-foreground",
                                children: x.comment
                            })]
                        }), S.jsx(el, {
                            variant: "default",
                            children: Mc(x)
                        })]
                    }, x.id))
                })]
            })]
        })]
    }) : d ? S.jsxs("div", {
        className: "p-4",
        children: [S.jsx("h3", {
            className: "text-lg font-semibold mb-4",
            children: getTranslation("已置入的石板")
        }), S.jsx("div", {
            className: "space-y-2",
            children: d.map( ([x,v]) => S.jsxs("div", {
                className: "text-sm flex justify-between items-center bg-muted/50 p-2 rounded-md",
                children: [S.jsx("span", {
                    children: x
                }), S.jsxs("span", {
                    className: "font-mono text-cyan-400",
                    children: ["✕ ", v]
                })]
            }, x))
        })]
    }) : S.jsx("div", {
        className: "flex items-center justify-center h-full text-muted-foreground",
        children: S.jsx("p", {
            children: getTranslation("未选中石板")
        })
    })
}
function pk(e, n) {
    return w.useReducer( (o, i) => n[o][i] ?? o, e)
}
var ii = e => {
    const {present: n, children: o} = e
      , i = hk(n)
      , a = typeof o == "function" ? o({
        present: i.isPresent
    }) : w.Children.only(o)
      , u = _e(i.ref, mk(a));
    return typeof o == "function" || i.isPresent ? w.cloneElement(a, {
        ref: u
    }) : null
}
;
ii.displayName = "Presence";
function hk(e) {
    const [n,o] = w.useState()
      , i = w.useRef({})
      , a = w.useRef(e)
      , u = w.useRef("none")
      , c = e ? "mounted" : "unmounted"
      , [d,p] = pk(c, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return w.useEffect( () => {
        const h = La(i.current);
        u.current = d === "mounted" ? h : "none"
    }
    , [d]),
    Nt( () => {
        const h = i.current
          , g = a.current;
        if (g !== e) {
            const x = u.current
              , v = La(h);
            e ? p("MOUNT") : v === "none" || h?.display === "none" ? p("UNMOUNT") : p(g && x !== v ? "ANIMATION_OUT" : "UNMOUNT"),
            a.current = e
        }
    }
    , [e, p]),
    Nt( () => {
        if (n) {
            let h;
            const g = n.ownerDocument.defaultView ?? window
              , y = v => {
                const C = La(i.current).includes(v.animationName);
                if (v.target === n && C && (p("ANIMATION_END"),
                !a.current)) {
                    const E = n.style.animationFillMode;
                    n.style.animationFillMode = "forwards",
                    h = g.setTimeout( () => {
                        n.style.animationFillMode === "forwards" && (n.style.animationFillMode = E)
                    }
                    )
                }
            }
              , x = v => {
                v.target === n && (u.current = La(i.current))
            }
            ;
            return n.addEventListener("animationstart", x),
            n.addEventListener("animationcancel", y),
            n.addEventListener("animationend", y),
            () => {
                g.clearTimeout(h),
                n.removeEventListener("animationstart", x),
                n.removeEventListener("animationcancel", y),
                n.removeEventListener("animationend", y)
            }
        } else
            p("ANIMATION_END")
    }
    , [n, p]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(d),
        ref: w.useCallback(h => {
            h && (i.current = getComputedStyle(h)),
            o(h)
        }
        , [])
    }
}
function La(e) {
    return e?.animationName || "none"
}
function mk(e) {
    let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get
      , o = n && "isReactWarning"in n && n.isReactWarning;
    return o ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get,
    o = n && "isReactWarning"in n && n.isReactWarning,
    o ? e.props.ref : e.props.ref || e.ref)
}
var [kl,Mj] = wn("Tooltip", [Sl])
  , Al = Sl()
  , w0 = "TooltipProvider"
  , gk = 700
  , pd = "tooltip.open"
  , [vk,df] = kl(w0)
  , S0 = e => {
    const {__scopeTooltip: n, delayDuration: o=gk, skipDelayDuration: i=300, disableHoverableContent: a=!1, children: u} = e
      , [c,d] = w.useState(!0)
      , p = w.useRef(!1)
      , h = w.useRef(0);
    return w.useEffect( () => {
        const g = h.current;
        return () => window.clearTimeout(g)
    }
    , []),
    S.jsx(vk, {
        scope: n,
        isOpenDelayed: c,
        delayDuration: o,
        onOpen: w.useCallback( () => {
            window.clearTimeout(h.current),
            d(!1)
        }
        , []),
        onClose: w.useCallback( () => {
            window.clearTimeout(h.current),
            h.current = window.setTimeout( () => d(!0), i)
        }
        , [i]),
        isPointerInTransitRef: p,
        onPointerInTransitChange: w.useCallback(g => {
            p.current = g
        }
        , []),
        disableHoverableContent: a,
        children: u
    })
}
;
S0.displayName = w0;
var Rl = "Tooltip"
  , [yk,Nl] = kl(Rl)
  , b0 = e => {
    const {__scopeTooltip: n, children: o, open: i, defaultOpen: a=!1, onOpenChange: u, disableHoverableContent: c, delayDuration: d} = e
      , p = df(Rl, e.__scopeTooltip)
      , h = Al(n)
      , [g,y] = w.useState(null)
      , x = Nr()
      , v = w.useRef(0)
      , T = c ?? p.disableHoverableContent
      , C = d ?? p.delayDuration
      , E = w.useRef(!1)
      , [P=!1,A] = jr({
        prop: i,
        defaultProp: a,
        onChange: I => {
            I ? (p.onOpen(),
            document.dispatchEvent(new CustomEvent(pd))) : p.onClose(),
            u?.(I)
        }
    })
      , R = w.useMemo( () => P ? E.current ? "delayed-open" : "instant-open" : "closed", [P])
      , O = w.useCallback( () => {
        window.clearTimeout(v.current),
        v.current = 0,
        E.current = !1,
        A(!0)
    }
    , [A])
      , j = w.useCallback( () => {
        window.clearTimeout(v.current),
        v.current = 0,
        A(!1)
    }
    , [A])
      , $ = w.useCallback( () => {
        window.clearTimeout(v.current),
        v.current = window.setTimeout( () => {
            E.current = !0,
            A(!0),
            v.current = 0
        }
        , C)
    }
    , [C, A]);
    return w.useEffect( () => () => {
        v.current && (window.clearTimeout(v.current),
        v.current = 0)
    }
    , []),
    S.jsx(by, {
        ...h,
        children: S.jsx(yk, {
            scope: n,
            contentId: x,
            open: P,
            stateAttribute: R,
            trigger: g,
            onTriggerChange: y,
            onTriggerEnter: w.useCallback( () => {
                p.isOpenDelayed ? $() : O()
            }
            , [p.isOpenDelayed, $, O]),
            onTriggerLeave: w.useCallback( () => {
                T ? j() : (window.clearTimeout(v.current),
                v.current = 0)
            }
            , [j, T]),
            onOpen: O,
            onClose: j,
            disableHoverableContent: T,
            children: o
        })
    })
}
;
b0.displayName = Rl;
var hd = "TooltipTrigger"
  , C0 = w.forwardRef( (e, n) => {
    const {__scopeTooltip: o, ...i} = e
      , a = Nl(hd, o)
      , u = df(hd, o)
      , c = Al(o)
      , d = w.useRef(null)
      , p = _e(n, d, a.onTriggerChange)
      , h = w.useRef(!1)
      , g = w.useRef(!1)
      , y = w.useCallback( () => h.current = !1, []);
    return w.useEffect( () => () => document.removeEventListener("pointerup", y), [y]),
    S.jsx(Cy, {
        asChild: !0,
        ...c,
        children: S.jsx(Ne.button, {
            "aria-describedby": a.open ? a.contentId : void 0,
            "data-state": a.stateAttribute,
            ...i,
            ref: p,
            onPointerMove: Ee(e.onPointerMove, x => {
                x.pointerType !== "touch" && !g.current && !u.isPointerInTransitRef.current && (a.onTriggerEnter(),
                g.current = !0)
            }
            ),
            onPointerLeave: Ee(e.onPointerLeave, () => {
                a.onTriggerLeave(),
                g.current = !1
            }
            ),
            onPointerDown: Ee(e.onPointerDown, () => {
                h.current = !0,
                document.addEventListener("pointerup", y, {
                    once: !0
                })
            }
            ),
            onFocus: Ee(e.onFocus, () => {
                h.current || a.onOpen()
            }
            ),
            onBlur: Ee(e.onBlur, a.onClose),
            onClick: Ee(e.onClick, a.onClose)
        })
    })
}
);
C0.displayName = hd;
var xk = "TooltipPortal"
  , [jj,wk] = kl(xk, {
    forceMount: void 0
})
  , qo = "TooltipContent"
  , E0 = w.forwardRef( (e, n) => {
    const o = wk(qo, e.__scopeTooltip)
      , {forceMount: i=o.forceMount, side: a="top", ...u} = e
      , c = Nl(qo, e.__scopeTooltip);
    return S.jsx(ii, {
        present: i || c.open,
        children: c.disableHoverableContent ? S.jsx(T0, {
            side: a,
            ...u,
            ref: n
        }) : S.jsx(Sk, {
            side: a,
            ...u,
            ref: n
        })
    })
}
)
  , Sk = w.forwardRef( (e, n) => {
    const o = Nl(qo, e.__scopeTooltip)
      , i = df(qo, e.__scopeTooltip)
      , a = w.useRef(null)
      , u = _e(n, a)
      , [c,d] = w.useState(null)
      , {trigger: p, onClose: h} = o
      , g = a.current
      , {onPointerInTransitChange: y} = i
      , x = w.useCallback( () => {
        d(null),
        y(!1)
    }
    , [y])
      , v = w.useCallback( (T, C) => {
        const E = T.currentTarget
          , P = {
            x: T.clientX,
            y: T.clientY
        }
          , A = Tk(P, E.getBoundingClientRect())
          , R = Pk(P, A)
          , O = kk(C.getBoundingClientRect())
          , j = Rk([...R, ...O]);
        d(j),
        y(!0)
    }
    , [y]);
    return w.useEffect( () => () => x(), [x]),
    w.useEffect( () => {
        if (p && g) {
            const T = E => v(E, g)
              , C = E => v(E, p);
            return p.addEventListener("pointerleave", T),
            g.addEventListener("pointerleave", C),
            () => {
                p.removeEventListener("pointerleave", T),
                g.removeEventListener("pointerleave", C)
            }
        }
    }
    , [p, g, v, x]),
    w.useEffect( () => {
        if (c) {
            const T = C => {
                const E = C.target
                  , P = {
                    x: C.clientX,
                    y: C.clientY
                }
                  , A = p?.contains(E) || g?.contains(E)
                  , R = !Ak(P, c);
                A ? x() : R && (x(),
                h())
            }
            ;
            return document.addEventListener("pointermove", T),
            () => document.removeEventListener("pointermove", T)
        }
    }
    , [p, g, c, h, x]),
    S.jsx(T0, {
        ...e,
        ref: u
    })
}
)
  , [bk,Ck] = kl(Rl, {
    isInside: !1
})
  , T0 = w.forwardRef( (e, n) => {
    const {__scopeTooltip: o, children: i, "aria-label": a, onEscapeKeyDown: u, onPointerDownOutside: c, ...d} = e
      , p = Nl(qo, o)
      , h = Al(o)
      , {onClose: g} = p;
    return w.useEffect( () => (document.addEventListener(pd, g),
    () => document.removeEventListener(pd, g)), [g]),
    w.useEffect( () => {
        if (p.trigger) {
            const y = x => {
                x.target?.contains(p.trigger) && g()
            }
            ;
            return window.addEventListener("scroll", y, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", y, {
                capture: !0
            })
        }
    }
    , [p.trigger, g]),
    S.jsx(gl, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: u,
        onPointerDownOutside: c,
        onFocusOutside: y => y.preventDefault(),
        onDismiss: g,
        children: S.jsxs(Ey, {
            "data-state": p.stateAttribute,
            ...h,
            ...d,
            ref: n,
            style: {
                ...d.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [S.jsx(Wd, {
                children: i
            }), S.jsx(bk, {
                scope: o,
                isInside: !0,
                children: S.jsx(XT, {
                    id: p.contentId,
                    role: "tooltip",
                    children: a || i
                })
            })]
        })
    })
}
);
E0.displayName = qo;
var P0 = "TooltipArrow"
  , Ek = w.forwardRef( (e, n) => {
    const {__scopeTooltip: o, ...i} = e
      , a = Al(o);
    return Ck(P0, o).isInside ? null : S.jsx(Ty, {
        ...a,
        ...i,
        ref: n
    })
}
);
Ek.displayName = P0;
function Tk(e, n) {
    const o = Math.abs(n.top - e.y)
      , i = Math.abs(n.bottom - e.y)
      , a = Math.abs(n.right - e.x)
      , u = Math.abs(n.left - e.x);
    switch (Math.min(o, i, a, u)) {
    case u:
        return "left";
    case a:
        return "right";
    case o:
        return "top";
    case i:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function Pk(e, n, o=5) {
    const i = [];
    switch (n) {
    case "top":
        i.push({
            x: e.x - o,
            y: e.y + o
        }, {
            x: e.x + o,
            y: e.y + o
        });
        break;
    case "bottom":
        i.push({
            x: e.x - o,
            y: e.y - o
        }, {
            x: e.x + o,
            y: e.y - o
        });
        break;
    case "left":
        i.push({
            x: e.x + o,
            y: e.y - o
        }, {
            x: e.x + o,
            y: e.y + o
        });
        break;
    case "right":
        i.push({
            x: e.x - o,
            y: e.y - o
        }, {
            x: e.x - o,
            y: e.y + o
        });
        break
    }
    return i
}
function kk(e) {
    const {top: n, right: o, bottom: i, left: a} = e;
    return [{
        x: a,
        y: n
    }, {
        x: o,
        y: n
    }, {
        x: o,
        y: i
    }, {
        x: a,
        y: i
    }]
}
function Ak(e, n) {
    const {x: o, y: i} = e;
    let a = !1;
    for (let u = 0, c = n.length - 1; u < n.length; c = u++) {
        const d = n[u].x
          , p = n[u].y
          , h = n[c].x
          , g = n[c].y;
        p > i != g > i && o < (h - d) * (i - p) / (g - p) + d && (a = !a)
    }
    return a
}
function Rk(e) {
    const n = e.slice();
    return n.sort( (o, i) => o.x < i.x ? -1 : o.x > i.x ? 1 : o.y < i.y ? -1 : o.y > i.y ? 1 : 0),
    Nk(n)
}
function Nk(e) {
    if (e.length <= 1)
        return e.slice();
    const n = [];
    for (let i = 0; i < e.length; i++) {
        const a = e[i];
        for (; n.length >= 2; ) {
            const u = n[n.length - 1]
              , c = n[n.length - 2];
            if ((u.x - c.x) * (a.y - c.y) >= (u.y - c.y) * (a.x - c.x))
                n.pop();
            else
                break
        }
        n.push(a)
    }
    n.pop();
    const o = [];
    for (let i = e.length - 1; i >= 0; i--) {
        const a = e[i];
        for (; o.length >= 2; ) {
            const u = o[o.length - 1]
              , c = o[o.length - 2];
            if ((u.x - c.x) * (a.y - c.y) >= (u.y - c.y) * (a.x - c.x))
                o.pop();
            else
                break
        }
        o.push(a)
    }
    return o.pop(),
    n.length === 1 && o.length === 1 && n[0].x === o[0].x && n[0].y === o[0].y ? n : n.concat(o)
}
var Dk = S0
  , Mk = b0
  , jk = C0
  , k0 = E0;
const Ok = Dk
  , _k = Mk
  , Ik = jk
  , A0 = w.forwardRef( ({className: e, sideOffset: n=4, ...o}, i) => S.jsx(k0, {
    ref: i,
    sideOffset: n,
    className: Re("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-sm text-primary-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]", e),
    ...o
}));
A0.displayName = k0.displayName;
const Lk = ({iconName: e, ...n}) => {
    switch (e) {
    case "a_1":
        return S.jsx("svg", {
            viewBox: "0 0 192 192",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...n,
            children: S.jsx("path", {
                d: "M126 96H186V156H66V96H6V36H126V96Z",
                fill: "#A855F7"
            })
        });
    case "a_2":
        return S.jsx("svg", {
            viewBox: "0 0 192 192",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...n,
            children: S.jsx("path", {
                d: "M66 96H186V156H6V36H66V96Z",
                fill: "#A855F7"
            })
        });
    case "a_3":
        return S.jsx("svg", {
            viewBox: "0 0 192 192",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...n,
            children: S.jsx("path", {
                d: "M126 96H186V156H6V96H66V36H126V96Z",
                fill: "#A855F7"
            })
        });
    case "a_4":
        return S.jsx("svg", {
            viewBox: "0 0 192 192",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...n,
            children: S.jsx("rect", {
                x: "36",
                y: "36",
                width: "120",
                height: "120",
                fill: "#A855F7"
            })
        });
    case "b_1":
        return S.jsx("svg", {
            viewBox: "0 0 192 192",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...n,
            children: S.jsx("rect", {
                x: "156",
                y: "66",
                width: "60",
                height: "120",
                transform: "rotate(90 156 66)",
                fill: "#FFDD00"
            })
        });
    case "b_2":
        return S.jsx("svg", {
            viewBox: "0 0 192 192",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...n,
            children: S.jsx("rect", {
                x: "156",
                y: "66",
                width: "60",
                height: "120",
                transform: "rotate(90 156 66)",
                fill: "#FDBA74"
            })
        });
    case "c":
        return S.jsx("svg", {
            viewBox: "0 0 192 192",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...n,
            children: S.jsx("path", {
                d: "M156 96H96V156H36V36H156V96Z",
                fill: "#FFDD00"
            })
        });
    case "d_1":
        return S.jsx("svg", {
            viewBox: "0 0 192 192",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...n,
            children: S.jsx("rect", {
                x: "136",
                y: "56",
                width: "80",
                height: "80",
                transform: "rotate(90 136 56)",
                fill: "#F59E0B"
            })
        });
    case "d_2":
        return S.jsx("svg", {
            viewBox: "0 0 192 192",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...n,
            children: S.jsx("rect", {
                x: "136",
                y: "56",
                width: "80",
                height: "80",
                transform: "rotate(90 136 56)",
                fill: "#FDA4AF"
            })
        });
    case "e":
        return S.jsx("svg", {
            viewBox: "0 0 192 192",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...n,
            children: S.jsx("rect", {
                x: "78",
                y: "6",
                width: "36",
                height: "180",
                fill: "#FFDD00"
            })
        });
    default:
        return null
    }
}
  , Vk = e => {
    switch (e.type) {
    case "A":
        return Xe.A.name;
    case "B":
        return e.subType === "yellow" ? Xe.B_Yellow.name : Xe.B_Orange.name;
    case "C":
        return Xe.C.name;
    case "D":
        return e.subType === "S1_Pink" ? Xe.D_Pink.name : Xe.D.name;
    case "E":
        return Xe.E.name;
    default:
        return getTranslation("未知石板")
    }
}
;
function Fk({onStoneClick: e}) {
    return S.jsxs("div", {
        className: "p-4 border-t",
        children: [S.jsx("h3", {
            className: "text-sm font-medium mb-4 text-center",
            children: getTranslation("点击置入石板")
        }), S.jsx("div", {
            className: "grid grid-cols-2 gap-4",
            children: TC.map( (n, o) => S.jsx(Ok, {
                children: S.jsxs(_k, {
                    delayDuration: 200,
                    children: [S.jsx(Ik, {
                        asChild: !0,
                        children: S.jsx("button", {
                            onClick: () => e(n),
                            className: "p-2 border rounded-lg flex items-center justify-center aspect-square hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring",
                            children: S.jsx(Lk, {
                                iconName: n.icon,
                                className: "w-20 h-20"
                            })
                        })
                    }), S.jsx(A0, {
                        children: S.jsx("p", {
                            children: Vk(n)
                        })
                    })]
                })
            }, o))
        })]
    })
}
const Bk = 1 / 3
  , Mn = 1 / 6
  , jc = e => Math.floor(e) | 0
  , Oc = new Float64Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]);
function zk(e=Math.random) {
    const n = $k(e)
      , o = new Float64Array(n).map(u => Oc[u % 12 * 3])
      , i = new Float64Array(n).map(u => Oc[u % 12 * 3 + 1])
      , a = new Float64Array(n).map(u => Oc[u % 12 * 3 + 2]);
    return function(c, d, p) {
        let h, g, y, x;
        const v = (c + d + p) * Bk
          , T = jc(c + v)
          , C = jc(d + v)
          , E = jc(p + v)
          , P = (T + C + E) * Mn
          , A = T - P
          , R = C - P
          , O = E - P
          , j = c - A
          , $ = d - R
          , I = p - O;
        let U, oe, J, ne, Z, le;
        j >= $ ? $ >= I ? (U = 1,
        oe = 0,
        J = 0,
        ne = 1,
        Z = 1,
        le = 0) : j >= I ? (U = 1,
        oe = 0,
        J = 0,
        ne = 1,
        Z = 0,
        le = 1) : (U = 0,
        oe = 0,
        J = 1,
        ne = 1,
        Z = 0,
        le = 1) : $ < I ? (U = 0,
        oe = 0,
        J = 1,
        ne = 0,
        Z = 1,
        le = 1) : j < I ? (U = 0,
        oe = 1,
        J = 0,
        ne = 0,
        Z = 1,
        le = 1) : (U = 0,
        oe = 1,
        J = 0,
        ne = 1,
        Z = 1,
        le = 0);
        const ue = j - U + Mn
          , ge = $ - oe + Mn
          , re = I - J + Mn
          , Q = j - ne + 2 * Mn
          , V = $ - Z + 2 * Mn
          , H = I - le + 2 * Mn
          , G = j - 1 + 3 * Mn
          , D = $ - 1 + 3 * Mn
          , z = I - 1 + 3 * Mn
          , se = T & 255
          , ae = C & 255
          , pe = E & 255;
        let K = .6 - j * j - $ * $ - I * I;
        if (K < 0)
            h = 0;
        else {
            const ce = se + n[ae + n[pe]];
            K *= K,
            h = K * K * (o[ce] * j + i[ce] * $ + a[ce] * I)
        }
        let F = .6 - ue * ue - ge * ge - re * re;
        if (F < 0)
            g = 0;
        else {
            const ce = se + U + n[ae + oe + n[pe + J]];
            F *= F,
            g = F * F * (o[ce] * ue + i[ce] * ge + a[ce] * re)
        }
        let ee = .6 - Q * Q - V * V - H * H;
        if (ee < 0)
            y = 0;
        else {
            const ce = se + ne + n[ae + Z + n[pe + le]];
            ee *= ee,
            y = ee * ee * (o[ce] * Q + i[ce] * V + a[ce] * H)
        }
        let he = .6 - G * G - D * D - z * z;
        if (he < 0)
            x = 0;
        else {
            const ce = se + 1 + n[ae + 1 + n[pe + 1]];
            he *= he,
            x = he * he * (o[ce] * G + i[ce] * D + a[ce] * z)
        }
        return 32 * (h + g + y + x)
    }
}
function $k(e) {
    const o = new Uint8Array(512);
    for (let i = 0; i < 512 / 2; i++)
        o[i] = i;
    for (let i = 0; i < 512 / 2 - 1; i++) {
        const a = i + ~~(e() * (256 - i))
          , u = o[i];
        o[i] = o[a],
        o[a] = u
    }
    for (let i = 256; i < 512; i++)
        o[i] = o[i - 256];
    return o
}
const R0 = w.createContext({});
function Hk(e) {
    const n = w.useRef(null);
    return n.current === null && (n.current = e()),
    n.current
}
const ff = typeof window < "u"
  , Uk = ff ? w.useLayoutEffect : w.useEffect
  , pf = w.createContext(null);
function hf(e, n) {
    e.indexOf(n) === -1 && e.push(n)
}
function mf(e, n) {
    const o = e.indexOf(n);
    o > -1 && e.splice(o, 1)
}
const tr = (e, n, o) => o > n ? n : o < e ? e : o;
let gf = () => {}
;
const nr = {}
  , N0 = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function D0(e) {
    return typeof e == "object" && e !== null
}
const M0 = e => /^0[^.\s]+$/u.test(e);
function vf(e) {
    let n;
    return () => (n === void 0 && (n = e()),
    n)
}
const on = e => e
  , Wk = (e, n) => o => n(e(o))
  , hs = (...e) => e.reduce(Wk)
  , is = (e, n, o) => {
    const i = n - e;
    return i === 0 ? 1 : (o - e) / i
}
;
class yf {
    constructor() {
        this.subscriptions = []
    }
    add(n) {
        return hf(this.subscriptions, n),
        () => mf(this.subscriptions, n)
    }
    notify(n, o, i) {
        const a = this.subscriptions.length;
        if (a)
            if (a === 1)
                this.subscriptions[0](n, o, i);
            else
                for (let u = 0; u < a; u++) {
                    const c = this.subscriptions[u];
                    c && c(n, o, i)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const In = e => e * 1e3
  , Ln = e => e / 1e3;
function j0(e, n) {
    return n ? e * (1e3 / n) : 0
}
const O0 = (e, n, o) => (((1 - 3 * o + 3 * n) * e + (3 * o - 6 * n)) * e + 3 * n) * e
  , Kk = 1e-7
  , Gk = 12;
function Yk(e, n, o, i, a) {
    let u, c, d = 0;
    do
        c = n + (o - n) / 2,
        u = O0(c, i, a) - e,
        u > 0 ? o = c : n = c;
    while (Math.abs(u) > Kk && ++d < Gk);
    return c
}
function ms(e, n, o, i) {
    if (e === n && o === i)
        return on;
    const a = u => Yk(u, 0, 1, e, o);
    return u => u === 0 || u === 1 ? u : O0(a(u), n, i)
}
const _0 = e => n => n <= .5 ? e(2 * n) / 2 : (2 - e(2 * (1 - n))) / 2
  , I0 = e => n => 1 - e(1 - n)
  , L0 = ms(.33, 1.53, .69, .99)
  , xf = I0(L0)
  , V0 = _0(xf)
  , F0 = e => (e *= 2) < 1 ? .5 * xf(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , wf = e => 1 - Math.sin(Math.acos(e))
  , B0 = I0(wf)
  , z0 = _0(wf)
  , Xk = ms(.42, 0, 1, 1)
  , Qk = ms(0, 0, .58, 1)
  , $0 = ms(.42, 0, .58, 1)
  , Zk = e => Array.isArray(e) && typeof e[0] != "number"
  , H0 = e => Array.isArray(e) && typeof e[0] == "number"
  , qk = {
    linear: on,
    easeIn: Xk,
    easeInOut: $0,
    easeOut: Qk,
    circIn: wf,
    circInOut: z0,
    circOut: B0,
    backIn: xf,
    backInOut: V0,
    backOut: L0,
    anticipate: F0
}
  , Jk = e => typeof e == "string"
  , hg = e => {
    if (H0(e)) {
        gf(e.length === 4);
        const [n,o,i,a] = e;
        return ms(n, o, i, a)
    } else if (Jk(e))
        return qk[e];
    return e
}
  , Va = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
function eA(e, n) {
    let o = new Set
      , i = new Set
      , a = !1
      , u = !1;
    const c = new WeakSet;
    let d = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function p(g) {
        c.has(g) && (h.schedule(g),
        e()),
        g(d)
    }
    const h = {
        schedule: (g, y=!1, x=!1) => {
            const T = x && a ? o : i;
            return y && c.add(g),
            T.has(g) || T.add(g),
            g
        }
        ,
        cancel: g => {
            i.delete(g),
            c.delete(g)
        }
        ,
        process: g => {
            if (d = g,
            a) {
                u = !0;
                return
            }
            a = !0,
            [o,i] = [i, o],
            o.forEach(p),
            o.clear(),
            a = !1,
            u && (u = !1,
            h.process(g))
        }
    };
    return h
}
const tA = 40;
function U0(e, n) {
    let o = !1
      , i = !0;
    const a = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , u = () => o = !0
      , c = Va.reduce( (R, O) => (R[O] = eA(u),
    R), {})
      , {setup: d, read: p, resolveKeyframes: h, preUpdate: g, update: y, preRender: x, render: v, postRender: T} = c
      , C = () => {
        const R = nr.useManualTiming ? a.timestamp : performance.now();
        o = !1,
        nr.useManualTiming || (a.delta = i ? 1e3 / 60 : Math.max(Math.min(R - a.timestamp, tA), 1)),
        a.timestamp = R,
        a.isProcessing = !0,
        d.process(a),
        p.process(a),
        h.process(a),
        g.process(a),
        y.process(a),
        x.process(a),
        v.process(a),
        T.process(a),
        a.isProcessing = !1,
        o && n && (i = !1,
        e(C))
    }
      , E = () => {
        o = !0,
        i = !0,
        a.isProcessing || e(C)
    }
    ;
    return {
        schedule: Va.reduce( (R, O) => {
            const j = c[O];
            return R[O] = ($, I=!1, U=!1) => (o || E(),
            j.schedule($, I, U)),
            R
        }
        , {}),
        cancel: R => {
            for (let O = 0; O < Va.length; O++)
                c[Va[O]].cancel(R)
        }
        ,
        state: a,
        steps: c
    }
}
const {schedule: Qe, cancel: Or, state: vt, steps: _c} = U0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : on, !0);
let Ka;
function nA() {
    Ka = void 0
}
const zt = {
    now: () => (Ka === void 0 && zt.set(vt.isProcessing || nr.useManualTiming ? vt.timestamp : performance.now()),
    Ka),
    set: e => {
        Ka = e,
        queueMicrotask(nA)
    }
}
  , W0 = e => n => typeof n == "string" && n.startsWith(e)
  , Sf = W0("--")
  , rA = W0("var(--")
  , bf = e => rA(e) ? oA.test(e.split("/*")[0].trim()) : !1
  , oA = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , si = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
  , ss = {
    ...si,
    transform: e => tr(0, 1, e)
}
  , Fa = {
    ...si,
    default: 1
}
  , qi = e => Math.round(e * 1e5) / 1e5
  , Cf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function iA(e) {
    return e == null
}
const sA = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , Ef = (e, n) => o => !!(typeof o == "string" && sA.test(o) && o.startsWith(e) || n && !iA(o) && Object.prototype.hasOwnProperty.call(o, n))
  , K0 = (e, n, o) => i => {
    if (typeof i != "string")
        return i;
    const [a,u,c,d] = i.match(Cf);
    return {
        [e]: parseFloat(a),
        [n]: parseFloat(u),
        [o]: parseFloat(c),
        alpha: d !== void 0 ? parseFloat(d) : 1
    }
}
  , aA = e => tr(0, 255, e)
  , Ic = {
    ...si,
    transform: e => Math.round(aA(e))
}
  , no = {
    test: Ef("rgb", "red"),
    parse: K0("red", "green", "blue"),
    transform: ({red: e, green: n, blue: o, alpha: i=1}) => "rgba(" + Ic.transform(e) + ", " + Ic.transform(n) + ", " + Ic.transform(o) + ", " + qi(ss.transform(i)) + ")"
};
function lA(e) {
    let n = ""
      , o = ""
      , i = ""
      , a = "";
    return e.length > 5 ? (n = e.substring(1, 3),
    o = e.substring(3, 5),
    i = e.substring(5, 7),
    a = e.substring(7, 9)) : (n = e.substring(1, 2),
    o = e.substring(2, 3),
    i = e.substring(3, 4),
    a = e.substring(4, 5),
    n += n,
    o += o,
    i += i,
    a += a),
    {
        red: parseInt(n, 16),
        green: parseInt(o, 16),
        blue: parseInt(i, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1
    }
}
const md = {
    test: Ef("#"),
    parse: lA,
    transform: no.transform
}
  , gs = e => ({
    test: n => typeof n == "string" && n.endsWith(e) && n.split(" ").length === 1,
    parse: parseFloat,
    transform: n => `${n}${e}`
})
  , Rr = gs("deg")
  , Vn = gs("%")
  , Ce = gs("px")
  , uA = gs("vh")
  , cA = gs("vw")
  , mg = {
    ...Vn,
    parse: e => Vn.parse(e) / 100,
    transform: e => Vn.transform(e * 100)
}
  , Bo = {
    test: Ef("hsl", "hue"),
    parse: K0("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: n, lightness: o, alpha: i=1}) => "hsla(" + Math.round(e) + ", " + Vn.transform(qi(n)) + ", " + Vn.transform(qi(o)) + ", " + qi(ss.transform(i)) + ")"
}
  , at = {
    test: e => no.test(e) || md.test(e) || Bo.test(e),
    parse: e => no.test(e) ? no.parse(e) : Bo.test(e) ? Bo.parse(e) : md.parse(e),
    transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? no.transform(e) : Bo.transform(e),
    getAnimatableNone: e => {
        const n = at.parse(e);
        return n.alpha = 0,
        at.transform(n)
    }
}
  , dA = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function fA(e) {
    return isNaN(e) && typeof e == "string" && (e.match(Cf)?.length || 0) + (e.match(dA)?.length || 0) > 0
}
const G0 = "number"
  , Y0 = "color"
  , pA = "var"
  , hA = "var("
  , gg = "${}"
  , mA = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function as(e) {
    const n = e.toString()
      , o = []
      , i = {
        color: [],
        number: [],
        var: []
    }
      , a = [];
    let u = 0;
    const d = n.replace(mA, p => (at.test(p) ? (i.color.push(u),
    a.push(Y0),
    o.push(at.parse(p))) : p.startsWith(hA) ? (i.var.push(u),
    a.push(pA),
    o.push(p)) : (i.number.push(u),
    a.push(G0),
    o.push(parseFloat(p))),
    ++u,
    gg)).split(gg);
    return {
        values: o,
        split: d,
        indexes: i,
        types: a
    }
}
function X0(e) {
    return as(e).values
}
function Q0(e) {
    const {split: n, types: o} = as(e)
      , i = n.length;
    return a => {
        let u = "";
        for (let c = 0; c < i; c++)
            if (u += n[c],
            a[c] !== void 0) {
                const d = o[c];
                d === G0 ? u += qi(a[c]) : d === Y0 ? u += at.transform(a[c]) : u += a[c]
            }
        return u
    }
}
const gA = e => typeof e == "number" ? 0 : at.test(e) ? at.getAnimatableNone(e) : e;
function vA(e) {
    const n = X0(e);
    return Q0(e)(n.map(gA))
}
const _r = {
    test: fA,
    parse: X0,
    createTransformer: Q0,
    getAnimatableNone: vA
};
function Lc(e, n, o) {
    return o < 0 && (o += 1),
    o > 1 && (o -= 1),
    o < 1 / 6 ? e + (n - e) * 6 * o : o < 1 / 2 ? n : o < 2 / 3 ? e + (n - e) * (2 / 3 - o) * 6 : e
}
function yA({hue: e, saturation: n, lightness: o, alpha: i}) {
    e /= 360,
    n /= 100,
    o /= 100;
    let a = 0
      , u = 0
      , c = 0;
    if (!n)
        a = u = c = o;
    else {
        const d = o < .5 ? o * (1 + n) : o + n - o * n
          , p = 2 * o - d;
        a = Lc(p, d, e + 1 / 3),
        u = Lc(p, d, e),
        c = Lc(p, d, e - 1 / 3)
    }
    return {
        red: Math.round(a * 255),
        green: Math.round(u * 255),
        blue: Math.round(c * 255),
        alpha: i
    }
}
function ul(e, n) {
    return o => o > 0 ? n : e
}
const Je = (e, n, o) => e + (n - e) * o
  , Vc = (e, n, o) => {
    const i = e * e
      , a = o * (n * n - i) + i;
    return a < 0 ? 0 : Math.sqrt(a)
}
  , xA = [md, no, Bo]
  , wA = e => xA.find(n => n.test(e));
function vg(e) {
    const n = wA(e);
    if (!n)
        return !1;
    let o = n.parse(e);
    return n === Bo && (o = yA(o)),
    o
}
const yg = (e, n) => {
    const o = vg(e)
      , i = vg(n);
    if (!o || !i)
        return ul(e, n);
    const a = {
        ...o
    };
    return u => (a.red = Vc(o.red, i.red, u),
    a.green = Vc(o.green, i.green, u),
    a.blue = Vc(o.blue, i.blue, u),
    a.alpha = Je(o.alpha, i.alpha, u),
    no.transform(a))
}
  , gd = new Set(["none", "hidden"]);
function SA(e, n) {
    return gd.has(e) ? o => o <= 0 ? e : n : o => o >= 1 ? n : e
}
function bA(e, n) {
    return o => Je(e, n, o)
}
function Tf(e) {
    return typeof e == "number" ? bA : typeof e == "string" ? bf(e) ? ul : at.test(e) ? yg : TA : Array.isArray(e) ? Z0 : typeof e == "object" ? at.test(e) ? yg : CA : ul
}
function Z0(e, n) {
    const o = [...e]
      , i = o.length
      , a = e.map( (u, c) => Tf(u)(u, n[c]));
    return u => {
        for (let c = 0; c < i; c++)
            o[c] = a[c](u);
        return o
    }
}
function CA(e, n) {
    const o = {
        ...e,
        ...n
    }
      , i = {};
    for (const a in o)
        e[a] !== void 0 && n[a] !== void 0 && (i[a] = Tf(e[a])(e[a], n[a]));
    return a => {
        for (const u in i)
            o[u] = i[u](a);
        return o
    }
}
function EA(e, n) {
    const o = []
      , i = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let a = 0; a < n.values.length; a++) {
        const u = n.types[a]
          , c = e.indexes[u][i[u]]
          , d = e.values[c] ?? 0;
        o[a] = d,
        i[u]++
    }
    return o
}
const TA = (e, n) => {
    const o = _r.createTransformer(n)
      , i = as(e)
      , a = as(n);
    return i.indexes.var.length === a.indexes.var.length && i.indexes.color.length === a.indexes.color.length && i.indexes.number.length >= a.indexes.number.length ? gd.has(e) && !a.values.length || gd.has(n) && !i.values.length ? SA(e, n) : hs(Z0(EA(i, a), a.values), o) : ul(e, n)
}
;
function q0(e, n, o) {
    return typeof e == "number" && typeof n == "number" && typeof o == "number" ? Je(e, n, o) : Tf(e)(e, n)
}
const PA = e => {
    const n = ({timestamp: o}) => e(o);
    return {
        start: (o=!0) => Qe.update(n, o),
        stop: () => Or(n),
        now: () => vt.isProcessing ? vt.timestamp : zt.now()
    }
}
  , J0 = (e, n, o=10) => {
    let i = "";
    const a = Math.max(Math.round(n / o), 2);
    for (let u = 0; u < a; u++)
        i += Math.round(e(u / (a - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${i.substring(0, i.length - 2)})`
}
  , cl = 2e4;
function Pf(e) {
    let n = 0;
    const o = 50;
    let i = e.next(n);
    for (; !i.done && n < cl; )
        n += o,
        i = e.next(n);
    return n >= cl ? 1 / 0 : n
}
function kA(e, n=100, o) {
    const i = o({
        ...e,
        keyframes: [0, n]
    })
      , a = Math.min(Pf(i), cl);
    return {
        type: "keyframes",
        ease: u => i.next(a * u).value / n,
        duration: Ln(a)
    }
}
const AA = 5;
function ex(e, n, o) {
    const i = Math.max(n - AA, 0);
    return j0(o - e(i), n - i)
}
const tt = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , Fc = .001;
function RA({duration: e=tt.duration, bounce: n=tt.bounce, velocity: o=tt.velocity, mass: i=tt.mass}) {
    let a, u, c = 1 - n;
    c = tr(tt.minDamping, tt.maxDamping, c),
    e = tr(tt.minDuration, tt.maxDuration, Ln(e)),
    c < 1 ? (a = h => {
        const g = h * c
          , y = g * e
          , x = g - o
          , v = vd(h, c)
          , T = Math.exp(-y);
        return Fc - x / v * T
    }
    ,
    u = h => {
        const y = h * c * e
          , x = y * o + o
          , v = Math.pow(c, 2) * Math.pow(h, 2) * e
          , T = Math.exp(-y)
          , C = vd(Math.pow(h, 2), c);
        return (-a(h) + Fc > 0 ? -1 : 1) * ((x - v) * T) / C
    }
    ) : (a = h => {
        const g = Math.exp(-h * e)
          , y = (h - o) * e + 1;
        return -Fc + g * y
    }
    ,
    u = h => {
        const g = Math.exp(-h * e)
          , y = (o - h) * (e * e);
        return g * y
    }
    );
    const d = 5 / e
      , p = DA(a, u, d);
    if (e = In(e),
    isNaN(p))
        return {
            stiffness: tt.stiffness,
            damping: tt.damping,
            duration: e
        };
    {
        const h = Math.pow(p, 2) * i;
        return {
            stiffness: h,
            damping: c * 2 * Math.sqrt(i * h),
            duration: e
        }
    }
}
const NA = 12;
function DA(e, n, o) {
    let i = o;
    for (let a = 1; a < NA; a++)
        i = i - e(i) / n(i);
    return i
}
function vd(e, n) {
    return e * Math.sqrt(1 - n * n)
}
const MA = ["duration", "bounce"]
  , jA = ["stiffness", "damping", "mass"];
function xg(e, n) {
    return n.some(o => e[o] !== void 0)
}
function OA(e) {
    let n = {
        velocity: tt.velocity,
        stiffness: tt.stiffness,
        damping: tt.damping,
        mass: tt.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!xg(e, jA) && xg(e, MA))
        if (e.visualDuration) {
            const o = e.visualDuration
              , i = 2 * Math.PI / (o * 1.2)
              , a = i * i
              , u = 2 * tr(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(a);
            n = {
                ...n,
                mass: tt.mass,
                stiffness: a,
                damping: u
            }
        } else {
            const o = RA(e);
            n = {
                ...n,
                ...o,
                mass: tt.mass
            },
            n.isResolvedFromDuration = !0
        }
    return n
}
function dl(e=tt.visualDuration, n=tt.bounce) {
    const o = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: n
    } : e;
    let {restSpeed: i, restDelta: a} = o;
    const u = o.keyframes[0]
      , c = o.keyframes[o.keyframes.length - 1]
      , d = {
        done: !1,
        value: u
    }
      , {stiffness: p, damping: h, mass: g, duration: y, velocity: x, isResolvedFromDuration: v} = OA({
        ...o,
        velocity: -Ln(o.velocity || 0)
    })
      , T = x || 0
      , C = h / (2 * Math.sqrt(p * g))
      , E = c - u
      , P = Ln(Math.sqrt(p / g))
      , A = Math.abs(E) < 5;
    i || (i = A ? tt.restSpeed.granular : tt.restSpeed.default),
    a || (a = A ? tt.restDelta.granular : tt.restDelta.default);
    let R;
    if (C < 1) {
        const j = vd(P, C);
        R = $ => {
            const I = Math.exp(-C * P * $);
            return c - I * ((T + C * P * E) / j * Math.sin(j * $) + E * Math.cos(j * $))
        }
    } else if (C === 1)
        R = j => c - Math.exp(-P * j) * (E + (T + P * E) * j);
    else {
        const j = P * Math.sqrt(C * C - 1);
        R = $ => {
            const I = Math.exp(-C * P * $)
              , U = Math.min(j * $, 300);
            return c - I * ((T + C * P * E) * Math.sinh(U) + j * E * Math.cosh(U)) / j
        }
    }
    const O = {
        calculatedDuration: v && y || null,
        next: j => {
            const $ = R(j);
            if (v)
                d.done = j >= y;
            else {
                let I = j === 0 ? T : 0;
                C < 1 && (I = j === 0 ? In(T) : ex(R, j, $));
                const U = Math.abs(I) <= i
                  , oe = Math.abs(c - $) <= a;
                d.done = U && oe
            }
            return d.value = d.done ? c : $,
            d
        }
        ,
        toString: () => {
            const j = Math.min(Pf(O), cl)
              , $ = J0(I => O.next(j * I).value, j, 30);
            return j + "ms " + $
        }
        ,
        toTransition: () => {}
    };
    return O
}
dl.applyToOptions = e => {
    const n = kA(e, 100, dl);
    return e.ease = n.ease,
    e.duration = In(n.duration),
    e.type = "keyframes",
    e
}
;
function yd({keyframes: e, velocity: n=0, power: o=.8, timeConstant: i=325, bounceDamping: a=10, bounceStiffness: u=500, modifyTarget: c, min: d, max: p, restDelta: h=.5, restSpeed: g}) {
    const y = e[0]
      , x = {
        done: !1,
        value: y
    }
      , v = U => d !== void 0 && U < d || p !== void 0 && U > p
      , T = U => d === void 0 ? p : p === void 0 || Math.abs(d - U) < Math.abs(p - U) ? d : p;
    let C = o * n;
    const E = y + C
      , P = c === void 0 ? E : c(E);
    P !== E && (C = P - y);
    const A = U => -C * Math.exp(-U / i)
      , R = U => P + A(U)
      , O = U => {
        const oe = A(U)
          , J = R(U);
        x.done = Math.abs(oe) <= h,
        x.value = x.done ? P : J
    }
    ;
    let j, $;
    const I = U => {
        v(x.value) && (j = U,
        $ = dl({
            keyframes: [x.value, T(x.value)],
            velocity: ex(R, U, x.value),
            damping: a,
            stiffness: u,
            restDelta: h,
            restSpeed: g
        }))
    }
    ;
    return I(0),
    {
        calculatedDuration: null,
        next: U => {
            let oe = !1;
            return !$ && j === void 0 && (oe = !0,
            O(U),
            I(U)),
            j !== void 0 && U >= j ? $.next(U - j) : (!oe && O(U),
            x)
        }
    }
}
function _A(e, n, o) {
    const i = []
      , a = o || nr.mix || q0
      , u = e.length - 1;
    for (let c = 0; c < u; c++) {
        let d = a(e[c], e[c + 1]);
        if (n) {
            const p = Array.isArray(n) ? n[c] || on : n;
            d = hs(p, d)
        }
        i.push(d)
    }
    return i
}
function IA(e, n, {clamp: o=!0, ease: i, mixer: a}={}) {
    const u = e.length;
    if (gf(u === n.length),
    u === 1)
        return () => n[0];
    if (u === 2 && n[0] === n[1])
        return () => n[1];
    const c = e[0] === e[1];
    e[0] > e[u - 1] && (e = [...e].reverse(),
    n = [...n].reverse());
    const d = _A(n, i, a)
      , p = d.length
      , h = g => {
        if (c && g < e[0])
            return n[0];
        let y = 0;
        if (p > 1)
            for (; y < e.length - 2 && !(g < e[y + 1]); y++)
                ;
        const x = is(e[y], e[y + 1], g);
        return d[y](x)
    }
    ;
    return o ? g => h(tr(e[0], e[u - 1], g)) : h
}
function LA(e, n) {
    const o = e[e.length - 1];
    for (let i = 1; i <= n; i++) {
        const a = is(0, n, i);
        e.push(Je(o, 1, a))
    }
}
function VA(e) {
    const n = [0];
    return LA(n, e.length - 1),
    n
}
function FA(e, n) {
    return e.map(o => o * n)
}
function BA(e, n) {
    return e.map( () => n || $0).splice(0, e.length - 1)
}
function Ji({duration: e=300, keyframes: n, times: o, ease: i="easeInOut"}) {
    const a = Zk(i) ? i.map(hg) : hg(i)
      , u = {
        done: !1,
        value: n[0]
    }
      , c = FA(o && o.length === n.length ? o : VA(n), e)
      , d = IA(c, n, {
        ease: Array.isArray(a) ? a : BA(n, a)
    });
    return {
        calculatedDuration: e,
        next: p => (u.value = d(p),
        u.done = p >= e,
        u)
    }
}
const zA = e => e !== null;
function kf(e, {repeat: n, repeatType: o="loop"}, i, a=1) {
    const u = e.filter(zA)
      , d = a < 0 || n && o !== "loop" && n % 2 === 1 ? 0 : u.length - 1;
    return !d || i === void 0 ? u[d] : i
}
const $A = {
    decay: yd,
    inertia: yd,
    tween: Ji,
    keyframes: Ji,
    spring: dl
};
function tx(e) {
    typeof e.type == "string" && (e.type = $A[e.type])
}
class Af {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(n => {
            this.resolve = n
        }
        )
    }
    notifyFinished() {
        this.resolve()
    }
    then(n, o) {
        return this.finished.then(n, o)
    }
}
const HA = e => e / 100;
class Rf extends Af {
    constructor(n) {
        super(),
        this.state = "idle",
        this.startTime = null,
        this.isStopped = !1,
        this.currentTime = 0,
        this.holdTime = null,
        this.playbackSpeed = 1,
        this.stop = () => {
            const {motionValue: o} = this.options;
            o && o.updatedAt !== zt.now() && this.tick(zt.now()),
            this.isStopped = !0,
            this.state !== "idle" && (this.teardown(),
            this.options.onStop?.())
        }
        ,
        this.options = n,
        this.initAnimation(),
        this.play(),
        n.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {options: n} = this;
        tx(n);
        const {type: o=Ji, repeat: i=0, repeatDelay: a=0, repeatType: u, velocity: c=0} = n;
        let {keyframes: d} = n;
        const p = o || Ji;
        p !== Ji && typeof d[0] != "number" && (this.mixKeyframes = hs(HA, q0(d[0], d[1])),
        d = [0, 100]);
        const h = p({
            ...n,
            keyframes: d
        });
        u === "mirror" && (this.mirroredGenerator = p({
            ...n,
            keyframes: [...d].reverse(),
            velocity: -c
        })),
        h.calculatedDuration === null && (h.calculatedDuration = Pf(h));
        const {calculatedDuration: g} = h;
        this.calculatedDuration = g,
        this.resolvedDuration = g + a,
        this.totalDuration = this.resolvedDuration * (i + 1) - a,
        this.generator = h
    }
    updateTime(n) {
        const o = Math.round(n - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = o
    }
    tick(n, o=!1) {
        const {generator: i, totalDuration: a, mixKeyframes: u, mirroredGenerator: c, resolvedDuration: d, calculatedDuration: p} = this;
        if (this.startTime === null)
            return i.next(0);
        const {delay: h=0, keyframes: g, repeat: y, repeatType: x, repeatDelay: v, type: T, onUpdate: C, finalKeyframe: E} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, n) : this.speed < 0 && (this.startTime = Math.min(n - a / this.speed, this.startTime)),
        o ? this.currentTime = n : this.updateTime(n);
        const P = this.currentTime - h * (this.playbackSpeed >= 0 ? 1 : -1)
          , A = this.playbackSpeed >= 0 ? P < 0 : P > a;
        this.currentTime = Math.max(P, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = a);
        let R = this.currentTime
          , O = i;
        if (y) {
            const U = Math.min(this.currentTime, a) / d;
            let oe = Math.floor(U)
              , J = U % 1;
            !J && U >= 1 && (J = 1),
            J === 1 && oe--,
            oe = Math.min(oe, y + 1),
            !!(oe % 2) && (x === "reverse" ? (J = 1 - J,
            v && (J -= v / d)) : x === "mirror" && (O = c)),
            R = tr(0, 1, J) * d
        }
        const j = A ? {
            done: !1,
            value: g[0]
        } : O.next(R);
        u && (j.value = u(j.value));
        let {done: $} = j;
        !A && p !== null && ($ = this.playbackSpeed >= 0 ? this.currentTime >= a : this.currentTime <= 0);
        const I = this.holdTime === null && (this.state === "finished" || this.state === "running" && $);
        return I && T !== yd && (j.value = kf(g, this.options, E, this.speed)),
        C && C(j.value),
        I && this.finish(),
        j
    }
    then(n, o) {
        return this.finished.then(n, o)
    }
    get duration() {
        return Ln(this.calculatedDuration)
    }
    get time() {
        return Ln(this.currentTime)
    }
    set time(n) {
        n = In(n),
        this.currentTime = n,
        this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = n : this.driver && (this.startTime = this.driver.now() - n / this.playbackSpeed),
        this.driver?.start(!1)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(n) {
        this.updateTime(zt.now());
        const o = this.playbackSpeed !== n;
        this.playbackSpeed = n,
        o && (this.time = Ln(this.currentTime))
    }
    play() {
        if (this.isStopped)
            return;
        const {driver: n=PA, startTime: o} = this.options;
        this.driver || (this.driver = n(a => this.tick(a))),
        this.options.onPlay?.();
        const i = this.driver.now();
        this.state === "finished" ? (this.updateFinished(),
        this.startTime = i) : this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime || (this.startTime = o ?? i),
        this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        this.state = "paused",
        this.updateTime(zt.now()),
        this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(),
        this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.notifyFinished(),
        this.teardown(),
        this.state = "finished",
        this.options.onComplete?.()
    }
    cancel() {
        this.holdTime = null,
        this.startTime = 0,
        this.tick(0),
        this.teardown(),
        this.options.onCancel?.()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(n) {
        return this.startTime = 0,
        this.tick(n, !0)
    }
    attachTimeline(n) {
        return this.options.allowFlatten && (this.options.type = "keyframes",
        this.options.ease = "linear",
        this.initAnimation()),
        this.driver?.stop(),
        n.observe(this)
    }
}
function UA(e) {
    for (let n = 1; n < e.length; n++)
        e[n] ?? (e[n] = e[n - 1])
}
const ro = e => e * 180 / Math.PI
  , xd = e => {
    const n = ro(Math.atan2(e[1], e[0]));
    return wd(n)
}
  , WA = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: xd,
    rotateZ: xd,
    skewX: e => ro(Math.atan(e[1])),
    skewY: e => ro(Math.atan(e[2])),
    skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}
  , wd = e => (e = e % 360,
e < 0 && (e += 360),
e)
  , wg = xd
  , Sg = e => Math.sqrt(e[0] * e[0] + e[1] * e[1])
  , bg = e => Math.sqrt(e[4] * e[4] + e[5] * e[5])
  , KA = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Sg,
    scaleY: bg,
    scale: e => (Sg(e) + bg(e)) / 2,
    rotateX: e => wd(ro(Math.atan2(e[6], e[5]))),
    rotateY: e => wd(ro(Math.atan2(-e[2], e[0]))),
    rotateZ: wg,
    rotate: wg,
    skewX: e => ro(Math.atan(e[4])),
    skewY: e => ro(Math.atan(e[1])),
    skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function Sd(e) {
    return e.includes("scale") ? 1 : 0
}
function bd(e, n) {
    if (!e || e === "none")
        return Sd(n);
    const o = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let i, a;
    if (o)
        i = KA,
        a = o;
    else {
        const d = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        i = WA,
        a = d
    }
    if (!a)
        return Sd(n);
    const u = i[n]
      , c = a[1].split(",").map(YA);
    return typeof u == "function" ? u(c) : c[u]
}
const GA = (e, n) => {
    const {transform: o="none"} = getComputedStyle(e);
    return bd(o, n)
}
;
function YA(e) {
    return parseFloat(e.trim())
}
const ai = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , li = new Set(ai)
  , Cg = e => e === si || e === Ce
  , XA = new Set(["x", "y", "z"])
  , QA = ai.filter(e => !XA.has(e));
function ZA(e) {
    const n = [];
    return QA.forEach(o => {
        const i = e.getValue(o);
        i !== void 0 && (n.push([o, i.get()]),
        i.set(o.startsWith("scale") ? 1 : 0))
    }
    ),
    n
}
const oo = {
    width: ({x: e}, {paddingLeft: n="0", paddingRight: o="0"}) => e.max - e.min - parseFloat(n) - parseFloat(o),
    height: ({y: e}, {paddingTop: n="0", paddingBottom: o="0"}) => e.max - e.min - parseFloat(n) - parseFloat(o),
    top: (e, {top: n}) => parseFloat(n),
    left: (e, {left: n}) => parseFloat(n),
    bottom: ({y: e}, {top: n}) => parseFloat(n) + (e.max - e.min),
    right: ({x: e}, {left: n}) => parseFloat(n) + (e.max - e.min),
    x: (e, {transform: n}) => bd(n, "x"),
    y: (e, {transform: n}) => bd(n, "y")
};
oo.translateX = oo.x;
oo.translateY = oo.y;
const io = new Set;
let Cd = !1
  , Ed = !1
  , Td = !1;
function nx() {
    if (Ed) {
        const e = Array.from(io).filter(i => i.needsMeasurement)
          , n = new Set(e.map(i => i.element))
          , o = new Map;
        n.forEach(i => {
            const a = ZA(i);
            a.length && (o.set(i, a),
            i.render())
        }
        ),
        e.forEach(i => i.measureInitialState()),
        n.forEach(i => {
            i.render();
            const a = o.get(i);
            a && a.forEach( ([u,c]) => {
                i.getValue(u)?.set(c)
            }
            )
        }
        ),
        e.forEach(i => i.measureEndState()),
        e.forEach(i => {
            i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY)
        }
        )
    }
    Ed = !1,
    Cd = !1,
    io.forEach(e => e.complete(Td)),
    io.clear()
}
function rx() {
    io.forEach(e => {
        e.readKeyframes(),
        e.needsMeasurement && (Ed = !0)
    }
    )
}
function qA() {
    Td = !0,
    rx(),
    nx(),
    Td = !1
}
class Nf {
    constructor(n, o, i, a, u, c=!1) {
        this.state = "pending",
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.unresolvedKeyframes = [...n],
        this.onComplete = o,
        this.name = i,
        this.motionValue = a,
        this.element = u,
        this.isAsync = c
    }
    scheduleResolve() {
        this.state = "scheduled",
        this.isAsync ? (io.add(this),
        Cd || (Cd = !0,
        Qe.read(rx),
        Qe.resolveKeyframes(nx))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: n, name: o, element: i, motionValue: a} = this;
        if (n[0] === null) {
            const u = a?.get()
              , c = n[n.length - 1];
            if (u !== void 0)
                n[0] = u;
            else if (i && o) {
                const d = i.readValue(o, c);
                d != null && (n[0] = d)
            }
            n[0] === void 0 && (n[0] = c),
            a && u === void 0 && a.set(n[0])
        }
        UA(n)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(n=!1) {
        this.state = "complete",
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, n),
        io.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (io.delete(this),
        this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const JA = e => e.startsWith("--");
function eR(e, n, o) {
    JA(n) ? e.style.setProperty(n, o) : e.style[n] = o
}
const tR = vf( () => window.ScrollTimeline !== void 0)
  , nR = {};
function rR(e, n) {
    const o = vf(e);
    return () => nR[n] ?? o()
}
const ox = rR( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , Zi = ([e,n,o,i]) => `cubic-bezier(${e}, ${n}, ${o}, ${i})`
  , Eg = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Zi([0, .65, .55, 1]),
    circOut: Zi([.55, 0, 1, .45]),
    backIn: Zi([.31, .01, .66, -.59]),
    backOut: Zi([.33, 1.53, .69, .99])
};
function ix(e, n) {
    if (e)
        return typeof e == "function" ? ox() ? J0(e, n) : "ease-out" : H0(e) ? Zi(e) : Array.isArray(e) ? e.map(o => ix(o, n) || Eg.easeOut) : Eg[e]
}
function oR(e, n, o, {delay: i=0, duration: a=300, repeat: u=0, repeatType: c="loop", ease: d="easeOut", times: p}={}, h=void 0) {
    const g = {
        [n]: o
    };
    p && (g.offset = p);
    const y = ix(d, a);
    Array.isArray(y) && (g.easing = y);
    const x = {
        delay: i,
        duration: a,
        easing: Array.isArray(y) ? "linear" : y,
        fill: "both",
        iterations: u + 1,
        direction: c === "reverse" ? "alternate" : "normal"
    };
    return h && (x.pseudoElement = h),
    e.animate(g, x)
}
function sx(e) {
    return typeof e == "function" && "applyToOptions"in e
}
function iR({type: e, ...n}) {
    return sx(e) && ox() ? e.applyToOptions(n) : (n.duration ?? (n.duration = 300),
    n.ease ?? (n.ease = "easeOut"),
    n)
}
class sR extends Af {
    constructor(n) {
        if (super(),
        this.finishedTime = null,
        this.isStopped = !1,
        !n)
            return;
        const {element: o, name: i, keyframes: a, pseudoElement: u, allowFlatten: c=!1, finalKeyframe: d, onComplete: p} = n;
        this.isPseudoElement = !!u,
        this.allowFlatten = c,
        this.options = n,
        gf(typeof n.type != "string");
        const h = iR(n);
        this.animation = oR(o, i, a, h, u),
        h.autoplay === !1 && this.animation.pause(),
        this.animation.onfinish = () => {
            if (this.finishedTime = this.time,
            !u) {
                const g = kf(a, this.options, d, this.speed);
                this.updateMotionValue ? this.updateMotionValue(g) : eR(o, i, g),
                this.animation.cancel()
            }
            p?.(),
            this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.animation.play(),
        this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.finish?.()
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = !0;
        const {state: n} = this;
        n === "idle" || n === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
        this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        this.isPseudoElement || this.animation.commitStyles?.()
    }
    get duration() {
        const n = this.animation.effect?.getComputedTiming?.().duration || 0;
        return Ln(Number(n))
    }
    get time() {
        return Ln(Number(this.animation.currentTime) || 0)
    }
    set time(n) {
        this.finishedTime = null,
        this.animation.currentTime = In(n)
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(n) {
        n < 0 && (this.finishedTime = null),
        this.animation.playbackRate = n
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return Number(this.animation.startTime)
    }
    set startTime(n) {
        this.animation.startTime = n
    }
    attachTimeline({timeline: n, observe: o}) {
        return this.allowFlatten && this.animation.effect?.updateTiming({
            easing: "linear"
        }),
        this.animation.onfinish = null,
        n && tR() ? (this.animation.timeline = n,
        on) : o(this)
    }
}
const ax = {
    anticipate: F0,
    backInOut: V0,
    circInOut: z0
};
function aR(e) {
    return e in ax
}
function lR(e) {
    typeof e.ease == "string" && aR(e.ease) && (e.ease = ax[e.ease])
}
const Tg = 10;
class uR extends sR {
    constructor(n) {
        lR(n),
        tx(n),
        super(n),
        n.startTime && (this.startTime = n.startTime),
        this.options = n
    }
    updateMotionValue(n) {
        const {motionValue: o, onUpdate: i, onComplete: a, element: u, ...c} = this.options;
        if (!o)
            return;
        if (n !== void 0) {
            o.set(n);
            return
        }
        const d = new Rf({
            ...c,
            autoplay: !1
        })
          , p = In(this.finishedTime ?? this.time);
        o.setWithVelocity(d.sample(p - Tg).value, d.sample(p).value, Tg),
        d.stop()
    }
}
const Pg = (e, n) => n === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (_r.test(e) || e === "0") && !e.startsWith("url("));
function cR(e) {
    const n = e[0];
    if (e.length === 1)
        return !0;
    for (let o = 0; o < e.length; o++)
        if (e[o] !== n)
            return !0
}
function dR(e, n, o, i) {
    const a = e[0];
    if (a === null)
        return !1;
    if (n === "display" || n === "visibility")
        return !0;
    const u = e[e.length - 1]
      , c = Pg(a, n)
      , d = Pg(u, n);
    return !c || !d ? !1 : cR(e) || (o === "spring" || sx(o)) && i
}
function Pd(e) {
    e.duration = 0,
    e.type
}
const fR = new Set(["opacity", "clipPath", "filter", "transform"])
  , pR = vf( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
function hR(e) {
    const {motionValue: n, name: o, repeatDelay: i, repeatType: a, damping: u, type: c} = e;
    if (!(n?.owner?.current instanceof HTMLElement))
        return !1;
    const {onUpdate: p, transformTemplate: h} = n.owner.getProps();
    return pR() && o && fR.has(o) && (o !== "transform" || !h) && !p && !i && a !== "mirror" && u !== 0 && c !== "inertia"
}
const mR = 40;
class gR extends Af {
    constructor({autoplay: n=!0, delay: o=0, type: i="keyframes", repeat: a=0, repeatDelay: u=0, repeatType: c="loop", keyframes: d, name: p, motionValue: h, element: g, ...y}) {
        super(),
        this.stop = () => {
            this._animation && (this._animation.stop(),
            this.stopTimeline?.()),
            this.keyframeResolver?.cancel()
        }
        ,
        this.createdAt = zt.now();
        const x = {
            autoplay: n,
            delay: o,
            type: i,
            repeat: a,
            repeatDelay: u,
            repeatType: c,
            name: p,
            motionValue: h,
            element: g,
            ...y
        }
          , v = g?.KeyframeResolver || Nf;
        this.keyframeResolver = new v(d, (T, C, E) => this.onKeyframesResolved(T, C, x, !E),p,h,g),
        this.keyframeResolver?.scheduleResolve()
    }
    onKeyframesResolved(n, o, i, a) {
        this.keyframeResolver = void 0;
        const {name: u, type: c, velocity: d, delay: p, isHandoff: h, onUpdate: g} = i;
        this.resolvedAt = zt.now(),
        dR(n, u, c, d) || ((nr.instantAnimations || !p) && g?.(kf(n, i, o)),
        n[0] = n[n.length - 1],
        Pd(i),
        i.repeat = 0);
        const x = {
            startTime: a ? this.resolvedAt ? this.resolvedAt - this.createdAt > mR ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: o,
            ...i,
            keyframes: n
        }
          , v = !h && hR(x) ? new uR({
            ...x,
            element: x.motionValue.owner.current
        }) : new Rf(x);
        v.finished.then( () => this.notifyFinished()).catch(on),
        this.pendingTimeline && (this.stopTimeline = v.attachTimeline(this.pendingTimeline),
        this.pendingTimeline = void 0),
        this._animation = v
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(n, o) {
        return this.finished.finally(n).then( () => {}
        )
    }
    get animation() {
        return this._animation || (this.keyframeResolver?.resume(),
        qA()),
        this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get time() {
        return this.animation.time
    }
    set time(n) {
        this.animation.time = n
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(n) {
        this.animation.speed = n
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(n) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(n) : this.pendingTimeline = n,
        () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        this._animation && this.animation.cancel(),
        this.keyframeResolver?.cancel()
    }
}
const vR = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function yR(e) {
    const n = vR.exec(e);
    if (!n)
        return [, ];
    const [,o,i,a] = n;
    return [`--${o ?? i}`, a]
}
function lx(e, n, o=1) {
    const [i,a] = yR(e);
    if (!i)
        return;
    const u = window.getComputedStyle(n).getPropertyValue(i);
    if (u) {
        const c = u.trim();
        return N0(c) ? parseFloat(c) : c
    }
    return bf(a) ? lx(a, n, o + 1) : a
}
function Df(e, n) {
    return e?.[n] ?? e?.default ?? e
}
const ux = new Set(["width", "height", "top", "left", "right", "bottom", ...ai])
  , xR = {
    test: e => e === "auto",
    parse: e => e
}
  , cx = e => n => n.test(e)
  , dx = [si, Ce, Vn, Rr, cA, uA, xR]
  , kg = e => dx.find(cx(e));
function wR(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || M0(e) : !0
}
const SR = new Set(["brightness", "contrast", "saturate", "opacity"]);
function bR(e) {
    const [n,o] = e.slice(0, -1).split("(");
    if (n === "drop-shadow")
        return e;
    const [i] = o.match(Cf) || [];
    if (!i)
        return e;
    const a = o.replace(i, "");
    let u = SR.has(n) ? 1 : 0;
    return i !== o && (u *= 100),
    n + "(" + u + a + ")"
}
const CR = /\b([a-z-]*)\(.*?\)/gu
  , kd = {
    ..._r,
    getAnimatableNone: e => {
        const n = e.match(CR);
        return n ? n.map(bR).join(" ") : e
    }
}
  , Ag = {
    ...si,
    transform: Math.round
}
  , ER = {
    rotate: Rr,
    rotateX: Rr,
    rotateY: Rr,
    rotateZ: Rr,
    scale: Fa,
    scaleX: Fa,
    scaleY: Fa,
    scaleZ: Fa,
    skew: Rr,
    skewX: Rr,
    skewY: Rr,
    distance: Ce,
    translateX: Ce,
    translateY: Ce,
    translateZ: Ce,
    x: Ce,
    y: Ce,
    z: Ce,
    perspective: Ce,
    transformPerspective: Ce,
    opacity: ss,
    originX: mg,
    originY: mg,
    originZ: Ce
}
  , Mf = {
    borderWidth: Ce,
    borderTopWidth: Ce,
    borderRightWidth: Ce,
    borderBottomWidth: Ce,
    borderLeftWidth: Ce,
    borderRadius: Ce,
    radius: Ce,
    borderTopLeftRadius: Ce,
    borderTopRightRadius: Ce,
    borderBottomRightRadius: Ce,
    borderBottomLeftRadius: Ce,
    width: Ce,
    maxWidth: Ce,
    height: Ce,
    maxHeight: Ce,
    top: Ce,
    right: Ce,
    bottom: Ce,
    left: Ce,
    padding: Ce,
    paddingTop: Ce,
    paddingRight: Ce,
    paddingBottom: Ce,
    paddingLeft: Ce,
    margin: Ce,
    marginTop: Ce,
    marginRight: Ce,
    marginBottom: Ce,
    marginLeft: Ce,
    backgroundPositionX: Ce,
    backgroundPositionY: Ce,
    ...ER,
    zIndex: Ag,
    fillOpacity: ss,
    strokeOpacity: ss,
    numOctaves: Ag
}
  , TR = {
    ...Mf,
    color: at,
    backgroundColor: at,
    outlineColor: at,
    fill: at,
    stroke: at,
    borderColor: at,
    borderTopColor: at,
    borderRightColor: at,
    borderBottomColor: at,
    borderLeftColor: at,
    filter: kd,
    WebkitFilter: kd
}
  , fx = e => TR[e];
function px(e, n) {
    let o = fx(e);
    return o !== kd && (o = _r),
    o.getAnimatableNone ? o.getAnimatableNone(n) : void 0
}
const PR = new Set(["auto", "none", "0"]);
function kR(e, n, o) {
    let i = 0, a;
    for (; i < e.length && !a; ) {
        const u = e[i];
        typeof u == "string" && !PR.has(u) && as(u).values.length && (a = e[i]),
        i++
    }
    if (a && o)
        for (const u of n)
            e[u] = px(o, a)
}
class AR extends Nf {
    constructor(n, o, i, a, u) {
        super(n, o, i, a, u, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: n, element: o, name: i} = this;
        if (!o || !o.current)
            return;
        super.readKeyframes();
        for (let p = 0; p < n.length; p++) {
            let h = n[p];
            if (typeof h == "string" && (h = h.trim(),
            bf(h))) {
                const g = lx(h, o.current);
                g !== void 0 && (n[p] = g),
                p === n.length - 1 && (this.finalKeyframe = h)
            }
        }
        if (this.resolveNoneKeyframes(),
        !ux.has(i) || n.length !== 2)
            return;
        const [a,u] = n
          , c = kg(a)
          , d = kg(u);
        if (c !== d)
            if (Cg(c) && Cg(d))
                for (let p = 0; p < n.length; p++) {
                    const h = n[p];
                    typeof h == "string" && (n[p] = parseFloat(h))
                }
            else
                oo[i] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: n, name: o} = this
          , i = [];
        for (let a = 0; a < n.length; a++)
            (n[a] === null || wR(n[a])) && i.push(a);
        i.length && kR(n, i, o)
    }
    measureInitialState() {
        const {element: n, unresolvedKeyframes: o, name: i} = this;
        if (!n || !n.current)
            return;
        i === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = oo[i](n.measureViewportBox(), window.getComputedStyle(n.current)),
        o[0] = this.measuredOrigin;
        const a = o[o.length - 1];
        a !== void 0 && n.getValue(i, a).jump(a, !1)
    }
    measureEndState() {
        const {element: n, name: o, unresolvedKeyframes: i} = this;
        if (!n || !n.current)
            return;
        const a = n.getValue(o);
        a && a.jump(this.measuredOrigin, !1);
        const u = i.length - 1
          , c = i[u];
        i[u] = oo[o](n.measureViewportBox(), window.getComputedStyle(n.current)),
        c !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = c),
        this.removedTransforms?.length && this.removedTransforms.forEach( ([d,p]) => {
            n.getValue(d).set(p)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
function RR(e, n, o) {
    if (e instanceof EventTarget)
        return [e];
    if (typeof e == "string") {
        let i = document;
        const a = o?.[e] ?? i.querySelectorAll(e);
        return a ? Array.from(a) : []
    }
    return Array.from(e)
}
const hx = (e, n) => n && typeof e == "number" ? n.transform(e) : e;
function NR(e) {
    return D0(e) && "offsetHeight"in e
}
const Rg = 30
  , DR = e => !isNaN(parseFloat(e));
class MR {
    constructor(n, o={}) {
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = i => {
            const a = zt.now();
            if (this.updatedAt !== a && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(i),
            this.current !== this.prev && (this.events.change?.notify(this.current),
            this.dependents))
                for (const u of this.dependents)
                    u.dirty()
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(n),
        this.owner = o.owner
    }
    setCurrent(n) {
        this.current = n,
        this.updatedAt = zt.now(),
        this.canTrackVelocity === null && n !== void 0 && (this.canTrackVelocity = DR(this.current))
    }
    setPrevFrameValue(n=this.current) {
        this.prevFrameValue = n,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(n) {
        return this.on("change", n)
    }
    on(n, o) {
        this.events[n] || (this.events[n] = new yf);
        const i = this.events[n].add(o);
        return n === "change" ? () => {
            i(),
            Qe.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : i
    }
    clearListeners() {
        for (const n in this.events)
            this.events[n].clear()
    }
    attach(n, o) {
        this.passiveEffect = n,
        this.stopPassiveEffect = o
    }
    set(n) {
        this.passiveEffect ? this.passiveEffect(n, this.updateAndNotify) : this.updateAndNotify(n)
    }
    setWithVelocity(n, o, i) {
        this.set(o),
        this.prev = void 0,
        this.prevFrameValue = n,
        this.prevUpdatedAt = this.updatedAt - i
    }
    jump(n, o=!0) {
        this.updateAndNotify(n),
        this.prev = n,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        o && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        this.events.change?.notify(this.current)
    }
    addDependent(n) {
        this.dependents || (this.dependents = new Set),
        this.dependents.add(n)
    }
    removeDependent(n) {
        this.dependents && this.dependents.delete(n)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const n = zt.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || n - this.updatedAt > Rg)
            return 0;
        const o = Math.min(this.updatedAt - this.prevUpdatedAt, Rg);
        return j0(parseFloat(this.current) - parseFloat(this.prevFrameValue), o)
    }
    start(n) {
        return this.stop(),
        new Promise(o => {
            this.hasAnimated = !0,
            this.animation = n(o),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.dependents?.clear(),
        this.events.destroy?.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function Jo(e, n) {
    return new MR(e,n)
}
const {schedule: jf} = U0(queueMicrotask, !1)
  , vn = {
    x: !1,
    y: !1
};
function mx() {
    return vn.x || vn.y
}
function jR(e) {
    return e === "x" || e === "y" ? vn[e] ? null : (vn[e] = !0,
    () => {
        vn[e] = !1
    }
    ) : vn.x || vn.y ? null : (vn.x = vn.y = !0,
    () => {
        vn.x = vn.y = !1
    }
    )
}
function gx(e, n) {
    const o = RR(e)
      , i = new AbortController
      , a = {
        passive: !0,
        ...n,
        signal: i.signal
    };
    return [o, a, () => i.abort()]
}
function Ng(e) {
    return !(e.pointerType === "touch" || mx())
}
function OR(e, n, o={}) {
    const [i,a,u] = gx(e, o)
      , c = d => {
        if (!Ng(d))
            return;
        const {target: p} = d
          , h = n(p, d);
        if (typeof h != "function" || !p)
            return;
        const g = y => {
            Ng(y) && (h(y),
            p.removeEventListener("pointerleave", g))
        }
        ;
        p.addEventListener("pointerleave", g, a)
    }
    ;
    return i.forEach(d => {
        d.addEventListener("pointerenter", c, a)
    }
    ),
    u
}
const vx = (e, n) => n ? e === n ? !0 : vx(e, n.parentElement) : !1
  , Of = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1
  , _R = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function IR(e) {
    return _R.has(e.tagName) || e.tabIndex !== -1
}
const Ga = new WeakSet;
function Dg(e) {
    return n => {
        n.key === "Enter" && e(n)
    }
}
function Bc(e, n) {
    e.dispatchEvent(new PointerEvent("pointer" + n,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const LR = (e, n) => {
    const o = e.currentTarget;
    if (!o)
        return;
    const i = Dg( () => {
        if (Ga.has(o))
            return;
        Bc(o, "down");
        const a = Dg( () => {
            Bc(o, "up")
        }
        )
          , u = () => Bc(o, "cancel");
        o.addEventListener("keyup", a, n),
        o.addEventListener("blur", u, n)
    }
    );
    o.addEventListener("keydown", i, n),
    o.addEventListener("blur", () => o.removeEventListener("keydown", i), n)
}
;
function Mg(e) {
    return Of(e) && !mx()
}
function VR(e, n, o={}) {
    const [i,a,u] = gx(e, o)
      , c = d => {
        const p = d.currentTarget;
        if (!Mg(d))
            return;
        Ga.add(p);
        const h = n(p, d)
          , g = (v, T) => {
            window.removeEventListener("pointerup", y),
            window.removeEventListener("pointercancel", x),
            Ga.has(p) && Ga.delete(p),
            Mg(v) && typeof h == "function" && h(v, {
                success: T
            })
        }
          , y = v => {
            g(v, p === window || p === document || o.useGlobalTarget || vx(p, v.target))
        }
          , x = v => {
            g(v, !1)
        }
        ;
        window.addEventListener("pointerup", y, a),
        window.addEventListener("pointercancel", x, a)
    }
    ;
    return i.forEach(d => {
        (o.useGlobalTarget ? window : d).addEventListener("pointerdown", c, a),
        NR(d) && (d.addEventListener("focus", h => LR(h, a)),
        !IR(d) && !d.hasAttribute("tabindex") && (d.tabIndex = 0))
    }
    ),
    u
}
function yx(e) {
    return D0(e) && "ownerSVGElement"in e
}
function FR(e) {
    return yx(e) && e.tagName === "svg"
}
const Ct = e => !!(e && e.getVelocity)
  , BR = [...dx, at, _r]
  , zR = e => BR.find(cx(e))
  , xx = w.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
});
function $R(e=!0) {
    const n = w.useContext(pf);
    if (n === null)
        return [!0, null];
    const {isPresent: o, onExitComplete: i, register: a} = n
      , u = w.useId();
    w.useEffect( () => {
        if (e)
            return a(u)
    }
    , [e]);
    const c = w.useCallback( () => e && i && i(u), [u, i, e]);
    return !o && i ? [!1, c] : [!0]
}
const wx = w.createContext({
    strict: !1
})
  , jg = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , ei = {};
for (const e in jg)
    ei[e] = {
        isEnabled: n => jg[e].some(o => !!n[o])
    };
function HR(e) {
    for (const n in e)
        ei[n] = {
            ...ei[n],
            ...e[n]
        }
}
const UR = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function fl(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || UR.has(e)
}
let Sx = e => !fl(e);
function WR(e) {
    typeof e == "function" && (Sx = n => n.startsWith("on") ? !fl(n) : e(n))
}
try {
    WR(require("@emotion/is-prop-valid").default)
} catch {}
function KR(e, n, o) {
    const i = {};
    for (const a in e)
        a === "values" && typeof e.values == "object" || (Sx(a) || o === !0 && fl(a) || !n && !fl(a) || e.draggable && a.startsWith("onDrag")) && (i[a] = e[a]);
    return i
}
const Dl = w.createContext({});
function Ml(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
function ls(e) {
    return typeof e == "string" || Array.isArray(e)
}
const _f = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , If = ["initial", ..._f];
function jl(e) {
    return Ml(e.animate) || If.some(n => ls(e[n]))
}
function bx(e) {
    return !!(jl(e) || e.variants)
}
function GR(e, n) {
    if (jl(e)) {
        const {initial: o, animate: i} = e;
        return {
            initial: o === !1 || ls(o) ? o : void 0,
            animate: ls(i) ? i : void 0
        }
    }
    return e.inherit !== !1 ? n : {}
}
function YR(e) {
    const {initial: n, animate: o} = GR(e, w.useContext(Dl));
    return w.useMemo( () => ({
        initial: n,
        animate: o
    }), [Og(n), Og(o)])
}
function Og(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const us = {};
function XR(e) {
    for (const n in e)
        us[n] = e[n],
        Sf(n) && (us[n].isCSSVariable = !0)
}
function Cx(e, {layout: n, layoutId: o}) {
    return li.has(e) || e.startsWith("origin") || (n || o !== void 0) && (!!us[e] || e === "opacity")
}
const QR = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , ZR = ai.length;
function qR(e, n, o) {
    let i = ""
      , a = !0;
    for (let u = 0; u < ZR; u++) {
        const c = ai[u]
          , d = e[c];
        if (d === void 0)
            continue;
        let p = !0;
        if (typeof d == "number" ? p = d === (c.startsWith("scale") ? 1 : 0) : p = parseFloat(d) === 0,
        !p || o) {
            const h = hx(d, Mf[c]);
            if (!p) {
                a = !1;
                const g = QR[c] || c;
                i += `${g}(${h}) `
            }
            o && (n[c] = h)
        }
    }
    return i = i.trim(),
    o ? i = o(n, a ? "" : i) : a && (i = "none"),
    i
}
function Lf(e, n, o) {
    const {style: i, vars: a, transformOrigin: u} = e;
    let c = !1
      , d = !1;
    for (const p in n) {
        const h = n[p];
        if (li.has(p)) {
            c = !0;
            continue
        } else if (Sf(p)) {
            a[p] = h;
            continue
        } else {
            const g = hx(h, Mf[p]);
            p.startsWith("origin") ? (d = !0,
            u[p] = g) : i[p] = g
        }
    }
    if (n.transform || (c || o ? i.transform = qR(n, e.transform, o) : i.transform && (i.transform = "none")),
    d) {
        const {originX: p="50%", originY: h="50%", originZ: g=0} = u;
        i.transformOrigin = `${p} ${h} ${g}`
    }
}
const Vf = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function Ex(e, n, o) {
    for (const i in n)
        !Ct(n[i]) && !Cx(i, o) && (e[i] = n[i])
}
function JR({transformTemplate: e}, n) {
    return w.useMemo( () => {
        const o = Vf();
        return Lf(o, n, e),
        Object.assign({}, o.vars, o.style)
    }
    , [n])
}
function e2(e, n) {
    const o = e.style || {}
      , i = {};
    return Ex(i, o, e),
    Object.assign(i, JR(e, n)),
    i
}
function t2(e, n) {
    const o = {}
      , i = e2(e, n);
    return e.drag && e.dragListener !== !1 && (o.draggable = !1,
    i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
    i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (o.tabIndex = 0),
    o.style = i,
    o
}
const n2 = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , r2 = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function o2(e, n, o=1, i=0, a=!0) {
    e.pathLength = 1;
    const u = a ? n2 : r2;
    e[u.offset] = Ce.transform(-i);
    const c = Ce.transform(n)
      , d = Ce.transform(o);
    e[u.array] = `${c} ${d}`
}
function Tx(e, {attrX: n, attrY: o, attrScale: i, pathLength: a, pathSpacing: u=1, pathOffset: c=0, ...d}, p, h, g) {
    if (Lf(e, d, h),
    p) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: y, style: x} = e;
    y.transform && (x.transform = y.transform,
    delete y.transform),
    (x.transform || y.transformOrigin) && (x.transformOrigin = y.transformOrigin ?? "50% 50%",
    delete y.transformOrigin),
    x.transform && (x.transformBox = g?.transformBox ?? "fill-box",
    delete y.transformBox),
    n !== void 0 && (y.x = n),
    o !== void 0 && (y.y = o),
    i !== void 0 && (y.scale = i),
    a !== void 0 && o2(y, a, u, c, !1)
}
const Px = () => ({
    ...Vf(),
    attrs: {}
})
  , kx = e => typeof e == "string" && e.toLowerCase() === "svg";
function i2(e, n, o, i) {
    const a = w.useMemo( () => {
        const u = Px();
        return Tx(u, n, kx(i), e.transformTemplate, e.style),
        {
            ...u.attrs,
            style: {
                ...u.style
            }
        }
    }
    , [n]);
    if (e.style) {
        const u = {};
        Ex(u, e.style, e),
        a.style = {
            ...u,
            ...a.style
        }
    }
    return a
}
const s2 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Ff(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(s2.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function a2(e, n, o, {latestValues: i}, a, u=!1) {
    const d = (Ff(e) ? i2 : t2)(n, i, a, e)
      , p = KR(n, typeof e == "string", u)
      , h = e !== w.Fragment ? {
        ...p,
        ...d,
        ref: o
    } : {}
      , {children: g} = n
      , y = w.useMemo( () => Ct(g) ? g.get() : g, [g]);
    return w.createElement(e, {
        ...h,
        children: y
    })
}
function _g(e) {
    const n = [{}, {}];
    return e?.values.forEach( (o, i) => {
        n[0][i] = o.get(),
        n[1][i] = o.getVelocity()
    }
    ),
    n
}
function Bf(e, n, o, i) {
    if (typeof n == "function") {
        const [a,u] = _g(i);
        n = n(o !== void 0 ? o : e.custom, a, u)
    }
    if (typeof n == "string" && (n = e.variants && e.variants[n]),
    typeof n == "function") {
        const [a,u] = _g(i);
        n = n(o !== void 0 ? o : e.custom, a, u)
    }
    return n
}
function Ya(e) {
    return Ct(e) ? e.get() : e
}
function l2({scrapeMotionValuesFromProps: e, createRenderState: n}, o, i, a) {
    return {
        latestValues: u2(o, i, a, e),
        renderState: n()
    }
}
function u2(e, n, o, i) {
    const a = {}
      , u = i(e, {});
    for (const x in u)
        a[x] = Ya(u[x]);
    let {initial: c, animate: d} = e;
    const p = jl(e)
      , h = bx(e);
    n && h && !p && e.inherit !== !1 && (c === void 0 && (c = n.initial),
    d === void 0 && (d = n.animate));
    let g = o ? o.initial === !1 : !1;
    g = g || c === !1;
    const y = g ? d : c;
    if (y && typeof y != "boolean" && !Ml(y)) {
        const x = Array.isArray(y) ? y : [y];
        for (let v = 0; v < x.length; v++) {
            const T = Bf(e, x[v]);
            if (T) {
                const {transitionEnd: C, transition: E, ...P} = T;
                for (const A in P) {
                    let R = P[A];
                    if (Array.isArray(R)) {
                        const O = g ? R.length - 1 : 0;
                        R = R[O]
                    }
                    R !== null && (a[A] = R)
                }
                for (const A in C)
                    a[A] = C[A]
            }
        }
    }
    return a
}
const Ax = e => (n, o) => {
    const i = w.useContext(Dl)
      , a = w.useContext(pf)
      , u = () => l2(e, n, i, a);
    return o ? u() : Hk(u)
}
;
function zf(e, n, o) {
    const {style: i} = e
      , a = {};
    for (const u in i)
        (Ct(i[u]) || n.style && Ct(n.style[u]) || Cx(u, e) || o?.getValue(u)?.liveStyle !== void 0) && (a[u] = i[u]);
    return a
}
const c2 = Ax({
    scrapeMotionValuesFromProps: zf,
    createRenderState: Vf
});
function Rx(e, n, o) {
    const i = zf(e, n, o);
    for (const a in e)
        if (Ct(e[a]) || Ct(n[a])) {
            const u = ai.indexOf(a) !== -1 ? "attr" + a.charAt(0).toUpperCase() + a.substring(1) : a;
            i[u] = e[a]
        }
    return i
}
const d2 = Ax({
    scrapeMotionValuesFromProps: Rx,
    createRenderState: Px
})
  , f2 = Symbol.for("motionComponentSymbol");
function zo(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function p2(e, n, o) {
    return w.useCallback(i => {
        i && e.onMount && e.onMount(i),
        n && (i ? n.mount(i) : n.unmount()),
        o && (typeof o == "function" ? o(i) : zo(o) && (o.current = i))
    }
    , [n])
}
const $f = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , h2 = "framerAppearId"
  , Nx = "data-" + $f(h2)
  , Dx = w.createContext({});
function m2(e, n, o, i, a) {
    const {visualElement: u} = w.useContext(Dl)
      , c = w.useContext(wx)
      , d = w.useContext(pf)
      , p = w.useContext(xx).reducedMotion
      , h = w.useRef(null);
    i = i || c.renderer,
    !h.current && i && (h.current = i(e, {
        visualState: n,
        parent: u,
        props: o,
        presenceContext: d,
        blockInitialAnimation: d ? d.initial === !1 : !1,
        reducedMotionConfig: p
    }));
    const g = h.current
      , y = w.useContext(Dx);
    g && !g.projection && a && (g.type === "html" || g.type === "svg") && g2(h.current, o, a, y);
    const x = w.useRef(!1);
    w.useInsertionEffect( () => {
        g && x.current && g.update(o, d)
    }
    );
    const v = o[Nx]
      , T = w.useRef(!!v && !window.MotionHandoffIsComplete?.(v) && window.MotionHasOptimisedAnimation?.(v));
    return Uk( () => {
        g && (x.current = !0,
        window.MotionIsMounted = !0,
        g.updateFeatures(),
        g.scheduleRenderMicrotask(),
        T.current && g.animationState && g.animationState.animateChanges())
    }
    ),
    w.useEffect( () => {
        g && (!T.current && g.animationState && g.animationState.animateChanges(),
        T.current && (queueMicrotask( () => {
            window.MotionHandoffMarkAsComplete?.(v)
        }
        ),
        T.current = !1),
        g.enteringChildren = void 0)
    }
    ),
    g
}
function g2(e, n, o, i) {
    const {layoutId: a, layout: u, drag: c, dragConstraints: d, layoutScroll: p, layoutRoot: h, layoutCrossfade: g} = n;
    e.projection = new o(e.latestValues,n["data-framer-portal-id"] ? void 0 : Mx(e.parent)),
    e.projection.setOptions({
        layoutId: a,
        layout: u,
        alwaysMeasureLayout: !!c || d && zo(d),
        visualElement: e,
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: i,
        crossfade: g,
        layoutScroll: p,
        layoutRoot: h
    })
}
function Mx(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : Mx(e.parent)
}
function zc(e, {forwardMotionProps: n=!1}={}, o, i) {
    o && HR(o);
    const a = Ff(e) ? d2 : c2;
    function u(d, p) {
        let h;
        const g = {
            ...w.useContext(xx),
            ...d,
            layoutId: v2(d)
        }
          , {isStatic: y} = g
          , x = YR(d)
          , v = a(d, y);
        if (!y && ff) {
            y2();
            const T = x2(g);
            h = T.MeasureLayout,
            x.visualElement = m2(e, v, g, i, T.ProjectionNode)
        }
        return S.jsxs(Dl.Provider, {
            value: x,
            children: [h && x.visualElement ? S.jsx(h, {
                visualElement: x.visualElement,
                ...g
            }) : null, a2(e, d, p2(v, x.visualElement, p), v, y, n)]
        })
    }
    u.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
    const c = w.forwardRef(u);
    return c[f2] = e,
    c
}
function v2({layoutId: e}) {
    const n = w.useContext(R0).id;
    return n && e !== void 0 ? n + "-" + e : e
}
function y2(e, n) {
    w.useContext(wx).strict
}
function x2(e) {
    const {drag: n, layout: o} = ei;
    if (!n && !o)
        return {};
    const i = {
        ...n,
        ...o
    };
    return {
        MeasureLayout: n?.isEnabled(e) || o?.isEnabled(e) ? i.MeasureLayout : void 0,
        ProjectionNode: i.ProjectionNode
    }
}
function w2(e, n) {
    if (typeof Proxy > "u")
        return zc;
    const o = new Map
      , i = (u, c) => zc(u, c, e, n)
      , a = (u, c) => i(u, c);
    return new Proxy(a,{
        get: (u, c) => c === "create" ? i : (o.has(c) || o.set(c, zc(c, void 0, e, n)),
        o.get(c))
    })
}
function jx({top: e, left: n, right: o, bottom: i}) {
    return {
        x: {
            min: n,
            max: o
        },
        y: {
            min: e,
            max: i
        }
    }
}
function S2({x: e, y: n}) {
    return {
        top: n.min,
        right: e.max,
        bottom: n.max,
        left: e.min
    }
}
function b2(e, n) {
    if (!n)
        return e;
    const o = n({
        x: e.left,
        y: e.top
    })
      , i = n({
        x: e.right,
        y: e.bottom
    });
    return {
        top: o.y,
        left: o.x,
        bottom: i.y,
        right: i.x
    }
}
function $c(e) {
    return e === void 0 || e === 1
}
function Ad({scale: e, scaleX: n, scaleY: o}) {
    return !$c(e) || !$c(n) || !$c(o)
}
function eo(e) {
    return Ad(e) || Ox(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function Ox(e) {
    return Ig(e.x) || Ig(e.y)
}
function Ig(e) {
    return e && e !== "0%"
}
function pl(e, n, o) {
    const i = e - o
      , a = n * i;
    return o + a
}
function Lg(e, n, o, i, a) {
    return a !== void 0 && (e = pl(e, a, i)),
    pl(e, o, i) + n
}
function Rd(e, n=0, o=1, i, a) {
    e.min = Lg(e.min, n, o, i, a),
    e.max = Lg(e.max, n, o, i, a)
}
function _x(e, {x: n, y: o}) {
    Rd(e.x, n.translate, n.scale, n.originPoint),
    Rd(e.y, o.translate, o.scale, o.originPoint)
}
const Vg = .999999999999
  , Fg = 1.0000000000001;
function C2(e, n, o, i=!1) {
    const a = o.length;
    if (!a)
        return;
    n.x = n.y = 1;
    let u, c;
    for (let d = 0; d < a; d++) {
        u = o[d],
        c = u.projectionDelta;
        const {visualElement: p} = u.options;
        p && p.props.style && p.props.style.display === "contents" || (i && u.options.layoutScroll && u.scroll && u !== u.root && Ho(e, {
            x: -u.scroll.offset.x,
            y: -u.scroll.offset.y
        }),
        c && (n.x *= c.x.scale,
        n.y *= c.y.scale,
        _x(e, c)),
        i && eo(u.latestValues) && Ho(e, u.latestValues))
    }
    n.x < Fg && n.x > Vg && (n.x = 1),
    n.y < Fg && n.y > Vg && (n.y = 1)
}
function $o(e, n) {
    e.min = e.min + n,
    e.max = e.max + n
}
function Bg(e, n, o, i, a=.5) {
    const u = Je(e.min, e.max, a);
    Rd(e, n, o, u, i)
}
function Ho(e, n) {
    Bg(e.x, n.x, n.scaleX, n.scale, n.originX),
    Bg(e.y, n.y, n.scaleY, n.scale, n.originY)
}
function Ix(e, n) {
    return jx(b2(e.getBoundingClientRect(), n))
}
function E2(e, n, o) {
    const i = Ix(e, o)
      , {scroll: a} = n;
    return a && ($o(i.x, a.offset.x),
    $o(i.y, a.offset.y)),
    i
}
const zg = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Uo = () => ({
    x: zg(),
    y: zg()
})
  , $g = () => ({
    min: 0,
    max: 0
})
  , ot = () => ({
    x: $g(),
    y: $g()
})
  , Nd = {
    current: null
}
  , Lx = {
    current: !1
};
function T2() {
    if (Lx.current = !0,
    !!ff)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , n = () => Nd.current = e.matches;
            e.addEventListener("change", n),
            n()
        } else
            Nd.current = !1
}
const P2 = new WeakMap;
function k2(e, n, o) {
    for (const i in n) {
        const a = n[i]
          , u = o[i];
        if (Ct(a))
            e.addValue(i, a);
        else if (Ct(u))
            e.addValue(i, Jo(a, {
                owner: e
            }));
        else if (u !== a)
            if (e.hasValue(i)) {
                const c = e.getValue(i);
                c.liveStyle === !0 ? c.jump(a) : c.hasAnimated || c.set(a)
            } else {
                const c = e.getStaticValue(i);
                e.addValue(i, Jo(c !== void 0 ? c : a, {
                    owner: e
                }))
            }
    }
    for (const i in o)
        n[i] === void 0 && e.removeValue(i);
    return n
}
const Hg = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class A2 {
    scrapeMotionValuesFromProps(n, o, i) {
        return {}
    }
    constructor({parent: n, props: o, presenceContext: i, reducedMotionConfig: a, blockInitialAnimation: u, visualState: c}, d={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = Nf,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const x = zt.now();
            this.renderScheduledAt < x && (this.renderScheduledAt = x,
            Qe.render(this.render, !1, !0))
        }
        ;
        const {latestValues: p, renderState: h} = c;
        this.latestValues = p,
        this.baseTarget = {
            ...p
        },
        this.initialValues = o.initial ? {
            ...p
        } : {},
        this.renderState = h,
        this.parent = n,
        this.props = o,
        this.presenceContext = i,
        this.depth = n ? n.depth + 1 : 0,
        this.reducedMotionConfig = a,
        this.options = d,
        this.blockInitialAnimation = !!u,
        this.isControllingVariants = jl(o),
        this.isVariantNode = bx(o),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(n && n.current);
        const {willChange: g, ...y} = this.scrapeMotionValuesFromProps(o, {}, this);
        for (const x in y) {
            const v = y[x];
            p[x] !== void 0 && Ct(v) && v.set(p[x])
        }
    }
    mount(n) {
        this.current = n,
        P2.set(n, this),
        this.projection && !this.projection.instance && this.projection.mount(n),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (o, i) => this.bindToMotionValue(i, o)),
        Lx.current || T2(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Nd.current,
        this.parent?.addChild(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        this.projection && this.projection.unmount(),
        Or(this.notifyUpdate),
        Or(this.render),
        this.valueSubscriptions.forEach(n => n()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent?.removeChild(this);
        for (const n in this.events)
            this.events[n].clear();
        for (const n in this.features) {
            const o = this.features[n];
            o && (o.unmount(),
            o.isMounted = !1)
        }
        this.current = null
    }
    addChild(n) {
        this.children.add(n),
        this.enteringChildren ?? (this.enteringChildren = new Set),
        this.enteringChildren.add(n)
    }
    removeChild(n) {
        this.children.delete(n),
        this.enteringChildren && this.enteringChildren.delete(n)
    }
    bindToMotionValue(n, o) {
        this.valueSubscriptions.has(n) && this.valueSubscriptions.get(n)();
        const i = li.has(n);
        i && this.onBindTransform && this.onBindTransform();
        const a = o.on("change", c => {
            this.latestValues[n] = c,
            this.props.onUpdate && Qe.preRender(this.notifyUpdate),
            i && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender()
        }
        );
        let u;
        window.MotionCheckAppearSync && (u = window.MotionCheckAppearSync(this, n, o)),
        this.valueSubscriptions.set(n, () => {
            a(),
            u && u(),
            o.owner && o.stop()
        }
        )
    }
    sortNodePosition(n) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== n.type ? 0 : this.sortInstanceNodePosition(this.current, n.current)
    }
    updateFeatures() {
        let n = "animation";
        for (n in ei) {
            const o = ei[n];
            if (!o)
                continue;
            const {isEnabled: i, Feature: a} = o;
            if (!this.features[n] && a && i(this.props) && (this.features[n] = new a(this)),
            this.features[n]) {
                const u = this.features[n];
                u.isMounted ? u.update() : (u.mount(),
                u.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ot()
    }
    getStaticValue(n) {
        return this.latestValues[n]
    }
    setStaticValue(n, o) {
        this.latestValues[n] = o
    }
    update(n, o) {
        (n.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = n,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = o;
        for (let i = 0; i < Hg.length; i++) {
            const a = Hg[i];
            this.propEventSubscriptions[a] && (this.propEventSubscriptions[a](),
            delete this.propEventSubscriptions[a]);
            const u = "on" + a
              , c = n[u];
            c && (this.propEventSubscriptions[a] = this.on(a, c))
        }
        this.prevMotionValues = k2(this, this.scrapeMotionValuesFromProps(n, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(n) {
        return this.props.variants ? this.props.variants[n] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(n) {
        const o = this.getClosestVariantNode();
        if (o)
            return o.variantChildren && o.variantChildren.add(n),
            () => o.variantChildren.delete(n)
    }
    addValue(n, o) {
        const i = this.values.get(n);
        o !== i && (i && this.removeValue(n),
        this.bindToMotionValue(n, o),
        this.values.set(n, o),
        this.latestValues[n] = o.get())
    }
    removeValue(n) {
        this.values.delete(n);
        const o = this.valueSubscriptions.get(n);
        o && (o(),
        this.valueSubscriptions.delete(n)),
        delete this.latestValues[n],
        this.removeValueFromRenderState(n, this.renderState)
    }
    hasValue(n) {
        return this.values.has(n)
    }
    getValue(n, o) {
        if (this.props.values && this.props.values[n])
            return this.props.values[n];
        let i = this.values.get(n);
        return i === void 0 && o !== void 0 && (i = Jo(o === null ? void 0 : o, {
            owner: this
        }),
        this.addValue(n, i)),
        i
    }
    readValue(n, o) {
        let i = this.latestValues[n] !== void 0 || !this.current ? this.latestValues[n] : this.getBaseTargetFromProps(this.props, n) ?? this.readValueFromInstance(this.current, n, this.options);
        return i != null && (typeof i == "string" && (N0(i) || M0(i)) ? i = parseFloat(i) : !zR(i) && _r.test(o) && (i = px(n, o)),
        this.setBaseTarget(n, Ct(i) ? i.get() : i)),
        Ct(i) ? i.get() : i
    }
    setBaseTarget(n, o) {
        this.baseTarget[n] = o
    }
    getBaseTarget(n) {
        const {initial: o} = this.props;
        let i;
        if (typeof o == "string" || typeof o == "object") {
            const u = Bf(this.props, o, this.presenceContext?.custom);
            u && (i = u[n])
        }
        if (o && i !== void 0)
            return i;
        const a = this.getBaseTargetFromProps(this.props, n);
        return a !== void 0 && !Ct(a) ? a : this.initialValues[n] !== void 0 && i === void 0 ? void 0 : this.baseTarget[n]
    }
    on(n, o) {
        return this.events[n] || (this.events[n] = new yf),
        this.events[n].add(o)
    }
    notify(n, ...o) {
        this.events[n] && this.events[n].notify(...o)
    }
    scheduleRenderMicrotask() {
        jf.render(this.render)
    }
}
class Vx extends A2 {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = AR
    }
    sortInstanceNodePosition(n, o) {
        return n.compareDocumentPosition(o) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(n, o) {
        return n.style ? n.style[o] : void 0
    }
    removeValueFromRenderState(n, {vars: o, style: i}) {
        delete o[n],
        delete i[n]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: n} = this.props;
        Ct(n) && (this.childSubscription = n.on("change", o => {
            this.current && (this.current.textContent = `${o}`)
        }
        ))
    }
}
function Fx(e, {style: n, vars: o}, i, a) {
    const u = e.style;
    let c;
    for (c in n)
        u[c] = n[c];
    a?.applyProjectionStyles(u, i);
    for (c in o)
        u.setProperty(c, o[c])
}
function R2(e) {
    return window.getComputedStyle(e)
}
class N2 extends Vx {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = Fx
    }
    readValueFromInstance(n, o) {
        if (li.has(o))
            return this.projection?.isProjecting ? Sd(o) : GA(n, o);
        {
            const i = R2(n)
              , a = (Sf(o) ? i.getPropertyValue(o) : i[o]) || 0;
            return typeof a == "string" ? a.trim() : a
        }
    }
    measureInstanceViewportBox(n, {transformPagePoint: o}) {
        return Ix(n, o)
    }
    build(n, o, i) {
        Lf(n, o, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(n, o, i) {
        return zf(n, o, i)
    }
}
const Bx = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function D2(e, n, o, i) {
    Fx(e, n, void 0, i);
    for (const a in n.attrs)
        e.setAttribute(Bx.has(a) ? a : $f(a), n.attrs[a])
}
class M2 extends Vx {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = ot
    }
    getBaseTargetFromProps(n, o) {
        return n[o]
    }
    readValueFromInstance(n, o) {
        if (li.has(o)) {
            const i = fx(o);
            return i && i.default || 0
        }
        return o = Bx.has(o) ? o : $f(o),
        n.getAttribute(o)
    }
    scrapeMotionValuesFromProps(n, o, i) {
        return Rx(n, o, i)
    }
    build(n, o, i) {
        Tx(n, o, this.isSVGTag, i.transformTemplate, i.style)
    }
    renderInstance(n, o, i, a) {
        D2(n, o, i, a)
    }
    mount(n) {
        this.isSVGTag = kx(n.tagName),
        super.mount(n)
    }
}
const j2 = (e, n) => Ff(e) ? new M2(n) : new N2(n,{
    allowProjection: e !== w.Fragment
});
function Xo(e, n, o) {
    const i = e.getProps();
    return Bf(i, n, o !== void 0 ? o : i.custom, e)
}
const Dd = e => Array.isArray(e);
function O2(e, n, o) {
    e.hasValue(n) ? e.getValue(n).set(o) : e.addValue(n, Jo(o))
}
function _2(e) {
    return Dd(e) ? e[e.length - 1] || 0 : e
}
function I2(e, n) {
    const o = Xo(e, n);
    let {transitionEnd: i={}, transition: a={}, ...u} = o || {};
    u = {
        ...u,
        ...i
    };
    for (const c in u) {
        const d = _2(u[c]);
        O2(e, c, d)
    }
}
function L2(e) {
    return !!(Ct(e) && e.add)
}
function Md(e, n) {
    const o = e.getValue("willChange");
    if (L2(o))
        return o.add(n);
    if (!o && nr.WillChange) {
        const i = new nr.WillChange("auto");
        e.addValue("willChange", i),
        i.add(n)
    }
}
function zx(e) {
    return e.props[Nx]
}
const V2 = e => e !== null;
function F2(e, {repeat: n, repeatType: o="loop"}, i) {
    const a = e.filter(V2)
      , u = n && o !== "loop" && n % 2 === 1 ? 0 : a.length - 1;
    return a[u]
}
const B2 = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , z2 = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , $2 = {
    type: "keyframes",
    duration: .8
}
  , H2 = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , U2 = (e, {keyframes: n}) => n.length > 2 ? $2 : li.has(e) ? e.startsWith("scale") ? z2(n[1]) : B2 : H2;
function W2({when: e, delay: n, delayChildren: o, staggerChildren: i, staggerDirection: a, repeat: u, repeatType: c, repeatDelay: d, from: p, elapsed: h, ...g}) {
    return !!Object.keys(g).length
}
const Hf = (e, n, o, i={}, a, u) => c => {
    const d = Df(i, e) || {}
      , p = d.delay || i.delay || 0;
    let {elapsed: h=0} = i;
    h = h - In(p);
    const g = {
        keyframes: Array.isArray(o) ? o : [null, o],
        ease: "easeOut",
        velocity: n.getVelocity(),
        ...d,
        delay: -h,
        onUpdate: x => {
            n.set(x),
            d.onUpdate && d.onUpdate(x)
        }
        ,
        onComplete: () => {
            c(),
            d.onComplete && d.onComplete()
        }
        ,
        name: e,
        motionValue: n,
        element: u ? void 0 : a
    };
    W2(d) || Object.assign(g, U2(e, g)),
    g.duration && (g.duration = In(g.duration)),
    g.repeatDelay && (g.repeatDelay = In(g.repeatDelay)),
    g.from !== void 0 && (g.keyframes[0] = g.from);
    let y = !1;
    if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (Pd(g),
    g.delay === 0 && (y = !0)),
    (nr.instantAnimations || nr.skipAnimations) && (y = !0,
    Pd(g),
    g.delay = 0),
    g.allowFlatten = !d.type && !d.ease,
    y && !u && n.get() !== void 0) {
        const x = F2(g.keyframes, d);
        if (x !== void 0) {
            Qe.update( () => {
                g.onUpdate(x),
                g.onComplete()
            }
            );
            return
        }
    }
    return d.isSync ? new Rf(g) : new gR(g)
}
;
function K2({protectedKeys: e, needsAnimating: n}, o) {
    const i = e.hasOwnProperty(o) && n[o] !== !0;
    return n[o] = !1,
    i
}
function $x(e, n, {delay: o=0, transitionOverride: i, type: a}={}) {
    let {transition: u=e.getDefaultTransition(), transitionEnd: c, ...d} = n;
    i && (u = i);
    const p = []
      , h = a && e.animationState && e.animationState.getState()[a];
    for (const g in d) {
        const y = e.getValue(g, e.latestValues[g] ?? null)
          , x = d[g];
        if (x === void 0 || h && K2(h, g))
            continue;
        const v = {
            delay: o,
            ...Df(u || {}, g)
        }
          , T = y.get();
        if (T !== void 0 && !y.isAnimating && !Array.isArray(x) && x === T && !v.velocity)
            continue;
        let C = !1;
        if (window.MotionHandoffAnimation) {
            const P = zx(e);
            if (P) {
                const A = window.MotionHandoffAnimation(P, g, Qe);
                A !== null && (v.startTime = A,
                C = !0)
            }
        }
        Md(e, g),
        y.start(Hf(g, y, x, e.shouldReduceMotion && ux.has(g) ? {
            type: !1
        } : v, e, C));
        const E = y.animation;
        E && p.push(E)
    }
    return c && Promise.all(p).then( () => {
        Qe.update( () => {
            c && I2(e, c)
        }
        )
    }
    ),
    p
}
function Hx(e, n, o, i=0, a=1) {
    const u = Array.from(e).sort( (h, g) => h.sortNodePosition(g)).indexOf(n)
      , c = e.size
      , d = (c - 1) * i;
    return typeof o == "function" ? o(u, c) : a === 1 ? u * i : d - u * i
}
function jd(e, n, o={}) {
    const i = Xo(e, n, o.type === "exit" ? e.presenceContext?.custom : void 0);
    let {transition: a=e.getDefaultTransition() || {}} = i || {};
    o.transitionOverride && (a = o.transitionOverride);
    const u = i ? () => Promise.all($x(e, i, o)) : () => Promise.resolve()
      , c = e.variantChildren && e.variantChildren.size ? (p=0) => {
        const {delayChildren: h=0, staggerChildren: g, staggerDirection: y} = a;
        return G2(e, n, p, h, g, y, o)
    }
    : () => Promise.resolve()
      , {when: d} = a;
    if (d) {
        const [p,h] = d === "beforeChildren" ? [u, c] : [c, u];
        return p().then( () => h())
    } else
        return Promise.all([u(), c(o.delay)])
}
function G2(e, n, o=0, i=0, a=0, u=1, c) {
    const d = [];
    for (const p of e.variantChildren)
        p.notify("AnimationStart", n),
        d.push(jd(p, n, {
            ...c,
            delay: o + (typeof i == "function" ? 0 : i) + Hx(e.variantChildren, p, i, a, u)
        }).then( () => p.notify("AnimationComplete", n)));
    return Promise.all(d)
}
function Y2(e, n, o={}) {
    e.notify("AnimationStart", n);
    let i;
    if (Array.isArray(n)) {
        const a = n.map(u => jd(e, u, o));
        i = Promise.all(a)
    } else if (typeof n == "string")
        i = jd(e, n, o);
    else {
        const a = typeof n == "function" ? Xo(e, n, o.custom) : n;
        i = Promise.all($x(e, a, o))
    }
    return i.then( () => {
        e.notify("AnimationComplete", n)
    }
    )
}
function Ux(e, n) {
    if (!Array.isArray(n))
        return !1;
    const o = n.length;
    if (o !== e.length)
        return !1;
    for (let i = 0; i < o; i++)
        if (n[i] !== e[i])
            return !1;
    return !0
}
const X2 = If.length;
function Wx(e) {
    if (!e)
        return;
    if (!e.isControllingVariants) {
        const o = e.parent ? Wx(e.parent) || {} : {};
        return e.props.initial !== void 0 && (o.initial = e.props.initial),
        o
    }
    const n = {};
    for (let o = 0; o < X2; o++) {
        const i = If[o]
          , a = e.props[i];
        (ls(a) || a === !1) && (n[i] = a)
    }
    return n
}
const Q2 = [..._f].reverse()
  , Z2 = _f.length;
function q2(e) {
    return n => Promise.all(n.map( ({animation: o, options: i}) => Y2(e, o, i)))
}
function J2(e) {
    let n = q2(e)
      , o = Ug()
      , i = !0;
    const a = p => (h, g) => {
        const y = Xo(e, g, p === "exit" ? e.presenceContext?.custom : void 0);
        if (y) {
            const {transition: x, transitionEnd: v, ...T} = y;
            h = {
                ...h,
                ...T,
                ...v
            }
        }
        return h
    }
    ;
    function u(p) {
        n = p(e)
    }
    function c(p) {
        const {props: h} = e
          , g = Wx(e.parent) || {}
          , y = []
          , x = new Set;
        let v = {}
          , T = 1 / 0;
        for (let E = 0; E < Z2; E++) {
            const P = Q2[E]
              , A = o[P]
              , R = h[P] !== void 0 ? h[P] : g[P]
              , O = ls(R)
              , j = P === p ? A.isActive : null;
            j === !1 && (T = E);
            let $ = R === g[P] && R !== h[P] && O;
            if ($ && i && e.manuallyAnimateOnMount && ($ = !1),
            A.protectedKeys = {
                ...v
            },
            !A.isActive && j === null || !R && !A.prevProp || Ml(R) || typeof R == "boolean")
                continue;
            const I = eN(A.prevProp, R);
            let U = I || P === p && A.isActive && !$ && O || E > T && O
              , oe = !1;
            const J = Array.isArray(R) ? R : [R];
            let ne = J.reduce(a(P), {});
            j === !1 && (ne = {});
            const {prevResolvedValues: Z={}} = A
              , le = {
                ...Z,
                ...ne
            }
              , ue = Q => {
                U = !0,
                x.has(Q) && (oe = !0,
                x.delete(Q)),
                A.needsAnimating[Q] = !0;
                const V = e.getValue(Q);
                V && (V.liveStyle = !1)
            }
            ;
            for (const Q in le) {
                const V = ne[Q]
                  , H = Z[Q];
                if (v.hasOwnProperty(Q))
                    continue;
                let G = !1;
                Dd(V) && Dd(H) ? G = !Ux(V, H) : G = V !== H,
                G ? V != null ? ue(Q) : x.add(Q) : V !== void 0 && x.has(Q) ? ue(Q) : A.protectedKeys[Q] = !0
            }
            A.prevProp = R,
            A.prevResolvedValues = ne,
            A.isActive && (v = {
                ...v,
                ...ne
            }),
            i && e.blockInitialAnimation && (U = !1);
            const ge = $ && I;
            U && (!ge || oe) && y.push(...J.map(Q => {
                const V = {
                    type: P
                };
                if (typeof Q == "string" && i && !ge && e.manuallyAnimateOnMount && e.parent) {
                    const {parent: H} = e
                      , G = Xo(H, Q);
                    if (H.enteringChildren && G) {
                        const {delayChildren: D} = G.transition || {};
                        V.delay = Hx(H.enteringChildren, e, D)
                    }
                }
                return {
                    animation: Q,
                    options: V
                }
            }
            ))
        }
        if (x.size) {
            const E = {};
            if (typeof h.initial != "boolean") {
                const P = Xo(e, Array.isArray(h.initial) ? h.initial[0] : h.initial);
                P && P.transition && (E.transition = P.transition)
            }
            x.forEach(P => {
                const A = e.getBaseTarget(P)
                  , R = e.getValue(P);
                R && (R.liveStyle = !0),
                E[P] = A ?? null
            }
            ),
            y.push({
                animation: E
            })
        }
        let C = !!y.length;
        return i && (h.initial === !1 || h.initial === h.animate) && !e.manuallyAnimateOnMount && (C = !1),
        i = !1,
        C ? n(y) : Promise.resolve()
    }
    function d(p, h) {
        if (o[p].isActive === h)
            return Promise.resolve();
        e.variantChildren?.forEach(y => y.animationState?.setActive(p, h)),
        o[p].isActive = h;
        const g = c(p);
        for (const y in o)
            o[y].protectedKeys = {};
        return g
    }
    return {
        animateChanges: c,
        setActive: d,
        setAnimateFunction: u,
        getState: () => o,
        reset: () => {
            o = Ug(),
            i = !0
        }
    }
}
function eN(e, n) {
    return typeof n == "string" ? n !== e : Array.isArray(n) ? !Ux(n, e) : !1
}
function Jr(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function Ug() {
    return {
        animate: Jr(!0),
        whileInView: Jr(),
        whileHover: Jr(),
        whileTap: Jr(),
        whileDrag: Jr(),
        whileFocus: Jr(),
        exit: Jr()
    }
}
class Vr {
    constructor(n) {
        this.isMounted = !1,
        this.node = n
    }
    update() {}
}
class tN extends Vr {
    constructor(n) {
        super(n),
        n.animationState || (n.animationState = J2(n))
    }
    updateAnimationControlsSubscription() {
        const {animate: n} = this.node.getProps();
        Ml(n) && (this.unmountControls = n.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: n} = this.node.getProps()
          , {animate: o} = this.node.prevProps || {};
        n !== o && this.updateAnimationControlsSubscription()
    }
    unmount() {
        this.node.animationState.reset(),
        this.unmountControls?.()
    }
}
let nN = 0;
class rN extends Vr {
    constructor() {
        super(...arguments),
        this.id = nN++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: n, onExitComplete: o} = this.node.presenceContext
          , {isPresent: i} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || n === i)
            return;
        const a = this.node.animationState.setActive("exit", !n);
        o && !n && a.then( () => {
            o(this.id)
        }
        )
    }
    mount() {
        const {register: n, onExitComplete: o} = this.node.presenceContext || {};
        o && o(this.id),
        n && (this.unmount = n(this.id))
    }
    unmount() {}
}
const oN = {
    animation: {
        Feature: tN
    },
    exit: {
        Feature: rN
    }
};
function cs(e, n, o, i={
    passive: !0
}) {
    return e.addEventListener(n, o, i),
    () => e.removeEventListener(n, o)
}
function vs(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const iN = e => n => Of(n) && e(n, vs(n));
function es(e, n, o, i) {
    return cs(e, n, iN(o), i)
}
const Kx = 1e-4
  , sN = 1 - Kx
  , aN = 1 + Kx
  , Gx = .01
  , lN = 0 - Gx
  , uN = 0 + Gx;
function Rt(e) {
    return e.max - e.min
}
function cN(e, n, o) {
    return Math.abs(e - n) <= o
}
function Wg(e, n, o, i=.5) {
    e.origin = i,
    e.originPoint = Je(n.min, n.max, e.origin),
    e.scale = Rt(o) / Rt(n),
    e.translate = Je(o.min, o.max, e.origin) - e.originPoint,
    (e.scale >= sN && e.scale <= aN || isNaN(e.scale)) && (e.scale = 1),
    (e.translate >= lN && e.translate <= uN || isNaN(e.translate)) && (e.translate = 0)
}
function ts(e, n, o, i) {
    Wg(e.x, n.x, o.x, i ? i.originX : void 0),
    Wg(e.y, n.y, o.y, i ? i.originY : void 0)
}
function Kg(e, n, o) {
    e.min = o.min + n.min,
    e.max = e.min + Rt(n)
}
function dN(e, n, o) {
    Kg(e.x, n.x, o.x),
    Kg(e.y, n.y, o.y)
}
function Gg(e, n, o) {
    e.min = n.min - o.min,
    e.max = e.min + Rt(n)
}
function ns(e, n, o) {
    Gg(e.x, n.x, o.x),
    Gg(e.y, n.y, o.y)
}
function rn(e) {
    return [e("x"), e("y")]
}
const Yx = ({current: e}) => e ? e.ownerDocument.defaultView : null
  , Yg = (e, n) => Math.abs(e - n);
function fN(e, n) {
    const o = Yg(e.x, n.x)
      , i = Yg(e.y, n.y);
    return Math.sqrt(o ** 2 + i ** 2)
}
class Xx {
    constructor(n, o, {transformPagePoint: i, contextWindow: a=window, dragSnapToOrigin: u=!1, distanceThreshold: c=3}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const x = Uc(this.lastMoveEventInfo, this.history)
              , v = this.startEvent !== null
              , T = fN(x.offset, {
                x: 0,
                y: 0
            }) >= this.distanceThreshold;
            if (!v && !T)
                return;
            const {point: C} = x
              , {timestamp: E} = vt;
            this.history.push({
                ...C,
                timestamp: E
            });
            const {onStart: P, onMove: A} = this.handlers;
            v || (P && P(this.lastMoveEvent, x),
            this.startEvent = this.lastMoveEvent),
            A && A(this.lastMoveEvent, x)
        }
        ,
        this.handlePointerMove = (x, v) => {
            this.lastMoveEvent = x,
            this.lastMoveEventInfo = Hc(v, this.transformPagePoint),
            Qe.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (x, v) => {
            this.end();
            const {onEnd: T, onSessionEnd: C, resumeAnimation: E} = this.handlers;
            if (this.dragSnapToOrigin && E && E(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const P = Uc(x.type === "pointercancel" ? this.lastMoveEventInfo : Hc(v, this.transformPagePoint), this.history);
            this.startEvent && T && T(x, P),
            C && C(x, P)
        }
        ,
        !Of(n))
            return;
        this.dragSnapToOrigin = u,
        this.handlers = o,
        this.transformPagePoint = i,
        this.distanceThreshold = c,
        this.contextWindow = a || window;
        const d = vs(n)
          , p = Hc(d, this.transformPagePoint)
          , {point: h} = p
          , {timestamp: g} = vt;
        this.history = [{
            ...h,
            timestamp: g
        }];
        const {onSessionStart: y} = o;
        y && y(n, Uc(p, this.history)),
        this.removeListeners = hs(es(this.contextWindow, "pointermove", this.handlePointerMove), es(this.contextWindow, "pointerup", this.handlePointerUp), es(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(n) {
        this.handlers = n
    }
    end() {
        this.removeListeners && this.removeListeners(),
        Or(this.updatePoint)
    }
}
function Hc(e, n) {
    return n ? {
        point: n(e.point)
    } : e
}
function Xg(e, n) {
    return {
        x: e.x - n.x,
        y: e.y - n.y
    }
}
function Uc({point: e}, n) {
    return {
        point: e,
        delta: Xg(e, Qx(n)),
        offset: Xg(e, pN(n)),
        velocity: hN(n, .1)
    }
}
function pN(e) {
    return e[0]
}
function Qx(e) {
    return e[e.length - 1]
}
function hN(e, n) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let o = e.length - 1
      , i = null;
    const a = Qx(e);
    for (; o >= 0 && (i = e[o],
    !(a.timestamp - i.timestamp > In(n))); )
        o--;
    if (!i)
        return {
            x: 0,
            y: 0
        };
    const u = Ln(a.timestamp - i.timestamp);
    if (u === 0)
        return {
            x: 0,
            y: 0
        };
    const c = {
        x: (a.x - i.x) / u,
        y: (a.y - i.y) / u
    };
    return c.x === 1 / 0 && (c.x = 0),
    c.y === 1 / 0 && (c.y = 0),
    c
}
function mN(e, {min: n, max: o}, i) {
    return n !== void 0 && e < n ? e = i ? Je(n, e, i.min) : Math.max(e, n) : o !== void 0 && e > o && (e = i ? Je(o, e, i.max) : Math.min(e, o)),
    e
}
function Qg(e, n, o) {
    return {
        min: n !== void 0 ? e.min + n : void 0,
        max: o !== void 0 ? e.max + o - (e.max - e.min) : void 0
    }
}
function gN(e, {top: n, left: o, bottom: i, right: a}) {
    return {
        x: Qg(e.x, o, a),
        y: Qg(e.y, n, i)
    }
}
function Zg(e, n) {
    let o = n.min - e.min
      , i = n.max - e.max;
    return n.max - n.min < e.max - e.min && ([o,i] = [i, o]),
    {
        min: o,
        max: i
    }
}
function vN(e, n) {
    return {
        x: Zg(e.x, n.x),
        y: Zg(e.y, n.y)
    }
}
function yN(e, n) {
    let o = .5;
    const i = Rt(e)
      , a = Rt(n);
    return a > i ? o = is(n.min, n.max - i, e.min) : i > a && (o = is(e.min, e.max - a, n.min)),
    tr(0, 1, o)
}
function xN(e, n) {
    const o = {};
    return n.min !== void 0 && (o.min = n.min - e.min),
    n.max !== void 0 && (o.max = n.max - e.min),
    o
}
const Od = .35;
function wN(e=Od) {
    return e === !1 ? e = 0 : e === !0 && (e = Od),
    {
        x: qg(e, "left", "right"),
        y: qg(e, "top", "bottom")
    }
}
function qg(e, n, o) {
    return {
        min: Jg(e, n),
        max: Jg(e, o)
    }
}
function Jg(e, n) {
    return typeof e == "number" ? e : e[n] || 0
}
const SN = new WeakMap;
class bN {
    constructor(n) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = ot(),
        this.latestPointerEvent = null,
        this.latestPanInfo = null,
        this.visualElement = n
    }
    start(n, {snapToCursor: o=!1, distanceThreshold: i}={}) {
        const {presenceContext: a} = this.visualElement;
        if (a && a.isPresent === !1)
            return;
        const u = y => {
            const {dragSnapToOrigin: x} = this.getProps();
            x ? this.pauseAnimation() : this.stopAnimation(),
            o && this.snapToCursor(vs(y).point)
        }
          , c = (y, x) => {
            const {drag: v, dragPropagation: T, onDragStart: C} = this.getProps();
            if (v && !T && (this.openDragLock && this.openDragLock(),
            this.openDragLock = jR(v),
            !this.openDragLock))
                return;
            this.latestPointerEvent = y,
            this.latestPanInfo = x,
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            rn(P => {
                let A = this.getAxisMotionValue(P).get() || 0;
                if (Vn.test(A)) {
                    const {projection: R} = this.visualElement;
                    if (R && R.layout) {
                        const O = R.layout.layoutBox[P];
                        O && (A = Rt(O) * (parseFloat(A) / 100))
                    }
                }
                this.originPoint[P] = A
            }
            ),
            C && Qe.postRender( () => C(y, x)),
            Md(this.visualElement, "transform");
            const {animationState: E} = this.visualElement;
            E && E.setActive("whileDrag", !0)
        }
          , d = (y, x) => {
            this.latestPointerEvent = y,
            this.latestPanInfo = x;
            const {dragPropagation: v, dragDirectionLock: T, onDirectionLock: C, onDrag: E} = this.getProps();
            if (!v && !this.openDragLock)
                return;
            const {offset: P} = x;
            if (T && this.currentDirection === null) {
                this.currentDirection = CN(P),
                this.currentDirection !== null && C && C(this.currentDirection);
                return
            }
            this.updateAxis("x", x.point, P),
            this.updateAxis("y", x.point, P),
            this.visualElement.render(),
            E && E(y, x)
        }
          , p = (y, x) => {
            this.latestPointerEvent = y,
            this.latestPanInfo = x,
            this.stop(y, x),
            this.latestPointerEvent = null,
            this.latestPanInfo = null
        }
          , h = () => rn(y => this.getAnimationState(y) === "paused" && this.getAxisMotionValue(y).animation?.play())
          , {dragSnapToOrigin: g} = this.getProps();
        this.panSession = new Xx(n,{
            onSessionStart: u,
            onStart: c,
            onMove: d,
            onSessionEnd: p,
            resumeAnimation: h
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: g,
            distanceThreshold: i,
            contextWindow: Yx(this.visualElement)
        })
    }
    stop(n, o) {
        const i = n || this.latestPointerEvent
          , a = o || this.latestPanInfo
          , u = this.isDragging;
        if (this.cancel(),
        !u || !a || !i)
            return;
        const {velocity: c} = a;
        this.startAnimation(c);
        const {onDragEnd: d} = this.getProps();
        d && Qe.postRender( () => d(i, a))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: n, animationState: o} = this.visualElement;
        n && (n.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: i} = this.getProps();
        !i && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        o && o.setActive("whileDrag", !1)
    }
    updateAxis(n, o, i) {
        const {drag: a} = this.getProps();
        if (!i || !Ba(n, a, this.currentDirection))
            return;
        const u = this.getAxisMotionValue(n);
        let c = this.originPoint[n] + i[n];
        this.constraints && this.constraints[n] && (c = mN(c, this.constraints[n], this.elastic[n])),
        u.set(c)
    }
    resolveConstraints() {
        const {dragConstraints: n, dragElastic: o} = this.getProps()
          , i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout
          , a = this.constraints;
        n && zo(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = gN(i.layoutBox, n) : this.constraints = !1,
        this.elastic = wN(o),
        a !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && rn(u => {
            this.constraints !== !1 && this.getAxisMotionValue(u) && (this.constraints[u] = xN(i.layoutBox[u], this.constraints[u]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: n, onMeasureDragConstraints: o} = this.getProps();
        if (!n || !zo(n))
            return !1;
        const i = n.current
          , {projection: a} = this.visualElement;
        if (!a || !a.layout)
            return !1;
        const u = E2(i, a.root, this.visualElement.getTransformPagePoint());
        let c = vN(a.layout.layoutBox, u);
        if (o) {
            const d = o(S2(c));
            this.hasMutatedConstraints = !!d,
            d && (c = jx(d))
        }
        return c
    }
    startAnimation(n) {
        const {drag: o, dragMomentum: i, dragElastic: a, dragTransition: u, dragSnapToOrigin: c, onDragTransitionEnd: d} = this.getProps()
          , p = this.constraints || {}
          , h = rn(g => {
            if (!Ba(g, o, this.currentDirection))
                return;
            let y = p && p[g] || {};
            c && (y = {
                min: 0,
                max: 0
            });
            const x = a ? 200 : 1e6
              , v = a ? 40 : 1e7
              , T = {
                type: "inertia",
                velocity: i ? n[g] : 0,
                bounceStiffness: x,
                bounceDamping: v,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...u,
                ...y
            };
            return this.startAxisValueAnimation(g, T)
        }
        );
        return Promise.all(h).then(d)
    }
    startAxisValueAnimation(n, o) {
        const i = this.getAxisMotionValue(n);
        return Md(this.visualElement, n),
        i.start(Hf(n, i, 0, o, this.visualElement, !1))
    }
    stopAnimation() {
        rn(n => this.getAxisMotionValue(n).stop())
    }
    pauseAnimation() {
        rn(n => this.getAxisMotionValue(n).animation?.pause())
    }
    getAnimationState(n) {
        return this.getAxisMotionValue(n).animation?.state
    }
    getAxisMotionValue(n) {
        const o = `_drag${n.toUpperCase()}`
          , i = this.visualElement.getProps()
          , a = i[o];
        return a || this.visualElement.getValue(n, (i.initial ? i.initial[n] : void 0) || 0)
    }
    snapToCursor(n) {
        rn(o => {
            const {drag: i} = this.getProps();
            if (!Ba(o, i, this.currentDirection))
                return;
            const {projection: a} = this.visualElement
              , u = this.getAxisMotionValue(o);
            if (a && a.layout) {
                const {min: c, max: d} = a.layout.layoutBox[o];
                u.set(n[o] - Je(c, d, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: n, dragConstraints: o} = this.getProps()
          , {projection: i} = this.visualElement;
        if (!zo(o) || !i || !this.constraints)
            return;
        this.stopAnimation();
        const a = {
            x: 0,
            y: 0
        };
        rn(c => {
            const d = this.getAxisMotionValue(c);
            if (d && this.constraints !== !1) {
                const p = d.get();
                a[c] = yN({
                    min: p,
                    max: p
                }, this.constraints[c])
            }
        }
        );
        const {transformTemplate: u} = this.visualElement.getProps();
        this.visualElement.current.style.transform = u ? u({}, "") : "none",
        i.root && i.root.updateScroll(),
        i.updateLayout(),
        this.resolveConstraints(),
        rn(c => {
            if (!Ba(c, n, null))
                return;
            const d = this.getAxisMotionValue(c)
              , {min: p, max: h} = this.constraints[c];
            d.set(Je(p, h, a[c]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        SN.set(this.visualElement, this);
        const n = this.visualElement.current
          , o = es(n, "pointerdown", p => {
            const {drag: h, dragListener: g=!0} = this.getProps();
            h && g && this.start(p)
        }
        )
          , i = () => {
            const {dragConstraints: p} = this.getProps();
            zo(p) && p.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: a} = this.visualElement
          , u = a.addEventListener("measure", i);
        a && !a.layout && (a.root && a.root.updateScroll(),
        a.updateLayout()),
        Qe.read(i);
        const c = cs(window, "resize", () => this.scalePositionWithinConstraints())
          , d = a.addEventListener("didUpdate", ({delta: p, hasLayoutChanged: h}) => {
            this.isDragging && h && (rn(g => {
                const y = this.getAxisMotionValue(g);
                y && (this.originPoint[g] += p[g].translate,
                y.set(y.get() + p[g].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            c(),
            o(),
            u(),
            d && d()
        }
    }
    getProps() {
        const n = this.visualElement.getProps()
          , {drag: o=!1, dragDirectionLock: i=!1, dragPropagation: a=!1, dragConstraints: u=!1, dragElastic: c=Od, dragMomentum: d=!0} = n;
        return {
            ...n,
            drag: o,
            dragDirectionLock: i,
            dragPropagation: a,
            dragConstraints: u,
            dragElastic: c,
            dragMomentum: d
        }
    }
}
function Ba(e, n, o) {
    return (n === !0 || n === e) && (o === null || o === e)
}
function CN(e, n=10) {
    let o = null;
    return Math.abs(e.y) > n ? o = "y" : Math.abs(e.x) > n && (o = "x"),
    o
}
class EN extends Vr {
    constructor(n) {
        super(n),
        this.removeGroupControls = on,
        this.removeListeners = on,
        this.controls = new bN(n)
    }
    mount() {
        const {dragControls: n} = this.node.getProps();
        n && (this.removeGroupControls = n.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || on
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const ev = e => (n, o) => {
    e && Qe.postRender( () => e(n, o))
}
;
class TN extends Vr {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = on
    }
    onPointerDown(n) {
        this.session = new Xx(n,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Yx(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: n, onPanStart: o, onPan: i, onPanEnd: a} = this.node.getProps();
        return {
            onSessionStart: ev(n),
            onStart: ev(o),
            onMove: i,
            onEnd: (u, c) => {
                delete this.session,
                a && Qe.postRender( () => a(u, c))
            }
        }
    }
    mount() {
        this.removePointerDownListener = es(this.node.current, "pointerdown", n => this.onPointerDown(n))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
const Xa = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function tv(e, n) {
    return n.max === n.min ? 0 : e / (n.max - n.min) * 100
}
const Xi = {
    correct: (e, n) => {
        if (!n.target)
            return e;
        if (typeof e == "string")
            if (Ce.test(e))
                e = parseFloat(e);
            else
                return e;
        const o = tv(e, n.target.x)
          , i = tv(e, n.target.y);
        return `${o}% ${i}%`
    }
}
  , PN = {
    correct: (e, {treeScale: n, projectionDelta: o}) => {
        const i = e
          , a = _r.parse(e);
        if (a.length > 5)
            return i;
        const u = _r.createTransformer(e)
          , c = typeof a[0] != "number" ? 1 : 0
          , d = o.x.scale * n.x
          , p = o.y.scale * n.y;
        a[0 + c] /= d,
        a[1 + c] /= p;
        const h = Je(d, p, .5);
        return typeof a[2 + c] == "number" && (a[2 + c] /= h),
        typeof a[3 + c] == "number" && (a[3 + c] /= h),
        u(a)
    }
};
let Wc = !1;
class kN extends w.Component {
    componentDidMount() {
        const {visualElement: n, layoutGroup: o, switchLayoutGroup: i, layoutId: a} = this.props
          , {projection: u} = n;
        XR(AN),
        u && (o.group && o.group.add(u),
        i && i.register && a && i.register(u),
        Wc && u.root.didUpdate(),
        u.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        u.setOptions({
            ...u.options,
            onExitComplete: () => this.safeToRemove()
        })),
        Xa.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(n) {
        const {layoutDependency: o, visualElement: i, drag: a, isPresent: u} = this.props
          , {projection: c} = i;
        return c && (c.isPresent = u,
        Wc = !0,
        a || n.layoutDependency !== o || o === void 0 || n.isPresent !== u ? c.willUpdate() : this.safeToRemove(),
        n.isPresent !== u && (u ? c.promote() : c.relegate() || Qe.postRender( () => {
            const d = c.getStack();
            (!d || !d.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: n} = this.props.visualElement;
        n && (n.root.didUpdate(),
        jf.postRender( () => {
            !n.currentAnimation && n.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: n, layoutGroup: o, switchLayoutGroup: i} = this.props
          , {projection: a} = n;
        Wc = !0,
        a && (a.scheduleCheckAfterUnmount(),
        o && o.group && o.group.remove(a),
        i && i.deregister && i.deregister(a))
    }
    safeToRemove() {
        const {safeToRemove: n} = this.props;
        n && n()
    }
    render() {
        return null
    }
}
function Zx(e) {
    const [n,o] = $R()
      , i = w.useContext(R0);
    return S.jsx(kN, {
        ...e,
        layoutGroup: i,
        switchLayoutGroup: w.useContext(Dx),
        isPresent: n,
        safeToRemove: o
    })
}
const AN = {
    borderRadius: {
        ...Xi,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Xi,
    borderTopRightRadius: Xi,
    borderBottomLeftRadius: Xi,
    borderBottomRightRadius: Xi,
    boxShadow: PN
};
function RN(e, n, o) {
    const i = Ct(e) ? e : Jo(e);
    return i.start(Hf("", i, n, o)),
    i.animation
}
const NN = (e, n) => e.depth - n.depth;
class DN {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(n) {
        hf(this.children, n),
        this.isDirty = !0
    }
    remove(n) {
        mf(this.children, n),
        this.isDirty = !0
    }
    forEach(n) {
        this.isDirty && this.children.sort(NN),
        this.isDirty = !1,
        this.children.forEach(n)
    }
}
function MN(e, n) {
    const o = zt.now()
      , i = ({timestamp: a}) => {
        const u = a - o;
        u >= n && (Or(i),
        e(u - n))
    }
    ;
    return Qe.setup(i, !0),
    () => Or(i)
}
const qx = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , jN = qx.length
  , nv = e => typeof e == "string" ? parseFloat(e) : e
  , rv = e => typeof e == "number" || Ce.test(e);
function ON(e, n, o, i, a, u) {
    a ? (e.opacity = Je(0, o.opacity ?? 1, _N(i)),
    e.opacityExit = Je(n.opacity ?? 1, 0, IN(i))) : u && (e.opacity = Je(n.opacity ?? 1, o.opacity ?? 1, i));
    for (let c = 0; c < jN; c++) {
        const d = `border${qx[c]}Radius`;
        let p = ov(n, d)
          , h = ov(o, d);
        if (p === void 0 && h === void 0)
            continue;
        p || (p = 0),
        h || (h = 0),
        p === 0 || h === 0 || rv(p) === rv(h) ? (e[d] = Math.max(Je(nv(p), nv(h), i), 0),
        (Vn.test(h) || Vn.test(p)) && (e[d] += "%")) : e[d] = h
    }
    (n.rotate || o.rotate) && (e.rotate = Je(n.rotate || 0, o.rotate || 0, i))
}
function ov(e, n) {
    return e[n] !== void 0 ? e[n] : e.borderRadius
}
const _N = Jx(0, .5, B0)
  , IN = Jx(.5, .95, on);
function Jx(e, n, o) {
    return i => i < e ? 0 : i > n ? 1 : o(is(e, n, i))
}
function iv(e, n) {
    e.min = n.min,
    e.max = n.max
}
function nn(e, n) {
    iv(e.x, n.x),
    iv(e.y, n.y)
}
function sv(e, n) {
    e.translate = n.translate,
    e.scale = n.scale,
    e.originPoint = n.originPoint,
    e.origin = n.origin
}
function av(e, n, o, i, a) {
    return e -= n,
    e = pl(e, 1 / o, i),
    a !== void 0 && (e = pl(e, 1 / a, i)),
    e
}
function LN(e, n=0, o=1, i=.5, a, u=e, c=e) {
    if (Vn.test(n) && (n = parseFloat(n),
    n = Je(c.min, c.max, n / 100) - c.min),
    typeof n != "number")
        return;
    let d = Je(u.min, u.max, i);
    e === u && (d -= n),
    e.min = av(e.min, n, o, d, a),
    e.max = av(e.max, n, o, d, a)
}
function lv(e, n, [o,i,a], u, c) {
    LN(e, n[o], n[i], n[a], n.scale, u, c)
}
const VN = ["x", "scaleX", "originX"]
  , FN = ["y", "scaleY", "originY"];
function uv(e, n, o, i) {
    lv(e.x, n, VN, o ? o.x : void 0, i ? i.x : void 0),
    lv(e.y, n, FN, o ? o.y : void 0, i ? i.y : void 0)
}
function cv(e) {
    return e.translate === 0 && e.scale === 1
}
function ew(e) {
    return cv(e.x) && cv(e.y)
}
function dv(e, n) {
    return e.min === n.min && e.max === n.max
}
function BN(e, n) {
    return dv(e.x, n.x) && dv(e.y, n.y)
}
function fv(e, n) {
    return Math.round(e.min) === Math.round(n.min) && Math.round(e.max) === Math.round(n.max)
}
function tw(e, n) {
    return fv(e.x, n.x) && fv(e.y, n.y)
}
function pv(e) {
    return Rt(e.x) / Rt(e.y)
}
function hv(e, n) {
    return e.translate === n.translate && e.scale === n.scale && e.originPoint === n.originPoint
}
class zN {
    constructor() {
        this.members = []
    }
    add(n) {
        hf(this.members, n),
        n.scheduleRender()
    }
    remove(n) {
        if (mf(this.members, n),
        n === this.prevLead && (this.prevLead = void 0),
        n === this.lead) {
            const o = this.members[this.members.length - 1];
            o && this.promote(o)
        }
    }
    relegate(n) {
        const o = this.members.findIndex(a => n === a);
        if (o === 0)
            return !1;
        let i;
        for (let a = o; a >= 0; a--) {
            const u = this.members[a];
            if (u.isPresent !== !1) {
                i = u;
                break
            }
        }
        return i ? (this.promote(i),
        !0) : !1
    }
    promote(n, o) {
        const i = this.lead;
        if (n !== i && (this.prevLead = i,
        this.lead = n,
        n.show(),
        i)) {
            i.instance && i.scheduleRender(),
            n.scheduleRender(),
            n.resumeFrom = i,
            o && (n.resumeFrom.preserveOpacity = !0),
            i.snapshot && (n.snapshot = i.snapshot,
            n.snapshot.latestValues = i.animationValues || i.latestValues),
            n.root && n.root.isUpdating && (n.isLayoutDirty = !0);
            const {crossfade: a} = n.options;
            a === !1 && i.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(n => {
            const {options: o, resumingFrom: i} = n;
            o.onExitComplete && o.onExitComplete(),
            i && i.options.onExitComplete && i.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(n => {
            n.instance && n.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function $N(e, n, o) {
    let i = "";
    const a = e.x.translate / n.x
      , u = e.y.translate / n.y
      , c = o?.z || 0;
    if ((a || u || c) && (i = `translate3d(${a}px, ${u}px, ${c}px) `),
    (n.x !== 1 || n.y !== 1) && (i += `scale(${1 / n.x}, ${1 / n.y}) `),
    o) {
        const {transformPerspective: h, rotate: g, rotateX: y, rotateY: x, skewX: v, skewY: T} = o;
        h && (i = `perspective(${h}px) ${i}`),
        g && (i += `rotate(${g}deg) `),
        y && (i += `rotateX(${y}deg) `),
        x && (i += `rotateY(${x}deg) `),
        v && (i += `skewX(${v}deg) `),
        T && (i += `skewY(${T}deg) `)
    }
    const d = e.x.scale * n.x
      , p = e.y.scale * n.y;
    return (d !== 1 || p !== 1) && (i += `scale(${d}, ${p})`),
    i || "none"
}
const Kc = ["", "X", "Y", "Z"]
  , HN = 1e3;
let UN = 0;
function Gc(e, n, o, i) {
    const {latestValues: a} = n;
    a[e] && (o[e] = a[e],
    n.setStaticValue(e, 0),
    i && (i[e] = 0))
}
function nw(e) {
    if (e.hasCheckedOptimisedAppear = !0,
    e.root === e)
        return;
    const {visualElement: n} = e.options;
    if (!n)
        return;
    const o = zx(n);
    if (window.MotionHasOptimisedAnimation(o, "transform")) {
        const {layout: a, layoutId: u} = e.options;
        window.MotionCancelOptimisedAnimation(o, "transform", Qe, !(a || u))
    }
    const {parent: i} = e;
    i && !i.hasCheckedOptimisedAppear && nw(i)
}
function rw({attachResizeListener: e, defaultParent: n, measureScroll: o, checkIsScrollRoot: i, resetTransform: a}) {
    return class {
        constructor(c={}, d=n?.()) {
            this.id = UN++,
            this.animationId = 0,
            this.animationCommitId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                this.nodes.forEach(GN),
                this.nodes.forEach(ZN),
                this.nodes.forEach(qN),
                this.nodes.forEach(YN)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = c,
            this.root = d ? d.root || d : this,
            this.path = d ? [...d.path, d] : [],
            this.parent = d,
            this.depth = d ? d.depth + 1 : 0;
            for (let p = 0; p < this.path.length; p++)
                this.path[p].shouldResetTransform = !0;
            this.root === this && (this.nodes = new DN)
        }
        addEventListener(c, d) {
            return this.eventHandlers.has(c) || this.eventHandlers.set(c, new yf),
            this.eventHandlers.get(c).add(d)
        }
        notifyListeners(c, ...d) {
            const p = this.eventHandlers.get(c);
            p && p.notify(...d)
        }
        hasListeners(c) {
            return this.eventHandlers.has(c)
        }
        mount(c) {
            if (this.instance)
                return;
            this.isSVG = yx(c) && !FR(c),
            this.instance = c;
            const {layoutId: d, layout: p, visualElement: h} = this.options;
            if (h && !h.current && h.mount(c),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (p || d) && (this.isLayoutDirty = !0),
            e) {
                let g, y = 0;
                const x = () => this.root.updateBlockedByResize = !1;
                Qe.read( () => {
                    y = window.innerWidth
                }
                ),
                e(c, () => {
                    const v = window.innerWidth;
                    v !== y && (y = v,
                    this.root.updateBlockedByResize = !0,
                    g && g(),
                    g = MN(x, 250),
                    Xa.hasAnimatedSinceResize && (Xa.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(vv)))
                }
                )
            }
            d && this.root.registerSharedNode(d, this),
            this.options.animate !== !1 && h && (d || p) && this.addEventListener("didUpdate", ({delta: g, hasLayoutChanged: y, hasRelativeLayoutChanged: x, layout: v}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const T = this.options.transition || h.getDefaultTransition() || rD
                  , {onLayoutAnimationStart: C, onLayoutAnimationComplete: E} = h.getProps()
                  , P = !this.targetLayout || !tw(this.targetLayout, v)
                  , A = !y && x;
                if (this.options.layoutRoot || this.resumeFrom || A || y && (P || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0);
                    const R = {
                        ...Df(T, "layout"),
                        onPlay: C,
                        onComplete: E
                    };
                    (h.shouldReduceMotion || this.options.layoutRoot) && (R.delay = 0,
                    R.type = !1),
                    this.startAnimation(R),
                    this.setAnimationOrigin(g, A)
                } else
                    y || vv(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = v
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const c = this.getStack();
            c && c.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            this.eventHandlers.clear(),
            Or(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(JN),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: c} = this.options;
            return c && c.getProps().transformTemplate
        }
        willUpdate(c=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && nw(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let g = 0; g < this.path.length; g++) {
                const y = this.path[g];
                y.shouldResetTransform = !0,
                y.updateScroll("snapshot"),
                y.options.layoutRoot && y.willUpdate(!1)
            }
            const {layoutId: d, layout: p} = this.options;
            if (d === void 0 && !p)
                return;
            const h = this.getTransformTemplate();
            this.prevTransformTemplateValue = h ? h(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            c && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(mv);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(gv);
                return
            }
            this.animationCommitId = this.animationId,
            this.isUpdating ? (this.isUpdating = !1,
            this.nodes.forEach(QN),
            this.nodes.forEach(WN),
            this.nodes.forEach(KN)) : this.nodes.forEach(gv),
            this.clearAllSnapshots();
            const d = zt.now();
            vt.delta = tr(0, 1e3 / 60, d - vt.timestamp),
            vt.timestamp = d,
            vt.isProcessing = !0,
            _c.update.process(vt),
            _c.preRender.process(vt),
            _c.render.process(vt),
            vt.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            jf.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(XN),
            this.sharedNodes.forEach(eD)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            Qe.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Qe.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(),
            this.snapshot && !Rt(this.snapshot.measuredBox.x) && !Rt(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let p = 0; p < this.path.length; p++)
                    this.path[p].updateScroll();
            const c = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = ot(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: d} = this.options;
            d && d.notify("LayoutMeasure", this.layout.layoutBox, c ? c.layoutBox : void 0)
        }
        updateScroll(c="measure") {
            let d = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === c && (d = !1),
            d && this.instance) {
                const p = i(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: c,
                    isRoot: p,
                    offset: o(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : p
                }
            }
        }
        resetTransform() {
            if (!a)
                return;
            const c = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , d = this.projectionDelta && !ew(this.projectionDelta)
              , p = this.getTransformTemplate()
              , h = p ? p(this.latestValues, "") : void 0
              , g = h !== this.prevTransformTemplateValue;
            c && this.instance && (d || eo(this.latestValues) || g) && (a(this.instance, h),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(c=!0) {
            const d = this.measurePageBox();
            let p = this.removeElementScroll(d);
            return c && (p = this.removeTransform(p)),
            oD(p),
            {
                animationId: this.root.animationId,
                measuredBox: d,
                layoutBox: p,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {visualElement: c} = this.options;
            if (!c)
                return ot();
            const d = c.measureViewportBox();
            if (!(this.scroll?.wasRoot || this.path.some(iD))) {
                const {scroll: h} = this.root;
                h && ($o(d.x, h.offset.x),
                $o(d.y, h.offset.y))
            }
            return d
        }
        removeElementScroll(c) {
            const d = ot();
            if (nn(d, c),
            this.scroll?.wasRoot)
                return d;
            for (let p = 0; p < this.path.length; p++) {
                const h = this.path[p]
                  , {scroll: g, options: y} = h;
                h !== this.root && g && y.layoutScroll && (g.wasRoot && nn(d, c),
                $o(d.x, g.offset.x),
                $o(d.y, g.offset.y))
            }
            return d
        }
        applyTransform(c, d=!1) {
            const p = ot();
            nn(p, c);
            for (let h = 0; h < this.path.length; h++) {
                const g = this.path[h];
                !d && g.options.layoutScroll && g.scroll && g !== g.root && Ho(p, {
                    x: -g.scroll.offset.x,
                    y: -g.scroll.offset.y
                }),
                eo(g.latestValues) && Ho(p, g.latestValues)
            }
            return eo(this.latestValues) && Ho(p, this.latestValues),
            p
        }
        removeTransform(c) {
            const d = ot();
            nn(d, c);
            for (let p = 0; p < this.path.length; p++) {
                const h = this.path[p];
                if (!h.instance || !eo(h.latestValues))
                    continue;
                Ad(h.latestValues) && h.updateSnapshot();
                const g = ot()
                  , y = h.measurePageBox();
                nn(g, y),
                uv(d, h.latestValues, h.snapshot ? h.snapshot.layoutBox : void 0, g)
            }
            return eo(this.latestValues) && uv(d, this.latestValues),
            d
        }
        setTargetDelta(c) {
            this.targetDelta = c,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(c) {
            this.options = {
                ...this.options,
                ...c,
                crossfade: c.crossfade !== void 0 ? c.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== vt.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(c=!1) {
            const d = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = d.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = d.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = d.isSharedProjectionDirty);
            const p = !!this.resumingFrom || this !== d;
            if (!(c || p && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: g, layoutId: y} = this.options;
            if (!(!this.layout || !(g || y))) {
                if (this.resolvedRelativeTargetAt = vt.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const x = this.getClosestProjectingParent();
                    x && x.layout && this.animationProgress !== 1 ? (this.relativeParent = x,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = ot(),
                    this.relativeTargetOrigin = ot(),
                    ns(this.relativeTargetOrigin, this.layout.layoutBox, x.layout.layoutBox),
                    nn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = ot(),
                this.targetWithTransforms = ot()),
                this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                dN(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : nn(this.target, this.layout.layoutBox),
                _x(this.target, this.targetDelta)) : nn(this.target, this.layout.layoutBox),
                this.attemptToResolveRelativeTarget)) {
                    this.attemptToResolveRelativeTarget = !1;
                    const x = this.getClosestProjectingParent();
                    x && !!x.resumingFrom == !!this.resumingFrom && !x.options.layoutScroll && x.target && this.animationProgress !== 1 ? (this.relativeParent = x,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = ot(),
                    this.relativeTargetOrigin = ot(),
                    ns(this.relativeTargetOrigin, this.target, x.target),
                    nn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Ad(this.parent.latestValues) || Ox(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            const c = this.getLead()
              , d = !!this.resumingFrom || this !== c;
            let p = !0;
            if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (p = !1),
            d && (this.isSharedProjectionDirty || this.isTransformDirty) && (p = !1),
            this.resolvedRelativeTargetAt === vt.timestamp && (p = !1),
            p)
                return;
            const {layout: h, layoutId: g} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(h || g))
                return;
            nn(this.layoutCorrected, this.layout.layoutBox);
            const y = this.treeScale.x
              , x = this.treeScale.y;
            C2(this.layoutCorrected, this.treeScale, this.path, d),
            c.layout && !c.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (c.target = c.layout.layoutBox,
            c.targetWithTransforms = ot());
            const {target: v} = c;
            if (!v) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (sv(this.prevProjectionDelta.x, this.projectionDelta.x),
            sv(this.prevProjectionDelta.y, this.projectionDelta.y)),
            ts(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
            (this.treeScale.x !== y || this.treeScale.y !== x || !hv(this.projectionDelta.x, this.prevProjectionDelta.x) || !hv(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", v))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(c=!0) {
            if (this.options.visualElement?.scheduleRender(),
            c) {
                const d = this.getStack();
                d && d.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Uo(),
            this.projectionDelta = Uo(),
            this.projectionDeltaWithTransform = Uo()
        }
        setAnimationOrigin(c, d=!1) {
            const p = this.snapshot
              , h = p ? p.latestValues : {}
              , g = {
                ...this.latestValues
            }
              , y = Uo();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !d;
            const x = ot()
              , v = p ? p.source : void 0
              , T = this.layout ? this.layout.source : void 0
              , C = v !== T
              , E = this.getStack()
              , P = !E || E.members.length <= 1
              , A = !!(C && !P && this.options.crossfade === !0 && !this.path.some(nD));
            this.animationProgress = 0;
            let R;
            this.mixTargetDelta = O => {
                const j = O / 1e3;
                yv(y.x, c.x, j),
                yv(y.y, c.y, j),
                this.setTargetDelta(y),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ns(x, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                tD(this.relativeTarget, this.relativeTargetOrigin, x, j),
                R && BN(this.relativeTarget, R) && (this.isProjectionDirty = !1),
                R || (R = ot()),
                nn(R, this.relativeTarget)),
                C && (this.animationValues = g,
                ON(g, h, this.latestValues, j, A, P)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = j
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(c) {
            this.notifyListeners("animationStart"),
            this.currentAnimation?.stop(),
            this.resumingFrom?.currentAnimation?.stop(),
            this.pendingAnimation && (Or(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = Qe.update( () => {
                Xa.hasAnimatedSinceResize = !0,
                this.motionValue || (this.motionValue = Jo(0)),
                this.currentAnimation = RN(this.motionValue, [0, 1e3], {
                    ...c,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: d => {
                        this.mixTargetDelta(d),
                        c.onUpdate && c.onUpdate(d)
                    }
                    ,
                    onStop: () => {}
                    ,
                    onComplete: () => {
                        c.onComplete && c.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const c = this.getStack();
            c && c.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(HN),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const c = this.getLead();
            let {targetWithTransforms: d, target: p, layout: h, latestValues: g} = c;
            if (!(!d || !p || !h)) {
                if (this !== c && this.layout && h && ow(this.options.animationType, this.layout.layoutBox, h.layoutBox)) {
                    p = this.target || ot();
                    const y = Rt(this.layout.layoutBox.x);
                    p.x.min = c.target.x.min,
                    p.x.max = p.x.min + y;
                    const x = Rt(this.layout.layoutBox.y);
                    p.y.min = c.target.y.min,
                    p.y.max = p.y.min + x
                }
                nn(d, p),
                Ho(d, g),
                ts(this.projectionDeltaWithTransform, this.layoutCorrected, d, g)
            }
        }
        registerSharedNode(c, d) {
            this.sharedNodes.has(c) || this.sharedNodes.set(c, new zN),
            this.sharedNodes.get(c).add(d);
            const h = d.options.initialPromotionConfig;
            d.promote({
                transition: h ? h.transition : void 0,
                preserveFollowOpacity: h && h.shouldPreserveFollowOpacity ? h.shouldPreserveFollowOpacity(d) : void 0
            })
        }
        isLead() {
            const c = this.getStack();
            return c ? c.lead === this : !0
        }
        getLead() {
            const {layoutId: c} = this.options;
            return c ? this.getStack()?.lead || this : this
        }
        getPrevLead() {
            const {layoutId: c} = this.options;
            return c ? this.getStack()?.prevLead : void 0
        }
        getStack() {
            const {layoutId: c} = this.options;
            if (c)
                return this.root.sharedNodes.get(c)
        }
        promote({needsReset: c, transition: d, preserveFollowOpacity: p}={}) {
            const h = this.getStack();
            h && h.promote(this, p),
            c && (this.projectionDelta = void 0,
            this.needsReset = !0),
            d && this.setOptions({
                transition: d
            })
        }
        relegate() {
            const c = this.getStack();
            return c ? c.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: c} = this.options;
            if (!c)
                return;
            let d = !1;
            const {latestValues: p} = c;
            if ((p.z || p.rotate || p.rotateX || p.rotateY || p.rotateZ || p.skewX || p.skewY) && (d = !0),
            !d)
                return;
            const h = {};
            p.z && Gc("z", c, h, this.animationValues);
            for (let g = 0; g < Kc.length; g++)
                Gc(`rotate${Kc[g]}`, c, h, this.animationValues),
                Gc(`skew${Kc[g]}`, c, h, this.animationValues);
            c.render();
            for (const g in h)
                c.setStaticValue(g, h[g]),
                this.animationValues && (this.animationValues[g] = h[g]);
            c.scheduleRender()
        }
        applyProjectionStyles(c, d) {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible) {
                c.visibility = "hidden";
                return
            }
            const p = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1,
                c.visibility = "",
                c.opacity = "",
                c.pointerEvents = Ya(d?.pointerEvents) || "",
                c.transform = p ? p(this.latestValues, "") : "none";
                return
            }
            const h = this.getLead();
            if (!this.projectionDelta || !this.layout || !h.target) {
                this.options.layoutId && (c.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                c.pointerEvents = Ya(d?.pointerEvents) || ""),
                this.hasProjected && !eo(this.latestValues) && (c.transform = p ? p({}, "") : "none",
                this.hasProjected = !1);
                return
            }
            c.visibility = "";
            const g = h.animationValues || h.latestValues;
            this.applyTransformsToTarget();
            let y = $N(this.projectionDeltaWithTransform, this.treeScale, g);
            p && (y = p(g, y)),
            c.transform = y;
            const {x, y: v} = this.projectionDelta;
            c.transformOrigin = `${x.origin * 100}% ${v.origin * 100}% 0`,
            h.animationValues ? c.opacity = h === this ? g.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : g.opacityExit : c.opacity = h === this ? g.opacity !== void 0 ? g.opacity : "" : g.opacityExit !== void 0 ? g.opacityExit : 0;
            for (const T in us) {
                if (g[T] === void 0)
                    continue;
                const {correct: C, applyTo: E, isCSSVariable: P} = us[T]
                  , A = y === "none" ? g[T] : C(g[T], h);
                if (E) {
                    const R = E.length;
                    for (let O = 0; O < R; O++)
                        c[E[O]] = A
                } else
                    P ? this.options.visualElement.renderState.vars[T] = A : c[T] = A
            }
            this.options.layoutId && (c.pointerEvents = h === this ? Ya(d?.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(c => c.currentAnimation?.stop()),
            this.root.nodes.forEach(mv),
            this.root.sharedNodes.clear()
        }
    }
}
function WN(e) {
    e.updateLayout()
}
function KN(e) {
    const n = e.resumeFrom?.snapshot || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {layoutBox: o, measuredBox: i} = e.layout
          , {animationType: a} = e.options
          , u = n.source !== e.layout.source;
        a === "size" ? rn(g => {
            const y = u ? n.measuredBox[g] : n.layoutBox[g]
              , x = Rt(y);
            y.min = o[g].min,
            y.max = y.min + x
        }
        ) : ow(a, n.layoutBox, o) && rn(g => {
            const y = u ? n.measuredBox[g] : n.layoutBox[g]
              , x = Rt(o[g]);
            y.max = y.min + x,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[g].max = e.relativeTarget[g].min + x)
        }
        );
        const c = Uo();
        ts(c, o, n.layoutBox);
        const d = Uo();
        u ? ts(d, e.applyTransform(i, !0), n.measuredBox) : ts(d, o, n.layoutBox);
        const p = !ew(c);
        let h = !1;
        if (!e.resumeFrom) {
            const g = e.getClosestProjectingParent();
            if (g && !g.resumeFrom) {
                const {snapshot: y, layout: x} = g;
                if (y && x) {
                    const v = ot();
                    ns(v, n.layoutBox, y.layoutBox);
                    const T = ot();
                    ns(T, o, x.layoutBox),
                    tw(v, T) || (h = !0),
                    g.options.layoutRoot && (e.relativeTarget = T,
                    e.relativeTargetOrigin = v,
                    e.relativeParent = g)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: o,
            snapshot: n,
            delta: d,
            layoutDelta: c,
            hasLayoutChanged: p,
            hasRelativeLayoutChanged: h
        })
    } else if (e.isLead()) {
        const {onExitComplete: o} = e.options;
        o && o()
    }
    e.options.transition = void 0
}
function GN(e) {
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function YN(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function XN(e) {
    e.clearSnapshot()
}
function mv(e) {
    e.clearMeasurements()
}
function gv(e) {
    e.isLayoutDirty = !1
}
function QN(e) {
    const {visualElement: n} = e.options;
    n && n.getProps().onBeforeLayoutMeasure && n.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function vv(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function ZN(e) {
    e.resolveTargetDelta()
}
function qN(e) {
    e.calcProjection()
}
function JN(e) {
    e.resetSkewAndRotation()
}
function eD(e) {
    e.removeLeadSnapshot()
}
function yv(e, n, o) {
    e.translate = Je(n.translate, 0, o),
    e.scale = Je(n.scale, 1, o),
    e.origin = n.origin,
    e.originPoint = n.originPoint
}
function xv(e, n, o, i) {
    e.min = Je(n.min, o.min, i),
    e.max = Je(n.max, o.max, i)
}
function tD(e, n, o, i) {
    xv(e.x, n.x, o.x, i),
    xv(e.y, n.y, o.y, i)
}
function nD(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const rD = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , wv = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
  , Sv = wv("applewebkit/") && !wv("chrome/") ? Math.round : on;
function bv(e) {
    e.min = Sv(e.min),
    e.max = Sv(e.max)
}
function oD(e) {
    bv(e.x),
    bv(e.y)
}
function ow(e, n, o) {
    return e === "position" || e === "preserve-aspect" && !cN(pv(n), pv(o), .2)
}
function iD(e) {
    return e !== e.root && e.scroll?.wasRoot
}
const sD = rw({
    attachResizeListener: (e, n) => cs(e, "resize", n),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , Yc = {
    current: void 0
}
  , iw = rw({
    measureScroll: e => ({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: () => {
        if (!Yc.current) {
            const e = new sD({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            Yc.current = e
        }
        return Yc.current
    }
    ,
    resetTransform: (e, n) => {
        e.style.transform = n !== void 0 ? n : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
})
  , aD = {
    pan: {
        Feature: TN
    },
    drag: {
        Feature: EN,
        ProjectionNode: iw,
        MeasureLayout: Zx
    }
};
function Cv(e, n, o) {
    const {props: i} = e;
    e.animationState && i.whileHover && e.animationState.setActive("whileHover", o === "Start");
    const a = "onHover" + o
      , u = i[a];
    u && Qe.postRender( () => u(n, vs(n)))
}
class lD extends Vr {
    mount() {
        const {current: n} = this.node;
        n && (this.unmount = OR(n, (o, i) => (Cv(this.node, i, "Start"),
        a => Cv(this.node, a, "End"))))
    }
    unmount() {}
}
class uD extends Vr {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let n = !1;
        try {
            n = this.node.current.matches(":focus-visible")
        } catch {
            n = !0
        }
        !n || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = hs(cs(this.node.current, "focus", () => this.onFocus()), cs(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function Ev(e, n, o) {
    const {props: i} = e;
    if (e.current instanceof HTMLButtonElement && e.current.disabled)
        return;
    e.animationState && i.whileTap && e.animationState.setActive("whileTap", o === "Start");
    const a = "onTap" + (o === "End" ? "" : o)
      , u = i[a];
    u && Qe.postRender( () => u(n, vs(n)))
}
class cD extends Vr {
    mount() {
        const {current: n} = this.node;
        n && (this.unmount = VR(n, (o, i) => (Ev(this.node, i, "Start"),
        (a, {success: u}) => Ev(this.node, a, u ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const _d = new WeakMap
  , Xc = new WeakMap
  , dD = e => {
    const n = _d.get(e.target);
    n && n(e)
}
  , fD = e => {
    e.forEach(dD)
}
;
function pD({root: e, ...n}) {
    const o = e || document;
    Xc.has(o) || Xc.set(o, {});
    const i = Xc.get(o)
      , a = JSON.stringify(n);
    return i[a] || (i[a] = new IntersectionObserver(fD,{
        root: e,
        ...n
    })),
    i[a]
}
function hD(e, n, o) {
    const i = pD(n);
    return _d.set(e, o),
    i.observe(e),
    () => {
        _d.delete(e),
        i.unobserve(e)
    }
}
const mD = {
    some: 0,
    all: 1
};
class gD extends Vr {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: n={}} = this.node.getProps()
          , {root: o, margin: i, amount: a="some", once: u} = n
          , c = {
            root: o ? o.current : void 0,
            rootMargin: i,
            threshold: typeof a == "number" ? a : mD[a]
        }
          , d = p => {
            const {isIntersecting: h} = p;
            if (this.isInView === h || (this.isInView = h,
            u && !h && this.hasEnteredView))
                return;
            h && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", h);
            const {onViewportEnter: g, onViewportLeave: y} = this.node.getProps()
              , x = h ? g : y;
            x && x(p)
        }
        ;
        return hD(this.node.current, c, d)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: n, prevProps: o} = this.node;
        ["amount", "margin", "root"].some(vD(n, o)) && this.startObserver()
    }
    unmount() {}
}
function vD({viewport: e={}}, {viewport: n={}}={}) {
    return o => e[o] !== n[o]
}
const yD = {
    inView: {
        Feature: gD
    },
    tap: {
        Feature: cD
    },
    focus: {
        Feature: uD
    },
    hover: {
        Feature: lD
    }
}
  , xD = {
    layout: {
        ProjectionNode: iw,
        MeasureLayout: Zx
    }
}
  , wD = {
    ...oN,
    ...yD,
    ...aD,
    ...xD
}
  , Id = w2(wD, j2)
  , SD = e => {
    const n = w.useRef(null)
      , o = w.useRef(null)
      , i = w.useRef()
      , a = e.particleCount || 700
      , u = 9
      , c = a * u
      , d = e.rangeY || 100
      , p = 50
      , h = 150
      , g = e.baseSpeed || 0
      , y = e.rangeSpeed || 1.5
      , x = e.baseRadius || 1
      , v = e.rangeRadius || 2
      , T = e.baseHue || 220
      , C = 100
      , E = 3
      , P = .00125
      , A = .00125
      , R = 5e-4
      , O = e.backgroundColor || "#000000";
    let j = 0;
    const $ = zk();
    let I = new Float32Array(c)
      , U = [0, 0];
    const oe = 2 * Math.PI
      , J = K => K * Math.random()
      , ne = K => K - J(2 * K)
      , Z = (K, F) => {
        let ee = .5 * F;
        return Math.abs((K + ee) % F - ee) / ee
    }
      , le = (K, F, ee) => (1 - ee) * K + ee * F
      , ue = () => {
        const K = n.current
          , F = o.current;
        if (K && F) {
            const ee = K.getContext("2d");
            ee && (z(K),
            ge(),
            Q(K, ee))
        }
    }
      , ge = () => {
        j = 0,
        I = new Float32Array(c);
        for (let K = 0; K < c; K += u)
            re(K)
    }
      , re = K => {
        const F = n.current;
        if (!F)
            return;
        let ee, he, ce, Te, Me, Fe, W, xe, be;
        ee = J(F.width),
        he = U[1] + ne(d),
        ce = 0,
        Te = 0,
        Me = 0,
        Fe = p + J(h),
        W = g + J(y),
        xe = x + J(v),
        be = T + J(C),
        I.set([ee, he, ce, Te, Me, Fe, W, xe, be], K)
    }
      , Q = (K, F) => {
        j++,
        F.clearRect(0, 0, K.width, K.height),
        F.fillStyle = O,
        F.fillRect(0, 0, K.width, K.height),
        V(F),
        se(K, F),
        ae(K, F),
        i.current = window.requestAnimationFrame( () => Q(K, F))
    }
      , V = K => {
        for (let F = 0; F < c; F += u)
            H(F, K)
    }
      , H = (K, F) => {
        const ee = n.current;
        if (!ee)
            return;
        let he = 1 + K, ce = 2 + K, Te = 3 + K, Me = 4 + K, Fe = 5 + K, W = 6 + K, xe = 7 + K, be = 8 + K, je, Oe, it, $e, ze, Et, yt, or, ir, lt, $t, $n;
        Oe = I[K],
        it = I[he],
        je = $(Oe * P, it * A, j * R) * E * oe,
        $e = le(I[ce], Math.cos(je), .5),
        ze = le(I[Te], Math.sin(je), .5),
        Et = I[Me],
        yt = I[Fe],
        or = I[W],
        ir = Oe + $e * or,
        lt = it + ze * or,
        $t = I[xe],
        $n = I[be],
        G(Oe, it, ir, lt, Et, yt, $t, $n, F),
        Et++,
        I[K] = ir,
        I[he] = lt,
        I[ce] = $e,
        I[Te] = ze,
        I[Me] = Et,
        (D(Oe, it, ee) || Et > yt) && re(K)
    }
      , G = (K, F, ee, he, ce, Te, Me, Fe, W) => {
        W.save(),
        W.lineCap = "round",
        W.lineWidth = Me,
        W.strokeStyle = `hsla(${Fe},100%,60%,${Z(ce, Te)})`,
        W.beginPath(),
        W.moveTo(K, F),
        W.lineTo(ee, he),
        W.stroke(),
        W.closePath(),
        W.restore()
    }
      , D = (K, F, ee) => K > ee.width || K < 0 || F > ee.height || F < 0
      , z = (K, F) => {
        const {innerWidth: ee, innerHeight: he} = window;
        K.width = ee,
        K.height = he,
        U[0] = .5 * K.width,
        U[1] = .5 * K.height
    }
      , se = (K, F) => {
        F.save(),
        F.filter = "blur(8px) brightness(200%)",
        F.globalCompositeOperation = "lighter",
        F.drawImage(K, 0, 0),
        F.restore(),
        F.save(),
        F.filter = "blur(4px) brightness(200%)",
        F.globalCompositeOperation = "lighter",
        F.drawImage(K, 0, 0),
        F.restore()
    }
      , ae = (K, F) => {
        F.save(),
        F.globalCompositeOperation = "lighter",
        F.drawImage(K, 0, 0),
        F.restore()
    }
      , pe = () => {
        const K = n.current
          , F = K?.getContext("2d");
        K && F && z(K)
    }
    ;
    return w.useEffect( () => (ue(),
    window.addEventListener("resize", pe),
    () => {
        window.removeEventListener("resize", pe),
        i.current && cancelAnimationFrame(i.current)
    }
    ), []),
    S.jsxs("div", {
        className: Re("relative h-full w-full", e.containerClassName),
        children: [S.jsx(Id.div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            ref: o,
            className: "absolute inset-0 z-0 flex h-full w-full items-center justify-center bg-transparent",
            children: S.jsx("canvas", {
                ref: n
            })
        }), S.jsx("div", {
            className: Re("relative z-10", e.className),
            children: e.children
        })]
    })
}
;
var bD = (e, n, o, i, a, u, c, d) => {
    let p = document.documentElement
      , h = ["light", "dark"];
    function g(v) {
        (Array.isArray(e) ? e : [e]).forEach(T => {
            let C = T === "class"
              , E = C && u ? a.map(P => u[P] || P) : a;
            C ? (p.classList.remove(...E),
            p.classList.add(u && u[v] ? u[v] : v)) : p.setAttribute(T, v)
        }
        ),
        y(v)
    }
    function y(v) {
        d && h.includes(v) && (p.style.colorScheme = v)
    }
    function x() {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }
    if (i)
        g(i);
    else
        try {
            let v = localStorage.getItem(n) || o
              , T = c && v === "system" ? x() : v;
            g(T)
        } catch {}
}
  , Tv = ["light", "dark"]
  , sw = "(prefers-color-scheme: dark)"
  , CD = typeof window > "u"
  , aw = w.createContext(void 0)
  , ED = e => w.useContext(aw) ? w.createElement(w.Fragment, null, e.children) : w.createElement(PD, {
    ...e
})
  , TD = ["light", "dark"]
  , PD = ({forcedTheme: e, disableTransitionOnChange: n=!1, enableSystem: o=!0, enableColorScheme: i=!0, storageKey: a="theme", themes: u=TD, defaultTheme: c=o ? "system" : "light", attribute: d="data-theme", value: p, children: h, nonce: g, scriptProps: y}) => {
    let[x,v] = w.useState( () => AD(a, c))
      , [T,C] = w.useState( () => x === "system" ? Qc() : x)
      , E = p ? Object.values(p) : u
      , P = w.useCallback(j => {
        let $ = j;
        if (!$)
            return;
        j === "system" && o && ($ = Qc());
        let I = p ? p[$] : $
          , U = n ? RD(g) : null
          , oe = document.documentElement
          , J = ne => {
            ne === "class" ? (oe.classList.remove(...E),
            I && oe.classList.add(I)) : ne.startsWith("data-") && (I ? oe.setAttribute(ne, I) : oe.removeAttribute(ne))
        }
        ;
        if (Array.isArray(d) ? d.forEach(J) : J(d),
        i) {
            let ne = Tv.includes(c) ? c : null
              , Z = Tv.includes($) ? $ : ne;
            oe.style.colorScheme = Z
        }
        U?.()
    }
    , [g])
      , A = w.useCallback(j => {
        let $ = typeof j == "function" ? j(x) : j;
        v($);
        try {
            localStorage.setItem(a, $)
        } catch {}
    }
    , [x])
      , R = w.useCallback(j => {
        let $ = Qc(j);
        C($),
        x === "system" && o && !e && P("system")
    }
    , [x, e]);
    w.useEffect( () => {
        let j = window.matchMedia(sw);
        return j.addListener(R),
        R(j),
        () => j.removeListener(R)
    }
    , [R]),
    w.useEffect( () => {
        let j = $ => {
            $.key === a && ($.newValue ? v($.newValue) : A(c))
        }
        ;
        return window.addEventListener("storage", j),
        () => window.removeEventListener("storage", j)
    }
    , [A]),
    w.useEffect( () => {
        P(e ?? x)
    }
    , [e, x]);
    let O = w.useMemo( () => ({
        theme: x,
        setTheme: A,
        forcedTheme: e,
        resolvedTheme: x === "system" ? T : x,
        themes: o ? [...u, "system"] : u,
        systemTheme: o ? T : void 0
    }), [x, A, e, T, o, u]);
    return w.createElement(aw.Provider, {
        value: O
    }, w.createElement(kD, {
        forcedTheme: e,
        storageKey: a,
        attribute: d,
        enableSystem: o,
        enableColorScheme: i,
        defaultTheme: c,
        value: p,
        themes: u,
        nonce: g,
        scriptProps: y
    }), h)
}
  , kD = w.memo( ({forcedTheme: e, storageKey: n, attribute: o, enableSystem: i, enableColorScheme: a, defaultTheme: u, value: c, themes: d, nonce: p, scriptProps: h}) => {
    let g = JSON.stringify([o, n, u, e, d, c, i, a]).slice(1, -1);
    return w.createElement("script", {
        ...h,
        suppressHydrationWarning: !0,
        nonce: typeof window > "u" ? p : "",
        dangerouslySetInnerHTML: {
            __html: `(${bD.toString()})(${g})`
        }
    })
}
)
  , AD = (e, n) => {
    if (CD)
        return;
    let o;
    try {
        o = localStorage.getItem(e) || void 0
    } catch {}
    return o || n
}
  , RD = e => {
    let n = document.createElement("style");
    return e && n.setAttribute("nonce", e),
    n.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),
    document.head.appendChild(n),
    () => {
        window.getComputedStyle(document.body),
        setTimeout( () => {
            document.head.removeChild(n)
        }
        , 1)
    }
}
  , Qc = e => (e || (e = window.matchMedia(sw)),
e.matches ? "dark" : "light");
function ND({children: e, ...n}) {
    return S.jsx(ED, {
        ...n,
        children: e
    })
}
const DD = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let MD = (e=21) => {
    let n = ""
      , o = crypto.getRandomValues(new Uint8Array(e |= 0));
    for (; e--; )
        n += DD[o[e] & 63];
    return n
}
;
function jD({onMove: e, isVisible: n}) {
    return n ? S.jsxs("div", {
        className: "absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/80 p-2 rounded-lg shadow-lg flex gap-2 border border-slate-700",
        children: [S.jsx(Yt, {
            variant: "outline",
            size: "icon",
            onClick: () => e("up"),
            children: S.jsx(BC, {
                className: "h-5 w-5"
            })
        }), S.jsx(Yt, {
            variant: "outline",
            size: "icon",
            onClick: () => e("down"),
            children: S.jsx(LC, {
                className: "h-5 w-5"
            })
        }), S.jsx(Yt, {
            variant: "outline",
            size: "icon",
            onClick: () => e("left"),
            children: S.jsx(VC, {
                className: "h-5 w-5"
            })
        }), S.jsx(Yt, {
            variant: "outline",
            size: "icon",
            onClick: () => e("right"),
            children: S.jsx(FC, {
                className: "h-5 w-5"
            })
        })]
    }) : null
}
var OD = "Label"
  , lw = w.forwardRef( (e, n) => S.jsx(Ne.label, {
    ...e,
    ref: n,
    onMouseDown: o => {
        o.target.closest("button, input, select, textarea") || (e.onMouseDown?.(o),
        !o.defaultPrevented && o.detail > 1 && o.preventDefault())
    }
}));
lw.displayName = OD;
var uw = lw;
const _D = Kd("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")
  , to = w.forwardRef( ({className: e, ...n}, o) => S.jsx(uw, {
    ref: o,
    className: Re(_D(), e),
    ...n
}));
to.displayName = uw.displayName;
var cw = ["PageUp", "PageDown"]
  , dw = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
  , fw = {
    "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
    "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
    "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
    "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}
  , ui = "Slider"
  , [Ld,ID,LD] = Xd(ui)
  , [pw,_j] = wn(ui, [LD])
  , [VD,Ol] = pw(ui)
  , hw = w.forwardRef( (e, n) => {
    const {name: o, min: i=0, max: a=100, step: u=1, orientation: c="horizontal", disabled: d=!1, minStepsBetweenThumbs: p=0, defaultValue: h=[i], value: g, onValueChange: y= () => {}
    , onValueCommit: x= () => {}
    , inverted: v=!1, form: T, ...C} = e
      , E = w.useRef(new Set)
      , P = w.useRef(0)
      , R = c === "horizontal" ? FD : BD
      , [O=[],j] = jr({
        prop: g,
        defaultProp: h,
        onChange: ne => {
            [...E.current][P.current]?.focus(),
            y(ne)
        }
    })
      , $ = w.useRef(O);
    function I(ne) {
        const Z = WD(O, ne);
        J(ne, Z)
    }
    function U(ne) {
        J(ne, P.current)
    }
    function oe() {
        const ne = $.current[P.current];
        O[P.current] !== ne && x(O)
    }
    function J(ne, Z, {commit: le}={
        commit: !1
    }) {
        const ue = XD(u)
          , ge = QD(Math.round((ne - i) / u) * u + i, ue)
          , re = rl(ge, [i, a]);
        j( (Q=[]) => {
            const V = HD(Q, re, Z);
            if (YD(V, p * u)) {
                P.current = V.indexOf(re);
                const H = String(V) !== String(Q);
                return H && le && x(V),
                H ? V : Q
            } else
                return Q
        }
        )
    }
    return S.jsx(VD, {
        scope: e.__scopeSlider,
        name: o,
        disabled: d,
        min: i,
        max: a,
        valueIndexToChangeRef: P,
        thumbs: E.current,
        values: O,
        orientation: c,
        form: T,
        children: S.jsx(Ld.Provider, {
            scope: e.__scopeSlider,
            children: S.jsx(Ld.Slot, {
                scope: e.__scopeSlider,
                children: S.jsx(R, {
                    "aria-disabled": d,
                    "data-disabled": d ? "" : void 0,
                    ...C,
                    ref: n,
                    onPointerDown: Ee(C.onPointerDown, () => {
                        d || ($.current = O)
                    }
                    ),
                    min: i,
                    max: a,
                    inverted: v,
                    onSlideStart: d ? void 0 : I,
                    onSlideMove: d ? void 0 : U,
                    onSlideEnd: d ? void 0 : oe,
                    onHomeKeyDown: () => !d && J(i, 0, {
                        commit: !0
                    }),
                    onEndKeyDown: () => !d && J(a, O.length - 1, {
                        commit: !0
                    }),
                    onStepKeyDown: ({event: ne, direction: Z}) => {
                        if (!d) {
                            const ge = cw.includes(ne.key) || ne.shiftKey && dw.includes(ne.key) ? 10 : 1
                              , re = P.current
                              , Q = O[re]
                              , V = u * ge * Z;
                            J(Q + V, re, {
                                commit: !0
                            })
                        }
                    }
                })
            })
        })
    })
}
);
hw.displayName = ui;
var [mw,gw] = pw(ui, {
    startEdge: "left",
    endEdge: "right",
    size: "width",
    direction: 1
})
  , FD = w.forwardRef( (e, n) => {
    const {min: o, max: i, dir: a, inverted: u, onSlideStart: c, onSlideMove: d, onSlideEnd: p, onStepKeyDown: h, ...g} = e
      , [y,x] = w.useState(null)
      , v = _e(n, R => x(R))
      , T = w.useRef(void 0)
      , C = ml(a)
      , E = C === "ltr"
      , P = E && !u || !E && u;
    function A(R) {
        const O = T.current || y.getBoundingClientRect()
          , j = [0, O.width]
          , I = Uf(j, P ? [o, i] : [i, o]);
        return T.current = O,
        I(R - O.left)
    }
    return S.jsx(mw, {
        scope: e.__scopeSlider,
        startEdge: P ? "left" : "right",
        endEdge: P ? "right" : "left",
        direction: P ? 1 : -1,
        size: "width",
        children: S.jsx(vw, {
            dir: C,
            "data-orientation": "horizontal",
            ...g,
            ref: v,
            style: {
                ...g.style,
                "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: R => {
                const O = A(R.clientX);
                c?.(O)
            }
            ,
            onSlideMove: R => {
                const O = A(R.clientX);
                d?.(O)
            }
            ,
            onSlideEnd: () => {
                T.current = void 0,
                p?.()
            }
            ,
            onStepKeyDown: R => {
                const j = fw[P ? "from-left" : "from-right"].includes(R.key);
                h?.({
                    event: R,
                    direction: j ? -1 : 1
                })
            }
        })
    })
}
)
  , BD = w.forwardRef( (e, n) => {
    const {min: o, max: i, inverted: a, onSlideStart: u, onSlideMove: c, onSlideEnd: d, onStepKeyDown: p, ...h} = e
      , g = w.useRef(null)
      , y = _e(n, g)
      , x = w.useRef(void 0)
      , v = !a;
    function T(C) {
        const E = x.current || g.current.getBoundingClientRect()
          , P = [0, E.height]
          , R = Uf(P, v ? [i, o] : [o, i]);
        return x.current = E,
        R(C - E.top)
    }
    return S.jsx(mw, {
        scope: e.__scopeSlider,
        startEdge: v ? "bottom" : "top",
        endEdge: v ? "top" : "bottom",
        size: "height",
        direction: v ? 1 : -1,
        children: S.jsx(vw, {
            "data-orientation": "vertical",
            ...h,
            ref: y,
            style: {
                ...h.style,
                "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: C => {
                const E = T(C.clientY);
                u?.(E)
            }
            ,
            onSlideMove: C => {
                const E = T(C.clientY);
                c?.(E)
            }
            ,
            onSlideEnd: () => {
                x.current = void 0,
                d?.()
            }
            ,
            onStepKeyDown: C => {
                const P = fw[v ? "from-bottom" : "from-top"].includes(C.key);
                p?.({
                    event: C,
                    direction: P ? -1 : 1
                })
            }
        })
    })
}
)
  , vw = w.forwardRef( (e, n) => {
    const {__scopeSlider: o, onSlideStart: i, onSlideMove: a, onSlideEnd: u, onHomeKeyDown: c, onEndKeyDown: d, onStepKeyDown: p, ...h} = e
      , g = Ol(ui, o);
    return S.jsx(Ne.span, {
        ...h,
        ref: n,
        onKeyDown: Ee(e.onKeyDown, y => {
            y.key === "Home" ? (c(y),
            y.preventDefault()) : y.key === "End" ? (d(y),
            y.preventDefault()) : cw.concat(dw).includes(y.key) && (p(y),
            y.preventDefault())
        }
        ),
        onPointerDown: Ee(e.onPointerDown, y => {
            const x = y.target;
            x.setPointerCapture(y.pointerId),
            y.preventDefault(),
            g.thumbs.has(x) ? x.focus() : i(y)
        }
        ),
        onPointerMove: Ee(e.onPointerMove, y => {
            y.target.hasPointerCapture(y.pointerId) && a(y)
        }
        ),
        onPointerUp: Ee(e.onPointerUp, y => {
            const x = y.target;
            x.hasPointerCapture(y.pointerId) && (x.releasePointerCapture(y.pointerId),
            u(y))
        }
        )
    })
}
)
  , yw = "SliderTrack"
  , xw = w.forwardRef( (e, n) => {
    const {__scopeSlider: o, ...i} = e
      , a = Ol(yw, o);
    return S.jsx(Ne.span, {
        "data-disabled": a.disabled ? "" : void 0,
        "data-orientation": a.orientation,
        ...i,
        ref: n
    })
}
);
xw.displayName = yw;
var Vd = "SliderRange"
  , ww = w.forwardRef( (e, n) => {
    const {__scopeSlider: o, ...i} = e
      , a = Ol(Vd, o)
      , u = gw(Vd, o)
      , c = w.useRef(null)
      , d = _e(n, c)
      , p = a.values.length
      , h = a.values.map(x => bw(x, a.min, a.max))
      , g = p > 1 ? Math.min(...h) : 0
      , y = 100 - Math.max(...h);
    return S.jsx(Ne.span, {
        "data-orientation": a.orientation,
        "data-disabled": a.disabled ? "" : void 0,
        ...i,
        ref: d,
        style: {
            ...e.style,
            [u.startEdge]: g + "%",
            [u.endEdge]: y + "%"
        }
    })
}
);
ww.displayName = Vd;
var Fd = "SliderThumb"
  , Sw = w.forwardRef( (e, n) => {
    const o = ID(e.__scopeSlider)
      , [i,a] = w.useState(null)
      , u = _e(n, d => a(d))
      , c = w.useMemo( () => i ? o().findIndex(d => d.ref.current === i) : -1, [o, i]);
    return S.jsx(zD, {
        ...e,
        ref: u,
        index: c
    })
}
)
  , zD = w.forwardRef( (e, n) => {
    const {__scopeSlider: o, index: i, name: a, ...u} = e
      , c = Ol(Fd, o)
      , d = gw(Fd, o)
      , [p,h] = w.useState(null)
      , g = _e(n, A => h(A))
      , y = p ? c.form || !!p.closest("form") : !0
      , x = wl(p)
      , v = c.values[i]
      , T = v === void 0 ? 0 : bw(v, c.min, c.max)
      , C = UD(i, c.values.length)
      , E = x?.[d.size]
      , P = E ? KD(E, T, d.direction) : 0;
    return w.useEffect( () => {
        if (p)
            return c.thumbs.add(p),
            () => {
                c.thumbs.delete(p)
            }
    }
    , [p, c.thumbs]),
    S.jsxs("span", {
        style: {
            transform: "var(--radix-slider-thumb-transform)",
            position: "absolute",
            [d.startEdge]: `calc(${T}% + ${P}px)`
        },
        children: [S.jsx(Ld.ItemSlot, {
            scope: e.__scopeSlider,
            children: S.jsx(Ne.span, {
                role: "slider",
                "aria-label": e["aria-label"] || C,
                "aria-valuemin": c.min,
                "aria-valuenow": v,
                "aria-valuemax": c.max,
                "aria-orientation": c.orientation,
                "data-orientation": c.orientation,
                "data-disabled": c.disabled ? "" : void 0,
                tabIndex: c.disabled ? void 0 : 0,
                ...u,
                ref: g,
                style: v === void 0 ? {
                    display: "none"
                } : e.style,
                onFocus: Ee(e.onFocus, () => {
                    c.valueIndexToChangeRef.current = i
                }
                )
            })
        }), y && S.jsx($D, {
            name: a ?? (c.name ? c.name + (c.values.length > 1 ? "[]" : "") : void 0),
            form: c.form,
            value: v
        }, i)]
    })
}
);
Sw.displayName = Fd;
var $D = e => {
    const {value: n, ...o} = e
      , i = w.useRef(null)
      , a = bl(n);
    return w.useEffect( () => {
        const u = i.current
          , c = window.HTMLInputElement.prototype
          , p = Object.getOwnPropertyDescriptor(c, "value").set;
        if (a !== n && p) {
            const h = new Event("input",{
                bubbles: !0
            });
            p.call(u, n),
            u.dispatchEvent(h)
        }
    }
    , [a, n]),
    S.jsx("input", {
        style: {
            display: "none"
        },
        ...o,
        ref: i,
        defaultValue: n
    })
}
;
function HD(e=[], n, o) {
    const i = [...e];
    return i[o] = n,
    i.sort( (a, u) => a - u)
}
function bw(e, n, o) {
    const u = 100 / (o - n) * (e - n);
    return rl(u, [0, 100])
}
function UD(e, n) {
    return n > 2 ? `Value ${e + 1} of ${n}` : n === 2 ? ["Minimum", "Maximum"][e] : void 0
}
function WD(e, n) {
    if (e.length === 1)
        return 0;
    const o = e.map(a => Math.abs(a - n))
      , i = Math.min(...o);
    return o.indexOf(i)
}
function KD(e, n, o) {
    const i = e / 2
      , u = Uf([0, 50], [0, i]);
    return (i - u(n) * o) * o
}
function GD(e) {
    return e.slice(0, -1).map( (n, o) => e[o + 1] - n)
}
function YD(e, n) {
    if (n > 0) {
        const o = GD(e);
        return Math.min(...o) >= n
    }
    return !0
}
function Uf(e, n) {
    return o => {
        if (e[0] === e[1] || n[0] === n[1])
            return n[0];
        const i = (n[1] - n[0]) / (e[1] - e[0]);
        return n[0] + i * (o - e[0])
    }
}
function XD(e) {
    return (String(e).split(".")[1] || "").length
}
function QD(e, n) {
    const o = Math.pow(10, n);
    return Math.round(e * o) / o
}
var Cw = hw
  , ZD = xw
  , qD = ww
  , JD = Sw;
const Ew = w.forwardRef( ({className: e, ...n}, o) => S.jsxs(Cw, {
    ref: o,
    className: Re("relative flex w-full touch-none select-none items-center", e),
    ...n,
    children: [S.jsx(ZD, {
        className: "relative h-2.5 w-full grow overflow-hidden rounded-full bg-secondary",
        children: S.jsx(qD, {
            className: "absolute h-full bg-primary"
        })
    }), S.jsx(JD, {
        className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    })]
}));
Ew.displayName = Cw.displayName;
var Wf = "Switch"
  , [eM,Ij] = wn(Wf)
  , [tM,nM] = eM(Wf)
  , Tw = w.forwardRef( (e, n) => {
    const {__scopeSwitch: o, name: i, checked: a, defaultChecked: u, required: c, disabled: d, value: p="on", onCheckedChange: h, form: g, ...y} = e
      , [x,v] = w.useState(null)
      , T = _e(n, R => v(R))
      , C = w.useRef(!1)
      , E = x ? g || !!x.closest("form") : !0
      , [P=!1,A] = jr({
        prop: a,
        defaultProp: u,
        onChange: h
    });
    return S.jsxs(tM, {
        scope: o,
        checked: P,
        disabled: d,
        children: [S.jsx(Ne.button, {
            type: "button",
            role: "switch",
            "aria-checked": P,
            "aria-required": c,
            "data-state": Aw(P),
            "data-disabled": d ? "" : void 0,
            disabled: d,
            value: p,
            ...y,
            ref: T,
            onClick: Ee(e.onClick, R => {
                A(O => !O),
                E && (C.current = R.isPropagationStopped(),
                C.current || R.stopPropagation())
            }
            )
        }), E && S.jsx(rM, {
            control: x,
            bubbles: !C.current,
            name: i,
            value: p,
            checked: P,
            required: c,
            disabled: d,
            form: g,
            style: {
                transform: "translateX(-100%)"
            }
        })]
    })
}
);
Tw.displayName = Wf;
var Pw = "SwitchThumb"
  , kw = w.forwardRef( (e, n) => {
    const {__scopeSwitch: o, ...i} = e
      , a = nM(Pw, o);
    return S.jsx(Ne.span, {
        "data-state": Aw(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...i,
        ref: n
    })
}
);
kw.displayName = Pw;
var rM = e => {
    const {control: n, checked: o, bubbles: i=!0, ...a} = e
      , u = w.useRef(null)
      , c = bl(o)
      , d = wl(n);
    return w.useEffect( () => {
        const p = u.current
          , h = window.HTMLInputElement.prototype
          , y = Object.getOwnPropertyDescriptor(h, "checked").set;
        if (c !== o && y) {
            const x = new Event("click",{
                bubbles: i
            });
            y.call(p, o),
            p.dispatchEvent(x)
        }
    }
    , [c, o, i]),
    S.jsx("input", {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: o,
        ...a,
        tabIndex: -1,
        ref: u,
        style: {
            ...e.style,
            ...d,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
        }
    })
}
;
function Aw(e) {
    return e ? "checked" : "unchecked"
}
var Rw = Tw
  , oM = kw;
const Qa = w.forwardRef( ({className: e, ...n}, o) => S.jsx(Rw, {
    className: Re("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", e),
    ...n,
    ref: o,
    children: S.jsx(oM, {
        className: Re("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")
    })
}));
Qa.displayName = Rw.displayName;
var Zc = "rovingFocusGroup.onEntryFocus"
  , iM = {
    bubbles: !1,
    cancelable: !0
}
  , _l = "RovingFocusGroup"
  , [Bd,Nw,sM] = Xd(_l)
  , [aM,Dw] = wn(_l, [sM])
  , [lM,uM] = aM(_l)
  , Mw = w.forwardRef( (e, n) => S.jsx(Bd.Provider, {
    scope: e.__scopeRovingFocusGroup,
    children: S.jsx(Bd.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: S.jsx(cM, {
            ...e,
            ref: n
        })
    })
}));
Mw.displayName = _l;
var cM = w.forwardRef( (e, n) => {
    const {__scopeRovingFocusGroup: o, orientation: i, loop: a=!1, dir: u, currentTabStopId: c, defaultCurrentTabStopId: d, onCurrentTabStopIdChange: p, onEntryFocus: h, preventScrollOnEntryFocus: g=!1, ...y} = e
      , x = w.useRef(null)
      , v = _e(n, x)
      , T = ml(u)
      , [C=null,E] = jr({
        prop: c,
        defaultProp: d,
        onChange: p
    })
      , [P,A] = w.useState(!1)
      , R = Fn(h)
      , O = Nw(o)
      , j = w.useRef(!1)
      , [$,I] = w.useState(0);
    return w.useEffect( () => {
        const U = x.current;
        if (U)
            return U.addEventListener(Zc, R),
            () => U.removeEventListener(Zc, R)
    }
    , [R]),
    S.jsx(lM, {
        scope: o,
        orientation: i,
        dir: T,
        loop: a,
        currentTabStopId: C,
        onItemFocus: w.useCallback(U => E(U), [E]),
        onItemShiftTab: w.useCallback( () => A(!0), []),
        onFocusableItemAdd: w.useCallback( () => I(U => U + 1), []),
        onFocusableItemRemove: w.useCallback( () => I(U => U - 1), []),
        children: S.jsx(Ne.div, {
            tabIndex: P || $ === 0 ? -1 : 0,
            "data-orientation": i,
            ...y,
            ref: v,
            style: {
                outline: "none",
                ...e.style
            },
            onMouseDown: Ee(e.onMouseDown, () => {
                j.current = !0
            }
            ),
            onFocus: Ee(e.onFocus, U => {
                const oe = !j.current;
                if (U.target === U.currentTarget && oe && !P) {
                    const J = new CustomEvent(Zc,iM);
                    if (U.currentTarget.dispatchEvent(J),
                    !J.defaultPrevented) {
                        const ne = O().filter(re => re.focusable)
                          , Z = ne.find(re => re.active)
                          , le = ne.find(re => re.id === C)
                          , ge = [Z, le, ...ne].filter(Boolean).map(re => re.ref.current);
                        _w(ge, g)
                    }
                }
                j.current = !1
            }
            ),
            onBlur: Ee(e.onBlur, () => A(!1))
        })
    })
}
)
  , jw = "RovingFocusGroupItem"
  , Ow = w.forwardRef( (e, n) => {
    const {__scopeRovingFocusGroup: o, focusable: i=!0, active: a=!1, tabStopId: u, ...c} = e
      , d = Nr()
      , p = u || d
      , h = uM(jw, o)
      , g = h.currentTabStopId === p
      , y = Nw(o)
      , {onFocusableItemAdd: x, onFocusableItemRemove: v} = h;
    return w.useEffect( () => {
        if (i)
            return x(),
            () => v()
    }
    , [i, x, v]),
    S.jsx(Bd.ItemSlot, {
        scope: o,
        id: p,
        focusable: i,
        active: a,
        children: S.jsx(Ne.span, {
            tabIndex: g ? 0 : -1,
            "data-orientation": h.orientation,
            ...c,
            ref: n,
            onMouseDown: Ee(e.onMouseDown, T => {
                i ? h.onItemFocus(p) : T.preventDefault()
            }
            ),
            onFocus: Ee(e.onFocus, () => h.onItemFocus(p)),
            onKeyDown: Ee(e.onKeyDown, T => {
                if (T.key === "Tab" && T.shiftKey) {
                    h.onItemShiftTab();
                    return
                }
                if (T.target !== T.currentTarget)
                    return;
                const C = pM(T, h.orientation, h.dir);
                if (C !== void 0) {
                    if (T.metaKey || T.ctrlKey || T.altKey || T.shiftKey)
                        return;
                    T.preventDefault();
                    let P = y().filter(A => A.focusable).map(A => A.ref.current);
                    if (C === "last")
                        P.reverse();
                    else if (C === "prev" || C === "next") {
                        C === "prev" && P.reverse();
                        const A = P.indexOf(T.currentTarget);
                        P = h.loop ? hM(P, A + 1) : P.slice(A + 1)
                    }
                    setTimeout( () => _w(P))
                }
            }
            )
        })
    })
}
);
Ow.displayName = jw;
var dM = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
};
function fM(e, n) {
    return n !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e
}
function pM(e, n, o) {
    const i = fM(e.key, o);
    if (!(n === "vertical" && ["ArrowLeft", "ArrowRight"].includes(i)) && !(n === "horizontal" && ["ArrowUp", "ArrowDown"].includes(i)))
        return dM[i]
}
function _w(e, n=!1) {
    const o = document.activeElement;
    for (const i of e)
        if (i === o || (i.focus({
            preventScroll: n
        }),
        document.activeElement !== o))
            return
}
function hM(e, n) {
    return e.map( (o, i) => e[(n + i) % e.length])
}
var mM = Mw
  , gM = Ow
  , Kf = "Radio"
  , [vM,Iw] = wn(Kf)
  , [yM,xM] = vM(Kf)
  , Lw = w.forwardRef( (e, n) => {
    const {__scopeRadio: o, name: i, checked: a=!1, required: u, disabled: c, value: d="on", onCheck: p, form: h, ...g} = e
      , [y,x] = w.useState(null)
      , v = _e(n, E => x(E))
      , T = w.useRef(!1)
      , C = y ? h || !!y.closest("form") : !0;
    return S.jsxs(yM, {
        scope: o,
        checked: a,
        disabled: c,
        children: [S.jsx(Ne.button, {
            type: "button",
            role: "radio",
            "aria-checked": a,
            "data-state": Bw(a),
            "data-disabled": c ? "" : void 0,
            disabled: c,
            value: d,
            ...g,
            ref: v,
            onClick: Ee(e.onClick, E => {
                a || p?.(),
                C && (T.current = E.isPropagationStopped(),
                T.current || E.stopPropagation())
            }
            )
        }), C && S.jsx(wM, {
            control: y,
            bubbles: !T.current,
            name: i,
            value: d,
            checked: a,
            required: u,
            disabled: c,
            form: h,
            style: {
                transform: "translateX(-100%)"
            }
        })]
    })
}
);
Lw.displayName = Kf;
var Vw = "RadioIndicator"
  , Fw = w.forwardRef( (e, n) => {
    const {__scopeRadio: o, forceMount: i, ...a} = e
      , u = xM(Vw, o);
    return S.jsx(ii, {
        present: i || u.checked,
        children: S.jsx(Ne.span, {
            "data-state": Bw(u.checked),
            "data-disabled": u.disabled ? "" : void 0,
            ...a,
            ref: n
        })
    })
}
);
Fw.displayName = Vw;
var wM = e => {
    const {control: n, checked: o, bubbles: i=!0, ...a} = e
      , u = w.useRef(null)
      , c = bl(o)
      , d = wl(n);
    return w.useEffect( () => {
        const p = u.current
          , h = window.HTMLInputElement.prototype
          , y = Object.getOwnPropertyDescriptor(h, "checked").set;
        if (c !== o && y) {
            const x = new Event("click",{
                bubbles: i
            });
            y.call(p, o),
            p.dispatchEvent(x)
        }
    }
    , [c, o, i]),
    S.jsx("input", {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: o,
        ...a,
        tabIndex: -1,
        ref: u,
        style: {
            ...e.style,
            ...d,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
        }
    })
}
;
function Bw(e) {
    return e ? "checked" : "unchecked"
}
var SM = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
  , Gf = "RadioGroup"
  , [bM,Lj] = wn(Gf, [Dw, Iw])
  , zw = Dw()
  , $w = Iw()
  , [CM,EM] = bM(Gf)
  , Hw = w.forwardRef( (e, n) => {
    const {__scopeRadioGroup: o, name: i, defaultValue: a, value: u, required: c=!1, disabled: d=!1, orientation: p, dir: h, loop: g=!0, onValueChange: y, ...x} = e
      , v = zw(o)
      , T = ml(h)
      , [C,E] = jr({
        prop: u,
        defaultProp: a,
        onChange: y
    });
    return S.jsx(CM, {
        scope: o,
        name: i,
        required: c,
        disabled: d,
        value: C,
        onValueChange: E,
        children: S.jsx(mM, {
            asChild: !0,
            ...v,
            orientation: p,
            dir: T,
            loop: g,
            children: S.jsx(Ne.div, {
                role: "radiogroup",
                "aria-required": c,
                "aria-orientation": p,
                "data-disabled": d ? "" : void 0,
                dir: T,
                ...x,
                ref: n
            })
        })
    })
}
);
Hw.displayName = Gf;
var Uw = "RadioGroupItem"
  , Ww = w.forwardRef( (e, n) => {
    const {__scopeRadioGroup: o, disabled: i, ...a} = e
      , u = EM(Uw, o)
      , c = u.disabled || i
      , d = zw(o)
      , p = $w(o)
      , h = w.useRef(null)
      , g = _e(n, h)
      , y = u.value === a.value
      , x = w.useRef(!1);
    return w.useEffect( () => {
        const v = C => {
            SM.includes(C.key) && (x.current = !0)
        }
          , T = () => x.current = !1;
        return document.addEventListener("keydown", v),
        document.addEventListener("keyup", T),
        () => {
            document.removeEventListener("keydown", v),
            document.removeEventListener("keyup", T)
        }
    }
    , []),
    S.jsx(gM, {
        asChild: !0,
        ...d,
        focusable: !c,
        active: y,
        children: S.jsx(Lw, {
            disabled: c,
            required: u.required,
            checked: y,
            ...p,
            ...a,
            name: u.name,
            ref: g,
            onCheck: () => u.onValueChange(a.value),
            onKeyDown: Ee(v => {
                v.key === "Enter" && v.preventDefault()
            }
            ),
            onFocus: Ee(a.onFocus, () => {
                x.current && h.current?.click()
            }
            )
        })
    })
}
);
Ww.displayName = Uw;
var TM = "RadioGroupIndicator"
  , Kw = w.forwardRef( (e, n) => {
    const {__scopeRadioGroup: o, ...i} = e
      , a = $w(o);
    return S.jsx(Fw, {
        ...a,
        ...i,
        ref: n
    })
}
);
Kw.displayName = TM;
var Gw = Hw
  , Yw = Ww
  , PM = Kw;
const Xw = w.forwardRef( ({className: e, ...n}, o) => S.jsx(Gw, {
    className: Re("grid gap-2", e),
    ...n,
    ref: o
}));
Xw.displayName = Gw.displayName;
const Za = w.forwardRef( ({className: e, ...n}, o) => S.jsx(Yw, {
    ref: o,
    className: Re("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", e),
    ...n,
    children: S.jsx(PM, {
        className: "flex items-center justify-center",
        children: S.jsx(UC, {
            className: "h-2.5 w-2.5 fill-current text-current"
        })
    })
}));
Za.displayName = Yw.displayName;
var kM = e => {
    switch (e) {
    case "success":
        return NM;
    case "info":
        return MM;
    case "warning":
        return DM;
    case "error":
        return jM;
    default:
        return null
    }
}
  , AM = Array(12).fill(0)
  , RM = ({visible: e, className: n}) => ie.createElement("div", {
    className: ["sonner-loading-wrapper", n].filter(Boolean).join(" "),
    "data-visible": e
}, ie.createElement("div", {
    className: "sonner-spinner"
}, AM.map( (o, i) => ie.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${i}`
}))))
  , NM = ie.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, ie.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , DM = ie.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, ie.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , MM = ie.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, ie.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , jM = ie.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, ie.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , OM = ie.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, ie.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), ie.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , _M = () => {
    let[e,n] = ie.useState(document.hidden);
    return ie.useEffect( () => {
        let o = () => {
            n(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", o),
        () => window.removeEventListener("visibilitychange", o)
    }
    , []),
    e
}
  , zd = 1
  , IM = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let n = this.subscribers.indexOf(e);
            this.subscribers.splice(n, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(n => n(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var n;
            let {message: o, ...i} = e
              , a = typeof e?.id == "number" || ((n = e.id) == null ? void 0 : n.length) > 0 ? e.id : zd++
              , u = this.toasts.find(d => d.id === a)
              , c = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(a) && this.dismissedToasts.delete(a),
            u ? this.toasts = this.toasts.map(d => d.id === a ? (this.publish({
                ...d,
                ...e,
                id: a,
                title: o
            }),
            {
                ...d,
                ...e,
                id: a,
                dismissible: c,
                title: o
            }) : d) : this.addToast({
                title: o,
                ...i,
                dismissible: c,
                id: a
            }),
            a
        }
        ,
        this.dismiss = e => (this.dismissedToasts.add(e),
        e || this.toasts.forEach(n => {
            this.subscribers.forEach(o => o({
                id: n.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(n => n({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, n) => this.create({
            ...n,
            message: e
        }),
        this.error = (e, n) => this.create({
            ...n,
            message: e,
            type: "error"
        }),
        this.success = (e, n) => this.create({
            ...n,
            type: "success",
            message: e
        }),
        this.info = (e, n) => this.create({
            ...n,
            type: "info",
            message: e
        }),
        this.warning = (e, n) => this.create({
            ...n,
            type: "warning",
            message: e
        }),
        this.loading = (e, n) => this.create({
            ...n,
            type: "loading",
            message: e
        }),
        this.promise = (e, n) => {
            if (!n)
                return;
            let o;
            n.loading !== void 0 && (o = this.create({
                ...n,
                promise: e,
                type: "loading",
                message: n.loading,
                description: typeof n.description != "function" ? n.description : void 0
            }));
            let i = e instanceof Promise ? e : e(), a = o !== void 0, u, c = i.then(async p => {
                if (u = ["resolve", p],
                ie.isValidElement(p))
                    a = !1,
                    this.create({
                        id: o,
                        type: "default",
                        message: p
                    });
                else if (VM(p) && !p.ok) {
                    a = !1;
                    let h = typeof n.error == "function" ? await n.error(`HTTP error! status: ${p.status}`) : n.error
                      , g = typeof n.description == "function" ? await n.description(`HTTP error! status: ${p.status}`) : n.description;
                    this.create({
                        id: o,
                        type: "error",
                        message: h,
                        description: g
                    })
                } else if (n.success !== void 0) {
                    a = !1;
                    let h = typeof n.success == "function" ? await n.success(p) : n.success
                      , g = typeof n.description == "function" ? await n.description(p) : n.description;
                    this.create({
                        id: o,
                        type: "success",
                        message: h,
                        description: g
                    })
                }
            }
            ).catch(async p => {
                if (u = ["reject", p],
                n.error !== void 0) {
                    a = !1;
                    let h = typeof n.error == "function" ? await n.error(p) : n.error
                      , g = typeof n.description == "function" ? await n.description(p) : n.description;
                    this.create({
                        id: o,
                        type: "error",
                        message: h,
                        description: g
                    })
                }
            }
            ).finally( () => {
                var p;
                a && (this.dismiss(o),
                o = void 0),
                (p = n.finally) == null || p.call(n)
            }
            ), d = () => new Promise( (p, h) => c.then( () => u[0] === "reject" ? h(u[1]) : p(u[1])).catch(h));
            return typeof o != "string" && typeof o != "number" ? {
                unwrap: d
            } : Object.assign(o, {
                unwrap: d
            })
        }
        ,
        this.custom = (e, n) => {
            let o = n?.id || zd++;
            return this.create({
                jsx: e(o),
                id: o,
                ...n
            }),
            o
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , Bt = new IM
  , LM = (e, n) => {
    let o = n?.id || zd++;
    return Bt.addToast({
        title: e,
        ...n,
        id: o
    }),
    o
}
  , VM = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , FM = LM
  , BM = () => Bt.toasts
  , zM = () => Bt.getActiveToasts()
  , Pv = Object.assign(FM, {
    success: Bt.success,
    info: Bt.info,
    warning: Bt.warning,
    error: Bt.error,
    custom: Bt.custom,
    message: Bt.message,
    promise: Bt.promise,
    dismiss: Bt.dismiss,
    loading: Bt.loading
}, {
    getHistory: BM,
    getToasts: zM
});
function $M(e, {insertAt: n}={}) {
    if (typeof document > "u")
        return;
    let o = document.head || document.getElementsByTagName("head")[0]
      , i = document.createElement("style");
    i.type = "text/css",
    n === "top" && o.firstChild ? o.insertBefore(i, o.firstChild) : o.appendChild(i),
    i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e))
}
$M(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function za(e) {
    return e.label !== void 0
}
var HM = 3
  , UM = "32px"
  , WM = "16px"
  , kv = 4e3
  , KM = 356
  , GM = 14
  , YM = 20
  , XM = 200;
function mn(...e) {
    return e.filter(Boolean).join(" ")
}
function QM(e) {
    let[n,o] = e.split("-")
      , i = [];
    return n && i.push(n),
    o && i.push(o),
    i
}
var ZM = e => {
    var n, o, i, a, u, c, d, p, h, g, y;
    let {invert: x, toast: v, unstyled: T, interacting: C, setHeights: E, visibleToasts: P, heights: A, index: R, toasts: O, expanded: j, removeToast: $, defaultRichColors: I, closeButton: U, style: oe, cancelButtonStyle: J, actionButtonStyle: ne, className: Z="", descriptionClassName: le="", duration: ue, position: ge, gap: re, loadingIcon: Q, expandByDefault: V, classNames: H, icons: G, closeButtonAriaLabel: D="Close toast", pauseWhenPageIsHidden: z} = e
      , [se,ae] = ie.useState(null)
      , [pe,K] = ie.useState(null)
      , [F,ee] = ie.useState(!1)
      , [he,ce] = ie.useState(!1)
      , [Te,Me] = ie.useState(!1)
      , [Fe,W] = ie.useState(!1)
      , [xe,be] = ie.useState(!1)
      , [je,Oe] = ie.useState(0)
      , [it,$e] = ie.useState(0)
      , ze = ie.useRef(v.duration || ue || kv)
      , Et = ie.useRef(null)
      , yt = ie.useRef(null)
      , or = R === 0
      , ir = R + 1 <= P
      , lt = v.type
      , $t = v.dismissible !== !1
      , $n = v.className || ""
      , ys = v.descriptionClassName || ""
      , bn = ie.useMemo( () => A.findIndex(ke => ke.toastId === v.id) || 0, [A, v.id])
      , Fr = ie.useMemo( () => {
        var ke;
        return (ke = v.closeButton) != null ? ke : U
    }
    , [v.closeButton, U])
      , xs = ie.useMemo( () => v.duration || ue || kv, [v.duration, ue])
      , co = ie.useRef(0)
      , Hn = ie.useRef(0)
      , ws = ie.useRef(0)
      , Cn = ie.useRef(null)
      , [ci,di] = ge.split("-")
      , fo = ie.useMemo( () => A.reduce( (ke, Ve, He) => He >= bn ? ke : ke + Ve.height, 0), [A, bn])
      , po = _M()
      , sr = v.invert || x
      , En = lt === "loading";
    Hn.current = ie.useMemo( () => bn * re + fo, [bn, fo]),
    ie.useEffect( () => {
        ze.current = xs
    }
    , [xs]),
    ie.useEffect( () => {
        ee(!0)
    }
    , []),
    ie.useEffect( () => {
        let ke = yt.current;
        if (ke) {
            let Ve = ke.getBoundingClientRect().height;
            return $e(Ve),
            E(He => [{
                toastId: v.id,
                height: Ve,
                position: v.position
            }, ...He]),
            () => E(He => He.filter(Tt => Tt.toastId !== v.id))
        }
    }
    , [E, v.id]),
    ie.useLayoutEffect( () => {
        if (!F)
            return;
        let ke = yt.current
          , Ve = ke.style.height;
        ke.style.height = "auto";
        let He = ke.getBoundingClientRect().height;
        ke.style.height = Ve,
        $e(He),
        E(Tt => Tt.find(Mt => Mt.toastId === v.id) ? Tt.map(Mt => Mt.toastId === v.id ? {
            ...Mt,
            height: He
        } : Mt) : [{
            toastId: v.id,
            height: He,
            position: v.position
        }, ...Tt])
    }
    , [F, v.title, v.description, E, v.id]);
    let sn = ie.useCallback( () => {
        ce(!0),
        Oe(Hn.current),
        E(ke => ke.filter(Ve => Ve.toastId !== v.id)),
        setTimeout( () => {
            $(v)
        }
        , XM)
    }
    , [v, $, E, Hn]);
    ie.useEffect( () => {
        if (v.promise && lt === "loading" || v.duration === 1 / 0 || v.type === "loading")
            return;
        let ke;
        return j || C || z && po ? ( () => {
            if (ws.current < co.current) {
                let Ve = new Date().getTime() - co.current;
                ze.current = ze.current - Ve
            }
            ws.current = new Date().getTime()
        }
        )() : ze.current !== 1 / 0 && (co.current = new Date().getTime(),
        ke = setTimeout( () => {
            var Ve;
            (Ve = v.onAutoClose) == null || Ve.call(v, v),
            sn()
        }
        , ze.current)),
        () => clearTimeout(ke)
    }
    , [j, C, v, lt, z, po, sn]),
    ie.useEffect( () => {
        v.delete && sn()
    }
    , [sn, v.delete]);
    function Ss() {
        var ke, Ve, He;
        return G != null && G.loading ? ie.createElement("div", {
            className: mn(H?.loader, (ke = v?.classNames) == null ? void 0 : ke.loader, "sonner-loader"),
            "data-visible": lt === "loading"
        }, G.loading) : Q ? ie.createElement("div", {
            className: mn(H?.loader, (Ve = v?.classNames) == null ? void 0 : Ve.loader, "sonner-loader"),
            "data-visible": lt === "loading"
        }, Q) : ie.createElement(RM, {
            className: mn(H?.loader, (He = v?.classNames) == null ? void 0 : He.loader),
            visible: lt === "loading"
        })
    }
    return ie.createElement("li", {
        tabIndex: 0,
        ref: yt,
        className: mn(Z, $n, H?.toast, (n = v?.classNames) == null ? void 0 : n.toast, H?.default, H?.[lt], (o = v?.classNames) == null ? void 0 : o[lt]),
        "data-sonner-toast": "",
        "data-rich-colors": (i = v.richColors) != null ? i : I,
        "data-styled": !(v.jsx || v.unstyled || T),
        "data-mounted": F,
        "data-promise": !!v.promise,
        "data-swiped": xe,
        "data-removed": he,
        "data-visible": ir,
        "data-y-position": ci,
        "data-x-position": di,
        "data-index": R,
        "data-front": or,
        "data-swiping": Te,
        "data-dismissible": $t,
        "data-type": lt,
        "data-invert": sr,
        "data-swipe-out": Fe,
        "data-swipe-direction": pe,
        "data-expanded": !!(j || V && F),
        style: {
            "--index": R,
            "--toasts-before": R,
            "--z-index": O.length - R,
            "--offset": `${he ? je : Hn.current}px`,
            "--initial-height": V ? "auto" : `${it}px`,
            ...oe,
            ...v.style
        },
        onDragEnd: () => {
            Me(!1),
            ae(null),
            Cn.current = null
        }
        ,
        onPointerDown: ke => {
            En || !$t || (Et.current = new Date,
            Oe(Hn.current),
            ke.target.setPointerCapture(ke.pointerId),
            ke.target.tagName !== "BUTTON" && (Me(!0),
            Cn.current = {
                x: ke.clientX,
                y: ke.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var ke, Ve, He, Tt;
            if (Fe || !$t)
                return;
            Cn.current = null;
            let Mt = Number(((ke = yt.current) == null ? void 0 : ke.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , jt = Number(((Ve = yt.current) == null ? void 0 : Ve.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , an = new Date().getTime() - ((He = Et.current) == null ? void 0 : He.getTime())
              , ht = se === "x" ? Mt : jt
              , Tn = Math.abs(ht) / an;
            if (Math.abs(ht) >= YM || Tn > .11) {
                Oe(Hn.current),
                (Tt = v.onDismiss) == null || Tt.call(v, v),
                K(se === "x" ? Mt > 0 ? "right" : "left" : jt > 0 ? "down" : "up"),
                sn(),
                W(!0),
                be(!1);
                return
            }
            Me(!1),
            ae(null)
        }
        ,
        onPointerMove: ke => {
            var Ve, He, Tt, Mt;
            if (!Cn.current || !$t || ((Ve = window.getSelection()) == null ? void 0 : Ve.toString().length) > 0)
                return;
            let jt = ke.clientY - Cn.current.y
              , an = ke.clientX - Cn.current.x
              , ht = (He = e.swipeDirections) != null ? He : QM(ge);
            !se && (Math.abs(an) > 1 || Math.abs(jt) > 1) && ae(Math.abs(an) > Math.abs(jt) ? "x" : "y");
            let Tn = {
                x: 0,
                y: 0
            };
            se === "y" ? (ht.includes("top") || ht.includes("bottom")) && (ht.includes("top") && jt < 0 || ht.includes("bottom") && jt > 0) && (Tn.y = jt) : se === "x" && (ht.includes("left") || ht.includes("right")) && (ht.includes("left") && an < 0 || ht.includes("right") && an > 0) && (Tn.x = an),
            (Math.abs(Tn.x) > 0 || Math.abs(Tn.y) > 0) && be(!0),
            (Tt = yt.current) == null || Tt.style.setProperty("--swipe-amount-x", `${Tn.x}px`),
            (Mt = yt.current) == null || Mt.style.setProperty("--swipe-amount-y", `${Tn.y}px`)
        }
    }, Fr && !v.jsx ? ie.createElement("button", {
        "aria-label": D,
        "data-disabled": En,
        "data-close-button": !0,
        onClick: En || !$t ? () => {}
        : () => {
            var ke;
            sn(),
            (ke = v.onDismiss) == null || ke.call(v, v)
        }
        ,
        className: mn(H?.closeButton, (a = v?.classNames) == null ? void 0 : a.closeButton)
    }, (u = G?.close) != null ? u : OM) : null, v.jsx || w.isValidElement(v.title) ? v.jsx ? v.jsx : typeof v.title == "function" ? v.title() : v.title : ie.createElement(ie.Fragment, null, lt || v.icon || v.promise ? ie.createElement("div", {
        "data-icon": "",
        className: mn(H?.icon, (c = v?.classNames) == null ? void 0 : c.icon)
    }, v.promise || v.type === "loading" && !v.icon ? v.icon || Ss() : null, v.type !== "loading" ? v.icon || G?.[lt] || kM(lt) : null) : null, ie.createElement("div", {
        "data-content": "",
        className: mn(H?.content, (d = v?.classNames) == null ? void 0 : d.content)
    }, ie.createElement("div", {
        "data-title": "",
        className: mn(H?.title, (p = v?.classNames) == null ? void 0 : p.title)
    }, typeof v.title == "function" ? v.title() : v.title), v.description ? ie.createElement("div", {
        "data-description": "",
        className: mn(le, ys, H?.description, (h = v?.classNames) == null ? void 0 : h.description)
    }, typeof v.description == "function" ? v.description() : v.description) : null), w.isValidElement(v.cancel) ? v.cancel : v.cancel && za(v.cancel) ? ie.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: v.cancelButtonStyle || J,
        onClick: ke => {
            var Ve, He;
            za(v.cancel) && $t && ((He = (Ve = v.cancel).onClick) == null || He.call(Ve, ke),
            sn())
        }
        ,
        className: mn(H?.cancelButton, (g = v?.classNames) == null ? void 0 : g.cancelButton)
    }, v.cancel.label) : null, w.isValidElement(v.action) ? v.action : v.action && za(v.action) ? ie.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: v.actionButtonStyle || ne,
        onClick: ke => {
            var Ve, He;
            za(v.action) && ((He = (Ve = v.action).onClick) == null || He.call(Ve, ke),
            !ke.defaultPrevented && sn())
        }
        ,
        className: mn(H?.actionButton, (y = v?.classNames) == null ? void 0 : y.actionButton)
    }, v.action.label) : null))
}
;
function Av() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function qM(e, n) {
    let o = {};
    return [e, n].forEach( (i, a) => {
        let u = a === 1
          , c = u ? "--mobile-offset" : "--offset"
          , d = u ? WM : UM;
        function p(h) {
            ["top", "right", "bottom", "left"].forEach(g => {
                o[`${c}-${g}`] = typeof h == "number" ? `${h}px` : h
            }
            )
        }
        typeof i == "number" || typeof i == "string" ? p(i) : typeof i == "object" ? ["top", "right", "bottom", "left"].forEach(h => {
            i[h] === void 0 ? o[`${c}-${h}`] = d : o[`${c}-${h}`] = typeof i[h] == "number" ? `${i[h]}px` : i[h]
        }
        ) : p(d)
    }
    ),
    o
}
var JM = w.forwardRef(function(e, n) {
    let {invert: o, position: i="bottom-right", hotkey: a=["altKey", "KeyT"], expand: u, closeButton: c, className: d, offset: p, mobileOffset: h, theme: g="light", richColors: y, duration: x, style: v, visibleToasts: T=HM, toastOptions: C, dir: E=Av(), gap: P=GM, loadingIcon: A, icons: R, containerAriaLabel: O="Notifications", pauseWhenPageIsHidden: j} = e
      , [$,I] = ie.useState([])
      , U = ie.useMemo( () => Array.from(new Set([i].concat($.filter(z => z.position).map(z => z.position)))), [$, i])
      , [oe,J] = ie.useState([])
      , [ne,Z] = ie.useState(!1)
      , [le,ue] = ie.useState(!1)
      , [ge,re] = ie.useState(g !== "system" ? g : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , Q = ie.useRef(null)
      , V = a.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , H = ie.useRef(null)
      , G = ie.useRef(!1)
      , D = ie.useCallback(z => {
        I(se => {
            var ae;
            return (ae = se.find(pe => pe.id === z.id)) != null && ae.delete || Bt.dismiss(z.id),
            se.filter( ({id: pe}) => pe !== z.id)
        }
        )
    }
    , []);
    return ie.useEffect( () => Bt.subscribe(z => {
        if (z.dismiss) {
            I(se => se.map(ae => ae.id === z.id ? {
                ...ae,
                delete: !0
            } : ae));
            return
        }
        setTimeout( () => {
            Yv.flushSync( () => {
                I(se => {
                    let ae = se.findIndex(pe => pe.id === z.id);
                    return ae !== -1 ? [...se.slice(0, ae), {
                        ...se[ae],
                        ...z
                    }, ...se.slice(ae + 1)] : [z, ...se]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    ie.useEffect( () => {
        if (g !== "system") {
            re(g);
            return
        }
        if (g === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? re("dark") : re("light")),
        typeof window > "u")
            return;
        let z = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            z.addEventListener("change", ({matches: se}) => {
                re(se ? "dark" : "light")
            }
            )
        } catch {
            z.addListener( ({matches: ae}) => {
                try {
                    re(ae ? "dark" : "light")
                } catch (pe) {
                    console.error(pe)
                }
            }
            )
        }
    }
    , [g]),
    ie.useEffect( () => {
        $.length <= 1 && Z(!1)
    }
    , [$]),
    ie.useEffect( () => {
        let z = se => {
            var ae, pe;
            a.every(K => se[K] || se.code === K) && (Z(!0),
            (ae = Q.current) == null || ae.focus()),
            se.code === "Escape" && (document.activeElement === Q.current || (pe = Q.current) != null && pe.contains(document.activeElement)) && Z(!1)
        }
        ;
        return document.addEventListener("keydown", z),
        () => document.removeEventListener("keydown", z)
    }
    , [a]),
    ie.useEffect( () => {
        if (Q.current)
            return () => {
                H.current && (H.current.focus({
                    preventScroll: !0
                }),
                H.current = null,
                G.current = !1)
            }
    }
    , [Q.current]),
    ie.createElement("section", {
        ref: n,
        "aria-label": `${O} ${V}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, U.map( (z, se) => {
        var ae;
        let[pe,K] = z.split("-");
        return $.length ? ie.createElement("ol", {
            key: z,
            dir: E === "auto" ? Av() : E,
            tabIndex: -1,
            ref: Q,
            className: d,
            "data-sonner-toaster": !0,
            "data-theme": ge,
            "data-y-position": pe,
            "data-lifted": ne && $.length > 1 && !u,
            "data-x-position": K,
            style: {
                "--front-toast-height": `${((ae = oe[0]) == null ? void 0 : ae.height) || 0}px`,
                "--width": `${KM}px`,
                "--gap": `${P}px`,
                ...v,
                ...qM(p, h)
            },
            onBlur: F => {
                G.current && !F.currentTarget.contains(F.relatedTarget) && (G.current = !1,
                H.current && (H.current.focus({
                    preventScroll: !0
                }),
                H.current = null))
            }
            ,
            onFocus: F => {
                F.target instanceof HTMLElement && F.target.dataset.dismissible === "false" || G.current || (G.current = !0,
                H.current = F.relatedTarget)
            }
            ,
            onMouseEnter: () => Z(!0),
            onMouseMove: () => Z(!0),
            onMouseLeave: () => {
                le || Z(!1)
            }
            ,
            onDragEnd: () => Z(!1),
            onPointerDown: F => {
                F.target instanceof HTMLElement && F.target.dataset.dismissible === "false" || ue(!0)
            }
            ,
            onPointerUp: () => ue(!1)
        }, $.filter(F => !F.position && se === 0 || F.position === z).map( (F, ee) => {
            var he, ce;
            return ie.createElement(ZM, {
                key: F.id,
                icons: R,
                index: ee,
                toast: F,
                defaultRichColors: y,
                duration: (he = C?.duration) != null ? he : x,
                className: C?.className,
                descriptionClassName: C?.descriptionClassName,
                invert: o,
                visibleToasts: T,
                closeButton: (ce = C?.closeButton) != null ? ce : c,
                interacting: le,
                position: z,
                style: C?.style,
                unstyled: C?.unstyled,
                classNames: C?.classNames,
                cancelButtonStyle: C?.cancelButtonStyle,
                actionButtonStyle: C?.actionButtonStyle,
                removeToast: D,
                toasts: $.filter(Te => Te.position == F.position),
                heights: oe.filter(Te => Te.position == F.position),
                setHeights: J,
                expandByDefault: u,
                gap: P,
                loadingIcon: A,
                expanded: ne,
                pauseWhenPageIsHidden: j,
                swipeDirections: e.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const ej = ({words: e, className: n, cursorClassName: o}) => {
    const i = e.map(u => ({
        ...u,
        text: u.text.split("")
    }))
      , a = () => S.jsx("div", {
        children: i.map( (u, c) => S.jsxs("div", {
            className: "inline-block",
            children: [u.text.map( (d, p) => S.jsx("span", {
                className: Re("dark:text-white text-black ", u.className),
                children: d
            }, `char-${p}`)), " "]
        }, `word-${c}`))
    });
    return S.jsxs("div", {
        className: Re("flex items-baseline space-x-1 my-6", n),
        children: [S.jsxs(Id.div, {
            className: "overflow-hidden",
            initial: {
                width: "0%"
            },
            whileInView: {
                width: "fit-content"
            },
            transition: {
                duration: 2,
                ease: "linear",
                delay: 1
            },
            children: [S.jsxs("div", {
                className: "text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold leading-4",
                style: {
                    whiteSpace: "nowrap"
                },
                children: [a(), " "]
            }), " "]
        }), S.jsx(Id.span, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                duration: .8,
                repeat: 1 / 0,
                repeatType: "reverse"
            },
            className: Re("block rounded-sm w-[4px] h-4 bg-blue-500", o),
            style: {
                transform: "translateY(0.2rem)"
            }
        })]
    })
}
;
var Yf = "Dialog"
  , [Qw,Zw] = wn(Yf)
  , [tj,Sn] = Qw(Yf)
  , qw = e => {
    const {__scopeDialog: n, children: o, open: i, defaultOpen: a, onOpenChange: u, modal: c=!0} = e
      , d = w.useRef(null)
      , p = w.useRef(null)
      , [h=!1,g] = jr({
        prop: i,
        defaultProp: a,
        onChange: u
    });
    return S.jsx(tj, {
        scope: n,
        triggerRef: d,
        contentRef: p,
        contentId: Nr(),
        titleId: Nr(),
        descriptionId: Nr(),
        open: h,
        onOpenChange: g,
        onOpenToggle: w.useCallback( () => g(y => !y), [g]),
        modal: c,
        children: o
    })
}
;
qw.displayName = Yf;
var Jw = "DialogTrigger"
  , e1 = w.forwardRef( (e, n) => {
    const {__scopeDialog: o, ...i} = e
      , a = Sn(Jw, o)
      , u = _e(n, a.triggerRef);
    return S.jsx(Ne.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": a.open,
        "aria-controls": a.contentId,
        "data-state": Zf(a.open),
        ...i,
        ref: u,
        onClick: Ee(e.onClick, a.onOpenToggle)
    })
}
);
e1.displayName = Jw;
var Xf = "DialogPortal"
  , [nj,t1] = Qw(Xf, {
    forceMount: void 0
})
  , n1 = e => {
    const {__scopeDialog: n, forceMount: o, children: i, container: a} = e
      , u = Sn(Xf, n);
    return S.jsx(nj, {
        scope: n,
        forceMount: o,
        children: w.Children.map(i, c => S.jsx(ii, {
            present: o || u.open,
            children: S.jsx(af, {
                asChild: !0,
                container: a,
                children: c
            })
        }))
    })
}
;
n1.displayName = Xf;
var hl = "DialogOverlay"
  , r1 = w.forwardRef( (e, n) => {
    const o = t1(hl, e.__scopeDialog)
      , {forceMount: i=o.forceMount, ...a} = e
      , u = Sn(hl, e.__scopeDialog);
    return u.modal ? S.jsx(ii, {
        present: i || u.open,
        children: S.jsx(rj, {
            ...a,
            ref: n
        })
    }) : null
}
);
r1.displayName = hl;
var rj = w.forwardRef( (e, n) => {
    const {__scopeDialog: o, ...i} = e
      , a = Sn(hl, o);
    return S.jsx(uf, {
        as: so,
        allowPinchZoom: !0,
        shards: [a.contentRef],
        children: S.jsx(Ne.div, {
            "data-state": Zf(a.open),
            ...i,
            ref: n,
            style: {
                pointerEvents: "auto",
                ...i.style
            }
        })
    })
}
)
  , uo = "DialogContent"
  , o1 = w.forwardRef( (e, n) => {
    const o = t1(uo, e.__scopeDialog)
      , {forceMount: i=o.forceMount, ...a} = e
      , u = Sn(uo, e.__scopeDialog);
    return S.jsx(ii, {
        present: i || u.open,
        children: u.modal ? S.jsx(oj, {
            ...a,
            ref: n
        }) : S.jsx(ij, {
            ...a,
            ref: n
        })
    })
}
);
o1.displayName = uo;
var oj = w.forwardRef( (e, n) => {
    const o = Sn(uo, e.__scopeDialog)
      , i = w.useRef(null)
      , a = _e(n, o.contentRef, i);
    return w.useEffect( () => {
        const u = i.current;
        if (u)
            return ky(u)
    }
    , []),
    S.jsx(i1, {
        ...e,
        ref: a,
        trapFocus: o.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Ee(e.onCloseAutoFocus, u => {
            u.preventDefault(),
            o.triggerRef.current?.focus()
        }
        ),
        onPointerDownOutside: Ee(e.onPointerDownOutside, u => {
            const c = u.detail.originalEvent
              , d = c.button === 0 && c.ctrlKey === !0;
            (c.button === 2 || d) && u.preventDefault()
        }
        ),
        onFocusOutside: Ee(e.onFocusOutside, u => u.preventDefault())
    })
}
)
  , ij = w.forwardRef( (e, n) => {
    const o = Sn(uo, e.__scopeDialog)
      , i = w.useRef(!1)
      , a = w.useRef(!1);
    return S.jsx(i1, {
        ...e,
        ref: n,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: u => {
            e.onCloseAutoFocus?.(u),
            u.defaultPrevented || (i.current || o.triggerRef.current?.focus(),
            u.preventDefault()),
            i.current = !1,
            a.current = !1
        }
        ,
        onInteractOutside: u => {
            e.onInteractOutside?.(u),
            u.defaultPrevented || (i.current = !0,
            u.detail.originalEvent.type === "pointerdown" && (a.current = !0));
            const c = u.target;
            o.triggerRef.current?.contains(c) && u.preventDefault(),
            u.detail.originalEvent.type === "focusin" && a.current && u.preventDefault()
        }
    })
}
)
  , i1 = w.forwardRef( (e, n) => {
    const {__scopeDialog: o, trapFocus: i, onOpenAutoFocus: a, onCloseAutoFocus: u, ...c} = e
      , d = Sn(uo, o)
      , p = w.useRef(null)
      , h = _e(n, p);
    return Jv(),
    S.jsxs(S.Fragment, {
        children: [S.jsx(Qd, {
            asChild: !0,
            loop: !0,
            trapped: i,
            onMountAutoFocus: a,
            onUnmountAutoFocus: u,
            children: S.jsx(gl, {
                role: "dialog",
                id: d.contentId,
                "aria-describedby": d.descriptionId,
                "aria-labelledby": d.titleId,
                "data-state": Zf(d.open),
                ...c,
                ref: h,
                onDismiss: () => d.onOpenChange(!1)
            })
        }), S.jsxs(S.Fragment, {
            children: [S.jsx(aj, {
                titleId: d.titleId
            }), S.jsx(uj, {
                contentRef: p,
                descriptionId: d.descriptionId
            })]
        })]
    })
}
)
  , Qf = "DialogTitle"
  , s1 = w.forwardRef( (e, n) => {
    const {__scopeDialog: o, ...i} = e
      , a = Sn(Qf, o);
    return S.jsx(Ne.h2, {
        id: a.titleId,
        ...i,
        ref: n
    })
}
);
s1.displayName = Qf;
var a1 = "DialogDescription"
  , l1 = w.forwardRef( (e, n) => {
    const {__scopeDialog: o, ...i} = e
      , a = Sn(a1, o);
    return S.jsx(Ne.p, {
        id: a.descriptionId,
        ...i,
        ref: n
    })
}
);
l1.displayName = a1;
var u1 = "DialogClose"
  , c1 = w.forwardRef( (e, n) => {
    const {__scopeDialog: o, ...i} = e
      , a = Sn(u1, o);
    return S.jsx(Ne.button, {
        type: "button",
        ...i,
        ref: n,
        onClick: Ee(e.onClick, () => a.onOpenChange(!1))
    })
}
);
c1.displayName = u1;
function Zf(e) {
    return e ? "open" : "closed"
}
var d1 = "DialogTitleWarning"
  , [sj,f1] = lE(d1, {
    contentName: uo,
    titleName: Qf,
    docsSlug: "dialog"
})
  , aj = ({titleId: e}) => {
    const n = f1(d1)
      , o = `\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;
    return w.useEffect( () => {
        e && (document.getElementById(e) || console.error(o))
    }
    , [o, e]),
    null
}
  , lj = "DialogDescriptionWarning"
  , uj = ({contentRef: e, descriptionId: n}) => {
    const i = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${f1(lj).contentName}}.`;
    return w.useEffect( () => {
        const a = e.current?.getAttribute("aria-describedby");
        n && a && (document.getElementById(n) || console.warn(i))
    }
    , [i, e, n]),
    null
}
  , cj = qw
  , dj = e1
  , fj = n1
  , pj = r1
  , hj = o1
  , mj = s1
  , gj = l1
  , p1 = c1
  , h1 = "AlertDialog"
  , [vj,Vj] = wn(h1, [Zw])
  , rr = Zw()
  , m1 = e => {
    const {__scopeAlertDialog: n, ...o} = e
      , i = rr(n);
    return S.jsx(cj, {
        ...i,
        ...o,
        modal: !0
    })
}
;
m1.displayName = h1;
var yj = "AlertDialogTrigger"
  , xj = w.forwardRef( (e, n) => {
    const {__scopeAlertDialog: o, ...i} = e
      , a = rr(o);
    return S.jsx(dj, {
        ...a,
        ...i,
        ref: n
    })
}
);
xj.displayName = yj;
var wj = "AlertDialogPortal"
  , g1 = e => {
    const {__scopeAlertDialog: n, ...o} = e
      , i = rr(n);
    return S.jsx(fj, {
        ...i,
        ...o
    })
}
;
g1.displayName = wj;
var Sj = "AlertDialogOverlay"
  , v1 = w.forwardRef( (e, n) => {
    const {__scopeAlertDialog: o, ...i} = e
      , a = rr(o);
    return S.jsx(pj, {
        ...a,
        ...i,
        ref: n
    })
}
);
v1.displayName = Sj;
var Qo = "AlertDialogContent"
  , [bj,Cj] = vj(Qo)
  , y1 = w.forwardRef( (e, n) => {
    const {__scopeAlertDialog: o, children: i, ...a} = e
      , u = rr(o)
      , c = w.useRef(null)
      , d = _e(n, c)
      , p = w.useRef(null);
    return S.jsx(sj, {
        contentName: Qo,
        titleName: x1,
        docsSlug: "alert-dialog",
        children: S.jsx(bj, {
            scope: o,
            cancelRef: p,
            children: S.jsxs(hj, {
                role: "alertdialog",
                ...u,
                ...a,
                ref: d,
                onOpenAutoFocus: Ee(a.onOpenAutoFocus, h => {
                    h.preventDefault(),
                    p.current?.focus({
                        preventScroll: !0
                    })
                }
                ),
                onPointerDownOutside: h => h.preventDefault(),
                onInteractOutside: h => h.preventDefault(),
                children: [S.jsx(Wd, {
                    children: i
                }), S.jsx(Tj, {
                    contentRef: c
                })]
            })
        })
    })
}
);
y1.displayName = Qo;
var x1 = "AlertDialogTitle"
  , w1 = w.forwardRef( (e, n) => {
    const {__scopeAlertDialog: o, ...i} = e
      , a = rr(o);
    return S.jsx(mj, {
        ...a,
        ...i,
        ref: n
    })
}
);
w1.displayName = x1;
var S1 = "AlertDialogDescription"
  , b1 = w.forwardRef( (e, n) => {
    const {__scopeAlertDialog: o, ...i} = e
      , a = rr(o);
    return S.jsx(gj, {
        ...a,
        ...i,
        ref: n
    })
}
);
b1.displayName = S1;
var Ej = "AlertDialogAction"
  , C1 = w.forwardRef( (e, n) => {
    const {__scopeAlertDialog: o, ...i} = e
      , a = rr(o);
    return S.jsx(p1, {
        ...a,
        ...i,
        ref: n
    })
}
);
C1.displayName = Ej;
var E1 = "AlertDialogCancel"
  , T1 = w.forwardRef( (e, n) => {
    const {__scopeAlertDialog: o, ...i} = e
      , {cancelRef: a} = Cj(E1, o)
      , u = rr(o)
      , c = _e(n, a);
    return S.jsx(p1, {
        ...u,
        ...i,
        ref: c
    })
}
);
T1.displayName = E1;
var Tj = ({contentRef: e}) => {
    const n = `\`${Qo}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Qo}\` by passing a \`${S1}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Qo}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
    return w.useEffect( () => {
        document.getElementById(e.current?.getAttribute("aria-describedby")) || console.warn(n)
    }
    , [n, e]),
    null
}
  , Pj = m1
  , kj = g1
  , P1 = v1
  , k1 = y1
  , A1 = C1
  , R1 = T1
  , N1 = w1
  , D1 = b1;
const Aj = Pj
  , Rj = kj
  , M1 = w.forwardRef( ({className: e, ...n}, o) => S.jsx(P1, {
    className: Re("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
    ...n,
    ref: o
}));
M1.displayName = P1.displayName;
const j1 = w.forwardRef( ({className: e, ...n}, o) => S.jsxs(Rj, {
    children: [S.jsx(M1, {}), S.jsx(k1, {
        ref: o,
        className: Re("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", e),
        ...n
    })]
}));
j1.displayName = k1.displayName;
const O1 = ({className: e, ...n}) => S.jsx("div", {
    className: Re("flex flex-col space-y-2 text-center sm:text-left", e),
    ...n
});
O1.displayName = "AlertDialogHeader";
const _1 = ({className: e, ...n}) => S.jsx("div", {
    className: Re("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
    ...n
});
_1.displayName = "AlertDialogFooter";
const I1 = w.forwardRef( ({className: e, ...n}, o) => S.jsx(N1, {
    ref: o,
    className: Re("text-lg font-semibold", e),
    ...n
}));
I1.displayName = N1.displayName;
const L1 = w.forwardRef( ({className: e, ...n}, o) => S.jsx(D1, {
    ref: o,
    className: Re("text-sm text-muted-foreground", e),
    ...n
}));
L1.displayName = D1.displayName;
const V1 = w.forwardRef( ({className: e, ...n}, o) => S.jsx(A1, {
    ref: o,
    className: Re(Gd(), e),
    ...n
}));
V1.displayName = A1.displayName;
const F1 = w.forwardRef( ({className: e, ...n}, o) => S.jsx(R1, {
    ref: o,
    className: Re(Gd({
        variant: "outline"
    }), "mt-2 sm:mt-0", e),
    ...n
}));
F1.displayName = R1.displayName;
const Rv = [{
    text: getTranslation("可使用键盘移动石板，删除(Delete)，或者旋转(R)")
}, {
    text: getTranslation("小技巧-先摆边上的石板，最后再摆薯条，才不容易卡住")
}];
function Nj() {
    const [e,n] = w.useState(0)
      , [o,i] = w.useState(!0)
      , [a,u] = w.useState({})
      , [c,d] = w.useState(null)
      , [p,h] = w.useState(null)
      , [g,y] = w.useState(!1)
      , [x,v] = w.useState(null)
      , [T,C] = w.useState(!1)
      , [E,P] = w.useState(!1)
      , [A,R] = w.useState("unwa")
      , [O,j] = w.useState(!1)
      , [$,I] = w.useState(.2)
      , U = w.useRef(null)
      , oe = w.useCallback(W => {
        if (!W || !a[W]) {
            h(null);
            return
        }
        const xe = a[W]
          , be = Wm(xe, a);
        be.length > 0 ? (v({
            stoneToPlace: xe,
            conflictingIds: be
        }),
        y(!0)) : h(null)
    }
    , [a])
      , J = () => {
        if (!x)
            return;
        const {conflictingIds: W} = x;
        u(xe => {
            const be = {
                ...xe
            };
            return W.forEach(je => {
                delete be[je]
            }
            ),
            be
        }
        ),
        h(null),
        y(!1),
        v(null)
    }
      , ne = () => {
        p && ge(p.id, p),
        h(null),
        y(!1),
        v(null)
    }
      , Z = W => {
        c && c !== W && oe(c),
        d(W),
        h(a[W] || null)
    }
      , le = () => {
        c && oe(c),
        d(null)
    }
      , ue = W => u(xe => ({
        ...xe,
        [W.id]: W
    }))
      , ge = (W, xe) => {
        u(be => be[W] ? {
            ...be,
            [W]: {
                ...be[W],
                ...xe
            }
        } : be)
    }
      , re = w.useCallback(W => {
        u(xe => {
            const be = {
                ...xe
            };
            return delete be[W],
            be
        }
        ),
        c === W && (d(null),
        h(null))
    }
    , [c])
      , Q = () => {
        u({}),
        d(null),
        h(null)
    }
      , V = W => {
        u(W.stones || {}),
        d(null),
        h(null)
    }
      , H = (W, xe, be) => {
        u(je => {
            const Oe = je[W];
            if (!Oe)
                return je;
            const it = Oe.attributes.map($e => {
                if ($e.id === xe) {
                    if (be === "none")
                        return {
                            ...$e,
                            name: getTranslation("空置"),
                            value: 0,
                            baseValue: 0
                        };
                    const ze = qa.find(Et => Et.name === be);
                    if (ze)
                        return {
                            ...$e,
                            name: ze.name,
                            value: ze.baseValue,
                            baseValue: ze.baseValue
                        }
                }
                return $e
            }
            );
            return {
                ...je,
                [W]: {
                    ...Oe,
                    attributes: it
                }
            }
        }
        )
    }
      , G = W => {
        c && oe(c);
        const xe = `${W.type}_${W.subType}`
          , be = PC[xe];
        if (be !== void 0 && Object.values(a).filter(it => it.type === W.type && it.subType === W.subType).length >= be) {
            Pv.error(getTranslation("该类石板已达可置入上限，无法置入！"));
            return
        }
        const je = iE(W.shape, a, W.type);
        if (je) {
            const {position: Oe, shape: it} = je;
            let $e = getTranslation("未知石板");
            W.type === "A" ? $e = Xe.A.name : W.type === "B" && W.subType === "yellow" ? $e = Xe.B_Yellow.name : W.type === "B" && W.subType === "orange" ? $e = Xe.B_Orange.name : W.type === "C" ? $e = Xe.C.name : W.type === "D" && W.subType === "S1" ? $e = Xe.D.name : W.type === "D" && W.subType === "S1_Pink" ? $e = Xe.D_Pink.name : W.type === "E" && ($e = Xe.E.name);
            const ze = {
                id: MD(),
                ...W,
                shape: it,
                name: $e,
                position: Oe,
                attributes: sE({
                    ...W
                })
            };
            ue(ze),
            d(ze.id),
            h(ze)
        } else
            Pv.warning(getTranslation("棋盘上已没有足够空间置入该石板。"))
    }
      , D = w.useCallback(W => {
        if (!c)
            return;
        const xe = a[c];
        if (!xe)
            return;
        const {position: be, shape: je} = xe;
        let Oe = {
            ...be
        };
        switch (W) {
        case "up":
            Oe.y -= 1;
            break;
        case "down":
            Oe.y += 1;
            break;
        case "left":
            Oe.x -= 1;
            break;
        case "right":
            Oe.x += 1;
            break
        }
        Na(je, Oe) && ge(c, {
            position: Oe
        })
    }
    , [c, a])
      , z = () => {
        if (!c)
            return;
        const W = a[c];
        if (W) {
            const xe = Jc(W.shape);
            if (Na(xe, W.position)) {
                let be = W.attributes;
                if (W.type === "D" && W.subType === "S1") {
                    const je = W.attributes.findIndex(Oe => Oe.type === At.COPY_DIRECTIONAL && Oe.direction);
                    if (je > -1) {
                        const Oe = W.attributes[je]
                          , it = Oe.direction
                          , ze = {
                            up: "right",
                            right: "down",
                            down: "left",
                            left: "up"
                        }[it]
                          , yt = {
                            ...Oe,
                            direction: ze,
                            name: `${getTranslation("复制")}${{
                                up: "上",
                                down: "下",
                                left: "左",
                                right: "右"
                            }[ze]}${getTranslation("侧相邻石板的最后一条属性")}`
                        };
                        be = [...W.attributes.slice(0, je), yt, ...W.attributes.slice(je + 1)]
                    }
                }
                ge(c, {
                    shape: xe,
                    attributes: be
                })
            }
        }
    }
      , se = () => {
        if (!c)
            return;
        const W = a[c];
        if (W) {
            const xe = ed(W.shape);
            Na(xe, W.position) && ge(c, {
                shape: xe
            })
        }
    }
      , ae = () => {
        if (!c)
            return;
        const W = a[c];
        if (W) {
            const xe = kC(W.shape);
            Na(xe, W.position) && ge(c, {
                shape: xe
            })
        }
    }
    ;
    w.useEffect( () => {
        const W = xe => {
            if (c)
                switch (xe.key) {
                case "ArrowUp":
                    D("up");
                    break;
                case "ArrowDown":
                    D("down");
                    break;
                case "ArrowLeft":
                    D("left");
                    break;
                case "ArrowRight":
                    D("right");
                    break;
                case "Delete":
                case "Backspace":
                    re(c);
                    break;
                case "r":
                case "R":
                    z();
                    break
                }
        }
        ;
        return window.addEventListener("keydown", W),
        () => window.removeEventListener("keydown", W)
    }
    , [c, D, re, a]),
    w.useEffect( () => {
        const W = setInterval( () => {
            n(xe => (xe + 1) % Rv.length)
        }
        , 6e3);
        return () => clearInterval(W)
    }
    , []),
    w.useEffect( () => {
        let W;
        return o && (W = setTimeout( () => i(!1), 3e4)),
        () => {
            W && clearTimeout(W)
        }
    }
    , [o]);
    const pe = () => {
        const W = {
            version: "1.0.0",
            timestamp: Date.now(),
            stones: a
        }
          , xe = JSON.stringify(W, null, 2)
          , be = "data:application/json;charset=utf-8," + encodeURIComponent(xe)
          , je = document.createElement("a");
        je.setAttribute("href", be),
        je.setAttribute("download", `godstone-config-${Date.now()}.json`),
        je.click()
    }
      , K = () => U.current?.click()
      , F = W => {
        const xe = W.target.files?.[0];
        if (!xe)
            return;
        const be = new FileReader;
        be.onload = je => {
            try {
                const Oe = JSON.parse(je.target?.result);
                V(Oe)
            } catch (Oe) {
                console.error("Failed to parse file", Oe)
            }
        }
        ,
        be.readAsText(xe),
        W.target.value = ""
    }
      , ee = c ? a[c] : null
      , he = w.useMemo( () => {
        const W = new Set;
        if (c && a[c]) {
            const xe = Wm(a[c], a);
            xe.length > 0 && (W.add(c),
            xe.forEach(be => W.add(be)))
        }
        return W
    }
    , [a, c])
      , ce = w.useMemo( () => {
        const W = Yd(a)
          , xe = new Set;
        for (const be of Object.values(a))
            (be.type === "D" || be.type === "E") && nl(be, a, W).length > 0 && xe.add(be.id);
        return xe
    }
    , [a])
      , {summary: Te, count: Me} = aE(a, {
        isBuff2Active: T,
        isBuff3Active: E,
        starfallStanceOption: A,
        isAntinomyActive: O,
        antinomyValue: $
    })
      , Fe = w.useMemo( () => Object.values(Te).reduce( (W, xe) => W * (1 + xe), 1), [Te]);
    return S.jsxs(ND, {
        defaultTheme: "dark",
        storageKey: "vite-ui-theme",
        children: [S.jsx(JM, {
            position: "top-center",
            richColors: !0
        }), S.jsx("div", {
            className: "w-full h-screen bg-black",
            children: S.jsx(SD, {
                backgroundColor: "transparent",
                particleCount: 500,
                rangeY: 200,
                baseHue: 210,
                className: "flex flex-col h-full w-full",
                children: S.jsxs("div", {
                    className: "flex flex-col h-full w-full bg-transparent text-foreground font-sans",
                    children: [S.jsxs("header", {
                        className: "grid grid-cols-3 items-center px-4 py-2 border-b bg-background",
                        children: [S.jsxs("div", {
                            children: [S.jsx("h1", {
                                className: "text-xl font-bold",
                                children: getTranslation("新神秩序石板属性计算模拟器")
                            }), S.jsxs("div", {
                                className: "text-xs text-gray-400 mt-1",
                                children: [S.jsx("span", {
                                    children: "V1.2"
                                }), S.jsx("span", {
                                    className: "ml-4",
                                    children: "Power by Rockly"
                                })]
                            })]
                        }), S.jsxs("div", {
                            className: "text-sm text-center justify-self-center",
                            children: [S.jsx("span", {
                                className: "text-muted-foreground",
                                children: getTranslation("等效增伤倍率 (简化)")
                            }), S.jsx("p", {
                                className: "font-bold text-2xl text-orange-600",
                                children: Fe.toFixed(3)
                            })]
                        }), S.jsxs("div", {
                            className: "flex items-center gap-2 justify-self-end",
                            children: [S.jsx(Yt, {
                                variant: "ghost",
                                size: "icon",
                                onClick: () => i(!0),
                                children: S.jsx(HC, {
                                    className: "h-5 w-5"
                                })
                            }), S.jsxs(Yt, {
                                variant: "outline",
                                size: "sm",
                                onClick: K,
                                children: [S.jsx(QC, {
                                    className: "mr-2 h-4 w-4"
                                }), ` ${getTranslation("导入")}`]
                            }), S.jsx("input", {
                                type: "file",
                                ref: U,
                                onChange: F,
                                accept: ".json",
                                style: {
                                    display: "none"
                                }
                            }), S.jsxs(Yt, {
                                variant: "outline",
                                size: "sm",
                                onClick: pe,
                                children: [S.jsx(WC, {
                                    className: "mr-2 h-4 w-4"
                                }), ` ${getTranslation("导出")}`]
                            })]
                        })]
                    }), S.jsxs("main", {
                        className: "flex flex-1 overflow-hidden",
                        children: [S.jsxs("aside", {
                            className: "w-1/4 min-w-[280px] max-w-[384px] border-r flex flex-col overflow-y-auto bg-background",
                            children: [S.jsxs("div", {
                                className: "p-4 border-b space-y-4",
                                children: [S.jsxs("div", {
                                    className: "space-y-3",
                                    children: [S.jsx("h2", {
                                        className: "text-lg font-semibold",
                                        children: getTranslation("秩序效果增幅")
                                    }), S.jsxs("div", {
                                        className: "flex flex-col items-start gap-3 pl-2",
                                        children: [S.jsxs("div", {
                                            className: "flex flex-col items-start gap-1.5",
                                            children: [S.jsxs("div", {
                                                className: "flex items-center space-x-2",
                                                children: [S.jsx(Qa, {
                                                    id: "buff-antinomy",
                                                    checked: O,
                                                    onCheckedChange: j
                                                }), S.jsx(to, {
                                                    htmlFor: "buff-antinomy",
                                                    children: getTranslation("二律背反")
                                                })]
                                            }), O && S.jsxs("div", {
                                                className: "pl-8 w-full pr-4 pb-2",
                                                children: [S.jsxs("div", {
                                                    className: "text-xs text-muted-foreground mb-2",
                                                    children: [`${getTranslation("秩序值效果")} +`, ($ * 100).toFixed(0), "%"]
                                                }), S.jsx(Ew, {
                                                    value: [$],
                                                    onValueChange: W => I(W[0]),
                                                    min: .2,
                                                    max: .4,
                                                    step: .01
                                                })]
                                            })]
                                        }), S.jsxs("div", {
                                            className: "flex flex-col items-start gap-1.5",
                                            children: [S.jsxs("div", {
                                                className: "flex items-center space-x-2",
                                                children: [S.jsx(Qa, {
                                                    id: "buff2",
                                                    checked: T,
                                                    onCheckedChange: C
                                                }), S.jsx(to, {
                                                    htmlFor: "buff2",
                                                    children: getTranslation("双手序列")
                                                })]
                                            }), T && S.jsx("p", {
                                                className: "text-xs text-muted-foreground pl-8",
                                                children: `${getTranslation("秩序值效果")}+25%`
                                            })]
                                        }), S.jsxs("div", {
                                            className: "flex flex-col items-start gap-1.5",
                                            children: [S.jsxs("div", {
                                                className: "flex items-center space-x-2",
                                                children: [S.jsx(Qa, {
                                                    id: "buff3",
                                                    checked: E,
                                                    onCheckedChange: P
                                                }), S.jsx(to, {
                                                    htmlFor: "buff3",
                                                    children: getTranslation("群星定势")
                                                })]
                                            }), E && S.jsxs(Xw, {
                                                value: A,
                                                onValueChange: W => R(W),
                                                className: "pl-8 pt-1",
                                                children: [S.jsxs("div", {
                                                    className: "flex items-center space-x-2",
                                                    children: [S.jsx(Za, {
                                                        value: "unwa",
                                                        id: "r1"
                                                    }), S.jsx(to, {
                                                        htmlFor: "r1",
                                                        className: "text-xs font-normal",
                                                        children: getTranslation("未瓦（秩序值效果+50%）")
                                                    })]
                                                }), S.jsxs("div", {
                                                    className: "flex items-center space-x-2",
                                                    children: [S.jsx(Za, {
                                                        value: "singlewa",
                                                        id: "r2"
                                                    }), S.jsx(to, {
                                                        htmlFor: "r2",
                                                        className: "text-xs font-normal",
                                                        children: getTranslation("单瓦（秩序值效果+55%）")
                                                    })]
                                                }), S.jsxs("div", {
                                                    className: "flex items-center space-x-2",
                                                    children: [S.jsx(Za, {
                                                        value: "triplewa",
                                                        id: "r3"
                                                    }), S.jsx(to, {
                                                        htmlFor: "r3",
                                                        className: "text-xs font-normal",
                                                        children: getTranslation("双瓦（秩序值效果+60%）")
                                                    })]
                                                })]
                                            })]
                                        })]
                                    })]
                                }), S.jsx(Ja, {}), S.jsx("h2", {
                                    className: "text-lg font-semibold",
                                    children: getTranslation("石板库")
                                })]
                            }), S.jsx(Fk, {
                                onStoneClick: G
                            })]
                        }), S.jsxs("section", {
                            className: "flex-1 flex flex-col items-center justify-center p-4 bg-transparent relative",
                            onClick: le,
                            children: [o && S.jsx("div", {
                                className: "absolute top-4 left-1/2 -translate-x-1/2 w-full flex justify-center mt-[-2rem]",
                                children: S.jsx(ej, {
                                    words: Rv[e].text.split(" ").map(W => ({
                                        text: W,
                                        className: "text-white text-sm"
                                    })),
                                    cursorClassName: "bg-white"
                                }, e)
                            }), S.jsx("div", {
                                className: "w-[480px] h-[480px] relative",
                                children: S.jsx(NC, {
                                    stones: a,
                                    selectedStoneId: c,
                                    onSelectStone: Z,
                                    conflictingStoneIds: he,
                                    successfullyCopiedStoneIds: ce
                                })
                            }), S.jsx(jD, {
                                isVisible: !!c,
                                onMove: D
                            })]
                        }), S.jsxs("aside", {
                            className: "w-1/4 min-w-[280px] max-w-[384px] border-l flex flex-col overflow-y-auto bg-background",
                            children: [S.jsx("div", {
                                className: "flex-1 p-4 border-b",
                                children: S.jsx(fk, {
                                    selectedStone: ee,
                                    allStones: a,
                                    onRotate: z,
                                    onFlipH: se,
                                    onFlipV: ae,
                                    onRemove: () => ee && re(ee.id),
                                    onUpdateAttribute: H
                                })
                            }), S.jsx("div", {
                                className: "flex-1 p-4",
                                children: S.jsx(EC, {
                                    summary: Te,
                                    count: Me
                                })
                            }), S.jsx("div", {
                                className: "p-4 border-t",
                                children: S.jsx(Yt, {
                                    variant: "destructive",
                                    className: "w-full",
                                    onClick: Q,
                                    children: getTranslation("重置棋盘")
                                })
                            })]
                        })]
                    })]
                })
            })
        }), S.jsx(Aj, {
            open: g,
            onOpenChange: y,
            children: S.jsxs(j1, {
                children: [S.jsxs(O1, {
                    children: [S.jsx(I1, {
                        children: getTranslation("石板位置冲突")
                    }), S.jsxs(L1, {
                        children: [`${getTranslation("置入该石板会移除")} `, x?.conflictingIds.length || 0, ` ${getTranslation("块产生冲突的石板，仍要置入？")}`]
                    })]
                }), S.jsxs(_1, {
                    children: [S.jsx(F1, {
                        onClick: ne,
                        children: getTranslation("取消")
                    }), S.jsx(V1, {
                        onClick: J,
                        children: getTranslation("置入")
                    })]
                })]
            })
        })]
    })
}
Hb.createRoot(document.getElementById("root")).render(S.jsx(ie.StrictMode, {
    children: S.jsx(Nj, {})
}));
