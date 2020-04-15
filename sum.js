function sum(n) {
    if (typeof n === "undefined")
        return 0;
    return (m) => {
        if (typeof m !== "undefined")
            return sum(n + m);
        return n;
    };
}

sum(1)(2)(3)();
