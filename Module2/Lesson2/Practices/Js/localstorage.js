let item = JSON.parse(localStorage.getItem("test")) || []

function handle(count) {
    return count += 1
}

item.push(count)

localStorage.setItem("original",item)



var output = a.reduce( (final,data) => {
    let isAlready = final.find( ( value ) => { 
      value.taxid == data.taxid;
    });
    if(!isAlready){
      final.push( data );
    } else {
      var index = final.indexOf(isAlready);
      final[index].tax_value = parseFloat(final[index].tax_value) + parseFloat(data.tax_value);
    }
    return final;
   },[] )