// 程序入口
class GameMain {
    constructor() {
        Laya.init(600, 400);
        server = new Server();
        server.on("LOGIN_SUCCESS", this, this.loginSuccess);
        server.on("CONNECT_ERROR", this, this.connectClose);
        server.on("CONNECT_CLOSE", this, this.connectClose);
        server.on("RECV_DATE", this, this.Recv);
        server.connect();
    }
    private loginSuccess(msg: any) {
        console.log("---------log ok----");
    }
    private connectClose() {
        console.log("---------connectClose----");
    }
    private Recv(obj) {
        switch (obj.cmd) {
            case Protocol.ProtocolCmd.SCJoinRoomRep:
                let login = Protocol.pkgSCJoinRoomRep.decode(obj.data);
                console.log("返回：%s,%s", obj.cmd, login.ok);
                break;
        }
    }
}

new GameMain();