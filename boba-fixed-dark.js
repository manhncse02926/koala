"use strict";

function ResourceLoader() {}

function KLForm(t) {
    var e = this;
    window.KLFormRegistry = window.KLFormRegistry || {},
        e.id = t,
        e.scrollItem = 0,
        e.formSelector = "#kl-form-" + e.id,
        e.$form = jQ(e.formSelector),
        e.$formMessage = jQ(e.formSelector + " .kl-message"),
        e.$formOuter = jQ(e.formSelector).parent(".kl-form-outer").length ? jQ(e.formSelector).parent(".kl-form-outer") : jQ(e.formSelector).parent(".form-outer"),
        e.$rightArrow = jQ(e.formSelector + ' div.kl-right-arrow'),
        e.$leftArrow = jQ(e.formSelector + ' div.kl-left-arrow'),
        e.$submitButton = jQ(e.formSelector + " button.kl-button"),
        e.$telegram = jQ(e.formSelector + ' div.kl-icon-telegram'),
        e.$messenger = jQ(e.formSelector + ' div.kl-icon-messenger'),
        e.$snappchat = jQ(e.formSelector + ' div.kl-icon-snappchat'),
        e.$telegramImg = jQ(e.formSelector + ' div.kl-icon-telegram img'),
        e.$messengerImg = jQ(e.formSelector + ' div.kl-icon-messenger img'),
        e.$snappchatImg = jQ(e.formSelector + ' div.kl-icon-snappchat img'),
        e.$closeButton =  jQ(e.formSelector + " button.kl-btn-close-horizontal"),
        e.formHash = e.$form.attr("kl-hash"),
        e.activeType = 'telegram',
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
}! function (t) {
    function e(e) {
        new Promise(function (e, o) {
            void 0 === t.jQuery || Boolean(!t.jQuery.fn.on) ? ResourceLoader.loadScript("//ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js", function () {
                t.jQ = t.jQuery
            }).then(function () {
                e()
            }) : (t.jQ = t.jQuery, e())
        }).then(e)
    }

    function f() {
        document.body.insertAdjacentHTML('beforeend', renderForm());

    }


    function renderForm() {
        let form = `<div class="kl-form-outer boba-dark-mode kl-force-hide">
        <div id="kl-form-172781" kl-id="172781" class="kl-form-regular kl-form-embed">
            <form novalidate="" class="kl-form-horizontal">
                <div class="kl-power-by-wrp">
                    <img src="https://dwq4mwqo35tff.cloudfront.net/assets/logo.svg"
                                    alt="Messenger" width="108" height="20">
                    <div class="kl-power-by-hr  boba-dark-mode">
                        PROVIDE BY BOBACHAT
                    </div>
                </div>
                <div class="kl-field kl-description">
                    <div class="kl-title  boba-dark-mode">
                        bobachat_title_value
                    </div>
                    <div class="kl-sub-text  boba-dark-mode kl-sub-horizontal">
                        bobachat_description_value
                    </div>
                </div>
                <div class="kl-list-container">
                    <div class="kl-left-arrow kl-arrow-deactive">
                    </div>
                    <div class="kl-header-icon-horizontal">
                    <div class="kl-icon-telegram kl-icon-horizontal">
                    <img src="https://dwq4mwqo35tff.cloudfront.net/assets/telegram.svg"
                    alt="Snappchat" width="40" height="40">
                </div>
                <div class="kl-icon-snappchat kl-icon-horizontal">
                    <img src="https://dwq4mwqo35tff.cloudfront.net/assets/line.svg"
                    alt="Snappchat" width="40" height="40">
                </div>
                <div class="kl-icon-messenger kl-icon-horizontal">
                    <img src="https://dwq4mwqo35tff.cloudfront.net/assets/slack.svg"
                    alt="Snappchat" width="30" height="40">
                </div>
                <div class="kl-icon-telegram kl-icon-horizontal">
                    <img src="https://dwq4mwqo35tff.cloudfront.net/assets/skype.svg"
                    alt="Snappchat" width="40" height="40">
                </div>
                <div class="kl-icon-snappchat kl-icon-horizontal">
                    <img src="https://dwq4mwqo35tff.cloudfront.net/assets/whatsapp.svg"
                    alt="Snappchat" width="40" height="40">
                </div>
                <div class="kl-icon-messenger kl-icon-horizontal">
                    <img src="https://dwq4mwqo35tff.cloudfront.net/assets/viber.svg"
                    alt="Snappchat" width="40" height="40">
                </div>
                    </div>
                    <div class="kl-right-arrow">
                    </div>
                </div>
                <div class="kl-button-container">
                    <button class="kl-button" id="bobachat_btn_submit" value="bobachat_telegram_url_value">bobachat_btn_submit_value</button>
                </div>
                <button type="button" class="kl-btn-close-horizontal">&nbsp;</button>
            </form>
        </div>
    </div>`
        return form;
    }

    function o() {
        f(); 
        var e = [],
            o = jQ('div.kl-form-outer '),
            i = r();
        new Promise(function (t, r) {
            o.length > 0 && e.push(ResourceLoader.loadCss("https://dwq4mwqo35tff.cloudfront.net/assets/form.css")),
                e.push(ResourceLoader.loadScript("//cdnjs.cloudflare.com/ajax/libs/mobile-detect/1.3.6/mobile-detect.min.js")),
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
        var t = !isNaN(jQ("div.kl-form")) ? jQ("div.kl-form") : jQ("div.kl-form-regular"),
            e = t.length,
            o = [];
        // console.log('check : ',isNaN(jQ("div.kl-form")));
        if (!e) throw new Error("Koala: Subscription form ID is missing or code is corrupted!");
        for (var r = 0; r < e; r++) {
            var s = Number(jQ(t[r]).attr("kl-id"));
            if (isNaN(s) || s < 1) throw new Error("Koala: Subscription form ID is wrong!");
            o.push(s)
        }
        return o
    }
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
            }),
            t.$submitButton.off("click").on("click", function (e) {
                return t.submit(), !1
            }),
            t.$form.on("submit", function () {
                return t.submit(), !1
            }),
            t.$snappchat.off("click").on("click", function () {
                t.changeMessenger('Snappchat');
            }),
            t.$rightArrow.off("click").on("click", function () {
                t.scrollRight()
            }),
            t.$leftArrow.off("click").on("click", function () {
                t.scrollLeft()
            }),
            t.$messenger.off("click").on("click", function () {
                t.changeMessenger('Messenger');
            }),
            t.$telegram.off("click").on("click", function () {
                t.changeMessenger('Telegram');
            }),
            t.previewMode && (t.$form.removeClass("kl-form-popup"), t.$form.removeClass("kl-form-fixed"), t.$formOuter.removeClass("kl-popup-outer"), t.$closeButton.remove(), t.$formOuter.hasClass("kl-force-hide") && setTimeout(function () {
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
        (e.$formOuter.addClass("kl-hide"), t && !e.history.getSubmits().length && e.history.addReject((new Date).getTime()), function () {
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
                    var t = jQ(this).attr("kl-show-form");
                    jQ("#kl-form-" + t).parent(".kl-form-outer").removeClass("kl-force-hide").removeClass("kl-hide").addClass("kl-show"), e()
                }), !0
            }())) {
            if (o.$formOuter.removeClass("kl-force-hide") && !o.showOptions.condition) return void t();
            if ("embed" !== o.formType) { //form type here check
                if (o.history.getSubmits().length) return;
                if (o.history.getRejects().length > 1) return;
                if (1 === o.history.getRejects().length) {
                    var r = (new Date).getTime(),
                        s = (r - o.history.getLastShow()) / 864e5;
                    if (o.showOptions.repeat > 0 && s < o.showOptions.repeat) return
                }
            } else e();
            o.history.addLastShow()
        }
    },
    KLForm.prototype.validateAll = function () {
        var t = this;
        t.valid = !0;
        for (var e in t.inputs)
            if (t.inputs.hasOwnProperty(e) && void 0 !== t.inputs[e].attr("kl-type")) {
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
        t.hasOwnProperty("html") && t.hasOwnProperty("status") && (e.$form.find(".kl-element-container").hide(), "success" === t.status ? (e.$formMessage.addClass("kl-message-success"), e.sent = !0, e.history.addSubmit(), e.$formMessage.html(t.html), e.enableInputs()) : "verify" === t.status ? (e.sent = !0, e.history.addSubmit(), e.enableInputs(), e.close(), window.location.href = "//" + e.showOptions.maDomain + "/forms/recaptcha?hash=" + t.form_hash) : (e.$formMessage.addClass("kl-message-error"), e.$formMessage.html(t.html), e.enableInputs())), e.$submitButton.removeClass("btn-loading"), e.removeInstanceFromRegistry()
    },
    KLForm.prototype.changeMessenger = function (type) {
        var t = this;
        return;
    },
    KLForm.prototype.scrollRight = function () {
        var t = this;
        if (t.scrollItem >= 2) {
            return;
        }
        $('.kl-header-icon-horizontal').animate({
            scrollLeft: "+=55px"
        }, "slow");
        if (t.scrollItem == 0) {
            $('.kl-left-arrow').removeClass('kl-arrow-deactive')
        }
        if (t.scrollItem == 1) {
            $('.kl-right-arrow').addClass('kl-arrow-deactive')
        }
        t.scrollItem = t.scrollItem + 1;
    },
    KLForm.prototype.scrollLeft = function () {
        var t = this;
        if (t.scrollItem <= 0) {
            return;
        }
        $('.kl-header-icon-horizontal').animate({
            scrollLeft: "-=55px"
        }, "slow");
        if (t.scrollItem == 2) {
            $('.kl-right-arrow').removeClass('kl-arrow-deactive')
        }
        if (t.scrollItem == 1) {
            $('.kl-left-arrow').addClass('kl-arrow-deactive')
        }
        t.scrollItem = t.scrollItem - 1;
    },
    KLForm.prototype.submit = function () {
        let a = document.getElementById("bobachat_btn_submit");
        window.open(a.value);
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