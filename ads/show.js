// シンプルな広告配信スクリプト
(function () {
  const adHTML = `
    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
      <img src="https://chikapiyo.github.io/ad-test/Image/yoshinobu1991_3D_cartoon-style_photo_of_a_big_golden_Tulip_pl_d06e5105-9b16-4060-9697-fcbda07a1113_0.png" alt="広告バナー">
    </a>
  `;

  const adSlot = document.getElementById("ad-slot");
  if (adSlot) {
    adSlot.innerHTML = adHTML;
  }
})();
