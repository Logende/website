import { fileURLToPath, URL } from 'node:url'
import { readdirSync } from 'node:fs'
import { join, relative, sep } from 'node:path'

import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const useWebsiteBasePath = process.env.USE_WEBSITE_BASE_PATH === 'true';
const galleryImageExtensions = new Set([
  '.avif',
  '.gif',
  '.jpeg',
  '.jpg',
  '.png',
  '.webp',
])

function collectGalleryImages(directory: string): string[] {
  const images = readdirSync(directory, { withFileTypes: true })
    .flatMap(entry => {
      const path = join(directory, entry.name)
      return entry.isDirectory()
        ? collectGalleryImages(path)
        : galleryImageExtensions.has(
              entry.name.slice(entry.name.lastIndexOf('.')).toLowerCase(),
            )
          ? [path]
          : []
    })
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

  const webpStems = new Set(
    images
      .filter(path => path.toLowerCase().endsWith('.webp'))
      .map(path => path.slice(0, path.lastIndexOf('.')).toLowerCase()),
  )

  return images.filter(path => {
    const extensionIndex = path.lastIndexOf('.')
    const extension = path.slice(extensionIndex).toLowerCase()
    const stem = path.slice(0, extensionIndex).toLowerCase()
    return extension === '.webp' || !webpStems.has(stem)
  })
}

function veiledKingdomsGallery(folderName: string, galleryModuleId: string): Plugin {
  const galleryDirectory = fileURLToPath(
    new URL(`./public/veiled-kingdoms/${folderName}`, import.meta.url),
  )
  const resolvedGalleryModuleId = `\0${galleryModuleId}`

  return {
    name: `veiled-kingdoms-${folderName}`,
    resolveId(id) {
      return id === galleryModuleId ? resolvedGalleryModuleId : undefined
    },
    load(id) {
      if (id !== resolvedGalleryModuleId) return undefined

      const images = collectGalleryImages(galleryDirectory).map(path => {
        const galleryPath = relative(galleryDirectory, path)
          .split(sep)
          .map(encodeURIComponent)
          .join('/')
        return `/veiled-kingdoms/${folderName}/${galleryPath}`
      })

      return `export default ${JSON.stringify(images)}`
    },
    handleHotUpdate({ file, server }) {
      if (!file.startsWith(`${galleryDirectory}${sep}`)) return

      const galleryModule = server.moduleGraph.getModuleById(
        resolvedGalleryModuleId,
      )
      if (galleryModule) server.moduleGraph.invalidateModule(galleryModule)
      server.ws.send({ type: 'full-reload' })
      return []
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: useWebsiteBasePath ? '/website/' : '/',
  plugins: [
    vue(),
    vueDevTools(),
    veiledKingdomsGallery('gallery', 'virtual:veiled-kingdoms-gallery'),
    veiledKingdomsGallery('gallery_old', 'virtual:veiled-kingdoms-gallery-old'),
  ],
  build: {
    outDir: 'dist',
    minify: false,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
