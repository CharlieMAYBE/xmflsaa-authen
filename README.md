# alum-authenticator

Goal:

Build an one-page website that allows xmfls alumni to check their xmflsaa membership information.

Resource:

1. Tencent VPC ubuntu@111.230.43.157
2. Domain: www.xmfls.club
3. Use Nodejs for backend
4. Use MongoDB for database
5. USe Github for remote repo 

Procedure:

1. Install MongoDB v3.6.2 `sudo apt install mongodb-server`
2. Create database directory and give access 
```
sudo mkdir -p /data/db
sudo chmod 777 /data
sudo chmod 777 /data/db
```
3. Copy files to cloud `scp -i ../BCD_Admin database/* ubuntu@111.230.43.157:~/database`
4. Import data to cloud database 
```
npm install mongoose
node index.js
mongod --bind_ip_all
```
5. Git clone repo to cloud and start server
```
git clone https://github.com/bcmsbond/xmflsaa-authen.git
sudo npm install
forever start -c "sudo npm start" ./
```

6. Browser www.xmfls.club:3000

History:

* 10/20/2017 Finish converting 5668 alumni from 1988 to 2011 to a JSON file.
* 10/28/2017 Create a sever that can perform alumni search
* 11/12/2017 Alumni can be searched by name or class year
* 12/20/2017 Complete name list of alumni from 1988 to 2017
* Authenticate alumni from signup list
* 2/5/2018 Finish backend and a single-page website

Todos: