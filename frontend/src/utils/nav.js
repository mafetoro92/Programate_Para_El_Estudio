export const showLogo = () => {
    const logo = document.querySelector("#logo");
    if(logo){
        logo.style.width = "240px";
    }
};

export const hideLogo = () => {
  const logo = document.querySelector("#logo");
  if(logo){
      logo.style.width = "70px";
  }
};