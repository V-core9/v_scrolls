# **๐งพ V_Scrolls - README.md**    
 

 **Description**: _Basically generates MD files...so a Markdown generator...pack data where ever you want and just use this to organize it how file will be printed._  
  
>---  
>### ๐ง **WARNING: APPLICATION STILL IN ๐งฑ [ALPHA] **  ๐ง  
>---   
## **๐ญ Short Description**    

Made to help out hunting ghost bugs in front and backend.
                Currently in state of organization of files and building up the idea what else to include    

---
## **๐ Install and Setting up**    

Currently only through the github repo can be installed...
  But soon we will have something like:
        
        npm install v_scrolls --save
        
  Soon... ๐    

---
## **โก How to actually use it ?**    

here is an example code that is being used to export this example readme file in the fist place. 
        
        
        const v_scrolls = require('v_scrolls');

        // -> Use this as template for the generator config file.
        const files_export_list = require('./system/config/docs_export');

        // -> Run it.
        v_scrolls.generate(files_export_list);

>  You can also find the source code of this example in the ```make_docs.sample.js``` file.
      

---
## **๐ Additional Description Info**    

Nothing much to say here just wanna have something that will expand the text and show-off some of the blocks it can do.
  
  For now it's pretty simple without many complications. Resulting in not that complicated nor helpful expanding it yet. Need few other things sorted before we get out to v1.    

---
## **๐งฑ Development Info**    

Still in early development state but there is quite a number of projects that can benefit from this.
  
> Simply can send a config file similar to this one to the project folder and it will create the document based on that data provided.
  
  Additionally or mainly...
  We can add more parts to this section by just writing it down in basic MD format. Try it out it's free ๐๐    

---
## **๐ Project Folders Structure Info**    

Look into system folder for more info about project structure. 
  
  These are some important folders that are used when generating this document:

    ๐ system /
    ๐ system / actions /
    ๐ system / config /
    ๐ system / file_templates /
    ๐ system / info_pages /
    ๐ system / v_modules /         

---
## **๐ Advanced Developer Usage**    

SOON...    

---
>### ๐ป **WARRNING: GENERATED FILE NOTICE**  ๐ป 
> โ Any Edits Done To Generated Files Will Be Overwritten Next Time These Files Get Re-Generated!  
>  
> _Made ๐ using [v_scrolls]("https://github.com/V-core9/v_scrolls")_      
> Last Updated:  2021/12/06 21:36:59 
