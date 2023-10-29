const alphabets = Array.from(document.querySelectorAll("td"));

alphabets.forEach(alphabet => {
    alphabet.addEventListener("click", () => {
        const id = alphabet.dataset.id;
        window.location.href = `/${id}`
    })
})