import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminMozjpeg from 'imagemin-mozjpeg';


// Đường dẫn đến thư mục chứa hình ảnh gốc và thư mục chứa hình ảnh đã tối ưu
const inputDir = './assets/img/';
const outputDir = './assets/img-optimze/';

// Tối ưu hóa hình ảnh PNG và JPEG
(async () => {
    const files = await imagemin([`${inputDir}/*.png`, `${inputDir}/*.jpg`], {
        destination: outputDir,
        plugins: [
            imageminPngquant({ quality: [0.6, 0.8] }), // Tối ưu hóa hình ảnh PNG với pngquant
            imageminMozjpeg({ quality: 75 }) // Tối ưu hóa hình ảnh JPEG với MozJPEG
        ]
    });

    console.log('Hình ảnh đã được tối ưu hóa:', files);
})();
