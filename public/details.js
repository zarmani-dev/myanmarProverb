const proverbs = Array.from(document.querySelectorAll("td"))

proverbs.forEach(proverb => {
    proverb.addEventListener("click", () => {
        const titleId = proverb.dataset.titleid;
        const id = proverb.dataset.proverbid;
        window.location.href = `/${titleId}/${id}`;
    })
})