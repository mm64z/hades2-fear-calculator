import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// NOTE: Set `base` to your GitHub Pages repo name if deploying to a project page,
// e.g. base: '/hades2-fear-calculator/'
// Leave as '/' if using a custom domain or user/org page (username.github.io).
export default defineConfig({
  plugins: [react()],
  base: '/hades2-fear-calculator/',
})
