// Tim Simpson 2026

// Adds triangle to the frame when frame is selected by user

const geometryFrame = document.getElementById("geometry-frame");

geometryFrame.addEventListener("click", () =>{
    geometryFrame.classList.toggle("selected");
});


 // Calender

const datePicker = document.getElementById("datePicker");
const dateOutput = document.getElementById("dateOutput");

datePicker.addEventListener("change", () =>{
    if (!datePicker.value){
        dateOutput.textContent ="";
        return;
    }
    const [year,month,day] = datePicker.value.split("-");
    const formatted = `${month}/${day}/${year}`;
    dateOutput.textContent = `You picked the date : ${formatted}`;
});

// Allows the image to change and have an outline

const frameImg = document.getElementById("frameImage");
const imgHolder = frameImg.parentElement;

frameImg.addEventListener("click", () => {
    imgHolder.classList.toggle("framed");
});