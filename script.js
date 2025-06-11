function compressImage() {
  const fileInput = document.getElementById("imageInput");
  const qualityInput = document.getElementById("quality");
  const compressedImg = document.getElementById("compressedImage");
  const downloadLink = document.getElementById("downloadLink");

  if (!fileInput.files.length) {
    alert("Please select an image.");
    return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    const img = new Image();
    img.src = event.target.result;

    img.onload = function () {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      const quality = parseFloat(qualityInput.value) || 0.7;
      const compressedDataUrl = canvas.toDataURL("image/jpeg", quality);

      compressedImg.src = compressedDataUrl;
      downloadLink.href = compressedDataUrl;
    };
  };

  reader.readAsDataURL(file);
}
