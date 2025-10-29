# EmailJS 설정 가이드

제휴 문의 폼이 정상적으로 작동하려면 EmailJS 계정을 생성하고 설정해야 합니다.

## 1. EmailJS 계정 생성

1. [EmailJS 웹사이트](https://www.emailjs.com/)에 접속
2. "Sign Up Free" 버튼 클릭하여 계정 생성
3. 이메일 인증 완료

## 2. Email Service 연결

1. EmailJS 대시보드에서 "Email Services" 메뉴 선택
2. "Add New Service" 클릭
3. 원하는 이메일 서비스 선택 (Gmail 추천)
   - Gmail 선택 시 Google 계정 연결 필요
4. Service ID 확인 및 저장 (예: `service_abc1234`)

## 3. Email Template 생성

1. "Email Templates" 메뉴 선택
2. "Create New Template" 클릭
3. 템플릿 설정:

### 템플릿 내용 예시:
```
Subject: [택스헬퍼] 새로운 제휴 문의

안녕하세요,

택스헬퍼 사이트에 새로운 제휴 문의가 접수되었습니다.

---

문의내용:
{{message}}

---

연락처 정보:
- 이메일: {{email}}
- 연락처: {{phone}}

---

이 메일은 자동으로 발송되었습니다.
```

### 템플릿 변수:
- `{{message}}` - 문의내용
- `{{email}}` - 문의자 이메일
- `{{phone}}` - 문의자 연락처

4. Template ID 확인 및 저장 (예: `template_xyz5678`)

## 4. Public Key 확인

1. "Account" 메뉴 선택
2. "General" 탭에서 Public Key 확인 (예: `abcdefghijklmno`)

## 5. 코드에 설정 적용

`script.js` 파일을 열고 다음 3가지 값을 변경하세요:

### 변경 전:
```javascript
emailjs.init('YOUR_PUBLIC_KEY');
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
```

### 변경 후 (예시):
```javascript
emailjs.init('abcdefghijklmno');
emailjs.sendForm('service_abc1234', 'template_xyz5678', this)
```

## 6. 테스트

1. 로컬에서 사이트 열기
2. 제휴 문의 폼에 테스트 내용 작성
3. "문의하기" 버튼 클릭
4. 연결한 이메일 계정에서 메일 수신 확인

## 무료 플랜 제한사항

- 월 200회 이메일 전송 가능
- 일반적인 사용에는 충분함
- 더 많은 전송이 필요할 경우 유료 플랜 고려

## 문제 해결

### 이메일이 전송되지 않는 경우:
1. 브라우저 개발자 도구(F12)에서 Console 탭 확인
2. Service ID, Template ID, Public Key가 올바른지 확인
3. EmailJS 대시보드에서 "Auto-Reply" 설정 확인

### 스팸 폴더 확인:
- Gmail의 경우 처음에는 스팸 폴더로 분류될 수 있음
- "스팸 아님" 표시하여 이후 정상 수신 가능

## 추가 설정 (선택사항)

### 자동 응답 메일 설정:
1. Template에서 "Auto-Reply" 활성화
2. 문의자에게 자동으로 접수 확인 메일 발송 가능

### 보안 설정:
1. EmailJS 대시보드 → Settings → Security
2. "Allowed Domains"에 실제 도메인 추가 (예: `yourdomain.com`)
3. 다른 사이트에서 API 사용 방지

## 참고 링크

- [EmailJS 공식 문서](https://www.emailjs.com/docs/)
- [EmailJS React 가이드](https://www.emailjs.com/docs/examples/reactjs/)
- [EmailJS FAQ](https://www.emailjs.com/docs/faq/)
