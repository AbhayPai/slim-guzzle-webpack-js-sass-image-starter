import View from 'ViewPath/View';

export default function CreateView(config) {
    let Public =  this;

    Public.init = function() {
        config.selectorId ?
            new View({
                selectorId: config.selectorId,
                templateName: config.templateName,
                templateData: {
                    posts: JSON.parse(config.data)
                }
            }).render() :
            /*eslint no-console: ["error", { allow: ["warn"] }] */
            console.warn('something went wrong!!! ' +
                    'please check the selector');
    };
}
