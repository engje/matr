function hideTabs(e, t, a) {
  e.preventDefault(), a.parent().addClass("current"), a.parent().siblings().removeClass("current");
  var s = a.attr("href");
  $(t).not(s).css("display", "none"), $(s).fadeIn()
}

function resizer() {
  var e = $(".video-iframe-wrapper, .embed-container"),
    t = $("iframe", e),
    a = $("video", e),
    s = 9 / 16,
    i = parseInt(e.width(), 10),
    r = i * s;
  t ? t.css({
    width: i + "px",
    height: r + "px"
  }) : a.css({
    width: i + "px",
    height: r + "px"
  }), e.css("height", 1 * r + "px")
}

function fullWidthResizer() {
  var e = $(".full-width-embed-container"),
    t = $("iframe", e),
    a = $("video", e),
    s = .42,
    i = parseInt(e.width(), 10),
    r = i * s;
  t ? t.css({
    width: i + "px",
    height: r + "px"
  }) : a.css({
    width: i + "px",
    height: r + "px"
  }), e.css("height", 1 * r + "px")
}

function isMobileDevice() {
  if (navigator.userAgent.match(/iPad|SCH-I|xoom|NOOK|silk|kindle|GT-P|touchpad|kindle|sch-t|viewpad|bolt|Playbook|^.*Android.*nexus(((?:(\s(7).+))).)*$/) || navigator.userAgent.match(/Blackberry|Android|iPod|iPhone|^.*Android.*nexus((?:(?!mobile)).)*$/)) var e = !0;
  else var e = !1;
  return e
}

function setEllipsis(e, t, a) {
  for (var s = 0; s < t.length; s++) {
    var i = $(e[s]).height(),
      r = $(t[s]).height();
    if (r > i) {
      var n = $(t[s]).text();
      $(t[s]).text(a(n, i))
    }
  }
}

function navClose() {
  var e = $(".menu-button");
  e.hasClass("open") && (self = $(this), e.removeClass("open"), e.next().hide(), $("#content").removeClass("opac"), $("body").removeClass("no-scroll"))
}

function customHeaderSearch() {
  $("#header-search").click(function (e) {
    $(".header-search-form").is(":visible") ? ($(".header-search-form").fadeIn(200).toggle(), $("#elastic").removeClass("logo-hide").delay(200)) : ($(".header-search-form").fadeIn(200), $("#elastic").addClass("logo-hide").delay(200))
  })
}

function formatDate(e) {
  var t = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    a = parseDate(e),
    s = a.getDate(),
    i = a.getMonth(),
    r = a.getFullYear(),
    n = t[i] + " " + s + ", " + r;
  return n
}

function parseDate(e) {
  var t = e.split("-");
  return new Date(t[0], t[1] - 1, t[2])
}

function sortData(e) {
  var t;
  return t = e.sort(function (e, t) {
    var a = new Date(e["tr:date"][0]) - new Date(t["tr:date"][0]);
    if (0 == a) {
      var s = 0;
      return s += e["tr:city"] > t["tr:city"] ? 1 : 0, s += t["tr:city"] > e["tr:city"] ? -1 : 0
    }
    if (0 != a) return new Date(e["tr:date"][0]) - new Date(t["tr:date"][0])
  })
}

function setVimeoVideoGtm() {
  $(".video iframe");
  window.addEventListener ? window.addEventListener("message", onMessageReceived, !1) : window.attachEvent("onmessage", onMessageReceived, !1)
}

function onMessageReceived(e) {
  var t = e.origin.split("//")[1];
  if ("player.vimeo.com" == t) {
    var a = JSON.parse(e.data),
      s = {
        event: "vimeo." + a.event
      };
    if (a.data)
      for (var i in a.data) s[i] = a.data[i];
    dataLayer.push(s), "ready" == a.event && onReady()
  }
}

function post(e, t) {
  var a = $(".video iframe"),
    s = a.attr("src").search(/^http[s]?\:\/\//) == -1 ? window.location.protocol + a.attr("src").split("?")[0] : a.attr("src").split("?")[0],
    i = {
      method: e
    };
  t && (i.value = t);
  var r = JSON.stringify(i);
  a[0].contentWindow.postMessage(r, s)
}

function onReady() {
  post("addEventListener", "play"), post("addEventListener", "pause"), post("addEventListener", "finish"), post("addEventListener", "seek")
}

function setYTVideoGtm() {
  var e = $(".video iframe"),
    t = e.length;
  if (t) {
    var a = e.attr("src"),
      s = getParameterByName("enablejsapi", a) ? getParameterByName("enablejsapi", a) : 1,
      i = getParameterByName("origin", a) ? getParameterByName("origin", a) : location.origin,
      r = addParam(a, "enablejsapi", s),
      n = addParam(r, "origin", i);
    e.attr("src", n)
  }
  var o = document.createElement("script");
  o.src = "https://www.youtube.com/iframe_api";
  var l = document.getElementsByTagName("script")[0];
  l.parentNode.insertBefore(o, l)
}

function onYouTubeIframeAPIReady() {
  $(".video iframe").length && $(".video iframe").attr("src").indexOf("www.youtube.com") != -1 && (player = new YT.Player($(".video iframe").get(0), {
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  }))
}

function onPlayerReady(e) {
  var t = {
      "-1": "ready",
      0: "finish",
      1: "play",
      2: "pause"
    },
    a = {
      event: "youtube." + t[e.target.getPlayerState()]
    };
  dataLayer.push(a)
}

function onPlayerStateChange(e) {
  var t = {
      "-1": "ready",
      0: "finish",
      1: "play",
      2: "pause"
    },
    a = {
      event: "youtube." + t[e.target.getPlayerState()]
    };
  dataLayer.push(a)
}

function getParameterByName(e, t) {
  e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var a = new RegExp("[\\?&]" + e + "=([^&#]*)"),
    s = void 0 != t ? "?" + t.split("?")[1] : location.search;
  return results = a.exec(s), null === results ? "" : decodeURIComponent(results[1].replace(/\+/g, " "))
}

function addParam(e, t, a) {
  var s, i = document.createElement("a"),
    r = /(?:\?|&amp;|&)+([^=]+)(?:=([^&]*))*/gi,
    n = [];
  for (i.href = e; s = r.exec(i.search);) encodeURIComponent(t) != s[1] && n.push(s[1] + (s[2] ? "=" + s[2] : ""));
  return n.push(encodeURIComponent(t) + (a ? "=" + encodeURIComponent(a) : "")), i.search = n.join("&"), i.href
}

function setContent(e, t, a) {
  var s = checkFilters(e, t, a),
    i = sortFilteredData(s),
    r = "";
  if (Object.keys(i).length > 0)
    for (var n in i) {
      r += "<tr class='section'><td colspan='2' class='first-column'><h4>" + n + "</h4></td></tr>";
      for (var o in i[n]) {
        var l = i[n][o];
        title_val = l.absolute_url.split("elastic/")[1], ttl = title_val.split("/")[0], r += "<tr class='job clickable'><td class='first-column'><a class='job-detail-link' href='/about/careers/" + l.departments[0].name.toLowerCase() + "/" + ttl + "/" + l.id + "'>" + l.title + "</a></td><td class='location'>" + l.location.name + "</td>", $("#jobs-table-body").html(r)
      }
    } else r += "<tr class='section'><td colspan='2' class='first-column footer-title'>No jobs match the specified criteria.</td></tr>", $("#jobs-table-body").html(r)
}

function checkFilters(e, t, a) {
  var s = [];
  return s.push(getDepartmentJobs(e)), s.push(getLocationJobs(t)), s.push(getSearchJobs(a)), s = s.reduce(function (e, t) {
    var a = [];
    for (var s in e) t.indexOf(e[s]) != -1 && a.push(e[s]);
    return a
  })
}

function getDepartmentJobs(e) {
  var t = [];
  if ("All Departments" == e) return jobs_dt.jobs;
  for (var a in jobs_dt.jobs) jobs_dt.jobs[a].departments[0].name == e && t.push(jobs_dt.jobs[a]);
  return t
}

function getLocationJobs(e) {
  var t = [];
  if ("All Locations" == e) return jobs_dt.jobs;
  for (var a in jobs_dt.jobs) jobs_dt.jobs[a].location.name == e && t.push(jobs_dt.jobs[a]);
  return t
}

function getSearchJobs(e) {
  var t = [],
    a = new RegExp(e, "gi");
  if ("" == e) return jobs_dt.jobs;
  for (var s in jobs_dt.jobs) jobs_dt.jobs[s].title.match(a) && t.push(jobs_dt.jobs[s]);
  return t
}

function sortFilteredData(e) {
  var t = {};
  e = e.sort();
  for (var a in departments) {
    t[departments[a]] = [];
    for (var s in e) e[s].departments[0].name == departments[a] && t[departments[a]].push(e[s])
  }
  for (var i in t) 0 == t[i].length && delete t[i];
  return t
}

function setBlogHeight() {
  $(".blog-list-section").parent().each(function () {
    var e = 420,
      t = $(this).find(".blog-column");
    t.each(function () {
      $(this).height() > e && (e = $(this).height())
    }), $(window).width() > 768 ? t.height(e) : t.css("height", "auto")
  })
}
var isMobile = !1;
$(document).ready(function () {
    function e(e, t) {
      var a = $(".big-search .tags-wrapper").children();
      "#search-autocomplete" == e && (a = $(".big-search .search-tags-wrapper").children());
      jQuery(e).devbridgeAutocomplete({
        serviceUrl: suggestionsUrl,
        appendTo: $(t),
        dataType: "json",
        paramName: "q",
        autoSelectFirst: !1,
        triggerSelectOnValidInput: !0,
        preserveInput: !0,
        preventBadQueries: !1,
        deferRequestBy: 100,
        groupBy: "section",
        zIndex: 99999,
        forceFixPosition: !0,
        onSearchStart: function (t) {
          delete t.tags, delete t.section;
          var a = $(".tags-wrapper").children();
          "#search-autocomplete" == e && (a = $(".search-tags-wrapper").children());
          for (var s = 0; s < a.length; s++) $($(a)[s]).hasClass("tags") ? t.tags = $($(a)[s]).children().text() : $($(a)[s]).hasClass("section") && (t.section = $($(a)[s]).children().text());
          return t
        },
        onSelect: function (t, a, s, r) {
          if (a)
            if ("section" == s) {
              var n = !1,
                o = null,
                l = $(".tags-wrapper").children();
              "#search-autocomplete" == e && (l = $(".search-tags-wrapper").children());
              for (var c = 0; c < l.length; c++)
                if ($($(l)[c]).hasClass("section")) {
                  n = !0, o = $($(l)[c]).children().text();
                  break
                }
              if (n) {
                if (r.indexOf(o) != -1)
                  if ("#search-autocomplete" == e) {
                    $(".search-tags-wrapper .section span").text(r), $(".search-tags-wrapper .hiddenSection").val(r);
                    var d = 0;
                    $(".s-field").siblings("li").each(function () {
                      d += $(this).width()
                    });
                    var h = $(".search-tags-wrapper").width() - (d + 20);
                    $(".s-field").css("width", h + "px"), $(".search-tags-wrapper li input").focus()
                  } else {
                    $(".tags-wrapper .section span").text(r), $(".tags-wrapper .hiddenSection").val(r);
                    var d = 0;
                    $(".search-field").siblings("li").each(function () {
                      d += $(this).width()
                    });
                    var h = $(".tags-wrapper").width() - (d + 20);
                    $(".search-field").css("width", h + "px"), $(".tags-wrapper li input").focus()
                  }
              } else {
                var p = "<li class='section'><span class='bg-1'>" + r + "</span></li>",
                  u = '<input type="hidden" class="hiddenSection" name="section" value="' + r + '">';
                if ("#search-autocomplete" == e) {
                  $(p).insertBefore(".s-field"), $(".search-tags-wrapper").append(u);
                  var d = 0;
                  $(".s-field").siblings("li").each(function () {
                    d += $(this).width()
                  });
                  var h = $(".search-tags-wrapper").width() - (d + 20);
                  $(".s-field").css("width", h + "px"), $(".search-tags-wrapper li input").focus()
                } else {
                  $(p).insertBefore(".search-field"), $(".tags-wrapper").append(u);
                  var d = 0;
                  $(".search-field").siblings("li").each(function () {
                    d += $(this).width()
                  });
                  var h = $(".tags-wrapper").width() - (d + 20);
                  $(".search-field").css("width", h + "px"), $(".tags-wrapper li input").focus()
                }
              }
            } else {
              var l = $(".tags-wrapper").children();
              "#search-autocomplete" == e && (l = $(".search-tags-wrapper").children());
              for (var g = 0, c = 0; c < l.length; c++)
                if ($($(l)[c]).hasClass("tags")) {
                  if ($($(l)[c]).text() != r) {
                    var p = "<li class='tags'><span class='bg-5'>" + r + "</span></li>",
                      u = '<input type="hidden" class="hiddenTags" name="tags" value="' + r + '">';
                    if ("#search-autocomplete" == e) {
                      $(p).insertBefore(".s-field"), $(".search-tags-wrapper").append(u);
                      var d = 0;
                      $(".s-field").siblings("li").each(function () {
                        d += $(this).width()
                      });
                      var h = $(".search-tags-wrapper").width() - (d + 20);
                      $(".s-field").css("width", h + "px"), $(".search-tags-wrapper li input").focus()
                    } else {
                      $(p).insertBefore(".search-field"), $(".tags-wrapper").append(u);
                      var d = 0;
                      $(".search-field").siblings("li").each(function () {
                        d += $(this).width()
                      });
                      var h = $(".tags-wrapper").width() - (d + 20);
                      $(".search-field").css("width", h + "px"), $(".tags-wrapper li input").focus()
                    }
                  }
                  g++
                }
              if (0 == g) {
                var p = "<li class='tags'><span class='bg-5'>" + r + "</span></li>",
                  u = '<input type="hidden" class="hiddenTags" name="tags" value="' + r + '">';
                if ("#search-autocomplete" == e) {
                  $(p).insertBefore(".s-field"), $(".search-tags-wrapper").append(u);
                  var d = 0;
                  $(".s-field").siblings("li").each(function () {
                    d += $(this).width()
                  });
                  var h = $(".search-tags-wrapper").width() - (d + 20);
                  $(".s-field").css("width", h + "px"), $(".search-tags-wrapper li input").focus()
                } else {
                  $(p).insertBefore(".search-field"), $(".tags-wrapper").append(u);
                  var d = 0;
                  $(".search-field").siblings("li").each(function () {
                    d += $(this).width()
                  });
                  var h = $(".tags-wrapper").width() - (d + 20);
                  $(".search-field").css("width", h + "px"), $(".tags-wrapper li input").focus()
                }
              }
            }
          else window.location.href = i + t.page_url
        }
      })
    }
    "/" + (navigator.language || navigator.userLanguage).slice(0, 2) + "/";
    localepages = ["/", "/de/", "/fr/", "/jp/", "/kr/", "/cn/", "/products", "/de/products", "/fr/products", "/jp/products", "/kr/products", "/cn/products"], locationpath = window.location.pathname, currentlocale = JSON.parse(localeUrl), $(".global-language .language-list li a").click(function () {
      localepages.indexOf(locationpath) != -1 && $.cookie("c_lang", $(this).attr("data-value"), {
        expires: 365,
        path: "/"
      })
    }), $(".footer-content div:last-child ul li a").click(function () {
      localepages.indexOf(locationpath) != -1 && $.cookie("c_lang", $(this).attr("href"), {
        expires: 365,
        path: "/"
      })
    });
    var t = !0;
    if (window.location.hash.length) {
      var a;
      try {
        a = $(window.location.hash), a = a && a.length ? a : $("[name=" + window.location.hash.slice(1) + "]"), a && a.length && setTimeout(function () {
          $(window).scrollTop(a.offset().top - 120)
        }, 1200)
      } catch (s) {}
    }
    $("body a[href*=#]:not([href=#])").on("click", function () {
      if (!($(this).parents("ul").hasClass("nav-tabs") || $(this).parents("ul").hasClass("ui-tabs-nav") || $(this).parents("ul").hasClass("tabs-menu")) && location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
        var e = $(this.hash);
        if (e = e.length ? e : $("[name=" + this.hash.slice(1) + "]"), e.length && t) {
          t = !1;
          var a = $(".tertiary-nav.navbar-fixed-top").height() ? 60 : 110;
          $("html,body").animate({
            scrollTop: e.offset().top - a
          }, 2e3, function () {
            t = !0
          })
        }
      }
    });
    var i = location.host,
      r = location.protocol;
    i = r + "//" + i;
    e("#autocomplete", ".nav-auto-complete"), e("#search-autocomplete", ".search-nav-auto-complete"), $("#searchbar .icon, .m-shortcuts li a.m-search").on("click", function (e) {
      var t = JSON.parse(localeUrl).relative_url_prefix;
      if (window.location.pathname != t + "search") {
        $("#autocomplete, #search-header-autocomplete, #search-autocomplete").devbridgeAutocomplete("hide"), $(".tags-wrapper .search-field input").val(""), $(".header-search-wrapper").addClass("open-search"), $(".header-search-wrapper").slideDown(600);
        var a = 0;
        $(".search-field").siblings("li").each(function () {
          a += $(this).width()
        });
        var s = $(".tags-wrapper").width() - (a + 20);
        return $(".search-field").css("width", s + "px"), $(".big-search input").focus(), e.stopPropagation(), !1
      }
    }), $(".header-search-cancel").on("click", function (e) {
      return $(".tags-wrapper .search-field input").val(""), $(".header-search-wrapper").slideUp(500), $(".header-search-wrapper").removeClass("open-search"), $("#autocomplete, #search-header-autocomplete, #search-autocomplete").devbridgeAutocomplete("hide"), !1
    }), $(".content-wrapper, .blog-outer-wrapper, .tertiary-nav, .product-nav, .quaternary-nav").on("click", function (e) {
      "block" == $(".header-search-wrapper").css("display") && (e.preventDefault(), $(".header-search-wrapper").slideUp(500), $(".header-search-wrapper").removeClass("open-search"), $("#autocomplete, #search-header-autocomplete, #search-autocomplete").devbridgeAutocomplete("hide"))
    }), $(".select2").length && $(".select2").select2();
    var n = $("meta[name='DC.type']"),
      o = $("meta[name='DC.subject']");
    if (n.length > 0) {
      n = n.attr("content");
      var l = $('<input type="hidden" class="hiddenSection" name="section">'),
        c = $("<li class='section'><span class='bg-1'></span></li>");
      $(".tags-wrapper").append(l), c.find("span").html(n), $(c).insertBefore(".search-field"), l.val(n)
    }
    if (o.length > 0) {
      o = o.attr("content");
      var d = '<input type="hidden" class="hiddenTags" name="tags" value="' + o + '">';
      $(".tags-wrapper").append(d);
      var h = "<li class='tags'><span class='bg-5'>" + o + "</span></li>";
      $(h).insertBefore(".search-field")
    }
    $(".big-search #autocomplete, .big-search #search-autocomplete").on("keydown", function (e) {
      if (8 == e.keyCode) {
        var t = null,
          a = window.location.pathname,
          s = JSON.parse(localeUrl).relative_url_prefix;
        t = a != s + "search" ? $(".big-search .tags-wrapper").find("li") : $(".big-search .search-tags-wrapper").find("li");
        var i = $(this);
        if ("" == i.val()) {
          var r = t.length;
          if (r > 1) {
            var n = $(t[r - 2]).attr("class");
            $(t[r - 2]).remove(), $("input[name=" + n + "]").remove()
          }
        }
      }
    }), $(".big-search .tags-wrapper").on("click", "li", function (e) {
      $(this).hasClass("section") ? ($(this).remove(), $(".tags-wrapper input.hiddenSection").remove()) : $(this).hasClass("tags") && ($(this).remove(), $(".tags-wrapper input.hiddenTags").remove());
      var t = 0;
      $(".search-field").siblings("li").each(function () {
        t += $(this).width()
      });
      var a = $(".tags-wrapper").width() - (t + 20);
      $(".search-field").css("width", a + "px"), $(".tags-wrapper li input").focus()
    }), $(".usecase-slider").length && $(".usecase-slider").slick({
      infinite: !0,
      dots: !0,
      slidesToShow: 4,
      arrows: !1,
      slidesToScroll: 4,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    }), $(".usecase-video-slider").length && $(".usecase-video-slider").slick({
      infinite: !1,
      dots: !0,
      arrows: !1,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    }), $(".speaker-stories-slider").length && $(".speaker-stories-slider").slick({
      infinite: !0,
      dots: !0,
      slidesToShow: 1,
      arrows: !1,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    }), $(".more-stories-slider").length && $(".more-stories-slider").slick({
      infinite: !0,
      dots: !0,
      slidesToShow: 1,
      arrows: !1,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    }), $("#meetup-tabs a").length && $("#meetup-tabs a").click(function (e) {
      hideTabs(e, ".meetup", $(this))
    }), $("#trade-tabs a").length && $("#trade-tabs a").click(function (e) {
      hideTabs(e, ".tradeshow", $(this))
    }), $(".video-iframe-wrapper").length && (window.addEventListener("resize", resizer, !1), resizer()), $(".see-notes").length && $(".see-notes").on("click", function (e) {
      e.preventDefault(), "See Release Notes" == $(this).text().trim() ? ($(this).text("Hide Release Notes"), $(this).addClass("active")) : ($(this).text("See Release Notes"), $(this).removeClass("active"))
    }), $(".hide-notes").length && $(".hide-notes").on("click", function (e) {
      e.preventDefault();
      var t = $(this).parent().parent().parent();
      t = t.siblings();
      var a = t.children(".download-links").children("a.see-notes-top");
      $(a).removeClass("active"), $(a).text("See Release Notes")
    }), $(".location-wrapper").length && $(".country-dropdown").change(function (e) {
      var t = $(this).val();
      if ("" != t) {
        "en" == t ? window.location.pathname = "/contact" : window.location.pathname = "/" + $(this).val() + "/contact";
        var a = "/" + $(this).val() + "/contact";
        $(this).val(a)
      }
    }), $("#content").length && ($("#department").on("change", function () {
      var e = $("option:selected", this).text(),
        t = $("#location option:selected").text(),
        a = $("#job_search").val();
      setContent(e, t, a)
    }), $("#location").on("change", function () {
      var e = $("#department option:selected").text(),
        t = $("option:selected", this).text(),
        a = $("#job_search").val();
      setContent(e, t, a)
    }), $("#job_search").on("keyup", function (e) {
      13 == e.which && e.preventDefault();
      var t = $("#department option:selected").text(),
        a = $("#location option:selected").text(),
        s = $(this).val();
      setContent(t, a, s)
    }), $("#search-clear-button").on("click", function (e) {
      e.preventDefault();
      var t = "All Departments",
        a = "All Locations",
        s = "";
      $("#department").select2("data", {
        id: 1,
        text: "All Departments"
      }), $("#location").select2("data", {
        id: 1,
        text: "All Locations"
      }), $("#department").val("all").trigger("change.select2"), $("#location").val("all").trigger("change.select2"), $("#job_search").val("").trigger("change.select2"), setContent(t, a, s)
    })), $(".response dt").length && $(".response dt").click(function () {
      $(this).next("dd").children("dl").slideToggle(), $(this).toggleClass("active")
    }), $(".download-release-notes").length && $(".download-release-notes").click(function (e) {
      e.preventDefault(), $(this).next(".download-release-wrapper").slideToggle(), $(this).toggleClass("active")
    })
  }), $(window).resize(function () {
    setBlogHeight(), resizer()
  }), $(window).on("orientationchange", function () {
    $(".header-search-form, #search-header-autocomplete").is(":visible") && ($("#elastic").removeClass("logo-hide").delay(200), $(".header-search-form").hide(), $("#search-header-autocomplete").devbridgeAutocomplete("hide")), resizer(), setBlogHeight()
  }),
  function () {
    $(window).width() > 768 || $(".nav-menu-list").css("height", window.innerHeight - 160 + "px"), $(window).width() <= 480 && $(".nav-menu-list").css("height", window.innerHeight - 80 + "px"), $(".nav-menu-list-wrap").css("height", window.innerHeight + "px"), $(".embed-container").length > 0 && (window.addEventListener("resize", resizer, !1), resizer()), setBlogHeight()
  }(), jQuery.fn.random = function () {
    var e = Math.floor(Math.random() * this.length);
    return jQuery(this[e])
  };
var isSafari = /^((?!chrome).)*safari/i.test(navigator.userAgent);
1 == isSafari && $("#nav ul li").find("#nav_blog").addClass("safari-desktop");
var isiPad = null != navigator.userAgent.match(/iPad/i);
1 == isiPad && $("#nav ul li").find("#nav_blog").addClass("safari");
var isSafariApple = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
1 == isSafariApple && $("#nav ul li").find("#nav_blog").addClass("safari-apple");
