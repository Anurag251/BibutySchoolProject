document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");
  const percentageDisplay = document.getElementById("percentage");
  let progress = 0;

  function updateLoader() {
    loader.style.borderTopColor = `transparent transparent transparent #3498db`;
    loader.style.transform = `rotate(${progress}deg)`;
    percentageDisplay.innerText = `${Math.round(progress)}%`;
  }

  function loadingAnimation() {
    if (progress < 100) {
      progress += 1;
      updateLoader();
      setTimeout(loadingAnimation, 20);

      simulatePageLoad();
    } else {
      document.querySelector(".loader-container").style.display = "none";
    }
  }

  function simulatePageLoad() {
    const images = document.images;
    const totalImages = images.length;

    let loadedImages = 0;
    for (const image of images) {
      if (image.complete) {
        loadedImages++;
      }
    }

    const imageLoadProgress = (loadedImages / totalImages) * 100;

    progress = imageLoadProgress;
  }

  loadingAnimation();
});

// side nav
const sideNavButton = document.querySelector(".side-nav-button");
const sideNav = document.querySelector(".side-nav");
const sideNavBg = document.querySelector(".side-nav-bg");
const sideNavClose = document.querySelector(".side-nav-close");
const sideNavItems = document.querySelectorAll(".side-nav .nav-button");

sideNavButton.addEventListener("click", () => {
  sideNav.classList.add("active");
});

const closeSideNav = () => {
  sideNav.classList.remove("active");
};

sideNavClose.addEventListener("click", closeSideNav);
sideNavBg.addEventListener("click", closeSideNav);

sideNavItems.forEach((sideNavItem) => {
  sideNavItem.addEventListener("click", closeSideNav);
});

// filter food menu
$(document).ready(function () {
  $(".food-menu-item").not(".DataBreakfast").hide("1000");
});

$(document).ready(function () {
  $(".food-menu-area .food-menu-categories li").click(function () {
    const value = $(this).attr("data-filters");

    $(".food-menu-item")
      .not("." + value)
      .hide("1000");
    $(".food-menu-item")
      .filter("." + value)
      .show("1000");
  });

  $(".food-menu-area .food-menu-categories li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});

// dynamic color
const colorCode = document.getElementById("colorCode");
function hexToRgb(hex) {
  hex = hex.replace(/^#/, "");
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `${r}, ${g}, ${b}`;
}

const priColor = colorCode.getAttribute("primaryColor");
const secColor = colorCode.getAttribute("secondaryColor");
const priRGB = hexToRgb(priColor);
const secRGB = hexToRgb(secColor);

document.documentElement.style.setProperty("--pri", priColor);
document.documentElement.style.setProperty("--swiper-theme-color", priColor);
document.documentElement.style.setProperty("--sec", secColor);
document.documentElement.style.setProperty("--prirgb", priRGB);
document.documentElement.style.setProperty("--secrgb", secRGB);

// video Popup
const videoPopup = document.querySelector(".video-popup");
const videoPopupOpen = document.querySelector(".video-play-button");
const videoPopupBg = document.querySelector(".popup-bg");
const videoPopupClose = document.querySelector(".popup-close");

if (videoPopup) {
  videoPopupOpen.addEventListener("click", () => {
    videoPopup.classList.add("active");
    videoPopup.querySelector("iframe").style.display = "block";
  });

  videoPopupBg.addEventListener("click", () => {
    videoPopup.classList.remove("active");
    videoPopup.querySelector("iframe").style.display = "none";
  });

  videoPopupClose.addEventListener("click", () => {
    videoPopup.classList.remove("active");
    videoPopup.querySelector("iframe").style.display = "none";
  });
}

// input shring code
let formInputLabels = document.querySelectorAll(".form-input-label");
let customInputs = document.querySelectorAll(
  ".admission-section .custom-input"
);
let customInputLabels = document.querySelectorAll(
  ".admission-section .form-input-label"
);

if (customInputs.length) {
  customInputs.forEach((customInput, idx) => {
    if (customInput.value.length) {
      customInputLabels[idx].classList.add("shrink");
    }
  });
}

const getData = (data) => {
  formInputLabels.forEach((formInputLabel, idx) => {
    let dataAttributeName = data.getAttribute("name");
    let labelAttributeName = formInputLabel.getAttribute("for");

    if (dataAttributeName === labelAttributeName) {
      if (data.getAttribute("name") === dataAttributeName) {
        if (data.value.length) {
          formInputLabel.classList.add("shrink");
        } else {
          formInputLabel.classList.remove("shrink");
        }
      }
    }
  });
};

// upload image
const uploadPersoalImageButton = document.querySelector("#UploadPhoto");
const uploadPersoalImageInput = document.querySelector(
  "#UploadPhoto .custom-input"
);

const uploadPersoalImage = document.querySelector("#UploadPhoto img");

if (uploadPersoalImageButton) {
  uploadPersoalImageButton.addEventListener("click", () => {
    uploadPersoalImageInput.click();
  });

  uploadPersoalImageInput.addEventListener("change", function () {
    uploadPersoalImageButton.classList.add("active");
    const selectedFile = uploadPersoalImageInput.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = function (e) {
        uploadPersoalImage.src = e.target.result;
      };

      reader.readAsDataURL(selectedFile);
    } else {
      // Clear the image preview if no file is selected
      uploadPersoalImage.src = "";
    }
  });
}

// schoolVehicle
const schoolVehicle = document.querySelector("#schoolVehicle");
if (schoolVehicle) {
  const schoolVehicleChoosed = document.querySelector("#schoolVehicleChoosed");
  const schoolVehicleYes = schoolVehicle.querySelector(
    "#schoolVehicleYesButton"
  );
  const schoolVehicleNo = schoolVehicle.querySelector("#schoolVehicleNoButton");

  schoolVehicleYes.addEventListener("click", () => {
    schoolVehicleChoosed.style.display = "flex";
  });

  schoolVehicleNo.addEventListener("click", () => {
    schoolVehicleChoosed.style.display = "none";

    const radioInputs = document.getElementsByName("schoolVehicleYes");

    for (var i = 0; i < radioInputs.length; i++) {
      radioInputs[i].checked = false;
    }
  });
}

// converting event date formate
// function formatDate(inputDate) {
//   const [day, month, year] = inputDate.split("/");
//   const monthNames = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];
//   return `${day} ${monthNames[parseInt(month, 10) - 1]} ${year}`;
// }

// const dateElements = document.querySelectorAll(".date span");

// dateElements.forEach(function (dateElement) {
//   const originalDate = dateElement.textContent;
//   const formattedDate = formatDate(originalDate);
//   dateElement.textContent = formattedDate;
// });
