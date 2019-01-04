const box = {
    locked: true,
    unlock() {
        this.locked = false;
    },
    lock() {
        this.locked = true;
    },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(body) {
    // Your code here.
    // box.unlock();
    // body();
    // box.lock();
    let wasLocked = box.locked; //dau tien true

    box.unlock(); // false
    try {
        body();
    }
    finally {
        wasLocked ? box.lock() : box.unlock();
    }
}

withBoxUnlocked(function () {
    box._content.push("gold piece");
});

try {
    withBoxUnlocked(function () {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log(`Error raised: ${e.message}`);
}
console.log(box.locked);
// → true
