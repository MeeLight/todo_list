import { defineConfig, type SystemStyleObject } from '@pandacss/dev'
import type { GlobalStyleObject, SemanticTokens } from '@pandacss/dev'

interface IBreakpoints {
  xs?: string
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
}

const semanticTokens: SemanticTokens = {
  colors: {
    bgColor: {
      value: {
        base: '#f4f5fa',
        _dark: '#20222a'
      }
    },
    textColor: {
      value: {
        base: '#3c4043',
        _dark: '#898991'
      }
    }
  }
}

const breakpoints: IBreakpoints & Record<string, string> = {
  sm: '300px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
}

const globalCss: GlobalStyleObject = {
  '@font-face': {
    fontFamily: 'quicksand',
    src: 'url("./src/assets/fonts/Quicksand/Quicksand-VariableFont_wght.ttf")'
  },
  ':root': {
    // Variables
    '--headerHeight': '4rem',

    // Default Styles
    fontFamily: "'quicksand', sans-serif",
    backgroundColor: 'bgColor',
    color: 'textColor',
    fontWeight: '[400]',
    fontSize: '[16px]',
    lineHeight: '[1.5]',
    overflowX: 'hidden',
    fontSynthesis: 'none',
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: '[antialiased]',
    MozOsxFontSmoothing: '[grayscale]'
  },
  body: {
    minH: '[100vh]',
    minW: '[100vw]'
  },
  'div#root': {
    minH: '[100vh]',
    w: '100%',
    fontSize: 'md',
    //p: 'calc(var(--headerHeight) + 1rem) 0 0 0',
    //outline: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'start',
    gap: '[1rem]',
    sm: {
      fontSize: 'lg'
    },
    xl: {
      fontSize: 'xl'
    }
  }
}

export default defineConfig({
  preflight: true,
  strictTokens: false,
  jsxFramework: 'react',
  syntax: 'object-literal',
  outdir: 'styled-system',
  exclude: [],
  include: [
    './src/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './src/stories/**/*.{ts,tsx}'
  ],
  globalCss,
  theme: {
    extend: {
      semanticTokens,
      breakpoints
    }
  }
})
