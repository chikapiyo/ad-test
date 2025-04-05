// シンプルな広告配信スクリプト
(function () {
  const adHTML = `
    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
      <img src="https://www.xlsoft.com/jp/products/ispring/suite/index.html?twclid=27fenw4vfi0atmqda5zzw6fnis?text=サンプル広告" alt="広告バナー">
    </a>
  `;

  const adSlot = document.getElementById("ad-slot");
  if (adSlot) {
    adSlot.innerHTML = adHTML;
  }
})();
