import XHR from 'LibrariesPath/Utilities/XHR';
import LocalStorage from 'LibrariesPath/Utilities/LocalStorage';
import CreateView from 'LibrariesPath/Utilities/CreateView';

export default function GeneratePostByXHR(config) {
    let Public = this;

    Public.init = function() {
        new XHR({
            url: config.requestUrl
        });

        App.xhr.ReadyStateChange = function(rcvdEvent) {
            new CreateView({
                selector: document.getElementById(config.selectorId),
                selectorId: 'blog-posts',
                templateName: 'post-zigzag',
                data: rcvdEvent.responseText,
            }).init();

            new LocalStorage().setStoreData(config.storageKey,
                rcvdEvent.responseText);
        };
    };
}
