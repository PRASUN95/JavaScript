function calculateTotalNoob(items,options)
{
    let total = 0;
    items.forEach(element => {
        total += element.price * element.quantity;
    });
    if(options.ship)
    {
        total += options.ship;
    }
    else total += 5;
    if(options.dis)
    {
        total -= total * options.dis;
    }
    return total;
}

var items =[
    {price : 25,quantity : 2},
    {price : 35,quantity : 5},
    {price : 45,quantity : 7}
];


console.log(calculateTotalNoob(items,{ship : 20,dis : .20}));
console.log(calculateTotalNoob(items,{ship : 20}));
console.log(calculateTotalNoob(items,{}));