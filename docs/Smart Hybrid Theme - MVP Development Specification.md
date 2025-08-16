# Smart Hybrid Theme - MVP Development Specification

## 1. MVP 범위 정의

### 1.1 포함 기능 (Phase 1)
✅ **Core 모듈**
- base.css: 기본 레이아웃과 스타일
- variables.css: CSS 변수 시스템
- reset.css: 브라우저 기본값 초기화

✅ **3개 페르소나**
- Developer Mode
- Writer Mode  
- Designer Mode

✅ **2개 UI 스타일**
- Glassmorphism
- Minimal

✅ **폴더별 자동 테마**
- Work → Developer
- Writing → Writer
- Design → Designer

✅ **확장 체크박스 (15개)**
- 기본 상태 체크박스
- 이모지 체크박스

✅ **한/영 폰트 시스템**
- 언어 자동 감지
- 폰트 페어링

✅ **Style Settings 기본 통합**
- GUI 설정 패널
- 실시간 프리뷰

### 1.2 제외 기능 (Phase 2)
❌ 시간대별 자동 전환
❌ 플러그인 자동 로더
❌ Researcher 페르소나
❌ Neo-brutalism 등 고급 스타일
❌ 동적 모듈 로딩
❌ AI 컨텍스트 인식
❌ 클라우드 동기화

## 2. 기술 스택

### 2.1 개발 환경
```yaml
개발 도구:
  - Claude Code: --dangerously-skip-permissions
  - Node.js: 18.0.0+
  - npm: 9.0.0+
  - Git: 2.40.0+

언어:
  - TypeScript: 5.0.0
  - SCSS: 1.69.0
  - JavaScript: ES2018+

프레임워크:
  - Obsidian API: 1.0.0+
  - Style Settings API: 1.0.0+
```

### 2.2 빌드 도구
```yaml
번들링:
  - esbuild: 0.19.0 (플러그인)
  - sass: 1.69.0 (스타일)

최적화:
  - PostCSS: 8.4.0
  - Autoprefixer: 10.4.0
  - CSSnano: 6.0.0

품질 관리:
  - ESLint: 8.0.0
  - Prettier: 3.0.0
  - StyleLint: 15.0.0

테스트:
  - Jest: 29.0.0
  - Playwright: 1.40.0
```

### 2.3 파일 구조
```
smart-hybrid-theme/
├── src/
│   ├── core/                    # 핵심 스타일
│   │   ├── base.scss           # 기본 레이아웃
│   │   ├── variables.scss      # CSS 변수
│   │   ├── mixins.scss         # SCSS 믹스인
│   │   └── reset.scss          # 리셋 스타일
│   │
│   ├── modules/                 # 모듈별 스타일
│   │   ├── personas/           # 페르소나 모드
│   │   │   ├── developer.scss
│   │   │   ├── writer.scss
│   │   │   └── designer.scss
│   │   │
│   │   ├── ui-styles/          # UI 스타일
│   │   │   ├── glassmorphism.scss
│   │   │   └── minimal.scss
│   │   │
│   │   └── features/           # 기능별 스타일
│   │       ├── checkboxes.scss
│   │       ├── folders.scss
│   │       └── fonts.scss
│   │
│   ├── plugin/                  # 플러그인 코드
│   │   ├── main.ts             # 진입점
│   │   ├── settings.ts         # 설정 정의
│   │   ├── settings-tab.ts     # 설정 UI
│   │   └── theme-manager.ts    # 테마 관리
│   │
│   └── main.scss               # 메인 SCSS 파일
│
├── tests/                       # 테스트 파일
│   ├── unit/                   # 단위 테스트
│   │   ├── core.test.ts
│   │   ├── personas.test.ts
│   │   └── theme-manager.test.ts
│   │
│   └── e2e/                    # E2E 테스트
│       └── theme.spec.ts
│
├── dist/                        # 빌드 결과물
│   ├── theme.css               # 컴파일된 CSS
│   ├── main.js                 # 번들된 플러그인
│   ├── manifest.json           # 플러그인 메타데이터
│   └── styles.css              # Style Settings용
│
├── docs/                        # 문서
│   ├── README.md
│   ├── INSTALL.md
│   └── CONTRIBUTING.md
│
└── config/                      # 설정 파일
    ├── tsconfig.json
    ├── .eslintrc.js
    ├── .prettierrc
    ├── jest.config.js
    └── esbuild.config.mjs
```

## 3. 구현 상세

### 3.1 Core 모듈

#### variables.scss
```scss
// 색상 팔레트 정의
:root {
  // 기본 색상
  --color-blue-50: #E3F2FD;
  --color-blue-100: #BBDEFB;
  --color-blue-200: #90CAF9;
  --color-blue-300: #64B5F6;
  --color-blue-400: #42A5F5;
  --color-blue-500: #2196F3;
  --color-blue-600: #1E88E5;
  --color-blue-700: #1976D2;
  --color-blue-800: #1565C0;
  --color-blue-900: #0D47A1;
  
  // 테마 변수
  --primary: var(--theme-primary, var(--color-blue-500));
  --secondary: var(--theme-secondary, #4CAF50);
  --accent: var(--theme-accent, #FF9800);
  
  // 배경색
  --background-primary: var(--theme-bg-primary, #FFFFFF);
  --background-secondary: var(--theme-bg-secondary, #F5F5F5);
  --background-modifier-border: var(--theme-border, #E0E0E0);
  
  // 텍스트 색상
  --text-normal: var(--theme-text-normal, #212121);
  --text-muted: var(--theme-text-muted, #757575);
  --text-faint: var(--theme-text-faint, #BDBDBD);
  
  // 폰트 시스템
  --font-ui: var(--theme-font-ui, -apple-system, BlinkMacSystemFont, 'Inter', 'Pretendard', sans-serif);
  --font-text: var(--theme-font-text, 'Noto Sans KR', 'Roboto', sans-serif);
  --font-code: var(--theme-font-code, 'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace);
  --font-serif: var(--theme-font-serif, 'Noto Serif KR', 'Georgia', serif);
  
  // 크기 시스템
  --font-size-xs: 11px;
  --font-size-sm: 13px;
  --font-size-base: 14px;
  --font-size-md: 16px;
  --font-size-lg: 18px;
  --font-size-xl: 20px;
  --font-size-2xl: 24px;
  
  // 간격 시스템
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  
  // 반경 시스템
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;
  
  // 그림자 시스템
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.07);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
  --shadow-xl: 0 20px 25px rgba(0,0,0,0.1);
}
```

#### base.scss
```scss
// 기본 레이아웃
.workspace {
  font-family: var(--font-ui);
  font-size: var(--font-size-base);
  line-height: 1.6;
  color: var(--text-normal);
  background: var(--background-primary);
}

// 마크다운 뷰
.markdown-preview-view,
.markdown-source-view {
  font-family: var(--font-text);
  padding: var(--spacing-lg);
  max-width: 900px;
  margin: 0 auto;
}

// 헤딩 스타일
.markdown-preview-view {
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    margin-top: var(--spacing-lg);
    margin-bottom: var(--spacing-md);
  }
  
  h1 { font-size: var(--font-size-2xl); }
  h2 { font-size: var(--font-size-xl); }
  h3 { font-size: var(--font-size-lg); }
}

// 코드 블록
.HyperMD-codeblock,
.markdown-preview-view pre {
  font-family: var(--font-code);
  font-size: var(--font-size-sm);
  background: var(--background-secondary);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
}
```

### 3.2 페르소나 모듈

#### developer.scss
```scss
.persona-developer {
  // 개발자 색상 스킴
  --theme-primary: #00695C;
  --theme-secondary: #00ACC1;
  --theme-accent: #FF9800;
  --theme-bg-primary: #1E1E1E;
  --theme-bg-secondary: #252526;
  --theme-text-normal: #D4D4D4;
  --theme-text-muted: #858585;
  
  // 코드 중심 폰트
  --theme-font-text: var(--font-code);
  
  // VS Code 스타일 코드 블록
  .HyperMD-codeblock,
  .markdown-preview-view pre {
    background: #1E1E1E;
    border-left: 3px solid var(--theme-accent);
    
    code {
      color: #D4D4D4;
    }
  }
  
  // 인라인 코드
  code:not(pre code) {
    background: rgba(0, 105, 92, 0.1);
    color: var(--theme-primary);
    padding: 2px 6px;
    border-radius: 3px;
    font-size: 0.9em;
  }
  
  // 파일 트리 아이콘
  .nav-file-title[data-path$=".js"]::before { content: "📜"; }
  .nav-file-title[data-path$=".ts"]::before { content: "🔷"; }
  .nav-file-title[data-path$=".css"]::before { content: "🎨"; }
  .nav-file-title[data-path$=".md"]::before { content: "📝"; }
}
```

#### writer.scss
```scss
.persona-writer {
  // 작가 색상 스킴 (따뜻한 톤)
  --theme-primary: #6D4C41;
  --theme-secondary: #8D6E63;
  --theme-accent: #D7CCC8;
  --theme-bg-primary: #FFF8E1;
  --theme-bg-secondary: #FFF3E0;
  --theme-text-normal: #3E2723;
  
  // 세리프 폰트
  --theme-font-text: var(--font-serif);
  
  // 타자기 스타일
  .markdown-source-view,
  .markdown-preview-view {
    font-size: var(--font-size-md);
    line-height: 2;
    max-width: 700px;
    margin: 0 auto;
    
    // 문단 스타일
    p {
      text-indent: 2em;
      text-align: justify;
      margin-bottom: var(--spacing-lg);
    }
    
    // 인용구 스타일
    blockquote {
      font-style: italic;
      border-left: 4px solid var(--theme-accent);
      padding-left: var(--spacing-lg);
      margin: var(--spacing-xl) 0;
    }
  }
  
  // 포커스 모드
  &.focus-mode {
    .workspace-ribbon,
    .status-bar,
    .workspace-tab-header {
      opacity: 0.3;
      transition: opacity 0.3s;
      
      &:hover {
        opacity: 1;
      }
    }
  }
}
```

#### designer.scss
```scss
.persona-designer {
  // 디자이너 색상 스킴 (비비드)
  --theme-primary: #9C27B0;
  --theme-secondary: #EC407A;
  --theme-accent: #00BCD4;
  --theme-bg-primary: #FAFAFA;
  
  // 모던 산세리프
  --theme-font-ui: 'Inter', 'Pretendard', sans-serif;
  --theme-font-text: 'Inter', sans-serif;
  
  // 그리드 시스템
  .markdown-preview-view {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: var(--spacing-md);
    
    > * {
      grid-column: span 12;
    }
    
    .image-embed {
      grid-column: span 6;
      
      &.full-width {
        grid-column: span 12;
      }
    }
  }
  
  // 이미지 갤러리
  .image-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: var(--spacing-sm);
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: var(--radius-md);
    }
  }
  
  // 컬러 팔레트 표시
  .color-palette {
    display: flex;
    gap: var(--spacing-xs);
    
    .color-swatch {
      width: 40px;
      height: 40px;
      border-radius: var(--radius-sm);
      border: 2px solid var(--background-modifier-border);
    }
  }
}
```

### 3.3 UI 스타일 모듈

#### glassmorphism.scss
```scss
.ui-glassmorphism {
  // 글래스 효과 믹스인
  @mixin glass-effect {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }
  
  // 사이드바
  .workspace-leaf-content {
    @include glass-effect;
  }
  
  // 네비게이션
  .nav-folder-title,
  .nav-file-title {
    @include glass-effect;
    margin-bottom: 2px;
    
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
    
    &.is-active {
      background: rgba(255, 255, 255, 0.3);
    }
  }
  
  // 헤더
  .view-header {
    @include glass-effect;
    backdrop-filter: blur(20px);
  }
  
  // 모달
  .modal {
    @include glass-effect;
    backdrop-filter: blur(15px);
    background: rgba(255, 255, 255, 0.95);
  }
  
  // 제안 팝업
  .suggestion-container {
    @include glass-effect;
  }
}
```

#### minimal.scss
```scss
.ui-minimal {
  // 미니멀 원칙
  --theme-border: transparent;
  --shadow-sm: none;
  --shadow-md: none;
  
  // 숨김 요소
  .status-bar,
  .workspace-ribbon {
    display: none;
  }
  
  // 심플한 사이드바
  .workspace-leaf-content {
    background: transparent;
    border: none;
  }
  
  // 클린한 헤더
  .view-header {
    background: transparent;
    border-bottom: 1px solid var(--background-modifier-border);
    
    .view-header-title {
      font-weight: 300;
      font-size: var(--font-size-sm);
    }
  }
  
  // 포커스 인디케이터 제거
  *:focus {
    outline: none;
  }
  
  // 여백 증가
  .markdown-preview-view,
  .markdown-source-view {
    padding: var(--spacing-2xl);
  }
}
```

### 3.4 플러그인 구현

#### main.ts
```typescript
import { Plugin, TFile, WorkspaceLeaf } from 'obsidian';
import { ThemeSettings, DEFAULT_SETTINGS } from './settings';
import { ThemeManager } from './theme-manager';
import { ThemeSettingTab } from './settings-tab';

export default class SmartHybridTheme extends Plugin {
  settings: ThemeSettings;
  themeManager: ThemeManager;
  
  async onload() {
    console.log('🎨 Smart Hybrid Theme loading...');
    
    // 설정 로드
    await this.loadSettings();
    
    // 테마 매니저 초기화
    this.themeManager = new ThemeManager(this.app, this.settings);
    
    // 설정 탭 추가
    this.addSettingTab(new ThemeSettingTab(this.app, this));
    
    // 이벤트 리스너
    this.registerEvents();
    
    // 초기 테마 적용
    this.themeManager.applyInitialTheme();
    
    // 커맨드 등록
    this.registerCommands();
  }
  
  registerEvents() {
    // 파일 열기 감지
    this.registerEvent(
      this.app.workspace.on('file-open', (file: TFile) => {
        if (this.settings.folderDetection && file) {
          this.themeManager.handleFileOpen(file);
        }
      })
    );
    
    // 레이아웃 변경 감지
    this.registerEvent(
      this.app.workspace.on('layout-change', () => {
        this.themeManager.reapplyTheme();
      })
    );
  }
  
  registerCommands() {
    // 페르소나 전환 커맨드
    this.addCommand({
      id: 'toggle-persona',
      name: 'Toggle Persona Mode',
      callback: () => {
        this.themeManager.togglePersona();
      }
    });
    
    // UI 스타일 전환
    this.addCommand({
      id: 'toggle-ui-style',
      name: 'Toggle UI Style',
      callback: () => {
        this.themeManager.toggleUIStyle();
      }
    });
  }
  
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  
  async saveSettings() {
    await this.saveData(this.settings);
    this.themeManager.updateSettings(this.settings);
  }
  
  onunload() {
    console.log('👋 Smart Hybrid Theme unloaded');
    this.themeManager.cleanup();
  }
}
```

#### settings.ts
```typescript
export interface ThemeSettings {
  // 페르소나 설정
  persona: 'developer' | 'writer' | 'designer' | 'auto';
  
  // UI 스타일
  uiStyle: 'glassmorphism' | 'minimal' | 'default';
  
  // 기능 토글
  folderDetection: boolean;
  checkboxStyles: boolean;
  fontSystem: 'auto' | 'korean' | 'english' | 'mixed';
  
  // 색상 스킴
  colorScheme: 'light' | 'dark' | 'auto';
  
  // 폴더 매핑
  folderMappings: {
    [key: string]: string;
  };
  
  // 체크박스 활성화
  enabledCheckboxes: string[];
  
  // 고급 설정
  performanceMode: boolean;
  debugMode: boolean;
}

export const DEFAULT_SETTINGS: ThemeSettings = {
  persona: 'auto',
  uiStyle: 'default',
  folderDetection: true,
  checkboxStyles: true,
  fontSystem: 'auto',
  colorScheme: 'auto',
  folderMappings: {
    'Work': 'developer',
    'Writing': 'writer',
    'Design': 'designer',
    'Study': 'researcher',
    'Personal': 'default'
  },
  enabledCheckboxes: [
    'todo', 'done', 'cancelled', 'important',
    'question', 'star', 'idea', 'milestone'
  ],
  performanceMode: false,
  debugMode: false
};
```

## 4. 테스트 계획

### 4.1 단위 테스트

```typescript
// tests/unit/theme-manager.test.ts
import { ThemeManager } from '../../src/plugin/theme-manager';

describe('ThemeManager', () => {
  let manager: ThemeManager;
  
  beforeEach(() => {
    manager = new ThemeManager(mockApp, DEFAULT_SETTINGS);
  });
  
  describe('폴더 감지', () => {
    test('Work 폴더는 developer 페르소나를 반환해야 함', () => {
      const file = { path: 'Work/project/README.md' } as TFile;
      expect(manager.detectPersonaFromPath(file.path)).toBe('developer');
    });
    
    test('Writing 폴더는 writer 페르소나를 반환해야 함', () => {
      const file = { path: 'Writing/novel/chapter1.md' } as TFile;
      expect(manager.detectPersonaFromPath(file.path)).toBe('writer');
    });
  });
  
  describe('페르소나 적용', () => {
    test('developer 페르소나가 body 클래스에 추가되어야 함', () => {
      manager.applyPersona('developer');
      expect(document.body.classList.contains('persona-developer')).toBe(true);
    });
    
    test('이전 페르소나는 제거되어야 함', () => {
      manager.applyPersona('writer');
      manager.applyPersona('developer');
      expect(document.body.classList.contains('persona-writer')).toBe(false);
      expect(document.body.classList.contains('persona-developer')).toBe(true);
    });
  });
  
  describe('UI 스타일', () => {
    test('glassmorphism 스타일이 적용되어야 함', () => {
      manager.applyUIStyle('glassmorphism');
      expect(document.body.classList.contains('ui-glassmorphism')).toBe(true);
    });
  });
});
```

### 4.2 E2E 테스트

```typescript
// tests/e2e/theme.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Smart Hybrid Theme E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('obsidian://open');
    await page.waitForSelector('.workspace');
  });
  
  test('테마 설치 및 활성화', async ({ page }) => {
    // 설정 열기
    await page.click('[aria-label="Settings"]');
    
    // 플러그인 탭
    await page.click('text=Community plugins');
    
    // 테마 활성화
    await page.click('text=Smart Hybrid Theme');
    await page.click('button:has-text("Enable")');
    
    // 확인
    await expect(page.locator('body')).toHaveClass(/smart-hybrid-theme/);
  });
  
  test('페르소나 자동 전환', async ({ page }) => {
    // Work 폴더 파일 열기
    await page.click('.nav-folder-title:has-text("Work")');
    await page.click('.nav-file-title:first-child');
    
    // Developer 모드 확인
    await expect(page.locator('body')).toHaveClass(/persona-developer/);
    
    // Writing 폴더로 이동
    await page.click('.nav-folder-title:has-text("Writing")');
    await page.click('.nav-file-title:first-child');
    
    // Writer 모드 확인
    await expect(page.locator('body')).toHaveClass(/persona-writer/);
  });
  
  test('설정 패널 동작', async ({ page }) => {
    // 설정 열기
    await page.click('[aria-label="Settings"]');
    await page.click('text=Smart Hybrid Theme');
    
    // UI 스타일 변경
    await page.selectOption('#ui-style-select', 'glassmorphism');
    
    // 적용 확인
    await expect(page.locator('body')).toHaveClass(/ui-glassmorphism/);
    
    // 페르소나 변경
    await page.selectOption('#persona-select', 'writer');
    
    // 적용 확인
    await expect(page.locator('body')).toHaveClass(/persona-writer/);
  });
});
```

## 5. 빌드 설정

### 5.1 package.json
```json
{
  "name": "obsidian-smart-hybrid-theme",
  "version": "1.0.0-mvp",
  "description": "Context-aware intelligent theme system for Obsidian",
  "main": "dist/main.js",
  "scripts": {
    "dev": "npm-run-all --parallel dev:*",
    "dev:plugin": "node esbuild.config.mjs",
    "dev:css": "sass --watch src/main.scss:dist/theme.css",
    "build": "npm-run-all clean build:*",
    "build:plugin": "node esbuild.config.mjs production",
    "build:css": "sass src/main.scss dist/theme.css --style=compressed",
    "clean": "rm -rf dist/*",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:e2e": "playwright test",
    "lint": "npm-run-all lint:*",
    "lint:ts": "eslint src --ext .ts",
    "lint:scss": "stylelint src/**/*.scss",
    "format": "prettier --write 'src/**/*.{ts,scss}'",
    "version": "node version-bump.mjs && git add manifest.json versions.json"
  },
  "keywords": [
    "obsidian",
    "theme",
    "plugin",
    "smart",
    "hybrid",
    "context-aware"
  ],
  "author": "Your Name",
  "license": "MIT",
  "devDependencies": {
    "@types/node": "^18.0.0",
    "@types/jest": "^29.0.0",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "esbuild": "^0.19.0",
    "eslint": "^8.0.0",
    "jest": "^29.0.0",
    "npm-run-all": "^4.1.5",
    "obsidian": "latest",
    "playwright": "^1.40.0",
    "prettier": "^3.0.0",
    "sass": "^1.69.0",
    "stylelint": "^15.0.0",
    "stylelint-config-standard-scss": "^11.0.0",
    "ts-jest": "^29.0.0",
    "typescript": "^5.0.0"
  }
}
```

### 5.2 esbuild.config.mjs
```javascript
import esbuild from 'esbuild';
import process from 'process';
import fs from 'fs';

const banner = `/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, visit the github repository
*/
`;

const prod = process.argv[2] === 'production';

const context = await esbuild.context({
  banner: {
    js: banner,
  },
  entryPoints: ['src/plugin/main.ts'],
  bundle: true,
  external: [
    'obsidian',
    'electron',
    '@codemirror/autocomplete',
    '@codemirror/collab',
    '@codemirror/commands',
    '@codemirror/language',
    '@codemirror/lint',
    '@codemirror/search',
    '@codemirror/state',
    '@codemirror/view',
    '@lezer/common',
    '@lezer/highlight',
    '@lezer/lr'
  ],
  format: 'cjs',
  target: 'es2018',
  logLevel: 'info',
  sourcemap: prod ? false : 'inline',
  treeShaking: true,
  outfile: 'dist/main.js',
  minify: prod,
  define: {
    'process.env.NODE_ENV': prod ? '"production"' : '"development"'
  }
});

if (prod) {
  await context.rebuild();
  process.exit(0);
} else {
  await context.watch();
}
```

## 6. 품질 보증

### 6.1 코드 품질 기준
- TypeScript strict 모드
- ESLint 규칙 준수
- Prettier 포맷팅
- 코드 커버리지 > 80%

### 6.2 성능 기준
- CSS 크기 < 80KB
- JS 번들 < 30KB
- 초기 로딩 < 500ms
- 테마 전환 < 100ms

### 6.3 접근성 기준
- WCAG 2.1 AA 준수
- 키보드 네비게이션
- 스크린 리더 호환
- 고대비 모드

## 7. 배포 계획

### 7.1 빌드 산출물
```
dist/
├── theme.css        # 60-80KB
├── main.js          # 25-30KB
├── manifest.json    # 1KB
├── styles.css       # 5KB (Style Settings)
└── README.md        # 설치 가이드
```

### 7.2 버전 관리
- Semantic Versioning (SemVer)
- Git 태그 사용
- CHANGELOG.md 유지

### 7.3 배포 채널
1. GitHub Releases
2. Obsidian Community Plugins
3. BRAT (Beta Testing)

## 8. 문서화

### 8.1 사용자 문서
- README.md: 소개 및 기능
- INSTALL.md: 설치 가이드
- USAGE.md: 사용 방법
- FAQ.md: 자주 묻는 질문

### 8.2 개발자 문서
- CONTRIBUTING.md: 기여 가이드
- API.md: 플러그인 API
- ARCHITECTURE.md: 아키텍처 설명

## 9. 마일스톤

### Week 1: 기초 구축
- [x] 프로젝트 구조 설정
- [x] 개발 환경 구성
- [ ] Core 모듈 개발
- [ ] 테스트 환경 구축

### Week 2: 기능 개발
- [ ] 페르소나 모듈 구현
- [ ] UI 스타일 구현
- [ ] 폴더 감지 시스템
- [ ] 체크박스 스타일

### Week 3: 플러그인 개발
- [ ] 플러그인 코어
- [ ] 설정 패널
- [ ] Style Settings 통합
- [ ] 커맨드 구현

### Week 4: 품질 & 배포
- [ ] 테스트 작성
- [ ] 성능 최적화
- [ ] 문서 작성
- [ ] 베타 배포

## 10. 리스크 관리

### 기술적 리스크
- Obsidian API 변경 → 버전 잠금
- 성능 저하 → 프로파일링 & 최적화
- 플러그인 충돌 → 격리된 네임스페이스

### 일정 리스크
- 지연 가능성 → 버퍼 시간 확보
- 품질 이슈 → 단계적 릴리즈