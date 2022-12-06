module.exports = function myLoad(item){
    console.log('hello loader')
    return item.replace('console.log(','alert(');
    alert()
}
