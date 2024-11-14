import { createGlobalTheme } from '@vanilla-extract/css';

import { tokens } from '../tokens';

export const themeVars = createGlobalTheme(':root', tokens);
