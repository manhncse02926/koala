"use strict";

function ResourceLoader() {}

function KLForm(t) {
    var e = this;
    window.KLFormRegistry = window.KLFormRegistry || {}, 
    e.id = t, 
    e.formSelector = "#kl-form-" + e.id, 
    console.log('e: ', e.formSelector);
    e.$form = jQ(e.formSelector), 
    e.$formMessage = jQ(e.formSelector + " .kl-message"), 
    e.$formOuter = jQ(e.formSelector).parent(".kl-form-outer").length ? jQ(e.formSelector).parent(".kl-form-outer") : jQ(e.formSelector).parent(".form-outer"), 
    e.$submitButton = jQ(e.formSelector + " button.kl-button"), e.$closeButton = jQ(e.formSelector + " .kl-btn-close," + e.formSelector + " .kl-btn-thanks"), 
    e.formHash = e.$form.attr("kl-hash"), 
    e.formType = e.$form.hasClass("kl-form-popup") ? "popup" : "embed", 
    e.formType = e.$form.hasClass("kl-form-fixed") ? "fixed" : e.formType, 
    e.inputs = {}, e.inputsSelector = e.formSelector + " .kl-element-container :input", 
    e.language = e.$form.attr("kl-lang"), 
    e.preparedData = {}, 
    e.sent = !1, 
    e.showOptions = function () {
        var t = e.$form.attr("kl-show-options") ? JSON.parse(decodeURIComponent(e.$form.attr("kl-show-options"))) : {};
        return t;
    }(), 
    e.submitURL = function () {
        return "https://atkoala.com/";
    }(), 
    e.history = new KLHistory(e.formHash),
    e.valid = !0, 
    e.ipInfo = {}, 
    e.ipSrvURL = "//gp.webformscr.com",
    e.init()
}

function KLHistory(t) {
    var e = this;
    e.formHash = t, e.all = e.raise()
}
! function (t) {
    function e(e) {
        new Promise(function (e, o) {
            void 0 === t.jQuery || Boolean(!t.jQuery.fn.on) ? ResourceLoader.loadScript("//ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js", function () {
                t.jQ = t.jQuery
            }).then(function () {
                e()
            }) : (t.jQ = t.jQuery, e())
        }).then(e)
    }

    function o() {
        var e = [],
            o = jQ('div.kl-form [name="sform[phone]"]'),
            i = r();

        new Promise(function (t, r) {
            console.log("t: ", t);
            o.length > 0 && (e.push(ResourceLoader.loadCss("//cdnjs.cloudflare.com/ajax/libs/intl-tel-input/9.2.4/css/intlTelInput.css")), 
            e.push(ResourceLoader.loadScript("//cdnjs.cloudflare.com/ajax/libs/intl-tel-input/9.2.4/js/intlTelInput.min.js")), 
            e.push(ResourceLoader.loadScript("//cdnjs.cloudflare.com/ajax/libs/intl-tel-input/9.2.4/js/utils.js"))),
            e.push(ResourceLoader.loadScript("//cdnjs.cloudflare.com/ajax/libs/mobile-detect/1.3.6/mobile-detect.min.js")), 
            e.push(ResourceLoader.loadScript("//manhncse02926.github.io/koala/form.css")),
            Promise.all(e).then(function () {
                t()
            }, function (t) {
                console.error("Necessary scripts have not been loaded:", t)
            })
        }).then(function () {
            for (var t = 0, e = i.length; t < e; t++) new KLForm(i[t]).run()
        })
    }

    function r() {
        var t = jQ("div.kl-form"),
            e = t.length,
            o = [];
        if (!e) throw new Error("Koala: Subscription form ID is missing or code is corrupted!");
        for (var r = 0; r < e; r++) {
            var s = Number(jQ(t[r]).attr("kl-id"));
            if (isNaN(s) || s < 1) throw new Error("Koala: Subscription form ID is wrong!");
            o.push(s)
        }
        return o
    }
    var s = "";
    t.KLFormBootstrap = function () {
        "undefined" != typeof Promise && -1 !== Promise.toString().indexOf("[native code]") ? e(o) : ResourceLoader.loadPromisePolyfill(function () {
            e(o)
        })
    }, t.addEventListener("load", t.KLFormBootstrap, !1)
}(window), 
ResourceLoader.loadScript = function (t, e, o) {
    return new Promise(function (r, s) {
        var n = document.createElement("script");
        void 0 === o && (o = !1), n.type = "text/javascript", n.async = !0, n.src = t + (o ? "?t=" + (new Date).getTime() : ""), document.getElementsByTagName("head")[0].appendChild(n), n.readyState ? n.onreadystatechange = function () {
            "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, "function" == typeof e && e(), r())
        } : n.onload = function () {
            "function" == typeof e && e(), r()
        }, n.onerror = function () {
            s(new Error("Loading fail! " + t))
        }
    })
}, 
ResourceLoader.loadCss = function (t, e, o) {
    console.log('css: ', t);
    return new Promise(function (r, s) {
        var n = document.createElement("link");
        void 0 === o && (o = !1), n.rel = "stylesheet", n.media = "screen", n.href = t + (o ? "?t=" + (new Date).getTime() : ""), document.getElementsByTagName("head")[0].appendChild(n), n.readyState ? n.onreadystatechange = function () {
            "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, "function" == typeof e && e(), r())
        } : n.onload = function () {
            "function" == typeof e && e(), r()
        }, n.onerror = function () {
            s(new Error("Loading fail! " + t))
        }
    })
},
 ResourceLoader.loadPromisePolyfill = function (t, e) {
    var o = "//polyfill.io/v2/polyfill.min.js?flags=gated,always&features=Promise,&rum=0",
        r = document.createElement("script");
    void 0 === e && (e = !1), r.type = "text/javascript", r.async = !1, r.src = o + (e ? "?t=" + (new Date).getTime() : ""), document.getElementsByTagName("head")[0].appendChild(r), r.readyState ? r.onreadystatechange = function () {
        "loaded" !== r.readyState && "complete" !== r.readyState || (r.onreadystatechange = null, "function" == typeof t && t())
    } : r.onload = function () {
        "function" == typeof t && t()
    }, r.onerror = function () {
        throw new Error("Loading fail! " + o)
    }
};
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t
} : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
};
KLForm.prototype.init = function () {
    var t = this;
    return t.$closeButton.on("click", function (e) {
            t.close(!0)
         }), t.$submitButton.prop("disabled", !t.valid), jQ(t.inputsSelector).each(function (e, o) {
        var r = jQ(o);
        console.log('t init: ', r);
        r.hideTip = function () {
            r.hasClass("kl-invalid") && (this.removeClass("kl-invalid"), this.next(".kl-tip").detach())
        }, r.showTip = function (t) {
            var e = JSON.parse(decodeURIComponent(this.attr("kl-tips")));
            this.addClass("kl-invalid"), e.hasOwnProperty(t) && this.after(jQ("<div/>", {
                class: "kl-tip kl-invalid",
                html: e[t]
            }))
        }, r.on("focus", function () {
            t.hideAllTips()
        }), "sform[phone]" === r.attr("name") && r.intlTelInput({
            initialCountry: "auto",
            separateDialCode: !0,
            geoIpLookup: function (e) {
                jQ.get(t.ipSrvURL, function () {}, "jsonp").always(function (o) {
                    t.ipInfo = o;
                    var r = o && o.country_code ? o.country_code : "";
                    e(r)
                })
            },
            utilScript: "//cdnjs.cloudflare.com/ajax/libs/intl-tel-input/9.2.4/js/utils.js"
        }), t.inputs[o.name] = r
    }), t.$submitButton.off("click").on("click", function (e) {
        return t.submit(), !1
    }), t.$form.on("submit", function () {
        return t.submit(), !1
    }), t.previewMode && (t.$form.removeClass("kl-form-popup"), t.$form.removeClass("kl-form-fixed"), t.$formOuter.removeClass("kl-popup-outer"), t.$closeButton.remove(), t.$formOuter.hasClass("kl-force-hide") && setTimeout(function () {
        t.$formOuter.removeClass("kl-force-hide"), t.$formOuter.addClass("kl-show")
    }, 200)), "undefined" != typeof sbjs && "undefined" !== t.showOptions.utmEnable && !0 === t.showOptions.utmEnable && sbjs.init(), t
}, 
KLForm.prototype.run = function () {
    this.show()
}, 
KLForm.prototype.hideAllTips = function () {
    var t = this;
    for (var e in t.inputs) t.inputs.hasOwnProperty(e) && t.inputs[e].hasOwnProperty("hideTip") && t.inputs[e].hideTip()
}, 
KLForm.prototype.disableInputs = function () {
    var t = this;
    jQ(t.inputsSelector).prop("disabled", !0), t.$submitButton.prop("disabled", !0)
}, 
KLForm.prototype.enableInputs = function () {
    var t = this;
    jQ(t.inputsSelector).prop("disabled", !1), t.$submitButton.prop("disabled", !1)
}, 
KLForm.prototype.close = function (t) {
    var e = this;
    "embed" !== e.formType && (e.$formOuter.addClass("kl-hide"), t && !e.history.getSubmits().length && e.history.addReject((new Date).getTime()), function () {
        var t = document.querySelector(".kl-form-outer"),
            o = new CustomEvent("KLFormCloseEvent", {
                detail: {
                    formId: e.id
                },
                bubbles: !0
            });
        t.dispatchEvent(o)
    }())
}, 
KLForm.prototype.show = function () {
    function t(t) {
        t = t || .2, t *= 1e3, setTimeout(function () {
            o.$formOuter.addClass("kl-showing"), setTimeout(function () {
                o.$formOuter.addClass("kl-show"), e()
            }, 200), setTimeout(function () {
                o.$formOuter.removeClass("kl-showing")
            }, 400)
        }, t)
    }

    function e() {
        var t = document.querySelector(".kl-form-outer"),
            e = new CustomEvent("KLFormShowEvent", {
                detail: {
                    formId: o.id
                },
                bubbles: !0
            });
        t.dispatchEvent(e)
    }
    var o = this;
    if (!(function () {
            if (o.showOptions.hideOnMobile) {
                return new MobileDetect(window.navigator.userAgent).mobile()
            }
            return !1
        }() || "embed" !== o.formType && function () {
            if ("onButtonClick" === o.showOptions.condition) return jQ("[kl-show-form]").on("click", function () {
                console.log('here');
                var t = jQ(this).attr("kl-show-form");
                jQ("#kl-form-" + t).parent(".kl-form-outer").removeClass("kl-force-hide").removeClass("kl-hide").addClass("kl-show"), e()
            }), !0
        }())) {
            console.log('here: ', o.formType);
        if (o.$formOuter.removeClass("kl-force-hide")) return void t();
        if ("embed" !== o.formType) { //form type here check
            console.log('haha');
            if (o.history.getSubmits().length) return;
            if (o.history.getRejects().length > 1) return;
            if (1 === o.history.getRejects().length) {
                var r = (new Date).getTime(),
                    s = (r - o.history.getLastShow()) / 864e5;
                if (o.showOptions.repeat > 0 && s < o.showOptions.repeat) return
            }
            "popup" !== o.formType && "fixed" !== o.formType || (! function () {
                switch (o.showOptions.condition) {
                    case "onEnter":
                        t(o.showOptions.delay);
                        break;
                    case "onScroll":
                        jQ(window).scroll(function () {
                            var e = (jQ(document).height() - jQ(window).height()) / 100 * o.showOptions.scrollTo;
                            jQ(window).scrollTop() >= e && t()
                        });
                        break;
                    case "onCursorLeave":
                        jQ("body").on("mouseleave", function (e) {
                            (e.clientY <= 0 || e.clientX <= 0 || e.clientX >= window.innerWidth || e.clientY >= window.innerHeight) && t()
                        });
                        break;
                    case "onClose":
                        jQ(window).on("unload", function (e) {
                            e.preventDefault(), t()
                        })
                }
            }())
        } else  e();
        o.history.addLastShow()
    }
}, 
KLForm.prototype.validateAll = function () {
    var t = this;
    t.valid = !0;
    for (var e in t.inputs)
        if (t.inputs.hasOwnProperty(e) && void 0 !== t.inputs[e].attr("kl-type")) {
            console.log('pass here');
            var o = t.inputs[e],
                r = t.validate(o);
            t.valid = t.valid && r
        } return t
}, 
KLForm.prototype.validate = function (t) {
    if (!!jQ.trim(t.val()) && t.intlTelInput("isValidNumber")) {
        return true;
    }
    t.showTip()
    return false;
},
 KLForm.prototype.cbSubmit = function (t) {
    var e = this;
    t.hasOwnProperty("html") && t.hasOwnProperty("status") && (e.$form.find(".kl-element-container").hide(), "success" === t.status ? (e.$formMessage.addClass("kl-message-success"), e.sent = !0, e.history.addSubmit(), e.$formMessage.html(t.html), e.enableInputs()) : "verify" === t.status ? (e.sent = !0, e.history.addSubmit(), e.enableInputs(),  e.close(), window.location.href = "//" + e.showOptions.maDomain + "/forms/recaptcha?hash=" + t.form_hash) : (e.$formMessage.addClass("kl-message-error"), e.$formMessage.html(t.html), e.enableInputs())), e.$submitButton.removeClass("btn-loading"), e.removeInstanceFromRegistry()
}, 
KLForm.prototype.submit = function () {
    var t = this;
    if (!t.sent && (t.validateAll(), t.valid)) {
        if ("popup" === t.formType && t.history.getSubmits().length > 1) return console.warn("Form has been submitted twice already. Enough!"), t.close(), !1;
        t.$submitButton.addClass("btn-loading"), t.disableInputs(), t.putInstanceToRegistry(),
            function () {
                for (var e in t.inputs)
                    if (t.inputs.hasOwnProperty(e)) {
                        var o = t.inputs[e];
                        switch (o.attr("kl-type")) {
                            case "phone":
                                t.preparedData[e] = o.intlTelInput("getNumber");
                                break;
                            default:
                                t.preparedData[e] = o.val()
                        }
                    } t.preparedData.sform_lang = t.language, t.preparedData["sform[hash]"] = t.formHash, t.preparedData["sform[" + window.btoa("autoSite") + "]"] = window.location.hostname, jQ.isEmptyObject(t.ipInfo) || (t.preparedData["sform[" + window.btoa("autoIp") + "]"] = t.ipInfo.ip, t.preparedData["sform[" + window.btoa("autoCity") + "]"] = t.ipInfo.city, t.preparedData["sform[" + window.btoa("autoRegion") + "]"] = t.ipInfo.region, t.preparedData["sform[" + window.btoa("autoCountry") + "]"] = t.ipInfo.country), "undefined" !== t.showOptions.utmEnable && !0 === t.showOptions.utmEnable && (t.preparedData["sform[" + window.btoa("visitFirstType") + "]"] = sbjs.get.first.typ, "(direct)" === sbjs.get.first.src ? t.preparedData["sform[" + window.btoa("visitFirstUtmSource") + "]"] = sbjs.get.first.src.substring(1, sbjs.get.first.src.length - 1) : t.preparedData["sform[" + window.btoa("visitFirstUtmSource") + "]"] = sbjs.get.first.src, "(none)" !== sbjs.get.first.mdm && (t.preparedData["sform[" + window.btoa("visitFirstMedium") + "]"] = sbjs.get.first.mdm), "(none)" !== sbjs.get.first.cmp && (t.preparedData["sform[" + window.btoa("visitFirstCampaign") + "]"] = sbjs.get.first.cmp), "(none)" !== sbjs.get.first.cnt && (t.preparedData["sform[" + window.btoa("visitFirstContent") + "]"] = sbjs.get.first.cnt), "(none)" !== sbjs.get.first.trm && (t.preparedData["sform[" + window.btoa("visitFirstUtmTerm") + "]"] = sbjs.get.first.trm), t.preparedData["sform[" + window.btoa("visitSubscribeType") + "]"] = sbjs.get.current.typ, "(direct)" === sbjs.get.current.src ? t.preparedData["sform[" + window.btoa("visitSubscribeSource") + "]"] = sbjs.get.current.src.substring(1, sbjs.get.current.src.length - 1) : t.preparedData["sform[" + window.btoa("visitSubscribeSource") + "]"] = sbjs.get.current.src, "(none)" !== sbjs.get.current.mdm && (t.preparedData["sform[" + window.btoa("visitSubscribeMedium") + "]"] = sbjs.get.current.mdm), "(none)" !== sbjs.get.current.cmp && (t.preparedData["sform[" + window.btoa("visitSubscribeCampaign") + "]"] = sbjs.get.current.cmp), "(none)" !== sbjs.get.current.cnt && (t.preparedData["sform[" + window.btoa("visitSubscribeContent") + "]"] = sbjs.get.current.cnt), "(none)" !== sbjs.get.current.trm && (t.preparedData["sform[" + window.btoa("visitSubscribeTerm") + "]"] = sbjs.get.current.trm))
            }(),
            function () {
                jQ.ajax({
                    url: t.submitURL + "?callback=?",
                    dataType: "jsonp",
                    data: t.preparedData,
                    jsonpCallback: t.makeCallbackName("cbSubmit"),
                    statusCode: function () {
                        alert("This form cannot be submitted because the referrer is missing. Appeal to site admin please.")
                    }
                })
            }(),
            function () {
                var e = document.querySelector(".kl-form-outer"),
                    o = new CustomEvent("KLFormSubmitEvent", {
                        detail: {
                            formId: t.id
                        },
                        bubbles: !0
                    });
                e.dispatchEvent(o)
            }()
    }
}, 
KLForm.prototype.makeCallbackName = function (t) {
    return "KLFormRegistry['" + this.formHash + "']." + t
}, 
KLForm.prototype.putInstanceToRegistry = function () {
    var t = this;
    window.KLFormRegistry[t.formHash] = t
}, 
KLForm.prototype.removeInstanceFromRegistry = function () {
    var t = this;
    void 0 !== window.KLFormRegistry[t.formHash] && delete window.KLFormRegistry[t.formHash]
}, 
KLHistory.prototype.raise = function () {
    var t = this;
    if (localStorage[t.formHash]) try {
        return JSON.parse(localStorage.getItem(t.formHash))
    } catch (t) {
        console.error(t)
    }
    return {
        submits: [],
        rejects: [],
        lastShow: 0
    }
}, 
KLHistory.prototype.persist = function () {
    var t = this;
    localStorage.setItem(t.formHash, JSON.stringify(t.all))
}, 
KLHistory.prototype.add = function (t, e) {
    var o = this;
    switch (e = e || (new Date).getTime(), t) {
        case "submits":
        case "rejects":
            o.all[t].push(e);
            break;
        case "lastShow":
            o.all[t] = e
    }
    o.persist()
}, 
KLHistory.prototype.addSubmit = function (t) {
    this.add("submits", t)
}, 
KLHistory.prototype.addReject = function (t) {
    this.add("rejects", t)
}, 
KLHistory.prototype.addLastShow = function (t) {
    this.add("lastShow", t)
}, 
KLHistory.prototype.get = function (t) {
    var e = this;
    if (e.all.hasOwnProperty(t)) return e.all[t]
}, 
KLHistory.prototype.getSubmits = function () {
    return this.get("submits")
}, 
KLHistory.prototype.getRejects = function () {
    return this.get("rejects")
}, 
KLHistory.prototype.getLastShow = function () {
    return this.get("lastShow")
};