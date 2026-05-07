import * as THREE from 'three'

export function createCircleTexture() {
  const size = 128
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')
  if (!ctx) return new THREE.Texture()

  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
  gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.9)')
  gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.4)')
  gradient.addColorStop(0.8, 'rgba(255, 255, 255, 0.1)')
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, size, size)

  return new THREE.CanvasTexture(canvas)
}

export function createEnvironmentTexture() {
  const size = 512
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')
  if (!ctx) return new THREE.Texture()

  const gradient = ctx.createLinearGradient(0, 0, 0, size)
  gradient.addColorStop(0, '#020205')
  gradient.addColorStop(0.49, '#101520')
  gradient.addColorStop(0.5, '#ffffff')
  gradient.addColorStop(0.51, '#151520')
  gradient.addColorStop(1, '#000000')

  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, size, size)

  for (let i = 0; i < 8; i++) {
    const y = Math.random() * size * 0.4
    const h = Math.random() * 30 + 10
    const alpha = Math.random() * 0.7 + 0.3
    ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
    ctx.fillRect(0, y, size, h)
  }

  for (let i = 0; i < 3; i++) {
    const x = Math.random() * size
    const w = Math.random() * 10 + 2
    const alpha = Math.random() * 0.5 + 0.3
    ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
    ctx.fillRect(x, 0, w, size)
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.mapping = THREE.EquirectangularReflectionMapping
  return texture
}
