(function() {
  var stars = [
    { left: 5, top: 8, size: 10, anim: 'sparkle1', dur: 3 },
    { left: 12, top: 52, size: 8, anim: 'sparkle2', dur: 4.5 },
    { left: 20, top: 30, size: 12, anim: 'sparkle3', dur: 6 },
    { left: 30, top: 6, size: 7, anim: 'sparkle1', dur: 3.5 },
    { left: 40, top: 78, size: 10, anim: 'sparkle2', dur: 5 },
    { left: 50, top: 20, size: 8, anim: 'sparkle3', dur: 5.5 },
    { left: 62, top: 48, size: 12, anim: 'sparkle1', dur: 4 },
    { left: 72, top: 14, size: 9, anim: 'sparkle2', dur: 3.8 },
    { left: 82, top: 65, size: 10, anim: 'sparkle3', dur: 6.5 },
    { left: 90, top: 35, size: 8, anim: 'sparkle1', dur: 4.2 },
    { left: 46, top: 42, size: 11, anim: 'sparkle2', dur: 5.2 },
    { left: 58, top: 85, size: 9, anim: 'sparkle3', dur: 3.2 },
    { left: 8, top: 88, size: 8, anim: 'sparkle1', dur: 5.8 },
    { left: 95, top: 72, size: 10, anim: 'sparkle2', dur: 4.8 },
    { left: 35, top: 55, size: 9, anim: 'sparkle3', dur: 3.6 },
    { left: 75, top: 90, size: 11, anim: 'sparkle1', dur: 6.2 },
    { left: 2, top: 38, size: 9, anim: 'sparkle2', dur: 4.1 },
    { left: 16, top: 18, size: 8, anim: 'sparkle3', dur: 5.4 },
    { left: 24, top: 68, size: 7, anim: 'sparkle1', dur: 3.3 },
    { left: 34, top: 45, size: 12, anim: 'sparkle2', dur: 6.8 },
    { left: 48, top: 4, size: 9, anim: 'sparkle3', dur: 4.6 },
    { left: 56, top: 62, size: 8, anim: 'sparkle1', dur: 5.1 },
    { left: 66, top: 28, size: 7, anim: 'sparkle2', dur: 3.9 },
    { left: 78, top: 80, size: 11, anim: 'sparkle3', dur: 5.7 },
    { left: 88, top: 12, size: 9, anim: 'sparkle1', dur: 4.4 },
    { left: 42, top: 92, size: 8, anim: 'sparkle2', dur: 6.1 },
    { left: 14, top: 76, size: 7, anim: 'sparkle3', dur: 3.7 },
    { left: 70, top: 50, size: 10, anim: 'sparkle1', dur: 5.3 },
    { left: 92, top: 58, size: 8, anim: 'sparkle2', dur: 4.3 },
    { left: 22, top: 44, size: 9, anim: 'sparkle3', dur: 6.4 },
    { left: 54, top: 34, size: 11, anim: 'sparkle1', dur: 3.4 },
    { left: 84, top: 24, size: 8, anim: 'sparkle2', dur: 5.6 },
    { left: 28, top: 95, size: 7, anim: 'sparkle3', dur: 4.7 },
    { left: 60, top: 8, size: 10, anim: 'sparkle1', dur: 6.6 },
    { left: 44, top: 70, size: 9, anim: 'sparkle2', dur: 3.1 },
    { left: 76, top: 42, size: 8, anim: 'sparkle3', dur: 5.9 },
    { left: 96, top: 88, size: 7, anim: 'sparkle1', dur: 4.9 },
    { left: 38, top: 16, size: 10, anim: 'sparkle2', dur: 6.3 },
    { left: 68, top: 56, size: 9, anim: 'sparkle3', dur: 3.5 },
    { left: 18, top: 60, size: 8, anim: 'sparkle1', dur: 5.5 }
  ];

  var wanders = ['wander1', 'wander2', 'wander3'];

  stars.forEach(function(s, i) {
    var el = document.createElement('div');
    el.className = 'sparkle-star';
    el.style.left = s.left + '%';
    el.style.top = s.top + '%';
    el.style.width = s.size + 'px';
    el.style.height = s.size + 'px';
    var wanderName = wanders[i % 3];
    var wanderDur = (8 + (i % 7) * 2);
    el.style.animation = s.anim + ' ' + s.dur + 's ease-in-out infinite, ' + wanderName + ' ' + wanderDur + 's ease-in-out infinite';
    document.body.appendChild(el);
  });
})();
