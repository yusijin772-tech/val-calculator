// 필터 기능
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cardItems = document.querySelectorAll('.card-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 활성 버튼 스타일 변경
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 필터 타입 가져오기
            const filterType = button.dataset.filter;

            // 카드 필터링
            cardItems.forEach(card => {
                const hasNational = card.dataset.national === 'true';
                const hasLocal = card.dataset.local === 'true';
                const fee = parseInt(card.dataset.fee);

                let shouldShow = false;

                switch (filterType) {
                    case 'all':
                        shouldShow = true;
                        break;
                    case 'national':
                        shouldShow = hasNational;
                        break;
                    case 'local':
                        shouldShow = hasLocal;
                        break;
                    case 'low-fee':
                        shouldShow = fee <= 30000;
                        break;
                }

                // 카드 표시/숨김
                if (shouldShow) {
                    card.classList.remove('hidden');
                    // 애니메이션 효과
                    card.style.animation = 'fadeIn 0.3s ease-in';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // 카드 신청 버튼 클릭 이벤트
    const applyButtons = document.querySelectorAll('.card-apply-btn');

    applyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const cardName = e.target.closest('.card-item').querySelector('.card-name').textContent;
            alert(`${cardName} 카드 신청 페이지로 이동합니다.\n(실제 서비스에서는 제휴 링크로 연결됩니다)`);

            // 실제 서비스에서는 제휴 링크로 리다이렉트
            // window.location.href = 'affiliate-link-here';
        });
    });
});

// 페이드인 애니메이션 추가
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
