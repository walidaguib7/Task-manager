
import { User, updateProfile } from "@firebase/auth";
import { ref, UploadTaskSnapshot, getDownloadURL, getStorage, uploadBytesResumable } from "@firebase/storage";
import { dataURLToBlob } from "blob-util";
// import { CategoryTypes } from "@/components/Tasks/TaskTypes";
// import { collection, collection, collection } from 'firebase/firestore'


import html2canvas from 'html2canvas';


export const CreateUserImage = async (user: User) => {

    // Create container before extracting to PNG
    const container = document.createElement('div');
    const content = document.createElement('div')

    const TextContentEl = document.createElement('span')
    const Textcontent = document.createTextNode(user?.email?.slice(0, 2) || '');

    content.setAttribute('class', 'UserImage');
    container.setAttribute('class', 'MyContainer')

    container.appendChild(content);
    content.appendChild(TextContentEl);
    TextContentEl.appendChild(Textcontent)

    document.body.append(container)

    // Capture the div and convert it to an image
    const canvas = await html2canvas(container);
    // Use await for async operation

    // Convert canvas to image/png
    const imageData = canvas.toDataURL('image/png');

    // Now you have the image data (base64 encoded string)
    return imageData;
};

export const handleUserImage = async (user: User) => {
    // initializeApp();
    const storage = getStorage();
    try {
        if (!user?.photoURL) {
            // Check for empty photoURL using logical NOT
            const image = await CreateUserImage(user);
            const blob = dataURLToBlob(image);
            const fileRef = ref(storage, `images/${user.uid}.png`);

            const upload = uploadBytesResumable(fileRef, blob);

            upload.on("state_changed", async (snapshot: UploadTaskSnapshot) => {
                // Use 'snapshot' argument for progress and errors
                if (snapshot.state === "success") {
                    const downloadURL = await getDownloadURL(fileRef);
                    await updateProfile(user, { photoURL: downloadURL });
                }
                console.log(snapshot); // Log progress and errors
            });

        }
    } catch (error) {
        console.error("Error handling user image:", error);
    }
};



// export const Add_Category = async (category: CategoryTypes) => {

// }