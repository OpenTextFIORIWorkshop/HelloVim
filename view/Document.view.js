sap.ui.jsview("HelloVim.view.Document", {

  getControllerName: function() {
    return "HelloVim.view.Document";
  },

  createContent: function() {
 

//   	this.page = new sap.m.Page({	    
//       id : "mPage",
//       showHeader : true,
//       title: "Becker Berlin",
//       enableScrolling : false, // !!!! Important !!!!
//       showFooter: false,
//       height:500,
//       content: [ 
         return new sap.ui.core.HTML( {
          content: 
    		"<div id=\"divPdf\" style=\"height:100%;width:auto;\">" +
    	//	"<iframe  id='pdfObject' style=\"height:100%;width:100%\" > </iframe></div>"
	    		"<object type=\"application/pdf\" id='pdfObject' src='img/po001.pdf' style=\"height:100%;width:100%\" > " +
	   			    "<param name=\"view\" value=\"FitH\" /> " +
	    		"</object></div>" 
         });
	   // 		]
    // });

    // return this.page;
  }





});

