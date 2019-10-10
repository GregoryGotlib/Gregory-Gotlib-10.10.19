export default function RemoveDataFromLocalStorageByKey(key)
{
    var a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem('favsObject'));
    // Push the new data (whether it be an object or anything else) onto the array
    if(a){
        a=a.filter(f=>f.cityKey !== key)
        localStorage.setItem('favsObject', JSON.stringify(a));
    }
}