
//import {CDN_BASE} from '../const/uri';
var CDN_BASE=cdnBase;

export default {
    install(Vue) {
        // 注册一个全局的简单自定义指令 v-src
        // Vue.directive('src', function (el, binding) {
        //     let imgSrc = binding.value;
        //     if (!imgSrc || imgSrc === undefined || imgSrc.length === 0) {
        //         el.src = CDN_BASE + '/static/img/logo.png';
        //     } else if (imgSrc.startsWith('http://') || imgSrc.startsWith('https://') || imgSrc.startsWith('ftp://')) {
        //         el.src = imgSrc;
        //     } else {
        //         if (!imgSrc.startsWith('/')) {
        //             imgSrc = '/' + imgSrc;
        //         }
        //         el.src = CDN_BASE + imgSrc;
        //     }
        // });
        Vue.directive('src', function (el, binding) {
            let imgSrc = binding.value;
            if (!imgSrc || imgSrc === 'undefined' || imgSrc.length === 0) {
                el.src = CDN_BASE + '/static/img/logo.png';
            } else if (imgSrc.indexOf('http://')==0 || imgSrc.indexOf('https://')==0 || imgSrc.indexOf('ftp://')==0) {
                el.src = imgSrc;
            } else {
                if (imgSrc.indexOf('/')!=0) {
                    imgSrc = '/' + imgSrc;
                }
                el.src = CDN_BASE + imgSrc;
            }
        });
        //alert("abcd".startsWith("ab"));  结果是 true
    }
}
