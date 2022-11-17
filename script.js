const wrapper = document.querySelector('.wrapper');
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const a = document.querySelector('a');

const button = document.querySelector('button');

alert('Proqram test merhelesindedir. Duzgun netice ucucn axtaris yerine max 1 ingilisce soz yazmaginiz teklif olunur. Proqram avtomatik xeberleri yenileyir.')

fetch('https://content.guardianapis.com/search?page=4&page-size=5&api-key=23be7ca1-3c45-4363-9d2f-9cc3d423b183')
    .then((res) => res.json())
    .then((data) => {
        data.response.results.forEach((obj) => {
            wrapper.innerHTML += `
            <div class="news-card">
                <h1>${obj.webTitle}</h1>
                <div class="inline">
                    <p>${obj.sectionName}</p>
                    <a target="_blank" href=${obj.webUrl}>Direct Link 🔗</a>
                </div>      
            </div>`
        })
    })

// fetch('https://content.guardianapis.com/search?q=nature&api-key=23be7ca1-3c45-4363-9d2f-9cc3d423b183')
// .then((res) => res.json())
// .then((data) => {
//     console.log(data.response.results)
// })
let pageNumber = 5
// const loadSomeNews = () => {
//     const NEWS_URL = `https://content.guardianapis.com/search?page=${pageNumber}&page-size=5&api-key=23be7ca1-3c45-4363-9d2f-9cc3d423b183`;
//     fetch(NEWS_URL)
//         .then(res => res.json())
//         .then((data) => {
//             data.response.results.forEach((obj) => {
//                 wrapper.innerHTML += `
//             <div class="news-card">
//                 <h1>${obj.webTitle}</h1>
//                 <div class="inline">
//                     <p>${obj.sectionName}</p>
//                     <a target="_blank" href=${obj.webUrl}>Direct Link 🔗</a>
//                 </div>      
//             </div>`
//                 pageNumber++;
//             })
//         })
// }

// button.addEventListener('click', () => {
//     pageNumber++;
//     loadSomeNews();
// })

const searchBtn = document.querySelector('.search-icon')
const searchQuest = document.querySelector('.search')

// const questSearch = () => {
//     const NEWS_URL = `https://content.guardianapis.com/search?q=${searchQuest}&page=${pageNumber}&page-size=5&api-key=23be7ca1-3c45-4363-9d2f-9cc3d423b183`;
//     fetch(NEWS_URL)
//         .then(res => res.json())
//         .then((data) => {
//             data.response.results.forEach((obj) => {
//                 wrapper.innerHTML += `
//             <div class="news-card">
//                 <h1>${obj.webTitle}</h1>
//                 <div class="inline">
//                     <p>${obj.sectionName}</p>
//                     <a target="_blank" href=${obj.webUrl}>Direct Link 🔗</a>
//                 </div>      
//             </div>`
//                 pageNumber++;
//             })
//         })

// }

searchBtn.addEventListener('click', () => {
    console.log(searchQuest.value)
    const questSearch = () => {
        const NEWS_URL = `https://content.guardianapis.com/search?q=${searchQuest.value}&page=${pageNumber}&page-size=5&api-key=23be7ca1-3c45-4363-9d2f-9cc3d423b183`;
        fetch(NEWS_URL)
            .then(res => res.json())
            .then((data) => {
                data.response.results.forEach((obj) => {
                    wrapper.innerHTML += `
            <div class="news-card">
                <h1>${obj.webTitle}</h1>
                <div class="inline">
                    <p>${obj.sectionName}</p>
                    <a target="_blank" href=${obj.webUrl}>Direct Link 🔗</a>
                </div>      
            </div>`
                    // pageNumber++;
                })

            })
            .catch((err) => {
                return err.message;
            })

    }

    // const loadSomeQuestNews = () => {
    //     const NEWS_URL = `https://content.guardianapis.com/search?q=${searchQuest.value}&page=${pageNumber = 23}&page-size=5&api-key=23be7ca1-3c45-4363-9d2f-9cc3d423b183`;
    //     fetch(NEWS_URL)
    //         .then(res => res.json())
    //         .then((data) => {
    //             data.response.results.forEach((obj) => {
    //                 wrapper.innerHTML += `
    //         <div class="news-card">
    //             <h1>${obj.webTitle}</h1>
    //             <div class="inline">
    //                 <p>${obj.sectionName}</p>
    //                 <a target="_blank" href=${obj.webUrl}>Direct Link 🔗</a>
    //             </div>      
    //         </div>`
    //                 pageNumber++;
    //             })
    //         })
    // }

    questSearch();
    // button.addEventListener('click',()=>{
    //     loadSomeQuestNews();
    //     pageNumber++;
    // })
    pageNumber++
})

const loadSomeQuestNews = () => {
        const NEWS_URL = `https://content.guardianapis.com/search?q=${searchQuest.value}&page=${pageNumber}&page-size=5&api-key=23be7ca1-3c45-4363-9d2f-9cc3d423b183`;
        fetch(NEWS_URL)
            .then(res => res.json())
            .then((data) => {
                data.response.results.forEach((obj) => {
                    wrapper.innerHTML += `
            <div class="news-card">
                <h1>${obj.webTitle}</h1>
                <div class="inline">
                    <p>${obj.sectionName}</p>
                    <a target="_blank" href=${obj.webUrl}>Direct Link 🔗</a>
                </div>      
            </div>`
                    pageNumber++;
                })
            })
    }

button.addEventListener('click', () => {
    loadSomeQuestNews();
    pageNumber++;
})
