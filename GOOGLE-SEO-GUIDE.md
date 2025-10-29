# Google 검색엔진 최적화(SEO) 가이드

## 목차
1. [검색엔진 최적화(SEO) 기본 가이드](#1-검색엔진-최적화seo-기본-가이드)
2. [Google 검색 작동 방식](#2-google-검색-작동-방식)
3. [검색엔진 최적화 전문업체 필요성](#3-검색엔진-최적화-전문업체-필요성)
4. [웹사이트 검색엔진 최적화 유지관리](#4-웹사이트-검색엔진-최적화-유지관리)
5. [Google 검색 시작하기: 개발자 가이드](#5-google-검색-시작하기-개발자-가이드)
6. [Google에 웹사이트 등록하기](#6-google에-웹사이트-등록하기)
7. [구조화된 데이터 마크업](#7-구조화된-데이터-마크업)

---

## 1. 검색엔진 최적화(SEO) 기본 가이드

### SEO의 목적
검색엔진 최적화 작업은 검색엔진이 콘텐츠를 이해하도록 돕고, 사용자가 사이트를 찾고, 검색엔진을 통해 사이트를 방문할지 여부를 결정하도록 돕습니다.

### Google이 콘텐츠를 찾을 수 있도록 하기

#### Site 검색 연산자로 색인 확인
```
site:example.com
```

#### Google이 페이지를 발견하는 방법
- 주로 이미 크롤링한 다른 페이지의 링크를 통해 발견
- 사이트맵 제출로 크롤링 유도 가능

#### Google이 사용자와 같은 방식으로 페이지 인식 확인
- Google에서 CSS 및 JavaScript 리소스에 액세스 가능해야 함
- URL 검사 도구로 Google의 페이지 인식 방식 확인

#### 특정 페이지 검색결과 제외 방법
- noindex 메타태그 사용
- robots.txt로 크롤링 차단

---

### 사이트 구성

#### 설명적인 URL 사용
**좋은 예:**
```
https://www.example.com/pets/cats.html
```

**나쁜 예:**
```
https://www.example.com/2/6772756D707920636174
```

#### 디렉터리로 주제별 페이지 그룹화
```
https://www.example.com/policies/return-policy.html
https://www.example.com/promotions/new-promos.html
```

#### 중복 콘텐츠 축소
- 동일 콘텐츠를 단일 URL로만 제공
- 301 리디렉션 또는 rel="canonical" 사용

---

### 재미있고 유용한 콘텐츠 만들기

#### 매력적인 콘텐츠의 속성
- ✅ 읽기 쉽고 체계적으로 구성된 텍스트
- ✅ 고유한 콘텐츠
- ✅ 최신 상태 유지
- ✅ 유용하고 신뢰할 수 있는 정보
- ✅ 사람 중심의 콘텐츠

#### 독자의 검색어 예상
- 전문가와 초보자가 사용하는 다양한 키워드 고려
- 예: "샤퀴테리" vs "가공육"

#### 주의 분산 광고 지양
- 광고가 콘텐츠 읽기를 방해하지 않도록 설정

---

### 관련 리소스 링크하기

#### 좋은 링크 텍스트(앵커 텍스트) 작성
```html
<!-- 좋은 예 -->
<a href="https://www.example.com/guide">SEO 가이드 보기</a>

<!-- 나쁜 예 -->
<a href="https://www.example.com/guide">여기 클릭</a>
```

#### 외부 링크 시 주의사항
- 신뢰할 수 없는 콘텐츠에는 `rel="nofollow"` 추가
- 사용자 제작 콘텐츠(포럼, 댓글)에 자동으로 nofollow 추가

---

### Google 검색 결과 표시 방식에 영향 주기

#### 제목 링크 최적화
- `<title>` 요소 사용
- 브라우저, 북마크, 검색결과에 표시됨

---

## 2. Google 검색 작동 방식

### Google 검색의 3단계

#### 1. 크롤링 (Crawling)
- **Googlebot**: 웹 크롤러 프로그램
- 링크, 사이트맵, 리디렉션을 통해 URL 발견
- 알고리즘으로 크롤링 우선순위 결정

#### 2. 색인 생성 (Indexing)
- 페이지의 텍스트, 이미지, 동영상 분석
- `<title>`, Alt 속성 등 처리
- 표준 페이지 결정 (중복 페이지 그룹화)
- Google 색인에 정보 저장

#### 3. 검색결과 게재 (Serving)
- 사용자 검색어와 관련성 높은 결과 반환
- 위치, 언어, 기기 등 고려
- 금전적 대가로 순위 높이지 않음

---

### 크롤링 관련 일반 문제

#### Googlebot 접근 차단 원인
- 서버 방화벽 차단
- 네트워크 문제
- robots.txt 규칙 문제

#### 색인 생성 관련 문제
- 페이지 콘텐츠 품질 낮음
- Robots meta 규칙으로 색인 차단
- 웹사이트 디자인 문제

#### 검색결과 미게재 원인
- 콘텐츠와 검색어 관련성 낮음
- 콘텐츠 품질 낮음
- Robots meta 규칙 차단

---

## 3. 검색엔진 최적화 전문업체 필요성

### SEO란?
- **Search Engine Optimization**: 검색엔진 최적화
- **Search Engine Optimizer**: 검색엔진 최적화 전문업체

### SEO 전문업체 제공 서비스
- ✅ 사이트 콘텐츠 또는 구조 검토
- ✅ 웹사이트 개발 기술 조언
- ✅ 콘텐츠 개발
- ✅ 온라인 비즈니스 캠페인 관리
- ✅ 키워드 리서치
- ✅ SEO 교육

---

### SEO 전문업체 선택 시기
- 사이트 디자인 변경 시
- 새 사이트 출시 계획 단계

### 인터뷰 질문 예시
- ❓ 이전 성공사례를 보여주세요
- ❓ Google 검색 Essentials를 준수하나요?
- ❓ 어떤 성과를 제공할 수 있나요?
- ❓ 주요 SEO 기법은 무엇인가요?
- ❓ SEO 비즈니스 경력은?

---

### 주의사항

#### 불법 SEO 업체 징후
- ❌ 순위 1위 보장
- ❌ Google과 "특별한 관계" 주장
- ❌ 섀도 도메인 생성
- ❌ 도어웨이 페이지 배치
- ❌ 링크 구매 권장

#### 신고 방법
- 미국: 연방거래위원회(FTC)
- 기타 국가: https://www.econsumer.gov/

---

## 4. 웹사이트 검색엔진 최적화 유지관리

### Google의 사이트 크롤링 및 색인 방법 제어

#### 중복 콘텐츠 관리
- 표준 페이지(canonical) 정의
- 301 리디렉션 또는 `rel="canonical"` 사용

#### robots.txt 사용
**모든 검색엔진 허용:**
```txt
User-agent: *
Allow: /
```

**네이버 검색로봇만 허용:**
```txt
User-agent: Yeti
Allow: /
```

**특정 경로 차단:**
```txt
User-agent: *
Disallow: /private*/
```

#### 사이트맵 작성
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.example.com/page.html</loc>
    <lastmod>2025-01-26</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

---

### 다국어/다지역 사이트

#### hreflang 사용
```html
<link rel="alternate" hreflang="ko" href="https://example.com/ko/" />
<link rel="alternate" hreflang="en" href="https://example.com/en/" />
```

---

### 페이지 이동

#### 301 리디렉션 (영구 이동)
```apache
Redirect 301 /old-page.html /new-page.html
```

#### 302 리디렉션 (임시 이동)
```apache
Redirect 302 / /under-construction.html
```

#### 404 오류 페이지
- 실제 404 HTTP 응답 반환
- Soft 404 지양 (200 OK 반환하지 말 것)

---

### 모바일 친화적 사이트

#### 반응형 웹 (권장)
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

#### 별도 모바일 URL
- 모바일 접근 시 자동 리디렉션 설정
- 데스크톱과 모바일 페이지 1:1 대응 명시

---

## 5. Google 검색 시작하기: 개발자 가이드

### 링크 확인

#### 크롤링 가능한 링크 사용
```html
<!-- 좋은 예 -->
<a href="https://www.example.com/page">링크</a>

<!-- 나쁜 예 -->
<span onClick="javascript:goto(A)">링크</span>
```

---

### 자바스크립트 사용

#### 주의사항
- JavaScript/CSS 수집 허용
- Fragment (#) URL 사용 금지

**나쁜 예:**
```
https://www.mysite.com/#home
https://www.mysite.com/#!/product
```

**좋은 예:**
```
https://www.mysite.com/home
https://www.mysite.com/product
```

---

### 콘텐츠 변경 시 Google에 알리기
- 사이트맵 제출
- Google에 URL 재크롤링 요청

---

### 페이지에서 텍스트로 표현

#### 시각적 콘텐츠 텍스트 설명
```html
<img src="shirt.jpg" alt="빨간색 면 티셔츠">
```

#### 의미론적 HTML 사용
```html
<article>
  <h1>제목</h1>
  <p>본문 내용...</p>
</article>
```

---

### Google이 보는 콘텐츠 제어

#### Googlebot 차단 방법
1. 로그인 페이지로 콘텐츠 보호
2. robots.txt 생성
3. noindex 태그 추가

#### noindex 태그
```html
<meta name="robots" content="noindex">
```

---

### 리치 결과 사용

#### 구조화된 데이터 추가
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Recipe",
  "name": "바나나 브레드",
  "description": "최고의 바나나 브레드 레시피"
}
</script>
```

---

## 6. Google에 웹사이트 등록하기

### 기본 체크리스트

#### 1. 웹사이트가 Google에 표시되는지 확인
```
site:example.com
```

#### 2. Google 검색 Essentials 준수
- 기술 요구사항 확인
- 스팸 정책 준수
- 권장사항 따르기

#### 3. 고품질 콘텐츠 게재
- 사용자 중심 콘텐츠
- 신뢰할 수 있는 정보
- 고유한 가치 제공

#### 4. 지역 비즈니스 등록
- Google 비즈니스 프로필 활용

#### 5. 모든 기기에서 빠르게 로드
- 모바일 친화적 디자인
- 페이지 속도 최적화

#### 6. 웹사이트 보안
- HTTPS 사용

---

### 콘텐츠 유형별 등록

#### 비즈니스/개인
- **Google for Retail**: 제품 카탈로그 제출
- **Google for Small Business**: 소규모 업체 리소스
- **지식 패널**: 정보 관리

#### 디지털 콘텐츠
- **Google 도서**: eBook 홍보 및 판매
- **Google 학술검색**: 학술 정보 색인
- **Google 뉴스**: 뉴스 검색결과 표시

#### 미디어
- **YouTube**: 동영상 업로드 및 수익 창출
- **Google 검색의 동영상**: 동영상 검색결과 표시

---

## 7. 구조화된 데이터 마크업

### 구조화된 데이터란?
페이지 정보를 제공하고 콘텐츠를 분류하기 위한 **표준화된 형식**

---

### 지원되는 형식

#### 1. JSON-LD (권장)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Recipe",
  "name": "레시피 이름"
}
</script>
```

#### 2. 마이크로데이터
```html
<div itemscope itemtype="https://schema.org/Recipe">
  <span itemprop="name">레시피 이름</span>
</div>
```

#### 3. RDFa
```html
<div vocab="https://schema.org/" typeof="Recipe">
  <span property="name">레시피 이름</span>
</div>
```

---

### 구조화된 데이터 추가 방법

#### 1. 필수 속성 추가
각 유형별 필수 속성 포함

#### 2. 가이드라인 따르기
- 구조화된 데이터 일반 가이드라인
- 콘텐츠 정책 준수

#### 3. 유효성 검사
- 리치 결과 테스트 사용

#### 4. 배포
- 일부 페이지에 먼저 배포
- URL 검사 도구로 테스트

#### 5. 사이트맵 제출
향후 변경사항 자동 알림

---

### 탐색경로 예시

#### 단일 탐색경로
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "도서",
    "item": "https://example.com/books"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "공상과학",
    "item": "https://example.com/books/sciencefiction"
  },{
    "@type": "ListItem",
    "position": 3,
    "name": "수상작"
  }]
}
```

---

### Search Console로 모니터링

#### 리치 결과 상태 보고서
- 유효한 항목 수 확인
- 잘못된 항목 수정

#### 실적 보고서
- 검색 트래픽 분석
- 클릭률 확인
- 평균 게재순위 확인

---

### 구조화된 데이터 일반 가이드라인

#### 기술 가이드라인
- ✅ JSON-LD, 마이크로데이터, RDFa 사용
- ✅ Googlebot 접근 허용
- ✅ 리치 결과 테스트로 검증

#### 품질 가이드라인
- ✅ Google 스팸 정책 준수
- ✅ 최신 정보 제공
- ✅ 원본 콘텐츠 제공
- ✅ 사용자에게 표시되는 콘텐츠만 마크업
- ✅ 관련성 있는 데이터만 마크업

#### 콘텐츠 가이드라인
- ✅ 페이지 콘텐츠를 실제로 표현
- ✅ 모든 필수 속성 포함
- ✅ 가장 구체적인 유형 사용
- ✅ 이미지 크롤링 및 색인 가능

---

## 추가 리소스

### 공식 문서
- [Google 검색 센터](https://developers.google.com/search)
- [Search Console](https://search.google.com/search-console)
- [Schema.org](https://schema.org)

### 테스트 도구
- [리치 결과 테스트](https://search.google.com/test/rich-results)
- [URL 검사 도구](https://support.google.com/webmasters/answer/9012289)
- [PageSpeed Insights](https://pagespeed.web.dev/)

### 커뮤니티
- [Google 검색 센터 포럼](https://support.google.com/webmasters/community)
- [Google 검색 센터 블로그](https://developers.google.com/search/blog)

---

**마지막 업데이트**: 2025-01-29
