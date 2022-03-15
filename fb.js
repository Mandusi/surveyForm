// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
   apiKey: 'AIzaSyB6F68RRqLz4HbaaqKsAM1dtDrl9IheptY',
   authDomain: 'localhost',
   projectId: 'survey-edd90',
})

const db = firebase.firestore()

async function getResults() {
   const hold = []
   const data = await db.collection('submissions').get()
   data.forEach((doc) => hold.push(doc.data()))
   return hold
}

async function submit(data) {
   await db.collection('submissions').add(data)
}
