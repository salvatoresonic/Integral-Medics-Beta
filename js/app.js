window.addEventListener('load', function(){
    new Glider(this.document.querySelector('.carousel__lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        duration:3.25,
        rewind: true,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        },
        
        responsive: [
            {
              // screens greater than >= 650px
              breakpoint: 650,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 2,
                duration: 2.25
              }
            },{
              // screens greater than >= 900px
              breakpoint: 900,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                duration: 2.25
              }
            },{
                // screens greater than >= 1024px
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  duration: 2.25
                }
              }
          ]
    })
})

//const btnAnt = document.querySelector('#carousel__anterior__btn')
//const btnSig = document.querySelector('#carousel__siguiente__btn')
//console.log(btnAnt)

