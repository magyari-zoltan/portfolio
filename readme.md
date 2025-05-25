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

```shell
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

```shell
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
```shell
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
```shell
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

#### 1.5 Create docker file for build and prod stages

```Dockerfile
# Build stage
FROM node:alpine AS builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage 
FROM node:alpine
WORKDIR /app
USER node
COPY --from=builder /app/package.json .
COPY --from=builder /app/dist ./dist
EXPOSE 5000
CMD ["npm", "start"]
```

#### 1.6 Integrate it with nginx reverse proxy using docker compose

```yaml
services:

  # MongoDB database
  mongodb:
    image: mongo:latest
    container_name: mongodb
    ports:
      - "27017:27017"
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example
    volumes:
      - mongodb:/data/db/mongodb/
    networks:
      - photography-backend__mongodb

  # Photography backend
  photography-backend:
    build:
      context: ./photography/backend
      dockerfile: ./Dockerfile
    container_name: photography-backend
    ports:
      - "5001:5001"
    environment:
      MONGODB_URI: mongodb://root:example@mongodb:27017
      IMAGES_VOLUME: /data/images/photography
      BASE_PATH: /photography/api
      PORT: 5001
    volumes:
      - ./photography/images:/data/images/photography
    networks:
      - nginx__photography-backend
      - photography-backend__mongodb
    depends_on:
      - mongodb
    restart: always

  # Reverse nginx proxy
  nginx-proxy:
    image: nginx:alpine-slim
    container_name: nginx-reverse-proxy
    ports:
      - "80:80"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/conf.d/default.conf:ro
    networks:
      - nginx__photography-backend
    depends_on:
      - photography-backend

volumes:
  mongodb:

networks:
  nginx__photography-backend:
  photography-backend__mongodb:
```
#### 1.7 Nginx reverse proxy config for backend

```nginx
server {
    listen 80;
    server_name portfolio.local;

    location /photography/api {
      proxy_pass http://photography-backend:5001;
    }
}
```

Reaching the backend from outside
```shell
curl --location 'http://localhost/photography/api/albums' \
     --header 'Content-Type: application/json'
```

### 2. Create and initialize a new NodeJS project for the frontend

#### 2.1 Init project install basic libraries
```shell
npm create vite@latest frontend --template react
cd photography/frontend
npm install
```

#### 2.2 Edit vite.config.ts
```typescript
export default defineConfig({
  ...
  base: '/photography/'
})
```

#### 2.3 Create docker file for build and prod stages

```Dockerfile
# Build stage
FROM node:alpine AS builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine-slim
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### 2.4 Integrate it with nginx reverse proxy using docker compose

```yaml
services:

  # Photography frontend
  photography-frontend:
    build: ./photography/frontend
    container_name: photography-frontend
    networks:
      - nginx__photography-frontend
    depends_on:
      - photography-backend
    restart: always
      
  # Reverse nginx proxy
  nginx-proxy:
    image: nginx:alpine-slim
    container_name: nginx-reverse-proxy
    ports:
      - "80:80"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/conf.d/default.conf:ro
    networks:
      - nginx__photography-frontend
    depends_on:
      - photography-backend
      - photography-frontend

networks:
  nginx__photography-backend:
  nginx__photography-frontend:
```


### 3. Create mongoDB database with docker compose

```yaml
services:

  # MongoDB database
  mongodb:
    image: mongo:latest
    container_name: mongodb
    ports:
      - "27017:27017"
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example
    volumes:
      - mongodb:/data/db/mongodb/
    networks:
      - mongo-express__mongodb
      - photography-backend__mongodb

  # MongoDB database client
  mongo-express:
    image: mongo-express:latest
    container_name: mongo-express
    ports:
      - "8081:8081"
    environment:
      ME_CONFIG_MONGODB_URL: mongodb://root:example@mongodb:27017/
      ME_CONFIG_SITE_BASEURL: /mongo-express
      ME_CONFIG_BASICAUTH: false
    networks:
      - nginx__mongo-express
      - mongo-express__mongodb
    depends_on:
      - mongodb
    restart: always

  # Reverse nginx proxy
  nginx-proxy:
    image: nginx:alpine-slim
    container_name: nginx-reverse-proxy
    ports:
      - "80:80"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/conf.d/default.conf:ro
    networks:
      - nginx__mongo-express
    depends_on:
      - mongo-express

volumes:
  mongodb:

networks:
  nginx__mongo-express:
  mongo-express__mongodb:
  photography-backend__mongodb:
```

#### 3.1 Nginx config
```nginx
server {
    listen 80;
    server_name portfolio.local;

    location /mongo-express {
      proxy_pass http://mongo-express:8081;
    }
}
```

### 4. Technical details

#### 4.1 Uploading a file

For file upload the following libraries are used:
- **formidable** is a multipart parser  to handle both file uploads and text fields without manual boundary‑splitting. 
- **sanitize-filename** is a string sanitizer that alters the string to be safe for use as a filename by removing directory paths and invalid characters.

```shell
npm install formidable sanitize-filename
npm install @types/formidable
```

CURL command 
```shell
curl --location 'http://localhost/photography/api/albums' \
     --form 'name="Kids"' \
     --form 'images=@"Portfolio/Kids/image-02.jpg"'
```

Define entry point
```ts
import { Router } from 'express';

const router = Router();
router.post('/albums', createAlbum);
```

#### 4.2 MogoDB

The following libraries are used to connect to mongodb.
```shell
npm install mongoose
```

Connecting to mongodb database
```ts
import mongoose from 'mongoose';

/**
 * Connects to the MongoDB database using the database URI.
 * On connection error, the backend app will terminate.
 * 
 * @param databaseUri defines how to connect to the database.
 */
export async function connectDB(databaseUri: string) {
  try {
    await mongoose.connect(databaseUri);
    console.info(`Connected to MongoDB: ${databaseUri}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
```

#### 4.3 React Router

Install packages
```shell
npm install react-router react-router-dom
```

Usage
```tsx
import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const BASE_PATH = import.meta.env.VITE_BASE_PATH;
console.debug('BASE_PATH', { basepath: BASE_PATH });

const HelloWork: FC = () => { 
    const data = useLoaderData();

    return (
        <> 
            {`Hello Work: ${data.result}`} 
        </> 
    )
};

const App: FC = () => {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <HelloWork />
        loader: async () => {
            const response = await fetch('https://...');
            if(!response.ok) {
                throw new Response('Failed ...', {status: response.status});
            }
            return { result: await response.json() };
        },
        errorElement: <ErrorHandler />
      }
    ],
    {
      basename: BASE_PATH
    });

  return (
    <RouterProvider router={router} />
  )
}

export default App
```

Define **BASE_PATH** in **.evn** file
```
VITE_BASE_PATH=https://.../photography
```

#### 4.4 React Hot Toast

Install packages
```shell
npm install react-hot-toast
```
Usage

**ErrorHandler.tsx**
```tsx
const ErrorHandler: FC = () => {
  const error = useRouteError();

  useEffect(() => displayError(error), [error]);

  return <div>Something went wrong. Please try again later.</div>;
}
```

**handleError.ts**
```ts
export function displayError(error: unknown) {
  if (error) {
    console.error(error);

    if (error instanceof Error) {
      toast.error(error.message);
    } else if (typeof error === 'object' && 'status' in error && 'data' in error) {
      toast.error(error.data as string);
    } else {
      toast.error(`An unexpected error occured fetching albums(${error})`);
    }
  }
}
```
