export default function SaveDataToLocalStorage(data)
{
    data.isFavorite=true;
    var a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem('favsObject'));
    // Push the new data (whether it be an object or anything else) onto the array
    if(a){
        if(!(a.filter(f=>f.cityName == data.cityName).length > 0)){
            a.push(data);
        }
    }
    else {
        a = [];
        a.push(data);
    }
    localStorage.setItem('favsObject', JSON.stringify(a));
}

