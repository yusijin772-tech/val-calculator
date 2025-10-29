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

// 제휴 문의 폼 토글 기능
document.addEventListener('DOMContentLoaded', function() {
    const partnershipToggle = document.getElementById('partnership-toggle');
    const partnershipFormContainer = document.getElementById('partnership-form-container');

    if (partnershipToggle && partnershipFormContainer) {
        partnershipToggle.addEventListener('click', function(e) {
            e.preventDefault();

            if (partnershipFormContainer.style.display === 'none') {
                partnershipFormContainer.style.display = 'block';
                // 부드럽게 스크롤
                setTimeout(() => {
                    partnershipFormContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            } else {
                partnershipFormContainer.style.display = 'none';
            }
        });
    }
});

// EmailJS 초기화 및 제휴 문의 폼 처리
(function() {
    // EmailJS 초기화
    emailjs.init('8uniCaJsl270ivAvV');

    const partnershipForm = document.getElementById('partnership-form');
    const formMessage = document.getElementById('form-message');

    if (partnershipForm) {
        partnershipForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // 제출 버튼 비활성화
            const submitBtn = partnershipForm.querySelector('.btn-submit');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = '전송 중...';
            submitBtn.disabled = true;

            // 메시지 초기화
            formMessage.className = 'form-message';
            formMessage.style.display = 'none';

            // EmailJS로 이메일 전송
            emailjs.sendForm('service_b0vos76', 'template_tbeljf3', this)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);

                    // 성공 메시지 표시
                    formMessage.className = 'form-message success';
                    formMessage.textContent = '문의가 성공적으로 전송되었습니다. 빠른 시일 내에 연락드리겠습니다.';

                    // 폼 초기화
                    partnershipForm.reset();

                    // 3초 후 메시지 숨기기
                    setTimeout(() => {
                        formMessage.style.display = 'none';
                    }, 5000);

                }, function(error) {
                    console.log('FAILED...', error);

                    // 에러 메시지 표시
                    formMessage.className = 'form-message error';
                    formMessage.textContent = '문의 전송에 실패했습니다. 잠시 후 다시 시도해주세요.';
                })
                .finally(function() {
                    // 제출 버튼 활성화
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                });
        });
    }
})();
