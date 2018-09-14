//task2
console.log('Hello World');

//tsk3
const name = process.argv[2];
console.log(`Hi ${name}!`);

//task4
process.argv.forEach(function(element) {
  console.log(element);
});

//task5
task5();

const fileName = process.argv[2];
let fs = require("fs");
let fileContent;



function createFile (){
    fs.writeFile(fileName, "",
    function(err){
        if(err){
        console.log(err);
        }else{
            fs.readFile("code.txt", "utf8", 
                function(error,data){
                    if(error){
                        console.log(error);
                    }else{
                        fileContent = data;
                        fs.writeFile(fileName, fileContent, function(error){ 
                            if(error){
                                console.log(error);
                            }        
                         console.log("Файл создан");
                    });
                }                 
            });     
        }
    });
}
 
 function copyFiles(dirName){
    const path = require('path');
    const absolutePath = path.dirname(dirName) ; 
    const newPath = path.resolve(dirName);

    fs.readdir(absolutePath, function(err, list) {
        if (err) {
            console.log(err);
        }
        let newPlace = path.basename(newPath+'\\cwp-01\\');  
        list.forEach(function(file){

            if(".txt" == path.extname(file)){     
                fs.copyFile(file, newPlace+'\\'+file, (err) => {
                    if (err) {
                        console.log(err);
                     }
                });   
            } 
                        
        });       
    });    
}

function createDir(dirName) {
    fs.mkdir(dirName, function() { 
        console.log("dir created");   
        copyFiles(dirName);
    });
}

function addCopyright(){
    let jsonFile = fs.readFileSync('config.json');  
    let obj = JSON.parse(jsonFile); 
    let copyright = obj.copyright;
    let fileC;
    fs.readdir('E:\\University\\3k1s\\PSKP\\git_tutorial\\work\\cwp-01\\cwp-01', function(err, newDirList) {
        if (err) {
            console.log(err);
        }     
        console.log(newDirList);
        newDirList.forEach((newfile)=>{
         //   console.log('cwp-01/'+ newfile);
            
            fs.readFile('cwp-01/'+ newfile, "utf8", 
                function(error,c){
                    if(error){
                        console.log(error);
                    }
                    fileC = copyright+ '\n'+ c +'\n'+ copyright;
                    console.log(fileC);
                    fs.writeFile('cwp-01/'+ newfile, fileC, function(error){ 
                        if(error){
                            console.log(error);
                        }        
                    });
                }
            );                
        });                       
    });       
}



function task5(){
   createFile();
   createDir("cwp-01");
   addCopyright();
   fs.watchFile('E:\\University\\3k1s\\PSKP\\git_tutorial\\work\\cwp-01\\cwp-01', (curr, prev) => {
  console.log('E:\\University\\3k1s\\PSKP\\git_tutorial\\work\\cwp-01\\cwp-01 file Changed');
});
}




