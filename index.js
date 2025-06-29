const words = ['Frontend Developer ', 'Problem Solver', 'React Enthusiast'];
  let i = 0;
  let j = 0;
  let currentWord = '';
  let isDeleting = false;
  const speed = { type: 70, delete: 50, delay: 1500 };

  function type() {
    const element = document.getElementById('typewriter');

    if (i >= words.length) i = 0; // Loop

    currentWord = words[i];

    if (isDeleting) {
      element.textContent = currentWord.substring(0, j--);
    } else {
      element.textContent = currentWord.substring(0, j++);
    }

    let timeout = isDeleting ? speed.delete : speed.type;

    if (!isDeleting && j === currentWord.length) {
      timeout = speed.delay;
      isDeleting = true;
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i++;
      timeout = 500;
    }

    setTimeout(type, timeout);
  }

  type();
  // hamburger for small screens
  function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// card animation observation

const cards=document.querySelectorAll('.card')

const observer=new IntersectionObserver((entries)=>{
 entries.forEach((entry)=>{
if(entry.isIntersecting){
  entry.target.classList.add('animate')
  
}
else {
      entry.target.classList.remove('animate');
    }
 })
},{threshold:0.2});
cards.forEach((card)=>{
  observer.observe(card)
})
const skills=document.querySelectorAll('.skill')
skills.forEach((skill)=>{
  observer.observe(skill)
})

// validate form
function validateForm() {
  const name = document.getElementById("clientname").value.trim();
  const email = document.getElementById("clientemail").value.trim();

  if (name === "" || email === "") {
    alert("Please fill out all required fields.");
    return false;
  }
  return true;
}
