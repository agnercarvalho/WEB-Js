let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)  //elemento global do node

const obj = {}

comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)
