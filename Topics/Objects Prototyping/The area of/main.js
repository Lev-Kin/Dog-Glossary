const shape = {
    height: 5,
    width: 4,
    calculateArea() {
        return 0;
    }
};

/* Do not change code above */

const rectangle = Object.create(shape, {
    calculateArea: {
        value: function () {
            return this.width * this.height;
        }
    }
});

const triangle = Object.create(shape, {
    calculateArea: {
        value: function () {
            return (this.width * this.height) / 2;
        }
    }
});

/* Do not change code below */

console.log(rectangle.calculateArea());
console.log(triangle.calculateArea());