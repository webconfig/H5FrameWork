import * as http from 'http';
import * as WebSocket from 'ws';
import { Protocol } from './pro';
import { Emitter } from './Emitter';
export class Netserver {
    port = 3746;
    wss: WebSocket.Server;
    constructor() {
    }
    public Run() {
        let http_ = require('http');
        let server = http_.createServer(function (request, response) {
        });
        /* Start our server */
        server.listen(this.port, () => {
            console.log(`Server started at port ${server.address().port}.`);
        }
        );

        this.wss = new WebSocket.Server({ server });

        this.wss.on('connection', (ws: WebSocket) => {

            ws.on('message', (buffer: ArrayBuffer) => {
                console.log("数据长度：%s", buffer.byteLength);
                var int8View = new Uint8Array(buffer);
                let cmd = int8View[0];
                int8View = int8View.slice(1);
                /* Send the message back to the client */
                Emitter.fire("RECV",this,ws, cmd, int8View);  
            });
        });
    }
    public send(cmd: number, data: Uint8Array, ws: WebSocket) {
        var BackData = new Uint8Array(data.length + 1);
        BackData[0] = cmd;
        BackData.set(data, 1);
        ws.send(BackData);
    }

}