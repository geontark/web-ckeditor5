import consts from '../consts';
import UploadAdapter from './UploadAdapter';

/**
 *  커스텀 플로그인을 묶어어 export 해줌
 */

//  에디터에 이미지 파일 첨부시 정해진 url로 이미지 업로드함
function imageUploadAdapter(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        return new UploadAdapter(loader, consts.imageUploadUrl)
    }
}

let customPlugin = Object.freeze({
    imageUploadAdapterPlugin: imageUploadAdapter
});

export default customPlugin;