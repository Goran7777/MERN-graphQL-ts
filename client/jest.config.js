module.exports = {
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '\\.(ts|tsx)$': 'ts-jest'
  },
  setupFiles: ['raf/polyfill'],
  testRegex: '/__tests__/.*\\.(ts|tsx|js)$',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/src/setupEnzyme.ts'],
  moduleNameMapper: {
    '^components(.*)$': '<rootDir>/src/components$1'
  }
};
