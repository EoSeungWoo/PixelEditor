// 색상 팔레트 정의
const colors = [
    '#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF',
    '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500', '#800080',
    '#008000', '#800000', '#000080', '#808080', '#A52A2A'
];

// 현재 선택된 색상
let selectedColor = '#000000';

// 색상 팔레트 생성
const colorPalette = document.getElementById('colorPalette');
colors.forEach(color => {
    const colorDiv = document.createElement('div');
    colorDiv.className = 'color';
    colorDiv.style.backgroundColor = color;
    colorDiv.addEventListener('click', () => {
        selectedColor = color;
        // 이전에 선택된 색상의 선택 표시 제거
        document.querySelectorAll('.color').forEach(c => c.classList.remove('selected'));
        // 현재 선택된 색상에 선택 표시 추가
        colorDiv.classList.add('selected');
    });
    colorPalette.appendChild(colorDiv);
});

// 캔버스 생성
const canvas = document.getElementById('canvas');
let isDrawing = false;

// 32x32 그리드 생성
for (let i = 0; i < 32 * 32; i++) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    
    // 마우스 이벤트 처리
    pixel.addEventListener('mousedown', (e) => {
        isDrawing = true;
        pixel.style.backgroundColor = selectedColor;
    });

    pixel.addEventListener('mouseover', (e) => {
        if (isDrawing) {
            pixel.style.backgroundColor = selectedColor;
        }
    });

    pixel.addEventListener('mouseup', () => {
        isDrawing = false;
    });

    canvas.appendChild(pixel);
}

// 마우스가 캔버스 밖으로 나갈 때 그리기 중지
document.addEventListener('mouseup', () => {
    isDrawing = false;
});

// 첫 번째 색상을 기본 선택
document.querySelector('.color').classList.add('selected');
