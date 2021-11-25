const ws = new require("ws");

const wsServer = new ws.Server({port: 5000});

const clients = [];

wsServer.on("connection", (newClient)=> {
    // console.log("Новое подключение");
    clients.push(newClient);
    setTimeout(() => {
        newClient.send("Добро пожаловать  на наш уютный сервер!")
    }, 3000);

    clients.forEach(client => {
        if(client !== newClient){
            client.send("У нас новый участник")
        }
    })
    
});