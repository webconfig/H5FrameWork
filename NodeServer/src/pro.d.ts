import * as $protobuf from "protobufjs";

/** Namespace Protocol. */
export namespace Protocol {

    /** ProtocolCmd enum. */
    enum ProtocolCmd {
        None = 0,
        CSJoinRoomReq = 101,
        SCJoinRoomRep = 102
    }

    /** Properties of a pkgCSJoinRoomReq. */
    interface IpkgCSJoinRoomReq {

        /** pkgCSJoinRoomReq iroomid */
        iroomid?: (number|null);

        /** pkgCSJoinRoomReq userId */
        userId?: (number|null);
    }

    /** Represents a pkgCSJoinRoomReq. */
    class pkgCSJoinRoomReq implements IpkgCSJoinRoomReq {

        /**
         * Constructs a new pkgCSJoinRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IpkgCSJoinRoomReq);

        /** pkgCSJoinRoomReq iroomid. */
        public iroomid: number;

        /** pkgCSJoinRoomReq userId. */
        public userId: number;

        /**
         * Creates a new pkgCSJoinRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns pkgCSJoinRoomReq instance
         */
        public static create(properties?: Protocol.IpkgCSJoinRoomReq): Protocol.pkgCSJoinRoomReq;

        /**
         * Encodes the specified pkgCSJoinRoomReq message. Does not implicitly {@link Protocol.pkgCSJoinRoomReq.verify|verify} messages.
         * @param message pkgCSJoinRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IpkgCSJoinRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified pkgCSJoinRoomReq message, length delimited. Does not implicitly {@link Protocol.pkgCSJoinRoomReq.verify|verify} messages.
         * @param message pkgCSJoinRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IpkgCSJoinRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a pkgCSJoinRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns pkgCSJoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.pkgCSJoinRoomReq;

        /**
         * Decodes a pkgCSJoinRoomReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns pkgCSJoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.pkgCSJoinRoomReq;

        /**
         * Verifies a pkgCSJoinRoomReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a pkgCSJoinRoomReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns pkgCSJoinRoomReq
         */
        public static fromObject(object: { [k: string]: any }): Protocol.pkgCSJoinRoomReq;

        /**
         * Creates a plain object from a pkgCSJoinRoomReq message. Also converts values to other types if specified.
         * @param message pkgCSJoinRoomReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Protocol.pkgCSJoinRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this pkgCSJoinRoomReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a pkgSCJoinRoomRep. */
    interface IpkgSCJoinRoomRep {

        /** pkgSCJoinRoomRep ok */
        ok?: (number|null);
    }

    /** Represents a pkgSCJoinRoomRep. */
    class pkgSCJoinRoomRep implements IpkgSCJoinRoomRep {

        /**
         * Constructs a new pkgSCJoinRoomRep.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IpkgSCJoinRoomRep);

        /** pkgSCJoinRoomRep ok. */
        public ok: number;

        /**
         * Creates a new pkgSCJoinRoomRep instance using the specified properties.
         * @param [properties] Properties to set
         * @returns pkgSCJoinRoomRep instance
         */
        public static create(properties?: Protocol.IpkgSCJoinRoomRep): Protocol.pkgSCJoinRoomRep;

        /**
         * Encodes the specified pkgSCJoinRoomRep message. Does not implicitly {@link Protocol.pkgSCJoinRoomRep.verify|verify} messages.
         * @param message pkgSCJoinRoomRep message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IpkgSCJoinRoomRep, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified pkgSCJoinRoomRep message, length delimited. Does not implicitly {@link Protocol.pkgSCJoinRoomRep.verify|verify} messages.
         * @param message pkgSCJoinRoomRep message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IpkgSCJoinRoomRep, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a pkgSCJoinRoomRep message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns pkgSCJoinRoomRep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.pkgSCJoinRoomRep;

        /**
         * Decodes a pkgSCJoinRoomRep message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns pkgSCJoinRoomRep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.pkgSCJoinRoomRep;

        /**
         * Verifies a pkgSCJoinRoomRep message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a pkgSCJoinRoomRep message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns pkgSCJoinRoomRep
         */
        public static fromObject(object: { [k: string]: any }): Protocol.pkgSCJoinRoomRep;

        /**
         * Creates a plain object from a pkgSCJoinRoomRep message. Also converts values to other types if specified.
         * @param message pkgSCJoinRoomRep
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Protocol.pkgSCJoinRoomRep, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this pkgSCJoinRoomRep to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a pkgSCState. */
    interface IpkgSCState {

        /** pkgSCState player */
        player?: (Protocol.IpkgSCPlayerState[]|null);
    }

    /** Represents a pkgSCState. */
    class pkgSCState implements IpkgSCState {

        /**
         * Constructs a new pkgSCState.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IpkgSCState);

        /** pkgSCState player. */
        public player: Protocol.IpkgSCPlayerState[];

        /**
         * Creates a new pkgSCState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns pkgSCState instance
         */
        public static create(properties?: Protocol.IpkgSCState): Protocol.pkgSCState;

        /**
         * Encodes the specified pkgSCState message. Does not implicitly {@link Protocol.pkgSCState.verify|verify} messages.
         * @param message pkgSCState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IpkgSCState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified pkgSCState message, length delimited. Does not implicitly {@link Protocol.pkgSCState.verify|verify} messages.
         * @param message pkgSCState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IpkgSCState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a pkgSCState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns pkgSCState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.pkgSCState;

        /**
         * Decodes a pkgSCState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns pkgSCState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.pkgSCState;

        /**
         * Verifies a pkgSCState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a pkgSCState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns pkgSCState
         */
        public static fromObject(object: { [k: string]: any }): Protocol.pkgSCState;

        /**
         * Creates a plain object from a pkgSCState message. Also converts values to other types if specified.
         * @param message pkgSCState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Protocol.pkgSCState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this pkgSCState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a pkgSCPlayerState. */
    interface IpkgSCPlayerState {

        /** pkgSCPlayerState id */
        id?: (number|null);

        /** pkgSCPlayerState gridX */
        gridX?: (number|null);

        /** pkgSCPlayerState gridY */
        gridY?: (number|null);

        /** pkgSCPlayerState x */
        x?: (number|null);

        /** pkgSCPlayerState y */
        y?: (number|null);

        /** pkgSCPlayerState hp */
        hp?: (number|null);
    }

    /** Represents a pkgSCPlayerState. */
    class pkgSCPlayerState implements IpkgSCPlayerState {

        /**
         * Constructs a new pkgSCPlayerState.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IpkgSCPlayerState);

        /** pkgSCPlayerState id. */
        public id: number;

        /** pkgSCPlayerState gridX. */
        public gridX: number;

        /** pkgSCPlayerState gridY. */
        public gridY: number;

        /** pkgSCPlayerState x. */
        public x: number;

        /** pkgSCPlayerState y. */
        public y: number;

        /** pkgSCPlayerState hp. */
        public hp: number;

        /**
         * Creates a new pkgSCPlayerState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns pkgSCPlayerState instance
         */
        public static create(properties?: Protocol.IpkgSCPlayerState): Protocol.pkgSCPlayerState;

        /**
         * Encodes the specified pkgSCPlayerState message. Does not implicitly {@link Protocol.pkgSCPlayerState.verify|verify} messages.
         * @param message pkgSCPlayerState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IpkgSCPlayerState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified pkgSCPlayerState message, length delimited. Does not implicitly {@link Protocol.pkgSCPlayerState.verify|verify} messages.
         * @param message pkgSCPlayerState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IpkgSCPlayerState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a pkgSCPlayerState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns pkgSCPlayerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.pkgSCPlayerState;

        /**
         * Decodes a pkgSCPlayerState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns pkgSCPlayerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.pkgSCPlayerState;

        /**
         * Verifies a pkgSCPlayerState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a pkgSCPlayerState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns pkgSCPlayerState
         */
        public static fromObject(object: { [k: string]: any }): Protocol.pkgSCPlayerState;

        /**
         * Creates a plain object from a pkgSCPlayerState message. Also converts values to other types if specified.
         * @param message pkgSCPlayerState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Protocol.pkgSCPlayerState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this pkgSCPlayerState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
