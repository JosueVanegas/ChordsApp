import app from './app.js'
import {PORT} from './config.js'
import connection from '../src/database/connection.js'
app.listen(PORT,(err)=>{
    if(!err)console.log(`Listening in port ->  http://localhost:${PORT}`);
})
