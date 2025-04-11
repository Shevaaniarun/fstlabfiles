const math=require("./math")


function calculate(a,b)
{
    console .log("ADDITION: ",math.add(a,b), "\nSUBTRACTION: ",math.sub(a,b), "\nMULTIPLICATION: ", math.mul(a,b), "\nDIVISION: ", math.div(a,b));
}

calculate(10,5);