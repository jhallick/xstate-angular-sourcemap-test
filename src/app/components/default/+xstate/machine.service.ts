import { Injectable } from "@angular/core";
import { Machine, interpret } from 'xstate';

@Injectable()
export class TestMachine {
    private machine = Machine({
        id: 'test',
        initial: 'boot',
        context: {},
        states: {
            boot: {
                on: {
                    '': 'final'
                }
            },
            final: {
                type: 'final',
                entry: () => console.log('in final state!')
            }
        }
    });
    private service = interpret(this.machine, { devTools: true }).start();

    send(event) {
        this.service.send(event);
    }

    constructor() {}
}
