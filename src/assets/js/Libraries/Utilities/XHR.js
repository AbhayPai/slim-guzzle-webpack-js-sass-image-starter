/*eslint no-console: ["error", { allow: ["warn"] }] */
export default function XHR(config) {
    let Public = this;
    let Prop = Public;
    let XHRObject = new XMLHttpRequest();

    Public.init = function() {
        Public.setOptions();
        Public.requestsObject();
    };

    Public.setOptions = function() {
        Prop.defaults = {
            url: null
        },
        Prop.options = config || {};

        for (var name in Prop.defaults) {
            if (Prop.options[name] === undefined) {
                Prop.options[name] = Prop.defaults[name];
            }
        }

        return Prop.options;
    };

    Public.ReadyStateChange = function(sendEvent) {
        if (App.xhr.ReadyStateChange) {
            App.xhr.ReadyStateChange(sendEvent);
        }
    };

    Public.NotFoundXHRURL = function(sendEvent) {
        if (App.xhr.NotFoundXHRURL) {
            App.xhr.NotFoundXHRURL(sendEvent);
        }
    };

    Public.requestsObject = function() {
        XHRObject.onreadystatechange = function() {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    Public.ReadyStateChange(this);
                } else {
                    Public.NotFoundXHRURL(this);
                }
            }
        };

        Public.openUrl();
        Public.sendRequest();
    };

    Public.openUrl = function() {
        XHRObject.open('GET', Prop.options.url);

        return true;
    };

    Public.sendRequest = function() {
        XHRObject.send();

        return true;
    };

    Public.init();
}
