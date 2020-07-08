import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';     
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';

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
ClassicEditor
    .create( document.querySelector( '#editor' ), 
    {
        plugins: [ Heading, Link, List, Essentials, Paragraph, Bold, Italic, Alignment, CodeBlock,Image, ImageCaption,ImageStyle, ImageUpload, ImageToolbar, ImageResize, Table, TableToolbar, TextTransformation, PasteFromOffice, MediaEmbed, BlockQuote, Indent ],     // <--- MODIFIED
        toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'alignment', 'bulletedList', 'numberedList', '|', 'indent', 'outdent', '|', 'codeBlock', 'imageUpload', 'blockQuote', 'insertTable', 'mediaEmbed', 'undo', 'redo'],                       // <--- MODIFIED
        extraPlugins: [customPlugin.imageUploadAdapterPlugin],
    })
    .then( newEditor => {
        console.log( 'Editor was initialized', newEditor );
    } )
    .catch( error => {
        console.error( error.stack );
    } );


  