class Net extends Laya.EventDispatcher {
    private _socket: Laya.Socket;
    private _protoIDs;
    private _protoBuilderUserMap;
    private _protoBuilderGameMap;
    private _connectReady: boolean = false;
    private _heartTimer: Laya.Timer;
    private _url:string;
    constructor(url:string) {
        super();
        this._url=url;
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

    public connect() {
        this._socket.connectByUrl(this._url);
    }

    public onSocketOpen() {
        this._connectReady = true;
        this.event("CONNECT_Ok");
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

    public send(cmd: number, data: Uint8Array) {
        let pkg: Laya.Byte = new Laya.Byte();
        pkg.endian = Laya.Byte.LITTLE_ENDIAN;
        pkg.writeUint8(cmd);
        pkg.writeArrayBuffer(data);
        this._socket.send(pkg.buffer);
        this._socket.flush();
    }
}

let server;