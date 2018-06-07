// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        Laya.init(600, 400);
        server = new Server();
        server.on("LOGIN_SUCCESS", this, this.loginSuccess);
        server.on("CONNECT_ERROR", this, this.connectClose);
        server.on("CONNECT_CLOSE", this, this.connectClose);
        server.on("RECV_DATE", this, this.Recv);
        server.connect();
    }
    GameMain.prototype.loginSuccess = function (msg) {
        console.log("---------log ok----");
    };
    GameMain.prototype.connectClose = function () {
        console.log("---------connectClose----");
    };
    GameMain.prototype.Recv = function (obj) {
        switch (obj.cmd) {
            case Protocol.ProtocolCmd.SCJoinRoomRep:
                var login = Protocol.pkgSCJoinRoomRep.decode(obj.data);
                console.log("返回：%s,%s", obj.cmd, login.ok);
                break;
        }
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=GameMain.js.map