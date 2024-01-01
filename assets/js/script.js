const rmBtn = document.querySelector(".rm-btn");
const rmModal = document.getElementById("read-more-modal");
const closeBtn = document.querySelector(".close-btn");

console.log('11');

rmBtn.addEventListener('click',()=>{
    rmModal.style.display = 'block';
})

closeBtn.addEventListener('click',()=>{
    rmModal.style.display = 'none';
})


const scrollLinks = document.querySelectorAll(".sec-anc")

/*scrollLinks.forEach(link =>{
    link.addEventListener('click', ()=>{
    const tragetSectionId = link.getAttribute('href').substring(1);
    console.log(tragetSectionId);
    const targetSection = document.getElementById('targetSectionId');
        console.log(targetSection);
    targetSection.scrollIntoView({behavior:'smooth', block: "end", inline: "nearest"});
    })

})*/

const toTop = document.querySelector(".to-top")

window.addEventListener('scroll',() =>{
    if(window.pageYOffset > 200){
        toTop.classList.add('to-top-active');
    } else {
        toTop.classList.remove('to-top-active');
    }
})



function handleMediaQuery(mediaQuery) {
    // Get the parent and child elements
    const parent = document.querySelector('.header');
    const child = document.querySelector('.menu');
  
    // Check if the parent and child elements exist
    if (parent && child) {
      // Get the body element
      const body = document.body;
  
      // Remove the child from its current parent
      parent.removeChild(child);
  
      // Append the child directly to the body
      body.appendChild(child);
  
      // Apply the fixed positioning to the child
      child.style.position = 'fixed';
      child.style.top = '0';
      child.style.right = '0';
      child.style.bottom = '0';
      child.style.left = '0';
    }
  }
  
  // Check the initial width on page load
  const initialMediaQuery = window.matchMedia('(max-width: 35rem)');
  handleMediaQuery(initialMediaQuery);
  
  // Add a listener to handle changes in the media query
  window.addEventListener('resize', () => {
    const updatedMediaQuery = window.matchMedia('(max-width: 35rem)');
    handleMediaQuery(updatedMediaQuery);
  });