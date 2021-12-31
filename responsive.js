var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

console.log(`device-width: ${width}`)
if (width<740) {
    var sMenuButton=document.querySelector('.header-menu')

    var sSubnav=document.querySelectorAll('.s-subnav')
    
    console.log(sSubnav)

    function sSubNavHidden() {
        if(sSubnav[0].classList.contains("s-subnav")) {
            for (var i=0;i<sSubnav.length;i++) {
                sSubnav[i].classList.toggle("s-subnav")
            }
        }
        else {
            for (var i=0;i<sSubnav.length;i++) {
                sSubnav[i].classList.toggle("s-subnav")
            }
        }
    }

    sMenuButton.onclick=sSubNavHidden;

    var moreBtn=document.querySelector('.preventDefault')

    // console.log(moreBtn)

    // for (var i=0;i<sSubnav.length-1;i++) {
    //     sSubnav[i].onclick =function(e) {
    //         if(sSubnav[0].style.display == "none") {
    //             for (var i=0;i<sSubnav.length;i++) {
    //                 sSubnav[i].style.cssText = "display: block !important;";
    //             }
    //         }
    //         else {
    //             for (var i=0;i<sSubnav.length;i++) {
    //                 sSubnav[i].style.cssText = "display: none !important;";
    //             }
    //         }
    //     }
    // }

}