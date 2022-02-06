const myEach = (collection, foo) => {
    Object.values(collection).forEach(foo, this)
    return collection
}

const myMap = (collection, foo) => {
    const newArry = Object.values(collection).map(foo, this)
    return newArry
}

const myReduce = (collection, foo, acc) => {
    if(!!acc) {
        return Object.values(collection).reduce(foo,acc)
    }else {return Object.values(collection).reduce(foo)}

}

const myFind = (collection, foo) => {
    return Object.values(collection).find(foo, this)

}

const myFilter = (collection, foo) => {
    return Object.values(collection).filter(foo, this)
}

const mySize = (collection) => {
    return Object.values(collection).length
}

const myFirst = (arry, n) => {
    if(!!n) {
    return arry.slice(0, n)
    } else {return arry[0]}
}

const myLast = (arry, n) => {
    if(!!n) { 
        return arry.slice(arry.length-n, arry.length)
    } else {return arry[arry.length - 1]}
}

const myKeys = (obj) => {
    return Object.keys(obj)
}

const myValues = (obj) => {
    return Object.values(obj)
}