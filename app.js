import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';     
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';

// image
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import customPlugin from './custom_plugin';

/**
 *  에디터를 관리하기위한 파일
 *  에디터에 플러그인을 추가하거나 제거할수 있는등 다양한 조정 가능함
 */

// let editor;
ClassicEditor
    .create( document.querySelector( '#editor' ), 
    {
        plugins: [ Essentials, Paragraph, Bold, Italic, Alignment, CodeBlock,Image, ImageCaption,ImageStyle, ImageUpload, ImageToolbar, ImageResize ],     // <--- MODIFIED
        toolbar: [ 'bold', 'italic', 'alignment', 'codeBlock','imageUpload' ],                       // <--- MODIFIED
        extraPlugins: [customPlugin.imageUploadAdapterPlugin],
    })
    .then( newEditor => {
        console.log( 'Editor was initialized', newEditor );
    } )
    .catch( error => {
        console.error( error.stack );
    } );


  