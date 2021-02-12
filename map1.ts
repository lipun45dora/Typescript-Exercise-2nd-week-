let map=new Map();//initializing the map
map.set(1,'lipun');//map.set()-It is used to add entries in the map
map.set('2','W3school');
map.set(true,'value');
map.set('3','Roshan');
console.log("Value1="+map.get(1));//map.get-It is used to retrieve entries from the map
console.log("Value2="+map.get('1'));
console.log("Value3="+map.get('3'));//map.get-It returns undefined if the key does not exist in the map.
console.log("Value4="+map.get('value'));
console.log("Key is present="+map.has(1));//map.has()-It returns true if the key is present in the map. Otherwise, it returns false.
console.log("Size="+map.size);//map.size()-It is used to returns the size of the map.
console.log("Delete value="+map.delete('1'));//map.delete()-It is used to remove the entries by the key.
console.log("New Size="+map.size);
console.log(map.clear);//map.clear()-It removes everything from the map.
console.log("New size="+map.size);


