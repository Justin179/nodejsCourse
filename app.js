// call and apply
var obj = {
    name: 'Justin Chen',
    greet: function(param){
        console.log(`Hello ${this.name}`);
    }
}

obj.greet();

// the above this refers to {name:'Jane Doe'}
obj.greet.call({name:'Jane Doe'}); // function greet有參數的話，逐一表列於後

obj.greet.apply({name:'Jane Doe2'}); // function greet有參數的話，全部寫在一個陣列裡面，放到第二個參數