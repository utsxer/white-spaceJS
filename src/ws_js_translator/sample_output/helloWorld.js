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
    stack.push(72);
});
memory.push(function () {
    process.stdout.write(String.fromCharCode(stack.pop()));
});
memory.push(function () {
    stack.push(69);
});
memory.push(function () {
    process.stdout.write(String.fromCharCode(stack.pop()));
});
memory.push(function () {
    stack.push(76);
});
memory.push(function () {
    process.stdout.write(String.fromCharCode(stack.pop()));
});
memory.push(function () {
    stack.push(76);
});
memory.push(function () {
    process.stdout.write(String.fromCharCode(stack.pop()));
});
memory.push(function () {
    stack.push(79);
});
memory.push(function () {
    process.stdout.write(String.fromCharCode(stack.pop()));
});
memory.push(function () {
    stack.push(44);
});
memory.push(function () {
    process.stdout.write(String.fromCharCode(stack.pop()));
});
memory.push(function () {
    stack.push(87);
});
memory.push(function () {
    process.stdout.write(String.fromCharCode(stack.pop()));
});
memory.push(function () {
    stack.push(79);
});
memory.push(function () {
    process.stdout.write(String.fromCharCode(stack.pop()));
});
memory.push(function () {
    stack.push(82);
});
memory.push(function () {
    process.stdout.write(String.fromCharCode(stack.pop()));
});
memory.push(function () {
    stack.push(76);
});
memory.push(function () {
    process.stdout.write(String.fromCharCode(stack.pop()));
});
memory.push(function () {
    stack.push(68);
});
memory.push(function () {
    process.stdout.write(String.fromCharCode(stack.pop()));
});
memory.push(function () {
    pointer = -1;
});
main();