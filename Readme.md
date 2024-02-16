# How to start 
啟動docker 
```
    docker-compose up -d 
```
進入backend image 
```
   docker run -it leetcodebar-backend bash
```
初始化資料庫
```
    python manage.py makemigrations 
    python manage.py migrate 
```
建立最高權限使用者
```
    python manage.py createsuperuser
```
前端手動執行
```
    docker run -p 3000:3000 --name frontend  leetcodebar-frontend
```