export const tree: BinaryNode<number> = {
    value: 20,
    right: {
        value: 50,
        right: {
            value: 100,
        },
        left: {
            value: 30,
            right: {
                value: 45,
            },
            left: {
                value: 29,
            },
        },
    },
    left: {
        value: 10,
        right: {
            value: 15,
        },
        left: {
            value: 5,
            right: {
                value: 7,
            },
        },
    },
};

export const tree2: BinaryNode<number> = {
    value: 20,
    right: {
        value: 50,
        left: {
            value: 30,
            right: {
                value: 45,
                right: {
                    value: 49,
                },
            },
            left: {
                value: 29,
                left: {
                    value: 21,
                },
            },
        },
    },
    left: {
        value: 10,
        right: {
            value: 15,
        },
        left: {
            value: 5,
            right: {
                value: 7,
            },
        },
    },
};
