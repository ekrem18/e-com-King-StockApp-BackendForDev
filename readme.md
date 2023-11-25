# e-com_King_Stock_Api

### Author:
Linkedin: [@ekremyilmazturk](https://www.linkedin.com/in/ekrem-yilmazturk/)
<br>
<br>

<h3>About My Project</h3>
<p> 📌The backend and frontend parts of this project have been developed by me and the project can be described as an admin panel intended for e-commerce use. It is built upon 8 different models. 📌As a seller, you can create an account, make purchases and sales from registered companies, brands, and products. You can also have real-time visibility into stock tracking. 📌JWT is used for encryption.  📌A permission system is established for editing/changing something about system. 📌Logging is implemented. 📌If you want to read the API documentation and check the structure, Swagger and Redoc documents are also available. To access them, you can follow the '/redoc' or '/swagger' routes. 📌The profit and loss statement seen on the homepage dynamically changes based on the current information received from the backend, and it is not static. 📌The logo has been designed by me using Photoshop.  </p>
<br>

<h3>How to install</h3>
If you want to clone the project to your local and test it, you must install first for BACKEND📌"npm i express dotenv mongoose express-async-errors",  📌"npm i jsonwebtoken" and 📌"npm i morgan" 📌"npm i redoc-express"
Finally, in the project directory, you can run:  `nodemon index.js`
For FRONTEND; 📌"yarn run dev"
<br>
<br>

<h3>What is in this api project?</h3>
<ul style="font-size: 18px;">
  <li>JWT</li>
  <li>Logging</li>
  <li>Permissions</li>
  <li>Authentications MW</li>
  <li>Error Handler MW</li>
  <li>Finding, Sorting and Pagination MW</li>
  <li>Swagger & Redoc Docs</li>
  <li>React</li>
  <li>Redux</li>
  <li>Vite</li>
  <li>MUI</li>
  <li>Axios</li>
  <li>Vercel</li>
</ul>
<br>
<br>
<h3>Live Link of the Project</h3>

https://ekrem18-e-com-king-stock-app-frontend-for-dev.vercel.app/

### Folder/File Structure (for Backend):

```
    .env
    .gitignore
    index.js
    package.json
    readme.md
    src/
        config/
            dbConnection.js
            swagger.json
        controllers/
            auth.js
            brand.js
            category.js
            firm.js
            product.js
            purchase.js
            sale.js
            token.js
            user.js
        helpers/
            passwordEncrypt.js
            sendMail.js
        middlewares/
            authentication.js
            errorHandler.js
            findSearchSortPage.js
            logger.js
            permissions.js
            upload.js
        models/
            brand.js
            category.js
            firm.js
            product.js
            purchase.js
            sale.js
            token.js
            user.js
        routes/
            auth.js
            brand.js
            category.js
            document.js
            firm.js
            index.js
            product.js
            purchase.js
            sale.js
            token.js
            user.js
```

<br>
<br>
<h3>How does my project look</h3>

![stock app](https://github.com/ekrem18/ekrem18/assets/130497212/4de056dc-4f4f-40ff-82c7-27caa584725f)