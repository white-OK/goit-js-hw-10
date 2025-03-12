import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".form");
function createPromise(delay, state) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfilled") {
                resolve(delay);
            } else {
                reject(delay)
            }
        }, delay)
    });
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const delay = form.elements.delay.value;
    const state = form.elements.state.value;
    createPromise(delay, state).then(delay =>
        iziToast.success({
            title: 'OK',
            message: `✅ Fulfilled promise in ${delay}ms`,
        })).catch(delay =>
            iziToast.error({
                title: 'Error',
                message: `❌ Rejected promise in ${delay}ms`,
            }));
});


