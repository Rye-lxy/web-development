/**
 * 手动实现一下 `AbortController`，这样 Node.js 也能用。并且保证在 `abort` 之后，事件监听器被清除。
 * 避免手动调用 `removeEventListener`
 */
export declare class AbortControllerEx {
    /**
     * 获取 signal
     *
     * @remarks
     * {@link AbortSignal}
     */
    get signal(): AbortSignal;
    /** 取消 */
    abort(): void;
    private _signal;
}
declare class AbortSignal {
    addEventListener(_type: 'abort', callback: (e: AbortSignal) => void): void;
    removeEventListener(_type: 'abort', callback: (e: AbortSignal) => void): void;
    get aborted(): boolean;
    set aborted(value: boolean);
    private _eventId;
    private _aborted;
    private _callbacks;
}
export {};
