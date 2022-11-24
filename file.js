const file= require('fs')
file.readFile('//SAMSUNG_SAMSUNG_Android_dc4efcf3/Card/Download/Notes_220701_215359.txt','utf8',(err,data) => {
    if (err)
    console.log(err);
    console.log(data);
});
    