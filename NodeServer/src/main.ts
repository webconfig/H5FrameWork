import { Netserver } from "./core/Netserver";
import { Emitter } from "./core/Emitter";
import { Protocol } from "./pro";
import { Dictionary } from "./core/Dictionary";
import { room } from "./core/room";
import { player } from "./core/player";
class Main {
    server: Netserver;
    roooms:Dictionary<room>;
    constructor() {

    }

    public Start() {
        this.roooms=new Dictionary<room>();
        this.server = new Netserver();
        this.server.Run();
        Emitter.register("RECV", this.recv, this);
    }

    public recv(eventName: string, net: Netserver, ws: WebSocket, cmd: number, datas: Uint8Array) {
        switch (cmd) {
            case Protocol.ProtocolCmd.CSJoinRoomReq://加入房间
                let login = Protocol.pkgCSJoinRoomReq.decode(datas);
                console.log("加入房间：%s,%s", login.iroomid, login.userId);
                let r:room=null;
                if(!this.roooms.ContainsKey(login.iroomid))
                {
                    r=new room(login.iroomid);
                    this.roooms.Add(r);
                }
                else
                {
                    r=this.roooms.Get(login.iroomid);
                }

                let p=new player(login.userId);
                r.AddPlayer(p);

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