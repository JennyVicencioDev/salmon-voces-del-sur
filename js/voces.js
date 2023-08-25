$(function () {
   'use strict';
   
   // Bootstrap validation 
   // (borrar si no se utilizará esta validación)
   let forms = document.querySelectorAll('.needs-validation')
   Array.prototype.slice.call(forms)
   .forEach(function (form) {
      form.addEventListener('submit', function (event) {
         event.preventDefault();
         if (!form.checkValidity()) { 
            event.stopPropagation(); 
         }
         form.classList.add('was-validated');
         
         // añadir aquí más validaciones si se usará bootstrap validation

      }, false);
   })


   // Flickity Slider
   var $vocesCarousel = $('.voces-cards-container').flickity({
      cellAlign: 'center',
      contain: true,
      prevNextButtons: false,
      pageDots: true,
      draggable: true,
      groupCells: true,
      on: {
         select: function() {
            let dots = $('.flickity-page-dots', this.$element);
            let dotsLength = this.pageDots.dots.length;
            dotsLength == 1 ? dots.hide() : dots.show();
         }
      }
    });

    $('.modal').on('shown.bs.modal', function(e) {
      window.dispatchEvent(new Event('resize'));
    });

    // Header fixed
    const fixTopLogoOnScroll = () => {
       if($(window).scrollTop() >= 200) {
         $('.main-header__logo').addClass('fixed-logo');
       }
       else {
         $('.main-header__logo').removeClass('fixed-logo');
       }
    }
    fixTopLogoOnScroll();
    $(window).on('scroll', fixTopLogoOnScroll);

   // Collapse "Leer más" texto nosotros
    var maxTextLength = 300; // largo máximo del texto
    $('.nosotros-text p').each(function(i, el) {
        var str = $(el).text();
        if ($.trim(str).length > maxTextLength) {
            var subStr = str.substring(0, maxTextLength);
            console.log(str);
            var hiddenStr = str.substring(maxTextLength, $.trim(str).length + maxTextLength);
            console.log(hiddenStr);

            $(el).empty().html(subStr);
            $(el).append('<span class="dots">... </span>');
            $(el).append(`<span class="collapse" id="readmore-${i+1}">` + hiddenStr + '</span>');
            $(el).append(`<a href="#" class="btn-readmore" data-bs-toggle="collapse" data-bs-target="#readmore-${i+1}"></a>`);
            $('.btn-readmore', el).on('click', function() {
               $(this).toggleClass('show');
               $('.dots', el).toggle();
            });
        }
      });
});