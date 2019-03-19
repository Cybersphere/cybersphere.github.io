// identify the elements
var el1 = document.querySelector('.box1');
var el2 = document.querySelector('.box2');

// built the tween objects
var tween1 = KUTE.fromTo(
 el1,
{translateX:0, rotateX:0,rotateY:0}, {translateX:250,rotateX:360, rotateY:370},{parentPerspective:800, parentPerspectiveOrigin: '100% top', duration: 2000, repeat:1, yoyo:true, easing: 'easingCubicOut'}).start();

var tween2 = KUTE.fromTo(
el2,{translateX:0,rotateX:0,rotateY:0}, {translateX:-250,rotateX:360, rotateY:370},
{perspective:800, perspectiveOrigin: 'center top', duration: 2000, repeat:1, yoyo:true, easing: 'easingCubicOut'}).start();