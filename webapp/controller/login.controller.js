sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "com/questionsAsked/model/Formatter"
], function (Controller, JSONModel, Formatter) {
    "use strict";

    var Controller = Controller.extend("com.questionsAsked.login.app", {
            formatter: Formatter
        }),
        ControllerProto = Controller.prototype;


    ControllerProto.onInit = function () {
        
    };

    return Controller;
});