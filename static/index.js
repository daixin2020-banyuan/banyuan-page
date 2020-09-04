let titleBtn = document.getElementsByClassName('title-button')[0];
let head = document.getElementsByClassName('header')[0];
let menu = document.getElementsByClassName('right-menu')[0];
let details = document.getElementsByClassName('menu-details');
console.log(details)

controlHeader();

$(window).scroll(function(){
    controlHeader();
})


$('.menu-details').click(function(event){
    event.preventDefault();

    let href = $(this).attr('href');

    if($(`.${href}`).length>0){
        document.documentElement.scrollTop= $(`.${href}`).offset().top
    }
})

titleBtn.onclick = function(){
    if(menu.style.display !== 'flex'){
        menu.style.display = 'flex'
    }else{
        menu.style.display = 'none'
    }

}

window.resize = function(){
    if( document.body.offsetWidth > 1000 ){
        menu.style.display = 'flex';
    }
}

function controlHeader(){
    let scrollTop = document.documentElement.scrollTop
    if(scrollTop > 80){
        document.getElementById('nav-title').setAttribute("class",'scroll' );
    }else{
        document.getElementById('nav-title').setAttribute("class",'' );
    }
    
}

window.onscroll = function() {
    let scrollTop = document.documentElement.scrollTop

        if (scrollTop>1 && scrollTop <650){
            document.getElementById('home').setAttribute("class",'red')
            document.getElementById('about').setAttribute("class",'menu-details')
            document.getElementById('service').setAttribute("class",'menu-details')
            document.getElementById('blog').setAttribute("class",'menu-details')
            document.getElementById('contact').setAttribute("class",'menu-details')
        }
        else if (scrollTop > 650 && scrollTop <1783){
            document.getElementById('about').setAttribute("class",'red')
            document.getElementById('home').setAttribute("class",'menu-details')
            document.getElementById('service').setAttribute("class",'menu-details')
            document.getElementById('blog').setAttribute("class",'menu-details')
            document.getElementById('contact').setAttribute("class",'menu-details')
        }else if (scrollTop > 1783 && scrollTop <2644){
            document.getElementById('service').setAttribute("class",'red')
            document.getElementById('home').setAttribute("class",'menu-details')
            document.getElementById('about').setAttribute("class",'menu-details')
            document.getElementById('blog').setAttribute("class",'menu-details')
            document.getElementById('contact').setAttribute("class",'menu-details')
        }else if(scrollTop > 2644 && scrollTop <3818){
            document.getElementById('blog').setAttribute("class",'red')
            document.getElementById('home').setAttribute("class",'menu-details')
            document.getElementById('about').setAttribute("class",'menu-details')
            document.getElementById('service').setAttribute("class",'menu-details')
            document.getElementById('contact').setAttribute("class",'menu-details')
        }else if(scrollTop >3818){
            document.getElementById('contact').setAttribute("class",'red')
            document.getElementById('home').setAttribute("class",'menu-details')
            document.getElementById('about').setAttribute("class",'menu-details')
            document.getElementById('service').setAttribute("class",'menu-details')
            document.getElementById('blog').setAttribute("class",'menu-details')
        }

}
    



// window.onscroll = function(){
//     var scrollTop = document.documentElement.scrollTop
//     console.log(scrollTop)

//     controlHeader();


//     if( scrollTop <650 ){
//         for(i = 0 ; i < 5;i++){
//             if ( i = 0 ){
//                 details[i].setAttribute("class",'red' )
//             }else{
//                 details[i].setAttribute("class",'menu-details' )
//             }
//         }
//     }

    // else if(scrollTop > 650 && scrollTop <1783){
    //     for(i = 0 ; i < 5;i++){
    //         if ( i = 1 ){
    //             details[i].setAttribute("class",'red' )
    //         }else{
    //             details[i].setAttribute("class",'menu-details' )
    //         }
    //     }

    // }
    // else if(scrollTop > 1783 && scrollTop <2644){
    //     for(i = 0 ; i < 5;i++){
    //         if ( i = 2 ){
    //             details[i].setAttribute("class",'red' )
    //         }else{
    //             details[i].setAttribute("class",'menu-details' )
    //         }
    //     }
        
    // }
    // else if(scrollTop > 2644 && scrollTop <3818){
    //     for(i = 0 ; i < 5;i++){
    //         if ( i = 3 ){
    //             details[i].setAttribute("class",'red' )
    //         }else{
    //             details[i].setAttribute("class",'menu-details' )
    //         }
    //     }

    // }else if(scrollTop >3818){
    //     for(i = 0 ; i < 5;i++){
    //         if ( i = 4 ){
    //             details[i].setAttribute("class",'red' )
    //         }else{
    //             details[i].setAttribute("class",'menu-details' )
    //         }
    //     }
    // }

// }