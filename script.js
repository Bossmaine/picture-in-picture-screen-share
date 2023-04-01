const getVideo = document.getElementById('video');
const getButton = document.getElementById('button');

async function startCapture(displayMediaOptions) {
    try {
      const captureStream = await navigator.mediaDevices.getDisplayMedia()
        getVideo.srcObject = captureStream;
        getVideo.onloadedmetadata = () => {
            getVideo.play();
        }
      ;
    } catch (err) {
      alert(`Error: ${err}`);
    }
}

getButton.addEventListener('click', async () => {
    getButton.disabled = true;
    await getVideo.requestPictureInPicture();
    getButton.disabled; false;
})  

startCapture()