const nama = "Mohd. Abdul Ghani"
let umur = 30
let biodata = document.getElementById('biodata')
let introduction = document.getElementById('introduction')

generateBiodata()
generateIntro()

function generateIntro() {
  return introduction.innerHTML= 'nama saya adalah'+nama+'dan say berusia'+umur
}

function generateBiodata() {
  let golongan
  if (umur == 30) {
    golongan='Dewasa'
  } else {
    golongan='Anomali'
  }
  console.log(`Nama saya adalah ${nama} dan saya berusia ${umur} tahun`)
  return biodata.innerHTML = 'Saya berada digolongan '+golongan
}
