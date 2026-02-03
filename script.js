const works = [
    { src: "images/001.png", title: "첫 번째 작품 제목" },
    { src: "images/002.png", title: "두 번째 작품 제목" }
];

const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('full-img');
const caption = document.getElementById('caption');

works.forEach(work => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<img src="${work.src}" alt="${work.title}">`;
    
    // 이 부분이 있어야 클릭 시 모달이 뜹니다!
    card.onclick = () => {
        modal.style.display = "flex";
        modalImg.src = work.src;
        caption.innerText = work.title;
    };
    gallery.appendChild(card);
});

// 배경 클릭 시 닫기
modal.onclick = () => { modal.style.display = "none"; };