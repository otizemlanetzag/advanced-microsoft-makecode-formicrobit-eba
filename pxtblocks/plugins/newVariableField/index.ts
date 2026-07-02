export * from "./fieldVariable";
Blockly.Blocks['pxt_variable_name'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("שם המשתנה")
            .appendField(new Blockly.FieldVariable("item"), "VAR");
        this.setOutput(true, "String");
        this.setColour(Blockly.Colors.variables);
    }
};
