exports.onInitialClientRender = () => {
  setTimeout(() => {
    document.querySelector("#___gatsby").classList.add("initialized")
  }, 1000)
}
