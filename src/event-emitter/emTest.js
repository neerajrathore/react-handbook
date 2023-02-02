// reference site https://netbasal.com/javascript-the-magic-behind-event-emitter-cce3abcbcef9

class EventEmitter {
    constructor() {
        this.events = {}
    }

    // this.events[eventName] is equls to this.events.eventname

    // emit event 
    emit(eventName, data) {
        console.log(eventName, data, this.events, this.events[eventName],  'EMIT DATA');
        const event = this.events[eventName]
        if (event) {
            event.forEach(fn => {
                console.log(fn, "fn");
                // apply and call almost same but apply takes an array where call take n numbers of argument
                fn.call(null, data);
            });
        }
    }

    // subscribe
    subscribe(eventName, fn) {
        console.log(eventName, fn, this.events, this.events[eventName],   "SUBSCRIBE DATA");
        if (!this.events[eventName]) { this.events[eventName] = []; }

        //The purpose of the events property is to store our events name as the key and the value as an array of subscribers (i.e., functions).
        this.events[eventName].push(fn)
        // returning unsubscribe function from the subscribe method
        return () => {
            this.events[eventName] = this.events[eventName].filter(eventfn => fn !== eventfn)
        }
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    let input = document.querySelector('input[type="text"]');
    let button = document.querySelector('button');
    let h1 = document.querySelector('h1');

    // button click event 
    button.addEventListener('click', () => {
        emitter.emit('event:name-changed', { name: input.value })
    })

    let emitter = new EventEmitter();
    console.log(emitter);
    // debugger
    // we subscrive at the very begining 
    emitter.subscribe('event:name-changed', data => {
        console.log("subscribe called");
        h1.innerHTML = `Your name is: ${data.name}`;
    })
    // emitter.subscribe("event:name-add", )

})