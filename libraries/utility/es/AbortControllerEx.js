/**
 * 手动实现一下 `AbortController`，这样 Node.js 也能用。并且保证在 `abort` 之后，事件监听器被清除。
 * 避免手动调用 `removeEventListener`
 */
export class AbortControllerEx {
    constructor() {
        this._signal = new AbortSignal();
    }
    /**
     * 获取 signal
     *
     * @remarks
     * {@link AbortSignal}
     */
    get signal() {
        return this._signal;
    }
    /** 取消 */
    abort() {
        this._signal.aborted = true;
    }
}
class AbortSignal {
    constructor() {
        this._eventId = 0;
        this._aborted = false;
        this._callbacks = {};
    }
    addEventListener(_type, callback) {
        this._callbacks[this._eventId++] = callback;
    }
    removeEventListener(_type, callback) {
        Object.keys(this._callbacks).forEach((key) => {
            if (callback === this._callbacks[key]) {
                try {
                    delete this._callbacks[key];
                }
                catch (_e) { }
            }
        });
    }
    get aborted() {
        return this._aborted;
    }
    set aborted(value) {
        if (!this._aborted && value === true) {
            this._aborted = value;
            Promise.resolve().then(() => {
                Object.keys(this._callbacks).forEach((key) => {
                    try {
                        this._callbacks[key].call(this, this);
                    }
                    catch (e) {
                        console.error(e);
                    }
                });
            });
            // @ts-ignore
            this._callbacks = null;
        }
    }
}
