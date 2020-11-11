// For help writing plugins, visit the documentation to get started:
//   https://support.insomnia.rest/article/26-plugins

// TODO: Add plugin code here...

module.exports.templateTags = [
    {
        name: 'toBytes',
        displayName: 'toBytes',
        description: 'Convert an String content in an byte array',
        args: [
            {
                displayName: 'Raw string content',
                description: 'String to be converted in byte array',
                type: 'string',
                defaultValue: false
            }
        ],
        async run(context, rawStringContent) {
            const result = [];
            for (let c = 0; c < rawStringContent.length; c++) {
                result.push(rawStringContent.charCodeAt(c));
            }
            return JSON.stringify(result);
        }
    }
];