function IsPalindrom(str){
    let a=str.split("");
    let b=a.reverse();
    let x=b.join();
    return str===x;
}
console.log(IsPalindrom(hello))