import { Netserver } from "./Netserver";
import { Emitter } from "./Emitter";
import { Protocol } from "./pro";

class Main {
    server: Netserver;
    constructor() {

    }

    public Start() {
        this.server = new Netserver();
        this.server.Run();
        Emitter.register("RECV", this.recv, this);
    }

    public recv(eventName: string, net: Netserver, ws: WebSocket, cmd: number, datas: Uint8Array) {
        switch (cmd) {
            case Protocol.ProtocolCmd.CSJoinRoomReq://加入房间
                let login = Protocol.pkgCSJoinRoomReq.decode(datas);
                console.log("加入房间：%s,%s", login.iroomid, login.userId);

                let result = new Protocol.pkgSCJoinRoomRep();
                result.ok = 1;
                var data = Protocol.pkgSCJoinRoomRep.encode(result).finish();
                net.send(Protocol.ProtocolCmd.SCJoinRoomRep, data, ws);
                break;
        }
    }
}

let main = new Main();
main.Start(); 