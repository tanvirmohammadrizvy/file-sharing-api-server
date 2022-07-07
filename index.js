/* 
    Installation:
        1. npm init
        2. yarn add nodemon
        3. yarn add express mongoose dotenv
        4. yarn add body-parser cors express-fileupload morgan lodash 
        4. yarn add multer
*/

import express from 'express'; // Importing express module


const app = express(); // Application configuration
app.listen('8888', ()=> {
    console.log('Backend Running');
})