import { NodeIO } from '@gltf-transform/core';
import { 
    dedup, 
    prune, 
    simplify, 
    textureCompress, 
    draco, 
    meshopt,
    resample,
    instance
} from '@gltf-transform/functions';
import { KHRDracoMeshCompression, KHRMeshQuantization, KHRLightsPunctual } from '@gltf-transform/extensions';
import draco3d from 'draco3dgltf';
import { MeshoptEncoder, MeshoptDecoder } from 'meshoptimizer';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs/promises';
import { existsSync } from 'fs';

const INPUT_DIR = 'assets/models';
const OUTPUT_DIR = 'public/models';

async function optimizeModels() {
    // Ensure output directory exists
    if (!existsSync(OUTPUT_DIR)) {
        await fs.mkdir(OUTPUT_DIR, { recursive: true });
    }

    // Initialize IO
    const io = new NodeIO()
        .registerExtensions([KHRDracoMeshCompression, KHRMeshQuantization, KHRLightsPunctual])
        .registerDependencies({
            'draco3d.decoder': await draco3d.createDecoderModule(),
            'draco3d.encoder': await draco3d.createEncoderModule(),
            'meshopt.decoder': MeshoptDecoder,
            'meshopt.encoder': MeshoptEncoder,
        });

    const files = await fs.readdir(INPUT_DIR);
    const modelFiles = files.filter(f => f.endsWith('.glb') || f.endsWith('.gltf'));

    if (modelFiles.length === 0) {
        console.log('No models found in assets/models. Add some .glb or .gltf files to get started.');
        return;
    }

    console.log(`Found ${modelFiles.length} models to optimize...`);

    for (const file of modelFiles) {
        const inputPath = path.join(INPUT_DIR, file);
        const outputPath = path.join(OUTPUT_DIR, file.replace('.gltf', '.glb'));

        console.log(`\nOptimizing: ${file}...`);

        try {
            const document = await io.read(inputPath);

            await document.transform(
                // 1. Basic cleanup
                dedup(),
                instance(),
                prune(),
                
                // 2. Mesh optimization
                resample(), // Resample animations
                meshopt({ encoder: MeshoptEncoder, level: 'medium' }),
                
                // 3. Texture compression
                textureCompress({
                    encoder: sharp,
                    targetFormat: 'webp',
                    resize: [1024, 1024], // Max texture size
                }),
                
                // 4. Final compression
                draco()
            );

            await io.write(outputPath, document);
            
            const stats = await fs.stat(outputPath);
            console.log(`Done! Saved to ${outputPath} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
        } catch (error) {
            console.error(`Failed to optimize ${file}:`, error);
        }
    }
}

optimizeModels().catch(console.error);
