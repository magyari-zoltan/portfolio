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
