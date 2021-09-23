
import "./src/styles/grid.scss"
import "./src/styles/typography.scss"
import "./src/styles/elements.scss"

export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
      `We've updated! ` +
        `Do you want to reload and check it out?`
    )
    if (answer === true) {
      window.location.reload()
    }
  }