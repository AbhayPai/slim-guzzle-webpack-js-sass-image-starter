require('SassPath/index.scss');

import BaseController from 'ControllerPath/BaseController';

import TriggerPosts from 'LibrariesPath/Modules/Posts/TriggerPosts';

new BaseController().registerController({
    render: function() {
        new TriggerPosts();
    }
});
