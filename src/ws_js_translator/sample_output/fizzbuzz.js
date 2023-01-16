const memory = ['dummy'];
const label = {};
const stack = [];
const bp = [];
const heap = {};
let pointer = 0;
function main() {
    while (pointer >= 0) {
        pointer++;
        memory[pointer]();
    }
}
memory.push(function () {
    stack.push(0);
});
memory.push(function () {
    stack.push(15);
});
memory.push(function () {
    stack.push(14);
});
memory.push(function () {
    stack.push(13);
});
memory.push(function () {
    stack.push(12);
});
memory.push(function () {
    stack.push(11);
});
memory.push(function () {
    stack.push(10);
});
memory.push(function () {
    stack.push(9);
});
memory.push(function () {
    stack.push(8);
});
memory.push(function () {
    stack.push(7);
});
memory.push(function () {
    stack.push(6);
});
memory.push(function () {
    stack.push(5);
});
memory.push(function () {
    stack.push(4);
});
memory.push(function () {
    stack.push(3);
});
memory.push(function () {
    stack.push(2);
});
memory.push(function () {
    stack.push(1);
});
label['T'] = memory.length - 1;
memory.push(function () {
    stack.push(15);
});
memory.push(function () {
    stack.push(stack[stack.length - 2]);
});
memory.push(function () {
    stack.push(stack.pop() % stack.pop());
});
memory.push(function () {
    if (stack.pop() === 0) {
        pointer = label.TS;
    }
    ;
});
memory.push(function () {
    stack.push(3);
});
memory.push(function () {
    stack.push(stack[stack.length - 2]);
});
memory.push(function () {
    stack.push(stack.pop() % stack.pop());
});
memory.push(function () {
    if (stack.pop() === 0) {
        pointer = label.TSS;
    }
    ;
});
memory.push(function () {
    stack.push(5);
});
memory.push(function () {
    stack.push(stack[stack.length - 2]);
});
memory.push(function () {
    stack.push(stack.pop() % stack.pop());
});
memory.push(function () {
    if (stack.pop() === 0) {
        pointer = label.TST;
    }
    ;
});
memory.push(function () {
    stack.push(stack[stack.length - 1]);
});
memory.push(function () {
    process.stdout.write(String(stack.pop()));
});
memory.push(function () {
    pointer = label.TTS;
});
label['TS'] = memory.length - 1;
memory.push(function () {
    stack.push(70);
});
memory.push(function () {
    process.stdout.write(String.fromCharCode(stack.pop()));
});
memory.push(function () {
    stack.push(66);
});
memory.push(function () {
    process.stdout.write(String.fromCharCode(stack.pop()));
});
memory.push(function () {
    pointer = label.TTS;
});
label['TSS'] = memory.length - 1;
memory.push(function () {
    stack.push(70);
});
memory.push(function () {
    process.stdout.write(String.fromCharCode(stack.pop()));
});
memory.push(function () {
    pointer = label.TTS;
});
label['TST'] = memory.length - 1;
memory.push(function () {
    stack.push(66);
});
memory.push(function () {
    process.stdout.write(String.fromCharCode(stack.pop()));
});
memory.push(function () {
    pointer = label.TTS;
});
label['TTS'] = memory.length - 1;
memory.push(function () {
    stack.push(10);
});
memory.push(function () {
    process.stdout.write(String.fromCharCode(stack.pop()));
});
memory.push(function () {
    stack.splice(stack.length - 1, 1);
});
memory.push(function () {
    stack.push(stack[stack.length - 1]);
});
memory.push(function () {
    if (stack.pop() === 0) {
        pointer = label.TTT;
    }
    ;
});
memory.push(function () {
    pointer = label.T;
});
label['TTT'] = memory.length - 1;
memory.push(function () {
    pointer = -1;
});
main();