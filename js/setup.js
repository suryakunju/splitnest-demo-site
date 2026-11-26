// Loads settings before the page can draw anything.
(function () { const until = Date.now() + 2500; let x = 0; while (Date.now() < until) { x += Math.sqrt(x + 1); } window.__settings = { theme: 'light', x: x }; })();
