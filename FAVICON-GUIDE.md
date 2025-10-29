# Favicon 제작 가이드

## 필요한 파일 목록

### ✅ 완료된 파일
- `site.webmanifest` - PWA 설정 파일

### 📝 제작 필요한 파일
1. `favicon-16x16.png` - 16×16 픽셀 (브라우저 탭용)
2. `favicon-32x32.png` - 32×32 픽셀 (북마크용)
3. `apple-touch-icon.png` - 180×180 픽셀 (아이폰 홈 화면용)

---

## 제작 방법

### 옵션 1: 온라인 도구 사용 (가장 쉬움)

#### 추천 사이트: [Favicon.io](https://favicon.io/)

1. **텍스트로 만들기** (https://favicon.io/favicon-generator/)
   - Text: `T` (택스헬퍼의 T)
   - Background: `Rounded`
   - Font Family: `Roboto`
   - Font Size: `110`
   - Background Color: `#7c3aed` (보라색)
   - Font Color: `#ffffff` (흰색)
   - Download 클릭

2. **다운로드된 파일 이름 변경:**
   ```
   favicon-16x16.png → 그대로 사용
   favicon-32x32.png → 그대로 사용
   android-chrome-192x192.png → apple-touch-icon.png으로 이름 변경
   ```

#### 추천 사이트 2: [RealFaviconGenerator](https://realfavicongenerator.net/)

1. 아이폰용 이미지 업로드
2. 자동으로 모든 크기 생성
3. Download 클릭

---

### 옵션 2: Canva로 제작

1. **Canva 접속** (https://www.canva.com/)

2. **사이즈별 제작:**
   - 새 디자인 → 사용자 지정 크기
   - 16×16 px 입력
   - 배경: 보라색 `#7c3aed`
   - 텍스트: 흰색 "T"
   - PNG 다운로드 → `favicon-16x16.png`

3. **32×32, 180×180도 동일하게 제작**

---

### 옵션 3: 직접 SVG 만들기 (개발자용)

아래 코드를 `favicon.svg`로 저장 후 온라인 변환기로 PNG 변환:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" fill="#7c3aed" rx="20"/>
  <text x="50" y="70" font-family="Arial" font-size="60" font-weight="bold" fill="white" text-anchor="middle">T</text>
</svg>
```

SVG → PNG 변환 사이트: https://cloudconvert.com/svg-to-png

---

## 디자인 가이드

### 색상 팔레트
- **주 색상 (보라색)**: `#7c3aed`
- **부 색상 (파란색)**: `#3b82f6`
- **텍스트**: `#ffffff` (흰색)

### 아이콘 아이디어
1. **"T" 로고** - 택스헬퍼의 이니셜 (가장 심플)
2. **💰 돈 아이콘** - 금융/세금 느낌
3. **🧾 영수증** - 계산서 느낌
4. **계산기 모양** - 아이폰 이미지와 통일

---

## 파일 배치 위치

```
부가세계산기 사이트/
├── index.html
├── cards.html
├── favicon-16x16.png          ← 여기에 배치
├── favicon-32x32.png           ← 여기에 배치
├── apple-touch-icon.png        ← 여기에 배치
├── site.webmanifest            ✅ 이미 생성됨
└── ...
```

---

## 파일 받으신 후 작업

1. 3개 PNG 파일을 프로젝트 루트에 복사
2. Git에 추가:
   ```bash
   git add favicon-16x16.png favicon-32x32.png apple-touch-icon.png site.webmanifest
   git commit -m "Add favicon files"
   git push
   ```
3. Vercel에 자동 배포됨
4. 브라우저에서 확인!

---

## 빠른 제작 (추천)

**가장 빠른 방법:**
1. https://favicon.io/favicon-generator/ 접속
2. 아래 설정 입력:
   - Text: `T`
   - Shape: `Rounded`
   - Font: `Roboto`
   - Font Size: `110`
   - Background: `#7c3aed`
   - Font Color: `#ffffff`
3. Download 클릭
4. 압축 해제 후 파일 배치

**소요 시간: 약 2분**

---

## 확인 방법

배포 후 브라우저에서:
- 브라우저 탭 왼쪽에 아이콘 확인
- 북마크 추가해서 아이콘 확인
- 개발자 도구 (F12) → Console에 오류 없는지 확인

---

**현재 상태:**
- ✅ HTML 파일에 favicon 태그 추가됨
- ✅ site.webmanifest 생성됨
- ⏳ PNG 이미지 파일만 추가하면 완료!
