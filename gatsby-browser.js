const React = require("react")
const handleLoader = require("./src/components/Loader/Loader").handleLoader

exports.onPreRouteUpdate = () => {
  handleLoader.initLoader()
}

exports.onInitialClientRender = () => {
  setTimeout(() => {
    document.querySelector("#___gatsby").classList.add("initialized")
  }, 1000)
}
