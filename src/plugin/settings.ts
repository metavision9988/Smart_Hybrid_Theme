export interface ThemeSettings {
  // 페르소나
  persona: 'developer' | 'writer' | 'designer' | 'auto';
  defaultPersona: string;
  
  // UI 스타일
  uiStyle: 'glassmorphism' | 'minimal' | 'default';
  
  // 기능 토글
  folderDetection: boolean;
  checkboxStyles: boolean;
  fontSystem: 'auto' | 'korean' | 'english' | 'mixed';
  
  // 색상
  colorScheme: 'light' | 'dark' | 'auto';
  accentColor: string;
  
  // 폴더 매핑
  folderMappings: Record<string, string>;
  
  // 체크박스
  enabledCheckboxes: string[];
  
  // 성능
  performanceMode: boolean;
  debugMode: boolean;
}

export const DEFAULT_SETTINGS: ThemeSettings = {
  persona: 'auto',
  defaultPersona: 'writer',
  uiStyle: 'default',
  folderDetection: true,
  checkboxStyles: true,
  fontSystem: 'auto',
  colorScheme: 'auto',
  accentColor: '#2196F3',
  folderMappings: {
    'Work': 'developer',
    'Projects': 'developer',
    'Dev': 'developer',
    'Writing': 'writer',
    'Journal': 'writer',
    'Notes': 'writer',
    'Design': 'designer',
    'Creative': 'designer',
    'Art': 'designer'
  },
  enabledCheckboxes: [
    'todo', 'done', 'cancelled', 'important',
    'question', 'star', 'idea', 'milestone',
    'rocket', 'bulb', 'target', 'lightning'
  ],
  performanceMode: false,
  debugMode: false
};

export function validateSettings(settings: any): settings is ThemeSettings {
  return (
    settings &&
    typeof settings === 'object' &&
    ['developer', 'writer', 'designer', 'auto'].includes(settings.persona) &&
    ['glassmorphism', 'minimal', 'default'].includes(settings.uiStyle) &&
    typeof settings.folderDetection === 'boolean'
  );
}