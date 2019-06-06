sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "com/questionsAsked/model/Formatter"
], function (Controller, JSONModel, Formatter) {
    "use strict";

    var Controller = Controller.extend("com.questionsAsked.controller.app", {
        formatter: Formatter
    }),
        ControllerProto = Controller.prototype;

    
    ControllerProto.onInit = function() {
        this.m_oErrorMessageContainer = this.getView().byId("idErrorMessageContainer");

        var oComponent = this.getOwnerComponent();
        oComponent.m_oErrorMessageContainer = this.m_oErrorMessageContainer;
    };

    return Controller;
});