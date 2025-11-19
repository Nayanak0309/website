
function whoPay(names){
    var noOfPeople=names.length;
    var noOfPerpleP=Math.floor(Math.random()*noOfPeople);
    var noOfPeoplepi=names[noOfPerpleP];
    return noOfPeoplepi;
}