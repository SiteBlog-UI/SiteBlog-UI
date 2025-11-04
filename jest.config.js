// jest.config.js
export default {
  // 1. Entorno JSDOM para el 'document'
  testEnvironment: 'jsdom',

  // 2. Transformador ts-jest
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true, // <-- Le dice a ts-jest que compile a ESM
        tsconfig: 'tsconfig.json', // <-- Le dice a ts-jest QUÉ tsconfig usar
      },
    ],
  },

  // 3. Mapeador para los alias (si usas '@/')
  moduleNameMapper: {
    // Esto arregla los alias definidos en tsconfig.json
    '^@/(.*)$': '<rootDir>/src/$1',
    // Esto arregla las extensiones .js en los imports ESM
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },

  // 4. Extensiones que Jest debe reconocer
  moduleFileExtensions: ['ts', 'js', 'mjs'],
};