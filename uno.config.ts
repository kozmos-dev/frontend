import { defineConfig, presetMini, presetWebFonts } from 'unocss';
import presetIcons from '@unocss/preset-icons'
import transformerDirectives from '@unocss/transformer-directives';

export default defineConfig({
  presets: [
    presetMini({
      dark: 'media'
    }),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'Alexandria:300,400,700',
        mono: ['Fira Code', 'Fira Mono:400,700'],
      },
    }),
    presetIcons(),
  ],
  transformers: [
    transformerDirectives(),
  ],
  rules: [
    ['rounded-full', { 'border-radius': '100%' }], // default is 9999px which causes animation issues
  ]
})
