import { Netserver } from "./Netserver";
import { Emitter } from "./Emitter";
import { Protocol } from "./pro";

class Main {
    server:Netserver;
    constructor() {
        
    }

    public Start() {
        this.server=new Netserver();
        this.server.Run();
        Emitter.register("RECV", this.recv,this);  
    }

    public recv(eventName:string,net:Netserver,ws:WebSocket, cmd:number,datas:Uint8Array)
    {
        let login = Protocol.pkgCSJoinRoomReq.decode(datas);
        console.log("%s--->返回：%s,%s", cmd, login.iroomid, login.userId);

        let result = new Protocol.pkgSCJoinRoomRep();
        result.ok = 1;
        var data = Protocol.pkgSCJoinRoomRep.encode(result).finish();
        net.send(Protocol.ProtocolCmd.SCJoinRoomRep,data,ws);
    }
}

let main = new Main();
main.Start(); 