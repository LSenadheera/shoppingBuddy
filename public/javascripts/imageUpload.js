/**
 * Created by Lahiru Senadheera on 4/30/2017.
 */
var CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/lahiru/upload";
var CLOUDINARY_UPLOAD_PRESET = "nbmv7ckx";
var itemImage = document.getElementById('item-image');
var fileUpload = document.getElementById('item-image-upload');

fileUpload.addEventListener('change', function (event) {
    var file = event.target.files[0];
    var formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    axios({
        url: CLOUDINARY_URL,
        method: "POST",
        headers:{'Content-Type': 'application/x-www-form-urlencoded'},
        data: formData
    }).then(function (res) {
        itemImage.src = res.data.secure_url;
        document.getElementById("item_image").value = document.getElementById('item-image').src;
    });

});
