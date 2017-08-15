/**
 * Created by claudio on 15/08/17.
 */

@registerDynamicValueClass
class CatenisPermRightSelectDynValue {

    static identifier = 'com.blockchainofthings.PawExtensions.CatenisPermRightSelectDynValue';
    static title = 'Catenis Permission Right Selection';
    static inputs = [
        DynamicValueInput('right', 'Right', "Select", {
            "choices": {
                "allow": "1 - Allow",
                "deny": "2 - Deny"
            }
        })
    ];

    evaluate(context) {
        return this.right;
    }

    title(context) {
        return 'Select';
    }

    text(context) {
        return this.right;
    }
}
