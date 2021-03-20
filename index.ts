import Server from './classes/server';
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';
const server = new Server();
//Body parser se configura antes de las rutas
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());
//Cors
server.app.use(cors({
    origin : true,
    credentials : true
}));

//Rutas de servicio
server.app.use('/',router);
server.start(()=>{
    console.log(`Server running in port ${server.port}`);
});