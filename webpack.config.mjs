// UI/webpack.config.mjs

import path from 'path';
import CopyPlugin from 'copy-webpack-plugin';
import { fileURLToPath } from 'url';

// __dirname no existe en ES Modules, así que debe ser definido manualmente.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  // Define el modo para optimizaciones automáticas.
  mode: 'production',

  // El punto de entrada para tu LÓGICA de aplicación (TypeScript).
  entry: './src/app/index.ts',

  // Dónde y cómo se generará el paquete COMPLETO.
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'project-dist'),
    // Limpia el directorio 'dist' antes de cada build.
    clean: true,
  },

  module: {
    // Reglas sobre cómo procesar el código fuente.
    rules: [
      {
        // Esta regla procesa tus 'import' de TypeScript.
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  
  // Aquí se define cómo se empaquetan los activos estáticos.
  plugins: [
    new CopyPlugin({
      patterns: [
        { 
          // La carpeta de origen de tus activos estáticos.
          from: 'public', 
          // La carpeta de destino DENTRO de 'dist/'.
          // Esto asegura que la ruta '/public/css/...' sea válida.
          to: 'public'    
        },
      ],
    }),
  ],

  resolve: {
    // Permite que los 'import' de TypeScript resuelvan archivos sin extensión.
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      // "Cuando veas un import que empieza con '@',
      // reemplázalo con la ruta absoluta a la carpeta 'src/'."
      '@': path.resolve(__dirname, 'src/')
    }
  },
};