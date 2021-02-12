var map=new Map();
map.set('1','lipun');
map.set('2','roshan');
map.set(3,'w3school');
for(let key of map.keys())// iteration over key
{
    console.log("Map keys="+key);
}
for(let value of map.values())// Iterartion over values
{
    console.log("Map values="+value);
}
for(let entry of map.entries())// Iteration over entries
{
    console.log("Map entries="+entry);
}