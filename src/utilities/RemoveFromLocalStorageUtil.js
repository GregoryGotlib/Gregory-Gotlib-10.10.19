export default function RemoveDataFromLocalStorage(data)
{
    var a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem('favsObject'));
    // Push the new data (whether it be an object or anything else) onto the array
    if(a){
        a=a.filter(f=>f.cityName !== data.cityName)
        localStorage.setItem('favsObject', JSON.stringify(a));
    }
}