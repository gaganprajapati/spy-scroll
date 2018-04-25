// $(document).ready(function () {
//     $('.menu-item').click(function () {
//         var index = $(this).index();
//         var elmnt = document.getElementsByClassName('content');
//         // console.log(elmnt[index]);
//         elmnt[index].scrollIntoView();
//         // $('.view-port').scrollTop( $('.content:eq(' + index + ')').offset().top - 48);
//         // $('.view-port').animate({ scrollTop: $('.content:eq(' + index + ')').offset().top - $('.view-port').offset().top + 6 }, { duration: 'slow', easing: 'swing' });
//         console.log(index);
//     });

//     $('.view-port').on('resize scroll', function () {
//         $('.content').each(function () {
//             // var activeColor = $(this).attr('id');
//             let index = $(this).index();
//             if ($(this).isInViewport()) {
//                 console.log(index);
//                 $('.menu-item:eq(' + index + ')').addClass('active');
//             } else {
//                 $('.menu-item:eq(' + index + ')').removeClass('active');
//             }
//         });
//     });

//     $.fn.isInViewport = function () {
//         var elementTop = ($(this).offset().top - 50);
//         var elementBottom = elementTop + $(this).outerHeight();
//         return elementTop <= 0 && elementBottom > 0;
//     };
// });

document.getElementById('view-port').addEventListener('scroll', function () {
    var elements = document.getElementsByClassName('content');
    for (var i = 0; i < elements.length; i++) {
        if (isInViewport(elements[i])) {
            document.getElementsByClassName('menu-item')[i].classList.add('active');
        } else {
            document.getElementsByClassName('menu-item')[i].classList.remove('active');
        }
    }
});

function isInViewport(element) {
    var elementTop = element.offsetTop - 55;
    var elementBottom = elementTop + element.offsetHeight;
    var viewPortScrollTop = document.getElementById('view-port').scrollTop;
    return elementTop <= viewPortScrollTop && elementBottom > viewPortScrollTop;
}

Array.from(document.getElementsByClassName('menu-item')).forEach(function (element, index) {
    element.addEventListener('click', function () {
        var elmnt = document.getElementsByClassName('content');
        elmnt[index].scrollIntoView();
    });
});