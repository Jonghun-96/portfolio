

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector("header");

  const elements = {
    first: document.querySelector('.sticky-text p:nth-child(1)'),
    world: document.querySelector('.sticky-text p:nth-child(2)'),
    imjh:  document.querySelector('.sticky-text p:nth-child(3)')
  };

  const topBar   = document.querySelector('.top-bar');
  const leftBar  = document.querySelector('.left-bar');
  const bottomBar = document.querySelector('.bottom-bar');
  const leftZone  = document.querySelector('.vs-index');
  const rightZone = document.querySelector('.vs-css'); 

  // === fadeIn/fadeOut 함수 ===
  function fadeIn(el) {
    if (!el) return;
    el.style.display = 'block';           // DOM 표시
    requestAnimationFrame(() => {         // 다음 프레임에서 opacity 적용
      el.style.opacity = '1';
    });
  }

  function fadeOut(el) {
    if (!el) return;
    el.style.opacity = '0';
    el.addEventListener('transitionend', function handler() {
      el.style.display = 'none';         // 트랜지션 끝나면 완전히 숨김
      el.removeEventListener('transitionend', handler);
    });
  }

  function handleScroll() {
    const y = window.scrollY || window.pageYOffset;

    // === header 처리 ===
    if (y < 1200) {
      header.style.opacity = 0;
      header.style.visibility = 'hidden';
    } else {
      header.style.opacity = 1;
      header.style.visibility = 'visible';
    }

    // === .sticky-text p fade 처리 ===
    if (y > 1000) {
      Object.values(elements).forEach(fadeOut);
    } else if (y > 100) {
      fadeIn(elements.first);
      fadeOut(elements.world);
      fadeIn(elements.imjh);
    } else {
      fadeIn(elements.first);
      fadeIn(elements.world);
      fadeOut(elements.imjh);
    }

    // === sticky-section 애니메이션 ===
    const add = y > 400;
    if (topBar) topBar.classList.toggle('slideTop', add);
    if (leftBar) leftBar.classList.toggle('slideLeft', add);
    if (bottomBar) bottomBar.classList.toggle('slideBottom', add);
    if (leftZone) {
      leftZone.classList.toggle('slideLeft', add);
      leftZone.classList.toggle('slideTop', add);
    }
    if (rightZone) {
      rightZone.classList.toggle('slideRight', add);
      rightZone.classList.toggle('slideTop', add);
    }
  }

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll); // 로드 직후 한 번 실행
});





// nav 버튼누르면 이동하는 이벤트

// jonghun. 누르면 맨위로 이동

var btnStop = true;
function gnb_click(e){ // gnb 클릭 애니메이션 이벤트
	if(btnStop == true){
		btnStop = false;
		setTimeout(function(){
			btnStop = true;
		}, 500)
		if(e == 0){
      $('html').animate({scrollTop : 0}, 1000, 'swing');
    }
	}
}

// 메뉴 누르면 해당 위치로 이동
document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('.nav');

  navButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();  // href="#" 같은 기본 동작 차단
      const targetId = btn.dataset.target;
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

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





// 바깥 영역 터치 시 상태 초기화
document.addEventListener('click', e => {
  if (!e.target.closest('.project-item') && activeItem) {
    activeItem.classList.remove('show-second');
    activeItem = null;
  }
});







