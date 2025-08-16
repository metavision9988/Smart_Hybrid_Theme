# Smart Hybrid Theme - 사용자 매뉴얼

**버전**: v1.0.0  
**업데이트**: 2024년 8월 14일  
**언어**: 한국어  

---

## 📖 목차

1. [시작하기](#-시작하기)
2. [설치 방법](#-설치-방법)
3. [기본 사용법](#-기본-사용법)
4. [페르소나 시스템](#-페르소나-시스템)
5. [UI 스타일](#-ui-스타일)
6. [고급 설정](#-고급-설정)
7. [문제 해결](#-문제-해결)
8. [FAQ](#-faq)

---

## 🚀 시작하기

Smart Hybrid Theme은 당신의 작업 환경에 맞춰 자동으로 변화하는 지능형 Obsidian 테마입니다.

### ✨ 주요 특징

- **🎭 3가지 페르소나**: Developer, Writer, Designer
- **🎨 2가지 UI 스타일**: Glassmorphism, Minimal
- **🧠 자동 감지**: 폴더 구조에 따른 자동 테마 전환
- **⚡ 고성능**: 30KB 미만의 경량 테마
- **🎛️ 커스터마이징**: 모든 요소 개인화 가능

---

## 📦 설치 방법

### 방법 1: 직접 설치 (권장)

1. **릴리스 다운로드**
   - [GitHub 릴리스 페이지](https://github.com/metavision9988/Smart_Hybrid_Theme/releases)에서 최신 버전 다운로드
   - `Smart-Hybrid-Theme-v1.0.0.zip` 파일 다운로드

2. **파일 압축 해제**
   ```
   Smart-Hybrid-Theme/
   ├── main.js
   ├── manifest.json
   └── theme.css
   ```

3. **Obsidian에 설치**
   - Obsidian에서 `설정` → `커뮤니티 플러그인` → `폴더 열기` 클릭
   - 압축 해제한 폴더를 `smart-hybrid-theme` 이름으로 복사
   - Obsidian 재시작

4. **테마 활성화**
   - `설정` → `외관` → `테마` → `Smart Hybrid Theme` 선택
   - `커뮤니티 플러그인`에서 `Smart Hybrid Theme` 활성화

### 방법 2: 개발자 설치

```bash
# 1. 저장소 클론
git clone https://github.com/metavision9988/Smart_Hybrid_Theme.git

# 2. 의존성 설치
cd Smart_Hybrid_Theme
npm install

# 3. 빌드
npm run build

# 4. Obsidian에 링크 (경로는 실제 경로로 변경)
ln -s $(pwd)/dist /path/to/your/vault/.obsidian/plugins/smart-hybrid-theme
```

---

## 🎯 기본 사용법

### 첫 실행

1. **자동 설정**
   - 설치 후 테마가 자동으로 활성화됩니다
   - 기본값으로 Writer 페르소나가 적용됩니다

2. **폴더 구조 최적화**
   ```
   내 Vault/
   ├── Work/          # → Developer 페르소나로 자동 전환
   ├── Projects/      # → Developer 페르소나
   ├── Writing/       # → Writer 페르소나로 자동 전환
   ├── Journal/       # → Writer 페르소나
   ├── Design/        # → Designer 페르소나로 자동 전환
   └── Creative/      # → Designer 페르소나
   ```

### 기본 단축키

| 단축키 | 기능 |
|--------|------|
| `Cmd/Ctrl + Shift + P` | 페르소나 전환 |
| `Cmd/Ctrl + Shift + U` | UI 스타일 전환 |
| `Cmd/Ctrl + Shift + R` | 테마 리로드 |

### 커맨드 팔레트

`Cmd/Ctrl + P`로 커맨드 팔레트를 열고 다음을 입력:

- `Smart Hybrid: Toggle Persona` - 페르소나 전환
- `Smart Hybrid: Toggle UI Style` - UI 스타일 전환
- `Smart Hybrid: Reload Theme` - 테마 리로드

---

## 🎭 페르소나 시스템

페르소나는 특정 작업 유형에 최적화된 테마 설정의 집합입니다.

### 👨‍💻 Developer 페르소나

**언제 사용하나요?**
- 코딩 및 프로그래밍
- 기술 문서 작성
- API 문서화
- 시스템 설계

**특징:**
- 어두운 VS Code 스타일 배경
- 신택스 하이라이팅 시뮬레이션
- 파일 타입별 아이콘 (`📜 .js`, `🔷 .ts`, `🐍 .py`)
- Git 상태 표시 (M, A, D)
- 터미널 스타일 프롬프트

**예시 설정:**
```
폴더: Work/, Projects/, Dev/, Code/
색상: 차가운 블루-그린 톤
폰트: JetBrains Mono (코딩용)
```

### ✍️ Writer 페르소나

**언제 사용하나요?**
- 글쓰기 및 저널링
- 창작 활동
- 에세이 작성
- 독서 노트

**특징:**
- 따뜻한 종이 질감 배경
- 세리프 폰트 (Noto Serif KR)
- 드롭캡 (첫 글자 크게)
- 포커스 모드 지원
- 인용구 스타일링

**예시 설정:**
```
폴더: Writing/, Journal/, Notes/, Blog/
색상: 따뜻한 갈색-크림 톤
폰트: Noto Serif KR (읽기용)
```

**포커스 모드 활성화:**
- 사이드바와 상태바가 자동으로 숨겨짐
- 마우스 오버 시에만 표시
- 집중력 향상을 위한 깔끔한 환경

### 🎨 Designer 페르소나

**언제 사용하나요?**
- 디자인 문서 작성
- 아이디어 보드 제작
- 시각적 프로젝트
- 창의적 브레인스토밍

**특징:**
- 밝고 깔끔한 배경
- 12열 그리드 레이아웃
- 이미지 갤러리 모드
- 컬러 팔레트 도구
- 크리에이티브 색상

**예시 설정:**
```
폴더: Design/, Creative/, Art/, Portfolio/
색상: 생동감 있는 퍼플-핑크 톤
폰트: Inter (모던 산세리프)
```

---

## 🎨 UI 스타일

UI 스타일은 전체적인 인터페이스의 시각적 처리 방식을 결정합니다.

### ✨ Glassmorphism

**특징:**
- 반투명 블러 효과
- 글래스 재질 시뮬레이션
- 부드러운 그림자
- 모던하고 세련된 느낌

**적합한 상황:**
- 시각적 임팩트가 중요한 작업
- 모던한 디자인을 선호하는 경우
- 창의적 작업 환경

**설정 방법:**
1. 설정에서 `UI Style` → `Glassmorphism` 선택
2. 또는 `Cmd/Ctrl + Shift + U`로 빠른 전환

### 🔳 Minimal

**특징:**
- 불필요한 요소 제거
- 극도로 단순한 인터페이스
- 애니메이션 최소화
- 집중력 극대화

**적합한 상황:**
- 긴 시간 집중이 필요한 작업
- 주의산만을 최소화하고 싶은 경우
- 저사양 기기에서 사용

**숨겨지는 요소:**
- 사이드바 리본
- 상태바
- 탭 아이콘
- 각종 장식 요소

---

## ⚙️ 고급 설정

### 설정 접근 방법

1. **플러그인 설정**
   - `설정` → `커뮤니티 플러그인` → `Smart Hybrid Theme` → `옵션`

2. **설정 항목**

#### 🎭 페르소나 설정

| 항목 | 설명 | 기본값 |
|------|------|--------|
| Default Persona | 기본 페르소나 선택 | Writer |
| Auto Detection | 폴더 기반 자동 감지 | 활성화 |
| Folder Mappings | 폴더-페르소나 매핑 | 기본 매핑 |

#### 🎨 스타일 설정

| 항목 | 설명 | 기본값 |
|------|------|--------|
| UI Style | 기본 UI 스타일 | Default |
| Color Scheme | 라이트/다크/자동 | Auto |
| Accent Color | 강조 색상 | #2196F3 |

#### 🔤 폰트 설정

| 항목 | 설명 | 기본값 |
|------|------|--------|
| Font System | 폰트 시스템 선택 | Auto |
| Korean Fonts | 한국어 폰트 설정 | Pretendard |
| English Fonts | 영어 폰트 설정 | Inter |
| Code Fonts | 코드 폰트 설정 | JetBrains Mono |

### 폴더 매핑 커스터마이징

**기본 매핑:**
```javascript
{
  "Work": "developer",
  "Projects": "developer",
  "Dev": "developer",
  "Writing": "writer",
  "Journal": "writer", 
  "Notes": "writer",
  "Design": "designer",
  "Creative": "designer",
  "Art": "designer"
}
```

**커스텀 매핑 추가:**
1. 설정에서 `Folder Mappings` 섹션으로 이동
2. `Add Mapping` 버튼 클릭
3. 폴더 이름과 페르소나 선택
4. `Save` 버튼으로 저장

### 체크박스 커스터마이징

**사용 가능한 체크박스:**

| 마크다운 | 표시 | 의미 |
|----------|------|------|
| `- [x]` | ✅ | 완료 |
| `- [ ]` | ⬜ | 미완료 |
| `- [-]` | ➖ | 취소됨 |
| `- [!]` | ❗ | 중요 |
| `- [?]` | ❓ | 질문 |
| `- [*]` | ⭐ | 즐겨찾기 |
| `- [i]` | 💡 | 아이디어 |
| `- [>]` | ▶️ | 연기됨 |
| `- [<]` | 📅 | 예정됨 |
| `- [/]` | ➗ | 진행중 |

**활성화/비활성화:**
1. 설정에서 `Custom Checkboxes` 섹션으로 이동
2. 원하는 체크박스 토글
3. 실시간으로 변경사항 적용

---

## 🛠️ 문제 해결

### 자주 발생하는 문제

#### 1. 테마가 적용되지 않음

**증상:** 테마를 선택했지만 변화가 없음

**해결책:**
1. Obsidian 재시작
2. 캐시 클리어: `Cmd/Ctrl + Shift + R`
3. 다른 테마 선택 후 다시 Smart Hybrid Theme 선택
4. 플러그인 비활성화 후 재활성화

#### 2. 페르소나가 자동으로 전환되지 않음

**증상:** 폴더를 이동해도 페르소나가 변경되지 않음

**해결책:**
1. 설정에서 `Auto Detection` 활성화 확인
2. 폴더 이름이 매핑에 정확히 일치하는지 확인
3. 파일을 실제로 열어야 전환됨 (폴더만 클릭하면 안됨)
4. Debug Mode 활성화하여 콘솔 로그 확인

#### 3. 단축키가 작동하지 않음

**증상:** `Cmd/Ctrl + Shift + P` 등이 반응하지 않음

**해결책:**
1. 다른 플러그인과의 단축키 충돌 확인
2. Obsidian 설정에서 단축키 재설정
3. 플러그인 재활성화

#### 4. 폰트가 제대로 표시되지 않음

**증상:** 설정한 폰트와 다른 폰트로 표시됨

**해결책:**
1. 시스템에 해당 폰트 설치 여부 확인
2. 폰트 캐시 클리어 (OS별 방법 상이)
3. 대체 폰트로 변경 테스트
4. 브라우저 개발자 도구로 CSS 확인

### 성능 최적화

#### 느린 로딩 개선

1. **Performance Mode 활성화**
   - 설정에서 `Performance Mode` 체크
   - 애니메이션과 효과 최소화

2. **불필요한 기능 비활성화**
   - 사용하지 않는 체크박스 비활성화
   - Auto Detection 끄기 (수동 전환만 사용)

3. **시스템 리소스 확인**
   - RAM 사용량 모니터링
   - 다른 무거운 플러그인과의 충돌 확인

### 디버그 모드

**활성화 방법:**
1. 설정에서 `Debug Mode` 활성화
2. 개발자 도구 열기 (`Cmd/Ctrl + Shift + I`)
3. 콘솔에서 `[Smart Theme]` 접두사 로그 확인

**주요 로그 메시지:**
```
[Smart Theme] Applying initial theme...
[Smart Theme] File opened: Writing/essay.md, switching to writer persona
[Smart Theme] Applied persona: writer
[Smart Theme] Applied UI style: glassmorphism
```

---

## ❓ FAQ

### 기본 사용

**Q: 여러 페르소나를 동시에 사용할 수 있나요?**
A: 아니요. 한 번에 하나의 페르소나만 활성화됩니다. 단, v1.2.0에서 페르소나 믹싱 기능이 추가될 예정입니다.

**Q: 모바일에서도 사용할 수 있나요?**
A: 네, 모바일 Obsidian에서도 작동합니다. 다만 일부 고급 기능은 제한될 수 있습니다.

**Q: 다른 테마와 함께 사용할 수 있나요?**
A: 아니요. Smart Hybrid Theme은 독립적인 테마로 다른 테마와 동시 사용은 불가능합니다.

### 커스터마이징

**Q: 새로운 페르소나를 만들 수 있나요?**
A: 현재 버전에서는 불가능합니다. v2.0.0에서 커스텀 페르소나 빌더가 추가될 예정입니다.

**Q: 색상을 완전히 다르게 바꿀 수 있나요?**
A: 설정에서 강조 색상(Accent Color)을 변경할 수 있습니다. 더 세밀한 색상 조정은 향후 버전에서 지원 예정입니다.

**Q: 폰트 크기를 조절할 수 있나요?**
A: Obsidian의 기본 폰트 크기 설정을 따릅니다. CSS 스니펫을 사용하여 추가 조정이 가능합니다.

### 기술적 질문

**Q: 테마가 느린 것 같아요. 최적화 방법이 있나요?**
A: Performance Mode를 활성화하고, 사용하지 않는 체크박스를 비활성화해 보세요. 또한 다른 무거운 플러그인과의 충돌을 확인해 보시기 바랍니다.

**Q: 테마가 다른 플러그인과 충돌합니다.**
A: Debug Mode를 활성화하여 구체적인 오류를 확인하고, GitHub 이슈로 신고해 주세요. 임시 해결책으로 충돌하는 플러그인을 일시적으로 비활성화할 수 있습니다.

**Q: 업데이트는 어떻게 하나요?**
A: 자동 업데이트는 지원되지 않습니다. GitHub에서 새 버전을 다운로드하여 수동으로 설치해야 합니다. v1.2.0부터 자동 업데이트가 지원될 예정입니다.

---

## 📞 지원 및 문의

### 문제 신고
- **GitHub Issues**: [이슈 신고](https://github.com/metavision9988/Smart_Hybrid_Theme/issues)
- **이메일**: metavision9988@gmail.com

### 기여하기
- **Pull Request**: 기능 개선 및 버그 수정 환영
- **번역**: 다국어 지원에 기여
- **테스트**: 베타 버전 테스트 참여

### 커뮤니티
- **Discord**: [커뮤니티 채널](https://discord.gg/smart-hybrid-theme) (준비중)
- **Reddit**: r/ObsidianMD에서 #SmartHybridTheme 태그 사용

---

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](../LICENSE) 파일을 참조하세요.

---

## 🙏 감사의 말

Smart Hybrid Theme을 사용해 주셔서 감사합니다. 여러분의 피드백과 기여가 이 프로젝트를 더욱 발전시킵니다.

**해피 노트테이킹! 📝✨**

---

*이 매뉴얼은 v1.0.0 기준으로 작성되었습니다. 최신 정보는 [GitHub 리포지토리](https://github.com/metavision9988/Smart_Hybrid_Theme)를 확인해 주세요.*