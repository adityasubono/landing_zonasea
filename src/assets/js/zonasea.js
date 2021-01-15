(function (t) {
    function a(a) {
        for (var s, r, o = a[0], l = a[1], c = a[2], m = 0, u = []; m < o.length; m++) r = o[m], Object.prototype.hasOwnProperty.call(i, r) && i[r] && u.push(i[r][0]), i[r] = 0;
        for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (t[s] = l[s]);
        d && d(a);
        while (u.length) u.shift()();
        return n.push.apply(n, c || []), e()
    }

    function e() {
        for (var t, a = 0; a < n.length; a++) {
            for (var e = n[a], s = !0, o = 1; o < e.length; o++) {
                var l = e[o];
                0 !== i[l] && (s = !1)
            }
            s && (n.splice(a--, 1), t = r(r.s = e[0]))
        }
        return t
    }

    var s = {}, i = {app: 0}, n = [];

    function r(a) {
        if (s[a]) return s[a].exports;
        var e = s[a] = {i: a, l: !1, exports: {}};
        return t[a].call(e.exports, e, e.exports, r), e.l = !0, e.exports
    }

    r.m = t, r.c = s, r.d = function (t, a, e) {
        r.o(t, a) || Object.defineProperty(t, a, {enumerable: !0, get: e})
    }, r.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, r.t = function (t, a) {
        if (1 & a && (t = r(t)), 8 & a) return t;
        if (4 & a && "object" === typeof t && t && t.__esModule) return t;
        var e = Object.create(null);
        if (r.r(e), Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        }), 2 & a && "string" != typeof t) for (var s in t) r.d(e, s, function (a) {
            return t[a]
        }.bind(null, s));
        return e
    }, r.n = function (t) {
        var a = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return r.d(a, "a", a), a
    }, r.o = function (t, a) {
        return Object.prototype.hasOwnProperty.call(t, a)
    }, r.p = "/";
    var o = window["webpackJsonp"] = window["webpackJsonp"] || [], l = o.push.bind(o);
    o.push = a, o = o.slice();
    for (var c = 0; c < o.length; c++) a(o[c]);
    var d = l;
    n.push([0, "chunk-vendors"]), e()
})({
    0: function (t, a, e) {
        t.exports = e("56d7")
    }, "2b77": function (t, a, e) {
        "use strict";
        var s = e("41d2"), i = e.n(s);
        i.a
    }, "41d2": function (t, a, e) {
    }, "537b": function (t, a, e) {
    }, "56d7": function (t, a, e) {
        "use strict";
        e.r(a);
        e("e260"), e("e6cf"), e("cca6"), e("a79d");
        var s = e("2b0e"), i = e("58ca"), n = function () {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", {attrs: {id: "app"}}, [e("router-view")], 1)
            }, r = [], o = {name: "App"}, l = o, c = e("2877"), d = Object(c["a"])(l, n, r, !1, null, null, null),
            m = d.exports,
            u = (e("7db0"), e("4160"), e("a630"), e("d81d"), e("fb6a"), e("b64b"), e("3ca3"), e("159b"), e("8c4f")),
            p = function () {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", {attrs: {id: "homepage"}}, [e("Navbar"), e("Iklan"), e("Benefit"), e("Work"), e("Footer"), e("ModalLogin"), e("ModalRegister"), e("Fab")], 1)
            }, g = [], f = function () {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", {attrs: {id: "navbar"}}, [e("nav", {staticClass: "navbar navbar-expand-lg navbar-light"}, [t._m(0), t._m(1), e("div", {
                    staticClass: "collapse navbar-collapse",
                    attrs: {id: "navbarTogglerDemo02"}
                }, [e("ul", {staticClass: "navbar-nav ml-auto mt-2 mt-lg-0"}, [t._l(t.links, (function (a, s) {
                    return e("li", {key: s, staticClass: "nav-item p-2"}, [e("a", {
                        directives: [{
                            name: "smooth-scroll",
                            rawName: "v-smooth-scroll"
                        }], staticClass: "nav-link", attrs: {href: a.href}
                    }, [t._v(t._s(a.text))])])
                })), t._m(2), t._m(3)], 2)])])])
            }, v = [function () {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("a", {staticClass: "navbar-brand", attrs: {href: "#"}}, [e("img", {
                    staticClass: "logo-zonasea",
                    attrs: {src: "/images/logo.png", alt: "logo zonasea"}
                })])
            }, function () {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("button", {
                    staticClass: "navbar-toggler",
                    attrs: {
                        type: "button",
                        "data-toggle": "collapse",
                        "data-target": "#navbarTogglerDemo02",
                        "aria-controls": "navbarTogglerDemo02",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation"
                    }
                }, [e("span", {staticClass: "navbar-toggler-icon"})])
            }, function () {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("li", {staticClass: "nav-item p-2"}, [e("button", {
                    staticClass: "btn btn-outline-primary pl-4 pr-4",
                    attrs: {"data-toggle": "modal", "data-target": "#modalLogin"}
                }, [t._v(" Login ")])])
            }, function () {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("li", {staticClass: "nav-item p-2"}, [e("button", {
                    staticClass: "btn btn-primary",
                    attrs: {"data-toggle": "modal", "data-target": "#modalRegister"}
                }, [t._v(" Register ")])])
            }], b = {
                name: "navbar", data: function () {
                    return {
                        links: [{text: "Benefit", href: "#benefit"}, {
                            text: "Cara Kerja",
                            href: "#carakerja"
                        }, {text: "Tentang Kami", href: "#about"}]
                    }
                }
            }, h = b, C = Object(c["a"])(h, f, v, !1, null, null, null), k = C.exports, y = function () {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", {staticClass: "iklan"}, [e("div", {staticClass: "content-iklan"}, [e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-6 d-flex flex-column justify-content-center leftside"}, [e("div", {staticClass: "title-iklan"}, [t._v(t._s(t.title))]), e("span", {staticClass: "text-iklan"}, [t._v(t._s(t.description))]), e("button", {
                    staticClass: "btn btn-iklan mt-5",
                    attrs: {"data-toggle": "modal", "data-target": "#modalRegister"}
                }, [t._v(" Coba 7 hari gratis ")])]), t._m(0)])])])
            }, _ = [function () {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", {staticClass: "col-md-6 text-center d-flex align-items-center justify-content-center"}, [e("img", {
                    staticClass: "dashboard-card",
                    attrs: {src: "images/dashboard_pic.png", alt: "dashboard"}
                })])
            }], w = {
                data: function () {
                    return {
                        title: "Zonasea - Platform Perkapalan Terpercaya di Indonesia",
                        description: "Menghubungkan langsung pemilik kapal tug boat, tongkang, tanker, bulk carrier dengan pemilik muatan sawit, batu bara, nikel, solar dan lainnya."
                    }
                }
            }, $ = w, x = Object(c["a"])($, y, _, !1, null, null, null), R = x.exports, T = function () {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", {staticClass: "fab-group"}, [e("a", {attrs: {href: t.email}}, [t._m(0)]), e("a", {attrs: {href: t.whatsapp}}, [t._m(1)])])
            }, A = [function () {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", {staticClass: "fab-item bg-warning text-white"}, [e("i", {staticClass: "fas fa-envelope fa-2x"})])
            }, function () {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", {staticClass: "fab-item bg-success text-white"}, [e("i", {staticClass: "fab fa-whatsapp fa-2x"})])
            }], E = {
                data: function () {
                    return {
                        email: "mailto:sales@zonasea.com?cc=muara@zonasea.com&subject=Tertarik Dengan Aplikasi Zonasea&body=Halo,%0A%0ASaya tertarik menggunakan aplikasi Zonasea. Tolong hubungi saya kembali ya.%0A%0ATerimakasih.",
                        whatsapp: "https://api.whatsapp.com/send?phone=+6288226622240&text=Halo, saya tertarik untuk menggunakan aplikasi Zonasea, tolong hubungi saya kembali ya. Terima kasih"
                    }
                }
            }, O = E, S = (e("689c"), Object(c["a"])(O, T, A, !1, null, "24f1f866", null)), P = S.exports, j = function () {
                var t = this, a = t.$createElement;
                t._self._c;
                return t._m(0)
            }, L = [function () {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", {
                    staticClass: "rows benefit",
                    attrs: {id: "benefit"}
                }, [e("p", {staticClass: "title-section"}, [t._v("Benefit Zonasea")]), e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-4 mb-5"}, [e("img", {
                    staticClass: "img-benefit",
                    attrs: {src: "/icons/icon-noperantara.png", alt: "icon tanpa perantara"}
                }), e("div", {staticClass: "title-benefit"}, [t._v("Tanpa Perantara")]), e("div", {staticClass: "desc-benefit"}, [t._v(" Kami bekerja sama langsung dengan sejumlah pabrik terbesar di Indonesia ")])]), e("div", {staticClass: "col-md-4 mb-5"}, [e("img", {
                    staticClass: "img-benefit",
                    attrs: {src: "/icons/icon_planing2.png", alt: "icon planning otomatis"}
                }), e("div", {staticClass: "title-benefit"}, [t._v("Planning Secara Otomatis")]), e("div", {staticClass: "desc-benefit"}, [t._v(" Algoritma kami dapat menghitung rute terbaik untuk kapal anda secara otomatis dalam hitungan DETIK. ")])]), e("div", {staticClass: "col-md-4 mb-5"}, [e("img", {
                    staticClass: "img-benefit",
                    attrs: {src: "/icons/icon-akurat2.png", alt: "icon akurat persisi"}
                }), e("div", {staticClass: "title-benefit"}, [t._v("Akurat dan Presisi")]), e("div", {staticClass: "desc-benefit"}, [t._v(" Memberikan informasi muatan terbaru seesuai dengan jenis & kapasitas kapal ")])])])])
            }], M = {}, N = M, U = Object(c["a"])(N, j, L, !1, null, null, null), H = U.exports, I = function () {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", {
                    staticClass: "rows",
                    attrs: {id: "carakerja"}
                }, [e("Video-Youtube"), e("p", {staticClass: "title-section"}, [t._v("Bagaimana Zonasea Bekerja ?")]), e("div", [e("div", {staticClass: "row work"}, [e("div", {staticClass: "tab"}, [e("button", {
                    staticClass: "tablinks",
                    attrs: {id: "defaultOpen"},
                    on: {
                        click: function (a) {
                            return t.openCity(a, "ac1")
                        }
                    }
                }, [e("span", {staticClass: "tab-number"}, [t._v("01")]), e("p", {staticClass: "tab-text"}, [t._v(" Upload dokumentasi spesifikasi kapal anda segera ")])]), e("button", {
                    staticClass: "tablinks",
                    on: {
                        click: function (a) {
                            return t.openCity(a, "ac2")
                        }
                    }
                }, [e("span", {staticClass: "tab-number"}, [t._v("02")]), e("p", {staticClass: "tab-text"}, [t._v(" Masukan lokasi dan waktu pembukaan posisi kapal anda ")])]), e("button", {
                    staticClass: "tablinks",
                    on: {
                        click: function (a) {
                            return t.openCity(a, "ac3")
                        }
                    }
                }, [e("span", {staticClass: "tab-number"}, [t._v("03")]), e("p", {staticClass: "tab-text mt-2"}, [t._v("Pilih rute ekspedisi")])]), e("button", {
                    staticClass: "tablinks",
                    on: {
                        click: function (a) {
                            return t.openCity(a, "ac4")
                        }
                    }
                }, [e("span", {staticClass: "tab-number"}, [t._v("04")]), e("p", {staticClass: "tab-text"}, [t._v("Lakukan perjalanan dengan jadwal yang ada")])])]), t._m(0), t._m(1), t._m(2), t._m(3)])]), t._m(4)], 1)
            }, D = [function () {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", {staticClass: "tabcontent", attrs: {id: "ac1"}}, [e("img", {
                    staticClass: "img-work",
                    attrs: {src: "/images/1.png"}
                })])
            }, function () {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", {staticClass: "tabcontent", attrs: {id: "ac2"}}, [e("img", {
                    staticClass: "img-work",
                    attrs: {src: "/images/2.png"}
                })])
            }, function () {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", {staticClass: "tabcontent", attrs: {id: "ac3"}}, [e("img", {
                    staticClass: "img-work",
                    attrs: {src: "/images/3.png"}
                })])
            }, function () {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", {staticClass: "tabcontent", attrs: {id: "ac4"}}, [e("img", {
                    staticClass: "img-work",
                    attrs: {src: "/images/4.png"}
                })])
            }, function () {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", {
                    staticClass: "accordion",
                    attrs: {id: "accordionExample"}
                }, [e("div", {staticClass: "card"}, [e("div", {
                    staticClass: "card-header",
                    attrs: {id: "headingOne"}
                }, [e("button", {
                    staticClass: "btn  btn-block text-center",
                    attrs: {
                        type: "button",
                        "data-toggle": "collapse",
                        "data-target": "#collapseOne",
                        "aria-expanded": "true",
                        "aria-controls": "collapseOne"
                    }
                }, [t._v(" Upload dokumentasi sepsifikasi kalap anda segera ")])]), e("div", {
                    staticClass: "collapse show",
                    attrs: {id: "collapseOne", "aria-labelledby": "headingOne", "data-parent": "#accordionExample"}
                }, [e("div", {staticClass: "card-body text-center"}, [e("img", {
                    staticClass: "img-work",
                    attrs: {src: "/images/1.png"}
                })])])]), e("div", {staticClass: "card"}, [e("div", {
                    staticClass: "card-header",
                    attrs: {id: "headingTwo"}
                }, [e("button", {
                    staticClass: "btn  btn-block text-center collapsed",
                    attrs: {
                        type: "button",
                        "data-toggle": "collapse",
                        "data-target": "#collapseTwo",
                        "aria-expanded": "false",
                        "aria-controls": "collapseTwo"
                    }
                }, [t._v(" Masukan lokasi dan waktu pembukaan posisi kapal anda. ")])]), e("div", {
                    staticClass: "collapse",
                    attrs: {id: "collapseTwo", "aria-labelledby": "headingTwo", "data-parent": "#accordionExample"}
                }, [e("div", {staticClass: "card-body text-center"}, [e("img", {
                    staticClass: "img-work",
                    attrs: {src: "/images/2.png"}
                })])])]), e("div", {staticClass: "card"}, [e("div", {
                    staticClass: "card-header",
                    attrs: {id: "headingThree"}
                }, [e("button", {
                    staticClass: "btn btn-block text-center collapsed",
                    attrs: {
                        type: "button",
                        "data-toggle": "collapse",
                        "data-target": "#collapseFour",
                        "aria-expanded": "false",
                        "aria-controls": "collapseFour"
                    }
                }, [t._v(" Lakukan perjalanan dengan jadwal anda ")])]), e("div", {
                    staticClass: "collapse",
                    attrs: {id: "collapseFour", "aria-labelledby": "headingFour", "data-parent": "#accordionExample"}
                }, [e("div", {staticClass: "card-body text-center"}, [e("img", {
                    staticClass: "img-work",
                    attrs: {src: "/images/3.png"}
                })])])]), e("div", {staticClass: "card"}, [e("div", {
                    staticClass: "card-header",
                    attrs: {id: "headingThree"}
                }, [e("button", {
                    staticClass: "btn btn-block text-center collapsed",
                    attrs: {
                        type: "button",
                        "data-toggle": "collapse",
                        "data-target": "#collapseThree",
                        "aria-expanded": "false",
                        "aria-controls": "collapseThree"
                    }
                }, [t._v(" Pilih rute ekpsedisi ")])]), e("div", {
                    staticClass: "collapse",
                    attrs: {id: "collapseThree", "aria-labelledby": "headingThree", "data-parent": "#accordionExample"}
                }, [e("div", {staticClass: "card-body text-center"}, [e("img", {
                    staticClass: "img-work",
                    attrs: {src: "/images/4.png"}
                })])])])])
            }], z = (e("ac1f"), e("5319"), function () {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", {staticClass: "d-flex justify-content-center p-5"}, [e("iframe", {
                    staticClass: "video-intro",
                    attrs: {frameborder: "0", src: t.srcVideo}
                })])
            }), B = [], F = {
                data: function () {
                    return {srcVideo: "https://www.youtube.com/embed/kVCdAs5ergE"}
                }
            }, q = F, Z = Object(c["a"])(q, z, B, !1, null, null, null), G = Z.exports, J = {
                name: "work", components: {VideoYoutube: G}, data: function () {
                    return {}
                }, mounted: function () {
                    document.getElementById("defaultOpen").click()
                }, methods: {
                    openCity: function (t, a) {
                        var e, s, i;
                        for (s = document.getElementsByClassName("tabcontent"), e = 0; e < s.length; e++) s[e].style.display = "none";
                        for (i = document.getElementsByClassName("tablinks"), e = 0; e < i.length; e++) i[e].className = i[e].className.replace(" active", "");
                        document.getElementById(a).style.display = "block", t.currentTarget.className += " active"
                    }, activAccordion: function () {
                    }
                }
            }, K = J, V = Object(c["a"])(K, I, D, !1, null, "59d80223", null), Y = V.exports, W = function () {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", [t._m(0), e("section", {
                    staticClass: "footer-2",
                    attrs: {id: "about"}
                }, [t._m(1), e("div", {staticClass: "row mt-5"}, [e("div", {staticClass: "col-md-4"}, [e("h4", {staticClass: "font-weight-bold mb-4"}, [t._v("TENTANG KAMI")]), e("p", {
                    staticClass: "text-footer",
                    domProps: {innerHTML: t._s(t.footerDesc)}
                })]), e("div", {staticClass: "col-md-1"}), e("div", {staticClass: "col-md-3"}, [e("h4", {staticClass: "font-weight-bold mb-4"}, [t._v("SOCIAL MEDIA")]), e("ul", t._l(t.sosmed, (function (a, s) {
                    return e("li", {key: s}, [e("a", {
                        staticClass: "d-flex align-items-center mb-2",
                        attrs: {href: a.url}
                    }, [e("i", {staticClass: "fa-2x mr-2", class: a.icon}), e("span", [t._v(t._s(a.id))])])])
                })), 0)]), e("div", {staticClass: "col-md-4 text-right"}, [e("h4", {staticClass: "font-weight-bold mb-4"}, [t._v("TEMUKAN KAMI")]), e("p", {staticClass: "mb-0"}, [t._v("PT Global Solusi Maritim")]), e("p", {staticClass: "text-footer"}, [t._v(" " + t._s(t.address) + " ")])])]), e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-12"}, [e("div", {staticClass: "copyright mt-5"}, [e("p", {staticClass: "mt-4 mb-0"}, [t._v(t._s(t.copyright))])])])])])])
            }, Q = [function () {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", {staticClass: "footer-1"}, [e("div", {staticClass: "opa-black"}, [e("h1", [t._v("SUDAH SIAP MUAT KARGO ?")]), e("button", {
                    staticClass: "btn btn-iklan mt-5",
                    attrs: {"data-toggle": "modal", "data-target": "#modalRegister"}
                }, [t._v(" Coba 7 hari gratis ")])])])
            }, function () {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-12 text-center"}, [e("img", {
                    staticClass: "logo-zonasea",
                    attrs: {src: "images/logo-white@4x.png", alt: ""}
                })])])
            }], X = {
                name: "footers", data: function () {
                    return {
                        version: "1.0.4",
                        footerDesc: "Zonasea merupakan platform marketplace untuk mempertemukan pemilik kapal dengan pemilik muatan. Dengan menggunakan Zonasea, anda bisa berbisnis dengan tenang tanpa mengkhawatirkan legalitas perusahaan baik pemilik kapal maupun pemilik muatan dikarenakan semua member kami akan melalui tahap verifikasi oleh tim Zonasea.",
                        address: "Belleza Office Tower, 19th Floor - Unit 7, Jl. Letnan Jenderal Soepeno Jl. Permata Hijau No.34, North Grogol, Kebayoran Lama, South Jakarta City, Jakarta 12210",
                        copyright: "Copyright PT Global Solusi Maritim",
                        sosmed: [{
                            id: "zona.sea",
                            icon: "fab fa-instagram",
                            url: "https://www.instagram.com/zona.sea/"
                        }, {
                            id: "zonasea",
                            icon: "fab fa-facebook-square",
                            url: "https://www.facebook.com/zonasea"
                        }, {id: "zonasea", icon: "fab fa-linkedin", url: "https://www.linkedin.com/company/zonasea"}]
                    }
                }
            }, tt = X, at = (e("2b77"), Object(c["a"])(tt, W, Q, !1, null, "11d17448", null)), et = at.exports,
            st = function () {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", {attrs: {id: "modal-login"}}, [e("div", {
                    staticClass: "modal fade",
                    attrs: {id: "modalLogin", tabindex: "-1", role: "dialog", "aria-hidden": "true"}
                }, [e("div", {
                    staticClass: "modal-dialog modal-dialog-centered",
                    attrs: {role: "document"}
                }, [e("div", {staticClass: "modal-content"}, [t._m(0), e("div", {staticClass: "modal-body pl-5 pr-5"}, [e("p", {staticClass: "title mb-1"}, [t._v(" Log In ")]), e("p", {staticClass: "subtitle text-muted"}, [t._v(" sebagai: ")]), e("div", {staticClass: "row"}, [e("div", {staticClass: "col-lg-6"}, [e("div", {staticClass: "card border-0 text-center w-100"}, [e("div", {staticClass: "card-body p-2"}, [e("button", {staticClass: "btn btn-light btn-block"}, [e("a", {
                    staticClass: "card-link",
                    attrs: {href: t.linkShipPage}
                }, [t._v("Ship Owner")])])])])]), e("div", {staticClass: "col-lg-6"}, [e("div", {staticClass: "card border-0 text-center w-100"}, [e("div", {staticClass: "card-body p-2"}, [e("button", {staticClass: "btn btn-light btn-block"}, [e("a", {
                    staticClass: "card-link",
                    attrs: {href: t.linkCargoPage}
                }, [t._v("Cargo Owner")])])])])])]), e("p", {staticClass: "subtitle mt-4 text-muted"}, [t._v(" Belum terdaftar sebagai member? ")]), t._m(1)])])])])])
            }, it = [function () {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", {staticClass: "modal-header"}, [e("button", {
                    staticClass: "close",
                    attrs: {type: "button", "data-dismiss": "modal", "aria-label": "Close"}
                }, [t._v(" Ã— ")])])
            }, function () {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", {staticClass: "row mt-4 mb-4"}, [e("div", {staticClass: "col-md-12"}, [e("button", {
                    staticClass: "btn btn-primary btn-block mx-0",
                    attrs: {"data-toggle": "modal", "data-target": "#modalRegister", "data-dismiss": "modal"}
                }, [t._v(" Sign Up ")])])])
            }], nt = {
                data: function () {
                    return {linkShipPage: "https://ship.zonasea.com", linkCargoPage: "https://cargo.zonasea.com"}
                }
            }, rt = nt, ot = Object(c["a"])(rt, st, it, !1, null, null, null), lt = ot.exports, ct = function () {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", {attrs: {id: "modal-register"}}, [e("div", {
                    staticClass: "modal fade",
                    attrs: {id: "modalRegister", tabindex: "-1", role: "dialog", "aria-hidden": "true"}
                }, [e("div", {
                    staticClass: "modal-dialog modal-dialog-centered",
                    attrs: {role: "document"}
                }, [e("div", {staticClass: "modal-content"}, [e("div", {staticClass: "modal-header"}, [e("button", {
                    staticClass: "close",
                    attrs: {type: "button", "data-dismiss": "modal", "aria-label": "Close"},
                    on: {
                        click: function (a) {
                            return t.resetForm()
                        }
                    }
                }, [t._v(" Ã— ")])]), e("div", {staticClass: "modal-body pl-5 pr-5"}, [e("div", {staticClass: "form-signup"}, [e("div", {staticClass: "text-center mb-4"}, [e("p", {staticClass: "title mb-3 font-weight-thin"}, [t._v("Sign Up")]), e("div", {staticClass: "row text-center"}, [e("div", {staticClass: "col-6"}, [e("div", {staticClass: "custom-control custom-radio custom-control-inline"}, [e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.formRegistration.typeAcc,
                        expression: "formRegistration.typeAcc"
                    }],
                    staticClass: "custom-control-input",
                    class: {error: t.$v.formRegistration.typeAcc.$error, dirty: !t.$v.formRegistration.typeAcc.$invalid},
                    attrs: {type: "radio", id: "customRadioInline1", name: "customRadioInline1", value: "VS"},
                    domProps: {checked: t._q(t.formRegistration.typeAcc, "VS")},
                    on: {
                        change: function (a) {
                            return t.$set(t.formRegistration, "typeAcc", "VS")
                        }
                    }
                }), e("label", {
                    staticClass: "custom-control-label",
                    attrs: {for: "customRadioInline1"}
                }, [t._v("Ship Owner")])])]), e("div", {staticClass: "col-6"}, [e("div", {staticClass: "custom-control custom-radio custom-control-inline"}, [e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.formRegistration.typeAcc,
                        expression: "formRegistration.typeAcc"
                    }],
                    staticClass: "custom-control-input",
                    class: {error: t.$v.formRegistration.typeAcc.$error, dirty: !t.$v.formRegistration.typeAcc.$invalid},
                    attrs: {type: "radio", id: "customRadioInline2", name: "customRadioInline1", value: "CR"},
                    domProps: {checked: t._q(t.formRegistration.typeAcc, "CR")},
                    on: {
                        change: function (a) {
                            return t.$set(t.formRegistration, "typeAcc", "CR")
                        }
                    }
                }), e("label", {
                    staticClass: "custom-control-label",
                    attrs: {for: "customRadioInline2"}
                }, [t._v("Cargo Owner")])])])])]), e("hr"), e("div", {staticClass: "form-label-group"}, [e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.trim",
                        value: t.$v.formRegistration.name.$model,
                        expression: "$v.formRegistration.name.$model",
                        modifiers: {trim: !0}
                    }],
                    staticClass: "form-control",
                    class: {
                        "is-invalid": t.$v.formRegistration.name.$error,
                        "is-valid": !t.$v.formRegistration.name.$invalid
                    },
                    attrs: {type: "text", id: "inputName", placeholder: "", autofocus: ""},
                    domProps: {value: t.$v.formRegistration.name.$model},
                    on: {
                        keyup: function (a) {
                            return !a.type.indexOf("key") && t._k(a.keyCode, "enter", 13, a.key, "Enter") ? null : t.register(a)
                        }, input: function (a) {
                            a.target.composing || t.$set(t.$v.formRegistration.name, "$model", a.target.value.trim())
                        }, blur: function (a) {
                            return t.$forceUpdate()
                        }
                    }
                }), e("label", {attrs: {for: "inputName"}}, [t._v("Name")])]), e("div", {staticClass: "form-label-group"}, [e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.trim",
                        value: t.$v.formRegistration.email.$model,
                        expression: "$v.formRegistration.email.$model",
                        modifiers: {trim: !0}
                    }],
                    staticClass: "form-control",
                    class: {
                        "is-invalid": t.$v.formRegistration.email.$error,
                        "is-valid": !t.$v.formRegistration.email.$invalid
                    },
                    attrs: {type: "email", id: "inputEmail", placeholder: ""},
                    domProps: {value: t.$v.formRegistration.email.$model},
                    on: {
                        keyup: function (a) {
                            return !a.type.indexOf("key") && t._k(a.keyCode, "enter", 13, a.key, "Enter") ? null : t.register(a)
                        }, input: function (a) {
                            a.target.composing || t.$set(t.$v.formRegistration.email, "$model", a.target.value.trim())
                        }, blur: function (a) {
                            return t.$forceUpdate()
                        }
                    }
                }), e("label", {attrs: {for: "inputEmail"}}, [t._v("Email address")]), e("div", {staticClass: "invalid-feedback"}, [t._v(" Email format does not match. ")])]), e("div", {staticClass: "form-label-group"}, [e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.trim",
                        value: t.$v.formRegistration.company.$model,
                        expression: "$v.formRegistration.company.$model",
                        modifiers: {trim: !0}
                    }],
                    staticClass: "form-control",
                    class: {
                        "is-invalid": t.$v.formRegistration.company.$error,
                        "is-valid": !t.$v.formRegistration.company.$invalid
                    },
                    attrs: {type: "text", id: "inputCompany", placeholder: ""},
                    domProps: {value: t.$v.formRegistration.company.$model},
                    on: {
                        keyup: function (a) {
                            return !a.type.indexOf("key") && t._k(a.keyCode, "enter", 13, a.key, "Enter") ? null : t.register(a)
                        }, input: function (a) {
                            a.target.composing || t.$set(t.$v.formRegistration.company, "$model", a.target.value.trim())
                        }, blur: function (a) {
                            return t.$forceUpdate()
                        }
                    }
                }), e("label", {attrs: {for: "inputCompany"}}, [t._v("Company")])]), e("div", {staticClass: "form-label-group"}, [e("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.trim",
                        value: t.$v.formRegistration.country.$model,
                        expression: "$v.formRegistration.country.$model",
                        modifiers: {trim: !0}
                    }],
                    staticClass: "form-control",
                    class: {error: t.$v.formRegistration.country.$error, dirty: !t.$v.formRegistration.country.$invalid},
                    attrs: {type: "text", id: "inputCountry", placeholder: ""},
                    on: {
                        keyup: function (a) {
                            return !a.type.indexOf("key") && t._k(a.keyCode, "enter", 13, a.key, "Enter") ? null : t.register(a)
                        }, change: function (a) {
                            var e = Array.prototype.filter.call(a.target.options, (function (t) {
                                return t.selected
                            })).map((function (t) {
                                var a = "_value" in t ? t._value : t.value;
                                return a
                            }));
                            t.$set(t.$v.formRegistration.country, "$model", a.target.multiple ? e : e[0])
                        }
                    }
                }, t._l(t.tempDataCountry, (function (a, s) {
                    return e("option", {key: s, domProps: {value: a.id}}, [t._v(t._s(a.name))])
                })), 0), e("label", {attrs: {for: "inputCountry"}}, [t._v("Country")])]), e("div", {staticClass: "form-label-group tooltippw w-100"}, [e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.trim",
                        value: t.$v.formRegistration.password.$model,
                        expression: "$v.formRegistration.password.$model",
                        modifiers: {trim: !0}
                    }],
                    staticClass: "form-control",
                    class: {
                        "is-invalid": !t.validPassword && t.formRegistration.password.length > 0 || t.$v.formRegistration.password.$error,
                        "is-valid": t.validPassword && t.formRegistration.password.length > 0 && !t.$v.formRegistration.password.$invalid
                    },
                    attrs: {id: "inputPassword", placeholder: "", type: t.passwordFieldType},
                    domProps: {value: t.$v.formRegistration.password.$model},
                    on: {
                        keyup: function (a) {
                            return !a.type.indexOf("key") && t._k(a.keyCode, "enter", 13, a.key, "Enter") ? null : t.register(a)
                        }, input: [function (a) {
                            a.target.composing || t.$set(t.$v.formRegistration.password, "$model", a.target.value.trim())
                        }, t.check_password], blur: function (a) {
                            return t.$forceUpdate()
                        }
                    }
                }), e("label", {attrs: {for: "inputPassword"}}, [t._v("Password")]), e("span", {
                    staticClass: "field-icon mt-2",
                    class: t.iconShowPassword,
                    on: {
                        click: function (a) {
                            return t.show_password()
                        }
                    }
                }), e("div", {staticClass: "valid-feedback"}, [t._v(" Looks Good! ")]), e("div", {staticClass: "invalid-feedback"}, [t._v(" Password format does not match. ")]), e("div", {staticClass: "tooltiptext"}, [e("ul", {staticClass: "mt-3"}, [t._m(0), e("li", {class: {is_valid: t.passwordHint.upper}}, [e("small", [t._v("Contains uppercase")])]), e("li", {class: {is_valid: t.passwordHint.lower}}, [e("small", [t._v("Contains lowercase")])]), e("li", {class: {is_valid: t.passwordHint.number}}, [e("small", [t._v("Contains number")])]), e("li", {class: {is_valid: t.passwordHint.min}}, [e("small", [t._v("Min 8 character")])])])])]), t.currentAct.isLoading ? e("button", {
                    staticClass: "btn btn-primary btn-block mx-0",
                    attrs: {disabled: ""}
                }, [e("span", {
                    staticClass: "spinner-border spinner-border-sm",
                    attrs: {role: "status", "aria-hidden": "true"}
                }), t._v(" Loading... ")]) : e("button", {
                    staticClass: "btn btn-primary btn-block mx-0",
                    on: {click: t.register}
                }, [t._v("Sign Up")]), e("button", {
                    staticClass: "btn btn-outline-primary btn-block mx-0",
                    attrs: {"data-toggle": "modal", "data-target": "#modalLogin", "data-dismiss": "modal"}
                }, [t._v(" Log In ")]), e("p", {staticClass: "mt-2 mb-3 text-muted text-center"}, [t._v("Â© 2020")])])])])])])])
            }, dt = [function () {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("li", [e("small", {staticClass: "text-muted"}, [t._v("Use at least:")])])
            }], mt = e("b5ae"), ut = e("3d20"), pt = e.n(ut), gt = e("1157"), ft = e.n(gt), vt = {
                name: "navbar",
                data: function () {
                    return {
                        formRegistration: {
                            tipeAcc: null,
                            name: "",
                            email: "",
                            company: "",
                            country: "null",
                            password: ""
                        },
                        placeholder: {
                            email: "example@zonasea.com",
                            password: "type your password",
                            confirmPassword: "type same as password"
                        },
                        passwordHint: {lower: !1, upper: !1, min: !1, number: !1, length: null},
                        validPassword: !1,
                        passwordFieldType: "password",
                        iconShowPassword: "fa fa-eye"
                    }
                },
                validations: {
                    formRegistration: {
                        typeAcc: {required: mt["required"]},
                        name: {
                            required: mt["required"],
                            minLength: Object(mt["minLength"])(1),
                            maxLength: Object(mt["maxLength"])(70)
                        },
                        email: {required: mt["required"], email: mt["email"], maxLength: Object(mt["maxLength"])(100)},
                        company: {
                            required: mt["required"],
                            minLength: Object(mt["minLength"])(1),
                            maxLength: Object(mt["maxLength"])(70)
                        },
                        country: {required: mt["required"], integer: mt["integer"]},
                        password: {required: mt["required"], minLength: Object(mt["minLength"])(8)}
                    }
                },
                computed: {
                    currentAct: function () {
                        return this.$store.getters["registrationAuth/getCurrentAct"]
                    }, tempDataCountry: function () {
                        return this.$store.getters["registrationMasters/getCountry"]
                    }, tempDataState: function () {
                        return this.$store.getters["registrationMasters/getState"]
                    }, tempDataCity: function () {
                        return this.$store.getters["registrationMasters/getCity"]
                    }
                },
                mounted: function () {
                    this.load_country()
                },
                watch: {
                    currentAct: function () {
                        !0 === this.currentAct.hideModal && (this.resetForm(), ft()("#modalRegister").modal("hide"))
                    }
                },
                methods: {
                    check_password: function () {
                        this.passwordHint.length = this.formRegistration.password.length, this.passwordHint.length >= 8 ? this.passwordHint.min = !0 : this.passwordHint.min = !1, this.passwordHint.number = /\d/.test(this.formRegistration.password), this.passwordHint.upper = /[A-Z]/.test(this.formRegistration.password), this.passwordHint.lower = /[a-z]/.test(this.formRegistration.password), !0 === this.passwordHint.min && !0 === this.passwordHint.upper && !0 === this.passwordHint.lower && !0 === this.passwordHint.number ? this.validPassword = !0 : this.validPassword = !1
                    }, resetForm: function () {
                        this.$v.$reset(), this.validPassword = !1, this.passwordHint.number = !1, this.passwordHint.upper = !1, this.passwordHint.lower = !1, this.passwordHint.min = !1, this.passwordFieldType = "password", this.iconShowPassword = "fa fa-eye", this.formRegistration = {
                            typeAcc: null,
                            name: "",
                            email: "",
                            company: "",
                            country: null,
                            password: "",
                            confirmPassword: null
                        }
                    }, load_country: function () {
                        this.$store.dispatch("registrationMasters/loadCountry")
                    }, show_password: function () {
                        this.passwordFieldType = "password" === this.passwordFieldType ? "text" : "password", this.iconShowPassword = "fa fa-eye" === this.iconShowPassword ? "fa fa-eye-slash" : "fa fa-eye"
                    }, register: function () {
                        this.$v.$touch(), this.$v.$invalid || !this.validPassword ? pt.a.fire({
                            title: "Oops...",
                            text: "Tolong periksa kembali kolom yang masih kosong",
                            icon: "warning",
                            confirmButtonText: "Oke",
                            focusCancel: !0
                        }) : this.$store.dispatch("registrationAuth/registrationStart", this.formRegistration)
                    }
                }
            }, bt = vt, ht = Object(c["a"])(bt, ct, dt, !1, null, null, null), Ct = ht.exports, kt = {
                name: "homepage",
                metaInfo: function () {
                    return {
                        title: "Zonasea - Platform Perkapalan Terpercaya di Indonesia",
                        meta: [{
                            name: "description",
                            content: "Menghubungkan langsung pemilik kapal tug boat, tongkang, tanker, bulk carrier dengan pemilik muatan sawit, batu bara, nikel, solar dan lainnya."
                        }]
                    }
                },
                components: {
                    Navbar: k,
                    ModalLogin: lt,
                    ModalRegister: Ct,
                    Iklan: R,
                    Benefit: H,
                    Work: Y,
                    Footer: et,
                    Fab: P
                },
                created: function () {
                },
                data: function () {
                    return {msg: " hellow"}
                }
            }, yt = kt, _t = Object(c["a"])(yt, p, g, !1, null, null, null), wt = _t.exports;
        s["a"].use(u["a"]);
        var $t = [{
            path: "/",
            component: wt,
            meta: {
                title: "Zonasea - Platform Perkapalan Terpercaya di Indonesia",
                metaTags: [{
                    name: "description",
                    content: "Menghubungkan langsung pemilik kapal tug boat, tongkang, tanker, bulk carrier dengan pemilik muatan sawit, batu bara, nikel, solar dan lainnya."
                }, {
                    property: "og:description",
                    content: "Menghubungkan langsung pemilik kapal tug boat, tongkang, tanker, bulk carrier dengan pemilik muatan sawit, batu bara, nikel, solar dan lainnya."
                }]
            }
        }], xt = new u["a"]({routes: $t, mode: "history"});
        xt.beforeEach((function (t, a, e) {
            var s = t.matched.slice().reverse().find((function (t) {
                return t.meta && t.meta.title
            })), i = t.matched.slice().reverse().find((function (t) {
                return t.meta && t.meta.metaTags
            }));
            if (s && (document.title = s.meta.title), Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((function (t) {
                return t.parentNode.removeChild(t)
            })), !i) return e();
            i.meta.metaTags.map((function (t) {
                var a = document.createElement("meta");
                return Object.keys(t).forEach((function (e) {
                    a.setAttribute(e, t[e])
                })), a.setAttribute("data-vue-router-controlled", ""), a
            })).forEach((function (t) {
                return document.head.appendChild(t)
            })), e()
        }));
        var Rt = xt, Tt = e("5a58"), At = e.n(Tt), Et = e("1dce"), Ot = e.n(Et),
            St = (e("f9e3"), e("7fbe"), e("a60c"), e("4989"), e("2f62")), Pt = (e("b0c0"), e("bc3a")), jt = e.n(Pt);

        function Lt() {
            var t = jt.a.create({baseURL: "https://api.zonasea.com/api", timeout: 3e4});
            return t
        }

        var Mt = {currentAct: {isLoading: !1, hideModal: !1}}, Nt = {
            getCurrentAct: function (t) {
                return t.currentAct
            }
        }, Ut = {
            CURRENTACT_START: function (t, a) {
                return t.currentAct = a
            }
        }, Ht = {
            registrationStart: function (t, a) {
                var e = t.commit, s = {
                    type_regis: a.typeAcc,
                    full_name: a.name,
                    email: a.email,
                    company: a.company,
                    country: a.country,
                    password: a.password
                };
                e("CURRENTACT_START", {isLoading: !0, hideModal: !1}), Lt().post("registration", s).then((function (t) {
                    var a = t.data;
                    200 === a.code && pt.a.fire({
                        icon: "success",
                        title: "Good Job!",
                        text: a.message,
                        onAfterClose: function () {
                            e("CURRENTACT_START", {isLoading: !1, hideModal: !0})
                        }
                    })
                })).catch((function (t) {
                    pt.a.fire({
                        icon: "error",
                        title: "Oops...",
                        text: t.response.data.message,
                        onAfterClose: function () {
                            e("CURRENTACT_START", {isLoading: !1, hideModal: !1})
                        }
                    })
                }))
            }
        }, It = {namespaced: !0, state: Mt, getters: Nt, actions: Ht, mutations: Ut}, Dt = {dataCountry: []}, zt = {
            getCountry: function (t) {
                return t.dataCountry
            }
        }, Bt = {
            LOAD_COUNTRY: function (t, a) {
                return t.dataCountry = a
            }
        }, Ft = {
            loadCountry: function (t) {
                var a = t.commit;
                Lt().get("master/country/dropdown").then((function (t) {
                    var e = t.data;
                    200 === e.code && a("LOAD_COUNTRY", e.data)
                })).catch((function (t) {
                    pt.a.fire({icon: "error", title: "Oops...", text: t.response.data.message})
                }))
            }
        }, qt = {namespaced: !0, state: Dt, getters: zt, actions: Ft, mutations: Bt}, Zt = {dataContactUs: []}, Gt = {
            getdataContactUs: function (t) {
                return t.dataContactUs
            }
        }, Jt = {
            CONTACT_START: function (t, a) {
                return t.dataContactUs = a
            }
        }, Kt = {
            contactUsStart: function (t, a) {
                var e = t.commit, s = {name: a.name, email: a.email, message: a.message};
                Lt().post("master/about-us/create", s).then((function (t) {
                    var a = t.data;
                    200 === a.code && (e("CONTACT_START", t.data), pt.a.fire({
                        icon: "success",
                        title: "Good Job!",
                        text: a.message
                    }))
                })).catch((function (t) {
                    pt.a.fire({icon: "error", title: "Oops...", text: t.response.data.message})
                }))
            }
        }, Vt = {namespaced: !0, state: Zt, getters: Gt, actions: Kt, mutations: Jt}, Yt = {dataSubscribe: []}, Wt = {
            getDataSubscribe: function (t) {
                return t.dataSubscribe
            }
        }, Qt = {
            SUBSCRIBE_START: function (t, a) {
                return t.dataSubscribe = a
            }
        }, Xt = {
            subscribeStart: function (t, a) {
                var e = t.commit, s = {email: a};
                Lt().post("master/subscriber", s).then((function (t) {
                    var a = t.data;
                    200 === a.code && (e("SUBSCRIBE_START", t.data), pt.a.fire({
                        icon: "success",
                        title: "Good Job!",
                        text: a.message
                    }))
                })).catch((function (t) {
                    pt.a.fire({icon: "error", title: "Oops...", text: t.response.data.message})
                }))
            }
        }, ta = {namespaced: !0, state: Yt, getters: Wt, actions: Xt, mutations: Qt};
        s["a"].use(St["a"]);
        var aa = new St["a"].Store({
            modules: {
                registrationAuth: It,
                registrationMasters: qt,
                contactUs: Vt,
                subscribeUs: ta
            }, state: {}, getters: {}, mutations: {}, actions: {}
        }), ea = aa, sa = e("a584");
        s["a"].use(i["a"], {refreshOnceOnNavigation: !1}), s["a"].use(Ot.a), s["a"].use(At.a), s["a"].use(sa["a"], {
            config: {
                id: "G-TH7ZED688V",
                params: {send_page_view: !1}
            }
        }), s["a"].config.productionTip = !1, new s["a"]({
            router: Rt, store: ea, render: function (t) {
                return t(m)
            }
        }).$mount("#app")
    }, "689c": function (t, a, e) {
        "use strict";
        var s = e("537b"), i = e.n(s);
        i.a
    }, "7fbe": function (t, a, e) {
    }, a60c: function (t, a, e) {
    }
});
//# sourceMappingURL=app.e2a8f9de.js.map
