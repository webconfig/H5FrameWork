var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Server = /** @class */ (function (_super) {
    __extends(Server, _super);
    function Server() {
        var _this = _super.call(this) || this;
        _this._connectReady = false;
        _this._heartTimer = new Laya.Timer();
        _this._socket = new Laya.Socket();
        _this._socket.endian = Laya.Socket.BIG_ENDIAN;
        _this._socket.on(Laya.Event.OPEN, _this, _this.onSocketOpen);
        _this._socket.on(Laya.Event.CLOSE, _this, _this.onSocketClose);
        _this._socket.on(Laya.Event.MESSAGE, _this, _this.onMessageReveived);
        _this._socket.on(Laya.Event.ERROR, _this, _this.onConnectError);
        return _this;
    }
    Server.prototype.logout = function () {
        this._socket.close();
    };
    Server.prototype.connect = function (uid, nickname) {
        var addr = "ws://192.168.2.90:3746/ws";
        this._socket.connectByUrl(addr);
    };
    Server.prototype.onSocketOpen = function () {
        var login = new Protocol.pkgCSJoinRoomReq();
        login.iroomid = 1;
        login.userId = 3;
        var buffer = Protocol.pkgCSJoinRoomReq.encode(login).finish();
        var pkg = new Laya.Byte();
        pkg.endian = Laya.Byte.LITTLE_ENDIAN;
        pkg.writeUint8(5);
        pkg.writeArrayBuffer(buffer);
        this._socket.send(pkg.buffer);
        console.log("发送长度：%s", pkg.buffer.byteLength);
        this._socket.flush();
        this._connectReady = true;
    };
    Server.prototype.onSocketClose = function () {
        console.log("socket close");
        this.event("CONNECT_CLOSE");
        this._heartTimer.clearAll(this);
        this._connectReady = false;
    };
    Server.prototype.onMessageReveived = function (data) {
        var bytes = new Laya.Byte();
        bytes.writeArrayBuffer(data);
        bytes.pos = 0;
        bytes.endian = Laya.Socket.LITTLE_ENDIAN;
        var cmd_data = bytes.getUint8();
        this.event("RECV_DATE", { cmd: cmd_data, data: new Uint8Array(data, 1, data.byteLength - 1) });
    };
    Server.prototype.onConnectError = function (e) {
        console.log("connect error");
        this.event("CONNECT_ERROR");
        this._connectReady = false;
    };
    Server.prototype.onHeartBeat = function () {
        if (this._connectReady) {
            var ba = new Laya.Byte();
            ba.endian = Laya.Byte.BIG_ENDIAN;
            ba.writeUint16(2);
            ba.writeUint16(2);
            this._socket.send(ba.buffer);
            this._socket.flush();
            console.log("发送心跳");
        }
        else {
            console.log("In heartBeat, the connection id closed!");
        }
    };
    return Server;
}(Laya.EventDispatcher));
var server;
//# sourceMappingURL=sverver.js.map