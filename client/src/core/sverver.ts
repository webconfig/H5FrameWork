class Server extends Laya.EventDispatcher {
    private _socket: Laya.Socket;
    private _protoIDs;
    private _protoBuilderUserMap;
    private _protoBuilderGameMap;
    private _connectReady: boolean = false;
    private _heartTimer: Laya.Timer;

    constructor() {
        super();
        this._heartTimer = new Laya.Timer();
        this._socket = new Laya.Socket();
        this._socket.endian = Laya.Socket.BIG_ENDIAN;
        this._socket.on(Laya.Event.OPEN, this, this.onSocketOpen);
        this._socket.on(Laya.Event.CLOSE, this, this.onSocketClose);
        this._socket.on(Laya.Event.MESSAGE, this, this.onMessageReveived);
        this._socket.on(Laya.Event.ERROR, this, this.onConnectError);
    }

    public logout() {
        this._socket.close();
    }

    public connect(uid: number, nickname: string) {
        let addr = "ws://192.168.2.90:3746/ws";
        this._socket.connectByUrl(addr);
    }

    public onSocketOpen() {
        let login = new Protocol.pkgCSJoinRoomReq();
        login.iroomid = 1;
        login.userId = 3;
        var buffer = Protocol.pkgCSJoinRoomReq.encode(login).finish();

        let pkg: Laya.Byte = new Laya.Byte();
        pkg.endian = Laya.Byte.LITTLE_ENDIAN;
        pkg.writeUint8(5);
        pkg.writeArrayBuffer(buffer);

        this._socket.send(pkg.buffer);
        console.log("发送长度：%s", pkg.buffer.byteLength);

        this._socket.flush();
        this._connectReady = true;

    }

    public onSocketClose() {
        console.log("socket close");
        this.event("CONNECT_CLOSE");
        this._heartTimer.clearAll(this);
        this._connectReady = false;
    }

    public onMessageReveived(data: ArrayBuffer) {
        let bytes: Laya.Byte = new Laya.Byte();
        bytes.writeArrayBuffer(data);
        bytes.pos = 0;
        bytes.endian = Laya.Socket.LITTLE_ENDIAN;
        let cmd_data: number = bytes.getUint8();
        this.event("RECV_DATE", { cmd: cmd_data, data: new Uint8Array(data, 1, data.byteLength - 1) });
    }

    public onConnectError(e: Event) {
        console.log("connect error");
        this.event("CONNECT_ERROR");
        this._connectReady = false;
    }

    private onHeartBeat() {
        if (this._connectReady) {
            let ba: Laya.Byte = new Laya.Byte();
            ba.endian = Laya.Byte.BIG_ENDIAN;
            ba.writeUint16(2);
            ba.writeUint16(2);
            this._socket.send(ba.buffer);
            this._socket.flush();
            console.log("发送心跳")

        } else {
            console.log("In heartBeat, the connection id closed!")
        }
    }
}

let server;