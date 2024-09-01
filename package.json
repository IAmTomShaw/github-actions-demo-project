{
  "name": "recipe-api",
  "version": "1.2.2",
  "description": "Node JS API for Recipes",
  "main": "index.js",
  "scripts": {
    "test": "jest",
    "dev": "npm run start --stage local",
    "start": "node --require ts-node/register src/index.ts",
    "build:clean": "rm -rf ./dist/*; rm ./dist/*; mkdir ./dist/logs;",
    "build:config": "cp ./src/config.json ./dist/config.json; cp ./package.json ./dist/package.json",
    "build": "npm run build:clean; npm run build:config; tsc --skipLibCheck;"
  },
  "author": "Tom Shaw",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.24.4",
    "@babel/preset-env": "^7.24.4",
    "@types/jest": "^29.5.12",
    "@types/node": "^22.4.0",
    "@types/supertest": "^6.0.2",
    "babel-jest": "^29.7.0",
    "jest": "^29.7.0",
    "superagent": "^8.1.2",
    "supertest": "^6.3.4",
    "ts-jest": "^29.1.2",
    "ts-node": "^10.9.1",
    "typescript": "^5.4.4"
  },
  "dependencies": {
    "body-parser": "^1.20.1",
    "cors": "^2.8.5",
    "express": "^4.18.2"
  }
}
