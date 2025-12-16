let currentIndex = 0; // 今見せている画像が何番目か（最初は0番目）

function moveSlide(direction) {
    // 画像を囲む帯の要素を取得
    const slides = document.querySelector('.carousel-images');
    // 画像の総数を取得（今回は3枚）
    const totalSlides = document.querySelectorAll('.carousel-images img').length;

    // 番号を更新（directionは -1 か 1 が入る）
    currentIndex = currentIndex + direction;

    // --- ループさせるための計算 ---
    if (currentIndex >= totalSlides) {
        currentIndex = 0; // 最後まで来たら最初に戻る
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // 最初より前に行ったら最後に行く
    }

    // --- 画像を動かす ---
    // 画像の幅(600px) × 現在の番号 分だけ左にずらす
    const offset = -currentIndex * 600; 
    
    // CSSの transform を書き換えて動かす
    slides.style.transform = `translateX(${offset}px)`;
}