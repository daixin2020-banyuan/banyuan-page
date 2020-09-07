let titleBtn = document.getElementsByClassName('title-button')[0];
let head = document.getElementsByClassName('header')[0];
let menu = document.getElementsByClassName('right-menu')[0];
let details = document.getElementsByClassName('menu-details');

function reName(){
    for(let i = 0 ; i <details.length;i++){
        if(details[i].getAttribute('class') === 'menu-details on'){
            details[i].setAttribute("class",'menu-details' )
        }
    }
}
// $('.menu-details').css('color','rgb(238, 186, 54)')
// console.log($('.menu-details'))

controlHeader();

window.onload = function(){
    
        setTimeout(function(){ 
                document.getElementsByTagName('body')[0].setAttribute("class",'' );
        }, 10);
   
}

$(window).scroll(function(){
    controlHeader();
})


$('.menu-details').click(function(event){
    event.preventDefault();

    let href = $(this).attr('href');

    if($(`.${href}`).length>0){
        document.documentElement.scrollTop= $(`.${href}`).offset().top
        reName();
        $(this).addClass("on")
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



