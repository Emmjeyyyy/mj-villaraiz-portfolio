This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Asset Optimization

This project uses **GLTF Transform** to optimize 3D assets for production.

### Workflow

1. Place your raw `.glb` or `.gltf` files in the `assets/models/` directory.
2. Run the optimization script:
   ```bash
   npm run optimize:assets
   ```
3. Optimized models will be saved to `public/models/`, ready to be used in your Three.js components.

### Optimization Features

- **Mesh Optimization**: Uses `meshoptimizer` for efficient geometry data.
- **Draco Compression**: Significantly reduces file size for web delivery.
- **Texture Compression**: Converts textures to **WebP** format and resizes them (max 1024px) using `sharp`.
- **Deduplication & Pruning**: Removes duplicate data and unused nodes.
- **Instancing**: Automatically instances identical meshes to reduce draw calls.

### Loading Optimized Models (React Three Fiber)

When loading models optimized with Draco or Meshopt, ensure your loader is configured:

```tsx
import { useGLTF } from '@react-three/drei'

function Model() {
  // useGLTF automatically handles Draco if the decoder is provided via CDN or local path
  const { scene } = useGLTF('/models/my-model.glb', 'https://www.gstatic.com/draco/versioned/decoders/1.5.5/')
  return <primitive object={scene} />
}
```

For **Meshopt** support, you can use:

```tsx
import { MeshoptDecoder } from 'meshoptimizer'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'

// In your component
const gltf = useLoader(GLTFLoader, '/models/my-model.glb', (loader) => {
  loader.setMeshoptDecoder(MeshoptDecoder)
})
```

