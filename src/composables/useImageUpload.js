import { ref, watch } from "vue";

let useImageUpload = _ => {
    let imageFile = ref('');
    let imageUrl = ref('');

    let handleImageSelected = event => {
        if (event.target.files.length === 0) {
            imageFile.value = '';
            imageUrl.value = '';
            return;
        }
        imageFile.value = event.target.files[0];
    }

    //watch imagefile and show this image
    watch(imageFile, () => {
        //if imagefile is not include
        if (!(imageFile.value instanceof File)) {
            return;
        }
        let fileReader = new FileReader();

        fileReader.readAsDataURL(imageFile.value);

        fileReader.addEventListener('load', () => {
            imageUrl.value = fileReader.result; //return base64 encoded file
        })
    })

    return { imageFile, imageUrl, handleImageSelected };
}

export default useImageUpload;