import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';

// Hàm tối ưu hóa hình ảnh PNG
function optimizePNGImages() {
    imagemin(['./assets/img/00 TERO.png'], './assets/img/optimize', {
        use: [
            imageminPngquant({
                quality: [0.6, 0.8] // Thiết lập chất lượng ảnh tối thiểu và tối đa
            })
        ]
    }).then(function (files) {
        console.log('Hình ảnh đã được tối ưu hóa:', files);
    }).catch(function (error) {
        console.error('Lỗi khi tối ưu hóa hình ảnh:', error);
    });
}

// Gọi hàm tối ưu hóa hình ảnh PNG
optimizePNGImages();