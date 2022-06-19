const app = require('./index.js');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const connect = require('./configs/db.js');

app.listen(PORT,async () => {
    try{
        await connect();
        console.log(`listening on port ${PORT}`);
    }
    catch(err){
        console.log(err);
    }
})
