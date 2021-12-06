# **🔥 Developer Scrolls**    
 

 **Description**: _Here you can find many ways to utilize code to generate documentations for different thing and get happy dev team using it._  
  
>---  
>### 🚧 **WARNING: APPLICATION STILL IN 🧱 [ALPHA] **  🚧  
>---   
## **💭 Short Description**    

Made to help out hunting ghost bugs in front and backend.
                Currently in state of organization of files and building up the idea what else to include    

---
## **📁 Project Folders Structure Info**    

Look into system folder for more info about project structure. 
  
  These are some important folders that are used when generating this document:

    📁 system /
    📁 system / actions /
    📁 system / config /
    📁 system / file_templates /
    📁 system / info_pages /
    📁 system / v_modules /         

---
## **🚕 Install and Setting up**    

Currently only through the github repo can be installed...
  But soon we will have something like:
        
        npm install v_scrolls --save
        
  Soon... 🚀    

---
## **⚡ How to actually use it ?**    

here is an example code that is being used to export this example readme file in the fist place. 
        
        
        const v_scrolls = require('v_scrolls');

        // -> Use this as template for the generator config file.
        const files_export_list = require('./system/config/docs_export');

        // -> Run it.
        v_scrolls.generate(files_export_list);

>  You can also find the source code of this example in the ```make_docs.sample.js``` file.
      

---
## **🌀 Additional Description Info**    

Nothing much to say here just wanna have something that will expand the text and show-off some of the blocks it can do.
  
  For now it's pretty simple without many complications. Resulting in not that complicated nor helpful expanding it yet. Need few other things sorted before we get out to v1.    

---
## **🚀 Advanced Developer Usage**    

SOON...    

---
## **🧱 Development Info**    

Still in early development state but there is quite a number of projects that can benefit from this.
  
> Simply can send a config file similar to this one to the project folder and it will create the document based on that data provided.
  
  Additionally or mainly...
  We can add more parts to this section by just writing it down in basic MD format. Try it out it's free 😁😄    

---
>### 🔻 **WARRNING: GENERATED FILE NOTICE**  🔻 
> ⛔ Any Edits Done To Generated Files Will Be Overwritten Next Time These Files Get Re-Generated!  
>  
> _Made 💖 using [V_Scrolls_Generator]("#")_      
> Last Updated:  2021/12/06 21:17:15 
