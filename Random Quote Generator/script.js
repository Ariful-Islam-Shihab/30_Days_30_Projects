const quote=document.getElementById('quote')
const author=document.getElementById('author')
document.getElementById('new').addEventListener('click',getRandomAyah)
document.getElementById('tweet').addEventListener('click',tweet)
async function getRandomAyah() {
    const totalAyahs = 6236;
    const randomAyah = Math.floor(Math.random() * totalAyahs) + 1;
    const url = `https://api.alquran.cloud/v1/ayah/${randomAyah}/en.asad`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        quote.innerHTML=data.data.text
        author.innerHTML=`${data.data.surah.englishName} - ${data.data.numberInSurah}`
    } catch (err) {
        console.error("Failed to fetch Quran verse:", err);
    }

}

getRandomAyah();
function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+'"'+quote.innerHTML+'"'+', '+author.innerHTML,'tweet window','width=600, height=300')
}