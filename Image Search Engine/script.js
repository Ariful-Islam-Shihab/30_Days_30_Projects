const searchForm=document.getElementById('search-form') 
const searchBox=document.getElementById('search-box')
const searchResult=document.getElementById('search-results')
const showMorebtn=document.getElementById('show-more-btn')
let keyword=''
let page=1
const accessKey='WBTDsmdJqPYX3fmneAIQ2uBVqnuVdViKqTZqBMdmFRs'
async function searchImage() {
    keyword=searchBox.value
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`
    const response=await fetch(url)
    const data=await response.json()
    const results=data.results
    if(page==1){
        searchResult.innerHTML=''
    }
    results.map((results)=>{
        const image=document.createElement('img')
        image.src=results.urls.small
        const imageLink=document.createElement('a')
        imageLink.href=results.links.html
        imageLink.target='_blank'
        imageLink.appendChild(image)
        searchResult.appendChild(imageLink)
    })
    showMorebtn.style.display='block'

}
searchForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    page=1
    searchImage()
})
showMorebtn.addEventListener('click',()=>{
    page++;
    searchImage()
})