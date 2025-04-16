# Portfolio

## Landing page

### Wireframe

![landing/doc/wireframes/index.html.png](landing/doc/wireframes/index.html.png)

## Steps

How it was created?

### Create new React project using 'vite'

```bash
npm create vite@latest portfolio --template react
mv react landing
cd landing
npm install
npm run dev
```
### Create GitHub project

```bash
mv .gitignore ..

git init
mv .git ..

cd ..
git add .
git commit -m "..."
git brach -M master
git remote add origin https://github.com/magyari-zoltan/portfolio.git
git push -u origin master
```

### Deploy portofolio project

```bash
# Deploy
docker-compose up -d --build

# Undeploy
docker-compose down
```

## Photography 

#### Create and initialize a new NodeJS project for the backend

Init project install basic libraries
```bash
mkdir -p photography/backend
cd photography/backend
npm init -y
npm install express cors dotenv
npm install --save-dev typescript @types/node @types/express @types/cors
npx tsc --init
```

Edit tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2021",                           
    "module": "CommonJS",                        
    "rootDir": "./src",                          
    "moduleResolution": "node",                  
    "outDir": "./dist",                          
    "esModuleInterop": true,                     
    "forceConsistentCasingInFileNames": true,    
    "strict": true,                              
    "skipLibCheck": true                         
  }
}
```

Setup webpack bundler
```bash
npm install --save-dev webpack webpack-cli ts-loader
```

Edit webpack.config.js
```js
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  target: 'node',
  mode: 'production', // or 'development'
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```
