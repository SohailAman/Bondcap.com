(window.webpackJsonp = window.webpackJsonp || []).push([
    [3], {
        GKVU: function(e, t, n) {
            "use strict";
            var i = n("I+eb"),
                s = n("hXpO");
            i({
                target: "String",
                proto: !0,
                forced: n("rwPt")("anchor")
            }, {
                anchor: function(e) {
                    return s(this, "a", "name", e)
                }
            })
        },
        TeQF: function(e, t, n) {
            "use strict";
            var i = n("I+eb"),
                s = n("tycR").filter;
            i({
                target: "Array",
                proto: !0,
                forced: !n("Hd5f")("filter")
            }, {
                filter: function(e) {
                    return s(this, e, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        },
        iyQ6: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("VTBJ"),
                s = (n("GKVU"), n("R5XZ"), n("oVuX"), n("TeQF"), {
                    computed: {
                        classes: function() {
                            return ["backlit-logo", this.isMobile ? "mobile" : ""].filter(Boolean).join(" ")
                        },
                        isMobile: function() {
                            return this.$device.isMobile || this.$device.isIOS || this.$device.isAndroid
                        }
                    },
                    methods: {
                        handleClick: function(e) {
                            e.stopImmediatePropagation(), fullpage_api.moveTo("landing"), document.documentElement.style.setProperty("--duration", "0s"), document.getElementsByTagName("body")[0].classList.remove("-add-opacity")
                        }
                    }
                }),
                a = n("KHd+"),
                o = Object(a.a)(s, (function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", {
                        class: this.classes
                    }, [t("svg", {
                        attrs: {
                            viewBox: "0 0 49 48",
                            xmlns: "http://www.w3.org/2000/svg",
                            "svg-inline": "",
                            role: "presentation",
                            focusable: "false",
                            tabindex: "-1"
                        },
                        on: {
                            click: this.handleClick
                        }
                    }, [t("path", {
                        attrs: {
                            d: "M2.783 12.482C.928 15.969 0 19.808 0 24c0 4.194.928 8.033 2.783 11.519 1.855 3.487 4.403 6.331 7.645 8.534 3.24 2.204 6.886 3.52 10.938 3.947v-1.604c-4.18-1.027-7.208-3.53-9.083-7.508C10.406 34.909 9.468 29.947 9.468 24c0-5.946.938-10.91 2.815-14.888 1.875-3.979 4.903-6.481 9.083-7.508V0c-4.052.428-7.699 1.744-10.938 3.947-3.242 2.204-5.79 5.048-7.645 8.535zm35.79-8.535C35.331 1.744 31.685.428 27.634 0v1.604c4.178 1.027 7.206 3.53 9.082 7.508 1.877 3.979 2.815 8.942 2.815 14.888 0 5.947-.938 10.91-2.815 14.888-1.876 3.978-4.904 6.481-9.082 7.508V48c4.05-.428 7.697-1.743 10.937-3.947 3.241-2.203 5.79-5.047 7.645-8.534C48.072 32.033 49 28.194 49 24c0-4.192-.928-8.031-2.783-11.518s-4.404-6.331-7.645-8.535z",
                            "fill-rule": "evenodd",
                            fill: "#111"
                        }
                    })])])
                }), [], !1, null, null, null).exports,
                r = [{
                    transform: "translateY(0)"
                }, {
                    transform: "translateY(calc(-100% + 100vh))"
                }],
                l = [{
                    transform: "translateY(0)"
                }, {
                    transform: "translateY(calc(-100% + 50vh))"
                }],
                c = [{
                    transform: "translateY(0)"
                }, {
                    transform: "translateY(calc(-100% + 50vh))"
                }],
                d = {
                    easing: "linear",
                    fill: "forwards",
                    iterations: "1"
                },
                m = {
                    duration: 138e3
                },
                v = {
                    duration: 92e3
                },
                g = {
                    duration: 7e4
                },
                h = {
                    components: {
                        BacklitLogo: o
                    },
                    data: function() {
                        return {
                            isActiveSlideScrollable: !1,
                            isIOS: !1,
                            isMobile: !1,
                            isGSA: !1,
                            options: {
                                afterLoad: this.afterLoad,
                                anchors: ["landing", "bond", "investments", "trends", "internettrends", "specialreports", "partnership", "partners", "contact"],
                                animateAnchor: !1,
                                fixedElements: ".-fixed-section",
                                licenseKey: "EBF17167-14174588-B38770A2-E0BA3F36",
                                onLeave: this.onLeave,
                                scrollOverflow: !0,
                                scrollOverflowReset: !0,
                                scrollOverflowResetKey: "Ym9uZGNhcC5jb21fcjBFYzJOeWIyeHNUM1psY21ac2IzZFNaWE5sZEE9PWJZUw==",
                                scrollingSpeed: 1e3
                            }
                        }
                    },
                    methods: {
                        afterLoad: function(e, t, n) {
                            var s = this,
                                a = document.getElementsByClassName("footer-" + t.anchor),
                                o = fullpage_api.getActiveSection().anchor;
                            a[0].addEventListener("click", (function(e) {
                                return s.footer_nav_click(e, t.anchor)
                            }), {
                                once: !0
                            }), document.getElementsByClassName("contact-logotype")[0].addEventListener("click", (function(e) {
                                return s.footer_logo_click(e, t.anchor)
                            }), {
                                once: !0
                            });
                            var h = window.innerWidth / window.innerHeight > 1.78,
                                p = document.getElementById("investment-scroll__list");
                            this.isMobile && (document.getElementById("investment-scroll-wrapper").style.height = "auto");
                            var u = function() {
                                var e = !s.isMobile && window.innerWidth < 1200,
                                    t = !s.isMobile && (window.innerWidth >= 1200 && window.innerWidth < 1848 && !h || window.innerWidth >= 992 && window.innerWidth < 1247 && window.innerHeight < 974),
                                    n = !s.isMobile && (window.innerWidth >= 1200 && window.innerWidth < 1848 && h || window.innerWidth >= 1848);
                                if (e) var a = Object(i.a)(Object(i.a)({}, d), m),
                                    o = r;
                                else if (t) a = Object(i.a)(Object(i.a)({}, d), v), o = l;
                                else if (n) a = Object(i.a)(Object(i.a)({}, d), g), o = c;
                                s.isMobile ? (p = document.getElementById("investment-scroll__list")).animate({}).pause() : p = document.getElementById("investment-scroll__list").animate(o, a)
                            };
                            "investments" === o ? (u(), this.isMobile || window.addEventListener("resize", (function() {
                                u()
                            }))) : p.animate({}).cancel(), "landing" === t.anchor ? (document.getElementsByTagName("body")[0].classList.remove("-add-opacity"), document.getElementsByClassName("js-logotype")[0].classList.remove("animate")) : "landing" === e.anchor && "down" === n ? document.getElementsByTagName("body")[0].classList.add("-add-opacity") : "contact" === e.anchor && document.getElementsByClassName("js-logotype")[0].classList.remove("animate")
                        },
                        footer_logo_click: function(e, t) {
                            e.stopImmediatePropagation(), fullpage_api.moveTo("landing"), document.getElementsByTagName("body")[0].classList.remove("-add-opacity"), setTimeout((function() {
                                document.getElementsByClassName("js-logotype")[0].classList.remove("animate")
                            }), 500), document.documentElement.style.setProperty("--duration", "0s")
                        },
                        footer_nav_click: function(e, t) {
                            if (e.stopImmediatePropagation(), "contact" === t) fullpage_api.moveTo("landing"), document.getElementsByTagName("body")[0].classList.remove("-add-opacity"), setTimeout((function() {
                                document.getElementsByClassName("js-logotype")[0].classList.remove("animate")
                            }), 500);
                            else {
                                var n = new KeyboardEvent("keydown", {
                                    bubbles: !0,
                                    cancelable: !0,
                                    keyCode: 40
                                });
                                document.body.dispatchEvent(n)
                            }
                            document.documentElement.style.setProperty("--duration", "0s")
                        },
                        onLeave: function(e, t, n) {
                            this.setIsActiveSlideScrollable(t);
                            var s = document.documentElement,
                                a = e.item.style.getPropertyValue("--slideIndex");
                            0 != t.index && t.index != document.querySelectorAll(".slide").length - 1 ? s.style.setProperty("--slidep", t.index) : (s.style.setProperty("--slidep", a), s.style.setProperty("--duration", "0s")), 0 != e.index && s.style.setProperty("--duration", "1s");
                            var o = document.getElementsByTagName("body")[0];
                            "up" == n ? (o.classList.remove("-scroll-direction-down"), o.classList.add("-scroll-direction-up"), t.item.style.setProperty("z-index", 2), e.item.style.setProperty("z-index", 1)) : (o.classList.remove("-scroll-direction-up"), o.classList.add("-scroll-direction-down"), e.item.style.setProperty("z-index", 1), t.item.style.setProperty("z-index", 0), setTimeout((function() {
                                t.item.style.setProperty("z-index", 2)
                            }), 700));
                            var h = window.innerWidth / window.innerHeight > 1.78,
                                p = !this.isMobile && window.innerWidth < 1200,
                                u = !this.isMobile && (window.innerWidth >= 1200 && window.innerWidth < 1848 && !h || window.innerWidth >= 992 && window.innerWidth < 1247 && window.innerHeight < 974),
                                w = !this.isMobile && (window.innerWidth >= 1200 && window.innerWidth < 1848 && h || window.innerWidth >= 1848);
                            if (p) var f = Object(i.a)(Object(i.a)({}, d), m),
                                y = r;
                            else if (u) f = Object(i.a)(Object(i.a)({}, d), v), y = l;
                            else if (w) f = Object(i.a)(Object(i.a)({}, d), g), y = c;
                            !this.isMobile && window.innerWidth >= 992 && document.getElementById("investment-scroll__list").animate(y, f).pause();
                            "landing" === e.anchor ? document.getElementsByClassName("js-logotype")[0].classList.add("animate") : "bond" === e.anchor && "up" === n && (document.getElementsByClassName("js-logotype")[0].classList.remove("animate"), document.getElementsByTagName("body")[0].classList.remove("-add-opacity"))
                        },
                        setIsActiveSlideScrollable: function(e) {
                            var t = e.item.firstChild.lastChild;
                            this.isActiveSlideScrollable = t.classList.contains("fp-scrollable") || t.classList.contains("footer-investments");
                            var n = document.getElementsByTagName("body")[0].classList;
                            this.isActiveSlideScrollable ? (n.add("-active-slide-scrollable"), "investments" === e.anchor ? n.add("-active-investments") : "internettrends" === e.anchor || "specialreports" === e.anchor ? n.add("-active-reports") : "partners" === e.anchor && n.add("-active-partners")) : (n.remove("-active-slide-scrollable", "-active-investments", "-active-reports", "-active-partners"), "investments" !== e.anchor ? n.add("-active-investments") : "internettrends" !== e.anchor || "specialreports" !== e.anchor ? n.add("-active-reports") : "partners" !== e.anchor && n.add("-active-partners"))
                        },
                        slideIndexModel: function(e, t) {
                            return e == t - 1 || 0 == e ? 100 : e
                        }
                    },
                    mounted: function() {
                        var e = document.getElementsByTagName("body")[0];
                        e.classList.add("-add-opacity"), e.classList.add("-scroll-direction-down"), document.documentElement.style.setProperty("--duration", "1s"), (this.$device.isMobile || this.$device.isIOS || this.$device.isAndroid) && (this.isMobile = !0), this.$device.isIOS && (this.isIOS = !0), "Google Search App" === this.$device.browser_name && (this.isGSA = !0);
                        var t = document.getElementById("back");
                        t && t.remove();
                        var n = document.getElementsByClassName("-fixed-section");
                        n.length && n[0].remove(), this.isMobile ? window && this.isIOS && window.addEventListener("orientationchange", (function() {
                            var e = document.getElementsByTagName("html")[0];
                            screen.orientation;
                            e.style.height = "100vh", fullpage_api.reBuild()
                        })) : window && window.addEventListener("orientationchange", (function() {
                            var e = window.innerWidth / window.innerHeight > 1.78,
                                t = !this.isMobile && window.innerWidth >= 992 && window.innerWidth < 1247 && window.innerHeight >= 974,
                                n = !this.isMobile && (window.innerWidth >= 1247 && window.innerWidth < 1848 && !e || window.innerWidth >= 992 && window.innerWidth < 1247 && window.innerHeight < 974),
                                s = !this.isMobile && (window.innerWidth >= 1247 && window.innerWidth < 1848 && e || indow.innerWidth >= 1848);
                            if (t) var a = Object(i.a)(Object(i.a)({}, d), m),
                                o = r;
                            else if (n) a = Object(i.a)(Object(i.a)({}, d), v), o = l;
                            else if (s) a = Object(i.a)(Object(i.a)({}, d), g), o = c;
                            document.getElementById("investment-scroll__list").animate(o, a).pause(), fullpage_api.reBuild()
                        }))
                    }
                };
            setTimeout((function() {
                fullpage_api.reBuild()
            }), 500);
            var p = h,
                u = null,
                w = Object(a.a)(p, (function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("Layout", [n("ClientOnly", [n("BacklitLogo"), n("full-page", {
                        ref: "fullpage",
                        attrs: {
                            options: e.options,
                            id: "fullpage"
                        }
                    }, e._l(e.$page.slides.edges, (function(t, i) {
                        return n("div", {
                            staticClass: "section",
                            class: "slide slide-" + t.node.type + " slide-" + t.node.anchor,
                            style: {
                                "--slideIndex": e.slideIndexModel(i, e.$page.slides.edges.length)
                            },
                            attrs: {
                                "data-anchor": t.node.anchor
                            }
                        }, ["landing" === t.node.type ? n("div", {
                            staticClass: "slide-content landing-bg -fixed-section"
                        }, [n("div", {
                            staticClass: "logotype js-logotype",
                            class: {
                                animate: "landing" !== t.node.type
                            }
                        }, [n("svg", {
                            class: {
                                "ios-gsa-fix-landing": e.isGSA && e.isIOS
                            },
                            attrs: {
                                viewBox: "0 0 297 72",
                                xmlns: "http://www.w3.org/2000/svg",
                                "svg-inline": "",
                                role: "presentation",
                                focusable: "false",
                                tabindex: "-1"
                            }
                        }, [n("path", {
                            attrs: {
                                d: "M75.128 18.722C72.33 23.953 70.931 29.712 70.931 36c0 6.29 1.4 12.049 4.197 17.278 2.798 5.231 6.641 9.498 11.531 12.802 4.887 3.305 10.387 5.278 16.5 5.92v-2.407c-6.306-1.54-10.873-5.294-13.702-11.261-2.83-5.968-4.246-13.412-4.246-22.332 0-8.919 1.415-16.364 4.246-22.332 2.829-5.968 7.396-9.722 13.701-11.261V0C97.046.642 91.546 2.615 86.66 5.92c-4.89 3.306-8.733 7.572-11.53 12.802zm122.49-14.776h2.412c.707 0 1.656.42 2.847 1.252a13.63 13.63 0 013.088 2.984c.868 1.155 1.302 2.151 1.302 2.984v33.882h-.482L171.18 1.06h-19.587v2.887h1.448c.641 0 1.462.42 2.46 1.252.996.834 1.882 1.83 2.653 2.984.772 1.155 1.158 2.151 1.158 2.984v50.823c0 .707-.386 1.557-1.158 2.552a13.474 13.474 0 01-2.653 2.598c-.998.739-1.819 1.107-2.46 1.107h-1.448v2.888h21.71v-2.888h-2.412c-.71 0-1.658-.416-2.847-1.251a13.542 13.542 0 01-3.088-2.984c-.868-1.156-1.302-2.15-1.302-2.984V13.572h.482l46.99 58.235h.483V11.166c0-.833.433-1.83 1.301-2.984A13.577 13.577 0 01216 5.198c1.189-.833 2.137-1.252 2.845-1.252h1.448V1.06h-22.675v2.887zm79.94 55.204c-3.7 6.064-9.214 9.096-16.548 9.096h-9.84v-64.3h9.454c4.953 0 9.118 1.43 12.496 4.284 3.377 2.856 5.885 6.706 7.526 11.55 1.639 4.847 2.46 10.285 2.46 16.317 0 9.304-1.85 16.989-5.549 23.053zm14.328-41.39c-3.41-5.295-7.832-9.4-13.267-12.321-5.436-2.92-11.112-4.38-17.03-4.38H229.94v2.887h1.447c.642 0 1.463.37 2.461 1.107.996.74 1.88 1.606 2.654 2.6.772.995 1.158 1.845 1.158 2.551v51.785c0 .707-.386 1.557-1.158 2.552a13.534 13.534 0 01-2.654 2.598c-.998.739-1.819 1.107-2.461 1.107h-1.447v2.888h32.034c6.045 0 11.755-1.54 17.127-4.62 5.37-3.08 9.696-7.317 12.977-12.707C295.36 48.417 297 42.45 297 35.904c0-6.802-1.705-12.85-5.114-18.144zM129.112 5.92C124.224 2.616 118.724.643 112.614 0v2.407c6.303 1.54 10.87 5.293 13.7 11.261 2.83 5.968 4.246 13.413 4.246 22.332 0 8.92-1.416 16.364-4.246 22.332-2.83 5.967-7.397 9.722-13.7 11.261V72c6.11-.642 11.61-2.615 16.498-5.92 4.889-3.304 8.733-7.57 11.531-12.802 2.798-5.23 4.198-10.988 4.198-17.278 0-6.287-1.4-12.047-4.198-17.278-2.798-5.23-6.642-9.496-11.53-12.801zm-86.61 57.994c-2.927 2.888-6.964 4.332-12.11 4.332h-9.165V35.904h10.42c4.695 0 8.41 1.38 11.145 4.139 2.733 2.76 4.1 6.642 4.1 11.647 0 5.263-1.463 9.337-4.39 12.224zM21.227 3.946h8.49c3.923 0 7.124 1.396 9.601 4.188 2.477 2.791 3.715 6.4 3.715 10.83 0 4.235-.933 7.475-2.798 9.72-1.867 2.248-4.954 3.692-9.263 4.332h-9.745V3.946zM54.853 39.37c-3.7-2.758-8.443-4.587-14.232-5.486V33.4c4.566-1.025 8.2-2.855 10.903-5.486 2.702-2.63 4.053-5.968 4.053-10.012 0-5.582-2.398-9.784-7.19-12.609C43.596 2.471 37.438 1.06 29.91 1.06H0v2.887h1.447c.642 0 1.462.37 2.46 1.107.997.74 1.882 1.606 2.653 2.6.772.995 1.159 1.845 1.159 2.551v51.785c0 .707-.387 1.557-1.159 2.552a13.474 13.474 0 01-2.653 2.598c-.998.739-1.818 1.107-2.46 1.107H0v2.888h30.49c9.132 0 16.402-1.732 21.805-5.198 5.404-3.465 8.106-8.278 8.106-14.439 0-5.325-1.85-9.368-5.548-12.128z",
                                fill: "#000",
                                "fill-rule": "evenodd"
                            }
                        })])])]) : e._e(), "closing" === t.node.type ? n("div", {
                            staticClass: "slide-content"
                        }, [n("div", {
                            staticClass: "logotype contact-logotype"
                        }, [n("svg", {
                            attrs: {
                                viewBox: "0 0 297 72",
                                xmlns: "http://www.w3.org/2000/svg",
                                "svg-inline": "",
                                role: "presentation",
                                focusable: "false",
                                tabindex: "-1"
                            }
                        }, [n("path", {
                            attrs: {
                                d: "M75.128 18.722C72.33 23.953 70.931 29.712 70.931 36c0 6.29 1.4 12.049 4.197 17.278 2.798 5.231 6.641 9.498 11.531 12.802 4.887 3.305 10.387 5.278 16.5 5.92v-2.407c-6.306-1.54-10.873-5.294-13.702-11.261-2.83-5.968-4.246-13.412-4.246-22.332 0-8.919 1.415-16.364 4.246-22.332 2.829-5.968 7.396-9.722 13.701-11.261V0C97.046.642 91.546 2.615 86.66 5.92c-4.89 3.306-8.733 7.572-11.53 12.802zm122.49-14.776h2.412c.707 0 1.656.42 2.847 1.252a13.63 13.63 0 013.088 2.984c.868 1.155 1.302 2.151 1.302 2.984v33.882h-.482L171.18 1.06h-19.587v2.887h1.448c.641 0 1.462.42 2.46 1.252.996.834 1.882 1.83 2.653 2.984.772 1.155 1.158 2.151 1.158 2.984v50.823c0 .707-.386 1.557-1.158 2.552a13.474 13.474 0 01-2.653 2.598c-.998.739-1.819 1.107-2.46 1.107h-1.448v2.888h21.71v-2.888h-2.412c-.71 0-1.658-.416-2.847-1.251a13.542 13.542 0 01-3.088-2.984c-.868-1.156-1.302-2.15-1.302-2.984V13.572h.482l46.99 58.235h.483V11.166c0-.833.433-1.83 1.301-2.984A13.577 13.577 0 01216 5.198c1.189-.833 2.137-1.252 2.845-1.252h1.448V1.06h-22.675v2.887zm79.94 55.204c-3.7 6.064-9.214 9.096-16.548 9.096h-9.84v-64.3h9.454c4.953 0 9.118 1.43 12.496 4.284 3.377 2.856 5.885 6.706 7.526 11.55 1.639 4.847 2.46 10.285 2.46 16.317 0 9.304-1.85 16.989-5.549 23.053zm14.328-41.39c-3.41-5.295-7.832-9.4-13.267-12.321-5.436-2.92-11.112-4.38-17.03-4.38H229.94v2.887h1.447c.642 0 1.463.37 2.461 1.107.996.74 1.88 1.606 2.654 2.6.772.995 1.158 1.845 1.158 2.551v51.785c0 .707-.386 1.557-1.158 2.552a13.534 13.534 0 01-2.654 2.598c-.998.739-1.819 1.107-2.461 1.107h-1.447v2.888h32.034c6.045 0 11.755-1.54 17.127-4.62 5.37-3.08 9.696-7.317 12.977-12.707C295.36 48.417 297 42.45 297 35.904c0-6.802-1.705-12.85-5.114-18.144zM129.112 5.92C124.224 2.616 118.724.643 112.614 0v2.407c6.303 1.54 10.87 5.293 13.7 11.261 2.83 5.968 4.246 13.413 4.246 22.332 0 8.92-1.416 16.364-4.246 22.332-2.83 5.967-7.397 9.722-13.7 11.261V72c6.11-.642 11.61-2.615 16.498-5.92 4.889-3.304 8.733-7.57 11.531-12.802 2.798-5.23 4.198-10.988 4.198-17.278 0-6.287-1.4-12.047-4.198-17.278-2.798-5.23-6.642-9.496-11.53-12.801zm-86.61 57.994c-2.927 2.888-6.964 4.332-12.11 4.332h-9.165V35.904h10.42c4.695 0 8.41 1.38 11.145 4.139 2.733 2.76 4.1 6.642 4.1 11.647 0 5.263-1.463 9.337-4.39 12.224zM21.227 3.946h8.49c3.923 0 7.124 1.396 9.601 4.188 2.477 2.791 3.715 6.4 3.715 10.83 0 4.235-.933 7.475-2.798 9.72-1.867 2.248-4.954 3.692-9.263 4.332h-9.745V3.946zM54.853 39.37c-3.7-2.758-8.443-4.587-14.232-5.486V33.4c4.566-1.025 8.2-2.855 10.903-5.486 2.702-2.63 4.053-5.968 4.053-10.012 0-5.582-2.398-9.784-7.19-12.609C43.596 2.471 37.438 1.06 29.91 1.06H0v2.887h1.447c.642 0 1.462.37 2.46 1.107.997.74 1.882 1.606 2.653 2.6.772.995 1.159 1.845 1.159 2.551v51.785c0 .707-.387 1.557-1.159 2.552a13.474 13.474 0 01-2.653 2.598c-.998.739-1.818 1.107-2.46 1.107H0v2.888h30.49c9.132 0 16.402-1.732 21.805-5.198 5.404-3.465 8.106-8.278 8.106-14.439 0-5.325-1.85-9.368-5.548-12.128z",
                                fill: "#000",
                                "fill-rule": "evenodd"
                            }
                        })])]), "closing" === t.node.type ? n("div", {
                            directives: [{
                                name: "g-image",
                                rawName: "v-g-image"
                            }],
                            domProps: {
                                innerHTML: e._s(t.node.content)
                            }
                        }) : e._e()]) : "investments" === t.node.type ? n("div", {
                            staticClass: "slide-content"
                        }, [n("h2", {
                            staticClass: "title-page"
                        }, [e._v("Our Investments")]), e.isMobile ? n("div", [n("div", {
                            staticClass: "vertical-scroll-wrapper",
                            attrs: {
                                id: "investment-scroll-wrapper"
                            }
                        }, [n("ul", {
                            staticClass: "vertical-scroll",
                            attrs: {
                                id: "investment-scroll__list"
                            }
                        }, e._l(e.$page.investments_featured.edges, (function(t) {
                            return n("li", [t.node.url ? n("a", {
                                directives: [{
                                    name: "g-image",
                                    rawName: "v-g-image"
                                }],
                                attrs: {
                                    target: "_blank",
                                    href: t.node.url
                                },
                                domProps: {
                                    innerHTML: e._s(t.node.content)
                                }
                            }) : n("a", {
                                directives: [{
                                    name: "g-image",
                                    rawName: "v-g-image"
                                }],
                                staticStyle: {
                                    "pointer-events": "none"
                                },
                                domProps: {
                                    innerHTML: e._s(t.node.content)
                                }
                            })])
                        })), 0)])]) : n("div", {
                            staticClass: "scroll-wrapper-wrapper"
                        }, [n("div", {
                            staticClass: "vertical-scroll-wrapper",
                            attrs: {
                                id: "investment-scroll-wrapper"
                            }
                        }, [n("ul", {
                            staticClass: "vertical-scroll",
                            attrs: {
                                id: "investment-scroll__list"
                            }
                        }, [e._l(e.$page.investments_featured.edges, (function(t) {
                            return n("a", {
                                attrs: {
                                    target: "_blank",
                                    href: t.node.url
                                }
                            }, [n("li", {
                                directives: [{
                                    name: "g-image",
                                    rawName: "v-g-image"
                                }],
                                domProps: {
                                    innerHTML: e._s(t.node.content)
                                }
                            })])
                        })), e._l(e.$page.investments_featured.edges, (function(t) {
                            return n("a", {
                                attrs: {
                                    target: "_blank",
                                    href: t.node.url
                                }
                            }, [n("li", {
                                directives: [{
                                    name: "g-image",
                                    rawName: "v-g-image"
                                }],
                                domProps: {
                                    innerHTML: e._s(t.node.content)
                                }
                            })])
                        })), e._l(e.$page.investments_featured.edges, (function(t) {
                            return n("a", {
                                attrs: {
                                    target: "_blank",
                                    href: t.node.url
                                }
                            }, [n("li", {
                                directives: [{
                                    name: "g-image",
                                    rawName: "v-g-image"
                                }],
                                domProps: {
                                    innerHTML: e._s(t.node.content)
                                }
                            })])
                        })), e._l(e.$page.investments_featured.edges, (function(t) {
                            return n("a", {
                                attrs: {
                                    target: "_blank",
                                    href: t.node.url
                                }
                            }, [n("li", {
                                directives: [{
                                    name: "g-image",
                                    rawName: "v-g-image"
                                }],
                                domProps: {
                                    innerHTML: e._s(t.node.content)
                                }
                            })])
                        })), e._l(e.$page.investments_featured.edges, (function(t) {
                            return n("a", {
                                attrs: {
                                    target: "_blank",
                                    href: t.node.url
                                }
                            }, [n("li", {
                                directives: [{
                                    name: "g-image",
                                    rawName: "v-g-image"
                                }],
                                domProps: {
                                    innerHTML: e._s(t.node.content)
                                }
                            })])
                        }))], 2)])]), n("p", [n("a", {
                            attrs: {
                                href: "/investments"
                            }
                        }, [e._v("View All")])]), n("p", {
                            staticStyle: {
                                "margin-bottom": "10vh"
                            }
                        }, [e._v(" ")])]) : "reports" === t.node.type ? n("div", {
                            staticClass: "slide-content"
                        }, ["internettrends" === t.node.anchor ? n("div", [n("h2", {
                            staticClass: "title-section internet-trends"
                        }, [e._v("Internet Trends")]), n("ul", e._l(e.$page.reports_yearly.edges, (function(t) {
                            return n("li", [2019 === t.node.year || 1995 === t.node.year ? n("a", {
                                attrs: {
                                    href: "/reports/" + t.node.slug + "?return=internettrends"
                                }
                            }, [e._v(e._s(t.node.year) + "\n                ")]) : n("a", {
                                attrs: {
                                    href: "/reports/" + t.node.slug + "?return=internettrends"
                                }
                            }, [e._v(e._s("’" + String(t.node.year).substring(2, 4)))])])
                        })), 0)]) : e._e(), "specialreports" === t.node.anchor ? n("div", [n("h2", {
                            staticClass: "title-section special-reports"
                        }, [e._v("Special Reports")]), n("ul", e._l(e.$page.reports_special.edges, (function(t) {
                            return n("li", {
                                staticClass: "reports-special"
                            }, [n("a", {
                                attrs: {
                                    href: "/reports/" + t.node.slug + "?return=specialreports"
                                }
                            }, [e._v(e._s(t.node.display))])])
                        })), 0)]) : e._e(), n("p", {
                            staticStyle: {
                                "margin-bottom": "10vh"
                            }
                        }, [e._v(" ")])]) : "partners" === t.node.type ? n("div", {
                            staticClass: "slide-content"
                        }, [n("h2", {
                            staticClass: "title-section"
                        }, [e._v("Partners")]), n("ul", {
                            class: {
                                "ios-gsa-fix-partners": e.isGSA && e.isIOS
                            }
                        }, e._l(e.$page.partners.edges, (function(t) {
                            return n("li", [n("a", {
                                attrs: {
                                    href: "/partners/" + t.node.slug.replace(/_/g, "-")
                                }
                            }, [n("div", {
                                style: "background-image: url(/assets/img/partners/directory/" + t.node.slug + ".png)"
                            }, [n("p", [n("span", [e._v(e._s(t.node.name))])])])])])
                        })), 0)]) : n("div", {
                            staticClass: "slide-content"
                        }, [n("div", {
                            directives: [{
                                name: "g-image",
                                rawName: "v-g-image"
                            }],
                            domProps: {
                                innerHTML: e._s(t.node.content)
                            }
                        })]), n("div", {
                            class: "footer footer-" + t.node.anchor
                        }, [n("svg", {
                            attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 50 14",
                                width: "50",
                                height: "14",
                                "svg-inline": "",
                                role: "presentation",
                                focusable: "false",
                                tabindex: "-1"
                            }
                        }, [n("path", {
                            attrs: {
                                d: "M0 1l25 11L49 1",
                                "stroke-width": "1.5",
                                fill: "none",
                                stroke: "#000"
                            }
                        })])])])
                    })), 0)], 1)], 1)
                }), [], !1, null, null, null);
            "function" == typeof u && u(w);
            t.default = w.exports
        }
    }
]);