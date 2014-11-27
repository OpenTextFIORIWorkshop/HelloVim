sap.ui.core.mvc.Controller.extend("HelloVim.view.Attachments", {
	onInit: function() {
		this._list = this.byId("AttachmentList");

		var fakeDataModel = new sap.ui.model.json.JSONModel({AttachmentCollection: [{
			FileName : 'Scanned Invoice.pdf',
			archiv_id: 'A1',
			archiv_docid: '123454566778',
			ar_object: 'INVOICE',
			mime_type: 'app-text/pdf'
		    
		},		{
			FileName : 'Einzelverbindungsnachweis.pdf',
			archiv_id: 'A1',
			archiv_docid: '123454566778',
			ar_object: 'INVOICE',
			mime_type: 'app-text/pdf'
		}
		]});
		fakeDataModel.setDefaultBindingMode("OneWay");
		this.getView().setModel(fakeDataModel, "fakeAttachments");
	}
});