type Callback = (...args: any[]) => any;
type Subscription = {
  unsubscribe: () => void;
};

class EventEmitter {
  events = {};

  subscribe(eventName: string, callback: Callback): Subscription {
    if (this.events[eventName]) this.events[eventName].push(callback);
    else this.events[eventName] = [callback];

    return {
      unsubscribe: () => {
        if (this.events[eventName]) {
          this.events[eventName] = this.events[eventName].filter(
            (event) => event !== callback
          );
        }
      },
    };
  }

  emit(eventName: string, args: any[] = []): any[] {
    if (this.events[eventName]) {
      return this.events[eventName].map((cb) => cb.apply(this, [...args]));
    }

    return [];
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
