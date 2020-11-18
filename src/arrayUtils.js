class ArrayUtils {
    static sum(values) {
        return values.reduce((currentSum, currentValue) => currentSum + currentValue, 0);
    }

    static max(values) {
        return values.reduce((currentMaxValue, currentValue) => Math.max(currentMaxValue, currentValue), 0);
    }

    static min(values) {
        return values.reduce((currentMaxValue, currentValue) => Math.min(currentMaxValue, currentValue), 0);
    }

    static mean(values) {
        return this.sum(values) / values.length;
    }

    static zeros(length) {
        return new Array(length).fill(0);
    }

    static ones(length) {
        return new Array(length).fill(1);
    }
}

export default ArrayUtils;