sap.ui.jsview("HelloVim.view.Document", {

  getControllerName: function() {
    return "HelloVim.view.Document";
  },

  createContent: function() {
         return new sap.ui.core.HTML( {
          content: "<object type=\"application/pdf\" id='pdfObject' src='img/po001.pdf' style=\"height:102%;width:100%\" > " +
	   			        "<param name='view' value='Fit' /> " +
	   			        "<param name='zoom' value='scale' />" +
	    		    "</object>" 
         });
  }





});

