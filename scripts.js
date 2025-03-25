// 步驟 1：頁面配置
function setPageLayout() {
    document.getElementById('preview1').innerHTML = '虛線範圍已設定完成！';
    document.getElementById('preview1').style.border = '1px dashed black';
}

// 步驟 2：表格模擬器
const container = document.getElementById('table-simulator');
const hot = new Handsontable(container, {
    data: [
        ['案名', '價格', '地點', '建坪', '格局', '屋齡', '樓層', '描述'],
        ['宜蘭市區邊間三面採光雙拼優質華廈', '750.0', '宜蘭縣宜蘭市建軍路18號7樓', '41.652', '3房2廳2衛', '30.1年', '7樓/共7樓', '']
    ],
    colHeaders: true,
    rowHeaders: true,
    stretchH: 'all',
    colWidths: [200, 80, 200, 80, 100, 80, 80, 150],
    manualColumnResize: true,
    manualRowResize: true
});

// 步驟 3：簡化描述文字
function simplifyText() {
    const input = document.getElementById('description').value;
    const simplified = input.length > 12 ? '單純採光好機能佳' : input; // 模擬 ChatGPT 簡化
    document.getElementById('simplified-text').innerText = `簡化結果：${simplified}`;
    hot.setDataAtCell(1, 7, simplified); // 更新表格描述欄
}

// 步驟 4：調整表格格式
function adjustTable() {
    hot.updateSettings({ autoWrapRow: true });
    alert('已啟用自動換行，請手動拖曳欄寬與列高調整！');
}

// 步驟 5：美化表格
function addBorders(type) {
    const cells = document.querySelectorAll('.htCore td');
    cells.forEach(cell => {
        cell.style.border = type === 'all' ? '1px solid #ccc' : '1px solid #ccc';
    });
    if (type === 'outer') {
        hot.updateSettings({ customBorders: [
            { range: { from: { row: 0, col: 0 }, to: { row: 1, col: 7 } }, top: { width: 2, color: 'black' }, bottom: { width: 2, color: 'black' }, left: { width: 2, color: 'black' }, right: { width: 2, color: 'black' } }
        ]});
    }
}

// 步驟 6：列印與分享
function printPreview() {
    document.getElementById('preview6').innerHTML = '列印預覽：表格已準備好，請檢查範圍！';
}

function copyToClipboard() {
    const tableData = hot.getData();
    const text = tableData.map(row => row.join('\t')).join('\n');
    navigator.clipboard.writeText(text).then(() => alert('已複製到剪貼簿，可貼到 LINE！'));
}
