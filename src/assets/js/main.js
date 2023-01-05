window.addEventListener('goftino_ready', function () {
  Goftino.sendMessage({
    text: 'سلام ، شما می توانید سوالات خود را به صورت آنلاین بپرسید و در کوتاه ترین زمان ممکن پاسخ را دریافت کنید !!'
  });
  Goftino.getUser(function(data){
    if(data.status ==='success'){
        document.getElementById('data1').innerHTML = data.name;
        document.getElementById('data2').innerHTML = data.email;
        document.getElementById('data3').innerHTML = data.phone;
        document.getElementById('data4').innerHTML = data.about;
        document.getElementById('data5').innerHTML = data.avatar;
        document.getElementById('data6').innerHTML = data.firstVisit;
        document.getElementById('data7').innerHTML = data.pageView;
        document.getElementById('data8').innerHTML = data.location;
        document.getElementById('data9').innerHTML = data.browser;
        document.getElementById('data9').innerHTML = data.browser;
        document.getElementById('data10').innerHTML = data.os;
        document.getElementById('data11').innerHTML = data.hasChat;
        document.getElementById('data12').innerHTML = data.tags;
    }
  });
});

$(document).ready(function () {
  $(".counter").each(function () {
    var $this = $(this);
    var countTo = $this.attr('data-count');
    // console.log(countTo);
    $({countNum:$this.text()}).animate({
      countNum:countTo,
    },
    {
      duration:55000,
      easing:'linear',
      step:function(){
        $this.text(Math.floor(this.countNum));
      },
      complete:function(){
        $this.text(this.countNum);
      }
    }
    
    )
  });
});


$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      rtl:true,
      items: 4,
      loop: true,
      margin: 0,
      nav:true,
      dots:true,
      center: true,
      autoplay: true,
      slideBy:3,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass:true,
      responsive:{
          0:{
            items:1,
            nav:true,
          },
          600:{
            items:1,
            nav:true,
          },
          1000:{
            items:1,
            center: true,
          },
          1200:{
            items:1,
            center: true,
        }
      }
    });
});
$(document).ready(function(){
  $('#btnscroll').click(function(){
    $('body,html').animate({
        scrollTop:0
    });
  });
});

$(document).ready(function(){
  $('.menu-toggle-button').click(function(){
    $('.nav-container').addClass("active-menu");
    $('body').css({
      overflow: "hidden"
    });
  });
  $('.nav-container .close-menu-btn').click(function(){
    $('.nav-container').removeClass("active-menu");
    $('body').css({
      overflowY: "visible"
    });
  });
});
$(document).ready(function(){
  $('.webservices-btn').click(function(){
    $('.webservices-section').toggleClass("active-webservices");
  });
});

$(document).ready(function(){
  $(".gallery-inner").click(function(){
      $(".gallery-inner").removeClass("active");
      $(this).addClass("active");
   });
});

$(document).ready(function(){
  $('#show-pass').click(function(){
      if($('#password').attr('type') === 'password'){
          $('#password').attr('type','text');
          $('#show-pass').removeClass('fa-eye').addClass('fa-eye-slash');
      }
      else{
          $('#password').attr('type','password');
          $('#show-pass').addClass('fa-eye').removeClass('fa-eye-slash');
      }
  });
});

$(document).ready(function(){
  $('#system .menu-btn').click(function(){
    $('.sidebar-system-container').addClass("active-sidebar-system");
  });
  $('#system .close-menu-btn').click(function(){
    $('.sidebar-system-container').removeClass("active-sidebar-system");
  });
});

$(document).ready(function(){
  $('#system .anim-width-sidebar-btn').click(function(){
    $('#system').toggleClass("active-anim-sidebar");
  });
});


$("#DateSelect").persianDatepicker({
  months: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
     dowTitle: ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه"],
     shortDowTitle: ["ش", "ی", "د", "س", "چ", "پ", "ج"],
     showGregorianDate: !1,
     persianNumbers: !0,
     formatDate: "YYYY/MM/DD",
     selectedBefore: !1,
     selectedDate: null,
     startDate: null,
     endDate: null,
     prevArrow: '\u25c4',
     nextArrow: '\u25ba',
     theme: 'default',
     alwaysShow: !1,
     selectableYears: null,
     selectableMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
     cellWidth: 45, // by px
     cellHeight: 30, // by px
     fontSize: 15, // by px                
     isRTL: !1,
     calendarPosition: {
         x: 0,
         y: 0,
     },
     onShow: function () { },
     onHide: function () { },
     onSelect: function () { },
     onRender: function () { }
});

var document = element.editor.getDocument();
document.toString();
element.editor.getDocument();
var element = document.querySelector("trix-editor");
element.editor 
var document = element.editor.getDocument();
document.isEqualTo(element.editor.getDocument());
