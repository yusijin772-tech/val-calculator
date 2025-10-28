// 숫자 포맷팅 함수 (천단위 콤마)
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// 문자열에서 숫자만 추출
function parseNumber(str) {
    return parseInt(str.replace(/[^\d]/g, '')) || 0;
}

// Tab 전환 기능
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.dataset.tab;

        // 모든 탭 버튼과 콘텐츠 비활성화
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        // 선택된 탭 활성화
        button.classList.add('active');
        document.getElementById(`${targetTab}-tab`).classList.add('active');
    });
});

// 입력 필드에 실시간 포맷팅 적용
document.getElementById('supply-price').addEventListener('input', function(e) {
    const value = parseNumber(e.target.value);
    e.target.value = formatNumber(value);
});

document.getElementById('total-price').addEventListener('input', function(e) {
    const value = parseNumber(e.target.value);
    e.target.value = formatNumber(value);
});

// Enter 키로 계산 실행
document.getElementById('supply-price').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        calculateFromSupply();
    }
});

document.getElementById('total-price').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        calculateFromTotal();
    }
});

// 공급가액 → 부가세 포함 계산
function calculateFromSupply() {
    const supplyInput = document.getElementById('supply-price');
    const supplyPrice = parseNumber(supplyInput.value);

    if (supplyPrice === 0) {
        alert('공급가액을 입력해주세요.');
        supplyInput.focus();
        return;
    }

    // 부가세 계산 (10%)
    const vat = Math.round(supplyPrice * 0.1);
    // 합계금액
    const total = supplyPrice + vat;

    // 결과 표시
    document.getElementById('vat-result').textContent = formatNumber(vat) + '원';
    document.getElementById('total-result').textContent = formatNumber(total) + '원';
}

// 부가세 포함 → 공급가액 역계산
function calculateFromTotal() {
    const totalInput = document.getElementById('total-price');
    const totalPrice = parseNumber(totalInput.value);

    if (totalPrice === 0) {
        alert('부가세 포함 금액을 입력해주세요.');
        totalInput.focus();
        return;
    }

    // 공급가액 역계산 (총액 / 1.1)
    const supply = Math.round(totalPrice / 1.1);
    // 부가세
    const vat = totalPrice - supply;

    // 결과 표시
    document.getElementById('supply-result').textContent = formatNumber(supply) + '원';
    document.getElementById('vat-reverse-result').textContent = formatNumber(vat) + '원';
}

// 페이지 로드 시 입력 필드에 포커스
document.addEventListener('DOMContentLoaded', () => {
    // 합계 금액 탭이 먼저 나오므로 total-price에 포커스
    document.getElementById('total-price').focus();
});

// 복사 기능 (선택사항)
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            // 복사 완료 알림 (선택사항)
            showToast('클립보드에 복사되었습니다');
        });
    }
}

// 토스트 알림 (선택사항)
function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #1f2937;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        animation: fadeInOut 2s ease;
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2000);
}

// 토스트 애니메이션
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translateX(-50%) translateY(20px); }
        10% { opacity: 1; transform: translateX(-50%) translateY(0); }
        90% { opacity: 1; transform: translateX(-50%) translateY(0); }
        100% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
    }
`;
document.head.appendChild(style);

// 결과값 클릭시 복사 기능 추가 (선택사항)
document.querySelectorAll('.result-item .value').forEach(element => {
    element.style.cursor = 'pointer';
    element.title = '클릭하여 복사';
    element.addEventListener('click', function() {
        const value = parseNumber(this.textContent);
        copyToClipboard(value.toString());
    });
});
