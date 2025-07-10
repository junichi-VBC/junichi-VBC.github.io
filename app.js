let rotatable = document.querySelector('.rotatable');
let upBtn = document.getElementById("upBtn");
let downBtn = document.getElementById("downBtn");

let currentRotation = 0;

if (rotatable && upBtn && downBtn) {
    upBtn.onclick = function () {
        currentRotation -= 90;
        rotatable.style.transform = `rotate(${currentRotation}deg)`;
    };

    downBtn.onclick = function () {
        currentRotation += 90;
        rotatable.style.transform = `rotate(${currentRotation}deg)`;
    };
}

// ここからアニメーション
window.addEventListener('DOMContentLoaded', function() {
    // 料金リストのアニメーション
    const items = [
        ...document.querySelectorAll('#priceList li'),
        ...document.querySelectorAll('.price-anim')
    ];
    let i = 0;
    function showNext() {
        if (i < items.length) {
            items[i].classList.add('visible');
            i++;
            setTimeout(showNext, 500);
        }
    }
    if(items.length > 0) showNext();

    // サンプル動画のフェードイン
    const sampleVideo = document.querySelector('.sample-video');
    if(sampleVideo) {
        sampleVideo.classList.add('visible');
    }
});
