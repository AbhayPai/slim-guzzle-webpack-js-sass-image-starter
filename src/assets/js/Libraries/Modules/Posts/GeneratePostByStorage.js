import LocalStorage from 'LibrariesPath/Utilities/LocalStorage';
import CreateView from 'LibrariesPath/Utilities/CreateView';

export default function GeneratePostByStorage(config) {
    let Public = this;

    Public.init = function() {
        new CreateView({
            selector: document.getElementById(config.selectorId),
            selectorId: 'blog-posts',
            templateName: 'post-zigzag',
            data: new LocalStorage().getStoreData(config.storageKey),
        }).init();
    };
}
