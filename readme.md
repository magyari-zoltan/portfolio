# Portfolio

## Landing page

![landing/doc/wireframes/index.html.png](landing/doc/wireframes/index.html.png)

### 1. Create new React project using 'vite'

```shell
npm create vite@latest portfolio --template react
mv react landing
cd landing
npm install
npm run dev
```
### 2. Create GitHub project

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

### 3. Deploy portofolio project

```bash
# Deploy
docker-compose up -d --build

# Undeploy
docker-compose down

# Check logs
docker-compose logs

# List deployed containers
docker-compose ps
```

## Photography 

### 1. Create and initialize a new NodeJS project for the backend

#### 1.1 Init project install basic libraries
```bash
mkdir -p photography/backend
cd photography/backend
npm init -y
npm install express cors dotenv
npm install --save-dev typescript @types/node @types/express @types/cors
npx tsc --init
```

#### 1.2 Edit tsconfig.json
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

#### 1.3 Setup webpack bundler
```bash
npm install --save-dev webpack webpack-cli ts-loader
```

#### 1.4 Edit webpack.config.js
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

### 2. Technical details

#### 2.1 Uploading a file

For file upload the following libraries are used:
- **formidable** is a multipart parser  to handle both file uploads and text fields without manual boundary‑splitting. 
- **sanitize-filename** is a string sanitizer that alters the string to be safe for use as a filename by removing directory paths and invalid characters.

```bash
npm install formidable sanitize-filename
npm install @types/formidable
```
