export const watchlist = (user, listItem) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();

    let newList = []
    firestore.collection('users').doc(user).get().then((doc) => {
      console.log("CurrentLIst", doc.data().watchList)
      newList = doc.data().watchList
      newList.push(listItem)
    }).then(() => {
      firestore.collection('users').doc(user).set({
          watchList: newList
        }, { merge: true }).then(() => {
        dispatch({ type: 'WATCHLIST_SUCCESS' })
      }).catch(err => {
        dispatch({ type: 'WATCHLIST_ERROR', err })
      })
    })
  }
}

export const removeWatchlist = (user, listItem) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();

    let currentList = []
    firestore.collection('users').doc(user).get().then((doc) => {
      currentList = doc.data().watchList
      currentList.splice(listItem, 1)
    }).then(() => {
      firestore.collection('users').doc(user).set({
          watchList: currentList
        }, { merge: true }).then(() => {
        dispatch({ type: 'WATCHLIST_SUCCESS' })
      }).catch(err => {
        dispatch({ type: 'WATCHLIST_ERROR', err })
      })
    })
  }
}
