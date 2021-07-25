const files_export_list = require('../config/docs_export')

console.log("FILES FOR EXPORTING: ")

var file_content = ""

console.log(files_export_list)

files_export_list.forEach(fileDoc => {
    console.log(fileDoc)
    fileDoc.layout.forEach(section =>  {
        file_content += "Section Title: \n"+ section.title +" \n\n"
        file_content += "Section Description: \n"+ section.content +" \n\n"
    })
});

console.log(file_content)