// https://cdn.jsdelivr.net/gh/sumsung524/docsify-backTop/dist/docsify-backTop.min.js

var docsifyBackTop = new Object();
window.addEventListener("DOMContentLoaded", function () {
    !(function ({
        logo: t = '<svg t="1662288563130" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3633" width="200" height="200"><path d="M513 103.7c-226.1 0-409.4 183.3-409.4 409.4S286.9 922.6 513 922.6s409.4-183.3 409.4-409.4S739.1 103.7 513 103.7z m153.5 364.7c-5.2 5.3-12.1 7.9-19 7.9s-13.8-2.6-19-7.9L545.1 385c0 0.4 0.1 0.7 0.1 1.1V705c0 11.1-5.7 20.9-14.4 26.6-4.7 4.2-10.9 6.7-17.7 6.7-6.8 0-13-2.5-17.7-6.7-8.7-5.7-14.4-15.5-14.4-26.6V386.1c0-0.4 0-0.7 0.1-1.1l-83.4 83.4c-10.5 10.5-27.5 10.5-38 0s-10.5-27.5 0-38L494 295.9c10.5-10.5 27.5-10.5 38 0l134.5 134.5c10.5 10.4 10.5 27.5 0 38z" fill="#2096ff" p-id="3634"></path></svg>',
        bottom: e = 15,
        right: i = 15,
        size: l = 32,
        bgColor: o = "",
    }) {
        var n = document.body,
            s = document.createElement("div");
        (s.className = "backTop"),
            (s.innerHTML = t),
            n.appendChild(s),
            (s.style.opacity = 0),
            (s.style.position = "fixed"),
            (s.style.bottom = e + "px"),
            (s.style.right = i + "px"),
            (s.style.width = l + "px"),
            (s.style.height = s.style.width),
            (s.style.textAlign = "center"),
            (s.style.lineHeight = s.style.width),
            (s.style.backgroundColor = o),
            (s.style.borderRadius = "50%"),
            (s.style.cursor = "pointer"),
            (s.style.transition = "opacity 0.5s"),
            s.children.length &&
                ((s.children[0].style.width = "100%"),
                (s.children[0].style.height = "100%"));
        s.addEventListener("click", function () {
            var t, e, i;
            (t = window),
                (e = 0),
                clearInterval(t.timer),
                (t.timer = setInterval(function () {
                    var l = (e - t.scrollY) / 10;
                    (l = l > 0 ? Math.ceil(l) : Math.floor(l)),
                        t.scrollY == e && (clearInterval(t.timer), i && i()),
                        window.scroll(0, t.scrollY + l);
                }, 15));
        }),
            window.addEventListener("scroll", function () {
                s.style.opacity = window.scrollY > 0 ? 1 : 0;
            });
    })(docsifyBackTop);
});
