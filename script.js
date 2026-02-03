// 나중에 이미지를 추가하고 싶을 때 이 배열만 수정하면 됩니다!
const works = [
    { src: "images/001.png", title: "첫 번째 작품" },
    { src: "images/002.png", title: "두 번째 작품" }
];

const gallery = document.getElementById('gallery');

works.forEach(work => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${work.src}" alt="${work.title}">
    `;
    gallery.appendChild(card);
});