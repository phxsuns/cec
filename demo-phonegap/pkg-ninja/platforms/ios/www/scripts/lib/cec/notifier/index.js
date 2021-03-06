KISSY.add(function (S, Klass) {
    
    var Notifier = Klass({
        fire: function (ev, data) {
            this._events = this._events || {};
            var evs = this._events[ev];
            var args = Array.prototype.slice.call(arguments, 1);
            if (evs && evs.length) {
                for (var i = 0; i < evs.length; i ++) {
                    evs[i].apply(this, args);
                }
            }
            return this;
        },
        on: function (ev, callback) {
            this._events = this._events || {};
            if (!this._events[ev]) {
                this._events[ev] = [];
            }
            this._events[ev].push(callback);
            return this;
        },
        off: function (ev, callback) {
            this._events = this._events || {};
            if (!callback) {
                delete this._events[ev];
            } else {
                for (var i = 0; i < this._events[ev].length; i ++) {
                    if (callback == this._events[ev][i]) {
                        this._events[ev].splice(i, 1);
                        break;
                    }
                }
            }
            return this;
        },
        mix: function () {
            var target, source;
            if (arguments.length == 1) {
                target = this;
                source = arguments[0];
            }
            for (var k in source) {
                target[k] = source[k];
            }

            return target;
        }
    });
    Notifier.singleton = new Notifier();

    return Notifier;

}, {
    requires: ['cec/klass']
});