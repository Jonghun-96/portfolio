






/////////////////////////////////////////////////


// sticky-section 동안 header가 안보이게 하는 코드 


const header = document.querySelector("header");
const htmlEl = document.documentElement;
const bodyEl = document.body;

function toggleUI() {
  if (window.scrollY < 1000) {
    // 헤더 숨기기
    header.style.opacity = 0;
    header.style.visibility = "hidden";

  } else {
    // 헤더 보이기
    header.style.opacity = 1;
    header.style.visibility = "visible";
  }
}

// 스크롤 이벤트
window.addEventListener("scroll", toggleUI);

// ✅ 페이지 로드 직후에도 한 번 실행
window.addEventListener("load", toggleUI);





//스크롤 내리면 .hello 이벤트 발생

const world = document.querySelector('.hello p:nth-child(2)');
const imjh  = document.querySelector('.hello p:nth-child(3)');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY || window.pageYOffset;

  if (scrollY > 100) {
    world.style.opacity = 0;
    imjh.style.opacity  = 1;
  } else {
    world.style.opacity = 1;
    imjh.style.opacity  = 0;
  }
});




//스크롤에 따라 sticky-section 이벤트 발생

document.addEventListener('DOMContentLoaded', () => {
  const topBar   = document.querySelector('.top-bar');
  const leftBar  = document.querySelector('.left-bar');

  const leftZone  = document.querySelector('.vs-index');
  const rightZone = document.querySelector('.vs-css'); 


  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || window.pageYOffset;


    // topBar
    if (topBar) {
      if (scrollY > 700) topBar.classList.add('slideTop');
      else topBar.classList.remove('slideTop');
    }

    // leftBar
    if (leftBar) {
      if (scrollY > 700) leftBar.classList.add('slideLeft');
      else leftBar.classList.remove('slideLeft');
    }

    // leftZone
    if (leftZone) {
      if (scrollY > 700) leftZone.classList.add('slideLeft','slideTop');
      else leftZone.classList.remove('slideLeft','slideTop');
    }

    // rightZone
    if (rightZone) {
      if (scrollY > 700) rightZone.classList.add('slideRight','slideTop');
      else rightZone.classList.remove('slideRight','slideTop');
    }
  });
});

// 버튼누르면 이동하는 이벤트

var btnStop = true;
function gnb_click(e){ // gnb 클릭 애니메이션 이벤트
	if(btnStop == true){
		btnStop = false;
		setTimeout(function(){
			btnStop = true;
		}, 500)
		if(e == 0){
      $('html').animate({scrollTop : 0}, 500, 'swing');
    }
		if(e == 1){
			$('html').animate({scrollTop : 310}, 500, 'swing');
		}
		if(e == 2){
			$('html').animate({scrollTop : 3010}, 500, 'swing');
		}
		if(e == 3){
			$('html').animate({scrollTop : 3610}, 500, 'swing');
		}
	}
}


//이미지가 천천히 변하는 이벤트

$(document).ready(function(){

  $('.container>div').mouseover(function() {
	$(this).find('.firstImg').stop().fadeOut(200);
    $(this).find('.secondImg').stop().fadeIn(200);

		$(this).find('.splactTxt').stop().fadeOut(400);

		$(this).find('.firstImgW').stop().fadeOut(400);
    $(this).find('.secondImgW').stop().fadeIn(400);
    $(this).find('.fadeTxt').stop().fadeIn(400);
	});

  $('.container>div').mouseout(function() {
    $(this).find('.secondImg').stop().fadeOut(200);
		$(this).find('.firstImg').stop().fadeIn(200);

		$(this).find('.splactTxt').stop().fadeIn(400);

    $(this).find('.secondImgW').stop().fadeOut(400);
    $(this).find('.firstImgW').stop().fadeIn(400);
		$(this).find('.fadeTxt').stop().fadeOut(400);
  });
});



//이미지 클릭하면 선택한 이미지의 modal 띄우는 이벤트

$('.dClick').click(function(){
  var index = $(this).index();
  $('.modal').hide();
  $('figure').fadeIn(150); 
  $('.pop-modal').eq(index).fadeIn(150);
  $('#head').fadeOut(150);
  // console.log(index);
})

$('.modalClose').click(function(){
  $('figure').fadeOut(150);
  $('.modal').fadeOut(150);
  $('#head').fadeIn(150);
})

$('.modal-bg').click(function(){
  $('figure').fadeOut(150);
  $('.modal').fadeOut(150);
  $('#head').fadeIn(150);
})








//.d1 클릭하면 .modal-box1 제외한 나머지 .modal-box00을 display:none시킴

document.querySelectorAll("[class^=d]").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    // 모든 모달 숨김
    document.querySelectorAll(".modal-box").forEach(box => {
      box.style.display = "none";
    });

    // 클릭한 버튼과 같은 번호의 모달만 표시
    document.querySelector(`.modal-box${index+1}`).style.display = "block";
  });
});





//modal에 맞는 icon만 보여지는 코드


$("[class^=d]").on("click", function() {
  const index = $(this).attr("class").match(/d(\d+)/)[1]; // d뒤 숫자 뽑기
  $(".main-icon").hide();               // 모든 main-icon 숨김
  $(".main-icon" + index).show();       // 해당 번호만 보이기
});



//////////////////////////////////////////////////////////////







