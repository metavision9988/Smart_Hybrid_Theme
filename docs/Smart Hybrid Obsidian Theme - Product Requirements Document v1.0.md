# Smart Hybrid Obsidian Theme - Product Requirements Document v1.0

## 1. 프로젝트 개요

### 1.1 제품명
- **Smart Hybrid Theme for Obsidian**
- 코드명: SHT-Obsidian

### 1.2 비전
"컨텍스트를 인식하여 자동으로 최적화되는 지능형 옵시디언 테마 시스템"

### 1.3 목표 사용자
- 다양한 작업 컨텍스트를 오가는 옵시디언 파워 유저
- 개발자, 작가, 연구원, 디자이너 등 전문직 종사자
- 한국어/영어 혼용 사용자

## 2. 핵심 요구사항

### 2.1 아키텍처 요구사항

#### 모듈식 구조
```
obsidian-smart-theme/
├── core/                   # 핵심 모듈 (25KB)
│   ├── base.css           # 기본 스타일
│   ├── variables.css      # CSS 변수
│   └── reset.css          # 리셋 스타일
├── modules/               # 선택적 모듈
│   ├── personas/          # 페르소나별 스타일 (각 15-20KB)
│   ├── ui-styles/         # UI 트렌드 스타일 (각 10-15KB)
│   └── features/          # 기능별 스타일 (각 5-10KB)
├── src/                   # 플러그인 소스
│   └── theme-manager.ts   # 테마 관리 플러그인
└── manifest.json          # 플러그인 메타데이터
```

#### 성능 요구사항
- 초기 로딩: < 0.5초
- 총 CSS 크기: < 100KB (활성 모듈 기준)
- 메모리 사용: < 7MB 증가
- 렌더링 성능: 기본 대비 90% 이상 유지

### 2.2 기능 요구사항

#### F1: 페르소나 모드 (필수)

**Developer Mode**
- 색상: 다크 그린(#00695C), 시안(#00ACC1), 오렌지(#FF9800)
- 폰트: JetBrains Mono, Fira Code
- 특징: 코드 블록 최적화, 터미널 스타일, 깃 상태 표시

**Writer Mode**
- 색상: 세피아(#6D4C41), 따뜻한 베이지(#FFF8E1)
- 폰트: Noto Serif KR, Georgia
- 특징: 타자기 효과, 문단 최적화, 집중 모드

**Designer Mode**
- 색상: 퍼플(#9C27B0), 핑크(#EC407A), 비비드
- 폰트: Inter, Pretendard
- 특징: 비주얼 강화, 그리드 시스템, 컬러 팔레트

**Researcher Mode**
- 색상: 네이비(#0D47A1), 학술지 스타일
- 폰트: Times New Roman, Noto Serif
- 특징: 각주 강조, 참고문헌 스타일, 표/차트 최적화

#### F2: UI 스타일 시스템 (필수)

**Glassmorphism**
- 반투명 배경 (rgba)
- 블러 효과 (backdrop-filter)
- 유리 질감
- 부드러운 그림자

**Neo-brutalism**
- 강렬한 색상
- 두꺼운 테두리 (3px solid)
- 날것의 느낌
- 대담한 타이포그래피

**Minimal**
- 여백 활용
- 단순한 형태
- 제한된 색상 (3-4개)
- 깔끔한 선

**Dark Professional**
- 다크모드 최적화
- 높은 대비
- 네온 액센트
- 눈의 피로 최소화

#### F3: 폴더별 자동 테마 (필수)

```javascript
폴더 경로 감지 매핑:
- /Work/* → Professional/Developer 테마
- /Personal/* → Casual/Writer 테마
- /Study/* → Academic/Researcher 테마
- /Projects/Dev/* → Developer 테마
- /Writing/* → Writer 테마
- /Design/* → Designer 테마
```

#### F4: 확장 체크박스 시스템 (필수)

```css
기본 체크박스 (15개):
- [ ] 기본 (todo)
- [/] 진행중 (in-progress)
- [x] 완료 (done)
- [-] 취소 (cancelled)
- [>] 연기 (postponed)
- [<] 예정 (scheduled)
- [?] 질문 (question)
- [!] 중요 (important)
- [*] 즐겨찾기 (star)
- ["] 인용 (quote)
- [l] 위치 (location)
- [b] 북마크 (bookmark)
- [i] 정보 (information)
- [S] 저축 (savings)
- [I] 아이디어 (idea)

확장 체크박스 (15개 추가):
- [💎] 마일스톤
- [🚀] 시작/런칭
- [💡] 영감/인사이트
- [🎯] 목표/타겟
- [⚡] 긴급
- [🌱] 성장/학습
- [🔧] 수정/개선
- [📊] 분석/데이터
- [🎨] 디자인/창작
- [💬] 소통/미팅
- [📅] 마감일
- [🔵] 청 (동쪽)
- [🔴] 적 (남쪽)
- [⚪] 백 (서쪽)
- [⚫] 흑 (북쪽)
```

#### F5: 다국어 폰트 시스템 (필수)

```css
언어별 자동 폰트 적용:
- 한글: Pretendard, Noto Sans KR, 나눔고딕
- 영문: Inter, Roboto, San Francisco
- 코드: JetBrains Mono, Fira Code, Cascadia Code
- 일본어: Noto Sans JP, Hiragino Kaku Gothic
- 중국어: Noto Sans SC, Microsoft YaHei
```

#### F6: 시간대별 테마 (선택)

```yaml
시간대별 자동 전환:
  아침 (6-10시):
    - 색상: 밝고 활기찬 (옐로우, 오렌지)
    - 밝기: 100%
    - 대비: 표준
  
  낮 (10-18시):
    - 색상: 집중 모드 (블루, 그린)
    - 밝기: 95%
    - 대비: 높음
  
  저녁 (18-22시):
    - 색상: 따뜻한 톤 (오렌지, 레드)
    - 밝기: 85%
    - 대비: 중간
  
  밤 (22-6시):
    - 색상: 다크 모드
    - 밝기: 70%
    - 대비: 낮음
```

#### F7: Style Settings 통합 (필수)

- GUI 설정 패널
- 실시간 프리뷰
- 프리셋 저장/불러오기 (JSON)
- 내보내기/가져오기 기능

### 2.3 비기능 요구사항

#### 호환성
- Obsidian v1.0.0+
- Style Settings 플러그인 v1.0+
- 주요 커뮤니티 플러그인과 충돌 없음
  - Dataview
  - Calendar
  - Templater
  - QuickAdd
  - Excalidraw

#### 접근성
- WCAG 2.1 AA 준수
- 고대비 모드 지원
- 키보드 네비게이션 완벽 지원
- 스크린 리더 호환
- 색맹 친화적 팔레트 옵션

#### 확장성
- 커스텀 CSS 스니펫 호환
- 사용자 정의 변수 지원
- 써드파티 테마와 공존 가능
- 플러그인 API 제공

## 3. 사용자 스토리

### 개발자 페르소나
```
AS A 개발자
I WANT 코드 작업시 자동으로 개발자 모드 활성화
SO THAT 코드 가독성이 향상되고 집중력이 증가한다

AS A 개발자
I WANT 깃 상태와 파일 타입별 아이콘 표시
SO THAT 프로젝트 구조를 한눈에 파악할 수 있다
```

### 작가 페르소나
```
AS A 작가
I WANT 글쓰기 폴더에서 세리프 폰트와 집중 모드
SO THAT 창작에 몰입할 수 있다

AS A 작가
I WANT 타자기 효과와 적절한 행간
SO THAT 읽기 편하고 글쓰기에 집중할 수 있다
```

### 연구원 페르소나
```
AS A 연구원
I WANT 학술적 스타일과 참고문헌 최적화
SO THAT 논문 작성이 효율적이 된다

AS A 연구원
I WANT 표와 차트가 잘 보이는 레이아웃
SO THAT 데이터 분석이 용이하다
```

### 디자이너 페르소나
```
AS A 디자이너
I WANT 비주얼이 강조되고 이미지 그리드 지원
SO THAT 시각적 작업을 효과적으로 관리할 수 있다

AS A 디자이너
I WANT 컬러 팔레트와 그리드 시스템
SO THAT 디자인 작업을 체계적으로 정리할 수 있다
```

## 4. 성공 지표 (KPI)

### 사용성 지표
- 설치 후 1주일 내 커스터마이징 시도율: > 80%
- 페르소나 모드 활용률: > 60%
- 폴더별 테마 사용률: > 70%
- 일일 활성 사용자 비율: > 85%

### 성능 지표
- 초기 로딩 시간: < 0.5초
- 테마 전환 시간: < 100ms
- CPU 사용률 증가: < 5%
- 메모리 사용 증가: < 7MB
- 렌더링 성능 저하: < 10%

### 품질 지표
- 버그 리포트: < 5건/월
- 사용자 만족도: > 4.5/5.0
- 커뮤니티 평점: > 4.7/5.0
- 월간 다운로드: > 1,000건

## 5. 제약사항

### 기술적 제약
- CSS 전체 크기: < 500KB
- 플러그인 크기: < 1MB
- 외부 의존성: 최소화 (폰트 제외)
- 브라우저 지원: Chrome 90+, Firefox 88+, Safari 14+

### 라이선스
- 코드: MIT License
- 폰트: OFL (Open Font License)
- 아이콘: CC BY 4.0

### 개발 환경
- Node.js 18+
- TypeScript 5.0+
- Obsidian API 1.0+

## 6. 릴리즈 계획

### Phase 1: MVP (v1.0.0)
- Core 모듈
- 3개 페르소나 (Developer, Writer, Designer)
- 2개 UI 스타일 (Glassmorphism, Minimal)
- 폴더별 자동 테마
- 15개 체크박스
- 한/영 폰트 시스템

### Phase 2: Enhanced (v1.1.0)
- Researcher 페르소나
- 시간대별 테마
- Neo-brutalism 스타일
- 30개 체크박스
- 다국어 폰트 확장

### Phase 3: Advanced (v2.0.0)
- AI 컨텍스트 인식
- 동적 모듈 로딩
- 클라우드 동기화
- 커스텀 페르소나 생성
- 테마 마켓플레이스

## 7. 리스크 관리

### 기술적 리스크
- **리스크**: 성능 저하
- **대응**: 모듈식 설계, 지연 로딩, 코드 최적화

### 호환성 리스크
- **리스크**: 플러그인 충돌
- **대응**: 네임스페이스 격리, 충돌 테스트

### 사용성 리스크
- **리스크**: 복잡한 설정
- **대응**: 프리셋 제공, 온보딩 가이드

## 8. 부록

### 참고 자료
- Obsidian API Documentation
- Material Design Guidelines
- Apple Human Interface Guidelines
- Web Content Accessibility Guidelines (WCAG)

### 경쟁 제품 분석
- Minimal Theme: 심플함, 커스터마이징
- Blue Topaz: 다양한 스타일, 한국어 지원
- Shimmering Focus: 집중 모드, 타이포그래피

### 용어 정의
- **페르소나**: 사용자 유형별 최적화된 테마 설정
- **모듈**: 독립적으로 로드 가능한 CSS/JS 단위
- **컨텍스트**: 현재 작업 환경 (폴더, 시간, 파일 타입)