// 程序入口
class GameMain {
    public net: Net;
    constructor() {
        Laya.init(600, 400);
        this.net = new Net("ws://192.168.2.90:3746/ws");
        this.net.on("CONNECT_ERROR", this, this.connectClose);
        this.net.on("CONNECT_CLOSE", this, this.connectClose);
        this.net.on("CONNECT_Ok", this, this.connectOk);
        this.net.on("RECV_DATE", this, this.Recv);
        this.net.connect();
    }
    private connectClose() {
        console.log("---------connectClose----");
    }
    private connectOk() {
        console.log("--connectOk--");
        let login = new Protocol.pkgCSJoinRoomReq();
        login.iroomid = 1;
        login.userId = 3;
        var buffer = Protocol.pkgCSJoinRoomReq.encode(login).finish();
        this.net.send(Protocol.ProtocolCmd.CSJoinRoomReq, buffer);
    }
    private Recv(obj) {
        switch (obj.cmd) {
            case Protocol.ProtocolCmd.SCJoinRoomRep://登陆返回
                let login = Protocol.pkgSCJoinRoomRep.decode(obj.data);
                console.log("登陆返回：%s,%s", obj.cmd, login.ok);
                break;
        }
    }
}

new GameMain();