// シンプルな広告配信スクリプト
(function () {
  const adHTML = `
    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
      <img src="https://x.com/tegnike/status/1908245228672430384/photo/1?text=サンプル広告" alt="広告バナー">
    </a>
  `;

  const adSlot = document.getElementById("ad-slot");
  if (adSlot) {
    adSlot.innerHTML = adHTML;
  }
})();
