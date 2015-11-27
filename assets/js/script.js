function loader() {
    $("#loader").delay(500).fadeOut(), $(".mask").delay(1e3).fadeOut("slow")
}

function scrollNav() {
    $(".scroll").smoothScroll({
        offset: -80,
        speed: 800
    })
}

function mobileMenu() {
    $("#mobile-toggle").click(function () {
        $("#navigation").hasClass("mobile-nav-open") ? $("#navigation").removeClass("mobile-nav-open") : $("#navigation").addClass("mobile-nav-open")
    })
}

function heroSlider() {
    $(".slider").flexslider({
        directionalNav: !1
    }), $("#home-slider").flexslider({
        added: function () {
            $(".display-h").addClass("animated fadeInUp")
        }
    }), $("#testimonials-slider").flexslider({
        controlNav: !1,
        smoothHeight: !0
    }), $("#home-slider .slides li").css("height", $(window).height()), $("#home-slider .slides li").each(function () {
        var a = $(".slider-bg").attr("src");
        $(this).children(".slider-bg").remove(), $(this).css("background", 'url("' + a + '")')
    });
    var a = $(window).height() / 2 - $(".home-shrink").height() / 2;
    $("#home-slider .slides li").css("padding-top", a)
}

function activateParallax() {
    var a = !1,
        b = navigator.platform;
    ("iPad" === b || "iPhone" === b || "iPod" === b) && (a = !0);
    var c = -$(window).scrollTop() / 4;
    a === !1 && $("#home-slider .slides li").css("background-position-y", c)
}

function showNav() {
    $(window).scrollTop() > 1 ? $("#navigation").addClass("show-nav") : $("#navigation").removeClass("show-nav")
}

function prettyphoto() {
    $(".prettyPhoto").prettyPhoto({
        opacity: .5,
        social_tools: "",
        deeplinking: !1
    })
}

function portfolio() {
    $(".project-slideshow .slides li").each(function () {
        var a = $(".project-img").attr("src");
        $(this).children(".project-img").remove(), $(this).css("background", 'url("' + a + '")')
    }), $(".work-item").click(function () {
        var a = "#" + $(this).data("project-id"),
            b = a + "-slideshow";
        $(a).addClass("open-project"), $(b).flexslider(), setTimeout(function () {
            $(a).children(".project-wrapper").addClass("fade-project")
        }, 800), $("html,body").animate({
            scrollTop: $(a).offset().top - 80
        }, 800)
    }), $(".close-project").click(function () {
        $(this).closest(".project-wrapper").removeClass("fade-project");
        var a = this;
        setTimeout(function () {
            $(a).closest(".project").removeClass("open-project")
        }, 200), $("html,body").animate({
            scrollTop: $("#work").offset().top - 80
        }, 800)
    })
}

function portfolioIsotope() {
    function a() {
        b.isotope("reLayout")
    }
    var b = $("#portfolio-wrap");
    b.isotope({
        animationEngine: "best-available",
        animationOptions: {
            duration: 200,
            queue: !1
        },
        layoutMode: "fitRows"
    }), $("#filters a").click(function () {
        $("#filters a").removeClass("active"), $(this).addClass("active");
        var c = $(this).attr("data-filter");
        return b.isotope({
            filter: c
        }), a(), !1
    }), b.imagesLoaded(function () {}), $(window).smartresize(function () {
        a()
    })
}

function initBxModal() {
    $(".project-slider").bxSlider({
        controls: !0,
        pager: !1,
        auto: !0,
        pause: 3e3,
        preloadImages: "all"
    })
}

function portfolioExpander() {
    $("#fullscreen-slider").maximage({
        cycleOptions: {
            fx: "fade",
            speed: 1e3,
            timeout: 5e3,
            prev: "#slider_left",
            next: "#slider_right",
            pause: 0,
            before: function () {
                jQuery(".slide-content").fadeOut().animate({
                    top: "100px"
                }, {
                    queue: !1,
                    easing: "easeOutQuad",
                    duration: 550
                }), jQuery(".slide-content").fadeOut().animate({
                    top: "-100px"
                })
            },
            after: function () {
                jQuery(".slide-content").fadeIn().animate({
                    top: "0"
                }, {
                    queue: !1,
                    easing: "easeOutQuad",
                    duration: 450
                })
            }
        },
        onFirstImageLoaded: function () {
            jQuery("#cycle-loader").delay(800).hide(), jQuery("#fullscreen-slider").delay(800).fadeIn("slow"), jQuery(".slide-content").fadeIn().animate({
                top: "0"
            }), jQuery(".slide-content a").bind("click", function (a) {
                var b = $(this);
                jQuery("html, body").stop().animate({
                    scrollTop: $(b.attr("href")).offset().top - 44
                }, 1500, "easeInOutExpo"), a.preventDefault()
            })
        }
    }), jQuery("video,object").maximage("maxcover")
}

function animation() {
    $("#about").waypoint(function () {
        $(".icon-wrap").addClass("animated bounceIn show").removeClass("fade"), $(".iconbox-content").addClass("animated fadeInUp show").removeClass("fade")
    }), $("#team").waypoint(function () {
        $(".team-person").addClass("animated fadeInLeft show").removeClass("fade")
    }), $("#services").waypoint(function () {
        $(".service-icon-holder").addClass("animated rotateIn show").removeClass("fade")
    }), $("#work").waypoint(function () {
        $(".portfolio-image").addClass("animated fadeIn show").removeClass("fade")
    }), $("#parallax-container").waypoint(function () {
        $(".small-centered").addClass("animated pulse show").removeClass("fade")
    }), $("#clients").waypoint(function () {
        $(".client-img").addClass("animated bounceIn show").removeClass("fade")
    }), $("#pricing").waypoint(function () {
        $(".pricing-table").addClass("animated bounceIn show").removeClass("fade")
    }), $("#animated-counters").each(function () {
        $(".counter .counter-value").appear(function () {
            var a = $(this).html();
            $(this).countTo({
                from: 0,
                to: a,
                speed: 2e3,
                refreshInterval: 60
            })
        })
    })
}

function bxslider() {
    var a = !1;
    /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) && (a = !0), $(".fullwidth-slider").bxSlider({
        mode: "fade",
        speed: 1e3,
        pager: !1,
        onSlideBefore: function (a) {
            a.find(".slide-caption").fadeOut().animate({
                top: "100px"
            }, {
                queue: !1,
                easing: "easeOutQuad",
                duration: 550
            }), a.find(".slide-caption").hide().animate({
                top: "-100px"
            })
        },
        onSlideAfter: function (a) {
            a.find(".slide-caption").fadeIn().animate({
                top: "0"
            }, {
                queue: !1,
                easing: "easeOutQuad",
                duration: 450
            })
        }
    }), $(".bx-wrapper .bx-controls-direction a").attr("data-500", "top:83%; opacity: 0;").attr("data-start", "top:50%; opacity: 1;"), a === !1 && $(".parallax-slider").length && skrollr.init({
        edgeStrategy: "set",
        smoothScrolling: !1,
        forceHeight: !1
    }), $(".project-slider").bxSlider({
        controls: !0,
        pager: !1,
        auto: !0,
        pause: 3e3,
        preloadImages: "all"
    }), $(".blog-slider").bxSlider({
        controls: !0,
        pager: !1,
        auto: !1,
        pause: 3e3,
        preloadImages: "visible"
    })
}

function projectExpand() {
    var a = ($("#project-page-holder"), $("#portfolio-wrap .open-project-link"));
    index = a.length, $("#portfolio-wrap .open-project-link").click(function () {
        if ($(this).hasClass("active"));
        else {
            lastIndex = index, index = $(this).index(), a.removeClass("active"), $(this).addClass("active");
            var b = $(this).find(".open-project").attr("href") + " .item-data";
            $("#project-page-data").animate({
                opacity: 0
            }, 400, function () {
                $("#project-page-data").load(b, function () {
                    var a = $(".helper"),
                        b = a.height();
                    $("#project-page-data").css("min-height", b), $(".project-slider").css({
                        height: ""
                    }), $("#maximage").css({
                        height: ""
                    }), $("#maximage").maximage({
                        cycleOptions: {
                            fx: "fade",
                            speed: 1e3,
                            timeout: 6e3,
                            prev: "#arrow_left",
                            next: "#arrow_right",
                            pause: 1
                        }
                    })
                }), $("#project-page-data").delay(400).animate({
                    opacity: 1
                }, 400)
            }), $("html, body").animate({
                scrollTop: $(".portfolio-bottom").offset().top - 40
            }, 900), $("#project-page-holder").slideUp(600, function () {
                $("#project-page-data").css("visibility", "visible")
            }).delay(1100).slideDown(1e3, function () {
                $("#project-page-data").fadeIn("slow", function () {
                    initBxModal()
                }), $(".element_fade_in").each(function () {
                    $(this).appear(function () {
                        $(this).delay(100).animate({
                            opacity: 1,
                            right: "0px"
                        }, 1e3)
                    })
                })
            })
        }
        return !1
    }), $(document).on("click", "#project_close", function () {
        return $("#project-page-data").animate({
            opacity: 0
        }, 400, function () {
            $("#project-page-holder").delay(400).slideUp(400)
        }), $("html, body").delay(1e3).animate({
            scrollTop: $(".portfolio-top").offset().top - 70
        }, 800), a.removeClass("active"), !1
    })
}

function mediaElements() {
    var a;
    $("video,audio").length > 0 && ($.browser.msie && $("video,audio").attr("autoplay", "true"), a = new MediaElementPlayer("video,audio", {
        features: ["loop"],
        loop: !0,
        startVolume: 0
    }), $.browser.msie || a.play())
}

function googleMap() {
    var a = (new google.maps.LatLng(1.30597, 103.77375), {
        zoom: 16,
        center: new google.maps.LatLng(1.30597, 103.77375),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: !1,
        scrollwheel: !1,
        draggable: !0,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },
        navigationControl: !1,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }),
        b = new google.maps.Map(document.getElementById("map_canvas"), a);
    google.maps.event.addDomListener(window, "resize", function () {
        var a = b.getCenter();
        google.maps.event.trigger(b, "resize"), b.setCenter(a)
    });
    var c = '<div id="content"><div id="siteNotice"></div><h4 id="firstHeading" class="firstHeading">Your Studio</h4><div id="bodyContent"><p>Level 13, 2 Elizabeth St <br /> Melbourne Victoria 3000 Australia</p></div></div>',
        d = new google.maps.InfoWindow({
            content: c
        }),
        e = new google.maps.MarkerImage("assets/images/marker.png", new google.maps.Size(32, 37), new google.maps.Point(0, 0), new google.maps.Point(35, 20)),
        f = new google.maps.LatLng(45.738028, 21.224535),
        g = new google.maps.Marker({
            position: f,
            map: b,
            icon: e,
            title: "You Studio Name",
            zIndex: 3
        });
    google.maps.event.addListener(g, "click", function () {
        d.open(b, g)
    })
}

function parallaxInit() {
    $("#parallax-container").parallax("30%", .1), $("#testimonials").parallax("30%", .1)
}
$(document).ready(function () {
    "use strict";
    scrollNav(), mobileMenu(), heroSlider(), prettyphoto(), portfolio(), portfolioExpander(), animation(), bxslider(), mediaElements()
}), $(window).load(function () {
    "use strict";
    portfolioIsotope(), loader(), projectExpand(), googleMap(), parallaxInit()
}), $(window).scroll(function () {
    "use strict";
    showNav(), activateParallax()
});
