import LocalStorage from
    'LibrariesPath/Utilities/LocalStorage';

import GeneratePostByStorage from
    'LibrariesPath/Modules/Posts/GeneratePostByStorage';
import GeneratePostByXHR from
    'LibrariesPath/Modules/Posts/GeneratePostByXHR';

export default function TriggerPosts() {
    let Public = this;
    let Flag = true;

    Public.init = function() {
        if (Public.verifyStorage()) {
            Public.generatePost();
        } else {
            /*eslint no-console: ["error", { allow: ["warn"] }] */
            console.warn('something went wrong!!! ' +
                        'Please check if storage is enabled');
        }
    };

    Public.verifyStorage = function() {
        if (typeof(Storage) === 'undefined')
            Flag = false;

        return Flag;
    };

    Public.generatePost = function() {
        if (new LocalStorage().getStoreData('posts').length < 1) {
            new GeneratePostByXHR({
                requestUrl: 'api/posts',
                selectorId: 'blog-posts',
                storageKey: 'posts'
            }).init();
        } else {
            new GeneratePostByStorage({
                selectorId: 'blog-posts',
                storageKey: 'posts'
            }).init();
        }
    };

    Public.init();
}
