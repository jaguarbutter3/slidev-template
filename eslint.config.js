import js from '@eslint/js'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import markdown from '@eslint/markdown'

export default [
  {
    ignores: ['node_modules/**', 'dist/**', '.slidev/**']
  },
  // JavaScript & Vue の設定
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    rules: {
      ...js.configs.recommended.rules,
      'vue/multi-word-component-names': 'off'
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },

  {
    files: ['**/*.md'],
    plugins: {
      markdown
    },
    language: 'markdown/gfm'
  },

  {
    extends: ['some-config-standard', 'prettier']
  }
]
