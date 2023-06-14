// fibonacci series
const fibonacci = n => {
    const series = [0, 1];
    if (n <= 2) {
        return series.slice(0, n);
    }
    for (let i = 2; i < n; i++){
        const nextNumber = series[i - 1] + series[i - 2];
        series.push(nextNumber)
    }
    return series
}
const fiboNamba = fibonacci(20)
console.log(fiboNamba);