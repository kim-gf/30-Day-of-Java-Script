function expect(val) {
    return {
        toBe: function (otherVal) {
            if (val !== otherVal) {
                throw new Error("Not Equal");
            } else {
                return {"value": true};
            }
        },
        notToBe: function (otherVal) {
            if (val === otherVal) {
                throw new Error("Equal");
            } else {
                return {"value": true};
            }
        }
    };
}
