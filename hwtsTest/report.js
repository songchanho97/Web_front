// PDF변환 파일기능
document.getElementById('convert-pdf-btn').addEventListener('click', () => {
    // PDF로 변환할 HTML 요소 선택
    const element = document.getElementById('article-content');

    // html2pdf 옵션 설정
    const opt = {
        margin:       0,
        filename:     'myfile.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // HTML 요소를 PDF로 변환
     html2pdf().from(element).set(opt).save();
});