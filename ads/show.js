// シンプルな広告配信スクリプト
(function () {
  const adHTML = `
    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
      <img src="https://chikapiyo.github.io/ad-test/Image/flower.png" alt="広告バナー">
    </a>
  `;

  const adSlot = document.getElementById("ad-slot");
  if (adSlot) {
    adSlot.innerHTML = adHTML;
  }
})();
