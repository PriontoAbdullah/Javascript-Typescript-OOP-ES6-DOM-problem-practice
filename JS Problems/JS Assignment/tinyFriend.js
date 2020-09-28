function tinyFriend(name){
        var tinny = name[0];
        for(i=1; i < name.length; i++){
            if(tinny.length > name[i].length){
                tinny = name[i];
            }
        }
        return tinny;
    }


var friendsName = tinyFriend(['Abul', 'Kodu', 'Mofiz', 'Jodu', 'Opkul', 'Ali', 'Sopkulah']);
console.log(friendsName);