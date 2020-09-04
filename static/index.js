let titleBtn = document.getElementsByClassName('title-button')[0];
let head = document.getElementsByClassName('header')[0];
let menu = document.getElementsByClassName('right-menu')[0];

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



// function controlHeader(){
//     let scrollTop = document.documentElement.scrollTop

//     if(scrollTop > 80){
//         $('header').addClass('scroll')
//         console.log($('header').classList)
//     }else{
//         $('header').removeClass('scroll')

//     }
    
// }

function controlHeader(){
    let scrollTop = document.documentElement.scrollTop

    if(scrollTop > 80){
        document.getElementById('nav-title').setAttribute("class",'scroll' );
    
    
    }else{
        document.getElementById('nav-title').setAttribute("class",'' );

    }
    
}
