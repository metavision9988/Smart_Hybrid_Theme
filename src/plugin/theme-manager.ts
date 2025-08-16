import { App, TFile, EventRef } from 'obsidian';
import { ThemeSettings } from './settings';

export class ThemeManager {
  private currentPersona: string = '';
  private currentUIStyle: string = '';
  private eventRefs: EventRef[] = [];
  
  constructor(
    private app: App,
    private settings: ThemeSettings
  ) {}
  
  /**
   * 초기 테마 적용
   */
  applyInitialTheme(): void {
    this.log('Applying initial theme...');
    
    // 색상 스킴
    this.applyColorScheme(this.settings.colorScheme);
    
    // UI 스타일
    this.applyUIStyle(this.settings.uiStyle);
    
    // 기본 페르소나
    if (this.settings.persona !== 'auto') {
      this.applyPersona(this.settings.persona);
    } else {
      this.applyPersona(this.settings.defaultPersona);
    }
    
    // 체크박스 스타일
    if (this.settings.checkboxStyles) {
      this.enableCheckboxStyles();
    }
    
    // 폰트 시스템
    this.applyFontSystem(this.settings.fontSystem);
  }
  
  /**
   * 파일 열기 핸들러
   */
  handleFileOpen(file: TFile): void {
    if (!file || !this.settings.folderDetection) return;
    
    const persona = this.detectPersonaFromPath(file.path);
    if (persona && persona !== this.currentPersona) {
      this.log(`File opened: ${file.path}, switching to ${persona} persona`);
      this.applyPersona(persona);
    }
  }
  
  /**
   * 경로에서 페르소나 감지
   */
  detectPersonaFromPath(path: string): string {
    for (const [folder, persona] of Object.entries(this.settings.folderMappings)) {
      if (path.toLowerCase().includes(folder.toLowerCase())) {
        return persona;
      }
    }
    return this.settings.defaultPersona;
  }
  
  /**
   * 페르소나 적용
   */
  applyPersona(persona: string): void {
    const body = document.body;
    
    // 기존 페르소나 제거
    body.classList.remove(
      'persona-developer',
      'persona-writer',
      'persona-designer'
    );
    
    // 새 페르소나 적용
    if (persona && persona !== 'default') {
      body.classList.add(`persona-${persona}`);
      this.currentPersona = persona;
      this.log(`Applied persona: ${persona}`);
    }
  }
  
  /**
   * UI 스타일 적용
   */
  applyUIStyle(style: string): void {
    const body = document.body;
    
    // 기존 스타일 제거
    body.classList.remove(
      'ui-glassmorphism',
      'ui-minimal'
    );
    
    // 새 스타일 적용
    if (style && style !== 'default') {
      body.classList.add(`ui-${style}`);
      this.currentUIStyle = style;
      this.log(`Applied UI style: ${style}`);
    }
  }
  
  /**
   * 색상 스킴 적용
   */
  applyColorScheme(scheme: string): void {
    const body = document.body;
    
    if (scheme === 'auto') {
      // 시스템 설정 감지
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      scheme = isDark ? 'dark' : 'light';
    }
    
    body.classList.remove('theme-light', 'theme-dark');
    body.classList.add(`theme-${scheme}`);
    
    // 액센트 색상 적용
    document.documentElement.style.setProperty('--accent', this.settings.accentColor);
  }
  
  /**
   * 폰트 시스템 적용
   */
  applyFontSystem(system: string): void {
    const body = document.body;
    
    body.classList.remove(
      'font-korean',
      'font-english',
      'font-mixed'
    );
    
    if (system !== 'auto') {
      body.classList.add(`font-${system}`);
    }
  }
  
  /**
   * 체크박스 스타일 활성화
   */
  enableCheckboxStyles(): void {
    document.body.classList.add('custom-checkboxes');
    
    // 활성화된 체크박스만 적용
    this.settings.enabledCheckboxes.forEach(checkbox => {
      document.body.classList.add(`checkbox-${checkbox}`);
    });
  }
  
  /**
   * 페르소나 토글
   */
  togglePersona(): void {
    const personas = ['developer', 'writer', 'designer'];
    const currentIndex = personas.indexOf(this.currentPersona);
    const nextIndex = (currentIndex + 1) % personas.length;
    this.applyPersona(personas[nextIndex]);
  }
  
  /**
   * UI 스타일 토글
   */
  toggleUIStyle(): void {
    const styles = ['default', 'glassmorphism', 'minimal'];
    const currentIndex = styles.indexOf(this.currentUIStyle);
    const nextIndex = (currentIndex + 1) % styles.length;
    this.applyUIStyle(styles[nextIndex]);
  }
  
  /**
   * 설정 업데이트
   */
  updateSettings(settings: ThemeSettings): void {
    this.settings = settings;
    this.applyInitialTheme();
  }
  
  /**
   * 테마 재적용
   */
  reapplyTheme(): void {
    this.applyInitialTheme();
  }
  
  /**
   * 정리
   */
  cleanup(): void {
    // 이벤트 리스너 제거
    this.eventRefs.forEach(ref => this.app.workspace.offref(ref));
    this.eventRefs = [];
    
    // 클래스 제거
    document.body.classList.remove(
      'persona-developer',
      'persona-writer',
      'persona-designer',
      'ui-glassmorphism',
      'ui-minimal',
      'custom-checkboxes'
    );
  }
  
  /**
   * 디버그 로그
   */
  private log(message: string): void {
    if (this.settings.debugMode) {
      console.log(`[Smart Theme] ${message}`);
    }
  }
}