/**
 * 파일 업로드 관련 커스텀 어댑터 클래스
 */
class UploadAdapter {
    constructor(loader, domain, url) {
        this.url = url;
        this.domain = domain;
        this.loader = loader;
    }

    upload() {
        return this
            .loader
            .file
            .then(file => new Promise(((resolve, reject) => {
                this._initRequest();
                this._initListeners(resolve, reject, file);
                this._sendRequest(file);
            })))
    }

    _initRequest() {
        const xhr = this.xhr = new XMLHttpRequest();
        xhr.open('POST', this.url, true);
        xhr.responseType = 'json';
    }

    _initListeners(resolve, reject, file) {
        const domian = this.domain;

        const xhr = this.xhr;
        const loader = this.loader;
        const genericErrorText = '파일을 업로드 할 수 없습니다.'

        xhr.addEventListener('error', () => {
            reject(genericErrorText)
        })
        xhr.addEventListener('abort', () => reject())
        xhr.addEventListener('load', () => {
            const response = xhr.response
            console.log(response);
            console.log("response : " + response.url);

            if (!response || response.error) {
                return reject(
                    response && response.error
                        ? response.error.message
                        : genericErrorText
                );
            }

            resolve({
                default:  domian + response.url //업로드된 파일 주소
            })
        })
    }

    _sendRequest(file) {
        const data = new FormData()
        data.append('upload', file)
        this
            .xhr
            .send(data)
    }
}

export default UploadAdapter;