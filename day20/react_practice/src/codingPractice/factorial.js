function factorail(n){
    if (n === 0 || n ===1){
        return 1
    }
    else {
        return (n * factorail(n - 1))
    }
}


console.log(factorail(5));