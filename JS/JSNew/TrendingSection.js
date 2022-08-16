const nodoCarousel = document.querySelector(".ctn-slide");
let leftarrow = document.getElementById("left-arrow");
let rightarrow = document.getElementById("right-arrow");
let rowCarousel = document.querySelector(".carousel");

/* rightarrow.addEventListener ('click', () => {
    rowCarousel.scrollLeft += rowCarousel.offsetWidth;
  });
  
leftarrow.addEventListener ('click', () => {
    rowCarousel.scrollLeft -= rowCarousel.offsetWidth;
    
}); */

const CarouselDataFetch = new FetchData({
    link:"https://api.giphy.com/v1/gifs/trending?api_key="
});

const CarouselGiphy = new BuildGiphyBasic({
    nodo:nodoCarousel,
    tipo:"trending"
});

const trendingSection = async ()=>{
    const data = await CarouselDataFetch.fetchApi();
    CarouselGiphy.giphyData(data);
}; 

trendingSection();  

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      590: {
        slidesPerView: 2,
        spaceBetween: 16,
        slidesPerGroup: 2,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 16,
        slidesPerGroup: 3,
      },
    }
  });