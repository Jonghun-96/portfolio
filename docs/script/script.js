

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


  // === line number 생성 ===

  function populateIndexNumbers(start, end) {
    const container = document.querySelector('.index-number');
    if (!container) return;
    for (let i = start; i <= end; i += 1) {
      const span = document.createElement('span');
      span.textContent = i;
      container.appendChild(span);
    }
  }


  populateIndexNumbers(1, 47);

  function populateLineNumbers(start, end) {
    const container = document.querySelector('.css-number');
    if (!container) return;
    for (let i = start; i <= end; i += 1) {
      const span = document.createElement('span');
      span.textContent = i;
      container.appendChild(span);
    }
  }

  populateLineNumbers(776, 822);

  // === 프로젝트 카드 동적 생성 ===
  const projectCards = [
    {
      id: 1,
      firstImg: { src: 'img/whale1.jpg', alt: 'whale1', className: 'whale1 firstImgW' },
      secondImg: { src: 'img/whale2.jpg', alt: 'whale2', className: 'whale2 secondImgW' },
      labels: [
        {
          type: 'fade',
          title: 'The Whale',
          description:
            '고래를 모티브로 디자인 한 해양 체험관. 고래가 입을 벌리고 있는 모습을 형상화하였고 지느러미와 유선형 몸체를 디자인에 적용했다. 푸른빛의 고래와 하얀 파도의 색감을 조화롭게 녹여냈다.',
        },
      ],
    },
    {
      id: 2,
      firstImg: { src: 'img/apache1.png', alt: 'apache1', className: 'apache1 firstImg' },
      secondImg: { src: 'img/apache2.png', alt: 'apache2', className: 'apache2 secondImg' },
      labels: [{ type: 'text', html: 'APACHE' }],
    },
    {
      id: 3,
      firstImg: { src: 'img/pulse1.png', alt: 'pulse1', className: 'pulse1 firstImg' },
      secondImg: { src: 'img/pulse2.png', alt: 'pulse2', className: 'pulse2 secondImg' },
      labels: [{ type: 'text', html: 'PULSE' }],
    },
    {
      id: 4,
      firstImg: { src: 'img/walker1.png', alt: 'walker1', className: 'walker1 firstImg' },
      secondImg: { src: 'img/walker2.png', alt: 'walker2', className: 'walker2 secondImg' },
      labels: [{ type: 'text', html: 'WALKER' }],
    },
    {
      id: 5,
      firstImg: { src: 'img/robot1.png', alt: 'robot1', className: 'robot1 firstImg' },
      secondImg: { src: 'img/robot2.png', alt: 'robot2', className: 'robot2 secondImg' },
      labels: [{ type: 'text', className: '', html: 'ROBOTIC<br>ARM' }],
    },
    {
      id: 6,
      firstImg: { src: 'img/fence1.png', alt: 'fence1', className: 'fence1 firstImgW' },
      secondImg: { src: 'img/fence2.png', alt: 'fence2', className: 'fence2 secondImgW' },
      labels: [
        {
          type: 'fade',
          title: 'Stretcher Fence',
          description:
            '현장에서 들것으로 변형하여 사용 가능한 안전펜스. 펜스에서 들것으로 유연한 변형이 가능하도록 디자인하였다.',
        },
      ],
    },
    {
      id: 7,
      firstImg: { src: 'img/basic1.png', alt: 'basic1', className: 'basic1 firstImg' },
      secondImg: { src: 'img/basic2.png', alt: 'basic2', className: 'basic2 secondImg' },
      labels: [{ type: 'text', html: 'Assembly' }],
    },
    {
      id: 8,
      firstImg: { src: 'img/bottle1.png', alt: 'bottle1', className: 'bottle1 firstImg' },
      secondImg: { src: 'img/bottle2.png', alt: 'bottle2', className: 'bottle2 secondImg' },
      labels: [{ type: 'text', html: 'Assembly' }],
    },
    {
      id: 9,
      firstImg: { src: 'img/lint1.png', alt: 'lint1', className: 'lint1 firstImg' },
      secondImg: { src: 'img/lint2.png', alt: 'lint2', className: 'lint2 secondImg' },
      labels: [{ type: 'text', html: 'LINT<br>REMOVER' }],
    },
    {
      id: 10,
      firstImg: { src: 'img/grip1.png', alt: 'grip1', className: 'grip1 firstImg' },
      secondImg: { src: 'img/grip2.png', alt: 'grip2', className: 'grip2 secondImg' },
      labels: [{ type: 'text', html: 'GRIP<br>MACHINE' }],
    },
    {
      id: 11,
      firstImg: { src: 'img/splact1.png', alt: 'splact1', className: 'splact1 firstImgW' },
      secondImg: { src: 'img/splact2.png', alt: 'splact2', className: 'splact2 secondImgW' },
      labels: [
        { type: 'text', className: 'splactTxt', html: 'SPLACT' },
        {
          type: 'fade',
          title: 'Splact',
          description:
            '빨래건조대와 행거로 활용 가능한 치닝디핑. 집에 설치한 운동기구가 행거가 되는 것을 보고 아이디어를 얻었다. 운동할 때는 운동기구로, 평소에는 빨래건조대와 행거로 사용 가능하다.',
        },
      ],
    },
  ];

  function createProjectCard(data) {
    const card = document.createElement('div');
    card.className = `d${data.id} dClick`;

    const link = document.createElement('a');
    link.href = 'javascript:;';

    const img1 = document.createElement('img');
    img1.src = data.firstImg.src;
    img1.alt = data.firstImg.alt;
    img1.className = data.firstImg.className;
    link.appendChild(img1);

    const img2 = document.createElement('img');
    img2.src = data.secondImg.src;
    img2.alt = data.secondImg.alt;
    img2.className = data.secondImg.className;
    link.appendChild(img2);

    data.labels.forEach(label => {
      if (label.type === 'text') {
        const span = document.createElement('span');
        if (label.className) span.className = label.className;
        span.innerHTML = label.html;
        link.appendChild(span);
      } else if (label.type === 'fade') {
        const fade = document.createElement('div');
        fade.className = 'fadeTxt';
        const heading = document.createElement('h4');
        heading.textContent = label.title;
        const description = document.createElement('span');
        description.textContent = label.description;
        fade.appendChild(heading);
        fade.appendChild(description);
        link.appendChild(fade);
      }
    });

    card.appendChild(link);
    return card;
  }

  function renderProjectCards(cards) {
    const containerEl = document.querySelector('.container');
    if (!containerEl) return;
    containerEl.innerHTML = '';
    cards.forEach(data => {
      containerEl.appendChild(createProjectCard(data));
    });
  }

  renderProjectCards(projectCards);

  // === nav 버튼 (헤더) ===
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

//이미지가 천천히 변하는 이벤트

$(document).ready(function(){

  $('.container').on('mouseover', '> div', function() {
    $(this).find('.firstImg').stop().fadeOut(200);
    $(this).find('.secondImg').stop().fadeIn(200);

    $(this).find('.splactTxt').stop().fadeOut(400);

    $(this).find('.firstImgW').stop().fadeOut(400);
    $(this).find('.secondImgW').stop().fadeIn(400);
    $(this).find('.fadeTxt').stop().fadeIn(400);
  });

  $('.container').on('mouseout', '> div', function() {
    $(this).find('.secondImg').stop().fadeOut(200);
    $(this).find('.firstImg').stop().fadeIn(200);

    $(this).find('.splactTxt').stop().fadeIn(400);

    $(this).find('.secondImgW').stop().fadeOut(400);
    $(this).find('.firstImgW').stop().fadeIn(400);
		$(this).find('.fadeTxt').stop().fadeOut(400);
  });
});



//이미지 클릭하면 선택한 이미지의 modal 띄우는 이벤트

$('.container').on('click', '.dClick', function(){
  const classMatch = $(this).attr('class').match(/d(\d+)/);
  const itemNum = classMatch ? classMatch[1] : null;
  const index = $(this).index();

  $('.modal').hide();
  $('figure').fadeIn(150);
  $('.pop-modal').eq(index).fadeIn(150);

  $('.modal-box').hide();
  if (itemNum) {
    $(`.modal-box${itemNum}`).show();
  }

  $('.main-icon').hide();
  if (itemNum) {
    $(`.main-icon${itemNum}`).show();
  }

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











let activeItem = null;


// 바깥 영역 터치 시 상태 초기화
document.addEventListener('click', e => {
  if (!e.target.closest('.project-item') && activeItem) {
    activeItem.classList.remove('show-second');
    activeItem = null;
  }
});







