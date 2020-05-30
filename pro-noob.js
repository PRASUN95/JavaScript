const SHIPPING_DEFAULT = 5;
const TAX_RATE = 1.1;

function calculateTotalNoob(items,options)
{
    let total = 0;
    items.forEach(element => {
        total += element.price * element.quantity;
    });
    if(options.dis)
    {
        total -= total * options.dis;
    }
    total *= 1.1;
    if(options.ship)
    {
        total += options.ship;
    }
    else total += 5;

    return total;
}

function calculateTotalAdvanced(items,options={})
{
    if(items == null || items.length === 0) return 0;
    let total = 0;
    items.forEach(item => {
        total += item.price * item.quantity;
    });
    if(options.dis)
    {
        total -= total * options.dis;
    }
    total *= TAX_RATE;
    if(options.ship !== 0)
    {
        total += (options.ship || SHIPPING_DEFAULT);
    }
    return total;
}

function calculateTotalPro(items,{ship = SHIPPING_DEFAULT, dis = 0}= {}){
    if(items == null || items.length === 0) return 0;

    const itemCost = items.reduce((total,item)=>{
        return total + item.price * item.quantity;
    },0);
    const discountRate = 1 - dis;
    return itemCost * discountRate * TAX_RATE + ship;
}

var items =[
    {price : 25,quantity : 2},
    {price : 35,quantity : 5},
    {price : 45,quantity : 7}
];


console.log(calculateTotalNoob(items,{ship : 20,dis : .20}));
//console.log(calculateTotalNoob(items,{ship : 20}));
//console.log(calculateTotalNoob(items,{}));

//console.log(calculateTotalAdvanced(items));
console.log(calculateTotalAdvanced(items,{ship : 20,dis : .20}));

console.log(calculateTotalPro(items,{ship : 20,dis : .20}));
console.log(calculateTotalPro(items));