const proverbs = Array.from(document.querySelectorAll("td"))
const prevPage = document.querySelector("#prevPage");

proverbs.forEach(proverb => {
    proverb.addEventListener("click", () => {
        const titleId = proverb.dataset.titleid;
        const id = proverb.dataset.proverbid;
        window.location.href = `/${titleId}/${id}`;

       
    })
})

 // For Prev Page
 prevPage.addEventListener("click", () => {
    window.location.href = `/`
})