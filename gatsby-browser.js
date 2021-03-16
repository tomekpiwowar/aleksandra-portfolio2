const handleLoader = require("./src/components/Loader/Loader").handleLoader

exports.onClientEntry = () => {
  const signatureStyle = `color:#fff; background-color:#5a4afb; padding:10px 15px; font-size:14px; border-radius:20px;`
  const signatureText = "%c✨ Designed & Dev by Tomek Piwowar ✨"
  console.log(signatureText, signatureStyle)

  handleLoader.initLoader()
}

exports.onRouteUpdate = () => {
  handleLoader.initLoader()
}

exports.onRouteUpdateDelayed = () => {
  handleLoader.initLoader()
}

exports.onInitialClientRender = () => {
  setTimeout(() => {
    document.querySelector("#___gatsby").classList.add("initialized")
  }, 1000)
}
