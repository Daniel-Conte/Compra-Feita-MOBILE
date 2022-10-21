import { Theme as PaperTheme } from 'react-native-paper';

export type Theme = PaperTheme;

export type Variant = 'success' | 'warning' | 'danger';

export type VariantStyles = Record<Variant, Partial<Theme['colors']>>;
