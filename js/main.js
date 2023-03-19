$(function(){
  $('.photoshop-progressbar').rProgressbar({
    percentage: 99,
    fillBackgroundColor: '#2a4896',
    backgroundColor: '#EEEEEE',
    borderRadius: '8px',
    height: '10px',
    width: '410px',
    ShowProgressCount: true,
  });
  $('.illustrator-progressbar').rProgressbar({
    percentage: 75,
    fillBackgroundColor: '#5d3b15',
    backgroundColor: '#EEEEEE',
    borderRadius: '8px',
    height: '10px',
    width: '410px',
    ShowProgressCount: true,
  });
  $('.Dreamweaver-progressbar').rProgressbar({
    percentage: 75,
    fillBackgroundColor: '#344a1f',
    backgroundColor: '#EEEEEE',
    borderRadius: '8px',
    height: '10px',
    width: '410px',
    ShowProgressCount: true,
  });
  $('.Aftereffect-progressbar').rProgressbar({
    percentage: 80,
    fillBackgroundColor: '#392960',
    backgroundColor: '#EEEEEE',
    borderRadius: '8px',
    height: '10px',
    width: '410px',
    ShowProgressCount: true,
  });














  $('.slides').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: '.port_right i',
    prevArrow: '.port_left i',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 1
        }
      }
    ]
  });


  $('.testi_slides').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: '.testi_right i',
    prevArrow: '.testi_left i',
  });

  $('.blog_slides').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: '.blog_right i',
    prevArrow: '.blog_left i',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 1
        }
      }
    ]
  });






});