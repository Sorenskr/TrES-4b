document.addEventListener('DOMContentLoaded', function() {
    console.log('网站已完全加载和解析。'); // 日志语句
});

function showFeatureDetail(featureName) {
    console.log('显示功能详细信息: ' + featureName); // 日志语句
    alert('了解更多关于 ' + featureName);
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
}
